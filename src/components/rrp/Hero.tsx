import { useEffect, useState } from "react";
import { RRP } from "@/lib/rrp-assets";

const slides = [
  { img: RRP.team.courtHero, focus: "object-[70%_center]" },
  { img: RRP.office.signboard, focus: "object-center" },
  { img: RRP.team.bwProfile1, focus: "object-[30%_center]" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            alt=""
            className={`w-full h-full object-cover ${s.focus} ${i === idx ? "kenburns" : ""}`}
            key={`${idx}-${i === idx ? "active" : "idle"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
      ))}

      {/* Gold particle shimmer */}
      <div className="absolute inset-0 gold-shimmer" />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <div className="kicker fade-in delay-200">
              Advocates · Solicitors · Legal Consultants
            </div>
            <div className="mt-5 mb-7 flex items-center gap-4 fade-in delay-400">
              <span className="h-px w-24 lg:w-32 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase">Bengaluru</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.4rem] leading-[1.02] text-white fade-in-up">
              Justice.<br />
              Integrity.<br />
              <span className="italic text-[var(--gold)]">Excellence.</span>
            </h1>

            <p className="mt-7 text-white/85 font-display text-2xl lg:text-3xl fade-in-up delay-200">
              Ranganath R Patel Associates
            </p>
            <p className="mt-3 text-white/60 text-sm tracking-[0.18em] uppercase fade-in-up delay-400">
              Representing clients before the High Court of Karnataka
            </p>

            <div className="mt-10 flex flex-wrap gap-4 fade-in-up delay-600">
              <a href="#contact" className="btn-gold">Book a Consultation</a>
              <a href="#practice" className="btn-outline-gold">View Our Practice</a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-[3px] transition-all duration-500 ${
              i === idx ? "w-12 bg-[var(--gold)]" : "w-6 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 text-white/60 z-20">
        <span className="text-[10px] tracking-[0.4em] uppercase rotate-90 origin-center mt-12">Scroll</span>
        <span className="block w-px h-16 bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </div>
    </section>
  );
}
