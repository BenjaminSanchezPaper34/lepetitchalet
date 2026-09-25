import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-nuit px-6 text-center text-creme">
      <p className="titre-section">Page introuvable</p>
      <p className="text-lg text-creme/80">Cette page n’existe pas ou a été déplacée.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-bois">Accueil</Link>
        <Link href="/carte" className="btn btn-ligne">La carte</Link>
      </div>
    </main>
  );
}
