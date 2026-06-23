import { Link } from "@tanstack/react-router";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SITE_NAME, MARKETS } from "@/lib/affiliate";
import { useI18n } from "@/lib/i18n";
import logoAsset from "@/assets/getjeetbuzz-logo.png.asset.json";
import cazvip from "@/assets/badges/cazvip-alliance.webp.asset.json";
import curacao from "@/assets/badges/curacao-license.webp.asset.json";
import montenegro from "@/assets/badges/montenegro-license.png.asset.json";
import gamingLicense from "@/assets/badges/gaming-license.png.asset.json";
import rgAge from "@/assets/badges/responsible-gaming-18.webp.asset.json";
import rgMain from "@/assets/badges/responsible-gambling.webp.asset.json";
import gamcare from "@/assets/badges/gamcare.webp.asset.json";

const FOOTER_POSTS: { slug: string; title: string }[] = [
  { slug: "jeetbuzz-registration-guide-bangladesh", title: "JeetBuzz Registration Guide for Bangladesh (2026)" },
  { slug: "jeetbuzz-login-guide", title: "JeetBuzz Login Guide — Safe Access from Bangladesh" },
  { slug: "jeetbuzz-apk-download-safe-guide", title: "JeetBuzz APK Download — Safe Install Guide" },
  { slug: "jeetbuzz-bonus-terms-explained", title: "JeetBuzz Bonus Terms — What the Fine Print Actually Means" },
  { slug: "jeetbuzz-bkash-nagad-deposit-guide", title: "JeetBuzz Deposits with bKash, Nagad & Rocket" },
  { slug: "jeetbuzz-live-cricket-betting-guide", title: "JeetBuzz Live Cricket Betting — A Practical Guide" },
];

type Badge = { src: string; alt: string; label: string };

const TRUST_GROUPS: { title: string; desc: string; tileLight?: boolean; badges: Badge[] }[] = [
  {
    title: "Gaming alliance",
    desc: "Official partnerships and operator alliances.",
    badges: [
      { src: cazvip.url, alt: "CazVIP Gaming Alliance — JeetBuzz partner", label: "CazVIP Alliance" },
    ],
  },
  {
    title: "Gaming license",
    desc: "Regulators and licences covering the operator.",
    badges: [
      { src: curacao.url, alt: "Gaming Curaçao licensing authority", label: "Gaming Curaçao" },
      { src: montenegro.url, alt: "Montenegro E-Gambling licence", label: "Montenegro Licence" },
      { src: gamingLicense.url, alt: "Licensed online gaming operator", label: "Licensed Operator" },
    ],
  },
  {
    title: "Responsible gaming",
    desc: "Player-protection bodies and age-gating standards we follow.",
    tileLight: true,
    badges: [
      { src: rgAge.url, alt: "18+ only — responsible gaming", label: "18+ Only" },
      { src: rgMain.url, alt: "Responsible gambling support", label: "Responsible Gambling" },
      { src: gamcare.url, alt: "GamCare — responsible gaming support", label: "GamCare" },
    ],
  },
];

const COLS = [
  {
    title: "JeetBuzz Guides",
    links: [
      { to: "/", label: "Home" },
      { to: "/jeetbuzz-review", label: "JeetBuzz Review" },
      { to: "/registration-guide", label: "Registration Guide" },
      { to: "/login-guide", label: "Login Guide" },
      { to: "/apk-download-guide", label: "APK Download Guide" },
      { to: "/mobile-app-guide", label: "Mobile App Guide" },
      { to: "/security-guide", label: "Security Guide" },
      { to: "/vip-program", label: "VIP Program" },
    ],
  },
  {
    title: "Betting & Games",
    links: [
      { to: "/bonus-and-promotions", label: "Bonus & Promotions" },
      { to: "/live-cricket-betting", label: "Live Cricket" },
      { to: "/sports-betting", label: "Sports Betting" },
      { to: "/casino-guide", label: "Casino Guide" },
      { to: "/affiliate-program", label: "Affiliate Program" },
      { to: "/affiliate-login", label: "Affiliate Login" },
    ],
  },
  {
    title: "Payments",
    links: [
      { to: "/payment-methods", label: "All Payment Methods" },
      { to: "/deposit-guide", label: "Deposit Guide" },
      { to: "/withdrawal-guide", label: "Withdrawal Guide" },
      { to: "/bkash-guide", label: "bKash Guide" },
      { to: "/nagad-guide", label: "Nagad Guide" },
      { to: "/rocket-guide", label: "Rocket Guide" },
      { to: "/deposit-withdrawal-guide", label: "Deposit & Withdrawal Overview" },
    ],
  },
  {
    title: "Site",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Policies & Legal",
    links: [
      { to: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms" },
      { to: "/responsible-gaming", label: "Responsible Gaming" },
      { to: "/editorial-policy", label: "Editorial Policy" },
      { to: "/review-policy", label: "Review Policy" },
      { to: "/content-policy", label: "Content Policy" },
      { to: "/fact-checking", label: "Fact-Checking" },
      { to: "/update-policy", label: "Update Policy" },
    ],
  },
] as const;

export function SiteFooter() {
  const latestPosts = FOOTER_POSTS;
  const { t } = useI18n();
  return (
    <footer className="mt-28 border-t border-white/5 bg-black/40">
      <div className="container-pro py-16 text-center md:text-left">
        <div className="mb-10 flex items-center justify-center md:justify-start">
          <Link to="/" aria-label="GetJeetBuzz — Home">
            <img
              src={logoAsset.url}
              alt="JeetBuzz — GetJeetBuzz.com verified affiliate partner logo"
              width={220}
              height={66}
              className="h-14 w-auto md:h-16"
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>
        <AffiliateDisclosure />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TRUST_GROUPS.map((g) => (
            <div key={g.title} className="glass flex h-full flex-col p-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {g.title}
              </h4>
              <p className="mt-2 text-xs text-muted-foreground/80">{g.desc}</p>
              <div className="mt-5 flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-3">
                {g.badges.map((b) => (
                  <div
                    key={b.label}
                    title={b.label}
                    className={
                      g.tileLight
                        ? "flex items-center justify-center rounded-xl border border-white/15 bg-white/90 p-2.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                        : "flex items-center"
                    }
                  >
                    <img
                      src={b.src}
                      alt={b.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-11 w-auto opacity-95 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground md:justify-start">
          <span className="text-foreground font-medium">{t("footer.markets")}</span>
          {MARKETS.map((m) => (
            <span key={m} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              {m}
            </span>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 text-left sm:grid-cols-3 md:grid-cols-5 md:gap-x-8">
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-10 text-left">
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              JeetBuzz Blog — Latest Guides
            </h4>
            <Link to="/blog" className="shrink-0 text-xs font-medium text-primary hover:underline">
              View all
            </Link>
          </div>
          <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/5 pt-8 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left">
          <p>{t("footer.copy", { year: new Date().getFullYear(), site: SITE_NAME })}</p>
          <p>
            {t("footer.help")}{" "}
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              BeGambleAware
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}