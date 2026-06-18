/**
 * Helpers de tracking para GA4 + Meta Pixel.
 * Los eventos se disparan en cada CTA. Si los IDs están vacíos en lib/brand.ts,
 * las funciones no hacen nada (no rompen en dev/preview).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Registra una conversión/CTA en GA4 y Meta Pixel.
 * @param name  Nombre del evento (p.ej. "cta_cotizar").
 * @param params Parámetros extra opcionales.
 */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;

  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  // Meta Pixel — usamos eventos custom (trackCustom) salvo Lead/Contact.
  if (typeof window.fbq === "function") {
    if (name === "lead" || name === "contact") {
      window.fbq("track", name === "lead" ? "Lead" : "Contact", params);
    } else {
      window.fbq("trackCustom", name, params);
    }
  }
}
