import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/security-guide";
const TITLE =
  "JeetBuzz Security Guide 2026 - 2FA, Phishing Defence & Account Recovery";
const DESC =
  "JeetBuzz account security guide for 2026 — strong passwords, 2FA setup, biometric login, phishing defence and recovery steps if your JeetBuzz account is compromised.";

export const Route = createFileRoute("/security-guide")({
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
      eyebrow="Security"
      title={<>JeetBuzz <span className="gold-text">Security Guide</span></>}
      subtitle="A five-minute checklist to harden your JeetBuzz account — password, 2FA, biometrics, phishing defence and incident response."
      heroImage="security"
      ctaIntent="login"
      ctaLabel="Open JeetBuzz Login"
      breadcrumbs={[{ name: "Security", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why this matters",
        "Your JeetBuzz account holds money. Treat it like a bank login, not a social media one.",
        "## Step 1 — Strong unique password",
        "12+ characters, mix of letters/numbers/symbols, and not reused on any other site. A password manager is the easiest way.",
        "## Step 2 — Enable 2FA",
        "Inside Account > Security, turn on any available 2FA option. Even SMS 2FA is better than none.",
        "## Step 3 — Use biometric login on mobile",
        "Fingerprint or Face ID on the official app removes the daily password entry — reducing keystroke logging risk.",
        "## Step 4 — Recognise phishing",
        "- Domains that look like JeetBuzz but are not",
        "- Telegram messages claiming to recover your account",
        "- 'Promotion' emails asking for password",
        "- Telegram APKs shared by strangers",
        "## Step 5 — Incident response",
        "If you suspect compromise: change password from a trusted device, log out all sessions, open live chat, freeze withdrawals temporarily.",
        "## Wallet hygiene",
        "Only deposit and withdraw to wallets in your own name. Sharing wallets is a fast track to account suspension.",
      ]}
      subtitleByLocale={{
        bn: "JeetBuzz অ্যাকাউন্ট সুরক্ষার ৫-মিনিট চেকলিস্ট — পাসওয়ার্ড, 2FA, বায়োমেট্রিক, ফিশিং।",
        ur: "JeetBuzz اکاؤنٹ سیکیورٹی کی پانچ منٹ چیک لسٹ — پاس ورڈ، 2FA، بایومیٹرک، فشنگ۔",
        hi: "JeetBuzz अकाउंट सुरक्षा 5-मिनट चेकलिस्ट — पासवर्ड, 2FA, बायोमेट्रिक, फिशिंग।",
      }}
      bodyByLocale={{
        bn: [
          "## কেন এই গাইড আপনার জন্য",
          "JeetBuzz অ্যাকাউন্ট মানে শুধু একটি লগইন নয় — এর সঙ্গে যুক্ত আপনার bKash, Nagad বা Rocket ওয়ালেট, ডিপোজিট ইতিহাস এবং জমে থাকা ব্যালান্স। তাই অ্যাকাউন্টকে সোশ্যাল মিডিয়ার মতো না দেখে ব্যাংকিং অ্যাপের সমান গুরুত্ব দিন।",
          "## ধাপ ১ — শক্তিশালী ও ইউনিক পাসওয়ার্ড",
          "কমপক্ষে ১২ অক্ষর, বড়-ছোট হাতের অক্ষর, সংখ্যা ও বিশেষ চিহ্নের মিশ্রণ রাখুন। সবচেয়ে জরুরি — এই পাসওয়ার্ড যেন আপনার Gmail, Facebook, NID-সংযুক্ত কোনো সাইট বা bKash অ্যাপে আগে ব্যবহার করা না হয়। একটি ফ্রি পাসওয়ার্ড ম্যানেজার (যেমন Bitwarden বা KeePass) প্রতিটি সাইটে আলাদা পাসওয়ার্ড মনে রাখার ঝামেলা কমিয়ে দেয়।",
          "## ধাপ ২ — দুই-ধাপ যাচাই (যেখানে উপলব্ধ)",
          "Account → Security সেকশনে গিয়ে দেখুন আপনার অ্যাকাউন্টে কোন দুই-ধাপ যাচাই অপশন চালু করা যায়। SMS-ভিত্তিক অপশন থাকলেও সেটি চালু রাখুন — কিছু না থাকার চেয়ে যেকোনো 2FA অনেক বেশি নিরাপদ। সম্ভব হলে Google Authenticator বা Authy ব্যবহার করলে SIM swap-জনিত ঝুঁকি অনেকটাই কমে।",
          "## ধাপ ৩ — মোবাইলে বায়োমেট্রিক লগইন",
          "অফিসিয়াল অ্যাপে ফিঙ্গারপ্রিন্ট বা Face Unlock চালু রাখলে প্রতিদিন পাসওয়ার্ড টাইপ করতে হয় না। এতে কীবোর্ড লগার, পাশ থেকে কেউ দেখে ফেলা (shoulder surfing) বা শেয়ারড কীবোর্ডে পাসওয়ার্ড সেভ হওয়ার ঝুঁকি কমে।",
          "## ধাপ ৪ — ফিশিং ও প্রতারণার ধরন চেনা",
          "বাংলাদেশে JeetBuzz-কেন্দ্রিক প্রতারণার কয়েকটি প্রচলিত ধরন:",
          "- Facebook গ্রুপ বা পেজে ‘ফ্রি ১০০০৳ বোনাস’ লিংক — প্রায় সবই ফিশিং।",
          "- টেলিগ্রামে ‘JeetBuzz এজেন্ট’ পরিচয়ে অ্যাকাউন্ট রিকভারি বা ডিপোজিট সাহায্যের অফার।",
          "- SMS বা WhatsApp-এ পাঠানো ‘ভেরিফিকেশন’ লিংক যা আপনার পাসওয়ার্ড চায়।",
          "- অপরিচিতদের শেয়ার করা APK — অনেক সময় ভেতরে পাসওয়ার্ড-চুরির ম্যালওয়্যার লুকানো থাকে।",
          "JeetBuzz কখনো ইমেইল, SMS, WhatsApp বা টেলিগ্রামে আপনার পাসওয়ার্ড বা bKash/Nagad PIN চায় না — কেউ চাইলেই সেটি প্রতারণা।",
          "## ধাপ ৫ — সন্দেহ হলে কী করবেন",
          "যদি মনে হয় অ্যাকাউন্ট কেউ অ্যাক্সেস করেছে: প্রথমে নিজের বিশ্বস্ত ডিভাইস থেকে [পাসওয়ার্ড রিসেট](/password-reset) করুন। এরপর Account → Active Sessions থেকে সব ডিভাইসে সাইন আউট দিন। তারপর অফিসিয়াল লাইভ চ্যাটে গিয়ে pending withdrawal হোল্ড করতে অনুরোধ করুন এবং শেষ ডিপোজিট/উইথড্রয়াল আইডি রেডি রাখুন।",
          "## ওয়ালেট ও KYC হাইজিন",
          "শুধু নিজের নামে রেজিস্টার্ড bKash, Nagad বা Rocket ওয়ালেট ব্যবহার করুন। বন্ধু-পরিবারের নামের ওয়ালেট দিয়ে ডিপোজিট বা উইথড্রয়াল করলে KYC নাম-মিসম্যাচে অ্যাকাউন্ট সাময়িকভাবে স্থগিত হতে পারে এবং ফান্ড আটকে যাওয়ার আশঙ্কা থাকে।",
          "## ডিভাইস ও ব্রাউজার নিরাপত্তা",
          "সাইবার ক্যাফে বা পাবলিক কম্পিউটার থেকে কখনো JeetBuzz-এ লগইন করবেন না। নিজের ফোনেও স্ক্রিন লক (PIN বা ফিঙ্গারপ্রিন্ট) সেট রাখুন। ব্রাউজারের ‘Save password’ অপশনের ওপর নির্ভর না করে একটি ডেডিকেটেড পাসওয়ার্ড ম্যানেজার ব্যবহার করুন।",
          "## নিয়মিত পর্যালোচনা",
          "প্রতি ৩-৬ মাসে একবার পাসওয়ার্ড পরিবর্তন করুন এবং রিকভারি ইমেইল/ফোন নম্বর হালনাগাদ আছে কিনা যাচাই করে নিন। পুরোনো নম্বর বা ব্যবহার-অযোগ্য ইমেইলে আটকে থাকলে ভবিষ্যতে রিকভারি কঠিন হয়ে যায়।",
          "> দায়িত্বশীল গেমিং: ১৮+। বাজি যদি আনন্দ না দিয়ে চাপ তৈরি করে, [Responsible Gaming](/responsible-gaming) পেজটি একবার পড়ুন।",
        ],
        ur: [
          "## یہ کیوں اہم ہے",
          "آپ کے JeetBuzz اکاؤنٹ میں پیسے ہیں۔ بینک لاگ ان کی طرح سمجھیں۔",
          "## مرحلہ 1 — مضبوط منفرد پاس ورڈ",
          "12+ حروف، کسی اور سائٹ پر دوبارہ نہیں۔ پاس ورڈ مینیجر استعمال کریں۔",
          "## مرحلہ 2 — 2FA فعال کریں",
          "Account > Security میں 2FA آن کریں۔",
          "## مرحلہ 3 — موبائل پر بایومیٹرک",
          "فنگرپرنٹ یا Face ID استعمال کریں۔",
          "## مرحلہ 4 — فشنگ کی پہچان",
          "- جعلی ڈومینز",
          "- ٹیلیگرام پر اکاؤنٹ ریکوری کے دعوے",
          "- پاس ورڈ مانگنے والی ای میلز",
          "- اجنبیوں سے APKs",
          "## مرحلہ 5 — مسئلے کی صورت میں",
          "پاس ورڈ تبدیل کریں، تمام سیشن لاگ آؤٹ، لائیو چیٹ، ودڈرا روکیں۔",
          "## والیٹ احتیاط",
          "صرف اپنے نام کے EasyPaisa/JazzCash استعمال کریں۔",
        ],
        hi: [
          "## यह क्यों मायने रखता है",
          "आपके JeetBuzz अकाउंट में पैसे हैं। बैंक लॉगिन की तरह समझें।",
          "## स्टेप 1 — मज़बूत यूनिक पासवर्ड",
          "12+ अक्षर, अन्य साइट पर दोबारा नहीं। पासवर्ड मैनेजर इस्तेमाल करें।",
          "## स्टेप 2 — 2FA चालू करें",
          "Account > Security में 2FA ऑन करें।",
          "## स्टेप 3 — मोबाइल पर बायोमेट्रिक",
          "फिंगरप्रिंट या Face ID इस्तेमाल करें।",
          "## स्टेप 4 — फिशिंग पहचानें",
          "- नकली डोमेन",
          "- टेलीग्राम पर अकाउंट रिकवरी के दावे",
          "- पासवर्ड माँगने वाले ईमेल",
          "- अजनबियों से APK",
          "## स्टेप 5 — समस्या होने पर",
          "पासवर्ड बदलें, सभी सेशन लॉग आउट, लाइव चैट, विदड्रॉल रोकें।",
          "## वॉलेट हाइजीन",
          "केवल अपने नाम के UPI/PhonePe/Paytm इस्तेमाल करें।",
        ],
      }}
      faqsByLocale={{
        bn: [
          { q: "JeetBuzz-এ 2FA কি সব অ্যাকাউন্টে চালু থাকে?", a: "অ্যাকাউন্টের ধরন ও দেশের ওপর নির্ভর করে কোন দুই-ধাপ যাচাই অপশন দেখা যাবে। Account → Security সেকশনে গিয়ে সরাসরি যাচাই করুন।" },
          { q: "কেউ পাসওয়ার্ড জেনে ফেললে সাথে সাথে কী করব?", a: "একটি বিশ্বস্ত ডিভাইস থেকে পাসওয়ার্ড রিসেট করুন, সব সেশন লগ আউট করুন, এবং অফিসিয়াল লাইভ চ্যাটে pending withdrawal হোল্ড করার অনুরোধ জানান।" },
          { q: "টেলিগ্রাম বা WhatsApp-এ পাওয়া APK ব্যবহার করা কি নিরাপদ?", a: "না। শুধুমাত্র অফিসিয়াল সাইটের APK ব্যবহার করুন; অপরিচিত উৎসের ফাইলে পাসওয়ার্ড চুরির ম্যালওয়্যার থাকতে পারে।" },
          { q: "Gmail আর JeetBuzz-এর পাসওয়ার্ড একই রাখলে সমস্যা কী?", a: "একটি সাইট leak হলে আক্রমণকারী একই কম্বো অন্য সাইটেও সঙ্গে সঙ্গে চেষ্টা করে। প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে আলাদা পাসওয়ার্ড রাখা অপরিহার্য।" },
          { q: "পাবলিক Wi-Fi থেকে JeetBuzz ব্যবহার করা যায়?", a: "ব্রাউজিং করা যেতে পারে, তবে লগইন বা উইথড্রয়ালের সময় নিজের মোবাইল ডেটা ব্যবহার করাই নিরাপদ।" },
          { q: "অ্যাকাউন্টে অপরিচিত ডিভাইসের সেশন দেখলে কী করব?", a: "সাথে সাথে সেই ডিভাইস সাইন আউট করুন, পাসওয়ার্ড পরিবর্তন করুন এবং প্রয়োজনে 2FA পুনরায় enrol করুন।" },
        ],
        ur: [
          { q: "کیا JeetBuzz 2FA سپورٹ کرتا ہے؟", a: "ہاں — Account > Security میں۔" },
          { q: "کوئی لاگ ان ہو جائے؟", a: "پاس ورڈ تبدیل، تمام سیشن لاگ آؤٹ، لائیو چیٹ۔" },
          { q: "APK محفوظ ہے؟", a: "صرف آفیشل سائٹ سے۔" },
          { q: "ای میل پاس ورڈ دوبارہ؟", a: "کبھی نہیں۔" },
        ],
        hi: [
          { q: "क्या JeetBuzz 2FA सपोर्ट करता है?", a: "हाँ — Account > Security में।" },
          { q: "कोई लॉगिन कर ले?", a: "पासवर्ड बदलें, सभी सेशन लॉग आउट, लाइव चैट।" },
          { q: "APK सुरक्षित है?", a: "केवल आधिकारिक साइट से।" },
          { q: "ईमेल पासवर्ड दोबारा?", a: "कभी नहीं।" },
        ],
      }}
      faqs={[
        { q: "Does JeetBuzz support 2FA?", a: "Yes — enable it under Account > Security. SMS is the most common option in Bangladesh." },
        { q: "What if someone logs into my account?", a: "Change your password immediately, log out all sessions, open live chat. Have your TrxID history ready." },
        { q: "Is the APK safe?", a: "Only from the official site. Telegram APKs are a leading source of credential theft." },
        { q: "Should I reuse my email password?", a: "Never. Use a password manager." },
      ]}
      related={[
        { to: "/login-guide", title: "Login Guide" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
        { to: "/mobile-app-guide", title: "Mobile App Guide" },
        { to: "/privacy-policy", title: "Privacy Policy" },
      ]}
    />
  ),
});