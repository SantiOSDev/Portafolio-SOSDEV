"use client";

import { FormEvent, useState } from "react";

type SubmitState = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialState: SubmitState = {
  type: "idle",
  message: "",
};

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setSubmitState({
      type: "loading",
      message: "Enviando su mensaje de forma segura…",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message || "No fue posible enviar el mensaje en este momento.",
        );
      }

      form.reset();
      setSubmitState({
        type: "success",
        message: "Mensaje enviado. Nuestro equipo se pondrá en contacto pronto.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "No fue posible enviar el mensaje. También puede escribirnos por WhatsApp.",
      });
    }
  }

  return (
    <div className="contact-form-shell reveal">
      <div className="form-intro">
        <span>Formulario seguro</span>
        <h3>Cuéntenos sobre su necesidad.</h3>
        <p>Los campos marcados con * son obligatorios.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Nombre *</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Nombre completo"
            maxLength={90}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nombre de la empresa"
            maxLength={100}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Correo electrónico *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@empresa.com"
            maxLength={180}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+57 300 000 0000"
            maxLength={30}
          />
        </div>

        <div className="form-field form-field-wide">
          <label htmlFor="service">¿Cómo podemos ayudar? *</label>
          <select id="service" name="service" defaultValue="" required>
            <option value="" disabled>
              Seleccione una opción
            </option>
            <option value="Aplicación web">Aplicación web a medida</option>
            <option value="Automatización e IA">Automatización e IA</option>
            <option value="Infraestructura digital">Infraestructura digital</option>
            <option value="Consultoría">Consultoría tecnológica</option>
            <option value="Otro">Otra necesidad</option>
          </select>
        </div>

        <div className="form-field form-field-wide">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Describa brevemente el reto, el contexto y el resultado que espera."
            minLength={20}
            maxLength={3000}
            required
          />
        </div>

        <div className="honeypot-field" aria-hidden="true">
          <label htmlFor="website">Sitio web</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <label className="form-consent">
          <input name="consent" type="checkbox" value="accepted" required />
          <span>
            Autorizo a SOSDEV a utilizar estos datos exclusivamente para
            responder esta solicitud. *
          </span>
        </label>

        <div className="form-actions">
          <button
            className="button button-primary"
            type="submit"
            disabled={submitState.type === "loading"}
          >
            {submitState.type === "loading" ? "Enviando…" : "Enviar mensaje"}
            <span aria-hidden="true">→</span>
          </button>

          <p
            className={`form-status ${submitState.type}`}
            role="status"
            aria-live="polite"
          >
            {submitState.message}
          </p>
        </div>
      </form>
    </div>
  );
}
