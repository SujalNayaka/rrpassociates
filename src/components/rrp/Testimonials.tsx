import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const items = [
  {
    quote:
      "Adv. Patel handled our property dispute with extraordinary clarity. What seemed insurmountable was resolved with patience and precision. A true professional.",
    name: "S. Krishnan",
    case: "Property & Title Dispute",
  },
  {
    quote:
      "I approached the chamber during the most difficult chapter of my life. The team was discreet, empathetic and absolutely sharp in court. I am forever grateful.",
    name: "Priya R.",
    case: "Matrimonial Matter",
  },
  {
    quote:
      "We rely on Ranganath R Patel Associates for all our corporate compliance and contract work. Reliable, responsive and remarkably thorough.",
    name: "M. Iyer, Director",
    case: "Corporate Advisory",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-[var(--charcoal)] py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold), transparent 60%)" }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="kicker">Voices of Trust</div>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white">
          What Our Clients <span className="italic text-[var(--gold)]">Say</span>
        </h2>
        <div className="flex justify-center mt-5">
          <span className="gold-divider wide" />
        </div>

        <div className="relative mt-16 min-h-[280px]">
          <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 text-[var(--gold)]/40" size={80} strokeWidth={1} />
          {items.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center ${
                i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="font-display italic text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-1.5 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="mt-5 text-white font-display text-lg">{t.name}</div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)]/80 mt-1">
                {t.case}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 transition-all ${
                i === idx ? "w-10 bg-[var(--gold)]" : "w-3 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
