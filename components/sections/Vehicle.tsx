"use client";

import {
  vehicleModel,
  vehicleSpecs,
  vehicleFeatures,
} from "@/lib/content";
import { CheckIcon, PdfIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import TukTuk from "@/components/ui/TukTuk";
import { trackEvent } from "@/lib/analytics";

export default function Vehicle() {
  return (
    <section id="el-vehiculo" className="bg-ink py-20 text-paper sm:py-28">
      <div className="container-evotuc">
        <Reveal>
          <p className="eyebrow text-volt">EL VEHÍCULO</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Hecho para la calle, no para el taller.
            </h2>
            <span className="rounded-full border border-paper/20 px-4 py-1.5 font-mono text-xs text-paper/80">
              MODELO {vehicleModel}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Visual */}
          <Reveal as="div">
            <div className="rounded-3xl bg-brand-gradient p-8">
              <TukTuk className="mx-auto w-full max-w-sm" />
              <ul className="mt-6 flex flex-wrap gap-2">
                {vehicleFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 rounded-full bg-ink/30 px-3 py-1.5 text-sm text-paper"
                  >
                    <CheckIcon className="h-3.5 w-3.5 text-volt" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Specs grid */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {vehicleSpecs.map((spec, i) => (
                <Reveal as="div" key={spec.label} delay={i * 0.04}>
                  <div className="h-full rounded-2xl border border-paper/10 bg-paper/[0.04] p-5 transition-colors hover:border-volt/40">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-paper/60">
                      {spec.label}
                    </p>
                    <p className="mt-2 font-mono text-2xl font-bold text-volt">
                      {spec.value}
                      {spec.unit ? (
                        <span className="ml-1 text-sm font-normal text-paper/70">
                          {spec.unit}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/ficha-tecnica.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("descarga_ficha", { modelo: vehicleModel })}
                className="btn-volt"
              >
                <PdfIcon className="h-5 w-5" />
                Descargar ficha técnica (PDF)
              </a>
              <p className="mt-3 font-mono text-xs text-paper/60">
                Disponible en configuración pasajeros y carga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
