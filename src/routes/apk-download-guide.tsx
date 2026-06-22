import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { softwareApplicationSchema, articleSchema, jsonLdScript, canonicalLink } from "@/lib/schema";

export const Route = createFileRoute("/apk-download-guide")({
  head: () => ({
    meta: [
      { title: "JeetBuzz APK Download Guide — Safe Android Install | GetJeetBuzz" },
      { name: "description", content: "Install the JeetBuzz Android app safely from the official site. We never host APK files." },
      { property: "og:title", content: "JeetBuzz APK Download Guide — Safe Android Install" },
      { property: "og:description", content: "How to install the JeetBuzz Android app safely from the official site." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("androidApp") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("androidApp") },
    ],
    links: [canonicalLink("/apk-download-guide")],
    scripts: [
      jsonLdScript(softwareApplicationSchema()),
      jsonLdScript(
        articleSchema({
          headline: "JeetBuzz APK Download Guide — Safe Android Install",
          description:
            "How to install the JeetBuzz Android app safely from the official site.",
          path: "/apk-download-guide",
          image: imageAbsoluteUrl("androidApp"),
        }),
      ),
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">APK Download Guide</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">APK ডাউনলোড গাইড</span></>,
        ur: <>JeetBuzz <span className="gold-text">APK ڈاؤن لوڈ گائیڈ</span></>,
        hi: <>JeetBuzz <span className="gold-text">APK डाउनलोड गाइड</span></>,
      }}
      subtitle="GetJeetBuzz does NOT host the APK file. Always download it from the official JeetBuzz site — this guide shows you how, safely."
      subtitleByLocale={{
        bn: "GetJeetBuzz APK ফাইল হোস্ট করে না। সবসময় অফিসিয়াল জিতবাজ সাইট থেকেই ডাউনলোড করুন — এই গাইডে নিরাপদ পদ্ধতি দেখানো হলো।",
        ur: "GetJeetBuzz APK فائل ہوسٹ نہیں کرتا۔ ہمیشہ آفیشل JeetBuzz سائٹ سے ڈاؤن لوڈ کریں — یہ گائیڈ محفوظ طریقہ بتاتا ہے۔",
        hi: "GetJeetBuzz APK फ़ाइल होस्ट नहीं करता। हमेशा ऑफ़िशियल JeetBuzz साइट से ही डाउनलोड करें — यह गाइड सुरक्षित तरीक़ा दिखाती है।",
      }}
      ctaLabel="Get the App from JeetBuzz"
      ctaLabelByLocale={{
        bn: "জিতবাজ থেকে অ্যাপ নিন",
        ur: "JeetBuzz سے ایپ حاصل کریں",
        hi: "JeetBuzz से ऐप पाएँ",
      }}
      heroImage="androidApp"
      inlineImage="iosSlots"
      body={[
        "## Why we don't host APKs",
        "Re-hosted APKs are a common phishing/malware vector. The only safe source is the official JeetBuzz site.",
        "## Install steps (Android)",
        "1. Tap the 'Get the App' button above.",
        "2. Tap the Android / APK button on the official site.",
        "3. Allow 'Install from unknown sources' for your browser when prompted.",
        "4. Open the downloaded file and tap Install.",
        "## After install",
        "Log in with your existing JeetBuzz credentials. Enable biometric login for faster, safer access.",
        "## iOS users",
        "Use the JeetBuzz mobile web — currently no native iOS app.",
        "## Common issues",
        "- 'App not installed' usually means a partial download — clear and retry.",
        "- Disable any third-party VPN if the app won't connect.",
      ]}
      bodyByLocale={{
        bn: [
          "## কেন আমরা APK হোস্ট করি না",
          "রি-হোস্টেড APK ফিশিং/ম্যালওয়্যারের অন্যতম বড় উৎস। একমাত্র নিরাপদ সোর্স অফিসিয়াল জিতবাজ সাইট।",
          "## ইনস্টল ধাপ (Android)",
          "১. উপরের ‘অ্যাপ নিন’ বাটনে ট্যাপ করুন।",
          "২. অফিসিয়াল সাইটে Android / APK বাটনে ট্যাপ করুন।",
          "৩. ব্রাউজারে ‘Install from unknown sources’ এর অনুমতি দিন।",
          "৪. ডাউনলোড করা ফাইল খুলে Install চাপুন।",
          "## ইনস্টলের পর",
          "আপনার বিদ্যমান জিতবাজ আইডি দিয়ে লগইন করুন। দ্রুত ও নিরাপদ অ্যাক্সেসের জন্য বায়োমেট্রিক লগইন চালু করুন।",
          "## iOS ব্যবহারকারী",
          "জিতবাজের মোবাইল ওয়েব ব্যবহার করুন — বর্তমানে কোনো নেটিভ iOS অ্যাপ নেই।",
          "## সাধারণ সমস্যা",
          "- ‘App not installed’ মানে সাধারণত ফাইল আংশিক ডাউনলোড — ক্লিয়ার করে আবার চেষ্টা করুন।",
          "- অ্যাপ কানেক্ট না হলে যেকোনো থার্ড-পার্টি VPN বন্ধ করুন।",
        ],
        ur: [
          "## ہم APK کیوں ہوسٹ نہیں کرتے",
          "ری ہوسٹڈ APK فِشنگ/میل ویئر کا بڑا ذریعہ ہیں۔ صرف آفیشل JeetBuzz سائٹ ہی محفوظ ہے۔",
          "## انسٹال کے مراحل (Android)",
          "1. اوپر 'ایپ حاصل کریں' بٹن دبائیں۔",
          "2. آفیشل سائٹ پر Android / APK بٹن دبائیں۔",
          "3. براؤزر کے لیے 'Install from unknown sources' کی اجازت دیں۔",
          "4. ڈاؤن لوڈ شدہ فائل کھولیں اور Install دبائیں۔",
          "## انسٹال کے بعد",
          "اپنے موجودہ JeetBuzz اکاؤنٹ سے لاگ ان کریں۔ تیز اور محفوظ رسائی کے لیے بایومیٹرک لاگ ان آن کریں۔",
          "## iOS صارفین",
          "JeetBuzz کا موبائل ویب استعمال کریں — اس وقت کوئی نیٹیو iOS ایپ نہیں۔",
          "## عام مسائل",
          "- 'App not installed' عام طور پر نامکمل ڈاؤن لوڈ کی نشانی ہے — کلیئر کر کے دوبارہ کوشش کریں۔",
          "- اگر ایپ کنیکٹ نہ ہو تو کوئی بھی تھرڈ پارٹی VPN بند کریں۔",
        ],
        hi: [
          "## हम APK क्यों होस्ट नहीं करते",
          "रि-होस्टेड APK फ़िशिंग/मैलवेयर का बड़ा ज़रिया हैं। केवल ऑफ़िशियल JeetBuzz साइट सुरक्षित है।",
          "## इंस्टॉल स्टेप्स (Android)",
          "1. ऊपर ‘ऐप पाएँ’ बटन दबाएँ।",
          "2. ऑफ़िशियल साइट पर Android / APK बटन दबाएँ।",
          "3. ब्राउज़र के लिए ‘Install from unknown sources’ की अनुमति दें।",
          "4. डाउनलोड की गई फ़ाइल खोलें और Install दबाएँ।",
          "## इंस्टॉल के बाद",
          "अपने मौजूदा JeetBuzz खाते से लॉगिन करें। तेज़ और सुरक्षित एक्सेस के लिए बायोमेट्रिक लॉगिन चालू करें।",
          "## iOS यूज़र्स",
          "JeetBuzz का मोबाइल वेब इस्तेमाल करें — अभी कोई नेटिव iOS ऐप नहीं है।",
          "## आम समस्याएँ",
          "- ‘App not installed’ का मतलब अधूरी डाउनलोड — साफ़ कर के दोबारा कोशिश करें।",
          "- ऐप कनेक्ट न हो तो कोई भी थर्ड-पार्टी VPN बंद करें।",
        ],
      }}
    />
  ),
});