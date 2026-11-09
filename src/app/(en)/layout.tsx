import { Racine } from "@/components/Racine";
import { en } from "@/content/en";
export { viewport } from "@/content/meta";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Racine c={en}>{children}</Racine>;
}
