import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/fact-checking";
const TITLE = "GetJeetBuzz Fact-Checking Process";
const DESC = "How GetJeetBuzz verifies bonus amounts, withdrawal times, app features and payment minimums before publishing.";

export const Route = createFileRoute("/fact-checking")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH)...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Policy"
      title={<><span className="gold-text">Fact-Checking</span> Process</>}
      subtitle="Every number on GetJeetBuzz is verified before publishing and re-checked on a schedule."
      showDisclosure={false}
      breadcrumbs={[{ name: "Fact-Checking", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Before publishing",
        "Every claim is checked against either (a) the official JeetBuzz site at the date listed, (b) a live test from our team, or (c) a screenshot kept on file.",
        "## Numbers we verify",
        "- Bonus percentages and wagering requirements",
        "- Minimum deposits and withdrawals",
        "- Processing times for bKash, Nagad, Rocket, UPI, USDT",
        "- App version and platform support",
        "- License jurisdiction",
        "## Re-check schedule",
        "All money-related pages are reviewed at least every 90 days. Big operator changes trigger an immediate update.",
        "## Reader corrections",
        "Spotted something wrong? Email editorial@getjeetbuzz.com with the URL and a screenshot. We respond within 48 hours.",
      ]}
      bodyByLocale={{
        bn: [
          "## প্রকাশের আগে",
          "প্রতিটি দাবি যাচাই করা হয় হয় (ক) তালিকাভুক্ত তারিখে অফিসিয়াল JeetBuzz সাইটের বিপরীতে, (খ) আমাদের টিমের লাইভ টেস্ট, বা (গ) ফাইলে সংরক্ষিত স্ক্রিনশট দ্বারা।",
          "## যেসব সংখ্যা আমরা যাচাই করি",
          "- বোনাস শতাংশ ও ওয়েজারিং প্রয়োজনীয়তা",
          "- ন্যূনতম ডিপোজিট ও উইথড্রয়াল",
          "- bKash, Nagad, Rocket, UPI, USDT-এর প্রসেসিং টাইম",
          "- অ্যাপ ভার্সন ও প্ল্যাটফর্ম সাপোর্ট",
          "- লাইসেন্স অধিক্ষেত্র",
          "## পুনঃচেক সময়সূচী",
          "টাকা-সম্পর্কিত সব পেজ অন্তত প্রতি ৯০ দিনে পর্যালোচনা করা হয়। বড় অপারেটর পরিবর্তনে তাৎক্ষণিক আপডেট হয়।",
          "## পাঠকের সংশোধন",
          "ভুল দেখেছেন? URL ও স্ক্রিনশট সহ editorial@getjeetbuzz.com-এ ইমেইল করুন। আমরা ৪৮ ঘন্টার মধ্যে উত্তর দিই।",
        ],
        ur: [
          "## شائع کرنے سے پہلے",
          "ہر دعویٰ یا تو (الف) درج تاریخ پر آفیشل JeetBuzz سائٹ، (ب) ہماری ٹیم کے لائیو ٹیسٹ، یا (ج) فائل میں محفوظ اسکرین شاٹ سے چیک کیا جاتا ہے۔",
          "## ہم جن نمبروں کی تصدیق کرتے ہیں",
          "- بونس فیصد اور ویجرنگ شرائط",
          "- کم سے کم ڈپازٹ اور وڈرا",
          "- EasyPaisa، JazzCash، UPI، USDT کے پروسیسنگ اوقات",
          "- ایپ ورژن اور پلیٹ فارم سپورٹ",
          "- لائسنس دائرہ اختیار",
          "## دوبارہ چیک شیڈول",
          "تمام پیسوں سے متعلق صفحات کم از کم ہر 90 دن میں جائزہ لیے جاتے ہیں۔",
          "## قارئین کی تصحیح",
          "غلطی نظر آئی؟ URL اور اسکرین شاٹ کے ساتھ editorial@getjeetbuzz.com پر ای میل کریں۔ ہم 48 گھنٹے میں جواب دیتے ہیں۔",
        ],
        hi: [
          "## प्रकाशन से पहले",
          "हर दावा या तो (क) सूचीबद्ध तिथि पर आधिकारिक JeetBuzz साइट, (ख) हमारी टीम के लाइव टेस्ट, या (ग) फ़ाइल में रखे स्क्रीनशॉट के विरुद्ध जाँचा जाता है।",
          "## हम जिन संख्याओं की पुष्टि करते हैं",
          "- बोनस प्रतिशत और वेजरिंग आवश्यकताएँ",
          "- न्यूनतम डिपॉज़िट और विदड्रॉल",
          "- UPI, PhonePe, Paytm, USDT के प्रोसेसिंग समय",
          "- ऐप संस्करण और प्लेटफ़ॉर्म सपोर्ट",
          "- लाइसेंस अधिकार क्षेत्र",
          "## पुनः जाँच अनुसूची",
          "सभी पैसे-संबंधित पेज कम से कम हर 90 दिन में समीक्षित होते हैं।",
          "## पाठक सुधार",
          "गलती दिखी? URL और स्क्रीनशॉट के साथ editorial@getjeetbuzz.com पर ईमेल करें। हम 48 घंटे में जवाब देते हैं।",
        ],
      }}
      related={[
        { to: "/editorial-policy", title: "Editorial Policy" },
        { to: "/review-policy", title: "Review Policy" },
        { to: "/update-policy", title: "Update Policy" },
        { to: "/contact", title: "Contact" },
      ]}
    />
  ),
});