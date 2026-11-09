import { Bouton, Hero } from "@/components/Hero";
import { ArrowDown, ArrowUpRight } from "@/components/icons";
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

const cadre = "mx-auto w-full max-w-[1500px] px-6 lg:px-12";

function Structure({ p }: { p: Projet }) {
  const lignes = [
    ["Le besoin", p.besoin],
    ["Mon rôle", p.role],
    ["Le résultat", p.resultat],
  ];
  return (
    <dl>
      {lignes.map(([t, d]) => (
        <div key={t} className="rule grid gap-1 border-t py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <dt className="condensed text-sm font-semibold uppercase">{t}</dt>
          <dd className="max-w-[62ch] leading-relaxed">{d}</dd>
        </div>
      ))}
      <div className="rule grid gap-1 border-t py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
        <dt className="condensed text-sm font-semibold uppercase">Stack</dt>
        <dd>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 font-medium">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </dd>
      </div>
      {p.liens && (
        <div className="rule grid gap-1 border-t py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <dt className="condensed text-sm font-semibold uppercase">Code</dt>
          <dd>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {p.liens.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-center gap-1.5 py-1 font-medium underline decoration-1 underline-offset-4 hover:decoration-2"
                  >
                    {l.label}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  );
}

function Projets() {
  const [phare, ...autres] = projets;
  return (
    <section id="projets" aria-labelledby="t-projets" className="pt-28 lg:pt-40">
      <div className={`${cadre} grid gap-6 lg:grid-cols-[1fr_minmax(0,32rem)] lg:items-end`}>
        <h2 id="t-projets" className="display text-[clamp(3.5rem,9vw,6rem)]">
          Projets
        </h2>
        <p className="max-w-[48ch] text-[1.05rem] leading-relaxed text-ink-soft lg:pb-2">
          Trois plateformes livrées, deux en cours. Pour chacune, la structure est visible : le
          besoin de départ, ce que j’ai fait, ce qui en est sorti.
        </p>
      </div>

      {/* Le projet phare, en pleine lumière. */}
      <article
        id={phare.id}
        aria-labelledby={`t-${phare.id}`}
        className="mt-14 border-y-[1.5px] border-ink bg-sun lg:mt-20"
      >
        <div className={`${cadre} grid gap-10 py-14 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-20`}>
          <div className="flex flex-col gap-6">
            <div
              aria-label={`${phare.prix}, ${phare.cadre}`}
              role="img"
              className="sun-disc grid size-28 place-items-center rounded-full border-[1.5px] border-ink lg:size-32"
            >
              <span aria-hidden className="display text-center text-[1.7rem]">
                {phare.prix}
              </span>
            </div>
            <div>
              <h3 id={`t-${phare.id}`} className="display text-[clamp(4rem,10vw,6rem)]">
                {phare.nom}
              </h3>
              <p className="mt-3 text-lg font-medium">{phare.sousTitre}</p>
              <p className="text-ink-soft">{phare.cadre}</p>
            </div>
          </div>
          <Structure p={phare} />
        </div>
      </article>

      <div className={cadre}>
        {autres.map((p) => (
          <article
            key={p.id}
            id={p.id}
            aria-labelledby={`t-${p.id}`}
            className="rule grid gap-8 border-b py-16 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-20"
          >
            <div>
              <h3 id={`t-${p.id}`} className="display text-[clamp(3rem,7vw,4.5rem)]">
                {p.nom}
              </h3>
              <p className="mt-3 text-lg font-medium">{p.sousTitre}</p>
              <p className="text-ink-soft">{p.cadre}</p>
            </div>
            <Structure p={p} />
          </article>
        ))}

        <div className="grid gap-8 py-16 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-20">
          <h3 className="display text-[clamp(2.4rem,5vw,3.2rem)]">En cours</h3>
          <ul>
            {enCours.map((e) => (
              <li key={e.nom} className="rule grid gap-1 border-t py-5 last:border-b sm:grid-cols-[13rem_1fr] sm:gap-6">
                <p className="condensed font-semibold uppercase">{e.nom}</p>
                <p className="max-w-[62ch] leading-relaxed">{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Parcours() {
  return (
    <section id="parcours" aria-labelledby="t-parcours" className="border-y-[1.5px] border-ink bg-deep py-24 lg:py-32">
      <div className={`${cadre} grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-16`}>
        <div className="lg:sticky lg:top-10 lg:self-start">
          <h2 id="t-parcours" className="display text-[clamp(3.5rem,9vw,6rem)]">
            Parcours
          </h2>
          <p className="mt-6 max-w-[38ch] leading-relaxed">
            Trois stages, du terrain au développement. La maintenance m’a appris comment un logiciel
            est installé, utilisé et dépanné ; IMAKO m’a confié un logiciel entier.
          </p>
        </div>

        <div>
          <h3 className="condensed text-sm font-semibold uppercase">Expériences</h3>
          <ol className="mt-4">
            {experiences.map((x) => (
              <li key={x.entreprise} className="rule grid gap-2 border-t py-7 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <p className="condensed font-semibold tabular">{x.periode}</p>
                <div>
                  <p className="text-xl font-semibold leading-snug">
                    {x.entreprise}
                    <span className="font-normal"> · {x.poste}</span>
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{x.contexte}</p>
                  <ul className="mt-4 space-y-2">
                    {x.points.map((pt) => (
                      <li key={pt} className="flex max-w-[64ch] gap-3 leading-relaxed">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-ink" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="condensed mt-14 text-sm font-semibold uppercase">Formation</h3>
          <ol className="mt-4">
            {formation.map((f) => (
              <li key={f.titre} className="rule grid gap-2 border-t py-7 last:border-b sm:grid-cols-[9rem_1fr] sm:gap-6">
                <p className="condensed font-semibold tabular">{f.periode}</p>
                <div>
                  <p className="text-xl font-semibold leading-snug">{f.titre}</p>
                  <p className="mt-1 text-sm text-ink-soft">{f.lieu}</p>
                  <p className="mt-3 max-w-[64ch] leading-relaxed">{f.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Distinctions() {
  return (
    <section aria-labelledby="t-distinctions" className="bg-ground py-24 text-sun lg:py-32">
      <div className={cadre}>
        <h2 id="t-distinctions" className="display text-[clamp(3.5rem,9vw,6rem)] text-mirror">
          Distinctions
        </h2>
        <ul className="mt-12">
          {distinctions.map((d) => (
            <li
              key={d.titre}
              className="grid items-baseline gap-2 border-t border-sun/35 py-6 last:border-b md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10"
            >
              <p className="display text-[clamp(2.6rem,6vw,4.5rem)] text-mirror">{d.titre}</p>
              <p className="text-lg text-mirror">{d.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Competences() {
  return (
    <section id="competences" aria-labelledby="t-competences" className="py-24 lg:py-32">
      <div className={cadre}>
        <h2 id="t-competences" className="display text-[clamp(3.5rem,9vw,6rem)]">
          Compétences
        </h2>
        <dl className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {competences.map((c) => (
            <div key={c.groupe} className="rule border-t py-6">
              <dt className="condensed text-sm font-semibold uppercase">{c.groupe}</dt>
              <dd>
                <ul className="mt-3 space-y-1.5 text-[1.05rem]">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
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
    <section aria-labelledby="t-cap" className="relative isolate overflow-hidden border-t-[1.5px] border-ink bg-sun py-24 lg:py-32">
      {/* Le même soleil, plus bas sur l'horizon de la salle. */}
      <div aria-hidden className="absolute -bottom-px right-[8%] -z-10 h-[min(22vw,18rem)] w-[min(44vw,36rem)] overflow-hidden max-lg:hidden">
        <div className="sun-disc aspect-square w-full rounded-full opacity-90" />
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 border-t-[1.5px] border-ink/60 max-lg:hidden" />
      <div className={`${cadre} grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20`}>
        <div>
          <h2 id="t-cap" className="sr-only">
            Mon cap
          </h2>
          <blockquote>
            <p className="display text-[clamp(2.6rem,5.6vw,4.6rem)] !leading-[0.96]">
              « {cap.citation} »
            </p>
          </blockquote>
        </div>
        <div className="space-y-5 self-start text-[1.05rem] leading-relaxed lg:pb-40">
          {cap.texte.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <p className="rule border-t pt-5 text-ink-soft">{cap.horsCode}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const liens = [
    profil.github && { label: "GitHub", href: profil.github },
    profil.linkedin && { label: "LinkedIn", href: profil.linkedin },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer id="contact" aria-labelledby="t-contact" className="relative isolate overflow-hidden border-t-[1.5px] border-ink">
      <div className={`${cadre} relative z-10 pb-16 pt-24 lg:pt-32`}>
        <h2 id="t-contact" className="display text-[clamp(4rem,12vw,6rem)]">
          Écrivez-moi
        </h2>
        <p className="mt-6 max-w-[52ch] text-[1.05rem] leading-relaxed">
          Pour une candidature en master, un stage ou un projet : écrivez-moi par e-mail ou sur
          WhatsApp. Le CV complet est à télécharger ci-dessous.
        </p>

        <a
          href={`mailto:${profil.email}`}
          className="condensed group mt-10 inline-flex items-center gap-3 break-all text-[clamp(1.6rem,4.4vw,3rem)] font-bold underline decoration-[1.5px] hover:decoration-[3px]"
        >
          {profil.email}
          <ArrowUpRight className="size-7 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>

        <dl className="mt-12 grid max-w-3xl gap-x-10 sm:grid-cols-2">
          <div className="rule border-t py-4">
            <dt className="text-xs font-semibold text-ink-soft">Téléphone</dt>
            <dd className="mt-1">
              <a href={`tel:${profil.telephoneLien}`} className="tabular inline-block py-2 hover:underline">
                {profil.telephone}
              </a>
            </dd>
          </div>
          <div className="rule border-t py-4">
            <dt className="text-xs font-semibold text-ink-soft">WhatsApp</dt>
            <dd className="mt-1">
              <a
                href={profil.whatsappLien}
                target="_blank"
                rel="noopener"
                className="group tabular inline-flex items-center gap-1.5 py-2 hover:underline"
              >
                Écrire sur WhatsApp · {profil.whatsapp}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </dd>
          </div>
          <div className="rule border-t py-4">
            <dt className="text-xs font-semibold text-ink-soft">Localisation</dt>
            <dd className="mt-1 py-2">{profil.localisation}</dd>
          </div>
          {liens.map((l) => (
            <div key={l.label} className="rule border-t py-4">
              <dt className="text-xs font-semibold text-ink-soft">{l.label}</dt>
              <dd className="mt-1">
                <a href={l.href} className="inline-block py-2 hover:underline" rel="me noopener" target="_blank">
                  {l.href.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <Bouton href={profil.cv} download>
            Télécharger le CV (PDF) <ArrowDown className="size-4" />
          </Bouton>
        </div>
      </div>

      {/* Terminus : le soleil se couche sur l'horizon. */}
      <div aria-hidden className="relative h-[min(26vw,18rem)]">
        <div className="absolute bottom-0 left-1/2 h-full w-[min(52vw,36rem)] -translate-x-1/2 overflow-hidden">
          <div className="sun-disc aspect-square w-full rounded-full" />
        </div>
        <div className="sun-haze absolute bottom-0 left-1/2 size-[min(80vw,52rem)] -translate-x-1/2 translate-y-1/2 -z-10" />
      </div>
      <div className="relative z-10 border-t-[1.5px] border-ink">
        <div className={`${cadre} flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between`}>
          <p>
            © 2026 {profil.prenom} {profil.nom} · Abidjan
          </p>
          <div className="flex gap-6">
            <a href={profil.codeSource} target="_blank" rel="noopener" className="inline-block py-2 hover:underline">
              Code source du site
            </a>
            <a href="#" className="condensed inline-block py-2 font-semibold uppercase hover:underline">
              Haut de page
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <a
        href="#projets"
        className="sr-only z-50 bg-ink px-4 py-2 text-sun focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>
      <Hero />
      <main>
        <Projets />
        <Parcours />
        <Distinctions />
        <Competences />
        <Cap />
      </main>
      <Contact />
    </>
  );
}
