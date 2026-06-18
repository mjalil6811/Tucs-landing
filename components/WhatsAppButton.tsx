"use client";

import { brand, whatsappLink } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

/**
 * Botón flotante de WhatsApp, presente en toda la página.
 */
export default function WhatsAppButton() {
  const msg = `Hola ${brand.name}, quiero más info sobre los triciclos eléctricos.`;

  return (
    <a
      href={whatsappLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("contact", { canal: "whatsapp_float" })}
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 focus-visible:outline-offset-4"
    >
      <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
