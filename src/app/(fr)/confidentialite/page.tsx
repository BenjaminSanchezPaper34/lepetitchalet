import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { site } from "@/content/site";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Politique de confidentialité — Le Petit Chalet, Pas de la Case",
  description: "Politique de confidentialité du site du Petit Chalet : aucun cookie, aucun service tiers, mesure d’audience anonyme sans cookie, vos droits.",
  alternates: { canonical: "/confidentialite" },
};

export default function Page() {
  return (
    <LegalPage titre="Politique de confidentialité">
      <h2>Responsable du traitement</h2>
      <p>
        {site.nom} (Rapid Pasta, SLU) — {site.adresse.rue}, {site.adresse.cp} {site.adresse.ville}, Andorre.
        Téléphone : <a href={site.tel.lien}>{site.tel.affiche}</a> · E-mail : <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <h2>Données collectées et finalités</h2>
      <p>Ce site ne comporte aucun formulaire et ne charge aucun service tiers (ni carte, ni widget, ni réseau social). Les seuls traitements sont :</p>
      <ul>
        <li><strong>Journaux techniques de l’hébergeur (Vercel)</strong> : adresse IP, pages consultées — sécurité et bon fonctionnement du service (intérêt légitime). Conservation limitée par l’hébergeur.</li>
        <li><strong>Mesure d’audience (Vercel Web Analytics)</strong> : comptage anonyme des visites et de certains clics (téléphone, WhatsApp, itinéraire, réseaux sociaux, carte), <strong>sans cookie</strong> et sans identifiant persistant — exempté de consentement.</li>
      </ul>
      <p>Les liens vers Google Maps, Apple Plans, Waze, WhatsApp, Instagram, Facebook ou Tripadvisor ouvrent ces services : vos données y sont alors traitées selon leurs propres politiques.</p>
      <h2>Cookies</h2>
      <p>Ce site ne dépose <strong>aucun cookie</strong>. C’est pourquoi aucun bandeau de consentement ne s’affiche.</p>
      <h2>Destinataires et transferts</h2>
      <p>Vercel Inc. (hébergement, mesure d’audience) est susceptible de traiter des données en dehors de l’Union européenne, dans le cadre des clauses contractuelles types applicables.</p>
      <h2>Vos droits</h2>
      <p>
        Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition et de limitation sur vos données. Pour
        l’exercer, écrivez à <a href={`mailto:${site.email}`}>{site.email}</a> ou appelez le {site.tel.affiche}. Vous pouvez
        saisir l’autorité de contrôle : l’<a href="https://www.apda.ad">Agència Andorrana de Protecció de Dades (APDA)</a>, ou
        la <a href="https://www.cnil.fr">CNIL</a> si vous résidez en France.
      </p>
      <p><em>Dernière mise à jour : 25 septembre 2026.</em></p>
    </LegalPage>
  );
}
