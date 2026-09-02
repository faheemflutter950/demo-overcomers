import { createFileRoute, Link } from "@tanstack/react-router";

import pastor from "@/assets/pastor-andy.png.asset.json";
import { ministries } from "@/data/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Our Founder | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "Meet Pastor Andy Thompson, founding pastor of World Overcomers Christian Church in Durham, NC, and learn what we believe.",
      },
      { property: "og:title", content: "About & Our Founder | World Overcomers Christian Church" },
      {
        property: "og:description",
        content: "The story of Pastor Andy Thompson and the vision behind World Overcomers Christian Church.",
      },
    ],
  }),
  component: AboutPage,
});

const beliefs = [
  {
    n: "01",
    title: "A God-designed life",
    body: "We believe God has a unique, victorious design for every life — and faith unlocks it.",
  },
  {
    n: "02",
    title: "Balanced victory",
    body: "Wholeness in spirit, mind, relationships, and resources — not just one area.",
  },
  {
    n: "03",
    title: "Everyday faith",
    body: "We exist to equip people in Durham to overcome the giants in front of them.",
  },
] as const;

const story = [
  "Today, people get very nervous when people start to talk about Revival in America. But over the past two decades, Pastor Andy Thompson has led revival in the southeastern region of the United States of America. God has used him to both plant and lead the explosive 15,000-member strong World Overcomers Christian Church, which is one of the fastest-growing churches in America. But God is also using him to impact over 1 million people each week through his innovative, in-your-face, Faith-Filled television program called \u201CThe Truth\u201D for over ten years.",
  "Pastor Andy Thompson has been very busy spreading this revival through his many books, media campaigns, and his no-holds-barred cultural commentary. He has planted 6 churches, spearheaded international philanthropic projects, and conducted live speaking events all across this nation and the world — causing him to be globally recognized as the foremost faith teacher of his generation.",
  "Pastor Andy Thompson is a \u201Cbalanced-life\u201D strategist, and a master teacher on this subject causing him to be called upon by spiritual, political, and business leaders alike for his council and guidance on topics ranging from business and organizational dynamics to REAL Family building and right down to the redefined Faith Message.",
  "Pastor Andy has made many national and international Christian Television appearances, sharing the message of FAITH with over 200 countries across the world. He has appeared on Daystar, TBN, TCT, the Word Network, and The 700 Club. His books, \u201CReal Love Dating\u201D and \u201CReal Love Marriage\u201D are impactful, life-changing tools that are redefining marriage and family dynamics in the modern era.",
  "Pastor Andy's genuine heart to minister to people is expressed daily through philanthropic efforts both locally and internationally. This work has resulted in sustainable social and economic change within families, communities, and nations!",
] as const;

function AboutPage() {
  return (
    <>
      <section className="bg-ink text-on-ink">
        <div className="shell grid items-center gap-12 pt-16 pb-16 md:pt-20 md:pb-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brand-sky">Our Founder</span>
            <h1 className="display-xl mt-4">Pastor Andy Thompson</h1>
            <p className="mt-4 text-[15px] font-semibold tracking-wide text-brand-clay">
              Founding Pastor · World Overcomers Christian Church
            </p>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
              For over two decades, Pastor Andy Thompson has planted and led World Overcomers Christian Church and
              carried a balanced faith message to people far beyond it — through television, books, and ministry.
            </p>
            <blockquote
              className="mt-8 border-l-2 border-brand-clay pl-5 text-xl leading-snug text-on-ink"
              style={{ fontFamily: "var(--font-script)" }}
            >
              “We want the people of the world to find balanced victory for the God-designed life.”
            </blockquote>
            <a
              href="https://pastorandy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary mt-8"
            >
              Visit PastorAndy.com →
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl bg-ink-deep">
            <img src={pastor.url} alt="Pastor Andy Thompson" className="size-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="shell max-w-3xl">
          <span className="eyebrow text-brand-clay">The full story</span>
          <div className="mt-6 flex flex-col gap-5 text-[17px] leading-[1.75] text-muted-foreground">
            {story.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-mist">
        <div className="shell">
          <span className="eyebrow text-brand-sky">Vision & Beliefs</span>
          <h2 className="display-lg mt-3.5 mb-10">What we believe</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {beliefs.map((b) => (
              <div key={b.n} className="card-soft border border-border p-8">
                <div
                  className="text-4xl leading-none font-black text-brand-sky/35"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {b.n}
                </div>
                <h3 className="display-md mt-4 text-foreground">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-on-ink">
        <div className="shell">
          <span className="eyebrow text-brand-sky">Ministries & Belong Groups</span>
          <h2 className="display-lg mt-3.5">Find your people</h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
            There's a place for every season of life. Jump into a ministry or a Belong Group near you.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {ministries.map((m) => (
              <span
                key={m.name}
                className="rounded-pill border border-white/20 px-5 py-2.5 text-[15px] font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.name}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/connect/ministries" className="btn-base btn-primary">
              Explore Ministries →
            </Link>
            <Link to="/connect/belong-groups" className="btn-base btn-outline-light">
              Find a Belong Group
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
