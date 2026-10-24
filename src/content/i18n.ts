/**
 * Textes du site en quatre langues. Le français est la langue source ;
 * le catalan (langue officielle de l'Andorre), l'espagnol et l'anglais sont de vraies traductions (pas de widget).
 */
export const locales = ["fr", "ca", "es", "en"] as const;
export type Locale = (typeof locales)[number];

/** Chemins publics par langue (le français est à la racine). */
export const routes = {
  fr: { home: "/", carte: "/carte" },
  ca: { home: "/ca", carte: "/ca/carta" },
  es: { home: "/es", carte: "/es/carta" },
  en: { home: "/en", carte: "/en/menu" },
} as const satisfies Record<Locale, { home: string; carte: string }>;

export const htmlLang: Record<Locale, string> = { fr: "fr", ca: "ca", es: "es", en: "en" };

export const dict = {
  fr: {
    langName: "Français",
    nav: { carte: "La carte", infos: "Infos pratiques", avis: "Avis", reserver: "Réserver", accueil: "Accueil", appeler: "Appeler" },
    ouverture: {
      bandeau: "Ouverture le vendredi 4 décembre 2026",
      court: "Ouverture le 4 décembre",
    },
    hero: {
      kicker: "Restaurant de montagne · Pas de la Case, Andorre",
      titre: "Raclette, fondue et grill Josper au pied des pistes",
      sous: "Une vraie table de montagne au Pas de la Case. On vous accueille dès le vendredi 4 décembre 2026 : de 12 h à 15 h et de 18 h à 23 h en semaine, de 11 h à 23 h le week-end.",
      sousOuvert: "Une vraie table de montagne au Pas de la Case : de 12 h à 15 h et de 18 h à 23 h en semaine, de 11 h à 23 h le week-end.",
      cta: "Réserver une table",
      carte: "Voir la carte",
    },
    essentiel: {
      titre: "L’essentiel",
      points: [
        "Restaurant de montagne au 39 avenue d’Encamp, au Pas de la Case, au pied des pistes de Grandvalira.",
        "Raclettes (classique ou Morbier), fondue savoyarde servie dans le pain, Mont d’Or, viandes et poissons au grill Josper, pâtes, desserts maison.",
        "Ouvert de 12 h à 15 h et de 18 h à 23 h en semaine, de 11 h à 23 h le samedi et le dimanche — réouverture le vendredi 4 décembre 2026. Réservations au +376 855 436.",
      ],
    },
    specialites: {
      kicker: "Nos spécialités",
      titre: "Le fromage qui coule, le feu qui crépite",
      items: [
        { titre: "Raclettes", texte: "Classique ou Morbier : 250 g de fromage par personne, grenailles et plateau de charcuterie.", img: "raclette-meule" },
        { titre: "Fondue savoyarde", texte: "Fromage fondu et vin blanc, servie dans un pain croustillant. Aussi à la crème de truffe.", img: "fondue" },
        { titre: "Tartiflette & Mont d’Or", texte: "Reblochonnade, tartiflette et Mont d’Or entier au four : les classiques des Alpes.", img: "raclette-planche" },
      ],
    },
    grill: {
      kicker: "Au grill Josper",
      titre: "Cuit à la braise de charbon de bois",
      texte: "Le Josper est un four à braise de charbon de bois : saisie intense, cœur tendre, goût fumé. Entrecôte de 350 g, magret entier, côte de bœuf de 1,2 kg à partager, saumon et seiche en persillade.",
      cta: "Voir les viandes et poissons",
    },
    cartePreview: {
      kicker: "La carte",
      titre: "Généreuse, du midi au soir",
      texte: "Entrées, spécialités montagnardes, grill, pâtes, desserts maison, crêpes et gaufres — et une carte des vins du Languedoc à la Rioja.",
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
      horairesTexte: "Lun.–ven. : 12 h – 15 h et 18 h – 23 h · Sam.–dim. : 11 h – 23 h",
      saison: "Réouverture le vendredi 4 décembre 2026",
      telephone: "Réservations",
      itineraire: "Itinéraire",
      whatsappMessage: "Bonjour, je souhaite réserver une table au Petit Chalet.\nNombre de personnes : \nDate : \nHeure : \nNom : ",
      whatsapp: "WhatsApp",
      acces: "Au centre du Pas de la Case, à deux pas des pistes de Grandvalira et de la frontière française.",
    },
    partenaires: {
      kicker: "Nos partenaires",
      titre: "Nos voisins du Pas de la Case",
      intro: "Pour dormir au pied des pistes après le dîner, nos partenaires andorrans vous accueillent à deux pas du restaurant.",
    },
    footer: {
      suivre: "Suivez-nous",
      mentions: "Mentions légales",
      confidentialite: "Confidentialité",
      droits: "Tous droits réservés",
    },
    carte: {
      titre: "La carte",
      intro: "Toute la carte du Petit Chalet : spécialités montagnardes, grill Josper, pâtes, desserts maison. Prix TTC en euros.",
      boissonsTitre: "Boissons",
      pdf: "Télécharger la carte des boissons (PDF)",
      allergenes: "Allergènes : notre équipe vous renseigne sur la composition de chaque plat.",
    },
  },
  ca: {
    langName: "Català",
    nav: { carte: "La carta", infos: "Informació", avis: "Opinions", reserver: "Reservar", accueil: "Inici", appeler: "Trucar" },
    ouverture: {
      bandeau: "Obertura el divendres 4 de desembre de 2026",
      court: "Obertura el 4 de desembre",
    },
    hero: {
      kicker: "Restaurant de muntanya · Pas de la Casa, Andorra",
      titre: "Raclette, fondue i brasa Josper a peu de pistes",
      sous: "Una autèntica taula de muntanya al Pas de la Casa. Us esperem a partir del divendres 4 de desembre de 2026: de 12.00 a 15.00 h i de 18.00 a 23.00 h entre setmana, d’11.00 a 23.00 h el cap de setmana.",
      sousOuvert: "Una autèntica taula de muntanya al Pas de la Casa: de 12.00 a 15.00 h i de 18.00 a 23.00 h entre setmana, d’11.00 a 23.00 h el cap de setmana.",
      cta: "Reservar taula",
      carte: "Veure la carta",
    },
    essentiel: {
      titre: "L’essencial",
      points: [
        "Restaurant de muntanya a l’avinguda d’Encamp 39, al Pas de la Casa, a peu de les pistes de Grandvalira.",
        "Raclettes (clàssica o Morbier), fondue savoiana servida en pa, Mont d’Or, carns i peixos a la brasa Josper, pasta i postres casolanes.",
        "Obert de 12.00 a 15.00 h i de 18.00 a 23.00 h de dilluns a divendres, d’11.00 a 23.00 h dissabte i diumenge — reobertura el divendres 4 de desembre de 2026. Reserves: +376 855 436.",
      ],
    },
    specialites: {
      kicker: "Les nostres especialitats",
      titre: "Formatge que es fon, brasa que espetega",
      items: [
        { titre: "Raclettes", texte: "Clàssica o Morbier: 250 g de formatge per persona, patates grenalla i safata d’embotits.", img: "raclette-meule" },
        { titre: "Fondue savoiana", texte: "Formatge fos i vi blanc, servida en un pa cruixent. També amb crema de tòfona.", img: "fondue" },
        { titre: "Tartiflette i Mont d’Or", texte: "Reblochonnade, tartiflette i Mont d’Or sencer al forn: els clàssics dels Alps.", img: "raclette-planche" },
      ],
    },
    grill: {
      kicker: "A la brasa Josper",
      titre: "Rostit a la brasa de carbó vegetal",
      texte: "El Josper és un forn de brasa de carbó vegetal: segellat intens, interior tendre, gust fumat. Entrecot de 350 g, magret sencer, costella de bou d’1,2 kg per compartir, salmó i sípia amb all i julivert.",
      cta: "Veure carns i peixos",
    },
    cartePreview: {
      kicker: "La carta",
      titre: "Generosa, de migdia a nit",
      texte: "Entrants, especialitats de muntanya, brasa, pasta, postres casolanes, creps i gofres — i una carta de vins del Llenguadoc a la Rioja.",
      cta: "Tota la carta",
      boissons: "Carta de begudes",
    },
    avis: {
      kicker: "Els nostres clients",
      titre: "4,8 sobre 5, 118 opinions a Google",
      voir: "Llegir totes les opinions a Google",
      laisser: "Deixar una opinió",
    },
    infos: {
      kicker: "Informació pràctica",
      titre: "Com arribar",
      adresse: "Adreça",
      horaires: "Horari",
      horairesTexte: "Dl.–dv.: 12.00 – 15.00 h i 18.00 – 23.00 h · Ds.–dg.: 11.00 – 23.00 h",
      saison: "Reobertura el divendres 4 de desembre de 2026",
      telephone: "Reserves",
      itineraire: "Com arribar",
      whatsappMessage: "Hola, voldria reservar una taula a Le Petit Chalet.\nNombre de persones: \nData: \nHora: \nNom: ",
      whatsapp: "WhatsApp",
      acces: "Al centre del Pas de la Casa, a dos passos de les pistes de Grandvalira i de la frontera francesa.",
    },
    partenaires: {
      kicker: "Els nostres socis",
      titre: "Els nostres veïns del Pas de la Casa",
      intro: "Per dormir a peu de pistes després de sopar, els nostres socis andorrans us acullen a dos passos del restaurant.",
    },
    footer: {
      suivre: "Segueix-nos",
      mentions: "Avís legal",
      confidentialite: "Privacitat",
      droits: "Tots els drets reservats",
    },
    carte: {
      titre: "La carta",
      intro: "Tota la carta del Petit Chalet: especialitats de muntanya, brasa Josper, pasta, postres casolanes. Preus en euros, impostos inclosos.",
      boissonsTitre: "Begudes",
      pdf: "Descarregar la carta de begudes (PDF)",
      allergenes: "Al·lèrgens: el nostre equip us informa sobre la composició de cada plat.",
    },
  },
  es: {
    langName: "Español",
    nav: { carte: "La carta", infos: "Información", avis: "Opiniones", reserver: "Reservar", accueil: "Inicio", appeler: "Llamar" },
    ouverture: {
      bandeau: "Apertura el viernes 4 de diciembre de 2026",
      court: "Apertura el 4 de diciembre",
    },
    hero: {
      kicker: "Restaurante de montaña · Pas de la Casa, Andorra",
      titre: "Raclette, fondue y brasa Josper a pie de pistas",
      sous: "Una auténtica mesa de montaña en el Pas de la Casa. Le esperamos a partir del viernes 4 de diciembre de 2026: de 12:00 a 15:00 y de 18:00 a 23:00 entre semana, de 11:00 a 23:00 el fin de semana.",
      sousOuvert: "Una auténtica mesa de montaña en el Pas de la Casa: de 12:00 a 15:00 y de 18:00 a 23:00 entre semana, de 11:00 a 23:00 el fin de semana.",
      cta: "Reservar mesa",
      carte: "Ver la carta",
    },
    essentiel: {
      titre: "Lo esencial",
      points: [
        "Restaurante de montaña en la avenida d’Encamp 39, en el Pas de la Casa, a pie de las pistas de Grandvalira.",
        "Raclettes (clásica o Morbier), fondue saboyana servida en pan, Mont d’Or, carnes y pescados a la brasa Josper, pasta y postres caseros.",
        "Abierto de 12:00 a 15:00 y de 18:00 a 23:00 entre semana, de 11:00 a 23:00 sábado y domingo — reapertura el viernes 4 de diciembre de 2026. Reservas: +376 855 436.",
      ],
    },
    specialites: {
      kicker: "Nuestras especialidades",
      titre: "Queso que se funde, brasa que crepita",
      items: [
        { titre: "Raclettes", texte: "Clásica o Morbier: 250 g de queso por persona, patatas baby y tabla de embutidos.", img: "raclette-meule" },
        { titre: "Fondue saboyana", texte: "Queso fundido y vino blanco, servida en un pan crujiente. También con crema de trufa.", img: "fondue" },
        { titre: "Tartiflette y Mont d’Or", texte: "Reblochonnade, tartiflette y Mont d’Or entero al horno: los clásicos de los Alpes.", img: "raclette-planche" },
      ],
    },
    grill: {
      kicker: "A la brasa Josper",
      titre: "Asado a la brasa de carbón vegetal",
      texte: "El Josper es un horno de brasa de carbón vegetal: sellado intenso, interior tierno, sabor ahumado. Entrecot de 350 g, magret entero, chuletón de 1,2 kg para compartir, salmón y sepia con ajo y perejil.",
      cta: "Ver carnes y pescados",
    },
    cartePreview: {
      kicker: "La carta",
      titre: "Generosa, de mediodía a noche",
      texte: "Entrantes, especialidades de montaña, brasa, pasta, postres caseros, crepes y gofres — y una carta de vinos del Languedoc a la Rioja.",
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
      horairesTexte: "Lun.–vie.: 12:00 – 15:00 y 18:00 – 23:00 · Sáb.–dom.: 11:00 – 23:00",
      saison: "Reapertura el viernes 4 de diciembre de 2026",
      telephone: "Reservas",
      itineraire: "Cómo llegar",
      whatsappMessage: "Hola, quisiera reservar una mesa en Le Petit Chalet.\nNúmero de personas: \nFecha: \nHora: \nNombre: ",
      whatsapp: "WhatsApp",
      acces: "En el centro del Pas de la Casa, a dos pasos de las pistas de Grandvalira y de la frontera francesa.",
    },
    partenaires: {
      kicker: "Nuestros socios",
      titre: "Nuestros vecinos del Pas de la Casa",
      intro: "Para dormir a pie de pistas después de cenar, nuestros socios andorranos le reciben a dos pasos del restaurante.",
    },
    footer: {
      suivre: "Síguenos",
      mentions: "Aviso legal",
      confidentialite: "Privacidad",
      droits: "Todos los derechos reservados",
    },
    carte: {
      titre: "La carta",
      intro: "Toda la carta del Petit Chalet: especialidades de montaña, brasa Josper, pasta, postres caseros. Precios en euros, IVA incluido.",
      boissonsTitre: "Bebidas",
      pdf: "Descargar la carta de bebidas (PDF)",
      allergenes: "Alérgenos: nuestro equipo le informa sobre la composición de cada plato.",
    },
  },
  en: {
    langName: "English",
    nav: { carte: "Menu", infos: "Practical info", avis: "Reviews", reserver: "Book", accueil: "Home", appeler: "Call" },
    ouverture: {
      bandeau: "Opening Friday 4 December 2026",
      court: "Opening 4 December",
    },
    hero: {
      kicker: "Mountain restaurant · Pas de la Casa, Andorra",
      titre: "Raclette, fondue and Josper grill at the foot of the slopes",
      sous: "A true mountain table in Pas de la Casa. We welcome you from Friday 4 December 2026: 12–3 pm and 6–11 pm on weekdays, 11 am – 11 pm at weekends.",
      sousOuvert: "A true mountain table in Pas de la Casa: 12–3 pm and 6–11 pm on weekdays, 11 am – 11 pm at weekends.",
      cta: "Book a table",
      carte: "See the menu",
    },
    essentiel: {
      titre: "At a glance",
      points: [
        "Mountain restaurant at 39 avenue d’Encamp, Pas de la Casa, at the foot of the Grandvalira slopes.",
        "Raclette (classic or Morbier), Savoyard fondue served in a bread bowl, Mont d’Or, Josper-grilled meats and fish, pasta, homemade desserts.",
        "Open 12–3 pm and 6–11 pm Monday to Friday, 11 am – 11 pm Saturday and Sunday — reopening Friday 4 December 2026. Bookings: +376 855 436.",
      ],
    },
    specialites: {
      kicker: "Our specialities",
      titre: "Melting cheese, crackling embers",
      items: [
        { titre: "Raclette", texte: "Classic or Morbier: 250 g of cheese per person, baby potatoes and a platter of cured meats.", img: "raclette-meule" },
        { titre: "Savoyard fondue", texte: "Melted cheese and white wine, served in a crusty bread bowl. Also with truffle cream.", img: "fondue" },
        { titre: "Tartiflette & Mont d’Or", texte: "Reblochonnade, tartiflette and a whole baked Mont d’Or: the Alpine classics.", img: "raclette-planche" },
      ],
    },
    grill: {
      kicker: "On the Josper grill",
      titre: "Cooked over real charcoal",
      texte: "The Josper is a charcoal oven-grill: intense sear, tender inside, smoky flavour. 350 g rib-eye, whole duck breast, 1.2 kg côte de bœuf to share, salmon and cuttlefish with garlic and parsley.",
      cta: "See meats and fish",
    },
    cartePreview: {
      kicker: "The menu",
      titre: "Generous, from lunch to dinner",
      texte: "Starters, mountain specialities, grill, pasta, homemade desserts, crêpes and waffles — plus a wine list from Languedoc to Rioja.",
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
      horairesTexte: "Mon–Fri: 12–3 pm & 6–11 pm · Sat–Sun: 11 am – 11 pm",
      saison: "Reopening Friday 4 December 2026",
      telephone: "Bookings",
      itineraire: "Directions",
      whatsappMessage: "Hello, I’d like to book a table at Le Petit Chalet.\nNumber of people: \nDate: \nTime: \nName: ",
      whatsapp: "WhatsApp",
      acces: "In the centre of Pas de la Casa, a short walk from the Grandvalira slopes and the French border.",
    },
    partenaires: {
      kicker: "Our partners",
      titre: "Our neighbours in Pas de la Casa",
      intro: "To stay at the foot of the slopes after dinner, our Andorran partners welcome you just steps from the restaurant.",
    },
    footer: {
      suivre: "Follow us",
      mentions: "Legal notice",
      confidentialite: "Privacy",
      droits: "All rights reserved",
    },
    carte: {
      titre: "The menu",
      intro: "The full Petit Chalet menu: mountain specialities, Josper grill, pasta, homemade desserts. Prices in euros, tax included.",
      boissonsTitre: "Drinks",
      pdf: "Download the drinks menu (PDF)",
      allergenes: "Allergens: our team will gladly tell you what each dish contains.",
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];
