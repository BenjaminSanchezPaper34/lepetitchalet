import type { Metadata } from "next";
import { routes, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

type Page = "home" | "carte";

const meta: Record<Page, Record<Locale, { title: string; description: string }>> = {
  home: {
    fr: {
      title: "Restaurant au Pas de la Case — Le Petit Chalet, raclette, fondue & grill Josper",
      description: "Restaurant de montagne au Pas de la Case, au pied des pistes de Grandvalira : raclettes, fondue savoyarde, grill Josper, cuisine maison. Ouverture le 4 décembre 2026.",
    },
    es: {
      title: "Restaurante en Pas de la Casa — Le Petit Chalet, raclette, fondue y brasa Josper",
      description: "Restaurante de montaña en el Pas de la Casa, a pie de pistas de Grandvalira: raclettes, fondue saboyana, brasa Josper, cocina casera. Apertura el 4 de diciembre de 2026.",
    },
    en: {
      title: "Restaurant in Pas de la Casa — Le Petit Chalet, raclette, fondue & Josper grill",
      description: "Mountain restaurant in Pas de la Casa, at the foot of the Grandvalira slopes: raclette, Savoyard fondue, Josper grill, homemade food. Opening 4 December 2026.",
    },
  },
  carte: {
    fr: {
      title: "La carte du Petit Chalet — raclette, fondue, grill Josper · Pas de la Case",
      description: "Toute la carte du Petit Chalet au Pas de la Case avec les prix : raclettes, fondues, viandes et poissons au grill Josper, pâtes, pizzas, desserts maison, boissons.",
    },
    es: {
      title: "La carta de Le Petit Chalet — raclette, fondue, brasa Josper · Pas de la Casa",
      description: "Toda la carta de Le Petit Chalet en Pas de la Casa con precios: raclettes, fondues, carnes y pescados a la brasa Josper, pasta, pizzas, postres caseros, bebidas.",
    },
    en: {
      title: "Le Petit Chalet menu — raclette, fondue, Josper grill · Pas de la Casa",
      description: "The full Le Petit Chalet menu in Pas de la Casa with prices: raclette, fondue, Josper-grilled meats and fish, pasta, pizzas, homemade desserts, drinks.",
    },
  },
};

const ogLocale: Record<Locale, string> = { fr: "fr_FR", es: "es_ES", en: "en_GB" };

export function pageMetadata(page: Page, l: Locale): Metadata {
  const m = meta[page][l];
  const path = routes[l][page];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        fr: routes.fr[page],
        es: routes.es[page],
        en: routes.en[page],
        "x-default": routes.fr[page],
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.nom,
      title: m.title,
      description: m.description,
      locale: ogLocale[l],
      images: [{ url: "/images/og-lepetitchalet.jpg", width: 1200, height: 630, alt: site.nom }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: ["/images/og-lepetitchalet.jpg"] },
  };
}
