import { Link } from "@tanstack/react-router";
import { LOGO_FULL_URL, NAV_LINKS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--plum-deep)] text-white/85">
      <div className="mx-auto max-w-7xl px-5 py-18 md:py-24">
        <div className="grid gap-14 md:gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={LOGO_FULL_URL} alt="Pearl Gifts" className="h-24 object-contain" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/90">
              A Lagos-based luxury gifting atelier crafting bespoke experiences for organizations that give with intention.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Contact</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="mailto:hello@pearlgifts.co" className="transition hover:text-white">hello@pearlgifts.co</a>
              </li>
              <li>
                <a href="tel:+2348000000000" className="transition hover:text-white">+234 800 000 0000</a>
              </li>
              <li>Victoria Island, Lagos</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Pearl Gifts Atelier. All rights reserved.</p>
          <p>Crafted in Lagos · Delivered with care.</p>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[var(--plum)]/50 py-6">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <p>Premium gifting experiences | Handcrafted with intention | Delivered across Nigeria</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <span className="text-white/40">•</span>
            <Link to="/terms" className="transition hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
