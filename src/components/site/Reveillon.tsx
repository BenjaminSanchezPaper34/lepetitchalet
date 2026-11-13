import { PartyPopper, Music } from "lucide-react";
import type { Locale } from "@/content/i18n";
import { reveillon, reveillonVisible } from "@/content/reveillon";
import { site } from "@/content/site";
import { formatPrix } from "@/content/menu";

/** Encadré « Menu du 31 décembre » : visible seulement du 17 au 31 décembre (voir content/reveillon.ts). */
export default function Reveillon({ locale, variante = "accueil" }: { locale: Locale; variante?: "accueil" | "carte" }) {
  if (!reveillonVisible()) return null;
  const r = reveillon;
  return (
    <section id="reveillon" aria-labelledby="reveillon-titre" className={variante === "accueil" ? "bg-creme px-5 pt-16 sm:px-8 sm:pt-24" : ""}>
      <div className="mx-auto max-w-3xl rounded-3xl bg-bois px-6 py-10 text-creme shadow-[var(--shadow-bois)] sm:px-12 sm:py-14" data-reveal>
        <p className="kicker flex items-center gap-2 !text-creme/80"><PartyPopper aria-hidden="true" className="h-4 w-4" />{r.kicker[locale]}</p>
        <h2 id="reveillon-titre" className="titre-section mt-3 !text-creme">{r.titre[locale]}</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <p className="rounded-2xl bg-creme/10 px-4 py-2"><span className="text-2xl tabular-nums">{formatPrix(r.prix, locale)}</span> <span className="text-sm text-creme/80">{r.horsBoissons[locale]}</span></p>
          <p className="rounded-2xl bg-creme/10 px-4 py-2"><span className="text-2xl tabular-nums">{formatPrix(r.prixEnfant, locale)}</span> <span className="text-sm text-creme/80">{r.enfant[locale]}</span></p>
        </div>
        <p className="mt-5 flex items-center gap-2 text-base"><Music aria-hidden="true" className="h-4 w-4 shrink-0" />{r.musique[locale]}&nbsp;«&nbsp;{r.groupe}&nbsp;»</p>
        <dl className="mt-8 space-y-6">
          {r.etapes.map((e) => (
            <div key={e.titre.fr}>
              <dt className="font-semibold uppercase tracking-wide text-creme/80 text-sm">{e.titre[locale]}</dt>
              {e.plats.map((p, i) => (
                <dd key={p.fr} className="mt-1 text-lg leading-relaxed">
                  {e.choix && i > 0 && <span className="mr-2 text-sm italic text-creme/70">{r.ou[locale]}</span>}
                  {p[locale]}
                </dd>
              ))}
            </div>
          ))}
        </dl>
        <a href={site.whatsappAvecMessage(r.message[locale])} target="_blank" rel="noopener" data-track="whatsapp" className="btn mt-10 bg-creme text-bois hover:bg-white">{r.reserver[locale]}</a>
      </div>
    </section>
  );
}
