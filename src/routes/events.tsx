import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { photos } from "@/data/photos";
import { eventFilters, events } from "@/data/site-content";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "Gatherings, classes, and celebrations all year long at World Overcomers Christian Church in Durham, NC. Find your next step.",
      },
      { property: "og:title", content: "Events | World Overcomers Christian Church" },
      {
        property: "og:description",
        content: "Worship nights, kids camps, outreach days, and more at WOCC Durham.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [filter, setFilter] = useState<string>("All Events");
  const visible = events.filter((e) => filter === "All Events" || e.category === filter);
  const featured = events[0];

  return (
    <>
      <PageHero
        image={photos.fellowshipMeal}
        imageAlt="Church family gathered at a World Overcomers event"
        eyebrow="What's happening"
        title={
          <>
            Events at
            <br />
            World Overcomers
          </>
        }
        intro="Gatherings, classes, and celebrations all year long. There's always a next step — find yours below."
      />

      <section className="bg-brand-clay text-on-ink">
        <div className="shell flex flex-wrap items-center gap-x-10 gap-y-5 py-10">
          <div>
            <span className="eyebrow text-white/70">Featured · This Weekend</span>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-3xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                {featured.month.toUpperCase()} {featured.day}
              </span>
              <span className="text-[15px] text-white/80">
                · {featured.weekday} · {featured.time}
              </span>
            </div>
          </div>
          <div className="max-w-xl">
            <h2 className="display-md">{featured.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-white/85">{featured.body}</p>
          </div>
          <button type="button" className="btn-base btn-outline-light md:ml-auto">
            RSVP & Details →
          </button>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <h2 className="display-lg">Upcoming events</h2>
            <div className="flex flex-wrap gap-2">
              {eventFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`btn-base !px-5 !py-2.5 !text-sm ${filter === f ? "btn-primary" : "btn-outline-ink"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((e) => (
              <article key={e.title} className="card-soft flex flex-col border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-ink text-on-ink">
                    <span className="eyebrow text-brand-sky">{e.month}</span>
                    <span className="text-2xl leading-none font-black" style={{ fontFamily: "var(--font-display)" }}>
                      {e.day}
                    </span>
                  </div>
                  <div>
                    <span className="eyebrow text-brand-clay">{e.tag}</span>
                    <h3 className="display-md mt-1.5 text-foreground">{e.title}</h3>
                    <span className="text-[13px] text-muted-foreground">{e.weekday}</span>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">{e.body}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-[14px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4 text-brand-clay" aria-hidden /> {e.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-4 text-brand-clay" aria-hidden /> {e.place}
                  </span>
                  <button
                    type="button"
                    className="ml-auto text-sm font-bold text-brand-clay"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {e.cta} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-on-ink">
        <div className="shell max-w-3xl text-center">
          <h2 className="display-lg">Never miss a moment.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
            Subscribe to get every event, class, and celebration delivered to your inbox — and add WOCC to your
            calendar.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <label className="flex-1">
              <span className="sr-only">Your email address</span>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-pill border border-white/20 bg-white/[0.06] px-5 py-4 text-[15px] text-on-ink outline-none placeholder:text-white/40 focus:border-brand-sky"
              />
            </label>
            <button type="submit" className="btn-base btn-primary !py-4">
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
