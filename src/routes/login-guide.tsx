import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { imageAbsoluteUrl } from "@/lib/images";

export const Route = createFileRoute("/login-guide")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Login Guide — Safe Access from Bangladesh | GetJeetBuzz" },
      { name: "description", content: "How to log in to JeetBuzz from Bangladesh safely, recover your password and avoid fake mirror sites. Updated June 2026." },
      { property: "og:title", content: "JeetBuzz Login Guide — Safe Access from Bangladesh" },
      { property: "og:description", content: "Step-by-step JeetBuzz login guide for Bangladesh, with security tips." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("loginInterface") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("loginInterface") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz Login Guide — <span className="gold-text">Safe Access</span></>}
      titleByLocale={{
        bn: <>জিতবাজ লগইন গাইড — <span className="gold-text">নিরাপদ অ্যাক্সেস</span></>,
        ur: <>JeetBuzz لاگ ان گائیڈ — <span className="gold-text">محفوظ رسائی</span></>,
        hi: <>JeetBuzz लॉगिन गाइड — <span className="gold-text">सुरक्षित एक्सेस</span></>,
      }}
      subtitle="A short, security-first walkthrough of logging into JeetBuzz from Bangladesh — plus how to recover your password and spot fake mirror sites."
      subtitleByLocale={{
        bn: "বাংলাদেশ থেকে জিতবাজে নিরাপদভাবে লগইন করার সংক্ষিপ্ত গাইড — পাসওয়ার্ড রিকভারি এবং ফেক মিরর সাইট চেনার উপায়সহ।",
        ur: "پاکستان سے JeetBuzz پر محفوظ لاگ ان کا مختصر گائیڈ — پاس ورڈ بحال کرنے اور جعلی مرر سائٹس پہچاننے کے طریقوں کے ساتھ۔",
        hi: "भारत से JeetBuzz पर सुरक्षित लॉगिन की संक्षिप्त गाइड — पासवर्ड रिकवरी और फ़र्ज़ी मिरर साइट पहचानने के तरीक़े सहित।",
      }}
      ctaIntent="login"
      ctaLabel="Go to JeetBuzz Login"
      ctaLabelByLocale={{
        bn: "জিতবাজ লগইনে যান",
        ur: "JeetBuzz لاگ ان پر جائیں",
        hi: "JeetBuzz लॉगिन पर जाएँ",
      }}
      heroImage="loginInterface"
      inlineImage="security"
      body={[
        "## We are not the login page",
        "GetJeetBuzz never collects JeetBuzz credentials. The button above takes you to the official JeetBuzz login.",
        "## How to log in (60 seconds)",
        "1. Tap the 'Go to JeetBuzz Login' button above.",
        "2. Enter your registered phone number or email.",
        "3. Enter your password.",
        "4. Complete any 2FA prompt and you're in.",
        "## Forgot password",
        "Use 'Forgot password' on the official site. A reset link is sent to your registered phone or email.",
        "## Can't access the site?",
        "Some networks block betting domains. Try a different network or contact official support — never enter credentials on a 'mirror' site.",
        "## Security checklist",
        "- Use a unique, long password",
        "- Enable any 2FA option in account settings",
        "- Never share your password — official support will never ask for it",
        "> Last verified: " + LAST_VERIFIED + ".",
      ]}
      bodyByLocale={{
        bn: [
          "## আমরা লগইন পেজ নই",
          "GetJeetBuzz কখনো আপনার জিতবাজ পাসওয়ার্ড সংগ্রহ করে না। উপরের বাটনটি আপনাকে সরাসরি অফিসিয়াল জিতবাজ লগইনে নিয়ে যাবে।",
          "## ৬০ সেকেন্ডে লগইন",
          "১. উপরের ‘জিতবাজ লগইনে যান’ বাটনে ট্যাপ করুন।",
          "২. রেজিস্টার করা ফোন নম্বর বা ইমেইল দিন।",
          "৩. পাসওয়ার্ড দিন।",
          "৪. 2FA চাইলে কোড দিন — হয়ে গেলো।",
          "## পাসওয়ার্ড ভুলে গেছেন?",
          "অফিসিয়াল সাইটে ‘Forgot Password’ ব্যবহার করুন। রিসেট লিংক আপনার ফোন/ইমেইলে আসবে।",
          "## সাইট খুলছে না?",
          "কিছু ISP বেটিং ডোমেইন ব্লক করে। অন্য নেটওয়ার্ক ট্রাই করুন বা অফিসিয়াল সাপোর্টের সাথে কথা বলুন — কখনই কোনো ‘মিরর’ সাইটে পাসওয়ার্ড দেবেন না।",
          "## নিরাপত্তা চেকলিস্ট",
          "- ইউনিক, দীর্ঘ পাসওয়ার্ড ব্যবহার করুন",
          "- অ্যাকাউন্ট সেটিংসে 2FA চালু করুন",
          "- কাউকে পাসওয়ার্ড দেবেন না — অফিসিয়াল সাপোর্ট কখনো পাসওয়ার্ড চায় না",
          "> সর্বশেষ যাচাই: " + LAST_VERIFIED + "।",
        ],
        ur: [
          "## ہم لاگ ان پیج نہیں ہیں",
          "GetJeetBuzz کبھی آپ کے JeetBuzz لاگ ان کی تفصیلات جمع نہیں کرتا۔ اوپر دیا گیا بٹن آپ کو براہ راست آفیشل JeetBuzz لاگ ان پر لے جاتا ہے۔",
          "## 60 سیکنڈ میں لاگ ان",
          "1. اوپر 'JeetBuzz لاگ ان پر جائیں' بٹن دبائیں۔",
          "2. اپنا رجسٹرڈ فون نمبر یا ای میل درج کریں۔",
          "3. اپنا پاس ورڈ درج کریں۔",
          "4. 2FA کوڈ مکمل کریں — آپ اندر آ گئے۔",
          "## پاس ورڈ بھول گئے؟",
          "آفیشل سائٹ پر 'Forgot password' استعمال کریں۔ ری سیٹ لنک آپ کے فون/ای میل پر بھیجا جائے گا۔",
          "## سائٹ نہیں کھل رہی؟",
          "کچھ پاکستانی ISPs بیٹنگ ڈومینز بلاک کرتے ہیں۔ دوسرا نیٹ ورک آزمائیں یا آفیشل سپورٹ سے رابطہ کریں — کسی 'مرر' سائٹ پر کبھی پاس ورڈ نہ ڈالیں۔",
          "## سیکیورٹی چیک لسٹ",
          "- منفرد، لمبا پاس ورڈ استعمال کریں",
          "- اکاؤنٹ سیٹنگز میں 2FA آن کریں",
          "- پاس ورڈ کسی کو نہ بتائیں — آفیشل سپورٹ کبھی پاس ورڈ نہیں مانگتا",
          "> آخری تصدیق: " + LAST_VERIFIED + "۔",
        ],
        hi: [
          "## हम लॉगिन पेज नहीं हैं",
          "GetJeetBuzz कभी आपकी JeetBuzz लॉगिन डिटेल्स इकट्ठा नहीं करता। ऊपर का बटन आपको सीधे ऑफिशियल JeetBuzz लॉगिन पर ले जाता है।",
          "## 60 सेकंड में लॉगिन",
          "1. ऊपर ‘JeetBuzz लॉगिन पर जाएँ’ बटन दबाएँ।",
          "2. अपना रजिस्टर्ड फ़ोन नंबर या ईमेल डालें।",
          "3. अपना पासवर्ड डालें।",
          "4. 2FA कोड पूरा करें — आप अंदर हैं।",
          "## पासवर्ड भूल गए?",
          "ऑफिशियल साइट पर ‘Forgot password’ इस्तेमाल करें। रीसेट लिंक आपके फ़ोन/ईमेल पर भेजा जाएगा।",
          "## साइट नहीं खुल रही?",
          "कुछ भारतीय ISP बेटिंग डोमेन ब्लॉक करते हैं। दूसरा नेटवर्क आज़माएँ या ऑफिशियल सपोर्ट से बात करें — किसी ‘मिरर’ साइट पर पासवर्ड कभी न डालें।",
          "## सुरक्षा चेकलिस्ट",
          "- अनोखा, लंबा पासवर्ड इस्तेमाल करें",
          "- अकाउंट सेटिंग्स में 2FA चालू करें",
          "- पासवर्ड किसी से शेयर न करें — ऑफिशियल सपोर्ट कभी पासवर्ड नहीं माँगता",
          "> आख़िरी सत्यापन: " + LAST_VERIFIED + "।",
        ],
      }}
    />
  ),
});