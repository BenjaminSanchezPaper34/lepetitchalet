import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { bebas, montserrat } from "@/lib/fonts";
import { htmlLang, type Locale } from "@/content/i18n";
import SmoothScroll from "./SmoothScroll";
import TrackClicks from "./TrackClicks";
import "../../app/globals.css";

/** Squelette commun aux trois racines de langue (fr, es, en). */
export default function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]} className={`${bebas.variable} ${montserrat.variable}`}>
      <head>
        {/* Classe js posée avant le premier rendu : évite le flash des reveals */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <SmoothScroll />
        <TrackClicks />
        <Analytics />
      </body>
    </html>
  );
}
