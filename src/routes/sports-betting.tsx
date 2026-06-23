import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";

export const Route = createFileRoute("/sports-betting")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Sports Betting Guide 2026 - Cricket, Football, Kabaddi & eSports" },
      { name: "description", content: "JeetBuzz sports betting guide 2026 — cricket, football, tennis, kabaddi and eSports markets with odds comparison and bankroll tips for Bangladesh, Pakistan and India." },
      { property: "og:title", content: "JeetBuzz Sports Betting Guide" },
      { property: "og:description", content: "Sports markets, odds and tips on JeetBuzz." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Sports Betting</span></>}
      subtitle="Beyond cricket — football, tennis, kabaddi and eSports markets on JeetBuzz, with notes on which lines are actually competitive."
      body={[
        "## Football",
        "EPL, La Liga, Champions League and most major leagues. In-play coverage is solid.",
        "## Tennis",
        "ATP / WTA / Slams with set, game and point markets.",
        "## Kabaddi",
        "Pro Kabaddi League coverage with handicap and total raid points.",
        "## eSports",
        "CS, Dota 2 and Valorant during major tournaments.",
        "## Tips",
        "Compare opening odds vs current — sharp line moves are usually informative.",
      ]}
      subtitleByLocale={{
        bn: "ক্রিকেটের বাইরে — ফুটবল, টেনিস, কাবাডি ও eSports মার্কেট, BPL ও জনপ্রিয় লিগের নোটসহ।",
        ur: "کرکٹ کے علاوہ — فٹبال، ٹینس، کبڈی اور eSports مارکیٹس، PSL اور بڑی لیگز پر نوٹس کے ساتھ۔",
        hi: "क्रिकेट के अलावा — फुटबॉल, टेनिस, कबड्डी और eSports मार्केट, IPL और बड़ी लीगों पर सुझाव।",
      }}
      bodyByLocale={{
        bn: [
          "## ফুটবল",
          "EPL, La Liga, Champions League সহ প্রায় সব বড় লিগ। ইন-প্লে কভারেজ ভালো।",
          "## টেনিস",
          "ATP / WTA / Grand Slam — সেট, গেম, পয়েন্ট মার্কেট পাওয়া যায়।",
          "## কাবাডি",
          "প্রো কাবাডি লিগে হ্যান্ডিক্যাপ ও মোট রেইড পয়েন্ট মার্কেট।",
          "## eSports",
          "বড় টুর্নামেন্টে CS, Dota 2 ও Valorant।",
          "## টিপস",
          "ওপেনিং অডস ও বর্তমান অডস তুলনা করুন — শার্প লাইন মুভমেন্ট অনেক কিছু বলে।",
        ],
        ur: [
          "## فٹبال",
          "EPL، لا لیگا، چیمپئنز لیگ — تقریباً تمام بڑی لیگز۔ ان پلے کوریج بہترین۔",
          "## ٹینس",
          "ATP / WTA / گرینڈ سلیم — سیٹ، گیم اور پوائنٹ مارکیٹس۔",
          "## کبڈی",
          "پرو کبڈی لیگ پر ہینڈی کیپ اور ٹوٹل ریڈ پوائنٹس مارکیٹس۔",
          "## eSports",
          "بڑے ٹورنامنٹس میں CS، Dota 2 اور Valorant۔",
          "## نکات",
          "اوپننگ آڈز اور موجودہ آڈز کا موازنہ کریں — تیز لائن موومنٹ معلوماتی ہوتی ہے۔",
        ],
        hi: [
          "## फुटबॉल",
          "EPL, La Liga, चैंपियंस लीग समेत लगभग सभी बड़ी लीग। इन-प्ले कवरेज मज़बूत।",
          "## टेनिस",
          "ATP / WTA / ग्रैंड स्लैम — सेट, गेम और पॉइंट मार्केट।",
          "## कबड्डी",
          "प्रो कबड्डी लीग पर हैंडीकैप और टोटल रेड पॉइंट मार्केट।",
          "## eSports",
          "बड़े टूर्नामेंट में CS, Dota 2 और Valorant।",
          "## टिप्स",
          "ओपनिंग ऑड्स बनाम मौजूदा ऑड्स की तुलना करें — शार्प लाइन मूव्स जानकारी देते हैं।",
        ],
      }}
    />
  ),
});