import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/vip-program";
const TITLE =
  "JeetBuzz VIP Program 2026 - Tiers, Cashback, Faster Withdrawals (BD/PK/IN)";
const DESC =
  "JeetBuzz VIP program 2026 — tier requirements, cashback rates, faster withdrawal limits and dedicated managers for Bangladesh, Pakistan and India high rollers.";

export const Route = createFileRoute("/vip-program")({
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
      eyebrow="VIP"
      title={<>JeetBuzz <span className="gold-text">VIP Program</span></>}
      subtitle="The honest breakdown of the JeetBuzz VIP ladder — what unlocks at each tier, how to climb faster and whether it is worth chasing."
      breadcrumbs={[{ name: "VIP", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## TL;DR",
        "VIP exists to reward consistent volume. If you bet regularly, the cashback and higher limits pay for themselves; if you bet once a month, ignore it.",
        "## Tier structure",
        "Most rungs follow a Bronze > Silver > Gold > Platinum > Diamond pattern, with thresholds based on cumulative wagering inside a rolling window.",
        "## Perks",
        "- Weekly cashback rising with tier",
        "- Faster manual withdrawal approvals",
        "- Higher single-cash-out caps",
        "- Personal VIP manager at upper tiers",
        "- Birthday and festival bonuses (Eid, Pohela Boishakh)",
        "## How to climb",
        "- Stick to one account",
        "- Place real-money bets, not bonus-funded ones (bonus wagering often does not count)",
        "- Maintain activity — tiers can drop if you go inactive",
        "## When VIP is not worth it",
        "If chasing VIP tempts you to bet beyond your bankroll, the cashback never makes up for the losses. Set deposit limits first.",
      ]}
      subtitleByLocale={{
        bn: "JeetBuzz VIP ল্যাডারের সৎ ব্রেকডাউন — প্রতিটি টিয়ারে কী আনলক হয়, দ্রুত উঠবেন কীভাবে।",
        ur: "JeetBuzz VIP لیڈر کا ایماندار جائزہ — ہر ٹائر میں کیا کھلتا ہے، تیزی سے کیسے چڑھیں۔",
        hi: "JeetBuzz VIP लैडर का ईमानदार विश्लेषण — हर टियर में क्या मिलता है, तेज़ी से कैसे चढ़ें।",
      }}
      bodyByLocale={{
        bn: [
          "## সংক্ষেপে",
          "VIP নিয়মিত ভলিউমকে রিওয়ার্ড করে। নিয়মিত বেট করলে ক্যাশব্যাক ও উচ্চ লিমিট কাজে আসে; মাসে একবার হলে ইগনোর করুন।",
          "## টিয়ার স্ট্রাকচার",
          "Bronze > Silver > Gold > Platinum > Diamond — রোলিং উইন্ডোতে ক্রমবর্ধমান ওয়েজারিং।",
          "## সুবিধা",
          "- টিয়ার অনুযায়ী বাড়তি সাপ্তাহিক ক্যাশব্যাক",
          "- দ্রুত ম্যানুয়াল উইথড্রয়াল অনুমোদন",
          "- বড় সিঙ্গেল ক্যাশ-আউট লিমিট",
          "- উপরের টিয়ারে ব্যক্তিগত VIP ম্যানেজার",
          "- ঈদ ও পহেলা বৈশাখের বোনাস",
          "## কীভাবে উঠবেন",
          "- একটাই অ্যাকাউন্ট",
          "- রিয়েল-মানি বেট, বোনাস নয়",
          "- নিয়মিত অ্যাক্টিভ থাকুন",
          "## কখন এড়াবেন",
          "ব্যাংকরোলের বাইরে বেট করলে ক্যাশব্যাক ক্ষতি পুষাবে না। আগে ডিপোজিট লিমিট সেট করুন।",
        ],
        ur: [
          "## مختصراً",
          "VIP باقاعدہ والیوم کو انعام دیتا ہے۔ باقاعدہ بیٹرز کے لیے کیش بیک فائدہ مند ہے۔",
          "## ٹائر اسٹرکچر",
          "Bronze > Silver > Gold > Platinum > Diamond — رولنگ ونڈو میں مجموعی ویجرنگ پر۔",
          "## فوائد",
          "- ٹائر کے ساتھ بڑھتا ہفتہ وار کیش بیک",
          "- تیز مینوئل ودڈرا منظوری",
          "- بڑی سنگل کیش آؤٹ حد",
          "- اوپری ٹائرز پر ذاتی VIP مینیجر",
          "- عید اور تہوار بونس",
          "## کیسے چڑھیں",
          "- ایک ہی اکاؤنٹ",
          "- اصلی پیسوں سے بیٹ، بونس نہیں",
          "- متحرک رہیں",
          "## کب چھوڑیں",
          "بینک رول سے زیادہ بیٹ کریں تو کیش بیک نقصان پورا نہیں کرے گا۔",
        ],
        hi: [
          "## संक्षेप में",
          "VIP नियमित वॉल्यूम को इनाम देता है। नियमित बेटर्स के लिए कैशबैक फायदेमंद।",
          "## टियर स्ट्रक्चर",
          "Bronze > Silver > Gold > Platinum > Diamond — रोलिंग विंडो में कुल वेजरिंग।",
          "## फायदे",
          "- टियर के साथ बढ़ता साप्ताहिक कैशबैक",
          "- तेज़ मैनुअल विदड्रॉल अप्रूवल",
          "- बड़ी सिंगल कैश-आउट लिमिट",
          "- ऊपरी टियर पर पर्सनल VIP मैनेजर",
          "- दिवाली और होली बोनस",
          "## कैसे चढ़ें",
          "- एक ही अकाउंट",
          "- रियल-मनी बेट, बोनस नहीं",
          "- सक्रिय रहें",
          "## कब छोड़ें",
          "बैंकरोल से ज़्यादा बेट करेंगे तो कैशबैक भरपाई नहीं करेगा।",
        ],
      }}
      faqsByLocale={{
        bn: [
          { q: "VIP-এর কি খরচ আছে?", a: "না — ওয়েজারিং ভলিউমের ভিত্তিতে অটোমেটিক।" },
          { q: "টিয়ার হারাতে পারি?", a: "হ্যাঁ — ৩০/৯০ দিনের রোলিং উইন্ডোতে পুনর্মূল্যায়ন।" },
          { q: "ক্যাসিনো ও স্পোর্টস সমান গণনা?", a: "প্রায়ই না — স্পোর্টসবুক বেশি ওজন পায়।" },
          { q: "VIP চেজ করা যৌক্তিক?", a: "শুধু যদি ঐ ভলিউম আপনি এমনিতেই করতেন।" },
        ],
        ur: [
          { q: "کیا VIP کا خرچ ہے؟", a: "نہیں — ویجرنگ والیوم پر خودکار۔" },
          { q: "کیا ٹائر کھو سکتا ہوں؟", a: "ہاں — 30/90 دن کی رولنگ ونڈو میں۔" },
          { q: "کیسینو اور اسپورٹس برابر؟", a: "اکثر نہیں — اسپورٹس بک کا وزن زیادہ ہے۔" },
          { q: "VIP کا پیچھا کریں؟", a: "صرف اگر آپ یہ والیوم ویسے بھی کرتے۔" },
        ],
        hi: [
          { q: "क्या VIP का शुल्क है?", a: "नहीं — वेजरिंग वॉल्यूम पर ऑटोमैटिक।" },
          { q: "क्या टियर खो सकता हूँ?", a: "हाँ — 30/90 दिन की रोलिंग विंडो में।" },
          { q: "कैसीनो और स्पोर्ट्स बराबर?", a: "अक्सर नहीं — स्पोर्ट्सबुक का वज़न ज़्यादा।" },
          { q: "क्या VIP पीछा करें?", a: "तभी अगर वो वॉल्यूम वैसे भी करते।" },
        ],
      }}
      faqs={[
        { q: "Does JeetBuzz VIP cost anything?", a: "No — it is automatic based on wagering volume." },
        { q: "Can I lose my VIP tier?", a: "Yes — tiers usually re-evaluate over a rolling 30 or 90 day window." },
        { q: "Do casino and sports bets count equally?", a: "Often not — sportsbook wagering typically weights higher. Check official terms." },
        { q: "Is VIP worth chasing?", a: "Only if you would bet that volume anyway. Don't bet more to chase a tier." },
      ]}
      related={[
        { to: "/bonus-and-promotions", title: "Bonus & Promotions" },
        { to: "/affiliate-program", title: "Affiliate Program" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
      ]}
    />
  ),
});