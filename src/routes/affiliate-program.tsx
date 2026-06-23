import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  UserPlus,
  Share2,
  Wallet,
  BadgeDollarSign,
  CheckCircle2,
  TrendingUp,
  HeadphonesIcon,
  Megaphone,
  Repeat,
  Star,
  Quote,
} from "lucide-react";
import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { AuthorByline } from "@/components/AuthorByline";
import { RelatedGuides } from "@/components/RelatedGuides";
import { JsonLd } from "@/components/JsonLd";
import { AFFILIATE, REL, LAST_VERIFIED } from "@/lib/affiliate";
import {
  faqSchema,
  articleSchema,
  canonicalLink,
  hreflangLinks,
  ogUrl,
} from "@/lib/schema";
import { imageAbsoluteUrl } from "@/lib/images";

// Client-facing link goes through our first-party /go/affiliate redirect so
// every click is captured for attribution before hitting jeetbuzzpartners.info.
const PARTNERS_URL = "/go/affiliate";
const PARTNERS_DESTINATION = AFFILIATE.partners;

const FAQS = [
  {
    q: "JeetBuzz Affiliate Program কী? (What is the JeetBuzz Affiliate Program?)",
    a: "JeetBuzz Affiliate Program একটি অফিসিয়াল রেফারেল প্রোগ্রাম যেখানে আপনি আপনার ইউনিক লিংক ও ব্যানার ব্যবহার করে নতুন প্লেয়ার নিয়ে আসলে তাদের লাইফটাইম অ্যাক্টিভিটি থেকে কমিশন আয় করতে পারেন। It is JeetBuzz's official partner program for content creators, tipsters, and website owners in Bangladesh and South Asia.",
  },
  {
    q: "কত কমিশন পাওয়া যায়? (How much commission can I earn?)",
    a: "ভলিউম অনুযায়ী রেভিনিউ শেয়ার সাধারণত ২৫% থেকে শুরু হয় এবং ৩৫–৫০% পর্যন্ত যেতে পারে। এছাড়াও CPA ($20–$50 per qualifying first deposit) এবং Hybrid deal পাওয়া যায় বড় পার্টনারদের জন্য।",
  },
  {
    q: "পেমেন্ট কীভাবে পাব? (How and when do affiliates get paid?)",
    a: "Payouts are processed on a weekly cycle for qualifying affiliates (monthly for smaller volumes). bKash, Nagad, ব্যাংক ট্রান্সফার, USDT এবং আরও কিছু লোকাল ও ক্রিপ্টো অপশন supported. Minimum thresholds apply.",
  },
  {
    q: "জিতবাজ অ্যাফিলিয়েট হতে কি কোনো ফি লাগে? (Is there any sign-up fee?)",
    a: "না, JeetBuzz Affiliate Program-এ join করতে কোনো fee নেই। সাইন আপ ১০০% ফ্রি এবং অনুমোদন সাধারণত ২৪ ঘণ্টার মধ্যে হয়ে যায়।",
  },
  {
    q: "Cookie window কতদিনের? (What is the attribution window?)",
    a: "Standard attribution window is 30 days per unique click, with sub-ID tracking so you can split campaigns by source, page, or creative.",
  },
  {
    q: "বাংলাদেশ থেকে কি প্রমোট করা যাবে? (Can I promote from Bangladesh?)",
    a: "হ্যাঁ — বাংলাদেশ, পাকিস্তান ও ভারত JeetBuzz-এর core market। বাংলায় কন্টেন্ট, লোকাল পেমেন্ট সাপোর্ট (bKash, Nagad, Rocket) এবং বাংলা মার্কেটিং ম্যাটেরিয়াল available.",
  },
  {
    q: "Marketing materials কি দেওয়া হয়? (Are creatives provided?)",
    a: "Yes. Ready-made banners, landing pages, video ads এবং বাংলা/English copy পার্টনার ড্যাশবোর্ড থেকে download করতে পারবেন।",
  },
];

const STEPS = [
  {
    icon: UserPlus,
    title: "Sign Up — সাইন আপ করুন",
    desc: "jeetbuzzpartners.info-এ গিয়ে ফ্রি অ্যাফিলিয়েট অ্যাকাউন্ট খুলুন। অনুমোদন সাধারণত ২৪ ঘণ্টার মধ্যে।",
  },
  {
    icon: Share2,
    title: "Promote — প্রমোট করুন",
    desc: "আপনার ইউনিক রেফারেল লিংক, ব্যানার ও ল্যান্ডিং পেজ social media, website বা WhatsApp-এ শেয়ার করুন।",
  },
  {
    icon: BadgeDollarSign,
    title: "Earn — কমিশন আয় করুন",
    desc: "প্রতিটি qualifying ডিপোজিট ও player activity থেকে লাইফটাইম রেভিনিউ শেয়ার অথবা CPA পান।",
  },
  {
    icon: Wallet,
    title: "Get Paid — উইথড্র করুন",
    desc: "bKash, Nagad, bank transfer বা USDT-তে weekly পেমেন্ট নিন — দ্রুত ও নির্ভরযোগ্য।",
  },
];

const COMMISSION = [
  { tier: "Starter", players: "1–10 active players / mo", revshare: "25%", cpa: "$20" },
  { tier: "Growth", players: "11–30 active players / mo", revshare: "30%", cpa: "$30" },
  { tier: "Pro", players: "31–80 active players / mo", revshare: "40%", cpa: "$40" },
  { tier: "Elite", players: "80+ active players / mo", revshare: "Up to 50%", cpa: "$50 + Hybrid" },
];

const BENEFITS = [
  { icon: TrendingUp, title: "High BD conversion", desc: "বাংলাদেশের মার্কেটে JeetBuzz-এর brand recognition সবচেয়ে শক্তিশালী — high CR এবং low CPL." },
  { icon: Wallet, title: "Local payments", desc: "bKash, Nagad, Rocket — প্লেয়ার ও অ্যাফিলিয়েট উভয়ের জন্য সহজ deposit/withdrawal." },
  { icon: Megaphone, title: "Marketing kit", desc: "Bengali + English banners, landing pages, video creatives — সব ready-to-use." },
  { icon: HeadphonesIcon, title: "Dedicated support", desc: "Personal affiliate manager — WhatsApp, Telegram ও email-এ ২৪/৭ সাপোর্ট." },
  { icon: Repeat, title: "Lifetime revenue", desc: "আপনার রেফার করা প্লেয়ার যতদিন খেলবে ততদিন আপনি কমিশন পাবেন।" },
  { icon: CheckCircle2, title: "Transparent reporting", desc: "Real-time dashboard — clicks, deposits, NGR ও commission সব dekhte পারবেন." },
];

const TESTIMONIALS = [
  {
    name: "Rahim H.",
    role: "Sports tipster, Dhaka",
    quote: "প্রথম মাসেই ১২,০০০ টাকা আয় করেছি। বাংলা banner থাকার কারণে আমার Telegram channel-এ দারুণ কাজ করে।",
    rating: 5,
  },
  {
    name: "Sadia R.",
    role: "Casino review blogger",
    quote: "Weekly payout time-মতোই আসে। bKash-এ ২ ঘণ্টার মধ্যে পেমেন্ট পেয়েছি — অনেক প্রোগ্রামে এত fast পাইনি।",
    rating: 5,
  },
  {
    name: "Imran K.",
    role: "YouTube creator",
    quote: "Affiliate manager-এর সাথে সরাসরি WhatsApp-এ কথা বলতে পারি, hybrid deal-ও negotiate করা গেছে।",
    rating: 5,
  },
];

const PAGE_PATH = "/affiliate-program";
const PAGE_TITLE = "JeetBuzz Affiliate Program — Earn 35–50% Lifetime Commission | GetJeetBuzz";
const PAGE_DESC =
  "জিতবাজ অ্যাফিলিয়েট প্রোগ্রাম — Bangladesh-এর জনপ্রিয় বেটিং সাইট promote করে up to 50% lifetime commission + weekly payouts. Free signup, bKash/Nagad support.";

export const Route = createFileRoute("/affiliate-program")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "jeetbuzz affiliate program, jeetbuzz affiliate bangladesh, জিতবাজ অ্যাফিলিয়েট প্রোগ্রাম, jeetbuzz partners, jeetbuzz revenue share, jeetbuzz CPA",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("affiliate") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("affiliate") },
      ogUrl(PAGE_PATH),
    ],
    links: [canonicalLink(PAGE_PATH), ...hreflangLinks(PAGE_PATH)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          articleSchema({
            headline: PAGE_TITLE,
            description: PAGE_DESC,
            path: PAGE_PATH,
            image: imageAbsoluteUrl("affiliate"),
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(FAQS)),
      },
    ],
  }),
  component: AffiliateProgramPage,
});

function PartnerCTA({
  children,
  size = "lg",
  variant = "hero",
  className,
}: {
  children: ReactNode;
  size?: "default" | "lg" | "xl";
  variant?: "hero" | "emerald" | "glass";
  className?: string;
}) {
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <a
        href={PARTNERS_URL}
        target="_blank"
        rel={REL}
        aria-label="Become a JeetBuzz Affiliate"
        onClick={() => {
          import("@/lib/analytics").then(({ track }) => {
            track("affiliate_click", { intent: "affiliate", destination: "affiliate", button_position: "affiliate_section" });
            track("outbound_link_click", { href: PARTNERS_DESTINATION, destination: "affiliate", button_position: "affiliate_section" });
          });
        }}
      >
        {children}
        <ArrowUpRight className="size-4" />
      </a>
    </Button>
  );
}

function AffiliateProgramPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]"
        />
        <div className="container-pro pt-14 pb-10 text-center md:pt-24 md:pb-16">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            JeetBuzz Partners · Updated {LAST_VERIFIED}
          </div>
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            JeetBuzz <span className="gold-text">Affiliate Program</span> — Earn Money by
            Promoting Bangladesh's Popular Betting Site
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Join thousands of Bangladeshi affiliates earning up to{" "}
            <span className="font-semibold text-foreground">35–50% lifetime commission</span>{" "}
            every week. হাজারো বাংলাদেশি অ্যাফিলিয়েটের সাথে যুক্ত হয়ে সাপ্তাহিক আয় শুরু করুন।
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <PartnerCTA size="xl">Become JeetBuzz Affiliate Now</PartnerCTA>
            <Button asChild size="lg" variant="glass">
              <a href="#how-to-join">How to join</a>
            </Button>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { v: "50%", l: "Lifetime revshare" },
              { v: "$50", l: "CPA per FTD" },
              { v: "Weekly", l: "Payouts" },
              { v: "24h", l: "Approval" },
            ].map((s) => (
              <div
                key={s.l}
                className="glass rounded-xl px-3 py-3 text-center"
              >
                <div className="gold-text text-lg font-bold md:text-xl">{s.v}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground md:text-xs">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl">
            <AffiliateDisclosure variant="inline" />
            <div className="mt-3">
              <AuthorByline />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-pro py-10 md:py-14">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">How It Works — কীভাবে কাজ করে</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            চার ধাপে শুরু করুন — সাইন আপ থেকে পেমেন্ট পর্যন্ত পুরো প্রক্রিয়া সহজ ও স্বচ্ছ।
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="glass relative rounded-2xl p-5"
            >
              <div className="absolute right-4 top-4 text-xs font-semibold text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commission Structure */}
      <section className="container-pro py-10 md:py-14">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Commission Structure — কমিশন প্ল্যান
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            ভলিউম যত বাড়বে, কমিশন তত বাড়বে। Hybrid deal (RevShare + CPA) Elite পার্টনারদের
            জন্য available.
          </p>
        </div>
        <div className="glass overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Tier</th>
                  <th className="px-4 py-3 font-semibold">Active players</th>
                  <th className="px-4 py-3 font-semibold">Revenue share</th>
                  <th className="px-4 py-3 font-semibold">CPA</th>
                </tr>
              </thead>
              <tbody>
                {COMMISSION.map((row) => (
                  <tr
                    key={row.tier}
                    className="border-t border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-semibold">{row.tier}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.players}</td>
                    <td className="px-4 py-3">
                      <span className="gold-text font-semibold">{row.revshare}</span>
                    </td>
                    <td className="px-4 py-3 text-foreground/90">{row.cpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          * Indicative tiers. Final commercials confirmed inside the official partner
          dashboard after signup.
        </p>
      </section>

      {/* Benefits */}
      <section className="container-pro py-10 md:py-14">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Benefits for Bangladeshi Affiliates
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            বাংলাদেশের মার্কেটের জন্য specially optimized — local payments, Bengali creatives
            এবং dedicated support.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="glass rounded-2xl p-5"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--orange)]/15 text-[var(--orange)] ring-1 ring-[var(--orange)]/20">
                <b.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-pro py-10 md:py-14">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Affiliate Success Stories
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            বাংলাদেশি পার্টনারদের রিয়েল অভিজ্ঞতা।
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-5">
              <Quote className="size-5 text-primary/70" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div
                  className="flex gap-0.5 text-[var(--gold,#f5c451)]"
                  aria-label={`${t.rating} star rating`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Testimonials are representative examples from partner feedback; individual
          earnings vary by traffic and effort.
        </p>
      </section>

      {/* How to join */}
      <section id="how-to-join" className="container-pro py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              How to Join — কীভাবে যুক্ত হবেন
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              পাঁচ মিনিটে সাইন আপ — কোনো ফি নেই, কোনো hidden শর্ত নেই।
            </p>
          </div>
          <ol className="mt-8 space-y-4">
            {[
              {
                t: "নিচের 'Become Affiliate' বাটনে ক্লিক করুন",
                d: "আপনাকে অফিসিয়াল JeetBuzz Partners portal-এ নিয়ে যাবে।",
              },
              {
                t: "jeetbuzzpartners.info-এ ফ্রি অ্যাকাউন্ট তৈরি করুন",
                d: "নাম, ইমেইল, ট্রাফিক সোর্স এবং পেমেন্ট প্রেফারেন্স দিন।",
              },
              {
                t: "অনুমোদনের জন্য অপেক্ষা করুন (সাধারণত ২৪ ঘণ্টা)",
                d: "অ্যাপ্রুভ হলে ইমেইলে dashboard access পাবেন।",
              },
              {
                t: "Marketing materials ও ইউনিক লিংক ডাউনলোড করুন",
                d: "Bengali/English banners, landing pages এবং sub-ID tracking ব্যবহার করুন।",
              },
              {
                t: "প্রমোট শুরু করুন এবং কমিশন আয় করুন",
                d: "Real-time dashboard-এ clicks, deposits ও earnings track করুন।",
              },
            ].map((step, i) => (
              <li key={i} className="glass flex gap-4 rounded-2xl p-4 md:p-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold md:text-base">{step.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex justify-center">
            <PartnerCTA size="xl">Start your application</PartnerCTA>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-pro pb-12">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion
            faqs={FAQS}
            heading="Frequently asked questions — সাধারণ প্রশ্ন"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-pro pb-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 border-t-2 border-t-primary/60 bg-white/[0.03] px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="text-2xl font-bold md:text-4xl">
            আজই <span className="gold-text">JeetBuzz Affiliate</span> হয়ে আয় শুরু করুন
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Free signup. Weekly payouts. Up to 50% lifetime commission. বাংলাদেশের সবচেয়ে
            trusted betting brand-এর সাথে partner হোন।
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <PartnerCTA size="xl">Become JeetBuzz Affiliate Now</PartnerCTA>
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            We earn commission if you sign up through our links — at no extra cost to you.
          </p>
        </div>
      </section>

      {/* Extra JSON-LD: HowTo */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to join the JeetBuzz Affiliate Program",
          step: [
            { "@type": "HowToStep", name: "Click Become Affiliate", url: PARTNERS_DESTINATION },
            { "@type": "HowToStep", name: "Register on jeetbuzzpartners.info" },
            { "@type": "HowToStep", name: "Wait for approval (≈24h)" },
            { "@type": "HowToStep", name: "Download marketing materials" },
            { "@type": "HowToStep", name: "Promote and earn weekly commission" },
          ],
        }}
      />
      <section className="container-pro pb-16">
        <div className="mx-auto max-w-3xl">
          <RelatedGuides
            items={[
              { to: "/jeetbuzz-review", title: "JeetBuzz Review", desc: "Pillar review of the operator you'll be promoting." },
              { to: "/registration-guide", title: "Registration Guide", desc: "How players sign up — useful for affiliate funnels." },
              { to: "/payment-methods", title: "Payment Methods", desc: "Deposit options players will use after your referral." },
              { to: "/affiliate-disclosure", title: "Affiliate Disclosure", desc: "How GetJeetBuzz handles its own affiliate relationship." },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}