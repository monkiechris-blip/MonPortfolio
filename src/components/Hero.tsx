"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { etat, horizon, profil } from "@/content/profil";
import { ArrowDown, ArrowRight, ArrowUpRight, Sun } from "./icons";

const DEPART = horizon.findIndex((e) => e.annee === "2026");

export function Bouton({
  href,
  children,
  variante = "plein",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variante?: "plein" | "trait";
  download?: boolean;
}) {
  const style =
    variante === "plein"
      ? "bg-ink text-mirror hover:bg-ground active:bg-dusk"
      : "bg-transparent text-ink hover:bg-sun/70 active:bg-deep/60";
  return (
    <a
      href={href}
      download={download || undefined}
      className={`condensed group inline-flex min-h-12 items-center justify-between gap-8 border-[1.5px] border-ink px-5 text-[0.95rem] font-semibold uppercase transition-colors duration-200 ${style}`}
    >
      {children}
    </a>
  );
}

export function Hero() {
  const [actif, setActif] = useState(DEPART);
  const [x, setX] = useState<number | null>(null);
  const rail = useRef<HTMLOListElement>(null);
  const arrets = useRef<(HTMLButtonElement | null)[]>([]);

  // Le soleil se pose au-dessus de l'arrêt choisi, où qu'il soit dans la grille.
  const mesurer = useCallback(() => {
    const r = rail.current;
    const b = arrets.current[actif];
    if (!r || !b) return;
    const rr = r.getBoundingClientRect();
    const br = b.getBoundingClientRect();
    setX(br.left - rr.left + Math.min(br.width / 2, 72));
  }, [actif]);

  useLayoutEffect(() => {
    mesurer();
    const ro = new ResizeObserver(mesurer);
    if (rail.current) ro.observe(rail.current);
    return () => ro.disconnect();
  }, [mesurer]);

  const etape = horizon[actif];

  const clavier = (e: React.KeyboardEvent, i: number) => {
    const n = horizon.length;
    let j = i;
    if (e.key === "ArrowRight") j = (i + 1) % n;
    else if (e.key === "ArrowLeft") j = (i - 1 + n) % n;
    else if (e.key === "Home") j = 0;
    else if (e.key === "End") j = n - 1;
    else return;
    e.preventDefault();
    setActif(j);
    arrets.current[j]?.focus();
  };

  return (
    <header
      className="hall relative isolate flex min-h-[100svh] flex-col overflow-hidden"
      style={{ "--sx": x === null ? undefined : `${x}px` } as React.CSSProperties}
    >
      {/* Plafond miroir : la ligne d'horizon reflétée, l'arrêt choisi apparaît deux fois. */}
      <div aria-hidden className="ceiling pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-28 md:block">
        <div className="mx-auto grid h-full max-w-[1500px] grid-cols-6 items-end px-6 lg:px-12">
          {horizon.map((e, i) => (
            <div
              key={e.annee}
              className={`display text-[5.5rem] transition-opacity duration-700 ${i === actif ? "opacity-100" : "opacity-40"}`}
            >
              {e.annee}
            </div>
          ))}
        </div>
      </div>

      {/* Le soleil doublé : son reflet pend du plafond et suit la sélection. */}
      {x !== null && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
            <div
              className="transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(${x}px)` }}
            >
              <div className="haze-rise h-[min(13vw,11rem)] w-[min(52vw,48rem)] -translate-x-1/2 overflow-hidden opacity-45 blur-[2px] max-md:h-[20vw] max-md:w-[80vw]">
                <div className="sun-disc aspect-square w-full -translate-y-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      <nav aria-label="Navigation principale" className="relative z-20 mx-auto flex w-full max-w-[1500px] items-center justify-between gap-6 px-6 pt-6 lg:px-12 lg:pt-8">
        <a href="#" className="flex items-baseline gap-3 no-underline">
          <span className="display text-[1.9rem]">{profil.nom}</span>
          <span className="hidden text-sm text-ink-soft sm:inline">{profil.prenom}</span>
        </a>
        <ul className="hidden items-center gap-8 text-[0.95rem] font-medium md:flex">
          {[
            ["Projets", "#projets"],
            ["Parcours", "#parcours"],
            ["Compétences", "#competences"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <li key={h}>
              <a href={h} className="condensed inline-block py-3 uppercase no-underline hover:underline">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profil.cv}
          download
          className="condensed inline-flex min-h-11 items-center gap-3 border-[1.5px] border-ink px-4 text-sm font-semibold uppercase no-underline transition-colors hover:bg-sun"
        >
          CV <ArrowDown />
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] flex-1 grid-cols-1 gap-10 px-6 pb-10 pt-12 lg:grid-cols-[11rem_1fr_22rem] lg:gap-12 lg:px-12 lg:pt-16">
        {/* Rail d'état */}
        <dl className="hidden self-start lg:block">
          <Sun className="mb-6 size-7" />
          {etat.map((e) => (
            <div key={e.label} className="rule border-t py-3.5">
              <dt className="text-xs font-semibold text-ink-soft">{e.label}</dt>
              <dd className="mt-1 text-sm leading-snug">{e.valeur}</dd>
            </div>
          ))}
        </dl>

        <div className="self-center">
          <h1 className="display text-[clamp(4rem,11vw,6rem)]">
            <span className="block">{profil.prenom}</span>
            <span className="block">{profil.nom}</span>
          </h1>
          <p className="display mt-6 max-w-[18ch] text-[clamp(1.6rem,3.2vw,2.4rem)] !leading-[0.95] !font-bold">
            {profil.accroche}
          </p>
          <p className="mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed">{profil.resume}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Bouton href="#projets">
              Voir les projets <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Bouton>
            <Bouton href={profil.cv} variante="trait" download>
              Télécharger le CV <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </Bouton>
          </div>
        </div>

        {/* Tuiles d'observation */}
        <div className="flex flex-col gap-3 self-end">
          <div className="flex gap-4 border-[1.5px] border-ink bg-haze/70 p-4 backdrop-blur-sm" aria-live="polite">
            <div className="relative size-16 shrink-0 overflow-hidden border border-ink/40">
              <Image
                src="/portrait.jpg"
                alt={`Portrait de ${profil.prenom} ${profil.nom}`}
                width={230}
                height={290}
                priority
                className="size-full object-cover object-top grayscale contrast-125 mix-blend-multiply"
              />
              <div aria-hidden className="absolute inset-0 bg-sun mix-blend-multiply" />
            </div>
            <div className="min-w-0">
              <p className="condensed text-sm font-semibold uppercase tabular">
                {etape.annee} · {etape.titre}
              </p>
              <p className="text-xs text-ink-soft">{etape.lieu}</p>
              <p className="mt-2 text-sm leading-snug">{etape.detail}</p>
            </div>
          </div>
          <a
            href="#skillmap"
            className="group flex items-center justify-between gap-4 border-[1.5px] border-ink bg-sun/80 p-4 no-underline transition-colors hover:bg-mirror"
          >
            <span>
              <span className="condensed block text-sm font-semibold uppercase">1er prix · SkillMap</span>
              <span className="block text-xs text-ink-soft">Hackathon des 25 ans de la filière MIAGE</span>
            </span>
            <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* L'horizon : le parcours, arrêt par arrêt. */}
      <div className="relative z-0">
        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="relative">
            {x !== null && (
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 -z-10 transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(${x}px)` }}
              >
                <div className="sun-rise relative" style={{ transform: "translateX(-50%)" }}>
                  <div className="sun-haze haze-rise absolute left-1/2 top-0 size-[min(80vw,62rem)] -translate-x-1/2 -translate-y-1/2" />
                  {/* moitié haute, posée sur l'horizon */}
                  <div className="absolute bottom-0 left-1/2 h-[min(26vw,24rem)] w-[min(52vw,48rem)] -translate-x-1/2 overflow-hidden max-md:h-[40vw] max-md:w-[80vw]">
                    <div className="sun-disc aspect-square w-full rounded-full" />
                  </div>
                  {/* reflet au sol */}
                  <div className="reflection absolute top-0 left-1/2 h-[min(26vw,24rem)] w-[min(52vw,48rem)] -translate-x-1/2 overflow-hidden max-md:h-[40vw] max-md:w-[80vw]">
                    <div className="sun-disc aspect-square w-full rounded-full" />
                  </div>
                </div>
              </div>
            )}
            <ol
              ref={rail}
              aria-label="Parcours, de 2021 à 2027"
              className="grid grid-cols-3 border-t-[1.5px] border-ink md:grid-cols-6"
            >
              {horizon.map((e, i) => {
                const choisi = i === actif;
                return (
                  <li key={e.annee}>
                    <button
                      ref={(el) => {
                        arrets.current[i] = el;
                      }}
                      type="button"
                      aria-pressed={choisi}
                      onClick={() => setActif(i)}
                      onKeyDown={(ev) => clavier(ev, i)}
                      className="group flex w-full cursor-pointer flex-col items-start gap-1 py-4 pr-3 text-left focus-visible:outline-offset-[-2px] md:py-6"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className={`size-2.5 rounded-full border-[1.5px] border-ink transition-colors duration-300 ${choisi ? "bg-ink" : e.cible ? "bg-mirror" : "bg-transparent group-hover:bg-ink/40"}`}
                        />
                        <span className="condensed text-sm font-semibold tabular">{e.annee}</span>
                      </span>
                      <span className={`text-sm leading-tight transition-colors ${choisi ? "text-ink" : "text-ink-soft group-hover:text-ink"}`}>
                        {e.titre}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </header>
  );
}
