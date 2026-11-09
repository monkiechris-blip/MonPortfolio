// Aperçus illustratifs dessinés en code (pas des captures réelles).

export function MedMapPreview() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden>
      <rect width="400" height="300" fill="#10141B" />
      <g stroke="#1C2230" strokeWidth="1">
        <path d="M0 70H400M0 140H400M0 220H400M70 0V300M170 0V300M260 0V300M340 0V300" />
        <path d="M0 30L120 120L230 90L400 180" strokeWidth="3" stroke="#1A2130" fill="none" />
      </g>
      {/* lagune Ébrié, stylisée */}
      <path d="M-10 175C70 140 110 205 180 178S300 120 410 160V215C320 182 260 240 180 230S60 196-10 226Z" fill="#16324A" />
      <path d="M-10 175C70 140 110 205 180 178S300 120 410 160" fill="none" stroke="#1F4565" />
      <g fill="#ECEEF2">
        <circle cx="250" cy="82" r="4" />
        <circle cx="320" cy="250" r="4" />
        <circle cx="60" cy="110" r="4" />
      </g>
      <circle cx="132" cy="96" r="22" fill="#4C8DFF" opacity=".16" />
      <circle cx="132" cy="96" r="7" fill="#4C8DFF" />
      <path d="M132 96L250 82" stroke="#4C8DFF" strokeDasharray="3 4" opacity=".6" />
    </svg>
  );
}

const textes = {
  fr: {
    titre: "Emploi du temps · L3",
    jours: ["Lun", "Mar", "Mer", "Jeu", "Ven"],
    cours: ["Java avancé", "Bases de données", "UML", "Projet web", "Examen SI", "Anglais"],
  },
  en: {
    titre: "Timetable · Year 3",
    jours: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    cours: ["Advanced Java", "Databases", "UML", "Web project", "IS exam", "English"],
  },
};
const grille = [
  { j: 0, d: 0, h: 2, a: true },
  { j: 1, d: 1, h: 2 },
  { j: 2, d: 0, h: 1 },
  { j: 3, d: 2, h: 2 },
  { j: 4, d: 0, h: 2, e: true },
  { j: 2, d: 2, h: 1 },
];

export function MyMiagePreview({ langue = "fr" }: { langue?: "fr" | "en" }) {
  const t = textes[langue];
  const jours = t.jours;
  const cours = grille.map((g, k) => ({ ...g, t: t.cours[k] }));
  return (
    <div aria-hidden className="select-none rounded-xl border border-line-2 bg-bg p-3">
      <div className="mb-2 flex items-center justify-between text-xs text-text-3">
        <span className="font-medium text-text-2">{t.titre}</span>
        <span className="mono">S1</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {jours.map((j) => (
          <span key={j} className="text-center text-[0.7rem] text-text-3">
            {j}
          </span>
        ))}
        {jours.map((_, k) => (
          <div key={k} className="grid h-28 grid-rows-4 gap-1">
            {cours
              .filter((c) => c.j === k)
              .map((c) => (
                <span
                  key={c.t}
                  className={`rounded-md px-1.5 py-1 text-[0.65rem] leading-tight ${
                    c.a ? "bg-accent/15 text-[#9EC1FF]" : c.e ? "bg-ci-green/20 text-[#7BD8AE]" : "bg-tile text-text-2"
                  }`}
                  style={{ gridRow: `${c.d + 1} / span ${c.h}` }}
                >
                  {c.t}
                </span>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Drapeau({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-flex items-center gap-1 ${className}`}>
      <i className="h-1 w-4 rounded-full bg-[#F77F00]" />
      <i className="h-1 w-4 rounded-full bg-text" />
      <i className="h-1 w-4 rounded-full bg-ci-green" />
    </span>
  );
}
