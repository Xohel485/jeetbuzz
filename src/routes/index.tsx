import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Trophy,
  Gift,
  Smartphone,
  Wallet,
  ShieldCheck,
  BookOpen,
  Languages,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { GameCategories } from "@/components/GameCategories";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Button } from "@/components/ui/button";
import { LAST_VERIFIED, MARKETS, JEETBUZZ_STATS } from "@/lib/affiliate";
import { IMAGES, imageUrl, imageAbsoluteUrl, imageObjectSchema } from "@/lib/images";
import { faqSchema, articleSchema, hreflangLinks, canonicalLink, ogUrl } from "@/lib/schema";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "JeetBuzz Guide — Login, Signup & Review (BD/PK/IN)",
      },
      {
        name: "description",
        content:
          "JeetBuzz guide for Bangladesh, Pakistan & India — signup, login, bonuses, APK, bKash/Nagad/UPI deposits and live cricket betting on JeetBuzz.",
      },
      {
        property: "og:title",
        content: "JeetBuzz Login, Signup & Bonus Guide — Bangladesh · Pakistan · India",
      },
      {
        property: "og:description",
        content:
          "Everything players in Bangladesh, Pakistan and India need to know about JeetBuzz — signup, bonuses, payments, app.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imageAbsoluteUrl("hero") },
      { property: "og:image:width", content: String(IMAGES.hero.w) },
      { property: "og:image:height", content: String(IMAGES.hero.h) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("hero") },
      ogUrl("/"),
    ],
    links: [
      { rel: "preload", as: "image", href: imageUrl("hero", 1125, "avif"), type: "image/avif" },
      canonicalLink("/"),
      ...hreflangLinks("/"),
      { rel: "alternate", hrefLang: "bn-BD", href: "https://getjeetbuzzv1.lovable.app/bd/bn" },
      { rel: "alternate", hrefLang: "ur-PK", href: "https://getjeetbuzzv1.lovable.app/pk/ur" },
      { rel: "alternate", hrefLang: "hi-IN", href: "https://getjeetbuzzv1.lovable.app/in/hi" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(imageObjectSchema("hero")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          articleSchema({
            headline: "JeetBuzz — Login, Registration & Review for Bangladesh, Pakistan, India",
            description:
              "JeetBuzz handbook for Bangladesh, Pakistan and India — signup, login, bonuses, app, payments and live cricket.",
            path: "/",
            image: imageAbsoluteUrl("hero"),
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          faqSchema([
            { q: "Is this the official JeetBuzz website?", a: "No. GetJeetBuzz is a partner guide. The official JeetBuzz site is reached via our outbound links." },
            { q: "Is JeetBuzz legal in Bangladesh?", a: "Online betting is a gray area in Bangladesh. JeetBuzz operates under an offshore license." },
            { q: "How do I register?", a: "Follow our Registration Guide. You will need a phone, email and a wallet like bKash or Nagad." },
            { q: "How do bonuses work?", a: "JeetBuzz offers a welcome bonus and recurring promotions, each with wagering requirements." },
          ]),
        ),
      },
    ],
  }),
  component: Index,
});

const GUIDE_CARDS = [
  {
    to: "/jeetbuzz-review",
    icon: BookOpen,
    title: "Full JeetBuzz Review",
    desc: "Honest 2026 breakdown — features, odds, payments, support.",
  },
  {
    to: "/registration-guide",
    icon: ShieldCheck,
    title: "Registration Guide",
    desc: "Step-by-step signup from Bangladesh, in Bengali & English.",
  },
  {
    to: "/bonus-and-promotions",
    icon: Gift,
    title: "Bonuses Explained",
    desc: "Welcome offer, wagering terms, free bets — no fluff.",
  },
  {
    to: "/apk-download-guide",
    icon: Smartphone,
    title: "App Access Guide",
    desc: "How to get the JeetBuzz app safely from the official site.",
  },
  {
    to: "/deposit-withdrawal-guide",
    icon: Wallet,
    title: "Payments (bKash · Nagad · Rocket)",
    desc: "Min deposit, withdrawal times, common errors solved.",
  },
  {
    to: "/live-cricket-betting",
    icon: Trophy,
    title: "Live Cricket Betting",
    desc: "Markets, in-play tips, BPL/IPL coverage on JeetBuzz.",
  },
] as const;

const QUICK_FACTS: Array<[string, string]> = [
  ["Brand", "JeetBuzz"],
  ["Target markets", "Bangladesh, Pakistan, India"],
  ["Licensing", "Curaçao offshore eGaming licence"],
  ["Support", "24/7 live chat — Bengali, Hindi, Urdu, English"],
  ["Languages", "Bengali, English, Hindi, Urdu"],
  ["Mobile app", "Android APK via official JeetBuzz site"],
  ["Popular payments", "bKash, Nagad, Rocket, UPI, JazzCash"],
  ["Cricket coverage", "BPL, IPL, PSL, T20 WC, internationals"],
];

const FEATURED_POSTS = [
  {
    slug: "jeetbuzz-registration-guide-bangladesh",
    title: "JeetBuzz Registration Guide for Bangladesh (2026)",
    desc: "A clean, screenshot-friendly walkthrough of signing up from Bangladesh.",
  },
  {
    slug: "jeetbuzz-bkash-nagad-deposit-guide",
    title: "Deposit on JeetBuzz with bKash, Nagad & Rocket",
    desc: "Minimums, fees, processing times and what to do if a deposit fails.",
  },
  {
    slug: "is-jeetbuzz-safe-bangladesh",
    title: "Is JeetBuzz Safe for Bangladeshi Players?",
    desc: "Licensing, KYC, withdrawals and red flags — an independent take.",
  },
];

const FAQ = [
  {
    q: "Is this the official JeetBuzz website?",
    a: "No — GetJeetBuzz.com is not the JeetBuzz platform itself. We are a verified official affiliate partner of JeetBuzz, meaning we have a real commission agreement with them, but account signup, login, deposits and withdrawals all happen on JeetBuzz's own platform, not here.",
  },
  {
    q: "Is JeetBuzz legal in Bangladesh?",
    a: "Online betting sits in a gray area in Bangladesh. JeetBuzz operates under an offshore license. Always check local laws and bet responsibly.",
  },
  {
    q: "How do I register?",
    a: "Follow our step-by-step Registration Guide. You'll need a phone number, an email and a payment method like bKash or Nagad.",
  },
  {
    q: "How do bonuses work?",
    a: "JeetBuzz offers a welcome bonus and recurring promotions, each with wagering requirements. See our Bonus Guide for terms.",
  },
];

export function Index() {
  const { t } = useI18n();
  return (
    <PageShell>
      {/* Hero with photographic background */}
      <section className="relative isolate overflow-hidden border-b border-white/5">
        <picture className="absolute inset-0 -z-20 h-full w-full">
          <source
            type="image/avif"
            srcSet={IMAGES.hero.widths.map((w) => `${imageUrl("hero", w, "avif")} ${w}w`).join(", ")}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={IMAGES.hero.widths.map((w) => `${imageUrl("hero", w, "webp")} ${w}w`).join(", ")}
            sizes="100vw"
          />
          <img
            src={imageUrl("hero", 1125, "webp")}
            alt={IMAGES.hero.alt}
            title={IMAGES.hero.title}
            width={IMAGES.hero.w}
            height={IMAGES.hero.h}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-40"
          />
        </picture>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.16 0.03 165 / 0.55) 0%, oklch(0.12 0.02 160 / 0.92) 70%, var(--background) 100%)",
          }}
        />
        <div className="container-pro pt-16 pb-16 text-center md:pt-28 md:pb-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            {t("hero.eyebrow", { date: LAST_VERIFIED })}
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            {t("hero.title.lead")}{" "}
            <span className="gold-text">{t("hero.title.highlight")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <AffiliateCTA size="xl" variant="hero" label={t("hero.cta.join")} />
            <Button asChild size="xl" variant="glass">
              <Link to="/login-guide">
                {t("hero.cta.login")} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>{t("hero.markets.label")}</span>
            {MARKETS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-pro -mt-10 md:-mt-14">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden bg-white/[0.04] md:grid-cols-4">
          {JEETBUZZ_STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center bg-background/80 p-6 text-center md:items-start md:p-7 md:text-left">
              <p className="text-2xl font-bold gold-text md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="container-pro mt-12 md:mt-16">
        <div className="glass grid grid-cols-2 gap-4 px-5 py-5 text-xs text-muted-foreground md:grid-cols-4 md:gap-6 md:px-7 md:py-6 md:text-sm">
          <Trust icon={ShieldCheck} label="Verified JeetBuzz links" />
          <Trust icon={Calendar} label={`Updated ${LAST_VERIFIED}`} />
          <Trust icon={BookOpen} label="Transparent affiliate disclosure" />
          <Trust icon={Languages} label="Bengali · English · Hindi · Urdu" />
        </div>
      </section>

      {/* What you'll find */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="JeetBuzz guides"
          title="Everything you need to use JeetBuzz"
          desc="Step-by-step JeetBuzz guides written for players in Bangladesh, Pakistan and India — updated whenever JeetBuzz changes its terms."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_CARDS.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="glass group flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                  <c.icon className="size-5" />
                </span>
                <h3 className="text-base font-semibold leading-snug md:text-lg">{c.title}</h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read guide <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Game categories */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="Game categories"
          title="Every JeetBuzz game category in one place"
          desc="From cricket and live casino to crash, fishing, lottery and arcade — explore every JeetBuzz vertical Bangladesh, Pakistan and India players actually use."
        />
        <GameCategories />
        <div className="mt-10 flex justify-center">
          <AffiliateCTA size="lg" variant="hero" label="Play on JeetBuzz" />
        </div>
      </section>

      {/* Payment methods */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="Payments"
          title="Deposit & withdraw with the methods you already use"
          desc="JeetBuzz supports local Bangladeshi banks, international wallets and crypto — pick what fits your speed, fee and convenience needs."
        />
        <div className="mt-10">
          <PaymentMethods />
        </div>
        <div className="mt-8 flex justify-center md:justify-start">
          <AffiliateCTA size="lg" variant="emerald" label="See deposit guide" />
        </div>
      </section>

      {/* Quick facts */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="JeetBuzz at a glance"
          title="The numbers behind JeetBuzz"
          desc={`Operator-reported figures across Bangladesh, Pakistan and India. Last verified ${LAST_VERIFIED} — always confirm current terms on the official JeetBuzz site.`}
        />
        <div className="glass mt-10 overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {QUICK_FACTS.map(([k, v], i) => (
                <tr
                  key={k}
                  className={i % 2 ? "bg-white/[0.02]" : ""}
                >
                  <th className="w-1/3 px-5 py-4 text-left font-medium text-muted-foreground">
                    {k}
                  </th>
                  <td className="px-5 py-4 text-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-center md:justify-start">
          <AffiliateCTA size="lg" variant="emerald" />
        </div>
      </section>

      {/* Featured articles */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="From the blog"
          title="Featured guide articles"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="glass group flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <h3 className="text-base font-semibold leading-snug md:text-lg">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read article <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Affiliate program info */}
      <section className="container-pro mt-20 md:mt-28">
        <div className="glass relative overflow-hidden p-8 text-center md:p-12 md:text-left">
          <div className="absolute inset-0 -z-10 opacity-60"
               style={{
                 background:
                   "radial-gradient(600px 200px at 80% 0%, oklch(0.55 0.14 85 / 0.25), transparent 70%)",
               }}/>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Affiliate program</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
            JeetBuzz Affiliate Program — <span className="gold-text">What we know</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mx-0 md:text-base">
            JeetBuzz runs a public affiliate program with revenue-share and CPA
            options for partners promoting the platform in Bangladesh and South
            Asia. We summarise commission structure, payout cycles and
            cookie windows as publicly documented.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
            <Button asChild size="lg" variant="emerald">
              <Link to="/affiliate-program">Learn about the JeetBuzz Affiliate Program</Link>
            </Button>
            <AffiliateCTA size="lg" variant="glass" label="Visit JeetBuzz" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {FAQ.map((f) => (
            <div key={f.q} className="glass p-6">
              <h3 className="flex items-start gap-2.5 text-base font-semibold leading-snug">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                {f.q}
              </h3>
              <p className="mt-3 pl-[30px] text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pro mt-20 md:mt-28">
        <AffiliateDisclosure />
      </section>

      {/* Long-form: JeetBuzz Bangladesh complete guide */}
      <section className="container-pro mt-16">
        <SectionHeader
          eyebrow="JeetBuzz Bangladesh"
          title="The complete JeetBuzz guide for Bangladesh"
          desc="Bengali-first, no-fluff explanations of how JeetBuzz works for players in Dhaka, Chattogram, Sylhet, Rajshahi and beyond."
        />
        <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
          <div className="space-y-3">
            <p>
              JeetBuzz বাংলাদেশের সবচেয়ে পরিচিত অনলাইন স্পোর্টসবুক ও ক্যাসিনো
              ব্র্যান্ডগুলোর একটি — Curaçao অফশোর লাইসেন্সে পরিচালিত, ২৪/৭ বাংলা
              লাইভ চ্যাট সাপোর্ট, এবং BPL, IPL ও আন্তর্জাতিক ক্রিকেটে গভীর মার্কেট
              কভারেজ। এটাই দক্ষিণ এশিয়ার ক্রিকেট-ফোকাসড প্লেয়ারদের কাছে JeetBuzz এর
              মূল আকর্ষণ।
            </p>
            <p>
              GetJeetBuzz হল JeetBuzz এর একটি verified official affiliate partner —
              অর্থাৎ JeetBuzz এর সাথে আমাদের সরাসরি কমিশন এগ্রিমেন্ট আছে, কিন্তু
              আমরা JeetBuzz প্ল্যাটফর্ম নই। আমরা সরাসরি বাংলাদেশ থেকে অ্যাকাউন্ট
              খুলি, bKash দিয়ে ডিপোজিট করি, BPL ও IPL ম্যাচে লাইভ বেট করি, নিজেই
              উইথড্রয়াল টেস্ট করি — তারপর সেগুলো বাংলায় ও ইংরেজিতে লিখি।
            </p>
            <p>
              আপনি যদি একদম নতুন হন, প্রথমে আমাদের{" "}
              <Link to="/registration-guide" className="text-primary hover:underline">JeetBuzz Registration Guide</Link>{" "}
              পড়ুন। ইতিমধ্যে অ্যাকাউন্ট থাকলে{" "}
              <Link to="/login-guide" className="text-primary hover:underline">Login Guide</Link>{" "}
              দেখুন। ডিপোজিটের জন্য{" "}
              <Link to="/bkash-guide" className="text-primary hover:underline">bKash</Link>,{" "}
              <Link to="/nagad-guide" className="text-primary hover:underline">Nagad</Link>{" "}
              অথবা{" "}
              <Link to="/rocket-guide" className="text-primary hover:underline">Rocket</Link>{" "}
              গাইড আছে।
            </p>
          </div>
          <div className="space-y-3">
            <p>
              For English readers: JeetBuzz operates under an offshore license and
              serves Bangladesh, Pakistan and India with full Bengali, Hindi and
              Urdu support. The strongest verticals are cricket (BPL, IPL,
              internationals), live casino with Bengali-speaking dealers, and a
              competitive slots library. Mobile-first design means most players
              spend their time inside the Android APK or the iOS web app.
            </p>
            <p>
              GetJeetBuzz is a verified official affiliate partner of JeetBuzz —
              we earn commission on a revenue-share basis when readers sign up
              through our outbound links. That said, GetJeetBuzz.com is not the
              JeetBuzz platform itself: account signup, deposits and withdrawals
              all happen on JeetBuzz's own site. Our role is to document the
              process honestly from a real Bangladesh player's perspective. See
              our <Link to="/review-policy" className="text-primary hover:underline">Review Policy</Link>{" "}
              for how the affiliate relationship is kept separate from our
              editorial scoring.
            </p>
            <p>
              Read our{" "}
              <Link to="/jeetbuzz-review" className="text-primary hover:underline">JeetBuzz Review</Link>{" "}
              for the full editor verdict, the{" "}
              <Link to="/bonus-and-promotions" className="text-primary hover:underline">Bonus Guide</Link>{" "}
              for current welcome offers, and the{" "}
              <Link to="/live-cricket-betting" className="text-primary hover:underline">Live Cricket Betting</Link>{" "}
              guide before you place your first BPL bet.
            </p>
          </div>
        </div>
      </section>

      {/* Topical hubs grid */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="Topical hubs"
          title="Browse every JeetBuzz topic"
        />
        <div className="mt-10 grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { to: "/jeetbuzz-review", label: "JeetBuzz Review" },
            { to: "/registration-guide", label: "Registration" },
            { to: "/login-guide", label: "Login" },
            { to: "/apk-download-guide", label: "APK Download" },
            { to: "/mobile-app-guide", label: "Mobile App" },
            { to: "/bonus-and-promotions", label: "Bonuses" },
            { to: "/vip-program", label: "VIP Program" },
            { to: "/live-cricket-betting", label: "Live Cricket" },
            { to: "/sports-betting", label: "Sports Betting" },
            { to: "/casino-guide", label: "Casino" },
            { to: "/payment-methods", label: "Payment Methods" },
            { to: "/deposit-guide", label: "Deposit" },
            { to: "/withdrawal-guide", label: "Withdrawal" },
            { to: "/bkash-guide", label: "bKash" },
            { to: "/nagad-guide", label: "Nagad" },
            { to: "/rocket-guide", label: "Rocket" },
            { to: "/security-guide", label: "Security" },
            { to: "/affiliate-program", label: "Affiliate" },
            { to: "/affiliate-login", label: "Affiliate Login" },
            { to: "/responsible-gaming", label: "Responsible Gaming" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to as never}
              className="glass block px-5 py-3.5 text-center font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground md:text-left"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Mobile payments block */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="Mobile payments"
          title="bKash · Nagad · Rocket — the Bangladesh trio"
          desc="Three local wallets cover 95%+ of JeetBuzz deposits in Bangladesh. Here is how they compare."
        />
        <div className="glass mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Wallet</th>
                <th className="px-4 py-3 font-medium">Deposit speed</th>
                <th className="px-4 py-3 font-medium">Withdrawal speed</th>
                <th className="px-4 py-3 font-medium">Min</th>
                <th className="px-4 py-3 font-medium">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["bKash", "Instant", "Minutes – hours", "200 BDT", "Default Bangladesh pick"],
                ["Nagad", "Instant", "Within an hour", "200 BDT", "Backup to bKash"],
                ["Rocket", "Instant – 5 min", "Within an hour", "200 BDT", "Agent network access"],
              ].map(([w, d, wd, m, b], i) => (
                <tr key={w} className={i % 2 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-3 font-semibold text-foreground">{w}</td>
                  <td className="px-4 py-3">{d}</td>
                  <td className="px-4 py-3">{wd}</td>
                  <td className="px-4 py-3">{m}</td>
                  <td className="px-4 py-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          For full step-by-step screenshots, see the{" "}
          <Link to="/bkash-guide" className="text-primary hover:underline">bKash</Link>,{" "}
          <Link to="/nagad-guide" className="text-primary hover:underline">Nagad</Link> and{" "}
          <Link to="/rocket-guide" className="text-primary hover:underline">Rocket</Link> guides.
        </p>
      </section>

      {/* Sports vs Casino vs Live comparison */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="What to play"
          title="Sports vs Casino vs Live — quick comparison"
        />
        <div className="glass mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Vertical</th>
                <th className="px-4 py-3 font-medium">Best for</th>
                <th className="px-4 py-3 font-medium">House edge</th>
                <th className="px-4 py-3 font-medium">Bonus wagering</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sportsbook (cricket)", "Knowledge-led bettors", "Low (2–5%)", "Counts 100%"],
                ["Casino slots", "Casual / fun", "Medium (3–8%)", "Usually full"],
                ["Live casino", "Skill + atmosphere", "Varies (1–10%)", "Often reduced"],
              ].map(([v, b, h, w], i) => (
                <tr key={v} className={i % 2 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-3 font-semibold text-foreground">{v}</td>
                  <td className="px-4 py-3">{b}</td>
                  <td className="px-4 py-3">{h}</td>
                  <td className="px-4 py-3">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust & EEAT strip */}
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="How we work"
          title="Why trust GetJeetBuzz"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            { t: "Tested in Bangladesh", d: "We sign up, deposit and cash out from Dhaka. Every guide carries a verified date." },
            { t: "Independent scoring", d: "Affiliate commissions never change scores. Read our Review Policy." },
            { t: "18+ and responsible", d: "Every page carries responsible-gaming reminders. Set deposit limits before you start." },
          ].map((c) => (
            <div key={c.t} className="glass p-6">
              <h3 className="text-base font-semibold md:text-lg">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground md:justify-start">
          <Link to="/editorial-policy" className="hover:text-foreground">Editorial Policy</Link>
          <Link to="/review-policy" className="hover:text-foreground">Review Policy</Link>
          <Link to="/fact-checking" className="hover:text-foreground">Fact-Checking</Link>
          <Link to="/update-policy" className="hover:text-foreground">Update Policy</Link>
          <Link to="/content-policy" className="hover:text-foreground">Content Policy</Link>
          <Link to="/affiliate-disclosure" className="hover:text-foreground">Affiliate Disclosure</Link>
        </div>
      </section>
    </PageShell>
  );
}

function Trust({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4 text-primary" />
      <span>{label}</span>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{title}</h2>
      {desc && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {desc}
        </p>
      )}
    </div>
  );
}
