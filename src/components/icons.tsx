type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "square" as const,
  "aria-hidden": true,
  focusable: false,
};

export function ArrowRight({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} {...base}>
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

export function ArrowDown({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} {...base}>
      <path d="M10 3v12M5 10l5 5 5-5M4 18h12" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} {...base}>
      <path d="M6 14 15 5M7 5h8v8" />
    </svg>
  );
}

export function Sun({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="4.5" fill="var(--sun)" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}
