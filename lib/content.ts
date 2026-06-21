/**
 * Contenido editable de la landing (copy + datos).
 * Las specs del vehículo son reales (modelo HB1500DZK-21). No incluir precios.
 */

export const navLinks = [
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "El vehículo", href: "#el-vehiculo" },
  { label: "Ahorro", href: "#ahorro" },
  { label: "Para ciudades", href: "#para-ciudades" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const trustChips = [
  "100% eléctrico",
  "Certificación UN38.3",
  "Garantía y repuestos en el país",
] as const;

export type UseCase = {
  id: string;
  icon: "passengers" | "delivery" | "cargo" | "fleet" | "city";
  title: string;
  copy: string;
  cta: string;
  interest: string; // valor para el selector del formulario
};

export const useCases: UseCase[] = [
  {
    id: "pasajeros",
    icon: "passengers",
    title: "Pasajeros (B2C)",
    copy: "Sumate como conductor y volvete dueño de tu unidad y de tu tiempo. El modelo que ya rueda con GOU.",
    cta: "Quiero ser dueño",
    interest: "Comprar",
  },
  {
    id: "delivery",
    icon: "delivery",
    title: "Delivery y última milla",
    copy: "Reparto urbano silencioso, económico y sin emisiones. Ideal para comercios, farmacias y apps de envío.",
    cta: "Equipar mi reparto",
    interest: "Delivery",
  },
  {
    id: "carga",
    icon: "cargo",
    title: "Carga liviana",
    copy: "Mové mercadería por la ciudad sin nafta y sin emisiones. Versiones de carga disponibles.",
    cta: "Ver versión carga",
    interest: "Comprar",
  },
  {
    id: "flotas",
    icon: "fleet",
    title: "Flotas y empresas (B2B)",
    copy: "Equipá tu operación con unidades, repuestos y soporte. Financiación para flotas.",
    cta: "Cotizar flota",
    interest: "Flota",
  },
  {
    id: "ciudades",
    icon: "city",
    title: "Ciudades y operadores",
    copy: "Abrí una ciudad con un modelo ya probado. Activación en ~90 días.",
    cta: "Operar en mi ciudad",
    interest: "Operar una ciudad",
  },
];

export type Spec = { label: string; value: string; unit?: string };

export const vehicleModel = "HB1500DZK-21";

export const vehicleSpecs: Spec[] = [
  { label: "Motorización", value: "100%", unit: "eléctrico" },
  { label: "Autonomía", value: "100–120", unit: "km" },
  { label: "Capacidad", value: "5–6", unit: "pasajeros" },
  { label: "Batería litio", value: "60V / 6", unit: "kWh" },
  { label: "Tiempo de carga", value: "6–8", unit: "h" },
  { label: "Velocidad máx.", value: "35", unit: "km/h" },
  { label: "Carga útil", value: "hasta 500", unit: "kg" },
  { label: "Motor", value: "2", unit: "kW" },
];

export const vehicleFeatures = [
  "Triciclo cerrado",
  "5 puertas",
  "A/C de techo",
  "Panel solar",
];

export type JoinPlan = {
  title: string;
  copy: string;
  highlight?: boolean;
};

export const joinPlans: JoinPlan[] = [
  {
    title: "Compra directa",
    copy: "Pagás y es tuyo. Entrega rápida, garantía de fábrica.",
  },
  {
    title: "Leasing",
    copy: "Alquiler con opción a compra. Trabajás, pagás la cuota y te volvés dueño.",
    highlight: true,
  },
  {
    title: "Flotas",
    copy: "Volumen para operadores y empresas, con precio y soporte a medida.",
  },
];

/** Stats de la operación con GOU (no son ventas de EVOTUC). */
export const cityStats = [
  { value: 5, suffix: "", label: "Unidades activas" },
  { value: 50, suffix: "–90", label: "Viajes por día" },
  { value: 90, suffix: " días", label: "Para activar una ciudad" },
];

export const cityPipeline = ["Posadas", "Corrientes", "San Francisco", "Nordelta"];

export type SocialStat = {
  value: number;
  suffix: string;
  label: string;
  /** Si está presente, se muestra este texto en vez del contador animado. */
  display?: string;
};

export const socialStats: SocialStat[] = [
  { value: 100, suffix: "%", label: "Eléctrico" },
  { value: 0, suffix: " L", label: "Nafta por mes" },
  // TODO: definir vida útil real de batería (no inventar número).
  { value: 0, suffix: "", display: "Estimada", label: "Vida útil de batería" },
  // TODO: confirmar tiempo/alcance real de soporte y repuestos locales.
  { value: 24, suffix: " h", label: "Soporte y repuestos locales" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO: agregar testimonios reales (sin placeholders). La sección queda oculta
// mientras este array esté vacío.
export const testimonials: Testimonial[] = [];

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "¿Cómo es el patentamiento?",
    a: "Te acompañamos en la gestión y documentación necesaria según la normativa de tu provincia/municipio. La unidad cuenta con certificaciones de importación y batería (UN38.3).",
  },
  {
    q: "¿Cuál es la autonomía real?",
    // TODO: confirmar autonomía real medida (no usar dato de catálogo sin verificar).
    a: "Estamos confirmando esta información. Escribinos por WhatsApp y te respondemos al instante.",
  },
  {
    q: "¿Cuánto tarda y cómo se carga?",
    // TODO: confirmar tiempo de carga y tipo de toma real.
    a: "Estamos confirmando esta información. Escribinos por WhatsApp y te respondemos al instante.",
  },
  {
    q: "¿Qué garantía tiene?",
    // TODO: confirmar cobertura y plazo de garantía real con MALER.
    a: "Estamos confirmando esta información. Escribinos por WhatsApp y te respondemos al instante.",
  },
  {
    q: "¿Hay financiación o leasing?",
    // TODO: confirmar opciones de financiación/leasing disponibles.
    a: "Estamos confirmando esta información. Escribinos por WhatsApp y te respondemos al instante.",
  },
  {
    q: "¿Cuánto demora la entrega e importación?",
    // TODO: confirmar plazos reales de entrega e importación.
    a: "Estamos confirmando esta información. Escribinos por WhatsApp y te respondemos al instante.",
  },
];

export const interestOptions = [
  "Comprar",
  "Leasing",
  "Flota",
  "Delivery",
  "Operar una ciudad",
] as const;
