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
        "## Why Nagad",
        "Nagad is owned by Bangladesh Post Office and is one of the largest mobile financial services in the country. Coverage matches bKash for most JeetBuzz players.",
        "## How to deposit with Nagad",
        "1. Log in to JeetBuzz and choose Cashier > Deposit > Nagad.",
        "2. Enter your amount and note the merchant number plus reference.",
        "3. In the Nagad app pick Send Money to that merchant number.",
        "4. Send the exact amount with the reference in the comment field.",
        "5. Paste the TrxID back to JeetBuzz.",
        "## Withdrawals",
        "Cash-out to the Nagad wallet you deposited from. KYC must be complete for first withdrawal.",
        "## Processing times",
        "Deposits typically credit in seconds. Withdrawals usually clear within an hour.",
        "## Fees",
        "JeetBuzz does not charge for Nagad. Standard Nagad send-money fees apply on your side.",
        "## Troubleshooting",
        "- Wrong amount: even a 1 BDT mismatch can delay credit",
        "- Wrong reference: include the unique code exactly",
        "- Don't use Cash Out menu — it is for agents, not merchants",
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