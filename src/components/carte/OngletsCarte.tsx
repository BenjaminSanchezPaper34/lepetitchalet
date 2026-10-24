"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Onglet = { id: string; label: string };

/**
 * Onglets de la carte : défilement horizontal au doigt, au trackpad et par flèches.
 * - Les flèches n'apparaissent que du côté où il reste des onglets cachés (fondu crème).
 * - L'onglet de la rubrique en cours de lecture s'allume et revient dans le champ.
 * - data-lenis-prevent-horizontal : Lenis laisse le geste horizontal natif, mais garde la molette verticale
 *   fluide (un data-lenis-prevent complet faisait sauter la page quand la souris passait dessus).
 */
const FLECHES = {
  fr: ["Onglets précédents", "Onglets suivants"],
  ca: ["Pestanyes anteriors", "Pestanyes següents"],
  es: ["Pestañas anteriores", "Pestañas siguientes"],
  en: ["Previous tabs", "Next tabs"],
} as const;

export default function OngletsCarte({ onglets, locale }: { onglets: Onglet[]; locale: keyof typeof FLECHES }) {
  const liste = useRef<HTMLUListElement>(null);
  const [bords, setBords] = useState({ gauche: false, droite: false });
  const [actif, setActif] = useState<string | null>(null);

  const mesurer = useCallback(() => {
    const el = liste.current;
    if (!el) return;
    setBords({ gauche: el.scrollLeft > 4, droite: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    const el = liste.current;
    if (!el) return;
    mesurer();
    // Les largeurs changent quand les polices arrivent : on remesure à ce moment-là
    document.fonts?.ready.then(mesurer);
    el.addEventListener("scroll", mesurer, { passive: true });
    window.addEventListener("resize", mesurer);
    return () => { el.removeEventListener("scroll", mesurer); window.removeEventListener("resize", mesurer); };
  }, [mesurer]);

  // Rubrique en cours : celle qui traverse le milieu haut de l'écran
  useEffect(() => {
    const sections = onglets.map((o) => document.getElementById(o.id)).filter((s): s is HTMLElement => !!s);
    const obs = new IntersectionObserver(
      (entrees) => entrees.forEach((e) => e.isIntersecting && setActif(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [onglets]);

  // Ramène l'onglet actif dans le champ, sans toucher au défilement vertical de la page
  useEffect(() => {
    const el = liste.current;
    const lien = actif ? el?.querySelector<HTMLElement>(`[data-onglet="${actif}"]`) : null;
    if (!el || !lien) return;
    // Centré, mais collé au bord quand on est au début ou à la fin : jamais sous le fondu des flèches
    const max = el.scrollWidth - el.clientWidth;
    let cible = lien.offsetLeft - (el.clientWidth - lien.offsetWidth) / 2;
    if (cible < 56) cible = 0;
    if (cible > max - 56) cible = max;
    el.scrollTo({ left: cible, behavior: "smooth" });
  }, [actif]);

  const defiler = (sens: 1 | -1) => {
    const el = liste.current;
    if (el) el.scrollBy({ left: sens * el.clientWidth * 0.7, behavior: "smooth" });
  };

  const fleche = "absolute inset-y-0 z-10 flex w-14 items-center text-bois transition-opacity duration-300";

  return (
    <div className="relative mx-auto max-w-4xl">
      <ul
        ref={liste}
        data-lenis-prevent-horizontal
        className="flex gap-1 overflow-x-auto overscroll-x-contain px-4 py-2 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {onglets.map((o) => (
          <li key={o.id} className="shrink-0">
            <a
              href={`#${o.id}`}
              data-onglet={o.id}
              aria-current={actif === o.id ? "true" : undefined}
              className={`inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors ${
                actif === o.id ? "bg-bois text-creme" : "text-bois hover:bg-bois/10"
              }`}
            >
              {o.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={FLECHES[locale][0]}
        tabIndex={-1}
        onClick={() => defiler(-1)}
        className={`${fleche} left-0 justify-start bg-linear-to-r from-creme via-creme/90 to-transparent pl-2 ${bords.gauche ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ChevronLeft className="size-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={FLECHES[locale][1]}
        tabIndex={-1}
        onClick={() => defiler(1)}
        className={`${fleche} right-0 justify-end bg-linear-to-l from-creme via-creme/90 to-transparent pr-2 ${bords.droite ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>
    </div>
  );
}
