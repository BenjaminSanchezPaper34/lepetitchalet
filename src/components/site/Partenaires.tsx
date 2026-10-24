import Image from "next/image";
import { dict, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

/**
 * Partenaires andorrans, juste avant le pied de page (SEO local et relationnel).
 * Fond crème foncé : rupture avec Infos (crème) et le pied de page (bois).
 * Mobile : une ligne par partenaire (logo à gauche, nom et activité lisibles) ; 3 cartes dès 640 px.
 * Les logos sont sur fond blanc : mix-blend-multiply les fond dans le papier crème (pas de blanc pur).
 */
export default function Partenaires({ locale }: { locale: Locale }) {
  const t = dict[locale].partenaires;
  return (
    <section aria-labelledby="partenaires-titre" className="bg-creme-fonce px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="max-w-2xl">
          <p className="kicker">{t.kicker}</p>
          <h2 id="partenaires-titre" className="titre-section mt-3 !text-[clamp(2rem,6vw,3.25rem)] text-bois">{t.titre}</h2>
          <p className="mt-3 text-base leading-relaxed text-nuit/80">{t.intro}</p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-6" data-reveal-group>
          {site.partenaires.map((p) => {
            const contenu = (
              <>
                <div className="flex h-16 w-28 shrink-0 items-center justify-center sm:h-28 sm:w-auto">
                  <Image
                    src={p.logo}
                    alt={`Logo ${p.nom}`}
                    width={p.largeur}
                    height={p.hauteur}
                    sizes="(min-width: 640px) 200px, 112px"
                    className="max-h-full w-auto object-contain mix-blend-multiply"
                  />
                </div>
                <div className="sm:mt-4">
                  <p className="text-base font-semibold leading-snug text-nuit">{p.nom}</p>
                  <p className="mt-1 text-sm leading-snug text-ecorce">{p.desc[locale]}</p>
                </div>
              </>
            );
            return (
              <li key={p.nom} data-reveal className="rounded-carte bg-creme p-4 shadow-bois sm:p-6 sm:text-center">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener" className="flex items-center gap-4 sm:block">{contenu}</a>
                ) : (
                  <div className="flex items-center gap-4 sm:block">{contenu}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
