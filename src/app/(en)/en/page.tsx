import { Accueil } from "@/components/Accueil";
import { en } from "@/content/en";
import { metaPage } from "@/content/meta";

export const metadata = metaPage(en, "/en");

export default function Page() {
  return <Accueil c={en} />;
}
