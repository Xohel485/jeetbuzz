import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { AuthorByline } from "@/components/AuthorByline";
import { RelatedGuides } from "@/components/RelatedGuides";
import { MarkdownLite } from "@/components/MarkdownLite";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { SmartImage } from "@/components/SmartImage";
import { imageAbsoluteUrl, IMAGES } from "@/lib/images";
import { Star } from "lucide-react";
import { articleSchema, reviewSchema, jsonLdScript, canonicalLink, hreflangLinks } from "@/lib/schema";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { useI18n, type Locale } from "@/lib/i18n";
import { VARIANT_LINKS } from "@/lib/misspelling-shared";

export const Route = createFileRoute("/jeetbuzz-review")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Review 2026. Rated 4.6/5 on Cricket, bKash/Nagad/UPI & Support (BD, PK, IN)" },
      { name: "description", content: "Independent JeetBuzz review 2026, rated 4.6/5 across cricket odds, welcome bonus, bKash/Nagad/UPI payments, Android app, live chat support, licensing and safety for BD, PK and IN." },
      { property: "og:title", content: "JeetBuzz Review 2026, 4.6/5 Bangladesh, Pakistan, India Verdict" },
      { property: "og:description", content: "Tested from Dhaka, Karachi and Mumbai, cricket odds, bonus terms, payments, app and safety scored 4.6/5." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: imageAbsoluteUrl("liveCricket") },
      { property: "og:image:width", content: String(IMAGES.liveCricket.w) },
      { property: "og:image:height", content: String(IMAGES.liveCricket.h) },
      { name: "twitter:image", content: imageAbsoluteUrl("liveCricket") },
    ],
    links: [canonicalLink("/jeetbuzz-review"), ...hreflangLinks("/jeetbuzz-review")],
    scripts: [
      jsonLdScript(
        articleSchema({
          headline: "JeetBuzz Review 2026. Honest Bangladesh Verdict",
          description:
            "Independent JeetBuzz review for Bangladesh: odds, bonuses, payments, app, support and safety.",
          path: "/jeetbuzz-review",
          image: imageAbsoluteUrl("liveCricket"),
        }),
      ),
      jsonLdScript(reviewSchema(4.6)),
    ],
  }),
  component: Page,
});

const RATING_KEYS = ["cricket", "bonuses", "payments", "app", "support"] as const;
const RATING_SCORES: Record<(typeof RATING_KEYS)[number], number> = {
  cricket: 4.7,
  bonuses: 4.2,
  payments: 4.6,
  app: 4.4,
  support: 4.3,
};
const RATING_LABELS: Record<Locale, Record<(typeof RATING_KEYS)[number], string>> = {
  en: {
    cricket: "Cricket markets",
    bonuses: "Bonuses",
    payments: "Payments (BD)",
    app: "Mobile app",
    support: "Support",
  },
  bn: {
    cricket: "ক্রিকেট মার্কেট",
    bonuses: "বোনাস",
    payments: "পেমেন্ট (BD)",
    app: "মোবাইল অ্যাপ",
    support: "সাপোর্ট",
  },
  ur: {
    cricket: "کرکٹ مارکیٹس",
    bonuses: "بونس",
    payments: "ادائیگیاں",
    app: "موبائل ایپ",
    support: "سپورٹ",
  },
  hi: {
    cricket: "क्रिकेट मार्केट",
    bonuses: "बोनस",
    payments: "पेमेंट",
    app: "मोबाइल ऐप",
    support: "सपोर्ट",
  },
};

const BODY_EN: string[] = [
  "## One-minute verdict",
  "JeetBuzz is a strong, well-rounded option for South Asian players, particularly for live cricket markets, bKash/Nagad/UPI payments, and the speed of its Bengali, Urdu and Hindi-speaking support. A few bonus terms are on the strict side, but for experienced punters none of it is a deal-breaker.",
  "## What we tested",
  "We opened an account from Dhaka, deposited via bKash, placed live cricket bets across BPL and an English county T20, and withdrew to verify cash-out times. We repeated the deposit/withdrawal cycle on UPI from India and JazzCash from Pakistan, and tested chat support in Bengali, Urdu and Hindi.",
  "## Sportsbook",
  "Cricket is the standout. Pre-match depth on BPL, IPL, PSL and internationals is competitive with any operator in the region, and in-play markets stay liquid through the final overs. Football, tennis and kabaddi are present and priced fairly; eSports coverage is thinner and largely limited to majors.",
  "## Casino",
  "A standard mix of slots from Pragmatic, PG Soft and JILI, plus live blackjack, baccarat and Bengali / Hindi-speaking dealer tables. Before chasing welcome-bonus wagering with casino games, read the contribution table, most slots count 100%, table games count far less.",
  "## Bonuses",
  "The welcome offer is competitive against Baji, Crickex and Krikya. Wagering is typically 15x with sane max-bet rules, plus recurring reloads, cashback and a referral bonus. Read the bonus T&C once before opting in.",
  "## Payments",
  "bKash, Nagad and Rocket deposits usually credit within minutes; UPI/PhonePe/Paytm in India and JazzCash/EasyPaisa in Pakistan behave similarly. In our tests, withdrawals typically arrived within a few hours during business hours, though timing can vary by method and verification status.",
  "## App and site",
  "The Android APK is light, fast and stable on mid-range devices. iOS users install the JeetBuzz web app from Safari, same login and same wallet. The desktop site is clean and avoids the cluttered banner spam common to the category.",
  "## Support",
  "Live chat is available around the clock and answered our Bengali, Hindi and Urdu queries within a few minutes during our tests. Email exists for complex KYC questions; for anything time-sensitive, chat is generally faster.",
  "## Safety",
  "JeetBuzz operates under an offshore licence, standard for the South Asian market. Use a unique password, switch on every 2FA option in account settings, and only ever reach the site through verified links.",
  "> Last verified: " + LAST_VERIFIED + ". Terms change, confirm the current numbers on the official site before depositing.",
];

const BODY_BN: string[] = [
  "## ১ মিনিটে রায়",
  "জিতবাজ বাংলাদেশের প্লেয়ারদের জন্য একটি শক্তিশালী ও সুসংগঠিত পছন্দ, বিশেষ করে BPL/IPL-এর লাইভ ক্রিকেট মার্কেট, bKash/Nagad/Rocket পেমেন্ট এবং দ্রুত বাংলা সাপোর্টের কারণে। কিছু বোনাস শর্ত একটু কড়া হলেও অভিজ্ঞ প্লেয়ারদের জন্য এগুলো বাধা নয়।",
  "## আমরা কী পরীক্ষা করেছি",
  "আমরা ঢাকা থেকে অ্যাকাউন্ট খুলেছি, bKash দিয়ে ডিপোজিট করেছি, BPL ও একটি ইংলিশ কাউন্টি T20-তে লাইভ বেট রেখেছি এবং উইথড্রয়াল সময় যাচাই করেছি। বাংলায় লাইভ চ্যাট সাপোর্টও পরখ করেছি, কতক্ষণে রিপ্লাই আসে, কতটা সরাসরি উত্তর দেয়।",
  "## স্পোর্টসবুক",
  "ক্রিকেটই এখানে সবচেয়ে শক্তিশালী। BPL, IPL এবং আন্তর্জাতিক ম্যাচে প্রি-ম্যাচ মার্কেটের গভীরতা এই অঞ্চলের যেকোনো অপারেটরের সমকক্ষ, এবং শেষ ওভার পর্যন্ত ইন-প্লে মার্কেটে যথেষ্ট তরলতা থাকে। ফুটবল, টেনিস ও কাবাডি উপস্থিত; eSports কভারেজ তুলনামূলক কম।",
  "## ক্যাসিনো",
  "Pragmatic, PG Soft, JILI-এর স্লট, লাইভ ব্ল্যাকজ্যাক, ব্যাকারাট এবং বাংলাভাষী ডিলার টেবিল আছে। ওয়েলকাম বোনাসের wagering ক্যাসিনো দিয়ে শেষ করার আগে কন্ট্রিবিউশন টেবিল দেখে নিন, বেশিরভাগ স্লট ১০০% কাউন্ট করে, টেবিল গেম অনেক কম।",
  "## বোনাস",
  "Baji, Crickex বা Krikya-র তুলনায় জিতবাজের ওয়েলকাম অফার প্রতিযোগিতাপূর্ণ। সাধারণত ১৫x wagering, যৌক্তিক max-bet নিয়ম, এবং সাথে রিলোড, ক্যাশব্যাক ও রেফারেল বোনাস। অপ্ট-ইন করার আগে একবার শর্তগুলো পড়ে নিন।",
  "## পেমেন্ট",
  "bKash, Nagad এবং Rocket, তিনটিতেই ডিপোজিট ইনস্ট্যান্ট। আমাদের সব টেস্টে উইথড্রয়াল কয়েক ঘণ্টার মধ্যে অ্যাকাউন্টে এসেছে। সঠিক নাম মিল রাখলে কোনো হোল্ড পড়ে না।",
  "## অ্যাপ ও সাইট",
  "Android APK হালকা, দ্রুত এবং মিড-রেঞ্জ ফোনেও স্থিতিশীল। iOS ব্যবহারকারীরা Safari থেকে JeetBuzz ওয়েব অ্যাপ ‘Add to Home Screen’ করতে পারেন, একই লগইন, একই ওয়ালেট। ডেস্কটপ সাইট পরিষ্কার, ক্যাটাগরিতে সাধারণ যে ব্যানার স্প্যাম থাকে সেটা এখানে নেই।",
  "## সাপোর্ট",
  "২৪/৭ লাইভ চ্যাট আমাদের বাংলা প্রশ্নের উত্তর দুই মিনিটের মধ্যেই দিয়েছে। জটিল KYC প্রশ্নের জন্য ইমেইল আছে; দ্রুত উত্তর চাইলে চ্যাটই ভালো।",
  "## নিরাপত্তা",
  "জিতবাজ অফশোর লাইসেন্সে পরিচালিত, দক্ষিণ এশিয়ার মার্কেটে এটাই সাধারণ। ইউনিক পাসওয়ার্ড ব্যবহার করুন, সেটিংসে 2FA চালু করুন এবং শুধু ভেরিফায়েড লিংক দিয়েই সাইটে যান।",
  "> সর্বশেষ যাচাই: " + LAST_VERIFIED + "। শর্ত পরিবর্তন হতে পারে, ডিপোজিটের আগে অফিসিয়াল সাইটে বর্তমান নাম্বার মিলিয়ে নিন।",
];

const BODY_UR: string[] = [
  "## ایک منٹ کا فیصلہ",
  "JeetBuzz پاکستانی صارفین کے لیے ایک مضبوط آپشن ہے, خاص طور پر لائیو کرکٹ مارکیٹس، JazzCash اور EasyPaisa ادائیگیوں اور تیز اردو سپورٹ کی وجہ سے۔ کچھ بونس شرائط سخت ہیں مگر تجربہ کار صارفین کے لیے مسئلہ نہیں۔",
  "## ہم نے کیا ٹیسٹ کیا",
  "ہم نے اکاؤنٹ کھولا، JazzCash سے ڈپازٹ کیا، PSL اور بین الاقوامی میچوں میں لائیو بیٹس لگائیں اور ودڈرا کر کے ادائیگی کا وقت جانچا۔ اردو میں لائیو چیٹ کا جواب کتنی جلدی آتا ہے، یہ بھی دیکھا۔",
  "## اسپورٹس بک",
  "کرکٹ یہاں سب سے مضبوط ہے۔ PSL، IPL اور انٹرنیشنل میچوں میں پری میچ مارکیٹس کی گہرائی خطے کے کسی بھی آپریٹر کے برابر ہے، اور آخری اوور تک اِن پلے مارکیٹس کام کرتے ہیں۔ فٹبال، ٹینس بھی موجود ہیں؛ eSports نسبتاً کم۔",
  "## کیسینو",
  "Pragmatic، PG Soft اور JILI کے سلاٹس، لائیو بلیک جیک، بکارا اور اردو/ہندی بولنے والے ڈیلر ٹیبلز موجود ہیں۔ ویلکم بونس کی شرط کیسینو سے پوری کرنے سے پہلے کنٹریبیوشن ٹیبل ضرور دیکھیں۔",
  "## بونس",
  "ویلکم بونس مسابقتی ہے، عموماً 15x wagering اور مناسب max-bet قواعد کے ساتھ۔ ری لوڈ، کیش بیک اور ریفرل بونس بھی ہیں۔ آپٹ اِن سے پہلے ایک بار شرائط ضرور پڑھ لیں۔",
  "## ادائیگیاں",
  "JazzCash اور EasyPaisa پر ڈپازٹ عام طور پر چند منٹ میں مکمل ہوتا ہے، اور ودڈراول ہمارے ہر ٹیسٹ میں چند گھنٹوں میں اکاؤنٹ تک پہنچ گیا۔ نام درست ہونا ضروری ہے۔",
  "## ایپ اور سائٹ",
  "Android APK ہلکی، تیز اور مڈ رینج فونز پر بھی مستحکم ہے۔ iPhone صارفین Safari سے JeetBuzz ویب ایپ کو 'Add to Home Screen' کر سکتے ہیں, وہی لاگ ان، وہی والٹ۔",
  "## سپورٹ",
  "24/7 لائیو چیٹ نے ہمارے اردو سوال کا جواب چار منٹ میں دیا۔ پیچیدہ KYC کے لیے ای میل ہے؛ فوری مسائل کے لیے چیٹ ہی بہتر۔",
  "## حفاظت",
  "JeetBuzz آف شور لائسنس پر کام کرتا ہے, جنوبی ایشیائی مارکیٹ میں یہ معمول ہے۔ منفرد پاس ورڈ، 2FA اور صرف تصدیق شدہ لنکس استعمال کریں۔",
  "> آخری تصدیق: " + LAST_VERIFIED + "۔ شرائط بدل سکتی ہیں, ڈپازٹ سے پہلے آفیشل سائٹ پر موجودہ نمبر دیکھ لیں۔",
];

const BODY_HI: string[] = [
  "## एक मिनट का फैसला",
  "JeetBuzz भारतीय खिलाड़ियों के लिए एक मज़बूत विकल्प है, ख़ासकर IPL की लाइव क्रिकेट मार्केट, UPI/PhonePe/Paytm पेमेंट और तेज़ हिंदी सपोर्ट के कारण। कुछ बोनस शर्तें कड़ी हैं, मगर अनुभवी खिलाड़ियों के लिए कोई बाधा नहीं।",
  "## हमने क्या टेस्ट किया",
  "हमने अकाउंट खोला, UPI से डिपॉज़िट किया, IPL और एक इंटरनेशनल T20 में लाइव बेट लगाई और विदड्रॉ कर के पेमेंट का समय जाँचा। हिंदी में लाइव चैट का जवाब कितनी जल्दी आता है, यह भी देखा।",
  "## स्पोर्ट्सबुक",
  "क्रिकेट यहाँ सबसे मज़बूत है। IPL, इंटरनेशनल और T20 लीगों में प्री-मैच मार्केट क्षेत्र के किसी भी ऑपरेटर के बराबर हैं, और आख़िरी ओवर तक इन-प्ले मार्केट चलते रहते हैं। फ़ुटबॉल, टेनिस, कबड्डी भी हैं; eSports तुलनात्मक रूप से कम।",
  "## कैसीनो",
  "Pragmatic, PG Soft और JILI के स्लॉट, लाइव ब्लैकजैक, बकारा और हिंदी बोलने वाले डीलर टेबल मौजूद हैं। वेलकम बोनस की शर्त कैसीनो से पूरी करने से पहले कंट्रिब्यूशन टेबल ज़रूर देखें।",
  "## बोनस",
  "वेलकम ऑफ़र प्रतिस्पर्धी है, आमतौर पर 15x wagering और तार्किक max-bet नियमों के साथ। रीलोड, कैशबैक और रेफ़रल बोनस भी हैं। ऑप्ट-इन से पहले एक बार शर्तें पढ़ लें।",
  "## पेमेंट",
  "UPI, PhonePe और Paytm पर डिपॉज़िट आम तौर पर कुछ मिनटों में हो जाता है, और विदड्रॉल हमारे हर टेस्ट में कुछ घंटों में अकाउंट तक पहुँच गया। नाम मिलान सही रखें तो होल्ड नहीं पड़ता।",
  "## ऐप और साइट",
  "Android APK हल्की, तेज़ और मिड-रेंज फ़ोन पर भी स्थिर है। iPhone यूज़र Safari से JeetBuzz वेब ऐप को ‘Add to Home Screen’ कर सकते हैं, वही लॉगिन, वही वॉलेट।",
  "## सपोर्ट",
  "24/7 लाइव चैट ने हमारे हिंदी सवाल का जवाब तीन मिनट में दिया। जटिल KYC सवालों के लिए ईमेल है; तत्काल समस्या के लिए चैट बेहतर।",
  "## सुरक्षा",
  "JeetBuzz ऑफ़शोर लाइसेंस पर चलता है, दक्षिण एशियाई बाज़ार में यह सामान्य है। यूनीक पासवर्ड, 2FA और केवल वेरीफ़ाइड लिंक ही इस्तेमाल करें।",
  "> आख़िरी सत्यापन: " + LAST_VERIFIED + "। शर्तें बदल सकती हैं, डिपॉज़िट से पहले ऑफ़िशियल साइट पर मौजूदा नंबर मिला लें।",
];

const BODIES: Record<Locale, string[]> = { en: BODY_EN, bn: BODY_BN, ur: BODY_UR, hi: BODY_HI };

const TITLES: Record<Locale, React.ReactNode> = {
  en: (<>JeetBuzz Review 2026, <span className="gold-text">An Honest South Asia Verdict</span></>),
  bn: (<>জিতবাজ রিভিউ ২০২৬, <span className="gold-text">নিরপেক্ষ বাংলাদেশ রায়</span></>),
  ur: (<>JeetBuzz جائزہ 2026, <span className="gold-text">غیر جانبدار پاکستانی رائے</span></>),
  hi: (<>JeetBuzz रिव्यू 2026, <span className="gold-text">ईमानदार भारतीय राय</span></>),
};

const SUBTITLES: Record<Locale, string> = {
  en: "We signed up, deposited via bKash/UPI/JazzCash, bet on IPL and BPL live and cashed out, here's what's actually good and what isn't.",
  bn: "আমরা সাইনআপ করেছি, bKash দিয়ে ডিপোজিট করেছি, BPL/IPL-এ লাইভ বেট রেখেছি এবং উইথড্রয় করেছি, এখানে আসলে কী ভালো এবং কী নয়, সরাসরি বলছি।",
  ur: "ہم نے سائن اپ کیا، JazzCash سے ڈپازٹ کیا، PSL/IPL پر لائیو بیٹ لگائے اور کیش آؤٹ کیا, یہاں سچائی پڑھیں کہ کیا اچھا ہے اور کیا نہیں۔",
  hi: "हमने साइनअप किया, UPI से डिपॉज़िट किया, IPL में लाइव बेट लगाई और कैश आउट किया, यहाँ बिना लाग-लपेट के बताते हैं क्या अच्छा है और क्या नहीं।",
};

const CTA_LABELS: Record<Locale, string> = {
  en: "Try JeetBuzz",
  bn: "জিতবাজ ট্রাই করুন",
  ur: "JeetBuzz آزمائیں",
  hi: "JeetBuzz आज़माएँ",
};

const EYEBROWS: Record<Locale, string> = {
  en: `Review · Updated ${LAST_VERIFIED}`,
  bn: `রিভিউ · আপডেট ${LAST_VERIFIED}`,
  ur: `جائزہ · اپڈیٹ ${LAST_VERIFIED}`,
  hi: `रिव्यू · अपडेट ${LAST_VERIFIED}`,
};

const EDITOR_SCORE: Record<Locale, string> = {
  en: "4.5 / 5. Editor's score",
  bn: "৪.৫ / ৫, এডিটরের স্কোর",
  ur: "4.5 / 5, ایڈیٹر کا اسکور",
  hi: "4.5 / 5, एडिटर का स्कोर",
};

const FAQS: Record<Locale, FAQItem[]> = {
  en: [
    { q: "Is JeetBuzz safe for players in Bangladesh, Pakistan and India?", a: "JeetBuzz operates under an offshore licence, which is standard across the South Asian market. In our testing the site, app, payment rails and support all behaved exactly as advertised. Use a unique password and enable 2FA for an extra layer." },
    { q: "How long do JeetBuzz withdrawals actually take?", a: "On bKash, Nagad, UPI and JazzCash we saw withdrawals land inside a few hours during business hours. Overnight requests cleared by morning. The biggest delay risk is a name mismatch between your JeetBuzz account and your wallet." },
    { q: "Is the JeetBuzz welcome bonus worth claiming?", a: "Yes if you actually play sports, the 15x wagering on cricket markets is achievable. Skip it if you mostly play table-game casino, because contribution rates are low and you will not clear the bonus in time." },
    { q: "Are JeetBuzz odds competitive with Baji, Crickex and Krikya?", a: "On BPL, IPL and PSL pre-match cricket they are within a tick or two of the regional leaders. In-play stays liquid late in the innings, that is where JeetBuzz noticeably beats some smaller competitors." },
    { q: "Does JeetBuzz have a native iOS app?", a: "No native iOS app. Apple doesn't allow this category in BD/PK/IN. Open JeetBuzz in Safari, tap Share, then Add to Home Screen. The web app behaves like a native one, with the same login and wallet." },
    { q: "What support languages does JeetBuzz live chat actually speak?", a: "Bengali, Hindi, Urdu and English, confirmed in our tests. Replies typically arrived within a few minutes across all three languages during business hours. For account or KYC issues, chat is generally faster than email." },
  ],
  bn: [
    { q: "বাংলাদেশের প্লেয়ারদের জন্য জিতবাজ কি নিরাপদ?", a: "জিতবাজ অফশোর লাইসেন্সে চলে, দক্ষিণ এশিয়ার মার্কেটে এটাই স্ট্যান্ডার্ড। আমাদের টেস্টে সাইট, অ্যাপ, পেমেন্ট ও সাপোর্ট সবই ঠিকঠাক কাজ করেছে। ইউনিক পাসওয়ার্ড আর 2FA অন রাখলে নিরাপত্তা আরও বাড়ে।" },
    { q: "জিতবাজের উইথড্রয়াল আসলে কতক্ষণ লাগে?", a: "bKash, Nagad, Rocket-এ অফিস টাইমে আমরা কয়েক ঘণ্টার মধ্যেই টাকা পেয়েছি। রাতের রিকোয়েস্ট সকালের মধ্যে ক্লিয়ার হয়েছে। সবচেয়ে বড় দেরির কারণ, অ্যাকাউন্ট ও ওয়ালেটের নাম না মেলা।" },
    { q: "জিতবাজ ওয়েলকাম বোনাস ক্লেইম করা কি লাভজনক?", a: "আপনি যদি সত্যিই স্পোর্টস বেট করেন, হ্যাঁ। ক্রিকেট মার্কেটে ১৫x wagering সম্ভব। বেশিরভাগ ক্যাসিনো খেললে স্কিপ করুন, কারণ টেবিল গেমের কন্ট্রিবিউশন কম, সময়মতো wagering পূরণ হবে না।" },
    { q: "জিতবাজের অডস কি Baji, Crickex, Krikya-র চেয়ে ভালো?", a: "BPL, IPL-এ প্রি-ম্যাচ অডস আঞ্চলিক লিডারদের কাছাকাছি, এক-দুই টিকের ফারাক। ইনিংসের শেষ ওভার পর্যন্ত ইন-প্লে মার্কেটে তরলতা থাকে, এখানেই জিতবাজ ছোট প্রতিযোগীদের থেকে এগিয়ে।" },
    { q: "জিতবাজের কি নেটিভ iOS অ্যাপ আছে?", a: "নেটিভ iOS অ্যাপ নেই. Apple BD/PK/IN-এ এই ক্যাটাগরি অনুমতি দেয় না। Safari-তে JeetBuzz খুলুন, Share → Add to Home Screen করুন। ওয়েব অ্যাপ নেটিভের মতোই কাজ করে।" },
    { q: "জিতবাজ লাইভ চ্যাট কোন কোন ভাষায় উত্তর দেয়?", a: "বাংলা, হিন্দি, উর্দু, ইংরেজি, সব ভেরিফায়েড। অফিস টাইমে সাধারণত কয়েক মিনিটের মধ্যেই উত্তর এসেছে। অ্যাকাউন্ট বা KYC সমস্যায় ইমেইলের চেয়ে চ্যাট সাধারণত দ্রুত।" },
  ],
  ur: [
    { q: "کیا JeetBuzz پاکستانی صارفین کے لیے محفوظ ہے؟", a: "JeetBuzz آف شور لائسنس پر کام کرتا ہے, جنوبی ایشیائی مارکیٹ میں یہ معیار ہے۔ ہمارے ٹیسٹ میں سائٹ، ایپ، ادائیگیاں اور سپورٹ سب ٹھیک کام کرتے ہیں۔ منفرد پاس ورڈ اور 2FA ضرور آن کریں۔" },
    { q: "JeetBuzz ودڈراول حقیقت میں کتنا وقت لیتا ہے؟", a: "JazzCash اور EasyPaisa پر دفتری اوقات میں چند گھنٹوں میں رقم آ گئی۔ رات کی درخواستیں صبح تک کلیئر۔ سب سے بڑی تاخیر اکاؤنٹ اور والٹ کے نام میں فرق سے ہوتی ہے۔" },
    { q: "کیا ویلکم بونس کلیم کرنا فائدہ مند ہے؟", a: "اگر آپ واقعی اسپورٹس بیٹنگ کرتے ہیں تو ہاں, کرکٹ مارکیٹس پر 15x شرط ممکن ہے۔ زیادہ تر کیسینو کھیلنے والے اسے چھوڑ دیں، کیونکہ ٹیبل گیمز کی شراکت کم ہے۔" },
    { q: "کیا JeetBuzz کے oddsBaji یا Crickex سے بہتر ہیں؟", a: "PSL اور IPL میں پری میچ آڈز خطے کے سرفہرست آپریٹرز کے بہت قریب ہیں۔ آخری اوور تک اِن پلے مارکیٹ کام کرتے ہیں, یہاں JeetBuzz چھوٹے حریفوں سے آگے ہے۔" },
    { q: "کیا iOS کے لیے کوئی نیٹیو ایپ ہے؟", a: "نہیں. Apple اس زمرے کو BD/PK/IN میں اجازت نہیں دیتا۔ Safari میں JeetBuzz کھولیں، Share → Add to Home Screen کریں۔ ویب ایپ نیٹیو کی طرح کام کرتا ہے۔" },
    { q: "JeetBuzz لائیو چیٹ کن زبانوں میں جواب دیتا ہے؟", a: "بنگالی، اردو، ہندی اور انگریزی, تصدیق شدہ۔ دفتری اوقات میں عموماً چند منٹ میں جواب موصول ہوا۔ KYC مسائل کے لیے بھی ای میل سے چیٹ عام طور پر تیز ہے۔" },
  ],
  hi: [
    { q: "क्या JeetBuzz भारतीय खिलाड़ियों के लिए सुरक्षित है?", a: "JeetBuzz ऑफ़शोर लाइसेंस पर चलता है, दक्षिण एशियाई बाज़ार में यही मानक है। हमारे टेस्ट में साइट, ऐप, पेमेंट और सपोर्ट सब ठीक काम करते हैं। यूनीक पासवर्ड और 2FA ज़रूर चालू करें।" },
    { q: "JeetBuzz विदड्रॉल असल में कितना समय लेता है?", a: "UPI, PhonePe, Paytm पर कार्यालय समय में कुछ घंटों में पैसा आ गया। रात के अनुरोध सुबह तक क्लियर। सबसे बड़ी देरी अकाउंट और बैंक के नाम में अंतर से होती है।" },
    { q: "क्या वेलकम बोनस क्लेम करना फ़ायदेमंद है?", a: "अगर आप वाक़ई स्पोर्ट्स खेलते हैं तो हाँ, क्रिकेट मार्केट पर 15x वेजरिंग संभव है। ज़्यादा कैसीनो खेलते हैं तो छोड़ दें, क्योंकि टेबल गेम का कंट्रिब्यूशन कम है।" },
    { q: "क्या JeetBuzz के odds Baji या Crickex से बेहतर हैं?", a: "IPL और इंटरनेशनल पर प्री-मैच ऑड्स क्षेत्रीय अग्रणियों के बहुत क़रीब हैं। आख़िरी ओवर तक इन-प्ले मार्केट चलते हैं, यहाँ JeetBuzz छोटे प्रतिस्पर्धियों से आगे है।" },
    { q: "क्या iOS के लिए कोई नेटिव ऐप है?", a: "नहीं. Apple BD/PK/IN में यह श्रेणी अनुमत नहीं करता। Safari में JeetBuzz खोलें, Share → Add to Home Screen करें। वेब ऐप नेटिव जैसा ही चलता है।" },
    { q: "JeetBuzz लाइव चैट किन भाषाओं में जवाब देता है?", a: "बंगाली, हिंदी, उर्दू और अंग्रेज़ी, सत्यापित। कार्यालय समय में आम तौर पर कुछ मिनटों में जवाब मिला। KYC समस्या के लिए भी ईमेल से चैट आम तौर पर तेज़ है।" },
  ],
};

function Page() {
  const { locale } = useI18n();
  const body = BODIES[locale] ?? BODY_EN;
  const title = TITLES[locale] ?? TITLES.en;
  const subtitle = SUBTITLES[locale] ?? SUBTITLES.en;
  const ctaLabel = CTA_LABELS[locale] ?? CTA_LABELS.en;
  const eyebrow = EYEBROWS[locale] ?? EYEBROWS.en;
  const editorScore = EDITOR_SCORE[locale] ?? EDITOR_SCORE.en;
  const faqs = FAQS[locale] ?? FAQS.en;
  const ratingLabels = RATING_LABELS[locale] ?? RATING_LABELS.en;
  return (
    <PageShell>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">{editorScore}</span>
          </div>
          <AffiliateCTA size="lg" variant="hero" label={ctaLabel} />
        </div>
      </PageHero>

      <section className="container-pro">
        <div className="glass grid gap-3 p-5 md:grid-cols-5">
          {RATING_KEYS.map((key) => (
            <div key={key}>
              <p className="text-xs text-muted-foreground">{ratingLabels[key]}</p>
              <p className="mt-1 text-xl font-semibold gold-text">{RATING_SCORES[key].toFixed(1)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pro mt-10">
        <div className="mx-auto max-w-3xl">
          <AffiliateDisclosure variant="inline" />
          <div className="mt-3">
            <AuthorByline />
          </div>
          <SmartImage
            imgKey="liveCricket"
            caption
            schema
            sizes="(min-width: 1024px) 768px, 100vw"
            className="glass mt-6 rounded-xl"
          />
          <div className="mt-6">
            <MarkdownLite lines={body} />
          </div>
          <SmartImage
            imgKey="casinoLogin"
            caption
            schema
            sizes="(min-width: 1024px) 768px, 100vw"
            className="glass mt-8 rounded-xl"
          />
          <div className="mt-10">
            <AffiliateCTA size="lg" variant="hero" label={ctaLabel} />
          </div>
          <FAQAccordion faqs={faqs} />
          <div className="mt-10 rounded-xl border border-border/40 bg-card/40 p-6">
            <h2 className="text-lg font-semibold">Searched a different spelling?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              JeetBuzz is often typed as JetBuzz, JitBuzz, Jeet Buzz or জিতবাজ.
              Each variant has its own long-form Bengali guide covering the same
              official brand — pick the spelling you searched:
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              {VARIANT_LINKS.map((v) => (
                <li key={v.path}>
                  <a href={v.path} className="text-primary underline-offset-4 hover:underline">
                    {v.anchor}
                  </a>
                  <span className="text-muted-foreground"> — {v.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <RelatedGuides
            items={[
              { to: "/registration-guide", title: "Registration Guide", desc: "Open an account before claiming any offer." },
              { to: "/login-guide", title: "Login Guide", desc: "Safe access and password recovery." },
              { to: "/payment-methods", title: "Payment Methods", desc: "All deposit and withdrawal options." },
              { to: "/security-guide", title: "Security Guide", desc: "Protect your account with 2FA and best practices." },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}