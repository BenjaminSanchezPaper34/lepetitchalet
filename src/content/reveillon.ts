/**
 * Menu du 31 décembre (réveillon) — affiché automatiquement sur l'accueil et la carte
 * du 17 au 31 décembre inclus (pages régénérées chaque jour), puis masqué.
 * Source : fichier de caisse de Seb (FORMULES) + A4 MENUDU31-A4-LEPETITCHALET.indd, 13/11/2026.
 */
import type { Locale } from "./i18n";

type T = Record<Locale, string>;

export const reveillon = {
  debut: "2026-12-17",
  fin: "2026-12-31",
  prix: 110,
  prixEnfant: 45,
  groupe: "Non-Stop",
  titre: { fr: "Menu du 31 décembre", ca: "Menú de Cap d’Any", es: "Menú de Nochevieja", en: "New Year’s Eve menu" } as T,
  kicker: { fr: "Réveillon de la Saint-Sylvestre", ca: "Revetlla de Cap d’Any", es: "Cena de Nochevieja", en: "New Year’s Eve dinner" } as T,
  horsBoissons: { fr: "hors vin et boissons", ca: "sense begudes", es: "bebidas no incluidas", en: "excluding wine and drinks" } as T,
  enfant: { fr: "menu enfant", ca: "menú infantil", es: "menú infantil", en: "children’s menu" } as T,
  musique: { fr: "Animation musicale avec le groupe", ca: "Animació musical amb el grup", es: "Música en directo con el grupo", en: "Live music with the band" } as T,
  ou: { fr: "ou", ca: "o bé", es: "o", en: "or" } as T,
  reserver: { fr: "Réserver le réveillon", ca: "Reservar el Cap d’Any", es: "Reservar Nochevieja", en: "Book New Year’s Eve" } as T,
  message: {
    fr: "Bonjour, je souhaite réserver pour le menu du 31 décembre.\nNombre de personnes : \nDont enfants : \nNom : ",
    ca: "Hola, voldria reservar per al menú de Cap d’Any.\nNombre de persones: \nNens: \nNom: ",
    es: "Hola, quiero reservar para el menú de Nochevieja.\nNúmero de personas: \nNiños: \nNombre: ",
    en: "Hello, I’d like to book the New Year’s Eve menu.\nNumber of people: \nChildren: \nName: ",
  } as T,
  /** Étapes du menu ; une étape à plusieurs plats se lit « au choix » (séparés par « ou »). */
  etapes: [
    { titre: { fr: "Pour commencer", ca: "Per començar", es: "Para empezar", en: "To begin" } as T,
      plats: [{ fr: "Mignardises et coupe de bienvenue, bonbon au foie gras et cuillère de caviar.", ca: "Mignardises i copa de benvinguda, bombó de foie gras i cullerada de caviar.", es: "Mignardises y copa de bienvenida, bombón de foie gras y cucharita de caviar.", en: "Petits fours and a welcome glass, foie gras bonbon and a spoonful of caviar." }] as T[], choix: false },
    { titre: { fr: "Entrées", ca: "Entrants", es: "Entrantes", en: "Starters" } as T,
      plats: [{ fr: "Saumon gravlax.", ca: "Salmó gravlax.", es: "Salmón gravlax.", en: "Gravlax salmon." },
              { fr: "Foie gras maison et sa confiture de figue.", ca: "Foie gras casolà amb melmelada de figues.", es: "Foie gras casero con mermelada de higo.", en: "Homemade foie gras with fig jam." }] as T[], choix: true },
    { titre: { fr: "Plats", ca: "Plats principals", es: "Platos principales", en: "Main courses" } as T,
      plats: [{ fr: "Suprême de pintade sauce aux morilles et sa purée maison.", ca: "Suprema de pintada amb salsa de múrgoles i puré casolà.", es: "Suprema de pintada con salsa de colmenillas y puré casero.", en: "Guinea fowl supreme with morel sauce and homemade mashed potatoes." },
              { fr: "Tataki de thon sauce vierge, amandes, pistaches, légumes croquants et mangue, risotto au safran.", ca: "Tataki de tonyina, salsa verge, ametlles, festucs, verdures cruixents i mango, risotto de safrà.", es: "Tataki de atún, salsa virgen, almendras, pistachos, verduras crujientes y mango, risotto de azafrán.", en: "Tuna tataki, sauce vierge, almonds, pistachios, crunchy vegetables and mango, saffron risotto." }] as T[], choix: true },
    { titre: { fr: "Avant le dessert", ca: "Abans de les postres", es: "Antes del postre", en: "Before dessert" } as T,
      plats: [{ fr: "Assortiment de fromages.", ca: "Selecció de formatges.", es: "Surtido de quesos.", en: "Selection of cheeses." }] as T[], choix: false },
    { titre: { fr: "Desserts", ca: "Postres", es: "Postres", en: "Desserts" } as T,
      plats: [{ fr: "Les douze raisins de minuit. Bûche du réveillon.", ca: "Els dotze grans de raïm de mitjanit. Tronc de Cap d’Any.", es: "Las doce uvas de medianoche. Tronco de Nochevieja.", en: "The twelve grapes of midnight. New Year’s Eve log cake." }] as T[], choix: false },
  ],
};

/** Vrai entre `debut` et `fin` inclus, à l'heure d'Andorre. REVEILLON_APERCU=1 force l'affichage (aperçu local). */
export function reveillonVisible(maintenant = new Date()) {
  if (process.env.REVEILLON_APERCU === "1") return true;
  const jour = maintenant.toLocaleDateString("en-CA", { timeZone: "Europe/Andorra" });
  return jour >= reveillon.debut && jour <= reveillon.fin;
}
