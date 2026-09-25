import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { site } from "@/content/site";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Mentions légales — Le Petit Chalet, Pas de la Case",
  description: "Mentions légales du site du Petit Chalet, restaurant de montagne au Pas de la Case (Andorre) : éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <LegalPage titre="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        <strong>{site.nom}</strong>, exploité par <strong>Rapid Pasta, SLU</strong> — Societat Limitada Unipersonal
        (société à responsabilité limitée unipersonnelle de droit andorran) au capital de 3 000 €.<br />
        Inscrite au Registre de Societats Mercantils d’Andorre sous le n° 16601 (llibre S-252, foli 11-20).<br />
        Siège social : Avinguda d’Encamp n° 39, Edifici Frontera Blanca, Local 32, AD200 Pas de la Casa, Encamp, Andorre.<br />
        Téléphone : <a href={site.tel.lien}>{site.tel.affiche}</a> · <a href={site.tel2.lien}>{site.tel2.affiche}</a><br />
        E-mail : <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <h2>Directeur de la publication</h2>
      <p>Sébastien Causse, représentant légal de Rapid Pasta, SLU.</p>
      <h2>Hébergement</h2>
      <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — <a href="https://vercel.com">vercel.com</a></p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus de ce site (textes, photographies, vidéos, logo, identité graphique) est la propriété du Petit
        Chalet ou de ses partenaires. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
        écrite préalable est interdite.
      </p>
      <h2>Conception et réalisation</h2>
      <p>Site conçu et réalisé par <a href="https://www.paper34.fr">Paper34</a>, studio graphique à Agde (France).</p>
    </LegalPage>
  );
}
