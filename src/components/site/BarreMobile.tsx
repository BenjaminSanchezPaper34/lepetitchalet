"use client";

import { useEffect, useState } from "react";
import { BookOpen, MapPin, MessageCircle, Phone } from "lucide-react";

type Action = { href: string; label: string; icone: "carte" | "itineraire" | "whatsapp" | "tel"; externe?: boolean };

const ICONES = { carte: BookOpen, itineraire: MapPin, whatsapp: MessageCircle, tel: Phone } as const;

/**
 * Dock d'actions mobile, sous le pouce : la carte, l'itinéraire, l'appel, et WhatsApp en action principale
 * (message de réservation pré-rempli, sans coût d'appel international pour les vacanciers).
 * Sur l'accueil, apparaît une fois le hero dépassé (le hero a ses propres boutons) ;
 * ailleurs, visible d'emblée. Jamais au-delà de 768 px (le bouton Réserver de l'en-tête prend le relais). Safe area bas respectée (barre d'accueil iPhone).
 */
export default function BarreMobile({ actions, toujours = false }: { actions: Action[]; toujours?: boolean }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const seuil = () => setVisible(toujours || window.scrollY > window.innerHeight * 0.6);
    seuil();
    window.addEventListener("scroll", seuil, { passive: true });
    return () => window.removeEventListener("scroll", seuil);
  }, [toujours]);

  return (
    <nav
      aria-label="Actions rapides"
      className={`fixed inset-x-0 bottom-0 z-50 px-3 pr-[max(0.75rem,env(safe-area-inset-right))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))] transition-transform duration-500 ease-[var(--ease-chaud)] md:hidden ${
        visible ? "translate-y-0" : "translate-y-[150%]"
      }`}
    >
      {/* Dock flottant : 3 actions secondaires (icône + libellé) et WhatsApp en action principale, à droite sous le pouce */}
      <ul className="flex items-stretch gap-1 rounded-[1.25rem] border border-creme/10 bg-nuit/90 p-1.5 shadow-[0_14px_36px_-12px_rgb(0_0_0/0.65)] backdrop-blur-md">
        {actions.map((a) => {
          const Icone = ICONES[a.icone];
          const principal = a.icone === "whatsapp";
          return (
            <li key={a.href} className={principal ? "flex-[1.6]" : "flex-1"}>
              <a
                href={a.href}
                {...(a.externe ? { target: "_blank", rel: "noopener" } : {})}
                tabIndex={visible ? undefined : -1}
                className={`flex h-full min-h-12 items-center justify-center rounded-[0.875rem] font-semibold transition-[transform,background-color] duration-200 active:scale-95 ${
                  principal
                    ? "gap-2 bg-bois px-3 text-base text-creme shadow-bois active:bg-bois-clair"
                    : "flex-col gap-0.5 text-sm text-creme/85 active:bg-creme/10"
                }`}
              >
                <Icone aria-hidden="true" className={principal ? "size-5" : "size-[1.15rem]"} />
                {a.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
