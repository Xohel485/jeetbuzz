import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";

export const Route = createFileRoute("/bonus-and-promotions")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Bonus & Promotions — Terms Explained | GetJeetBuzz" },
      { name: "description", content: "JeetBuzz welcome bonus, reloads, free bets and cashback — what the wagering terms actually mean for Bangladeshi players." },
      { property: "og:title", content: "JeetBuzz Bonus & Promotions — Terms Explained" },
      { property: "og:description", content: "What JeetBuzz bonus terms really mean — wagering, max bet, eligible games." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("bonus") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("bonus") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Bonuses & Promotions</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">বোনাস ও প্রোমোশন</span></>,
        ur: <>JeetBuzz <span className="gold-text">بونس اور پروموشنز</span></>,
        hi: <>JeetBuzz <span className="gold-text">बोनस और प्रोमोशन</span></>,
      }}
      subtitle="A plain-English breakdown of the welcome offer, recurring reloads and the wagering terms that decide whether a bonus is actually worth taking."
      subtitleByLocale={{
        bn: "ওয়েলকাম বোনাস, রিলোড অফার ও wagering শর্ত — কোন বোনাস আসলে নেওয়ার মতো, সরল বাংলায় ব্যাখ্যা।",
        ur: "ویلکم بونس، ری لوڈ آفرز اور wagering شرائط — کون سا بونس واقعی فائدہ مند ہے، آسان اردو میں۔",
        hi: "वेलकम बोनस, रीलोड ऑफ़र और wagering शर्तें — कौन-सा बोनस सच में लेने लायक है, सरल हिंदी में।",
      }}
      heroImage="bonus"
      body={[
        "## Welcome bonus",
        "JeetBuzz typically runs a deposit-match welcome bonus for sportsbook and a separate one for casino. Read the fine print — you usually pick one.",
        "## Wagering requirements",
        "Most bonuses carry ~15x wagering. A 1,000 BDT bonus needs around 15,000 BDT in qualifying bets before it (and any winnings) can be withdrawn.",
        "## Max bet rule",
        "While the bonus is active, single-bet caps apply. Going over can void the bonus.",
        "## Eligible games",
        "Sports and slots usually count fully. Live casino often contributes 10% or less.",
        "## Time limits",
        "Bonuses commonly expire in 7–30 days after activation.",
        "## Our take",
        "Take the bonus if you'd be betting anyway. Skip if the wagering doesn't suit your style.",
        "> Promotions change frequently — always confirm the current offer on the official site before depositing.",
      ]}
      bodyByLocale={{
        bn: [
          "## ওয়েলকাম বোনাস",
          "জিতবাজ সাধারণত স্পোর্টসবুকের জন্য একটা ডিপোজিট-ম্যাচ ওয়েলকাম বোনাস এবং ক্যাসিনোর জন্য আলাদা বোনাস দেয়। শর্ত ভালো করে পড়ুন — সাধারণত একটাই নিতে পারবেন।",
          "## Wagering শর্ত",
          "অধিকাংশ বোনাসে ~15x wagering থাকে। ১,০০০ টাকার বোনাস তুলতে হলে প্রায় ১৫,০০০ টাকার যোগ্য বাজি ধরতে হবে।",
          "## Max bet নিয়ম",
          "বোনাস অ্যাক্টিভ থাকা অবস্থায় প্রতিটা বাজির সর্বোচ্চ সীমা থাকে — সীমা অতিক্রম করলে বোনাস বাতিল হতে পারে।",
          "## যোগ্য গেম",
          "স্পোর্টস ও স্লট সাধারণত ১০০% গণনা হয়। লাইভ ক্যাসিনো প্রায়ই ১০% বা কম অবদান রাখে।",
          "## সময়সীমা",
          "বোনাস সাধারণত অ্যাক্টিভেশনের ৭–৩০ দিনের মধ্যে শেষ হয়।",
          "## আমাদের মতামত",
          "যদি এমনিতেই বাজি ধরতেন, বোনাস নিন। যদি wagering মানানসই না হয়, এড়িয়ে যান।",
          "> অফার ঘন ঘন বদলায় — ডিপোজিটের আগে অফিসিয়াল সাইটে শর্ত যাচাই করুন।",
        ],
        ur: [
          "## ویلکم بونس",
          "JeetBuzz عام طور پر اسپورٹس بک کے لیے ڈپازٹ میچ ویلکم بونس اور کیسینو کے لیے علیحدہ بونس دیتا ہے۔ شرائط غور سے پڑھیں — عام طور پر آپ ایک ہی منتخب کر سکتے ہیں۔",
          "## Wagering شرائط",
          "زیادہ تر بونس میں ~15x wagering ہوتا ہے۔ 1,000 PKR کے بونس کو نکالنے کے لیے تقریباً 15,000 PKR کی اہل بیٹس لگانی پڑیں گی۔",
          "## Max bet اصول",
          "بونس فعال ہونے پر فی بیٹ کی حد لگ جاتی ہے — حد سے زیادہ بیٹ سے بونس کالعدم ہو سکتا ہے۔",
          "## اہل گیمز",
          "اسپورٹس اور سلاٹس عام طور پر مکمل گنتی میں آتے ہیں۔ لائیو کیسینو اکثر 10% یا کم۔",
          "## وقت کی حد",
          "بونس عام طور پر فعال ہونے کے 7–30 دن میں ختم ہو جاتا ہے۔",
          "## ہماری رائے",
          "اگر آپ ویسے بھی بیٹ لگانے والے ہیں تو بونس لیں۔ اگر شرائط آپ کے انداز سے مطابق نہیں تو چھوڑ دیں۔",
          "> پروموشنز اکثر بدلتے ہیں — ڈپازٹ سے پہلے آفیشل سائٹ پر موجودہ آفر کی تصدیق کریں۔",
        ],
        hi: [
          "## वेलकम बोनस",
          "JeetBuzz आम तौर पर स्पोर्ट्सबुक के लिए डिपॉज़िट-मैच वेलकम बोनस और कसीनो के लिए अलग बोनस देता है। शर्तें ध्यान से पढ़ें — आम तौर पर एक ही चुन सकते हैं।",
          "## Wagering शर्तें",
          "ज़्यादातर बोनस में ~15x wagering होता है। 1,000 INR के बोनस को निकालने के लिए लगभग 15,000 INR की योग्य बेट्स लगानी होंगी।",
          "## Max bet नियम",
          "बोनस सक्रिय रहते समय हर बेट की सीमा होती है — सीमा से ज़्यादा बेट से बोनस रद्द हो सकता है।",
          "## योग्य गेम्स",
          "स्पोर्ट्स और स्लॉट्स आम तौर पर पूरा गिने जाते हैं। लाइव कसीनो अक्सर 10% या कम।",
          "## समय सीमा",
          "बोनस आम तौर पर सक्रिय होने के 7–30 दिनों में समाप्त हो जाता है।",
          "## हमारी राय",
          "अगर आप वैसे भी बेट लगाने वाले हैं तो बोनस लें। अगर शर्तें आपके अनुकूल नहीं हैं तो छोड़ दें।",
          "> प्रोमोशन अक्सर बदलते हैं — डिपॉज़िट से पहले ऑफ़िशियल साइट पर मौजूदा ऑफ़र की पुष्टि करें।",
        ],
      }}
      articleHeadline="JeetBuzz Bonus & Promotions"
      articleDescription="Welcome bonus, reloads and wagering terms explained for BD, PK and IN players."
      articlePath="/bonus-and-promotions"
      related={[
        { to: "/registration-guide", title: "Registration Guide", desc: "Open an account to claim the welcome bonus." },
        { to: "/deposit-guide", title: "Deposit Guide", desc: "Fund your account before opting in." },
        { to: "/vip-program", title: "VIP Program", desc: "Long-term reward tiers beyond the welcome bonus." },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review", desc: "Pillar review of the operator." },
      ]}
    />
  ),
});