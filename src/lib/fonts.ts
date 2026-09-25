import localFont from "next/font/local";

/** Polices auto-hébergées (OFL) — aucun CDN tiers (CNIL). */
export const bebas = localFont({
  src: [
    { path: "../fonts/bebas-neue-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/bebas-neue-latin-ext-400-normal.woff2", weight: "400" },
  ],
  variable: "--font-bebas",
  display: "swap",
});

export const montserrat = localFont({
  src: [
    { path: "../fonts/montserrat-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/montserrat-latin-600-normal.woff2", weight: "600" },
    { path: "../fonts/montserrat-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});
