import { brand, whatsappLink } from "@/lib/brand";
import { navLinks } from "@/lib/content";
import Logo from "@/components/Logo";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const socials = [
  { href: brand.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: brand.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: brand.social.facebook, label: "Facebook", Icon: FacebookIcon },
].filter((s) => s.href);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-16 text-paper">
      <div className="container-zuna">
        <div className="grid gap-10 border-b border-paper/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-paper/70">{brand.tagline}</p>
            <p className="mt-4 font-mono text-xs text-paper/50">
              Aliado operativo:{" "}
              <a
                href={brand.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-volt underline-offset-2 hover:underline"
              >
                {brand.partner.name}
              </a>
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-paper/15 text-paper/80 transition-colors hover:border-volt hover:text-volt"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del pie">
            <p className="font-mono text-xs uppercase tracking-wider text-paper/50">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-paper/80 transition-colors hover:text-volt"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-paper/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5 text-paper/80">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-volt"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {brand.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-volt"
                >
                  {brand.email}
                </a>
              </li>
              <li className="text-paper/60">{brand.address}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-paper/50 sm:flex-row">
          <p>
            © {year} {brand.legalName}. Todos los derechos reservados.
          </p>
          <ul className="flex gap-5">
            <li>
              <a href="#" className="hover:text-paper/80">
                Aviso legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-paper/80">
                Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
