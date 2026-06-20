"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/content";
import { ChevronIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-evotuc max-w-3xl">
        <Reveal>
          <p className="eyebrow text-center">PREGUNTAS FRECUENTES</p>
          <h2 className="mt-3 text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Lo que necesitás saber.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="div" key={faq.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <span className="font-display text-lg font-bold">
                        {faq.q}
                      </span>
                      <ChevronIcon
                        className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${i}`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-5 pb-5 text-muted">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
