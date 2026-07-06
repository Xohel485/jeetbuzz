import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useRouterState } from "@tanstack/react-router";

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
  "hero.title.lead": "JeetBuzz Login, Signup & Bonus Guide —",
  "hero.title.highlight": "Bangladesh, Pakistan & India",
  "hero.subtitle":
    "JeetBuzz makes it simple — open a JeetBuzz account in 3 minutes, deposit from 200 BDT via bKash, Nagad or UPI, and bet live on BPL, IPL and PSL. Step-by-step JeetBuzz login, JeetBuzz APK and JeetBuzz withdrawal guides written by South-Asian punters. Curaçao-licensed JeetBuzz partner with 24/7 Bengali support.",
  "hero.cta.join": "Join JeetBuzz Now",
  "hero.cta.login": "JeetBuzz Login",
  "hero.markets.label": "Available in:",

  // Footer
  "footer.markets": "JeetBuzz markets:",
  "footer.copy":
    "© {year} {site}. JeetBuzz partner guide for Bangladesh, Pakistan & India. 18+ only. Gamble responsibly.",
  "footer.help": "Need help? Visit",

  // Footer columns
  "footer.col.guides": "JeetBuzz Guides",
  "footer.col.bets": "Betting & Games",
  "footer.col.payments": "Payments",
  "footer.col.site": "Site",
  "footer.col.legal": "Policies & Legal",
  "footer.link.home": "Home",
  "footer.link.review": "JeetBuzz Review",
  "footer.link.registration": "Registration Guide",
  "footer.link.login": "Login Guide",
  "footer.link.apk": "APK Download Guide",
  "footer.link.mobile": "Mobile App Guide",
  "footer.link.security": "Security Guide",
  "footer.link.vip": "VIP Program",
  "footer.link.bonus": "Bonus & Promotions",
  "footer.link.live": "Live Cricket",
  "footer.link.sports": "Sports Betting",
  "footer.link.casino": "Casino Guide",
  "footer.link.affiliate": "Affiliate Program",
  "footer.link.affiliate_login": "Affiliate Login",
  "footer.link.payments_all": "All Payment Methods",
  "footer.link.deposit": "Deposit Guide",
  "footer.link.withdraw": "Withdrawal Guide",
  "footer.link.bkash": "bKash Guide",
  "footer.link.nagad": "Nagad Guide",
  "footer.link.rocket": "Rocket Guide",
  "footer.link.dw": "Deposit & Withdrawal Overview",
  "footer.link.about": "About Us",
  "footer.link.blog": "Blog",
  "footer.link.faq": "FAQ",
  "footer.link.contact": "Contact",
  "footer.link.disclosure": "Affiliate Disclosure",
  "footer.link.privacy": "Privacy Policy",
  "footer.link.terms": "Terms",
  "footer.link.rg": "Responsible Gaming",
  "footer.link.editorial": "Editorial Policy",
  "footer.link.review_policy": "Review Policy",
  "footer.link.content": "Content Policy",
  "footer.link.fact": "Fact-Checking",
  "footer.link.update": "Update Policy",
  "footer.trust.alliance": "Gaming alliance",
  "footer.trust.alliance.desc": "Official partnerships and operator alliances.",
  "footer.trust.license": "Gaming license",
  "footer.trust.license.desc": "Regulators and licences covering the operator.",
  "footer.trust.rg": "Responsible gaming",
  "footer.trust.rg.desc": "Player-protection bodies and age-gating standards we follow.",
  "footer.blog.latest": "JeetBuzz Blog — Latest Guides",
  "footer.blog.viewall": "View all",
  "footer.post.registration_bd": "JeetBuzz Registration Guide for Bangladesh (2026)",
  "footer.post.login": "JeetBuzz Login Guide — Safe Access from Bangladesh",
  "footer.post.apk": "JeetBuzz APK Download — Safe Install Guide",
  "footer.post.bonus_terms": "JeetBuzz Bonus Terms — What the Fine Print Actually Means",
  "footer.post.bkash_nagad": "JeetBuzz Deposits with bKash, Nagad & Rocket",
  "footer.post.live_cricket": "JeetBuzz Live Cricket Betting — A Practical Guide",

  // Footer social links
  "footer.socials.title": "Official Socials",
  "footer.social.facebook": "GetJeetBuzz on Facebook",
  "footer.social.youtube": "GetJeetBuzz on YouTube",
  "footer.social.instagram": "GetJeetBuzz on Instagram",
  "footer.social.tiktok": "GetJeetBuzz on TikTok",
  "footer.social.x": "GetJeetBuzz on X",
  "footer.social.telegram": "GetJeetBuzz on Telegram",

  // Shared UI
  "support.need_help": "Need help?",
  "support.body":
    "We are an editorial guide — not JeetBuzz support. For account issues use JeetBuzz live chat. For editorial questions:",
  "support.open_contact": "Open contact page",
  "support.close_aria": "Close",
  "support.open_aria": "Open support",
  "faq.default_heading": "Frequently asked questions",
  "breadcrumb.home": "Home",
  "cta.signup_full": "Visit Official JeetBuzz Site",
  "cta.login_full": "Visit Official JeetBuzz Login",
  "disclosure.label": "Affiliate disclosure:",
  "disclosure.banner":
    "GetJeetBuzz.com is a verified affiliate partner of JeetBuzz for Bangladesh, Pakistan and India — we hold a real commission agreement with the operator, but this site is not the JeetBuzz platform itself. Account signup, deposits and withdrawals happen on JeetBuzz's own site. We may earn commission when you sign up through our outbound links, at no extra cost to you. 18+ only.",
  "disclosure.inline":
    "Affiliate disclosure: GetJeetBuzz is a verified affiliate partner of JeetBuzz — not the JeetBuzz platform itself. We may earn a commission when you sign up via our outbound links, at no extra cost to you.",
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
  "hero.title.lead": "জিতবাজ লগইন, সাইন আপ ও বোনাস গাইড —",
  "hero.title.highlight": "বাংলাদেশ · পাকিস্তান · ভারত",
  "hero.subtitle":
    "জিতবাজে ৩ মিনিটে অ্যাকাউন্ট খুলুন, ২০০ টাকা থেকে bKash/Nagad/Rocket-এ জিতবাজ ডিপোজিট করুন এবং BPL, IPL ও PSL-এ লাইভ বেট করুন। ধাপে ধাপে জিতবাজ লগইন, জিতবাজ APK ও জিতবাজ উইথড্রয়াল গাইড — Curaçao লাইসেন্সপ্রাপ্ত জিতবাজ পার্টনার, ২৪/৭ বাংলা সাপোর্ট।",
  "hero.cta.join": "জিতবাজে যোগ দিন",
  "hero.cta.login": "জিতবাজ লগইন",
  "hero.markets.label": "উপলব্ধ:",

  "footer.markets": "জিতবাজ মার্কেট:",
  "footer.copy":
    "© {year} {site}. বাংলাদেশ, পাকিস্তান ও ভারতের জন্য জিতবাজ পার্টনার গাইড। শুধুমাত্র ১৮+। দায়িত্বশীলভাবে খেলুন।",
  "footer.help": "সাহায্য দরকার? দেখুন",

  "footer.col.guides": "জিতবাজ গাইডসমূহ",
  "footer.col.bets": "বেটিং ও গেমস",
  "footer.col.payments": "পেমেন্ট",
  "footer.col.site": "সাইট",
  "footer.col.legal": "নীতি ও আইনি",
  "footer.link.home": "হোম",
  "footer.link.review": "জিতবাজ রিভিউ",
  "footer.link.registration": "রেজিস্ট্রেশন গাইড",
  "footer.link.login": "লগইন গাইড",
  "footer.link.apk": "APK ডাউনলোড গাইড",
  "footer.link.mobile": "মোবাইল অ্যাপ গাইড",
  "footer.link.security": "সিকিউরিটি গাইড",
  "footer.link.vip": "VIP প্রোগ্রাম",
  "footer.link.bonus": "বোনাস ও প্রোমোশন",
  "footer.link.live": "লাইভ ক্রিকেট",
  "footer.link.sports": "স্পোর্টস বেটিং",
  "footer.link.casino": "ক্যাসিনো গাইড",
  "footer.link.affiliate": "অ্যাফিলিয়েট প্রোগ্রাম",
  "footer.link.affiliate_login": "অ্যাফিলিয়েট লগইন",
  "footer.link.payments_all": "সব পেমেন্ট মেথড",
  "footer.link.deposit": "ডিপোজিট গাইড",
  "footer.link.withdraw": "উইথড্রয়াল গাইড",
  "footer.link.bkash": "bKash গাইড",
  "footer.link.nagad": "Nagad গাইড",
  "footer.link.rocket": "Rocket গাইড",
  "footer.link.dw": "ডিপোজিট ও উইথড্রয়াল ওভারভিউ",
  "footer.link.about": "আমাদের সম্পর্কে",
  "footer.link.blog": "ব্লগ",
  "footer.link.faq": "সাধারণ প্রশ্ন",
  "footer.link.contact": "যোগাযোগ",
  "footer.link.disclosure": "অ্যাফিলিয়েট ডিসক্লোজার",
  "footer.link.privacy": "প্রাইভেসি পলিসি",
  "footer.link.terms": "ব্যবহারের শর্তাবলী",
  "footer.link.rg": "দায়িত্বশীল গেমিং",
  "footer.link.editorial": "সম্পাদকীয় নীতি",
  "footer.link.review_policy": "রিভিউ নীতি",
  "footer.link.content": "কন্টেন্ট নীতি",
  "footer.link.fact": "ফ্যাক্ট-চেকিং",
  "footer.link.update": "আপডেট নীতি",
  "footer.trust.alliance": "গেমিং অ্যালায়েন্স",
  "footer.trust.alliance.desc": "অফিসিয়াল পার্টনারশিপ ও অপারেটর অ্যালায়েন্স।",
  "footer.trust.license": "গেমিং লাইসেন্স",
  "footer.trust.license.desc": "অপারেটরের লাইসেন্স ও নিয়ন্ত্রক সংস্থা।",
  "footer.trust.rg": "দায়িত্বশীল গেমিং",
  "footer.trust.rg.desc": "প্লেয়ার সুরক্ষা সংস্থা ও বয়স যাচাইয়ের মান।",
  "footer.blog.latest": "জিতবাজ ব্লগ — সাম্প্রতিক গাইড",
  "footer.blog.viewall": "সব দেখুন",
  "footer.post.registration_bd": "বাংলাদেশের জন্য জিতবাজ রেজিস্ট্রেশন গাইড (২০২৬)",
  "footer.post.login": "জিতবাজ লগইন গাইড — বাংলাদেশ থেকে নিরাপদ অ্যাক্সেস",
  "footer.post.apk": "জিতবাজ APK ডাউনলোড — নিরাপদ ইনস্টল গাইড",
  "footer.post.bonus_terms": "জিতবাজ বোনাস শর্তাবলী — সূক্ষ্ম শর্তগুলোর ব্যাখ্যা",
  "footer.post.bkash_nagad": "bKash, Nagad ও Rocket দিয়ে জিতবাজ ডিপোজিট",
  "footer.post.live_cricket": "জিতবাজ লাইভ ক্রিকেট বেটিং — ব্যবহারিক গাইড",
  // Footer social links
  "footer.socials.title": "অফিসিয়াল সোশ্যাল",
  "footer.social.facebook": "GetJeetBuzz Facebook-এ",
  "footer.social.youtube": "GetJeetBuzz YouTube-এ",
  "footer.social.instagram": "GetJeetBuzz Instagram-এ",
  "footer.social.tiktok": "GetJeetBuzz TikTok-এ",
  "footer.social.x": "GetJeetBuzz X-এ",
  "footer.social.telegram": "GetJeetBuzz Telegram-এ",

  "support.need_help": "সাহায্য দরকার?",
  "support.body":
    "আমরা একটি সম্পাদকীয় গাইড — জিতবাজ অফিসিয়াল সাপোর্ট নই। অ্যাকাউন্ট সমস্যার জন্য জিতবাজ লাইভ চ্যাট ব্যবহার করুন। সম্পাদকীয় প্রশ্নের জন্য:",
  "support.open_contact": "যোগাযোগ পেজে যান",
  "support.close_aria": "বন্ধ করুন",
  "support.open_aria": "সাপোর্ট খুলুন",
  "faq.default_heading": "সাধারণ জিজ্ঞাসা",
  "breadcrumb.home": "হোম",
  "cta.signup_full": "অফিসিয়াল জিতবাজ সাইটে যান",
  "cta.login_full": "অফিসিয়াল জিতবাজ লগইনে যান",
  "disclosure.label": "অ্যাফিলিয়েট ডিসক্লোজার:",
  "disclosure.banner":
    "GetJeetBuzz.com হলো বাংলাদেশ, পাকিস্তান ও ভারতের জন্য জিতবাজের একটি ভেরিফায়েড অ্যাফিলিয়েট পার্টনার — অপারেটরের সাথে আমাদের প্রকৃত কমিশন চুক্তি রয়েছে, তবে এই সাইট জিতবাজ প্ল্যাটফর্ম নয়। অ্যাকাউন্ট সাইনআপ, ডিপোজিট ও উইথড্রয়াল জিতবাজের নিজস্ব সাইটে হয়। আমাদের আউটবাউন্ড লিংকের মাধ্যমে সাইন আপ করলে আমরা কমিশন পেতে পারি, আপনার কোনো অতিরিক্ত খরচ নেই। শুধুমাত্র ১৮+।",
  "disclosure.inline":
    "অ্যাফিলিয়েট ডিসক্লোজার: GetJeetBuzz জিতবাজের ভেরিফায়েড অ্যাফিলিয়েট পার্টনার — জিতবাজ প্ল্যাটফর্ম নয়। আমাদের আউটবাউন্ড লিংকে সাইন আপ করলে আমরা কমিশন পেতে পারি, আপনার অতিরিক্ত কোনো খরচ নেই।",
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

  "footer.col.guides": "JeetBuzz گائیڈز",
  "footer.col.bets": "بیٹنگ اور گیمز",
  "footer.col.payments": "ادائیگیاں",
  "footer.col.site": "سائٹ",
  "footer.col.legal": "پالیسیاں اور قانونی",
  "footer.link.home": "ہوم",
  "footer.link.review": "JeetBuzz جائزہ",
  "footer.link.registration": "رجسٹریشن گائیڈ",
  "footer.link.login": "لاگ ان گائیڈ",
  "footer.link.apk": "APK ڈاؤن لوڈ گائیڈ",
  "footer.link.mobile": "موبائل ایپ گائیڈ",
  "footer.link.security": "سیکیورٹی گائیڈ",
  "footer.link.vip": "VIP پروگرام",
  "footer.link.bonus": "بونس اور پروموشن",
  "footer.link.live": "لائیو کرکٹ",
  "footer.link.sports": "اسپورٹس بیٹنگ",
  "footer.link.casino": "کیسینو گائیڈ",
  "footer.link.affiliate": "ایفیلیئٹ پروگرام",
  "footer.link.affiliate_login": "ایفیلیئٹ لاگ ان",
  "footer.link.payments_all": "تمام ادائیگی کے طریقے",
  "footer.link.deposit": "ڈپازٹ گائیڈ",
  "footer.link.withdraw": "وِد ڈرا گائیڈ",
  "footer.link.bkash": "bKash گائیڈ",
  "footer.link.nagad": "Nagad گائیڈ",
  "footer.link.rocket": "Rocket گائیڈ",
  "footer.link.dw": "ڈپازٹ اور وِد ڈرا کا جائزہ",
  "footer.link.about": "ہمارے بارے میں",
  "footer.link.blog": "بلاگ",
  "footer.link.faq": "عمومی سوالات",
  "footer.link.contact": "رابطہ",
  "footer.link.disclosure": "ایفیلیئٹ انکشاف",
  "footer.link.privacy": "پرائیویسی پالیسی",
  "footer.link.terms": "استعمال کی شرائط",
  "footer.link.rg": "ذمہ دارانہ گیمنگ",
  "footer.link.editorial": "ادارتی پالیسی",
  "footer.link.review_policy": "جائزہ پالیسی",
  "footer.link.content": "مواد کی پالیسی",
  "footer.link.fact": "حقائق کی جانچ",
  "footer.link.update": "اپڈیٹ پالیسی",
  "footer.trust.alliance": "گیمنگ اتحاد",
  "footer.trust.alliance.desc": "سرکاری شراکت داری اور آپریٹر اتحاد۔",
  "footer.trust.license": "گیمنگ لائسنس",
  "footer.trust.license.desc": "آپریٹر کا احاطہ کرنے والے ریگولیٹرز اور لائسنس۔",
  "footer.trust.rg": "ذمہ دارانہ گیمنگ",
  "footer.trust.rg.desc": "کھلاڑیوں کے تحفظ کے ادارے اور عمر کی توثیق کے معیار۔",
  "footer.blog.latest": "JeetBuzz بلاگ — تازہ ترین گائیڈز",
  "footer.blog.viewall": "سب دیکھیں",
  "footer.post.registration_bd": "بنگلہ دیش کے لیے JeetBuzz رجسٹریشن گائیڈ (2026)",
  "footer.post.login": "JeetBuzz لاگ ان گائیڈ — محفوظ رسائی",
  "footer.post.apk": "JeetBuzz APK ڈاؤن لوڈ — محفوظ انسٹال گائیڈ",
  "footer.post.bonus_terms": "JeetBuzz بونس شرائط — باریک پرنٹ کی وضاحت",
  "footer.post.bkash_nagad": "bKash، Nagad اور Rocket کے ذریعے JeetBuzz ڈپازٹ",
  "footer.post.live_cricket": "JeetBuzz لائیو کرکٹ بیٹنگ — عملی گائیڈ",

  "support.need_help": "مدد چاہیے؟",
  "support.body":
    "ہم ایک ادارتی گائیڈ ہیں — JeetBuzz سپورٹ نہیں۔ اکاؤنٹ کے مسائل کے لیے JeetBuzz لائیو چیٹ استعمال کریں۔ ادارتی سوالات کے لیے:",
  "support.open_contact": "رابطہ صفحہ کھولیں",
  "support.close_aria": "بند کریں",
  "support.open_aria": "سپورٹ کھولیں",
  "faq.default_heading": "عمومی سوالات",
  "breadcrumb.home": "ہوم",
  "cta.signup_full": "JeetBuzz کی سرکاری سائٹ پر جائیں",
  "cta.login_full": "JeetBuzz کی سرکاری لاگ ان پر جائیں",
  "disclosure.label": "ایفیلیئٹ انکشاف:",
  "disclosure.banner":
    "GetJeetBuzz.com پاکستان، بنگلہ دیش اور بھارت کے لیے JeetBuzz کا تصدیق شدہ ایفیلیئٹ پارٹنر ہے — آپریٹر کے ساتھ ہمارا حقیقی کمیشن معاہدہ ہے، لیکن یہ سائٹ خود JeetBuzz پلیٹ فارم نہیں۔ سائن اپ، ڈپازٹ اور ودڈرا JeetBuzz کی اپنی سائٹ پر ہوتے ہیں۔ ہمارے لنکس کے ذریعے سائن اپ پر ہمیں کمیشن مل سکتا ہے، آپ پر کوئی اضافی لاگت نہیں۔ صرف 18+۔",
  "disclosure.inline":
    "ایفیلیئٹ انکشاف: GetJeetBuzz JeetBuzz کا تصدیق شدہ ایفیلیئٹ پارٹنر ہے — خود JeetBuzz پلیٹ فارم نہیں۔ ہمارے لنکس سے سائن اپ پر ہمیں کمیشن مل سکتا ہے، آپ پر کوئی اضافی لاگت نہیں۔",
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

  "footer.col.guides": "JeetBuzz गाइड्स",
  "footer.col.bets": "बेटिंग और गेम्स",
  "footer.col.payments": "पेमेंट",
  "footer.col.site": "साइट",
  "footer.col.legal": "नीतियाँ और कानूनी",
  "footer.link.home": "होम",
  "footer.link.review": "JeetBuzz रिव्यू",
  "footer.link.registration": "रजिस्ट्रेशन गाइड",
  "footer.link.login": "लॉगिन गाइड",
  "footer.link.apk": "APK डाउनलोड गाइड",
  "footer.link.mobile": "मोबाइल ऐप गाइड",
  "footer.link.security": "सिक्योरिटी गाइड",
  "footer.link.vip": "VIP प्रोग्राम",
  "footer.link.bonus": "बोनस और प्रोमोशन",
  "footer.link.live": "लाइव क्रिकेट",
  "footer.link.sports": "स्पोर्ट्स बेटिंग",
  "footer.link.casino": "कैसीनो गाइड",
  "footer.link.affiliate": "एफिलिएट प्रोग्राम",
  "footer.link.affiliate_login": "एफिलिएट लॉगिन",
  "footer.link.payments_all": "सभी पेमेंट मेथड्स",
  "footer.link.deposit": "डिपॉज़िट गाइड",
  "footer.link.withdraw": "निकासी गाइड",
  "footer.link.bkash": "bKash गाइड",
  "footer.link.nagad": "Nagad गाइड",
  "footer.link.rocket": "Rocket गाइड",
  "footer.link.dw": "डिपॉज़िट और निकासी अवलोकन",
  "footer.link.about": "हमारे बारे में",
  "footer.link.blog": "ब्लॉग",
  "footer.link.faq": "सामान्य प्रश्न",
  "footer.link.contact": "संपर्क",
  "footer.link.disclosure": "एफिलिएट डिस्क्लोज़र",
  "footer.link.privacy": "प्राइवेसी पॉलिसी",
  "footer.link.terms": "उपयोग की शर्तें",
  "footer.link.rg": "ज़िम्मेदार गेमिंग",
  "footer.link.editorial": "संपादकीय नीति",
  "footer.link.review_policy": "रिव्यू नीति",
  "footer.link.content": "कंटेंट पॉलिसी",
  "footer.link.fact": "तथ्य-जाँच",
  "footer.link.update": "अपडेट नीति",
  "footer.trust.alliance": "गेमिंग एलायंस",
  "footer.trust.alliance.desc": "आधिकारिक साझेदारियाँ और ऑपरेटर एलायंस।",
  "footer.trust.license": "गेमिंग लाइसेंस",
  "footer.trust.license.desc": "ऑपरेटर को कवर करने वाले रेगुलेटर और लाइसेंस।",
  "footer.trust.rg": "ज़िम्मेदार गेमिंग",
  "footer.trust.rg.desc": "खिलाड़ी सुरक्षा संस्थाएँ और आयु-सत्यापन मानक।",
  "footer.blog.latest": "JeetBuzz ब्लॉग — नवीनतम गाइड्स",
  "footer.blog.viewall": "सभी देखें",
  "footer.post.registration_bd": "बांग्लादेश के लिए JeetBuzz रजिस्ट्रेशन गाइड (2026)",
  "footer.post.login": "JeetBuzz लॉगिन गाइड — सुरक्षित एक्सेस",
  "footer.post.apk": "JeetBuzz APK डाउनलोड — सुरक्षित इंस्टॉल गाइड",
  "footer.post.bonus_terms": "JeetBuzz बोनस शर्तें — बारीक प्रिंट की व्याख्या",
  "footer.post.bkash_nagad": "bKash, Nagad और Rocket से JeetBuzz डिपॉज़िट",
  "footer.post.live_cricket": "JeetBuzz लाइव क्रिकेट बेटिंग — व्यावहारिक गाइड",

  "support.need_help": "मदद चाहिए?",
  "support.body":
    "हम एक संपादकीय गाइड हैं — JeetBuzz सपोर्ट नहीं। अकाउंट संबंधी समस्याओं के लिए JeetBuzz लाइव चैट का उपयोग करें। संपादकीय प्रश्नों के लिए:",
  "support.open_contact": "संपर्क पेज खोलें",
  "support.close_aria": "बंद करें",
  "support.open_aria": "सपोर्ट खोलें",
  "faq.default_heading": "अक्सर पूछे जाने वाले प्रश्न",
  "breadcrumb.home": "होम",
  "cta.signup_full": "आधिकारिक JeetBuzz साइट पर जाएँ",
  "cta.login_full": "आधिकारिक JeetBuzz लॉगिन पर जाएँ",
  "disclosure.label": "एफिलिएट डिस्क्लोज़र:",
  "disclosure.banner":
    "GetJeetBuzz.com भारत, बांग्लादेश और पाकिस्तान के लिए JeetBuzz का सत्यापित एफिलिएट पार्टनर है — ऑपरेटर के साथ हमारा वास्तविक कमीशन समझौता है, लेकिन यह साइट स्वयं JeetBuzz प्लेटफ़ॉर्म नहीं है। साइनअप, डिपॉज़िट और निकासी JeetBuzz की अपनी साइट पर होते हैं। हमारे लिंक से साइन अप करने पर हमें कमीशन मिल सकता है, आप पर कोई अतिरिक्त खर्च नहीं। केवल 18+।",
  "disclosure.inline":
    "एफिलिएट डिस्क्लोज़र: GetJeetBuzz JeetBuzz का सत्यापित एफिलिएट पार्टनर है — स्वयं JeetBuzz प्लेटफ़ॉर्म नहीं। हमारे आउटबाउंड लिंक से साइन अप पर हमें कमीशन मिल सकता है, आप पर कोई अतिरिक्त खर्च नहीं।",
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

/**
 * Derive the active locale strictly from the URL pathname.
 *
 *   /              → "en"
 *   /login-guide   → "en"
 *   /bd/bn/...     → "bn"
 *   /pk/ur/...     → "ur"
 *   /in/hi/...     → "hi"
 *
 * No IP / geo / Accept-Language / navigator.language / localStorage input —
 * URL is the single source of truth. The root homepage is always English.
 */
function localeFromPathname(pathname: string): Locale {
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length >= 2 && isCountry(segs[0]) && isLocale(segs[1])) {
    return segs[1] as Locale;
  }
  return "en";
}

export function I18nProvider({
  children,
}: {
  children: ReactNode;
}) {
  // URL is the single source of truth. No IP/geo/navigator detection and
  // localStorage is never used as a fallback source — it is persisted as
  // a *preference* signal only, never read here to override the URL.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPathname(pathname);

  // Sync <html lang> + dir to match the URL-derived locale and persist
  // the preference (write-only — never read back as a redirect trigger).
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

  // setLocale is a no-op writer: language switching is done by navigating
  // to the equivalent localized URL (see SiteHeader LanguageSwitcher).
  // We still persist the requested preference for analytics / future use.
  const setLocale = useCallback((l: Locale) => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, l);
      }
    } catch {
      /* ignore */
    }
  }, []);

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