import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { LOGO_URL, NAV_LINKS, WA_LINK } from "@/lib/site-data";

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
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl border px-5 py-2.5 transition-all ${
            scrolled
              ? "glass border-white/40 shadow-soft"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Pearl Gifts" className="h-10 w-10 rounded-full object-contain bg-white p-1 ring-1 ring-[var(--plum)]/15" />
            <span className="font-display text-xl tracking-wide text-[var(--plum-deep)]">
              Pearl <span className="text-gradient-gold font-semibold">Gifts</span>
            </span>
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

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full gradient-plum px-5 py-2.5 text-sm text-white shadow-soft hover:opacity-95"
          >
            <MessageCircle className="h-4 w-4" /> Request Quote
          </a>

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
