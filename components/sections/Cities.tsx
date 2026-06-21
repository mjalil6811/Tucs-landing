"use client";

import { brand } from "@/lib/brand";
import { cityStats, cityPipeline, vehicleModel } from "@/lib/content";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

export default function Cities() {
  return (
    <section id="para-ciudades" className="bg-ink py-20 text-paper sm:py-28">
      <div className="container-evotuc">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-volt">PARA CIUDADES Y OPERADORES</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              El modelo ya funciona. Llevalo a tu ciudad.
            </h2>
            <p className="mt-5 text-lg text-paper/80">
              En alianza con <span className="font-semibold text-volt">{brand.partner.name}</span>{" "}
              llevamos movilidad eléctrica a las calles. El caso{" "}
              <strong className="text-paper">Reconquista (Santa Fe)</strong> ya es
              un modelo validado: una operación real que demuestra que lo
              eléctrico mueve negocios y ciudades.
            </p>

            <a
              href="#contacto"
              onClick={() => trackEvent("cta_operar_ciudad", { location: "cities" })}
              className="btn-volt mt-8"
            >
              Quiero operar en mi ciudad
            </a>
          </Reveal>

          <Reveal as="div">
            <div className="grid grid-cols-2 gap-4">
              {cityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-5 text-center"
                >
                  <p className="font-display text-3xl font-extrabold text-volt sm:text-4xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs text-paper/70">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Pipeline */}
            <div className="mt-6 rounded-2xl border border-paper/10 bg-paper/[0.04] p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Próximas ciudades en pipeline
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cityPipeline.map((city) => (
                  <li
                    key={city}
                    className="rounded-full bg-primary/30 px-3 py-1.5 text-sm text-paper"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 font-mono text-[11px] leading-relaxed text-paper/50">
              Datos de producto del modelo {vehicleModel}. Parque y operación en
              alianza con {brand.partner.name}.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
