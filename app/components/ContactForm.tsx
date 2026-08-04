"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { formContent } from "../content";
import { getWhatsappUrl, type Locale, type PageKey } from "../site-config";

type FormStatus = "idle" | "loading" | "success" | "error";

type ApiResponse = {
  ok?: boolean;
  code?: string;
};

const supportedServices = new Set([
  "landing",
  "ecommerce",
  "web_app",
  "sales_automation",
  "automation_ai",
  "infrastructure",
  "consulting",
  "other",
]);

export default function ContactForm({
  locale,
  sourcePage,
}: {
  locale: Locale;
  sourcePage: PageKey;
}) {
  const copy = formContent[locale];
  const formRef = useRef<HTMLFormElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get("service");
    if (requestedService && supportedServices.has(requestedService) && serviceRef.current) {
      serviceRef.current.value = requestedService;
    }
  }, []);

  const showError = (code?: string) => {
    const errors = copy.errors as Record<string, string>;
    setStatus("error");
    setMessage(errors[code ?? ""] ?? errors.SEND_FAILED);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setStatus("loading");
    setMessage(copy.loadingMessage);

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""),
      locale,
      page: sourcePage,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const isJson = response.headers.get("content-type")?.includes("application/json");
      const result: ApiResponse = isJson ? await response.json() : {};

      if (!response.ok || !result.ok) {
        showError(result.code);
        return;
      }

      setStatus("success");
      setMessage(copy.success);
      form.reset();
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      showError("NETWORK");
    }
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-heading">
        <span className="eyebrow">{copy.kicker}</span>
        <h2>{copy.title}</h2>
        <p>{copy.required}</p>
      </div>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate={false}>
        <div className="form-row">
          <label>
            <span>{copy.name}</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder={copy.namePlaceholder}
              minLength={2}
              maxLength={100}
              required
            />
          </label>
          <label>
            <span>{copy.company}</span>
            <input
              name="company"
              type="text"
              autoComplete="organization"
              placeholder={copy.companyPlaceholder}
              maxLength={120}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>{copy.email}</span>
            <input
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={locale === "es" ? "nombre@empresa.com" : "name@company.com"}
              maxLength={254}
              required
            />
          </label>
          <label>
            <span>{copy.phone}</span>
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+57 300 000 0000"
              maxLength={40}
            />
          </label>
        </div>

        <label>
          <span>{copy.service}</span>
          <select ref={serviceRef} name="service" defaultValue="" required>
            <option value="" disabled>{copy.select}</option>
            {copy.services.map(([value, label]) => (
              <option value={value} key={value}>{label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>{copy.message}</span>
          <textarea
            name="message"
            rows={6}
            placeholder={copy.messagePlaceholder}
            minLength={10}
            maxLength={4000}
            required
          />
        </label>

        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>

        <label className="consent-field">
          <input name="consent" type="checkbox" required />
          <span>{copy.consent}</span>
        </label>

        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? copy.submitting : copy.submit}
          <span aria-hidden="true">→</span>
        </button>

        {status !== "idle" ? (
          <div
            className={`form-status form-status-${status}`}
            ref={statusRef}
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
            tabIndex={-1}
          >
            <span aria-hidden="true">{status === "success" ? "✓" : status === "error" ? "!" : "·"}</span>
            <p>{message}</p>
            {status === "error" ? (
              <a href={getWhatsappUrl(locale)} target="_blank" rel="noreferrer">
                WhatsApp ↗
              </a>
            ) : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}
