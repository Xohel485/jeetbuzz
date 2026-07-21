import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { AFFILIATE_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-affiliate-signup";
const TITLE = "JeetBuzz Affiliate Signup 2026 — Apply for the Partner Program";
const DESC = "Step-by-step JeetBuzz affiliate signup for 2026 — application form, approval timing, KYC documents and what to do if your application is rejected.";

export const Route = createFileRoute("/jeetbuzz-affiliate-signup")({
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
      eyebrow="Affiliate"
      title={<>JeetBuzz Affiliate <span className="gold-text">Signup</span></>}
      titleByLocale={{ bn: <>জিতবাজ অ্যাফিলিয়েট <span className="gold-text">সাইনআপ</span></> }}
      subtitle="Apply for the JeetBuzz partner program in under 10 minutes — application form, KYC, approval timing and common rejection reasons."
      subtitleByLocale={{ bn: "১০ মিনিটেরও কম সময়ে জিতবাজ পার্টনার প্রোগ্রামে আবেদন — ফর্ম, KYC, অনুমোদনের সময় এবং প্রত্যাখ্যানের সাধারণ কারণ।" }}
      ctaIntent="partners" ctaLabel="Open Partner Signup"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Affiliate Signup", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Before you apply",
        "Have these ready: a working email you check daily, a phone number reachable on WhatsApp / Telegram, one government ID (passport / NID / CNIC / Aadhaar) and a rough plan for your traffic source (website, Telegram group, YouTube, Facebook, TikTok).",
        "## Step by step",
        "1. Open the [Affiliate Program page](/affiliate-program) and click **Join Partner Program** — this opens the official partner portal.",
        "2. Fill the application form: full name (matching your ID), email, phone, country, preferred payout currency, and traffic source description.",
        "3. Upload one government ID for KYC. Passport works fastest across all three markets.",
        "4. Submit and note the application reference number.",
        "5. Wait for approval — usually reviewed within 1–3 business days. Check your email (including spam).",
        "## What the reviewer looks for",
        "- Traffic that is real (existing website, Telegram, YouTube or clearly named future channel).",
        "- Not an incentive site (\"free bonus for signup\" traffic is rejected).",
        "- Not a competitor operator.",
        "- Region matches supported markets (BD, PK, IN and neighbouring).",
        "## After approval",
        "You receive login details for the partner dashboard. Read the [Affiliate Login guide](/affiliate-login) for 2FA setup. From the dashboard you can generate tracking links, monitor clicks, active players, NGR and commission.",
        "## If your application is rejected",
        "Rejection is almost always about traffic source, not about you personally. Reply to the rejection email with more detail — a link to your existing site, screenshots of your community, follower counts. Most rejections are reversible with better context.",
        "## Understand the payout",
        "Read the [Commission Rate page](/jeetbuzz-affiliate-commission-rate) and the [Affiliate Withdrawal page](/jeetbuzz-affiliate-withdrawal) before you send your first click — knowing the payout math shapes which traffic is worth sending.",
      ]}
      bodyByLocale={{
        bn: [
          "## আবেদনের আগে",
          "প্রস্তুত রাখুন: প্রতিদিন চেক করেন এমন ইমেইল, WhatsApp/Telegram-এ পৌঁছানো যায় এমন ফোন নম্বর, একটি সরকারি আইডি (পাসপোর্ট / NID / CNIC / Aadhaar) এবং আপনার ট্রাফিক সোর্সের একটি রূপরেখা (ওয়েবসাইট, টেলিগ্রাম গ্রুপ, YouTube, Facebook, TikTok)।",
          "## ধাপে ধাপে",
          "১. [Affiliate Program পেজ](/affiliate-program) খুলুন এবং **Join Partner Program**-এ ক্লিক করুন — এটি অফিশিয়াল পার্টনার পোর্টাল খুলবে।",
          "২. আবেদন ফর্ম পূরণ করুন: আইডি অনুযায়ী পূর্ণ নাম, ইমেইল, ফোন, দেশ, পছন্দের পেআউট মুদ্রা এবং ট্রাফিক সোর্সের বর্ণনা।",
          "৩. KYC-র জন্য একটি সরকারি আইডি আপলোড করুন। বিডিতে NID সবচেয়ে দ্রুত প্রসেস হয়।",
          "৪. জমা দিন এবং আবেদনের রেফারেন্স নম্বর সংরক্ষণ করুন।",
          "৫. অনুমোদনের জন্য অপেক্ষা করুন — সাধারণত ১–৩ কর্মদিবসের মধ্যে রিভিউ হয়। ইমেইল (স্প্যাম সহ) চেক করুন।",
          "## রিভিউয়ার কী দেখেন",
          "- বাস্তব ট্রাফিক (বিদ্যমান ওয়েবসাইট, টেলিগ্রাম, YouTube বা স্পষ্টভাবে নামযুক্ত ভবিষ্যৎ চ্যানেল)।",
          "- ইনসেন্টিভ সাইট নয় (\"সাইনআপে ফ্রি বোনাস\" ধরনের ট্রাফিক প্রত্যাখ্যাত)।",
          "- প্রতিযোগী অপারেটর নয়।",
          "- রিজিয়ন সাপোর্টেড মার্কেটের সঙ্গে মিলে (বিডি, পিকে, ইন এবং প্রতিবেশী)।",
          "## অনুমোদনের পর",
          "আপনি পার্টনার ড্যাশবোর্ডের লগইন তথ্য পাবেন। 2FA সেটআপের জন্য [Affiliate Login গাইড](/affiliate-login) পড়ুন। ড্যাশবোর্ড থেকে ট্র্যাকিং লিংক তৈরি, ক্লিক, সক্রিয় প্লেয়ার, NGR ও কমিশন মনিটর করা যায়।",
          "## প্রত্যাখ্যান হলে",
          "প্রত্যাখ্যান প্রায়ই ট্রাফিক সোর্সের কারণে হয়, ব্যক্তিগত নয়। প্রত্যাখ্যান ইমেইলের রিপ্লাইতে বিস্তারিত দিন — আপনার বিদ্যমান সাইটের লিংক, কমিউনিটির স্ক্রিনশট, ফলোয়ার সংখ্যা। বেশিরভাগ প্রত্যাখ্যান ভালো কনটেক্সট দিলে উল্টানো যায়।",
          "## পেআউট বুঝুন",
          "প্রথম ক্লিক পাঠানোর আগে [Commission Rate পেজ](/jeetbuzz-affiliate-commission-rate) এবং [Affiliate Withdrawal পেজ](/jeetbuzz-affiliate-withdrawal) পড়ুন — পেআউটের গণিত জানলে কোন ট্রাফিক পাঠানো লাভজনক তা ঠিক হয়।",
        ],
      }}
      related={siblings(AFFILIATE_CLUSTER, PATH)}
      faqs={[
        { q: "How long does JeetBuzz affiliate approval take?", a: "Typically 1–3 business days. Complex traffic sources (multi-country, paid ads) can take longer because they need compliance review." },
        { q: "Do I need a website to become a JeetBuzz affiliate?", a: "No. Telegram groups, YouTube channels, Facebook communities and TikTok accounts are all accepted traffic sources as long as they are named and verifiable." },
        { q: "Is there any signup fee?", a: "No. Application and dashboard access are free. You only earn — you never pay anything to the program." },
        { q: "Can I sign up as an affiliate from Bangladesh, Pakistan or India?", a: "Yes — all three markets are supported and payouts are available in local wallets and USDT." },
        { q: "What if I already have a player account — can I still be an affiliate?", a: "Yes, but you cannot earn commission from your own player account (self-referral is void)." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "জিতবাজ অ্যাফিলিয়েট অনুমোদনে কত সময় লাগে?", a: "সাধারণত ১–৩ কর্মদিবস। জটিল ট্রাফিক সোর্সে বেশি সময় লাগতে পারে কারণ কমপ্লায়েন্স রিভিউ প্রয়োজন হয়।" },
          { q: "অ্যাফিলিয়েট হতে ওয়েবসাইট থাকা কি বাধ্যতামূলক?", a: "না। টেলিগ্রাম গ্রুপ, YouTube চ্যানেল, Facebook কমিউনিটি এবং TikTok অ্যাকাউন্ট — সব গ্রহণযোগ্য যদি সেগুলো নামযুক্ত ও যাচাইযোগ্য হয়।" },
          { q: "সাইনআপ ফি আছে?", a: "না। আবেদন ও ড্যাশবোর্ড অ্যাক্সেস সম্পূর্ণ ফ্রি। আপনি শুধু আয় করেন — প্রোগ্রামকে কখনো কিছু দিতে হয় না।" },
          { q: "বাংলাদেশ থেকে সাইনআপ করা যায়?", a: "হ্যাঁ — বিডি সাপোর্টেড এবং bKash/Nagad/USDT-তে পেআউট পাওয়া যায়।" },
          { q: "প্লেয়ার অ্যাকাউন্ট থাকলে অ্যাফিলিয়েটও হওয়া যায়?", a: "হ্যাঁ, কিন্তু নিজের প্লেয়ার অ্যাকাউন্ট থেকে কমিশন আয় করা যায় না (সেলফ-রেফারেল বাতিল)।" },
          { q: "কোন ট্রাফিক প্রায়ই প্রত্যাখ্যাত হয়?", a: "\"সাইনআপে ফ্রি টাকা\" জাতীয় প্রলোভনমূলক ট্রাফিক, স্প্যাম SMS, এবং প্রতিযোগী অপারেটর সাইট থেকে আসা ট্রাফিক নিয়মিত প্রত্যাখ্যাত হয়।" },
        ],
      }}
    />
  ),
});