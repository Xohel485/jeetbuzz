import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-withdrawal-time";
const TITLE = "JeetBuzz Withdrawal Time 2026 — Realistic Timing per Payment Method";
const DESC = "How long JeetBuzz withdrawals actually take in 2026 — bKash, Nagad, JazzCash, EasyPaisa, UPI, USDT timing plus what slows the first cash-out down.";

export const Route = createFileRoute("/jeetbuzz-withdrawal-time")({
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
      eyebrow="Support"
      title={<>JeetBuzz <span className="gold-text">Withdrawal Time</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">উইথড্রয়াল সময়</span></> }}
      subtitle="Realistic per-rail withdrawal timing on JeetBuzz — plus the exact reasons a first cash-out takes longer than the second one."
      subtitleByLocale={{ bn: "জিতবাজে প্রতি রেলের বাস্তব উইথড্রয়াল সময় — এবং কেন প্রথম ক্যাশআউট দ্বিতীয়টির চেয়ে বেশি সময় নেয়।" }}
      ctaIntent="login" ctaLabel="Check Withdrawal Status"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Withdrawal Time", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Timing per method",
        "| Method | Typical time after approval | First cash-out (with KYC review) |",
        "|---|---|---|",
        "| bKash | 15–60 min | 3–24 hours |",
        "| Nagad | 15–60 min | 3–24 hours |",
        "| Rocket | 30–90 min | 6–24 hours |",
        "| JazzCash | 30–90 min | 6–24 hours |",
        "| EasyPaisa | 30–90 min | 6–24 hours |",
        "| UPI (BHIM / PhonePe / Paytm) | 15–60 min | 3–24 hours |",
        "| Bank transfer (IMPS) | 1–4 hours | 1–2 business days |",
        "| USDT TRC20 / BEP20 | 10–30 min | 1–6 hours |",
        "*Bank operator batches, blockchain congestion and JeetBuzz internal risk review all add variance.*",
        "## Why the first withdrawal is slower",
        "JeetBuzz manually reviews a player's first cash-out for AML compliance. This review confirms:",
        "- Name on the JeetBuzz account matches the wallet name.",
        "- KYC document is unexpired and matches.",
        "- Deposit source and withdrawal destination make sense (same country, similar name).",
        "- No unusual play pattern (bonus abuse, chip dumping).",
        "Once cleared, all future withdrawals to the same wallet skip most of this review.",
        "## What speeds it up",
        "1. Complete KYC *before* the first winning session.",
        "2. Use the same wallet name that appears on your JeetBuzz account.",
        "3. Deposit and withdraw with the same rail — different rails trigger extra review.",
        "4. Avoid requesting mid-way through a bonus rollover — the request pauses until rollover is resolved.",
        "5. Keep the requested amount below your daily wallet cap to avoid split payouts.",
        "## What slows it down",
        "- Name mismatch (single letter is enough) — reversed and refunded.",
        "- Wallet KYC does not match your JeetBuzz KYC (different DOB / name variant).",
        "- Large amount above wallet daily cap — split into batches.",
        "- Weekend or public holiday — banks in BD/PK/IN batch differently on non-business days.",
        "- Active bonus rollover not yet cleared.",
        "## If your withdrawal is stuck",
        "1. Open your JeetBuzz account → **Transactions**. Note the current status (Pending, Approved, Sent, Failed).",
        "2. If Approved and past the typical timing above, open live chat with the transaction ID.",
        "3. If Failed, the funds return to your JeetBuzz balance automatically — re-request with a checked wallet destination.",
        "See [Deposit Problem](/jeetbuzz-deposit-problem) for the mirror-image issue on the incoming side.",
      ]}
      bodyByLocale={{
        bn: [
          "## প্রতি মেথডে সময়",
          "| মেথড | অনুমোদনের পর সাধারণ সময় | প্রথম ক্যাশআউট (KYC রিভিউ সহ) |",
          "|---|---|---|",
          "| bKash | ১৫–৬০ মিনিট | ৩–২৪ ঘণ্টা |",
          "| Nagad | ১৫–৬০ মিনিট | ৩–২৪ ঘণ্টা |",
          "| Rocket | ৩০–৯০ মিনিট | ৬–২৪ ঘণ্টা |",
          "| Bank transfer | ১–৪ ঘণ্টা | ১–২ কর্মদিবস |",
          "| USDT TRC20/BEP20 | ১০–৩০ মিনিট | ১–৬ ঘণ্টা |",
          "*ব্যাংক অপারেটর ব্যাচ, ব্লকচেইন কনজেশন এবং JeetBuzz অভ্যন্তরীণ রিস্ক রিভিউ — সব কিছু সময়ের তারতম্য আনে।*",
          "## প্রথম উইথড্রয়াল কেন ধীর",
          "JeetBuzz প্লেয়ারের প্রথম ক্যাশআউট AML কমপ্লায়েন্সের জন্য ম্যানুয়ালি রিভিউ করে। এই রিভিউতে নিশ্চিত করা হয়:",
          "- JeetBuzz অ্যাকাউন্টের নাম ওয়ালেটের নামের সাথে মিলে।",
          "- KYC ডকুমেন্ট মেয়াদোত্তীর্ণ নয় এবং মিলে।",
          "- ডিপোজিট উৎস ও উইথড্রয়াল গন্তব্য যৌক্তিক (একই দেশ, একই ধরনের নাম)।",
          "- অস্বাভাবিক প্লে প্যাটার্ন নেই।",
          "একবার ক্লিয়ার হলে একই ওয়ালেটে ভবিষ্যৎ সব উইথড্রয়াল এই রিভিউর বেশিরভাগ এড়িয়ে যায়।",
          "## কী দ্রুত করে",
          "১. প্রথম বিজয়ী সেশনের *আগে* KYC সম্পন্ন করুন।",
          "২. JeetBuzz অ্যাকাউন্টে থাকা নামের সাথে একই ওয়ালেট নাম ব্যবহার করুন।",
          "৩. একই রেলে ডিপোজিট ও উইথড্র করুন — ভিন্ন রেল অতিরিক্ত রিভিউ ট্রিগার করে।",
          "৪. বোনাস রোলওভারের মাঝে রিকোয়েস্ট এড়ান — রোলওভার শেষ না হওয়া পর্যন্ত রিকোয়েস্ট থেমে থাকে।",
          "৫. ডেইলি ওয়ালেট ক্যাপের নিচে পরিমাণ রাখুন যাতে স্প্লিট পেআউট এড়ানো যায়।",
          "## কী ধীর করে",
          "- নাম মিসম্যাচ (একটি অক্ষরও যথেষ্ট) — রিভার্স ও রিফান্ড।",
          "- ওয়ালেট KYC আপনার JeetBuzz KYC-এর সাথে মিলে না।",
          "- ওয়ালেট ডেইলি ক্যাপের উপরে বড় পরিমাণ — ব্যাচে বিভক্ত।",
          "- সপ্তাহান্ত বা সরকারি ছুটি — অ-কর্মদিবসে ব্যাংক ব্যাচ ভিন্নভাবে।",
          "- সক্রিয় বোনাস রোলওভার এখনো ক্লিয়ার হয়নি।",
          "## উইথড্রয়াল আটকে গেলে",
          "১. JeetBuzz অ্যাকাউন্ট → **Transactions** খুলুন। বর্তমান স্ট্যাটাস দেখুন (Pending, Approved, Sent, Failed)।",
          "২. Approved হলেও উপরের সাধারণ সময় পার হয়ে গেলে ট্রানজেকশন ID সহ লাইভ চ্যাট খুলুন।",
          "৩. Failed হলে ফান্ড স্বয়ংক্রিয়ভাবে JeetBuzz ব্যালেন্সে ফিরে আসে — চেক করা ওয়ালেট গন্তব্য দিয়ে পুনরায় রিকোয়েস্ট করুন।",
          "ইনকামিং দিকে সমরূপ সমস্যার জন্য [Deposit Problem](/jeetbuzz-deposit-problem) দেখুন।",
        ],
      }}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "How long does a JeetBuzz withdrawal take?", a: "Local wallets (bKash, Nagad, UPI) usually 15–60 minutes after approval. First cash-out includes a KYC review and can take 3–24 hours. USDT is often the fastest for large amounts." },
        { q: "Why is my withdrawal still pending after 24 hours?", a: "The most common reasons are a name mismatch between your account and wallet, incomplete KYC, or an unresolved bonus rollover. Open live chat with your transaction ID." },
        { q: "Can I withdraw on weekends?", a: "Yes for wallets and USDT. Bank transfers (IMPS) may batch slower on Sundays and public holidays." },
        { q: "Are there fees on withdrawal?", a: "JeetBuzz displays any fee before you confirm. Wallet and blockchain fees are set by the provider — TRC20 USDT has the lowest network fee at the time of writing." },
        { q: "What's the minimum withdrawal?", a: "Typically 500 BDT / 500 PKR / ₹500 for local wallets and 20 USDT for crypto. Exact minimums appear in the cashier before you confirm." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "জিতবাজ উইথড্রয়ালে কত সময় লাগে?", a: "লোকাল ওয়ালেট (bKash, Nagad) অনুমোদনের পর সাধারণত ১৫–৬০ মিনিট। প্রথম ক্যাশআউটে KYC রিভিউ থাকে এবং ৩–২৪ ঘণ্টা নিতে পারে। বড় পরিমাণে USDT প্রায়ই দ্রুততম।" },
          { q: "২৪ ঘণ্টা পরও উইথড্রয়াল পেন্ডিং কেন?", a: "সবচেয়ে সাধারণ কারণ অ্যাকাউন্ট ও ওয়ালেটের নাম মিসম্যাচ, অসম্পূর্ণ KYC বা অমীমাংসিত বোনাস রোলওভার। ট্রানজেকশন ID সহ লাইভ চ্যাট খুলুন।" },
          { q: "সপ্তাহান্তে উইথড্র করা যায়?", a: "ওয়ালেট ও USDT-এর জন্য হ্যাঁ। ব্যাংক ট্রান্সফার রবিবার ও সরকারি ছুটিতে ধীর ব্যাচে হতে পারে।" },
          { q: "উইথড্রয়ালে ফি আছে?", a: "নিশ্চিত করার আগে JeetBuzz যেকোনো ফি প্রদর্শন করে। ওয়ালেট ও ব্লকচেইন ফি প্রদানকারীর নির্ধারিত — লেখার সময় TRC20 USDT-র নেটওয়ার্ক ফি সর্বনিম্ন।" },
          { q: "ন্যূনতম উইথড্রয়াল কত?", a: "লোকাল ওয়ালেটের জন্য সাধারণত ৫০০ BDT এবং ক্রিপ্টোর জন্য ২০ USDT। নিশ্চিত করার আগে ক্যাশিয়ারে সঠিক ন্যূনতম দেখানো হয়।" },
        ],
      }}
    />
  ),
});