# ZUNA — Landing de movilidad eléctrica

Landing page de alta conversión para **ZUNA** (NOMBRE DE TRABAJO, swappeable), importadora y comercializadora oficial de movilidad eléctrica en Argentina, aliada estratégica de **GOU**.

Construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**. Mobile-first, accesible (AA) y lista para deploy en Vercel.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (tokens vía CSS variables)
- **Framer Motion** (reveals, contadores, pulso animado; respeta `prefers-reduced-motion`)
- Fuentes **self-hosted** vía `next/font`: Bricolage Grotesque (display), Inter (texto), Space Mono (datos/eyebrows)
- SEO técnico: metadata, Open Graph, favicon, `sitemap.xml`, `robots.txt`, JSON-LD
- Analytics: **GA4 + Meta Pixel** con eventos en cada CTA

## Cómo correr

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm start          # servir build
npm run lint       # lint
```

## Personalización rápida (swap de marca)

Todo el branding está centralizado:

- **`lib/brand.ts`** → nombre, contacto, WhatsApp, redes, dominio, integraciones (Formspree/GA4/Pixel) y **paleta de color**.
- **`app/globals.css`** (`:root`) → mismas variables de color para Tailwind.
- **`lib/content.ts`** → todo el copy y datos (casos de uso, specs, FAQ, stats, testimonios).

Para cambiar el **nombre de la marca** en todo el sitio: editá `brand.name` en `lib/brand.ts`.

### Conectar formularios y tracking

En `lib/brand.ts` → `integrations`:

```ts
integrations: {
  formspreeEndpoint: "https://formspree.io/f/xxxx", // o "" para abrir WhatsApp
  ga4Id: "G-XXXXXXXXXX",                            // o "" para desactivar
  metaPixelId: "1234567890",                        // o "" para desactivar
}
```

- Si `formspreeEndpoint` está vacío, el formulario abre **WhatsApp** con el mensaje prearmado.
- Si los IDs de analytics están vacíos, los scripts no se cargan (no rompe en dev).

## Elemento signature

**El pulso eléctrico / el silencio**: una onda en lima (`components/ui/PulseLine.tsx`) que recorre el hero, los divisores de sección y la calculadora. Representa que el triciclo eléctrico va en silencio.

## Estructura

```
app/            layout, page, globals.css, sitemap, robots
components/      Navbar, Logo, Analytics, WhatsAppButton
  sections/      Hero, AllianceBar, UseCases, Vehicle, Savings, HowToJoin,
                 Cities, SocialProof, FAQ, ContactCTA, Footer
  ui/            PulseLine, Reveal, Counter, SectionDivider, Icons, TukTuk
lib/            brand.ts (tokens), content.ts (copy), analytics.ts
public/         favicon.svg, og.svg, ficha-tecnica.pdf
scripts/        gen-pdf.mjs (regenera la ficha técnica placeholder)
```

## Notas de contenido

- Specs reales del modelo **HB1500DZK-21**. **No se muestran precios** ("Cotizá").
- ZUNA es la **importadora**; GOU es el **aliado operativo**. Las métricas de ciudades corresponden a la operación con GOU.
- Reemplazá la ilustración del triciclo (`components/ui/TukTuk.tsx`) y `public/og.svg` / `ficha-tecnica.pdf` por assets reales (preferentemente `.webp` para fotos).

## Deploy en Vercel

1. Push del repo a GitHub.
2. Importá el proyecto en Vercel (detecta Next.js automáticamente).
3. Configurá las constantes de `lib/brand.ts` (o moverlas a variables de entorno si preferís).
