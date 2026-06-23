/**
 * Localized route registry.
 *
 * Maps every public English route to per-locale SEO metadata
 * (title + description). The splat route `$country.$lang.$.tsx`
 * uses this registry to:
 *   - validate which English slugs may be served under /{country}/{lang}/
 *   - resolve the React component to render
 *   - emit localized <title>, <meta description>, OG tags, canonical
 *     and a complete hreflang cluster (en, bn-BD, ur-PK, hi-IN, x-default)
 *
 * Bodies of the pages are NOT duplicated — we render the existing
 * English component under the localized URL. The i18n context is
 * switched via the splat route so any component that uses `useT()`
 * automatically renders translated chrome (header, footer, hero,
 * payment titles, CTAs, etc.). Page-specific body copy still reads
 * English until per-component translation is added later; SEO,
 * hreflang, payments and analytics are all locale/country aware
 * starting today.
 */

import type { ComponentType } from "react";
import type { Country, Locale } from "./i18n";

// Static imports of every public route module. Importing a route file
// only references its Route export; TanStack Router's plugin handles
// registration via routeTree.gen.ts. We read `.options.component` to
// re-render the same UI under the localized URL.
import { Route as IndexRoute } from "@/routes/index";
import { Route as AboutRoute } from "@/routes/about";
import { Route as ContactRoute } from "@/routes/contact";
import { Route as FaqRoute } from "@/routes/faq";
import { Route as JeetbuzzReviewRoute } from "@/routes/jeetbuzz-review";
import { Route as RegistrationGuideRoute } from "@/routes/registration-guide";
import { Route as LoginGuideRoute } from "@/routes/login-guide";
import { Route as LoginProblemsRoute } from "@/routes/login-problems";
import { Route as PasswordResetRoute } from "@/routes/password-reset";
import { Route as LoginSecurityRoute } from "@/routes/login-security";
import { Route as VerificationRoute } from "@/routes/verification";
import { Route as WelcomeBonusRoute } from "@/routes/welcome-bonus";
import { Route as ApkDownloadGuideRoute } from "@/routes/apk-download-guide";
import { Route as MobileAppGuideRoute } from "@/routes/mobile-app-guide";
import { Route as SecurityGuideRoute } from "@/routes/security-guide";
import { Route as BonusAndPromotionsRoute } from "@/routes/bonus-and-promotions";
import { Route as VipProgramRoute } from "@/routes/vip-program";
import { Route as CasinoGuideRoute } from "@/routes/casino-guide";
import { Route as SportsBettingRoute } from "@/routes/sports-betting";
import { Route as LiveCricketBettingRoute } from "@/routes/live-cricket-betting";
import { Route as DepositWithdrawalGuideRoute } from "@/routes/deposit-withdrawal-guide";
import { Route as DepositGuideRoute } from "@/routes/deposit-guide";
import { Route as WithdrawalGuideRoute } from "@/routes/withdrawal-guide";
import { Route as PaymentMethodsRoute } from "@/routes/payment-methods";
import { Route as BkashGuideRoute } from "@/routes/bkash-guide";
import { Route as NagadGuideRoute } from "@/routes/nagad-guide";
import { Route as RocketGuideRoute } from "@/routes/rocket-guide";
import { Route as EasypaisaGuideRoute } from "@/routes/easypaisa-guide";
import { Route as JazzcashGuideRoute } from "@/routes/jazzcash-guide";
import { Route as UpiGuideRoute } from "@/routes/upi-guide";
import { Route as PhonepeGuideRoute } from "@/routes/phonepe-guide";
import { Route as PaytmGuideRoute } from "@/routes/paytm-guide";
import { Route as AffiliateProgramRoute } from "@/routes/affiliate-program";
import { Route as AffiliateLoginRoute } from "@/routes/affiliate-login";
import { Route as AffiliateDisclosureRoute } from "@/routes/affiliate-disclosure";
import { Route as PrivacyPolicyRoute } from "@/routes/privacy-policy";
import { Route as TermsRoute } from "@/routes/terms";
import { Route as ResponsibleGamingRoute } from "@/routes/responsible-gaming";
import { Route as EditorialPolicyRoute } from "@/routes/editorial-policy";
import { Route as ReviewPolicyRoute } from "@/routes/review-policy";
import { Route as ContentPolicyRoute } from "@/routes/content-policy";
import { Route as FactCheckingRoute } from "@/routes/fact-checking";
import { Route as UpdatePolicyRoute } from "@/routes/update-policy";

export type LocaleMeta = { title: string; description: string };

export type LocalizedRoute = {
  /** English URL slug — empty string means the homepage. */
  slug: string;
  /** Component to render under the localized URL. */
  component: ComponentType;
  /** Per-locale SEO. English is the source of truth and the fallback. */
  meta: Record<Locale, LocaleMeta>;
  /**
   * Optional country gate for the localized splat route. When set, the
   * registry will only resolve this slug under `/{country}/{lang}/...`
   * for the listed countries. Bare English URLs (`/easypaisa-guide`)
   * remain reachable regardless — gating only applies to the localized
   * splat to prevent country-leaks like `/in/hi/easypaisa-guide`.
   */
  countries?: Country[];
};

/** Helper to build a registry entry. */
function entry(
  slug: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RouteRef: { options: { component?: any } },
  meta: Record<Locale, LocaleMeta>,
  countries?: Country[],
): LocalizedRoute {
  return {
    slug,
    component: (RouteRef.options.component as ComponentType) ?? (() => null),
    meta,
    countries,
  };
}

/** Compact JeetBuzz brand line used as suffix in every locale. */
const BRAND_EN = " | GetJeetBuzz";
const BRAND_BN = " | GetJeetBuzz";
const BRAND_UR = " | GetJeetBuzz";
const BRAND_HI = " | GetJeetBuzz";

export const LOCALIZED_ROUTES: LocalizedRoute[] = [
  entry("", IndexRoute, {
    en: {
      title: "JeetBuzz Guide — Login, Signup & Review" + BRAND_EN,
      description:
        "JeetBuzz guide — signup, login, bonuses, APK, payments and live cricket. Tailored for players in Bangladesh, Pakistan and India.",
    },
    bn: {
      title: "জিতবাজ গাইড — লগইন, সাইনআপ ও রিভিউ" + BRAND_BN,
      description:
        "জিতবাজের পূর্ণাঙ্গ বাংলা গাইড — সাইনআপ, লগইন, বোনাস, APK, bKash/Nagad পেমেন্ট এবং লাইভ ক্রিকেট মার্কেট।",
    },
    ur: {
      title: "JeetBuzz گائیڈ — لاگ ان، سائن اپ اور جائزہ" + BRAND_UR,
      description:
        "JeetBuzz کی مکمل اردو گائیڈ — سائن اپ، لاگ ان، بونس، APK، EasyPaisa/JazzCash ادائیگیاں اور لائیو کرکٹ مارکیٹس۔",
    },
    hi: {
      title: "JeetBuzz गाइड — लॉगिन, साइनअप और रिव्यू" + BRAND_HI,
      description:
        "JeetBuzz की पूरी हिंदी गाइड — साइनअप, लॉगिन, बोनस, APK, UPI/PhonePe/Paytm पेमेंट और लाइव क्रिकेट मार्केट।",
    },
  }),
  entry("jeetbuzz-review", JeetbuzzReviewRoute, {
    en: { title: "JeetBuzz Review 2026 — Honest Take" + BRAND_EN, description: "Independent JeetBuzz review for South Asian players — bonuses, payments, app, support and licensing." },
    bn: { title: "জিতবাজ রিভিউ ২০২৬ — সত্য ও নিরপেক্ষ" + BRAND_BN, description: "জিতবাজের স্বাধীন রিভিউ — বোনাস, পেমেন্ট, অ্যাপ, সাপোর্ট ও লাইসেন্স সম্পর্কে।" },
    ur: { title: "JeetBuzz جائزہ 2026 — غیر جانبدار رائے" + BRAND_UR, description: "JeetBuzz کا آزاد جائزہ — بونس، ادائیگیاں، ایپ، سپورٹ اور لائسنس۔" },
    hi: { title: "JeetBuzz रिव्यू 2026 — ईमानदार राय" + BRAND_HI, description: "JeetBuzz की स्वतंत्र समीक्षा — बोनस, पेमेंट, ऐप, सपोर्ट और लाइसेंस।" },
  }),
  entry("registration-guide", RegistrationGuideRoute, {
    en: { title: "JeetBuzz Registration Guide" + BRAND_EN, description: "Open a JeetBuzz account in minutes — phone or email signup, verification and first deposit, with screenshots." },
    bn: { title: "জিতবাজ রেজিস্ট্রেশন গাইড" + BRAND_BN, description: "মিনিটে জিতবাজ অ্যাকাউন্ট খুলুন — ফোন/ইমেইল সাইনআপ, ভেরিফিকেশন ও প্রথম ডিপোজিট, স্ক্রিনশট সহ।" },
    ur: { title: "JeetBuzz رجسٹریشن گائیڈ" + BRAND_UR, description: "JeetBuzz اکاؤنٹ منٹوں میں کھولیں — فون/ای میل سائن اپ، تصدیق اور پہلی ڈپازٹ۔" },
    hi: { title: "JeetBuzz रजिस्ट्रेशन गाइड" + BRAND_HI, description: "JeetBuzz खाता मिनटों में खोलें — फ़ोन/ईमेल साइनअप, वेरिफिकेशन और पहली डिपॉज़िट।" },
  }),
  entry("login-guide", LoginGuideRoute, {
    en: { title: "JeetBuzz Login Guide — Safe Access" + BRAND_EN, description: "Step-by-step JeetBuzz login, password recovery and tips to spot fake mirror pages." },
    bn: { title: "জিতবাজ লগইন গাইড — নিরাপদ অ্যাক্সেস" + BRAND_BN, description: "ধাপে ধাপে জিতবাজ লগইন, পাসওয়ার্ড পুনরুদ্ধার এবং ফেক মিরর সাইট চেনার উপায়।" },
    ur: { title: "JeetBuzz لاگ ان گائیڈ — محفوظ رسائی" + BRAND_UR, description: "JeetBuzz پر مرحلہ وار لاگ ان، پاس ورڈ ریکوری اور جعلی مرر سائٹس کی شناخت۔" },
    hi: { title: "JeetBuzz लॉगिन गाइड — सुरक्षित एक्सेस" + BRAND_HI, description: "JeetBuzz पर चरण-दर-चरण लॉगिन, पासवर्ड रिकवरी और नकली मिरर साइट्स की पहचान।" },
  }),
  entry("login-problems", LoginProblemsRoute, {
    en: { title: "JeetBuzz Login Problems — Fixes" + BRAND_EN, description: "Site not opening, OTP not arriving, login greyed out — diagnose and fix common JeetBuzz login problems." },
    bn: { title: "জিতবাজ লগইন সমস্যা — সমাধান" + BRAND_BN, description: "সাইট খুলছে না, OTP আসছে না, লগইন বাটন কাজ করছে না — সাধারণ জিতবাজ লগইন সমস্যার সমাধান।" },
    ur: { title: "JeetBuzz لاگ ان مسائل — حل" + BRAND_UR, description: "سائٹ نہیں کھل رہی، OTP نہیں آرہا، لاگ ان بٹن کام نہیں کر رہا — عام JeetBuzz لاگ ان مسائل کے حل۔" },
    hi: { title: "JeetBuzz लॉगिन समस्याएँ — समाधान" + BRAND_HI, description: "साइट नहीं खुल रही, OTP नहीं आ रहा, लॉगिन बटन काम नहीं कर रहा — आम JeetBuzz लॉगिन समस्याओं के समाधान।" },
  }),
  entry("password-reset", PasswordResetRoute, {
    en: { title: "JeetBuzz Password Reset — Step by Step" + BRAND_EN, description: "Reset your JeetBuzz password via phone OTP or email link, plus what to do if recovery fails." },
    bn: { title: "জিতবাজ পাসওয়ার্ড রিসেট — ধাপে ধাপে" + BRAND_BN, description: "ফোন OTP বা ইমেইল লিংক দিয়ে জিতবাজ পাসওয়ার্ড রিসেট, এবং রিকভারি ব্যর্থ হলে কী করবেন।" },
    ur: { title: "JeetBuzz پاس ورڈ ری سیٹ — مرحلہ وار" + BRAND_UR, description: "فون OTP یا ای میل لنک سے JeetBuzz پاس ورڈ ری سیٹ کریں، اور ریکوری ناکام ہونے پر کیا کریں۔" },
    hi: { title: "JeetBuzz पासवर्ड रीसेट — चरण-दर-चरण" + BRAND_HI, description: "फ़ोन OTP या ईमेल लिंक से JeetBuzz पासवर्ड रीसेट करें, और रिकवरी फ़ेल होने पर क्या करें।" },
  }),
  entry("login-security", LoginSecurityRoute, {
    en: { title: "JeetBuzz Login Security — 2FA & Anti-Phishing" + BRAND_EN, description: "Enable 2FA, recognise fake mirrors and lock down your JeetBuzz login." },
    bn: { title: "জিতবাজ লগইন সিকিউরিটি — 2FA ও ফিশিং প্রতিরোধ" + BRAND_BN, description: "2FA চালু করুন, ফেক মিরর চিনুন এবং জিতবাজ লগইন সুরক্ষিত করুন।" },
    ur: { title: "JeetBuzz لاگ ان سیکیورٹی — 2FA اور فشنگ سے بچاؤ" + BRAND_UR, description: "2FA فعال کریں، جعلی مرر پہچانیں اور اپنا JeetBuzz لاگ ان محفوظ بنائیں۔" },
    hi: { title: "JeetBuzz लॉगिन सिक्योरिटी — 2FA और फ़िशिंग से बचाव" + BRAND_HI, description: "2FA चालू करें, नकली मिरर पहचानें और अपना JeetBuzz लॉगिन सुरक्षित करें।" },
  }),
  entry("verification", VerificationRoute, {
    en: { title: "JeetBuzz Account Verification — Phone, Email & KYC" + BRAND_EN, description: "Phone OTP, email confirmation and KYC walkthrough for JeetBuzz." },
    bn: { title: "জিতবাজ অ্যাকাউন্ট ভেরিফিকেশন — ফোন, ইমেইল ও KYC" + BRAND_BN, description: "জিতবাজে ফোন OTP, ইমেইল কনফার্মেশন ও KYC সম্পূর্ণ গাইড।" },
    ur: { title: "JeetBuzz اکاؤنٹ تصدیق — فون، ای میل اور KYC" + BRAND_UR, description: "JeetBuzz پر فون OTP، ای میل تصدیق اور KYC کا مکمل گائیڈ۔" },
    hi: { title: "JeetBuzz अकाउंट वेरिफिकेशन — फ़ोन, ईमेल और KYC" + BRAND_HI, description: "JeetBuzz पर फ़ोन OTP, ईमेल कन्फ़र्मेशन और KYC का पूरा गाइड।" },
  }),
  entry("welcome-bonus", WelcomeBonusRoute, {
    en: { title: "JeetBuzz Welcome Bonus — How to Claim Safely" + BRAND_EN, description: "Wagering, max-bet and game contribution explained for the JeetBuzz welcome bonus." },
    bn: { title: "জিতবাজ ওয়েলকাম বোনাস — সঠিকভাবে দাবি করুন" + BRAND_BN, description: "জিতবাজ ওয়েলকাম বোনাসের wagering, max-bet ও গেম কন্ট্রিবিউশন সহজ ব্যাখ্যা।" },
    ur: { title: "JeetBuzz ویلکم بونس — صحیح طریقے سے کلیم کریں" + BRAND_UR, description: "JeetBuzz ویلکم بونس کی wagering، max-bet اور گیم کنٹریبیوشن کی واضح وضاحت۔" },
    hi: { title: "JeetBuzz वेलकम बोनस — सही तरीक़े से क्लेम करें" + BRAND_HI, description: "JeetBuzz वेलकम बोनस की wagering, max-bet और गेम कंट्रिब्यूशन की साफ़ व्याख्या।" },
  }),
  entry("apk-download-guide", ApkDownloadGuideRoute, {
    en: { title: "JeetBuzz APK Download Guide" + BRAND_EN, description: "Safe JeetBuzz Android APK download and install steps, with permissions and update checks." },
    bn: { title: "জিতবাজ APK ডাউনলোড গাইড" + BRAND_BN, description: "জিতবাজ অ্যান্ড্রয়েড APK নিরাপদে ডাউনলোড ও ইনস্টল — অনুমতি ও আপডেট চেক।" },
    ur: { title: "JeetBuzz APK ڈاؤن لوڈ گائیڈ" + BRAND_UR, description: "JeetBuzz اینڈرائیڈ APK محفوظ طریقے سے ڈاؤن لوڈ اور انسٹال کریں۔" },
    hi: { title: "JeetBuzz APK डाउनलोड गाइड" + BRAND_HI, description: "JeetBuzz Android APK सुरक्षित डाउनलोड और इंस्टॉल — परमिशन और अपडेट चेक।" },
  }),
  entry("mobile-app-guide", MobileAppGuideRoute, {
    en: { title: "JeetBuzz Mobile App Guide" + BRAND_EN, description: "JeetBuzz on Android and iOS — install, performance tips and feature parity with desktop." },
    bn: { title: "জিতবাজ মোবাইল অ্যাপ গাইড" + BRAND_BN, description: "অ্যান্ড্রয়েড ও আইওএস-এ জিতবাজ — ইনস্টল, পারফরম্যান্স টিপস এবং ফিচার।" },
    ur: { title: "JeetBuzz موبائل ایپ گائیڈ" + BRAND_UR, description: "اینڈرائیڈ اور iOS پر JeetBuzz — انسٹال، کارکردگی ٹپس اور فیچرز۔" },
    hi: { title: "JeetBuzz मोबाइल ऐप गाइड" + BRAND_HI, description: "Android और iOS पर JeetBuzz — इंस्टॉल, परफ़ॉर्मेंस टिप्स और फ़ीचर्स।" },
  }),
  entry("security-guide", SecurityGuideRoute, {
    en: { title: "JeetBuzz Security Guide" + BRAND_EN, description: "Protect your JeetBuzz account — strong passwords, 2FA, phishing red flags and safe deposits." },
    bn: { title: "জিতবাজ সিকিউরিটি গাইড" + BRAND_BN, description: "আপনার জিতবাজ অ্যাকাউন্ট সুরক্ষিত রাখুন — শক্ত পাসওয়ার্ড, 2FA, ফিশিং সতর্কতা।" },
    ur: { title: "JeetBuzz سیکیورٹی گائیڈ" + BRAND_UR, description: "اپنا JeetBuzz اکاؤنٹ محفوظ بنائیں — مضبوط پاس ورڈ، 2FA، فشنگ سے بچاؤ۔" },
    hi: { title: "JeetBuzz सिक्योरिटी गाइड" + BRAND_HI, description: "अपना JeetBuzz खाता सुरक्षित रखें — मजबूत पासवर्ड, 2FA, फ़िशिंग से बचाव।" },
  }),
  entry("bonus-and-promotions", BonusAndPromotionsRoute, {
    en: { title: "JeetBuzz Bonuses & Promotions" + BRAND_EN, description: "JeetBuzz welcome bonus, reload, cashback and cricket promos — clear T&C summary." },
    bn: { title: "জিতবাজ বোনাস ও প্রোমোশন" + BRAND_BN, description: "জিতবাজ ওয়েলকাম বোনাস, রিলোড, ক্যাশব্যাক ও ক্রিকেট অফার — সহজ T&C।" },
    ur: { title: "JeetBuzz بونس اور پروموشنز" + BRAND_UR, description: "JeetBuzz ویلکم بونس، ری لوڈ، کیش بیک اور کرکٹ پروموز — واضح شرائط۔" },
    hi: { title: "JeetBuzz बोनस और प्रोमोशन" + BRAND_HI, description: "JeetBuzz वेलकम बोनस, रीलोड, कैशबैक और क्रिकेट प्रोमो — साफ़ T&C।" },
  }),
  entry("vip-program", VipProgramRoute, {
    en: { title: "JeetBuzz VIP Program" + BRAND_EN, description: "JeetBuzz VIP tiers, benefits and how to qualify — cashback, faster withdrawals and managers." },
    bn: { title: "জিতবাজ VIP প্রোগ্রাম" + BRAND_BN, description: "জিতবাজ VIP টিয়ার ও সুবিধা — ক্যাশব্যাক, দ্রুত উইথড্রয়াল এবং ম্যানেজার।" },
    ur: { title: "JeetBuzz VIP پروگرام" + BRAND_UR, description: "JeetBuzz VIP درجات اور فوائد — کیش بیک، تیز نکالنا اور ذاتی منیجر۔" },
    hi: { title: "JeetBuzz VIP प्रोग्राम" + BRAND_HI, description: "JeetBuzz VIP टियर और लाभ — कैशबैक, तेज़ निकासी और मैनेजर।" },
  }),
  entry("casino-guide", CasinoGuideRoute, {
    en: { title: "JeetBuzz Casino Guide" + BRAND_EN, description: "JeetBuzz casino lobby — slots, live dealers, table games and RTP-friendly picks." },
    bn: { title: "জিতবাজ ক্যাসিনো গাইড" + BRAND_BN, description: "জিতবাজ ক্যাসিনো — স্লট, লাইভ ডিলার, টেবিল গেম এবং সেরা পিক।" },
    ur: { title: "JeetBuzz کیسینو گائیڈ" + BRAND_UR, description: "JeetBuzz کیسینو — سلاٹس، لائیو ڈیلر، ٹیبل گیمز اور بہترین انتخاب۔" },
    hi: { title: "JeetBuzz कैसीनो गाइड" + BRAND_HI, description: "JeetBuzz कैसीनो — स्लॉट, लाइव डीलर, टेबल गेम और बेहतरीन पिक्स।" },
  }),
  entry("sports-betting", SportsBettingRoute, {
    en: { title: "JeetBuzz Sports Betting Guide" + BRAND_EN, description: "JeetBuzz sportsbook — cricket, football, tennis and esports markets with odds tips." },
    bn: { title: "জিতবাজ স্পোর্টস বেটিং গাইড" + BRAND_BN, description: "জিতবাজ স্পোর্টসবুক — ক্রিকেট, ফুটবল, টেনিস ও ইস্পোর্টস মার্কেট।" },
    ur: { title: "JeetBuzz اسپورٹس بیٹنگ گائیڈ" + BRAND_UR, description: "JeetBuzz اسپورٹس بک — کرکٹ، فٹبال، ٹینس اور ای اسپورٹس۔" },
    hi: { title: "JeetBuzz स्पोर्ट्स बेटिंग गाइड" + BRAND_HI, description: "JeetBuzz स्पोर्ट्सबुक — क्रिकेट, फ़ुटबॉल, टेनिस और ईस्पोर्ट्स मार्केट।" },
  }),
  entry("live-cricket-betting", LiveCricketBettingRoute, {
    en: { title: "JeetBuzz Live Cricket Betting" + BRAND_EN, description: "Live cricket markets on JeetBuzz — IPL, BPL, PSL coverage with in-play tips." },
    bn: { title: "জিতবাজ লাইভ ক্রিকেট বেটিং" + BRAND_BN, description: "জিতবাজে লাইভ ক্রিকেট — IPL, BPL, PSL কভারেজ ও ইন-প্লে টিপস।" },
    ur: { title: "JeetBuzz لائیو کرکٹ بیٹنگ" + BRAND_UR, description: "JeetBuzz پر لائیو کرکٹ — IPL، BPL، PSL کوریج اور ان پلے ٹپس۔" },
    hi: { title: "JeetBuzz लाइव क्रिकेट बेटिंग" + BRAND_HI, description: "JeetBuzz पर लाइव क्रिकेट — IPL, BPL, PSL कवरेज और इन-प्ले टिप्स।" },
  }),
  entry("deposit-withdrawal-guide", DepositWithdrawalGuideRoute, {
    en: { title: "JeetBuzz Deposit & Withdrawal Guide" + BRAND_EN, description: "Fund and cash out on JeetBuzz — methods, minimums, fees and processing times." },
    bn: { title: "জিতবাজ ডিপোজিট ও উইথড্রয়াল গাইড" + BRAND_BN, description: "জিতবাজে টাকা জমা ও তোলা — পদ্ধতি, মিনিমাম, ফি ও সময়।" },
    ur: { title: "JeetBuzz ڈپازٹ اور وِد ڈرا گائیڈ" + BRAND_UR, description: "JeetBuzz پر فنڈنگ اور رقم نکالنا — طریقے، کم سے کم، فیس اور وقت۔" },
    hi: { title: "JeetBuzz डिपॉज़िट और निकासी गाइड" + BRAND_HI, description: "JeetBuzz पर पैसा जमा और निकालना — तरीके, मिनिमम, फ़ीस और समय।" },
  }),
  entry("deposit-guide", DepositGuideRoute, {
    en: { title: "JeetBuzz Deposit Guide" + BRAND_EN, description: "Deposit on JeetBuzz with bKash, Nagad, Rocket, UPI and bank transfer." },
    bn: { title: "জিতবাজ ডিপোজিট গাইড" + BRAND_BN, description: "bKash, Nagad, Rocket দিয়ে জিতবাজে ডিপোজিট।" },
    ur: { title: "JeetBuzz ڈپازٹ گائیڈ" + BRAND_UR, description: "EasyPaisa، JazzCash اور بینک کے ذریعے JeetBuzz پر ڈپازٹ۔" },
    hi: { title: "JeetBuzz डिपॉज़िट गाइड" + BRAND_HI, description: "UPI, PhonePe, Paytm से JeetBuzz पर डिपॉज़िट।" },
  }),
  entry("withdrawal-guide", WithdrawalGuideRoute, {
    en: { title: "JeetBuzz Withdrawal Guide" + BRAND_EN, description: "Withdraw from JeetBuzz — limits, KYC tips and expected processing times." },
    bn: { title: "জিতবাজ উইথড্রয়াল গাইড" + BRAND_BN, description: "জিতবাজ থেকে উইথড্রয়াল — সীমা, KYC এবং সম্ভাব্য সময়।" },
    ur: { title: "JeetBuzz وِد ڈرا گائیڈ" + BRAND_UR, description: "JeetBuzz سے رقم نکالنا — حدود، KYC اور متوقع وقت۔" },
    hi: { title: "JeetBuzz निकासी गाइड" + BRAND_HI, description: "JeetBuzz से निकासी — सीमा, KYC और संभावित समय।" },
  }),
  entry("payment-methods", PaymentMethodsRoute, {
    en: { title: "JeetBuzz Payment Methods" + BRAND_EN, description: "All JeetBuzz payment methods — local wallets, banks and crypto, by country." },
    bn: { title: "জিতবাজ পেমেন্ট মেথড" + BRAND_BN, description: "জিতবাজের সকল পেমেন্ট — লোকাল ওয়ালেট, ব্যাংক ও ক্রিপ্টো।" },
    ur: { title: "JeetBuzz ادائیگی کے طریقے" + BRAND_UR, description: "JeetBuzz کے تمام ادائیگی کے طریقے — مقامی والٹس، بینک اور کرپٹو۔" },
    hi: { title: "JeetBuzz पेमेंट मेथड्स" + BRAND_HI, description: "JeetBuzz के सभी पेमेंट — लोकल वॉलेट, बैंक और क्रिप्टो।" },
  }),
  entry("bkash-guide", BkashGuideRoute, {
    en: { title: "JeetBuzz bKash Deposit Guide" + BRAND_EN, description: "Deposit to JeetBuzz using bKash — minimums, common errors and fixes." },
    bn: { title: "জিতবাজ bKash ডিপোজিট গাইড" + BRAND_BN, description: "bKash দিয়ে জিতবাজে ডিপোজিট — মিনিমাম, সাধারণ এরর ও সমাধান।" },
    ur: { title: "JeetBuzz bKash ڈپازٹ گائیڈ" + BRAND_UR, description: "bKash کے ذریعے JeetBuzz پر ڈپازٹ — کم از کم، عام مسائل اور حل۔" },
    hi: { title: "JeetBuzz bKash डिपॉज़िट गाइड" + BRAND_HI, description: "bKash से JeetBuzz पर डिपॉज़िट — मिनिमम, सामान्य त्रुटियाँ और समाधान।" },
  }, ["bd"]),
  entry("nagad-guide", NagadGuideRoute, {
    en: { title: "JeetBuzz Nagad Deposit Guide" + BRAND_EN, description: "Deposit to JeetBuzz with Nagad — limits, fees and troubleshooting." },
    bn: { title: "জিতবাজ Nagad ডিপোজিট গাইড" + BRAND_BN, description: "Nagad দিয়ে জিতবাজে ডিপোজিট — সীমা, ফি ও সমস্যা সমাধান।" },
    ur: { title: "JeetBuzz Nagad ڈپازٹ گائیڈ" + BRAND_UR, description: "Nagad کے ذریعے JeetBuzz پر ڈپازٹ — حدود، فیس اور حل۔" },
    hi: { title: "JeetBuzz Nagad डिपॉज़िट गाइड" + BRAND_HI, description: "Nagad से JeetBuzz पर डिपॉज़िट — सीमा, फ़ीस और समाधान।" },
  }, ["bd"]),
  entry("rocket-guide", RocketGuideRoute, {
    en: { title: "JeetBuzz Rocket Deposit Guide" + BRAND_EN, description: "Deposit to JeetBuzz with Rocket — limits, fees and fixes." },
    bn: { title: "জিতবাজ Rocket ডিপোজিট গাইড" + BRAND_BN, description: "Rocket দিয়ে জিতবাজে ডিপোজিট — সীমা, ফি ও সমাধান।" },
    ur: { title: "JeetBuzz Rocket ڈپازٹ گائیڈ" + BRAND_UR, description: "Rocket کے ذریعے JeetBuzz پر ڈپازٹ — حدود، فیس اور حل۔" },
    hi: { title: "JeetBuzz Rocket डिपॉज़िट गाइड" + BRAND_HI, description: "Rocket से JeetBuzz पर डिपॉज़िट — सीमा, फ़ीस और समाधान।" },
  }, ["bd"]),
  entry("easypaisa-guide", EasypaisaGuideRoute, {
    en: { title: "JeetBuzz EasyPaisa Deposit Guide" + BRAND_EN, description: "Deposit and withdraw on JeetBuzz with EasyPaisa from Pakistan — Mobile Account flow and common fixes." },
    bn: { title: "JeetBuzz EasyPaisa Deposit Guide" + BRAND_BN, description: "Pakistan-only payment method on JeetBuzz." },
    ur: { title: "JeetBuzz EasyPaisa ڈپازٹ گائیڈ" + BRAND_UR, description: "پاکستان سے JeetBuzz پر EasyPaisa کے ذریعے ڈپازٹ اور ودڈرا — Mobile Account flow اور عام مسائل کے حل۔" },
    hi: { title: "JeetBuzz EasyPaisa Deposit Guide" + BRAND_HI, description: "Pakistan-only payment method on JeetBuzz." },
  }, ["pk"]),
  entry("jazzcash-guide", JazzcashGuideRoute, {
    en: { title: "JeetBuzz JazzCash Deposit Guide" + BRAND_EN, description: "Deposit and withdraw on JeetBuzz with JazzCash from Pakistan — Mobile Account flow, MPIN check and how it differs from EasyPaisa." },
    bn: { title: "JeetBuzz JazzCash Deposit Guide" + BRAND_BN, description: "Pakistan-only payment method on JeetBuzz." },
    ur: { title: "JeetBuzz JazzCash ڈپازٹ گائیڈ" + BRAND_UR, description: "پاکستان سے JeetBuzz پر JazzCash کے ذریعے ڈپازٹ — Mobile Account flow اور EasyPaisa سے فرق۔" },
    hi: { title: "JeetBuzz JazzCash Deposit Guide" + BRAND_HI, description: "Pakistan-only payment method on JeetBuzz." },
  }, ["pk"]),
  entry("upi-guide", UpiGuideRoute, {
    en: { title: "JeetBuzz UPI Deposit Guide" + BRAND_EN, description: "Fund JeetBuzz from India over UPI — NPCI bank-to-bank rail, VPA flow, UTR submission and reconciliation tips." },
    bn: { title: "JeetBuzz UPI Deposit Guide" + BRAND_BN, description: "India-only payment method on JeetBuzz." },
    ur: { title: "JeetBuzz UPI Deposit Guide" + BRAND_UR, description: "India-only payment method on JeetBuzz." },
    hi: { title: "JeetBuzz UPI डिपॉज़िट गाइड" + BRAND_HI, description: "भारत से JeetBuzz पर UPI के ज़रिए फंडिंग — NPCI बैंक-टू-बैंक रेल, VPA flow, UTR submission और रिकंसिलिएशन।" },
  }, ["in"]),
  entry("phonepe-guide", PhonepeGuideRoute, {
    en: { title: "JeetBuzz PhonePe Deposit Guide" + BRAND_EN, description: "Use PhonePe to deposit on JeetBuzz from India — UPI VPA path, success-vs-pending troubleshooting." },
    bn: { title: "JeetBuzz PhonePe Deposit Guide" + BRAND_BN, description: "India-only payment method on JeetBuzz." },
    ur: { title: "JeetBuzz PhonePe Deposit Guide" + BRAND_UR, description: "India-only payment method on JeetBuzz." },
    hi: { title: "JeetBuzz PhonePe डिपॉज़िट गाइड" + BRAND_HI, description: "भारत से JeetBuzz पर PhonePe (UPI) के ज़रिए डिपॉज़िट — VPA path और success-vs-pending की दिक़्क़तें।" },
  }, ["in"]),
  entry("paytm-guide", PaytmGuideRoute, {
    en: { title: "JeetBuzz Paytm Deposit Guide" + BRAND_EN, description: "Use Paytm to deposit on JeetBuzz from India — post-Payments-Bank UPI flow and how Paytm compares with PhonePe." },
    bn: { title: "JeetBuzz Paytm Deposit Guide" + BRAND_BN, description: "India-only payment method on JeetBuzz." },
    ur: { title: "JeetBuzz Paytm Deposit Guide" + BRAND_UR, description: "India-only payment method on JeetBuzz." },
    hi: { title: "JeetBuzz Paytm डिपॉज़िट गाइड" + BRAND_HI, description: "भारत से JeetBuzz पर Paytm (UPI) के ज़रिए डिपॉज़िट — Payments Bank के बाद का flow और PhonePe से तुलना।" },
  }, ["in"]),
  entry("affiliate-program", AffiliateProgramRoute, {
    en: { title: "JeetBuzz Affiliate Program" + BRAND_EN, description: "Earn with the JeetBuzz Affiliate Program — commission tiers, payouts and how to apply." },
    bn: { title: "জিতবাজ অ্যাফিলিয়েট প্রোগ্রাম" + BRAND_BN, description: "জিতবাজ অ্যাফিলিয়েট দিয়ে আয় করুন — কমিশন টিয়ার, পেআউট এবং আবেদন।" },
    ur: { title: "JeetBuzz ایفیلیئٹ پروگرام" + BRAND_UR, description: "JeetBuzz ایفیلیئٹ سے کمائیں — کمیشن، ادائیگیاں اور درخواست کا طریقہ۔" },
    hi: { title: "JeetBuzz एफिलिएट प्रोग्राम" + BRAND_HI, description: "JeetBuzz एफिलिएट से कमाई — कमीशन, पेआउट और आवेदन का तरीका।" },
  }),
  entry("affiliate-login", AffiliateLoginRoute, {
    en: { title: "JeetBuzz Affiliate Login" + BRAND_EN, description: "Access your JeetBuzz partner dashboard — login link and 2FA tips." },
    bn: { title: "জিতবাজ অ্যাফিলিয়েট লগইন" + BRAND_BN, description: "জিতবাজ পার্টনার ড্যাশবোর্ডে প্রবেশ — লগইন লিংক ও 2FA।" },
    ur: { title: "JeetBuzz ایفیلیئٹ لاگ ان" + BRAND_UR, description: "JeetBuzz پارٹنر ڈیش بورڈ تک رسائی — لاگ ان لنک اور 2FA۔" },
    hi: { title: "JeetBuzz एफिलिएट लॉगिन" + BRAND_HI, description: "JeetBuzz पार्टनर डैशबोर्ड एक्सेस — लॉगिन लिंक और 2FA।" },
  }),
  entry("affiliate-disclosure", AffiliateDisclosureRoute, {
    en: { title: "Affiliate Disclosure" + BRAND_EN, description: "How we earn commissions and our commitment to transparency." },
    bn: { title: "অ্যাফিলিয়েট ডিসক্লোজার" + BRAND_BN, description: "আমরা কীভাবে কমিশন অর্জন করি এবং স্বচ্ছতার অঙ্গীকার।" },
    ur: { title: "ایفیلیئٹ انکشاف" + BRAND_UR, description: "ہم کیسے کمیشن کماتے ہیں اور شفافیت کا عہد۔" },
    hi: { title: "एफिलिएट डिस्क्लोज़र" + BRAND_HI, description: "हम कैसे कमीशन कमाते हैं और पारदर्शिता का वादा।" },
  }),
  entry("about", AboutRoute, {
    en: { title: "About GetJeetBuzz" + BRAND_EN, description: "Who we are, our editorial standards and how we keep this JeetBuzz guide accurate." },
    bn: { title: "GetJeetBuzz সম্পর্কে" + BRAND_BN, description: "আমরা কারা, আমাদের সম্পাদনা মান এবং কীভাবে আমরা সঠিকতা বজায় রাখি।" },
    ur: { title: "GetJeetBuzz کے بارے میں" + BRAND_UR, description: "ہم کون ہیں، ادارتی معیار اور درستی برقرار رکھنے کا طریقہ۔" },
    hi: { title: "GetJeetBuzz के बारे में" + BRAND_HI, description: "हम कौन हैं, संपादकीय मानक और सटीकता बनाए रखने का तरीका।" },
  }),
  entry("contact", ContactRoute, {
    en: { title: "Contact GetJeetBuzz" + BRAND_EN, description: "Reach the GetJeetBuzz editorial team for corrections and partnership questions." },
    bn: { title: "GetJeetBuzz এ যোগাযোগ" + BRAND_BN, description: "সংশোধন বা পার্টনারশিপের জন্য আমাদের সাথে যোগাযোগ করুন।" },
    ur: { title: "GetJeetBuzz سے رابطہ" + BRAND_UR, description: "اصلاحات یا شراکت داری کے لیے ہمارے ساتھ رابطہ کریں۔" },
    hi: { title: "GetJeetBuzz से संपर्क" + BRAND_HI, description: "सुधार या साझेदारी के लिए हमसे संपर्क करें।" },
  }),
  entry("faq", FaqRoute, {
    en: { title: "JeetBuzz FAQ" + BRAND_EN, description: "Common JeetBuzz questions — accounts, payments, bonuses and app." },
    bn: { title: "জিতবাজ FAQ" + BRAND_BN, description: "জিতবাজের সাধারণ প্রশ্ন — অ্যাকাউন্ট, পেমেন্ট, বোনাস ও অ্যাপ।" },
    ur: { title: "JeetBuzz عمومی سوالات" + BRAND_UR, description: "JeetBuzz کے عام سوالات — اکاؤنٹس، ادائیگیاں، بونس اور ایپ۔" },
    hi: { title: "JeetBuzz FAQ" + BRAND_HI, description: "JeetBuzz के सामान्य प्रश्न — खाते, पेमेंट, बोनस और ऐप।" },
  }),
  entry("privacy-policy", PrivacyPolicyRoute, {
    en: { title: "Privacy Policy" + BRAND_EN, description: "How GetJeetBuzz handles data, cookies and analytics." },
    bn: { title: "প্রাইভেসি পলিসি" + BRAND_BN, description: "ডেটা, কুকিজ ও অ্যানালিটিক্স আমরা কীভাবে পরিচালনা করি।" },
    ur: { title: "پرائیویسی پالیسی" + BRAND_UR, description: "ڈیٹا، کوکیز اور تجزیات کے بارے میں ہماری پالیسی۔" },
    hi: { title: "प्राइवेसी पॉलिसी" + BRAND_HI, description: "डेटा, कुकीज़ और एनालिटिक्स पर हमारी नीति।" },
  }),
  entry("terms", TermsRoute, {
    en: { title: "Terms of Use" + BRAND_EN, description: "GetJeetBuzz terms of use." },
    bn: { title: "ব্যবহারের শর্তাবলী" + BRAND_BN, description: "GetJeetBuzz ব্যবহারের শর্তাবলী।" },
    ur: { title: "استعمال کی شرائط" + BRAND_UR, description: "GetJeetBuzz استعمال کی شرائط۔" },
    hi: { title: "उपयोग की शर्तें" + BRAND_HI, description: "GetJeetBuzz उपयोग की शर्तें।" },
  }),
  entry("responsible-gaming", ResponsibleGamingRoute, {
    en: { title: "Responsible Gaming" + BRAND_EN, description: "Play within your means — limits, self-exclusion and support resources." },
    bn: { title: "দায়িত্বশীল গেমিং" + BRAND_BN, description: "নিজের সামর্থ্যের মধ্যে খেলুন — সীমা, সেলফ-এক্সক্লুশন ও সহায়তা।" },
    ur: { title: "ذمہ دارانہ گیمنگ" + BRAND_UR, description: "اپنی استطاعت کے اندر کھیلیں — حدود، خود کو روکنا اور مدد۔" },
    hi: { title: "ज़िम्मेदार गेमिंग" + BRAND_HI, description: "अपनी सीमा में खेलें — सीमाएँ, सेल्फ़-एक्सक्लूज़न और सहायता।" },
  }),
  entry("editorial-policy", EditorialPolicyRoute, {
    en: { title: "Editorial Policy" + BRAND_EN, description: "How GetJeetBuzz produces, reviews and updates content." },
    bn: { title: "সম্পাদকীয় নীতি" + BRAND_BN, description: "GetJeetBuzz কন্টেন্ট তৈরি ও আপডেট পদ্ধতি।" },
    ur: { title: "ادارتی پالیسی" + BRAND_UR, description: "GetJeetBuzz مواد بنانے اور اپڈیٹ کرنے کا طریقہ۔" },
    hi: { title: "संपादकीय नीति" + BRAND_HI, description: "GetJeetBuzz कंटेंट तैयार और अपडेट करने का तरीका।" },
  }),
  entry("review-policy", ReviewPolicyRoute, {
    en: { title: "Review Policy" + BRAND_EN, description: "How we test, score and update reviews." },
    bn: { title: "রিভিউ পলিসি" + BRAND_BN, description: "আমরা কীভাবে রিভিউ যাচাই ও আপডেট করি।" },
    ur: { title: "جائزہ پالیسی" + BRAND_UR, description: "ہم جائزے کیسے جانچتے اور اپڈیٹ کرتے ہیں۔" },
    hi: { title: "रिव्यू नीति" + BRAND_HI, description: "हम रिव्यू कैसे जाँचते और अपडेट करते हैं।" },
  }),
  entry("content-policy", ContentPolicyRoute, {
    en: { title: "Content Policy" + BRAND_EN, description: "Editorial standards and content rules." },
    bn: { title: "কন্টেন্ট পলিসি" + BRAND_BN, description: "সম্পাদকীয় মান ও কন্টেন্ট নিয়ম।" },
    ur: { title: "مواد کی پالیسی" + BRAND_UR, description: "ادارتی معیار اور مواد کے اصول۔" },
    hi: { title: "कंटेंट पॉलिसी" + BRAND_HI, description: "संपादकीय मानक और कंटेंट नियम।" },
  }),
  entry("fact-checking", FactCheckingRoute, {
    en: { title: "Fact-Checking Policy" + BRAND_EN, description: "How GetJeetBuzz verifies facts and corrects errors." },
    bn: { title: "ফ্যাক্ট-চেকিং নীতি" + BRAND_BN, description: "আমরা কীভাবে তথ্য যাচাই ও ভুল সংশোধন করি।" },
    ur: { title: "حقائق کی جانچ پالیسی" + BRAND_UR, description: "ہم کیسے حقائق کی تصدیق اور غلطیاں درست کرتے ہیں۔" },
    hi: { title: "तथ्य-जाँच नीति" + BRAND_HI, description: "हम कैसे तथ्य सत्यापित और त्रुटियाँ ठीक करते हैं।" },
  }),
  entry("update-policy", UpdatePolicyRoute, {
    en: { title: "Update Policy" + BRAND_EN, description: "How often GetJeetBuzz revisits and refreshes its content." },
    bn: { title: "আপডেট পলিসি" + BRAND_BN, description: "GetJeetBuzz কত ঘন কন্টেন্ট রিভিউ ও আপডেট করে।" },
    ur: { title: "اپڈیٹ پالیسی" + BRAND_UR, description: "GetJeetBuzz کتنی بار مواد کا جائزہ اور اپڈیٹ کرتا ہے۔" },
    hi: { title: "अपडेट नीति" + BRAND_HI, description: "GetJeetBuzz कितनी बार कंटेंट की समीक्षा और अपडेट करता है।" },
  }),
];

/** Build a lookup map by slug for fast splat-route resolution. */
export const LOCALIZED_ROUTE_BY_SLUG: Record<string, LocalizedRoute> = Object.fromEntries(
  LOCALIZED_ROUTES.map((r) => [r.slug, r]),
);

/** Find a registered route by its English slug (empty string = home). */
export function findLocalizedRoute(
  slug: string,
  country?: Country,
): LocalizedRoute | null {
  const reg = LOCALIZED_ROUTE_BY_SLUG[slug];
  if (!reg) return null;
  if (country && reg.countries && !reg.countries.includes(country)) return null;
  return reg;
}

/** All public English slugs (used to extend the sitemap with locale variants). */
export const ALL_LOCALIZED_SLUGS: string[] = LOCALIZED_ROUTES.map((r) => r.slug);