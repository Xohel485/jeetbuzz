import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure | GetJeetBuzz" },
      { name: "description", content: "How GetJeetBuzz earns money from affiliate links to JeetBuzz." },
      { property: "og:title", content: "Affiliate Disclosure | GetJeetBuzz" },
      { property: "og:description", content: "How GetJeetBuzz earns from affiliate links." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => (
    <GuidePage
      eyebrow="Legal"
      title={<>Affiliate <span className="gold-text">Disclosure</span></>}
      showDisclosure={false}
      body={[
        "## How we make money",
        "GetJeetBuzz is a verified official affiliate partner of JeetBuzz — we have a real, signed commission agreement with the operator on a revenue-share basis (a share of net player loss). When you click an outbound link and register or deposit at JeetBuzz, we may receive a commission.",
        "Being a verified official affiliate partner is a commercial relationship, not a claim that GetJeetBuzz.com is the JeetBuzz platform. Account signup, login, deposits and withdrawals all happen on JeetBuzz's own platform — never on this site.",
        "## What it doesn't change",
        "You don't pay more. Bonuses and odds are identical to going to JeetBuzz directly. Our editorial coverage remains independent of the commercial relationship — we publish negative observations when we find them. See the [Review Policy](/review-policy) for the editorial firewall.",
        "## Our promise",
        "We will not run urgency tactics, fake counters or claims that we operate JeetBuzz. All outbound links use rel='nofollow sponsored noopener'.",
      ]}
      bodyByLocale={{
        bn: [
          "## আমরা কীভাবে আয় করি",
          "GetJeetBuzz হলো JeetBuzz-এর একটি ভেরিফায়েড অফিসিয়াল অ্যাফিলিয়েট পার্টনার — অপারেটরের সাথে আমাদের প্রকৃত স্বাক্ষরিত কমিশন চুক্তি আছে (নেট প্লেয়ার লসের রেভিনিউ-শেয়ার)। আপনি আমাদের আউটবাউন্ড লিঙ্ক দিয়ে JeetBuzz-এ রেজিস্টার বা ডিপোজিট করলে আমরা কমিশন পেতে পারি।",
          "ভেরিফায়েড অফিসিয়াল অ্যাফিলিয়েট পার্টনার হওয়া একটি কমার্শিয়াল সম্পর্ক — এর মানে GetJeetBuzz.com মানে JeetBuzz প্ল্যাটফর্ম নয়। অ্যাকাউন্ট সাইনআপ, লগইন, bKash/Nagad ডিপোজিট ও উইথড্র সবকিছু JeetBuzz-এর নিজস্ব প্ল্যাটফর্মে হয় — এই সাইটে কখনোই নয়।",
          "## যা পরিবর্তন হয় না",
          "আপনি বেশি দেবেন না। বোনাস ও অডস সরাসরি JeetBuzz-এ যাওয়ার মতোই। কমার্শিয়াল সম্পর্ক সত্ত্বেও আমাদের সম্পাদকীয় কভারেজ স্বাধীন — সমস্যা পেলে আমরা প্রকাশ করি। বিস্তারিত [Review Policy](/review-policy) দেখুন।",
          "## আমাদের প্রতিশ্রুতি",
          "ভুয়া আর্জেন্সি, মিথ্যা কাউন্টার বা আমরা JeetBuzz পরিচালনা করি — এমন দাবি কখনোই করব না। সমস্ত আউটবাউন্ড লিঙ্কে rel='nofollow sponsored noopener' থাকে।",
        ],
        ur: [
          "## ہم پیسے کیسے کماتے ہیں",
          "GetJeetBuzz، JeetBuzz کا تصدیق شدہ آفیشل ایفیلیٹ پارٹنر ہے — آپریٹر کے ساتھ ہمارا حقیقی، دستخط شدہ کمیشن معاہدہ ہے (نیٹ پلیئر لاس پر ریونیو شیئر)۔ آپ ہمارے لنک سے JeetBuzz پر رجسٹر یا ڈپازٹ کریں تو ہمیں کمیشن مل سکتا ہے۔",
          "ایفیلیٹ پارٹنر ہونا ایک تجارتی تعلق ہے، اس کا مطلب یہ نہیں کہ GetJeetBuzz.com خود JeetBuzz پلیٹ فارم ہے۔ اکاؤنٹ سائن اپ، لاگ ان، EasyPaisa/JazzCash ڈپازٹ اور وڈرا سب JeetBuzz کے اپنے پلیٹ فارم پر ہوتا ہے۔",
          "## جو تبدیل نہیں ہوتا",
          "آپ کو زیادہ قیمت نہیں دینا پڑتی۔ بونس اور آڈز بالکل وہی ہیں جو براہ راست JeetBuzz پر ہیں۔ ہماری ادارتی کوریج آزاد ہے۔ تفصیل [Review Policy](/review-policy) دیکھیں۔",
          "## ہمارا وعدہ",
          "ہم جعلی urgency، جھوٹے کاؤنٹرز یا یہ دعویٰ نہیں کریں گے کہ ہم JeetBuzz چلاتے ہیں۔ تمام آؤٹ باؤنڈ لنکس rel='nofollow sponsored noopener' استعمال کرتے ہیں۔",
        ],
        hi: [
          "## हम पैसे कैसे कमाते हैं",
          "GetJeetBuzz, JeetBuzz का वेरिफाइड ऑफिशियल एफिलिएट पार्टनर है — ऑपरेटर के साथ हमारा वास्तविक, हस्ताक्षरित कमीशन समझौता है (नेट प्लेयर लॉस पर रेवेन्यू-शेयर)। आप हमारे लिंक से JeetBuzz पर रजिस्टर या डिपॉज़िट करें तो हमें कमीशन मिल सकता है।",
          "एफिलिएट पार्टनर होना एक व्यावसायिक संबंध है, इसका मतलब यह नहीं कि GetJeetBuzz.com स्वयं JeetBuzz प्लेटफ़ॉर्म है। अकाउंट साइनअप, लॉगिन, UPI/PhonePe डिपॉज़िट और विदड्रॉल सब JeetBuzz की अपनी साइट पर होते हैं।",
          "## जो नहीं बदलता",
          "आपको अधिक नहीं देना पड़ता। बोनस और ऑड्स वही हैं जो सीधे JeetBuzz पर हैं। हमारी संपादकीय कवरेज स्वतंत्र है। विवरण [Review Policy](/review-policy) देखें।",
          "## हमारा वादा",
          "हम नकली urgency, झूठे काउंटर या यह दावा नहीं करेंगे कि हम JeetBuzz चलाते हैं। सभी आउटबाउंड लिंक rel='nofollow sponsored noopener' का उपयोग करते हैं।",
        ],
      }}
    />
  ),
});