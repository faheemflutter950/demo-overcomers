import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { church } from "@/data/site-content";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Plan a Visit | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "First time at World Overcomers? Here's everything you need to know about Sundays at 10AM in Durham, NC — kids, parking, and what to expect.",
      },
      { property: "og:title", content: "Plan a Visit | World Overcomers Christian Church" },
      {
        property: "og:description",
        content: "We saved you a seat. Sundays at 10AM, 2933 S Miami Blvd, Durham, NC.",
      },
    ],
  }),
  component: VisitPage,
});

const facts = [
  { label: "When", value: "Sundays · 10AM", note: "Worship Experience, in person" },
  { label: "Kids", value: "All ages", note: "Safe, fun environments for children" },
  { label: "Where", value: "S Miami Blvd", note: "2933 S Miami Blvd, Suite 101, Durham" },
  { label: "How Long", value: "~90 min", note: "Worship, Word, and welcome" },
] as const;

const expect = [
  {
    title: "A warm welcome",
    body: "Look for our team at the doors — they'll help you find your way and answer any questions.",
  },
  {
    title: "Authentic worship",
    body: "Expect a powerful, Spirit-filled time of praise with our worship team and band.",
  },
  {
    title: "A practical Word",
    body: "Pastor Andy brings teaching that meets you right where you are and sends you out equipped.",
  },
  {
    title: "Care for your kids",
    body: "Safe, fun, age-specific environments so your children can learn and grow too.",
  },
] as const;

function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="We saved you a seat"
        title="Plan your visit"
        intro="First time? Here's everything you need to know before you walk through our doors this Sunday."
      >
        <Link to="/give" className="sr-only">
          Give
        </Link>
      </PageHero>

      <section className="border-b border-border bg-background">
        <div className="shell grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-background p-7">
              <span className="eyebrow text-brand-clay">{f.label}</span>
              <div
                className="mt-2 text-2xl font-extrabold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.value}
              </div>
              <p className="mt-1 text-[14.5px] text-muted-foreground">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface-mist">
        <div className="shell">
          <span className="eyebrow text-brand-clay">What to expect</span>
          <h2 className="display-lg mt-3.5 mb-10">Come as you are. Leave changed.</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {expect.map((item, i) => (
              <div key={item.title} className="card-soft border border-border p-7">
                <div
                  className="text-4xl leading-none font-black text-brand-clay/30"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="display-md mt-4 text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-on-ink">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display-lg">We can't wait to meet you.</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
              Let us know you're coming and we'll have someone ready to welcome you, save your seat, and help you
              get connected.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${church.phone.replace(/[^0-9]/g, "")}`} className="btn-base btn-primary">
                Let Us Know You're Coming →
              </a>
              <Link to="/messages" className="btn-base btn-outline-light">
                Watch a Message First
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-8">
            <span className="eyebrow text-brand-sky">Find us</span>
            <div
              className="mt-3 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {church.name}
            </div>
            <div className="mt-3 text-[16px] leading-relaxed text-white/75">
              {church.address1}
              <br />
              {church.address2}
              <br />
              {church.phone}
            </div>
            <div className="mt-6 border-t border-white/12 pt-6 text-[15px] text-white/70">
              Sunday · 10:00AM Worship Experience
              <br />
              In person & streaming online
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
