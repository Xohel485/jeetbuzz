import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GetJeetBuzz — Independent JeetBuzz Bangladesh Guide" },
      { name: "description", content: "Who we are: a verified official affiliate partner of JeetBuzz, writing hands-on guides from Bangladesh. Not the JeetBuzz platform itself — signup and money flows happen on JeetBuzz." },
      { property: "og:title", content: "About GetJeetBuzz — Verified Official JeetBuzz Affiliate Partner" },
      { property: "og:description", content: "A verified official JeetBuzz affiliate partner. Independent editorial, real Bangladesh testing." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <GuidePage
      eyebrow="About us"
      title={<>A <span className="gold-text">verified official</span> JeetBuzz affiliate partner guide</>}
      subtitle="GetJeetBuzz is a small team of Bangladeshi bettors. We are a verified official affiliate partner of JeetBuzz — not the platform itself."
      subtitleByLocale={{
        bn: "GetJeetBuzz হলো বাংলাদেশি বেটরদের একটি ছোট দল। আমরা JeetBuzz-এর ভেরিফায়েড অফিসিয়াল অ্যাফিলিয়েট পার্টনার — প্ল্যাটফর্ম নিজে নই।",
        ur: "GetJeetBuzz پاکستانی اور بنگلہ دیشی کھلاڑیوں کی ایک چھوٹی ٹیم ہے۔ ہم JeetBuzz کے تصدیق شدہ آفیشل ایفیلیٹ پارٹنر ہیں — خود پلیٹ فارم نہیں۔",
        hi: "GetJeetBuzz दक्षिण एशियाई बेटर्स की एक छोटी टीम है। हम JeetBuzz के वेरिफाइड ऑफिशियल एफिलिएट पार्टनर हैं — प्लेटफ़ॉर्म स्वयं नहीं।",
      }}
      body={[
        "## What we are",
        "A verified official affiliate partner of JeetBuzz. We have a real commission agreement with the operator (revenue-share on net player loss) and earn when readers sign up via our outbound links — at no extra cost to you.",
        "## What we are not",
        "GetJeetBuzz.com is not the JeetBuzz platform itself. Account signup, login, deposits and withdrawals all happen on JeetBuzz's own site — never here. We are also not a login portal, not an APK host and not a customer support channel.",
        "## How we research",
        "We test signup, deposits, in-play markets and cash-outs ourselves. We document what we see, with dates.",
        "## Editorial standards",
        "Numbers (bonus %, withdrawal time, fees) are stamped with a 'last verified' date. We update or remove claims that become stale. Our affiliate commission does not affect our review scores or the accuracy of our guides — see the [Review Policy](/review-policy) for how we keep the relationship and the editorial separate.",
        "## Who writes this site",
        "Every guide and blog article is bylined to the GetJeetBuzz Editorial Team. See the [Author page](/author) for our background, how we test, and how often we re-verify each guide.",
        "## Contact",
        "Use the Contact page for editorial corrections or partnership enquiries.",
      ]}
      bodyByLocale={{
        bn: [
          "## আমরা কী",
          "JeetBuzz-এর ভেরিফায়েড অফিসিয়াল অ্যাফিলিয়েট পার্টনার। অপারেটরের সাথে আমাদের একটি প্রকৃত কমিশন চুক্তি আছে (নেট প্লেয়ার লসের রেভিনিউ-শেয়ার), এবং পাঠকরা আমাদের আউটবাউন্ড লিঙ্ক দিয়ে সাইন আপ করলে আমরা আয় করি — আপনার কোনো অতিরিক্ত খরচ ছাড়াই।",
          "## আমরা কী নই",
          "GetJeetBuzz.com মানে JeetBuzz প্ল্যাটফর্ম নয়। অ্যাকাউন্ট রেজিস্ট্রেশন, লগইন, ডিপোজিট এবং উইথড্র সবকিছু JeetBuzz-এর নিজস্ব সাইটে হয় — এখানে নয়। আমরা লগইন পোর্টাল, APK হোস্ট বা কাস্টমার সাপোর্ট চ্যানেলও নই।",
          "## আমরা কীভাবে রিসার্চ করি",
          "আমরা নিজে সাইনআপ, bKash/Nagad/Rocket ডিপোজিট, ইন-প্লে BPL/IPL মার্কেট এবং উইথড্রয়াল পরীক্ষা করি। যা দেখি তারিখসহ ডকুমেন্ট করি।",
          "## সম্পাদকীয় মান",
          "প্রতিটি সংখ্যা (বোনাস %, উইথড্রয়াল টাইম, ফি) 'last verified' তারিখসহ থাকে। পুরোনো তথ্য আপডেট বা সরিয়ে ফেলা হয়। অ্যাফিলিয়েট কমিশন আমাদের রিভিউ স্কোর বা গাইডের যথার্থতা প্রভাবিত করে না — বিস্তারিত [রিভিউ পলিসি](/review-policy) দেখুন।",
          "## এই সাইট কে লেখে",
          "প্রতিটি গাইড ও ব্লগ GetJeetBuzz Editorial Team-এর নামে। বিস্তারিত [Author পেজ](/author) দেখুন।",
          "## যোগাযোগ",
          "সম্পাদকীয় সংশোধন বা পার্টনারশিপের জন্য Contact পেজ ব্যবহার করুন।",
        ],
        ur: [
          "## ہم کیا ہیں",
          "JeetBuzz کے تصدیق شدہ آفیشل ایفیلیٹ پارٹنر۔ آپریٹر کے ساتھ ہمارا حقیقی کمیشن معاہدہ ہے (نیٹ پلیئر لاس پر ریونیو شیئر)، اور قارئین ہمارے لنکس کے ذریعے سائن اپ کریں تو ہمیں کمیشن ملتا ہے — آپ کو کوئی اضافی قیمت نہیں۔",
          "## ہم کیا نہیں ہیں",
          "GetJeetBuzz.com خود JeetBuzz پلیٹ فارم نہیں۔ اکاؤنٹ سائن اپ، لاگ ان، EasyPaisa/JazzCash ڈپازٹ اور وڈرا سب JeetBuzz کی اپنی سائٹ پر ہوتا ہے — یہاں نہیں۔ ہم لاگ ان پورٹل، APK ہوسٹ یا کسٹمر سپورٹ چینل بھی نہیں۔",
          "## ہم تحقیق کیسے کرتے ہیں",
          "ہم خود سائن اپ، ڈپازٹ، لائیو PSL/BPL/IPL مارکیٹس اور وڈرا ٹیسٹ کرتے ہیں۔ جو دیکھتے ہیں، تاریخ کے ساتھ درج کرتے ہیں۔",
          "## ادارتی معیار",
          "ہر نمبر (بونس %، وڈرا وقت، فیس) پر 'last verified' تاریخ ہے۔ پرانی معلومات اپڈیٹ یا ہٹا دی جاتی ہیں۔ ایفیلیٹ کمیشن ہمارے ریویو سکور پر اثر نہیں ڈالتا — تفصیل [Review Policy](/review-policy) دیکھیں۔",
          "## یہ سائٹ کون لکھتا ہے",
          "ہر گائیڈ اور بلاگ GetJeetBuzz Editorial Team کے نام سے ہے۔ [Author صفحہ](/author) دیکھیں۔",
          "## رابطہ",
          "ادارتی تصحیح یا پارٹنرشپ کے لیے Contact صفحہ استعمال کریں۔",
        ],
        hi: [
          "## हम क्या हैं",
          "JeetBuzz के वेरिफाइड ऑफिशियल एफिलिएट पार्टनर। ऑपरेटर के साथ हमारा वास्तविक कमीशन समझौता है (नेट प्लेयर लॉस पर रेवेन्यू-शेयर), और पाठक हमारे लिंक से साइन अप करने पर हमें कमीशन मिलता है — आपको कोई अतिरिक्त शुल्क नहीं।",
          "## हम क्या नहीं हैं",
          "GetJeetBuzz.com स्वयं JeetBuzz प्लेटफ़ॉर्म नहीं है। अकाउंट साइनअप, लॉगिन, UPI/PhonePe/Paytm डिपॉज़िट और विदड्रॉल सब JeetBuzz की अपनी साइट पर होते हैं — यहाँ नहीं। हम लॉगिन पोर्टल, APK होस्ट या कस्टमर सपोर्ट चैनल भी नहीं हैं।",
          "## हम कैसे रिसर्च करते हैं",
          "हम स्वयं साइनअप, डिपॉज़िट, लाइव IPL/BPL/PSL मार्केट्स और विदड्रॉल टेस्ट करते हैं। जो देखते हैं, तारीख के साथ दर्ज करते हैं।",
          "## संपादकीय मानक",
          "हर संख्या (बोनस %, विदड्रॉल समय, फीस) पर 'last verified' तिथि होती है। पुरानी जानकारी अपडेट या हटा दी जाती है। एफिलिएट कमीशन हमारे रिव्यू स्कोर को प्रभावित नहीं करता — विवरण [Review Policy](/review-policy) देखें।",
          "## यह साइट कौन लिखता है",
          "हर गाइड और ब्लॉग GetJeetBuzz Editorial Team के नाम से है। [Author पेज](/author) देखें।",
          "## संपर्क",
          "संपादकीय सुधार या पार्टनरशिप के लिए Contact पेज का उपयोग करें।",
        ],
      }}
    />
  ),
});