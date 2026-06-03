import { RRP } from "@/lib/rrp-assets";

export function Footer() {
  return (
    <footer className="bg-black border-t border-[var(--gold)]/20 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center pb-12 border-b border-white/10">
          <img
            src={RRP.logoCircle}
            alt="RRP Associates"
            className="h-20 w-20 rounded-full ring-1 ring-[var(--gold)]/60"
          />
          <h3 className="mt-6 font-display text-3xl text-white">Ranganath R Patel Associates</h3>
          <p className="mt-2 text-[11px] tracking-[0.4em] uppercase text-[var(--gold)]">
            Advocates · Solicitors · Legal Consultants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 py-14">
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Quick Links</div>
            <ul className="mt-5 space-y-3 text-white/70 text-sm">
              {["Home", "About", "Practice Areas", "Team", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "")}`} className="hover:text-[var(--gold)] transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Practice Areas</div>
            <ul className="mt-5 space-y-3 text-white/70 text-sm">
              {["Civil Litigation","Criminal Defense","Property & Real Estate","Family & Matrimonial","Corporate & Commercial","Constitutional & Writ"].map((l) => (
                <li key={l}><a href="#practice" className="hover:text-[var(--gold)] transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Contact</div>
            <ul className="mt-5 space-y-3 text-white/70 text-sm">
              <li>#619/A, 36th Cross, 2nd Main,</li>
              <li>2nd Block, Rajajinagar,</li>
              <li>Bengaluru – 560010</li>
              <li className="pt-2">+91 95358 42495</li>
              <li>ranguuppar@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 text-center text-xs text-white/50 tracking-wider">
          © 2025 Ranganath R Patel Associates. All Rights Reserved. <span className="text-[var(--gold)]/60">|</span> Designed with <span className="text-[var(--gold)]">♥</span> in Bengaluru
        </div>
      </div>
    </footer>
  );
}
