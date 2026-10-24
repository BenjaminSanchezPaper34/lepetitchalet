import type { MetadataRoute } from "next";
import { locales, routes } from "@/content/i18n";
import { site } from "@/content/site";

const maj = new Date("2026-10-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = (["home", "carte"] as const).flatMap((p) =>
    locales.map((l) => ({
      url: site.url + (routes[l][p] === "/" ? "" : routes[l][p]),
      lastModified: maj,
      changeFrequency: "monthly" as const,
      priority: p === "home" ? (l === "fr" ? 1 : 0.9) : 0.8,
      alternates: {
        languages: {
          fr: site.url + (routes.fr[p] === "/" ? "" : routes.fr[p]),
          ca: site.url + routes.ca[p],
          es: site.url + routes.es[p],
          en: site.url + routes.en[p],
        },
      },
    })),
  );
  return [
    ...pages,
    { url: `${site.url}/mentions-legales`, lastModified: maj, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/confidentialite`, lastModified: maj, changeFrequency: "yearly", priority: 0.2 },
  ];
}
