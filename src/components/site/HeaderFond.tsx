"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Fond de la barre : dégradé transparent sur le hero, puis fondu vers la « nuit »
 * dès qu'on défile (sinon le blanc du logo se perd sur les sections crème).
 */
export default function HeaderFond({ children }: { children: ReactNode }) {
  const [defile, setDefile] = useState(false);
  useEffect(() => {
    const onScroll = () => setDefile(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
        defile ? "bg-nuit/92 shadow-[0_10px_30px_-15px_rgb(0_0_0/0.6)] backdrop-blur-md" : "bg-gradient-to-b from-nuit/80 via-nuit/35 to-transparent"
      }`}
    >
      {children}
    </div>
  );
}
