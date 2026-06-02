import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gift, Sparkles, Award, PartyPopper, Crown, Leaf, MessageCircle } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { IMG, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Pearl Gifts Atelier" },
      { name: "description", content: "Explore Pearl Gifts collections: corporate hampers, bamboo gift sets, personalized keepsakes, awards, event souvenirs and more — handcrafted in Lagos." },
      { property: "og:title", content: "Collections — Pearl Gifts" },
      { property: "og:description", content: "Curated gift collections for corporate, personal and milestone moments." },
      { property: "og:image", content: IMG.product2 },
      { name: "twitter:image", content: IMG.product2 },
    ],
  }),
  component: CollectionsPage,
});

const CATEGORIES = [
  { name: "Corporate Gifts", desc: "End-of-year hampers, onboarding sets, executive collections built for scale.", img: IMG.product1, icon: Gift },
  { name: "Bamboo Gift Sets", desc: "Our signature sustainable luxury — bamboo cases lined in silk.", img: IMG.product2, icon: Leaf },
  { name: "Personalized Keepsakes", desc: "Engraved leather, monogrammed pieces, bespoke wrapping.", img: IMG.product3, icon: Sparkles },
  { name: "Awards & Plaques", desc: "Crystal, wood and metal awards crafted for milestone moments.", img: IMG.product4, icon: Award },
  { name: "Event Souvenirs", desc: "Memorable take-homes for conferences, AGMs and galas.", img: IMG.product5, icon: PartyPopper },
  { name: "Executive Hampers", desc: "Refined hampers curated for the boardroom and beyond.", img: IMG.product1, icon: Crown },
];

const FEATURED = [
  { name: "Heritage Bamboo Reserve", price: "From ₦185,000", img: IMG.product2, tag: "Signature" },
  { name: "Onyx Executive Folio", price: "From ₦142,000", img: IMG.product1, tag: "Bestseller" },
  { name: "Monogram Atelier Set", price: "From ₦96,500", img: IMG.product3, tag: "New" },
  { name: "Crystal Apex Award", price: "From ₦210,000", img: IMG.product4, tag: "Bespoke" },
];

function CollectionsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The Collections"
        title={<>Curated gifting, shaped to <em className="not-italic text-gradient-gold">your occasion</em></>}
        description="Every Pearl Gifts collection is designed in-house and finished by hand. Choose a starting point — every piece can be tailored to your brand, recipient and budget."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <article key={c.name} className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-luxe">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/85 via-[var(--plum-deep)]/15 to-transparent" />
                  <div className="absolute top-5 left-5 grid h-11 w-11 place-items-center rounded-full glass">
                    <c.icon className="h-5 w-5 text-[var(--plum-deep)]" />
                  </div>
                  <span className="absolute top-5 right-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h2 className="font-display text-2xl">{c.name}</h2>
                    <p className="mt-1.5 text-sm text-white/80 line-clamp-2">{c.desc}</p>
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[var(--gold)] text-sm">
                      Enquire <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Featured Pieces</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
                House selections from the atelier
              </h2>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)]">
              Commission a piece <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((f) => (
              <article key={f.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--secondary)]">
                  <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.06]" />
                  <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">{f.tag}</span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg text-[var(--plum-deep)]">{f.name}</h3>
                  <p className="whitespace-nowrap text-sm text-[var(--ink)]/70">{f.price}</p>
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--ink)]/45">Hand-finished · Customizable</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--plum-deep)] text-balance">
            Don't see your occasion?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--ink)]/70">
            Every Pearl Gifts piece can be reimagined. Brief us on your moment — we'll come back with a moodboard within 72 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-plum px-7 py-3.5 text-sm text-white shadow-soft">
              Start a brief <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--plum)]/20 px-7 py-3.5 text-sm text-[var(--plum-deep)] hover:bg-white">
              <MessageCircle className="h-4 w-4 text-[var(--plum)]" /> WhatsApp a curator
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
