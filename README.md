# EVOTUC — Landing de movilidad eléctrica

Landing page de alta conversión para **EVOTUC** (marca comercial de **MALER S.A.S.**), importadora y comercializadora oficial de movilidad eléctrica en Argentina, aliado de **GOU**.

Construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**. Mobile-first, accesible (AA) y lista para deploy en Vercel.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (tokens vía CSS variables)
- **Framer Motion** (reveals, contadores, pulso animado; respeta `prefers-reduced-motion`)
- Fuentes **self-hosted** vía `next/font`: Bricolage Grotesque (display), Inter (texto), Space Mono (datos/eyebrows)
- SEO técnico: metadata, Open Graph, favicon, `sitemap.xml`, `robots.txt`, JSON-LD
- Analytics: **GA4 + Meta Pixel** con eventos en cada CTA (ver `lib/analytics.ts`)

## Cómo correr

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm start           # servir build
npm run lint         # lint
```

## Personalización rápida (swap de marca)

Todo el branding está centralizado:

- **`lib/brand.ts`** → nombre, contacto, WhatsApp, redes, dominio, integraciones (Formspree/GA4/Pixel) y **paleta de color**.
- **`app/globals.css`** (`:root`) → mismas variables de color para Tailwind.
- **`lib/content.ts`** → todo el copy y datos (casos de uso, specs del vehículo, modelos de inversión, FAQ, stats, testimonios). Es la única fuente de contenido: no hardcodear textos en los componentes.

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

**El pulso eléctrico / el silencio**: una onda en lima (`components/ui/PulseLine.tsx`) que recorre el hero y los divisores de sección. Representa que el triciclo eléctrico va en silencio.

## Estructura

```
app/             layout, page, globals.css, sitemap, robots
components/       Navbar, Logo, Analytics, WhatsAppButton
  sections/       Hero, AllianceBar, UseCases, InvestorModels, Vehicle,
                  Cities, SocialProof, FAQ, ContactCTA, Footer
  ui/             PulseLine, Reveal, Counter, SectionDivider, Icons
lib/             brand.ts (tokens), content.ts (copy), analytics.ts
public/          favicon.svg, og.svg, ficha-tecnica.pdf, images/
```

## Notas de contenido

- Specs reales del modelo **SANDI SD7500-KKDZK-1** ("EVOTUC City 7500"). **No se muestran precios** ("Cotizá").
- EVOTUC es la **importadora**; es **aliado de GOU**. Las métricas de ciudades corresponden a la operación con GOU.
- La sección de inversores (`components/sections/InvestorModels.tsx`, ancla `#invertir`) sigue reglas de contenido estrictas: sin cifras, sin rentabilidades ni nombres de fabricantes. El detalle de cada modelo se da en una reunión, no en la web.
- `public/images/evotuc-city7500-*.{jpg,png}` son fotos de catálogo del fabricante, marcadas como ilustrativas en el sitio hasta contar con fotos propias de unidades EVOTUC.

## Deploy en Vercel

El repo despliega automáticamente a producción en cada push a `main` vía `.github/workflows/deploy-vercel.yml` (usa los secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID` del repositorio). También se puede importar el proyecto directamente en Vercel (detecta Next.js automáticamente).
