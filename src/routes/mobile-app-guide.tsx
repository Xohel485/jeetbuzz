import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema, softwareApplicationSchema } from "@/lib/schema";

const PATH = "/mobile-app-guide";
const TITLE =
  "JeetBuzz Mobile App Guide Bangladesh 2026 - Android & iOS Install, Login";
const DESC =
  "JeetBuzz mobile app guide for Bangladesh 2026. Android APK and iOS install, login, biometric security, push notifications and live cricket in-play tips on the go.";

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
      subtitle="Everything Bangladesh players need to know about using JeetBuzz on Android and iOS, install, login, biometrics, notifications and in-play."
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
        "Use Safari, tap Share, then Add to Home Screen, the JeetBuzz web app installs like a native app.",
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
        bn: "Android ও iOS-এ JeetBuzz মোবাইল অ্যাপ গাইড, ইনস্টল, লগইন, বায়োমেট্রিক ও ইন-প্লে।",
        ur: "اینڈرائیڈ اور iOS پر JeetBuzz موبائل ایپ گائیڈ, انسٹال، لاگ ان، بایومیٹرک اور ان پلے۔",
        hi: "Android और iOS पर JeetBuzz मोबाइल ऐप गाइड, इंस्टॉल, लॉगिन, बायोमेट्रिक और इन-प्ले।",
      }}
      bodyByLocale={{
        bn: [
          "## Android বনাম iOS",
          "JeetBuzz Android-এর জন্য নেটিভ APK এবং iOS-এর জন্য সম্পূর্ণ-ফিচারের ওয়েব অ্যাপ অফার করে। দুটোই একই অ্যাকাউন্ট, একই ক্যাশিয়ার এবং একই লাইভ ক্রিকেট ফিড ব্যবহার করে, তাই আপনি যেকোনো ডিভাইসে নির্বিঘ্নে স্যুইচ করতে পারেন।",
          "## Android-এ ইনস্টল",
          "১. Chrome-এ অফিশিয়াল JeetBuzz সাইট খুলুন।",
          "২. উপরের App ডাউনলোড বোতাম চাপুন।",
          "৩. প্রম্পট এলে Chrome-এর জন্য 'Install from unknown sources' অনুমতি দিন।",
          "৪. APK ওপেন করে ইনস্টল করুন। হোম স্ক্রিনে JeetBuzz আইকন আসবে।",
          "৫. প্রথম খোলায় অটো-আপডেট অন রাখুন, গুরুত্বপূর্ণ সিকিউরিটি প্যাচ যোগ হয়।",
          "## iOS-এ ইনস্টল",
          "Safari-তে JeetBuzz সাইট খুলে Share আইকন চাপুন, তারপর **Add to Home Screen** বেছে নিন। JeetBuzz ওয়েব অ্যাপ নেটিভ অ্যাপের মতোই কাজ করে, স্প্ল্যাশ স্ক্রিন, ফুল-স্ক্রিন এবং পুশ-জাতীয় নোটিফিকেশন সহ।",
          "## প্রথম লগইন",
          "আপনার বিদ্যমান JeetBuzz ক্রেডেনশিয়াল ব্যবহার করুন। প্রম্পট এলে বায়োমেট্রিক লগইন (Android-এ ফিঙ্গারপ্রিন্ট বা iOS-এ Face ID) অন করুন, পরবর্তী লগইন ১ সেকেন্ডে।",
          "## পুশ নোটিফিকেশন",
          "গোল অ্যালার্ট, লাইভ ক্রিকেট স্কোর আপডেট এবং বোনাস ঘোষণার জন্য নোটিফিকেশন অনুমতি দিন। অ্যাপ সেটিংস থেকে প্রতিটি স্পোর্ট আলাদাভাবে মিউট করতে পারবেন।",
          "## মোবাইলে লাইভ বেটিং",
          "ইন-প্লে লেআউটে বেট স্লিপ স্ক্রিনের নিচে, এক হাতের আঙুলে সহজেই অ্যাক্সেসযোগ্য। দ্রুত মার্কেটে ভুল ট্যাপ এড়াতে আগে থেকে স্টেক সাইজ সেট করে রাখুন।",
          "## ডেটা ব্যবহার",
          "লাইভ ক্রিকেট ভিডিও প্রতি ঘণ্টায় প্রায় ৫০–১০০ MB ব্যবহার করে। মোবাইল ডেটায় থাকলে শুধু স্কোর ভিউতে চলে যান, ডেটা ১০ গুণ কম।",
          "## নিরাপত্তা টিপস",
          "- শুধু অফিশিয়াল সাইট থেকেই APK ডাউনলোড করুন; টেলিগ্রাম গ্রুপের APK নিরাপদ নয়।",
          "- ফোন PIN/বায়োমেট্রিক চালু রাখুন।",
          "- সংবেদনশীল অ্যাকশনের জন্য Two-Factor লগইন এনাবল করুন।",
        ],
        ur: [
          "## اینڈرائیڈ بمقابلہ iOS",
          "JeetBuzz اینڈرائیڈ کے لیے نیٹیو APK اور iOS کے لیے فل فیچر ویب ایپ پیش کرتا ہے۔ دونوں ایک ہی اکاؤنٹ، ایک ہی کیشیئر اور ایک ہی لائیو کرکٹ فیڈ شیئر کرتے ہیں, اس لیے آپ کسی بھی ڈیوائس پر بلا تعطل سوئچ کر سکتے ہیں۔",
          "## اینڈرائیڈ پر انسٹال",
          "1. Chrome میں آفیشل JeetBuzz سائٹ کھولیں۔",
          "2. اوپر App ڈاؤن لوڈ بٹن دبائیں۔",
          "3. پرامپٹ ملنے پر Chrome کے لیے 'Install from unknown sources' کی اجازت دیں۔",
          "4. APK کھول کر انسٹال کریں۔ ہوم اسکرین پر JeetBuzz آئیکن بن جائے گا۔",
          "5. پہلی بار کھولنے پر آٹو اپ ڈیٹ آن رکھیں, اہم سیکیورٹی پیچز شامل ہوتے رہتے ہیں۔",
          "## iOS پر انسٹال",
          "Safari میں JeetBuzz سائٹ کھولیں، Share آئیکن دبائیں، پھر **Add to Home Screen** منتخب کریں۔ JeetBuzz ویب ایپ نیٹیو ایپ کی طرح کام کرتی ہے, اسپلیش اسکرین، فل اسکرین موڈ اور پش نوٹیفکیشنز کے ساتھ۔",
          "## پہلا لاگ ان",
          "اپنے موجودہ JeetBuzz کریڈینشلز استعمال کریں۔ پرامپٹ ملنے پر بایومیٹرک لاگ ان (اینڈرائیڈ پر فنگرپرنٹ یا iOS پر Face ID) آن کریں, اگلے لاگ ان صرف 1 سیکنڈ میں ہوں گے۔",
          "## پش نوٹیفکیشنز",
          "گول الرٹس، لائیو کرکٹ سکور اپ ڈیٹس اور بونس اعلانات کے لیے نوٹیفکیشن کی اجازت دیں۔ ایپ سیٹنگز سے ہر کھیل کو الگ سے میوٹ کر سکتے ہیں۔",
          "## موبائل پر لائیو بیٹنگ",
          "ان پلے لے آؤٹ میں بیٹ سلپ اسکرین کے نیچے ہے, ایک ہاتھ کی انگلی سے آسانی سے قابل رسائی۔ تیز مارکیٹس میں غلط ٹیپ سے بچنے کے لیے پہلے سے اسٹیک سائز سیٹ کر لیں۔",
          "## ڈیٹا کا استعمال",
          "لائیو کرکٹ ویڈیو فی گھنٹہ تقریباً 50–100 MB استعمال کرتی ہے۔ موبائل ڈیٹا پر صرف سکور ویو میں چلے جائیں, ڈیٹا 10 گنا کم۔",
          "## پاکستان کے لیے خاص نکات",
          "- موبائل والیٹ ایپس (JazzCash، EasyPaisa) کیشیئر سے براہ راست ڈیپ لنک ہوتی ہیں. APK اور ویب ایپ دونوں پر ایک جیسا کام کرتی ہیں۔",
          "- 4G پر لائیو ویڈیو دیکھنے کے بجائے Wi-Fi استعمال کریں تاکہ پیکج جلدی ختم نہ ہو۔",
          "## سیکیورٹی ٹپس",
          "- APK صرف آفیشل سائٹ سے ڈاؤن لوڈ کریں؛ ٹیلیگرام گروپ کی APK محفوظ نہیں۔",
          "- فون کا PIN/بایومیٹرک ہمیشہ فعال رکھیں۔",
          "- حساس اقدامات کے لیے Two-Factor لاگ ان فعال کریں۔",
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
          { q: "অ্যাপ ও সাইট একসাথে?", a: "হ্যাঁ, এক অ্যাকাউন্ট, একাধিক ডিভাইস।" },
          { q: "বায়োমেট্রিক লগইন কাজ করে?", a: "হ্যাঁ. Android ফিঙ্গারপ্রিন্ট ও iOS Face ID।" },
        ],
        ur: [
          { q: "کیا App Store پر JeetBuzz iOS ایپ ہے؟", a: "اس وقت پاکستان، بنگلہ دیش یا بھارت کے App Store پر کوئی نیٹیو iOS ایپ نہیں ہے۔ iOS صارفین Safari سے ویب ایپ ہوم اسکرین پر شامل کریں, یہ نیٹیو ایپ کی طرح کام کرتی ہے۔" },
          { q: "کیا APK محفوظ ہے؟", a: "صرف اس وقت جب آفیشل JeetBuzz سائٹ سے ڈاؤن لوڈ کی جائے۔ ٹیلیگرام گروپس یا تھرڈ پارٹی سائٹس کی APK محفوظ نہیں۔" },
          { q: "کیا میں ایپ اور ویب سائٹ ایک ساتھ استعمال کر سکتا ہوں؟", a: "ہاں, ایک اکاؤنٹ، متعدد ڈیوائسز۔ سب ڈیوائسز پر بیلنس ریئل ٹائم سنک ہوتا ہے۔" },
          { q: "کیا بایومیٹرک لاگ ان کام کرتا ہے؟", a: "ہاں, اینڈرائیڈ پر فنگرپرنٹ اور iOS پر ہوم اسکرین ویب ایپ + حساس اقدامات کے لیے Face ID۔" },
          { q: "اینڈرائیڈ پر APK کس سائز کی ہے؟", a: "عام طور پر 20–40 MB، جو زیادہ تر اینڈرائیڈ فونز کے لیے ہلکی ہے۔ موبائل ڈیٹا پر ڈاؤن لوڈ سے پہلے Wi-Fi استعمال کرنا بہتر ہے۔" },
          { q: "ایپ آٹو-اپ ڈیٹ ہو گی؟", a: "اینڈرائیڈ APK کبھی کبھار نئی ورژن کا پرامپٹ دکھائے گی, جیسے ہی موقع ملے اپ ڈیٹ کریں۔ iOS ویب ایپ ہر کھلنے پر خود سرور سے تازہ ورژن لے لیتی ہے۔" },
        ],
        hi: [
          { q: "App Store पर iOS ऐप है?", a: "नेटिव iOS ऐप नहीं। होम स्क्रीन पर वेब ऐप जोड़ें।" },
          { q: "APK सुरक्षित है?", a: "केवल आधिकारिक साइट से।" },
          { q: "ऐप और साइट साथ?", a: "हाँ, एक अकाउंट, कई डिवाइस।" },
          { q: "बायोमेट्रिक लॉगिन?", a: "हाँ. Android फिंगरप्रिंट और iOS Face ID।" },
        ],
      }}
      faqs={[
        { q: "Is there a JeetBuzz iOS app on the App Store?", a: "No native iOS app at the time of writing. iOS users add the web app to home screen, it works just like the native app." },
        { q: "Is the APK safe?", a: "Only when downloaded from the official JeetBuzz site. APKs shared in Telegram groups are not safe." },
        { q: "Can I use the app and website at the same time?", a: "Yes, one account, multiple devices." },
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