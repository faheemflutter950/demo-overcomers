import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-on-ink">
      {image && (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover object-[center_35%]" />
          <div className="hero-scrim absolute inset-0" />
          <div className="hero-scrim-side absolute inset-0" />
        </>
      )}
      <div className="shell relative pt-16 pb-14 md:pt-24 md:pb-20">
        <span className="eyebrow text-brand-sky">{eyebrow}</span>
        <h1 className="display-xl mt-4 max-w-4xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  aside,
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
      <div>
        <span className={`eyebrow ${tone === "dark" ? "text-brand-sky" : "text-brand-clay"}`}>{eyebrow}</span>
        <h2 className={`display-lg mt-3.5 ${tone === "dark" ? "text-on-ink" : "text-foreground"}`}>{title}</h2>
      </div>
      {aside}
    </div>
  );
}
