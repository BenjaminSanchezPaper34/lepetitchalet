import localFont from "next/font/local";

/**
 * Polices auto-hébergées (OFL) — aucun CDN tiers (CNIL).
 * Alignées sur les supports imprimés : Outfit est le texte de la carte papier,
 * Crimson Pro remplace librement le Minion Pro de « RESTAURANT » sous le logo.
 */
export const bebas = localFont({
  src: [
    { path: "../fonts/bebas-neue-latin-400-normal.woff2", weight: "400" },
  ],
  variable: "--font-bebas",
  display: "swap",
});

export const outfit = localFont({
  src: [
    { path: "../fonts/outfit-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/outfit-latin-600-normal.woff2", weight: "600" },
    { path: "../fonts/outfit-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const crimson = localFont({
  src: [
    { path: "../fonts/crimson-pro-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-crimson",
  display: "swap",
  preload: false,
});
