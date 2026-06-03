import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RRP } from "@/lib/rrp-assets";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.getElementById(l.href.slice(1)));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(s.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--ink)]/95 backdrop-blur-md border-b border-[var(--gold)]/40 py-3"
          : "bg-gradient-to-b from-black/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={RRP.logoCircle}
            alt="Ranganath R Patel Associates"
            className="logo-spin h-12 w-12 rounded-full ring-1 ring-[var(--gold)]/60"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg tracking-wide text-white">
              Ranganath R Patel
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">
              Associates
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] uppercase tracking-[0.22em] transition-colors relative ${
                active === l.href.slice(1)
                  ? "text-[var(--gold)]"
                  : "text-white/80 hover:text-[var(--gold)]"
              }`}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--gold)]" />
              )}
            </a>
          ))}
          <a href="#contact" className="btn-gold !py-2.5 !px-5 !text-[11px]">
            Book Consult
          </a>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--ink)] border-t border-[var(--gold)]/30">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-white/90 hover:text-[var(--gold)]"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold text-center">
              Book a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
