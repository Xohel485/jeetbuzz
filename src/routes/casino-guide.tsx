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
          "## স্লট",
          "প্রধান স্টুডিও থেকে শত শত স্লট। ৯৬%-এর বেশি RTP প্রকাশিত গেমেই থাকুন।",
          "## লাইভ ক্যাসিনো",
          "লাইভ ব্ল্যাকজ্যাক, ব্যাকারাট, রুলেট এবং বাংলাদেশি ব্যবহারকারীদের জন্য কয়েকটি বাংলা-ভাষী টেবিল।",
          "## ক্র্যাশ ও ইনস্ট্যান্ট গেম",
          "Aviator ধাঁচের ক্র্যাশ গেম জনপ্রিয় কিন্তু হাই ভ্যারিয়েন্স — সেশন বাজেট ঠিক করুন।",
          "## বোনাস কন্ট্রিবিউশন",
          "লাইভ ক্যাসিনো সাধারণত ওয়েজারিং-এ <১০% যোগ করে। স্পোর্টসবুক বোনাস ক্লিয়ার করা সহজ।",
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
    />
  ),
});