import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react";
import { dict, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { avantOuverture } from "@/lib/saison";

export default function Infos({ locale }: { locale: Locale }) {
  const t = dict[locale].infos;
  const a = site.adresse;
  return (
    <section id="infos" className="bg-creme px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal>
          <p className="kicker">{t.kicker}</p>
          <h2 className="titre-section mt-3 text-bois">{t.titre}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{t.acces}</p>
        </div>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          <div data-reveal>
            <dt className="flex items-center gap-2 font-display text-2xl uppercase text-bois"><MapPin aria-hidden="true" className="h-5 w-5" />{t.adresse}</dt>
            <dd className="mt-2 text-lg leading-relaxed">
              <address className="not-italic">{a.rue}<br />{a.cp} {a.ville}, {a.pays}</address>
            </dd>
          </div>
          <div data-reveal>
            <dt className="flex items-center gap-2 font-display text-2xl uppercase text-bois"><Clock aria-hidden="true" className="h-5 w-5" />{t.horaires}</dt>
            <dd className="mt-2 text-lg leading-relaxed">
              {t.horairesTexte}
              {avantOuverture() && <><br /><strong className="text-bois">{t.saison}</strong></>}
            </dd>
          </div>
          <div data-reveal>
            <dt className="flex items-center gap-2 font-display text-2xl uppercase text-bois"><Phone aria-hidden="true" className="h-5 w-5" />{t.telephone}</dt>
            <dd className="mt-2 text-lg leading-relaxed">
              <a href={site.tel.lien} className="lien font-semibold">{site.tel.affiche}</a><br />
              <a href={site.tel2.lien} className="lien">{site.tel2.affiche}</a>
            </dd>
          </div>
        </dl>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-reveal>
          <a href={site.liens.googleMaps} target="_blank" rel="noopener" className="btn btn-bois"><Navigation aria-hidden="true" className="h-4 w-4" />{t.itineraire} · Google Maps</a>
          <a href={site.liens.applePlans} target="_blank" rel="noopener" className="btn btn-ligne text-bois hover:bg-bois hover:text-creme">Apple Plans</a>
          <a href={site.liens.waze} target="_blank" rel="noopener" className="btn btn-ligne text-bois hover:bg-bois hover:text-creme">Waze</a>
          <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-ligne text-bois hover:bg-bois hover:text-creme"><MessageCircle aria-hidden="true" className="h-4 w-4" />{t.whatsapp}</a>
        </div>
      </div>
    </section>
  );
}
