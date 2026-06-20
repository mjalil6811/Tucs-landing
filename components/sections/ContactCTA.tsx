"use client";

import { useState, type FormEvent } from "react";
import { brand, whatsappLink } from "@/lib/brand";
import { interestOptions } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: Record<string, string>) {
    const e: Record<string, string> = {};
    if (!data.nombre?.trim()) e.nombre = "Ingresá tu nombre.";
    if (!data.whatsapp?.trim()) e.whatsapp = "Ingresá tu WhatsApp.";
    else if (!/[0-9]{6,}/.test(data.whatsapp.replace(/\D/g, "")))
      e.whatsapp = "Ingresá un número válido.";
    if (!data.ciudad?.trim()) e.ciudad = "Ingresá tu ciudad.";
    return e;
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(
      Array.from(fd.entries()).map(([k, v]) => [k, String(v)]),
    );

    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    trackEvent("lead", {
      interes: data.interes,
      ciudad: data.ciudad,
    });

    // Mensaje prearmado para WhatsApp.
    const msg =
      `Hola ${brand.name}, soy ${data.nombre} de ${data.ciudad}. ` +
      `Me interesa: ${data.interes}. ` +
      (data.mensaje ? `Mensaje: ${data.mensaje}. ` : "") +
      `Mi WhatsApp: ${data.whatsapp}.`;

    const endpoint = brand.integrations.formspreeEndpoint;

    try {
      if (endpoint) {
        // Stub conectable: Formspree / HubSpot.
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        });
        if (!res.ok) throw new Error("Network error");
        setStatus("ok");
        form.reset();
      } else {
        // Sin endpoint: abrimos WhatsApp con el mensaje prearmado.
        window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
        setStatus("ok");
        form.reset();
      }
    } catch {
      // Fallback: igual abrimos WhatsApp para no perder el lead.
      window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
      setStatus("error");
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none";

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-evotuc">
        <div className="overflow-hidden rounded-3xl bg-ink text-paper">
          <div className="grid lg:grid-cols-2">
            {/* Copy */}
            <div className="relative flex flex-col justify-center p-8 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl"
              />
              <Reveal>
                <p className="eyebrow text-volt">ELECTRIFICÁ TU OPERACIÓN</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  ¿Listo para electrificar tu operación?
                </h2>
                <p className="mt-5 max-w-md text-lg text-paper/80">
                  Dejanos tus datos y te armamos una cotización a medida. Te
                  respondemos por WhatsApp.
                </p>
              </Reveal>
            </div>

            {/* Formulario */}
            <div className="bg-white p-8 text-ink sm:p-12">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="font-mono text-xs uppercase tracking-wider text-muted">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    className={fieldClass}
                    aria-invalid={!!errors.nombre}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="whatsapp" className="font-mono text-xs uppercase tracking-wider text-muted">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      className={fieldClass}
                      aria-invalid={!!errors.whatsapp}
                      placeholder="+54 9 ..."
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="ciudad" className="font-mono text-xs uppercase tracking-wider text-muted">
                      Ciudad
                    </label>
                    <input
                      id="ciudad"
                      name="ciudad"
                      type="text"
                      className={fieldClass}
                      aria-invalid={!!errors.ciudad}
                      placeholder="Tu ciudad"
                    />
                    {errors.ciudad && (
                      <p className="mt-1 text-sm text-red-600">{errors.ciudad}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="interes" className="font-mono text-xs uppercase tracking-wider text-muted">
                    Interés
                  </label>
                  <select id="interes" name="interes" className={fieldClass} defaultValue={interestOptions[0]}>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="font-mono text-xs uppercase tracking-wider text-muted">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    className={fieldClass}
                    placeholder="Contanos qué necesitás"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-volt w-full disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando…" : "Enviar y cotizar"}
                </button>

                {status === "ok" && (
                  <p className="text-sm font-medium text-green-700" role="status">
                    ¡Listo! Te contactamos a la brevedad.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-muted" role="status">
                    Abrimos WhatsApp para que nos escribas directo.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
