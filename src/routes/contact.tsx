import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { IMG, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pearl Gifts" },
      { name: "description", content: "Reach Pearl Gifts curators directly. Most briefs receive a thoughtful response within two working hours." },
      { property: "og:title", content: "Contact — Pearl Gifts" },
      { property: "og:description", content: "Start your gifting brief with a Pearl Gifts curator." },
      { property: "og:image", content: IMG.product5 },
      { name: "twitter:image", content: IMG.product5 },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Let's begin"
        title={<>Have a gifting moment in mind? <em className="not-italic text-gradient-gold">We'd love to design it.</em></>}
        description="Reach our curators directly. Most briefs receive a thoughtful response within two working hours."
      />

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe">
            <div className="absolute inset-0 -z-10 gradient-plum" />
            <div className="absolute -top-32 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/25 blur-3xl" />

            <div className="grid gap-12 p-10 md:p-16 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="text-white">
                <h2 className="font-display text-3xl md:text-4xl text-balance">
                  Talk to a curator
                </h2>
                <p className="mt-5 max-w-lg text-white/90 leading-relaxed">
                  Whether you're planning a 25-piece executive set or a 5,000-piece year-end programme, we'll come back with a thoughtful proposal — never a templated quote.
                </p>
                <div className="mt-10 space-y-4">
                  {[
                    { icon: Phone, label: "+234 800 000 0000", href: "tel:+2348000000000" },
                    { icon: Mail, label: "hello@pearlgifts.co", href: "mailto:hello@pearlgifts.co" },
                    { icon: MapPin, label: "12B Atelier Mews, Victoria Island, Lagos", href: "#" },
                  ].map((c) => (
                    <a key={c.label} href={c.href} className="flex items-center gap-4 text-white/85 hover:text-white">
                      <span className="grid h-11 w-11 place-items-center rounded-full glass-dark">
                        <c.icon className="h-5 w-5 text-[var(--gold)]" />
                      </span>
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-dark rounded-[2rem] p-8 md:p-10 shadow-luxe">
                <h3 className="font-display text-2xl text-white">Start your brief</h3>
                <p className="mt-1 text-sm text-white/85">Or skip the form and message a curator on WhatsApp.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(WA_LINK, "_blank");
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required placeholder="Full name" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/70 outline-none focus:border-[var(--gold)]" />
                    <input required placeholder="Company" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/70 outline-none focus:border-[var(--gold)]" />
                  </div>
                  <input type="email" required placeholder="Email address" className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/70 outline-none focus:border-[var(--gold)]" />
                  <textarea rows={4} placeholder="Tell us about the occasion, quantities and timeline…" className="w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/70 outline-none focus:border-[var(--gold)]" />
                  <div className="flex flex-wrap gap-3">
                    <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-medium text-[var(--plum-deep)] shadow-soft">
                      Send Brief <ArrowRight className="h-4 w-4" />
                    </button>
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)]/40 px-6 py-3.5 text-sm text-white hover:bg-white/5">
                      <MessageCircle className="h-4 w-4 text-[var(--gold)]" /> WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
