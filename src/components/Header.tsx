"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profil } from "@/content/profil";

const liens = [
  ["Projets", "#projets"],
  ["Parcours", "#parcours"],
  ["Compétences", "#competences"],
  ["Contact", "#contact"],
];

export function Header() {
  const [defile, setDefile] = useState(false);
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    const maj = () => setDefile(window.scrollY > 8);
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    return () => window.removeEventListener("scroll", maj);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-bg/85 backdrop-blur-md transition-colors duration-300 ${
        defile || ouvert ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#" className="text-[0.95rem] font-semibold tracking-tight">
          Chris-Orhé <span className="text-ink-3">MONKIÉ</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {liens.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  className="rounded-lg px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-subtle hover:text-ink"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profil.cv}
            download
            className="inline-flex h-9 items-center gap-2 rounded-[10px] border border-line-strong bg-surface px-3.5 text-sm font-medium transition-colors hover:border-ink-3"
          >
            <Download className="size-4" strokeWidth={1.5} aria-hidden />
            CV
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-[10px] text-ink-2 hover:bg-subtle md:hidden"
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOuvert((o) => !o)}
          >
            {ouvert ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {ouvert && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {liens.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={() => setOuvert(false)}
                  className="block rounded-lg px-2 py-3 text-[0.95rem] text-ink-2 hover:bg-subtle hover:text-ink"
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
