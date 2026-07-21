import { Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

const FEATURED_POSTS = [
  {
    slug: "jeetbuzz-registration-guide-bangladesh",
    title: "JeetBuzz Registration Guide for Bangladesh (2026)",
    desc: "A clean, screenshot-friendly walkthrough of signing up from Bangladesh.",
    cta: "Open the walkthrough",
  },
  {
    slug: "jeetbuzz-bkash-nagad-deposit-guide",
    title: "Deposit on JeetBuzz with bKash, Nagad & Rocket",
    desc: "Minimums, fees, processing times and what to do if a deposit fails.",
    cta: "Compare deposit rails",
  },
  {
    slug: "is-jeetbuzz-safe-bangladesh",
    title: "Is JeetBuzz Safe for Bangladeshi Players?",
    desc: "Licensing, KYC, withdrawals and red flags. An independent take.",
    cta: "See the trust verdict",
  },
];

export default function BlogSection() {
  return (
    <>
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader eyebrow="From the blog" title="Featured guide articles" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex h-full flex-col rounded-2xl bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
            >
              <span className="text-[11px] uppercase tracking-[0.14em] text-primary/80">
                Guide article
              </span>
              <h3 className="mt-3 text-base font-semibold leading-snug md:text-lg">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <span className="mt-5 text-sm font-medium text-foreground/90 group-hover:text-primary">
                {p.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-pro mt-20 md:mt-28">
        <div className="glass relative overflow-hidden p-8 text-center md:p-12 md:text-left">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(600px 200px at 80% 0%, oklch(0.55 0.14 85 / 0.25), transparent 70%)",
            }}
          />
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
    </>
  );
}