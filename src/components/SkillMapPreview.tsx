"use client";

import { Search, Star } from "lucide-react";
import { useEffect, useState } from "react";

// Aperçu illustratif : la recherche se tape, puis les résultats se filtrent.
const scenes = [
  {
    requete: "Plombier qualifié · Cocody",
    filtres: ["Plomberie", "5 ans et +", "Note 4,5+"],
    resultats: [
      { init: "KA", nom: "Koffi A.", meta: "Plombier · 8 ans", note: "4,8", teinte: "#2B3A55" },
      { init: "MT", nom: "Mariam T.", meta: "Plombière · 5 ans", note: "4,7", teinte: "#3E2F4F" },
      { init: "JB", nom: "Jean B.", meta: "Plombier · 12 ans", note: "4,6", teinte: "#24453B" },
    ],
  },
  {
    requete: "Électricien · Riviera",
    filtres: ["Électricité", "Disponible", "Note 4,5+"],
    resultats: [
      { init: "AK", nom: "Awa K.", meta: "Électricienne · 6 ans", note: "4,9", teinte: "#24453B" },
      { init: "YD", nom: "Yao D.", meta: "Électricien · 11 ans", note: "4,7", teinte: "#2B3A55" },
      { init: "SB", nom: "Sékou B.", meta: "Électricien · 4 ans", note: "4,6", teinte: "#4A3A24" },
    ],
  },
  {
    requete: "Développeur web · Plateau",
    filtres: ["Numérique", "3 ans et +", "Freelance"],
    resultats: [
      { init: "FN", nom: "Fatou N.", meta: "Développeuse React · 4 ans", note: "4,9", teinte: "#3E2F4F" },
      { init: "IK", nom: "Ibrahim K.", meta: "Développeur PHP · 6 ans", note: "4,6", teinte: "#2B3A55" },
      { init: "CE", nom: "Claire E.", meta: "Intégratrice · 3 ans", note: "4,5", teinte: "#24453B" },
    ],
  },
];

export function SkillMapPreview({ lignes = 2, grand = false }: { lignes?: number; grand?: boolean }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(scenes[0].requete.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setTimeout>;
    let scene = 0;
    let c = scenes[0].requete.length;
    const tape = () => {
      const cible = scenes[scene].requete.length;
      if (c < cible) {
        c += 1;
        setN(c);
        timer = setTimeout(tape, 45);
      } else {
        timer = setTimeout(suivante, 3200);
      }
    };
    const suivante = () => {
      scene = (scene + 1) % scenes.length;
      c = 0;
      setI(scene);
      setN(0);
      timer = setTimeout(tape, 300);
    };
    timer = setTimeout(suivante, 3200);
    return () => clearTimeout(timer);
  }, []);

  const s = scenes[i];
  const pret = n >= s.requete.length;

  return (
    <div aria-hidden className="select-none">
      <div className={`flex items-center gap-2.5 rounded-xl border border-line-2 bg-bg px-3.5 ${grand ? "py-3.5 text-[0.95rem]" : "py-3 text-sm"} text-text-2`}>
        <Search className="size-4 shrink-0 text-text-3" strokeWidth={1.5} />
        <span className="truncate">
          {s.requete.slice(0, n)}
          <span className="caret ml-px inline-block h-[1.05em] w-px translate-y-[0.15em] bg-accent" />
        </span>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {s.filtres.map((f, k) => (
          <span
            key={f}
            className={`rounded-full border px-2.5 py-1 text-xs ${
              k === 0 ? "border-accent/40 bg-accent/10 text-[#9EC1FF]" : "border-line-2 text-text-3"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
      <ul className="mt-3 space-y-2">
        {s.resultats.slice(0, lignes).map((r, k) => (
          <li
            key={r.nom}
            className="flex items-center gap-3 rounded-xl bg-tile-2 p-2.5 transition-[opacity,transform] duration-500"
            style={{
              opacity: pret ? 1 : 0.25,
              transform: pret ? "none" : "translateY(4px)",
              transitionDelay: pret ? `${k * 90}ms` : "0ms",
            }}
          >
            <span
              className="grid size-9 shrink-0 place-items-center rounded-full text-[0.8rem] font-semibold"
              style={{ background: r.teinte }}
            >
              {r.init}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-text">{r.nom}</span>
              <span className="flex items-center gap-1 truncate text-xs text-text-3">
                {r.meta} ·
                <Star className="size-3 fill-current" strokeWidth={0} />
                {r.note}
              </span>
            </span>
            <span className="ml-auto rounded-lg bg-text px-2.5 py-1.5 text-xs font-semibold text-bg">Contacter</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
