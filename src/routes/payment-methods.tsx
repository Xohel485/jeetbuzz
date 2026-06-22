import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/payment-methods";
const TITLE = "JeetBuzz Payment Methods — Wallets, UPI & Crypto for South Asia";
const DESC =
  "All JeetBuzz payment methods for Bangladesh, India and Pakistan — bKash, Nagad, Rocket, UPI, JazzCash and USDT, with minimums and processing times.";

export const Route = createFileRoute("/payment-methods")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Payments"
      title={<>JeetBuzz <span className="gold-text">Payment Methods</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">পেমেন্ট পদ্ধতি</span></>,
        ur: <>JeetBuzz <span className="gold-text">پیمنٹ طریقے</span></>,
        hi: <>JeetBuzz <span className="gold-text">पेमेंट तरीक़े</span></>,
      }}
      subtitle="A single page comparing every JeetBuzz payment method available across Bangladesh, Pakistan and India — speed, minimums, fees and best use case."
      subtitleByLocale={{
        bn: "বাংলাদেশ, পাকিস্তান ও ভারতে জিতবাজে উপলব্ধ সব পেমেন্ট পদ্ধতির তুলনা একই পেজে — গতি, সর্বনিম্ন পরিমাণ, ফি এবং সেরা ব্যবহার।",
        ur: "بنگلہ دیش، پاکستان اور بھارت میں JeetBuzz پر دستیاب تمام پیمنٹ طریقوں کا ایک ہی صفحے پر موازنہ — رفتار، کم از کم رقم، فیس اور بہترین استعمال۔",
        hi: "बांग्लादेश, पाकिस्तान और भारत में JeetBuzz पर उपलब्ध सभी पेमेंट तरीक़ों की एक ही पेज पर तुलना — स्पीड, न्यूनतम राशि, फ़ीस और बेस्ट यूज़।",
      }}
      breadcrumbs={[{ name: "Payment Methods", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Quick comparison",
        "JeetBuzz supports the dominant local rails in each market — mobile wallets in Bangladesh, UPI in India, JazzCash in Pakistan, plus crypto (USDT) for power users.",
        "## Bangladesh",
        "- bKash — most popular, instant, low minimum",
        "- Nagad — second most popular, instant",
        "- Rocket — strong agent network, instant",
        "## India",
        "- UPI — instant, near-zero fee, the default in India",
        "- IMPS / NEFT — slower fallback",
        "## Pakistan",
        "- JazzCash — most popular mobile wallet",
        "- EasyPaisa — wide coverage",
        "## Crypto",
        "- USDT (TRC20 / BEP20) — fastest for large withdrawals, slightly more setup",
        "## Choosing a method",
        "For most Bangladesh players bKash or Nagad is the right default. If you bet larger amounts, USDT removes wallet-level caps. For India players, UPI is almost always the right pick.",
      ]}
      bodyByLocale={{
        bn: [
          "## দ্রুত তুলনা",
          "জিতবাজ প্রতিটি বাজারের প্রধান পেমেন্ট রেলকে সমর্থন করে — বাংলাদেশে মোবাইল ওয়ালেট, ভারতে UPI, পাকিস্তানে JazzCash, এবং অভিজ্ঞ ব্যবহারকারীদের জন্য ক্রিপ্টো (USDT)।",
          "## বাংলাদেশ",
          "- bKash — সবচেয়ে জনপ্রিয়, ইনস্ট্যান্ট, কম সর্বনিম্ন",
          "- Nagad — দ্বিতীয় জনপ্রিয়, ইনস্ট্যান্ট",
          "- Rocket — শক্তিশালী এজেন্ট নেটওয়ার্ক, ইনস্ট্যান্ট",
          "- Upay — বিকল্প হিসেবে",
          "## ক্রিপ্টো",
          "- USDT (TRC20 / BEP20) — বড় উইথড্রয়ালের জন্য দ্রুততম",
          "## কোনটি বেছে নেবেন",
          "বেশিরভাগ বাংলাদেশি প্লেয়ারের জন্য bKash বা Nagad সঠিক ডিফল্ট। বড় বাজির জন্য USDT ওয়ালেট-লেভেল সীমা সরিয়ে দেয়।",
        ],
        ur: [
          "## فوری موازنہ",
          "JeetBuzz ہر مارکیٹ کے بڑے مقامی پیمنٹ ریلز کو سپورٹ کرتا ہے — پاکستان میں موبائل والیٹس، بھارت میں UPI، بنگلہ دیش میں موبائل والیٹس، اور ماہر صارفین کے لیے کرپٹو (USDT)۔",
          "## پاکستان",
          "- JazzCash — سب سے زیادہ مقبول موبائل والیٹ",
          "- EasyPaisa — وسیع کوریج",
          "- SadaPay — جدید آپشن",
          "- بینک ٹرانسفر",
          "## کرپٹو",
          "- USDT (TRC20 / BEP20) — بڑی ودڈرا کے لیے سب سے تیز",
          "## کون سا طریقہ منتخب کریں",
          "زیادہ تر پاکستانی کھلاڑیوں کے لیے JazzCash یا EasyPaisa صحیح ڈیفالٹ ہے۔ بڑی رقم کی بیٹنگ کے لیے USDT والیٹ کی حدود ختم کر دیتا ہے۔",
        ],
        hi: [
          "## तेज़ तुलना",
          "JeetBuzz हर बाज़ार के मुख्य पेमेंट रेल्स को सपोर्ट करता है — भारत में UPI, बांग्लादेश में मोबाइल वॉलेट, पाकिस्तान में JazzCash, और एडवांस यूज़र्स के लिए क्रिप्टो (USDT)।",
          "## भारत",
          "- UPI — इंस्टेंट, लगभग ज़ीरो फ़ीस, भारत का डिफ़ॉल्ट",
          "- PhonePe / Google Pay / Paytm — UPI के ज़रिए",
          "- IMPS / NEFT — धीमा फ़ॉलबैक",
          "## क्रिप्टो",
          "- USDT (TRC20 / BEP20) — बड़ी विदड्रॉल के लिए सबसे तेज़",
          "## कौन-सा तरीक़ा चुनें",
          "ज़्यादातर भारतीय खिलाड़ियों के लिए UPI सही डिफ़ॉल्ट है। बड़ी रक़म की बेटिंग के लिए USDT वॉलेट-लेवल सीमाएँ हटा देता है।",
        ],
      }}
      faqs={[
        { q: "Which method is fastest?", a: "All local wallets are usually instant on deposit. USDT is fastest on withdrawal once the network confirms." },
        { q: "Does JeetBuzz charge any deposit fee?", a: "No — JeetBuzz does not typically charge deposit fees. Wallets may charge their own send-money fee." },
        { q: "Can I mix methods?", a: "You can deposit with one and withdraw with another only if both wallets are in your name and JeetBuzz allows it. Same-method withdrawals are smoothest." },
        { q: "Is USDT safe?", a: "Yes if you use a trusted exchange. Always double-check the network (TRC20 vs BEP20) before sending." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "সবচেয়ে দ্রুত পদ্ধতি কোনটি?", a: "সব লোকাল ওয়ালেটে ডিপোজিট সাধারণত ইনস্ট্যান্ট। উইথড্রয়ালে USDT সবচেয়ে দ্রুত, নেটওয়ার্ক কনফার্ম হলে।" },
          { q: "জিতবাজ কি ডিপোজিট ফি নেয়?", a: "না — জিতবাজ সাধারণত ডিপোজিট ফি নেয় না। ওয়ালেট নিজস্ব Send Money ফি নিতে পারে।" },
          { q: "পদ্ধতি মিক্স করা যায়?", a: "এক পদ্ধতিতে ডিপোজিট ও অন্য পদ্ধতিতে উইথড্র শুধু তখনই সম্ভব যদি দুটো ওয়ালেট আপনার নামে থাকে এবং জিতবাজ অনুমতি দেয়।" },
          { q: "USDT কি নিরাপদ?", a: "বিশ্বস্ত এক্সচেঞ্জ ব্যবহার করলে হ্যাঁ। পাঠানোর আগে নেটওয়ার্ক (TRC20 vs BEP20) দুইবার মিলিয়ে দেখুন।" },
        ],
        ur: [
          { q: "سب سے تیز طریقہ کون سا ہے؟", a: "تمام مقامی والیٹس میں ڈپازٹ عام طور پر فوری ہے۔ ودڈرا میں نیٹ ورک کنفرم ہونے پر USDT سب سے تیز ہے۔" },
          { q: "کیا JeetBuzz ڈپازٹ فیس لیتا ہے؟", a: "نہیں — JeetBuzz عام طور پر ڈپازٹ فیس نہیں لیتا۔ والیٹ اپنی Send Money فیس لگا سکتا ہے۔" },
          { q: "کیا میں طریقے ملا سکتا ہوں؟", a: "ایک سے ڈپازٹ اور دوسرے سے ودڈرا صرف اس وقت ممکن ہے جب دونوں والیٹس آپ کے نام پر ہوں اور JeetBuzz اجازت دے۔" },
          { q: "کیا USDT محفوظ ہے؟", a: "اگر آپ معتبر ایکسچینج استعمال کرتے ہیں تو ہاں۔ بھیجنے سے پہلے نیٹ ورک (TRC20 یا BEP20) ضرور چیک کریں۔" },
        ],
        hi: [
          { q: "सबसे तेज़ तरीक़ा कौन-सा है?", a: "सभी लोकल वॉलेट्स में डिपॉज़िट आम तौर पर इंस्टेंट। विदड्रॉल में नेटवर्क कन्फ़र्म होते ही USDT सबसे तेज़।" },
          { q: "क्या JeetBuzz डिपॉज़िट फ़ीस लेता है?", a: "नहीं — JeetBuzz आम तौर पर डिपॉज़िट फ़ीस नहीं लेता। वॉलेट अपनी Send Money फ़ीस लगा सकता है।" },
          { q: "क्या मैं तरीक़े मिला सकता हूँ?", a: "एक से डिपॉज़िट और दूसरे से विदड्रॉल तभी संभव है जब दोनों वॉलेट आपके नाम पर हों और JeetBuzz अनुमति दे।" },
          { q: "क्या USDT सुरक्षित है?", a: "अगर आप विश्वसनीय एक्सचेंज इस्तेमाल करते हैं तो हाँ। भेजने से पहले नेटवर्क (TRC20 या BEP20) ज़रूर जाँचें।" },
        ],
      }}
      related={[
        { to: "/bkash-guide", title: "bKash Guide" },
        { to: "/nagad-guide", title: "Nagad Guide" },
        { to: "/rocket-guide", title: "Rocket Guide" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
      ]}
    />
  ),
});