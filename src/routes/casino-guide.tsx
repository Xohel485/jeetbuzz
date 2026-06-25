import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";

export const Route = createFileRoute("/casino-guide")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Casino Guide 2026 - Slots, Live Tables, RTP & Bengali Dealers" },
      { name: "description", content: "JeetBuzz casino guide 2026 — what slots are worth playing, RTP numbers to look for, live tables, Bengali-speaking dealers and how casino bonuses are wagered." },
      { property: "og:title", content: "JeetBuzz Casino Guide — Slots, Live Tables & RTP" },
      { property: "og:description", content: "Slots, live tables and RTP guidance for JeetBuzz casino." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("casinoLogin") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("casinoLogin") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Casino Guide</span></>}
      subtitle="A quick, honest tour of the JeetBuzz casino — slots, live tables, Bengali dealers and the bonus contribution gotchas."
      heroImage="casinoLogin"
      inlineImage="iosCasino"
      body={[
        "## Slots",
        "Hundreds of slots from major studios. Stick to titles with published RTP above 96%.",
        "## Live casino",
        "Live blackjack, baccarat, roulette and a few Bengali-speaking tables for Bangladeshi users.",
        "## Crash & instant games",
        "Aviator-style crash games are popular but high variance — set a session budget.",
        "## Bonus contribution",
        "Live casino usually contributes <10% to wagering. Sportsbook bonuses are easier to clear.",
      ]}
      subtitleByLocale={{
        bn: "JeetBuzz ক্যাসিনোর সংক্ষিপ্ত, সৎ ট্যুর — স্লট, লাইভ টেবিল, বাংলা ডিলার এবং বোনাস কন্ট্রিবিউশনের সতর্কতা।",
        ur: "JeetBuzz کیسینو کا مختصر ایماندار جائزہ — سلاٹ، لائیو ٹیبل اور بونس کنٹری بیوشن کی شرائط۔",
        hi: "JeetBuzz कैसीनो का संक्षिप्त ईमानदार दौरा — स्लॉट, लाइव टेबल और बोनस कॉन्ट्रिब्यूशन की बातें।",
      }}
      bodyByLocale={{
        bn: [
          "JeetBuzz ক্যাসিনো বাংলাদেশি প্লেয়ারদের কাছে শুধু গেমের বৈচিত্র্যের জন্যই নয়, লাইভ টেবিলে বাংলা-ভাষী ডিলার এবং দ্রুত ডিপোজিট-উইথড্রয়ালের জন্যও পরিচিত। এই গাইডে স্লট, লাইভ টেবিল, ক্র্যাশ গেম ও বোনাস কন্ট্রিবিউশন — প্রতিটি বিভাগ বাংলাদেশের ব্যবহারকারীর দৃষ্টিকোণ থেকে খোলাখুলি ব্যাখ্যা করা হলো।",
          "## স্লট — বৈচিত্র্যের শেষ নেই, তবে নির্বাচন গুরুত্বপূর্ণ",
          "Pragmatic Play, PG Soft, JILI, Habanero ও Spadegaming-এর মতো বড় স্টুডিওর শত শত স্লট লোড করা থাকে। RTP (Return To Player) প্রকাশিত আছে এমন গেমেই থাকুন এবং সম্ভব হলে ৯৬%-এর বেশি RTP বেছে নিন। হাই-ভোলাটিলিটি স্লটে বড় উইন হয়, তবে ব্যাংকরোলও দ্রুত শেষ হতে পারে — নতুন হলে মিডিয়াম ভোলাটিলিটি দিয়ে শুরু করুন।",
          "## লাইভ ক্যাসিনো — Evolution ও Ezugi-এর গুণমান",
          "লাইভ ব্ল্যাকজ্যাক, ব্যাকারাট, রুলেট, ড্রাগন টাইগার এবং বাংলাদেশি প্লেয়ারদের জন্য বাংলা-ভাষী টেবিল পাওয়া যায়। লাইভ টেবিলে ন্যূনতম স্টেক সাধারণত স্লটের চেয়ে বেশি; নতুন হলে আগে ফ্রি-প্লে মোডে নিয়ম বুঝে নিন। ডিলারের সঙ্গে চ্যাটে বাংলায় যোগাযোগ করা যায়।",
          "## ক্র্যাশ ও ইনস্ট্যান্ট গেম",
          "Aviator, JetX, Crash X ও Mines — এগুলো দ্রুতগতির, কয়েক সেকেন্ডের রাউন্ড। বিনোদনের জন্য চমৎকার, কিন্তু হাই ভ্যারিয়েন্স — সেশনের জন্য নির্দিষ্ট বাজেট রাখুন। বিস্তারিত কৌশলের জন্য [Aviator গাইড](/aviator-guide) দেখুন।",
          "## RTP ও হাউস এজ সম্পর্কে মৌলিক ধারণা",
          "| গেম টাইপ | সাধারণ RTP রেঞ্জ | হাউস এজ |",
          "|---|---|---|",
          "| জনপ্রিয় স্লট | ৯৪%–৯৭% | ৩%–৬% |",
          "| ব্ল্যাকজ্যাক (সঠিক কৌশলে) | ৯৯%+ | <১% |",
          "| ব্যাকারাট (ব্যাঙ্কার) | ৯৮.৯৪% | ১.০৬% |",
          "| ইউরোপীয় রুলেট | ৯৭.৩% | ২.৭% |",
          "| ক্র্যাশ গেম | ~৯৭% | ~৩% |",
          "## বোনাস কন্ট্রিবিউশন — পড়ুন কনফার্ম করার আগে",
          "ক্যাসিনো ওয়েলকাম বোনাসে সব গেম সমান ওজন পায় না। সাধারণত স্লট ১০০%, টেবিল গেম ১০–২০%, লাইভ ক্যাসিনো প্রায় ১০% এর কাছাকাছি যোগ করে। ওয়েজারিং দ্রুত শেষ করতে চাইলে স্লট বেছে নিন; বিস্তারিত শর্তের জন্য [ওয়েলকাম বোনাস](/welcome-bonus) দেখুন।",
          "## দায়িত্বশীল গেমিং",
          "ক্যাসিনো গেম দীর্ঘমেয়াদে গাণিতিকভাবে ক্ষতিকর — এটি বিনোদন, আয়ের পথ নয়। অ্যাকাউন্টে Deposit ও Session Limit সেট করুন; প্রয়োজনে [Responsible Gaming](/responsible-gaming) পেজ থেকে Self-Exclusion সক্রিয় করুন।",
        ],
        ur: [
          "## سلاٹس",
          "بڑے اسٹوڈیوز سے سینکڑوں سلاٹ۔ صرف وہ گیمز کھیلیں جن کا RTP 96% سے زیادہ ہو۔",
          "## لائیو کیسینو",
          "لائیو بلیک جیک، بکارا، رولیٹ — اردو بولنے والے ڈیلر بھی موجود ہیں۔",
          "## کریش اور انسٹنٹ گیمز",
          "ایویئیٹر طرز کے کریش گیمز مقبول ہیں مگر اتار چڑھاؤ زیادہ — سیشن بجٹ مقرر کریں۔",
          "## بونس کنٹری بیوشن",
          "لائیو کیسینو عام طور پر ویجرنگ میں 10% سے کم حصہ ڈالتا ہے۔ اسپورٹس بک بونس آسان ہوتے ہیں۔",
        ],
        hi: [
          "## स्लॉट्स",
          "बड़े स्टूडियो से सैकड़ों स्लॉट। 96% से ज़्यादा RTP वाले गेम्स ही चुनें।",
          "## लाइव कैसीनो",
          "लाइव ब्लैकजैक, बकारा, रूलेट और हिंदी समझने वाले डीलर भी मौजूद।",
          "## क्रैश और इंस्टेंट गेम्स",
          "एविएटर जैसे क्रैश गेम्स लोकप्रिय हैं पर हाई वेरिएंस — सेशन बजट तय करें।",
          "## बोनस कॉन्ट्रिब्यूशन",
          "लाइव कैसीनो आमतौर पर वेजरिंग में 10% से कम योगदान करता है। स्पोर्ट्सबुक बोनस आसान।",
        ],
      }}
      faqs={[
        { q: "Which casino games have the best odds for the player?", a: "Blackjack with correct basic strategy approaches 99%+ RTP, followed by Baccarat (Banker) and European Roulette. Slots vary widely — check published RTP before playing." },
        { q: "Are live dealer tables available in Bengali?", a: "Yes — JeetBuzz lists a small number of Bengali-speaking live tables alongside standard English and Hindi tables from Evolution and Ezugi." },
        { q: "How is the casino welcome bonus wagered?", a: "Wagering contributions vary by game type — slots typically count 100%, table games 10–20%, live casino around 10%. Confirm the latest terms in the cashier before opting in." },
        { q: "Is the casino fair?", a: "Game RNGs and live dealer feeds come from third-party studios with independent audits. The house edge exists regardless — set a session budget." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "কোন ক্যাসিনো গেমে প্লেয়ারের জন্য সবচেয়ে ভালো অডস?", a: "সঠিক বেসিক স্ট্র্যাটেজিতে ব্ল্যাকজ্যাক ৯৯%+ RTP দেয়। এরপর ব্যাকারাট (ব্যাঙ্কার) ও ইউরোপীয় রুলেট। স্লটে RTP ভিন্ন — খেলার আগে নিশ্চিত হোন।" },
          { q: "লাইভ ডিলার টেবিল কি বাংলায় পাওয়া যায়?", a: "হ্যাঁ — JeetBuzz-এ Evolution ও Ezugi-র কিছু বাংলা-ভাষী টেবিল আছে; পাশাপাশি ইংরেজি ও হিন্দি টেবিলও রয়েছে।" },
          { q: "ক্যাসিনো ওয়েলকাম বোনাসের ওয়েজারিং কীভাবে হয়?", a: "গেম অনুযায়ী কন্ট্রিবিউশন আলাদা — স্লট সাধারণত ১০০%, টেবিল গেম ১০–২০%, লাইভ ক্যাসিনো প্রায় ১০%। কনফার্ম করার আগে ক্যাশিয়ারে শর্ত দেখুন।" },
          { q: "JeetBuzz ক্যাসিনো কি ন্যায্য?", a: "RNG ও লাইভ ফিড স্বনামধন্য তৃতীয় পক্ষ স্টুডিও থেকে আসে এবং স্বাধীন অডিট হয়। হাউস এজ থাকেই — সেশন বাজেট ঠিক করুন।" },
          { q: "ক্যাসিনো খেলার জন্য কোন ডিপোজিট রেইল ভালো?", a: "বাংলাদেশের প্লেয়াররা সাধারণত [bKash](/bkash-guide) বা [Nagad](/nagad-guide) ব্যবহার করেন — দ্রুত ক্রেডিট হয়। বড় ডিপোজিটে USDT TRC20 বিবেচনা করতে পারেন।" },
        ],
      }}
      related={[
        { to: "/aviator-guide", title: "Aviator & Crash Games" },
        { to: "/welcome-bonus", title: "Welcome Bonus" },
        { to: "/vip-program", title: "VIP Program" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
      ]}
    />
  ),
});