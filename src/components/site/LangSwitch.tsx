import Link from "next/link";
import { locales, routes, type Locale } from "@/content/i18n";

/** Sélecteur de langue : trois liens courts, pas de menu déroulant ni de widget. */
export default function LangSwitch({ locale, page }: { locale: Locale; page: "home" | "carte" | "legal" }) {
  const cible = page === "legal" ? "home" : page;
  return (
    <ul className="flex items-center text-sm font-bold uppercase text-creme/70" aria-label="Langue / Idioma / Language">
      {locales.map((l) => (
        <li key={l}>
          <Link
            href={routes[l][cible]}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "page" : undefined}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:text-creme ${l === locale ? "text-creme underline decoration-2 underline-offset-4" : ""}`}
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
}
