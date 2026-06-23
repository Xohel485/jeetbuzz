import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { imageAbsoluteUrl } from "@/lib/images";

export const Route = createFileRoute("/login-guide")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Login — Working Links & Access Help (2026)" },
      { name: "description", content: "JeetBuzz login — working alternative links, fix 'site not opening' issues, recover your password and spot fake mirrors. Updated 2026." },
      { property: "og:title", content: "JeetBuzz Login — Working Links & Access Help" },
      { property: "og:description", content: "Official JeetBuzz login plus working alternative links and fixes for blocked-access issues." },
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
        "## JeetBuzz login not working? Try a working alternative link",
        "If the main JeetBuzz login page won't open in Bangladesh, Pakistan or India, the operator publishes additional working access points. The safest way to reach one is to use our verified outbound button above — it always routes to JeetBuzz's current live domain, even when ISPs throttle the older one.",
        "- Use the 'Go to JeetBuzz Login' button — it auto-redirects to the live JeetBuzz login URL.",
        "- Bookmark the page you land on after redirect so you can return directly next time.",
        "- If a domain is suddenly offline, come back to GetJeetBuzz — we update the outbound link as soon as JeetBuzz rotates it.",
        "## Fix 'JeetBuzz site not opening' in 2 minutes",
        "1. Switch network — move from Wi-Fi to mobile data (or vice versa). Many ISP blocks only apply to one network.",
        "2. Change DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google) in your phone Wi-Fi settings — this resolves most 'this site can't be reached' errors.",
        "3. Clear your browser cache for jeetbuzz.com and try the link again from this page.",
        "4. Try the JeetBuzz Android APK — see the [App Download Guide](/apk-download-guide). The app bypasses most DNS-level blocks.",
        "5. Still stuck? Open 24/7 live chat on the JeetBuzz site and ask for the current working URL — never trust a link sent over WhatsApp or Telegram by a stranger.",
        "## How to spot a fake JeetBuzz login mirror",
        "- The real JeetBuzz login is HTTPS with a valid certificate — no browser warning.",
        "- The logo, colour scheme and Bengali copy match the official site exactly.",
        "- It never asks for your bKash / Nagad PIN or OTP at login — only your JeetBuzz password.",
        "- If anything looks off, close the tab and re-open JeetBuzz from the button above.",
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
          "## জিতবাজ লগইন কাজ করছে না? বিকল্প ওয়ার্কিং লিংক",
          "মূল জিতবাজ লগইন পেজ না খুললে অপারেটর অতিরিক্ত ওয়ার্কিং অ্যাক্সেস পয়েন্ট দেয়। সবচেয়ে নিরাপদ উপায় হলো উপরের ভেরিফায়েড বাটন ব্যবহার করা — এটি সবসময় JeetBuzz-এর বর্তমান লাইভ ডোমেইনে রিডাইরেক্ট করে।",
          "- উপরের ‘জিতবাজ লগইনে যান’ বাটন ব্যবহার করুন।",
          "- যেই পেজে পৌঁছাবেন সেটি বুকমার্ক করে রাখুন।",
          "- ডোমেইন বন্ধ হলে GetJeetBuzz-এ ফিরে আসুন — আমরা লিংক আপডেট রাখি।",
          "## ‘JeetBuzz সাইট খুলছে না’ — ২ মিনিটে সমাধান",
          "১. নেটওয়ার্ক বদলান — Wi-Fi থেকে মোবাইল ডেটা বা উল্টোটা।",
          "২. DNS পরিবর্তন করুন: 1.1.1.1 (Cloudflare) বা 8.8.8.8 (Google)।",
          "৩. ব্রাউজার ক্যাশ ক্লিয়ার করুন এবং আবার চেষ্টা করুন।",
          "৪. JeetBuzz Android APK ব্যবহার করুন — [App Download Guide](/apk-download-guide) দেখুন।",
          "৫. সমস্যা থাকলে অফিসিয়াল 24/7 লাইভ চ্যাটে বর্তমান ওয়ার্কিং URL জিজ্ঞেস করুন। WhatsApp/Telegram-এ অপরিচিত কারও দেওয়া লিংকে ভরসা করবেন না।",
          "## ফেক জিতবাজ লগইন মিরর কীভাবে চিনবেন",
          "- আসল সাইট HTTPS, কোনো ব্রাউজার ওয়ার্নিং নেই।",
          "- লোগো, রঙ ও বাংলা কপি অফিসিয়াল সাইটের মতোই।",
          "- লগইনের সময় কখনই bKash/Nagad PIN বা OTP চায় না — শুধু আপনার JeetBuzz পাসওয়ার্ড।",
          "- সন্দেহ হলে ট্যাব বন্ধ করে উপরের বাটন থেকে আবার চালু করুন।",
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
          "## JeetBuzz लॉगिन नहीं चल रहा? वैकल्पिक वर्किंग लिंक",
          "अगर मुख्य JeetBuzz लॉगिन पेज नहीं खुल रहा, तो ऊपर का वेरीफाइड बटन इस्तेमाल करें — यह हमेशा JeetBuzz के मौजूदा लाइव डोमेन पर रीडायरेक्ट करता है।",
          "- ऊपर का ‘JeetBuzz लॉगिन पर जाएँ’ बटन इस्तेमाल करें।",
          "- जिस पेज पर पहुँचें, उसे बुकमार्क कर लें।",
          "- डोमेन बंद हो तो वापस GetJeetBuzz आएँ — हम लिंक अपडेट रखते हैं।",
          "## ‘JeetBuzz साइट नहीं खुल रही’ — 2 मिनट में हल",
          "1. नेटवर्क बदलें — Wi-Fi से मोबाइल डेटा या उल्टा।",
          "2. DNS बदलें: 1.1.1.1 (Cloudflare) या 8.8.8.8 (Google)।",
          "3. ब्राउज़र कैश क्लियर करें और फिर से कोशिश करें।",
          "4. JeetBuzz Android APK आज़माएँ — [App Download Guide](/apk-download-guide) देखें।",
          "5. अभी भी समस्या हो तो ऑफिशियल 24/7 लाइव चैट से मौजूदा वर्किंग URL पूछें। WhatsApp/Telegram पर अजनबी का भेजा लिंक न खोलें।",
          "## फ़र्ज़ी JeetBuzz लॉगिन मिरर कैसे पहचानें",
          "- असली साइट HTTPS है, ब्राउज़र चेतावनी नहीं देता।",
          "- लोगो, रंग और हिंदी कॉपी ऑफिशियल साइट जैसी ही हैं।",
          "- लॉगिन पर कभी भी UPI/PhonePe PIN या OTP नहीं माँगता — सिर्फ़ JeetBuzz पासवर्ड।",
          "- संदेह हो तो टैब बंद करें और ऊपर के बटन से फिर खोलें।",
          "## सुरक्षा चेकलिस्ट",
          "- अनोखा, लंबा पासवर्ड इस्तेमाल करें",
          "- अकाउंट सेटिंग्स में 2FA चालू करें",
          "- पासवर्ड किसी से शेयर न करें — ऑफिशियल सपोर्ट कभी पासवर्ड नहीं माँगता",
          "> आख़िरी सत्यापन: " + LAST_VERIFIED + "।",
        ],
      }}
      faqs={[
        {
          q: "Why is the JeetBuzz login page not opening for me?",
          a: "Most of the time it's an ISP-level block on betting domains in Bangladesh, Pakistan or India. Switch from Wi-Fi to mobile data, change your DNS to 1.1.1.1 or 8.8.8.8, or use the JeetBuzz Android APK — it bypasses most DNS blocks.",
        },
        {
          q: "Is there a working alternative JeetBuzz login link?",
          a: "Yes — JeetBuzz rotates its public domain when one is blocked. The 'Go to JeetBuzz Login' button at the top of this page always points at the current live URL. If it ever stops working, refresh this page and we'll have updated the redirect.",
        },
        {
          q: "I forgot my JeetBuzz password — how do I recover my account?",
          a: "On the official JeetBuzz login screen tap 'Forgot password'. A reset link is sent to the phone number or email you used to sign up. If neither still works, open 24/7 live chat from inside the JeetBuzz site to verify your identity.",
        },
        {
          q: "How do I know I'm on the real JeetBuzz login and not a fake mirror?",
          a: "The real page is HTTPS with no certificate warning, matches the official logo and Bengali copy, and never asks for your bKash, Nagad or UPI PIN at login — only your JeetBuzz password. If anything looks off, close the tab and re-open from the verified button above.",
        },
      ]}
      articleHeadline="JeetBuzz Login — Working Links & Access Help"
      articleDescription="How to log in to JeetBuzz from Bangladesh, Pakistan and India, find a working alternative link, fix blocked access and avoid fake mirrors."
      articlePath="/login-guide"
    />
  ),
});