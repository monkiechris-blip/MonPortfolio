import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, Download, Mail, MapPin, Phone, Trophy } from "lucide-react";
import { Effets3D } from "@/components/Effets3D";
import { Header } from "@/components/Header";
import { GitHubMark, WhatsAppMark } from "@/components/icons";
import { Drapeau, MedMapPreview, MyMiagePreview } from "@/components/Previews";
import { SkillMapPreview } from "@/components/SkillMapPreview";
import {
  cap,
  competences,
  distinctions,
  enCours,
  experiences,
  formation,
  profil,
  projets,
  type Projet,
} from "@/content/profil";

const cadre = "mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-14";
const trait = { strokeWidth: 1.5, "aria-hidden": true } as const;
const [skillmap, medmap, mymiage] = projets;

function Titre({ id, children, intro }: { id: string; children: React.ReactNode; intro?: string }) {
  return (
    <div className="mb-10 grid gap-4 lg:mb-14 lg:grid-cols-[1fr_minmax(0,30rem)] lg:items-end">
      <h2 id={id} className="display text-[clamp(2.75rem,6vw,5rem)] leading-[0.95]">
        {children}
      </h2>
      {intro && <p className="text-[1.0625rem] leading-relaxed text-text-3 lg:pb-2">{intro}</p>}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {items.map((s) => (
        <li key={s} className="mono rounded-md border border-line-2 px-2 py-1 text-xs text-text-2">
          {s}
        </li>
      ))}
    </ul>
  );
}

function LiensCode({ p }: { p: Projet }) {
  if (!p.liens) return null;
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {p.liens.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-accent"
          >
            <GitHubMark className="size-4" />
            {l.label}
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              {...trait}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Details({ p }: { p: Projet }) {
  return (
    <dl className="grid gap-5">
      {(
        [
          ["Le besoin", p.besoin],
          ["Mon rôle", p.role],
          ["Le résultat", p.resultat],
        ] as const
      ).map(([t, d]) => (
        <div key={t}>
          <dt className="text-sm font-medium text-text">{t}</dt>
          <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-text-3">{d}</dd>
        </div>
      ))}
    </dl>
  );
}

const vague = (i: number) => ({ "--i": i }) as React.CSSProperties;

/* ——— Premier écran : le bento ——— */

function Hero() {
  return (
    <section data-hero3d aria-labelledby="t-hero" className={`attente-3d ${cadre} pb-24 pt-2 lg:pb-32`}>
      <div className="perspective-scene relative">
      {/* Introduction 3D : le nom au premier plan, les tuiles dispersées derrière. */}
      <div
        data-hero-intro
        aria-hidden
        className="intro3d pointer-events-none absolute inset-0 z-10 flex-col items-center justify-center text-center"
      >
        <p className="display text-[clamp(5rem,12vw,11.5rem)] leading-[0.85]">
          Chris-Orhé
          <br />
          <span className="text-accent">MONKIÉ</span>
        </p>
        <p className="mt-8 text-lg text-text-2">Développeur full-stack · Abidjan × Rennes</p>
        <p className="mt-10 flex flex-col items-center gap-1 text-sm text-text-3">
          Faites défiler
          <ChevronDown className="size-4" {...trait} />
        </p>
      </div>
      <div data-scene className="preserve-3d grid grid-cols-[minmax(0,1fr)] gap-3 sm:gap-4 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[1.25fr_0.9fr_0.85fr] lg:grid-rows-[minmax(19rem,1fr)_minmax(17rem,1fr)]">
        <div data-hero-tile className="tile rise flex flex-col justify-between gap-10 p-7 sm:p-10 lg:row-span-2" style={vague(0)}>
          <div>
            <h1 id="t-hero" className="display text-[clamp(3.1rem,6.4vw,6.5rem)] leading-[0.9]">
              <span className="sr-only">
                {profil.prenom} {profil.nom},{" "}
              </span>
              Du besoin réel au logiciel <span className="text-accent">fiable.</span>
            </h1>
            <p className="mt-7 max-w-[34ch] text-xl leading-relaxed text-text-2">
              {profil.prenom} {profil.nom}, développeur full-stack en Licence 3 MIAGE. Je conçois des applications
              web de bout en bout.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projets"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 font-semibold text-accent-ink transition-colors hover:bg-[#6BA1FF]"
              >
                Voir les projets
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" {...trait} />
              </a>
              <a
                href={profil.cv}
                download
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line-2 px-5 font-medium transition-colors hover:border-text-3 hover:bg-tile-2"
              >
                <Download className="size-4" {...trait} />
                Télécharger le CV
              </a>
            </div>
          </div>
          <p className="flex flex-wrap items-center gap-3 text-sm text-text-3">
            <Drapeau />
            Abidjan · double diplôme avec l’Université de Rennes
          </p>
        </div>

        <a data-hero-tile href={`#${skillmap.id}`} className="tile rise relative flex flex-col gap-4 p-6 sm:p-7" style={vague(1)}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="display text-3xl">{skillmap.nom}</p>
              <p className="text-sm text-text-3">{skillmap.sousTitre}</p>
            </div>
            <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-ink">
              1er prix 2026
            </span>
          </div>
          <SkillMapPreview lignes={2} />
        </a>

        <div data-hero-tile className="tile rise relative min-h-[24rem] overflow-hidden lg:min-h-0" style={vague(2)}>
          <Image
            src="/portrait.jpg"
            alt={`Portrait de ${profil.prenom} ${profil.nom}`}
            fill
            priority
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover object-[50%_18%]"
          />
          <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-bg/80 px-4 py-3 backdrop-blur-md">
            <p className="font-semibold">Candidat Master 2027</p>
            <p className="text-sm text-text-2">Génie logiciel & IA appliquée</p>
          </div>
        </div>

        <a
          data-hero-tile
          href={`#${medmap.id}`}
          className="tile rise relative min-h-[17rem] overflow-hidden p-6 sm:p-7"
          style={vague(3)}
        >
          <MedMapPreview />
          <div className="relative">
            <p className="display text-3xl">{medmap.nom}</p>
            <p className="text-sm text-text-2">Santé numérique · Abidjan</p>
          </div>
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-line-2 bg-bg/90 px-4 py-3">
            <p className="text-sm font-semibold">Structure de santé la plus proche</p>
            <p className="text-xs text-text-3">Carte Leaflet · assistant IA · paiement par séquestre</p>
          </div>
        </a>

        <div data-hero-tile className="tile rise flex flex-col justify-between gap-6 p-6 sm:p-7" style={vague(4)}>
          <p className="text-sm text-text-3">Distinctions</p>
          <div>
            <p className="display text-[clamp(3.5rem,5vw,4.5rem)] leading-none">Major</p>
            <p className="mt-3 text-sm leading-relaxed text-text-2">
              Au concours d’entrée MIAGE et en Licence 1. Bourse intégrale au mérite.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/* ——— Projets ——— */

function Projets() {
  const secondaires = [
    {
      p: medmap,
      visuel: (
        <div className="relative h-56 overflow-hidden rounded-2xl border border-line">
          <MedMapPreview />
          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-line-2 bg-bg/90 px-3.5 py-2.5">
            <p className="text-sm font-semibold">Centre de santé · 1,2 km</p>
            <p className="text-xs text-text-3">Paiement bloqué jusqu’à confirmation du service</p>
          </div>
        </div>
      ),
    },
    { p: mymiage, visuel: <MyMiagePreview /> },
  ];

  return (
    <section id="projets" aria-labelledby="t-projets" className={`${cadre} py-16 lg:py-24`}>
      <Titre
        id="t-projets"
        intro="Trois plateformes livrées et deux projets en cours. Pour chacun : le besoin de départ, ce que j’ai fait, ce qui en est sorti."
      >
        Projets
      </Titre>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:gap-4 lg:grid-cols-6">
        <article
          id={skillmap.id}
          aria-labelledby="t-skillmap"
          className="tile grid grid-cols-[minmax(0,1fr)] gap-10 p-6 sm:p-10 lg:col-span-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14"
        >
          <div className="flex flex-col">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-[#9EC1FF]">
              <Trophy className="size-4" {...trait} />
              {skillmap.prix} · {skillmap.cadre}
            </p>
            <h3 id="t-skillmap" className="display mt-6 text-[clamp(2.75rem,5vw,4rem)] leading-none">
              {skillmap.nom}
            </h3>
            <p className="mt-2 text-lg text-text-2">{skillmap.sousTitre}</p>
            <div className="mt-8 flex-1">
              <Details p={skillmap} />
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Stack items={skillmap.stack} />
              <LiensCode p={skillmap} />
            </div>
          </div>
          <figure data-depth="fort" className="self-center rounded-2xl border border-line bg-tile-2 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-1.5" aria-hidden>
              <i className="size-2.5 rounded-full bg-line-2" />
              <i className="size-2.5 rounded-full bg-line-2" />
              <i className="size-2.5 rounded-full bg-line-2" />
              <span className="mono ml-3 text-xs text-text-3">skillmap · recherche</span>
            </div>
            <p className="display mb-4 text-2xl" aria-hidden>
              Trouver un prestataire
            </p>
            <SkillMapPreview lignes={3} grand />
            <figcaption className="mt-4 text-xs text-text-3">Aperçu illustratif de l’interface de recherche.</figcaption>
          </figure>
        </article>

        {secondaires.map(({ p, visuel }) => (
          <article
            key={p.id}
            id={p.id}
            aria-labelledby={`t-${p.id}`}
            data-depth
            className="tile flex flex-col p-6 sm:p-8 lg:col-span-3"
          >
            <figure>
              {visuel}
              <figcaption className="mt-3 text-xs text-text-3">Aperçu illustratif.</figcaption>
            </figure>
            <p className="mt-8 text-sm text-text-3">{p.cadre}</p>
            <h3 id={`t-${p.id}`} className="display mt-1 text-4xl">
              {p.nom}
            </h3>
            <p className="mt-1 text-text-2">{p.sousTitre}</p>
            <div className="mt-6 flex-1 border-t border-line pt-6">
              <Details p={p} />
            </div>
            <div className="mt-6 space-y-4 border-t border-line pt-5">
              <Stack items={p.stack} />
              <LiensCode p={p} />
            </div>
          </article>
        ))}

        {enCours.map((e) => (
          <article key={e.nom} data-tilt className="tile p-6 sm:p-8 lg:col-span-3">
            <p className="flex items-center gap-2 text-sm text-[#9EC1FF]">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              En cours
            </p>
            <h3 className="display mt-3 text-3xl">{e.nom}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-text-3">{e.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ——— Parcours ——— */

function Parcours() {
  return (
    <section id="parcours" aria-labelledby="t-parcours" className={`${cadre} py-16 lg:py-24`}>
      <Titre
        id="t-parcours"
        intro="Trois stages, du terrain au développement. La maintenance m’a appris comment un logiciel est installé, utilisé et dépanné ; IMAKO m’a confié un logiciel entier."
      >
        Parcours
      </Titre>

      <ol className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        {experiences.map((x, k) => (
          <li key={x.entreprise} data-depth className={`tile flex flex-col p-6 sm:p-8 ${k === 0 ? "!border-accent/40" : ""}`}>
            <p className="mono text-xs text-text-3">{x.periode}</p>
            <h3 className="display mt-3 text-3xl leading-tight">{x.entreprise}</h3>
            <p className="mt-1 text-text-2">{x.poste}</p>
            <p className="mt-1 text-sm text-text-3">{x.contexte}</p>
            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {x.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[0.95rem] leading-relaxed text-text-3">
                  <span
                    aria-hidden
                    className={`mt-[0.6em] size-1.5 shrink-0 rounded-full ${k === 0 ? "bg-accent" : "bg-line-2"}`}
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="mt-16 text-sm text-text-3">Formation</h3>
      <ol className="mt-4 grid gap-3 sm:gap-4 lg:grid-cols-[2fr_1fr]">
        {formation.map((f) => (
          <li key={f.titre} className="tile p-6 sm:p-8">
            <p className="mono text-xs text-text-3">{f.periode}</p>
            <p className="display mt-3 text-3xl leading-tight">{f.titre}</p>
            <p className="mt-1 text-text-2">{f.lieu}</p>
            <p className="mt-4 max-w-[62ch] text-[0.95rem] leading-relaxed text-text-3">{f.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ——— Distinctions et compétences ——— */

function Distinctions() {
  return (
    <section aria-labelledby="t-distinctions" className={`${cadre} py-16 lg:py-24`}>
      <Titre id="t-distinctions">Distinctions</Titre>
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {distinctions.map((d, k) => (
          <li
            key={d.titre}
            data-tilt
            className={`flex min-h-48 flex-col justify-between rounded-[22px] border p-6 sm:p-7 ${
              k === 0 ? "border-accent bg-accent text-accent-ink" : "border-line bg-tile"
            }`}
          >
            <p className="display text-[2.5rem] leading-[0.95]">{d.titre}</p>
            <p className={`mt-6 text-[0.95rem] leading-relaxed ${k === 0 ? "text-accent-ink" : "text-text-3"}`}>
              {d.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Competences() {
  return (
    <section id="competences" aria-labelledby="t-competences" className={`${cadre} py-16 lg:py-24`}>
      <Titre id="t-competences">Compétences</Titre>
      <dl className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {competences.map((c) => (
          <div key={c.groupe} data-tilt className="tile p-6">
            <dt className="text-sm text-text-3">{c.groupe}</dt>
            <dd className="mt-4">
              <ul className="flex flex-wrap gap-1.5">
                {c.items.map((i) => (
                  <li key={i} className="rounded-lg border border-line-2 bg-tile-2 px-2.5 py-1 text-sm text-text-2">
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ——— Cap ——— */

function Cap() {
  const [avant, apres] = cap.citation.split("génie logiciel");
  return (
    <section aria-labelledby="t-cap" className={`${cadre} py-16 lg:py-24`}>
      <div data-depth className="tile grid gap-12 p-7 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-16">
        <div>
          <h2 id="t-cap" className="text-sm text-text-3">
            Mon cap
          </h2>
          <blockquote className="mt-6">
            <p className="display text-[clamp(2.1rem,4.4vw,3.75rem)] leading-none">
              « {avant}
              <span className="text-accent">génie logiciel</span>
              {apres} »
            </p>
          </blockquote>
        </div>
        <div className="space-y-5 self-end text-[1.0625rem] leading-relaxed text-text-2">
          {cap.texte.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <p className="border-t border-line pt-5 text-sm text-text-3">{cap.horsCode}</p>
        </div>
      </div>
    </section>
  );
}

/* ——— Contact ——— */

function Contact() {
  const actions = [
    { label: "WhatsApp", href: profil.whatsappLien, icone: <WhatsAppMark className="size-4" /> },
    { label: "GitHub", href: profil.github, icone: <GitHubMark className="size-4" /> },
    ...(profil.linkedin
      ? [{ label: "LinkedIn", href: profil.linkedin, icone: <ArrowUpRight className="size-4" {...trait} /> }]
      : []),
  ];

  return (
    <section id="contact" aria-labelledby="t-contact" className={`${cadre} pb-16 pt-24 lg:pt-32`}>
      <div data-depth="fort" className="rounded-[28px] bg-accent p-7 text-accent-ink sm:p-12 lg:p-16">
        <h2 id="t-contact" className="display text-[clamp(3rem,7vw,6rem)] leading-[0.92]">
          Travaillons ensemble.
        </h2>
        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-accent-ink">
          Pour une candidature en master, un stage ou un projet : je réponds par e-mail et sur WhatsApp.
        </p>

        <a
          href={`mailto:${profil.email}`}
          className="mt-10 inline-flex items-center gap-3 break-all text-[clamp(1.4rem,3.6vw,2.5rem)] font-semibold tracking-tight underline decoration-accent-ink/30 decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-accent-ink"
        >
          <Mail className="size-7 shrink-0 max-sm:hidden" {...trait} />
          {profil.email}
        </a>

        <ul className="mt-10 flex flex-wrap gap-3">
          {actions.map((a) => (
            <li key={a.label}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent-ink px-5 font-medium text-text transition-colors hover:bg-bg"
              >
                {a.icone}
                {a.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profil.cv}
              download
              className="inline-flex h-12 items-center gap-2 rounded-xl border-[1.5px] border-accent-ink/40 px-5 font-medium transition-colors hover:border-accent-ink"
            >
              <Download className="size-4" {...trait} />
              CV (PDF)
            </a>
          </li>
        </ul>

        <dl className="mt-12 grid gap-4 border-t border-accent-ink/20 pt-6 text-[0.95rem] sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <dt>
              <Phone className="size-4" {...trait} />
              <span className="sr-only">Téléphone</span>
            </dt>
            <dd>
              <a href={`tel:${profil.telephoneLien}`} className="tabular-nums hover:underline">
                {profil.telephone}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>
              <WhatsAppMark className="size-4" />
              <span className="sr-only">WhatsApp</span>
            </dt>
            <dd>
              <a href={profil.whatsappLien} target="_blank" rel="noopener" className="tabular-nums hover:underline">
                {profil.whatsapp}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>
              <MapPin className="size-4" {...trait} />
              <span className="sr-only">Localisation</span>
            </dt>
            <dd>{profil.localisation}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <a
        href="#projets"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-2 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>
      <Header />
      <Effets3D />
      <main>
        <Hero />
        <Projets />
        <Parcours />
        <Distinctions />
        <Competences />
        <Cap />
        <Contact />
      </main>
      <footer
        className={`${cadre} flex flex-col gap-4 pb-10 pt-6 text-sm text-text-3 sm:flex-row sm:items-center sm:justify-between`}
      >
        <p className="flex items-center gap-3">
          <Drapeau />© 2026 {profil.prenom} {profil.nom}
        </p>
        <div className="flex gap-6">
          <a href={profil.codeSource} target="_blank" rel="noopener" className="hover:text-text">
            Code source du site
          </a>
          <a href="#" className="hover:text-text">
            Haut de page
          </a>
        </div>
      </footer>
    </>
  );
}
