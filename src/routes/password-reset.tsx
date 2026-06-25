import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { LOGIN_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/password-reset")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Password Reset Guide 2026 - Phone OTP & Email Recovery Steps" },
      { name: "description", content: "Step-by-step JeetBuzz password reset guide for 2026 — phone OTP, email reset link, common errors and what to do if account recovery fails in BD, PK and IN." },
      { property: "og:title", content: "JeetBuzz Password Reset — Step by Step" },
      { property: "og:description", content: "Step-by-step JeetBuzz password recovery for BD, PK and IN players." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("loginInterface") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("loginInterface") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Password Reset</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">পাসওয়ার্ড রিসেট</span></>,
        ur: <>JeetBuzz <span className="gold-text">پاس ورڈ ری سیٹ</span></>,
        hi: <>JeetBuzz <span className="gold-text">पासवर्ड रीसेट</span></>,
      }}
      subtitle="Reset your JeetBuzz password in under 2 minutes. Below we cover phone-OTP recovery, email reset link, and what to do when both fail."
      subtitleByLocale={{
        bn: "২ মিনিটের কম সময়ে জিতবাজ পাসওয়ার্ড রিসেট করুন। ফোন OTP, ইমেইল লিংক এবং দুইটাই কাজ না করলে কী করবেন।",
        ur: "2 منٹ سے کم میں JeetBuzz پاس ورڈ ری سیٹ کریں۔ فون OTP، ای میل لنک اور دونوں ناکام ہونے پر کیا کریں۔",
        hi: "2 मिनट से कम में JeetBuzz पासवर्ड रीसेट करें। फ़ोन OTP, ईमेल लिंक और दोनों फेल होने पर क्या करें।",
      }}
      ctaIntent="login"
      ctaLabel="Open JeetBuzz Login"
      heroImage="loginInterface"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Login Guide", path: "/login-guide" },
        { name: "Password Reset", path: "/password-reset" },
      ]}
      body={[
        "## Reset by phone (fastest)",
        "1. Open the JeetBuzz login page.",
        "2. Tap 'Forgot password'.",
        "3. Enter the phone number registered on the account.",
        "4. Wait for the 6-digit OTP — usually under 30 seconds.",
        "5. Enter the OTP, set a new password (12+ characters, mix of letters/numbers/symbols).",
        "## Reset by email",
        "Same flow, but you'll get a reset link instead of an OTP. The link is single-use and expires in 30 minutes. If you don't see it, check spam and promotions.",
        "## What if recovery fails?",
        "- Your registered phone or email no longer works → contact JeetBuzz live chat from the official site. They will verify your identity with deposit history and last successful login.",
        "- OTP keeps failing → confirm your phone time is auto-set; manual clocks drift and break OTP validation.",
        "- Reset link says 'expired' on first click → your email provider 'previewed' the link before you. Request a fresh one and click within 30 minutes.",
        "## After you reset",
        "Log in once on the official site, then enable 2FA from account settings. A reset doesn't enrol 2FA automatically.",
      ]}
      bodyByLocale={{
        bn: [
          "## দ্রুত সারসংক্ষেপ",
          "জিতবাজ পাসওয়ার্ড রিসেট দুটি পথে করা যায় — রেজিস্টার্ড মোবাইল নম্বরে OTP, অথবা রেজিস্টার্ড ইমেইলে রিসেট লিংক। অল্প সময়ের ভেতরে অনেকবার চেষ্টা করলে নিরাপত্তার জন্য সিস্টেম সাময়িকভাবে নতুন রিসেট অনুরোধ ব্লক করতে পারে — তাই ধৈর্য ধরে এক ধাপ পরপর এগোন।",
          "## ফোন OTP দিয়ে রিসেট (সাধারণত দ্রুত)",
          "১. অফিসিয়াল জিতবাজ লগইন পেইজ খুলুন।",
          "২. ‘Forgot password’-এ ট্যাপ করুন।",
          "৩. আপনার রেজিস্টার্ড নম্বর লিখুন (017/018/019/013-দিয়ে শুরু)।",
          "৪. ৬-সংখ্যার OTP সাধারণত কয়েক সেকেন্ড থেকে এক মিনিটের মধ্যে আসে। Teletalk বা ব্যস্ত নেটওয়ার্কে কখনো একটু বেশি সময় লাগতে পারে — Resend চাপার আগে অন্তত পুরো এক মিনিট অপেক্ষা করুন।",
          "৫. নতুন পাসওয়ার্ড সেট করুন — ১২ অক্ষর+, অক্ষর/সংখ্যা/বিশেষ চিহ্ন মিশ্রিত।",
          "## ইমেইল রিসেট লিংক",
          "একই ফ্লো, কেবল OTP-এর পরিবর্তে একটি single-use রিসেট লিংক আসে যা সাধারণত স্বল্প সময়ের মধ্যেই এক্সপায়ার হয়। Gmail/Yahoo ব্যবহারকারীরা অবশ্যই Spam ও Promotions ফোল্ডার যাচাই করুন।",
          "## রিকভারি ব্যর্থ হলে",
          "- নম্বর/ইমেইল আর কাজ করে না → অফিসিয়াল লাইভ চ্যাটে NID-র স্পষ্ট ছবি ও শেষ bKash/Nagad ডিপোজিট আইডি দিয়ে পরিচয় যাচাই।",
          "- OTP বারবার ভুল বলছে → ফোনের Date & Time → Automatic অন করুন।",
          "- লিংক ‘Expired’ বলছে → অনেক সময় Gmail/Outlook আগে preview করার কারণে এমন হয়; একটি নতুন লিংক চেয়ে পেলে দেরি না করে দ্রুত ক্লিক করুন।",
          "## রিসেটের পর করণীয়",
          "একবার লগইন করে অ্যাকাউন্ট সেটিংসে গিয়ে দুই-ধাপ যাচাই (যেখানে উপলব্ধ) চালু আছে কিনা দেখে নিন। আরও বিস্তারিত [Login Security](/login-security) পেজে। নতুন পাসওয়ার্ড কখনো নিজের bKash/Nagad PIN বা Gmail পাসওয়ার্ডের মতো রাখবেন না।",
          "> পাসওয়ার্ড পরিবর্তনের পর সব ডিভাইসের সেশন স্বয়ংক্রিয় লগআউট হয়ে যায় — প্রতিটি ফোন/পিসি-তে আবার লগইন করুন।",
        ],
        ur: [
          "## مختصر خلاصہ",
          "JeetBuzz پاس ورڈ ری سیٹ دو طریقوں سے کیا جا سکتا ہے — رجسٹرڈ Jazz/Zong/Ufone/Telenor نمبر پر OTP، یا رجسٹرڈ ای میل پر ری سیٹ لنک۔ مختصر وقت میں کئی بار درخواست بھیجنے پر سسٹم نئے ری سیٹ کو عارضی طور پر روک سکتا ہے، اس لیے ایک ایک قدم آرام سے اٹھائیں۔",
          "## فون OTP سے ری سیٹ (تیز ترین)",
          "1. آفیشل JeetBuzz لاگ ان صفحہ کھولیں۔",
          "2. ‘Forgot password’ پر ٹیپ کریں۔",
          "3. اپنا رجسٹرڈ نمبر درج کریں (0300/0301/0331 وغیرہ)۔",
          "4. 6 ہندسوں کا OTP عموماً چند سیکنڈ سے ایک منٹ کے اندر آجاتا ہے۔ Ufone/Telenor یا مصروف نیٹ ورک پر کبھی تھوڑی تاخیر ہو سکتی ہے — Resend دبانے سے پہلے کم از کم پورا ایک منٹ انتظار کریں۔",
          "5. نیا پاس ورڈ سیٹ کریں — کم از کم 12 حروف، حروف/اعداد/علامت کا مرکب۔",
          "## ای میل ری سیٹ لنک",
          "وہی فلو، فرق صرف یہ کہ OTP کی جگہ ایک single-use ری سیٹ لنک ای میل پر آتا ہے جو عام طور پر مختصر وقت میں ختم ہو جاتا ہے۔ Gmail/Outlook استعمال کرنے والے Spam اور Promotions فولڈر ضرور چیک کریں۔",
          "## ریکوری ناکام ہونے پر",
          "- نمبر/ای میل اب کام نہیں کر رہا → آفیشل لائیو چیٹ پر CNIC کی صاف تصویر اور آخری JazzCash/EasyPaisa ٹرانزیکشن آئی ڈی۔",
          "- OTP بار بار غلط بتا رہا → فون کی Date & Time → Automatic آن کریں۔",
          "- لنک ‘Expired’ → Gmail/Outlook نے پہلے preview کر لیا؛ نیا لنک منگوا کر بغیر تاخیر کلک کریں۔",
          "## ری سیٹ کے بعد",
          "ایک بار لاگ ان کر کے اکاؤنٹ سیٹنگز میں دیکھ لیں کہ دو-قدمی تصدیق ([Login Security](/login-security)) آپ کے اکاؤنٹ پر دستیاب ہے یا نہیں، اور جہاں آپریٹر سپورٹ کرے فعال کر لیں۔ نیا پاس ورڈ کبھی اپنے JazzCash/EasyPaisa MPIN یا Gmail پاس ورڈ جیسا نہ رکھیں۔",
          "> پاس ورڈ تبدیل ہونے پر تمام ڈیوائسز کے سیشن خود بخود لاگ آؤٹ ہو جاتے ہیں — ہر فون/پی سی پر دوبارہ لاگ ان کریں۔",
        ],
        hi: [
          "## संक्षिप्त सारांश",
          "JeetBuzz पासवर्ड रीसेट दो तरीक़ों से: Jio/Airtel/Vi/BSNL नंबर पर OTP, या ईमेल लिंक। 12 घंटे में 3 रीसेट की सीमा।",
          "## फ़ोन OTP से रीसेट (सबसे तेज़)",
          "1. ऑफ़िशियल JeetBuzz लॉगिन पेज खोलें।",
          "2. ‘Forgot password’ पर टैप करें।",
          "3. अपना रजिस्टर्ड नंबर डालें (+91 के साथ)।",
          "4. 30-60 सेकंड में 6 अंकों का OTP आएगा। Vi/BSNL पर 90 सेकंड तक सामान्य।",
          "5. नया पासवर्ड सेट करें — कम से कम 12 अक्षर, अक्षर/अंक/चिह्न का मिश्रण।",
          "## ईमेल रीसेट लिंक",
          "वही फ्लो, OTP की जगह 30 मिनट में एक्सपायर होने वाला single-use लिंक। Gmail में Spam और Promotions ज़रूर देखें।",
          "## रिकवरी फेल होने पर",
          "- नंबर/ईमेल अब काम नहीं कर रहा → ऑफ़िशियल लाइव चैट पर Aadhaar/PAN की साफ़ फ़ोटो और आख़िरी UPI/PhonePe transaction ID।",
          "- OTP बार-बार ग़लत बता रहा → फ़ोन की Date & Time → Automatic चालू करें।",
          "- लिंक ‘Expired’ → Gmail ने पहले preview कर लिया; नया लिंक माँगें और 30 मिनट के अंदर क्लिक करें।",
          "## रीसेट के बाद",
          "एक बार लॉगिन करके अकाउंट सेटिंग्स में [2FA चालू](/login-security) करें और पासवर्ड कभी अपने UPI PIN या PhonePe PIN जैसा न रखें।",
          "> पासवर्ड बदलने पर सभी डिवाइसेज़ के सेशन ऑटोमैटिकली लॉग आउट हो जाते हैं — हर फ़ोन/PC पर दोबारा लॉगिन करें।",
        ],
      }}
      faqs={[
        { q: "Will resetting my password log me out of all devices?", a: "Yes. Active sessions on other devices are killed when the password changes — sign in again from each device." },
        { q: "Can I use the same password as before?", a: "JeetBuzz rejects the last few passwords for security. Pick something genuinely new." },
        { q: "I no longer have access to my phone or email. What now?", a: "Open live chat on the official site with your account ID and recent deposit details. Support can switch your recovery contact after manual verification." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Grameenphone নম্বরে OTP আসছে না — কী করব?", a: "প্রথমে পুরো এক মিনিট অপেক্ষা করুন, তারপর Resend চাপুন। নেটওয়ার্ক বদলে (মোবাইল ডেটা ↔ Wi-Fi) দেখলে কখনো কখনো সমস্যা ঠিক হয়।" },
          { q: "bKash/Nagad PIN দিয়ে রিসেট হবে?", a: "না, জিতবাজ লগইন রিসেটে কখনো bKash বা Nagad PIN চায় না — সেটি ফেক মিরর।" },
          { q: "ইমেইল রিসেট লিংক কতক্ষণ কাজ করে?", a: "এটি single-use এবং স্বল্প সময়ের মধ্যেই এক্সপায়ার হয়। পেয়ে দেরি না করে দ্রুত ক্লিক করুন; একবার ব্যবহার করার পর আর কাজ করবে না।" },
          { q: "নতুন পাসওয়ার্ড কেমন হওয়া উচিত?", a: "১২+ অক্ষর, বড়/ছোট হাতের, সংখ্যা ও চিহ্ন মিশ্রিত। আপনার ফোন নম্বর বা জন্ম সাল ব্যবহার করবেন না।" },
          { q: "একই দিনে কতবার রিসেট চেষ্টা করা যায়?", a: "নির্দিষ্ট সংখ্যা প্রকাশ করা নেই, তবে অল্প সময়ে বারবার চেষ্টা করলে নিরাপত্তার জন্য সিস্টেম সাময়িকভাবে নতুন রিকোয়েস্ট ব্লক করতে পারে। কিছুক্ষণ পর আবার চেষ্টা করুন।" },
          { q: "রিসেটের পর দুই-ধাপ যাচাই (2FA) কি চালু থাকে?", a: "শুধু পাসওয়ার্ড রিসেট 2FA সেটিং পরিবর্তন করে না — আগে যেমন ছিল তেমনই থাকবে। তবে রিসেটের পর Account → Security সেকশনে গিয়ে যাচাই করে নেওয়া ভালো।" },
          { q: "Teletalk বা BSNL-এ OTP কেন দেরিতে আসে?", a: "ছোট অপারেটরগুলোর আন্তর্জাতিক SMS রুট তুলনামূলকভাবে ধীর। একটু বেশি সময় ধরে অপেক্ষা করুন; বারবার Resend চাপলে রেট-লিমিট পড়তে পারে।" },
          { q: "অ্যাকাউন্ট সম্পূর্ণ লক হলে কী করব?", a: "অফিসিয়াল লাইভ চ্যাটে যোগাযোগ করুন, পরিচয় যাচাইয়ের জন্য NID-র ছবি ও সাম্প্রতিক ডিপোজিট/উইথড্রয়াল আইডি প্রস্তুত রাখুন। কত সময়ে সমাধান হবে তা আগে থেকে গ্যারান্টি দেওয়া যায় না।" },
        ],
        ur: [
          { q: "Jazz نمبر پر OTP نہیں آرہا — کیا کروں؟", a: "60 سیکنڈ انتظار کریں، پھر Resend۔ موبائل ڈیٹا سے Wi-Fi پر سوئچ کرنے سے کبھی کام کرتا ہے۔" },
          { q: "کیا JazzCash یا EasyPaisa PIN سے ری سیٹ ہوتا ہے؟", a: "نہیں، JeetBuzz لاگ ان ری سیٹ کبھی JazzCash یا EasyPaisa PIN نہیں مانگتا — وہ جعلی مرر ہے۔" },
          { q: "ای میل ری سیٹ لنک کتنی دیر میں ختم ہوتا ہے؟", a: "یہ single-use ہوتا ہے اور مختصر وقت میں ختم ہو جاتا ہے۔ پانے کے بعد بغیر تاخیر کلک کریں؛ ایک بار استعمال کے بعد دوبارہ کام نہیں کرے گا۔" },
          { q: "نیا پاس ورڈ کیسا ہونا چاہیے؟", a: "12+ حروف، بڑے/چھوٹے، اعداد اور علامتیں۔ اپنا فون نمبر یا سال پیدائش استعمال نہ کریں۔" },
          { q: "ایک ہی دن میں کتنی بار ری سیٹ کی کوشش کی جا سکتی ہے؟", a: "مخصوص تعداد عوامی طور پر اعلان شدہ نہیں، مگر مختصر وقت میں بار بار درخواست بھیجنے پر سسٹم حفاظت کی خاطر نئی درخواست عارضی طور پر روک دیتا ہے۔ کچھ دیر بعد دوبارہ کوشش کریں۔" },
          { q: "ری سیٹ کے بعد دو-قدمی تصدیق (2FA) چالو رہتی ہے؟", a: "صرف پاس ورڈ ری سیٹ سے 2FA کی ترتیب تبدیل نہیں ہوتی — جیسی پہلے تھی ویسی ہی رہتی ہے۔ پھر بھی ری سیٹ کے بعد Account → Security میں تصدیق کر لیں۔" },
          { q: "Telenor یا چھوٹے آپریٹرز پر OTP میں دیر کیوں؟", a: "چھوٹے آپریٹرز کا بین الاقوامی SMS رُوٹ نسبتاً سست ہوتا ہے۔ کچھ دیر مزید انتظار کریں؛ بار بار Resend دبانے پر سسٹم rate-limit لگا سکتا ہے۔" },
          { q: "اکاؤنٹ مکمل لاک ہو جائے تو کیا کریں؟", a: "آفیشل لائیو چیٹ سے رابطہ کریں؛ CNIC کی تصویر اور حالیہ ڈپازٹ/ودڈرا آئی ڈی تیار رکھیں۔ کتنی دیر میں حل ہو گا یہ پہلے سے یقینی نہیں۔" },
        ],
        hi: [
          { q: "Jio नंबर पर OTP नहीं आ रहा — क्या करूँ?", a: "60 सेकंड इंतज़ार करें, फिर Resend। मोबाइल डेटा से Wi-Fi पर स्विच करने से कभी काम कर जाता है।" },
          { q: "क्या UPI PIN या PhonePe PIN से रीसेट होता है?", a: "नहीं, JeetBuzz लॉगिन रीसेट कभी UPI/PhonePe/Paytm PIN नहीं माँगता — वह नक़ली मिरर है।" },
          { q: "ईमेल लिंक कितनी देर में एक्सपायर होता है?", a: "30 मिनट। एक बार उपयोग के बाद दोबारा काम नहीं करेगा।" },
          { q: "नया पासवर्ड कैसा होना चाहिए?", a: "12+ अक्षर, बड़े/छोटे, अंक और चिह्न। अपना फ़ोन नंबर या जन्म वर्ष इस्तेमाल न करें।" },
          { q: "12 घंटे में कितनी बार रीसेट कर सकते हैं?", a: "3 बार। फिर सिस्टम 12 घंटे cooldown देता है।" },
          { q: "रीसेट के बाद 2FA चालू रहता है?", a: "हाँ — पासवर्ड रीसेट 2FA को प्रभावित नहीं करता।" },
          { q: "BSNL पर OTP देर से क्यों आता है?", a: "BSNL का इंटरनेशनल SMS रूट अपेक्षाकृत धीमा है। 90 सेकंड तक सामान्य।" },
          { q: "अकाउंट पूरी तरह लॉक हो जाए तो?", a: "3 असफल रीसेट के बाद अकाउंट 12 घंटे cooldown में जाता है। लाइव चैट से जल्दी अनलॉक संभव।" },
        ],
      }}
      related={siblings(LOGIN_CLUSTER, "/password-reset")}
      articleHeadline="JeetBuzz Password Reset"
      articleDescription="Reset your JeetBuzz password safely via phone OTP or email link."
      articlePath="/password-reset"
    />
  ),
});