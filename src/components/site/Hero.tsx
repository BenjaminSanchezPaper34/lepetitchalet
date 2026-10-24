import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { dict, routes, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { avantOuverture } from "@/lib/saison";
import HeroVideo from "./HeroVideo";
import Horaires from "./Horaires";
import { MessageCircle } from "lucide-react";
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
      {/* Voile : la neige claire de la vidéo mange le texte blanc → dégradé plus dense en bas + halo sombre côté texte */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-nuit via-nuit/65 to-nuit/30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_70%_at_15%_85%,rgb(29_29_31/0.7),transparent_70%)]" />

      {/* Textes en blanc pur sur la vidéo (demande de Benjamin, 24/10/2026) : seule exception au « jamais de blanc pur » */}
      <div data-fade-out className="mx-auto w-full max-w-6xl px-5 pt-44 pb-12 sm:px-8 sm:pb-20">
        <p className="kicker !text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.75)]">{t.hero.kicker}</p>
        <h1 className="mt-3 max-w-4xl font-display text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.55)] text-[clamp(3rem,11vw,7.5rem)] leading-[0.9] uppercase">
          {t.hero.titre}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white [text-shadow:0_1px_12px_rgb(0_0_0/0.7)]">
          {avantOuverture() ? t.hero.sous : t.hero.sousOuvert}
        </p>
        <Horaires texte={t.infos.horairesTexte} className="mt-3 block text-lg font-semibold leading-relaxed text-white [text-shadow:0_1px_12px_rgb(0_0_0/0.7)]" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {/* Réservation par message en premier : gratuite pour les vacanciers (appeler l'Andorre coûte cher hors UE) */}
          <a href={site.whatsappAvecMessage(t.infos.whatsappMessage)} target="_blank" rel="noopener" className="btn btn-bois whitespace-nowrap text-base sm:text-lg">
            <MessageCircle aria-hidden="true" className="h-5 w-5" />
            {t.hero.cta}
          </a>
          <Link href={routes[locale].carte} className="btn btn-ligne text-base text-creme hover:bg-creme hover:text-nuit sm:text-lg">{t.hero.carte}</Link>
        </div>
      </div>
    </section>
  );
}
