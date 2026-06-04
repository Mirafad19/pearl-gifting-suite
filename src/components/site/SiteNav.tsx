import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { LOGO_FULL_URL, NAV_LINKS, WA_LINK } from "@/lib/site-data";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      {scrolled && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-[var(--gold)] via-[var(--gold)]/50 to-transparent rounded-b-full opacity-100 transition-opacity duration-300"></div>
      )}
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between px-5 py-3 transition-all ${
            scrolled
              ? "bg-white shadow-soft border-b border-[var(--plum)]/10"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO_FULL_URL} alt="Pearl Gifts" className="h-20 object-contain" />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-sm text-[var(--ink)]/80 transition-colors hover:text-[var(--plum)]"
                activeProps={{ className: "text-[var(--plum-deep)] font-medium" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full gradient-plum px-5 py-2.5 text-sm text-white shadow-soft hover:opacity-95"
          >
            <MessageCircle className="h-4 w-4" /> Start a Brief
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden rounded-3xl glass p-4 shadow-soft">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--plum)]/5"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-plum px-5 py-3 text-sm text-white"
              >
                <MessageCircle className="h-4 w-4" /> Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
