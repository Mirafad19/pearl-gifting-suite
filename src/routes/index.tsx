import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Gift, Sparkles, Award, PartyPopper, Crown, Leaf,
  ShieldCheck, Truck, Palette, Headphones, ArrowRight,
  MessageCircle, Mail, MapPin, Phone, Quote, Menu, X, Star,
} from "lucide-react";

import hero from "@/assets/hero-bamboo.jpg";
import catCorporate from "@/assets/cat-corporate.jpg";
import catPersonalized from "@/assets/cat-personalized.jpg";
import catAwards from "@/assets/cat-awards.jpg";
import catEvents from "@/assets/cat-events.jpg";
import catFathers from "@/assets/cat-fathers.jpg";
import catBamboo from "@/assets/cat-bamboo.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl Gifts — Thoughtfully Crafted Luxury Gifting" },
      { name: "description", content: "Bespoke corporate gifts, personalized keepsakes and bamboo gift sets crafted for organizations that give with intention." },
      { property: "og:title", content: "Pearl Gifts — Luxury Gifting" },
      { property: "og:description", content: "Bespoke corporate gifts, personalized keepsakes and bamboo gift sets." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const WA_LINK = "https://wa.me/2348000000000?text=Hello%20Pearl%20Gifts%2C%20I%27d%20like%20to%20discuss%20a%20gifting%20order.";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Collections", "#categories"],
    ["Corporate", "#corporate"],
    ["Gallery", "#gallery"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ] as const;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-5">
        <div className={`flex items-center justify-between rounded-full border border-white/40 px-5 py-3 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-plum text-[var(--gold)] shadow-soft">
              <span className="font-display text-lg leading-none">P</span>
            </span>
            <span className="font-display text-xl tracking-wide text-[var(--plum-deep)]">Pearl <span className="text-gradient-gold font-semibold">Gifts</span></span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="group relative text-sm text-[var(--ink)]/80 hover:text-[var(--plum)] transition-colors">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 rounded-full gradient-plum px-5 py-2.5 text-sm text-white shadow-soft hover:opacity-95">
            <MessageCircle className="h-4 w-4" /> Request Quote
          </a>
          <button onClick={() => setOpen(v => !v)} className="md:hidden grid h-10 w-10 place-items-center rounded-full glass" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="mt-2 md:hidden rounded-3xl glass p-4 shadow-soft animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--plum)]/5">{label}</a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-plum px-5 py-3 text-sm text-white">
                <MessageCircle className="h-4 w-4" /> Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--plum)]/15 blur-3xl" />
        <div className="absolute top-40 -right-32 h-[460px] w-[460px] rounded-full bg-[var(--gold)]/20 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-[0.18em] uppercase text-[var(--plum-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            Curated luxury since 2014
          </span>
          <h1 className="mt-7 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] text-[var(--plum-deep)] text-balance">
            Thoughtfully <em className="not-italic text-gradient-gold">Crafted</em> Gifts
            <br className="hidden sm:block" /> For Every Occasion
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--ink)]/70">
            From boardroom milestones to founder appreciation hampers — Pearl Gifts designs, sources and hand-finishes bespoke gift experiences that carry the weight of your brand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#categories" className="group inline-flex items-center gap-3 rounded-full gradient-plum px-7 py-4 text-sm tracking-wide text-white shadow-luxe hover:scale-[1.02] transition">
              Explore Collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-[var(--plum)]/20 bg-white/60 px-7 py-4 text-sm text-[var(--plum-deep)] hover:bg-white">
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
            <img src={hero} alt="Luxury bamboo gift box with gold engraved nameplate" width={1536} height={1536} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-6 bottom-10 hidden md:block animate-float">
            <div className="glass rounded-2xl px-5 py-4 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-[var(--plum-deep)]">
                  <Crown className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--ink)]/55">Signature Box</p>
                  <p className="font-display text-lg text-[var(--plum-deep)]">Heritage Bamboo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-10 hidden md:block animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="glass-dark rounded-2xl px-5 py-4 text-white shadow-luxe">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />)}
              </div>
              <p className="mt-2 text-sm">Trusted by Fortune-tier teams across Africa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const brands = ["DANGOTE", "ACCESS", "MTN", "GTCO", "SHELL", "UNILEVER", "FLUTTERWAVE", "STANBIC"];
  return (
    <section className="border-y border-[var(--plum)]/10 bg-white/60 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--ink)]/50">Trusted by organizations across the continent</p>
        <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map(b => (
            <div key={b} className="text-center font-display text-xl tracking-[0.18em] text-[var(--plum-deep)]/55 transition hover:text-[var(--plum-deep)]">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  { name: "Corporate Gifts", desc: "End-of-year hampers, onboarding sets, executive collections.", img: catCorporate, icon: Gift },
  { name: "Personalized Gifts", desc: "Engraved leather, monogrammed keepsakes, bespoke wrapping.", img: catPersonalized, icon: Sparkles },
  { name: "Awards & Plaques", desc: "Crystal, wood and metal awards crafted for milestone moments.", img: catAwards, icon: Award },
  { name: "Event Souvenirs", desc: "Memorable take-homes for conferences, AGMs and galas.", img: catEvents, icon: PartyPopper },
  { name: "Father's Day Gifts", desc: "Refined collections curated for the gentlemen who lead.", img: catFathers, icon: Crown },
  { name: "Bamboo Gift Sets", desc: "Our signature sustainable luxury — soft to the earth.", img: catBamboo, icon: Leaf },
];

function Categories() {
  return (
    <section id="categories" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Our Collections</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">A gift for every chapter of your story</h2>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <article key={c.name} className="group lift relative overflow-hidden rounded-3xl bg-card shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/85 via-[var(--plum-deep)]/15 to-transparent" />
                <div className="absolute top-5 left-5 grid h-11 w-11 place-items-center rounded-full glass">
                  <c.icon className="h-5 w-5 text-[var(--plum-deep)]" />
                </div>
                <span className="absolute top-5 right-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">0{i + 1}</span>
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <p className="mt-1.5 text-sm text-white/80 line-clamp-2">{c.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[var(--gold)] text-sm">
                    Discover <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Palette, title: "Bespoke Curation", desc: "Every package is sketched, sourced and styled by our in-house design studio." },
  { icon: ShieldCheck, title: "Premium Materials", desc: "Bamboo, full-grain leather, polished crystal — sourced from vetted artisans." },
  { icon: Truck, title: "Nationwide Delivery", desc: "White-glove logistics with insured handling across all 36 states." },
  { icon: Headphones, title: "Concierge Service", desc: "A dedicated curator from brief to unboxing — no chatbots, ever." },
];

function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 gradient-plum" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle_at_2px_2px,white_1.5px,transparent_0)] [background-size:28px_28px]" />
      <div className="mx-auto max-w-7xl px-5 text-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Why Pearl</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">A gifting partner that treats every detail like the gift itself.</h2>
          </div>
          <p className="text-white/75 leading-relaxed">
            We craft for organizations who understand that a gift carries the weight of every relationship behind it. From a single bespoke hamper to thousands of branded sets, the standard never slips.
          </p>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(w => (
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
  );
}

const FEATURED = [
  { name: "Heritage Bamboo Reserve", price: "₦185,000", img: catBamboo, tag: "Signature" },
  { name: "Onyx Executive Folio", price: "₦142,000", img: catCorporate, tag: "Bestseller" },
  { name: "Monogram Atelier Set", price: "₦96,500", img: catPersonalized, tag: "New" },
  { name: "Crystal Apex Award", price: "₦210,000", img: catAwards, tag: "Bespoke" },
];

function Featured() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Featured Pieces</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">House selections from the atelier</h2>
          </div>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)]">
            Commission a piece <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map(f => (
            <article key={f.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--secondary)]">
                <img src={f.img} alt={f.name} loading="lazy" width={1024} height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.08]" />
                <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">{f.tag}</span>
                <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-plum py-3 text-xs uppercase tracking-widest text-white">
                    Enquire <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
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
  );
}

function CorporateSection() {
  return (
    <section id="corporate" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="overflow-hidden rounded-[2.5rem] bg-[var(--cream)] shadow-soft">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[5/4] lg:aspect-auto">
              <img src={corporateHero} alt="Corporate gifts flat lay" loading="lazy" width={1536} height={1024}
                className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--plum-deep)]/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4">
                <p className="text-xs uppercase tracking-widest text-[var(--ink)]/60">Minimum order</p>
                <p className="font-display text-xl text-[var(--plum-deep)]">25 units · Bespoke</p>
              </div>
            </div>
            <div className="p-10 md:p-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Corporate Gifting</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
                For organizations that gift at scale, without compromising the craft.
              </h2>
              <p className="mt-6 text-[var(--ink)]/70 leading-relaxed">
                We partner with HR, marketing and executive teams to deliver gifting programs across onboarding, retention, year-end and partner appreciation — managed end-to-end with a single point of contact.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Dedicated account curator & art director",
                  "Brand-aligned packaging and engraving",
                  "Bulk fulfillment across 36 states & ECOWAS",
                  "Pre-funded quarterly gifting retainers",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[var(--ink)]/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full gradient-plum px-7 py-3.5 text-sm text-white shadow-soft">
                  Request Corporate Brief <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#process" className="inline-flex items-center gap-2 rounded-full border border-[var(--plum)]/20 px-7 py-3.5 text-sm text-[var(--plum-deep)] hover:bg-white">
                  How it works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { quote: "Pearl Gifts handled our 2,400-piece year-end gifting flawlessly. Every box arrived as though it were the only one.", name: "Adaeze Okonkwo", role: "Head of People, Fintech Lagos" },
  { quote: "The bamboo heritage set we commissioned became the talk of our AGM. The craftsmanship is genuinely world-class.", name: "Tunde Bakare", role: "MD, Energy Group" },
  { quote: "We've moved our entire executive gifting program to Pearl. The concierge experience is unmatched on the continent.", name: "Ifeoma Eze", role: "Brand Director, Telecom Co." },
];

function Testimonials() {
  return (
    <section className="bg-[var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Client Voices</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">Trusted by the teams behind the names you know.</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(t => (
            <figure key={t.name} className="lift rounded-3xl bg-white p-8 shadow-soft">
              <Quote className="h-7 w-7 text-[var(--gold)]" />
              <blockquote className="mt-5 font-display text-xl leading-snug text-[var(--plum-deep)]">"{t.quote}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-[var(--plum)]/10 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-plum text-[var(--gold)] font-display">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-[var(--ink)]">{t.name}</p>
                  <p className="text-xs text-[var(--ink)]/55">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: g1, span: "md:col-span-2 md:row-span-2", h: "tall" },
  { src: g2, span: "" },
  { src: g3, span: "" },
  { src: g4, span: "md:row-span-2" },
  { src: g5, span: "" },
  { src: g6, span: "" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Atelier Gallery</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">A glimpse inside our recent commissions</h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--ink)]/65">Every piece below was hand-finished in our Lagos atelier and delivered within the past quarter.</p>
        </div>
        <div className="mt-14 grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {GALLERY.map((g, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-3xl ${g.span}`}>
              <img src={g.src} alt={`Atelier piece ${i + 1}`} loading="lazy" width={1024} height={1280}
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-x-5 bottom-5 translate-y-3 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-widest text-[var(--gold)]">Commission</p>
                <p className="font-display text-lg">Bespoke piece №{i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "Brief", desc: "Tell us about the occasion, recipients, brand and budget." },
  { n: "02", title: "Curate", desc: "Receive a moodboard, sample selections and a transparent quote." },
  { n: "03", title: "Craft", desc: "We produce, engrave, hand-wrap and quality-check every piece." },
  { n: "04", title: "Deliver", desc: "White-glove dispatch — tracked, insured, beautifully on time." },
];

function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">How It Works</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">From brief to unboxing in four refined steps</h2>
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
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 gradient-plum" />
      <div className="absolute -top-32 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/25 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="text-white">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Let's Begin</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">Have a gifting moment in mind? <em className="not-italic text-gradient-gold">We'd love to design it.</em></h2>
            <p className="mt-6 max-w-lg text-white/75 leading-relaxed">
              Reach our curators directly. Most briefs receive a thoughtful response within two working hours.
            </p>
            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "+234 800 000 0000", href: "tel:+2348000000000" },
                { icon: Mail, label: "hello@pearlgifts.co", href: "mailto:hello@pearlgifts.co" },
                { icon: MapPin, label: "12B Atelier Mews, Victoria Island, Lagos", href: "#" },
              ].map(c => (
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
            <p className="mt-1 text-sm text-white/65">Or skip the form and message a curator on WhatsApp.</p>
            <form onSubmit={(e) => { e.preventDefault(); window.open(WA_LINK, "_blank"); }} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full name" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-[var(--gold)]" />
                <input required placeholder="Company" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-[var(--gold)]" />
              </div>
              <input type="email" required placeholder="Email address" className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-[var(--gold)]" />
              <textarea rows={4} placeholder="Tell us about the occasion, quantities and timeline…" className="w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-[var(--gold)]" />
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
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--plum-deep)] py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-[var(--plum-deep)] font-display text-lg">P</span>
              <span className="font-display text-2xl text-white">Pearl <span className="text-gradient-gold">Gifts</span></span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              A Lagos-based luxury gifting atelier crafting bespoke experiences for organizations that give with intention.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Explore</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li><a href="#categories" className="hover:text-white">Collections</a></li>
              <li><a href="#corporate" className="hover:text-white">Corporate</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Contact</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>hello@pearlgifts.co</li>
              <li>+234 800 000 0000</li>
              <li>Victoria Island, Lagos</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs">
          <p>© {new Date().getFullYear()} Pearl Gifts Atelier. All rights reserved.</p>
          <p>Crafted in Lagos · Delivered with care.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full gradient-plum px-5 py-3.5 text-sm text-white shadow-luxe hover:scale-105 transition">
      <MessageCircle className="h-5 w-5 text-[var(--gold)]" />
      <span className="hidden sm:inline">Chat with a curator</span>
    </a>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <Hero />
      <TrustedBy />
      <Categories />
      <WhyUs />
      <Featured />
      <CorporateSection />
      <Testimonials />
      <Gallery />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
