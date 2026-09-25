import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { dict, routes, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { avantOuverture } from "@/lib/saison";
import HeroVideo from "./HeroVideo";
import posterDesktop from "../../../public/video/hero-poster.webp";
import posterPhone from "../../../public/video/hero-poster-phone.webp";

/** Poster en direction artistique : portrait sur mobile, paysage au-delà — une seule image téléchargée. */
function Poster() {
  const commun = { alt: "", fill: true, priority: true, sizes: "100vw" } as const;
  const { props: { srcSet: desktop } } = getImageProps({ ...commun, src: posterDesktop });
  const { props: mobile } = getImageProps({ ...commun, src: posterPhone });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
      <img {...mobile} className="absolute inset-0 h-full w-full object-cover" />
    </picture>
  );
}

export default function Hero({ locale }: { locale: Locale }) {
  const t = dict[locale];
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-nuit text-creme">
      {/* Fond : poster (LCP) puis vidéo, en parallaxe douce */}
      <div className="absolute inset-0 -z-10" data-parallax="10">
        <Poster />
        <HeroVideo />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nuit via-nuit/40 to-nuit/30" />

      <div data-fade-out className="mx-auto w-full max-w-6xl px-5 pt-44 pb-12 sm:px-8 sm:pb-20">
        <p className="kicker !text-creme/80">{t.hero.kicker}</p>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.9] uppercase">
          {t.hero.titre}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-creme/90">
          {avantOuverture() ? t.hero.sous : t.hero.sousOuvert}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={site.tel.lien} className="btn btn-bois whitespace-nowrap text-base sm:text-lg">{t.hero.cta}<span className="font-semibold opacity-80">· {site.tel.affiche}</span></a>
          <Link href={routes[locale].carte} className="btn btn-ligne text-base text-creme hover:bg-creme hover:text-nuit sm:text-lg">{t.hero.carte}</Link>
        </div>
      </div>
    </section>
  );
}
