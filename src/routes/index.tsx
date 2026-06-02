import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Award, Leaf, Crown, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { IMG, VIDEO, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl Gifts — Luxury Corporate & Bespoke Gifting Atelier" },
      { name: "description", content: "Pearl Gifts designs, crafts and delivers bespoke corporate hampers, bamboo gift sets and personalized keepsakes for organizations that give with intention." },
      { property: "og:title", content: "Pearl Gifts — Luxury Gifting Atelier" },
      { property: "og:description", content: "Bespoke corporate gifts and personalized keepsakes, handcrafted in Lagos." },
      { property: "og:image", content: IMG.product1 },
      { name: "twitter:image", content: IMG.product1 },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-[var(--plum)]/15 blur-3xl" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--gold)]/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--plum)]/15 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--plum-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            A Lagos luxury gifting atelier
          </span>
          <h1 className="mt-7 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] text-[var(--plum-deep)] text-balance">
            Thoughtfully <em className="not-italic text-gradient-gold">Crafted</em> Gifts
            <br className="hidden sm:block" /> For Every Occasion
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--ink)]/70">
            From boardroom milestones to founder appreciation hampers — Pearl Gifts designs, sources and hand-finishes bespoke gift experiences that carry the weight of your brand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 rounded-full gradient-plum px-7 py-4 text-sm tracking-wide text-white shadow-luxe transition hover:opacity-95"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--plum)]/20 bg-white/60 px-7 py-4 text-sm text-[var(--plum-deep)] transition hover:bg-white"
            >
              <MessageCircle className="h-4 w-4 text-[var(--plum)]" /> Speak to a Curator
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--plum)]/10 pt-8">
            {[
              ["500+", "Brands served"],
              ["50K+", "Gifts delivered"],
              ["98%", "Repeat clients"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-[var(--plum-deep)]">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-[var(--ink)]/55">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={IMG.product1}
              alt="Signature Pearl Gifts bamboo presentation set with gold engraved nameplate"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-soft md:block">
            <img src={IMG.product3} alt="Detail of engraved keepsake" className="h-44 w-full object-cover" />
          </div>
          <div className="absolute -right-4 -top-4 hidden w-36 overflow-hidden rounded-2xl border-4 border-white shadow-soft md:block">
            <img src={IMG.product5} alt="Bespoke presentation detail" className="h-36 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStrip() {
  const brands = ["DANGOTE", "ACCESS", "MTN", "GTCO", "SHELL", "UNILEVER", "FLUTTERWAVE", "STANBIC"];
  return (
    <section className="border-y border-[var(--plum)]/10 bg-white/60 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--ink)]/50">
          Trusted by organizations across the continent
        </p>
        <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((b) => (
            <div
              key={b}
              className="text-center font-display text-xl tracking-[0.18em] text-[var(--plum-deep)]/55 transition hover:text-[var(--plum-deep)]"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PREVIEW_COLLECTIONS = [
  { name: "Corporate Gifts", desc: "End-of-year hampers, onboarding sets, executive collections.", img: IMG.product1, icon: Sparkles },
  { name: "Bamboo Gift Sets", desc: "Our signature sustainable luxury — soft to the earth.", img: IMG.product2, icon: Leaf },
  { name: "Personalized Keepsakes", desc: "Engraved leather, monogrammed pieces, bespoke wrapping.", img: IMG.product3, icon: Crown },
  { name: "Awards & Recognition", desc: "Crystal, wood and metal awards for milestone moments.", img: IMG.product4, icon: Award },
];

function CollectionsPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Our Collections</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              A gift for every chapter of your story
            </h2>
          </div>
          <Link to="/collections" className="inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)]">
            View all collections <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW_COLLECTIONS.map((c, i) => (
            <Link to="/collections" key={c.name} className="group block">
              <article className="relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-luxe">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/85 via-[var(--plum-deep)]/15 to-transparent" />
                  <div className="absolute top-5 left-5 grid h-10 w-10 place-items-center rounded-full glass">
                    <c.icon className="h-4 w-4 text-[var(--plum-deep)]" />
                  </div>
                  <span className="absolute top-5 right-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <p className="mt-1.5 text-sm text-white/80 line-clamp-2">{c.desc}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AtelierReel() {
  return (
    <section className="bg-[var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[9/12] overflow-hidden rounded-[2rem] shadow-luxe">
            <video
              src={VIDEO.reel1}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Inside the Atelier</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              Where every gift is composed by hand.
            </h2>
            <p className="mt-6 text-[var(--ink)]/70 leading-relaxed">
              Our Lagos atelier is where moodboards become objects — engraved bamboo, brushed brass, silk-lined boxes and hand-tied ribbon. Watch a glimpse of how an order moves from brief to dispatch.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["10+", "Artisans"],
                ["36", "States covered"],
                ["72h", "Avg. brief turnaround"],
              ].map(([k, v]) => (
                <div key={v}>
                  <p className="font-display text-2xl text-[var(--plum-deep)]">{k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-[var(--ink)]/55">{v}</p>
                </div>
              ))}
            </div>
            <Link
              to="/gallery"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--plum)]/20 px-6 py-3.5 text-sm text-[var(--plum-deep)] transition hover:bg-white"
            >
              See the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionTeaser() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="overflow-hidden rounded-[2.5rem] gradient-plum text-white shadow-luxe">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[360px]">
              <img src={IMG.award} alt="Pearl Gifts industry award recognition" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--plum-deep)]/40" />
            </div>
            <div className="p-10 md:p-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Recognition</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
                Recognized for craft, consistency and care.
              </h2>
              <p className="mt-6 max-w-lg text-white/75 leading-relaxed">
                We're honored to be named among the continent's leading gifting houses — a recognition we owe to every team that has trusted us with their most considered moments.
              </p>
              <Link
                to="/recognition"
                className="mt-10 inline-flex items-center gap-3 rounded-full gradient-gold px-6 py-3.5 text-sm font-medium text-[var(--plum-deep)] shadow-soft"
              >
                View the recognition <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <BrandStrip />
      <CollectionsPreview />
      <AtelierReel />
      <RecognitionTeaser />
    </SiteLayout>
  );
}
