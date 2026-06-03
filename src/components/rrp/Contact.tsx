import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const subjects = [
  "Civil Litigation",
  "Criminal Defense",
  "Property Law",
  "Family Law",
  "Corporate Law",
  "Other",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-[var(--ink)] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="kicker">Get in Touch</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white">
            Schedule a <span className="italic text-[var(--gold)]">Consultation</span>
          </h2>
          <div className="flex justify-center mt-5">
            <span className="gold-divider wide" />
          </div>
          <p className="mt-6 text-white/65">
            Reach the chamber by phone, message or visit — Monday to Saturday, 10 AM to 6 PM.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="reveal space-y-6">
            {[
              {
                I: MapPin,
                title: "Chamber",
                lines: ["#619/A, Ground Floor, 36th Cross,", "2nd Main, 2nd Block, Rajajinagar,", "Bengaluru – 560010"],
              },
              { I: Phone, title: "Call", lines: ["+91 95358 42495", "+91 94837 96913"] },
              { I: Mail, title: "Email", lines: ["ranguuppar@gmail.com"] },
              { I: Clock, title: "Hours", lines: ["Monday – Saturday", "10:00 AM – 6:00 PM"] },
            ].map((row) => (
              <div key={row.title} className="flex gap-5 p-6 border border-white/10 hover:border-[var(--gold)]/50 transition-colors">
                <div className="h-12 w-12 shrink-0 flex items-center justify-center border border-[var(--gold)]/60 text-[var(--gold)]">
                  <row.I size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">
                    {row.title}
                  </div>
                  {row.lines.map((l) => (
                    <div key={l} className="text-white/80 text-sm mt-1">{l}</div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {[
                { I: Facebook, href: "#" },
                { I: Instagram, href: "#" },
                { I: Linkedin, href: "#" },
                { I: MessageCircle, href: "https://wa.me/919535842495" },
              ].map(({ I, href }, n) => (
                <a
                  key={n}
                  href={href}
                  className="h-11 w-11 inline-flex items-center justify-center border border-[var(--gold)]/50 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="reveal delay-2 relative border border-[var(--gold)]/40 min-h-[460px] overflow-hidden">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Rajajinagar+2nd+Block+Bengaluru+560010&hl=en&z=15&output=embed"
              className="w-full h-full min-h-[460px] grayscale contrast-125 brightness-75"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[var(--gold)]/30" />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
            (e.target as HTMLFormElement).reset();
          }}
          className="mt-12 reveal border border-white/10 p-8 lg:p-12 bg-[var(--charcoal)]"
        >
          <div className="kicker">Send us a message</div>
          <h3 className="mt-3 font-display text-3xl text-white">We respond within one business day.</h3>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <input className="field" placeholder="Full name" required minLength={2} maxLength={80} />
            <input type="email" className="field" placeholder="Email address" required maxLength={120} />
            <input className="field" placeholder="Phone number" required maxLength={20} />
            <select className="field" defaultValue="" required>
              <option value="" disabled>Subject</option>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea className="field sm:col-span-2 min-h-[140px]" placeholder="Briefly describe your matter" required minLength={10} maxLength={1500} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-white/50 max-w-md">
              Submissions are confidential and reviewed by Adv. Ranganath R Patel personally.
            </p>
            <button type="submit" className="btn-gold">
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
