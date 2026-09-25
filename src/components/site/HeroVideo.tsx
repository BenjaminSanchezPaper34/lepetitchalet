"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vidéo d'ambiance du hero, chargée APRÈS le premier affichage : le poster (image)
 * reste l'élément LCP. Version portrait sur mobile, paysage au-delà de 768 px.
 * Jamais en reduced-motion ni en mode économie de données.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const eco = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduit || eco) return;
    const choisir = () => setSrc(window.matchMedia("(min-width: 768px)").matches ? "/video/hero-desktop.mp4" : "/video/hero-phone.mp4");
    // Hors chemin critique : après le chargement complet de la page + 2,5 s
    let t: ReturnType<typeof setTimeout>;
    const apres = () => { t = setTimeout(choisir, 2500); };
    if (document.readyState === "complete") apres(); else window.addEventListener("load", apres, { once: true });
    return () => { clearTimeout(t); window.removeEventListener("load", apres); };
  }, []);

  if (!src) return null;
  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
      aria-hidden="true"
      onCanPlay={() => setVisible(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
}
