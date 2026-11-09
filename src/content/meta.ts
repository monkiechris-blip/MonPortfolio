import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/components/Racine";
import type { Contenu, Projet } from "./types";

export const viewport: Viewport = { themeColor: "#0B0D12" };

export function metaPage(c: Contenu, chemin: string, p?: Projet): Metadata {
  const nom = `${c.profil.prenom} ${c.profil.nom}`;
  const titre = p ? `${p.nom} · ${p.sousTitre} — ${nom}` : c.seo.titre;
  const description = p ? `${p.besoin} ${p.resultat}`.slice(0, 158) : c.seo.description;
  const fr = chemin.replace(/^\/en/, "") || "/";
  const en = `/en${fr === "/" ? "" : fr}`;
  return {
    metadataBase: new URL(siteUrl),
    title: titre,
    description,
    authors: [{ name: nom }],
    alternates: { canonical: chemin, languages: { fr, en } },
    icons: { icon: "/icon.svg" },
    openGraph: {
      type: p ? "article" : "profile",
      locale: c.langue === "fr" ? "fr_FR" : "en_US",
      title: titre,
      description,
      siteName: nom,
      url: chemin,
      images: p?.captures?.[0]
        ? [{ url: p.captures[0].src, width: 1600, height: 1000, alt: p.captures[0].alt }]
        : [{ url: "/og.png", width: 1200, height: 630, alt: nom }],
    },
    twitter: { card: "summary_large_image", title: titre, description, images: [p?.captures?.[0]?.src ?? "/og.png"] },
  };
}
