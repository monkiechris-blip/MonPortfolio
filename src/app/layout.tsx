import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { profil } from "@/content/profil";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const nomComplet = `${profil.prenom} ${profil.nom}`;
const description =
  "Développeur full-stack, Licence 3 MIAGE (UFHB × Rennes). SkillMap, 1er prix hackathon MIAGE ; stage IMAKO. Candidat Master génie logiciel & IA 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${nomComplet} · Développeur full-stack`,
  description,
  authors: [{ name: nomComplet }],
  alternates: { canonical: "/" },
  keywords: [
    "Chris-Orhé Aduko MONKIÉ",
    "développeur full-stack",
    "MIAGE",
    "Université Félix Houphouët-Boigny",
    "Université de Rennes",
    "génie logiciel",
    "IA appliquée",
    "Abidjan",
    "portfolio",
  ],
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    title: `${nomComplet} · Développeur full-stack`,
    description,
    siteName: nomComplet,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${nomComplet}, développeur full-stack` }],
  },
  twitter: { card: "summary_large_image", title: nomComplet, description, images: ["/og.png"] },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0B0D12",
};

const personne = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: nomComplet,
  jobTitle: "Développeur full-stack",
  url: siteUrl,
  image: `${siteUrl}/portrait.jpg`,
  email: `mailto:${profil.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Université Félix Houphouët-Boigny" },
    { "@type": "CollegeOrUniversity", name: "Université de Rennes" },
  ],
  knowsLanguage: ["fr", "en"],
  sameAs: [profil.github, profil.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personne) }}
        />
        {children}
      </body>
    </html>
  );
}
