import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/rrp/Navbar";
import { Hero } from "@/components/rrp/Hero";
import { Marquee } from "@/components/rrp/Marquee";
import { About } from "@/components/rrp/About";
import { PracticeAreas } from "@/components/rrp/PracticeAreas";
import { AdvocateCarousel } from "@/components/rrp/AdvocateCarousel";
import { WhyChooseUs } from "@/components/rrp/WhyChooseUs";
import { Gallery } from "@/components/rrp/Gallery";
import { Testimonials } from "@/components/rrp/Testimonials";
import { Contact } from "@/components/rrp/Contact";
import { Footer } from "@/components/rrp/Footer";
import { WhatsAppFab } from "@/components/rrp/WhatsAppFab";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Advocate in Rajajinagar Bengaluru | Ranganath R Patel Associates" },
      {
        name: "description",
        content:
          "Ranganath R Patel Associates — Advocates, Solicitors & Legal Consultants in Rajajinagar, Bengaluru. Civil, criminal, property, family, corporate & constitutional matters before the High Court of Karnataka.",
      },
      { name: "keywords", content: "advocate Bengaluru, lawyer Rajajinagar, High Court of Karnataka, civil litigation Bangalore, criminal lawyer Bengaluru, property lawyer Rajajinagar, RRP Associates" },
      { property: "og:title", content: "Ranganath R Patel Associates — Advocates · Solicitors · Legal Consultants" },
      { property: "og:description", content: "Justice. Integrity. Excellence. A boutique chamber serving Bengaluru and Karnataka." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Ranganath R Patel Associates",
          description: "Advocates, Solicitors & Legal Consultants in Bengaluru",
          telephone: "+91-95358-42495",
          email: "ranguuppar@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "#619/A, Ground Floor, 36th Cross, 2nd Main, 2nd Block, Rajajinagar",
            addressLocality: "Bengaluru",
            postalCode: "560010",
            addressCountry: "IN",
          },
          areaServed: "Karnataka",
          openingHours: "Mo-Sa 10:00-18:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealAll();
  return (
    <main className="bg-[var(--ink)] text-white overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PracticeAreas />
      <AdvocateCarousel />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
