import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Space_Mono } from "next/font/google";
import { brand } from "@/lib/brand";
import Analytics from "@/components/Analytics";
import "./globals.css";

/* ---------------------------------------------------------------------------
   FUENTES self-hosted vía next/font (se descargan en build, sin requests a
   Google en runtime). Display: Bricolage Grotesque · Texto: Inter · Mono:
   Space Mono (eyebrows, datos y specs).
   --------------------------------------------------------------------------- */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: brand.colors.primary,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} · Movilidad eléctrica sustentable para personas, paquetes y carga`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "triciclo eléctrico",
    "movilidad eléctrica Argentina",
    "vehículo eléctrico delivery",
    "carga liviana eléctrica",
    "importador vehículos eléctricos",
    brand.name,
    "GOU",
  ],
  authors: [{ name: brand.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: brand.url,
    siteName: brand.name,
    title: `${brand.name} · Movilidad eléctrica sustentable para personas, paquetes y carga`,
    description: brand.description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${brand.name} — movilidad eléctrica`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} · Movilidad eléctrica sustentable para personas, paquetes y carga`,
    description: brand.description,
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Skip link para accesibilidad (teclado / lectores de pantalla). */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Saltar al contenido
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
