import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/connect/black-business-directory")({
  head: () => ({
    meta: [
      { title: "WOCC Black Business Directory | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "Support Black-owned businesses in the World Overcomers family. Browse the WOCC Black Business Directory by category, or list your business.",
      },
      { property: "og:title", content: "WOCC Black Business Directory" },
      {
        property: "og:description",
        content: "Circulate the dollar. Browse and support Black-owned businesses in the WOCC family.",
      },
    ],
  }),
  component: DirectoryPage,
});

const categories = [
  "All",
  "Food & Catering",
  "Health & Beauty",
  "Professional Services",
  "Home & Trades",
  "Creative & Media",
] as const;

const businesses = [
  {
    name: "Triangle Soul Kitchen",
    category: "Food & Catering",
    blurb: "Southern comfort catering for church events, weddings, and family gatherings.",
    contact: "Durham, NC",
  },
  {
    name: "Crown & Glory Studio",
    category: "Health & Beauty",
    blurb: "Natural hair care, locs, and protective styling in a faith-friendly space.",
    contact: "Durham, NC",
  },
  {
    name: "Overcomer Tax & Books",
    category: "Professional Services",
    blurb: "Tax prep, bookkeeping, and small business consulting year-round.",
    contact: "Raleigh, NC",
  },
  {
    name: "Miami Blvd Contracting",
    category: "Home & Trades",
    blurb: "Licensed remodeling, roofing, and repairs across the Triangle.",
    contact: "Durham, NC",
  },
  {
    name: "Lightbearer Media",
    category: "Creative & Media",
    blurb: "Photography, video, and livestream production for ministries and brands.",
    contact: "Cary, NC",
  },
  {
    name: "Grace Notes Bakery",
    category: "Food & Catering",
    blurb: "Custom cakes, pies, and celebration desserts baked to order.",
    contact: "Durham, NC",
  },
  {
    name: "Anchor Wellness Group",
    category: "Health & Beauty",
    blurb: "Massage therapy, wellness coaching, and stress recovery plans.",
    contact: "Morrisville, NC",
  },
  {
    name: "Thompson Legal Advisors",
    category: "Professional Services",
    blurb: "Estate planning, wills, and small business formation.",
    contact: "Durham, NC",
  },
] as const;

function DirectoryPage() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const visible = businesses.filter(
    (b) =>
      (category === "All" || b.category === category) &&
      (query.trim() === "" || `${b.name} ${b.blurb} ${b.category}`.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <>
      <PageHero
        image={photos.businessBarber}
        imageAlt="A Black-owned business owner at work"
        eyebrow="WOCC Black Business Directory"
        title="Circulate the dollar"
        intro="A growing directory of Black-owned businesses in the World Overcomers family. Shop, hire, and refer within the house."
      />

      <section className="section-y bg-background">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <label className="relative flex-1 min-w-[260px]">
              <span className="sr-only">Search the directory</span>
              <Search
                className="pointer-events-none absolute top-1/2 left-5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search businesses, services, categories"
                className="w-full rounded-pill border border-border bg-secondary py-4 pr-5 pl-12 text-[15px] text-foreground outline-none focus:border-brand-sky"
              />
            </label>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`btn-base !px-5 !py-2.5 !text-sm ${category === c ? "btn-slate" : "btn-outline-ink"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="text-[16px] text-muted-foreground">
              No listings match that search yet. Try another category or keyword.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((b) => (
                <article key={b.name} className="card-soft flex flex-col border border-border p-7">
                  <span className="eyebrow text-brand-clay">{b.category}</span>
                  <h2 className="display-md mt-3 text-foreground">{b.name}</h2>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted-foreground">{b.blurb}</p>
                  <div className="mt-5 border-t border-border pt-4 text-[14px] text-muted-foreground">
                    {b.contact}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-y bg-ink text-on-ink">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brand-sky">List your business</span>
            <h2 className="display-lg mt-3.5">Are you a WOCC business owner?</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
              Submit your business and we'll add it to the directory so the whole church family can find and
              support you.
            </p>
          </div>
          <form
            className="rounded-3xl border border-white/12 bg-white/[0.04] p-8"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div className="flex flex-col gap-3">
              <label>
                <span className="sr-only">Business name</span>
                <input
                  required
                  placeholder="Business name"
                  className="w-full rounded-pill border border-white/20 bg-white/[0.06] px-5 py-3.5 text-[15px] text-on-ink outline-none placeholder:text-white/40 focus:border-brand-sky"
                />
              </label>
              <label>
                <span className="sr-only">Your email</span>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-pill border border-white/20 bg-white/[0.06] px-5 py-3.5 text-[15px] text-on-ink outline-none placeholder:text-white/40 focus:border-brand-sky"
                />
              </label>
              <label>
                <span className="sr-only">What you offer</span>
                <textarea
                  rows={3}
                  required
                  placeholder="What you offer"
                  className="w-full rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-3.5 text-[15px] text-on-ink outline-none placeholder:text-white/40 focus:border-brand-sky"
                />
              </label>
              <button type="submit" className="btn-base btn-primary mt-1">
                Submit Listing
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
