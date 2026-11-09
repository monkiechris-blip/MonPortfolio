import { Racine } from "@/components/Racine";
import { fr } from "@/content/fr";
export { viewport } from "@/content/meta";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Racine c={fr}>{children}</Racine>;
}
