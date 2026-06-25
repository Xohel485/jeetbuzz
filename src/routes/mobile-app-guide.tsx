import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema, softwareApplicationSchema } from "@/lib/schema";

const PATH = "/mobile-app-guide";
const TITLE =
  "JeetBuzz Mobile App Guide Bangladesh 2026 - Android & iOS Install, Login";
const DESC =
  "JeetBuzz mobile app guide for Bangladesh 2026 — Android APK and iOS install, login, biometric security, push notifications and live cricket in-play tips on the go.";

export const Route = createFileRoute("/mobile-app-guide")({
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
    scripts: [
      jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH })),
      jsonLdScript(softwareApplicationSchema()),
    ],
  }),
  component: () => (
    <GuidePage
      eyebrow="Mobile"
      title={<>JeetBuzz <span className="gold-text">Mobile App</span> Guide</>}
      subtitle="Everything Bangladesh players need to know about using JeetBuzz on Android and iOS — install, login, biometrics, notifications and in-play."
      heroImage="androidApp"
      inlineImage="iosSlots"
      breadcrumbs={[{ name: "Mobile App", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Android vs iOS",
        "JeetBuzz ships a native Android APK and a web-app for iOS. Both share one account.",
        "## Install on Android",
        "1. Open the official JeetBuzz site in Chrome.",
        "2. Tap the App download button.",
        "3. Allow 'Install from unknown sources' for Chrome when prompted.",
        "4. Open the APK and install.",
        "## Install on iOS",
        "Use Safari, tap Share, then Add to Home Screen — the JeetBuzz web app installs like a native app.",
        "## First login",
        "Use your existing JeetBuzz credentials. Enable biometric login when prompted.",
        "## Push notifications",
        "Allow notifications to get goal alerts and live cricket score updates. You can mute per-sport in app settings.",
        "## Live betting on mobile",
        "The in-play layout puts the bet slip at the bottom for one-thumb use. Pre-set your stake size to avoid mis-taps in fast markets.",
        "## Data usage",
        "Live cricket video uses ~50–100 MB per hour. Switch to scores-only view on mobile data.",
      ]}
      subtitleByLocale={{
        bn: "Android ও iOS-এ JeetBuzz মোবাইল অ্যাপ গাইড — ইনস্টল, লগইন, বায়োমেট্রিক ও ইন-প্লে।",
        ur: "اینڈرائیڈ اور iOS پر JeetBuzz موبائل ایپ گائیڈ — انسٹال، لاگ ان، بایومیٹرک اور ان پلے۔",
        hi: "Android और iOS पर JeetBuzz मोबाइल ऐप गाइड — इंस्टॉल, लॉगिन, बायोमेट्रिक और इन-प्ले।",
      }}
      bodyByLocale={{
        bn: [
          "## Android বনাম iOS",
          "JeetBuzz Android-এর জন্য নেটিভ APK এবং iOS-এর জন্য সম্পূর্ণ-ফিচারের ওয়েব অ্যাপ অফার করে। দুটোই একই অ্যাকাউন্ট, একই ক্যাশিয়ার এবং একই লাইভ ক্রিকেট ফিড ব্যবহার করে — তাই আপনি যেকোনো ডিভাইসে নির্বিঘ্নে স্যুইচ করতে পারেন।",
          "## Android-এ ইনস্টল",
          "১. Chrome-এ অফিশিয়াল JeetBuzz সাইট খুলুন।",
          "২. উপরের App ডাউনলোড বোতাম চাপুন।",
          "৩. প্রম্পট এলে Chrome-এর জন্য 'Install from unknown sources' অনুমতি দিন।",
          "৪. APK ওপেন করে ইনস্টল করুন। হোম স্ক্রিনে JeetBuzz আইকন আসবে।",
          "৫. প্রথম খোলায় অটো-আপডেট অন রাখুন — গুরুত্বপূর্ণ সিকিউরিটি প্যাচ যোগ হয়।",
          "## iOS-এ ইনস্টল",
          "Safari-তে JeetBuzz সাইট খুলে Share আইকন চাপুন, তারপর **Add to Home Screen** বেছে নিন। JeetBuzz ওয়েব অ্যাপ নেটিভ অ্যাপের মতোই কাজ করে — স্প্ল্যাশ স্ক্রিন, ফুল-স্ক্রিন এবং পুশ-জাতীয় নোটিফিকেশন সহ।",
          "## প্রথম লগইন",
          "আপনার বিদ্যমান JeetBuzz ক্রেডেনশিয়াল ব্যবহার করুন। প্রম্পট এলে বায়োমেট্রিক লগইন (Android-এ ফিঙ্গারপ্রিন্ট বা iOS-এ Face ID) অন করুন — পরবর্তী লগইন ১ সেকেন্ডে।",
          "## পুশ নোটিফিকেশন",
          "গোল অ্যালার্ট, লাইভ ক্রিকেট স্কোর আপডেট এবং বোনাস ঘোষণার জন্য নোটিফিকেশন অনুমতি দিন। অ্যাপ সেটিংস থেকে প্রতিটি স্পোর্ট আলাদাভাবে মিউট করতে পারবেন।",
          "## মোবাইলে লাইভ বেটিং",
          "ইন-প্লে লেআউটে বেট স্লিপ স্ক্রিনের নিচে — এক হাতের আঙুলে সহজেই অ্যাক্সেসযোগ্য। দ্রুত মার্কেটে ভুল ট্যাপ এড়াতে আগে থেকে স্টেক সাইজ সেট করে রাখুন।",
          "## ডেটা ব্যবহার",
          "লাইভ ক্রিকেট ভিডিও প্রতি ঘণ্টায় প্রায় ৫০–১০০ MB ব্যবহার করে। মোবাইল ডেটায় থাকলে শুধু স্কোর ভিউতে চলে যান — ডেটা ১০ গুণ কম।",
          "## নিরাপত্তা টিপস",
          "- শুধু অফিশিয়াল সাইট থেকেই APK ডাউনলোড করুন; টেলিগ্রাম গ্রুপের APK নিরাপদ নয়।",
          "- ফোন PIN/বায়োমেট্রিক চালু রাখুন।",
          "- সংবেদনশীল অ্যাকশনের জন্য Two-Factor লগইন এনাবল করুন।",
        ],
        ur: [
          "## اینڈرائیڈ بمقابلہ iOS",
          "JeetBuzz اینڈرائیڈ کے لیے نیٹیو APK اور iOS کے لیے ویب ایپ دیتا ہے۔",
          "## اینڈرائیڈ پر انسٹال",
          "1. Chrome میں آفیشل سائٹ کھولیں۔",
          "2. App ڈاؤن لوڈ بٹن دبائیں۔",
          "3. 'Unknown sources' کی اجازت دیں۔",
          "4. APK انسٹال کریں۔",
          "## iOS پر انسٹال",
          "Safari میں Share، پھر Add to Home Screen۔",
          "## پہلا لاگ ان",
          "JeetBuzz کریڈینشلز استعمال کریں، بایومیٹرک آن کریں۔",
          "## پش نوٹیفکیشنز",
          "گول الرٹس اور لائیو کرکٹ سکور کے لیے اجازت دیں۔",
          "## موبائل پر لائیو بیٹنگ",
          "بیٹ سلپ نیچے ہوتی ہے، سٹیک پہلے سے سیٹ کریں۔",
          "## ڈیٹا کا استعمال",
          "لائیو کرکٹ ویڈیو فی گھنٹہ ~50–100 MB۔",
        ],
        hi: [
          "## Android बनाम iOS",
          "JeetBuzz Android के लिए नेटिव APK और iOS के लिए वेब ऐप देता है।",
          "## Android पर इंस्टॉल",
          "1. Chrome में आधिकारिक साइट खोलें।",
          "2. App डाउनलोड बटन दबाएँ।",
          "3. 'Unknown sources' अनुमति दें।",
          "4. APK इंस्टॉल करें।",
          "## iOS पर इंस्टॉल",
          "Safari में Share, फिर Add to Home Screen।",
          "## पहला लॉगिन",
          "JeetBuzz क्रेडेंशियल इस्तेमाल करें, बायोमेट्रिक ऑन करें।",
          "## पुश नोटिफिकेशन",
          "गोल अलर्ट और लाइव क्रिकेट स्कोर के लिए अनुमति दें।",
          "## मोबाइल पर लाइव बेटिंग",
          "बेट स्लिप नीचे होती है, स्टेक पहले से सेट करें।",
          "## डेटा उपयोग",
          "लाइव क्रिकेट वीडियो प्रति घंटे ~50–100 MB।",
        ],
      }}
      faqsByLocale={{
        bn: [
          { q: "App Store-এ iOS অ্যাপ আছে?", a: "নেটিভ iOS অ্যাপ নেই। হোম স্ক্রিনে ওয়েব অ্যাপ যোগ করুন।" },
          { q: "APK নিরাপদ?", a: "শুধু অফিশিয়াল সাইট থেকে।" },
          { q: "অ্যাপ ও সাইট একসাথে?", a: "হ্যাঁ — এক অ্যাকাউন্ট, একাধিক ডিভাইস।" },
          { q: "বায়োমেট্রিক লগইন কাজ করে?", a: "হ্যাঁ — Android ফিঙ্গারপ্রিন্ট ও iOS Face ID।" },
        ],
        ur: [
          { q: "App Store پر iOS ایپ ہے؟", a: "نیٹیو iOS ایپ نہیں۔ ہوم اسکرین پر ویب ایپ شامل کریں۔" },
          { q: "APK محفوظ ہے؟", a: "صرف آفیشل سائٹ سے۔" },
          { q: "ایپ اور سائٹ ایک ساتھ؟", a: "ہاں — ایک اکاؤنٹ، متعدد ڈیوائسز۔" },
          { q: "بایومیٹرک لاگ ان؟", a: "ہاں — اینڈرائیڈ فنگرپرنٹ اور iOS Face ID۔" },
        ],
        hi: [
          { q: "App Store पर iOS ऐप है?", a: "नेटिव iOS ऐप नहीं। होम स्क्रीन पर वेब ऐप जोड़ें।" },
          { q: "APK सुरक्षित है?", a: "केवल आधिकारिक साइट से।" },
          { q: "ऐप और साइट साथ?", a: "हाँ — एक अकाउंट, कई डिवाइस।" },
          { q: "बायोमेट्रिक लॉगिन?", a: "हाँ — Android फिंगरप्रिंट और iOS Face ID।" },
        ],
      }}
      faqs={[
        { q: "Is there a JeetBuzz iOS app on the App Store?", a: "No native iOS app at the time of writing. iOS users add the web app to home screen — it works just like the native app." },
        { q: "Is the APK safe?", a: "Only when downloaded from the official JeetBuzz site. APKs shared in Telegram groups are not safe." },
        { q: "Can I use the app and website at the same time?", a: "Yes — one account, multiple devices." },
        { q: "Does biometric login work?", a: "Yes on Android with fingerprint and on iOS via the home-screen web app + Face ID for sensitive actions." },
      ]}
      related={[
        { to: "/apk-download-guide", title: "APK Download Guide" },
        { to: "/login-guide", title: "Login Guide" },
        { to: "/security-guide", title: "Security Guide" },
        { to: "/live-cricket-betting", title: "Live Cricket Betting" },
      ]}
    />
  ),
});