"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

/**
 * Navbar sticky translúcido. Cambia a fondo sólido al hacer scroll.
 * Incluye menú accesible para mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-zuna flex h-16 items-center justify-between"
        aria-label="Navegación principal"
      >
        <a href="#inicio" aria-label={`Inicio · ZUNA`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            onClick={() => trackEvent("cta_cotizar", { location: "navbar" })}
            className="hidden btn-volt px-5 py-2.5 text-sm sm:inline-flex"
          >
            Cotizar
          </a>

          {/* Toggle mobile */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 bg-ink transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink/10 bg-paper/95 backdrop-blur-lg transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-zuna flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink/85 hover:bg-ink/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-1 pt-2">
            <a
              href="#contacto"
              onClick={() => {
                setOpen(false);
                trackEvent("cta_cotizar", { location: "navbar_mobile" });
              }}
              className="btn-volt w-full"
            >
              Cotizar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
