/**
 * Contenido editable de la landing (copy + datos).
 * Las specs del vehículo son reales (modelo HB1500DZK-21). No incluir precios.
 */

export const navLinks = [
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Catálogo de productos", href: "#catalogo" },
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
  image: string; // ruta en public/ (PNG con fondo transparente)
  alt: string;
};

export const useCases: UseCase[] = [
  {
    id: "pasajeros",
    icon: "passengers",
    title: "Pasajeros (B2C)",
    copy: "Sumate como conductor y volvete dueño de tu unidad y de tu tiempo. El modelo que ya rueda con GOU.",
    cta: "Quiero ser dueño",
    interest: "Comprar",
    image: "/images/catalogo/pasajeros-qj.png",
    alt: "Triciclo eléctrico de pasajeros para B2C",
  },
  {
    id: "delivery",
    icon: "delivery",
    title: "Delivery y última milla",
    copy: "Reparto urbano silencioso, económico y sin emisiones. Ideal para comercios, farmacias y apps de envío.",
    cta: "Equipar mi reparto",
    interest: "Delivery",
    image: "/images/catalogo/furgon-ky5.png",
    alt: "Furgón eléctrico para delivery y última milla",
  },
  {
    id: "carga",
    icon: "cargo",
    title: "Carga liviana",
    copy: "Mové mercadería por la ciudad sin nafta y sin emisiones. Versiones de carga disponibles.",
    cta: "Ver versión carga",
    interest: "Comprar",
    image: "/images/catalogo/carga-h21.png",
    alt: "Triciclo eléctrico de carga liviana",
  },
  {
    id: "flotas",
    icon: "fleet",
    title: "Flotas y empresas (B2B)",
    copy: "Equipá tu operación con unidades, repuestos y soporte. Financiación para flotas.",
    cta: "Cotizar flota",
    interest: "Flota",
    image: "/images/catalogo/flotas-lineup.png",
    alt: "Flota de vehículos eléctricos EVOTUC",
  },
  {
    id: "ciudades",
    icon: "city",
    title: "Ciudades y operadores",
    copy: "Abrí una ciudad con un modelo ya probado. Activación en ~90 días.",
    cta: "Operar en mi ciudad",
    interest: "Operar una ciudad",
    image: "/images/catalogo/minicab-qg58.png",
    alt: "Minicab eléctrico para operación en ciudades",
  },
  {
    id: "turismo",
    icon: "tourism",
    title: "Turismo y paseos",
    copy: "City tours y paseos eléctricos, silenciosos y sin humo. Ideal para municipios, hoteles y operadores turísticos.",
    cta: "Sumar turismo",
    interest: "Comprar",
    image: "/images/catalogo/turismo-hos2.png",
    alt: "Triciclo eléctrico para turismo y paseos",
  },
];

export type CatalogoProducto = {
  id: string;
  tipo: string; // rótulo/eyebrow (violeta, mayúsculas)
  nombre: string;
  image: string; // ruta en public/ (PNG con fondo transparente)
  alt: string;
  specs: string[]; // 3–4 specs reales, sin precio
};

/** Catálogo de productos EVOTUC (specs reales, sin precios). */
export const catalogoProductos: CatalogoProducto[] = [
  {
    id: "pasajeros-qj",
    tipo: "PASAJEROS",
    nombre: "Jinpeng QJ",
    image: "/images/catalogo/pasajeros-qj.png",
    alt: "Triciclo eléctrico de pasajeros Jinpeng QJ, cabina cerrada",
    specs: [
      "Motor 60V · 1000W",
      "Batería litio 64V/50Ah",
      "Autonomía 70 km",
      "5 puertas · 3 pasajeros",
    ],
  },
  {
    id: "carga-h21",
    tipo: "CARGA",
    nombre: "Huaihai H21-150/160",
    image: "/images/catalogo/carga-h21.png",
    alt: "Triciclo eléctrico de carga abierta Huaihai H21-150/160",
    specs: [
      "Motor 1200/2200W",
      "Batería 45/58Ah",
      "Autonomía 50–80 km",
      "Caja 1500×1100 mm",
    ],
  },
  {
    id: "moto-ego-plus",
    tipo: "MOTO ELÉCTRICA",
    nombre: "Jinpeng E-GO PLUS",
    image: "/images/catalogo/moto-ego-plus.png",
    alt: "Motocicleta eléctrica Jinpeng E-GO PLUS",
    specs: [
      "Motor 72V · 2000W",
      "Batería litio 72V/30Ah",
      "Autonomía 90 km",
      "Certificación EEC",
    ],
  },
  {
    id: "minicab-qg58",
    tipo: "MINICAB",
    nombre: "Huaihai QG58",
    image: "/images/catalogo/minicab-qg58.png",
    alt: "Minicab eléctrico de cabina cerrada Huaihai QG58",
    specs: [
      "Motor 900W",
      "Batería 60V/58Ah",
      "Autonomía 60–70 km",
      "Cabina cerrada",
    ],
  },
  {
    id: "furgon-ky5",
    tipo: "DELIVERY / FURGÓN",
    nombre: "Huaihai KY5",
    image: "/images/catalogo/furgon-ky5.png",
    alt: "Furgón eléctrico de reparto con caja cerrada Huaihai KY5",
    specs: [
      "Motor 1000W",
      "Batería 58Ah",
      "Autonomía 60–80 km",
      "Caja cerrada 1400×900×975 mm",
    ],
  },
  {
    id: "turismo-hos2",
    tipo: "TURISMO",
    nombre: "Huaihai HO-S2",
    image: "/images/catalogo/turismo-hos2.png",
    alt: "Triciclo eléctrico de paseo Huaihai HO-S2",
    specs: [
      "Motor 650W",
      "Batería 20Ah",
      "Autonomía 40–50 km",
      "Asientos tipo paseo",
    ],
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
