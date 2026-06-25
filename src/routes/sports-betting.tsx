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
      faqs={[
        { q: "Which sports beyond cricket have the deepest liquidity on JeetBuzz?", a: "Football (especially EPL, La Liga and Champions League) has the deepest non-cricket liquidity, followed by tennis Grand Slams and Pro Kabaddi League playoffs." },
        { q: "Are eSports markets reliable on JeetBuzz?", a: "Yes for tier-1 events (CS Majors, The International, VCT). Tier-3 leagues can have shallow liquidity and wider margins — stick to major tournaments." },
        { q: "What does a sharp line move tell me?", a: "A consistent move against the public side usually reflects informed money — squad changes, weather, late injuries. It does not guarantee a winner, but it is a stronger signal than crowd opinion." },
        { q: "Is Asian Handicap better than 1X2 for football?", a: "For close matches yes — it removes the draw and tightens variance. For mismatched fixtures the 1X2 market is often easier to read." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "ক্রিকেট ছাড়া কোন স্পোর্টসে JeetBuzz-এ সবচেয়ে বেশি লিকুইডিটি?", a: "ফুটবলে — বিশেষত EPL, La Liga ও চ্যাম্পিয়নস লিগ। এরপর টেনিসের গ্র্যান্ড স্ল্যাম এবং প্রো কাবাডি লিগের প্লে-অফ পর্যায়।" },
          { q: "eSports মার্কেট কতটা নির্ভরযোগ্য?", a: "টিয়ার-১ ইভেন্ট (CS Major, The International, VCT) যথেষ্ট স্থির। ছোট টুর্নামেন্টে লিকুইডিটি কম, মার্জিন বেশি — তাই বড় ইভেন্টে সীমাবদ্ধ থাকুন।" },
          { q: "শার্প লাইন মুভমেন্ট দেখলে কী বুঝব?", a: "জনতার বিপরীতে ধারাবাহিক মুভমেন্ট মানে সাধারণত ইনফর্মড মানি প্রবেশ করেছে — স্কোয়াড পরিবর্তন, আবহাওয়া বা চোটের তথ্য। এটি গ্যারান্টি নয়, তবে গণমতের চেয়ে শক্তিশালী সংকেত।" },
          { q: "ফুটবলে Asian Handicap কি 1X2-এর চেয়ে ভালো?", a: "ক্লোজ ম্যাচে — হ্যাঁ, ড্র বাদ যায় ও ভ্যারিয়েন্স কমে। বড় ব্যবধানের ম্যাচে 1X2 পড়া সহজ।" },
          { q: "প্রি-ম্যাচ নাকি ইন-প্লে — কোনটা ভালো?", a: "ফুটবলে গবেষণার সুযোগ থাকলে প্রি-ম্যাচই ভালো। টেনিস ও কাবাডিতে ইন-প্লে অডস দ্রুত ভ্যালু দেয়, তবে স্থিতিশীল ইন্টারনেট ছাড়া ঝুঁকিপূর্ণ।" },
        ],
      }}
      related={[
        { to: "/live-cricket-betting", title: "Live Cricket Betting" },
        { to: "/cricket-exchange-guide", title: "Cricket Exchange Guide" },
        { to: "/aviator-guide", title: "Aviator & Crash Games" },
        { to: "/vip-program", title: "VIP Program" },
        { to: "/welcome-bonus", title: "Welcome Bonus" },
      ]}
    />
  ),
});