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
  icon: "passengers" | "delivery" | "cargo" | "fleet" | "city" | "tourism";
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
  {
    id: "turismo",
    icon: "tourism",
    title: "Turismo y paseos",
    copy: "City tours y paseos eléctricos, silenciosos y sin humo. Ideal para municipios, hoteles y operadores turísticos.",
    cta: "Sumar turismo",
    interest: "Comprar",
  },
];

export type Spec = { label: string; value: string; unit?: string };

export const vehicleModel = "HB1500DZK-21";

export const vehicleSpecs: Spec[] = [
  { label: "Motorización", value: "100%", unit: "eléctrico" },
  { label: "Autonomía", value: "120–150", unit: "km" },
  { label: "Capacidad", value: "4", unit: "pasajeros" },
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

/** Stats del parque EVOTUC en operación (en alianza con GOU). */
export const cityStats = [
  { value: 25, suffix: "", label: "Unidades en el parque EVOTUC" },
  { value: 100, suffix: "", label: "Viajes diarios en operación" },
];

export const cityPipeline = ["Posadas", "Nordelta"];

export type SocialStat = {
  value: number;
  suffix: string;
  label: string;
  /** Prefijo opcional antes del número (p. ej. "hasta "). */
  prefix?: string;
  /** Si está presente, se muestra este texto en vez del contador animado. */
  display?: string;
};

/** Datos de producto del modelo HB1500DZK-21. */
export const socialStats: SocialStat[] = [
  { value: 100, suffix: "%", label: "Eléctrico" },
  { value: 0, suffix: " L", label: "De nafta" },
  { value: 120, suffix: "–150 km", label: "De autonomía" },
  { value: 500, prefix: "hasta ", suffix: " kg", label: "De carga" },
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
    a: "La autonomía estimada es de 120 a 150 km por carga, medida a velocidad constante de 30 km/h con carga nominal. En uso urbano real (arranques, paradas y carga variable) el rango efectivo depende de la operación, pero la batería de litio de 6 kWh cubre una jornada completa.",
  },
  {
    q: "¿Cuánto tarda y cómo se carga?",
    a: "La carga completa demora entre 6 y 8 horas en una toma domiciliaria estándar, sin infraestructura especial. Batería de litio de 60 V y 6 kWh (100 Ah), pensada para cargar de noche y operar todo el día.",
  },
  {
    q: "¿Qué garantía tiene?",
    a: "El vehículo cuenta con certificación de batería UN38.3 y certificaciones de importación. Incluye 12 meses de garantía comercial, con postventa y repuestos en el país.",
  },
  {
    q: "¿Hay financiación o leasing?",
    a: "Tres caminos: compra directa, leasing (alquiler con opción a compra) y condiciones para flotas. En el leasing trabajás con la unidad mientras pagás la cuota, hasta volverte dueño.",
  },
  {
    q: "¿Cuánto demora la entrega e importación?",
    a: "El plazo de entrega estimado es de 90 días desde la confirmación del pedido. Al cotizar te confirmamos disponibilidad y tiempos según stock y configuración.",
  },
];

export const interestOptions = [
  "Comprar",
  "Leasing",
  "Flota",
  "Delivery",
  "Operar una ciudad",
] as const;
