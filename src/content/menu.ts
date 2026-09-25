/**
 * La carte du Petit Chalet — source unique pour la page Carte (3 langues),
 * le JSON-LD Menu et llms.txt. Reprise de la carte imprimée 2025-2026.
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
  fr: "Accompagnements : pommes de terre grenailles assaisonnées, légumes, frites, salade.",
  es: "Guarniciones: patatas baby aliñadas, verduras, patatas fritas, ensalada.",
  en: "Sides: seasoned baby potatoes, vegetables, fries, salad.",
};
const parPers: T = { fr: "Prix par personne.", es: "Precio por persona.", en: "Price per person." };

export const carte: Rubrique[] = [
  {
    id: "entrees",
    titre: { fr: "Entrées", es: "Entrantes", en: "Starters" },
    plats: [
      { nom: "Gratiné à l’oignon", nomTr: { en: "French onion soup" }, prix: 9.9,
        desc: { fr: "Véritable soupe à l’oignon et ses croûtons.", es: "Auténtica sopa de cebolla gratinada con picatostes.", en: "Traditional onion soup with croutons, gratinéed." } },
      { nom: "Salade César", prix: 16.5,
        desc: { fr: "Salade, poulet pané, copeaux de parmesan, croûtons, œuf, tomates cerises.", es: "Ensalada, pollo empanado, lascas de parmesano, picatostes, huevo, tomates cherry.", en: "Salad, breaded chicken, parmesan shavings, croutons, egg, cherry tomatoes." } },
      { nom: "Tomates Burrata", prix: 15.9,
        desc: { fr: "Assortiment de tomates, burrata fraîche.", es: "Surtido de tomates, burrata fresca.", en: "Assorted tomatoes, fresh burrata." } },
      { nom: "Cassolette de Saint-Jacques gratinées", prix: 17.5,
        desc: { fr: "Sur son lit de fondue de poireaux.", es: "Vieiras gratinadas sobre fondue de puerros.", en: "Gratinéed scallops on a bed of melted leeks." } },
      { nom: "Foie gras maison", prix: 19.5,
        desc: { fr: "Foie gras, accompagné de confiture de figue.", es: "Foie gras casero con mermelada de higo.", en: "Homemade foie gras with fig jam." } },
      { nom: "Saumon gravlax", prix: 16.5,
        desc: { fr: "Crème d’aneth et ses toasts.", es: "Crema de eneldo y tostadas.", en: "Dill cream and toast." } },
      { nom: "Chèvre chaud", prix: 15.9,
        desc: { fr: "Salade, chèvre chaud, lard fumé, croûtons, tomates cerises.", es: "Ensalada, queso de cabra caliente, panceta ahumada, picatostes, tomates cherry.", en: "Salad, warm goat’s cheese, smoked bacon, croutons, cherry tomatoes." } },
      { nom: "Camembert au four", prix: 22.9,
        desc: { fr: "Accompagné de pommes de terre grenailles et charcuterie.", es: "Camembert al horno con patatas baby y embutidos.", en: "Baked camembert with baby potatoes and cured meats." } },
    ],
  },
  {
    id: "specialites",
    titre: { fr: "Spécialités montagnardes", es: "Especialidades de montaña", en: "Mountain specialities" },
    intro: {
      fr: "Raclettes pour 2 personnes minimum : 250 g de fromage par personne, pommes de terre grenailles assaisonnées et plateau de charcuterie.",
      es: "Raclettes para 2 personas mínimo: 250 g de queso por persona, patatas baby aliñadas y tabla de embutidos.",
      en: "Raclette for 2 people minimum: 250 g of cheese per person, seasoned baby potatoes and a platter of cured meats.",
    },
    plats: [
      { nom: "Raclette classique", prix: 31.9, note: parPers },
      { nom: "Raclette Morbier", prix: 34.9, note: parPers },
      { nom: "Raclette truffe", prix: 48.9, note: parPers },
      { nom: "Fondue savoyarde", prix: 29.9, note: parPers,
        desc: { fr: "Fromage fondu et vin blanc servi dans un pain croustillant.", es: "Queso fundido y vino blanco servido en un pan crujiente.", en: "Melted cheese and white wine served in a crusty bread bowl." } },
      { nom: "Fondue savoyarde à la truffe", prix: 35.9, note: parPers,
        desc: { fr: "Fromage fondu et vin blanc servi dans un pain croustillant.", es: "Queso fundido y vino blanco servido en un pan crujiente.", en: "Melted cheese and white wine served in a crusty bread bowl." } },
      { nom: "Reblochonnade", prix: 26.9,
        desc: { fr: "Pommes de terre, reblochon fondu, fondue de poireaux, jambon de pays.", es: "Patatas, reblochon fundido, puerros confitados, jamón curado.", en: "Potatoes, melted reblochon, melted leeks, cured ham." } },
      { nom: "Tartiflette", prix: 22.9,
        desc: { fr: "Pommes de terre, lardons, reblochon fondu.", es: "Patatas, panceta, reblochon fundido.", en: "Potatoes, bacon lardons, melted reblochon." } },
      { nom: "Mont d’Or entier", prix: 29.9,
        desc: { fr: "500 g, accompagné de pommes de terre assaisonnées et assortiment de charcuterie.", es: "500 g, con patatas aliñadas y surtido de embutidos.", en: "Whole 500 g, with seasoned potatoes and assorted cured meats." } },
    ],
  },
  {
    id: "viandes",
    titre: { fr: "Viandes au grill Josper", es: "Carnes a la brasa Josper", en: "Josper-grilled meats" },
    intro: acc,
    plats: [
      { nom: "Entrecôte", nomTr: { es: "Entrecot", en: "Rib-eye steak" }, prix: 32, desc: { fr: "350 g.", es: "350 g.", en: "350 g." } },
      { nom: "Magret de canard", nomTr: { es: "Magret de pato", en: "Duck breast" }, prix: 28, desc: { fr: "Entier, 350 g.", es: "Entero, 350 g.", en: "Whole, 350 g." } },
      { nom: "Saucisse grillée", nomTr: { es: "Salchicha a la brasa", en: "Grilled sausage" }, prix: 17.5, desc: { fr: "Saucisse de porc.", es: "Salchicha de cerdo.", en: "Pork sausage." } },
      { nom: "Boudin noir", nomTr: { es: "Morcilla", en: "Black pudding" }, prix: 18.5, desc: { fr: "Grillé.", es: "A la brasa.", en: "Grilled." } },
      { nom: "Burger montagnard", nomTr: { es: "Hamburguesa de montaña", en: "Mountain burger" }, prix: 21.5,
        desc: { fr: "Pain brioché, steak haché 180 g, oignons confits, fromage à raclette fondu, salade, tomate.", es: "Pan brioche, carne picada 180 g, cebolla confitada, queso raclette fundido, lechuga, tomate.", en: "Brioche bun, 180 g beef patty, confit onions, melted raclette cheese, lettuce, tomato." } },
      { nom: "Côtelettes d’agneau", nomTr: { es: "Chuletas de cordero", en: "Lamb chops" }, prix: 28, desc: { fr: "4 côtelettes grillées.", es: "4 chuletas a la brasa.", en: "4 grilled chops." } },
      { nom: "Côte de bœuf à partager", nomTr: { es: "Chuletón para compartir", en: "Côte de bœuf to share" }, prix: 75, desc: { fr: "1,2 kg, pour 1 ou 2 personnes.", es: "1,2 kg, para 1 o 2 personas.", en: "1.2 kg, for 1 or 2 people." } },
      { nom: "Assortiment de viandes à partager", nomTr: { es: "Surtido de carnes para compartir", en: "Mixed grill to share" }, prix: 70,
        desc: { fr: "Magret de canard 200 g, saucisse grillée 300 g, boudin noir 300 g, pièce du boucher 200 g.", es: "Magret de pato 200 g, salchicha 300 g, morcilla 300 g, pieza del carnicero 200 g.", en: "Duck breast 200 g, sausage 300 g, black pudding 300 g, butcher’s cut 200 g." } },
      { nom: "Épaule d’agneau confite", nomTr: { es: "Paletilla de cordero confitada", en: "Slow-cooked lamb shoulder" }, prix: 75, desc: { fr: "Pour 2 personnes.", es: "Para 2 personas.", en: "For 2 people." } },
      { nom: "Supplément Rossini", nomTr: { es: "Suplemento Rossini", en: "Rossini supplement" }, prix: 5 },
      { nom: "Supplément sauce", nomTr: { es: "Suplemento de salsa", en: "Sauce supplement" }, prix: 3,
        desc: { fr: "Roquefort, poivre, béarnaise, aïoli, sauce aux cèpes.", es: "Roquefort, pimienta, bearnesa, alioli, salsa de setas.", en: "Roquefort, pepper, béarnaise, aioli, porcini sauce." } },
    ],
  },
  {
    id: "poissons",
    titre: { fr: "Poissons au grill Josper", es: "Pescados a la brasa Josper", en: "Josper-grilled fish" },
    intro: acc,
    plats: [
      { nom: "Pavé de saumon", nomTr: { es: "Lomo de salmón", en: "Salmon fillet" }, prix: 19.5 },
      { nom: "Seiche grillée en persillade", nomTr: { es: "Sepia a la brasa con ajo y perejil", en: "Grilled cuttlefish, garlic & parsley" }, prix: 21.5 },
      { nom: "Gambas grillées en persillade", nomTr: { es: "Gambas a la brasa con ajo y perejil", en: "Grilled king prawns, garlic & parsley" }, prix: 28.5, desc: { fr: "× 6.", es: "× 6.", en: "× 6." } },
    ],
  },
  {
    id: "pates",
    titre: { fr: "Pâtes", es: "Pasta", en: "Pasta" },
    intro: { fr: "Penne rigate.", es: "Penne rigate.", en: "Penne rigate." },
    plats: [
      { nom: "Carbonara", prix: 16.9, desc: { fr: "Crème fraîche, lardons fumés, oignons, œuf, roquette, tomates cerises.", es: "Nata, panceta ahumada, cebolla, huevo, rúcula, tomates cherry.", en: "Cream, smoked bacon, onions, egg, rocket, cherry tomatoes." } },
      { nom: "Bolognaise", prix: 16.9, desc: { fr: "Sauce bolognaise, copeaux de parmesan, roquette, tomates cerises.", es: "Salsa boloñesa, lascas de parmesano, rúcula, tomates cherry.", en: "Bolognese sauce, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Ricotta pesto", prix: 16.9, desc: { fr: "Ricotta, sauce pesto, copeaux de parmesan, roquette, tomates cerises.", es: "Ricotta, pesto, lascas de parmesano, rúcula, tomates cherry.", en: "Ricotta, pesto, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Saumon", nomTr: { es: "Salmón", en: "Salmon" }, prix: 18.9, desc: { fr: "Crème fraîche, filet de saumon, copeaux de parmesan, roquette, tomates cerises.", es: "Nata, filete de salmón, lascas de parmesano, rúcula, tomates cherry.", en: "Cream, salmon fillet, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Crème à la truffe et jambon truffé", nomTr: { es: "Crema de trufa y jamón trufado", en: "Truffle cream & truffled ham" }, prix: 21.9, desc: { fr: "Crème à la truffe, jambon blanc truffé, copeaux de parmesan, roquette, tomates cerises.", es: "Crema de trufa, jamón cocido trufado, lascas de parmesano, rúcula, tomates cherry.", en: "Truffle cream, truffled ham, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Italiennes", nomTr: { es: "Italiana", en: "Italian" }, prix: 24.9, desc: { fr: "Jambon de pays, burrata entière, copeaux de parmesan, roquette, tomates cerises.", es: "Jamón curado, burrata entera, lascas de parmesano, rúcula, tomates cherry.", en: "Cured ham, whole burrata, parmesan shavings, rocket, cherry tomatoes." } },
      { nom: "Lasagne montagnarde", nomTr: { es: "Lasaña de montaña", en: "Mountain lasagne" }, prix: 18.9, desc: { fr: "Jambon de pays, béchamel, fromage à raclette.", es: "Jamón curado, bechamel, queso raclette.", en: "Cured ham, béchamel, raclette cheese." } },
    ],
  },
  {
    id: "pizzas",
    titre: { fr: "Pizzas", es: "Pizzas", en: "Pizzas" },
    plats: [
      { nom: "Margherita", prix: 13.9, desc: { fr: "Sauce tomate, fromage, olives.", es: "Tomate, queso, aceitunas.", en: "Tomato sauce, cheese, olives." } },
      { nom: "Royale", prix: 16.9, desc: { fr: "Sauce tomate, emmental, mozzarella, jambon blanc, œuf, olives.", es: "Tomate, emmental, mozzarella, jamón cocido, huevo, aceitunas.", en: "Tomato, emmental, mozzarella, ham, egg, olives." } },
      { nom: "Calzone", prix: 16.9, desc: { fr: "Sauce tomate, emmental, mozzarella, jambon blanc, œuf, olives.", es: "Tomate, emmental, mozzarella, jamón cocido, huevo, aceitunas.", en: "Folded pizza: tomato, emmental, mozzarella, ham, egg, olives." } },
      { nom: "Montagnarde", prix: 16.9, desc: { fr: "Crème fraîche, emmental, mozzarella, lardons fumés, pommes de terre, fromage à raclette, olives.", es: "Nata, emmental, mozzarella, panceta ahumada, patatas, queso raclette, aceitunas.", en: "Cream, emmental, mozzarella, smoked bacon, potatoes, raclette cheese, olives." } },
      { nom: "Chèvre miel", prix: 17.9, desc: { fr: "Crème fraîche, emmental, mozzarella, fromage de chèvre, miel, olives.", es: "Nata, emmental, mozzarella, queso de cabra, miel, aceitunas.", en: "Cream, emmental, mozzarella, goat’s cheese, honey, olives." } },
      { nom: "4 fromages", prix: 18.9, desc: { fr: "Sauce tomate, emmental, mozzarella, fromage de chèvre, roquefort, olives.", es: "Tomate, emmental, mozzarella, queso de cabra, roquefort, aceitunas.", en: "Tomato, emmental, mozzarella, goat’s cheese, roquefort, olives." } },
      { nom: "Italienne", prix: 21.9, desc: { fr: "Sauce tomate, emmental, mozzarella, jambon de pays, burrata entière, roquette, olives.", es: "Tomate, emmental, mozzarella, jamón curado, burrata entera, rúcula, aceitunas.", en: "Tomato, emmental, mozzarella, cured ham, whole burrata, rocket, olives." } },
      { nom: "Jambon truffé", prix: 21.9, desc: { fr: "Crème fraîche, emmental, mozzarella, jambon blanc truffé, roquette, olives.", es: "Nata, emmental, mozzarella, jamón cocido trufado, rúcula, aceitunas.", en: "Cream, emmental, mozzarella, truffled ham, rocket, olives." } },
    ],
  },
  {
    id: "enfants",
    titre: { fr: "Menu enfants", es: "Menú infantil", en: "Kids’ menu" },
    plats: [
      { nom: "Menu enfants", nomTr: { es: "Menú infantil", en: "Kids’ menu" }, prix: 12.5,
        desc: { fr: "Pâtes bolognaise ou poulet pané, une boisson et une crêpe au choix.", es: "Pasta boloñesa o pollo empanado, una bebida y un crep a elegir.", en: "Bolognese pasta or breaded chicken, a drink and a crêpe of your choice." } },
    ],
  },
  {
    id: "desserts",
    titre: { fr: "Desserts maison", es: "Postres caseros", en: "Homemade desserts" },
    plats: [
      { nom: "Mousse au chocolat", prix: 8 },
      { nom: "Panna cotta", prix: 8 },
      { nom: "Tiramisu", prix: 9 },
      { nom: "Mi-cuit au chocolat", nomTr: { es: "Coulant de chocolate", en: "Molten chocolate cake" }, prix: 9 },
      { nom: "Tarte Tatin", prix: 9 },
      { nom: "Café gourmand", prix: 9 },
    ],
  },
  {
    id: "crepes",
    titre: { fr: "Crêpes & gaufres", es: "Crepes y gofres", en: "Crêpes & waffles" },
    plats: [
      { nom: "Crêpe au sucre", prix: 3.5 },
      { nom: "Crêpe au Nutella", prix: 5.5 },
      { nom: "Crêpe confiture", prix: 5.5, desc: { fr: "Fraise ou abricot.", es: "Fresa o albaricoque.", en: "Strawberry or apricot." } },
      { nom: "Crêpe crème de marron", prix: 5.5 },
      { nom: "Crêpe Nutella banane", prix: 6.5 },
      { nom: "Crêpe au Grand Marnier", prix: 7 },
      { nom: "Gaufre au Nutella", prix: 6.5 },
      { nom: "Gaufre confiture", prix: 6.5, desc: { fr: "Fraise ou abricot.", es: "Fresa o albaricoque.", en: "Strawberry or apricot." } },
      { nom: "Gaufre crème de marron", prix: 6.5 },
      { nom: "Gaufre Nutella banane", prix: 7.5 },
      { nom: "Supplément chantilly", prix: 1 },
    ],
  },
];

/** Carte des boissons (reprise du PDF « menu numérique boissons »). */
export const boissons: Rubrique[] = [
  {
    id: "softs", titre: { fr: "Softs", es: "Refrescos", en: "Soft drinks" },
    plats: [
      { nom: "Coca-Cola, Coca-Cola Zéro 35 cl", prix: 3.8 },
      { nom: "Fuze Tea 30 cl", prix: 3.8 },
      { nom: "Aquarius 30 cl", prix: 3.8 },
      { nom: "Sprite 35 cl", prix: 3.8 },
      { nom: "Fanta 30 cl", prix: 3.8, desc: { fr: "Orange, citron.", es: "Naranja, limón.", en: "Orange, lemon." } },
      { nom: "Minute Maid 20 cl", prix: 3.8, desc: { fr: "Orange, ananas, pomme.", es: "Naranja, piña, manzana.", en: "Orange, pineapple, apple." } },
      { nom: "Tonic Nordic Mist 20 cl", prix: 3.8 },
      { nom: "Jus d’orange pressée", nomTr: { es: "Zumo de naranja natural", en: "Freshly squeezed orange juice" }, prix: 4.5 },
      { nom: "Sirop à l’eau", nomTr: { es: "Sirope con agua", en: "Cordial" }, prix: 2.5, desc: { fr: "Grenadine, fraise, menthe, pêche, citron.", es: "Granadina, fresa, menta, melocotón, limón.", en: "Grenadine, strawberry, mint, peach, lemon." } },
      { nom: "Eau gazeuse Aquabona 50 cl", nomTr: { es: "Agua con gas Aquabona 50 cl", en: "Sparkling water Aquabona 50 cl" }, prix: 3 },
      { nom: "Eau plate Aquabona 1 L", nomTr: { es: "Agua mineral Aquabona 1 L", en: "Still water Aquabona 1 L" }, prix: 4 },
    ],
  },
  {
    id: "bieres", titre: { fr: "Bières", es: "Cervezas", en: "Beers" },
    plats: [
      { nom: "Sagres pression", nomTr: { es: "Sagres de barril", en: "Sagres on tap" }, prix: [{ label: "25 cl", prix: 3 }, { label: "40 cl", prix: 5 }] },
      { nom: "Estrella 33 cl", prix: 5 },
      { nom: "Corona 33 cl", prix: 5 },
      { nom: "Desperados 33 cl", prix: 5 },
      { nom: "Panaché", nomTr: { es: "Clara", en: "Shandy" }, prix: 3 },
      { nom: "Monaco", prix: 3.2 },
      { nom: "Bière sans alcool", nomTr: { es: "Cerveza sin alcohol", en: "Alcohol-free beer" }, prix: 4.5 },
      { nom: "Supplément sirop", nomTr: { es: "Suplemento de sirope", en: "Syrup supplement" }, prix: 0.2 },
    ],
  },
  {
    id: "aperitifs", titre: { fr: "Apéritifs & alcools", es: "Aperitivos y licores", en: "Aperitifs & spirits" },
    plats: [
      { nom: "Ricard", prix: 3 }, { nom: "Pastis", prix: 3 }, { nom: "Martini blanc", prix: 4 }, { nom: "Martini rouge", prix: 4 },
      { nom: "Sangria", prix: 5 }, { nom: "Vin chaud", nomTr: { es: "Vino caliente", en: "Mulled wine" }, prix: 5 }, { nom: "Kir", prix: 4 },
      { nom: "Muscat", prix: 4 }, { nom: "Porto", prix: 4 }, { nom: "Rhum Captain Morgan", prix: 5 }, { nom: "Rhum Contrabando", prix: 5 },
      { nom: "Whisky Ballantine’s", prix: 5 }, { nom: "Whisky Jack Daniel’s", prix: 6 },
      { nom: "Supplément soda", nomTr: { es: "Suplemento refresco", en: "Soda supplement" }, prix: 3.8 },
    ],
  },
  {
    id: "cocktails", titre: { fr: "Cocktails", es: "Cócteles", en: "Cocktails" },
    plats: [
      { nom: "Gin Tonic", prix: 9, desc: { fr: "Gin Bombay Sapphire, tonic Nordic Mist, citron vert.", es: "Ginebra Bombay Sapphire, tónica Nordic Mist, lima.", en: "Bombay Sapphire gin, Nordic Mist tonic, lime." } },
      { nom: "Aperol Spritz", prix: 9, desc: { fr: "Aperol, Freixenet, eau gazeuse, orange.", es: "Aperol, Freixenet, soda, naranja.", en: "Aperol, Freixenet, soda water, orange." } },
      { nom: "Mojito", prix: 9, desc: { fr: "Rhum blanc, sirop de sucre de canne, eau gazeuse, citron, menthe.", es: "Ron blanco, sirope de caña, soda, limón, menta.", en: "White rum, cane sugar syrup, soda water, lime, mint." } },
      { nom: "Tequila Sunrise", prix: 9, desc: { fr: "Tequila, jus d’orange, sirop de grenadine.", es: "Tequila, zumo de naranja, granadina.", en: "Tequila, orange juice, grenadine." } },
      { nom: "Piña Colada", prix: 9, desc: { fr: "Rhum blanc, rhum ambré, jus d’ananas, lait de coco.", es: "Ron blanco, ron añejo, zumo de piña, leche de coco.", en: "White rum, golden rum, pineapple juice, coconut milk." } },
      { nom: "Sex on the Beach", prix: 9, desc: { fr: "Vodka, liqueur de pêche, jus d’orange, jus de cranberry.", es: "Vodka, licor de melocotón, zumo de naranja, arándano.", en: "Vodka, peach liqueur, orange juice, cranberry juice." } },
      { nom: "Margarita", prix: 9, desc: { fr: "Tequila, Grand Marnier, citron vert.", es: "Tequila, Grand Marnier, lima.", en: "Tequila, Grand Marnier, lime juice." } },
      { nom: "Daïquiri", prix: 9, desc: { fr: "Rhum, sirop de sucre de canne, citron vert.", es: "Ron, sirope de caña, lima.", en: "Rum, cane sugar syrup, lime juice." } },
      { nom: "Bloody Mary", prix: 9, desc: { fr: "Vodka, jus de tomate, citron, Worcestershire, Tabasco, céleri, sel, poivre.", es: "Vodka, zumo de tomate, limón, Worcestershire, Tabasco, apio, sal, pimienta.", en: "Vodka, tomato juice, lemon, Worcestershire, Tabasco, celery, salt, pepper." } },
    ],
  },
  {
    id: "vins", titre: { fr: "Vins", es: "Vinos", en: "Wines" },
    plats: [
      { nom: "Les Turielles — Altugnac Chardonnay", prix: 13.5, note: { fr: "Blanc", es: "Blanco", en: "White" } },
      { nom: "Château Camplazens Viognier", prix: 17.9, note: { fr: "Blanc · IGP Coteaux de Narbonne", es: "Blanco · IGP Coteaux de Narbonne", en: "White · IGP Coteaux de Narbonne" } },
      { nom: "Manon — Clos Marie, Languedoc", prix: 36.9, note: { fr: "Blanc", es: "Blanco", en: "White" } },
      { nom: "Chablis — Jean-Paul & Benoît Droin", prix: 48.5, note: { fr: "Blanc", es: "Blanco", en: "White" } },
      { nom: "Château Camplazens Convivialité", prix: 15.5, note: { fr: "Rosé · IGP Coteaux de Narbonne", es: "Rosado · IGP Coteaux de Narbonne", en: "Rosé · IGP Coteaux de Narbonne" } },
      { nom: "Château de Garaguilhes Bio Cara", prix: 22.5, note: { fr: "Rosé · Corbières", es: "Rosado · Corbières", en: "Rosé · Corbières" } },
      { nom: "Domaine Piccinini Helius Petri, Cabernet", prix: 17.5, note: { fr: "Rouge · Vin de France", es: "Tinto · Vin de France", en: "Red · Vin de France" } },
      { nom: "Díaz Bayo Ribera del Duero Roble", prix: 19.5, note: { fr: "Rouge", es: "Tinto", en: "Red" } },
      { nom: "Saint-Chinian Bio Plein Grès, Mas de Cynanque", prix: 22.5, note: { fr: "Rouge", es: "Tinto", en: "Red" } },
      { nom: "Marqués de Tomares Rioja Crianza", prix: 24, note: { fr: "Rouge", es: "Tinto", en: "Red" } },
      { nom: "Domaine Croix de Saint Privat Bio Grande Cuvée", prix: 36.5, note: { fr: "Rouge · Terrasses du Larzac", es: "Tinto · Terrasses du Larzac", en: "Red · Terrasses du Larzac" } },
      { nom: "Clos Saint Sébastien Inspiration Marine, Collioure", prix: 48.9, note: { fr: "Rouge", es: "Tinto", en: "Red" } },
      { nom: "Château Fontenil, Fronsac", prix: 71.5, note: { fr: "Rouge", es: "Tinto", en: "Red" } },
      { nom: "Domaine Lorenzon Les Vignes d’Orge, Mercurey", prix: 98.9, note: { fr: "Rouge", es: "Tinto", en: "Red" } },
      { nom: "Pichet rouge, rosé ou blanc", nomTr: { es: "Jarra de tinto, rosado o blanco", en: "Carafe of red, rosé or white" }, prix: [{ label: "25 cl", prix: 4 }, { label: "50 cl", prix: 6 }], note: { fr: "Vin de France Cabernet", es: "Vin de France Cabernet", en: "Vin de France Cabernet" } },
      { nom: "Champagne Montmartre 1er cru Secret de famille brut", prix: 60 },
      { nom: "Champagne Ruinart R de Ruinart brut", prix: 130 },
    ],
  },
  {
    id: "digestifs", titre: { fr: "Digestifs", es: "Digestivos", en: "Digestifs" },
    plats: [
      { nom: "Limoncello 2 cl", prix: 2 }, { nom: "Rhum arrangé 2 cl", nomTr: { es: "Ron macerado 2 cl", en: "Infused rum 2 cl" }, prix: 2.5 },
      { nom: "Baileys", prix: 5 }, { nom: "Get 27", prix: 5 }, { nom: "Diplomático", prix: 5 }, { nom: "Don Papa", prix: 11.9 },
    ],
  },
  {
    id: "chaud", titre: { fr: "Boissons chaudes", es: "Bebidas calientes", en: "Hot drinks" },
    plats: [
      { nom: "Café", nomTr: { es: "Café solo", en: "Espresso" }, prix: 2 }, { nom: "Café allongé", nomTr: { es: "Café americano", en: "Americano" }, prix: 2.5 },
      { nom: "Café crème", nomTr: { es: "Café con leche", en: "Café crème" }, prix: 3 }, { nom: "Thé", nomTr: { es: "Té", en: "Tea" }, prix: 3 },
      { nom: "Cappuccino", prix: 4 }, { nom: "Cappuccino Nutella", prix: 5 },
      { nom: "Chocolat chaud", nomTr: { es: "Chocolate caliente", en: "Hot chocolate" }, prix: 3 },
      { nom: "Chocolat viennois", nomTr: { es: "Chocolate vienés", en: "Viennese hot chocolate" }, prix: 4, desc: { fr: "Chocolat chaud, chantilly.", es: "Chocolate caliente con nata montada.", en: "Hot chocolate with whipped cream." } },
      { nom: "Viennois Nutella", prix: 5 },
    ],
  },
];

export function nomPlat(p: Plat, l: Locale) {
  return p.nomTr?.[l] ?? p.nom;
}

export function formatPrix(n: number, l: Locale) {
  return new Intl.NumberFormat(l === "en" ? "en-GB" : l, { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(n);
}
