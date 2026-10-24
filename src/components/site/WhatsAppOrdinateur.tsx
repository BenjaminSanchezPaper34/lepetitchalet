"use client";

import { useEffect } from "react";

/**
 * Sur ordinateur (souris, pas d'écran tactile), un lien wa.me passe par une page intermédiaire
 * et le visiteur pouvait tomber sur un appel au lieu d'une conversation. On vise donc directement
 * la conversation, message de réservation pré-rempli :
 *  1. l'appli WhatsApp de bureau si elle est installée (lien whatsapp://send) ;
 *  2. sinon WhatsApp Web, ouvert si la page n'a pas perdu le focus au bout de 1,5 s
 *     (quand l'appli s'ouvre, ou que le navigateur demande l'autorisation, la page perd le focus).
 * Sur téléphone, wa.me ouvre déjà l'appli : on n'y touche pas.
 */
export default function WhatsAppOrdinateur() {
  useEffect(() => {
    const ordinateur = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onClick = (e: MouseEvent) => {
      if (!ordinateur.matches) return;
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="https://wa.me/"]') as HTMLAnchorElement | null;
      if (!a) return;
      e.preventDefault();
      const url = new URL(a.href);
      const tel = url.pathname.replace(/\D/g, "");
      const texte = encodeURIComponent(url.searchParams.get("text") ?? "");

      const secours = window.setTimeout(() => {
        window.open(`https://web.whatsapp.com/send?phone=${tel}&text=${texte}`, "_blank", "noopener");
      }, 1500);
      const annuler = () => window.clearTimeout(secours);
      window.addEventListener("blur", annuler, { once: true });
      document.addEventListener("visibilitychange", annuler, { once: true });

      window.location.href = `whatsapp://send?phone=${tel}&text=${texte}`;
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
