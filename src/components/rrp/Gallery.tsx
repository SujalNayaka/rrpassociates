import { useState } from "react";
import { X } from "lucide-react";
import { RRP } from "@/lib/rrp-assets";

const images = [
  RRP.office.signboard,
  RRP.office.library,
  RRP.office.workstations,
  RRP.office.interior3,
  RRP.office.workspace1,
  RRP.office.workspace2,
  RRP.office.workspace3,
  RRP.office.workspace4,
  RRP.office.reception,
  RRP.office.conference,
  RRP.office.exterior,
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const loop = [...images, ...images];

  return (
    <section id="gallery" className="bg-[var(--ink)] py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center reveal">
        <div className="kicker">Inside the Chamber</div>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white">
          Our <span className="italic text-[var(--gold)]">Office</span>
        </h2>
        <div className="flex justify-center mt-5">
          <span className="gold-divider wide" />
        </div>
        <p className="mt-6 text-white/65 max-w-xl mx-auto">
          A contemporary chamber in Rajajinagar — designed for focus, discretion and deep work.
        </p>
      </div>

      <div className="conveyor-wrap mt-16 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--ink)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--ink)] to-transparent pointer-events-none" />
        <div className="conveyor-track flex gap-6 w-max">
          {loop.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(src)}
              className="group relative h-[320px] lg:h-[400px] w-[460px] flex-shrink-0 overflow-hidden border border-[var(--gold)]/30 hover:border-[var(--gold)] transition-all"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/60 group-hover:shadow-[0_0_60px_-10px_rgba(201,168,76,0.6)] transition pointer-events-none" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 animate-in fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-[var(--gold)]"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain border border-[var(--gold)]/40"
          />
        </div>
      )}
    </section>
  );
}
