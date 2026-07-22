import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/nagad-guide";
const TITLE =
  "JeetBuzz Nagad Deposit & Withdrawal Guide Bangladesh 2026 - Step by Step";
const DESC =
  "Step-by-step JeetBuzz Nagad deposit and withdrawal guide for Bangladesh 2026. Send Money flow, minimums, fees, processing times and fixes for failed Nagad transfers.";

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
        bn: "Nagad জিতবাজ বাংলাদেশের দ্বিতীয় সবচেয়ে জনপ্রিয় ওয়ালেট। কীভাবে ডিপোজিট, উইথড্র এবং সাধারণ ভুল এড়াবেন, এখানে দেখুন।",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "Nagad", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "> **Quick summary:** jeetbuzz Nagad deposit is the best bKash backup. Cashier > Deposit > Nagad, use Send Money (never Cash Out), paste the JeetBuzz reference, then submit the Nagad TrxID. 200 BDT minimum, 75,000 BDT daily cap, withdrawals in 5–30 minutes to the same Nagad wallet after KYC.",
        "## Why Nagad is a top-tier JeetBuzz Bangladesh option",
        "Nagad is the state-owned mobile financial service operated under Bangladesh Post Office. It runs a parallel rail to bKash with similar speed, similar fees, and slightly higher daily wallet caps, which makes jeetbuzz nagad deposit popular among regular punters who hit bKash's daily limit.",
        "## jeetbuzz Nagad deposit, full step-by-step",
        "1. Sign in to JeetBuzz (use the [login guide](/login-guide) if you have not registered yet).",
        "2. Open **Cashier > Deposit > Nagad**.",
        "3. Enter the amount, minimum 200 BDT, maximum depends on your VIP tier.",
        "4. Copy the displayed **merchant number** and the unique **reference code** (e.g. JB-N2L7).",
        "5. Open the Nagad app, tap **Send Money**, and paste the merchant number.",
        "6. Enter the exact amount and paste the reference in the **Reference** field. Confirm with your Nagad PIN.",
        "7. The Nagad SMS arrives within seconds with a **TrxID** (e.g. NDB7K4P2). Copy it.",
        "8. Paste the TrxID into the JeetBuzz cashier form and submit. Balance updates within 30–60 seconds.",
        "## Screenshot walkthrough",
        "- **Nagad cashier tile:** orange Nagad logo with the merchant number in a copy-pill and a 15-minute countdown timer.",
        "- **Send Money screen:** standard orange Nagad UI; the Reference field is small and easy to miss, that is where the JeetBuzz code must go.",
        "- **SMS receipt:** \"Pay Tk X successful. TrxID: NDB7K4P2. Balance: Tk Y.\" Only the TrxID goes into JeetBuzz.",
        "## jeetbuzz Nagad withdrawal",
        "1. Open **Cashier > Withdraw > Nagad**.",
        "2. Enter the BDT amount (minimum 500 BDT).",
        "3. Enter the Nagad number you deposited from. Name must match your JeetBuzz profile.",
        "4. Submit. You receive a Nagad Cash-In SMS when the funds arrive (usually 5–30 minutes, up to 1 hour on weekends).",
        "## Nagad deposits and withdrawals, at a glance",
        "Withdrawal limits may vary depending on your account status and the operator's current policies. Please check the cashier or contact customer support for the latest limits.",
        "Typical deposit minimum is around 200 BDT and processing usually completes within a few minutes once the TrxID is verified. Any applicable Nagad fees are shown before you confirm the transaction.",
        "## Troubleshooting",
        "- Wrong amount: even a 1 BDT mismatch delays credit",
        "- Wrong reference code, include the unique JeetBuzz code exactly",
        "- Do **not** use Nagad Cash Out, that menu is for cash-pickup at agents, not merchant deposits",
        "- KYC must be complete (Nagad NID verification) before your first jeetbuzz withdrawal bangladesh",
        "## bKash vs Nagad on JeetBuzz",
        "| Factor | bKash | Nagad |",
        "|---|---|---|",
        "| Deposit min | 200 BDT | 200 BDT |",
        "| Daily deposit cap | 50,000 BDT | 75,000 BDT |",
        "| Send Money fee | ~5 BDT / 1,000 | ~4 BDT / 1,000 |",
        "| Withdrawal time | 5–30 min | 5–30 min |",
        "| App reliability | Highest | Very high |",
        "| Best for | Daily play | Mid-stake regulars |",
        "## Country context",
        "- **Bangladesh (primary):** Nagad is the #2 wallet, ideal when bKash is under maintenance or you have hit your bKash daily cap.",
        "- **Pakistan / India:** Not available, use [JazzCash](/jazzcash-guide), [EasyPaisa](/easypaisa-guide) or [UPI](/upi-guide) instead.",
        "## Extended FAQ",
        "- **Can I use Nagad Islamic for deposits?** Yes, both Regular and Islamic Nagad wallets work, as long as the registered name matches your JeetBuzz account.",
        "- **What if my Nagad app shows \"Transaction Pending\"?** Wait 5 minutes. Nagad sometimes batches confirmations. If the SMS does not arrive in 10 minutes, contact Nagad support before re-trying.",
        "## Ready to deposit with Nagad?",
        "Follow the 8-step flow, keep the reference code in front of you, and never use Cash Out. New players should activate the [Welcome Bonus](/welcome-bonus) before the first send and complete the [Registration Guide](/registration-guide).",
        "## Related guides",
        "Pair this with the [Deposit Guide](/deposit-guide), [Withdrawal Guide](/withdrawal-guide), [bKash Guide](/bkash-guide), [Rocket Guide](/rocket-guide), [APK Download](/apk-download-guide) and [Welcome Bonus](/welcome-bonus).",
      ]}
      bodyByLocale={{
        bn: [
          "> **এক নজরে:** জিতবাজ Nagad ডিপোজিট হলো bKash-এর সেরা বিকল্প. Cashier > Deposit > Nagad, Send Money ব্যবহার করুন (Cash Out নয়), JeetBuzz রেফারেন্স পেস্ট করুন, তারপর Nagad TrxID সাবমিট করুন। মিনিমাম ২০০ টাকা, দৈনিক সীমা ৭৫,০০০ টাকা, KYC শেষে একই Nagad ওয়ালেটে ৫–৩০ মিনিটে উইথড্রয়াল।",
          "## কেন Nagad জিতবাজ বাংলাদেশের জন্য সেরা অপশন",
          "Nagad বাংলাদেশ ডাক বিভাগের অধীনে পরিচালিত রাষ্ট্রীয় মোবাইল ফিনান্সিয়াল সার্ভিস। এটি bKash-এর সমান্তরালে চলে, সমান গতিতে কাজ করে, কাছাকাছি ফি কাঠামো রাখে এবং কিছুটা বেশি দৈনিক ওয়ালেট ক্যাপ অফার করে, যা নিয়মিত প্লেয়ারদের জন্য আদর্শ যারা bKash-এর সীমায় আটকে যান।",
          "## জিতবাজ Nagad ডিপোজিট, সম্পূর্ণ ধাপে ধাপে",
          "১. জিতবাজে সাইন ইন করুন (এখনো রেজিস্টার না করলে [লগইন গাইড](/login-guide) দেখুন)।",
          "২. **Cashier > Deposit > Nagad** খুলুন।",
          "৩. পরিমাণ লিখুন, মিনিমাম ২০০ টাকা, সর্বোচ্চ VIP টিয়ার অনুযায়ী।",
          "৪. প্রদর্শিত **মার্চেন্ট নম্বর** এবং ইউনিক **রেফারেন্স কোড** (যেমন JB-N2L7) কপি করুন।",
          "৫. Nagad অ্যাপ খুলে **Send Money** ট্যাপ করুন এবং মার্চেন্ট নম্বর পেস্ট করুন।",
          "৬. সঠিক পরিমাণ লিখুন এবং **Reference** ফিল্ডে কোড পেস্ট করুন। Nagad PIN দিয়ে কনফার্ম করুন।",
          "৭. Nagad SMS কয়েক সেকেন্ডে আসে **TrxID** সহ (যেমন NDB7K4P2)। কপি করুন।",
          "৮. জিতবাজ ক্যাশিয়ার ফর্মে TrxID পেস্ট করে সাবমিট করুন। ৩০–৬০ সেকেন্ডে ব্যালেন্স আপডেট।",
          "## স্ক্রিনশট ওয়াকথ্রু",
          "- **Nagad ক্যাশিয়ার টাইল:** কমলা Nagad লোগো, মার্চেন্ট নম্বর কপি-পিল এবং ১৫ মিনিটের কাউন্টডাউন।",
          "- **Send Money স্ক্রিন:** স্ট্যান্ডার্ড কমলা Nagad UI; Reference ফিল্ডটি ছোট এবং সহজে চোখ এড়িয়ে যায়. JeetBuzz কোড সেখানেই বসাতে হবে।",
          "- **SMS রিসিট:** \"Pay Tk X successful. TrxID: NDB7K4P2. Balance: Tk Y.\" শুধু TrxID জিতবাজে যাবে।",
          "## জিতবাজ Nagad উইথড্রয়াল",
          "১. **Cashier > Withdraw > Nagad** খুলুন।",
          "২. পরিমাণ লিখুন (মিনিমাম ৫০০ টাকা)।",
          "৩. যেই Nagad নম্বর থেকে ডিপোজিট করেছেন সেটি লিখুন। নাম জিতবাজ প্রোফাইলের সঙ্গে মিলতে হবে।",
          "৪. সাবমিট করুন। ফান্ড আসার সময় Nagad Cash-In SMS আসবে (সাধারণত ৫–৩০ মিনিট, ছুটির দিনে ১ ঘণ্টা পর্যন্ত)।",
          "## Nagad ডিপোজিট ও উইথড্রয়াল, এক নজরে",
          "উইথড্রয়াল লিমিট অ্যাকাউন্টের অবস্থা ও অপারেটরের বর্তমান নীতিমালার উপর নির্ভর করে। সর্বশেষ তথ্যের জন্য ক্যাশিয়ার দেখুন বা কাস্টমার সাপোর্টে যোগাযোগ করুন।",
          "ডিপোজিট মিনিমাম সাধারণত ২০০ টাকার আশেপাশে এবং TrxID যাচাইয়ের পর সাধারণত কয়েক মিনিটে প্রসেস হয়। প্রযোজ্য Nagad ফি কনফার্ম করার আগেই দেখানো হয়।",
          "## সমস্যা সমাধান",
          "- ভুল পরিমাণ: ১ টাকার পার্থক্যও ক্রেডিটে দেরি ঘটায়",
          "- ভুল রেফারেন্স কোড. JeetBuzz ইউনিক কোড হুবহু লিখুন",
          "- Nagad Cash Out মেনু ব্যবহার **করবেন না**, সেটি এজেন্ট ক্যাশ-পিকআপের জন্য, মার্চেন্ট ডিপোজিটের জন্য নয়",
          "- প্রথম উইথড্রয়ালের আগে KYC (Nagad NID যাচাই) সম্পন্ন থাকতে হবে",
          "## bKash বনাম Nagad জিতবাজে",
          "| ফ্যাক্টর | bKash | Nagad |",
          "|---|---|---|",
          "| ডিপোজিট মিনিমাম | ২০০ টাকা | ২০০ টাকা |",
          "| দৈনিক ক্যাপ | ৫০,০০০ টাকা | ৭৫,০০০ টাকা |",
          "| Send Money ফি | ~৫ টাকা/১,০০০ | ~৪ টাকা/১,০০০ |",
          "| উইথড্রয়াল সময় | ৫–৩০ মিনিট | ৫–৩০ মিনিট |",
          "| অ্যাপ নির্ভরযোগ্যতা | সর্বোচ্চ | অত্যন্ত উচ্চ |",
          "| সেরা ব্যবহার | প্রতিদিনের খেলা | মিড-স্টেক নিয়মিত |",
          "## বর্ধিত FAQ",
          "- **Nagad ইসলামিক দিয়ে ডিপোজিট হবে?** হ্যাঁ. Regular এবং Islamic দুই Nagad ওয়ালেটই কাজ করে, যদি নিবন্ধিত নাম জিতবাজ অ্যাকাউন্টের সঙ্গে মেলে।",
          "- **Nagad অ্যাপে \"Transaction Pending\" দেখালে?** ৫ মিনিট অপেক্ষা করুন. Nagad মাঝে মাঝে কনফার্মেশন ব্যাচ আকারে পাঠায়। ১০ মিনিটে SMS না এলে Nagad সাপোর্টে যোগাযোগ করুন।",
          "## Nagad দিয়ে ডিপোজিটের জন্য প্রস্তুত?",
          "৮ ধাপের ফ্লো অনুসরণ করুন, রেফারেন্স কোড সামনে রাখুন এবং কখনই Cash Out ব্যবহার করবেন না। নতুন প্লেয়াররা প্রথম পাঠানোর আগে [ওয়েলকাম বোনাস](/welcome-bonus) অ্যাক্টিভেট করুন।",
          "## সম্পর্কিত গাইড",
          "এর সঙ্গে দেখুন [Deposit Guide](/deposit-guide), [Withdrawal Guide](/withdrawal-guide), [bKash Guide](/bkash-guide), [Rocket Guide](/rocket-guide), [APK Download](/apk-download-guide) এবং [Welcome Bonus](/welcome-bonus)।",
        ],
      }}
      faqs={[
        { q: "Is Nagad faster than bKash on JeetBuzz?", a: "Both usually credit within minutes. Actual speed can vary with network and operator processing." },
        { q: "Can I deposit with Nagad and withdraw to bKash?", a: "Usually no. JeetBuzz prefers the same wallet for deposit and withdrawal." },
        { q: "What if I send the wrong amount?", a: "Open live chat with the TrxID; many cases can still be credited." },
        { q: "Is there a minimum?", a: "Typically 200–500 BDT, confirm in the cashier." },
        { q: "Does Nagad work 24/7 on JeetBuzz?", a: "Yes. Deposits clear around the clock; withdrawals may slow briefly during overnight banking windows." },
        { q: "Why was my Nagad deposit reversed?", a: "Usually a name mismatch between the Nagad wallet and the JeetBuzz profile, or money sent via Cash Out instead of Send Money." },
        { q: "Is Nagad KYC required for deposits?", a: "No, only for withdrawals. You can deposit with a basic Nagad wallet but must complete NID verification before your first cash-out." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Nagad কি জিতবাজে bKash-এর চেয়ে দ্রুত?", a: "দুটোই সাধারণত কয়েক মিনিটে ক্রেডিট হয়। প্রকৃত গতি নেটওয়ার্ক ও অপারেটর প্রসেসিংয়ের উপর নির্ভর করে।" },
          { q: "Nagad-এ ডিপোজিট করে bKash-এ উইথড্র করা যাবে?", a: "সাধারণত না, জিতবাজ ডিপোজিট ও উইথড্রয়ালে একই ওয়ালেট পছন্দ করে।" },
          { q: "ভুল পরিমাণ পাঠালে কী হবে?", a: "TrxID নিয়ে লাইভ চ্যাটে যান; অনেক ক্ষেত্রে এখনও জমা করা যায়।" },
          { q: "মিনিমাম কত?", a: "সাধারণত ২০০–৫০০ টাকা, ক্যাশিয়ারে নিশ্চিত হয়ে নিন।" },
          { q: "Nagad কি জিতবাজে ২৪/৭ কাজ করে?", a: "হ্যাঁ। ডিপোজিট সারাদিন ক্লিয়ার হয়; রাতের ব্যাংকিং উইন্ডোতে উইথড্রয়াল সামান্য ধীর হতে পারে।" },
          { q: "আমার Nagad ডিপোজিট রিভার্স হলো কেন?", a: "সাধারণত Nagad ওয়ালেট ও জিতবাজ প্রোফাইলের নাম মেলেনি, অথবা Send Money-এর বদলে Cash Out ব্যবহার করা হয়েছে।" },
          { q: "ডিপোজিটের জন্য Nagad KYC লাগে?", a: "না, শুধু উইথড্রয়ালের জন্য। বেসিক Nagad ওয়ালেট দিয়ে ডিপোজিট সম্ভব, কিন্তু প্রথম ক্যাশ-আউটের আগে NID যাচাই করতে হবে।" },
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