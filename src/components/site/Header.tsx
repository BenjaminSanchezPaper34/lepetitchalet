import Link from "next/link";
import Image from "next/image";
import { dict, routes, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { avantOuverture } from "@/lib/saison";
import LangSwitch from "./LangSwitch";
import HeaderFond from "./HeaderFond";
import { Phone } from "lucide-react";

/**
 * En-tête fixe : bandeau d'ouverture (jusqu'au 4/12) + barre transparente
 * en dégradé (safe area mobile, jamais de fond plein opaque).
 */
export default function Header({ locale, page }: { locale: Locale; page: "home" | "carte" | "legal" }) {
  const t = dict[locale];
  const r = routes[locale];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {avantOuverture() && (
        <p className="bg-bois px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2 text-center font-display text-lg leading-tight tracking-wide text-creme sm:text-xl">
          {t.ouverture.bandeau}
        </p>
      )}
      <HeaderFond>
        <nav className="mx-auto flex max-w-6xl items-center gap-1 px-4 py-2.5 sm:gap-3 sm:px-8" aria-label="Navigation principale">
          <Link href={r.home} className="mr-auto shrink-0" aria-label={`${site.nom} — ${t.nav.accueil}`}>
            <Image src="/images/logo2-blanc-lepetitchalet.svg" alt={site.nom} width={160} height={24} className="h-[18px] w-auto sm:h-7" priority />
          </Link>
          <ul className="hidden items-center gap-6 text-[0.9375rem] font-semibold text-creme md:flex">
            <li><Link className="lien" href={r.carte}>{t.nav.carte}</Link></li>
            {page === "home" ? (
              <>
                <li><a className="lien" href="#avis">{t.nav.avis}</a></li>
                <li><a className="lien" href="#infos">{t.nav.infos}</a></li>
              </>
            ) : (
              <li><Link className="lien" href={`${r.home}#infos`}>{t.nav.infos}</Link></li>
            )}
          </ul>
          <LangSwitch locale={locale} page={page} />
          <a href={site.tel.lien} className="btn btn-bois min-h-11 gap-1.5 px-3 text-[0.9375rem] sm:gap-2 sm:px-5" aria-label={`${t.nav.reserver} — ${site.tel.affiche}`}>
            <Phone aria-hidden="true" className="h-4 w-4" />
            {t.nav.reserver}
          </a>
        </nav>
      </HeaderFond>
    </header>
  );
}
