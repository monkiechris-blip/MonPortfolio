import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Trophy,
} from "lucide-react";
import { Header } from "@/components/Header";
import { GitHubMark, WhatsAppMark } from "@/components/icons";
import {
  cap,
  competences,
  distinctions,
  enCours,
  etat,
  experiences,
  formation,
  preuves,
  profil,
  projets,
  type Projet,
} from "@/content/profil";

const cadre = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const trait = { strokeWidth: 1.5, "aria-hidden": true } as const;

function EnTete({ id, titre, intro }: { id: string; titre: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
        {titre}
      </h2>
      {intro && <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-2">{intro}</p>}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {items.map((s) => (
        <li key={s} className="mono rounded-md border border-line bg-subtle px-2 py-1 text-xs text-ink-2">
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
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
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

function Hero() {
  return (
    <section aria-labelledby="t-nom" className={`${cadre} pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24`}>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16">
        <div className="rise">
          <h1 id="t-nom" className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {profil.prenom} {profil.nom}
          </h1>
          <p className="mt-5 text-xl font-medium tracking-tight text-ink-2 sm:text-2xl">
            Développeur full-stack. {profil.accroche}.
          </p>
          <p className="mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-2">{profil.resume}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projets"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-accent px-5 text-[0.95rem] font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Voir les projets
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" {...trait} />
            </a>
            <a
              href={profil.cv}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] border border-line-strong bg-surface px-5 text-[0.95rem] font-medium transition-colors hover:border-ink-3"
            >
              <Download className="size-4" {...trait} />
              Télécharger le CV
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-8">
            {preuves.map((p) => (
              <div key={p.valeur}>
                <dt className="text-lg font-semibold tracking-tight sm:text-xl">{p.valeur}</dt>
                <dd className="mt-1 text-sm leading-snug text-ink-3">{p.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Carte d'identité */}
        <aside
          aria-label="Profil"
          className="rise-2 rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgb(12_12_14/0.04),0_8px_24px_-12px_rgb(12_12_14/0.08)]"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/portrait.jpg"
              alt={`Portrait de ${profil.prenom} ${profil.nom}`}
              width={230}
              height={290}
              priority
              className="size-16 rounded-full object-cover object-[50%_20%] ring-1 ring-line"
            />
            <div>
              <p className="font-semibold tracking-tight">
                {profil.prenom} {profil.nom}
              </p>
              <p className="mt-0.5 flex items-center gap-2 text-sm text-ink-3">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                Candidat Master, rentrée 2027
              </p>
            </div>
          </div>

          <dl className="mt-6 divide-y divide-line border-t border-line">
            {etat.map((e) => (
              <div key={e.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm">
                <dt className="text-ink-3">{e.label}</dt>
                <dd className="text-ink">{e.valeur}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-2 grid grid-cols-3 gap-2 border-t border-line pt-5">
            {[
              { label: "E-mail", href: `mailto:${profil.email}`, icone: <Mail className="size-4" {...trait} /> },
              { label: "WhatsApp", href: profil.whatsappLien, icone: <WhatsAppMark className="size-4" /> },
              { label: "GitHub", href: profil.github, icone: <GitHubMark className="size-4" /> },
            ].map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener" : undefined}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-[10px] border border-line px-1 text-[0.8125rem] text-ink-2 sm:gap-2 sm:text-sm transition-colors hover:border-line-strong hover:bg-subtle hover:text-ink"
                >
                  {c.icone}
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Projets() {
  const [phare, ...autres] = projets;
  const lignes = (p: Projet) =>
    [
      ["Le besoin", p.besoin],
      ["Mon rôle", p.role],
      ["Le résultat", p.resultat],
    ] as const;

  return (
    <section id="projets" aria-labelledby="t-projets" className="border-t border-line py-20 sm:py-28">
      <div className={cadre}>
        <EnTete
          id="t-projets"
          titre="Projets"
          intro="Trois plateformes livrées et deux projets en cours. Pour chacun : le besoin de départ, ce que j’ai fait, et ce qui en est sorti."
        />

        <article
          id={phare.id}
          aria-labelledby={`t-${phare.id}`}
          className="mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-10"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
            <Trophy className="size-4" {...trait} />
            {phare.prix} · {phare.cadre}
          </p>
          <h3 id={`t-${phare.id}`} className="mt-5 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
            {phare.nom}
          </h3>
          <p className="mt-2 text-lg text-ink-2">{phare.sousTitre}</p>

          <dl className="mt-8 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
            {lignes(phare).map(([t, d]) => (
              <div key={t}>
                <dt className="text-sm font-medium">{t}</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{d}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Stack items={phare.stack} />
            <LiensCode p={phare} />
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {autres.map((p) => (
            <article
              key={p.id}
              id={p.id}
              aria-labelledby={`t-${p.id}`}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8"
            >
              <p className="text-sm text-ink-3">{p.cadre}</p>
              <h3 id={`t-${p.id}`} className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
                {p.nom}
              </h3>
              <p className="mt-1 text-ink-2">{p.sousTitre}</p>

              <dl className="mt-6 flex-1 space-y-5 border-t border-line pt-6">
                {lignes(p).map(([t, d]) => (
                  <div key={t}>
                    <dt className="text-sm font-medium">{t}</dt>
                    <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-2">{d}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 space-y-4 border-t border-line pt-5">
                <Stack items={p.stack} />
                <LiensCode p={p} />
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-16 text-lg font-semibold tracking-tight">En cours</h3>
        <ul className="mt-4 grid gap-4 lg:grid-cols-2">
          {enCours.map((e) => (
            <li key={e.nom} className="rounded-2xl border border-dashed border-line-strong p-6">
              <p className="flex items-center gap-2 font-medium">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                {e.nom}
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{e.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Chronologie({ items }: { items: { periode: string; titre: string; sous: string; contenu: React.ReactNode }[] }) {
  return (
    <ol className="relative border-l border-line">
      {items.map((x) => (
        <li key={x.titre} className="relative pb-10 pl-8 last:pb-0">
          <span aria-hidden className="absolute -left-[5px] top-2 size-[9px] rounded-full border border-line-strong bg-surface" />
          <p className="mono text-xs text-ink-3">{x.periode}</p>
          <p className="mt-1.5 text-lg font-semibold tracking-tight">{x.titre}</p>
          <p className="text-[0.95rem] text-ink-2">{x.sous}</p>
          <div className="mt-3">{x.contenu}</div>
        </li>
      ))}
    </ol>
  );
}

function Parcours() {
  return (
    <section id="parcours" aria-labelledby="t-parcours" className="border-t border-line bg-surface py-20 sm:py-28">
      <div className={`${cadre} grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <EnTete
            id="t-parcours"
            titre="Parcours"
            intro="Trois stages, du terrain au développement. La maintenance m’a appris comment un logiciel est installé, utilisé et dépanné ; IMAKO m’a confié un logiciel entier."
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-ink-3">Expériences</h3>
          <div className="mt-6">
            <Chronologie
              items={experiences.map((x) => ({
                periode: x.periode,
                titre: x.entreprise,
                sous: x.poste,
                contenu: (
                  <>
                    <p className="text-sm text-ink-3">{x.contexte}</p>
                    <ul className="mt-3 space-y-2">
                      {x.points.map((pt) => (
                        <li key={pt} className="flex max-w-[62ch] gap-3 text-[0.95rem] leading-relaxed text-ink-2">
                          <span aria-hidden className="mt-[0.7em] h-px w-2.5 shrink-0 bg-line-strong" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </>
                ),
              }))}
            />
          </div>

          <h3 className="mt-16 text-sm font-medium text-ink-3">Formation</h3>
          <div className="mt-6">
            <Chronologie
              items={formation.map((f) => ({
                periode: f.periode,
                titre: f.titre,
                sous: f.lieu,
                contenu: <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-ink-2">{f.detail}</p>,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Distinctions() {
  return (
    <section aria-labelledby="t-distinctions" className="border-t border-line py-20 sm:py-24">
      <div className={cadre}>
        <EnTete id="t-distinctions" titre="Distinctions" />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {distinctions.map((d) => (
            <li key={d.titre} className="bg-surface p-6">
              <p className="text-xl font-semibold tracking-tight">{d.titre}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{d.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Competences() {
  return (
    <section id="competences" aria-labelledby="t-competences" className="border-t border-line py-20 sm:py-28">
      <div className={cadre}>
        <EnTete id="t-competences" titre="Compétences" />
        <dl className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {competences.map((c) => (
            <div key={c.groupe}>
              <dt className="text-sm font-medium">{c.groupe}</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-1.5">
                  {c.items.map((i) => (
                    <li key={i} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-ink-2">
                      {i}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Cap() {
  return (
    <section aria-labelledby="t-cap" className="border-t border-line bg-surface py-20 sm:py-28">
      <div className={cadre}>
        <h2 id="t-cap" className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
          Mon cap
        </h2>
        <blockquote className="mt-8 max-w-4xl">
          <p className="text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-[1.25] tracking-[-0.02em]">
            « {cap.citation} »
          </p>
        </blockquote>
        <div className="mt-10 grid max-w-4xl gap-6 text-[1.0625rem] leading-relaxed text-ink-2 md:grid-cols-2 md:gap-10">
          {cap.texte.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-3">{cap.horsCode}</p>
      </div>
    </section>
  );
}

function Contact() {
  const actions = [
    { label: "Écrire un e-mail", href: `mailto:${profil.email}`, icone: <Mail className="size-4" {...trait} />, principal: true },
    { label: "WhatsApp", href: profil.whatsappLien, icone: <WhatsAppMark className="size-4" /> },
    { label: "GitHub", href: profil.github, icone: <GitHubMark className="size-4" /> },
    ...(profil.linkedin
      ? [{ label: "LinkedIn", href: profil.linkedin, icone: <ArrowUpRight className="size-4" {...trait} /> }]
      : []),
  ];

  return (
    <section id="contact" aria-labelledby="t-contact" className="border-t border-line py-20 sm:py-28">
      <div className={cadre}>
        <div className="rounded-3xl bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
          <h2 id="t-contact" className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
            Me contacter
          </h2>
          <p className="mt-4 max-w-[56ch] text-[1.0625rem] leading-relaxed text-white/75">
            Pour une candidature en master, un stage ou un projet, je réponds par e-mail et sur WhatsApp.
          </p>

          <a
            href={`mailto:${profil.email}`}
            className="mt-8 inline-block break-all text-[clamp(1.4rem,3.6vw,2.25rem)] font-medium tracking-tight underline decoration-white/30 decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-white"
          >
            {profil.email}
          </a>

          <ul className="mt-8 flex flex-wrap gap-3">
            {actions.map((a) => (
              <li key={a.label}>
                <a
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel={a.href.startsWith("http") ? "noopener" : undefined}
                  className={`inline-flex h-11 items-center gap-2 rounded-[10px] px-4 text-[0.95rem] font-medium transition-colors ${
                    "principal" in a && a.principal
                      ? "bg-white text-ink hover:bg-white/90"
                      : "border border-white/20 text-white hover:border-white/50 hover:bg-white/5"
                  }`}
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
                className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-white/20 px-4 text-[0.95rem] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                <Download className="size-4" {...trait} />
                CV (PDF)
              </a>
            </li>
          </ul>

          <dl className="mt-10 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/75 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <dt>
                <Phone className="size-4" {...trait} />
                <span className="sr-only">Téléphone</span>
              </dt>
              <dd>
                <a href={`tel:${profil.telephoneLien}`} className="tabular-nums hover:text-white">
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
                <a href={profil.whatsappLien} target="_blank" rel="noopener" className="tabular-nums hover:text-white">
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
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <a
        href="#projets"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>
      <Header />
      <main>
        <Hero />
        <Projets />
        <Parcours />
        <Distinctions />
        <Competences />
        <Cap />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className={`${cadre} flex flex-col gap-3 py-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between`}>
          <p>
            © 2026 {profil.prenom} {profil.nom}
          </p>
          <div className="flex gap-6">
            <a href={profil.codeSource} target="_blank" rel="noopener" className="hover:text-ink">
              Code source du site
            </a>
            <a href="#" className="hover:text-ink">
              Haut de page
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
