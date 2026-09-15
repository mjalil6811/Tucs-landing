/**
 * Contenido editable de la landing (copy + datos).
 * Las specs del vehículo son reales (modelo SANDI SD7500-KKDZK-1, "EVOTUC City 7500").
 * No incluir precios.
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
    copy: "Sumate como conductor y volvete dueño de tu unidad y de tu tiempo, en alianza con GOU.",
    cta: "Quiero ser dueño",
    interest: "Comprar",
    image: "/images/catalogo/evotuc-city.png",
    alt: "Triciclo eléctrico de pasajeros para B2C",
  },
  {
    id: "delivery",
    icon: "delivery",
    title: "Delivery y última milla",
    copy: "Reparto urbano silencioso, económico y sin emisiones. Ideal para comercios, farmacias y apps de envío.",
    cta: "Equipar mi reparto",
    interest: "Delivery",
    image: "/images/catalogo/evotuc-reparto.png",
    alt: "Furgón eléctrico para delivery y última milla",
  },
  {
    id: "carga",
    icon: "cargo",
    title: "Carga liviana",
    copy: "Mové mercadería por la ciudad sin nafta y sin emisiones. Versiones de carga disponibles.",
    cta: "Ver versión carga",
    interest: "Comprar",
    image: "/images/catalogo/evotuc-carga.png",
    alt: "Triciclo eléctrico de carga liviana",
  },
  {
    id: "flotas",
    icon: "fleet",
    title: "Flotas y empresas (B2B)",
    copy: "Equipá tu operación con unidades, repuestos y soporte. Financiación para flotas.",
    cta: "Cotizar flota",
    interest: "Flota",
    image: "/images/catalogo/evotuc-flota.png",
    alt: "Flota de vehículos eléctricos EVOTUC",
  },
  {
    id: "ciudades",
    icon: "city",
    title: "Ciudades y operadores",
    copy: "Abrí una ciudad con un modelo ya probado. Activación en ~90 días.",
    cta: "Operar en mi ciudad",
    interest: "Operar una ciudad",
    image: "/images/catalogo/evotuc-mini.png",
    alt: "Minicab eléctrico para operación en ciudades",
  },
  {
    id: "turismo",
    icon: "tourism",
    title: "Turismo y paseos",
    copy: "City tours y paseos eléctricos, silenciosos y sin humo. Ideal para municipios, hoteles y operadores turísticos.",
    cta: "Sumar turismo",
    interest: "Comprar",
    image: "/images/catalogo/evotuc-paseo.png",
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
    id: "evotuc-city",
    tipo: "PASAJEROS",
    nombre: "EVOTUC City 7500",
    image: "/images/catalogo/evotuc-city.png",
    alt: "Triciclo eléctrico de pasajeros EVOTUC City 7500, tipo tuk-tuk",
    specs: [
      "Motor brushless 7,5 kW · 72V",
      "Batería litio 76,8V / 168Ah",
      "Autonomía 221 km · 72 km/h máx.",
      "3 pasajeros · frenos hidráulicos",
    ],
  },
  {
    id: "evotuc-carga",
    tipo: "CARGA",
    nombre: "EVOTUC Carga",
    image: "/images/catalogo/evotuc-carga.png",
    alt: "Triciclo eléctrico de carga abierta EVOTUC Carga",
    specs: [
      "Motor 1200/2200W",
      "Batería 45/58Ah",
      "Autonomía 50–80 km",
      "Caja 1500×1100 mm",
    ],
  },
  {
    id: "evotuc-moto",
    tipo: "MOTO ELÉCTRICA",
    nombre: "EVOTUC Moto",
    image: "/images/catalogo/evotuc-moto.png",
    alt: "Motocicleta eléctrica EVOTUC Moto",
    specs: [
      "Motor 72V · 2000W",
      "Batería litio 72V/30Ah",
      "Autonomía 90 km",
      "Certificación EEC",
    ],
  },
  {
    id: "evotuc-mini",
    tipo: "MINICAB",
    nombre: "EVOTUC Mini",
    image: "/images/catalogo/evotuc-mini.png",
    alt: "Minicab eléctrico de cabina cerrada EVOTUC Mini",
    specs: [
      "Motor 1100/1500W",
      "Batería 60V/58Ah",
      "Autonomía 60–70 km",
      "Cabina cerrada",
    ],
  },
  {
    id: "evotuc-reparto",
    tipo: "DELIVERY / FURGÓN",
    nombre: "EVOTUC Reparto",
    image: "/images/catalogo/evotuc-reparto.png",
    alt: "Furgón eléctrico de reparto EVOTUC Reparto",
    specs: [
      "Motor 1000W",
      "Batería 58Ah",
      "Autonomía 60–80 km",
      "Caja cerrada 1400×900×975 mm",
    ],
  },
  {
    id: "evotuc-paseo",
    tipo: "TURISMO",
    nombre: "EVOTUC Paseo",
    image: "/images/catalogo/evotuc-paseo.png",
    alt: "Triciclo eléctrico de paseo EVOTUC Paseo",
    specs: [
      "Motor 650W",
      "Batería 20Ah",
      "Autonomía 40–50 km",
      "Asientos tipo paseo",
    ],
  },
];

export type Spec = { label: string; value: string; unit?: string };

export const vehicleModel = "SD7500-KKDZK-1";

export const vehicleSpecs: Spec[] = [
  { label: "Autonomía", value: "221", unit: "km" },
  { label: "Velocidad máx.", value: "72", unit: "km/h" },
  { label: "Potencia", value: "7,5", unit: "kW · 72V" },
  { label: "Capacidad", value: "3", unit: "pasajeros" },
  { label: "Batería litio", value: "76,8V / 168", unit: "Ah" },
  { label: "Pendiente máx.", value: "≥ 35", unit: "%" },
  { label: "Frenos", value: "Hidráulicos", unit: "20 m" },
  { label: "Controlador", value: "Smart 72V", unit: "IP67" },
];

export const vehicleFeatures = [
  "3 pasajeros",
  "Eje diferencial integrado",
  "Frenos hidráulicos",
  "Componentes IP67",
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

/** Datos de producto del modelo SD7500-KKDZK-1 (EVOTUC City 7500). */
export const socialStats: SocialStat[] = [
  { value: 100, suffix: "%", label: "Eléctrico" },
  { value: 0, suffix: " L", label: "De nafta" },
  { value: 221, suffix: " km", label: "De autonomía" },
  { value: 72, suffix: " km/h", label: "Velocidad máxima" },
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
    a: "El fabricante certifica 221 km de autonomía por carga para el EVOTUC City 7500, con una batería de litio de 76,8 V / 168 Ah (aprox. 12,9 kWh). En uso urbano real (arranques, paradas y carga variable) el rango efectivo puede variar según la operación, pero está dimensionada para cubrir una jornada completa de servicio con una sola carga.",
  },
  {
    q: "¿Cuánto tarda y cómo se carga?",
    a: "Se carga sobre una toma domiciliaria estándar, sin infraestructura especial, pensada para una carga nocturna que cubra toda la jornada siguiente. El tiempo exacto depende del cargador de la unidad; te lo confirmamos al cotizar.",
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
