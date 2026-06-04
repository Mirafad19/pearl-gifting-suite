import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Pearl Gifts" },
      { name: "description", content: "Frequently asked questions about Pearl Gifts, our process, delivery, customization, and corporate gifting programs." },
      { property: "og:title", content: "FAQs — Pearl Gifts" },
      { property: "og:description", content: "Answers to common questions about Pearl Gifts." },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What's the minimum order for a bespoke gift?",
        a: "We work with orders from 1 unit upwards. For corporate programs, our minimum is 25 pieces per order. Individual customers can commission single pieces without any minimum.",
      },
      {
        q: "How long does the process take from brief to delivery?",
        a: "For standard collections, we can deliver within 10-14 business days. Bespoke commissions typically take 3-4 weeks depending on customization complexity. Rush orders are available for urgent timelines.",
      },
      {
        q: "Do you ship nationwide?",
        a: "Yes. We deliver across all 36 states in Nigeria with white-glove insured logistics. International shipping is available for select destinations — contact us for a quote.",
      },
      {
        q: "What's your pricing structure?",
        a: "Pricing varies by collection and customization. We offer transparent pricing with no hidden fees. Most pieces range from ₦50,000 to ₦500,000+. Request a quote for exact pricing based on your brief.",
      },
    ],
  },
  {
    category: "Customization & Design",
    items: [
      {
        q: "Can I personalize gifts with company logos or names?",
        a: "Absolutely. We specialize in custom engraving, embroidery, embossing, and branded packaging. Our design studio will work with you to integrate your brand seamlessly.",
      },
      {
        q: "What materials do you work with?",
        a: "Primarily bamboo, full-grain leather, crystal, polished wood, brass, and silk. All materials are sourced from verified artisans and suppliers. Custom material requests are evaluated case-by-case.",
      },
      {
        q: "Can I see samples before ordering?",
        a: "For corporate programs and larger orders, we send sample pieces for approval before full production. For smaller commissions, we provide detailed moodboards and product specs.",
      },
      {
        q: "How many design iterations do you offer?",
        a: "Up to 3 design revisions are included in the consultation phase. Additional revisions are charged per our design fee schedule.",
      },
    ],
  },
  {
    category: "Corporate Programs",
    items: [
      {
        q: "What kind of corporate gifting programs do you run?",
        a: "We handle year-end hampers, onboarding kits, executive appreciation sets, partner/vendor gifting, event souvenirs, and quarterly retainers with stocked SKUs.",
      },
      {
        q: "Do you manage the entire process or just supply gifts?",
        a: "We manage everything — from brief to dispatch. Your dedicated curator handles design, sourcing, quality control, and white-glove delivery. You have a single point of contact throughout.",
      },
      {
        q: "Can you handle variable recipient names/addresses?",
        a: "Yes. We can personalize each piece with recipient names, titles, or addresses. Our system tracks customization data to ensure accuracy across 1,000+ pieces.",
      },
      {
        q: "What happens if I need to adjust quantities mid-production?",
        a: "Contact your curator immediately. Small adjustments (±5%) are usually accommodated without delay. Larger changes may push timelines or incur fees.",
      },
    ],
  },
  {
    category: "Delivery & Returns",
    items: [
      {
        q: "Is delivery insured?",
        a: "Yes. All shipments are fully insured against loss or damage. We track deliveries in real-time and provide proof of delivery.",
      },
      {
        q: "What if a gift arrives damaged?",
        a: "We replace damaged pieces at no cost. Report damage within 48 hours of delivery with photos for a hassle-free replacement.",
      },
      {
        q: "Can I return or exchange items?",
        a: "Custom items cannot be returned, as they're made-to-order. We can discuss modifications or replacements if there's an error on our end.",
      },
      {
        q: "Do you handle gift wrapping or unboxing?",
        a: "Hand-wrapping and luxury packaging are included. For corporate orders, we can also arrange unboxing experiences or presentation video services.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "Are your products eco-friendly?",
        a: "We prioritize sustainable materials — bamboo, recycled packaging, and ethical sourcing. We're committed to minimizing environmental impact across our supply chain.",
      },
      {
        q: "Can I visit the atelier?",
        a: "Yes, by appointment. We welcome visits to see our workspace, meet the team, and discuss your project. Contact us to schedule.",
      },
      {
        q: "Do you work with international brands or non-profit organizations?",
        a: "Yes to both. We've served Fortune 500 companies, startups, nonprofits, and government institutions. Bulk rates and partnerships are available.",
      },
      {
        q: "What if I have a question not listed here?",
        a: "Reach out to hello@pearlgifts.co or message a curator on WhatsApp. We respond to most inquiries within 2 hours during business hours.",
      },
    ],
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {FAQS.map((section, sectionIdx) => (
        <div key={section.category}>
          <h3 className="mb-6 font-display text-2xl text-[var(--plum-deep)]">
            {section.category}
          </h3>
          <div className="space-y-4">
            {section.items.map((item, itemIdx) => {
              const id = `${sectionIdx}-${itemIdx}`;
              const isOpen = openIndex === id;
              return (
                <button
                  key={id}
                  onClick={() => setOpenIndex(isOpen ? null : id)}
                  className="w-full text-left rounded-2xl border border-[var(--plum)]/15 bg-white p-6 shadow-soft transition hover:shadow-luxe hover:border-[var(--plum)]/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display text-lg text-[var(--plum-deep)]">
                      {item.q}
                    </h4>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <p className="mt-4 text-[var(--ink)] leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="FAQs"
        title={<>Questions about your <em className="not-italic text-gradient-gold">perfect gift</em></>}
        description="Answers to common questions about our process, customization, delivery, and corporate programs. Can't find what you're looking for?"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <FAQAccordion />

          <div className="mt-20 rounded-3xl bg-[var(--cream)] p-10 md:p-14 text-center">
            <h3 className="font-display text-2xl md:text-3xl text-[var(--plum-deep)]">
              Didn't find your answer?
            </h3>
            <p className="mt-4 text-[var(--ink)]">
              Chat with a curator directly — we're here to help with any question, no matter how specific.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full gradient-plum px-7 py-3.5 text-sm text-white shadow-soft hover:opacity-95"
              >
                Message a Curator <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--plum)]/20 px-7 py-3.5 text-sm text-[var(--plum-deep)] hover:bg-white"
              >
                Send an Email <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
