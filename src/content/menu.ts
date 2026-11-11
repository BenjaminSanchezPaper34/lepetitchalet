/**
 * La carte du Petit Chalet — source unique pour la page Carte (4 langues : fr, ca, es, en),
 * le JSON-LD Menu et llms.txt. Carte 2026-2027 (fichier de caisse de Seb, 10/11/2026).
 * Les noms de plats restent en français (ce sont des spécialités) ;
 * les descriptions sont traduites.
 */
import type { Locale } from "./i18n";

type T = Record<Locale, string>;
export type Plat = {
  nom: string;
  nomTr?: Partial<T>;
  desc?: T;
  /** Prix en euros ; plusieurs formats possibles (25 cl / 50 cl…) */
  prix: number | { label: string; prix: number }[];
  note?: T;
};
export type Rubrique = { id: string; titre: T; intro?: T; plats: Plat[] };

const acc: T = {
  fr: "Accompagnements : pommes de terre grenailles assaisonnées, légumes, frites maison, salade.",
  es: "Guarniciones: patatas baby aliñadas, verduras, patatas fritas caseras, ensalada.", ca: "Acompanyaments: patates petites amanides, verdures, patates fregides casolanes, amanida.",
  en: "Sides: seasoned baby potatoes, vegetables, homemade fries, salad.",
};
const parPers: T = { fr: "Prix par personne.", es: "Precio por persona.", ca: "Preu per persona.", en: "Price per person." };

export const carte: Rubrique[] = [
  {
    id: "entrees",
    titre: { fr: "Entrées", es: "Entrantes", ca: "Entrants", en: "Starters" },
    plats: [
      { nom: "Gratinée à l’oignon", nomTr: { en: "French onion soup" }, prix: 9.9,
        desc: { fr: "Véritable soupe à l’oignon et ses croûtons.", es: "Auténtica sopa de cebolla gratinada con picatostes.", ca: "Autèntica sopa de ceba gratinada amb crostons.", en: "Traditional onion soup with croutons, gratinéed." } },
      { nom: "Salade César", prix: 16.5,
        desc: { fr: "Salade, poulet pané, copeaux de parmesan, croûtons, œuf, tomates cerises.", es: "Ensalada, pollo empanado, lascas de parmesano, picatostes, huevo, tomates cherry.", ca: "Amanida, pollastre arrebossat, encenalls de parmesà, crostons, ou, tomàquets cherry.", en: "Salad, breaded chicken, parmesan shavings, croutons, egg, cherry tomatoes." } },
      { nom: "Foie gras maison", prix: 19.5,
        desc: { fr: "Foie gras, accompagné de confiture de figue.", es: "Foie gras casero con mermelada de higo.", ca: "Foie gras casolà amb melmelada de figa.", en: "Homemade foie gras with fig jam." } },
      { nom: "Saumon gravlax", prix: 16.5,
        desc: { fr: "Crème d’aneth et ses toasts.", es: "Crema de eneldo y tostadas.", ca: "Crema d’anet i torrades.", en: "Dill cream and toast." } },
    ],
  },
  {
    id: "tapas",
    titre: { fr: "Tapas", es: "Tapas", ca: "Tapes", en: "Tapas" },
    plats: [
      { nom: "Pan con tomate au jambon ibérique", nomTr: { es: "Pan con tomate y jamón ibérico", ca: "Pa amb tomàquet i pernil ibèric", en: "Pan con tomate with Iberian ham" }, prix: 8.5,
        desc: { fr: "4 pièces.", es: "4 unidades.", ca: "4 unitats.", en: "4 pieces." } },
      { nom: "Croquettes de jambon ibérique", nomTr: { es: "Croquetas de jamón ibérico", ca: "Croquetes de pernil ibèric", en: "Iberian ham croquettes" }, prix: 6.5,
        desc: { fr: "5 pièces.", es: "5 unidades.", ca: "5 unitats.", en: "5 pieces." } },
      { nom: "Assiette de frites maison", nomTr: { es: "Ración de patatas fritas caseras", ca: "Ració de patates fregides casolanes", en: "Homemade fries" }, prix: 5.5 },
      { nom: "Empanadas argentines", nomTr: { es: "Empanadas argentinas", ca: "Empanades argentines", en: "Argentinian empanadas" }, prix: 7.5,
        desc: { fr: "2 pièces, garniture selon l’humeur du chef, sauce chimichurri.", es: "2 unidades, relleno según la inspiración del chef, salsa chimichurri.", ca: "2 unitats, farciment segons la inspiració del xef, salsa chimichurri.", en: "2 pieces, filling as the chef sees fit, chimichurri sauce." } },
      { nom: "Stracciatella", prix: 9,
        desc: { fr: "Focaccia, huile d’olive.", es: "Focaccia, aceite de oliva.", ca: "Focaccia, oli d’oliva.", en: "Focaccia, olive oil." } },
      { nom: "Planche Petit Chalet", nomTr: { es: "Tabla Petit Chalet", ca: "Post Petit Chalet", en: "Petit Chalet sharing board" }, prix: 45,
        desc: { fr: "Toute notre carte de tapas sur une planche.", es: "Todas nuestras tapas en una tabla.", ca: "Totes les nostres tapes en una post.", en: "Our whole tapas menu on one board." } },
    ],
  },
  {
    id: "specialites",
    titre: { fr: "Spécialités montagnardes", es: "Especialidades de montaña", ca: "Especialitats de muntanya", en: "Mountain specialities" },
    intro: {
      fr: "Raclettes pour 2 personnes minimum : 250 g de fromage par personne, pommes de terre grenailles assaisonnées et assortiment de charcuterie.",
      es: "Raclettes para 2 personas mínimo: 250 g de queso por persona, patatas baby aliñadas y tabla de embutidos.", ca: "Raclettes per a 2 persones mínim: 250 g de formatge per persona, patates petites amanides i safata d’embotits.",
      en: "Raclette for 2 people minimum: 250 g of cheese per person, seasoned baby potatoes and a platter of cured meats.",
    },
    plats: [
      { nom: "Raclette classique", prix: 31.9, note: parPers },
      { nom: "Raclette Morbier", prix: 34.9, note: parPers },
      { nom: "Fondue savoyarde", prix: 29.9, note: parPers,
        desc: { fr: "Fromage fondu et vin blanc servi dans un pain croustillant, et assortiment de charcuterie à partager. 2 personnes minimum.", es: "Queso fundido y vino blanco servido en un pan crujiente, con surtido de embutidos para compartir. Mínimo 2 personas.", ca: "Formatge fos i vi blanc servit en un pa cruixent, amb assortiment d’embotits per compartir. Mínim 2 persones.", en: "Melted cheese and white wine served in a crusty bread bowl, with assorted cured meats to share. 2 people minimum." } },
      { nom: "Fondue savoyarde à la truffe", prix: 35.9, note: parPers,
        desc: { fr: "Fromage fondu, vin blanc et crème de truffe servi dans un pain croustillant, et assortiment de charcuterie à partager. 2 personnes minimum.", es: "Queso fundido, vino blanco y crema de trufa servido en un pan crujiente, con surtido de embutidos para compartir. Mínimo 2 personas.", ca: "Formatge fos, vi blanc i crema de tòfona servit en un pa cruixent, amb assortiment d’embotits per compartir. Mínim 2 persones.", en: "Melted cheese, white wine and truffle cream served in a crusty bread bowl, with assorted cured meats to share. 2 people minimum." } },
      { nom: "Reblochonnade", prix: 26.9,
        desc: { fr: "Pommes de terre, reblochon fondu, fondue de poireaux, jambon de pays.", es: "Patatas, reblochon fundido, puerros confitados, jamón curado.", ca: "Patates, reblochon fos, porros confitats, pernil salat.", en: "Potatoes, melted reblochon, melted leeks, cured ham." } },
      { nom: "Tartiflette", prix: 22.9,
        desc: { fr: "Pommes de terre, lardons, reblochon fondu.", es: "Patatas, panceta, reblochon fundido.", ca: "Patates, cansalada, reblochon fos.", en: "Potatoes, bacon lardons, melted reblochon." } },
      { nom: "Lasagne montagnarde", nomTr: { es: "Lasaña de montaña", ca: "Lasanya de muntanya", en: "Mountain lasagne" }, prix: 18.9, desc: { fr: "Jambon de pays, béchamel, fromage à raclette.", es: "Jamón curado, bechamel, queso raclette.", ca: "Pernil salat, beixamel, formatge de raclette.", en: "Cured ham, béchamel, raclette cheese." } },
      { nom: "Camembert au four", nomTr: { es: "Camembert al horno", ca: "Camembert al forn", en: "Baked camembert" }, prix: 22.9,
        desc: { fr: "Pommes de terre grenailles, charcuterie, miel et noix.", es: "Patatas baby, embutidos, miel y nueces.", ca: "Patates petites, embotits, mel i nous.", en: "Baby potatoes, cured meats, honey and walnuts." } },
      { nom: "Mont d’Or entier", prix: 31.9,
        desc: { fr: "500 g, accompagné de pommes de terre assaisonnées et assortiment de charcuterie.", es: "500 g, con patatas aliñadas y surtido de embutidos.", ca: "500 g, amb patates amanides i assortiment d’embotits.", en: "Whole 500 g, with seasoned potatoes and assorted cured meats." } },
      { nom: "Supplément pommes de terre", nomTr: { es: "Suplemento de patatas", ca: "Suplement de patates", en: "Extra potatoes" }, prix: 5 },
      { nom: "Supplément charcuterie", nomTr: { es: "Suplemento de embutidos", ca: "Suplement d’embotits", en: "Extra cured meats" }, prix: 7.9 },
    ],
  },
  {
    id: "viandes",
    titre: { fr: "Viandes au grill Josper", es: "Carnes a la brasa Josper", ca: "Carns a la brasa Josper", en: "Josper-grilled meats" },
    intro: acc,
    plats: [
      { nom: "Entrecôte", nomTr: { es: "Entrecot", ca: "Entrecot", en: "Rib-eye steak" }, prix: 34.9, desc: { fr: "350 g.", es: "350 g.", ca: "350 g.", en: "350 g." } },
      { nom: "Magret de canard", nomTr: { es: "Magret de pato", ca: "Magret d’ànec", en: "Duck breast" }, prix: 28.9, desc: { fr: "Entier, 350 g.", es: "Entero, 350 g.", ca: "Sencer, 350 g.", en: "Whole, 350 g." } },
      { nom: "Saucisse grillée", nomTr: { es: "Salchicha a la brasa", ca: "Salsitxa a la brasa", en: "Grilled sausage" }, prix: 17.5, desc: { fr: "Saucisse de porc.", es: "Salchicha de cerdo.", ca: "Salsitxa de porc.", en: "Pork sausage." } },
      { nom: "Boudin noir", nomTr: { es: "Morcilla", ca: "Botifarra negra", en: "Black pudding" }, prix: 18.5, desc: { fr: "Grillé.", es: "A la brasa.", ca: "A la brasa.", en: "Grilled." } },
      { nom: "Burger montagnard", nomTr: { es: "Hamburguesa de montaña", ca: "Hamburguesa de muntanya", en: "Mountain burger" }, prix: 21.5,
        desc: { fr: "Pain brioché, steak haché 180 g, oignons confits, fromage à raclette fondu, salade, tomate.", es: "Pan brioche, carne picada 180 g, cebolla confitada, queso raclette fundido, lechuga, tomate.", ca: "Pa brioix, carn picada 180 g, ceba confitada, formatge de raclette fos, enciam, tomàquet.", en: "Brioche bun, 180 g beef patty, confit onions, melted raclette cheese, lettuce, tomato." } },
      { nom: "Côtelettes d’agneau", nomTr: { es: "Chuletas de cordero", ca: "Costelles de xai", en: "Lamb chops" }, prix: 28, desc: { fr: "4 côtelettes grillées.", es: "4 chuletas a la brasa.", ca: "4 costelles a la brasa.", en: "4 grilled chops." } },
      { nom: "Côte de bœuf à partager", nomTr: { es: "Chuletón para compartir", ca: "Costella de bou per compartir", en: "Côte de bœuf to share" }, prix: 85, desc: { fr: "1,2 kg, pour 1 ou 2 personnes.", es: "1,2 kg, para 1 o 2 personas.", ca: "1,2 kg, per a 1 o 2 persones.", en: "1.2 kg, for 1 or 2 people." } },
      { nom: "Assortiment de viandes à partager", nomTr: { es: "Surtido de carnes para compartir", ca: "Assortiment de carns per compartir", en: "Mixed grill to share" }, prix: 70,
        desc: { fr: "Environ 1 kg de viande : ½ magret de canard 200 g, saucisse grillée 300 g, boudin noir 300 g, pièce du boucher 200 g. 2 personnes minimum.", es: "Aprox. 1 kg de carne: ½ magret de pato 200 g, salchicha 300 g, morcilla 300 g, pieza del carnicero 200 g. Mínimo 2 personas.", ca: "Aprox. 1 kg de carn: ½ magret d’ànec 200 g, salsitxa 300 g, botifarra negra 300 g, peça del carnisser 200 g. Mínim 2 persones.", en: "About 1 kg of meat: ½ duck breast 200 g, sausage 300 g, black pudding 300 g, butcher’s cut 200 g. 2 people minimum." } },
      { nom: "Épaule d’agneau confite", nomTr: { es: "Paletilla de cordero confitada", ca: "Espatlla de xai confitada", en: "Slow-cooked lamb shoulder" }, prix: 85, desc: { fr: "Confite à basse température, 2 personnes minimum.", es: "Confitada a baja temperatura, mínimo 2 personas.", ca: "Confitada a baixa temperatura, mínim 2 persones.", en: "Slow-cooked at low temperature, 2 people minimum." } },
      { nom: "Supplément sauce", nomTr: { es: "Suplemento de salsa", ca: "Suplement de salsa", en: "Sauce supplement" }, prix: 3,
        desc: { fr: "Roquefort, poivre, béarnaise, aïoli, miel et romarin.", es: "Roquefort, pimienta, bearnesa, alioli, miel y romero.", ca: "Rocafort, pebre, bearnesa, allioli, mel i romaní.", en: "Roquefort, pepper, béarnaise, aioli, honey and rosemary." } },
    ],
  },
  {
    id: "poissons",
    titre: { fr: "Poissons au grill Josper", es: "Pescados a la brasa Josper", ca: "Peixos a la brasa Josper", en: "Josper-grilled fish" },
    intro: acc,
    plats: [
      { nom: "Pavé de saumon", nomTr: { es: "Lomo de salmón", ca: "Llom de salmó", en: "Salmon fillet" }, prix: 19.5 },
      { nom: "Calamars grillés en persillade", nomTr: { es: "Calamares a la brasa con ajo y perejil", ca: "Calamars a la brasa amb all i julivert", en: "Grilled squid, garlic & parsley" }, prix: 21.5 },
    ],
  },
  {
    id: "pates",
    titre: { fr: "Pâtes", es: "Pasta", ca: "Pasta", en: "Pasta" },
    intro: { fr: "Penne rigate.", es: "Penne rigate.", ca: "Penne rigate.", en: "Penne rigate." },
    plats: [
      { nom: "Carbonara", prix: 16.9, desc: { fr: "Crème fraîche, lardons fumés, oignons, œuf, copeaux de parmesan, roquette, tomates cerises.", es: "Nata, panceta ahumada, cebolla, huevo, lascas de parmesano, rúcula, tomates cherry.", ca: "Nata, cansalada fumada, ceba, ou, encenalls de parmesà, ruca, tomàquets cherry.", en: "Cream, smoked bacon, onions, egg, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Bolognaise", prix: 16.9, desc: { fr: "Sauce bolognaise, copeaux de parmesan, roquette, tomates cerises.", es: "Salsa boloñesa, lascas de parmesano, rúcula, tomates cherry.", ca: "Salsa bolonyesa, encenalls de parmesà, ruca, tomàquets cherry.", en: "Bolognese sauce, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Saumon", nomTr: { es: "Salmón", ca: "Salmó", en: "Salmon" }, prix: 18.9, desc: { fr: "Crème fraîche, filet de saumon, copeaux de parmesan, roquette, tomates cerises.", es: "Nata, filete de salmón, lascas de parmesano, rúcula, tomates cherry.", ca: "Nata, filet de salmó, encenalls de parmesà, ruca, tomàquets cherry.", en: "Cream, salmon fillet, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Italiennes", nomTr: { es: "Italiana", ca: "Italiana", en: "Italian" }, prix: 24.9, desc: { fr: "Jambon de pays, burrata entière, copeaux de parmesan, roquette, tomates cerises.", es: "Jamón curado, burrata entera, lascas de parmesano, rúcula, tomates cherry.", ca: "Pernil salat, burrata sencera, encenalls de parmesà, ruca, tomàquets cherry.", en: "Cured ham, whole burrata, parmesan shavings, rocket, cherry tomatoes." } },
    ],
  },
  {
    id: "formules",
    titre: { fr: "Formules", es: "Menús", ca: "Menús", en: "Set menus" },
    plats: [
      { nom: "Menu du midi", nomTr: { es: "Menú del mediodía", ca: "Menú de migdia", en: "Lunch menu" }, prix: 21.5,
        desc: { fr: "Entrée, plat et dessert selon l’ardoise.", es: "Entrante, plato y postre según la pizarra.", ca: "Entrant, plat i postres segons la pissarra.", en: "Starter, main course and dessert from the daily board." },
        note: { fr: "Uniquement le midi.", es: "Solo al mediodía.", ca: "Només al migdia.", en: "Lunchtime only." } },
      { nom: "Formule", nomTr: { es: "Fórmula", ca: "Fórmula", en: "Two-course lunch" }, prix: 18.5,
        desc: { fr: "Entrée et plat, ou plat et dessert.", es: "Entrante y plato, o plato y postre.", ca: "Entrant i plat, o plat i postres.", en: "Starter and main, or main and dessert." },
        note: { fr: "Uniquement le midi.", es: "Solo al mediodía.", ca: "Només al migdia.", en: "Lunchtime only." } },
      { nom: "Plat du jour", nomTr: { es: "Plato del día", ca: "Plat del dia", en: "Dish of the day" }, prix: 16.9,
        desc: { fr: "Selon l’ardoise.", es: "Según la pizarra.", ca: "Segons la pissarra.", en: "From the daily board." },
        note: { fr: "Uniquement le midi.", es: "Solo al mediodía.", ca: "Només al migdia.", en: "Lunchtime only." } },
    ],
  },
  {
    id: "enfants",
    titre: { fr: "Menu enfants", es: "Menú infantil", ca: "Menú infantil", en: "Kids’ menu" },
    plats: [
      { nom: "Menu enfants", nomTr: { es: "Menú infantil", ca: "Menú infantil", en: "Kids’ menu" }, prix: 12.5,
        desc: { fr: "Pâtes bolognaise ou poulet pané, une boisson et une boule de glace au choix.", es: "Pasta boloñesa o pollo empanado, una bebida y una bola de helado a elegir.", ca: "Pasta bolonyesa o pollastre arrebossat, una beguda i una bola de gelat a triar.", en: "Bolognese pasta or breaded chicken, a drink and a scoop of ice cream of your choice." } },
    ],
  },
  {
    id: "desserts",
    titre: { fr: "Desserts maison", es: "Postres caseros", ca: "Postres casolanes", en: "Homemade desserts" },
    plats: [
      { nom: "Panna cotta", prix: 9 },
      { nom: "Tiramisu", prix: 9 },
      { nom: "Mi-cuit au chocolat", nomTr: { es: "Coulant de chocolate", ca: "Coulant de xocolata", en: "Molten chocolate cake" }, prix: 9 },
      { nom: "Tarte Tatin", prix: 9 },
      { nom: "Cheesecake", prix: 9, desc: { fr: "Stracciatella.", es: "Stracciatella.", ca: "Stracciatella.", en: "Stracciatella." } },
      { nom: "Café gourmand", prix: 9 },
    ],
  },
  {
    id: "crepes",
    titre: { fr: "Crêpes & gaufres", es: "Crepes y gofres", ca: "Creps i gofres", en: "Crêpes & waffles" },
    plats: [
      { nom: "Crêpe au sucre", prix: 3.5 },
      { nom: "Crêpe au Nutella", prix: 5.5 },
      { nom: "Crêpe confiture", prix: 5.5, desc: { fr: "Fraise ou abricot.", es: "Fresa o albaricoque.", ca: "Maduixa o albercoc.", en: "Strawberry or apricot." } },
      { nom: "Crêpe crème de marron", prix: 5.5 },
      { nom: "Crêpe Nutella banane", prix: 6.5 },
      { nom: "Crêpe au Grand Marnier", prix: 7 },
      { nom: "Gaufre au Nutella", prix: 6.5 },
      { nom: "Gaufre confiture", prix: 6.5, desc: { fr: "Fraise ou abricot.", es: "Fresa o albaricoque.", ca: "Maduixa o albercoc.", en: "Strawberry or apricot." } },
      { nom: "Gaufre crème de marron", prix: 6.5 },
      { nom: "Gaufre Nutella banane", prix: 7.5 },
      { nom: "Supplément chantilly", prix: 1 },
    ],
  },
  {
    id: "glaces",
    titre: { fr: "Coupes glacées & glaces", es: "Copas heladas y helados", ca: "Copes gelades i gelats", en: "Sundaes & ice cream" },
    plats: [
      { nom: "Dame blanche", prix: 9 },
      { nom: "Chocolat liégeois", prix: 9 },
      { nom: "Café liégeois", prix: 9 },
      { nom: "Colonel", prix: 9 },
      { nom: "Mont-Blanc", prix: 9 },
      { nom: "Banana split", prix: 9 },
      { nom: "Glace 1 boule", nomTr: { es: "Helado 1 bola", ca: "Gelat 1 bola", en: "Ice cream, 1 scoop" }, prix: 3,
        desc: { fr: "Vanille, chocolat, fraise, citron, café.", es: "Vainilla, chocolate, fresa, limón, café.", ca: "Vainilla, xocolata, maduixa, llimona, cafè.", en: "Vanilla, chocolate, strawberry, lemon, coffee." } },
      { nom: "Glace 2 boules", nomTr: { es: "Helado 2 bolas", ca: "Gelat 2 boles", en: "Ice cream, 2 scoops" }, prix: 4.5 },
      { nom: "Glace 3 boules", nomTr: { es: "Helado 3 bolas", ca: "Gelat 3 boles", en: "Ice cream, 3 scoops" }, prix: 6 },
      { nom: "Supplément chantilly", nomTr: { es: "Suplemento de nata montada", ca: "Suplement de nata muntada", en: "Extra whipped cream" }, prix: 1 },
    ],
  },
];

/** Carte des boissons (reprise du PDF « menu numérique boissons »). */
export const boissons: Rubrique[] = [
  {
    id: "softs", titre: { fr: "Softs", es: "Refrescos", ca: "Refrescos", en: "Soft drinks" },
    plats: [
      { nom: "Coca-Cola 35 cl", prix: 3.8 },
      { nom: "Coca-Cola Zéro 35 cl", nomTr: { es: "Coca-Cola Zero 35 cl", ca: "Coca-Cola Zero 35 cl", en: "Coca-Cola Zero 35 cl" }, prix: 3.8 },
      { nom: "Fuze Tea 30 cl", prix: 3.8 },
      { nom: "Aquarius 30 cl", prix: 3.8 },
      { nom: "Sprite 35 cl", prix: 3.8 },
      { nom: "Fanta 33 cl", prix: 3.8, desc: { fr: "Orange, citron.", es: "Naranja, limón.", ca: "Taronja, llimona.", en: "Orange, lemon." } },
      { nom: "Minute Maid 20 cl", prix: 3.8, desc: { fr: "Orange, ananas, pomme.", es: "Naranja, piña, manzana.", ca: "Taronja, pinya, poma.", en: "Orange, pineapple, apple." } },
      { nom: "Tonic Nordic Mist 20 cl", prix: 3.8 },
      { nom: "Sirop à l’eau", nomTr: { es: "Sirope con agua", ca: "Xarop amb aigua", en: "Cordial" }, prix: 2.5, desc: { fr: "Grenadine, fraise, menthe, pêche, citron.", es: "Granadina, fresa, menta, melocotón, limón.", ca: "Granadina, maduixa, menta, préssec, llimona.", en: "Grenadine, strawberry, mint, peach, lemon." } },
      { nom: "Eau Le Petit Chalet 50 cl", nomTr: { es: "Agua Le Petit Chalet 50 cl", ca: "Aigua Le Petit Chalet 50 cl", en: "Le Petit Chalet water 50 cl" }, prix: 2, desc: { fr: "Plate ou gazeuse.", es: "Sin gas o con gas.", ca: "Sense gas o amb gas.", en: "Still or sparkling." } },
      { nom: "Eau Le Petit Chalet 1 L", nomTr: { es: "Agua Le Petit Chalet 1 L", ca: "Aigua Le Petit Chalet 1 L", en: "Le Petit Chalet water 1 L" }, prix: 3, desc: { fr: "Plate ou gazeuse.", es: "Sin gas o con gas.", ca: "Sense gas o amb gas.", en: "Still or sparkling." } },
    ],
  },
  {
    id: "bieres", titre: { fr: "Bières", es: "Cervezas", ca: "Cerveses", en: "Beers" },
    plats: [
      { nom: "Sagres pression", nomTr: { es: "Sagres de barril", ca: "Sagres de barril", en: "Sagres on tap" }, prix: [{ label: "25 cl", prix: 3 }, { label: "40 cl", prix: 6 }] },
      { nom: "Estrella 33 cl", prix: 5 },
      { nom: "Corona 33 cl", prix: 5 },
      { nom: "Desperados 33 cl", prix: 5 },
      { nom: "Panaché", nomTr: { es: "Clara", ca: "Clara", en: "Shandy" }, prix: 3 },
      { nom: "Monaco", prix: 3.2 },
      { nom: "Estrella 0,0 33 cl", nomTr: { es: "Estrella 0,0 33 cl (sin alcohol)", ca: "Estrella 0,0 33 cl (sense alcohol)", en: "Estrella 0.0 33 cl (alcohol-free)" }, prix: 4.5 },
      { nom: "Supplément sirop", nomTr: { es: "Suplemento de sirope", ca: "Suplement de xarop", en: "Syrup supplement" }, prix: 0.5 },
    ],
  },
  {
    id: "aperitifs", titre: { fr: "Apéritifs & alcools", es: "Aperitivos y licores", ca: "Aperitius i licors", en: "Aperitifs & spirits" },
    plats: [
      { nom: "Ricard", prix: 3 }, { nom: "Pastis", prix: 3 }, { nom: "Martini blanc", prix: 4 }, { nom: "Martini rouge", nomTr: { es: "Martini rojo", ca: "Martini vermell", en: "Martini Rosso" }, prix: 4 },
      { nom: "Sangria", prix: 5 }, { nom: "Vin chaud", nomTr: { es: "Vino caliente", ca: "Vi calent", en: "Mulled wine" }, prix: 5 }, { nom: "Kir", prix: 4 },
      { nom: "Rhum Captain Morgan", nomTr: { es: "Ron Captain Morgan", ca: "Rom Captain Morgan", en: "Captain Morgan rum" }, prix: 5 }, { nom: "Rhum Havana", nomTr: { es: "Ron Havana", ca: "Rom Havana", en: "Havana rum" }, prix: 5 },
      { nom: "Whisky Ballantine’s", prix: 5 }, { nom: "Whisky Jack Daniel’s", prix: 6 },
      { nom: "Supplément soda", nomTr: { es: "Suplemento refresco", ca: "Suplement refresc", en: "Soda supplement" }, prix: 3.9 },
    ],
  },
  {
    id: "cocktails", titre: { fr: "Cocktails", es: "Cócteles", ca: "Còctels", en: "Cocktails" },
    plats: [
      { nom: "Gin Tonic", prix: 9, desc: { fr: "Gin Bombay Sapphire, tonic Nordic Mist, citron vert.", es: "Ginebra Bombay Sapphire, tónica Nordic Mist, lima.", ca: "Ginebra Bombay Sapphire, tònica Nordic Mist, llima.", en: "Bombay Sapphire gin, Nordic Mist tonic, lime." } },
      { nom: "Aperol Spritz", prix: 9, desc: { fr: "Aperol, Freixenet, eau gazeuse, orange.", es: "Aperol, Freixenet, soda, naranja.", ca: "Aperol, Freixenet, soda, taronja.", en: "Aperol, Freixenet, soda water, orange." } },
      { nom: "Mojito", prix: 9, desc: { fr: "Rhum blanc, sirop de sucre de canne, eau gazeuse, citron, menthe.", es: "Ron blanco, sirope de caña, soda, limón, menta.", ca: "Rom blanc, xarop de canya, soda, llimona, menta.", en: "White rum, cane sugar syrup, soda water, lime, mint." } },
      { nom: "Tequila Sunrise", prix: 9, desc: { fr: "Tequila, jus d’orange, sirop de grenadine.", es: "Tequila, zumo de naranja, granadina.", ca: "Tequila, suc de taronja, granadina.", en: "Tequila, orange juice, grenadine." } },
      { nom: "Piña Colada", prix: 9, desc: { fr: "Rhum blanc, rhum ambré, jus d’ananas, lait de coco.", es: "Ron blanco, ron añejo, zumo de piña, leche de coco.", ca: "Rom blanc, rom envellit, suc de pinya, llet de coco.", en: "White rum, golden rum, pineapple juice, coconut milk." } },
      { nom: "Caïpirinha", prix: 9, desc: { fr: "Cachaça, sucre de canne, citron vert, eau gazeuse.", es: "Cachaça, azúcar de caña, lima, soda.", ca: "Cachaça, sucre de canya, llima, soda.", en: "Cachaça, cane sugar, lime, soda water." } },
    ],
  },
  {
    id: "vins", titre: { fr: "Vins", es: "Vinos", ca: "Vins", en: "Wines" },
    plats: [
      { nom: "Les Turitelles, Altugnac Chardonnay 2023", prix: 14.5, note: { fr: "Blanc · aussi au verre : 4 €", es: "Blanco · también por copas: 4 €", ca: "Blanc · també per copes: 4 €", en: "White · also by the glass: €4" } },
      { nom: "Domaine Valjulius Chardonnay Signature 2025", prix: 16.5, note: { fr: "Blanc", es: "Blanco", ca: "Blanc", en: "White" } },
      { nom: "Château Camplazens Viognier 2025", prix: 17.9, note: { fr: "Blanc · IGP Coteaux de Narbonne · aussi au verre : 5 €", es: "Blanco · IGP Coteaux de Narbonne · también por copas: 5 €", ca: "Blanc · IGP Coteaux de Narbonne · també per copes: 5 €", en: "White · IGP Coteaux de Narbonne · also by the glass: €5" } },
      { nom: "Manon, Clos Marie 2025", prix: 38.9, note: { fr: "Blanc · Languedoc", es: "Blanco · Languedoc", ca: "Blanc · Languedoc", en: "White · Languedoc" } },
      { nom: "Chablis, Jean-Paul & Benoît Droin 2023", prix: 48.5, note: { fr: "Blanc", es: "Blanco", ca: "Blanc", en: "White" } },
      { nom: "Château Camplazens Convivialité 2025", prix: 16.5, note: { fr: "Rosé · IGP Coteaux de Narbonne · aussi au verre : 4 €", es: "Rosado · IGP Coteaux de Narbonne · también por copas: 4 €", ca: "Rosat · IGP Coteaux de Narbonne · també per copes: 4 €", en: "Rosé · IGP Coteaux de Narbonne · also by the glass: €4" } },
      { nom: "Château de Caraguilhes Cara Bio 2025", prix: 22.5, note: { fr: "Rosé · Corbières", es: "Rosado · Corbières", ca: "Rosat · Corbières", en: "Rosé · Corbières" } },
      { nom: "Domaine Valjulius Signature 2024", prix: 18.5, note: { fr: "Rouge", es: "Tinto", ca: "Negre", en: "Red" } },
      { nom: "Domaine Piccinini Helius Petri, Cabernet franc 2025", prix: 19.5, note: { fr: "Rouge · Vin de France · aussi au verre : 4 €", es: "Tinto · Vin de France · también por copas: 4 €", ca: "Negre · Vin de France · també per copes: 4 €", en: "Red · Vin de France · also by the glass: €4" } },
      { nom: "Díaz Bayo Ribera del Duero Roble", prix: 21.5, note: { fr: "Rouge", es: "Tinto", ca: "Negre", en: "Red" } },
      { nom: "Saint-Chinian Plein Grès Bio, Mas de Cynanque 2022", prix: 22.5, note: { fr: "Rouge", es: "Tinto", ca: "Negre", en: "Red" } },
      { nom: "Marqués de Tomares Rioja Crianza", prix: 25, note: { fr: "Rouge", es: "Tinto", ca: "Negre", en: "Red" } },
      { nom: "Domaine Croix de Saint Privat Grande Cuvée Bio 2023", prix: 37.5, note: { fr: "Rouge · Terrasses du Larzac · aussi au verre : 7 €", es: "Tinto · Terrasses du Larzac · también por copas: 7 €", ca: "Negre · Terrasses du Larzac · també per copes: 7 €", en: "Red · Terrasses du Larzac · also by the glass: €7" } },
      { nom: "Clos Saint Sébastien Inspiration Marine 2022", prix: 48.9, note: { fr: "Rouge · Collioure", es: "Tinto · Collioure", ca: "Negre · Collioure", en: "Red · Collioure" } },
      { nom: "Château Tonneret 2015", prix: 54.9, note: { fr: "Rouge · Saint-Émilion", es: "Tinto · Saint-Émilion", ca: "Negre · Saint-Émilion", en: "Red · Saint-Émilion" } },
      { nom: "Domaine Denis Mortet, Cuvée de Noble Souche 2022", prix: 71, note: { fr: "Rouge · Bourgogne", es: "Tinto · Bourgogne", ca: "Negre · Bourgogne", en: "Red · Bourgogne" } },
      { nom: "Domaine Lorenzon Les Vignes d’Orge 2024", prix: 98.9, note: { fr: "Rouge · Mercurey", es: "Tinto · Mercurey", ca: "Negre · Mercurey", en: "Red · Mercurey" } },
      { nom: "Pichet rouge, rosé ou blanc", nomTr: { es: "Jarra de tinto, rosado o blanco", ca: "Gerra de negre, rosat o blanc", en: "Carafe of red, rosé or white" }, prix: [{ label: "25 cl", prix: 4 }, { label: "50 cl", prix: 6 }], note: { fr: "Vin de France Cabernet", es: "Vin de France Cabernet", ca: "Vin de France Cabernet", en: "Vin de France Cabernet" } },
      { nom: "Champagne Montmartre 1er cru Secret de famille brut", prix: 60 },
      { nom: "Champagne Ruinart R de Ruinart brut", prix: 95 },
      { nom: "Champagne Ruinart Blanc de Blancs", prix: 160 },
    ],
  },
  {
    id: "digestifs", titre: { fr: "Digestifs", es: "Digestivos", ca: "Digestius", en: "Digestifs" },
    plats: [
      { nom: "Limoncello 2 cl", prix: 2 }, { nom: "Rhum arrangé 2 cl", nomTr: { es: "Ron macerado 2 cl", ca: "Rom macerat 2 cl", en: "Infused rum 2 cl" }, prix: 2.5 },
      { nom: "Baileys", prix: 5 }, { nom: "Get 27", prix: 5 }, { nom: "Mentheuse", prix: 5 }, { nom: "Diplomático", prix: 5 }, { nom: "Don Papa", prix: 11.9 },
      { nom: "Irish coffee", prix: 9 },
    ],
  },
  {
    id: "chaud", titre: { fr: "Boissons chaudes", es: "Bebidas calientes", ca: "Begudes calentes", en: "Hot drinks" },
    plats: [
      { nom: "Café", nomTr: { es: "Café solo", ca: "Cafè sol", en: "Espresso" }, prix: 2 }, { nom: "Café allongé", nomTr: { es: "Café americano", ca: "Cafè americà", en: "Americano" }, prix: 2.5 },
      { nom: "Café crème", nomTr: { es: "Café con leche", ca: "Cafè amb llet", en: "Café crème" }, prix: 3 }, { nom: "Thé", nomTr: { es: "Té", ca: "Te", en: "Tea" }, prix: 3 },
      { nom: "Cappuccino", prix: 4 },
      { nom: "Chocolat chaud", nomTr: { es: "Chocolate caliente", ca: "Xocolata calenta", en: "Hot chocolate" }, prix: 3 },
      { nom: "Chocolat viennois", nomTr: { es: "Chocolate vienés", ca: "Xocolata vienesa", en: "Viennese hot chocolate" }, prix: 4, desc: { fr: "Chocolat chaud, chantilly.", es: "Chocolate caliente con nata montada.", ca: "Xocolata calenta amb nata muntada.", en: "Hot chocolate with whipped cream." } },
    ],
  },
];

export function nomPlat(p: Plat, l: Locale) {
  return p.nomTr?.[l] ?? p.nom;
}

export function formatPrix(n: number, l: Locale) {
  return new Intl.NumberFormat(l === "en" ? "en-GB" : l, { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(n);
}
