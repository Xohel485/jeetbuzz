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
          "## কভারেজ",
          "BPL, IPL, T20 বিশ্বকাপ, টেস্ট ও ODI, PSL এবং কাউন্টি T20।",
          "## আমাদের পছন্দের মার্কেট",
          "- ম্যাচ উইনার",
          "- ওভার রান (প্রথম ৬, প্রথম ১০)",
          "- টপ ব্যাটার / বোলার",
          "- পরবর্তী আউটের ধরন",
          "## ইন-প্লে টিপস",
          "প্রতি ম্যাচে বাজেট আগে ঠিক করুন। উইকেট পড়ার পর লস চেজ করবেন না। ক্যাশ-আউট একটা টুল, অভ্যাস নয়।",
          "## রেসপনসিবল গেমিং",
          "অ্যাকাউন্টে ডিপোজিট ও লস লিমিট সেট করুন। বেটিং মজার না লাগলে বিরতি নিন।",
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