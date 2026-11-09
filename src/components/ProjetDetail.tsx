import Image from "next/image";
import { ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import { Contact, LiensProjet, LienEvitement, PiedDePage, Stack, cadre, cheminProjet, trait } from "@/components/Accueil";
import { Effets3D } from "@/components/Effets3D";
import { Header } from "@/components/Header";
import { MyMiagePreview } from "@/components/Previews";
import { SkillMapPreview } from "@/components/SkillMapPreview";
import type { Contenu, Projet } from "@/content/types";

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section data-depth className="tile p-6 sm:p-10">
      <h2 className="display text-3xl sm:text-4xl">{titre}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function ProjetDetail({ c, p }: { c: Contenu; p: Projet }) {
  const e = p.etude!;
  const i = c.projets.findIndex((x) => x.id === p.id);
  const suivant = c.projets[(i + 1) % c.projets.length];
  const accueil = c.langue === "fr" ? "/" : "/en";

  return (
    <>
      <LienEvitement c={c} cible="#contenu" />
      <Header c={c} />
      <Effets3D />
      <main id="contenu" className={`${cadre} pb-8 pt-8 lg:pt-12`}>
        <a
          href={`${accueil === "/" ? "" : accueil}/#projets`}
          className="inline-flex items-center gap-2 text-sm text-text-3 transition-colors hover:text-text"
        >
          <ArrowLeft className="size-4" {...trait} />
          {c.ui.retourProjets}
        </a>

        <header className="mt-8 grid gap-8 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-end">
          <div>
            {p.prix && (
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-[#9EC1FF]">
                <Trophy className="size-4" {...trait} />
                {p.prix} · {p.cadre}
              </p>
            )}
            {!p.prix && <p className="text-sm text-text-3">{p.cadre}</p>}
            <h1 className="display mt-5 text-[clamp(3.5rem,9vw,8rem)] leading-[0.88]">{p.nom}</h1>
            <p className="mt-4 text-xl text-text-2">{p.sousTitre}</p>
          </div>
          <div className="space-y-5 lg:pb-3">
            <Stack items={p.stack} />
            <LiensProjet p={p} c={c} etude={false} />
          </div>
        </header>

        {/* Visuel principal */}
        <div data-depth="fort" className="mt-12 overflow-hidden rounded-[22px] border border-line bg-tile-2">
          {p.captures?.length ? (
            <div className="relative aspect-[16/10]">
              <Image
                src={p.captures[0].src}
                alt={p.captures[0].alt}
                fill
                priority
                sizes="(min-width: 1400px) 1300px, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="mx-auto max-w-3xl p-6 sm:p-12">
              {p.id === "skillmap" ? (
                <>
                  <p className="display mb-4 text-3xl" aria-hidden>
                    {c.ui.trouverPrestataire}
                  </p>
                  <SkillMapPreview lignes={3} grand langue={c.langue} />
                  <p className="mt-4 text-xs text-text-3">{c.ui.apercuSkillmap}</p>
                </>
              ) : (
                <>
                  <MyMiagePreview langue={c.langue} />
                  <p className="mt-3 text-xs text-text-3">{c.ui.apercuIllustratif}</p>
                </>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 grid gap-3 sm:gap-4 lg:grid-cols-3">
          {(
            [
              [c.ui.besoin, p.besoin],
              [c.ui.role, p.role],
              [c.ui.resultat, p.resultat],
            ] as const
          ).map(([t, d]) => (
            <div key={t} data-tilt className="tile p-6 sm:p-8">
              <p className="text-sm text-text-3">{t}</p>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-text-2">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-3 sm:gap-4 lg:grid-cols-2">
          <Bloc titre={c.ui.contexte}>
            <p className="text-[1.0625rem] leading-relaxed text-text-2">{e.contexte}</p>
          </Bloc>
          <Bloc titre={c.ui.fonctionnalites}>
            <ul className="space-y-3">
              {e.fonctionnalites.map((f) => (
                <li key={f} className="flex gap-3 text-[1.0625rem] leading-relaxed text-text-2">
                  <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Bloc>
        </div>

        <div className="mt-3 sm:mt-4">
          <Bloc titre={c.ui.architecture}>
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {e.architecture.map((a) => (
                <div key={a.couche} className="rounded-2xl border border-line-2 bg-tile-2 p-5">
                  <dt className="mono text-xs text-[#9EC1FF]">{a.couche}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-text-2">{a.detail}</dd>
                </div>
              ))}
            </dl>
          </Bloc>
        </div>

        {p.captures && p.captures.length > 1 && (
          <section className="mt-16">
            <h2 className="display text-3xl sm:text-4xl">{c.ui.captures}</h2>
            <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-2">
              {p.captures.slice(1).map((cap) => (
                <figure key={cap.src} data-depth>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-line">
                    <Image src={cap.src} alt={cap.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top" />
                  </div>
                  <figcaption className="mt-3 text-sm text-text-3">{cap.legende}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 grid gap-3 sm:gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Bloc titre={c.ui.defis}>
            <ul className="space-y-3">
              {e.defis.map((d) => (
                <li key={d} className="flex gap-3 text-[1.0625rem] leading-relaxed text-text-2">
                  <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-line-2" />
                  {d}
                </li>
              ))}
            </ul>
          </Bloc>
          <section data-depth className="rounded-[22px] bg-accent p-6 text-accent-ink sm:p-10">
            <h2 className="display text-3xl sm:text-4xl">{c.ui.retenu}</h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed">{e.retenu}</p>
          </section>
        </div>

        <a
          href={cheminProjet(c, suivant.id)}
          className="tile group mt-16 flex items-center justify-between gap-6 p-6 sm:p-10"
        >
          <span>
            <span className="block text-sm text-text-3">{c.ui.projetSuivant}</span>
            <span className="display mt-2 block text-4xl sm:text-5xl">{suivant.nom}</span>
          </span>
          <ArrowRight className="size-8 shrink-0 transition-transform group-hover:translate-x-1" {...trait} />
        </a>
      </main>
      <Contact c={c} />
      <PiedDePage c={c} />
    </>
  );
}
