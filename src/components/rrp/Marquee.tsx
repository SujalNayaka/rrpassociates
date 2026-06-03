const items = [
  "Civil Litigation",
  "Criminal Defense",
  "Property Law",
  "Family Law",
  "Corporate Law",
  "Constitutional Matters",
  "Writ Petitions",
  "Arbitration",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-[var(--gold)]/30 bg-[var(--ink)] overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap py-5">
        {row.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-5 px-9 text-[var(--gold)] font-display text-xl tracking-wide"
          >
            <span className="text-xl">⚖</span>
            <span>{it}</span>
            <span className="text-[var(--gold)]/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
