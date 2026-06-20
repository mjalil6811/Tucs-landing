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
    copy: "Reparto urbano silencioso y barato. Ideal para comercios, farmacias y apps de envío.",
    cta: "Equipar mi reparto",
    interest: "Delivery",
  },
  {
    id: "carga",
    icon: "cargo",
    title: "Carga liviana",
    copy: "Mové mercadería por la ciudad sin gastar en nafta. Versiones de carga disponibles.",
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

/** Stats de la operación con GOU (placeholders editables, no son ventas de EVOTUC). */
export const cityStats = [
  { value: 80, suffix: "+", label: "Unidades activas" },
  { value: 1200, suffix: "+", label: "Viajes por día" },
  { value: 90, suffix: " días", label: "Para activar una ciudad" },
];

export const cityPipeline = ["Posadas", "Corrientes", "San Francisco", "Nordelta"];

export const socialStats = [
  { value: 100, suffix: "%", label: "Eléctrico" },
  { value: 0, suffix: " L", label: "De nafta por mes" },
  { value: 5, suffix: " años", label: "Vida útil de batería estimada" },
  { value: 24, suffix: " h", label: "Soporte y repuestos locales" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pasé de alquilar a tener mi propia unidad. El gasto diario bajó muchísimo y no dependo de la nafta.",
    name: "Conductor (placeholder)",
    role: "Pasajeros · Reconquista, Santa Fe",
  },
  {
    quote:
      "Sumamos triciclos al reparto y el costo por entrega se desplomó. Encima, silencioso y sin humo.",
    name: "Comercio (placeholder)",
    role: "Delivery · última milla",
  },
];

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "¿Cómo es el patentamiento?",
    a: "Te acompañamos en la gestión y documentación necesaria según la normativa de tu provincia/municipio. La unidad cuenta con certificaciones de importación y batería (UN38.3).",
  },
  {
    q: "¿Cuál es la autonomía real?",
    a: "El modelo HB1500DZK-21 rinde entre 100 y 120 km por carga, según peso transportado, terreno, uso del A/C y estilo de manejo.",
  },
  {
    q: "¿Cuánto tarda y cómo se carga?",
    a: "Carga completa en 6 a 8 horas con toma domiciliaria estándar (sin instalación especial). Ideal para cargar de noche y arrancar el día al 100%.",
  },
  {
    q: "¿Qué garantía tiene?",
    a: "Garantía de fábrica más postventa, repuestos y soporte técnico en el país. Te damos respaldo real, no solo el equipo.",
  },
  {
    q: "¿Hay financiación o leasing?",
    a: "Sí. Ofrecemos compra directa, leasing (alquiler con opción a compra) y condiciones especiales para flotas y operadores.",
  },
  {
    q: "¿Cuánto demora la entrega e importación?",
    a: "Trabajamos con stock y reposición programada. Los plazos dependen del volumen y la configuración (pasajeros o carga); te los confirmamos al cotizar.",
  },
];

export const interestOptions = [
  "Comprar",
  "Leasing",
  "Flota",
  "Delivery",
  "Operar una ciudad",
] as const;
