import { Target, Zap, Lock, Trophy } from "lucide-react";

const items = [
  { I: Target, t: "Client-First Approach", d: "Every brief is treated as if it were our own — with discretion, care and clarity at every stage." },
  { I: Zap, t: "Swift Legal Action", d: "Time-sensitive interim relief, bail applications and writs handled with urgency and rigour." },
  { I: Lock, t: "Confidential & Trustworthy", d: "Strict adherence to privilege. Your matter never leaves the chamber." },
  { I: Trophy, t: "Proven Track Record", d: "A record of favourable orders across civil, criminal, matrimonial and constitutional benches." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center reveal">
          <div className="kicker !text-[var(--gold-dim)]">Our Promise</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-[var(--ink)]">
            Why Clients <span className="italic text-[var(--gold)]">Choose Us</span>
          </h2>
          <div className="flex justify-center mt-5">
            <span className="gold-divider wide" />
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <div key={it.t} className={`reveal delay-${i + 1} text-center px-4`}>
              <div className="inline-flex items-center justify-center h-16 w-16 border border-[var(--gold)] text-[var(--gold)] mx-auto">
                <it.I size={28} strokeWidth={1.4} />
              </div>
              <h3 className="mt-7 font-display text-2xl text-[var(--ink)]">{it.t}</h3>
              <p className="mt-3 text-neutral-600 leading-relaxed text-sm">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
