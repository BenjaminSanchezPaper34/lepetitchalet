import { dict, type Locale } from "@/content/i18n";
import { avis, site } from "@/content/site";

/** Avis Google réels, en bloc statique (aucun widget tiers, aucun cookie). */
export default function Avis({ locale }: { locale: Locale }) {
  const t = dict[locale].avis;
  return (
    <section id="avis" className="papier px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center" data-reveal>
          <p className="kicker">{t.kicker}</p>
          <h2 className="titre-section mt-3 text-bois">{t.titre}</h2>
          <p className="mt-4 text-2xl tracking-[0.2em] text-bois" aria-hidden="true">★★★★★</p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2" data-reveal-group>
          {avis.map((a) => (
            <li key={a.auteur} data-reveal className="rounded-carte bg-creme/90 p-6 shadow-bois sm:p-8">
              <blockquote lang="fr">
                <p className="text-base leading-relaxed">« {a.texte} »</p>
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-ecorce">
                {a.auteur} · <span className="text-bois">★ 5/5</span> · Google
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" data-reveal>
          <a href={site.liens.googleMaps} target="_blank" rel="noopener" className="btn btn-bois">{t.voir}</a>
          <a href={site.liens.googleAvis} target="_blank" rel="noopener" className="btn btn-ligne text-bois hover:bg-bois hover:text-creme">{t.laisser}</a>
        </div>
      </div>
    </section>
  );
}
