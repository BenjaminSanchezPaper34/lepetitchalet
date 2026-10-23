"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vidéo d'ambiance du hero, chargée APRÈS le premier affichage : le poster (image)
 * reste l'élément LCP. Version portrait sur mobile, paysage au-delà de 768 px.
 * Jamais en reduced-motion ni en mode économie de données.
 *
 * iOS Safari n'autorise la lecture automatique que si la vidéo est muette AU MOMENT
 * où la source arrive. React pose `muted` comme propriété et pas comme attribut :
 * on force donc muted/defaultMuted/attribut à la main puis on appelle play().
 * Si iOS refuse quand même (mode économie d'énergie), le poster reste affiché.
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
    // Hors chemin critique : juste après le chargement complet de la page
    let t: ReturnType<typeof setTimeout>;
    const apres = () => { t = setTimeout(choisir, 1200); };
    if (document.readyState === "complete") apres(); else window.addEventListener("load", apres, { once: true });
    return () => { clearTimeout(t); window.removeEventListener("load", apres); };
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || !src) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.src = src;
    v.load();
    v.play().catch(() => {});
    // Une vidéo hors écran (onglet en arrière-plan) peut être mise en pause par le système : on relance au retour
    const relancer = () => { if (document.visibilityState === "visible" && v.paused) v.play().catch(() => {}); };
    document.addEventListener("visibilitychange", relancer);
    return () => document.removeEventListener("visibilitychange", relancer);
  }, [src]);

  if (!src) return null;
  return (
    <video
      ref={ref}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
      onPlaying={() => setVisible(true)}
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
}
