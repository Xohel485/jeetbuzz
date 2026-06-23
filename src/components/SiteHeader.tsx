import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { GO, REL } from "@/lib/affiliate";
import { track } from "@/lib/analytics";
import logoAsset from "@/assets/getjeetbuzz-logo.webp.asset.json";
import bdFlag from "@/assets/flags/bd.png.asset.json";
import pkFlag from "@/assets/flags/pk.png.asset.json";
import inFlag from "@/assets/flags/in.png.asset.json";
import { useI18n, LOCALE_META, LOCALES, COUNTRIES, type Locale, type Country } from "@/lib/i18n";

const NAV = [
  { to: "/jeetbuzz-review", key: "nav.review" },
  { to: "/registration-guide", key: "nav.registration" },
  { to: "/login-guide", key: "nav.login" },
  { to: "/bonus-and-promotions", key: "nav.bonuses" },
  { to: "/apk-download-guide", key: "nav.app" },
  { to: "/deposit-withdrawal-guide", key: "nav.payments" },
  { to: "/blog", key: "nav.blog" },
] as const;

const LANGS: Array<{ code: Locale; label: string; country: string; flag: string }> = [
  { code: "bn", label: "বাংলা", country: "Bangladesh", flag: bdFlag.url },
  { code: "ur", label: "اردو", country: "Pakistan", flag: pkFlag.url },
  { code: "hi", label: "हिन्दी", country: "India", flag: inFlag.url },
  { code: "en", label: "English", country: "International", flag: bdFlag.url },
];

function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = LANGS.find((l) => l.code === locale) ?? LANGS[3];

  // Strip a leading /{country}/{lang} prefix from the current path so we
  // can re-mount it under the newly chosen locale's prefix without losing
  // which page the user is on.
  function stripLocalePrefix(p: string): string {
    const segs = p.split("/").filter(Boolean);
    if (segs.length >= 2 && (COUNTRIES as readonly string[]).includes(segs[0]) && (LOCALES as readonly string[]).includes(segs[1])) {
      return "/" + segs.slice(2).join("/");
    }
    return p;
  }

  function targetForLocale(next: Locale): string {
    const tail = stripLocalePrefix(pathname);
    const clean = tail === "/" ? "" : tail;
    if (next === "en") return clean || "/";
    const country = LOCALE_META[next].country as Country;
    return clean ? `/${country}/${next}${clean}` : `/${country}/${next}`;
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-label={`${t("header.lang.aria")}: ${current.country}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-foreground hover:bg-white/10"
      >
        <img src={current.flag} alt="" width={20} height={20} className="size-5 rounded-full object-cover" />
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className="size-3.5 opacity-70" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-md border border-white/10 bg-background/95 shadow-xl backdrop-blur"
        >
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => {
                  track("language_change", { from: locale, to: l.code, country: l.country });
                  setLocale(l.code);
                  setOpen(false);
                  // Preserve current page when switching locales.
                  navigate({ to: targetForLocale(l.code) });
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-xs text-foreground hover:bg-white/10"
              >
                <img src={l.flag} alt="" width={20} height={20} className="size-5 rounded-full object-cover" />
                <span className="flex-1">{l.label}</span>
                <span className="text-[10px] text-muted-foreground">{l.country}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AuthButtons({ stacked = false }: { stacked?: boolean }) {
  const { t } = useI18n();
  const base =
    "inline-flex h-10 items-center justify-center rounded-lg px-5 text-sm font-semibold leading-none tracking-tight transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";
  return (
    <div className={stacked ? "flex w-full flex-col gap-2.5" : "flex items-center gap-2"}>
      <a
        href={GO.signup}
        target="_blank"
        rel={REL}
        aria-label="Sign up at JeetBuzz"
        onClick={() => {
          const pos = stacked ? "header" : "header";
          track("signup_click", { destination: "signup", button_position: pos });
          track("affiliate_click", { intent: "signup", destination: "signup", button_position: pos });
        }}
        className={`${base} ${stacked ? "w-full h-12" : ""} bg-gradient-to-r from-[#f49a3a] to-[#e07818] text-white shadow-[0_10px_28px_-12px_#e07818] hover:brightness-110 hover:shadow-[0_14px_34px_-12px_#e07818]`}
      >
        {t("header.signup")}
      </a>
      <a
        href={GO.login}
        target="_blank"
        rel={REL}
        aria-label="Log in to JeetBuzz"
        onClick={() => {
          track("login_click", { destination: "login", button_position: "header" });
          track("affiliate_click", { intent: "login", destination: "login", button_position: "header" });
        }}
        className={`${base} ${stacked ? "w-full h-12" : ""} bg-primary text-primary-foreground shadow-[0_10px_28px_-12px_var(--primary)] hover:brightness-110`}
      >
        {t("header.login")}
      </a>
    </div>
  );
}

function CompactAuthButtons() {
  const { t } = useI18n();
  const base =
    "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-2.5 text-[11px] font-semibold leading-none tracking-tight transition-all duration-200 ease-out active:scale-[0.98]";
  return (
    <div className="flex shrink-0 items-center gap-1.5">
      <a
        href={GO.signup}
        target="_blank"
        rel={REL}
        aria-label="Sign up at JeetBuzz"
        onClick={() => {
          track("signup_click", { destination: "signup", button_position: "header" });
          track("affiliate_click", { intent: "signup", destination: "signup", button_position: "header" });
        }}
        className={`${base} bg-gradient-to-r from-[#f49a3a] to-[#e07818] text-white shadow-[0_6px_18px_-10px_#e07818] hover:brightness-110`}
      >
        {t("header.signup")}
      </a>
      <a
        href={GO.login}
        target="_blank"
        rel={REL}
        aria-label="Log in to JeetBuzz"
        onClick={() => {
          track("login_click", { destination: "login", button_position: "header" });
          track("affiliate_click", { intent: "login", destination: "login", button_position: "header" });
        }}
        className={`${base} bg-primary text-primary-foreground shadow-[0_6px_18px_-10px_var(--primary)] hover:brightness-110`}
      >
        {t("header.login")}
      </a>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="container-pro flex h-16 items-center justify-between gap-2 md:h-20 md:gap-4">
        <Link to="/" className="flex min-w-0 shrink items-center" aria-label="GetJeetBuzz — Home">
          <img
            src={logoAsset.url}
            alt="JeetBuzz — GetJeetBuzz.com verified affiliate partner logo"
            width={160}
            height={48}
            className="h-8 w-auto max-w-[140px] md:h-12 md:max-w-none object-contain select-none pointer-events-none"
            loading="eager"
            decoding="async"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "text-foreground bg-white/10" }}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <AuthButtons />
        </div>
        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          <CompactAuthButtons />
          <LanguageSwitcher />
        <button
          aria-label="Toggle navigation"
          className="grid h-9 w-9 place-items-center rounded-md hover:bg-white/5"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-pro flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-center text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {t(n.key)}
              </Link>
            ))}
            <div className="pt-3">
              <AuthButtons stacked />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}