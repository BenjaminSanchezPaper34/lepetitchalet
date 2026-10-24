import type { Metadata, Viewport } from "next";
import RootShell from "@/components/site/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://petitchalet.fr"),
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  // Image de partage par défaut (pages légales) ; les pages principales définissent la leur
  openGraph: { siteName: "Le Petit Chalet", locale: "fr_FR", type: "website", images: ["/images/og-lepetitchalet.jpg"] },
};
export const viewport: Viewport = { themeColor: "#1d1d1f", viewportFit: "cover" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="fr">{children}</RootShell>;
}
