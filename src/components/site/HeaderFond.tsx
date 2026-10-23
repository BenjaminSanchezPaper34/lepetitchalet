"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fond de la barre : dégradé transparent sur le hero, puis fondu vers la « nuit »
 * dès qu'on défile (sinon le blanc du logo se perd sur les sections crème).
 *
 * Sur téléphone, l'en-tête s'efface quand on descend et revient dès qu'on remonte :
 * l'écran reste au contenu (la barre d'actions du bas garde l'appel à portée de pouce).
 *
 * Publie la hauteur VISIBLE de l'en-tête dans --h-entete (0 quand il est effacé) :
 * la barre d'onglets de la carte et les ancres se calent dessus.
 */
export default function HeaderFond({ children }: { children: ReactNode }) {
  const [defile, setDefile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const entete = ref.current?.parentElement;
    if (!entete) return;
    const mobile = window.matchMedia("(max-width: 767px)");
    let cache = false;
    let dernier = window.scrollY;

    const publier = () =>
      document.documentElement.style.setProperty("--h-entete", cache ? "0px" : `${entete.offsetHeight}px`);

    const appliquer = (v: boolean) => {
      if (v === cache) return;
      cache = v;
      entete.style.transform = v ? "translateY(-100%)" : "";
      publier();
    };

    const onScroll = () => {
      const y = window.scrollY;
      setDefile(y > 24);
      const delta = y - dernier;
      if (!mobile.matches || y < window.innerHeight * 0.5) appliquer(false);
      else if (delta > 8) appliquer(true);
      else if (delta < -8) appliquer(false);
      if (Math.abs(delta) > 8) dernier = y;
    };

    publier();
    onScroll();
    const ro = new ResizeObserver(publier);
    ro.observe(entete);
    window.addEventListener("scroll", onScroll, { passive: true });
    mobile.addEventListener("change", onScroll);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      mobile.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[background-color,backdrop-filter,box-shadow] duration-500 first:pt-[env(safe-area-inset-top)] ${
        defile ? "bg-nuit/92 shadow-[0_10px_30px_-15px_rgb(0_0_0/0.6)] backdrop-blur-md" : "bg-gradient-to-b from-nuit/80 via-nuit/35 to-transparent"
      }`}
    >
      {children}
    </div>
  );
}
