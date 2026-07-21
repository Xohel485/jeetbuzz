import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";

/**
 * Home guide cards.
 *
 * Deliberately avoids the "icon in rounded coloured box + Read guide →"
 * template look. Cards mix three visual variants (indexed numeral, quiet
 * text card, accent-border pillar) and every CTA uses distinct copy.
 */
type CardVariant = "numeral" | "quiet" | "accent";

type Card = {
  to: string;
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
  variant: CardVariant;
};

const GUIDE_CARDS: Card[] = [
  {
    to: "/jeetbuzz-review",
    eyebrow: "Pillar review",
    title: "JeetBuzz Review 2026: the full operator verdict",
    desc: "Odds quality, payment speed, support responsiveness and the trust verdict for players across Bangladesh, Pakistan and India.",
    cta: "See the full breakdown",
    variant: "accent",
  },
  {
    to: "/registration-guide",
    eyebrow: "Getting started",
    title: "Registration & KYC",
    desc: "Open an account in under three minutes. Phone signup, OTP, KYC and the first bKash or Nagad deposit, in Bengali and English.",
    cta: "Walk through signup",
    variant: "numeral",
  },
  {
    to: "/bonus-and-promotions",
    eyebrow: "Bonuses",
    title: "Bonuses & promotions, explained plainly",
    desc: "Welcome bonus, reloads, cashback and free bets with wagering and max-bet rules translated into normal English.",
    cta: "Check eligibility",
    variant: "quiet",
  },
  {
    to: "/apk-download-guide",
    eyebrow: "Android",
    title: "APK download, safely",
    desc: "Install the official Android app from a verified source. Permission walk-through and the common install errors, actually fixed.",
    cta: "Install on Android",
    variant: "numeral",
  },
  {
    to: "/deposit-guide",
    eyebrow: "Cashier",
    title: "Deposit guide: bKash, Nagad, UPI",
    desc: "Every supported rail with minimums, processing times and the exact Send-Money flow for first-time depositors.",
    cta: "Compare deposit rails",
    variant: "quiet",
  },
  {
    to: "/withdrawal-guide",
    eyebrow: "Cashier",
    title: "Withdrawal guide & limits",
    desc: "Cash out faster. KYC checklist, VIP-tier limits and what to do when a withdrawal sits pending for hours.",
    cta: "Compare payout times",
    variant: "numeral",
  },
  {
    to: "/live-cricket-betting",
    eyebrow: "Cricket",
    title: "Live cricket betting",
    desc: "BPL, IPL and PSL markets. In-play odds, cash-out timing and a volatility playbook for the last five overs.",
    cta: "Read the in-play playbook",
    variant: "quiet",
  },
  {
    to: "/is-jeetbuzz-safe",
    eyebrow: "Trust",
    title: "Is JeetBuzz safe & legit?",
    desc: "Independent 2026 trust review. Curaçao licence, payout record, KYC handling and the red flags every player should know.",
    cta: "See the trust verdict",
    variant: "accent",
  },
];

function NumeralCard({ card, index }: { card: Card; index: number }) {
  return (
    <Link
      to={card.to}
      className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-primary/30 hover:bg-white/[0.04]"
    >
      <div className="flex items-baseline justify-between">
        <span className="gold-text font-mono text-3xl font-bold leading-none tracking-tight">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
          {card.eyebrow}
        </span>
      </div>
      <h3 className="mt-5 text-base font-semibold leading-snug md:text-lg">{card.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
      <span className="mt-5 text-sm font-medium text-primary underline-offset-4 group-hover:underline">
        {card.cta}
      </span>
    </Link>
  );
}

function QuietCard({ card }: { card: Card }) {
  return (
    <Link
      to={card.to}
      className="group flex h-full flex-col rounded-2xl bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
    >
      <span className="text-[11px] uppercase tracking-[0.14em] text-primary/80">
        {card.eyebrow}
      </span>
      <h3 className="mt-3 text-base font-semibold leading-snug md:text-lg">{card.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
      <span className="mt-5 text-sm font-medium text-foreground/90 group-hover:text-primary">
        {card.cta}
      </span>
    </Link>
  );
}

function AccentCard({ card }: { card: Card }) {
  return (
    <Link
      to={card.to}
      className="group relative flex h-full flex-col rounded-2xl border-l-2 border-primary/60 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-7 transition-colors hover:border-primary hover:from-white/[0.08]"
    >
      <span className="text-[11px] uppercase tracking-[0.16em] text-primary">
        {card.eyebrow}
      </span>
      <h3 className="mt-4 text-lg font-semibold leading-snug md:text-2xl">
        {card.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
        {card.desc}
      </p>
      <span className="mt-6 text-sm font-medium text-primary underline-offset-4 group-hover:underline">
        {card.cta}
      </span>
    </Link>
  );
}

export default function GuideCards() {
  return (
    <section className="container-pro mt-20 md:mt-28">
      <SectionHeader
        eyebrow="JeetBuzz guides"
        title="Everything you need to use JeetBuzz"
        desc="Step-by-step guides written for players in Bangladesh, Pakistan and India, refreshed whenever JeetBuzz changes its terms."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDE_CARDS.map((c, i) => {
          if (c.variant === "accent") return <AccentCard key={c.to} card={c} />;
          if (c.variant === "quiet") return <QuietCard key={c.to} card={c} />;
          return <NumeralCard key={c.to} card={c} index={i} />;
        })}
      </div>
    </section>
  );
}