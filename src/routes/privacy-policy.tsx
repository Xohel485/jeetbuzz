import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | GetJeetBuzz" },
      { name: "description", content: "How GetJeetBuzz handles cookies, analytics and affiliate tracking." },
      { property: "og:title", content: "Privacy Policy | GetJeetBuzz" },
      { property: "og:description", content: "How GetJeetBuzz handles cookies and analytics." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => (
    <GuidePage
      eyebrow="Legal"
      title={<><span className="gold-text">Privacy</span> Policy</>}
      showDisclosure={false}
      body={[
        "## What we collect",
        "We collect basic, anonymous analytics (pages viewed, country, device) to improve the site. We do not collect JeetBuzz account credentials, we never ask for them.",
        "## Cookies",
        "We use first-party analytics cookies and affiliate tracking cookies set when you click an outbound JeetBuzz link.",
        "## Third parties",
        "JeetBuzz's own site has its own privacy policy when you visit it via our links.",
        "## Your rights",
        "Email editorial@getjeetbuzz.com to request data deletion.",
      ]}
      bodyByLocale={{
        bn: [
          "## আমরা কী সংগ্রহ করি",
          "সাইট উন্নত করতে আমরা মৌলিক, বেনামী অ্যানালিটিক্স সংগ্রহ করি (পেজ ভিউ, দেশ, ডিভাইস)। আমরা JeetBuzz অ্যাকাউন্ট তথ্য সংগ্রহ করি না, কখনোই চাই না।",
          "## কুকিজ",
          "আমরা ফার্স্ট-পার্টি অ্যানালিটিক্স কুকি এবং আউটবাউন্ড JeetBuzz লিঙ্কে ক্লিক করলে সেট হওয়া অ্যাফিলিয়েট ট্র্যাকিং কুকি ব্যবহার করি।",
          "## থার্ড পার্টি",
          "আমাদের লিঙ্ক দিয়ে গেলে JeetBuzz-এর নিজস্ব প্রাইভেসি পলিসি প্রযোজ্য।",
          "## আপনার অধিকার",
          "ডেটা মুছে ফেলার অনুরোধের জন্য editorial@getjeetbuzz.com-এ ইমেইল করুন।",
        ],
        ur: [
          "## ہم کیا جمع کرتے ہیں",
          "ہم سائٹ کو بہتر بنانے کے لیے بنیادی، گمنام تجزیات جمع کرتے ہیں (پیج ویوز، ملک، ڈیوائس)۔ ہم JeetBuzz اکاؤنٹ کی معلومات جمع نہیں کرتے۔",
          "## کوکیز",
          "ہم فرسٹ پارٹی تجزیاتی کوکیز اور JeetBuzz آؤٹ باؤنڈ لنک پر کلک کرنے پر سیٹ ہونے والی ایفیلیٹ ٹریکنگ کوکیز استعمال کرتے ہیں۔",
          "## تھرڈ پارٹیز",
          "ہمارے لنک سے JeetBuzz پر جانے کی صورت میں اس کی اپنی پرائیویسی پالیسی لاگو ہوتی ہے۔",
          "## آپ کے حقوق",
          "ڈیٹا حذف کرنے کی درخواست کے لیے editorial@getjeetbuzz.com پر ای میل کریں۔",
        ],
        hi: [
          "## हम क्या एकत्र करते हैं",
          "हम साइट को बेहतर बनाने के लिए बुनियादी, गुमनाम विश्लेषण एकत्र करते हैं (पेज व्यूज़, देश, डिवाइस)। हम JeetBuzz अकाउंट क्रेडेंशियल एकत्र नहीं करते।",
          "## कुकीज़",
          "हम फर्स्ट-पार्टी एनालिटिक्स कुकीज़ और JeetBuzz आउटबाउंड लिंक पर क्लिक करने पर सेट होने वाली एफिलिएट ट्रैकिंग कुकीज़ का उपयोग करते हैं।",
          "## तृतीय पक्ष",
          "हमारे लिंक से JeetBuzz पर जाने पर उसकी अपनी प्राइवेसी पॉलिसी लागू होती है।",
          "## आपके अधिकार",
          "डेटा हटाने के अनुरोध के लिए editorial@getjeetbuzz.com पर ईमेल करें।",
        ],
      }}
    />
  ),
});