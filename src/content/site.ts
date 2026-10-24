/** Identité du restaurant — NAP strictement identique à la fiche Google et aux annuaires. */
export const site = {
  url: "https://petitchalet.fr",
  nom: "Le Petit Chalet",
  adresse: { rue: "39 Avenue d’Encamp", cp: "AD200", ville: "Pas de la Casa", pays: "Andorre", paysCode: "AD" },
  geo: { lat: 42.53918, lng: 1.73341 },
  tel: { affiche: "+376 855 436", lien: "tel:+376855436" },
  tel2: { affiche: "+376 385 568", lien: "tel:+376385568" },
  whatsapp: "https://wa.me/376385568",
  email: "Seb934@hotmail.fr",
  horaires: { ouvre: "11:00", ferme: "23:00" },
  /** Saison 2026-2027 : premier jour d'ouverture */
  ouverture: "2026-12-04",
  finSaison: "2027-04-30",
  note: { valeur: 4.8, nombre: 118 },
  /** Partenaires andorrans (section en bas de l'accueil). Sites fournis par Benjamin le 24/10/2026. */
  partenaires: [
    {
      nom: "Frontera Blanca",
      logo: "/images/partenaires/frontera-blanca.webp",
      largeur: 640, hauteur: 198,
      desc: { fr: "Résidence au pied des pistes, avenue d’Encamp", es: "Residencia a pie de pistas, avenida d’Encamp", en: "Ski-in residence on Avinguda d’Encamp" },
      url: "https://www.fronterablanca.com/fr/" as string | undefined,
    },
    {
      nom: "Apartaments Moblats Pas",
      logo: "/images/partenaires/apartaments-moblats-pas.webp",
      largeur: 425, hauteur: 320,
      desc: { fr: "Appartements meublés à louer au Pas de la Case", es: "Apartamentos amueblados en alquiler en el Pas de la Casa", en: "Furnished apartments to rent in Pas de la Casa" },
      url: "https://www.apartamentospasdelacasa.com/apartaments-moblats-pas-accueil/" as string | undefined,
    },
    {
      nom: "LCB Gestió d’Apartaments",
      logo: "/images/partenaires/lcb-gestio-apartaments.webp",
      largeur: 558, hauteur: 320,
      desc: { fr: "Gestion et location d’appartements au pied des pistes", es: "Gestión y alquiler de apartamentos a pie de pistas", en: "Apartment management and rentals by the slopes" },
      url: "https://lcb-apartaments-apartment.andorrahotels.net/fr/" as string | undefined,
    },
  ],
  liens: {
    instagram: "https://www.instagram.com/petitchaletandorre/",
    facebook: "https://www.facebook.com/profile.php?id=61584342684076",
    tripadvisor: "https://www.tripadvisor.fr/Restaurant_Review-g315773-d34035091-Reviews-Le_Petit_Chalet-Pas_de_la_Casa_Encamp_Parish.html",
    googleMaps: "https://maps.google.com/?cid=12951499873152251961",
    googleAvis: "https://g.page/r/CTm4wb-D-LyzEBM/review",
    // Fiche Apple Plans de l'établissement (place-id), fournie par Benjamin le 23/10/2026
    applePlans: "https://maps.apple.com/place?place-id=I20EDD5C6DDB75DC4&address=Avinguda+d%27Encamp%2C+39%2C+AD200+El+Pas+De+La+Casa%2C+Andorre&coordinate=42.539292%2C1.733559&name=Le+Petit+Chalet&_provider=9902",
    waze: "https://waze.com/ul?ll=42.53918,1.73341&navigate=yes",
  },
  pdfBoissons: "/assets/menunumerique-boissons-lepetitchalet.pdf",
  societe: { nom: "Rapid Pasta, SLU", registre: "16601" },
} as const;

/** Avis Google réels (API Places, 25/09/2026) — recopiés à l'identique, raccourcis par « … ». */
export const avis = [
  {
    auteur: "Cass Plt",
    date: "2026-02",
    texte: "L’accueil est chaleureux et convivial, très kid friendly… Les plats sont copieux et délicieux. Mention spéciale pour les spécialités savoyardes qui sont excellentes et généreuses. Un très bon rapport qualité-prix pour le secteur.",
  },
  {
    auteur: "Jonathan Chassagne",
    date: "2026-02",
    texte: "Nous nous sommes rendus au Petit Chalet à 8 amis. Le personnel a été très accueillant, à l’écoute et patient. Côté nourriture, le goût et la quantité étaient au rendez-vous. Le Petit Chalet sera notre nouveau lieu incontournable du week-end.",
  },
  {
    auteur: "Léa",
    date: "2026-01",
    texte: "Très bonne ambiance, les serveurs sont d’une amabilité exceptionnelle. Les plats sont très copieux et délicieux, à tel point que nous y avons mangé matin et soir. On reviendra sans hésiter !",
  },
  {
    auteur: "Patricia Gelineau",
    date: "2026-03",
    texte: "Clients fidèles du Rapid Pasta depuis l’an 2000… aujourd’hui Le Petit Chalet fait une très belle entrée ! L’accueil est irréprochable, les plats sont au top et l’ambiance toujours aussi agréable.",
  },
] as const;
