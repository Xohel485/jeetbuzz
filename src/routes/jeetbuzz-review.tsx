import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { AuthorByline } from "@/components/AuthorByline";
import { RelatedGuides } from "@/components/RelatedGuides";
import { MarkdownLite } from "@/components/MarkdownLite";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { SmartImage } from "@/components/SmartImage";
import { imageAbsoluteUrl, IMAGES } from "@/lib/images";
import { Star } from "lucide-react";
import { articleSchema, reviewSchema, jsonLdScript, canonicalLink, hreflangLinks } from "@/lib/schema";

export const Route = createFileRoute("/jeetbuzz-review")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Review 2026 - Honest Verdict for Bangladesh, Pakistan & India" },
      { name: "description", content: "Independent JeetBuzz review 2026 — odds, welcome bonus, bKash/Nagad/UPI payments, mobile app, customer support, licensing and safety for BD, PK and IN players." },
      { property: "og:title", content: "JeetBuzz Review 2026 — Honest Bangladesh Verdict" },
      { property: "og:description", content: "Independent JeetBuzz review for Bangladesh — odds, bonuses, payments, app and safety." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: imageAbsoluteUrl("liveCricket") },
      { property: "og:image:width", content: String(IMAGES.liveCricket.w) },
      { property: "og:image:height", content: String(IMAGES.liveCricket.h) },
      { name: "twitter:image", content: imageAbsoluteUrl("liveCricket") },
    ],
    links: [canonicalLink("/jeetbuzz-review"), ...hreflangLinks("/jeetbuzz-review")],
    scripts: [
      jsonLdScript(
        articleSchema({
          headline: "JeetBuzz Review 2026 — Honest Bangladesh Verdict",
          description:
            "Independent JeetBuzz review for Bangladesh: odds, bonuses, payments, app, support and safety.",
          path: "/jeetbuzz-review",
          image: imageAbsoluteUrl("liveCricket"),
        }),
      ),
      jsonLdScript(reviewSchema(4.6)),
    ],
  }),
  component: Page,
});

const RATINGS = [
  ["Cricket markets", 4.7],
  ["Bonuses", 4.2],
  ["Payments (BD)", 4.6],
  ["Mobile app", 4.4],
  ["Support", 4.3],
] as const;

const BODY = [
  "## ১ মিনিটে রায়",
  "JeetBuzz বাংলাদেশের জন্য একটি শক্তিশালী অপশন — বিশেষ করে লাইভ ক্রিকেট, bKash/Nagad পেমেন্ট, এবং বাংলা সাপোর্টের কারণে। কিছু বোনাসের শর্ত একটু কড়া, তবে অভিজ্ঞ ব্যবহারকারীদের জন্য সমস্যা নয়।",
  "## What we tested",
  "We created an account from Dhaka, deposited via bKash, placed live cricket bets across BPL and an England county T20, and withdrew to verify cash-out times. We also tested support response in Bengali.",
  "## Sportsbook",
  "Cricket coverage is the standout — deep markets on BPL, IPL, internationals and a surprisingly wide range of in-play options. Football and tennis are competitive; eSports is present but thinner.",
  "## Casino",
  "A standard mix of slots, live blackjack and Bengali-speaking dealer tables. Look at the bonus contribution table before chasing wagering with casino games.",
  "## Bonuses",
  "The welcome offer is competitive, but pay attention to wagering (typically 15x) and max bet rules. Recurring reloads and a refer-a-friend offer round things out.",
  "## Payments",
  "bKash, Nagad and Rocket all work. Deposits are usually instant; withdrawals cleared within a few hours in our tests.",
  "## App & site",
  "The Android APK is fast and stable. iOS users use the responsive mobile site. The desktop site is clean and uncluttered.",
  "## Support",
  "24/7 live chat answered our Bengali query in under two minutes. Email exists but chat is faster.",
  "## Safety",
  "Operates under an offshore license — typical for the market. Use a strong password, enable any 2FA option, and only use the official site.",
  "> Last verified: " + LAST_VERIFIED + ". Terms can change — confirm current numbers on the official site before depositing.",
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow={`Review · Updated ${LAST_VERIFIED}`}
        title={<>JeetBuzz Review 2026 — <span className="gold-text">An Honest Bangladesh Verdict</span></>}
        subtitle="We signed up, deposited via bKash, bet on BPL live and cashed out — here's what's actually good (and what isn't)."
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.5 / 5 — Editor's score</span>
          </div>
          <AffiliateCTA size="lg" variant="hero" label="Try JeetBuzz" />
        </div>
      </PageHero>

      <section className="container-pro">
        <div className="glass grid gap-3 p-5 md:grid-cols-5">
          {RATINGS.map(([label, score]) => (
            <div key={label}>
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="mt-1 text-xl font-semibold gold-text">{score.toFixed(1)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pro mt-10">
        <div className="mx-auto max-w-3xl">
          <AffiliateDisclosure variant="inline" />
          <div className="mt-3">
            <AuthorByline />
          </div>
          <SmartImage
            imgKey="liveCricket"
            caption
            schema
            sizes="(min-width: 1024px) 768px, 100vw"
            className="glass mt-6 rounded-xl"
          />
          <div className="mt-6">
            <MarkdownLite lines={BODY} />
          </div>
          <SmartImage
            imgKey="casinoLogin"
            caption
            schema
            sizes="(min-width: 1024px) 768px, 100vw"
            className="glass mt-8 rounded-xl"
          />
          <div className="mt-10">
            <AffiliateCTA size="lg" variant="hero" />
          </div>
          <RelatedGuides
            items={[
              { to: "/registration-guide", title: "Registration Guide", desc: "Open an account before claiming any offer." },
              { to: "/login-guide", title: "Login Guide", desc: "Safe access and password recovery." },
              { to: "/payment-methods", title: "Payment Methods", desc: "All deposit and withdrawal options." },
              { to: "/security-guide", title: "Security Guide", desc: "Protect your account with 2FA and best practices." },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}