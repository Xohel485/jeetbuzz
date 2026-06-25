import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";

export const Route = createFileRoute("/live-cricket-betting")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Live Cricket Betting Guide 2026 - BPL, IPL, PSL & Internationals" },
      { name: "description", content: "JeetBuzz live cricket betting guide 2026 — in-play markets, over-by-over odds, BPL, IPL, PSL and international fixtures plus bankroll tips for BD, PK and IN punters." },
      { property: "og:title", content: "JeetBuzz Live Cricket Betting Guide" },
      { property: "og:description", content: "Markets, in-play tips and bankroll management for JeetBuzz cricket." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("liveCricket") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("liveCricket") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Live Cricket Betting</span></>}
      subtitle="Deep coverage of BPL, IPL, T20 World Cup and internationals — plus practical advice on which markets to actually use."
      heroImage="liveCricket"
      body={[
        "## Coverage on JeetBuzz",
        "JeetBuzz live cricket betting covers every major league and international tournament played throughout the year — Bangladesh Premier League (BPL), Indian Premier League (IPL), Pakistan Super League (PSL), T20 World Cup, ICC Champions Trophy, Test series, ODI bilateral series, plus county T20, CPL and Big Bash.",
        "## Step-by-step: place your first live cricket bet",
        "1. Sign in and complete the [Registration Guide](/registration-guide) if you have not already.",
        "2. Make a deposit via [bKash](/bkash-guide), [Nagad](/nagad-guide), [JazzCash](/jazzcash-guide) or [UPI](/upi-guide).",
        "3. From the top bar tap **Sports > Cricket > Live**.",
        "4. Choose your match — live ones have a red **LIVE** pill.",
        "5. Browse markets (match winner, next over runs, fall of next wicket).",
        "6. Tap the odds, enter your stake, confirm the bet slip.",
        "7. Use cash-out only when the live odds move 15–20% in your favour.",
        "## Markets and typical odds movement",
        "| Market | Best Used | Typical Volatility |",
        "|---|---|---|",
        "| Match Winner | Pre-match + early innings | Medium |",
        "| Over Runs (1st 6, 1st 10) | Power-play phase | High |",
        "| Top Batter / Bowler | Pre-match only | Low |",
        "| Next Wicket Method | Middle overs | Very high |",
        "| Total Match Sixes | Pre-match for T20 | Medium |",
        "| Innings Total | Mid-innings | Medium |",
        "## Country-specific tournaments",
        "### Bangladesh — BPL focus",
        "BPL fixtures have the deepest market liquidity for jeetbuzz bangladesh cricket bettors. JeetBuzz publishes BPL odds 48 hours pre-match and adds live in-play markets once the toss happens. Comilla, Rangpur and Dhaka fixtures see the highest stake volumes.",
        "### Pakistan — PSL focus",
        "Jeetbuzz pakistan players get full PSL coverage — every group stage, Eliminator and Final. PSL live markets stay open until the 19th over.",
        "### India — IPL focus",
        "IPL is the headline tournament for jeetbuzz india. Expect tighter spreads, more prop markets, and player-level specials on every match.",
        "## In-play tips that actually work",
        "- Pre-decide a per-match budget — never more than 5% of your bankroll on one fixture.",
        "- Don't chase losses after a wicket; odds swing back within 2 overs in most T20s.",
        "- Cash-out is a tool, not a habit — use it for risk management, not greed.",
        "- Track the dew factor in BPL/PSL night games — chasing teams have a real edge.",
        "## Responsible gaming",
        "Set deposit and loss limits in your account settings. If betting stops being fun, take a break. JeetBuzz supports self-exclusion via live chat at any time.",
        "## Related guides",
        "Continue with [Sports Betting](/sports-betting), [Cricket Exchange Guide](/cricket-exchange-guide), [Aviator Guide](/aviator-guide), [VIP Program](/vip-program) and [Welcome Bonus](/welcome-bonus).",
      ]}
      subtitleByLocale={{
        bn: "BPL, IPL, T20 বিশ্বকাপ ও আন্তর্জাতিক ক্রিকেটের গভীর কভারেজ — কোন মার্কেট আসলে ব্যবহার করা উচিত তার ব্যবহারিক পরামর্শ।",
        ur: "PSL، IPL، T20 ورلڈ کپ اور بین الاقوامی کرکٹ کی گہری کوریج — کون سی مارکیٹ واقعی فائدہ مند ہے۔",
        hi: "IPL, BPL, T20 विश्व कप और अंतरराष्ट्रीय क्रिकेट की गहरी कवरेज — कौन सा मार्केट असल में काम का है।",
      }}
      bodyByLocale={{
        bn: [
          "বাংলাদেশের ক্রিকেট সংস্কৃতিতে লাইভ বেটিং এখন আর শুধু বিনোদন নয় — এটি একটি গভীর বিশ্লেষণমূলক চর্চা। JeetBuzz-এর লাইভ ক্রিকেট সেকশনে BPL, IPL, PSL, T20 বিশ্বকাপ, ICC চ্যাম্পিয়নস ট্রফি, টেস্ট ও ODI সিরিজ এবং Caribbean Premier League ও Big Bash পর্যন্ত প্রায় সব বড় টুর্নামেন্ট কভার করা হয়। এই গাইডে শুধু কোন মার্কেট আছে তা না, কোনটা কখন ব্যবহার করলে আসলে কাজে আসে — সেটাও বিস্তারিত আলোচনা করা হলো।",
          "## প্রথম লাইভ বেট রাখার ধাপ",
          "1. লগইন করুন; নতুন হলে [রেজিস্ট্রেশন গাইড](/registration-guide) দেখুন।",
          "2. পছন্দের রেইল দিয়ে ডিপোজিট করুন — [bKash](/bkash-guide), [Nagad](/nagad-guide) বা [Rocket](/rocket-guide)।",
          "3. উপরের মেনু থেকে **Sports > Cricket > Live** নির্বাচন করুন।",
          "4. লাল **LIVE** ট্যাগযুক্ত ম্যাচে প্রবেশ করুন।",
          "5. মার্কেট দেখুন — ম্যাচ উইনার, পরবর্তী ওভারের রান, পরবর্তী উইকেট কীভাবে পড়বে ইত্যাদি।",
          "6. অডসে ট্যাপ করে স্টেক লিখুন ও বেট স্লিপ কনফার্ম করুন।",
          "7. Cash-Out শুধুমাত্র তখনই ব্যবহার করুন যখন অডস আপনার অনুকূলে ১৫–২০% সরে এসেছে।",
          "## মার্কেটভিত্তিক ব্যবহারিক নির্দেশিকা",
          "| মার্কেট | কখন ব্যবহার করবেন | অস্থিরতা |",
          "|---|---|---|",
          "| ম্যাচ উইনার | প্রি-ম্যাচ ও প্রথম কয়েক ওভার | মাঝারি |",
          "| ওভার রান (১ম ৬, ১ম ১০) | পাওয়ার-প্লে পর্যায়ে | উচ্চ |",
          "| টপ ব্যাটার / বোলার | শুধুমাত্র প্রি-ম্যাচে | কম |",
          "| পরবর্তী আউটের ধরন | মিডল ওভারে | অত্যন্ত উচ্চ |",
          "| মোট ছক্কা | T20-তে প্রি-ম্যাচ | মাঝারি |",
          "| ইনিংস টোটাল | ইনিংসের মাঝামাঝি | মাঝারি |",
          "## টুর্নামেন্টভিত্তিক পরামর্শ",
          "### BPL — বাংলাদেশের প্রধান বাজার",
          "মিরপুর ও চট্টগ্রামের পিচ আচরণ ভিন্ন — মিরপুরে স্পিন কার্যকর, চট্টগ্রামে রান বেশি ওঠে। কুমিল্লা, রংপুর ও ঢাকার ম্যাচে BPL-এর সবচেয়ে বেশি লিকুইডিটি দেখা যায়। JeetBuzz সাধারণত ম্যাচের ৪৮ ঘণ্টা আগে BPL অডস প্রকাশ করে এবং টস হওয়ার পর লাইভ মার্কেট চালু হয়।",
          "### IPL — সবচেয়ে গভীর লিকুইডিটি",
          "প্লেয়ার প্রপ, ফ্যান্টাসি-স্টাইল মার্কেট ও সবচেয়ে টাইট স্প্রেড IPL-এই পাওয়া যায়। উইকেট পড়ার পর প্রথম ১০–১৫ সেকেন্ডে অডস অস্থির থাকে — এই সময় বড় স্টেক না দেওয়াই ভালো।",
          "### PSL — ব্যাটিং-বান্ধব ট্র্যাক",
          "লাহোর ও মুলতানে রান চেজ সহজ; করাচিতে স্পিন কাজ করে। PSL-এ ১৯তম ওভার পর্যন্ত প্রায় সব লাইভ মার্কেট খোলা থাকে।",
          "## ইন-প্লে টিপস (যেগুলো বাস্তবে কাজে দেয়)",
          "- প্রতি ম্যাচে ব্যাংকরোলের সর্বোচ্চ ৫% — এর বেশি নয়।",
          "- উইকেট পড়লে অডস ২ ওভারের মধ্যেই ফিরে আসে; লস চেজ করবেন না।",
          "- BPL ও PSL-এর সন্ধ্যার ম্যাচে dew factor হিসেবে নিন — চেজিং দল সাধারণত সুবিধা পায়।",
          "- Cash-Out একটি ঝুঁকি ব্যবস্থাপনার টুল, লোভ মেটানোর উপায় নয়।",
          "## নিরাপত্তা ও দায়িত্বশীল গেমিং",
          "অ্যাকাউন্ট সেটিংসে Deposit Limit ও Loss Limit আগে থেকেই নির্দিষ্ট করে রাখুন। বেটিং উপভোগ্য না লাগলে বিরতি নিন; লাইভ চ্যাটে যেকোনো সময় Self-Exclusion চালু করা যায়।",
          "## সম্পর্কিত গাইড",
          "[স্পোর্টস বেটিং](/sports-betting), [ক্রিকেট এক্সচেঞ্জ গাইড](/cricket-exchange-guide), [Aviator গাইড](/aviator-guide), [VIP প্রোগ্রাম](/vip-program) ও [ওয়েলকাম বোনাস](/welcome-bonus)।",
        ],
        ur: [
          "## کوریج",
          "PSL، IPL، T20 ورلڈ کپ، ٹیسٹ اور ODI، اور کاؤنٹی T20۔",
          "## ہماری پسندیدہ مارکیٹس",
          "- میچ ونر",
          "- اوور رنز (پہلے 6، پہلے 10)",
          "- ٹاپ بیٹسمین / باؤلر",
          "- اگلے آؤٹ کا طریقہ",
          "## ان پلے نکات",
          "ہر میچ کا بجٹ پہلے سے طے کریں۔ وکٹ گرنے کے بعد نقصان کا پیچھا نہ کریں۔",
          "## ذمہ دار گیمنگ",
          "اکاؤنٹ میں ڈپازٹ اور لاس لمٹ سیٹ کریں۔ مزہ آنا بند ہو تو وقفہ لیں۔",
        ],
        hi: [
          "## कवरेज",
          "IPL, BPL, T20 विश्व कप, टेस्ट और ODI, PSL और काउंटी T20।",
          "## हमारे पसंदीदा मार्केट",
          "- मैच विनर",
          "- ओवर रन (पहले 6, पहले 10)",
          "- टॉप बैटर / बॉलर",
          "- अगले आउट का तरीका",
          "## इन-प्ले टिप्स",
          "हर मैच का बजट पहले से तय करें। विकेट गिरने पर नुकसान का पीछा न करें। कैश-आउट एक टूल है, आदत नहीं।",
          "## जिम्मेदार गेमिंग",
          "खाते में डिपॉज़िट और लॉस लिमिट सेट करें। मज़ा आना बंद हो तो ब्रेक लें।",
        ],
      }}
      faqs={[
        { q: "What is the minimum stake on JeetBuzz live cricket?", a: "Most cricket markets accept a 10 BDT / 50 PKR / ₹20 minimum stake. Higher-liquidity markets like IPL and BPL match-winner go up to 100,000 BDT per single bet." },
        { q: "Can I cash out a live cricket bet?", a: "Yes. Cash-out appears in your bet slip during in-play markets when liquidity allows. The offered value updates every few seconds with the live odds." },
        { q: "Does JeetBuzz cover BPL, IPL and PSL?", a: "Yes — all three are covered with pre-match and in-play markets. Coverage extends to T20 World Cup, Champions Trophy, Test and ODI internationals." },
        { q: "Which payment method is best for cricket betting?", a: "Bangladesh players default to bKash or Nagad, Pakistan players use JazzCash or EasyPaisa, India players use UPI. See the payment-method guides for full step-by-step flows." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "লাইভ ক্রিকেটে ন্যূনতম স্টেক কত?", a: "বেশিরভাগ মার্কেটে ন্যূনতম স্টেক প্রায় ১০ টাকা; বড় মার্কেটে (BPL/IPL ম্যাচ উইনার) সর্বোচ্চ সিঙ্গেল বেট লিমিট সাধারণত অনেক বেশি — সঠিক সীমা বেট স্লিপে দেখানো হয়।" },
          { q: "লাইভ বেট Cash-Out করা যাবে?", a: "হ্যাঁ — লিকুইডিটি থাকলে বেট স্লিপে Cash-Out অপশন আসে এবং প্রতি কয়েক সেকেন্ডে মান আপডেট হয়।" },
          { q: "JeetBuzz-এ কি BPL, IPL ও PSL — সবই থাকে?", a: "হ্যাঁ — তিনটি লিগই প্রি-ম্যাচ ও লাইভ মার্কেটে কভার করা হয়। T20 বিশ্বকাপ, চ্যাম্পিয়নস ট্রফি, টেস্ট ও ODI সিরিজও অন্তর্ভুক্ত।" },
          { q: "ক্রিকেট বেটিংয়ের জন্য সবচেয়ে সুবিধাজনক পেমেন্ট কোনটি?", a: "বাংলাদেশের প্লেয়ারদের জন্য bKash বা Nagad সবচেয়ে দ্রুত — সাধারণত কয়েক মিনিটে ক্লিয়ার হয়। বিস্তারিত পেমেন্ট গাইডগুলো দেখুন।" },
          { q: "উইকেট পড়ার সঙ্গে সঙ্গে বেট রাখা কি বুদ্ধিমানের কাজ?", a: "প্রথম ১০–১৫ সেকেন্ড অডস অস্থির থাকে; অভিজ্ঞ না হলে কিছুটা অপেক্ষা করুন।" },
          { q: "Cash-Out কখন ব্যবহার করব?", a: "যখন অডস আপনার অনুকূলে ১৫–২০% সরে এসেছে, বা ম্যাচ পরিস্থিতি আপনার থিসিসের বিপরীতে গেছে। অভ্যাস নয়, কৌশলগত হাতিয়ার হিসেবে দেখুন।" },
        ],
      }}
      related={[
        { to: "/sports-betting", title: "JeetBuzz Sports Betting" },
        { to: "/cricket-exchange-guide", title: "Cricket Exchange Guide" },
        { to: "/aviator-guide", title: "Aviator & Crash Games" },
        { to: "/welcome-bonus", title: "Welcome Bonus" },
        { to: "/deposit-guide", title: "Deposit Guide" },
      ]}
    />
  ),
});