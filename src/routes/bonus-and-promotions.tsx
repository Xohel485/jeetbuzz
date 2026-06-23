import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";

export const Route = createFileRoute("/bonus-and-promotions")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Bonus & Promotions 2026 - Reloads, Cashback & Free Bets Explained" },
      { name: "description", content: "JeetBuzz bonus and promotions 2026 — welcome bonus, reloads, free bets and cashback rates explained, with the wagering and max-bet rules Bangladesh players must know." },
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
        "> **Quick summary:** JeetBuzz runs a deposit-match welcome (Sports OR Casino, not both), weekly reloads, cashback up to 10%, free bets and a referral bonus. Wagering is typically 15x for sports/slots and 25x for casino, with a 200–500 BDT max-bet rule while a bonus is active. Always opt in **before** depositing — bonuses are never added retroactively.",
        "## Welcome bonus",
        "JeetBuzz typically runs a deposit-match welcome bonus for sportsbook and a separate one for casino. Read the fine print — you usually pick one.",
        "## Promotions at a glance (2026)",
        "| Promotion | Typical Match | Wagering | Max Bet | Eligible Games |",
        "|---|---|---|---|---|",
        "| Sports Welcome | 100% up to 10,000 BDT | ~15x | 500 BDT | Sports @ odds ≥ 1.50 |",
        "| Casino Welcome | 150% up to 15,000 BDT | ~25x | 200 BDT | Slots 100%, Live 10% |",
        "| Weekly Reload | 25–50% | ~10x | 500 BDT | Sports & Slots |",
        "| Cashback | Up to 10% | None | n/a | Net losses, weekly |",
        "| Free Bet | 100–500 BDT | 1x (stake not returned) | n/a | Sports |",
        "| Referral | 500 BDT per friend | Friend must deposit + wager | n/a | All |",
        "## Wagering requirements",
        "Most bonuses carry ~15x wagering. A 1,000 BDT bonus needs around 15,000 BDT in qualifying bets before it (and any winnings) can be withdrawn.",
        "## Max bet rule",
        "While the bonus is active, single-bet caps apply. Going over can void the bonus.",
        "## Eligible games",
        "Sports and slots usually count fully. Live casino often contributes 10% or less.",
        "## Time limits",
        "Bonuses commonly expire in 7–30 days after activation.",
        "## Country-specific notes",
        "- **Bangladesh:** Welcome bonus is most rewarding for cricket bettors who play through IPL/BPL — sports wagering at odds ≥ 1.50 clears fastest. Fund through the [bKash guide](/bkash-guide) or [Nagad guide](/nagad-guide).",
        "- **Pakistan:** PSL season unlocks higher-cap reloads. Deposit via the [JazzCash guide](/jazzcash-guide) or [EasyPaisa guide](/easypaisa-guide).",
        "- **India:** IPL-season promotions stack on top of the standard welcome offer. Deposit through the [UPI guide](/upi-guide) or [PhonePe guide](/phonepe-guide).",
        "## How to claim — step by step",
        "1. Register a JeetBuzz account using the [Registration Guide](/registration-guide).",
        "2. Open **Promotions** from the top menu.",
        "3. Choose Sports or Casino welcome (you cannot stack both).",
        "4. Tap **Opt In** — the bonus must be active *before* you deposit.",
        "5. Make your qualifying deposit via the [Deposit Guide](/deposit-guide).",
        "6. The bonus credit appears in the Promotions wallet within 60 seconds.",
        "7. Wager through the requirement at qualifying odds; track progress in the Promotions widget.",
        "8. Once cleared, the funds move to your main balance and can be withdrawn via the [Withdrawal Guide](/withdrawal-guide).",
        "## Wagering math — worked examples",
        "- **1,000 BDT bonus @ 15x:** you must place 15,000 BDT in qualifying bets (odds ≥ 1.50) before withdrawing.",
        "- **10,000 BDT welcome @ 15x:** 150,000 BDT in qualifying turnover — realistic for daily cricket bettors over 14–21 days.",
        "- **5,000 BDT casino @ 25x:** 125,000 BDT in slot turnover. Live casino at 10% means you would need 1,250,000 BDT of live turnover instead — almost always not worth it.",
        "## Our take",
        "Take the bonus if you'd be betting anyway. Skip if the wagering doesn't suit your style.",
        "> Promotions change frequently — always confirm the current offer on the official site before depositing.",
        "## Ready to claim your bonus?",
        "Opt in first, then deposit. Use the [Deposit Guide](/deposit-guide) for the exact flow and the [Welcome Bonus](/welcome-bonus) page for the current match percentage.",
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
      faqs={[
        { q: "Can I claim more than one welcome bonus?", a: "No — you choose Sports OR Casino. After clearing the first, you become eligible for ongoing reloads and cashback." },
        { q: "Does live casino count toward wagering?", a: "Usually only 10% — meaning 1 BDT bet at live blackjack counts as 0.10 BDT toward the requirement. Slots and pre-match sports clear bonuses fastest." },
        { q: "What happens if I withdraw with an active bonus?", a: "The bonus and any unspent bonus-derived winnings are forfeited. Always finish wagering before cashing out." },
        { q: "Are bonuses available in Pakistan and India?", a: "Yes — JeetBuzz runs localized promotions in PKR and INR. Some offers are region-specific around PSL and IPL." },
        { q: "What is the max bet while a bonus is active?", a: "Typically 200–500 BDT per single bet. Exceeding the cap can void the entire bonus, including winnings." },
        { q: "Do free bets refund the stake?", a: "No. Free bets pay out winnings only — the stake amount is not returned." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "একাধিক ওয়েলকাম বোনাস নেওয়া যাবে?", a: "না — Sports বা Casino একটি বেছে নিতে হবে। প্রথমটি ক্লিয়ার করার পর রিলোড ও ক্যাশব্যাক চালু হয়।" },
          { q: "Live casino কি wagering-এ গণনা হয়?", a: "সাধারণত মাত্র 10% — স্লট ও প্রি-ম্যাচ স্পোর্টস বোনাস দ্রুত ক্লিয়ার করে।" },
          { q: "অ্যাক্টিভ বোনাসে উইথড্র করলে কী হবে?", a: "বোনাস ও বোনাস থেকে আসা winnings বাতিল হবে। উইথড্রর আগে wagering শেষ করুন।" },
          { q: "Max bet সীমা কত?", a: "সাধারণত প্রতি বাজি 200–500 টাকা। সীমা ভাঙলে পুরো বোনাস বাতিল হতে পারে।" },
          { q: "Free bet stake ফেরত আসে?", a: "না — কেবল winnings জমা হয়, stake ফেরত নয়।" },
        ],
        ur: [
          { q: "کیا میں ایک سے زیادہ ویلکم بونس لے سکتا ہوں؟", a: "نہیں — Sports یا Casino میں سے ایک منتخب کریں۔" },
          { q: "کیا لائیو کیسینو ویجرنگ میں شمار ہوتا ہے؟", a: "عام طور پر صرف 10%۔ سلاٹس اور پری میچ اسپورٹس بونس کو سب سے تیز کلیئر کرتے ہیں۔" },
          { q: "فعال بونس کے ساتھ ودڈرا کرنے سے کیا ہوگا؟", a: "بونس اور بونس سے بنی جیت ضبط ہو جائے گی۔" },
          { q: "میکس بیٹ کی حد کیا ہے؟", a: "عام طور پر فی بیٹ 200–500 PKR۔ حد سے زیادہ بیٹ پورا بونس کالعدم کر سکتی ہے۔" },
          { q: "کیا فری بیٹ سٹیک واپس کرتا ہے؟", a: "نہیں — صرف جیت کی رقم ادا ہوتی ہے۔" },
        ],
        hi: [
          { q: "क्या मैं एक से ज़्यादा वेलकम बोनस ले सकता हूँ?", a: "नहीं — Sports या Casino में से एक चुनें।" },
          { q: "क्या लाइव कसीनो वेजरिंग में गिना जाता है?", a: "आम तौर पर सिर्फ़ 10%। स्लॉट्स और प्री-मैच स्पोर्ट्स बोनस सबसे तेज़ क्लियर करते हैं।" },
          { q: "सक्रिय बोनस के साथ विदड्रॉल करने पर क्या होगा?", a: "बोनस और बोनस से बनी जीत ज़ब्त हो जाएगी।" },
          { q: "मैक्स बेट सीमा क्या है?", a: "आम तौर पर प्रति बेट ₹200–500। सीमा से ऊपर बेट पूरा बोनस रद्द कर सकती है।" },
          { q: "क्या फ्री बेट स्टेक वापस करता है?", a: "नहीं — केवल जीत की राशि दी जाती है।" },
        ],
      }}
      related={[
        { to: "/registration-guide", title: "Registration Guide", desc: "Open an account to claim the welcome bonus." },
        { to: "/deposit-guide", title: "Deposit Guide", desc: "Fund your account before opting in." },
        { to: "/vip-program", title: "VIP Program", desc: "Long-term reward tiers beyond the welcome bonus." },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review", desc: "Pillar review of the operator." },
      ]}
    />
  ),
});