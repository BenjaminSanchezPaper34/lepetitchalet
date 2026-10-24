"use client";

import { useEffect } from "react";

/**
 * Sur ordinateur (souris, pas d'écran tactile), un lien wa.me passe par une page intermédiaire
 * qui tente d'ouvrir l'appli WhatsApp de bureau, et le visiteur peut tomber sur un appel au lieu
 * d'une conversation. On envoie donc directement vers WhatsApp Web, conversation ouverte et
 * message de réservation pré-rempli. Sur téléphone, wa.me ouvre l'appli : on n'y touche pas.
 */
export default function WhatsAppOrdinateur() {
  useEffect(() => {
    const ordinateur = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onClick = (e: MouseEvent) => {
      if (!ordinateur.matches) return;
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="https://wa.me/"]') as HTMLAnchorElement | null;
      if (!a) return;
      const url = new URL(a.href);
      const tel = url.pathname.replace(/\D/g, "");
      const texte = url.searchParams.get("text") ?? "";
      e.preventDefault();
      window.open(`https://web.whatsapp.com/send?phone=${tel}&text=${encodeURIComponent(texte)}`, "_blank", "noopener");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
