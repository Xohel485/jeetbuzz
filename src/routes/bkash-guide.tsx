import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/bkash-guide";
const TITLE =
  "JeetBuzz bKash Deposit & Withdrawal Guide Bangladesh 2026 - Step by Step";
const DESC =
  "Step-by-step JeetBuzz bKash deposit and withdrawal guide for Bangladesh 2026 — Send Money flow, minimums, fees, processing times and fixes for failed transactions.";

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
        "## Why bKash is the #1 choice on JeetBuzz Bangladesh",
        "bKash is the most widely used mobile financial service in Bangladesh with 70M+ verified wallets, so jeetbuzz bkash deposit is the default for most Bangladeshi players. Deposits credit instantly in 95% of cases, and bkash withdrawal from jeetbuzz typically completes within 5–30 minutes during peak hours.",
        "## jeetbuzz bkash deposit — full step-by-step",
        "1. Open JeetBuzz via the [official login](/login-guide) and sign in.",
        "2. From the top bar tap **Cashier**, then choose **Deposit**, then **bKash**.",
        "3. Enter the amount you want to deposit. The minimum is 200 BDT (the screen will show the live cap).",
        "4. The cashier displays a **merchant number** (an 11-digit bKash personal/merchant number) and a **unique reference code** (looks like JB-9X3K). Keep this screen open.",
        "5. On your phone, open the bKash app and tap **Send Money** (NOT Mobile Recharge, NOT Make Payment).",
        "6. Paste the merchant number, enter the exact amount, and paste the reference code in the **Reference** field.",
        "7. Confirm with your bKash PIN. The bKash SMS arrives within seconds with a **TrxID** like 8K4P7Q2R.",
        "8. Copy that TrxID, return to the JeetBuzz cashier tab, paste it into the form, and tap **Submit**.",
        "9. The balance updates within 30–60 seconds. If it does not, screenshot the SMS and open live chat.",
        "## Screenshot walkthrough (what each screen looks like)",
        "- **Cashier screen:** dark JeetBuzz background, three large payment tiles — bKash on the left, Nagad center, Rocket right. The merchant number sits in a copy-button pill, with a yellow countdown timer that expires in 15 minutes.",
        "- **bKash Send Money screen:** the standard pink-and-white bKash form with three fields (Receiver number, Amount, Reference). The reference field is where most failed deposits go wrong — it must contain the JeetBuzz code, nothing else.",
        "- **bKash SMS:** \"You have sent Tk X to 017XXXXXXXX. TrxID: 8K4P7Q2R. Reference: JB-9X3K.\" Only the TrxID goes into JeetBuzz.",
        "## jeetbuzz bkash withdrawal — step by step",
        "1. Open **Cashier > Withdraw > bKash**.",
        "2. Enter the BDT amount you want to cash out (minimum 500 BDT, maximum depends on VIP tier).",
        "3. Enter the bKash number you deposited from — it must match. JeetBuzz blocks third-party withdrawals.",
        "4. Submit and wait 5–30 minutes. You receive a bKash \"Cash In\" SMS when it clears.",
        "## bKash limits, fees and processing time",
        "| Action | Minimum | Default Max / Day | Time | JeetBuzz Fee |",
        "|---|---|---|---|---|",
        "| Deposit | 200 BDT | 50,000 BDT | Instant | 0% |",
        "| Withdrawal (Bronze) | 500 BDT | 25,000 BDT | 5–30 min | 0% |",
        "| Withdrawal (Silver) | 500 BDT | 100,000 BDT | 5–30 min | 0% |",
        "| Withdrawal (Gold+) | 500 BDT | 500,000 BDT | 5–30 min | 0% |",
        "bKash's own Send Money fee (currently 5 BDT per 1,000 BDT) applies on your side for personal-to-personal transfers; merchant deposits are usually fee-free.",
        "## Common mistakes that delay your deposit",
        "- Wrong TrxID pasted — double-check the last 4 characters",
        "- Sent via Mobile Recharge or Make Payment instead of Send Money",
        "- Sent without the unique reference code",
        "- Using a different person's bKash number (name must match your JeetBuzz profile)",
        "- Amount rounded differently — 500.50 vs 500 will fail",
        "## Pro tip",
        "Screenshot the cashier merchant page **before** leaving JeetBuzz and the bKash SMS **after** sending. Both make support tickets resolve in minutes instead of hours.",
        "## Related guides",
        "Read the full [Deposit Guide](/deposit-guide), [Withdrawal Guide](/withdrawal-guide), [Registration Guide](/registration-guide), [APK Download Guide](/apk-download-guide) and [Welcome Bonus](/welcome-bonus) before your first jeetbuzz bkash deposit bangladesh.",
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