"use client";

import Image from "next/image";
import { catalogoProductos } from "@/lib/content";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-20 sm:py-28">
      <div className="container-evotuc">
        <Reveal>
          <p className="eyebrow">CATÁLOGO DE PRODUCTOS</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Una línea completa para cada trabajo.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Importamos y comercializamos vehículos eléctricos para pasajeros,
            delivery, carga, minimovilidad y turismo. Elegí el que resuelve tu
            operación.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalogoProductos.map((p, i) => (
            <Reveal as="div" key={p.id} delay={i * 0.06}>
              <article className="card group flex h-full flex-col hover:-translate-y-1 hover:shadow-lift">
                {/* Imagen sobre fondo claro (PNG con fondo transparente) */}
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-violet-50">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-contain p-5"
                  />
                </div>

                <p className="eyebrow">{p.tipo}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{p.nombre}</h3>

                <ul className="mt-3 flex-1 space-y-1.5">
                  {p.specs.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  onClick={() =>
                    trackEvent("cta_cotizar", {
                      location: "catalogo",
                      producto: p.nombre,
                    })
                  }
                  className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary-bright"
                >
                  Cotizar
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
