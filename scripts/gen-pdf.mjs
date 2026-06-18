// Genera un PDF placeholder válido (ficha técnica) con xref correcto.
import { writeFileSync } from "node:fs";

const lines = [
  "ZUNA - Ficha tecnica",
  "Modelo HB1500DZK-21",
  "",
  "Motorizacion: 100% electrico",
  "Autonomia: 100-120 km",
  "Capacidad: 5-6 pasajeros",
  "Bateria: litio 60V / 6 kWh",
  "Tiempo de carga: 6-8 h",
  "Velocidad maxima: 35 km/h",
  "Carga util: hasta 500 kg",
  "Motor: 2 kW",
  "Triciclo cerrado, 5 puertas, A/C de techo, panel solar.",
  "",
  "Disponible en configuracion pasajeros y carga.",
  "Placeholder - reemplazar por la ficha tecnica oficial.",
];

let y = 760;
let content = "BT /F1 16 Tf 60 790 Td (ZUNA) Tj ET\n";
for (const line of lines) {
  content += `BT /F1 11 Tf 60 ${y} Td (${line.replace(/[()\\]/g, "\\$&")}) Tj ET\n`;
  y -= 20;
}

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${content.length} >>\nstream\n${content}endstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((obj, i) => {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});

const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
offsets.forEach((off) => {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

writeFileSync(new URL("../public/ficha-tecnica.pdf", import.meta.url), pdf, "latin1");
console.log("PDF generado: public/ficha-tecnica.pdf");
