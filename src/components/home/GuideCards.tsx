import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Gift,
  ShieldCheck,
  Smartphone,
  Trophy,
  Wallet,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

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