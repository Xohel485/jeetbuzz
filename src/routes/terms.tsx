import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | GetJeetBuzz" },
      { name: "description", content: "Terms of use for GetJeetBuzz, a verified affiliate partner site of JeetBuzz." },
      { property: "og:title", content: "Terms of Use | GetJeetBuzz" },
      { property: "og:description", content: "Terms of use for GetJeetBuzz." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => (
    <GuidePage
      eyebrow="Legal"
      title={<><span className="gold-text">Terms</span> of Use</>}
      showDisclosure={false}
      body={[
        "## Informational only",
        "Content on GetJeetBuzz is for informational purposes. We make no guarantees about JeetBuzz's services, bonuses or odds — those are controlled by JeetBuzz.",
        "## 18+ only",
        "This site is intended for adults aged 18 or over (or the legal gambling age in your jurisdiction).",
        "## No liability",
        "We are not liable for losses incurred from betting activity. Always bet within your means.",
        "## Local law",
        "It is your responsibility to ensure online betting is legal in your jurisdiction.",
      ]}
      bodyByLocale={{
        bn: [
          "## কেবল তথ্যমূলক",
          "GetJeetBuzz-এর কনটেন্ট তথ্যমূলক উদ্দেশ্যে। JeetBuzz-এর সার্ভিস, বোনাস বা অডস সম্পর্কে আমরা কোনো গ্যারান্টি দিই না — সেগুলো JeetBuzz নিয়ন্ত্রণ করে।",
          "## ১৮+ মাত্র",
          "এই সাইট ১৮ বা তদূর্ধ্ব প্রাপ্তবয়স্কদের জন্য (অথবা আপনার এখতিয়ারের আইনি জুয়া বয়সের জন্য)।",
          "## কোনো দায়বদ্ধতা নেই",
          "বেটিং কার্যকলাপ থেকে কোনো ক্ষতির জন্য আমরা দায়ী নই। সবসময় আপনার সাধ্যের মধ্যে বাজি ধরুন।",
          "## স্থানীয় আইন",
          "আপনার এখতিয়ারে অনলাইন বেটিং বৈধ কিনা তা নিশ্চিত করা আপনার দায়িত্ব।",
        ],
        ur: [
          "## صرف معلوماتی",
          "GetJeetBuzz پر مواد معلوماتی مقاصد کے لیے ہے۔ JeetBuzz کی خدمات، بونس یا آڈز کے بارے میں ہم کوئی گارنٹی نہیں دیتے۔",
          "## صرف 18+",
          "یہ سائٹ 18 سال یا اس سے زیادہ عمر کے بالغ افراد کے لیے ہے۔",
          "## کوئی ذمہ داری نہیں",
          "بیٹنگ کی سرگرمی سے ہونے والے نقصانات کے ہم ذمہ دار نہیں۔",
          "## مقامی قانون",
          "اپنے دائرہ اختیار میں آن لائن بیٹنگ کی قانونی حیثیت کو یقینی بنانا آپ کی ذمہ داری ہے۔",
        ],
        hi: [
          "## केवल सूचनात्मक",
          "GetJeetBuzz की सामग्री सूचनात्मक उद्देश्यों के लिए है। JeetBuzz की सेवाओं, बोनस या ऑड्स के बारे में हम कोई गारंटी नहीं देते।",
          "## केवल 18+",
          "यह साइट 18 वर्ष या उससे अधिक के वयस्कों के लिए है।",
          "## कोई दायित्व नहीं",
          "बेटिंग गतिविधि से होने वाले नुकसान के लिए हम ज़िम्मेदार नहीं हैं।",
          "## स्थानीय कानून",
          "अपने अधिकार क्षेत्र में ऑनलाइन बेटिंग की वैधता सुनिश्चित करना आपकी जिम्मेदारी है।",
        ],
      }}
    />
  ),
});