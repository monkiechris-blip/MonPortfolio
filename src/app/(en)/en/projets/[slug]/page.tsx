import { notFound } from "next/navigation";
import { ProjetDetail } from "@/components/ProjetDetail";
import { en } from "@/content/en";
import { metaPage } from "@/content/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return en.projets.filter((p) => p.etude).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = en.projets.find((x) => x.id === slug);
  return p ? metaPage(en, `/en/projets/${slug}`, p) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = en.projets.find((x) => x.id === slug);
  if (!p?.etude) notFound();
  return <ProjetDetail c={en} p={p} />;
}
