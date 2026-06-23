import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Multilingual foundation for GetJeetBuzz.
 *
 * Phase 1 scope: header, footer, homepage hero/CTAs across 4 locales.
 * Other routes remain English (English dictionary acts as the fallback).
 *
 * URL scheme (country + lang): /bd/bn, /pk/ur, /in/hi (with /en variants).
 * The bare "/" stays the English/default homepage.
 */

export type Locale = "en" | "bn" | "ur" | "hi";
export type Country = "bd" | "pk" | "in";

export const LOCALES: Locale[] = ["en", "bn", "ur", "hi"];
export const COUNTRIES: Country[] = ["bd", "pk", "in"];

export const LOCALE_META: Record<
  Locale,
  { label: string; htmlLang: string; dir: "ltr" | "rtl"; country: Country }
> = {
  en: { label: "English", htmlLang: "en", dir: "ltr", country: "bd" },
  bn: { label: "বাংলা", htmlLang: "bn-BD", dir: "ltr", country: "bd" },
  ur: { label: "اردو", htmlLang: "ur-PK", dir: "rtl", country: "pk" },
  hi: { label: "हिन्दी", htmlLang: "hi-IN", dir: "ltr", country: "in" },
};

export const COUNTRY_META: Record<
  Country,
  { label: string; defaultLocale: Locale; locales: Locale[] }
> = {
  bd: { label: "Bangladesh", defaultLocale: "bn", locales: ["bn", "en"] },
  pk: { label: "Pakistan", defaultLocale: "ur", locales: ["ur", "en"] },
  in: { label: "India", defaultLocale: "hi", locales: ["hi", "en"] },
};

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as string[]).includes(v);
}
export function isCountry(v: unknown): v is Country {
  return typeof v === "string" && (COUNTRIES as string[]).includes(v);
}

/** Build the localized homepage path for a given locale. */
export function localizedHomePath(locale: Locale): string {
  if (locale === "en") return "/";
  const country = LOCALE_META[locale].country;
  return `/${country}/${locale}`;
}

/**
 * Derive country from a URL pathname.
 * - /bd/... → "bd"
 * - /pk/... → "pk"
 * - /in/... → "in"
 * - everything else → "global"
 */
export function countryFromPathname(pathname: string): Country | "global" {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "bd" || seg === "pk" || seg === "in") return seg;
  return "global";
}

// ------------------------------------------------------------------
// Dictionaries
// ------------------------------------------------------------------

type Dict = Record<string, string>;

const en: Dict = {
  // Header / nav
  "nav.review": "Review",
  "nav.registration": "Registration",
  "nav.login": "Login Guide",
  "nav.bonuses": "Bonuses",
  "nav.app": "App",
  "nav.payments": "Payments",
  "nav.blog": "Blog",
  "header.signup": "Sign Up",
  "header.login": "Login",
  "header.lang.aria": "Change language",

  // Hero
  "hero.eyebrow": "JeetBuzz · Bangladesh · Pakistan · India",
  "hero.title.lead": "JeetBuzz Login, Signup & Bonus Guide for",
  "hero.title.highlight": "South Asia",
  "hero.subtitle":
    "The practical JeetBuzz handbook for players in Bangladesh, Pakistan and India — signup, bonuses, app, bKash / Nagad / UPI deposits and live cricket markets. Curaçao-licensed, 24/7 Bengali support, deep BPL & IPL market coverage.",
  "hero.cta.join": "Join JeetBuzz",
  "hero.cta.login": "JeetBuzz Login",
  "hero.markets.label": "Available in:",

  // Footer
  "footer.markets": "JeetBuzz markets:",
  "footer.copy":
    "© {year} {site}. JeetBuzz partner guide for Bangladesh, Pakistan & India. 18+ only. Gamble responsibly.",
  "footer.help": "Need help? Visit",
};

const bn: Dict = {
  "nav.review": "রিভিউ",
  "nav.registration": "রেজিস্ট্রেশন",
  "nav.login": "লগইন গাইড",
  "nav.bonuses": "বোনাস",
  "nav.app": "অ্যাপ",
  "nav.payments": "পেমেন্ট",
  "nav.blog": "ব্লগ",
  "header.signup": "সাইন আপ",
  "header.login": "লগইন",
  "header.lang.aria": "ভাষা পরিবর্তন",

  "hero.eyebrow": "JeetBuzz · বাংলাদেশ · পাকিস্তান · ভারত",
  "hero.title.lead": "জিতবাজ লগইন, সাইনআপ ও বোনাস গাইড —",
  "hero.title.highlight": "দক্ষিণ এশিয়া",
  "hero.subtitle":
    "বাংলাদেশ, পাকিস্তান ও ভারতের প্লেয়ারদের জন্য জিতবাজের বাস্তব গাইড — সাইনআপ, বোনাস, অ্যাপ, bKash / Nagad / UPI ডিপোজিট এবং লাইভ ক্রিকেট মার্কেট। Curaçao লাইসেন্স, ২৪/৭ বাংলা সাপোর্ট, BPL ও IPL এ গভীর মার্কেট কভারেজ।",
  "hero.cta.join": "জিতবাজে যোগ দিন",
  "hero.cta.login": "জিতবাজ লগইন",
  "hero.markets.label": "উপলব্ধ:",

  "footer.markets": "জিতবাজ মার্কেট:",
  "footer.copy":
    "© {year} {site}. বাংলাদেশ, পাকিস্তান ও ভারতের জন্য জিতবাজ পার্টনার গাইড। শুধুমাত্র ১৮+। দায়িত্বশীলভাবে খেলুন।",
  "footer.help": "সাহায্য দরকার? দেখুন",
};

const ur: Dict = {
  "nav.review": "جائزہ",
  "nav.registration": "رجسٹریشن",
  "nav.login": "لاگ ان گائیڈ",
  "nav.bonuses": "بونس",
  "nav.app": "ایپ",
  "nav.payments": "ادائیگیاں",
  "nav.blog": "بلاگ",
  "header.signup": "سائن اپ",
  "header.login": "لاگ ان",
  "header.lang.aria": "زبان تبدیل کریں",

  "hero.eyebrow": "JeetBuzz · بنگلہ دیش · پاکستان · بھارت",
  "hero.title.lead": "JeetBuzz لاگ ان، سائن اپ اور بونس گائیڈ —",
  "hero.title.highlight": "جنوبی ایشیا",
  "hero.subtitle":
    "پاکستان، بنگلہ دیش اور بھارت کے کھلاڑیوں کے لیے JeetBuzz کی عملی گائیڈ — سائن اپ، بونس، ایپ، EasyPaisa / JazzCash / UPI ڈپازٹ اور لائیو کرکٹ مارکیٹس۔ Curaçao لائسنس، 24/7 لائیو سپورٹ، PSL، BPL اور IPL کی گہری کوریج۔",
  "hero.cta.join": "JeetBuzz میں شامل ہوں",
  "hero.cta.login": "JeetBuzz لاگ ان",
  "hero.markets.label": "دستیاب:",

  "footer.markets": "JeetBuzz مارکیٹس:",
  "footer.copy":
    "© {year} {site}۔ بنگلہ دیش، پاکستان اور بھارت کے لیے JeetBuzz پارٹنر گائیڈ۔ صرف 18+۔ ذمہ داری سے کھیلیں۔",
  "footer.help": "مدد چاہیے؟ ملاحظہ کریں",
};

const hi: Dict = {
  "nav.review": "रिव्यू",
  "nav.registration": "रजिस्ट्रेशन",
  "nav.login": "लॉगिन गाइड",
  "nav.bonuses": "बोनस",
  "nav.app": "ऐप",
  "nav.payments": "पेमेंट",
  "nav.blog": "ब्लॉग",
  "header.signup": "साइन अप",
  "header.login": "लॉगिन",
  "header.lang.aria": "भाषा बदलें",

  "hero.eyebrow": "JeetBuzz · बांग्लादेश · पाकिस्तान · भारत",
  "hero.title.lead": "JeetBuzz लॉगिन, साइनअप और बोनस गाइड —",
  "hero.title.highlight": "दक्षिण एशिया",
  "hero.subtitle":
    "भारत, बांग्लादेश और पाकिस्तान के खिलाड़ियों के लिए JeetBuzz की व्यावहारिक गाइड — साइनअप, बोनस, ऐप, UPI / PhonePe / Paytm डिपॉज़िट और लाइव क्रिकेट मार्केट्स। Curaçao लाइसेंस, 24/7 लाइव सपोर्ट, IPL, BPL और PSL की गहरी मार्केट कवरेज।",
  "hero.cta.join": "JeetBuzz जॉइन करें",
  "hero.cta.login": "JeetBuzz लॉगिन",
  "hero.markets.label": "उपलब्ध:",

  "footer.markets": "JeetBuzz मार्केट्स:",
  "footer.copy":
    "© {year} {site}. भारत, बांग्लादेश और पाकिस्तान के लिए JeetBuzz पार्टनर गाइड। केवल 18+। ज़िम्मेदारी से खेलें।",
  "footer.help": "मदद चाहिए? देखें",
};

const DICTIONARIES: Record<Locale, Dict> = { en, bn, ur, hi };

function format(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    vars[k] !== undefined ? String(vars[k]) : `{${k}}`,
  );
}

// ------------------------------------------------------------------
// Context
// ------------------------------------------------------------------

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "gjb_lang";

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "en");

  // Read persisted locale on mount (client only).
  useEffect(() => {
    if (initialLocale) return; // URL-driven locale wins
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) setLocaleState(saved);
  }, [initialLocale]);

  // If a route provides initialLocale, mirror it into state.
  useEffect(() => {
    if (initialLocale && initialLocale !== locale) {
      setLocaleState(initialLocale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocale]);

  // Sync <html lang> + dir and persist.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = LOCALE_META[locale];
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const dict = DICTIONARIES[locale] ?? en;
      const raw = dict[key] ?? en[key] ?? key;
      return format(raw, vars);
    },
    [locale],
  );

  const value = useMemo<I18nCtx>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const v = useContext(Ctx);
  if (!v) {
    // Safe fallback so components don't crash if rendered outside the provider
    // (e.g. during isolated tests). English-only, no persistence.
    return {
      locale: "en",
      setLocale: () => {},
      t: (k, vars) => format(en[k] ?? k, vars),
    };
  }
  return v;
}

export function useT() {
  return useI18n().t;
}
export function useLocale() {
  return useI18n().locale;
}