import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/bkash-guide";
const TITLE = "JeetBuzz bKash Guide — Deposits & Withdrawals from Bangladesh";
const DESC =
  "How to deposit and withdraw on JeetBuzz with bKash — step-by-step, minimums, fees, processing times and fixes for failed transactions.";

export const Route = createFileRoute("/bkash-guide")({
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
      eyebrow="bKash"
      title={<>JeetBuzz <span className="gold-text">bKash</span> Guide</>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">bKash</span> গাইড</>,
      }}
      subtitle="Bangladesh's most popular wallet, on Bangladesh's most active sportsbook — deposits, withdrawals, common errors and pro tips."
      subtitleByLocale={{
        bn: "বাংলাদেশের সবচেয়ে জনপ্রিয় ওয়ালেট জিতবাজে — ডিপোজিট, উইথড্রয়াল, সাধারণ ভুল এবং প্রো টিপস।",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "bKash", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## কেন bKash",
        "bKash বাংলাদেশে সবচেয়ে বেশি ব্যবহৃত মোবাইল ওয়ালেট, তাই JeetBuzz প্লেয়ারদের প্রথম পছন্দ। ডিপোজিট সাধারণত ইনস্ট্যান্ট, এবং উইথড্রয়াল কয়েক ঘণ্টার মধ্যে।",
        "## bKash deposit — step by step",
        "1. Log in to JeetBuzz and open Cashier > Deposit > bKash.",
        "2. Enter the deposit amount (typically minimum 200–500 BDT).",
        "3. Note the merchant number and unique reference shown on screen.",
        "4. Open the bKash app, choose Send Money, send to that merchant number with the reference in the note.",
        "5. Copy the bKash TrxID from your SMS.",
        "6. Paste the TrxID into the JeetBuzz form and submit.",
        "## bKash withdrawal",
        "Withdraw to the same bKash number used for deposit. The wallet name must match your JeetBuzz account name.",
        "## Limits and fees",
        "JeetBuzz does not charge for bKash deposits. bKash's own send-money fee may apply.",
        "## Common mistakes",
        "- Wrong TrxID pasted",
        "- Sent via Mobile Recharge or Make Payment instead of Send Money",
        "- Sent without the unique reference",
        "- Using a different person's bKash number",
        "## Pro tip",
        "Screenshot the merchant page BEFORE leaving JeetBuzz and the bKash SMS AFTER sending. Both make support tickets faster.",
      ]}
      bodyByLocale={{
        bn: [
          "## কেন bKash",
          "bKash বাংলাদেশে সবচেয়ে বেশি ব্যবহৃত মোবাইল ওয়ালেট, তাই জিতবাজ প্লেয়ারদের প্রথম পছন্দ। ডিপোজিট সাধারণত ইনস্ট্যান্ট, উইথড্রয়াল কয়েক ঘণ্টায়।",
          "## bKash ডিপোজিট — ধাপে ধাপে",
          "১. জিতবাজে লগইন করে Cashier > Deposit > bKash এ যান।",
          "২. পরিমাণ লিখুন (সাধারণত সর্বনিম্ন ২০০–৫০০ টাকা)।",
          "৩. স্ক্রিনে দেখানো মার্চেন্ট নম্বর এবং ইউনিক রেফারেন্স টুকে রাখুন।",
          "৪. bKash অ্যাপ খুলুন, Send Money বেছে নিন, ওই মার্চেন্ট নম্বরে রেফারেন্স note-এ দিয়ে পাঠান।",
          "৫. SMS থেকে bKash TrxID কপি করুন।",
          "৬. জিতবাজ ফর্মে TrxID পেস্ট করে সাবমিট করুন।",
          "## bKash উইথড্রয়াল",
          "যেই bKash নম্বর থেকে ডিপোজিট করেছেন সেই একই নম্বরে উইথড্র করুন। ওয়ালেটের নাম জিতবাজ অ্যাকাউন্টের নামের সাথে মিলতে হবে।",
          "## লিমিট ও ফি",
          "জিতবাজ bKash ডিপোজিটে কোনো ফি নেয় না। তবে bKash-এর নিজস্ব Send Money ফি প্রযোজ্য হতে পারে।",
          "## সাধারণ ভুল",
          "- ভুল TrxID পেস্ট করা",
          "- Send Money এর বদলে Mobile Recharge / Make Payment ব্যবহার",
          "- ইউনিক রেফারেন্স ছাড়া পাঠানো",
          "- অন্যের bKash নম্বর ব্যবহার",
          "## প্রো টিপ",
          "জিতবাজ ছাড়ার আগে মার্চেন্ট পেজের স্ক্রিনশট এবং পাঠানোর পর bKash SMS-এর স্ক্রিনশট রাখুন। সাপোর্ট টিকিট দ্রুত সমাধান হবে।",
        ],
      }}
      faqs={[
        { q: "Why is my bKash deposit not credited?", a: "Most often the TrxID was mistyped or money was sent to a personal number, not the merchant. Open live chat with the SMS screenshot." },
        { q: "Can I use Personal bKash for JeetBuzz?", a: "Yes. JeetBuzz accepts personal bKash wallets — Agent and Merchant accounts may have restrictions." },
        { q: "Are bKash deposits instant?", a: "Almost always — usually within seconds of the TrxID being verified." },
        { q: "What's the bKash withdrawal limit?", a: "Daily and monthly limits depend on your JeetBuzz VIP level." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "আমার bKash ডিপোজিট কেন জমা হলো না?", a: "অধিকাংশ সময় TrxID ভুল টাইপ হয় বা মার্চেন্টের বদলে কোনো পার্সোনাল নম্বরে টাকা গেছে। SMS স্ক্রিনশট নিয়ে লাইভ চ্যাটে যোগাযোগ করুন।" },
          { q: "Personal bKash কি জিতবাজে ব্যবহার করা যায়?", a: "হ্যাঁ। জিতবাজ পার্সোনাল bKash গ্রহণ করে — Agent ও Merchant অ্যাকাউন্টে কিছু সীমাবদ্ধতা থাকতে পারে।" },
          { q: "bKash ডিপোজিট কি তাৎক্ষণিক?", a: "প্রায় সবসময় — TrxID যাচাই হওয়ার কয়েক সেকেন্ডের মধ্যে।" },
          { q: "bKash উইথড্রয়ালের লিমিট কত?", a: "দৈনিক ও মাসিক লিমিট আপনার জিতবাজ VIP লেভেলের উপর নির্ভর করে।" },
        ],
      }}
      related={[
        { to: "/nagad-guide", title: "Nagad on JeetBuzz" },
        { to: "/rocket-guide", title: "Rocket on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
        { to: "/payment-methods", title: "All Payment Methods" },
      ]}
    />
  ),
});