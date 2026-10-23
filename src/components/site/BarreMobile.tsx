"use client";

import { useEffect, useState } from "react";
import { BookOpen, MapPin, Phone } from "lucide-react";

type Action = { href: string; label: string; icone: "carte" | "itineraire" | "tel"; externe?: boolean };

const ICONES = { carte: BookOpen, itineraire: MapPin, tel: Phone } as const;

/**
 * Barre d'actions mobile, sous le pouce : la carte, l'itinéraire, l'appel.
 * Apparaît une fois le hero dépassé (le hero a déjà ses propres boutons),
 * jamais au-delà de 768 px. Safe area bas respectée (barre d'accueil iPhone).
 */
export default function BarreMobile({ actions }: { actions: Action[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const seuil = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    seuil();
    window.addEventListener("scroll", seuil, { passive: true });
    return () => window.removeEventListener("scroll", seuil);
  }, []);

  return (
    <nav
      aria-label="Actions rapides"
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-creme/10 bg-nuit/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-500 ease-[var(--ease-chaud)] md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <ul className="flex">
        {actions.map((a) => {
          const Icone = ICONES[a.icone];
          const principal = a.icone === "tel";
          return (
            <li key={a.href} className="flex-1">
              <a
                href={a.href}
                {...(a.externe ? { target: "_blank", rel: "noopener" } : {})}
                tabIndex={visible ? undefined : -1}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 text-sm font-semibold ${
                  principal ? "bg-bois text-creme" : "text-creme active:bg-creme/10"
                }`}
              >
                <Icone aria-hidden="true" className="size-5" />
                {a.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
