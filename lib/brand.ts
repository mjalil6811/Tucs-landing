/**
 * ============================================================================
 *  EVOTUC · TOKENS DE MARCA (single source of truth)
 * ============================================================================
 *  Cambiá acá el nombre, contacto, colores, redes e IDs de tracking y se
 *  propaga a todo el sitio. NOMBRE DE TRABAJO: EVOTUC (placeholder swappeable).
 *
 *  - Para cambiar el nombre de la marca: editá `brand.name`.
 *  - Para cambiar la paleta: editá `colors` (también reflejados en
 *    tailwind.config.ts vía CSS variables en app/globals.css).
 *  - Para conectar formularios/tracking: completá las constantes de `integrations`.
 * ============================================================================
 */

export const brand = {
  /** NOMBRE DE TRABAJO — reemplazable en segundos desde acá. */
  name: "EVOTUC",
  /** Razón social / nombre legal (footer, avisos). */
  legalName: "MALER S.A.S.",
  /** Tagline corto de marca. */
  tagline: "Movilidad eléctrica que mueve tu negocio.",
  /** Descripción para SEO / Open Graph. */
  description:
    "Importamos y comercializamos vehículos 100% eléctricos para pasajeros, delivery y carga. Cero emisiones, menor costo por kilómetro y un modelo para que el vehículo sea tuyo. Aliado de GOU.",

  /** Dominio canónico para SEO (sin slash final). */
  url: "https://evotuc.com.ar",

  /** Contacto */
  email: "info@evotuc.com",
  /** WhatsApp en formato internacional sin "+" ni espacios (para wa.me). */
  whatsapp: "5493513902753",
  /** WhatsApp para mostrar al usuario. */
  whatsappDisplay: "+54 9 351 390 2753",
  /** Dirección física (footer). */
  // TODO VERIFICAR: abreviatura "Pulv.", altura y barrio/CP.
  address: "Pulv. Soldado Ramón Cabrera, Córdoba Capital, Argentina",

  /** Aliado de GOU. */
  partner: {
    name: "GOU",
    url: "https://gou.ar/",
  },

  /** Redes sociales (dejá "" para ocultar). */
  social: {
    instagram: "https://instagram.com/evotuc",
    linkedin: "https://linkedin.com/company/evotuc",
    facebook: "https://facebook.com/evotuc",
  },

  /**
   * Integraciones conectables.
   * - formspreeEndpoint: pegá tu endpoint de Formspree (https://formspree.io/f/xxxx)
   *   o dejá "" para que el form abra WhatsApp con el mensaje prearmado.
   * - ga4Id / metaPixelId: dejá "" para deshabilitar el tracking.
   */
  integrations: {
    formspreeEndpoint: "",
    ga4Id: "", // p.ej. "G-XXXXXXXXXX"
    metaPixelId: "", // p.ej. "1234567890"
  },

  /**
   * Paleta de marca (tokens). También expuestos como CSS variables en
   * app/globals.css y consumidos por tailwind.config.ts.
   */
  colors: {
    primary: "#6D28D9", // Violeta primario (guiño a GOU)
    primaryBright: "#8B5CF6", // Violeta brillante (gradientes / acentos)
    volt: "#C6F24E", // Lima eléctrica (CTAs y detalles — texto oscuro encima)
    ink: "#14101F", // Texto y secciones oscuras
    paper: "#FAF9FC", // Fondo claro
    muted: "#6B6478", // Texto secundario
  },
} as const;

/** Construye un link de wa.me con mensaje prearmado opcional. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${brand.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Brand = typeof brand;
