import Image from "next/image";
import Link from "next/link";
import { dict, routes, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import PaperSignature from "../signature/PaperSignature";

export default function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const a = site.adresse;
  return (
    <footer className="bois relative overflow-hidden px-5 pt-16 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-creme sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3 md:text-left">
        <div>
          <Image src="/images/logo-blanc-lepetitchalet.svg" alt={site.nom} width={150} height={90} className="mx-auto h-20 w-auto md:mx-0" />
          <address className="mt-5 not-italic font-display text-2xl leading-tight uppercase">
            {a.rue}<br />{a.cp} {a.ville}
          </address>
        </div>
        <div className="font-display text-4xl leading-tight">
          <a href={site.tel.lien} className="block py-1 hover:text-braise">{site.tel.affiche}</a>
          <a href={site.tel2.lien} className="block py-1 hover:text-braise">{site.tel2.affiche}</a>
          <p className="mt-2 font-sans text-base text-creme/80">{t.infos.horairesTexte}</p>
        </div>
        <div>
          <p className="kicker !text-creme/70">{t.footer.suivre}</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              ["Instagram", site.liens.instagram],
              ["Facebook", site.liens.facebook],
              ["Tripadvisor", site.liens.tripadvisor],
            ].map(([nom, href]) => (
              <li key={nom}>
                <a href={href} target="_blank" rel="noopener" className="btn btn-ligne min-h-11 px-3.5 text-sm text-creme hover:bg-creme hover:text-nuit">{nom}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-4 border-t border-creme/15 pt-6 text-sm text-creme/70 md:flex-row md:justify-between">
        <p className="text-xs">© {new Date().getFullYear()} {site.nom} · {t.footer.droits}</p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <li><Link href="/mentions-legales" className="inline-flex min-h-11 items-center hover:text-creme">{t.footer.mentions}</Link></li>
          <li><Link href="/confidentialite" className="inline-flex min-h-11 items-center hover:text-creme">{t.footer.confidentialite}</Link></li>
          <li><Link href={routes[locale].carte} className="inline-flex min-h-11 items-center hover:text-creme">{t.nav.carte}</Link></li>
        </ul>
        <PaperSignature />
      </div>
    </footer>
  );
}
