import { Analytics } from "@vercel/analytics/next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import type { Contenu } from "@/content/types";
import "../app/globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export function Racine({ c, children }: { c: Contenu; children: React.ReactNode }) {
  const nom = `${c.profil.prenom} ${c.profil.nom}`;
  const personne = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: nom,
    jobTitle: c.langue === "fr" ? "Développeur full-stack" : "Full-stack developer",
    url: siteUrl,
    image: `${siteUrl}/portrait.jpg`,
    email: `mailto:${c.profil.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Université Félix Houphouët-Boigny" },
      { "@type": "CollegeOrUniversity", name: "Université de Rennes" },
    ],
    knowsLanguage: ["fr", "en"],
    sameAs: [c.profil.github, c.profil.linkedin].filter(Boolean),
  };

  return (
    <html
      lang={c.langue}
      className={`${geist.variable} ${geistMono.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personne) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
