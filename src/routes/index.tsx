import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";

import heroImg from "@/assets/worship-hero.jpg.asset.json";
import symbolBlack from "@/assets/wocc-symbol-black.png.asset.json";
import { SectionHeading } from "@/components/site/PageHero";
import { messages } from "@/data/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "World Overcomers Christian Church | Durham, NC" },
      {
        name: "description",
        content:
          "A welcoming family of faith in Durham, NC led by Pastor Andy Thompson. Sundays at 10AM in person and online — balanced victory for the God designed life.",
      },
      { property: "og:title", content: "World Overcomers Christian Church | Durham, NC" },
      {
        property: "og:description",
        content: "Balanced victory for the God designed life. Sundays at 10AM in Durham, NC — in person and online.",
      },
    ],
  }),
  component: Home,
});

const participate = [
  {
    n: "01",
    title: "Attend in Person",
    body: "Meet us in the house for an unforgettable morning of worship and Word.",
    cta: "Plan Visit",
    to: "/visit",
    tone: "bg-brand-sky/70",
  },
  {
    n: "02",
    title: "Watch Online",
    body: "We're live every Sunday — join the Worship Experience from anywhere in the world.",
    cta: "Join Online",
    to: "/messages",
    tone: "bg-brand-clay/70",
  },
  {
    n: "03",
    title: "Serve the City",
    body: "Take the church to the streets of Durham through outreach and community serve days.",
    cta: "Get Involved",
    to: "/connect/ministries",
    tone: "bg-ink/70",
  },
] as const;

const involved = [
  {
    n: "01",
    title: "Volunteer",
    body: "Be a part of something bigger. There are many opportunities to serve with us each weekend.",
    cta: "Get Started",
  },
  {
    n: "02",
    title: "Lead",
    body: "Become a ministry leader, lead a small group, or host an event in your community.",
    cta: "Learn More",
  },
  {
    n: "03",
    title: "Assist",
    body: "Explore opportunities to use your gifts and talents in a ministry setting.",
    cta: "Learn More",
  },
] as const;

function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[86vh] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img
            src={heroImg.url}
            alt="World Overcomers worship experience in Durham, NC"
            className="size-full object-cover object-[center_40%]"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="hero-scrim-side absolute inset-0" />
        </div>

        <div className="shell relative pt-28 pb-16 md:pb-[84px]">
          <div className="fade-up mb-7 inline-flex items-center gap-2.5 rounded-pill border border-brand-clay/50 bg-brand-clay/15 px-4 py-2">
            <span className="size-2 rounded-full bg-brand-clay ring-4 ring-brand-clay/25" />
            <span className="eyebrow text-on-ink">World Overcomers · Durham, NC</span>
          </div>
          <h1 className="display-xl max-w-[980px] text-on-ink">
            Balanced victory
            <br />
            for the <span className="text-brand-sky">God designed</span> life
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            A welcoming family of faith in Durham, NC, led by Pastor Andy Thompson. Wherever you are, there's a
            place for you here.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/visit" className="btn-base btn-primary !px-8 !py-4 !text-base">
              Plan Your Visit <ArrowRight className="size-[18px]" aria-hidden />
            </Link>
            <Link to="/messages" className="btn-base btn-outline-light !px-7 !py-4 !text-base">
              <Play className="size-4" aria-hidden /> Watch Online
            </Link>
            <div className="flex flex-col md:ml-2">
              <span
                className="text-[15px] font-extrabold tracking-wide text-on-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SUNDAYS · 10:00AM
              </span>
              <span className="text-[13px] text-white/60">In-person Worship Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED EVENT STRIP ============ */}
      <section className="border-t border-white/10 bg-ink-deep">
        <div className="shell flex flex-wrap items-center gap-x-6 gap-y-2 py-5">
          <span className="eyebrow text-brand-clay">This Weekend</span>
          <span className="text-[19px] font-semibold text-on-ink" style={{ fontFamily: "var(--font-display)" }}>
            Father's Day at World Overcomers
          </span>
          <span className="text-[15px] text-white/55">Sunday · 10:00AM · Bring the whole family</span>
          <Link to="/events" className="text-sm font-semibold text-brand-sky md:ml-auto">
            Details →
          </Link>
        </div>
      </section>

      {/* ============ PARTICIPATE ============ */}
      <section className="section-y bg-background">
        <div className="shell">
          <SectionHeading
            eyebrow="Get Started"
            title={
              <>
                How would you
                <br />
                like to participate?
              </>
            }
            aside={
              <p className="max-w-[340px] text-[17px] leading-relaxed text-muted-foreground">
                Three simple ways to connect with the WOCC family this week — in person, online, or out in the
                community.
              </p>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {participate.map((card) => (
              <Link
                key={card.n}
                to={card.to}
                className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-ink md:min-h-[440px]"
              >
                <img
                  src={heroImg.url}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 size-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 mix-blend-color ${card.tone}`} />
                <div className="hero-scrim absolute inset-0" />
                <div className="relative p-8">
                  <span className="eyebrow text-brand-sky">{card.n}</span>
                  <h3 className="display-md mt-2 text-on-ink">{card.title}</h3>
                  <p className="mt-2 mb-4 text-[15px] leading-relaxed text-white/80">{card.body}</p>
                  <span
                    className="text-sm font-bold text-on-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MESSAGES ============ */}
      <section className="section-y bg-surface-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="Latest Teaching"
            title={
              <>
                Messages from
                <br />
                World Overcomers
              </>
            }
            aside={
              <Link to="/messages" className="btn-base btn-outline-ink">
                All Messages →
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {messages.map((m) => (
              <Link key={m.title} to="/messages" className="card-soft group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2 rounded-pill bg-ink/80 px-3 py-1.5 backdrop-blur">
                    <Play className="size-3 text-brand-clay" aria-hidden />
                    <span
                      className="text-xs font-semibold tracking-wide text-on-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {m.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-[21px] leading-tight font-bold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">{m.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2.5 border-t border-border pt-3.5">
                    <img src={symbolBlack.url} alt="" aria-hidden className="size-6 object-contain" />
                    <span className="text-[13.5px] font-semibold text-foreground/80">{m.speaker}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GET INVOLVED ============ */}
      <section className="section-y bg-ink">
        <div className="shell">
          <div className="mb-12 text-center">
            <span className="eyebrow text-brand-sky">Find Your Place</span>
            <h2 className="display-lg mt-3.5 text-on-ink">How to get involved</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {involved.map((item) => (
              <Link key={item.n} to="/connect/ministries" className="bg-ink p-9 transition-colors hover:bg-ink-deep">
                <div
                  className="text-5xl leading-none font-black text-brand-sky/35"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.n}
                </div>
                <h3 className="display-md mt-4 text-on-ink">{item.title}</h3>
                <p className="mt-3 mb-5 text-[15px] leading-relaxed text-white/60">{item.body}</p>
                <span className="text-sm font-bold text-brand-sky" style={{ fontFamily: "var(--font-display)" }}>
                  {item.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MINISTRIES TEASER ============ */}
      <section className="section-y bg-background">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow text-brand-clay">Belong Groups & Ministries</span>
            <h2 className="display-lg mt-3.5 mb-5 text-foreground">You weren't meant to do life alone</h2>
            <p className="mb-7 text-[17px] leading-relaxed text-muted-foreground">
              From men's and women's ministry to youth, marriage, and Belong Groups across the Triangle — there's
              a community waiting for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/connect/belong-groups" className="btn-base btn-primary">
                Find a Belong Group →
              </Link>
              <Link to="/connect/ministries" className="btn-base btn-outline-ink">
                Explore Ministries
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Men", "Women", "Youth", "Kids", "Marriage", "Outreach"].map((m) => (
              <div key={m} className="card-soft border border-border p-6">
                <span className="eyebrow text-brand-clay">Ministry</span>
                <div
                  className="mt-2 text-xl font-extrabold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE TIMES + NEWSLETTER ============ */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-brand-clay px-6 py-16 text-on-ink md:px-12 md:py-20">
          <div className="mx-auto max-w-lg lg:mr-0 lg:ml-auto">
            <span className="eyebrow text-white/70">Plan Your Sunday</span>
            <h2 className="display-lg mt-3.5 mb-7">
              Service times
              <br />
              & location
            </h2>
            <div className="mb-7 flex flex-wrap gap-10">
              <div>
                <div className="text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                  10:00AM
                </div>
                <div className="text-[15px] text-white/80">Sunday Worship Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                  In-Person
                </div>
                <div className="text-[15px] text-white/80">& streaming online</div>
              </div>
            </div>
            <div className="text-base leading-relaxed text-white/90">
              2933 S Miami Blvd, Suite 101
              <br />
              Durham, NC 27703
              <br />
              (919) 402-9622
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-ink px-6 py-16 text-on-ink md:px-14 md:py-20">
          <div className="max-w-lg">
            <span className="eyebrow text-brand-sky">Stay Connected</span>
            <h3 className="display-md mt-3.5 mb-3">Keep up with all things WOCC</h3>
            <p className="mb-6 text-[15px] text-white/60">
              Subscribe to our newsletter for events, messages, and updates.
            </p>
            <form
              className="flex flex-col gap-3 sm:flex-row"
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
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
