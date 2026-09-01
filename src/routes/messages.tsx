import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";

import symbolBlack from "@/assets/wocc-symbol-black.png.asset.json";
import { messages } from "@/data/site-content";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "Watch and grow with the latest messages from Pastor Andy Thompson and World Overcomers Christian Church in Durham, NC.",
      },
      { property: "og:title", content: "Messages | World Overcomers Christian Church" },
      {
        property: "og:description",
        content: "Watch the latest teaching from Pastor Andy Thompson — new messages every week.",
      },
    ],
  }),
  component: MessagesPage,
});

const tabs = ["All", "Series", "Speakers"] as const;

function MessagesPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const featured = messages[0];

  return (
    <>
      <section className="bg-ink text-on-ink">
        <div className="shell pt-16 pb-16 md:pt-20 md:pb-20">
          <span className="eyebrow text-brand-blue">Messages</span>
          <h1 className="display-xl mt-4">Watch & grow</h1>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-3xl">
              <img src={featured.image} alt={featured.title} className="size-full object-cover" />
              <div className="absolute inset-0 bg-ink/35" />
              <button
                type="button"
                aria-label={`Play ${featured.title}`}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex size-20 items-center justify-center rounded-full bg-brand-red transition-colors hover:bg-brand-red-hover">
                  <Play className="size-8 text-on-ink" aria-hidden />
                </span>
              </button>
            </div>
            <div>
              <span className="eyebrow text-brand-red">Latest · {featured.date}</span>
              <h2 className="display-lg mt-3.5">{featured.title}</h2>
              <p className="mt-5 text-[17px] leading-relaxed text-white/70">{featured.excerpt}</p>
              <div className="mt-6 text-[15px] font-semibold text-white/85">{featured.speaker}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-mist">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <h2 className="display-lg">Recent Messages</h2>
            <div className="flex gap-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  aria-pressed={tab === t}
                  className={`btn-base !px-5 !py-2.5 !text-sm ${
                    tab === t ? "btn-primary" : "btn-outline-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {messages.map((m) => (
              <article key={m.title} className="card-soft group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2 rounded-pill bg-ink/80 px-3 py-1.5 backdrop-blur">
                    <Play className="size-3 text-brand-red" aria-hidden />
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
