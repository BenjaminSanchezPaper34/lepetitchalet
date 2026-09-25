import { dict, type Locale } from "@/content/i18n";

/** Encadré « L'essentiel » : les 3 faits que les moteurs IA citent. */
export default function Essentiel({ locale }: { locale: Locale }) {
  const t = dict[locale].essentiel;
  return (
    <section className="bg-creme px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl" data-reveal>
        <h2 className="kicker">{t.titre}</h2>
        <ul className="mt-6 space-y-5 text-lg leading-relaxed sm:text-xl">
          {t.points.map((p) => (
            <li key={p} className="flex gap-4">
              <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-bois" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
