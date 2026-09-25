import { routes, type Locale } from "@/content/i18n";
import { carte, nomPlat } from "@/content/menu";
import { site } from "@/content/site";
import { avantOuverture } from "@/lib/saison";

function Script({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function RestaurantLd({ locale }: { locale: Locale }) {
  const u = site.url;
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${u}/#restaurant`,
    name: site.nom,
    url: u + routes[locale].home.replace(/^\/$/, ""),
    image: [`${u}/images/og-lepetitchalet.jpg`, `${u}/photos/raclette-meule.jpg`, `${u}/photos/fondue.jpg`, `${u}/photos/grill-josper.jpg`],
    logo: `${u}/images/logo-lepetitchalet.svg`,
    telephone: "+376855436",
    email: site.email,
    priceRange: "20–30 €",
    servesCuisine: ["Savoyarde", "Montagnarde", "Raclette", "Fondue", "Grillades", "Pizza"],
    acceptsReservations: true,
    hasMenu: `${u}${routes[locale].carte}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.adresse.rue,
      postalCode: site.adresse.cp,
      addressLocality: site.adresse.ville,
      addressRegion: "Encamp",
      addressCountry: site.adresse.paysCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.liens.googleMaps,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: site.horaires.ouvre,
        closes: site.horaires.ferme,
        validFrom: site.ouverture,
        validThrough: site.finSaison,
      },
    ],
    ...(avantOuverture() && {
      specialOpeningHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        opens: "00:00",
        closes: "00:00",
        validFrom: "2026-04-06",
        validThrough: "2026-12-03",
      },
    }),
    sameAs: [site.liens.instagram, site.liens.facebook, site.liens.tripadvisor, site.liens.googleMaps],
    knowsAbout: ["Raclette", "Fondue savoyarde", "Grill Josper", "Tartiflette", "Pas de la Case", "Grandvalira"],
  };
  return <Script data={data} />;
}

export function MenuLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${site.url}${routes[locale].carte}#menu`,
    name: `${site.nom} — ${locale === "fr" ? "La carte" : locale === "es" ? "La carta" : "Menu"}`,
    inLanguage: locale,
    hasMenuSection: carte.map((r) => ({
      "@type": "MenuSection",
      name: r.titre[locale],
      hasMenuItem: r.plats.map((p) => ({
        "@type": "MenuItem",
        name: nomPlat(p, locale),
        ...(p.desc && { description: p.desc[locale] }),
        ...(typeof p.prix === "number" && { offers: { "@type": "Offer", price: p.prix.toFixed(2), priceCurrency: "EUR" } }),
      })),
    })),
  };
  return <Script data={data} />;
}

export function BreadcrumbLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: site.url + it.path })),
      }}
    />
  );
}
