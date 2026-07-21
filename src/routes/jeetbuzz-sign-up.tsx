import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { HUBS } from "@/lib/clusters";

const PATH = "/jeetbuzz-sign-up";
const TITLE = "JeetBuzz Sign Up 2026 — 3-Minute Registration, Bonus & Verification";
const DESC = "JeetBuzz sign up walkthrough for 2026 — phone or email registration in three minutes, welcome bonus opt-in, KYC and safe first-deposit tips.";

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
      subtitle="Three-minute signup, welcome-bonus opt-in and the exact fields KYC will ask for later — set up your account once and avoid rework."
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
        ],
      }}
      related={HUBS}
      faqs={[
        { q: "How long does JeetBuzz signup take?", a: "Under three minutes if you have your phone, email and payment wallet ready. KYC is separate and takes another 5–10 minutes if you do it at signup rather than at first withdrawal." },
        { q: "Can I sign up without a phone number?", a: "No. The phone number is the primary account identifier used for OTP login, password reset and 2FA. Email-only signup is not offered." },
        { q: "Can I change my currency later?", a: "No. Currency is fixed at signup. To switch you would need to close the account and open a new one under different KYC — not recommended and usually flagged as multi-accounting." },
        { q: "What if I miss the welcome bonus opt-in?", a: "Support cannot back-apply it. Your fallback is the [First Deposit Bonus](/jeetbuzz-first-deposit-bonus) or a rotating [Promo Code](/jeetbuzz-promo-code)." },
        { q: "Is one account per phone number strictly enforced?", a: "Yes. Multi-accounting under the same KYC is grounds for suspension of all linked accounts and forfeit of balance. Household members should each sign up under their own name." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "সাইনআপে কত সময় লাগে?", a: "ফোন, ইমেইল ও পেমেন্ট ওয়ালেট প্রস্তুত থাকলে ৩ মিনিটেরও কম। KYC আরও ৫–১০ মিনিট।" },
          { q: "ফোন নম্বর ছাড়া সাইনআপ?", a: "না। ফোন নম্বর মূল আইডেন্টিফায়ার — OTP লগইন, পাসওয়ার্ড রিসেট, 2FA-এর জন্য দরকার।" },
          { q: "পরে মুদ্রা বদলানো যাবে?", a: "না। মুদ্রা সাইনআপে স্থায়ী। বদলাতে হলে অ্যাকাউন্ট বন্ধ করে নতুন KYC-তে খুলতে হবে (multi-accounting হিসেবে ফ্ল্যাগ হতে পারে)।" },
          { q: "ওয়েলকাম বোনাস opt-in মিস করলে?", a: "সাপোর্ট পরে দিতে পারবে না। বিকল্প: [First Deposit Bonus](/jeetbuzz-first-deposit-bonus) বা রোটেটিং [Promo Code](/jeetbuzz-promo-code)।" },
          { q: "এক ফোনে একাধিক অ্যাকাউন্ট?", a: "না। এক KYC-তে একাধিক অ্যাকাউন্ট suspension এবং ব্যালেন্স ফরফিটের কারণ। পরিবারের প্রত্যেকে নিজের নামে খুলুন।" },
        ],
      }}
    />
  ),
});