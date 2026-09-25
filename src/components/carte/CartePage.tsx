import { dict, routes, type Locale } from "@/content/i18n";
import Header from "../site/Header";
import Footer from "../site/Footer";
import { BreadcrumbLd, MenuLd, RestaurantLd } from "../site/JsonLd";
import CarteView from "./CarteView";

export default function CartePage({ locale }: { locale: Locale }) {
  const t = dict[locale];
  return (
    <>
      <RestaurantLd locale={locale} />
      <MenuLd locale={locale} />
      <BreadcrumbLd items={[{ name: t.nav.accueil, path: routes[locale].home }, { name: t.carte.titre, path: routes[locale].carte }]} />
      <Header locale={locale} page="carte" />
      <main>
        <div className="bg-nuit px-5 pt-44 pb-14 text-creme sm:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="titre-section">{t.carte.titre}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-creme/85">{t.carte.intro}</p>
          </div>
        </div>
        <CarteView locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
