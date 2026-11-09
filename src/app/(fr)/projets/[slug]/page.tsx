import { notFound } from "next/navigation";
import { ProjetDetail } from "@/components/ProjetDetail";
import { fr } from "@/content/fr";
import { metaPage } from "@/content/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return fr.projets.filter((p) => p.etude).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = fr.projets.find((x) => x.id === slug);
  return p ? metaPage(fr, `/projets/${slug}`, p) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = fr.projets.find((x) => x.id === slug);
  if (!p?.etude) notFound();
  return <ProjetDetail c={fr} p={p} />;
}
