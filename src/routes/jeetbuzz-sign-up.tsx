import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { HUBS } from "@/lib/clusters";

const PATH = "/jeetbuzz-sign-up";
const TITLE = "JeetBuzz Sign Up 2026 — 3-Minute Registration + New Account Sign Up Bonus";
const DESC = "JeetBuzz sign up 2026 — phone/email registration in three minutes, claim the new-account sign-up bonus, KYC, promo code entry and safe first-deposit tips for BD, PK and IN.";

export const Route = createFileRoute("/jeetbuzz-sign-up")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Signup"
      title={<>JeetBuzz <span className="gold-text">Sign Up</span></>}
      subtitle="Three-minute JeetBuzz sign up, new-account sign-up bonus opt-in, promo code entry and the exact fields KYC will ask for later — set up your account once and avoid rework."
      ctaIntent="signup" ctaLabel="Create Free Account"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Sign Up", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Before you start",
        "Get three things ready and signup takes under three minutes:",
        "1. A phone number you can receive SMS on — the account is tied to this number and it cannot be changed later without KYC re-verification.",
        "2. A personal email address (Gmail, Outlook, Yahoo). Skip disposable-email services — they trigger fraud filters.",
        "3. A payment method in your legal name — bKash / Nagad / Rocket (BD), EasyPaisa / JazzCash (PK), UPI (IN). The name on the wallet must match the name you register with, or KYC will block your first withdrawal.",
        "## Sign up in six steps",
        "1. Open the official site (verify via [facebook.com/GetJeetBuzz](https://facebook.com/GetJeetBuzz)).",
        "2. Tap **Sign Up** in the top-right corner.",
        "3. Enter your phone number and receive the OTP.",
        "4. Set a strong password — at least 12 characters, mixing letters, numbers and one symbol.",
        "5. Tick the **welcome bonus opt-in** if you want it applied on your first deposit. You can only claim it during signup — not after the deposit.",
        "6. Complete profile: full legal name (matches your ID), date of birth, country, currency.",
        "## Choose your currency wisely",
        "The currency you choose at signup is permanent. Pick the currency of your primary payment wallet:",
        "- Bangladesh → BDT",
        "- Pakistan → PKR",
        "- India → INR",
        "- Using USDT/crypto? → pick USD.",
        "Cross-currency deposits work but incur small conversion spreads on every transaction. One-off is fine; daily deposits stack up.",
        "## Welcome bonus rules that trip new players",
        "- **Opt in before depositing.** The bonus is only credited if the tick-box was checked at signup — support cannot back-apply it.",
        "- **Wagering (rollover).** A 100% bonus with 15× rollover means you must place bets totalling 15 × bonus amount before you can withdraw. Slots contribute 100%, live casino 10–20%, cricket exchange 0%.",
        "- **Max-bet cap.** Most welcome bonuses cap the bet size while the bonus is active. One larger bet voids the whole bonus.",
        "- **Expiry.** Typically 7–30 days. Miss it and both bonus + bonus-winnings are forfeited.",
        "Full detail: [Welcome Bonus](/welcome-bonus).",
        "## KYC — do it early",
        "First withdrawal always triggers KYC. Uploading your ID and address proof at signup (rather than at withdrawal panic) saves a day of delay. Follow the [Verification Guide](/verification).",
        "## Safe first deposit",
        "- Use a wallet in your **own legal name** — third-party deposits are the #1 KYC failure reason.",
        "- Keep the transaction reference / TxID screenshot. Support will ask for it if the deposit hangs.",
        "- Start with a small amount (500 BDT / 200 PKR / ₹500) to test the flow before scaling up.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. Gambling carries risk; play only what you can afford to lose. Responsible-gaming tools like deposit limits and [self-exclusion](/how-to-delete-jeetbuzz-account) are on your side.",
        "## The sign-up bonus, in plain English",
        "The **JeetBuzz sign-up bonus** (a.k.a. new-account bonus) is a percentage match on your very first deposit, credited within minutes once you tick the opt-in box during registration. Typical banner offer is 100%–200% up to a cap. It is *not* free cash — you must clear a wagering requirement (usually 15× the bonus amount) before the bonus and any winnings become withdrawable. Full mechanics are on [Welcome Bonus](/welcome-bonus) and [First Deposit Bonus](/jeetbuzz-first-deposit-bonus).",
        "## Promo code — where does it go?",
        "The **Promo Code** field is on the same registration form, directly under Currency. Paste today's code before you click *Create Account* — the system will not accept a code after the account exists. Codes rotate weekly; the current list lives on [JeetBuzz Promo Code](/jeetbuzz-promo-code).",
        "## Signup on mobile vs desktop",
        "The registration form is identical across the Android APK, the iOS web app and the desktop site. On mobile, tap **Menu → Sign Up**; on desktop it's the gold button top-right. The Android APK autofills the OTP so you never leave the app — see [APK Download](/download).",
        "## Country-by-country notes",
        "- **Bangladesh:** pick BDT, register a bKash/Nagad/Rocket number in your own name, keep NID handy for KYC.",
        "- **Pakistan:** pick PKR, use EasyPaisa/JazzCash under your CNIC name — third-party wallets get reversed at first withdrawal.",
        "- **India:** pick INR, link your UPI ID to your PAN name, and be aware TDS applies on winnings above the annual threshold.",
        "## After signup — the ideal first 30 minutes",
        "1. Upload KYC (NID/CNIC/PAN + address proof) immediately from **Account → Verification**.",
        "2. Enable 2FA under **Security** — SMS or authenticator, both are free.",
        "3. Deposit the minimum qualifying amount (500 BDT / 500 PKR / ₹500) via your own wallet.",
        "4. Place one small qualifying bet so the bonus counter starts.",
        "5. Bookmark [Help](/help) and [Payments](/payments) hubs for future issues.",
        "## Signup errors and instant fixes",
        "- **OTP not received** in 60 s → see [OTP Not Received](/jeetbuzz-otp-not-received).",
        "- **\"Phone already registered\"** → your number is tied to a dormant account; use [Password Reset](/jeetbuzz-password-reset) instead.",
        "- **\"Invalid promo code\"** → the code has expired or the format is wrong; copy fresh from [Promo Code](/jeetbuzz-promo-code).",
        "- **KYC rejected** → wrong name spelling, blurry photo, or expired ID. Fix and re-upload from [Account Verification](/jeetbuzz-account-verification).",
      ]}
      bodyByLocale={{
        bn: [
          "## শুরু করার আগে",
          "তিনটি জিনিস প্রস্তুত রাখলে সাইনআপ ৩ মিনিটেরও কম:",
          "১. SMS পাওয়ার ফোন নম্বর — অ্যাকাউন্ট এই নম্বরে বাঁধা, পরে KYC re-verification ছাড়া বদলানো যাবে না।",
          "২. ব্যক্তিগত ইমেইল (Gmail/Outlook/Yahoo)। ডিসপোজেবল ইমেইল ফ্রড ফিল্টার ট্রিগার করে।",
          "৩. আপনার নিজের নামে পেমেন্ট মেথড — bKash, Nagad, Rocket। ওয়ালেটের নাম রেজিস্ট্রেশনের নামের সঙ্গে মিলতে হবে, নইলে প্রথম উইথড্রয়াল KYC-তে আটকাবে।",
          "## ৬ ধাপে সাইনআপ",
          "১. অফিসিয়াল সাইট খুলুন ([facebook.com/GetJeetBuzz](https://facebook.com/GetJeetBuzz) থেকে যাচাই)।",
          "২. উপরে ডানে **Sign Up** চাপুন।",
          "৩. ফোন নম্বর দিন, OTP নিন।",
          "৪. শক্ত পাসওয়ার্ড — কমপক্ষে ১২ ক্যারেক্টার, অক্ষর+সংখ্যা+সিম্বল।",
          "৫. প্রথম ডিপোজিটে ওয়েলকাম বোনাস পেতে **opt-in** টিক করুন। সাইনআপের সময়ই দিতে হবে, পরে সাপোর্ট দিতে পারবে না।",
          "৬. প্রোফাইল সম্পূর্ণ করুন: পূর্ণ আইনি নাম, জন্মতারিখ, দেশ, মুদ্রা।",
          "## মুদ্রা সাবধানে বেছে নিন",
          "সাইনআপের সময় বাছাই করা মুদ্রা স্থায়ী। বাংলাদেশ → BDT। USDT/ক্রিপ্টো → USD। ক্রস-কারেন্সি কাজ করে কিন্তু প্রতি লেনদেনে কনভার্শন স্প্রেড কাটে।",
          "## ওয়েলকাম বোনাসে যা নতুনরা ভুল করেন",
          "- **ডিপোজিটের আগে opt-in।** টিক ছাড়া বোনাস ক্রেডিট হবে না।",
          "- **Wagering (rollover)।** ১৫× রোলওভার মানে বোনাসের ১৫ গুণ বেট করতে হবে। স্লট ১০০%, লাইভ ক্যাসিনো ১০–২০%, এক্সচেঞ্জ ০%।",
          "- **Max-bet cap।** বোনাস চালু থাকা অবস্থায় বড় বেট বসালে পুরো বোনাস বাতিল।",
          "- **Expiry।** সাধারণত ৭–৩০ দিন।",
          "বিস্তারিত: [Welcome Bonus](/welcome-bonus)।",
          "## KYC আগেই সেরে ফেলুন",
          "প্রথম উইথড্রয়ালে KYC আসবেই। সাইনআপের সময়ই ID ও ঠিকানার প্রমাণ আপলোড করলে এক দিনের দেরি বাঁচে। [Verification গাইড](/verification)।",
          "## নিরাপদ প্রথম ডিপোজিট",
          "- নিজের নামের ওয়ালেট ব্যবহার করুন — থার্ড-পার্টি ডিপোজিট KYC-তে সবচেয়ে বেশি আটকায়।",
          "- TxID স্ক্রিনশট রাখুন।",
          "- ছোট অ্যামাউন্ট (৫০০ BDT) দিয়ে টেস্ট করুন।",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় অ্যাফিলিয়েট। জুয়ায় ঝুঁকি আছে; ডিপোজিট লিমিট ও [self-exclusion](/how-to-delete-jeetbuzz-account) সবসময় সহজলভ্য।",
          "## সাইন-আপ বোনাস সহজ ভাষায়",
          "**JeetBuzz সাইন-আপ বোনাস** (নতুন-অ্যাকাউন্ট বোনাস) হলো আপনার প্রথম ডিপোজিটে শতাংশ ম্যাচ — রেজিস্ট্রেশনের সময় opt-in টিক দিলে কয়েক মিনিটে ক্রেডিট। ব্যানার অফার সাধারণত ক্যাপ পর্যন্ত ১০০%–২০০%। এটা ফ্রি ক্যাশ নয় — উইথড্র করার আগে সাধারণত ১৫× ওয়েজারিং শেষ করতে হবে। বিস্তারিত: [Welcome Bonus](/welcome-bonus) এবং [First Deposit Bonus](/jeetbuzz-first-deposit-bonus)।",
          "## প্রোমো কোড কোথায় দিতে হয়?",
          "রেজিস্ট্রেশন ফর্মের Currency-র নিচে **Promo Code** ঘরে। *Create Account* ক্লিক করার আগে আজকের কোড পেস্ট করুন — অ্যাকাউন্ট তৈরি হয়ে গেলে সিস্টেম কোড নেবে না। সর্বশেষ কোড: [JeetBuzz Promo Code](/jeetbuzz-promo-code)।",
          "## সাইন-আপের পর প্রথম ৩০ মিনিট",
          "১. **Account → Verification** থেকে সঙ্গে সঙ্গে KYC আপলোড করুন (NID + ঠিকানার প্রমাণ)।",
          "২. **Security**-এ 2FA চালু করুন — SMS বা authenticator, দুটোই ফ্রি।",
          "৩. নিজের নামের bKash/Nagad থেকে ন্যূনতম যোগ্য পরিমাণ (৫০০৳) ডিপোজিট করুন।",
          "৪. একটি ছোট যোগ্য বেট বসান যাতে বোনাস কাউন্টার চালু হয়।",
          "৫. [Help](/help) ও [Payments](/payments) হাব বুকমার্ক করুন।",
          "## সাইন-আপ সমস্যার তাৎক্ষণিক সমাধান",
          "- **OTP আসছে না** ৬০ সেকেন্ডে → [OTP Not Received](/jeetbuzz-otp-not-received)।",
          "- **\"ফোন ইতিমধ্যে রেজিস্টার্ড\"** → নম্বর একটি সুপ্ত অ্যাকাউন্টে বাঁধা; [Password Reset](/jeetbuzz-password-reset) ব্যবহার করুন।",
          "- **\"Invalid promo code\"** → কোড মেয়াদোত্তীর্ণ; [Promo Code](/jeetbuzz-promo-code) থেকে নতুন কপি করুন।",
          "- **KYC রিজেক্ট** → ভুল নামের বানান, ঝাপসা ছবি বা মেয়াদোত্তীর্ণ ID। ঠিক করে [Account Verification](/jeetbuzz-account-verification) থেকে পুনরায় আপলোড।",
        ],
      }}
      related={HUBS}
      faqs={[
        { q: "How long does JeetBuzz signup take?", a: "Under three minutes if you have your phone, email and payment wallet ready. KYC is separate and takes another 5–10 minutes if you do it at signup rather than at first withdrawal." },
        { q: "Can I sign up without a phone number?", a: "No. The phone number is the primary account identifier used for OTP login, password reset and 2FA. Email-only signup is not offered." },
        { q: "Can I change my currency later?", a: "No. Currency is fixed at signup. To switch you would need to close the account and open a new one under different KYC — not recommended and usually flagged as multi-accounting." },
        { q: "What if I miss the welcome bonus opt-in?", a: "Support cannot back-apply it. Your fallback is the [First Deposit Bonus](/jeetbuzz-first-deposit-bonus) or a rotating [Promo Code](/jeetbuzz-promo-code)." },
        { q: "Is one account per phone number strictly enforced?", a: "Yes. Multi-accounting under the same KYC is grounds for suspension of all linked accounts and forfeit of balance. Household members should each sign up under their own name." },
        { q: "How big is the JeetBuzz new-account sign-up bonus?", a: "Typically a 100%–200% match on your first deposit up to a cap, credited when you tick the opt-in during registration. The exact percentage rotates — check the Promotions tab immediately after signup for the currently active offer." },
        { q: "Where do I enter the JeetBuzz sign-up promo code?", a: "In the Promo Code field on the registration form, directly under Currency. Paste today's code before you tap Create Account — the system will not accept a code once the account exists." },
        { q: "Is there a JeetBuzz sign-up bonus for existing players?", a: "No. The sign-up bonus is one-time per KYC. Existing players use reload bonuses, cashback and the rotating [Promo Code](/jeetbuzz-promo-code)." },
        { q: "Can I sign up on the JeetBuzz app instead of the website?", a: "Yes. The Android APK and iOS web app carry the same signup form. On Android the OTP autofills, so it is often faster — download from [JeetBuzz APK Download](/download)." },
        { q: "Do I need to deposit to complete JeetBuzz sign up?", a: "No. Signup is free. A deposit is only required to place real bets or claim the first-deposit-based sign-up bonus. You can still browse markets and use free-play slot demos with zero balance." },
        { q: "How do I sign up if I already have a JeetBuzz partner account?", a: "Player and partner are separate systems. Use your existing partner credentials at [Partner Login](/jeetbuzz-partner-login); for player betting, register a fresh account with a different phone number and email." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "সাইনআপে কত সময় লাগে?", a: "ফোন, ইমেইল ও পেমেন্ট ওয়ালেট প্রস্তুত থাকলে ৩ মিনিটেরও কম। KYC আরও ৫–১০ মিনিট।" },
          { q: "ফোন নম্বর ছাড়া সাইনআপ?", a: "না। ফোন নম্বর মূল আইডেন্টিফায়ার — OTP লগইন, পাসওয়ার্ড রিসেট, 2FA-এর জন্য দরকার।" },
          { q: "পরে মুদ্রা বদলানো যাবে?", a: "না। মুদ্রা সাইনআপে স্থায়ী। বদলাতে হলে অ্যাকাউন্ট বন্ধ করে নতুন KYC-তে খুলতে হবে (multi-accounting হিসেবে ফ্ল্যাগ হতে পারে)।" },
          { q: "ওয়েলকাম বোনাস opt-in মিস করলে?", a: "সাপোর্ট পরে দিতে পারবে না। বিকল্প: [First Deposit Bonus](/jeetbuzz-first-deposit-bonus) বা রোটেটিং [Promo Code](/jeetbuzz-promo-code)।" },
          { q: "এক ফোনে একাধিক অ্যাকাউন্ট?", a: "না। এক KYC-তে একাধিক অ্যাকাউন্ট suspension এবং ব্যালেন্স ফরফিটের কারণ। পরিবারের প্রত্যেকে নিজের নামে খুলুন।" },
          { q: "JeetBuzz সাইন-আপ বোনাস কত বড়?", a: "সাধারণত প্রথম ডিপোজিটে ক্যাপ পর্যন্ত ১০০%–২০০% ম্যাচ — রেজিস্ট্রেশনে opt-in টিক দিলে ক্রেডিট হয়। সঠিক শতাংশ রোটেট করে; সাইনআপের পর Promotions ট্যাব দেখুন।" },
          { q: "প্রোমো কোড কোথায় দিতে হয়?", a: "রেজিস্ট্রেশন ফর্মের Currency-র নিচে Promo Code ঘরে। Create Account চাপার আগে দিতে হবে — পরে সিস্টেম নেবে না।" },
          { q: "পুরনো প্লেয়ারের জন্য সাইন-আপ বোনাস আছে?", a: "না। সাইন-আপ বোনাস প্রতি KYC-তে একবার। পুরনো প্লেয়ার রিলোড বোনাস, ক্যাশব্যাক ও রোটেটিং [Promo Code](/jeetbuzz-promo-code) ব্যবহার করেন।" },
          { q: "অ্যাপ থেকে সাইনআপ করা যায়?", a: "হ্যাঁ। Android APK ও iOS ওয়েব অ্যাপে একই সাইনআপ ফর্ম। Android-এ OTP অটো-ফিল হয়, তাই প্রায়ই দ্রুত — [JeetBuzz APK Download](/download)।" },
          { q: "সাইনআপ সম্পূর্ণ করতে ডিপোজিট বাধ্যতামূলক?", a: "না। সাইনআপ ফ্রি। রিয়েল বেট বা ফার্স্ট-ডিপোজিট বোনাসের জন্যই ডিপোজিট লাগে।" },
          { q: "পার্টনার অ্যাকাউন্ট থাকলে?", a: "প্লেয়ার ও পার্টনার আলাদা সিস্টেম। পার্টনারের জন্য [Partner Login](/jeetbuzz-partner-login); বেটিংয়ের জন্য ভিন্ন ফোন ও ইমেইলে নতুন অ্যাকাউন্ট।" },
        ],
      }}
    />
  ),
});