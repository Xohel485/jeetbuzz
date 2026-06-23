import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { LOGIN_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/login-security")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Login Security — 2FA & Anti-Phishing (2026) | GetJeetBuzz" },
      { name: "description", content: "Protect your JeetBuzz login — enable 2FA, recognise fake mirror pages, and lock down your account against phishing in BD, PK and IN." },
      { property: "og:title", content: "JeetBuzz Login Security — 2FA & Anti-Phishing" },
      { property: "og:description", content: "Account security best practices for JeetBuzz login." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("security") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("security") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Login Security</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">লগইন সিকিউরিটি</span></>,
        ur: <>JeetBuzz <span className="gold-text">لاگ ان سیکیورٹی</span></>,
        hi: <>JeetBuzz <span className="gold-text">लॉगिन सिक्योरिटी</span></>,
      }}
      subtitle="A short, practical checklist that takes 5 minutes and protects your JeetBuzz balance from the three threats players actually face — phishing, SIM swap and credential reuse."
      subtitleByLocale={{
        bn: "৫ মিনিটের চেকলিস্ট যা ৩টি বাস্তব হুমকি থেকে আপনার ব্যালান্স রক্ষা করে — ফিশিং, সিম-সোয়াপ ও পাসওয়ার্ড রিইউজ।",
        ur: "5 منٹ کی چیک لسٹ جو 3 حقیقی خطرات سے بچاتی ہے — فشنگ، SIM سویپ اور پاس ورڈ کا دوبارہ استعمال۔",
        hi: "5 मिनट की चेकलिस्ट जो 3 असली ख़तरों से बचाती है — फ़िशिंग, SIM स्वैप और पासवर्ड का दोबारा उपयोग।",
      }}
      ctaIntent="login"
      ctaLabel="Secure your JeetBuzz login"
      heroImage="security"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Login Guide", path: "/login-guide" },
        { name: "Login Security", path: "/login-security" },
      ]}
      body={[
        "## Step 1 — Enable 2FA today",
        "Open account settings on the official JeetBuzz site and turn on Two-Factor Authentication. Prefer an authenticator app (Google Authenticator, Authy) over SMS where possible — SMS is vulnerable to SIM-swap attacks.",
        "## Step 2 — Use a unique password",
        "Don't reuse your bKash, JazzCash, UPI or email password for JeetBuzz. If any other site you use leaks, attackers will try the same combo on JeetBuzz.",
        "## Step 3 — Bookmark the real login URL",
        "Open JeetBuzz via the verified outbound link on this page once, then bookmark the page you land on. Always launch from that bookmark — never from search ads.",
        "## Step 4 — Recognise fake mirrors",
        "Red flags: asks for your bKash / Nagad / UPI PIN at login, missing HTTPS lock icon, mis-spelled brand (jeetbuz, jetbuzz), or asks you to install a new APK before login. Real JeetBuzz never asks for wallet PINs.",
        "## Step 5 — Lock your phone & email",
        "Your JeetBuzz account is only as safe as the inboxes attached to it. Add 2FA on your email too, and a SIM PIN on your phone.",
        "> If you suspect compromise, change your password immediately, then contact JeetBuzz support to freeze pending withdrawals.",
      ]}
      bodyByLocale={{
        bn: [
          "## কেন এই চেকলিস্ট জরুরি",
          "বাংলাদেশে জিতবাজ অ্যাকাউন্ট হ্যাকের প্রধান কারণ ফিশিং SMS এবং Facebook গ্রুপে ছড়ানো ভুয়া APK। নিচের ৫টি ধাপে ৫ মিনিটে অ্যাকাউন্ট সুরক্ষিত।",
          "## ধাপ ১ — 2FA এখনই চালু করুন",
          "অ্যাকাউন্ট সেটিংস → Security → Two-Factor Authentication। সম্ভব হলে Google Authenticator/Authy ব্যবহার করুন — Grameenphone/Robi-তে SIM swap সমস্যা হলে SMS-ভিত্তিক 2FA ব্যর্থ হতে পারে।",
          "## ধাপ ২ — পাসওয়ার্ড আলাদা রাখুন",
          "জিতবাজ পাসওয়ার্ড আপনার bKash, Nagad, Rocket বা ইমেইলের পাসওয়ার্ডের মতো রাখবেন না। কোনো এক সাইট লিক হলে সবার আগে অ্যাটাকার এই কম্বো জিতবাজে ট্রাই করে।",
          "## ধাপ ৩ — আসল URL বুকমার্ক করুন",
          "এই পেইজের উপরের verified আউটবাউন্ড বাটন থেকে একবার খুলুন, তারপর ব্রাউজারে বুকমার্ক করুন। Google সার্চ অ্যাড বা WhatsApp/Telegram-এ পাওয়া অপরিচিত লিংক থেকে কখনো লগইন করবেন না।",
          "## ধাপ ৪ — ফেক মিরর চেনা",
          "লাল পতাকা: লগইনে bKash/Nagad/Rocket PIN চায়, HTTPS তালা নেই, নাম ভুল (jeetbuz, jetbuzz), অথবা নতুন APK ইনস্টল করতে বলে। আসল জিতবাজ কখনো ওয়ালেট PIN চায় না।",
          "## ধাপ ৫ — ইমেইল ও SIM-ও লক করুন",
          "আপনার জিতবাজ অ্যাকাউন্ট ততটাই নিরাপদ যতটা সংযুক্ত ইমেইল। Gmail/Yahoo-তেও 2FA চালু করুন এবং Grameenphone/Robi-তে SIM PIN সেট করুন।",
          "## সন্দেহ হলে কী করবেন",
          "তাৎক্ষণিকভাবে [পাসওয়ার্ড রিসেট](/password-reset) করুন এবং লাইভ চ্যাটে গিয়ে pending withdrawal হোল্ড করতে বলুন। অ্যাকাউন্ট রিভিউ চলাকালীন নতুন bKash/Nagad ডিপোজিট করবেন না।",
        ],
        ur: [
          "## یہ چیک لسٹ کیوں ضروری ہے",
          "پاکستان میں JeetBuzz اکاؤنٹ ہیک ہونے کی بڑی وجہ phishing SMS اور WhatsApp گروپوں میں پھیلنے والی جعلی APK ہے۔ نیچے کے 5 اقدامات سے 5 منٹ میں اکاؤنٹ محفوظ۔",
          "## مرحلہ 1 — 2FA ابھی فعال کریں",
          "اکاؤنٹ سیٹنگز → Security → Two-Factor Authentication۔ ممکن ہو تو Google Authenticator/Authy استعمال کریں — Jazz/Zong پر SIM swap حملوں کے خلاف SMS 2FA کمزور ہے۔",
          "## مرحلہ 2 — منفرد پاس ورڈ",
          "JeetBuzz پاس ورڈ کبھی اپنے JazzCash، EasyPaisa، یا ای میل پاس ورڈ جیسا نہ رکھیں۔ کوئی ایک سائٹ leak ہو تو حملہ آور سب سے پہلے یہی کمبو JeetBuzz پر آزماتے ہیں۔",
          "## مرحلہ 3 — اصلی URL بک مارک کریں",
          "اس صفحے کے اوپر کے verified بٹن سے ایک بار کھولیں، پھر براؤزر میں بک مارک کریں۔ Google ad یا WhatsApp/Telegram سے ملنے والے انجان لنک سے کبھی لاگ ان نہ کریں۔",
          "## مرحلہ 4 — جعلی مرر کی پہچان",
          "خبردار: لاگ ان پر JazzCash/EasyPaisa PIN مانگنا، HTTPS لاک نہ ہونا، نام میں غلطی (jeetbuz، jetbuzz)، یا نئی APK انسٹال کرنے کا کہنا۔ اصلی JeetBuzz کبھی wallet PIN نہیں مانگتا۔",
          "## مرحلہ 5 — ای میل اور SIM بھی محفوظ کریں",
          "آپ کا JeetBuzz اکاؤنٹ اتنا ہی محفوظ ہے جتنا منسلک ای میل۔ Gmail/Outlook پر بھی 2FA آن کریں اور Jazz/Telenor SIM پر PIN سیٹ کریں۔",
          "## شبہ ہونے پر",
          "فوراً [پاس ورڈ ری سیٹ](/password-reset) کریں اور لائیو چیٹ پر pending withdrawals روکنے کا کہیں۔ اکاؤنٹ ریویو کے دوران نئی JazzCash/EasyPaisa ڈپازٹ نہ کریں۔",
        ],
        hi: [
          "## यह चेकलिस्ट क्यों ज़रूरी है",
          "भारत में JeetBuzz अकाउंट हैक का मुख्य कारण फ़िशिंग SMS और Telegram/WhatsApp ग्रुप में फैले फ़र्ज़ी APK हैं। नीचे के 5 स्टेप से 5 मिनट में अकाउंट सुरक्षित।",
          "## स्टेप 1 — 2FA अभी चालू करें",
          "अकाउंट सेटिंग्स → Security → Two-Factor Authentication। संभव हो तो Google Authenticator/Authy इस्तेमाल करें — Jio/Airtel पर SIM swap हमलों के विरुद्ध SMS 2FA कमज़ोर है।",
          "## स्टेप 2 — अलग पासवर्ड रखें",
          "JeetBuzz पासवर्ड कभी अपने UPI PIN, PhonePe PIN, Paytm या ईमेल पासवर्ड जैसा न रखें। कोई एक साइट leak हो तो हमलावर सबसे पहले यही कॉम्बो JeetBuzz पर आज़माते हैं।",
          "## स्टेप 3 — असली URL बुकमार्क करें",
          "इस पेज के ऊपर के verified बटन से एक बार खोलें, फिर ब्राउज़र में बुकमार्क करें। Google ad या WhatsApp/Telegram से मिले अनजान लिंक से कभी लॉगिन न करें।",
          "## स्टेप 4 — फ़र्ज़ी मिरर पहचानें",
          "रेड फ़्लैग: लॉगिन पर UPI PIN या OTP माँगना, HTTPS लॉक न होना, नाम में ग़लती (jeetbuz, jetbuzz), या नई APK इंस्टॉल करने को कहना। असली JeetBuzz कभी wallet PIN नहीं माँगता।",
          "## स्टेप 5 — ईमेल और SIM भी सुरक्षित करें",
          "आपका JeetBuzz अकाउंट उतना ही सुरक्षित है जितना जुड़ा हुआ ईमेल। Gmail पर भी 2FA ऑन करें और Jio/Airtel SIM पर PIN सेट करें।",
          "## संदेह होने पर",
          "तुरंत [पासवर्ड रीसेट](/password-reset) करें और लाइव चैट पर pending withdrawals रोकने को कहें। अकाउंट रिव्यू के दौरान नई UPI/PhonePe डिपॉज़िट न करें।",
        ],
      }}
      faqs={[
        { q: "Is SMS 2FA safer than no 2FA?", a: "Yes, much. But an authenticator app is significantly stronger against SIM-swap. Use the app if your phone supports it." },
        { q: "What does a fake mirror look like?", a: "Usually a near-identical clone with a slightly different domain (extra letter, wrong TLD). The dead giveaway: it asks for a wallet PIN at login. JeetBuzz never does." },
        { q: "Can I see active sessions?", a: "Yes — JeetBuzz shows a 'Recent activity' or 'Active devices' panel in account settings. Sign out anything you don't recognise and change your password." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Authenticator অ্যাপ কোনটি ব্যবহার করব?", a: "Google Authenticator বা Authy — দুটোই বিনামূল্যে। Grameenphone/Robi-তে SIM swap হলেও এগুলো অক্ষত থাকে।" },
          { q: "SMS 2FA কি যথেষ্ট?", a: "কিছু না-থাকার চেয়ে অনেক ভালো, কিন্তু সম্ভব হলে authenticator অ্যাপ ব্যবহার করুন।" },
          { q: "ফেক জিতবাজ পেইজ কেমন দেখায়?", a: "সাধারণত প্রায় একই, কিন্তু URL-এ ছোট ভুল (jeetbuz, jetbuzz) এবং লগইনে bKash/Nagad PIN চায়।" },
          { q: "Active sessions কোথায় দেখব?", a: "অ্যাকাউন্ট সেটিংস → Recent Activity। অপরিচিত ডিভাইস দেখলে সাইন আউট করে পাসওয়ার্ড বদলান।" },
          { q: "Facebook গ্রুপে ‘ফ্রি বোনাস’ লিংকে ক্লিক করব?", a: "না — এগুলোর প্রায় সবই ফিশিং। শুধু এই পেইজের verified বাটন বা আপনার বুকমার্ক ব্যবহার করুন।" },
          { q: "ফোন হারিয়ে গেলে 2FA কীভাবে পুনরায় চালু করব?", a: "জিতবাজ লাইভ চ্যাটে NID-র ছবি ও শেষ bKash/Nagad ডিপোজিট আইডি দিন — তারা পুরোনো 2FA ডিসএবল করে দেবে।" },
          { q: "Wi-Fi হটস্পট থেকে লগইন নিরাপদ?", a: "ব্যক্তিগত মোবাইল ডেটাই সবচেয়ে নিরাপদ। পাবলিক ক্যাফে Wi-Fi-তে কখনো withdrawal করবেন না।" },
          { q: "জিতবাজ কখনো ইমেইলে পাসওয়ার্ড চাইতে পারে?", a: "না। কোনো ইমেইল/SMS যদি ‘ভেরিফিকেশনের জন্য পাসওয়ার্ড দিন’ বলে, সেটি ফিশিং।" },
        ],
        ur: [
          { q: "کون سی Authenticator ایپ استعمال کروں؟", a: "Google Authenticator یا Authy — دونوں مفت۔ Jazz/Zong پر SIM swap ہونے پر بھی یہ محفوظ رہتی ہیں۔" },
          { q: "کیا SMS 2FA کافی ہے؟", a: "بے کچھ سے بہت بہتر، مگر ممکن ہو تو authenticator ایپ استعمال کریں۔" },
          { q: "جعلی JeetBuzz صفحہ کیسا لگتا ہے؟", a: "اکثر تقریباً ایک جیسا، مگر URL میں چھوٹی غلطی (jeetbuz، jetbuzz) اور لاگ ان پر JazzCash/EasyPaisa PIN مانگتا ہے۔" },
          { q: "Active sessions کہاں دیکھوں؟", a: "اکاؤنٹ سیٹنگز → Recent Activity۔ انجان ڈیوائس نظر آئے تو سائن آؤٹ کریں اور پاس ورڈ بدلیں۔" },
          { q: "WhatsApp/Telegram گروپ کے ‘مفت بونس’ لنک پر کلک کروں؟", a: "نہیں — یہ تقریباً سب phishing ہیں۔ صرف اس صفحے کا verified بٹن یا اپنا بک مارک استعمال کریں۔" },
          { q: "فون گم ہو جائے تو 2FA کیسے بحال کروں؟", a: "JeetBuzz لائیو چیٹ پر CNIC کی تصویر اور آخری JazzCash/EasyPaisa ٹرانزیکشن آئی ڈی دیں — وہ پرانا 2FA غیر فعال کر دیں گے۔" },
          { q: "Wi-Fi ہاٹ سپاٹ سے لاگ ان محفوظ ہے؟", a: "ذاتی موبائل ڈیٹا سب سے محفوظ ہے۔ پبلک کیفے Wi-Fi پر کبھی withdrawal نہ کریں۔" },
          { q: "کیا JeetBuzz کبھی ای میل میں پاس ورڈ مانگتا ہے؟", a: "نہیں۔ کوئی ای میل/SMS اگر ‘تصدیق کے لیے پاس ورڈ دیں‘ کہے، وہ phishing ہے۔" },
        ],
        hi: [
          { q: "कौन सी Authenticator ऐप इस्तेमाल करूँ?", a: "Google Authenticator या Authy — दोनों मुफ़्त। Jio/Airtel पर SIM swap होने पर भी ये सुरक्षित रहती हैं।" },
          { q: "क्या SMS 2FA पर्याप्त है?", a: "बिना कुछ के मुक़ाबले बहुत बेहतर, पर संभव हो तो authenticator ऐप इस्तेमाल करें।" },
          { q: "नक़ली JeetBuzz पेज कैसा दिखता है?", a: "अक्सर लगभग एक जैसा, पर URL में छोटी ग़लती (jeetbuz, jetbuzz) और लॉगिन पर UPI/PhonePe PIN माँगता है।" },
          { q: "Active sessions कहाँ देखूँ?", a: "अकाउंट सेटिंग्स → Recent Activity। अनजान डिवाइस दिखे तो साइन आउट करें और पासवर्ड बदलें।" },
          { q: "Telegram/WhatsApp ग्रुप के ‘फ़्री बोनस’ लिंक पर क्लिक करूँ?", a: "नहीं — ये लगभग सभी phishing हैं। सिर्फ़ इस पेज का verified बटन या अपना बुकमार्क इस्तेमाल करें।" },
          { q: "फ़ोन खो जाए तो 2FA कैसे बहाल करूँ?", a: "JeetBuzz लाइव चैट पर Aadhaar/PAN की फ़ोटो और आख़िरी UPI transaction ID दें — वे पुराना 2FA डिसेबल कर देंगे।" },
          { q: "Wi-Fi हॉटस्पॉट से लॉगिन सुरक्षित है?", a: "निजी मोबाइल डेटा सबसे सुरक्षित है। पब्लिक कैफ़े Wi-Fi पर कभी withdrawal न करें।" },
          { q: "क्या JeetBuzz कभी ईमेल में पासवर्ड माँगता है?", a: "नहीं। कोई ईमेल/SMS अगर ‘वेरिफ़िकेशन के लिए पासवर्ड दें‘ कहे, वो phishing है।" },
        ],
      }}
      related={siblings(LOGIN_CLUSTER, "/login-security")}
      articleHeadline="JeetBuzz Login Security — 2FA & Anti-Phishing"
      articleDescription="A short, practical security checklist for your JeetBuzz login."
      articlePath="/login-security"
    />
  ),
});