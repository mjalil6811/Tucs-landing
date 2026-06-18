import type { Config } from "tailwindcss";

/**
 * Los colores se leen desde CSS variables definidas en app/globals.css,
 * que a su vez derivan de los tokens en lib/brand.ts. Para cambiar la paleta,
 * editá lib/brand.ts y app/globals.css (:root).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-bright": "rgb(var(--color-primary-bright) / <alpha-value>)",
        volt: "rgb(var(--color-volt) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20, 16, 31, 0.18)",
        lift: "0 24px 60px -18px rgba(109, 40, 217, 0.35)",
      },
      keyframes: {
        "pulse-dash": {
          to: { strokeDashoffset: "-1000" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dash": "pulse-dash 8s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
