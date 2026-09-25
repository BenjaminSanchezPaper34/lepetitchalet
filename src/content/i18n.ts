/**
 * Textes du site en trois langues. Le français est la langue source ;
 * l'espagnol et l'anglais sont de vraies traductions (pas de widget).
 */
export const locales = ["fr", "es", "en"] as const;
export type Locale = (typeof locales)[number];

/** Chemins publics par langue (le français est à la racine). */
export const routes = {
  fr: { home: "/", carte: "/carte" },
  es: { home: "/es", carte: "/es/carta" },
  en: { home: "/en", carte: "/en/menu" },
} as const satisfies Record<Locale, { home: string; carte: string }>;

export const htmlLang: Record<Locale, string> = { fr: "fr", es: "es", en: "en" };

export const dict = {
  fr: {
    langName: "Français",
    nav: { carte: "La carte", infos: "Infos pratiques", avis: "Avis", reserver: "Réserver", accueil: "Accueil" },
    ouverture: {
      bandeau: "Ouverture le vendredi 4 décembre 2026",
      court: "Ouverture le 4 décembre",
    },
    hero: {
      kicker: "Restaurant de montagne · Pas de la Case, Andorre",
      titre: "Raclette, fondue et grill Josper au pied des pistes",
      sous: "Une vraie table de montagne au Pas de la Case. On vous accueille dès le vendredi 4 décembre 2026, tous les jours de 11 h à 23 h.",
      sousOuvert: "Une vraie table de montagne au Pas de la Case, ouverte tous les jours de 11 h à 23 h pendant la saison d’hiver.",
      cta: "Réserver une table",
      carte: "Voir la carte",
    },
    essentiel: {
      titre: "L’essentiel",
      points: [
        "Restaurant de montagne au 39 avenue d’Encamp, au Pas de la Case, au pied des pistes de Grandvalira.",
        "Raclettes (classique, Morbier, truffe), fondue savoyarde servie dans le pain, viandes et poissons au grill Josper, pizzas, desserts maison.",
        "Ouvert tous les jours de 11 h à 23 h pendant la saison d’hiver — réouverture le vendredi 4 décembre 2026. Réservations au +376 855 436.",
      ],
    },
    specialites: {
      kicker: "Nos spécialités",
      titre: "Le fromage qui coule, le feu qui crépite",
      items: [
        { titre: "Raclettes", texte: "Classique, Morbier ou à la truffe : 250 g de fromage par personne, grenailles et plateau de charcuterie.", img: "raclette-meule" },
        { titre: "Fondue savoyarde", texte: "Fromage fondu et vin blanc, servie dans un pain croustillant. Aussi à la truffe.", img: "fondue" },
        { titre: "Tartiflette & Mont d’Or", texte: "Reblochonnade, tartiflette et Mont d’Or entier au four : les classiques des Alpes.", img: "raclette-planche" },
      ],
    },
    grill: {
      kicker: "Au grill Josper",
      titre: "Cuit à la braise de charbon de bois",
      texte: "Le Josper est un four à braise de charbon de bois : saisie intense, cœur tendre, goût fumé. Entrecôte de 350 g, magret entier, côte de bœuf de 1,2 kg à partager, gambas et seiche en persillade.",
      cta: "Voir les viandes et poissons",
    },
    cartePreview: {
      kicker: "La carte",
      titre: "Généreuse, du midi au soir",
      texte: "Entrées, spécialités montagnardes, grill, pâtes, pizzas, desserts maison, crêpes et gaufres — et une carte des vins du Languedoc à la Rioja.",
      cta: "Toute la carte",
      boissons: "Carte des boissons",
    },
    avis: {
      kicker: "Ils sont venus",
      titre: "4,8 sur 5, 118 avis Google",
      voir: "Lire tous les avis sur Google",
      laisser: "Laisser un avis",
    },
    infos: {
      kicker: "Infos pratiques",
      titre: "Nous trouver",
      adresse: "Adresse",
      horaires: "Horaires",
      horairesTexte: "Tous les jours, 11 h – 23 h (saison d’hiver)",
      saison: "Réouverture le vendredi 4 décembre 2026",
      telephone: "Réservations",
      itineraire: "Itinéraire",
      whatsapp: "WhatsApp",
      acces: "Au centre du Pas de la Case, à deux pas des pistes de Grandvalira et de la frontière française.",
    },
    footer: {
      suivre: "Suivez-nous",
      mentions: "Mentions légales",
      confidentialite: "Confidentialité",
      droits: "Tous droits réservés",
    },
    carte: {
      titre: "La carte",
      intro: "Toute la carte du Petit Chalet : spécialités montagnardes, grill Josper, pâtes, pizzas, desserts maison. Prix TTC en euros.",
      boissonsTitre: "Boissons",
      pdf: "Télécharger la carte des boissons (PDF)",
      allergenes: "Allergènes : notre équipe vous renseigne sur la composition de chaque plat.",
    },
  },
  es: {
    langName: "Español",
    nav: { carte: "La carta", infos: "Información", avis: "Opiniones", reserver: "Reservar", accueil: "Inicio" },
    ouverture: {
      bandeau: "Apertura el viernes 4 de diciembre de 2026",
      court: "Apertura el 4 de diciembre",
    },
    hero: {
      kicker: "Restaurante de montaña · Pas de la Casa, Andorra",
      titre: "Raclette, fondue y brasa Josper a pie de pistas",
      sous: "Una auténtica mesa de montaña en el Pas de la Casa. Le esperamos a partir del viernes 4 de diciembre de 2026, todos los días de 11:00 a 23:00.",
      sousOuvert: "Una auténtica mesa de montaña en el Pas de la Casa, abierta todos los días de 11:00 a 23:00 durante la temporada de invierno.",
      cta: "Reservar mesa",
      carte: "Ver la carta",
    },
    essentiel: {
      titre: "Lo esencial",
      points: [
        "Restaurante de montaña en la avenida d’Encamp 39, en el Pas de la Casa, a pie de las pistas de Grandvalira.",
        "Raclettes (clásica, Morbier, trufa), fondue saboyana servida en pan, carnes y pescados a la brasa Josper, pizzas y postres caseros.",
        "Abierto todos los días de 11:00 a 23:00 durante la temporada de invierno — reapertura el viernes 4 de diciembre de 2026. Reservas: +376 855 436.",
      ],
    },
    specialites: {
      kicker: "Nuestras especialidades",
      titre: "Queso que se funde, brasa que crepita",
      items: [
        { titre: "Raclettes", texte: "Clásica, Morbier o con trufa: 250 g de queso por persona, patatas baby y tabla de embutidos.", img: "raclette-meule" },
        { titre: "Fondue saboyana", texte: "Queso fundido y vino blanco, servida en un pan crujiente. También con trufa.", img: "fondue" },
        { titre: "Tartiflette y Mont d’Or", texte: "Reblochonnade, tartiflette y Mont d’Or entero al horno: los clásicos de los Alpes.", img: "raclette-planche" },
      ],
    },
    grill: {
      kicker: "A la brasa Josper",
      titre: "Asado a la brasa de carbón vegetal",
      texte: "El Josper es un horno de brasa de carbón vegetal: sellado intenso, interior tierno, sabor ahumado. Entrecot de 350 g, magret entero, chuletón de 1,2 kg para compartir, gambas y sepia con ajo y perejil.",
      cta: "Ver carnes y pescados",
    },
    cartePreview: {
      kicker: "La carta",
      titre: "Generosa, de mediodía a noche",
      texte: "Entrantes, especialidades de montaña, brasa, pasta, pizzas, postres caseros, crepes y gofres — y una carta de vinos del Languedoc a la Rioja.",
      cta: "Toda la carta",
      boissons: "Carta de bebidas",
    },
    avis: {
      kicker: "Nuestros clientes",
      titre: "4,8 sobre 5, 118 opiniones en Google",
      voir: "Leer todas las opiniones en Google",
      laisser: "Dejar una opinión",
    },
    infos: {
      kicker: "Información práctica",
      titre: "Cómo llegar",
      adresse: "Dirección",
      horaires: "Horario",
      horairesTexte: "Todos los días, 11:00 – 23:00 (temporada de invierno)",
      saison: "Reapertura el viernes 4 de diciembre de 2026",
      telephone: "Reservas",
      itineraire: "Cómo llegar",
      whatsapp: "WhatsApp",
      acces: "En el centro del Pas de la Casa, a dos pasos de las pistas de Grandvalira y de la frontera francesa.",
    },
    footer: {
      suivre: "Síguenos",
      mentions: "Aviso legal",
      confidentialite: "Privacidad",
      droits: "Todos los derechos reservados",
    },
    carte: {
      titre: "La carta",
      intro: "Toda la carta del Petit Chalet: especialidades de montaña, brasa Josper, pasta, pizzas, postres caseros. Precios en euros, IVA incluido.",
      boissonsTitre: "Bebidas",
      pdf: "Descargar la carta de bebidas (PDF)",
      allergenes: "Alérgenos: nuestro equipo le informa sobre la composición de cada plato.",
    },
  },
  en: {
    langName: "English",
    nav: { carte: "Menu", infos: "Practical info", avis: "Reviews", reserver: "Book", accueil: "Home" },
    ouverture: {
      bandeau: "Opening Friday 4 December 2026",
      court: "Opening 4 December",
    },
    hero: {
      kicker: "Mountain restaurant · Pas de la Casa, Andorra",
      titre: "Raclette, fondue and Josper grill at the foot of the slopes",
      sous: "A true mountain table in Pas de la Casa. We welcome you from Friday 4 December 2026, every day from 11 am to 11 pm.",
      sousOuvert: "A true mountain table in Pas de la Casa, open every day from 11 am to 11 pm during the winter season.",
      cta: "Book a table",
      carte: "See the menu",
    },
    essentiel: {
      titre: "At a glance",
      points: [
        "Mountain restaurant at 39 avenue d’Encamp, Pas de la Casa, at the foot of the Grandvalira slopes.",
        "Raclette (classic, Morbier, truffle), Savoyard fondue served in a bread bowl, Josper-grilled meats and fish, pizzas, homemade desserts.",
        "Open daily 11 am – 11 pm during the winter season — reopening Friday 4 December 2026. Bookings: +376 855 436.",
      ],
    },
    specialites: {
      kicker: "Our specialities",
      titre: "Melting cheese, crackling embers",
      items: [
        { titre: "Raclette", texte: "Classic, Morbier or truffle: 250 g of cheese per person, baby potatoes and a platter of cured meats.", img: "raclette-meule" },
        { titre: "Savoyard fondue", texte: "Melted cheese and white wine, served in a crusty bread bowl. Also with truffle.", img: "fondue" },
        { titre: "Tartiflette & Mont d’Or", texte: "Reblochonnade, tartiflette and a whole baked Mont d’Or: the Alpine classics.", img: "raclette-planche" },
      ],
    },
    grill: {
      kicker: "On the Josper grill",
      titre: "Cooked over real charcoal",
      texte: "The Josper is a charcoal oven-grill: intense sear, tender inside, smoky flavour. 350 g rib-eye, whole duck breast, 1.2 kg côte de bœuf to share, king prawns and cuttlefish with garlic and parsley.",
      cta: "See meats and fish",
    },
    cartePreview: {
      kicker: "The menu",
      titre: "Generous, from lunch to dinner",
      texte: "Starters, mountain specialities, grill, pasta, pizzas, homemade desserts, crêpes and waffles — plus a wine list from Languedoc to Rioja.",
      cta: "Full menu",
      boissons: "Drinks menu",
    },
    avis: {
      kicker: "Our guests",
      titre: "4.8 out of 5 from 118 Google reviews",
      voir: "Read all reviews on Google",
      laisser: "Leave a review",
    },
    infos: {
      kicker: "Practical info",
      titre: "Find us",
      adresse: "Address",
      horaires: "Opening hours",
      horairesTexte: "Every day, 11 am – 11 pm (winter season)",
      saison: "Reopening Friday 4 December 2026",
      telephone: "Bookings",
      itineraire: "Directions",
      whatsapp: "WhatsApp",
      acces: "In the centre of Pas de la Casa, a short walk from the Grandvalira slopes and the French border.",
    },
    footer: {
      suivre: "Follow us",
      mentions: "Legal notice",
      confidentialite: "Privacy",
      droits: "All rights reserved",
    },
    carte: {
      titre: "The menu",
      intro: "The full Petit Chalet menu: mountain specialities, Josper grill, pasta, pizzas, homemade desserts. Prices in euros, tax included.",
      boissonsTitre: "Drinks",
      pdf: "Download the drinks menu (PDF)",
      allergenes: "Allergens: our team will gladly tell you what each dish contains.",
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];
