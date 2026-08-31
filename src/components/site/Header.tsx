import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import logoBlack from "@/assets/wocc-logo-black.png.asset.json";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/visit", label: "Plan a Visit" },
  { to: "/messages", label: "Messages" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
] as const;

const connectLinks = [
  {
    to: "/connect/ministries",
    label: "Ministries",
    blurb: "Find your place in a ministry family",
  },
  {
    to: "/connect/belong-groups",
    label: "Belong Groups",
    blurb: "Small communities across the Triangle",
  },
  {
    to: "/connect/black-business-directory",
    label: "WOCC Black Business Directory",
    blurb: "Support businesses in our church family",
  },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setConnectOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setConnectOpen(false), 140);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-lg">
      <div className="shell flex h-[76px] items-center gap-7">
        <Link to="/" className="mr-2 flex items-center" aria-label="World Overcomers Christian Church home">
          <img src={logoBlack.url} alt="World Overcomers Christian Church" className="h-7 w-auto md:h-[30px]" />
        </Link>

        <nav
          className="ml-auto hidden items-center gap-7 lg:flex"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {mainLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[14.5px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-brand-red"
              activeProps={{ className: "text-brand-red" }}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
            <button
              type="button"
              onClick={() => setConnectOpen((v) => !v)}
              aria-expanded={connectOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-[14.5px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-brand-red"
            >
              Connect
              <ChevronDown
                className={`size-4 transition-transform ${connectOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            {connectOpen && (
              <div className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4">
                <div className="overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-[var(--shadow-lift)]">
                  {connectLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setConnectOpen(false)}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
                    >
                      <span className="block text-[15px] font-semibold text-foreground">{item.label}</span>
                      <span
                        className="mt-0.5 block text-[13px] text-muted-foreground"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {item.blurb}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <Link to="/visit" className="btn-base btn-outline-ink hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
            I'm New
          </Link>
          <Link to="/give" className="btn-base btn-primary !px-5 !py-2.5 !text-sm">
            Give
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-ink text-on-ink">
            <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
              <span className="eyebrow text-brand-blue">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/20"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col gap-1">
                {mainLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-2xl font-extrabold uppercase tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => setMobileConnectOpen((v) => !v)}
                    aria-expanded={mobileConnectOpen}
                    className="flex w-full items-center justify-between py-3 text-2xl font-extrabold uppercase tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Connect
                    <ChevronDown
                      className={`size-5 transition-transform ${mobileConnectOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {mobileConnectOpen && (
                    <ul className="mb-2 ml-1 flex flex-col gap-2 border-l border-white/15 pl-4">
                      {connectLinks.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-[15px] text-white/75"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <Link to="/give" onClick={() => setMobileOpen(false)} className="btn-base btn-primary w-full">
                  Give
                </Link>
                <Link
                  to="/visit"
                  onClick={() => setMobileOpen(false)}
                  className="btn-base btn-outline-light w-full"
                >
                  I'm New
                </Link>
              </div>

              <div className="mt-8 text-[14px] leading-relaxed text-white/60">
                2933 S Miami Blvd, Suite 101
                <br />
                Durham, NC 27703
                <br />
                (919) 402-9622
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
