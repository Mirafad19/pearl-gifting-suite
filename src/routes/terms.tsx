import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pearl Gifts" },
      { name: "description", content: "Terms of Service for Pearl Gifts Atelier. Please read before placing an order." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Legal"
        title={<>Terms of <em className="not-italic text-gradient-gold">Service</em></>}
        description="Please read these terms carefully before ordering from Pearl Gifts."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="prose prose-invert max-w-none space-y-8 text-[var(--ink)]">
            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Agreement to Terms</h2>
              <p className="mt-4 leading-relaxed">
                By accessing and using the Pearl Gifts website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Product Descriptions</h2>
              <p className="mt-4 leading-relaxed">
                We strive to provide accurate descriptions of our products. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. All products are custom-made and subject to availability.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Ordering Process</h2>
              <p className="mt-4 leading-relaxed">
                Once you submit an order, you are making an offer to purchase. Pearl Gifts reserves the right to accept or reject any order. Orders are confirmed via email after our team reviews your brief.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Payment Terms</h2>
              <p className="mt-4 leading-relaxed">
                Payment is due before production begins. We accept various payment methods. A 50% deposit may be required for large orders, with the balance due upon completion.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Customization & Production</h2>
              <p className="mt-4 leading-relaxed">
                Customized orders cannot be returned or refunded. Standard turnaround time is 10-14 business days. Rush orders available upon request with additional fees.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Shipping & Delivery</h2>
              <p className="mt-4 leading-relaxed">
                We ship across Nigeria with insured, tracked delivery. International shipping available. Customers are responsible for any customs duties or taxes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Liability</h2>
              <p className="mt-4 leading-relaxed">
                Pearl Gifts is not liable for indirect, incidental, or consequential damages. Our liability is limited to the amount paid for the product.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Changes to Terms</h2>
              <p className="mt-4 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
              </p>
            </div>

            <p className="mt-8 text-sm text-[var(--ink)]/70">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
