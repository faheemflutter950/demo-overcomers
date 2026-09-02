import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";

import logoWhite from "@/assets/wocc-logo-white.png.asset.json";

const visitLinks = [
  { to: "/visit", label: "Plan a Visit" },
  { to: "/messages", label: "Watch Online" },
  { to: "/messages", label: "Messages" },
  { to: "/events", label: "Events" },
] as const;

const connectLinks = [
  { to: "/connect/belong-groups", label: "Belong Groups" },
  { to: "/connect/ministries", label: "Ministries" },
  { to: "/connect/black-business-directory", label: "Black Business Directory" },
  { to: "/give", label: "Give" },
  { to: "/about", label: "Our Founder" },
] as const;

const socials = [
  { href: "https://www.youtube.com/@woccdurham/", label: "YouTube", Icon: Youtube },
  { href: "https://www.facebook.com/worldovercomers/", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/worldovercomers/", label: "Instagram", Icon: Instagram },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="shell pt-16 pb-9 md:pt-[72px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <img src={logoWhite.url} alt="World Overcomers Christian Church" className="mb-5 h-8 w-auto" />
            <p className="mb-5 max-w-[300px] text-[15px] leading-relaxed text-white/60">
              Balanced Victory For The God Designed Life. A welcoming family of faith in Durham, NC.
            </p>
            <div className="text-sm leading-[1.7] text-white/70">
              2933 S Miami Blvd, Suite 101 · Durham, NC 27703
              <br />
              (919) 402-9622 · contact@wocconline.org
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4 text-brand-sky">Visit</div>
            <div className="flex flex-col gap-3 text-[15px] text-white/75">
              {visitLinks.map((link, i) => (
                <Link key={`${link.to}-${i}`} to={link.to} className="transition-colors hover:text-on-ink">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4 text-brand-sky">Connect</div>
            <div className="flex flex-col gap-3 text-[15px] text-white/75">
              {connectLinks.map((link) => (
                <Link key={link.label} to={link.to} className="transition-colors hover:text-on-ink">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4 text-brand-sky">Service Times</div>
            <div className="text-[14.5px] leading-[1.8] text-white/75">
              Sunday Worship · 10:00AM
              <br />
              Sunday Office · 10:00AM – 2:00PM
              <br />
              Mon–Fri · 10:00AM – 4:00PM
              <br />
              Saturday · Closed
            </div>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  <Icon className="size-[17px]" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-7 text-[13px] text-white/45">
          <span>© {new Date().getFullYear()} World Overcomers Christian Church. All rights reserved.</span>
          <span>worldovercomers.church</span>
        </div>
      </div>
    </footer>
  );
}
