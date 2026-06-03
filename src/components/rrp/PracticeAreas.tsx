import { Scale, Shield, Home, Users, Building2, ScrollText } from "lucide-react";

const areas = [
  { icon: Scale, title: "Civil Litigation", desc: "Disputes, injunctions and appeals across forums." },
  { icon: Shield, title: "Criminal Defense", desc: "Bail, trial advocacy and acquittal strategy." },
  { icon: Home, title: "Property & Real Estate", desc: "Title disputes, registrations and RERA matters." },
  { icon: Users, title: "Family & Matrimonial", desc: "Divorce, custody and maintenance proceedings." },
  { icon: Building2, title: "Corporate & Commercial", desc: "Contracts, agreements and compliance." },
  { icon: ScrollText, title: "Constitutional & Writ", desc: "High Court petitions and fundamental rights." },
];

export function PracticeAreas() {
  return (
    <section id="practice" className="bg-[var(--ink)] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="kicker">What We Do</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white">
            Practice <span className="italic text-[var(--gold)]">Areas</span>
          </h2>
          <div className="flex justify-center mt-5">
            <span className="gold-divider wide" />
          </div>
          <p className="mt-6 text-white/65">
            A full-service chamber serving Bengaluru and the State of Karnataka — with
            counsel admitted before the trial courts and the High Court.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <div key={a.title} className={`practice-card p-9 reveal delay-${(i % 6) + 1}`}>
              <div className="inline-flex items-center justify-center h-14 w-14 border border-[var(--gold)]/50 text-[var(--gold)] rounded-sm">
                <a.icon size={26} strokeWidth={1.4} />
              </div>
              <h3 className="mt-7 font-display text-2xl text-white">{a.title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed">{a.desc}</p>
              <div className="mt-7 h-px w-12 bg-[var(--gold)]/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
