import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <>
      <Header locale="fr" page="legal" />
      <main>
        <div className="bg-nuit px-5 pt-44 pb-14 text-creme sm:px-8">
          <h1 className="titre-section mx-auto max-w-3xl">{titre}</h1>
        </div>
        <article className="mx-auto max-w-3xl space-y-4 px-5 py-14 text-base leading-relaxed sm:px-8 [&_a]:text-bois [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:uppercase [&_h2]:text-bois [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </article>
      </main>
      <Footer locale="fr" />
    </>
  );
}
