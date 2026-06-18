import { brand } from "@/lib/brand";

/**
 * Wordmark de ZUNA + pequeño "pulso" (sello de marca).
 * El nombre se toma de lib/brand.ts para swap inmediato.
 */
export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-display text-2xl font-extrabold tracking-tight ${
        dark ? "text-paper" : "text-ink"
      } ${className}`}
    >
      {brand.name}
      {/* Pulso: mini onda en lima como punto sobre la marca. */}
      <svg
        width="26"
        height="12"
        viewBox="0 0 26 12"
        fill="none"
        aria-hidden="true"
        className="translate-y-[-1px]"
      >
        <path
          d="M0 6h7l2-4 3 8 2-4h12"
          stroke="rgb(var(--color-volt))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
