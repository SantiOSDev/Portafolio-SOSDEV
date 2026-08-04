import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Locale = "es" | "en";

const SERVICE_LABELS = {
  landing: { es: "Landing page", en: "Landing page" },
  ecommerce: { es: "Ecommerce", en: "Ecommerce" },
  web_app: { es: "Aplicación web o MVP", en: "Web application or MVP" },
  sales_automation: {
    es: "Sistema para ventas",
    en: "Sales system",
  },
  automation_ai: {
    es: "Automatización e IA",
    en: "Automation and AI",
  },
  infrastructure: {
    es: "Infraestructura digital",
    en: "Digital infrastructure",
  },
  consulting: {
    es: "Consultoría tecnológica",
    en: "Technology consulting",
  },
  other: { es: "Otra necesidad", en: "Another need" },
} as const;

type ServiceId = keyof typeof SERVICE_LABELS;

const PAGE_IDS = new Set([
  "home",
  "services",
  "ecommerce",
  "sales",
  "automations",
  "pricing",
  "faq",
  "contact",
]);

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  consent?: unknown;
  locale?: unknown;
  page?: unknown;
};

type ContactErrorCode =
  | "INVALID_FORM"
  | "TOO_LARGE"
  | "RATE_LIMITED"
  | "SMTP_UNAVAILABLE"
  | "SEND_FAILED";

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const MAX_BODY_BYTES = 24 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_MAX_ENTRIES = 5_000;
const RATE_LIMIT_CLEANUP_INTERVAL_MS = 60 * 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const JSON_CONTENT_TYPE = "application/json";
const PRODUCTION_ORIGINS = new Set([
  "https://sosdev.com.co",
  "https://www.sosdev.com.co",
]);
const DEVELOPMENT_ORIGINS = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
]);
const NO_STORE_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
};

const rateLimits = new Map<string, RateLimitEntry>();
let nextRateLimitCleanupAt = 0;

function successResponse() {
  return NextResponse.json(
    { ok: true as const },
    { status: 200, headers: NO_STORE_HEADERS },
  );
}

function errorResponse(
  code: ContactErrorCode,
  status: number,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(
    { ok: false as const, code },
    {
      status,
      headers: {
        ...NO_STORE_HEADERS,
        ...headers,
      },
    },
  );
}

function cleanSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength)
    .trim();
}

function cleanMultiline(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLength)
    .trim();
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}

function isServiceId(value: string): value is ServiceId {
  return Object.prototype.hasOwnProperty.call(SERVICE_LABELS, value);
}

function normalizeOrigin(value: string) {
  try {
    const url = new URL(value);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
}

function getConfiguredOrigins() {
  return (process.env.CONTACT_ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => normalizeOrigin(origin.trim()))
    .filter((origin): origin is string => Boolean(origin));
}

function hasAllowedOrigin(request: NextRequest) {
  const originHeader = request.headers.get("origin");

  if (!originHeader) {
    return process.env.NODE_ENV !== "production";
  }

  const origin = normalizeOrigin(originHeader);

  if (!origin) {
    return false;
  }

  if (PRODUCTION_ORIGINS.has(origin)) {
    return true;
  }

  if (
    process.env.NODE_ENV !== "production" &&
    DEVELOPMENT_ORIGINS.has(origin)
  ) {
    return true;
  }

  return getConfiguredOrigins().includes(origin);
}

function hasJsonContentType(request: NextRequest) {
  const contentType = request.headers
    .get("content-type")
    ?.split(";", 1)[0]
    ?.trim()
    .toLowerCase();

  return contentType === JSON_CONTENT_TYPE;
}

function getDeclaredBodyLength(request: NextRequest) {
  const contentLength = request.headers.get("content-length");

  if (contentLength === null) {
    return null;
  }

  if (!/^\d+$/.test(contentLength)) {
    return Number.NaN;
  }

  return Number(contentLength);
}

async function readBodyWithinLimit(request: NextRequest) {
  if (!request.body) {
    return { tooLarge: false as const, text: "" };
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let totalBytes = 0;
  let text = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    totalBytes += value.byteLength;

    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel().catch(() => undefined);
      return { tooLarge: true as const, text: "" };
    }

    text += decoder.decode(value, { stream: true });
  }

  text += decoder.decode();
  return { tooLarge: false as const, text };
}

function getClientIp(request: NextRequest) {
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  return ip.trim().slice(0, 128) || "unknown";
}

function getRateLimitKey(request: NextRequest) {
  return createHash("sha256").update(getClientIp(request)).digest("base64url");
}

function pruneRateLimits(now: number) {
  if (
    now < nextRateLimitCleanupAt &&
    rateLimits.size < RATE_LIMIT_MAX_ENTRIES
  ) {
    return;
  }

  for (const [key, entry] of rateLimits) {
    if (entry.expiresAt <= now) {
      rateLimits.delete(key);
    }
  }

  while (rateLimits.size >= RATE_LIMIT_MAX_ENTRIES) {
    const oldestKey = rateLimits.keys().next().value;

    if (oldestKey === undefined) {
      break;
    }

    rateLimits.delete(oldestKey);
  }

  nextRateLimitCleanupAt = now + RATE_LIMIT_CLEANUP_INTERVAL_MS;
}

function consumeRateLimit(key: string) {
  const now = Date.now();
  pruneRateLimits(now);

  const current = rateLimits.get(key);

  if (!current || current.expiresAt <= now) {
    rateLimits.set(key, {
      count: 1,
      expiresAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false as const, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return {
      limited: true as const,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((current.expiresAt - now) / 1000),
      ),
    };
  }

  current.count += 1;
  return { limited: false as const, retryAfterSeconds: 0 };
}

function getSmtpErrorCode(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
  ) {
    return error.code.slice(0, 60);
  }

  return "UNKNOWN";
}

export async function POST(request: NextRequest) {
  if (!hasJsonContentType(request)) {
    return errorResponse("INVALID_FORM", 415);
  }

  if (!hasAllowedOrigin(request)) {
    return errorResponse("INVALID_FORM", 403);
  }

  const declaredBodyLength = getDeclaredBodyLength(request);

  if (Number.isNaN(declaredBodyLength)) {
    return errorResponse("INVALID_FORM", 400);
  }

  if (
    declaredBodyLength !== null &&
    declaredBodyLength > MAX_BODY_BYTES
  ) {
    return errorResponse("TOO_LARGE", 413);
  }

  let payload: ContactPayload;

  try {
    const body = await readBodyWithinLimit(request);

    if (body.tooLarge) {
      return errorResponse("TOO_LARGE", 413);
    }

    const parsed = JSON.parse(body.text) as unknown;

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      Array.isArray(parsed)
    ) {
      return errorResponse("INVALID_FORM", 400);
    }

    payload = parsed as ContactPayload;
  } catch {
    return errorResponse("INVALID_FORM", 400);
  }

  const website = cleanSingleLine(payload.website, 200);

  if (website) {
    return successResponse();
  }

  const name = cleanSingleLine(payload.name, 100);
  const company = cleanSingleLine(payload.company, 120);
  const email = cleanSingleLine(payload.email, 254).toLowerCase();
  const phone = cleanSingleLine(payload.phone, 40);
  const service = cleanSingleLine(payload.service, 80);
  const message = cleanMultiline(payload.message, 4000);
  const consent =
    payload.consent === true ||
    cleanSingleLine(payload.consent, 20) === "accepted";
  const locale = cleanSingleLine(payload.locale, 5);
  const page = cleanSingleLine(payload.page, 30);

  if (
    name.length < 2 ||
    !EMAIL_PATTERN.test(email) ||
    !isServiceId(service) ||
    message.length < 10 ||
    !consent ||
    !isLocale(locale) ||
    (page && !PAGE_IDS.has(page))
  ) {
    return errorResponse("INVALID_FORM", 400);
  }

  const rateLimit = consumeRateLimit(getRateLimitKey(request));

  if (rateLimit.limited) {
    return errorResponse("RATE_LIMITED", 429, {
      "Retry-After": String(rateLimit.retryAfterSeconds),
    });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const contactTo = process.env.CONTACT_TO || "contacto@sosdev.com.co";
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (!process.env.SMTP_SECURE && smtpPort === 465);

  if (
    !smtpHost ||
    !Number.isInteger(smtpPort) ||
    smtpPort <= 0 ||
    smtpPort > 65_535 ||
    !smtpFrom ||
    Boolean(smtpUser) !== Boolean(smtpPass)
  ) {
    return errorResponse("SMTP_UNAVAILABLE", 503);
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure,
    auth:
      smtpUser && smtpPass
        ? {
            user: smtpUser,
            pass: smtpPass,
          }
        : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const serviceLabel = SERVICE_LABELS[service][locale];
  const safe = {
    name: escapeHtml(name),
    company: escapeHtml(
      company || (locale === "es" ? "No indicada" : "Not provided"),
    ),
    email: escapeHtml(email),
    phone: escapeHtml(
      phone || (locale === "es" ? "No indicado" : "Not provided"),
    ),
    service: escapeHtml(serviceLabel),
    locale: escapeHtml(locale.toUpperCase()),
    page: escapeHtml(page || "contact"),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: contactTo,
      replyTo: email,
      subject: `[SOSDEV Web] ${serviceLabel} — ${name}`,
      text: [
        "Nueva consulta desde sosdev.com.co",
        "",
        `Nombre: ${name}`,
        `Empresa: ${company || "No indicada"}`,
        `Correo: ${email}`,
        `Teléfono: ${phone || "No indicado"}`,
        `Servicio: ${serviceLabel} (${service})`,
        `Idioma: ${locale.toUpperCase()}`,
        `Página de origen: ${page || "contact"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
      html: `
        <div style="margin:0;padding:32px;background:#071310;color:#eaf8f3;font-family:Arial,sans-serif">
          <div style="max-width:640px;margin:0 auto;padding:32px;border:1px solid #23443b;border-radius:18px;background:#0d201b">
            <p style="margin:0 0 12px;color:#70f2cd;font-size:12px;letter-spacing:.12em;text-transform:uppercase">SOSDEV · Formulario web</p>
            <h1 style="margin:0 0 28px;font-size:26px">Nueva consulta recibida</h1>
            <table role="presentation" style="width:100%;border-collapse:collapse;color:#c8d9d3;font-size:14px;line-height:1.6">
              <tr><td style="padding:8px 12px;color:#78958b">Nombre</td><td style="padding:8px 12px">${safe.name}</td></tr>
              <tr><td style="padding:8px 12px;color:#78958b">Empresa</td><td style="padding:8px 12px">${safe.company}</td></tr>
              <tr><td style="padding:8px 12px;color:#78958b">Correo</td><td style="padding:8px 12px">${safe.email}</td></tr>
              <tr><td style="padding:8px 12px;color:#78958b">Teléfono</td><td style="padding:8px 12px">${safe.phone}</td></tr>
              <tr><td style="padding:8px 12px;color:#78958b">Interés</td><td style="padding:8px 12px">${safe.service}</td></tr>
              <tr><td style="padding:8px 12px;color:#78958b">Idioma</td><td style="padding:8px 12px">${safe.locale}</td></tr>
              <tr><td style="padding:8px 12px;color:#78958b">Página</td><td style="padding:8px 12px">${safe.page}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;border-radius:12px;background:#081713;color:#d9e8e2;font-size:14px;line-height:1.7">
              ${safe.message}
            </div>
            <p style="margin:24px 0 0;color:#688078;font-size:12px">Puede responder directamente a este correo para contactar a la persona.</p>
          </div>
        </div>
      `,
    });

    return successResponse();
  } catch (error) {
    console.error("[contact] SMTP send failed", {
      code: getSmtpErrorCode(error),
    });
    return errorResponse("SEND_FAILED", 502);
  }
}
