"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/** Événements maison Vercel Analytics (sans cookie) : appel, WhatsApp, itinéraire, avis, réseaux, carte. */
const regles: [RegExp, string][] = [
  [/^tel:/i, "tel"],
  [/wa\.me/i, "whatsapp"],
  [/maps\.google|maps\.apple|waze\.com/i, "itineraire"],
  [/g\.page|tripadvisor/i, "avis"],
  [/instagram\.com/i, "instagram"],
  [/facebook\.com/i, "facebook"],
  [/\/(carte|carta|menu)$|\.pdf$/i, "carte"],
];

export default function TrackClicks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const r = regles.find(([re]) => re.test(href));
      if (r) track(r[1], { depuis: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
