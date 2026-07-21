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
import { Route as JeetbuzzLiveCricketRoute } from "@/routes/jeetbuzz-live-cricket";
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
import { Route as AviatorGuideRoute } from "@/routes/aviator-guide";
import { Route as CricketExchangeGuideRoute } from "@/routes/cricket-exchange-guide";
import { Route as AgentEarningGuideRoute } from "@/routes/agent-earning-guide";
import { Route as IosAppGuideRoute } from "@/routes/ios-app-guide";
import { Route as AndroidWebAppGuideRoute } from "@/routes/android-web-app-guide";
import { Route as IsJeetbuzzSafeRoute } from "@/routes/is-jeetbuzz-safe";
// Phase A GSC-driven solution routes with native Bangla content.
import { Route as AffiliateCommissionRateRoute } from "@/routes/jeetbuzz-affiliate-commission-rate";
import { Route as AffiliateSignupRoute } from "@/routes/jeetbuzz-affiliate-signup";
import { Route as DownloadForAndroidRoute } from "@/routes/jeetbuzz-download-for-android";
import { Route as AppUpdateRoute } from "@/routes/jeetbuzz-app-update";
import { Route as PromoCodeRoute } from "@/routes/jeetbuzz-promo-code";
import { Route as FirstDepositBonusRoute } from "@/routes/jeetbuzz-first-deposit-bonus";
import { Route as ReferBonusRoute } from "@/routes/jeetbuzz-refer-bonus";
import { Route as WithdrawalTimeRoute } from "@/routes/jeetbuzz-withdrawal-time";
import { Route as AccountLockedRoute } from "@/routes/jeetbuzz-account-locked";
import { Route as DepositProblemRoute } from "@/routes/jeetbuzz-deposit-problem";
// Phase B batch 1: brand variants
import { Route as JitbuzzRoute } from "@/routes/jitbuzz";
import { Route as JetbuzzRoute } from "@/routes/jetbuzz";
import { Route as JeetbuzzComLoginRoute } from "@/routes/jeetbuzz-com-login";
import { Route as JeetbuzzSignUpRoute } from "@/routes/jeetbuzz-sign-up";
import { Route as JeetbuzzApkDownloadRoute } from "@/routes/jeetbuzz-apk-download";
// Phase B batch 2: problems cluster
import { Route as WithdrawalPendingRoute } from "@/routes/jeetbuzz-withdrawal-pending";
import { Route as OtpNotReceivedRoute } from "@/routes/jeetbuzz-otp-not-received";
import { Route as AccountVerificationRoute } from "@/routes/jeetbuzz-account-verification";
import { Route as AppNotOpeningRoute } from "@/routes/jeetbuzz-app-not-opening";
import { Route as DepositFailedRoute } from "@/routes/jeetbuzz-deposit-failed";
import { Route as PasswordResetBrandedRoute } from "@/routes/jeetbuzz-password-reset";
// Phase B batch 3: affiliate + payments
import { Route as AffiliateDashboardRoute } from "@/routes/jeetbuzz-affiliate-dashboard";
import { Route as AffiliatePaymentMethodsRoute } from "@/routes/jeetbuzz-affiliate-payment-methods";
import { Route as AffiliateCommissionRoute } from "@/routes/jeetbuzz-affiliate-commission";
import { Route as PartnerLoginRoute } from "@/routes/jeetbuzz-partner-login";
import { Route as BkashDepositRoute } from "@/routes/jeetbuzz-bkash-deposit";
import { Route as NagadWithdrawalRoute } from "@/routes/jeetbuzz-nagad-withdrawal";
import { Route as MinimumDepositRoute } from "@/routes/jeetbuzz-minimum-deposit";

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
  entry("aviator-guide", AviatorGuideRoute, {
    en: { title: "JeetBuzz Aviator & Crash Games Guide 2026" + BRAND_EN, description: "How Aviator works on JeetBuzz — auto cash-out, bankroll sizing, RTP and provable fairness explained for BD/PK/IN players." },
    bn: { title: "JeetBuzz Aviator ও ক্র্যাশ গেম গাইড ২০২৬" + BRAND_BN, description: "জিতবাজে Aviator কীভাবে কাজ করে — অটো ক্যাশ-আউট, ব্যাঙ্করোল, RTP ও প্রভেবলি ফেয়ার ব্যাখ্যা।" },
    ur: { title: "JeetBuzz Aviator اور کریش گیمز گائیڈ 2026" + BRAND_UR, description: "JeetBuzz پر Aviator کیسے کام کرتا ہے — آٹو کیش آؤٹ، بینک رول، RTP اور provably fair کی وضاحت۔" },
    hi: { title: "JeetBuzz Aviator और क्रैश गेम्स गाइड 2026" + BRAND_HI, description: "JeetBuzz पर Aviator कैसे काम करता है — ऑटो कैश-आउट, बैंकरोल, RTP और प्रोवेबली फ़ेयर समझाया गया।" },
  }),
  entry("cricket-exchange-guide", CricketExchangeGuideRoute, {
    en: { title: "JeetBuzz Cricket Exchange Guide 2026" + BRAND_EN, description: "Back, lay, commission and liability on the JeetBuzz exchange — IPL/BPL/PSL framing for BD/IN/PK bettors." },
    bn: { title: "JeetBuzz ক্রিকেট এক্সচেঞ্জ গাইড ২০২৬" + BRAND_BN, description: "Back, Lay, কমিশন ও লায়াবিলিটি — IPL/BPL/PSL এর জন্য জিতবাজ এক্সচেঞ্জ ব্যাখ্যা।" },
    ur: { title: "JeetBuzz کرکٹ ایکسچینج گائیڈ 2026" + BRAND_UR, description: "Back، Lay، کمیشن اور liability — IPL/BPL/PSL کے لیے JeetBuzz ایکسچینج کی وضاحت۔" },
    hi: { title: "JeetBuzz क्रिकेट एक्सचेंज गाइड 2026" + BRAND_HI, description: "बैक, ले, कमीशन और liability — IPL/BPL/PSL के लिए JeetBuzz एक्सचेंज समझाया गया।" },
  }),
  entry("agent-earning-guide", AgentEarningGuideRoute, {
    en: { title: "JeetBuzz Agent & Affiliate Earning Guide 2026" + BRAND_EN, description: "Commission models, payout rails for BD/PK/IN, marketing rules and what gets a JeetBuzz partner account suspended." },
    bn: { title: "JeetBuzz এজেন্ট ও অ্যাফিলিয়েট আর্নিং গাইড ২০২৬" + BRAND_BN, description: "কমিশন মডেল, BD পেআউট রেইল, মার্কেটিং নিয়ম এবং কী কারণে পার্টনার অ্যাকাউন্ট সাসপেন্ড হয়।" },
    ur: { title: "JeetBuzz ایجنٹ اور ایفیلیئٹ کمائی گائیڈ 2026" + BRAND_UR, description: "کمیشن ماڈلز، PK پے آؤٹ ریلز، مارکیٹنگ اصول اور پارٹنر اکاؤنٹ معطل ہونے کی وجوہات۔" },
    hi: { title: "JeetBuzz एजेंट और एफिलिएट कमाई गाइड 2026" + BRAND_HI, description: "कमीशन मॉडल, IN पेआउट रेल, मार्केटिंग नियम और पार्टनर अकाउंट सस्पेंड होने की वजहें।" },
  }),
  entry("ios-app-guide", IosAppGuideRoute, {
    en: { title: "JeetBuzz iOS App Guide 2026" + BRAND_EN, description: "Safari Add to Home Screen install for iPhone and iPad — the only official iOS route. Avoid IPA/sideload offers." },
    bn: { title: "JeetBuzz iOS অ্যাপ গাইড ২০২৬" + BRAND_BN, description: "iPhone ও iPad এর জন্য Safari এর Add to Home Screen ইনস্টল — একমাত্র অফিসিয়াল iOS পথ।" },
    ur: { title: "JeetBuzz iOS ایپ گائیڈ 2026" + BRAND_UR, description: "iPhone/iPad کے لیے Safari سے Add to Home Screen — واحد سرکاری iOS طریقہ۔" },
    hi: { title: "JeetBuzz iOS ऐप गाइड 2026" + BRAND_HI, description: "iPhone और iPad के लिए Safari से Add to Home Screen — एकमात्र आधिकारिक iOS रास्ता।" },
  }),
  entry("android-web-app-guide", AndroidWebAppGuideRoute, {
    en: { title: "JeetBuzz Android Web App Guide 2026" + BRAND_EN, description: "Install JeetBuzz as a Chrome PWA on Android — no APK, auto-updates, push notifications and full cashier support." },
    bn: { title: "JeetBuzz অ্যান্ড্রয়েড ওয়েব অ্যাপ গাইড ২০২৬" + BRAND_BN, description: "APK ছাড়াই Chrome PWA হিসেবে জিতবাজ ইনস্টল — অটো-আপডেট ও পুশ নোটিফিকেশন।" },
    ur: { title: "JeetBuzz اینڈرائیڈ ویب ایپ گائیڈ 2026" + BRAND_UR, description: "APK کے بغیر Chrome PWA کے طور پر JeetBuzz انسٹال کریں — آٹو اپڈیٹس اور پش نوٹیفکیشنز۔" },
    hi: { title: "JeetBuzz Android वेब ऐप गाइड 2026" + BRAND_HI, description: "APK के बिना Chrome PWA के रूप में JeetBuzz इंस्टॉल करें — ऑटो-अपडेट और पुश नोटिफ़िकेशन।" },
  }),
  entry("is-jeetbuzz-safe", IsJeetbuzzSafeRoute, {
    en: { title: "Is JeetBuzz Safe & Legit 2026?" + BRAND_EN, description: "Independent 2026 trust review of JeetBuzz — Curacao licence, payout record, KYC, complaints and red flags for BD/PK/IN players." },
    bn: { title: "JeetBuzz কি নিরাপদ ও বিশ্বস্ত ২০২৬?" + BRAND_BN, description: "JeetBuzz এর স্বাধীন ২০২৬ ট্রাস্ট রিভিউ — লাইসেন্স, পেআউট, KYC, অভিযোগ ও সতর্কতা।" },
    ur: { title: "کیا JeetBuzz 2026 میں محفوظ ہے؟" + BRAND_UR, description: "JeetBuzz کا 2026 آزاد جائزہ — لائسنس، ادائیگیاں، KYC، شکایات اور خطرے کے نشانات۔" },
    hi: { title: "क्या JeetBuzz 2026 में सुरक्षित है?" + BRAND_HI, description: "JeetBuzz की 2026 स्वतंत्र समीक्षा — लाइसेंस, पेआउट, KYC, शिकायतें और रेड फ़्लैग्स।" },
  }),
  // ---- Phase A: GSC-driven solution routes with native Bangla body ----
  // Registered with countries: ["bd"] so the localized splat only serves
  // /bd/bn/{slug}. English is available at the root URL. Other locales
  // fall back to English SEO/meta but are NOT surfaced under /pk/ur or /in/hi.
  entry("jeetbuzz-affiliate-commission-rate", AffiliateCommissionRateRoute, {
    en: { title: "JeetBuzz Affiliate Commission Rate 2026" + BRAND_EN, description: "JeetBuzz affiliate commission rate for 2026 — tiered up to 60% weekly revenue share on NGR." },
    bn: { title: "জিতবাজ অ্যাফিলিয়েট কমিশন রেট ২০২৬" + BRAND_BN, description: "জিতবাজ অ্যাফিলিয়েট কমিশন রেট ২০২৬ — NGR-এর উপর সর্বোচ্চ ৬০% সাপ্তাহিক রেভিনিউ শেয়ার।" },
    ur: { title: "JeetBuzz Affiliate Commission Rate 2026" + BRAND_UR, description: "JeetBuzz affiliate commission rate for 2026 — tiered up to 60% weekly revenue share on NGR." },
    hi: { title: "JeetBuzz Affiliate Commission Rate 2026" + BRAND_HI, description: "JeetBuzz affiliate commission rate for 2026 — tiered up to 60% weekly revenue share on NGR." },
  }, ["bd"]),
  entry("jeetbuzz-affiliate-signup", AffiliateSignupRoute, {
    en: { title: "JeetBuzz Affiliate Signup 2026" + BRAND_EN, description: "JeetBuzz affiliate signup — application, KYC and approval timing in under 10 minutes." },
    bn: { title: "জিতবাজ অ্যাফিলিয়েট সাইনআপ ২০২৬" + BRAND_BN, description: "জিতবাজ অ্যাফিলিয়েট সাইনআপ — আবেদন, KYC এবং অনুমোদনের সময় ১০ মিনিটেরও কম।" },
    ur: { title: "JeetBuzz Affiliate Signup 2026" + BRAND_UR, description: "JeetBuzz affiliate signup — application, KYC and approval timing." },
    hi: { title: "JeetBuzz Affiliate Signup 2026" + BRAND_HI, description: "JeetBuzz affiliate signup — application, KYC and approval timing." },
  }, ["bd"]),
  entry("jeetbuzz-download-for-android", DownloadForAndroidRoute, {
    en: { title: "JeetBuzz Download for Android 2026" + BRAND_EN, description: "Safe JeetBuzz APK install for Android — permission checks and fake mirror detection." },
    bn: { title: "জিতবাজ অ্যান্ড্রয়েড ডাউনলোড ২০২৬" + BRAND_BN, description: "অ্যান্ড্রয়েডে নিরাপদ জিতবাজ APK ইনস্টল — পারমিশন চেক এবং নকল মিরর চেনা।" },
    ur: { title: "JeetBuzz Download for Android 2026" + BRAND_UR, description: "Safe JeetBuzz APK install for Android." },
    hi: { title: "JeetBuzz Download for Android 2026" + BRAND_HI, description: "Safe JeetBuzz APK install for Android." },
  }, ["bd"]),
  entry("jeetbuzz-app-update", AppUpdateRoute, {
    en: { title: "JeetBuzz App Update 2026" + BRAND_EN, description: "Update JeetBuzz on Android and iOS safely — fixes for old-version bugs and App not installed errors." },
    bn: { title: "জিতবাজ অ্যাপ আপডেট ২০২৬" + BRAND_BN, description: "অ্যান্ড্রয়েড ও iOS-এ নিরাপদে জিতবাজ অ্যাপ আপডেট — পুরনো ভার্সন সমস্যার সমাধান।" },
    ur: { title: "JeetBuzz App Update 2026" + BRAND_UR, description: "Update JeetBuzz on Android and iOS safely." },
    hi: { title: "JeetBuzz App Update 2026" + BRAND_HI, description: "Update JeetBuzz on Android and iOS safely." },
  }, ["bd"]),
  entry("jeetbuzz-promo-code", PromoCodeRoute, {
    en: { title: "JeetBuzz Promo Code 2026" + BRAND_EN, description: "How JeetBuzz promo codes work — where to find valid codes today and why some silently fail." },
    bn: { title: "জিতবাজ প্রোমো কোড ২০২৬" + BRAND_BN, description: "জিতবাজ প্রোমো কোড কীভাবে কাজ করে — আজকের বৈধ কোড কোথায় পাবেন।" },
    ur: { title: "JeetBuzz Promo Code 2026" + BRAND_UR, description: "How JeetBuzz promo codes work." },
    hi: { title: "JeetBuzz Promo Code 2026" + BRAND_HI, description: "How JeetBuzz promo codes work." },
  }, ["bd"]),
  entry("jeetbuzz-first-deposit-bonus", FirstDepositBonusRoute, {
    en: { title: "JeetBuzz First Deposit Bonus 2026" + BRAND_EN, description: "JeetBuzz first deposit bonus — match percentage, rollover and mistakes that void it." },
    bn: { title: "জিতবাজ ফার্স্ট ডিপোজিট বোনাস ২০২৬" + BRAND_BN, description: "জিতবাজ ফার্স্ট ডিপোজিট বোনাস — ম্যাচ শতাংশ, রোলওভার এবং যেসব ভুলে বাতিল হয়।" },
    ur: { title: "JeetBuzz First Deposit Bonus 2026" + BRAND_UR, description: "JeetBuzz first deposit bonus explained." },
    hi: { title: "JeetBuzz First Deposit Bonus 2026" + BRAND_HI, description: "JeetBuzz first deposit bonus explained." },
  }, ["bd"]),
  entry("jeetbuzz-refer-bonus", ReferBonusRoute, {
    en: { title: "JeetBuzz Refer Bonus 2026" + BRAND_EN, description: "JeetBuzz refer-a-friend bonus — how it credits, why some referrals silently fail." },
    bn: { title: "জিতবাজ রেফার বোনাস ২০২৬" + BRAND_BN, description: "জিতবাজ রেফার-এ-ফ্রেন্ড বোনাস — কীভাবে ক্রেডিট হয়, কেন কিছু রেফারেল ব্যর্থ হয়।" },
    ur: { title: "JeetBuzz Refer Bonus 2026" + BRAND_UR, description: "JeetBuzz refer-a-friend bonus explained." },
    hi: { title: "JeetBuzz Refer Bonus 2026" + BRAND_HI, description: "JeetBuzz refer-a-friend bonus explained." },
  }, ["bd"]),
  entry("jeetbuzz-withdrawal-time", WithdrawalTimeRoute, {
    en: { title: "JeetBuzz Withdrawal Time 2026" + BRAND_EN, description: "Realistic JeetBuzz withdrawal timing per method and why the first cash-out takes longer." },
    bn: { title: "জিতবাজ উইথড্রয়াল সময় ২০২৬" + BRAND_BN, description: "জিতবাজে প্রতি মেথডে বাস্তব উইথড্রয়াল সময় এবং প্রথম ক্যাশআউট কেন বেশি সময় নেয়।" },
    ur: { title: "JeetBuzz Withdrawal Time 2026" + BRAND_UR, description: "Realistic JeetBuzz withdrawal timing per method." },
    hi: { title: "JeetBuzz Withdrawal Time 2026" + BRAND_HI, description: "Realistic JeetBuzz withdrawal timing per method." },
  }, ["bd"]),
  entry("jeetbuzz-account-locked", AccountLockedRoute, {
    en: { title: "JeetBuzz Account Locked 2026" + BRAND_EN, description: "Why a JeetBuzz account gets locked and how to recover it — with the live-chat script that works." },
    bn: { title: "জিতবাজ অ্যাকাউন্ট লকড ২০২৬" + BRAND_BN, description: "কেন জিতবাজ অ্যাকাউন্ট লকড হয় এবং পুনরুদ্ধারের পথ — লাইভ চ্যাটে ব্যবহারের স্ক্রিপ্ট সহ।" },
    ur: { title: "JeetBuzz Account Locked 2026" + BRAND_UR, description: "Why a JeetBuzz account gets locked and how to recover it." },
    hi: { title: "JeetBuzz Account Locked 2026" + BRAND_HI, description: "Why a JeetBuzz account gets locked and how to recover it." },
  }, ["bd"]),
  entry("jeetbuzz-deposit-problem", DepositProblemRoute, {
    en: { title: "JeetBuzz Deposit Problem 2026" + BRAND_EN, description: "JeetBuzz deposit problems — debited but not credited, name mismatch, wrong reference — with the exact evidence support needs." },
    bn: { title: "জিতবাজ ডিপোজিট সমস্যা ২০২৬" + BRAND_BN, description: "জিতবাজ ডিপোজিট সমস্যা — টাকা কেটেছে কিন্তু ক্রেডিট হয়নি, নাম মিসম্যাচ — সাপোর্টের জন্য সঠিক প্রমাণ।" },
    ur: { title: "JeetBuzz Deposit Problem 2026" + BRAND_UR, description: "JeetBuzz deposit problem fixes." },
    hi: { title: "JeetBuzz Deposit Problem 2026" + BRAND_HI, description: "JeetBuzz deposit problem fixes." },
  }, ["bd"]),
];

// ---- Phase B batch 1: brand variants (BD-only native BN) ----
LOCALIZED_ROUTES.push(
  entry("jitbuzz", JitbuzzRoute, {
    en: { title: "Jitbuzz or JeetBuzz? Correct Spelling 2026" + BRAND_EN, description: "'Jitbuzz' is a misspelling of JeetBuzz — official spelling, why the typo happens and how to reach the real site." },
    bn: { title: "Jitbuzz নাকি JeetBuzz? সঠিক বানান ২০২৬" + BRAND_BN, description: "Jitbuzz হচ্ছে JeetBuzz-এর ভুল বানান — কেন হয় এবং আসল সাইটে যাওয়ার নিরাপদ পথ।" },
    ur: { title: "Jitbuzz or JeetBuzz? Correct Spelling 2026" + BRAND_UR, description: "'Jitbuzz' is a misspelling of JeetBuzz — reach the official site safely." },
    hi: { title: "Jitbuzz or JeetBuzz? Correct Spelling 2026" + BRAND_HI, description: "'Jitbuzz' is a misspelling of JeetBuzz — reach the official site safely." },
  }, ["bd"]),
  entry("jetbuzz", JetbuzzRoute, {
    en: { title: "Jetbuzz or JeetBuzz? Correct Brand Spelling 2026" + BRAND_EN, description: "'Jetbuzz' is a misspelling of JeetBuzz — official spelling and how to avoid look-alike domains." },
    bn: { title: "Jetbuzz নাকি JeetBuzz? সঠিক বানান ২০২৬" + BRAND_BN, description: "Jetbuzz হচ্ছে JeetBuzz-এর ভুল বানান — আসল সাইটে যাওয়ার নিরাপদ পথ।" },
    ur: { title: "Jetbuzz or JeetBuzz? Correct Spelling 2026" + BRAND_UR, description: "'Jetbuzz' is a misspelling of JeetBuzz." },
    hi: { title: "Jetbuzz or JeetBuzz? Correct Spelling 2026" + BRAND_HI, description: "'Jetbuzz' is a misspelling of JeetBuzz." },
  }, ["bd"]),
  entry("jeetbuzz-com-login", JeetbuzzComLoginRoute, {
    en: { title: "JeetBuzz.com Login 2026 — Safe Access & Recovery" + BRAND_EN, description: "How to log in on the real JeetBuzz.com domain, spot fake mirrors and recover locked accounts." },
    bn: { title: "JeetBuzz.com লগইন ২০২৬ — নিরাপদ অ্যাক্সেস" + BRAND_BN, description: "আসল JeetBuzz.com ডোমেইনে লগইন, ফেক মিরর সনাক্ত এবং লকড অ্যাকাউন্ট রিকভারি।" },
    ur: { title: "JeetBuzz.com Login 2026" + BRAND_UR, description: "Safe JeetBuzz.com login and recovery." },
    hi: { title: "JeetBuzz.com Login 2026" + BRAND_HI, description: "Safe JeetBuzz.com login and recovery." },
  }, ["bd"]),
  entry("jeetbuzz-sign-up", JeetbuzzSignUpRoute, {
    en: { title: "JeetBuzz Sign Up 2026 — 3-Minute Registration" + BRAND_EN, description: "JeetBuzz sign up in three minutes — phone/email registration, welcome bonus opt-in and KYC tips." },
    bn: { title: "JeetBuzz সাইন আপ ২০২৬ — ৩ মিনিটে রেজিস্ট্রেশন" + BRAND_BN, description: "JeetBuzz সাইনআপ ৩ মিনিটে — ফোন/ইমেইল রেজিস্ট্রেশন, ওয়েলকাম বোনাস ও KYC টিপস।" },
    ur: { title: "JeetBuzz Sign Up 2026" + BRAND_UR, description: "JeetBuzz sign up in three minutes." },
    hi: { title: "JeetBuzz Sign Up 2026" + BRAND_HI, description: "JeetBuzz sign up in three minutes." },
  }, ["bd"]),
  entry("jeetbuzz-apk-download", JeetbuzzApkDownloadRoute, {
    en: { title: "JeetBuzz APK Download 2026 — Latest Safe Install" + BRAND_EN, description: "JeetBuzz APK download — latest version, safe Android install with permission checks and update path." },
    bn: { title: "JeetBuzz APK ডাউনলোড ২০২৬ — নিরাপদ ইনস্টল" + BRAND_BN, description: "JeetBuzz APK ডাউনলোড — সর্বশেষ ভার্সন, নিরাপদ Android ইনস্টল ও আপডেট পথ।" },
    ur: { title: "JeetBuzz APK Download 2026" + BRAND_UR, description: "Latest JeetBuzz APK download and safe install." },
    hi: { title: "JeetBuzz APK Download 2026" + BRAND_HI, description: "Latest JeetBuzz APK download and safe install." },
  }, ["bd"]),
);

// ---- Phase B batch 2: problems cluster (BD-only native BN) ----
LOCALIZED_ROUTES.push(
  entry("jeetbuzz-withdrawal-pending", WithdrawalPendingRoute, {
    en: { title: "JeetBuzz Withdrawal Pending 2026 — Why It's Stuck" + BRAND_EN, description: "The seven real reasons a JeetBuzz withdrawal is stuck on Pending and the live-chat script that unblocks each." },
    bn: { title: "JeetBuzz উইথড্রয়াল Pending ২০২৬ — কেন আটকে" + BRAND_BN, description: "উইথড্রয়াল Pending থাকার ৭টি আসল কারণ এবং প্রতিটির সমাধান।" },
    ur: { title: "JeetBuzz Withdrawal Pending 2026" + BRAND_UR, description: "Why a JeetBuzz withdrawal is stuck on Pending and how to fix it." },
    hi: { title: "JeetBuzz Withdrawal Pending 2026" + BRAND_HI, description: "Why a JeetBuzz withdrawal is stuck on Pending and how to fix it." },
  }, ["bd"]),
  entry("jeetbuzz-otp-not-received", OtpNotReceivedRoute, {
    en: { title: "JeetBuzz OTP Not Received 2026 — Every Cause & Fix" + BRAND_EN, description: "Fix missing JeetBuzz OTP — DND, carrier block, wrong country code, voice-OTP fallback and support escalation." },
    bn: { title: "JeetBuzz OTP আসছে না ২০২৬ — সমাধান" + BRAND_BN, description: "JeetBuzz OTP না আসার ৬ কারণ এবং প্রতিটির দ্রুত সমাধান।" },
    ur: { title: "JeetBuzz OTP Not Received 2026" + BRAND_UR, description: "Fix missing JeetBuzz OTP — DND, carrier and voice-OTP fallback." },
    hi: { title: "JeetBuzz OTP Not Received 2026" + BRAND_HI, description: "Fix missing JeetBuzz OTP — DND, carrier and voice-OTP fallback." },
  }, ["bd"]),
  entry("jeetbuzz-account-verification", AccountVerificationRoute, {
    en: { title: "JeetBuzz Account Verification 2026 — KYC Checklist" + BRAND_EN, description: "Clear JeetBuzz KYC on the first try — required docs, rejection reasons and how to speed up review." },
    bn: { title: "JeetBuzz অ্যাকাউন্ট Verification ২০২৬ — KYC চেকলিস্ট" + BRAND_BN, description: "প্রথম বারেই JeetBuzz KYC clear করুন — প্রয়োজনীয় document এবং rejection কারণ।" },
    ur: { title: "JeetBuzz Account Verification 2026" + BRAND_UR, description: "Clear JeetBuzz KYC on the first try." },
    hi: { title: "JeetBuzz Account Verification 2026" + BRAND_HI, description: "Clear JeetBuzz KYC on the first try." },
  }, ["bd"]),
  entry("jeetbuzz-app-not-opening", AppNotOpeningRoute, {
    en: { title: "JeetBuzz App Not Opening 2026 — Every Crash Fix" + BRAND_EN, description: "Splash freeze, blank screen, crash — the seven real causes of a JeetBuzz app that won't open and the fixes." },
    bn: { title: "JeetBuzz অ্যাপ খুলছে না ২০২৬ — সমাধান" + BRAND_BN, description: "Splash freeze, blank screen, crash — JeetBuzz অ্যাপ না খোলার ৭ কারণ ও সমাধান।" },
    ur: { title: "JeetBuzz App Not Opening 2026" + BRAND_UR, description: "Every JeetBuzz app crash cause and fix." },
    hi: { title: "JeetBuzz App Not Opening 2026" + BRAND_HI, description: "Every JeetBuzz app crash cause and fix." },
  }, ["bd"]),
  entry("jeetbuzz-deposit-failed", DepositFailedRoute, {
    en: { title: "JeetBuzz Deposit Failed 2026 — Debited But Not Credited" + BRAND_EN, description: "Money debited but not credited to JeetBuzz — every cause with the four evidence items support needs to recover it." },
    bn: { title: "JeetBuzz Deposit Failed ২০২৬ — টাকা কেটেছে কিন্তু credit হয়নি" + BRAND_BN, description: "টাকা কেটেছে কিন্তু credit হয়নি — সব কারণ ও সাপোর্টে যা দরকার।" },
    ur: { title: "JeetBuzz Deposit Failed 2026" + BRAND_UR, description: "Debited but not credited — every cause and recovery." },
    hi: { title: "JeetBuzz Deposit Failed 2026" + BRAND_HI, description: "Debited but not credited — every cause and recovery." },
  }, ["bd"]),
  entry("jeetbuzz-password-reset", PasswordResetBrandedRoute, {
    en: { title: "JeetBuzz Password Reset 2026 — Recover in 3 Minutes" + BRAND_EN, description: "Reset your JeetBuzz password via phone OTP or email link in three minutes, plus support escalation when both fail." },
    bn: { title: "JeetBuzz পাসওয়ার্ড রিসেট ২০২৬ — ৩ মিনিটে recovery" + BRAND_BN, description: "ফোন OTP বা ইমেইল link দিয়ে ৩ মিনিটে JeetBuzz পাসওয়ার্ড reset এবং fallback flow।" },
    ur: { title: "JeetBuzz Password Reset 2026" + BRAND_UR, description: "Reset your JeetBuzz password via phone OTP or email link." },
    hi: { title: "JeetBuzz Password Reset 2026" + BRAND_HI, description: "Reset your JeetBuzz password via phone OTP or email link." },
  }, ["bd"]),
);

// ---- Phase B batch 3: affiliate + payments (BD-only native BN) ----
LOCALIZED_ROUTES.push(
  entry("jeetbuzz-affiliate-dashboard", AffiliateDashboardRoute, {
    en: { title: "JeetBuzz Affiliate Dashboard 2026 — Reports & Metrics" + BRAND_EN, description: "Walkthrough of the JeetBuzz affiliate dashboard — clicks, FTDs, NGR, tier progress and payout history." },
    bn: { title: "JeetBuzz Affiliate Dashboard ২০২৬ — রিপোর্ট ও মেট্রিক" + BRAND_BN, description: "JeetBuzz affiliate dashboard-এর প্রতিটি metric — click, FTD, NGR, tier, payout history।" },
    ur: { title: "JeetBuzz Affiliate Dashboard 2026" + BRAND_UR, description: "Walkthrough of the JeetBuzz affiliate dashboard." },
    hi: { title: "JeetBuzz Affiliate Dashboard 2026" + BRAND_HI, description: "Walkthrough of the JeetBuzz affiliate dashboard." },
  }, ["bd"]),
  entry("jeetbuzz-affiliate-payment-methods", AffiliatePaymentMethodsRoute, {
    en: { title: "JeetBuzz Affiliate Payment Methods 2026" + BRAND_EN, description: "bKash, Nagad, Rocket, bank and USDT payouts — minimums, fees, timing and KYC for JeetBuzz affiliates." },
    bn: { title: "JeetBuzz Affiliate Payment Methods ২০২৬" + BRAND_BN, description: "bKash, Nagad, Rocket, bank ও USDT — minimum, ফি, সময়, KYC।" },
    ur: { title: "JeetBuzz Affiliate Payment Methods 2026" + BRAND_UR, description: "Every JeetBuzz affiliate payout method — minimums and timing." },
    hi: { title: "JeetBuzz Affiliate Payment Methods 2026" + BRAND_HI, description: "Every JeetBuzz affiliate payout method — minimums and timing." },
  }, ["bd"]),
  entry("jeetbuzz-affiliate-commission", AffiliateCommissionRoute, {
    en: { title: "JeetBuzz Affiliate Commission 2026 — 25% to 60%" + BRAND_EN, description: "Full JeetBuzz affiliate commission structure — tiers, weekly NGR calculation and carryover." },
    bn: { title: "JeetBuzz Affiliate Commission ২০২৬ — ২৫% থেকে ৬০%" + BRAND_BN, description: "সাপ্তাহিক NGR অনুযায়ী tier, carryover ও ৩.৫% sub-affiliate override।" },
    ur: { title: "JeetBuzz Affiliate Commission 2026" + BRAND_UR, description: "Full JeetBuzz affiliate commission structure." },
    hi: { title: "JeetBuzz Affiliate Commission 2026" + BRAND_HI, description: "Full JeetBuzz affiliate commission structure." },
  }, ["bd"]),
  entry("jeetbuzz-partner-login", PartnerLoginRoute, {
    en: { title: "JeetBuzz Partner Login 2026 — Affiliate Dashboard Access" + BRAND_EN, description: "Sign in to the JeetBuzz partner dashboard safely with 2FA, recovery codes and phishing guardrails." },
    bn: { title: "JeetBuzz Partner Login ২০২৬" + BRAND_BN, description: "2FA, recovery code ও phishing guardrail সহ JeetBuzz partner dashboard-এ নিরাপদ signin।" },
    ur: { title: "JeetBuzz Partner Login 2026" + BRAND_UR, description: "Sign in to the JeetBuzz partner dashboard safely." },
    hi: { title: "JeetBuzz Partner Login 2026" + BRAND_HI, description: "Sign in to the JeetBuzz partner dashboard safely." },
  }, ["bd"]),
  entry("jeetbuzz-bkash-deposit", BkashDepositRoute, {
    en: { title: "JeetBuzz bKash Deposit 2026 — Steps, Minimum & Fixes" + BRAND_EN, description: "5-step bKash deposit on JeetBuzz — minimum, credit timing, name-mismatch fixes and reference recovery." },
    bn: { title: "JeetBuzz bKash Deposit ২০২৬ — ধাপ, minimum ও সমাধান" + BRAND_BN, description: "৫-ধাপ bKash deposit, minimum, credit সময় ও reference recovery।" },
    ur: { title: "JeetBuzz bKash Deposit 2026" + BRAND_UR, description: "Complete bKash deposit walkthrough for JeetBuzz." },
    hi: { title: "JeetBuzz bKash Deposit 2026" + BRAND_HI, description: "Complete bKash deposit walkthrough for JeetBuzz." },
  }, ["bd"]),
  entry("jeetbuzz-nagad-withdrawal", NagadWithdrawalRoute, {
    en: { title: "JeetBuzz Nagad Withdrawal 2026 — Steps & Timing" + BRAND_EN, description: "5-step Nagad withdrawal on JeetBuzz — minimum, credit timing, KYC and Pending fixes." },
    bn: { title: "JeetBuzz Nagad Withdrawal ২০২৬ — ধাপ ও সময়" + BRAND_BN, description: "৫-ধাপ Nagad withdrawal, minimum, credit সময়, KYC ও Pending সমাধান।" },
    ur: { title: "JeetBuzz Nagad Withdrawal 2026" + BRAND_UR, description: "Complete Nagad withdrawal walkthrough for JeetBuzz." },
    hi: { title: "JeetBuzz Nagad Withdrawal 2026" + BRAND_HI, description: "Complete Nagad withdrawal walkthrough for JeetBuzz." },
  }, ["bd"]),
  entry("jeetbuzz-minimum-deposit", MinimumDepositRoute, {
    en: { title: "JeetBuzz Minimum Deposit 2026 — BDT 100 First, 200 Recurring" + BRAND_EN, description: "JeetBuzz minimum deposit — BDT 100 first, BDT 200 recurring, per-rail thresholds and bonus minimums." },
    bn: { title: "JeetBuzz Minimum Deposit ২০২৬ — প্রথম ১০০, পরের ২০০" + BRAND_BN, description: "প্রথম BDT ১০০, পরের ২০০ — per-rail threshold ও bonus minimum।" },
    ur: { title: "JeetBuzz Minimum Deposit 2026" + BRAND_UR, description: "JeetBuzz minimum deposit — per-rail and bonus thresholds." },
    hi: { title: "JeetBuzz Minimum Deposit 2026" + BRAND_HI, description: "JeetBuzz minimum deposit — per-rail and bonus thresholds." },
  }, ["bd"]),
  entry("jeetbuzz-live-cricket", JeetbuzzLiveCricketRoute, {
    en: { title: "JeetBuzz Live Cricket 2026 — BPL, IPL, PSL In-Play Markets" + BRAND_EN, description: "JeetBuzz live cricket in-play markets — BPL, IPL, PSL, cash-out timing, ball-by-ball settlement and market strategy." },
    bn: { title: "JeetBuzz Live Cricket ২০২৬ — BPL, IPL, PSL In-Play" + BRAND_BN, description: "JeetBuzz লাইভ ক্রিকেট in-play market, cash-out timing ও কৌশল।" },
    ur: { title: "JeetBuzz Live Cricket 2026" + BRAND_UR, description: "JeetBuzz live cricket in-play markets and strategy." },
    hi: { title: "JeetBuzz Live Cricket 2026" + BRAND_HI, description: "JeetBuzz live cricket in-play markets and strategy." },
  }, ["bd"]),
);

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