import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";

export const Route = createFileRoute("/live-cricket-betting")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Live Cricket Betting Guide | GetJeetBuzz" },
      { name: "description", content: "Live cricket markets, in-play tips and bankroll advice for JeetBuzz — BPL, IPL, internationals." },
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
        "## Coverage",
        "BPL, IPL, T20 World Cup, Test and ODI internationals, plus county T20 and PSL.",
        "## Markets we like",
        "- Match winner",
        "- Over runs (first 6, first 10)",
        "- Top batter / bowler",
        "- Method of next dismissal",
        "## In-play tips",
        "Pre-decide a per-match budget. Don't chase losses after a wicket. Cash-out is a tool, not a habit.",
        "## Responsible gaming",
        "Set deposit and loss limits in your account. If betting stops being fun, take a break.",
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
    />
  ),
});