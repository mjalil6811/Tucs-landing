"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { trustChips } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      {/* Glow violeta de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-primary-bright/20 blur-3xl"
      />

      <div className="container-evotuc grid items-center gap-12 lg:grid-cols-2">
        {/* Columna texto */}
        <div>
          <p className="eyebrow">
            IMPORTADOR OFICIAL · ALIADO DE{" "}
            <a
              href="https://gou.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              GOU
            </a>
          </p>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Movilidad eléctrica para trasladar, repartir y trabajar{" "}
            <span className="text-brand-gradient">sin contaminar.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted">
            Importamos y comercializamos vehículos 100% eléctricos para pasajeros,
            delivery y carga. Más rendimiento por viaje, cero emisiones y un modelo
            pensado para que el vehículo se pague solo y sea tuyo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              onClick={() => trackEvent("cta_cotizar", { location: "hero" })}
              className="btn-volt"
            >
              Cotizar unidades
            </a>
            <a
              href="#casos-de-uso"
              onClick={() => trackEvent("cta_ver_casos", { location: "hero" })}
              className="btn-ghost"
            >
              Ver casos de uso
            </a>
          </div>

          {/* Chips de confianza */}
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-ink/70">
            {trustChips.map((chip) => (
              <li key={chip} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-volt" aria-hidden />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna visual: foto real del triciclo EVOTUC branded */}
        <div className="relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={reduce ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-lift"
          >
            <Image
              src="/images/evotuc-hero-branded.jpg"
              alt="Triciclo eléctrico EVOTUC modelo HB1500DZK-21, vista lateral"
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-ink/70 to-transparent px-5 py-4 font-mono text-xs text-paper/90">
              <span>MODELO HB1500DZK-21</span>
              <span className="rounded-full bg-volt px-3 py-1 font-semibold text-ink">
                SILENCIOSO
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
