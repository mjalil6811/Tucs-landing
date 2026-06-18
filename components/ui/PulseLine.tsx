"use client";

import { useReducedMotion } from "framer-motion";

/**
 * ELEMENTO SIGNATURE de ZUNA: "el pulso eléctrico / el silencio".
 * El tuk-tuk eléctrico ya no hace "tuk-tuk": va en silencio. Esta onda de pulso
 * en lima recorre la página (hero, divisores y calculadora).
 *
 * Respeta prefers-reduced-motion: si está activo, muestra la línea estática.
 */
export default function PulseLine({
  className = "",
  color = "rgb(var(--color-volt))",
  strokeWidth = 3,
  /** "subtle" para divisores, "active" para hero/calculadora (más amplitud). */
  variant = "subtle",
  ariaHidden = true,
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
  variant?: "subtle" | "active";
  ariaHidden?: boolean;
}) {
  const reduce = useReducedMotion();

  // Trazado de onda: zona plana (silencio) + un latido (pulso) + plano.
  const path =
    variant === "active"
      ? "M0,20 L120,20 150,20 165,6 180,34 195,20 210,20 240,20 255,8 270,32 285,20 600,20"
      : "M0,20 L160,20 180,12 200,28 220,20 380,20 400,12 420,28 440,20 600,20";

  return (
    <svg
      className={className}
      viewBox="0 0 600 40"
      fill="none"
      preserveAspectRatio="none"
      role={ariaHidden ? "presentation" : "img"}
      aria-hidden={ariaHidden}
    >
      {/* Base tenue para dar continuidad a la línea. */}
      <path d={path} stroke={color} strokeOpacity="0.25" strokeWidth={strokeWidth} />
      {/* Pulso animado que "viaja" a lo largo de la línea. */}
      <path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="60 540"
        className={reduce ? "" : "animate-pulse-dash"}
        style={{ filter: "drop-shadow(0 0 6px rgba(198,242,78,0.6))" }}
      />
    </svg>
  );
}
