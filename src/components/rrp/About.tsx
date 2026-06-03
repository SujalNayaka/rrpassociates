import { useEffect, useRef, useState } from "react";
import { RRP } from "@/lib/rrp-assets";
import { ArrowRight } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="font-display text-5xl lg:text-6xl text-[var(--gold)]">
      {v}
      {suffix}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-[var(--charcoal)] py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${RRP.office.library})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal">
          <div className="relative corner-frame">
            <img
              src={RRP.team.desk}
              alt="Adv. Ranganath R Patel at his office desk"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[var(--ink)]/85 backdrop-blur-sm border border-[var(--gold)]/40 px-5 py-4">
              <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Founding Advocate</div>
              <div className="font-display text-xl text-white mt-1">Ranganath R Patel</div>
            </div>
          </div>
        </div>

        <div className="reveal delay-2">
          <div className="kicker">About the Firm</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white leading-tight">
            A Boutique Chamber Built on
            <span className="italic text-[var(--gold)]"> Principle.</span>
          </h2>
          <span className="gold-divider mt-6" />

          <div className="mt-7 space-y-5 text-white/75 leading-relaxed">
            <p>
              Founded in the heart of Bengaluru, Ranganath R Patel Associates is a boutique
              chambers practice serving individuals, families and enterprises across Karnataka.
              Our work is anchored in a single conviction: that diligent counsel and uncompromising
              integrity remain the surest path to justice.
            </p>
            <p>
              From trial courts to the High Court of Karnataka, we appear in civil, criminal,
              property, matrimonial, corporate and constitutional matters — bringing the same
              measured rigour to every brief, regardless of size.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--gold)]/20 pt-8">
            <div>
              <Counter end={500} suffix="+" />
              <div className="mt-1 text-[11px] tracking-[0.3em] uppercase text-white/55">Cases Handled</div>
            </div>
            <div>
              <Counter end={5} suffix="+" />
              <div className="mt-1 text-[11px] tracking-[0.3em] uppercase text-white/55">Years Practice</div>
            </div>
            <div>
              <Counter end={100} suffix="%" />
              <div className="mt-1 text-[11px] tracking-[0.3em] uppercase text-white/55">Client Focus</div>
            </div>
          </div>

          <a
            href="#team"
            className="inline-flex items-center gap-3 mt-10 text-[var(--gold)] text-sm tracking-[0.22em] uppercase group"
          >
            Meet the Advocate
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
