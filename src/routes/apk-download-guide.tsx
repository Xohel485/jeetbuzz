import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { softwareApplicationSchema, articleSchema, jsonLdScript, canonicalLink, hreflangLinks } from "@/lib/schema";

export const Route = createFileRoute("/apk-download-guide")({
  head: () => ({
    meta: [
      { title: "JeetBuzz APK Download Guide 2026 - Safe Android Install (BD/PK/IN)" },
      { name: "description", content: "JeetBuzz APK download guide for 2026 — install the official Android app safely from the operator, enable Unknown Sources, verify the package and avoid fake mirror APKs." },
      { property: "og:title", content: "JeetBuzz APK Download Guide — Safe Android Install" },
      { property: "og:description", content: "How to install the JeetBuzz Android app safely from the official site." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("androidApp") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("androidApp") },
    ],
    links: [canonicalLink("/apk-download-guide"), ...hreflangLinks("/apk-download-guide")],
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
        "> **Quick summary:** jeetbuzz apk is only safe from the official JeetBuzz site — never from Telegram links, Google ads or mirror APKs. Tap the official Android button, allow Install from Unknown Sources for your browser, open the .apk and Install. iOS users use the mobile web (no native iOS app). Log in with your existing JeetBuzz account and enable biometric unlock.",
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
      articleHeadline="JeetBuzz APK Download Guide"
      articleDescription="Install the JeetBuzz Android app safely from the official site."
      articlePath="/apk-download-guide"
      faqs={[
        { q: "Is the JeetBuzz APK safe to install?", a: "Only when downloaded from the official JeetBuzz site. APKs re-hosted on Telegram, Google ads, blogspot mirrors or unknown forums are a common vector for credential-stealing malware. The button above links to the official JeetBuzz domain we have on file." },
        { q: "Why does my phone show 'Install from unknown sources' for the JeetBuzz APK?", a: "Android shows that warning for any APK installed outside the Play Store — JeetBuzz is not on Play because of Google's gambling policy in BD/PK/IN. Enable the permission only for your browser, install the APK, then disable the permission again." },
        { q: "There is no native iOS app — how do I use JeetBuzz on iPhone?", a: "Open the official JeetBuzz site in Safari, tap Share, then Add to Home Screen. You get an icon that opens in fullscreen — same login, same wallet, same markets as the Android app." },
        { q: "The APK installed but won't open or won't connect — what now?", a: "Disable any third-party VPN, switch from Wi-Fi to mobile data, and re-open. If 'App not installed' appeared during install, the download was partial — delete the file and download again from the official site." },
        { q: "How often is the JeetBuzz APK updated?", a: "JeetBuzz typically releases app updates every few weeks. The app prompts you on launch when a new build is available — we recommend accepting it, since older builds can stop connecting after a domain rotation." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "জিতবাজ APK ইনস্টল করা কি নিরাপদ?", a: "শুধু অফিসিয়াল জিতবাজ সাইট থেকে নামালে নিরাপদ। Telegram, Google ads, ব্লগ মিরর বা অপরিচিত ফোরামে রি-হোস্টেড APK পাসওয়ার্ড চুরির ম্যালওয়্যার বহন করে। উপরের বাটনটি সবসময় বর্তমান লাইভ জিতবাজ ডোমেইনে নিয়ে যায়।" },
          { q: "‘Install from unknown sources’ ওয়ার্নিং আসছে কেন?", a: "Play Store-এর বাইরে যেকোনো APK ইনস্টলের সময় Android এই ওয়ার্নিং দেখায় — Google-এর গ্যাম্বলিং পলিসির কারণে জিতবাজ Play Store-এ নেই। শুধু আপনার ব্রাউজারের জন্য পারমিশন দিন, ইনস্টল শেষ হলে আবার বন্ধ করে দিন।" },
          { q: "iPhone-এ কোনো নেটিভ অ্যাপ নেই — তাহলে কীভাবে চালাবো?", a: "Safari-তে অফিসিয়াল জিতবাজ সাইট খুলুন, Share চাপুন, তারপর ‘Add to Home Screen’ সিলেক্ট করুন। ফুলস্ক্রিন আইকন তৈরি হবে — একই লগইন, একই ওয়ালেট, একই মার্কেট।" },
          { q: "APK ইনস্টল হয়েছে কিন্তু খুলছে না বা কানেক্ট হচ্ছে না?", a: "যেকোনো থার্ড-পার্টি VPN বন্ধ করুন, Wi-Fi থেকে মোবাইল ডেটায় যান এবং আবার চালু করুন। ইনস্টলের সময় ‘App not installed’ দেখালে ফাইলটি সম্পূর্ণ ডাউনলোড হয়নি — মুছে আবার অফিসিয়াল সাইট থেকে নামান।" },
          { q: "জিতবাজ APK কতদিন পরপর আপডেট হয়?", a: "প্রতি কয়েক সপ্তাহে জিতবাজ নতুন বিল্ড দেয়। অ্যাপ চালু করলে আপডেট প্রম্পট আসবে — সবসময় অ্যাকসেপ্ট করুন; পুরোনো বিল্ড ডোমেইন রোটেট হলে কাজ করা বন্ধ করে দেয়।" },
        ],
        ur: [
          { q: "کیا JeetBuzz APK انسٹال کرنا محفوظ ہے؟", a: "صرف اس وقت جب آپ آفیشل JeetBuzz سائٹ سے ڈاؤن لوڈ کریں۔ Telegram، Google ads یا اجنبی فورمز پر دوبارہ ہوسٹڈ APK پاس ورڈ چوری کرنے والے میل ویئر کا ذریعہ ہیں۔" },
          { q: "'Install from unknown sources' وارننگ کیوں آتی ہے؟", a: "Play Store کے باہر کسی بھی APK پر Android یہ وارننگ دکھاتا ہے — Google کی گیمبلنگ پالیسی کے باعث JeetBuzz Play Store پر نہیں۔ صرف اپنے براؤزر کے لیے اجازت دیں، انسٹال کے بعد بند کر دیں۔" },
          { q: "iPhone پر کوئی نیٹیو ایپ نہیں — کیسے استعمال کروں؟", a: "Safari میں آفیشل JeetBuzz سائٹ کھولیں، Share دبائیں اور 'Add to Home Screen' منتخب کریں۔ فُل اسکرین آئیکن بن جائے گا — وہی لاگ ان، وہی والٹ، وہی مارکیٹس۔" },
          { q: "APK انسٹال ہو گیا لیکن کھل یا کنیکٹ نہیں ہو رہا؟", a: "تھرڈ پارٹی VPN بند کریں، Wi-Fi سے موبائل ڈیٹا پر جائیں اور دوبارہ کھولیں۔ 'App not installed' کا مطلب نامکمل ڈاؤن لوڈ ہے — فائل ڈیلیٹ کر کے دوبارہ ڈاؤن لوڈ کریں۔" },
          { q: "JeetBuzz APK کتنی بار اپڈیٹ ہوتا ہے؟", a: "ہر چند ہفتوں میں نیا بلڈ آتا ہے۔ ایپ کھولنے پر اپڈیٹ پرامپٹ آئے — ہمیشہ قبول کریں؛ پرانے بلڈ ڈومین تبدیلی کے بعد کام کرنا چھوڑ دیتے ہیں۔" },
        ],
        hi: [
          { q: "क्या JeetBuzz APK इंस्टॉल करना सुरक्षित है?", a: "केवल तब, जब आप ऑफ़िशियल JeetBuzz साइट से डाउनलोड करें। Telegram, Google ads या अनजान फ़ोरम पर री-होस्टेड APK पासवर्ड चोरी करने वाले मैलवेयर का बड़ा ज़रिया हैं। ऊपर का बटन हमेशा मौजूदा लाइव डोमेन पर ले जाता है।" },
          { q: "‘Install from unknown sources’ चेतावनी क्यों आती है?", a: "Play Store के बाहर किसी भी APK पर Android यह चेतावनी दिखाता है — Google की गैम्बलिंग नीति के कारण JeetBuzz Play Store पर नहीं है। केवल अपने ब्राउज़र के लिए अनुमति दें, इंस्टॉल के बाद बंद कर दें।" },
          { q: "iPhone पर कोई नेटिव ऐप नहीं — कैसे इस्तेमाल करें?", a: "Safari में ऑफ़िशियल JeetBuzz साइट खोलें, Share दबाएँ और ‘Add to Home Screen’ चुनें। फ़ुल-स्क्रीन आइकन बन जाएगा — वही लॉगिन, वही वॉलेट, वही मार्केट।" },
          { q: "APK इंस्टॉल हो गया पर खुलता या कनेक्ट नहीं हो रहा?", a: "थर्ड-पार्टी VPN बंद करें, Wi-Fi से मोबाइल डेटा पर जाएँ और दोबारा खोलें। ‘App not installed’ का मतलब अधूरी डाउनलोड — फ़ाइल डिलीट कर के दोबारा डाउनलोड करें।" },
          { q: "JeetBuzz APK कितनी बार अपडेट होता है?", a: "हर कुछ हफ़्तों में नया बिल्ड आता है। ऐप खोलने पर अपडेट प्रॉम्प्ट दिखे — हमेशा स्वीकारें; पुराने बिल्ड डोमेन रोटेशन के बाद काम करना बंद कर देते हैं।" },
        ],
      }}
      related={[
        { to: "/mobile-app-guide", title: "Mobile App Guide", desc: "Tour the JeetBuzz mobile experience." },
        { to: "/security-guide", title: "Security Guide", desc: "Lock down your account and device." },
        { to: "/login-guide", title: "Login Guide", desc: "Sign in safely from your phone." },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review", desc: "Pillar review of the operator." },
      ]}
    />
  ),
});