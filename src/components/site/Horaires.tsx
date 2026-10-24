/**
 * Horaires sur deux lignes : la semaine, puis le samedi-dimanche (lisible au téléphone).
 * Le texte source garde le séparateur « · » ; on coupe dessus. Utilisé dans le hero, Infos et le pied de page.
 */
export default function Horaires({ texte, className = "" }: { texte: string; className?: string }) {
  return (
    <span className={className}>
      {texte.split(" · ").map((ligne) => (
        <span key={ligne} className="block">{ligne}</span>
      ))}
    </span>
  );
}
