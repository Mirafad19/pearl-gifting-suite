import { Link } from "@tanstack/react-router";
import { LOGO_URL, NAV_LINKS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--plum-deep)] py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Pearl Gifts" className="h-11 w-11 rounded-full bg-white object-contain p-1" />
              <span className="font-display text-2xl text-white">
                Pearl <span className="text-gradient-gold">Gifts</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              A Lagos-based luxury gifting atelier crafting bespoke experiences for organizations that give with intention.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Explore</p>
            <ul className="mt-5 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
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
