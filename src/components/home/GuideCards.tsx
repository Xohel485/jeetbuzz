import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Gift,
  ShieldCheck,
  Smartphone,
  Trophy,
  Wallet,
  ShieldAlert,
  Banknote,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const GUIDE_CARDS = [
  {
    to: "/jeetbuzz-review",
    icon: BookOpen,
    title: "JeetBuzz Review 2026 — Full Operator Breakdown",
    desc: "The pillar JeetBuzz review for Bangladesh, Pakistan and India — odds quality, payment speed, support and the trust verdict in one place.",
  },
  {
    to: "/registration-guide",
    icon: ShieldCheck,
    title: "JeetBuzz Registration & KYC",
    desc: "Open an account in under 3 minutes — phone signup, OTP, KYC and first bKash/Nagad deposit in Bengali and English.",
  },
  {
    to: "/bonus-and-promotions",
    icon: Gift,
    title: "Bonus & Promotions Explained",
    desc: "Welcome bonus, reloads, cashback and free bets with wagering and max-bet rules in plain language.",
  },
  {
    to: "/apk-download-guide",
    icon: Smartphone,
    title: "JeetBuzz APK Download Guide",
    desc: "Install the official Android app safely — verified source, permission walk-through and common install errors fixed.",
  },
  {
    to: "/deposit-guide",
    icon: Wallet,
    title: "Deposit Guide — bKash, Nagad, UPI",
    desc: "Every supported rail with minimums, processing times and the exact Send-Money flow for first-time depositors.",
  },
  {
    to: "/withdrawal-guide",
    icon: Banknote,
    title: "Withdrawal Guide & Limits",
    desc: "How to cash out fast — KYC checklist, VIP-tier limits and what to do when a withdrawal sits pending.",
  },
  {
    to: "/live-cricket-betting",
    icon: Trophy,
    title: "Live Cricket Betting",
    desc: "BPL, IPL and PSL markets — in-play odds, cash-out timing and the volatility playbook for live cricket.",
  },
  {
    to: "/is-jeetbuzz-safe",
    icon: ShieldAlert,
    title: "Is JeetBuzz Safe & Legit?",
    desc: "Independent 2026 trust review — Curacao licence, payout record, KYC handling and the red flags every player should know.",
  },
] as const;

export default function GuideCards() {
  return (
    <section className="container-pro mt-20 md:mt-28">
      <SectionHeader
        eyebrow="JeetBuzz guides"
        title="Everything you need to use JeetBuzz"
        desc="Step-by-step JeetBuzz guides written for players in Bangladesh, Pakistan and India — updated whenever JeetBuzz changes its terms."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDE_CARDS.map((c, i) => {
          const featured = i === 0;
          return (
            <Link
              key={c.to}
              to={c.to}
              className={
                "glass group flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.06] " +
                (featured ? "lg:col-span-2 lg:p-8 lg:row-span-1" : "")
              }
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={
                    "grid shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20 " +
                    (featured ? "size-12" : "size-11")
                  }
                >
                  <c.icon className={featured ? "size-6" : "size-5"} />
                </span>
                <h3
                  className={
                    "font-semibold leading-snug " +
                    (featured ? "text-lg md:text-2xl" : "text-base md:text-lg")
                  }
                >
                  {c.title}
                </h3>
              </div>
              <p
                className={
                  "mt-4 flex-1 leading-relaxed text-muted-foreground " +
                  (featured ? "text-sm md:text-base" : "text-sm")
                }
              >
                {c.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read guide <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}