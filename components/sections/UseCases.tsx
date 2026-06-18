"use client";

import { useCases } from "@/lib/content";
import { useCaseIcons, ArrowIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="py-20 sm:py-28">
      <div className="container-zuna">
        <Reveal>
          <p className="eyebrow">CASOS DE USO</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Un vehículo. Muchos trabajos.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            El mismo triciclo eléctrico resuelve transporte de pasajeros, reparto
            y carga liviana. Vos elegís para qué.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc, i) => {
            const Icon = useCaseIcons[uc.icon];
            return (
              <Reveal as="div" key={uc.id} delay={i * 0.06}>
                <article className="card group flex h-full flex-col hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-paper">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    {uc.title}
                  </h3>
                  <p className="mt-2 flex-1 text-muted">{uc.copy}</p>
                  <a
                    href="#contacto"
                    onClick={() =>
                      trackEvent("cta_caso_de_uso", { caso: uc.id })
                    }
                    className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary-bright"
                  >
                    {uc.cta}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
