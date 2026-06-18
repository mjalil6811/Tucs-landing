import PulseLine from "./PulseLine";

/**
 * Divisor entre secciones con el pulso de marca (sello visual que se repite).
 */
export default function SectionDivider({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <div
      className={`relative h-10 w-full overflow-hidden ${dark ? "bg-ink" : ""}`}
      aria-hidden="true"
    >
      <PulseLine className="absolute inset-0 h-full w-full" variant="subtle" />
    </div>
  );
}
