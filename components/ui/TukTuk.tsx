/**
 * Ilustración vectorial del triciclo eléctrico cerrado (placeholder de producto).
 * Reemplazable por una foto webp real en /public sin tocar el resto del layout.
 */
export default function TukTuk({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 320"
      fill="none"
      role="img"
      aria-label="Triciclo eléctrico cerrado ZUNA, modelo de pasajeros"
    >
      {/* Sombra */}
      <ellipse cx="240" cy="280" rx="180" ry="18" fill="#000" opacity="0.18" />

      {/* Cuerpo / cabina */}
      <path
        d="M120 110c0-22 18-40 40-40h150c30 0 56 20 64 49l14 51c3 11-5 22-16 22H96c-12 0-22-10-22-22v-26c0-18 12-34 30-39l16-5z"
        fill="#FAF9FC"
        stroke="#14101F"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Techo con panel solar */}
      <path
        d="M150 70h150c8 0 16 3 22 9l-10 12H140l-6-12c4-6 10-9 16-9z"
        fill="#14101F"
      />
      <rect x="158" y="58" width="120" height="12" rx="3" fill="#6D28D9" />
      <line x1="178" y1="58" x2="178" y2="70" stroke="#FAF9FC" strokeWidth="2" />
      <line x1="198" y1="58" x2="198" y2="70" stroke="#FAF9FC" strokeWidth="2" />
      <line x1="218" y1="58" x2="218" y2="70" stroke="#FAF9FC" strokeWidth="2" />
      <line x1="238" y1="58" x2="238" y2="70" stroke="#FAF9FC" strokeWidth="2" />
      <line x1="258" y1="58" x2="258" y2="70" stroke="#FAF9FC" strokeWidth="2" />

      {/* Ventana / parabrisas (violeta) */}
      <path
        d="M150 96h54v40h-66c-2 0-4-2-3-4l9-30c1-4 4-6 6-6z"
        fill="#8B5CF6"
        opacity="0.85"
      />
      {/* Ventana pasajeros */}
      <rect x="214" y="96" width="92" height="40" rx="6" fill="#8B5CF6" opacity="0.85" />

      {/* Línea/raya lateral lima (acento de energía) */}
      <path d="M96 168h300" stroke="#C6F24E" strokeWidth="6" strokeLinecap="round" />

      {/* Faro */}
      <circle cx="388" cy="150" r="9" fill="#C6F24E" />

      {/* Ruedas */}
      <circle cx="150" cy="252" r="34" fill="#14101F" />
      <circle cx="150" cy="252" r="14" fill="#FAF9FC" />
      <circle cx="340" cy="252" r="34" fill="#14101F" />
      <circle cx="340" cy="252" r="14" fill="#FAF9FC" />

      {/* Símbolo eléctrico (rayo) en la puerta */}
      <path
        d="M250 150l-14 22h10l-4 20 16-26h-11l3-16z"
        fill="#C6F24E"
        stroke="#14101F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
