import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Users } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/connect/belong-groups")({
  head: () => ({
    meta: [
      { title: "Belong Groups | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "Belong Groups are small communities meeting across the Triangle — Durham, Raleigh, Cary, and online. Find your group and grow together.",
      },
      { property: "og:title", content: "Belong Groups | World Overcomers Christian Church" },
      {
        property: "og:description",
        content: "You weren't meant to do life alone. Find a Belong Group near you.",
      },
    ],
  }),
  component: BelongGroupsPage,
});

const groups = [
  {
    name: "Overcomers Men",
    focus: "Men · Study & Accountability",
    when: "Tuesdays · 7:00PM",
    where: "Durham · S Miami Blvd",
  },
  {
    name: "Women of Worth",
    focus: "Women · Study & Prayer",
    when: "Thursdays · 6:30PM",
    where: "Raleigh · Host Home",
  },
  {
    name: "Young Adults Triangle",
    focus: "Ages 18–29 · Life & Faith",
    when: "Wednesdays · 7:30PM",
    where: "Cary · Host Home",
  },
  {
    name: "Marriage Builders",
    focus: "Couples · Real Love Marriage",
    when: "Every other Friday · 7:00PM",
    where: "Durham · Fellowship Hall",
  },
  {
    name: "Overcomers Online",
    focus: "Anyone · Video Group",
    when: "Mondays · 8:00PM",
    where: "Online · Zoom",
  },
  {
    name: "Parents & Purpose",
    focus: "Parents · Family Discipleship",
    when: "Sundays · 12:30PM",
    where: "Durham · Kids Wing",
  },
] as const;

const how = [
  { n: "01", title: "Browse groups", body: "Look through groups by day, location, and season of life." },
  { n: "02", title: "Reach out", body: "Contact the group leader and let them know you're coming." },
  { n: "03", title: "Show up", body: "Bring yourself — and maybe a snack. That's it." },
] as const;

function BelongGroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Belong Groups"
        title="You weren't meant to do life alone"
        intro="Belong Groups are small communities meeting all across the Triangle to grow together, pray together, and show up for each other."
      />

      <section className="section-y bg-background">
        <div className="shell">
          <h2 className="display-lg mb-10">Groups meeting now</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <article key={g.name} className="card-soft flex flex-col border border-border p-7">
                <span className="eyebrow text-brand-clay">{g.focus}</span>
                <h3 className="display-md mt-3 text-foreground">{g.name}</h3>
                <div className="mt-5 flex flex-col gap-2 text-[15px] text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock className="size-4 text-brand-clay" aria-hidden /> {g.when}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 text-brand-clay" aria-hidden /> {g.where}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="size-4 text-brand-clay" aria-hidden /> Open to new members
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-base btn-outline-ink mt-6 !py-3 !text-sm"
                >
                  Join This Group
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-mist">
        <div className="shell">
          <span className="eyebrow text-brand-clay">How it works</span>
          <h2 className="display-lg mt-3.5 mb-10">Three steps to belong</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {how.map((s) => (
              <div key={s.n} className="card-soft border border-border p-8">
                <div
                  className="text-4xl leading-none font-black text-brand-clay/30"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.n}
                </div>
                <h3 className="display-md mt-4 text-foreground">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/connect/ministries" className="btn-base btn-primary">
              Explore Ministries Too →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
