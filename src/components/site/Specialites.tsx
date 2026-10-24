import Image from "next/image";
import { dict, type Locale } from "@/content/i18n";
import fondue from "../../../public/photos/fondue.jpg";
import racletteMeule from "../../../public/photos/raclette-meule.jpg";
import raclettePlanche from "../../../public/photos/raclette-planche.jpg";

const photos = { fondue, "raclette-meule": racletteMeule, "raclette-planche": raclettePlanche } as const;
const alts: Record<Locale, Record<keyof typeof photos, string>> = {
  fr: { "raclette-meule": "Raclette : le fromage fond sous l’appareil et coule dans le poêlon", fondue: "Fondue savoyarde servie dans un pain croustillant", "raclette-planche": "Raclette avec plateau de charcuterie et pommes de terre grenailles" },
  es: { "raclette-meule": "Raclette: el queso se funde y cae en la cazuela", fondue: "Fondue saboyana servida en un pan crujiente", "raclette-planche": "Raclette con tabla de embutidos y patatas baby" },
  en: { "raclette-meule": "Raclette: the cheese melts and pours into the dish", fondue: "Savoyard fondue served in a crusty bread bowl", "raclette-planche": "Raclette with cured meats and baby potatoes" },
};

export default function Specialites({ locale }: { locale: Locale }) {
  const t = dict[locale].specialites;
  return (
    <section className="bg-creme-fonce px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal>
          <p className="kicker">{t.kicker}</p>
          <h2 className="titre-section mt-3 max-w-3xl text-bois">{t.titre}</h2>
        </div>
        {/* Mobile : carrousel au doigt (la carte suivante dépasse pour inviter à glisser) ; grille dès 768 px */}
        <ul
          data-reveal-group
          data-lenis-prevent-horizontal
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {t.items.map((it) => (
            <li key={it.titre} data-reveal className="group w-[78vw] max-w-sm shrink-0 snap-center md:w-auto md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-carte shadow-bois">
                <Image
                  src={photos[it.img as keyof typeof photos]}
                  alt={alts[locale][it.img as keyof typeof photos]}
                  fill
                  sizes="(min-width: 768px) 33vw, 80vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-chaud)] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-3xl uppercase text-bois">{it.titre}</h3>
              <p className="mt-2 text-base leading-relaxed text-nuit/80">{it.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
