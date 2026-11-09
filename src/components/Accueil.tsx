import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Trophy,
} from "lucide-react";
import { Effets3D } from "@/components/Effets3D";
import { Header } from "@/components/Header";
import { GitHubMark, LinkedInMark, WhatsAppMark } from "@/components/icons";
import { Drapeau, MyMiagePreview } from "@/components/Previews";
import { SkillMapPreview } from "@/components/SkillMapPreview";
import type { Contenu, Projet } from "@/content/types";

export const cadre = "mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-14";
export const trait = { strokeWidth: 1.5, "aria-hidden": true } as const;
const vague = (i: number) => ({ "--i": i }) as React.CSSProperties;

export const cheminProjet = (c: Contenu, id: string) => `${c.langue === "fr" ? "" : "/en"}/projets/${id}`;

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

export function Stack({ items }: { items: string[] }) {
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

export function LiensProjet({ p, c, etude = true }: { p: Projet; c: Contenu; etude?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {etude && p.etude && (
        <li>
          <a
            href={cheminProjet(c, p.id)}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-[#6BA1FF]"
          >
            {c.ui.etudeDeCas}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" {...trait} />
          </a>
        </li>
      )}
      {p.demo && (
        <li>
          <a
            href={p.demo}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-accent"
          >
            <ExternalLink className="size-4" {...trait} />
            {c.ui.voirDemo}
          </a>
        </li>
      )}
      {p.liens?.map((l) => (
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

function Details({ p, c }: { p: Projet; c: Contenu }) {
  return (
    <dl className="grid gap-5">
      {(
        [
          [c.ui.besoin, p.besoin],
          [c.ui.role, p.role],
          [c.ui.resultat, p.resultat],
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

/* ——— Premier écran : le bento ——— */

function Hero({ c }: { c: Contenu }) {
  const [skillmap, medmap] = c.projets;
  const capture = medmap.captures?.[0];
  return (
    <section data-hero3d aria-labelledby="t-hero" className={`attente-3d ${cadre} pb-24 pt-2 lg:pb-32`}>
      <div className="perspective-scene relative">
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
          <p className="mt-8 text-lg text-text-2">{c.ui.introSousTitre}</p>
          <p className="mt-10 flex flex-col items-center gap-1 text-sm text-text-3">
            {c.ui.introDefiler}
            <ChevronDown className="size-4" {...trait} />
          </p>
        </div>

        <div
          data-scene
          className="preserve-3d grid grid-cols-[minmax(0,1fr)] gap-3 sm:gap-4 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[1.25fr_0.9fr_0.85fr] lg:grid-rows-[minmax(19rem,1fr)_minmax(17rem,1fr)]"
        >
          <div
            data-hero-tile
            className="tile rise flex flex-col justify-between gap-10 p-7 sm:p-10 lg:row-span-2"
            style={vague(0)}
          >
            <div>
              <h1 id="t-hero" className="display text-[clamp(3.1rem,6.4vw,6.5rem)] leading-[0.9]">
                <span className="sr-only">
                  {c.profil.prenom} {c.profil.nom},{" "}
                </span>
                {c.profil.accroche} <span className="text-accent">{c.profil.accrocheMot}</span>
              </h1>
              <p className="mt-7 max-w-[34ch] text-xl leading-relaxed text-text-2">{c.profil.presentation}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projets"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 font-semibold text-accent-ink transition-colors hover:bg-[#6BA1FF]"
                >
                  {c.ui.voirProjets}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" {...trait} />
                </a>
                <a
                  href={c.profil.cv}
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line-2 px-5 font-medium transition-colors hover:border-text-3 hover:bg-tile-2"
                >
                  <Download className="size-4" {...trait} />
                  {c.ui.telechargerCv}
                </a>
              </div>
            </div>
            <p className="flex flex-wrap items-center gap-3 text-sm text-text-3">
              <Drapeau />
              {c.ui.lieuDiplome}
            </p>
          </div>

          <a
            data-hero-tile
            href={`#${skillmap.id}`}
            className="tile rise relative flex flex-col gap-4 p-6 sm:p-7"
            style={vague(1)}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="display text-3xl">{skillmap.nom}</p>
                <p className="text-sm text-text-3">{skillmap.sousTitre}</p>
              </div>
              <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-ink">
                {c.ui.skillmapPrix}
              </span>
            </div>
            <SkillMapPreview lignes={2} langue={c.langue} />
          </a>

          <div
            data-hero-tile
            className="tile rise relative min-h-[24rem] overflow-hidden lg:min-h-0"
            style={vague(2)}
          >
            <Image
              src="/portrait.jpg"
              alt={c.ui.portraitAlt}
              fill
              priority
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover object-[50%_18%]"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-bg/80 px-4 py-3 backdrop-blur-md">
              <p className="font-semibold">{c.ui.candidat}</p>
              <p className="text-sm text-text-2">{c.ui.candidatDetail}</p>
            </div>
          </div>

          <a
            data-hero-tile
            href={`#${medmap.id}`}
            className="tile rise relative flex min-h-[17rem] flex-col justify-between overflow-hidden p-6 sm:p-7"
            style={vague(3)}
          >
            {capture && (
              <Image
                src={capture.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-left-top opacity-45"
              />
            )}
            <div aria-hidden className="absolute inset-0 bg-linear-to-b from-bg/90 via-bg/40 to-bg/90" />
            <div className="relative">
              <p className="display text-3xl">{medmap.nom}</p>
              <p className="text-sm text-text-2">{c.ui.medmapTuile}</p>
            </div>
            <div className="relative rounded-xl border border-line-2 bg-bg/90 px-4 py-3">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <span aria-hidden className="size-1.5 rounded-full bg-ci-green" />
                medmap-plus-frontend.vercel.app
              </p>
              <p className="text-xs text-text-3">{c.ui.medmapTuileDetail}</p>
            </div>
          </a>

          <div
            data-hero-tile
            className="tile rise flex flex-col justify-between gap-6 p-6 sm:p-7"
            style={vague(4)}
          >
            <p className="text-sm text-text-3">{c.ui.distinctions}</p>
            <div>
              <p className="display text-[clamp(3.5rem,5vw,4.5rem)] leading-none">
                {c.langue === "fr" ? "Major" : "Top rank"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-2">{c.ui.majorDetail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Projets ——— */

function Projets({ c }: { c: Contenu }) {
  const [skillmap, medmap, mymiage] = c.projets;
  const captureIA = medmap.captures?.[1] ?? medmap.captures?.[0];

  return (
    <section id="projets" aria-labelledby="t-projets" className={`${cadre} py-16 lg:py-24`}>
      <Titre id="t-projets" intro={c.ui.projetsIntro}>
        {c.ui.projets}
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
              <Details p={skillmap} c={c} />
            </div>
            <div className="mt-8 space-y-5 border-t border-line pt-6">
              <Stack items={skillmap.stack} />
              <LiensProjet p={skillmap} c={c} />
            </div>
          </div>
          <figure data-depth="fort" className="self-center rounded-2xl border border-line bg-tile-2 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-1.5" aria-hidden>
              <i className="size-2.5 rounded-full bg-line-2" />
              <i className="size-2.5 rounded-full bg-line-2" />
              <i className="size-2.5 rounded-full bg-line-2" />
              <span className="mono ml-3 text-xs text-text-3">skillmap</span>
            </div>
            <p className="display mb-4 text-2xl" aria-hidden>
              {c.ui.trouverPrestataire}
            </p>
            <SkillMapPreview lignes={3} grand langue={c.langue} />
            <figcaption className="mt-4 text-xs text-text-3">{c.ui.apercuSkillmap}</figcaption>
          </figure>
        </article>

        <article
          id={medmap.id}
          aria-labelledby={`t-${medmap.id}`}
          data-depth
          className="tile flex flex-col p-6 sm:p-8 lg:col-span-3"
        >
          {captureIA && (
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
                <Image
                  src={captureIA.src}
                  alt={captureIA.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-xs text-text-3">{captureIA.legende}</figcaption>
            </figure>
          )}
          <p className="mt-8 text-sm text-text-3">{medmap.cadre}</p>
          <h3 id={`t-${medmap.id}`} className="display mt-1 text-4xl">
            {medmap.nom}
          </h3>
          <p className="mt-1 text-text-2">{medmap.sousTitre}</p>
          <div className="mt-6 flex-1 border-t border-line pt-6">
            <Details p={medmap} c={c} />
          </div>
          <div className="mt-6 space-y-4 border-t border-line pt-5">
            <Stack items={medmap.stack} />
            <LiensProjet p={medmap} c={c} />
          </div>
        </article>

        <article
          id={mymiage.id}
          aria-labelledby={`t-${mymiage.id}`}
          data-depth
          className="tile flex flex-col p-6 sm:p-8 lg:col-span-3"
        >
          <figure>
            <MyMiagePreview langue={c.langue} />
            <figcaption className="mt-3 text-xs text-text-3">{c.ui.apercuIllustratif}</figcaption>
          </figure>
          <p className="mt-8 text-sm text-text-3">{mymiage.cadre}</p>
          <h3 id={`t-${mymiage.id}`} className="display mt-1 text-4xl">
            {mymiage.nom}
          </h3>
          <p className="mt-1 text-text-2">{mymiage.sousTitre}</p>
          <div className="mt-6 flex-1 border-t border-line pt-6">
            <Details p={mymiage} c={c} />
          </div>
          <div className="mt-6 space-y-4 border-t border-line pt-5">
            <Stack items={mymiage.stack} />
            <LiensProjet p={mymiage} c={c} />
          </div>
        </article>

        {c.enCours.map((e) => (
          <article key={e.nom} data-tilt className="tile p-6 sm:p-8 lg:col-span-3">
            <p className="flex items-center gap-2 text-sm text-[#9EC1FF]">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              {c.ui.enCours}
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

function Parcours({ c }: { c: Contenu }) {
  return (
    <section id="parcours" aria-labelledby="t-parcours" className={`${cadre} py-16 lg:py-24`}>
      <Titre id="t-parcours" intro={c.ui.parcoursIntro}>
        {c.ui.parcours}
      </Titre>

      <h3 className="mb-4 text-sm text-text-3">{c.ui.experiences}</h3>
      <ol className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        {c.experiences.map((x, k) => (
          <li
            key={x.entreprise}
            data-depth
            className={`tile flex flex-col p-6 sm:p-8 ${k === 0 ? "!border-accent/40" : ""}`}
          >
            <p className="mono text-xs text-text-3">{x.periode}</p>
            <p className="display mt-3 text-3xl leading-tight">{x.entreprise}</p>
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

      <h3 className="mt-16 text-sm text-text-3">{c.ui.formation}</h3>
      <ol className="mt-4 grid gap-3 sm:gap-4 lg:grid-cols-[2fr_1fr]">
        {c.formation.map((f) => (
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

function Distinctions({ c }: { c: Contenu }) {
  return (
    <section aria-labelledby="t-distinctions" className={`${cadre} py-16 lg:py-24`}>
      <Titre id="t-distinctions">{c.ui.distinctions}</Titre>
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {c.distinctions.map((d, k) => (
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

function Competences({ c }: { c: Contenu }) {
  return (
    <section id="competences" aria-labelledby="t-competences" className={`${cadre} py-16 lg:py-24`}>
      <Titre id="t-competences">{c.ui.competences}</Titre>
      <dl className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {c.competences.map((g) => (
          <div key={g.groupe} data-tilt className="tile p-6">
            <dt className="text-sm text-text-3">{g.groupe}</dt>
            <dd className="mt-4">
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((i) => (
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

function Cap({ c }: { c: Contenu }) {
  const [avant, apres] = c.cap.citation.split(c.cap.motCle);
  return (
    <section aria-labelledby="t-cap" className={`${cadre} py-16 lg:py-24`}>
      <div
        data-depth
        className="tile grid gap-12 p-7 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-16"
      >
        <div>
          <h2 id="t-cap" className="text-sm text-text-3">
            {c.ui.cap}
          </h2>
          <blockquote className="mt-6">
            <p className="display text-[clamp(2.1rem,4.4vw,3.75rem)] leading-none">
              « {avant}
              <span className="text-accent">{c.cap.motCle}</span>
              {apres} »
            </p>
          </blockquote>
        </div>
        <div className="space-y-5 self-end text-[1.0625rem] leading-relaxed text-text-2">
          {c.cap.texte.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <p className="border-t border-line pt-5 text-sm text-text-3">{c.cap.horsCode}</p>
        </div>
      </div>
    </section>
  );
}

/* ——— Contact ——— */

export function Contact({ c }: { c: Contenu }) {
  const actions = [
    { label: "WhatsApp", href: c.profil.whatsappLien, icone: <WhatsAppMark className="size-4" /> },
    { label: "LinkedIn", href: c.profil.linkedin, icone: <LinkedInMark className="size-4" /> },
    { label: "GitHub", href: c.profil.github, icone: <GitHubMark className="size-4" /> },
  ].filter((a) => a.href);

  return (
    <section id="contact" aria-labelledby="t-contact" className={`${cadre} pb-16 pt-16 lg:pt-24`}>
      <div data-depth="fort" className="rounded-[28px] bg-accent p-7 text-accent-ink sm:p-12 lg:p-16">
        <h2 id="t-contact" className="display text-[clamp(3rem,7vw,6rem)] leading-[0.92]">
          {c.ui.contactTitre}
        </h2>
        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-accent-ink">{c.ui.contactTexte}</p>

        <a
          href={`mailto:${c.profil.email}`}
          className="mt-10 inline-flex items-center gap-3 break-all text-[clamp(1.4rem,3.6vw,2.5rem)] font-semibold tracking-tight underline decoration-accent-ink/30 decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-accent-ink"
        >
          <Mail className="size-7 shrink-0 max-sm:hidden" {...trait} />
          {c.profil.email}
        </a>

        <ul className="mt-10 flex flex-wrap gap-3">
          {actions.map((a) => (
            <li key={a.label}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent-ink px-5 font-medium text-text transition-colors hover:bg-tile"
              >
                {a.icone}
                {a.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={c.profil.cv}
              download
              className="inline-flex h-12 items-center gap-2 rounded-xl border-[1.5px] border-accent-ink/40 px-5 font-medium transition-colors hover:border-accent-ink"
            >
              <Download className="size-4" {...trait} />
              {c.ui.cvPdf}
            </a>
          </li>
        </ul>

        <dl className="mt-12 grid gap-4 border-t border-accent-ink/20 pt-6 text-[0.95rem] sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <dt>
              <Phone className="size-4" {...trait} />
              <span className="sr-only">{c.ui.telephoneLabel}</span>
            </dt>
            <dd>
              <a href={`tel:${c.profil.telephoneLien}`} className="tabular-nums hover:underline">
                {c.profil.telephone}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>
              <WhatsAppMark className="size-4" />
              <span className="sr-only">WhatsApp</span>
            </dt>
            <dd>
              <a href={c.profil.whatsappLien} target="_blank" rel="noopener" className="tabular-nums hover:underline">
                {c.profil.whatsapp}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>
              <MapPin className="size-4" {...trait} />
              <span className="sr-only">{c.ui.localisationLabel}</span>
            </dt>
            <dd>{c.profil.localisation}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function PiedDePage({ c }: { c: Contenu }) {
  return (
    <footer
      className={`${cadre} flex flex-col gap-4 pb-10 pt-6 text-sm text-text-3 sm:flex-row sm:items-center sm:justify-between`}
    >
      <p className="flex items-center gap-3">
        <Drapeau />© 2026 {c.profil.prenom} {c.profil.nom}
      </p>
      <div className="flex gap-6">
        <a href={c.profil.codeSource} target="_blank" rel="noopener" className="hover:text-text">
          {c.ui.codeSourceSite}
        </a>
        <a href="#" className="hover:text-text">
          {c.ui.hautDePage}
        </a>
      </div>
    </footer>
  );
}

export function LienEvitement({ c, cible }: { c: Contenu; cible: string }) {
  return (
    <a
      href={cible}
      className="sr-only z-50 rounded-lg bg-accent px-4 py-2 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {c.ui.allerContenu}
    </a>
  );
}

export function Accueil({ c }: { c: Contenu }) {
  return (
    <>
      <LienEvitement c={c} cible="#projets" />
      <Header c={c} />
      <Effets3D />
      <main>
        <Hero c={c} />
        <Projets c={c} />
        <Parcours c={c} />
        <Distinctions c={c} />
        <Competences c={c} />
        <Cap c={c} />
        <Contact c={c} />
      </main>
      <PiedDePage c={c} />
    </>
  );
}
