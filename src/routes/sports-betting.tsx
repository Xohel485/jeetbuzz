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
          "JeetBuzz-এ ক্রিকেট সবার আগে এলেও আসল গভীরতা বোঝা যায় তখনই, যখন আপনি বাকি স্পোর্টসগুলোর মার্কেট খুঁটিয়ে দেখেন। এই গাইডে বাংলাদেশি প্লেয়ারদের দৃষ্টিকোণ থেকে ফুটবল, টেনিস, কাবাডি ও eSports — প্রতিটি স্পোর্টসে কোন মার্কেটগুলো আসলে লিকুইড, কোথায় লাইন মুভমেন্ট অর্থবহ এবং কোন ভুলগুলো সাধারণ বেটররা বারবার করেন — সেগুলো ধরে ধরে বুঝিয়ে দিই।",
          "## ফুটবল — সবচেয়ে গভীর সেকেন্ডারি মার্কেট",
          "ইংলিশ প্রিমিয়ার লিগ, লা লিগা, সিরি এ, বুন্দেসলিগা, UEFA চ্যাম্পিয়নস ও ইউরোপা লিগ — প্রায় প্রতিটি ম্যাচ JeetBuzz-এ প্রি-ম্যাচ ও ইন-প্লে দুই ফরম্যাটেই পাবেন। ১X2 ও Over/Under-এর বাইরে BTTS, Asian Handicap, Corners, Cards ও Player Shots মার্কেটে স্থির লিকুইডিটি থাকে। বাংলাদেশের প্লেয়াররা সাধারণত EPL-এর সন্ধ্যার ম্যাচগুলোতে সবচেয়ে বেশি অ্যাক্টিভ।",
          "**টিপ:** Asian Handicap বুঝতে সময় দিন — ০.৫ গোলের পার্থক্যেও এটি ম্যাচের ঝুঁকি অনেকটা কমায়। ১X2-এর তুলনায় দীর্ঘমেয়াদে এটি বেশি কার্যকর।",
          "## টেনিস — সেট লেভেলে সবচেয়ে শার্প",
          "ATP, WTA ট্যুর ও চারটি গ্র্যান্ড স্ল্যামে ম্যাচ উইনার, সেট স্কোর, গেম হ্যান্ডিক্যাপ ও Over/Under গেম মার্কেট পাওয়া যায়। ইন-প্লে-তে প্রতিটি গেম শেষে অডস দ্রুত পরিবর্তিত হয় — সুতরাং মোবাইলে স্থিতিশীল ইন্টারনেট ছাড়া লাইভ টেনিসে বড় স্টেক দেওয়া ঠিক নয়।",
          "## কাবাডি — দক্ষিণ এশিয়ার প্রিয় বাজার",
          "প্রো কাবাডি লিগ (PKL) ও দক্ষিণ এশিয়ান টুর্নামেন্টগুলোতে ম্যাচ উইনার, হ্যান্ডিক্যাপ পয়েন্ট, মোট রেইড পয়েন্ট ও টপ রেইডার মার্কেট পাওয়া যায়। PKL-এর প্লে-অফ পর্যায়ে লিকুইডিটি সবচেয়ে বেশি হয়।",
          "## eSports — উদীয়মান মার্কেট",
          "Counter-Strike 2 (Major ও ESL Pro League), Dota 2 (The International, DPC), Valorant Champions Tour এবং Mobile Legends-এর বড় ইভেন্টগুলো প্রি-ম্যাচ ও ইন-প্লে — দুই ফরম্যাটেই পাওয়া যায়। Map হ্যান্ডিক্যাপ ও Total Maps মার্কেট সাধারণত ম্যাচ-উইনারের চেয়ে বেশি ব্যালেন্সড।",
          "## লাইন মুভমেন্ট পড়ার সহজ নিয়ম",
          "| পরিস্থিতি | অর্থ |",
          "|---|---|",
          "| ওপেনিং থেকে অডস কমে আসছে | স্মার্ট মানি ঐ দিকে যাচ্ছে |",
          "| অডস হঠাৎ বেড়ে গেলে | চোট/স্কোয়াড পরিবর্তনের গুজব |",
          "| অডস অপরিবর্তিত | বাজার একমত — সারপ্রাইজ কম |",
          "## সতর্কতা ও দায়িত্বশীল গেমিং",
          "প্রতি ম্যাচে নয়, পুরো সপ্তাহের জন্য বাজেট নির্ধারণ করুন। কখনই বিল বা পারিবারিক খরচের টাকায় বেট করবেন না। অ্যাকাউন্টে Deposit Limit এবং Loss Limit আগে থেকেই সেট করে রাখুন — JeetBuzz সাপোর্ট থেকে যেকোনো সময় Self-Exclusion সক্রিয় করা যায়।",
          "## পরবর্তী পদক্ষেপ",
          "এখনই অ্যাকাউন্ট সক্রিয় থাকলে [Live ক্রিকেট বেটিং](/live-cricket-betting), [ক্রিকেট এক্সচেঞ্জ গাইড](/cricket-exchange-guide), [Aviator গাইড](/aviator-guide) ও [VIP প্রোগ্রাম](/vip-program) পেজগুলো দেখুন। নতুন হলে আগে [রেজিস্ট্রেশন গাইড](/registration-guide) ও [ওয়েলকাম বোনাস](/welcome-bonus) সম্পন্ন করুন।",
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