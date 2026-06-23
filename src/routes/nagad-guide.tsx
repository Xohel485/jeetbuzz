import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/nagad-guide";
const TITLE =
  "JeetBuzz Nagad Deposit & Withdrawal Guide Bangladesh 2026 - Step by Step";
const DESC =
  "Step-by-step JeetBuzz Nagad deposit and withdrawal guide for Bangladesh 2026 — Send Money flow, minimums, fees, processing times and fixes for failed Nagad transfers.";

export const Route = createFileRoute("/nagad-guide")({
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
      eyebrow="Nagad"
      title={<>JeetBuzz <span className="gold-text">Nagad</span> Guide</>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">Nagad</span> গাইড</>,
      }}
      subtitle="Nagad is the second most popular wallet on JeetBuzz Bangladesh. Here is how to deposit, withdraw, and avoid the common mistakes."
      subtitleByLocale={{
        bn: "Nagad জিতবাজ বাংলাদেশের দ্বিতীয় সবচেয়ে জনপ্রিয় ওয়ালেট। কীভাবে ডিপোজিট, উইথড্র এবং সাধারণ ভুল এড়াবেন — এখানে দেখুন।",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "Nagad", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why Nagad is a top-tier JeetBuzz Bangladesh option",
        "Nagad is the state-owned mobile financial service operated under Bangladesh Post Office. It runs a parallel rail to bKash with similar speed, similar fees, and slightly higher daily wallet caps, which makes jeetbuzz nagad deposit popular among regular punters who hit bKash's daily limit.",
        "## jeetbuzz Nagad deposit — full step-by-step",
        "1. Sign in to JeetBuzz (use the [login guide](/login-guide) if you have not registered yet).",
        "2. Open **Cashier > Deposit > Nagad**.",
        "3. Enter the amount — minimum 200 BDT, maximum depends on your VIP tier.",
        "4. Copy the displayed **merchant number** and the unique **reference code** (e.g. JB-N2L7).",
        "5. Open the Nagad app, tap **Send Money**, and paste the merchant number.",
        "6. Enter the exact amount and paste the reference in the **Reference** field. Confirm with your Nagad PIN.",
        "7. The Nagad SMS arrives within seconds with a **TrxID** (e.g. NDB7K4P2). Copy it.",
        "8. Paste the TrxID into the JeetBuzz cashier form and submit. Balance updates within 30–60 seconds.",
        "## Screenshot walkthrough",
        "- **Nagad cashier tile:** orange Nagad logo with the merchant number in a copy-pill and a 15-minute countdown timer.",
        "- **Send Money screen:** standard orange Nagad UI; the Reference field is small and easy to miss — that is where the JeetBuzz code must go.",
        "- **SMS receipt:** \"Pay Tk X successful. TrxID: NDB7K4P2. Balance: Tk Y.\" Only the TrxID goes into JeetBuzz.",
        "## jeetbuzz Nagad withdrawal",
        "1. Open **Cashier > Withdraw > Nagad**.",
        "2. Enter the BDT amount (minimum 500 BDT).",
        "3. Enter the Nagad number you deposited from. Name must match your JeetBuzz profile.",
        "4. Submit. You receive a Nagad Cash-In SMS when the funds arrive (usually 5–30 minutes, up to 1 hour on weekends).",
        "## Nagad limits, fees and timing",
        "| Action | Minimum | Default Max / Day | Time | JeetBuzz Fee |",
        "|---|---|---|---|---|",
        "| Deposit | 200 BDT | 75,000 BDT | Instant | 0% |",
        "| Withdrawal (Bronze) | 500 BDT | 30,000 BDT | 5–30 min | 0% |",
        "| Withdrawal (Silver) | 500 BDT | 150,000 BDT | 5–30 min | 0% |",
        "| Withdrawal (Gold+) | 500 BDT | 500,000 BDT | 5–30 min | 0% |",
        "Nagad's own send-money fee (typically 4 BDT per 1,000 BDT) applies on your side; merchant transfers are usually fee-free.",
        "## Troubleshooting",
        "- Wrong amount: even a 1 BDT mismatch delays credit",
        "- Wrong reference code — include the unique JeetBuzz code exactly",
        "- Do **not** use Nagad Cash Out — that menu is for cash-pickup at agents, not merchant deposits",
        "- KYC must be complete (Nagad NID verification) before your first jeetbuzz withdrawal bangladesh",
        "## Related guides",
        "Pair this with the [Deposit Guide](/deposit-guide), [Withdrawal Guide](/withdrawal-guide), [bKash Guide](/bkash-guide), [Rocket Guide](/rocket-guide), [APK Download](/apk-download-guide) and [Welcome Bonus](/welcome-bonus).",
      ]}
      bodyByLocale={{
        bn: [
          "## কেন Nagad",
          "Nagad বাংলাদেশ ডাক বিভাগের মালিকানাধীন, দেশের অন্যতম বৃহৎ মোবাইল ফিনান্সিয়াল সার্ভিস। অধিকাংশ জিতবাজ প্লেয়ারের জন্য bKash-এর সমপরিমাণ কভারেজ।",
          "## Nagad দিয়ে ডিপোজিট",
          "১. জিতবাজে লগইন করে Cashier > Deposit > Nagad বেছে নিন।",
          "২. পরিমাণ লিখুন, মার্চেন্ট নম্বর ও রেফারেন্স টুকে রাখুন।",
          "৩. Nagad অ্যাপে Send Money বেছে নিয়ে ওই মার্চেন্ট নম্বরে পাঠান।",
          "৪. সঠিক পরিমাণে, কমেন্ট ফিল্ডে রেফারেন্স দিয়ে পাঠান।",
          "৫. TrxID জিতবাজে পেস্ট করুন।",
          "## উইথড্রয়াল",
          "যেই Nagad ওয়ালেট থেকে ডিপোজিট করেছেন সেই ওয়ালেটেই উইথড্র করুন। প্রথমবার উইথড্রের আগে KYC সম্পন্ন থাকতে হবে।",
          "## প্রসেসিং সময়",
          "ডিপোজিট সাধারণত কয়েক সেকেন্ডে জমা হয়। উইথড্রয়াল সাধারণত এক ঘণ্টার মধ্যে।",
          "## ফি",
          "জিতবাজ Nagad-এ ফি নেয় না। Nagad-এর নিজস্ব Send Money ফি প্রযোজ্য।",
          "## সমস্যা সমাধান",
          "- ভুল পরিমাণ: ১ টাকার পার্থক্যও দেরি করাতে পারে",
          "- ভুল রেফারেন্স: ইউনিক কোডটি হুবহু লিখুন",
          "- Cash Out মেনু ব্যবহার করবেন না — এটি এজেন্টের জন্য, মার্চেন্টের জন্য নয়",
        ],
      }}
      faqs={[
        { q: "Is Nagad faster than bKash on JeetBuzz?", a: "Both are usually instant. Differences are minutes, not hours." },
        { q: "Can I deposit with Nagad and withdraw to bKash?", a: "Usually no — JeetBuzz prefers the same wallet for deposit and withdrawal." },
        { q: "What if I send the wrong amount?", a: "Open live chat with the TrxID; many cases can still be credited." },
        { q: "Is there a minimum?", a: "Typically 200–500 BDT — confirm in the cashier." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Nagad কি bKash এর চেয়ে দ্রুত?", a: "দুটোই সাধারণত ইনস্ট্যান্ট। পার্থক্য মিনিটের, ঘণ্টার নয়।" },
          { q: "Nagad দিয়ে ডিপোজিট করে bKash এ উইথড্র করা যায়?", a: "সাধারণত না — জিতবাজ ডিপোজিট ও উইথড্রয়ালে একই ওয়ালেট পছন্দ করে।" },
          { q: "ভুল পরিমাণ পাঠালে কী হবে?", a: "TrxID নিয়ে লাইভ চ্যাটে যান; অনেক ক্ষেত্রে এখনও জমা করা যায়।" },
          { q: "সর্বনিম্ন কত?", a: "সাধারণত ২০০–৫০০ টাকা — ক্যাশিয়ারে নিশ্চিত হয়ে নিন।" },
        ],
      }}
      related={[
        { to: "/bkash-guide", title: "bKash on JeetBuzz" },
        { to: "/rocket-guide", title: "Rocket on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
      ]}
    />
  ),
});