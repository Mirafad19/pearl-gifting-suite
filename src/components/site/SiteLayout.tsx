import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      {children}
      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--plum)]/12 blur-3xl" />
        <div className="absolute top-20 -right-24 h-[360px] w-[360px] rounded-full bg-[var(--gold)]/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-5 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">{eyebrow}</span>
        <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-[var(--plum-deep)] text-balance">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink)]">{description}</p>
        ) : null}
        <div className="hairline mx-auto mt-10 w-28" />
      </div>
    </section>
  );
}
