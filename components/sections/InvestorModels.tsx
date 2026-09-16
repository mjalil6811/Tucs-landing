"use client";

import { useRef, useState } from "react";
import { investorSection, investorModels } from "@/lib/content";
import { whatsappLink } from "@/lib/brand";
import { CheckIcon, BoltIcon, CityIcon, FleetIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

const whyNowIcons = [BoltIcon, CityIcon, FleetIcon];

/**
 * Bloque "Invertí en la red" — vive dentro de la sección "Cómo sumarte"
 * (#como-sumarte). Contenido comercial / de generación de leads: sin
 * cifras, sin rentabilidades, sin nombres de fabricantes. El detalle de
 * cada modelo se da en una reunión, no acá.
 */
export default function InvestorModels() {
  const [activeTab, setActiveTab] = useState<"fleet" | "city">("fleet");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function focusTab(id: "fleet" | "city") {
    setActiveTab(id);
    tabRefs.current[id]?.focus();
  }

  function handleTabKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(activeTab === "fleet" ? "city" : "fleet");
    }
  }

  return (
    <div className="mt-20 border-t border-ink/10 pt-16 sm:mt-28 sm:pt-20">
      {/* Encabezado */}
      <Reveal>
        <p className="eyebrow">{investorSection.eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {investorSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {investorSection.subtitle}
        </p>
      </Reveal>

      {/* Tarjetas Fleet Partner / City Partner */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {investorModels.map((model, i) => {
          const isFleet = model.id === "fleet";
          return (
            <Reveal as="div" key={model.id} delay={i * 0.08} className="h-full">
              <article
                className={`flex h-full flex-col rounded-3xl p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift ${
                  isFleet
                    ? "border border-primary/20 bg-white"
                    : "bg-ink text-paper"
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                    isFleet ? "bg-primary/10 text-primary" : "bg-volt/20 text-volt"
                  }`}
                >
                  {model.badge}
                </span>

                <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                  {model.title}
                </h3>
                <p className={`mt-1 font-semibold ${isFleet ? "text-primary" : "text-volt"}`}>
                  {model.claim}
                </p>
                <p className={`mt-4 ${isFleet ? "text-muted" : "text-paper/80"}`}>
                  {model.copy}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {model.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          isFleet ? "text-primary" : "text-volt"
                        }`}
                      />
                      <span className={isFleet ? "text-ink/85" : "text-paper/90"}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className={`mt-5 flex-1 text-sm italic ${isFleet ? "text-muted" : "text-paper/60"}`}>
                  {model.idealFor}
                </p>

                <a
                  href={`?interes=${model.id}#contacto`}
                  onClick={() => trackEvent(`cta_${model.id}_partner_click`)}
                  className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-2xl px-5 py-3 text-center font-semibold transition-all hover:-translate-y-0.5 ${
                    isFleet
                      ? "bg-primary text-paper hover:bg-primary-bright"
                      : "bg-volt text-ink hover:shadow-lift"
                  }`}
                >
                  {model.ctaLabel}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Cómo funciona — tabs Fleet / City */}
      <Reveal as="div" className="mt-16">
        <h3 className="font-display text-2xl font-bold">Cómo funciona</h3>

        <div
          role="tablist"
          aria-label="Cómo funciona cada modelo"
          className="mt-5 inline-flex rounded-2xl border border-ink/10 bg-white p-1"
        >
          {investorModels.map((model) => (
            <button
              key={model.id}
              ref={(el) => {
                tabRefs.current[model.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${model.id}`}
              aria-selected={activeTab === model.id}
              aria-controls={`panel-${model.id}`}
              tabIndex={activeTab === model.id ? 0 : -1}
              onClick={() => setActiveTab(model.id)}
              onKeyDown={handleTabKeyDown}
              className={`min-h-[44px] rounded-xl px-5 py-2.5 font-semibold transition-colors ${
                activeTab === model.id
                  ? "bg-ink text-paper"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {model.title}
            </button>
          ))}
        </div>

        {investorModels.map((model) => (
          <div
            key={model.id}
            role="tabpanel"
            id={`panel-${model.id}`}
            aria-labelledby={`tab-${model.id}`}
            hidden={activeTab !== model.id}
            className="mt-8 grid gap-5 sm:grid-cols-3"
          >
            {model.steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-ink/10 bg-white p-6">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h4 className="mt-2 font-display text-lg font-bold">{step.title}</h4>
                <p className="mt-2 text-sm text-muted">{step.copy}</p>
              </div>
            ))}
          </div>
        ))}
      </Reveal>

      {/* Comparativa rápida */}
      <Reveal as="div" className="mt-16">
        <h3 className="font-display text-2xl font-bold">Fleet Partner vs. City Partner</h3>

        {/* Desktop / tablet: tabla real */}
        <table className="mt-6 hidden w-full border-collapse overflow-hidden rounded-2xl text-left md:table">
          <caption className="sr-only">
            Comparativa cualitativa entre Fleet Partner y City Partner
          </caption>
          <thead>
            <tr className="bg-ink text-paper">
              <th scope="col" className="p-4 font-mono text-xs uppercase tracking-wider">
                <span className="sr-only">Categoría</span>
              </th>
              <th scope="col" className="p-4 font-display text-lg">
                Fleet Partner
              </th>
              <th scope="col" className="p-4 font-display text-lg">
                City Partner
              </th>
            </tr>
          </thead>
          <tbody>
            {investorSection.comparison.rows.map((row, i) => (
              <tr key={row.label} className={i % 2 ? "bg-violet-50/60" : "bg-white"}>
                <th scope="row" className="p-4 font-semibold text-ink/70">
                  {row.label}
                </th>
                <td className="p-4 text-ink/90">{row.fleet}</td>
                <td className="p-4 text-ink/90">{row.city}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile: tarjetas apiladas, sin scroll horizontal */}
        <div className="mt-6 space-y-4 md:hidden">
          {investorSection.comparison.rows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-ink/10 bg-white p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {row.label}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-primary">Fleet Partner</p>
                  <p className="mt-1 text-sm text-ink/90">{row.fleet}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary">City Partner</p>
                  <p className="mt-1 text-sm text-ink/90">{row.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ¿Por qué ahora? */}
      <Reveal as="div" className="mt-16">
        <h3 className="font-display text-2xl font-bold">¿Por qué ahora?</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {investorSection.whyNow.map((item, i) => {
            const Icon = whyNowIcons[i];
            return (
              <div key={item} className="rounded-2xl border border-ink/10 bg-white p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon />
                </span>
                <p className="mt-4 text-sm text-ink/85">{item}</p>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* CTA de cierre */}
      <Reveal as="div" className="mt-16 rounded-3xl bg-brand-gradient p-8 text-center sm:p-12">
        <h3 className="font-display text-2xl font-bold text-paper sm:text-3xl">
          {investorSection.closing.title}
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-paper/85">
          {investorSection.closing.copy}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contacto"
            onClick={() => trackEvent("cta_inversores_hablemos_click")}
            className="btn-volt"
          >
            {investorSection.closing.ctaPrimary}
          </a>
          <a
            href={whatsappLink(investorSection.closing.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_inversores_whatsapp_click")}
            className="btn-ghost-dark"
          >
            {investorSection.closing.ctaWhatsapp}
          </a>
        </div>
      </Reveal>

      {/* Aviso legal */}
      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted">
        {investorSection.legal}
      </p>
    </div>
  );
}
