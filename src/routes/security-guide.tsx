import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/security-guide";
const TITLE = "JeetBuzz Security Guide — Protect Your Account in 5 Steps";
const DESC =
  "JeetBuzz account security for Bangladesh players — strong password, 2FA, biometrics, phishing avoidance and what to do if your account is compromised.";

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
          "## কেন গুরুত্বপূর্ণ",
          "আপনার JeetBuzz অ্যাকাউন্টে টাকা আছে। ব্যাংক লগইনের মতো ট্রিট করুন।",
          "## ধাপ ১ — শক্তিশালী ইউনিক পাসওয়ার্ড",
          "১২+ অক্ষর, অন্য সাইটে রিইউজ নয়। পাসওয়ার্ড ম্যানেজার ব্যবহার করুন।",
          "## ধাপ ২ — 2FA চালু করুন",
          "Account > Security-তে 2FA অন করুন। SMS-ও যথেষ্ট।",
          "## ধাপ ৩ — মোবাইলে বায়োমেট্রিক",
          "ফিঙ্গারপ্রিন্ট/Face ID ব্যবহার করুন।",
          "## ধাপ ৪ — ফিশিং চিনুন",
          "- ভুয়া ডোমেইন",
          "- টেলিগ্রামে অ্যাকাউন্ট রিকভারির দাবি",
          "- পাসওয়ার্ড চাওয়া ইমেইল",
          "- অপরিচিতদের APK",
          "## ধাপ ৫ — সমস্যা হলে",
          "পাসওয়ার্ড পরিবর্তন, সব সেশন লগ আউট, লাইভ চ্যাট, উইথড্রয়াল ফ্রিজ।",
          "## ওয়ালেট হাইজিন",
          "শুধু নিজের নামের bKash/Nagad/Rocket ব্যবহার করুন।",
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
          { q: "JeetBuzz 2FA সাপোর্ট করে?", a: "হ্যাঁ — Account > Security-তে চালু করুন।" },
          { q: "কেউ লগইন করলে?", a: "পাসওয়ার্ড পরিবর্তন, সব সেশন লগ আউট, লাইভ চ্যাট।" },
          { q: "APK নিরাপদ?", a: "শুধু অফিশিয়াল সাইট থেকে।" },
          { q: "ইমেইল পাসওয়ার্ড রিইউজ?", a: "কখনো না।" },
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