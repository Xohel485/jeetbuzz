import { Link } from "@tanstack/react-router";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SITE_NAME, MARKETS } from "@/lib/affiliate";
import { useI18n } from "@/lib/i18n";
import logoAsset from "@/assets/getjeetbuzz-logo.webp";
import cazvip from "@/assets/badges/cazvip-alliance.webp";
import curacao from "@/assets/badges/curacao-license.webp";
import montenegro from "@/assets/badges/montenegro-license.png";
import gamingLicense from "@/assets/badges/gaming-license.png";
import rgAge from "@/assets/badges/responsible-gaming-18.webp";
import rgMain from "@/assets/badges/responsible-gambling.webp";
import gamcare from "@/assets/badges/gamcare.webp";

const FOOTER_POSTS: { slug: string; titleKey: string }[] = [
  { slug: "jeetbuzz-registration-guide-bangladesh", titleKey: "footer.post.registration_bd" },
  { slug: "jeetbuzz-login-guide", titleKey: "footer.post.login" },
  { slug: "jeetbuzz-apk-download-safe-guide", titleKey: "footer.post.apk" },
  { slug: "jeetbuzz-bonus-terms-explained", titleKey: "footer.post.bonus_terms" },
  { slug: "jeetbuzz-bkash-nagad-deposit-guide", titleKey: "footer.post.bkash_nagad" },
  { slug: "jeetbuzz-live-cricket-betting-guide", titleKey: "footer.post.live_cricket" },
];

type Badge = { src: string; alt: string; label: string };

const TRUST_GROUPS: { titleKey: string; descKey: string; tileLight?: boolean; badges: Badge[] }[] = [
  {
    titleKey: "footer.trust.alliance",
    descKey: "footer.trust.alliance.desc",
    badges: [
      { src: cazvip, alt: "CazVIP Gaming Alliance — JeetBuzz partner", label: "CazVIP Alliance" },
    ],
  },
  {
    titleKey: "footer.trust.license",
    descKey: "footer.trust.license.desc",
    badges: [
      { src: curacao, alt: "Gaming Curaçao licensing authority", label: "Gaming Curaçao" },
      { src: montenegro, alt: "Montenegro E-Gambling licence", label: "Montenegro Licence" },
      { src: gamingLicense, alt: "Licensed online gaming operator", label: "Licensed Operator" },
    ],
  },
  {
    titleKey: "footer.trust.rg",
    descKey: "footer.trust.rg.desc",
    tileLight: true,
    badges: [
      { src: rgAge, alt: "18+ only — responsible gaming", label: "18+ Only" },
      { src: rgMain, alt: "Responsible gambling support", label: "Responsible Gambling" },
      { src: gamcare, alt: "GamCare — responsible gaming support", label: "GamCare" },
    ],
  },
];

const COLS = [
  {
    titleKey: "footer.col.guides",
    links: [
      { to: "/", labelKey: "footer.link.home" },
      { to: "/jeetbuzz-review", labelKey: "footer.link.review" },
      { to: "/registration-guide", labelKey: "footer.link.registration" },
      { to: "/login-guide", labelKey: "footer.link.login" },
      { to: "/apk-download-guide", labelKey: "footer.link.apk" },
      { to: "/mobile-app-guide", labelKey: "footer.link.mobile" },
      { to: "/security-guide", labelKey: "footer.link.security" },
      { to: "/vip-program", labelKey: "footer.link.vip" },
    ],
  },
  {
    titleKey: "footer.col.bets",
    links: [
      { to: "/bonus-and-promotions", labelKey: "footer.link.bonus" },
      { to: "/live-cricket-betting", labelKey: "footer.link.live" },
      { to: "/sports-betting", labelKey: "footer.link.sports" },
      { to: "/casino-guide", labelKey: "footer.link.casino" },
      { to: "/affiliate-program", labelKey: "footer.link.affiliate" },
      { to: "/affiliate-login", labelKey: "footer.link.affiliate_login" },
    ],
  },
  {
    titleKey: "footer.col.payments",
    links: [
      { to: "/payment-methods", labelKey: "footer.link.payments_all" },
      { to: "/deposit-guide", labelKey: "footer.link.deposit" },
      { to: "/withdrawal-guide", labelKey: "footer.link.withdraw" },
      { to: "/bkash-guide", labelKey: "footer.link.bkash" },
      { to: "/nagad-guide", labelKey: "footer.link.nagad" },
      { to: "/rocket-guide", labelKey: "footer.link.rocket" },
      { to: "/deposit-withdrawal-guide", labelKey: "footer.link.dw" },
    ],
  },
  {
    titleKey: "footer.col.site",
    links: [
      { to: "/about", labelKey: "footer.link.about" },
      { to: "/blog", labelKey: "footer.link.blog" },
      { to: "/faq", labelKey: "footer.link.faq" },
      { to: "/contact", labelKey: "footer.link.contact" },
    ],
  },
  {
    titleKey: "footer.col.legal",
    links: [
      { to: "/affiliate-disclosure", labelKey: "footer.link.disclosure" },
      { to: "/privacy-policy", labelKey: "footer.link.privacy" },
      { to: "/terms", labelKey: "footer.link.terms" },
      { to: "/responsible-gaming", labelKey: "footer.link.rg" },
      { to: "/editorial-policy", labelKey: "footer.link.editorial" },
      { to: "/review-policy", labelKey: "footer.link.review_policy" },
      { to: "/content-policy", labelKey: "footer.link.content" },
      { to: "/fact-checking", labelKey: "footer.link.fact" },
      { to: "/update-policy", labelKey: "footer.link.update" },
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
              src={logoAsset}
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
            <div key={g.titleKey} className="glass flex h-full flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t(g.titleKey)}
              </p>
              <p className="mt-2 text-xs text-muted-foreground/80">{t(g.descKey)}</p>
              <div className="mt-5 flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-3">
                {g.badges.map((b) => (
                  <div
                    key={b.label}
                    title={b.label}
                    className={
                      g.tileLight
                        ? "flex items-center justify-center rounded-xl border border-amber-300/40 bg-amber-100/95 p-2.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
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
            <div key={c.titleKey}>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{t(c.titleKey)}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t(l.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-10 text-left">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              {t("footer.blog.latest")}
            </p>
            <Link to="/blog" className="shrink-0 text-xs font-medium text-primary hover:underline">
              {t("footer.blog.viewall")}
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
                  {t(p.titleKey)}
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