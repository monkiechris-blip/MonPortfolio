import { Accueil } from "@/components/Accueil";
import { fr } from "@/content/fr";
import { metaPage } from "@/content/meta";

export const metadata = metaPage(fr, "/");

export default function Page() {
  return <Accueil c={fr} />;
}
