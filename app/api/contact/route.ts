import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  consent?: unknown;
};

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const rateLimits = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SERVICES = new Set([
  "Aplicación web",
  "Automatización e IA",
  "Infraestructura digital",
  "Consultoría",
  "Otro",
]);

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
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

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimits.get(ip);

  if (!current || current.expiresAt <= now) {
    rateLimits.set(ip, {
      count: 1,
      expiresAt: now + RATE_LIMIT_WINDOW,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        message:
          "Se alcanzó el límite temporal de mensajes. Puede escribirnos por WhatsApp.",
      },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "La información enviada no es válida." },
      { status: 400 },
    );
  }

  const name = cleanText(payload.name, 90);
  const company = cleanText(payload.company, 100);
  const email = cleanText(payload.email, 180).toLowerCase();
  const phone = cleanText(payload.phone, 30);
  const service = cleanText(payload.service, 80);
  const message = cleanText(payload.message, 3000);
  const website = cleanText(payload.website, 200);
  const consent = cleanText(payload.consent, 20);

  if (website) {
    return NextResponse.json({
      message: "Mensaje enviado. Nuestro equipo se pondrá en contacto pronto.",
    });
  }

  if (
    !name ||
    !EMAIL_PATTERN.test(email) ||
    !ALLOWED_SERVICES.has(service) ||
    message.length < 20 ||
    consent !== "accepted"
  ) {
    return NextResponse.json(
      { message: "Revise los campos obligatorios e intente nuevamente." },
      { status: 400 },
    );
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
    !smtpFrom ||
    Boolean(smtpUser) !== Boolean(smtpPass)
  ) {
    return NextResponse.json(
      {
        message:
          "El canal de correo está en configuración. Puede escribirnos por WhatsApp.",
      },
      { status: 503 },
    );
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

  const safe = {
    name: escapeHtml(name),
    company: escapeHtml(company || "No indicada"),
    email: escapeHtml(email),
    phone: escapeHtml(phone || "No indicado"),
    service: escapeHtml(service),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: contactTo,
      replyTo: email,
      subject: `[SOSDEV Web] ${service} — ${name}`,
      text: [
        "Nueva consulta desde sosdev.com.co",
        "",
        `Nombre: ${name}`,
        `Empresa: ${company || "No indicada"}`,
        `Correo: ${email}`,
        `Teléfono: ${phone || "No indicado"}`,
        `Servicio: ${service}`,
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
            </table>
            <div style="margin-top:24px;padding:20px;border-radius:12px;background:#081713;color:#d9e8e2;font-size:14px;line-height:1.7">
              ${safe.message}
            </div>
            <p style="margin:24px 0 0;color:#688078;font-size:12px">Puede responder directamente a este correo para contactar a la persona.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Mensaje enviado. Nuestro equipo se pondrá en contacto pronto.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "No fue posible enviar el mensaje en este momento. Puede escribirnos por WhatsApp.",
      },
      { status: 502 },
    );
  }
}
