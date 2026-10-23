"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fond de la barre : dégradé transparent sur le hero, puis fondu vers la « nuit »
 * dès qu'on défile (sinon le blanc du logo se perd sur les sections crème).
 * Publie aussi la hauteur réelle de l'en-tête (bandeau + barre + encoche) dans
 * --h-entete : la barre d'onglets de la carte et les ancres se calent dessus.
 */
export default function HeaderFond({ children }: { children: ReactNode }) {
  const [defile, setDefile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const entete = ref.current?.parentElement;
    if (!entete) return;
    const publier = () => document.documentElement.style.setProperty("--h-entete", `${entete.offsetHeight}px`);
    publier();
    const ro = new ResizeObserver(publier);
    ro.observe(entete);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () => setDefile(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
        defile ? "bg-nuit/92 shadow-[0_10px_30px_-15px_rgb(0_0_0/0.6)] backdrop-blur-md" : "bg-gradient-to-b from-nuit/80 via-nuit/35 to-transparent"
      }`}
    >
      {children}
    </div>
  );
}
