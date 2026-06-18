"use client";

import { joinPlans } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

export default function HowToJoin() {
  return (
    <section id="como-sumarte" className="py-20 sm:py-28">
      <div className="container-zuna">
        <Reveal>
          <p className="eyebrow">CÓMO SUMARTE</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Tres formas de empezar.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {joinPlans.map((plan, i) => (
            <Reveal as="div" key={plan.title} delay={i * 0.07}>
              <article
                className={`flex h-full flex-col rounded-2xl p-7 shadow-soft transition-all hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-ink text-paper hover:shadow-lift"
                    : "border border-ink/10 bg-white hover:shadow-lift"
                }`}
              >
                <span
                  className={`font-mono text-xs ${
                    plan.highlight ? "text-volt" : "text-primary"
                  }`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  {plan.title}
                </h3>
                <p
                  className={`mt-3 flex-1 ${
                    plan.highlight ? "text-paper/80" : "text-muted"
                  }`}
                >
                  {plan.copy}
                </p>
                <a
                  href="#contacto"
                  onClick={() =>
                    trackEvent("cta_sumarte", { plan: plan.title })
                  }
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-semibold transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "bg-volt text-ink"
                      : "border border-ink/15 text-ink hover:border-ink/40"
                  }`}
                >
                  Cotizar
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
