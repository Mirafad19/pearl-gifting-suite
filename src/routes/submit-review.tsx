import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/submit-review")({
  head: () => ({
    meta: [
      { title: "Submit Your Review — Pearl Gifts" },
      { name: "description", content: "Share your experience with Pearl Gifts. Submit your testimonial and help us continue to serve with excellence." },
    ],
  }),
  component: SubmitReviewPage,
});

function SubmitReviewPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Create email body
    const emailBody = `
New Review Submission:

Name: ${formData.get("name")}
Company/Organization: ${formData.get("company")}
Position/Role: ${formData.get("position")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}

Review:
${formData.get("review")}

---
Submitted on: ${new Date().toLocaleString()}
    `;

    // Send to email via mailto
    window.location.href = `mailto:hello@pearlgifts.co?subject=New Client Review Submission&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Share Your Experience"
        title={<>Help us improve by <em className="not-italic text-gradient-gold">sharing your story</em></>}
        description="Your feedback means everything to us. Tell us about your experience with Pearl Gifts."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-3xl bg-[var(--cream)] p-10 md:p-14 shadow-soft">
            <h2 className="font-display text-2xl text-[var(--plum-deep)]">
              Share Your Review
            </h2>
            <p className="mt-3 text-[var(--ink)]">
              Your testimonial helps other organizations discover Pearl Gifts and understand the quality of our work.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[var(--plum-deep)] mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--plum-deep)] mb-2">
                    Company/Organization
                  </label>
                  <input
                    required
                    type="text"
                    name="company"
                    placeholder="Your organization"
                    className="w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[var(--plum-deep)] mb-2">
                    Position/Role
                  </label>
                  <input
                    required
                    type="text"
                    name="position"
                    placeholder="e.g. Head of People"
                    className="w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--plum-deep)] mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--plum-deep)] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  className="w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--plum-deep)] mb-2">
                  Your Review
                </label>
                <textarea
                  required
                  name="review"
                  rows={6}
                  placeholder="Tell us about your experience with Pearl Gifts. What was memorable? How did our work impact your organization?"
                  className="w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30 resize-none"
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full gradient-plum px-8 py-3.5 text-sm font-medium text-white shadow-soft hover:opacity-95 transition"
                >
                  Submit Review <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[var(--plum-deep)] transition hover:bg-[var(--plum)]/5"
                >
                  Chat with us instead
                </a>
              </div>

              <p className="mt-6 text-xs text-[var(--ink)]/60">
                By submitting this review, you agree that Pearl Gifts may feature your testimonial on our website with your name and organization.
              </p>
            </form>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 md:p-10 text-center">
            <p className="text-[var(--ink)]">
              Have questions? <a href={WA_LINK} target="_blank" rel="noreferrer" className="font-medium text-[var(--plum)] hover:text-[var(--plum-deep)]">Reach out to us on WhatsApp</a>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
