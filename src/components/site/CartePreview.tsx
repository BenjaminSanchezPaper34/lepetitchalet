import Link from "next/link";
import { dict, routes, type Locale } from "@/content/i18n";
import { carte, formatPrix, nomPlat } from "@/content/menu";
import { site } from "@/content/site";

/** Aperçu de la carte : quelques incontournables avec leur prix, puis lien vers tout. */
const vedettes = ["Raclette classique", "Fondue savoyarde", "Tartiflette", "Entrecôte", "Burger montagnard", "Montagnarde"];

export default function CartePreview({ locale }: { locale: Locale }) {
  const t = dict[locale].cartePreview;
  const plats = carte.flatMap((r) => r.plats).filter((p) => vedettes.includes(p.nom));
  return (
    <section className="bg-creme px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div data-reveal>
          <p className="kicker">{t.kicker}</p>
          <h2 className="titre-section mt-3 text-bois">{t.titre}</h2>
          <p className="mt-6 text-lg leading-relaxed">{t.texte}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={routes[locale].carte} className="btn btn-bois">{t.cta}</Link>
            <a href={site.pdfBoissons} className="btn btn-ligne text-bois hover:bg-bois hover:text-creme">{t.boissons}</a>
          </div>
        </div>
        <ul className="divide-y divide-bois/15 border-y border-bois/15" data-reveal>
          {plats.map((p) => (
            <li key={p.nom} className="flex items-baseline gap-4 py-4">
              <span className="font-semibold">{nomPlat(p, locale)}</span>
              <span aria-hidden="true" className="flex-1 border-b border-dotted border-bois/30" />
              <span className="font-display text-2xl text-bois">{typeof p.prix === "number" ? formatPrix(p.prix, locale) : ""}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
