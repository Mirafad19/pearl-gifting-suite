import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pearl Gifts" },
      { name: "description", content: "Privacy Policy for Pearl Gifts Atelier. Learn how we protect your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Privacy"
        title={<>Your data is <em className="not-italic text-gradient-gold">safe with us</em></>}
        description="We take your privacy seriously. Here's how we protect your information."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="prose prose-invert max-w-none space-y-8 text-[var(--ink)]">
            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Information We Collect</h2>
              <p className="mt-4 leading-relaxed">
                When you use Pearl Gifts services, we collect information necessary to fulfill your order, including:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Name, email, and contact information</li>
                <li>Shipping and billing addresses</li>
                <li>Order history and preferences</li>
                <li>Communication records</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">How We Use Your Data</h2>
              <p className="mt-4 leading-relaxed">
                Your information is used solely to:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Process and deliver your orders</li>
                <li>Communicate about your gifts</li>
                <li>Improve our services</li>
                <li>Send updates and notifications (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Data Protection</h2>
              <p className="mt-4 leading-relaxed">
                We employ industry-standard encryption and security measures to protect your personal information. Your data is never sold to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Cookies</h2>
              <p className="mt-4 leading-relaxed">
                Our website uses cookies to enhance your experience. You can disable cookies through your browser settings if you prefer.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-[var(--plum-deep)]">Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                For privacy concerns or questions about your data, contact us at hello@pearlgifts.co
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
