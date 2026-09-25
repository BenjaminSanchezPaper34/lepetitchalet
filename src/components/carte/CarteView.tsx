import { dict, type Locale } from "@/content/i18n";
import { boissons, carte, formatPrix, nomPlat, type Rubrique } from "@/content/menu";
import { site } from "@/content/site";
import { avantOuverture } from "@/lib/saison";

function Prix({ prix, locale }: { prix: Rubrique["plats"][number]["prix"]; locale: Locale }) {
  if (typeof prix === "number") return <span className="font-display text-2xl text-bois">{formatPrix(prix, locale)}</span>;
  return (
    <span className="flex gap-3 text-right">
      {prix.map((p) => (
        <span key={p.label} className="flex flex-col items-end leading-none">
          <span className="font-display text-2xl text-bois">{formatPrix(p.prix, locale)}</span>
          <span className="text-xs text-ecorce">{p.label}</span>
        </span>
      ))}
    </span>
  );
}

function Section({ r, locale }: { r: Rubrique; locale: Locale }) {
  return (
    <section id={r.id} className="scroll-mt-48">
      <h2 className="titre-section !text-[clamp(2.25rem,6vw,3.5rem)] text-bois">{r.titre[locale]}</h2>
      {r.intro && <p className="mt-3 text-base leading-relaxed text-ecorce">{r.intro[locale]}</p>}
      <ul className="mt-6 divide-y divide-bois/15 border-t border-bois/15">
        {r.plats.map((p) => (
          <li key={p.nom} className="py-5">
            <div className="flex items-baseline gap-4">
              <h3 className="text-lg font-semibold leading-snug">{nomPlat(p, locale)}</h3>
              <span aria-hidden="true" className="flex-1 translate-y-[-0.3rem] border-b border-dotted border-bois/30" />
              <Prix prix={p.prix} locale={locale} />
            </div>
            {p.desc && <p className="mt-1 max-w-[46ch] text-[0.9375rem] leading-relaxed text-ecorce">{p.desc[locale]}</p>}
            {p.note && <p className="mt-1 text-sm italic text-ecorce">{p.note[locale]}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CarteView({ locale }: { locale: Locale }) {
  const t = dict[locale].carte;
  const tout = [...carte, { id: "boissons", titre: { fr: t.boissonsTitre, es: t.boissonsTitre, en: t.boissonsTitre } } as const];
  return (
    <>
      {/* Barre de catégories collante, défilement horizontal au doigt */}
      <nav aria-label={t.titre} className={`sticky ${avantOuverture() ? "top-[6.75rem]" : "top-[4.25rem]"} z-40 border-b border-bois/15 bg-creme/95 backdrop-blur`}>
        <ul className="mx-auto flex max-w-4xl snap-x gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:px-8">
          {tout.map((r) => (
            <li key={r.id} className="snap-start">
              <a href={`#${r.id}`} className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold text-bois hover:bg-bois hover:text-creme">
                {r.titre[locale]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-4xl space-y-16 px-5 py-14 sm:px-8 sm:py-20">
        {carte.map((r) => <Section key={r.id} r={r} locale={locale} />)}

        <div id="boissons" className="scroll-mt-48 space-y-16 border-t-4 border-double border-bois/30 pt-16">
          <h2 className="titre-section text-bois">{t.boissonsTitre}</h2>
          {boissons.map((r) => <Section key={r.id} r={r} locale={locale} />)}
          <a href={site.pdfBoissons} className="btn btn-ligne text-bois hover:bg-bois hover:text-creme">{t.pdf}</a>
        </div>

        <p className="text-sm text-ecorce">{t.allergenes}</p>
      </div>
    </>
  );
}
