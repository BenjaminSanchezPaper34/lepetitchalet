import HomePage from "@/components/site/HomePage";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 86400; // régénération quotidienne (bandeau de saison)
export const metadata = pageMetadata("home", "fr");

export default function Page() {
  return <HomePage locale="fr" />;
}
