import { site } from "@/content/site";

/**
 * Le restaurant est-il en saison ? Évalué au rendu (pages régénérées chaque nuit via
 * `revalidate`) : le bandeau d'ouverture disparaît tout seul le 4 décembre.
 */
export function avantOuverture(now = new Date()) {
  // Minuit à Andorre (UTC+1 en hiver)
  return now < new Date(`${site.ouverture}T00:00:00+01:00`);
}
