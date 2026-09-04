import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { photos } from "@/data/photos";
import { ministries } from "@/data/site-content";

export const Route = createFileRoute("/connect/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "Men, women, youth, kids, marriage, outreach, worship, and counseling — find the WOCC ministry built for your season of life.",
      },
      { property: "og:title", content: "Ministries | World Overcomers Christian Church" },
      {
        property: "og:description",
        content: "There's a place for every season of life at World Overcomers in Durham, NC.",
      },
    ],
  }),
  component: MinistriesPage,
});

const nextSteps = [
  {
    title: "More than a Sunday",
    body: "Small communities meeting across the Triangle to grow together.",
    cta: "Find a Group",
    to: "/connect/belong-groups",
  },
  {
    title: "Volunteer",
    body: "Use your gifts to serve the church and the community each week.",
    cta: "Start Serving",
    to: "/visit",
  },
  {
    title: "Counseling Center",
    body: "Professional, faith-centered support for whatever you're facing.",
    cta: "Learn More",
    to: "/about",
  },
] as const;

function MinistriesPage() {
  return (
    <>
      <PageHero
        image={photos.families}
        imageAlt="Families at World Overcomers Christian Church"
        eyebrow="Get Connected"
        title="Ministries at World Overcomers"
        intro="There's a place for every season of life. Jump into a ministry family and start doing life with people who are going your way."
      />

      <section className="section-y bg-background">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ministries.map((m, i) => (
              <div key={m.name} className="card-soft border border-border p-7">
                <span className="eyebrow text-brand-clay">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display-md mt-3 text-foreground">{m.name}</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-on-ink">
        <div className="shell">
          <span className="eyebrow text-brand-sky">Next Steps</span>
          <h2 className="display-lg mt-3.5 mb-10">Take your next step</h2>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {nextSteps.map((s) => (
              <Link key={s.title} to={s.to} className="bg-ink p-9 transition-colors hover:bg-ink-deep">
                <h3 className="display-md text-on-ink">{s.title}</h3>
                <p className="mt-3 mb-5 text-[15px] leading-relaxed text-white/60">{s.body}</p>
                <span className="text-sm font-bold text-brand-sky" style={{ fontFamily: "var(--font-display)" }}>
                  {s.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
