import Image from "next/image";
import Link from "next/link";
import { dict, routes, type Locale } from "@/content/i18n";
import grill from "../../../public/photos/grill-josper.jpg";

const alt: Record<Locale, string> = {
  fr: "Pièce de bœuf saisie dans les flammes du grill Josper",
  es: "Carne de ternera sellada entre las llamas de la brasa Josper",
  en: "Beef searing in the flames of the Josper grill",
};

/**
 * Section grill — effet signature « braise » : une lueur orangée monte du bas
 * de la photo quand la section entre à l'écran (CSS pur, pas de WebGL).
 */
export default function Grill({ locale }: { locale: Locale }) {
  const t = dict[locale].grill;
  return (
    <section className="braise relative overflow-hidden bg-nuit px-5 py-20 text-creme sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-carte" data-reveal>
          <Image src={grill} alt={alt[locale]} fill sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          <div aria-hidden="true" className="braise-lueur absolute inset-0" />
        </div>
        <div data-reveal>
          <p className="kicker !text-braise">{t.kicker}</p>
          <h2 className="titre-section mt-3">{t.titre}</h2>
          <p className="mt-6 text-lg leading-relaxed text-creme/85">{t.texte}</p>
          <Link href={`${routes[locale].carte}#viandes`} className="btn btn-ligne mt-8 text-creme hover:bg-creme hover:text-nuit">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
