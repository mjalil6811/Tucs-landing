"use client";

import { useEffect, useMemo, useState } from "react";
import {
  animate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import PulseLine from "@/components/ui/PulseLine";
import { trackEvent } from "@/lib/analytics";

/** Factor de emisión de referencia para combustión (kg CO₂ por km). */
const CO2_FACTOR = 0.15;
const DAYS_PER_MONTH = 30;

/** Número que se anima suavemente hacia su valor objetivo. */
function AnimatedValue({
  value,
  format,
}: {
  value: number;
  format: (n: number) => string;
}) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(mv, value, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, mv, reduce]);

  return <>{format(display)}</>;
}

export default function Savings() {
  const [kmPerDay, setKmPerDay] = useState(80);
  const [costFuel, setCostFuel] = useState(180); // $/km combustión (referencia)
  const [costElec, setCostElec] = useState(35); // $/km eléctrico (referencia)

  const { monthlySaving, monthlyCo2 } = useMemo(() => {
    const kmMonth = kmPerDay * DAYS_PER_MONTH;
    const saving = Math.max(0, kmMonth * (costFuel - costElec));
    const co2 = kmMonth * CO2_FACTOR;
    return { monthlySaving: saving, monthlyCo2: co2 };
  }, [kmPerDay, costFuel, costElec]);

  const fmtMoney = (n: number) =>
    n.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    });

  const fmtKg = (n: number) =>
    `${n.toLocaleString("es-AR", { maximumFractionDigits: 0 })} kg`;

  return (
    <section id="ahorro" className="py-20 sm:py-28">
      <div className="container-evotuc">
        <Reveal>
          <p className="eyebrow">HACÉ NÚMEROS</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Lo eléctrico se paga solo.
          </h2>
        </Reveal>

        <Reveal as="div">
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
            {/* Pulso superior (signature) */}
            <div className="relative h-12 bg-ink">
              <PulseLine
                className="absolute inset-0 h-full w-full"
                variant="active"
              />
            </div>

            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-baseline justify-between">
                    <label
                      htmlFor="km-slider"
                      className="font-mono text-xs uppercase tracking-wider text-muted"
                    >
                      Kilómetros por día
                    </label>
                    <span className="font-mono text-2xl font-bold text-primary">
                      {kmPerDay} km
                    </span>
                  </div>
                  <input
                    id="km-slider"
                    type="range"
                    min={10}
                    max={250}
                    step={5}
                    value={kmPerDay}
                    onChange={(e) => setKmPerDay(Number(e.target.value))}
                    onMouseUp={() => trackEvent("calc_interaccion", { campo: "km" })}
                    className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink/10 accent-primary"
                    aria-valuetext={`${kmPerDay} kilómetros por día`}
                  />
                  <div className="mt-1 flex justify-between font-mono text-[11px] text-muted">
                    <span>10 km</span>
                    <span>250 km</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cost-fuel"
                      className="font-mono text-xs uppercase tracking-wider text-muted"
                    >
                      $/km combustión
                    </label>
                    <input
                      id="cost-fuel"
                      type="number"
                      min={0}
                      value={costFuel}
                      onChange={(e) => setCostFuel(Math.max(0, Number(e.target.value)))}
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-mono text-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cost-elec"
                      className="font-mono text-xs uppercase tracking-wider text-muted"
                    >
                      $/km eléctrico
                    </label>
                    <input
                      id="cost-elec"
                      type="number"
                      min={0}
                      value={costElec}
                      onChange={(e) => setCostElec(Math.max(0, Number(e.target.value)))}
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-mono text-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-brand-gradient p-6 text-paper">
                  <p className="font-mono text-xs uppercase tracking-wider text-paper/80">
                    Ahorro estimado por mes
                  </p>
                  <p className="mt-2 font-display text-4xl font-extrabold lg:text-5xl">
                    <AnimatedValue value={monthlySaving} format={fmtMoney} />
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-volt bg-volt/10 p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink/70">
                    CO₂ evitado por mes
                  </p>
                  <p className="mt-2 font-display text-4xl font-extrabold text-ink lg:text-5xl">
                    <AnimatedValue value={monthlyCo2} format={fmtKg} />
                  </p>
                </div>
              </div>
            </div>

            <p className="px-6 pb-6 font-mono text-xs text-muted sm:px-10">
              Estimación. Valores de referencia, ajustables a tu operación.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
