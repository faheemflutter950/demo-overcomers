import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Coins,
  Download,
  Globe2,
  HandHeart,
  Mail,
  MessageSquare,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import heroImg from "@/assets/worship-hero.jpg.asset.json";
import serveImg from "@/assets/serve-city.jpg";
import lobbyImg from "@/assets/welcome-lobby.jpg";
import onlineImg from "@/assets/watch-online.jpg";
import { church } from "@/data/site-content";

export const Route = createFileRoute("/give")({
  head: () => ({
    meta: [
      { title: "Give | World Overcomers Christian Church" },
      {
        name: "description",
        content:
          "Give securely to World Overcomers Christian Church in Durham, NC. Make a one-time or recurring gift by card, bank transfer, text, app, mail, or non-cash assets.",
      },
      { property: "og:title", content: "Give | World Overcomers Christian Church" },
      {
        property: "og:description",
        content:
          "Your generosity funds ministry in Durham and around the world. Give online, by text, in person, or by mail.",
      },
    ],
  }),
  component: GivePage,
});

/* ---------------- content ---------------- */

const amounts = ["25", "50", "100", "250", "500"] as const;

const funds = ["Tithes & Offering", "Building Fund", "Missions", "Outreach & Benevolence"] as const;

const methods = [
  { id: "card", label: "Debit / Credit" },
  { id: "ach", label: "Bank (ACH)" },
  { id: "crypto", label: "Crypto" },
] as const;

const waysToGive = [
  {
    Icon: Smartphone,
    title: "Give in the App",
    body: "Download the World Overcomers app to give in seconds, track your giving history, and manage recurring gifts.",
    action: "Download the app",
  },
  {
    Icon: MessageSquare,
    title: "Text to Give",
    body: "The fastest way to give from your phone — no app or login required.",
    steps: [
      "Text GIVE and your amount (for example, GIVE 50) to (919) 402-9622.",
      "Tap the secure link you receive and enter your payment details once.",
      "You'll get an instant confirmation — future gifts take one text.",
    ],
  },
  {
    Icon: Building2,
    title: "In Person & By Mail",
    body: `Give during any Worship Experience at the offering stations in the lobby, or mail a check to ${church.address1}, ${church.address2}. Please make checks payable to World Overcomers Christian Church.`,
    action: "Plan a visit",
  },
  {
    Icon: Coins,
    title: "Assets & Non-Cash Gifts",
    body: "We gladly receive stock and mutual fund transfers, cryptocurrency, donor-advised fund grants, vehicles, and real estate. Our finance team will walk you through every step.",
    action: "Contact the finance team",
  },
] as const;

const impact = [
  {
    image: serveImg,
    eyebrow: "Local Outreach",
    title: "Durham neighbors served",
    body: "Groceries, school supplies, utility assistance, and prayer for families across the Triangle every month.",
  },
  {
    image: lobbyImg,
    eyebrow: "Church Expansion",
    title: "Room for the next family",
    body: "Your giving funds our campus, kids and youth environments, and the teams that welcome first-time guests.",
  },
  {
    image: onlineImg,
    eyebrow: "Global Missions",
    title: "The message, everywhere",
    body: "Broadcast, digital ministry, and mission partnerships carry the faith message to more than 200 countries.",
  },
] as const;

const faqs = [
  {
    q: "How do I calculate my tithe?",
    a: "A tithe is the first ten percent of your income. If you earn $1,000 in a pay period, your tithe is $100. Anything you give beyond that is an offering.",
  },
  {
    q: "Is online giving secure?",
    a: "Yes. Every transaction is encrypted and processed by our PCI-compliant giving partner. World Overcomers never stores your card or bank details.",
  },
  {
    q: "How do I download my giving statement?",
    a: "Sign in to your giving account or the church app, open Giving History, and download your year-end tax statement as a PDF. Statements for the previous year are available each January.",
  },
  {
    q: "Can I edit or cancel a recurring gift?",
    a: "Absolutely. Sign in to your giving account, select the scheduled gift, and change the amount, fund, frequency, or payment method — or cancel it entirely, at any time.",
  },
  {
    q: "Are my gifts tax-deductible?",
    a: "World Overcomers Christian Church is a registered 501(c)(3) nonprofit organization, so gifts are tax-deductible to the extent allowed by law.",
  },
  {
    q: "Who can I talk to about a large or planned gift?",
    a: `Email ${church.email} or call ${church.phone} and ask for the finance team. We're happy to discuss estate planning, matching gifts, and asset transfers.`,
  },
] as const;

/* ---------------- page ---------------- */

function GivePage() {
  return (
    <>
      <GiveHero />
      <WaysToGive />
      <ImpactSection />
      <AccountabilitySection />
      <FaqSection />
    </>
  );
}

/* ---- Section: Hero + giving module ---- */
function GiveHero() {
  const [frequency, setFrequency] = useState<"one-time" | "recurring">("one-time");
  const [amount, setAmount] = useState<string>("100");
  const [custom, setCustom] = useState("");
  const [fund, setFund] = useState<string>(funds[0]);
  const [method, setMethod] = useState<string>(methods[0].id);

  return (
    <section className="relative overflow-hidden bg-ink text-on-ink">
      <img src={heroImg.url} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-25" />
      <div className="hero-scrim-side absolute inset-0" />
      <div className="shell relative grid items-center gap-12 pt-16 pb-16 md:pt-24 md:pb-24 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="eyebrow text-brand-sky">Give</span>
          <h1 className="display-xl mt-4">
            Generosity that
            <br />
            <span className="script-accent text-brand-sky">changes</span> everything
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Every gift you give sends the message of faith further — into homes across Durham and into nations
            around the world. Thank you for partnering with us.
          </p>
          <div className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-6 text-[15px] text-white/70">
            <div>
              <span className="block text-2xl font-black text-on-ink" style={{ fontFamily: "var(--font-display)" }}>
                100%
              </span>
              Of gifts stay in ministry
            </div>
            <div>
              <span className="block text-2xl font-black text-on-ink" style={{ fontFamily: "var(--font-display)" }}>
                501(c)(3)
              </span>
              Tax-deductible giving
            </div>
          </div>
        </div>

        {/* Giving widget */}
        <div className="card-soft border border-border bg-card p-6 md:p-8">
          <div className="grid grid-cols-2 gap-1 rounded-pill bg-secondary p-1">
            {(["one-time", "recurring"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFrequency(f)}
                aria-pressed={frequency === f}
                className={`rounded-pill py-2.5 text-sm font-bold capitalize transition-colors ${
                  frequency === f ? "bg-ink text-on-ink" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f === "one-time" ? "One-Time" : "Recurring"}
              </button>
            ))}
          </div>

          <label className="eyebrow mt-7 block text-brand-clay">Amount</label>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => {
                  setAmount(a);
                  setCustom("");
                }}
                aria-pressed={amount === a && custom === ""}
                className={`rounded-xl border py-3 text-[15px] font-bold transition-colors ${
                  amount === a && custom === ""
                    ? "border-brand-clay bg-brand-clay text-on-ink"
                    : "border-border bg-secondary text-foreground hover:border-brand-clay"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                ${a}
              </button>
            ))}
          </div>
          <div className="relative mt-3">
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-[15px] font-bold text-muted-foreground">
              $
            </span>
            <input
              type="text"
              inputMode="decimal"
              value={custom}
              onChange={(e) => setCustom(e.target.value.replace(/[^\d.]/g, ""))}
              placeholder="Other amount"
              aria-label="Other amount"
              className="w-full rounded-xl border border-border bg-secondary py-3.5 pr-4 pl-8 text-[15px] text-foreground outline-none focus:border-brand-clay"
            />
          </div>

          <label className="eyebrow mt-6 block text-brand-clay" htmlFor="give-fund">
            Fund
          </label>
          <select
            id="give-fund"
            value={fund}
            onChange={(e) => setFund(e.target.value)}
            className="mt-3 w-full rounded-xl border border-border bg-secondary px-4 py-3.5 text-[15px] text-foreground outline-none focus:border-brand-clay"
          >
            {funds.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>

          <label className="eyebrow mt-6 block text-brand-clay">Payment method</label>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {methods.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMethod(m.id)}
                aria-pressed={method === m.id}
                className={`rounded-xl border px-2 py-3 text-[13px] font-bold transition-colors ${
                  method === m.id
                    ? "border-ink bg-ink text-on-ink"
                    : "border-border bg-secondary text-foreground hover:border-ink"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.label}
              </button>
            ))}
          </div>

          <button type="button" className="btn-base btn-primary mt-7 w-full !py-4 !text-base">
            {frequency === "recurring" ? "Start recurring gift" : "Give"} ${custom || amount}
            <ArrowRight className="size-[18px]" aria-hidden />
          </button>
          <p className="mt-3 text-center text-[13px] text-muted-foreground">
            Secure, encrypted giving. You'll receive an emailed receipt immediately.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- Section: Ways to give ---- */
function WaysToGive() {
  return (
    <section className="section-y bg-background">
      <div className="shell">
        <span className="eyebrow text-brand-clay">More Ways to Give</span>
        <h2 className="display-lg mt-3.5 mb-10">Choose what works for you</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {waysToGive.map(({ Icon, title, body, steps, action }) => (
            <div key={title} className="card-soft flex flex-col border border-border p-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface-mist text-ink">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="display-md mt-5 text-foreground">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              {steps && (
                <ol className="mt-5 flex flex-col gap-3">
                  {steps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span
                        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-clay text-[12px] font-black text-on-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              )}
              {action && title === "In Person & By Mail" ? (
                <Link
                  to="/visit"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-clay"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {action} <ArrowRight className="size-4" aria-hidden />
                </Link>
              ) : action ? (
                <a
                  href={action === "Contact the finance team" ? `mailto:${church.email}` : "#"}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-clay"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {action} <ArrowRight className="size-4" aria-hidden />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Section: Impact ---- */
function ImpactSection() {
  return (
    <section className="section-y bg-surface-mist">
      <div className="shell">
        <span className="eyebrow text-brand-clay">Your Impact</span>
        <h2 className="display-lg mt-3.5 mb-10">Where your giving goes</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {impact.map((card) => (
            <article
              key={card.title}
              className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-ink"
            >
              <img
                src={card.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="hero-scrim absolute inset-0" />
              <div className="relative p-8 text-on-ink">
                <span className="eyebrow text-brand-sky">{card.eyebrow}</span>
                <h3 className="display-md mt-2">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/80">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Section: Accountability + annual report ---- */
function AccountabilitySection() {
  return (
    <section className="section-y bg-ink text-on-ink">
      <div className="shell grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow text-brand-sky">Financial Accountability</span>
          <h2 className="display-lg mt-3.5">Stewardship you can verify</h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
            World Overcomers Christian Church holds itself to the highest standards of financial integrity. Our
            books are independently audited each year, and we align with ECFA standards for governance,
            transparency, and responsible stewardship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { Icon: ShieldCheck, label: "ECFA Standards" },
              { Icon: HandHeart, label: "Annual Independent Audit" },
              { Icon: Globe2, label: "501(c)(3) Nonprofit" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-5 py-2.5 text-[14px] font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Icon className="size-[18px] text-brand-sky" aria-hidden /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-white/15 bg-white/[0.05] p-8 md:p-10">
          <span className="eyebrow text-brand-sky">Annual Report</span>
          <h3 className="display-md mt-3">See the year in full</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-white/70">
            A complete look at what your generosity accomplished — ministry milestones, outreach numbers, and a
            transparent breakdown of every dollar received and spent.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#" className="btn-base btn-primary">
              <Download className="size-[18px]" aria-hidden /> Download the report
            </a>
            <a href={`mailto:${church.email}`} className="btn-base btn-outline-light">
              <Mail className="size-[18px]" aria-hidden /> Ask a question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Section: FAQ accordion ---- */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y bg-background">
      <div className="shell max-w-3xl">
        <span className="eyebrow text-brand-clay">Giving FAQs</span>
        <h2 className="display-lg mt-3.5 mb-10">Questions, answered</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 text-left"
                >
                  <span
                    className="text-[16.5px] leading-snug font-bold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-brand-clay transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-3xl bg-surface-mist p-8">
          <div className="min-w-0 flex-1">
            <h3 className="display-md text-foreground">Still have questions?</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Call {church.phone} or email {church.email} and our finance team will help.
            </p>
          </div>
          <a href={`mailto:${church.email}`} className="btn-base btn-slate">
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
