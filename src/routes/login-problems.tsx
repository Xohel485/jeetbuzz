import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { LOGIN_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/login-problems")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Login Problems 2026 - Site Not Opening, OTP, Blocked Access Fixes" },
      { name: "description", content: "Fix JeetBuzz login problems in 2026 — site not opening, OTP not arriving, login button greyed out, ISP blocking and account locked errors for BD, PK and IN players." },
      { property: "og:title", content: "JeetBuzz Login Problems — Fix Access Issues" },
      { property: "og:description", content: "Common JeetBuzz login problems and step-by-step fixes for Bangladesh, Pakistan and India." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("loginInterface") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("loginInterface") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Login Problems</span> — Fixes</>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">লগইন সমস্যা</span> — সমাধান</>,
        ur: <>JeetBuzz <span className="gold-text">لاگ ان مسائل</span> — حل</>,
        hi: <>JeetBuzz <span className="gold-text">लॉगिन समस्याएँ</span> — समाधान</>,
      }}
      subtitle="Most JeetBuzz login problems fall into five buckets. Find yours below and apply the fix — no app reinstall needed in most cases."
      subtitleByLocale={{
        bn: "জিতবাজের বেশিরভাগ লগইন সমস্যা ৫টি ভাগে পড়ে। নিজেরটা খুঁজে নিন — অ্যাপ রিইনস্টল প্রায়ই দরকার হয় না।",
        ur: "JeetBuzz کے زیادہ تر لاگ ان مسائل 5 اقسام میں آتے ہیں۔ اپنا مسئلہ ڈھونڈیں — عام طور پر ایپ دوبارہ انسٹال کرنے کی ضرورت نہیں۔",
        hi: "JeetBuzz की ज़्यादातर लॉगिन समस्याएँ 5 श्रेणियों में आती हैं। अपनी समस्या ढूँढें — ज़्यादातर बार ऐप दोबारा इंस्टॉल करने की ज़रूरत नहीं।",
      }}
      ctaIntent="login"
      ctaLabel="Try JeetBuzz Login"
      heroImage="loginInterface"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Login Guide", path: "/login-guide" },
        { name: "Login Problems", path: "/login-problems" },
      ]}
      body={[
        "## 1. Site won't open / 'this site can't be reached'",
        "This is almost always an ISP route block. Switch network (Wi-Fi to mobile data or vice versa) and reload. If still blocked, change phone DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google).",
        "## 2. OTP not arriving",
        "Wait the full 60 seconds before tapping 'Resend' — duplicate OTPs invalidate each other. Check spam if you used email. For SMS, confirm your number has international SMS enabled.",
        "## 3. 'Invalid credentials' on the right password",
        "Caps Lock, mixed-up phone/email field, or a recent password reset that hasn't propagated. Use 'Forgot password' and set a new one — fastest fix.",
        "## 4. Login button greyed out",
        "Usually a stale browser cache. Hard-reload (Ctrl+Shift+R / pull-to-refresh) or clear site data for jeetbuzz.com.",
        "## 5. 2FA code rejected",
        "Your phone clock is drifting. Enable automatic time sync in phone settings, then request a fresh 6-digit code.",
        "> Still stuck? Contact JeetBuzz live support from the official site — they can unlock accounts that triggered automated fraud protection.",
      ]}
      bodyByLocale={{
        bn: [
          "## এক নজরে সমস্যা ও সমাধান",
          "বাংলাদেশে জিতবাজ লগইন সমস্যা প্রায়শই ৫টি কারণে হয়: ISP ব্লক (গ্রামীণফোন, রবি, বাংলালিংক, টেলিটক), OTP দেরি, ভুল পাসওয়ার্ড, ক্যাশড লগইন বাটন, অথবা 2FA সময় মিল না-হওয়া।",
          "## ১. সাইট খুলছে না (Grameenphone/Robi/Banglalink-এ)",
          "বেশিরভাগ ISP জিতবাজ ডোমেইন সিলেক্টিভভাবে ব্লক করে। প্রথমে নেটওয়ার্ক বদলান — Wi-Fi থেকে মোবাইল ডেটা (বা উল্টো)। কাজ না হলে ফোন Wi-Fi সেটিংসে DNS পরিবর্তন করুন: ১.১.১.১ (Cloudflare) অথবা ৮.৮.৮.৮ (Google)।",
          "## ২. OTP আসছে না",
          "Grameenphone/Banglalink-এ আন্তর্জাতিক SMS ফিল্টার আছে — পুরো ৬০ সেকেন্ড অপেক্ষা করুন, তারপর Resend চাপুন। Teletalk-এ মাঝে মাঝে দেরি হয়; ৯০ সেকেন্ড পর্যন্ত অপেক্ষা সঠিক।",
          "## ৩. পাসওয়ার্ড সঠিক, তবু 'Invalid'",
          "Caps Lock চেক করুন, ফোন/ইমেইল ফিল্ড গুলিয়ে ফেলেননি তো? সবচেয়ে দ্রুত সমাধান — [পাসওয়ার্ড রিসেট](/password-reset) পেইজে গিয়ে নতুন পাসওয়ার্ড সেট করুন।",
          "## ৪. লগইন বাটন কাজ করছে না",
          "ব্রাউজার ক্যাশ পুরোনো। Chrome/Brave-এ pull-to-refresh দিন বা jeetbuzz.com-এর সাইট ডেটা মুছে দিন। JeetBuzz APK-তে সমস্যা হলে [APK Download Guide](/apk-download-guide) দেখুন।",
          "## ৫. 2FA কোড নিচ্ছে না",
          "আপনার ফোনের ঘড়ি ম্যানুয়াল সেট করা — Settings → Date & Time → Auto সিলেক্ট করুন। তারপর নতুন কোড নিন।",
          "## ডিপোজিট হওয়ার পর লগইন আটকে গেছে?",
          "bKash/Nagad/Rocket ডিপোজিটের পর কখনো কখনো অ্যান্টি-ফ্রড সিস্টেম অ্যাকাউন্ট হোল্ড করতে পারে। জিতবাজ লাইভ চ্যাটে শেষ ট্রানজেকশন আইডি ও ব্যবহৃত ওয়ালেট নম্বর রেডি রেখে যোগাযোগ করুন; রিভিউ শেষ হওয়ার পর সাধারণত অ্যাকাউন্ট পুনরায় ব্যবহারযোগ্য হয়। ঠিক কত সময় লাগবে তা নির্দিষ্টভাবে বলা যায় না।",
          "> এখনও সমাধান হচ্ছে না? জিতবাজ ২৪/৭ লাইভ সাপোর্টে বাংলায় কথা বলুন। সমস্যা চলতে থাকলে আমাদের [লগইন গাইড](/login-guide) ও [লগইন সিকিউরিটি](/login-security) পেইজ দেখুন।",
        ],
        ur: [
          "## ایک نظر میں مسئلہ اور حل",
          "پاکستان میں JeetBuzz لاگ ان مسائل عموماً 5 وجوہات سے ہوتے ہیں: ISP بلاک (Jazz، Zong، Ufone، Telenor)، OTP میں تاخیر، غلط پاس ورڈ، کیشڈ لاگ ان بٹن، یا 2FA وقت کا فرق۔",
          "## 1. سائٹ نہیں کھل رہی (Jazz/Zong/Telenor پر)",
          "PTA کی ہدایت پر کئی ISPs iGaming ڈومینز کو منتخب طور پر بلاک کرتے ہیں۔ پہلے نیٹ ورک تبدیل کریں — Wi-Fi سے موبائل ڈیٹا یا اس کے برعکس۔ کام نہ کرے تو فون کی Wi-Fi سیٹنگز میں DNS تبدیل کریں: 1.1.1.1 (Cloudflare) یا 8.8.8.8 (Google)۔",
          "## 2. OTP نہیں آرہا",
          "Jazz اور Telenor میں بین الاقوامی SMS فلٹر چلتا ہے — پورا 60 سیکنڈ انتظار کریں، پھر Resend دبائیں۔ بار بار Resend دبانے سے سسٹم آپ کو وقتی طور پر بلاک کر دے گا۔",
          "## 3. درست پاس ورڈ پر 'Invalid'",
          "Caps Lock چیک کریں اور یقینی بنائیں کہ آپ نے فون نمبر اور ای میل کا فیلڈ نہیں ملایا۔ تیز ترین حل — [پاس ورڈ ری سیٹ](/password-reset) صفحے پر جا کر نیا پاس ورڈ سیٹ کریں۔",
          "## 4. لاگ ان بٹن کام نہیں کر رہا",
          "براؤزر کیش پرانا ہے۔ ہارڈ ری لوڈ کریں یا jeetbuzz.com کا سائٹ ڈیٹا صاف کریں۔ ایپ پر مسئلہ ہو تو ہمارا [APK ڈاؤن لوڈ گائیڈ](/apk-download-guide) دیکھیں۔",
          "## 5. 2FA کوڈ مسترد ہو رہا",
          "آپ کے فون کی گھڑی manual پر سیٹ ہے — Settings → Date & Time → Automatic منتخب کریں، پھر نیا کوڈ منگوائیں۔",
          "## JazzCash/EasyPaisa ڈپازٹ کے بعد اکاؤنٹ ہولڈ؟",
          "بعض اوقات JeetBuzz کا anti-fraud سسٹم بڑی ڈپازٹ کے بعد عارضی ہولڈ لگاتا ہے۔ لائیو چیٹ میں آخری JazzCash/EasyPaisa ٹرانزیکشن آئی ڈی اور استعمال شدہ نمبر تیار رکھ کر رابطہ کریں؛ جائزہ مکمل ہونے پر اکاؤنٹ عام طور پر دوبارہ قابلِ استعمال ہو جاتا ہے، تاہم درست وقت پہلے سے یقینی نہیں بتایا جا سکتا۔",
          "> اب بھی مسئلہ؟ JeetBuzz لائیو سپورٹ سے اردو میں رابطہ کریں اور ہمارا [لاگ ان گائیڈ](/login-guide) اور [لاگ ان سیکیورٹی](/login-security) صفحہ بھی دیکھیں۔",
        ],
        hi: [
          "## एक नज़र में समस्या और समाधान",
          "भारत में JeetBuzz लॉगिन समस्याएँ अक्सर 5 कारणों से होती हैं: ISP ब्लॉक (Jio, Airtel, Vi, BSNL), OTP देरी, ग़लत पासवर्ड, कैश्ड लॉगिन बटन, या 2FA समय का अंतर।",
          "## 1. साइट नहीं खुल रही (Jio/Airtel/Vi पर)",
          "MeitY के निर्देश पर कई ISPs iGaming डोमेन को चुनिंदा ब्लॉक करते हैं। पहले नेटवर्क बदलें — Wi-Fi से मोबाइल डेटा (या उल्टा)। काम न करे तो फ़ोन की Wi-Fi सेटिंग्स में DNS बदलें: 1.1.1.1 (Cloudflare) या 8.8.8.8 (Google)।",
          "## 2. OTP नहीं आ रहा",
          "Jio और Airtel पर इंटरनेशनल SMS फ़िल्टर अक्सर सक्रिय रहता है — पूरे 60 सेकंड इंतज़ार करें, फिर Resend दबाएँ। बार-बार Resend दबाने से सिस्टम आपको अस्थायी रूप से ब्लॉक कर देगा।",
          "## 3. सही पासवर्ड पर 'Invalid'",
          "Caps Lock जाँचें और सुनिश्चित करें कि फ़ोन और ईमेल का फ़ील्ड नहीं मिलाया। सबसे तेज़ हल — [पासवर्ड रीसेट](/password-reset) पेज पर जा कर नया पासवर्ड सेट करें।",
          "## 4. लॉगिन बटन काम नहीं कर रहा",
          "ब्राउज़र कैश पुराना है। हार्ड रीलोड करें या jeetbuzz.com का साइट डेटा साफ़ करें। ऐप में दिक़्क़त हो तो हमारा [APK डाउनलोड गाइड](/apk-download-guide) देखें।",
          "## 5. 2FA कोड रिजेक्ट हो रहा",
          "आपके फ़ोन की घड़ी manual पर सेट है — Settings → Date & Time → Automatic चुनें, फिर नया कोड माँगें।",
          "## UPI/PhonePe/Paytm डिपॉज़िट के बाद अकाउंट होल्ड?",
          "कभी-कभी JeetBuzz का anti-fraud सिस्टम बड़ी डिपॉज़िट के बाद अस्थायी होल्ड लगाता है। लाइव चैट में आख़िरी UPI transaction ID शेयर करें — आमतौर पर 15-30 मिनट में अकाउंट बहाल।",
          "> अभी भी समस्या? JeetBuzz लाइव सपोर्ट से हिंदी में बात करें और हमारा [लॉगिन गाइड](/login-guide) व [लॉगिन सिक्योरिटी](/login-security) पेज भी देखें।",
        ],
      }}
      faqs={[
        { q: "Why is JeetBuzz not opening on my Wi-Fi?", a: "Most home ISPs in BD/PK/IN selectively block iGaming domains. Switch to mobile data, change DNS to 1.1.1.1, or use the verified outbound link on this page." },
        { q: "How long does an OTP take?", a: "Usually under 30 seconds. If nothing arrives in 60 seconds, request once more — don't spam the resend button or you'll be rate-limited." },
        { q: "Can support reset my 2FA?", a: "Yes. Contact JeetBuzz live chat from the official site, verify identity (deposit history, last login device), and they can disable 2FA so you can re-enrol a new device." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Grameenphone-এ জিতবাজ খুলছে না — কী করব?", a: "মোবাইল ডেটায় স্যুইচ করুন, অথবা Wi-Fi-তে থেকে DNS পরিবর্তন করে ১.১.১.১ দিন। বেশিরভাগ GP/Banglalink ব্লক এতেই ঠিক হয়।" },
          { q: "bKash দিয়ে ডিপোজিট করার পর লগইন আটকে গেলে?", a: "অ্যান্টি-ফ্রড হোল্ড হতে পারে। লাইভ চ্যাটে শেষ bKash ট্রানজেকশন আইডি ও ব্যবহৃত নম্বর শেয়ার করুন; রিভিউ শেষে অ্যাকাউন্ট আবার ব্যবহারযোগ্য হয়, তবে সঠিক সময় আগে থেকে বলা সম্ভব নয়।" },
          { q: "OTP সাধারণত কত সময়ে আসে?", a: "বেশিরভাগ ক্ষেত্রে কয়েক সেকেন্ড থেকে এক মিনিটের মধ্যে আসে। Resend চাপার আগে অন্তত পুরো এক মিনিট অপেক্ষা করুন; দ্রুত বারবার চাপলে সিস্টেম সাময়িক রেট-লিমিট দিতে পারে।" },
          { q: "‘This site can’t be reached’ মানে কী?", a: "আপনার ISP-এর DNS জিতবাজ ডোমেইন ব্লক করেছে। DNS পরিবর্তন বা মোবাইল ডেটায় স্যুইচ করুন।" },
          { q: "জিতবাজ APK ইনস্টল না হলে?", a: "‘Install from unknown sources’ অন আছে কিনা দেখুন। আরও বিস্তারিত [APK Download Guide](/apk-download-guide)-এ।" },
          { q: "2FA কোড বারবার ভুল হলে কী হবে?", a: "নিরাপত্তার জন্য অ্যাকাউন্ট সাময়িকভাবে লক হতে পারে। কিছু সময় অপেক্ষা করে আবার চেষ্টা করুন; দ্রুত আনলক চাইলে অফিসিয়াল লাইভ চ্যাটে যোগাযোগ করুন।" },
          { q: "ফোন/ইমেইল দুটোই হারিয়ে গেলে?", a: "অফিসিয়াল সাইটে লাইভ চ্যাটে যান। NID-এর ছবি, শেষ bKash/Nagad ডিপোজিট আইডি ও জন্মতারিখ দিয়ে ভেরিফিকেশন।" },
          { q: "ভুয়া জিতবাজ লিংক কীভাবে চিনব?", a: "লগইনে কখনো bKash বা Nagad PIN চাইবে না — শুধু জিতবাজ পাসওয়ার্ড। ব্রাউজারের তালা (HTTPS) চিহ্ন থাকা চাই।" },
        ],
        ur: [
          { q: "Jazz پر JeetBuzz نہیں کھل رہا — کیا کروں؟", a: "موبائل ڈیٹا پر سوئچ کریں یا Wi-Fi پر DNS کو 1.1.1.1 پر سیٹ کریں۔ زیادہ تر Jazz/Zong بلاک اسی سے حل ہو جاتے ہیں۔" },
          { q: "JazzCash/EasyPaisa سے ڈپازٹ کے بعد لاگ ان ہولڈ؟", a: "anti-fraud کا عارضی ہولڈ ممکن ہے۔ لائیو چیٹ میں آخری JazzCash/EasyPaisa ٹرانزیکشن آئی ڈی شیئر کریں؛ جائزے کے بعد اکاؤنٹ دوبارہ کھل جاتا ہے، مگر کتنا وقت لگے گا یہ پہلے سے یقینی نہیں۔" },
          { q: "OTP کتنی دیر میں آنا چاہیے؟", a: "زیادہ تر کیسز میں چند سیکنڈ سے ایک منٹ کے اندر آ جاتا ہے۔ Resend دبانے سے پہلے کم از کم پورا ایک منٹ انتظار کریں؛ بار بار دبانے پر سسٹم عارضی rate-limit لگا سکتا ہے۔" },
          { q: "‘This site can’t be reached’ کا کیا مطلب؟", a: "آپ کے ISP کا DNS JeetBuzz ڈومین کو بلاک کر رہا ہے۔ DNS تبدیل کریں یا موبائل ڈیٹا پر سوئچ کریں۔" },
          { q: "JeetBuzz APK انسٹال نہیں ہو رہا؟", a: "‘Install from unknown sources’ آن کریں۔ مزید معلومات کے لیے [APK Download Guide](/apk-download-guide) دیکھیں۔" },
          { q: "2FA کوڈ بار بار غلط ہو جائے تو کیا ہوتا ہے؟", a: "حفاظت کے پیشِ نظر اکاؤنٹ عارضی طور پر لاک ہو سکتا ہے۔ کچھ وقت رکنے کے بعد دوبارہ کوشش کریں؛ جلد انلاک چاہیے تو آفیشل لائیو چیٹ سے رابطہ کریں۔" },
          { q: "فون اور ای میل دونوں کھو جائیں؟", a: "آفیشل سائٹ کی لائیو چیٹ پر CNIC، آخری JazzCash/EasyPaisa ٹرانزیکشن آئی ڈی اور تاریخ پیدائش سے تصدیق ہوگی۔" },
          { q: "جعلی JeetBuzz لنک کیسے پہچانیں؟", a: "لاگ ان پر کبھی JazzCash یا EasyPaisa PIN نہیں مانگتا — صرف JeetBuzz پاس ورڈ۔ HTTPS لاک آئیکن ضروری ہے۔" },
        ],
        hi: [
          { q: "Jio पर JeetBuzz नहीं खुल रहा — क्या करूँ?", a: "मोबाइल डेटा पर स्विच करें या Wi-Fi में DNS को 1.1.1.1 पर सेट करें। ज़्यादातर Jio/Airtel ब्लॉक इसी से ठीक हो जाते हैं।" },
          { q: "UPI/PhonePe डिपॉज़िट के बाद लॉगिन होल्ड?", a: "anti-fraud अस्थायी होल्ड हो सकता है। लाइव चैट में आख़िरी UPI transaction ID शेयर करें — 15-30 मिनट में बहाल।" },
          { q: "OTP कितनी देर में आना चाहिए?", a: "Jio/Airtel पर 30-60 सेकंड, Vi/BSNL पर कभी 90 सेकंड तक। पहले Resend न दबाएँ।" },
          { q: "‘This site can’t be reached’ का मतलब क्या है?", a: "आपके ISP का DNS JeetBuzz डोमेन को ब्लॉक कर रहा है। DNS बदलें या मोबाइल डेटा पर स्विच करें।" },
          { q: "JeetBuzz APK इंस्टॉल नहीं हो रहा?", a: "‘Install from unknown sources’ ऑन करें। और जानकारी के लिए [APK डाउनलोड गाइड](/apk-download-guide) देखें।" },
          { q: "2FA कोड 5 बार ग़लत हो जाए तो?", a: "अकाउंट अस्थायी रूप से लॉक हो जाता है, 15 मिनट बाद फिर कोशिश करें या लाइव चैट से अनलॉक करवाएँ।" },
          { q: "फ़ोन और ईमेल दोनों खो जाएँ?", a: "ऑफ़िशियल साइट की लाइव चैट पर Aadhaar/PAN की फ़ोटो, आख़िरी UPI transaction ID और जन्मतिथि से वेरिफ़िकेशन।" },
          { q: "नक़ली JeetBuzz लिंक कैसे पहचानें?", a: "लॉगिन पर कभी UPI PIN या OTP नहीं माँगता — सिर्फ़ JeetBuzz पासवर्ड। HTTPS लॉक आइकन ज़रूरी है।" },
        ],
      }}
      related={siblings(LOGIN_CLUSTER, "/login-problems")}
      articleHeadline="JeetBuzz Login Problems — Fix Access Issues"
      articleDescription="Diagnose and fix the most common JeetBuzz login problems in BD, PK and IN."
      articlePath="/login-problems"
    />
  ),
});