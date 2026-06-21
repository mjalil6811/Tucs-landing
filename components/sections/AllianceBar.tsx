import { brand } from "@/lib/brand";
import { BoltIcon, CheckIcon } from "@/components/ui/Icons";

const items = [
  { icon: BoltIcon, text: "100% eléctrico" },
  { icon: CheckIcon, text: "Certificación UN38.3" },
  { icon: CheckIcon, text: "Garantía y repuestos en el país" },
];

export default function AllianceBar() {
  return (
    <section aria-label="Alianza con GOU" className="bg-ink py-5">
      <div className="container-evotuc flex flex-col items-center justify-between gap-4 text-paper sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-paper/80">
          En alianza con{" "}
          <span className="font-bold text-volt">{brand.partner.name}</span>
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {items.map((it) => (
            <li
              key={it.text}
              className="flex items-center gap-2 text-sm text-paper/90"
            >
              <it.icon className="h-4 w-4 text-volt" />
              {it.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
