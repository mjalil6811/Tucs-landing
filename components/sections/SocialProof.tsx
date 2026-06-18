"use client";

import { socialStats, testimonials } from "@/lib/content";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function SocialProof() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-zuna">
        {/* Franja de stats */}
        <Reveal as="div">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-brand-gradient p-8 text-paper sm:grid-cols-4">
            {socialStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-extrabold sm:text-4xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-paper/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonios */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="div" key={t.name} delay={i * 0.08}>
              <figure className="card h-full">
                <span aria-hidden className="font-display text-5xl leading-none text-volt">
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-lg text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/10 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="font-mono text-xs text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
