/** Identité du restaurant — NAP strictement identique à la fiche Google et aux annuaires. */
export const site = {
  url: "https://petitchalet.fr",
  nom: "Le Petit Chalet",
  adresse: { rue: "39 Avenue d’Encamp", cp: "AD200", ville: "Pas de la Casa", pays: "Andorre", paysCode: "AD" },
  geo: { lat: 42.5425, lng: 1.7339 },
  tel: { affiche: "+376 855 436", lien: "tel:+376855436" },
  tel2: { affiche: "+376 385 568", lien: "tel:+376385568" },
  whatsapp: "https://wa.me/376385568",
  email: "Seb934@hotmail.fr",
  horaires: { ouvre: "11:00", ferme: "23:00" },
  /** Saison 2026-2027 : premier jour d'ouverture */
  ouverture: "2026-12-04",
  finSaison: "2027-04-30",
  note: { valeur: 4.8, nombre: 118 },
  liens: {
    instagram: "https://www.instagram.com/petitchaletandorre/",
    facebook: "https://www.facebook.com/profile.php?id=61584342684076",
    tripadvisor: "https://www.tripadvisor.fr/Restaurant_Review-g315773-d34035091-Reviews-Le_Petit_Chalet-Pas_de_la_Casa_Encamp_Parish.html",
    googleMaps: "https://maps.google.com/?cid=12951499873152251961",
    googleAvis: "https://g.page/r/CTm4wb-D-LyzEBM/review",
    applePlans: "https://maps.apple.com/?q=Le+Petit+Chalet&ll=42.5425,1.7339",
    waze: "https://waze.com/ul?ll=42.5425,1.7339&navigate=yes",
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
