import type { Locale } from "@/content/i18n";
import Header from "./Header";
import Hero from "./Hero";
import Essentiel from "./Essentiel";
import Specialites from "./Specialites";
import Grill from "./Grill";
import CartePreview from "./CartePreview";
import Avis from "./Avis";
import Infos from "./Infos";
import Footer from "./Footer";
import { RestaurantLd } from "./JsonLd";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <RestaurantLd locale={locale} />
      <Header locale={locale} page="home" />
      <main>
        <Hero locale={locale} />
        <Essentiel locale={locale} />
        <Specialites locale={locale} />
        <Grill locale={locale} />
        <CartePreview locale={locale} />
        <Avis locale={locale} />
        <Infos locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
