import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Palette, Headphones } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { IMG, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting Programs — Pearl Gifts" },
      { name: "description", content: "End-to-end corporate gifting for HR, marketing and executive teams: bespoke onboarding kits, year-end hampers, partner appreciation and retainers." },
      { property: "og:title", content: "Corporate Gifting — Pearl Gifts" },
      { property: "og:description", content: "Managed corporate gifting programs with a single point of contact." },
      { property: "og:image", content: IMG.product1 },
      { name: "twitter:image", content: IMG.product1 },
    ],
  }),
  component: CorporatePage,
});

const WHY = [
  { icon: Palette, title: "Bespoke Curation", desc: "Every package is sketched, sourced and styled by our in-house design studio." },
  { icon: ShieldCheck, title: "Premium Materials", desc: "Bamboo, full-grain leather, polished crystal — sourced from vetted artisans." },
  { icon: Truck, title: "Nationwide Delivery", desc: "White-glove logistics with insured handling across all 36 states." },
  { icon: Headphones, title: "Concierge Service", desc: "A dedicated curator from brief to unboxing — no chatbots, ever." },
];

const STEPS = [
  { n: "01", title: "Brief", desc: "Tell us about the occasion, recipients, brand and budget." },
  { n: "02", title: "Curate", desc: "Receive a moodboard, sample selections and a transparent quote." },
  { n: "03", title: "Craft", desc: "We produce, engrave, hand-wrap and quality-check every piece." },
  { n: "04", title: "Deliver", desc: "White-glove dispatch — tracked, insured, beautifully on time." },
];

function CorporatePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Corporate Gifting"
        title={<>For organizations that gift at scale, <em className="not-italic text-gradient-gold">without compromising the craft.</em></>}
        description="We partner with HR, marketing and executive teams to design and run gifting programs that strengthen every relationship behind your brand."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[2.5rem] bg-[var(--cream)] shadow-soft">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[5/4] lg:aspect-auto">
                <img src={IMG.product1} alt="Corporate gifting flat lay" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--plum-deep)]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-[var(--ink)]/60">Minimum order</p>
                  <p className="font-display text-xl text-[var(--plum-deep)]">25 units · Bespoke</p>
                </div>
              </div>
              <div className="p-10 md:p-16">
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Programs we run</span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--plum-deep)] text-balance">
                  Built end-to-end. Managed by one curator.
                </h2>
                <ul className="mt-8 space-y-3">
                  {[
                    "Onboarding kits for new hires",
                    "Year-end & festive hampers",
                    "Executive & board appreciation",
                    "Partner, vendor & investor gifting",
                    "AGM, conference and gala souvenirs",
                    "Quarterly retainers with stocked SKUs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[var(--ink)]/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-plum px-7 py-3.5 text-sm text-white shadow-soft">
                    Request Corporate Brief <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--plum)]/20 px-7 py-3.5 text-sm text-[var(--plum-deep)] hover:bg-white">
                    WhatsApp a curator
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 gradient-plum" />
        <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle_at_2px_2px,white_1.5px,transparent_0)] [background-size:28px_28px]" />
        <div className="mx-auto max-w-7xl px-5 text-white">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Why Pearl</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
                A gifting partner that treats every detail like the gift itself.
              </h2>
            </div>
            <p className="text-white/75 leading-relaxed">
              We craft for organizations who understand that a gift carries the weight of every relationship behind it. From a single bespoke hamper to thousands of branded sets, the standard never slips.
            </p>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="glass-dark rounded-3xl p-7 transition hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-gold text-[var(--plum-deep)]">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl text-white">{w.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">How It Works</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              From brief to unboxing in four refined steps
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="rounded-3xl border border-[var(--plum)]/10 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-luxe">
                  <span className="font-display text-5xl text-gradient-gold">{s.n}</span>
                  <h3 className="mt-5 font-display text-2xl text-[var(--plum-deep)]">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/65">{s.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="absolute top-1/2 right-[-14px] hidden h-px w-7 bg-gradient-to-r from-[var(--gold)] to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
