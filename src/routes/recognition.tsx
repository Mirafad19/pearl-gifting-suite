import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Quote } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/recognition")({
  head: () => ({
    meta: [
      { title: "Recognition & Awards — Pearl Gifts" },
      { name: "description", content: "Pearl Gifts has been recognized as one of Africa's leading luxury gifting houses. A look at the awards and milestones along the way." },
      { property: "og:title", content: "Recognition & Awards — Pearl Gifts" },
      { property: "og:description", content: "Awards, milestones and client recognition for Pearl Gifts." },
      { property: "og:image", content: IMG.award },
      { name: "twitter:image", content: IMG.award },
    ],
  }),
  component: RecognitionPage,
});

const MILESTONES = [
  { year: "2024", title: "Luxury Gifting House of the Year", body: "Recognized at the West African Luxury & Lifestyle Awards for craft, consistency and client experience." },
  { year: "2023", title: "Top 50 Brands to Watch", body: "Featured among the continent's most promising lifestyle brands by an industry publication." },
  { year: "2022", title: "Best Corporate Gifting Partner", body: "Awarded by a coalition of HR and marketing leaders for sustained service across 100+ organizations." },
];

const TESTIMONIALS = [
  { quote: "Pearl Gifts handled our 2,400-piece year-end gifting flawlessly. Every box arrived as though it were the only one.", name: "Adaeze Okonkwo", role: "Head of People, Fintech Lagos" },
  { quote: "The bamboo heritage set we commissioned became the talk of our AGM. The craftsmanship is genuinely world-class.", name: "Tunde Bakare", role: "MD, Energy Group" },
  { quote: "We've moved our entire executive gifting program to Pearl. The concierge experience is unmatched on the continent.", name: "Ifeoma Eze", role: "Brand Director, Telecom Co." },
];

function RecognitionPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Recognition"
        title={<>Honored to be named among <em className="not-italic text-gradient-gold">the continent's best.</em></>}
        description="We do this work for the relationships behind every gift. The recognition that follows is a kind reflection of the care our clients have trusted us with."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[2.5rem] bg-[var(--cream)] shadow-luxe">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="relative min-h-[420px]">
                <img src={IMG.award} alt="Pearl Gifts receiving an industry award" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-10 md:p-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--plum)]/8 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--plum-deep)]">
                  <Award className="h-3.5 w-3.5 text-[var(--gold)]" /> 2024 Recognition
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl text-[var(--plum-deep)] text-balance">
                  Luxury Gifting House of the Year
                </h2>
                <p className="mt-5 text-[var(--ink)]/70 leading-relaxed">
                  We were honored to receive this recognition for craft, consistency and the care with which we serve the teams behind each gift. It belongs as much to our artisans and clients as it does to us.
                </p>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-plum px-6 py-3.5 text-sm text-white shadow-soft">
                  Work with us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Milestones</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">A decade of considered gifting</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {MILESTONES.map((m) => (
              <article key={m.year} className="rounded-3xl bg-white p-8 shadow-soft">
                <p className="font-display text-5xl text-gradient-gold">{m.year}</p>
                <h3 className="mt-4 font-display text-2xl text-[var(--plum-deep)]">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/65">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Client Voices</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              Trusted by the teams behind the names you know.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-white p-8 shadow-soft transition hover:shadow-luxe">
                <Quote className="h-7 w-7 text-[var(--gold)]" />
                <blockquote className="mt-5 font-display text-xl leading-snug text-[var(--plum-deep)]">"{t.quote}"</blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-[var(--plum)]/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-plum text-[var(--gold)] font-display">
                    {t.name.split(" ").map((n) => n[0]).join("")}
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
    </SiteLayout>
  );
}
