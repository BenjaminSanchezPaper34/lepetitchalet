"use client";

import { useState } from "react";
import { Check, Copy, Wifi } from "lucide-react";

/**
 * Bouton « copier le mot de passe » du Wi-Fi : aucun site ne peut connecter un téléphone au réseau,
 * on facilite donc le collage dans les réglages. Le QR code imprimé sur les tables fait la connexion directe.
 */
export default function WifiBouton({
  motDePasse,
  libelle,
  libelleCopie,
  icone = "copie",
  className = "btn btn-ligne mt-3 min-h-11 text-base text-bois hover:bg-bois hover:text-creme",
}: {
  motDePasse: string;
  libelle: string;
  libelleCopie: string;
  /** « wifi » pour la version du hero, « copie » pour le bloc Infos */
  icone?: "wifi" | "copie";
  className?: string;
}) {
  const Icone = icone === "wifi" ? Wifi : Copy;
  const [copie, setCopie] = useState(false);
  const copier = async () => {
    try {
      await navigator.clipboard.writeText(motDePasse);
      setCopie(true);
      window.setTimeout(() => setCopie(false), 2500);
    } catch {
      /* presse-papiers refusé : le mot de passe reste lisible juste au-dessus */
    }
  };
  return (
    <button type="button" onClick={copier} aria-live="polite" className={className}>
      {copie ? <Check aria-hidden="true" className="h-4 w-4" /> : <Icone aria-hidden="true" className="h-4 w-4" />}
      {copie ? libelleCopie : libelle}
    </button>
  );
}
