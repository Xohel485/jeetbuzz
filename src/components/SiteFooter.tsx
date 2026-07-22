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
      { src: cazvip, alt: "CazVIP Gaming Alliance. JeetBuzz partner", label: "CazVIP Alliance" },
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
      { src: rgAge, alt: "18+ only, responsible gaming", label: "18+ Only" },
      { src: rgMain, alt: "Responsible gambling support", label: "Responsible Gambling" },
      { src: gamcare, alt: "GamCare, responsible gaming support", label: "GamCare" },
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

const FacebookIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.69 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.69-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.27 4.35 2.69 6.77 7.05 7.05 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.35-.27 6.77-2.69 7.05-7.05.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.27-4.35-2.69-6.77-7.05-7.05C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
  </svg>
);

const TikTokIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .78.1V9.4a6.33 6.33 0 0 0-.78-.05A6.26 6.26 0 0 0 3 15.61a6.26 6.26 0 0 0 9.65 5.26 6.26 6.26 0 0 0 2.95-5.37V7.63a8.16 8.16 0 0 0 4.79 1.55V5.92a4.85 4.85 0 0 1-.8-.23z" />
  </svg>
);

const XIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TelegramIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const SOCIALS = [
  { key: "facebook", href: "https://facebook.com/GetJeetBuzz", labelKey: "footer.social.facebook", Icon: FacebookIcon },
  { key: "youtube", href: "https://youtube.com/@jeetbuzz", labelKey: "footer.social.youtube", Icon: YouTubeIcon },
  { key: "instagram", href: "https://instagram.com/getjeetbuzz", labelKey: "footer.social.instagram", Icon: InstagramIcon },
  { key: "tiktok", href: "https://tiktok.com/@getjeetbuzz", labelKey: "footer.social.tiktok", Icon: TikTokIcon },
  { key: "x", href: "https://x.com/GetJeetBuzz", labelKey: "footer.social.x", Icon: XIcon },
  { key: "telegram", href: "https://t.me/GetJeetBuzz", labelKey: "footer.social.telegram", Icon: TelegramIcon },
];

export function SiteFooter() {
  const latestPosts = FOOTER_POSTS;
  const { t } = useI18n();
  return (
    <footer className="mt-28 border-t border-white/5 bg-black/40">
      <div className="container-pro py-16 text-center md:text-left">
        <div className="mb-10 flex items-center justify-center md:justify-start">
          <Link to="/" aria-label="GetJeetBuzz. Home">
            <img
              src={logoAsset}
              alt="JeetBuzz. GetJeetBuzz.com verified affiliate partner logo"
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

        <div className="mt-12 border-t border-white/5 pt-8 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{t("footer.socials.title")}</p>
          <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={t(s.labelKey)}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <s.Icon />
              </a>
            ))}
          </div>
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
        <div className="mt-6 border-t border-white/5 pt-6 text-center text-xs leading-relaxed text-muted-foreground md:text-left">
          <p>
            getjeetbuzz.com JeetBuzz-এর verified affiliate partner। আমরা signup ও deposit থেকে commission আয় করি, কিন্তু এই সাইটটি JeetBuzz-এর official website নয়। আমরা কখনো JeetBuzz account credentials, password বা OTP জিজ্ঞেস করি না।
          </p>
          <p className="mt-2 opacity-80">
            getjeetbuzz.com is a verified affiliate partner of JeetBuzz. We earn a commission on referrals, but this site is not the official JeetBuzz website. We never ask for JeetBuzz account credentials, passwords or OTPs.
          </p>
        </div>
      </div>
    </footer>
  );
}