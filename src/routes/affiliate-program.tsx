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
import elite60Url from "@/assets/jeetbuzz-60-affiliate-commission.webp";
import affiliateProgramUrl from "@/assets/jeetbuzz-affiliate-program.webp";
import referralUrl from "@/assets/jeetbuzz-affiliate-referral-program.webp";
import eliteClubLogoUrl from "@/assets/jeetbuzz-affiliate-elite-club-logo.webp";
import eliteClubCrestUrl from "@/assets/jeetbuzz-affiliate-elite-club.webp";

// Client-facing link goes through our first-party /go/affiliate redirect so
// every click is captured for attribution before hitting jeetbuzzpartners.info.
const PARTNERS_URL = "/go/affiliate";
const PARTNERS_DESTINATION = AFFILIATE.partners;

const FAQS = [
  {
    q: "How do I become a JeetBuzz affiliate?",
    a: "Complete the affiliate registration form, verify your account and start promoting your referral link.",
  },
  {
    q: "How many active players are required?",
    a: "A minimum of five active players is required.",
  },
  {
    q: "What qualifies as an active player?",
    a: "An active player meets the required turnover condition of at least ৳3000.",
  },
  {
    q: "Is KYC mandatory?",
    a: "Yes. KYC verification is required before receiving commissions.",
  },
  {
    q: "Is Telegram mandatory?",
    a: "Yes. Affiliates must join the official JeetBuzz Affiliate Telegram Channel.",
  },
  {
    q: "When are commissions paid?",
    a: "Commission payments are processed every Wednesday.",
  },
  {
    q: "Can bonus commissions be transferred?",
    a: "No. Bonus commissions are non-transferable.",
  },
];

const STEPS = [
  {
    icon: UserPlus,
    title: "Register as a JeetBuzz Affiliate",
    desc: "Sign up on the official JeetBuzz Partners portal and create your free affiliate account.",
  },
  {
    icon: Share2,
    title: "Complete KYC & Join Telegram",
    desc: "Verify your KYC and join the official JeetBuzz Affiliate Telegram Channel to unlock payouts.",
  },
  {
    icon: BadgeDollarSign,
    title: "Promote & Refer Active Players",
    desc: "Share your affiliate link and maintain at least five qualified active players each cycle.",
  },
  {
    icon: Wallet,
    title: "Get Paid Every Wednesday",
    desc: "Receive your weekly commission of up to 60% every Wednesday — transparent and on time.",
  },
];

const COMMISSION = [
  { tier: "Starter", players: "0 – 10 active players", revshare: "50%", cpa: "Weekly Wednesday" },
  { tier: "Growth", players: "11 – 20 active players", revshare: "55%", cpa: "Weekly Wednesday" },
  { tier: "Elite", players: "20+ active players", revshare: "60%", cpa: "Weekly Wednesday" },
  { tier: "Referral Bonus", players: "Refer another affiliate", revshare: "+3.5%", cpa: "Extra commission" },
];

const BENEFITS = [
  { icon: TrendingUp, title: "Up to 60% Weekly Commission", desc: "Earn up to 60% commission on qualified active players every single week." },
  { icon: Wallet, title: "Weekly Wednesday Payouts", desc: "All commissions are paid out every Wednesday — reliable, predictable income." },
  { icon: Megaphone, title: "Real-Time Performance Tracking", desc: "Monitor clicks, conversions and earnings in real time from your affiliate dashboard." },
  { icon: HeadphonesIcon, title: "Dedicated Affiliate Support", desc: "Get help from a dedicated affiliate manager via Telegram and email." },
  { icon: CheckCircle2, title: "Transparent Reporting", desc: "Net Profit = Customer Win/Loss − Deduction − Bonus. Clear, auditable numbers." },
  { icon: Repeat, title: "Long-Term Partnership", desc: "Build recurring revenue with a partnership designed for the long run." },
];

const TESTIMONIALS = [
  {
    name: "Rahim H.",
    role: "Sports tipster, Dhaka",
    quote: "I qualified for the 60% tier within two months. Wednesday payouts always arrive on time.",
    rating: 5,
  },
  {
    name: "Sadia R.",
    role: "Casino review blogger",
    quote: "Transparent reporting and weekly payouts make the JeetBuzz affiliate program one of the easiest to scale.",
    rating: 5,
  },
  {
    name: "Imran K.",
    role: "Content creator",
    quote: "The extra 3.5% referral commission and the Elite Club perks have completely changed my monthly earnings.",
    rating: 5,
  },
];

const PAGE_PATH = "/affiliate-program";
const PAGE_TITLE = "JeetBuzz Affiliate Program | Earn Up to 60% Weekly Commission";
const PAGE_DESC =
  "Join the JeetBuzz Affiliate Program and earn up to 60% weekly commission. Complete KYC, invite active players, receive weekly payouts and build long-term affiliate income.";

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
        <div className="container-pro pt-14 pb-10 md:pt-24 md:pb-16">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
            <div className="text-center md:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                JeetBuzz Partners · Updated {LAST_VERIFIED}
              </div>
              <h1 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                JeetBuzz <span className="gold-text">Affiliate Program</span> — Earn Up to 60%
                Weekly Commission
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:mx-0 mx-auto">
                Earn up to{" "}
                <span className="font-semibold text-foreground">60% weekly commission</span>{" "}
                by referring active players and growing your affiliate business with
                transparent weekly payouts every Wednesday.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
                <PartnerCTA size="xl">Become an Affiliate</PartnerCTA>
                <Button asChild size="lg" variant="glass">
                  <a href="/affiliate-login">Affiliate Login</a>
                </Button>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { v: "60%", l: "Weekly commission" },
                  { v: "Wed", l: "Payout day" },
                  { v: "5+", l: "Active players" },
                  { v: "৳3000", l: "Min turnover" },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-xl px-3 py-3 text-center">
                    <div className="gold-text text-lg font-bold md:text-xl">{s.v}</div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground md:text-xs">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 max-w-2xl">
                <AffiliateDisclosure variant="inline" />
                <div className="mt-3">
                  <AuthorByline />
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)] blur-2xl"
              />
              <img
                src={elite60Url}
                alt="JeetBuzz Affiliate Program – Earn Up to 60% Weekly Commission"
                width={680}
                height={790}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="mx-auto h-auto w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-pro py-10 md:py-14">
        <div className="mb-10 grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div className="order-2 md:order-1">
            <img
              src={affiliateProgramUrl}
              alt="Join JeetBuzz Affiliate Program Partnership"
              width={580}
              height={674}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-[360px] rounded-3xl md:max-w-none"
            />
          </div>
          <div className="order-1 text-center md:order-2 md:text-left">
            <h2 className="text-2xl font-bold md:text-3xl">How to Participate</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Register, verify, promote and receive your weekly commission every Wednesday —
              a partnership designed for long-term growth with the JeetBuzz Affiliates team.
            </p>
          </div>
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
            Commission Plan
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            The more qualified active players you bring, the higher your weekly commission —
            up to 60%. Refer another affiliate for an extra 3.5% commission.
          </p>
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <div>
            <div className="glass overflow-hidden rounded-2xl">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Tier</th>
                      <th className="px-4 py-3 font-semibold">Active players</th>
                      <th className="px-4 py-3 font-semibold">Commission</th>
                      <th className="px-4 py-3 font-semibold">Payout</th>
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
              Net Profit = Customer Win/Loss − Deduction − Bonus. Minimum turnover of ৳3000
              per active player applies. KYC and Telegram membership required.
            </p>
          </div>
          <figure className="glass overflow-hidden rounded-3xl p-4">
            <img
              src={referralUrl}
              alt="JeetBuzz Affiliate Referral Program – Extra 3.5% Commission"
              width={580}
              height={674}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full rounded-2xl"
            />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Refer another affiliate and earn an extra 3.5% commission on top of your
              weekly rate.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-pro py-10 md:py-14">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Commission Highlights
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Everything you get as a JeetBuzz affiliate — transparent, weekly and long-term.
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
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--gold,#f5c451)_18%,transparent),transparent_70%)]"
          />
          <div className="grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <img
              src={eliteClubCrestUrl}
              alt="JeetBuzz Affiliate Elite Club Crest"
              width={480}
              height={469}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-[200px] md:max-w-[260px]"
            />
            <div className="text-center md:text-left">
              <img
                src={eliteClubLogoUrl}
                alt="JeetBuzz Affiliates Elite Club"
                width={628}
                height={150}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-[320px] md:mx-0 md:max-w-[380px]"
              />
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                Affiliate Elite Club
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                An exclusive program for our top-performing affiliates with increased
                commission rates and premium privileges. Your dedication deserves the very
                best — welcome to the JeetBuzz Elite Club.
              </p>
            </div>
          </div>
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
              Requirements & How to Join
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Six simple steps to start earning up to 60% weekly commission.
            </p>
          </div>
          <ol className="mt-8 space-y-4">
            {[
              {
                t: "Register as a JeetBuzz Affiliate",
                d: "Sign up on the official JeetBuzz Partners portal — free and fast.",
              },
              {
                t: "Complete your KYC verification",
                d: "KYC verification is mandatory before commissions are released.",
              },
              {
                t: "Join the official JeetBuzz Affiliate Telegram Channel",
                d: "Stay informed about updates, payouts and promotions.",
              },
              {
                t: "Promote your affiliate link",
                d: "Share your unique referral link across your audience and channels.",
              },
              {
                t: "Maintain qualified active players",
                d: "Minimum 5 active players with at least ৳3000 turnover each.",
              },
              {
                t: "Receive weekly commission every Wednesday",
                d: "Up to 60% weekly payout plus an extra 3.5% referral commission.",
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
            heading="Frequently asked questions"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-pro pb-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 border-t-2 border-t-primary/60 bg-white/[0.03] px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="text-2xl font-bold md:text-4xl">
            Become a <span className="gold-text">JeetBuzz Affiliate</span> today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Up to 60% weekly commission. Weekly Wednesday payouts. Transparent reporting and
            long-term partnership.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <PartnerCTA size="xl">Become an Affiliate</PartnerCTA>
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
            { "@type": "HowToStep", name: "Register as a JeetBuzz Affiliate", url: PARTNERS_DESTINATION },
            { "@type": "HowToStep", name: "Complete KYC verification" },
            { "@type": "HowToStep", name: "Join the official JeetBuzz Affiliate Telegram Channel" },
            { "@type": "HowToStep", name: "Promote your affiliate link" },
            { "@type": "HowToStep", name: "Maintain at least five qualified active players" },
            { "@type": "HowToStep", name: "Receive weekly commission every Wednesday" },
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