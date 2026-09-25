import CartePage from "@/components/carte/CartePage";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 86400;
export const metadata = pageMetadata("carte", "en");

export default function Page() {
  return <CartePage locale="en" />;
}
