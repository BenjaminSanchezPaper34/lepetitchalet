"use client";

import { useEffect } from "react";

/**
 * Lenis + GSAP ScrollTrigger, chargés après le premier rendu (hors chemin critique).
 * - Reveals : tout [data-reveal] monte de 40 px en fondu, stagger sur [data-reveal-group].
 * - Parallaxe : [data-parallax] glisse doucement.
 * Tout est coupé en prefers-reduced-motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const group = el.closest("[data-reveal-group]");
          const index = group ? Array.from(group.querySelectorAll("[data-reveal]")).indexOf(el) : 0;
          gsap.to(el, {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: index * 0.12,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset.parallax ?? 12), ease: "none",
            scrollTrigger: { trigger: el.parentElement ?? el, start: "top top", end: "bottom top", scrub: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-fade-out]").forEach((el) => {
          gsap.to(el, {
            opacity: 0, scale: 0.96, y: -40, ease: "none",
            scrollTrigger: { trigger: el, start: "top 20%", end: "bottom top", scrub: true },
          });
        });
      });

      cleanup = () => { ctx.revert(); gsap.ticker.remove(tick); lenis.destroy(); };
    })();

    return () => { cancelled = true; cleanup(); };
  }, []);

  return null;
}
