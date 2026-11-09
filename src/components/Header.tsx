"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Contenu } from "@/content/types";

export function Header({ c }: { c: Contenu }) {
  const [defile, setDefile] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const racine = c.langue === "fr" ? "/" : "/en";
  const lien = (ancre: string) => `${racine === "/" ? "" : racine}/${ancre}`;

  useEffect(() => {
    const maj = () => setDefile(window.scrollY > 8);
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    return () => window.removeEventListener("scroll", maj);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-bg/80 backdrop-blur-md transition-colors duration-300 ${
        defile || ouvert ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href={racine} className="text-[0.95rem] font-semibold tracking-tight">
          Chris-Orhé <span className="text-text-3">MONKIÉ</span>
        </a>

        <nav aria-label="Navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {c.ui.nav.map(([l, h]) => (
              <li key={h}>
                <a
                  href={lien(h)}
                  className="rounded-lg px-3 py-2 text-sm text-text-3 transition-colors hover:bg-tile hover:text-text"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={c.ui.autreLangue.href}
            hrefLang={c.langue === "fr" ? "en" : "fr"}
            aria-label={c.ui.autreLangue.label}
            className="inline-flex h-9 items-center rounded-[10px] px-3 text-sm font-medium text-text-3 transition-colors hover:bg-tile hover:text-text"
          >
            {c.ui.autreLangue.court}
          </a>
          <a
            href={c.profil.cv}
            download
            className="inline-flex h-9 items-center gap-2 rounded-[10px] border border-line-2 bg-tile px-3.5 text-sm font-medium transition-colors hover:border-text-3"
          >
            <Download className="size-4" strokeWidth={1.5} aria-hidden />
            {c.ui.cvCourt}
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-[10px] text-text-2 hover:bg-tile md:hidden"
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            aria-label={ouvert ? c.ui.menuFermer : c.ui.menuOuvrir}
            onClick={() => setOuvert((o) => !o)}
          >
            {ouvert ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {ouvert && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-[1400px] px-5 py-2">
            {c.ui.nav.map(([l, h]) => (
              <li key={h}>
                <a
                  href={lien(h)}
                  onClick={() => setOuvert(false)}
                  className="block rounded-lg px-2 py-3 text-[0.95rem] text-text-2 hover:bg-tile hover:text-text"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
