import { useEffect, useState } from "react";
import { RRP } from "@/lib/rrp-assets";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const portraits = [
  RRP.team.courtHero,
  RRP.team.bwProfile1,
  RRP.team.bwProfile2,
  RRP.team.blueSuit,
];

export function AdvocateCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % portraits.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="team" className="bg-[var(--charcoal)] py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[var(--gold)]/5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] portrait-halo overflow-hidden">
              {portraits.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Adv. Ranganath R Patel"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[1400ms] ${
                    i === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 ring-1 ring-[var(--gold)] pointer-events-none" />
            </div>

            {/* Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {portraits.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Portrait ${idx + 1}`}
                  className={`h-1.5 transition-all ${
                    i === idx ? "w-8 bg-[var(--gold)]" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="reveal delay-2">
          <div className="kicker">Meet the Advocate</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white leading-tight">
            Adv. Ranganath <span className="italic text-[var(--gold)]">R Patel</span>
          </h2>
          <div className="mt-3 text-white/55 text-sm tracking-[0.22em] uppercase">
            Advocate · High Court of Karnataka
          </div>
          <span className="gold-divider mt-6" />

          <div className="mt-7 space-y-5 text-white/75 leading-relaxed">
            <p>
              With a sharp legal mind and unwavering dedication to his clients,
              Adv. Ranganath R Patel brings expertise across civil, criminal and
              corporate domains. A graduate of Karnataka's finest law institutions,
              he has appeared in hundreds of matters at trial courts and the
              High Court of Karnataka.
            </p>
            <p>
              His practice is defined by meticulous case preparation, a calm
              courtroom presence and a steadfast commitment to securing the right
              outcome — not merely the convenient one.
            </p>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {[
              { I: Linkedin, href: "#" },
              { I: Facebook, href: "#" },
              { I: Instagram, href: "#" },
              { I: MessageCircle, href: "https://wa.me/919535842495" },
            ].map(({ I, href }, n) => (
              <a
                key={n}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 inline-flex items-center justify-center border border-[var(--gold)]/50 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors"
              >
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
