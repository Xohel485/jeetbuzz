import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { LOGIN_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/password-reset")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Password Reset — Step by Step (2026) | GetJeetBuzz" },
      { name: "description", content: "Reset your JeetBuzz password safely — phone OTP, email link, common errors and what to do if recovery fails. BD, PK and IN." },
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
          "জিতবাজ পাসওয়ার্ড রিসেট দুটি পথে করা যায় — Grameenphone/Robi/Banglalink নম্বরে OTP, অথবা ইমেইল লিংক। ১২ ঘণ্টায় ৩টি রিসেট সীমা।",
          "## ফোন OTP দিয়ে রিসেট (সবচেয়ে দ্রুত)",
          "১. অফিসিয়াল জিতবাজ লগইন পেইজ খুলুন।",
          "২. ‘Forgot password’-এ ট্যাপ করুন।",
          "৩. আপনার রেজিস্টার্ড নম্বর লিখুন (017/018/019/013-দিয়ে শুরু)।",
          "৪. ৬-সংখ্যার OTP আসবে ৩০-৬০ সেকেন্ডের মধ্যে। Teletalk-এ ৯০ সেকেন্ড পর্যন্ত স্বাভাবিক।",
          "৫. নতুন পাসওয়ার্ড সেট করুন — ১২ অক্ষর+, অক্ষর/সংখ্যা/বিশেষ চিহ্ন মিশ্রিত।",
          "## ইমেইল রিসেট লিংক",
          "একই ফ্লো, OTP-এর পরিবর্তে ৩০ মিনিটে এক্সপায়ার হওয়া single-use লিংক আসে। Gmail/Yahoo-তে Spam ও Promotions ফোল্ডার চেক করুন।",
          "## রিকভারি ব্যর্থ হলে",
          "- নম্বর/ইমেইল আর কাজ করে না → অফিসিয়াল লাইভ চ্যাটে NID-র স্পষ্ট ছবি ও শেষ bKash/Nagad ডিপোজিট আইডি দিয়ে পরিচয় যাচাই।",
          "- OTP বারবার ভুল বলছে → ফোনের Date & Time → Automatic অন করুন।",
          "- লিংক ‘Expired’ বলছে → Gmail/Outlook আগে preview করেছে; নতুন লিংক চেয়ে ৩০ মিনিটের মধ্যে ক্লিক করুন।",
          "## রিসেটের পর করণীয়",
          "একবার লগইন করে অ্যাকাউন্ট সেটিংসে [2FA চালু](/login-security) করুন এবং নিজের ফোনের bKash/Nagad PIN-এর সাথে এটি কখনো মিল রাখবেন না।",
          "> পাসওয়ার্ড পরিবর্তনের পর সব ডিভাইসের সেশন স্বয়ংক্রিয় লগআউট হয়ে যায় — প্রতিটি ফোন/পিসি-তে আবার লগইন করুন।",
        ],
        ur: [
          "## مختصر خلاصہ",
          "JeetBuzz پاس ورڈ ری سیٹ دو طریقوں سے: Jazz/Zong/Ufone/Telenor نمبر پر OTP، یا ای میل لنک۔ 12 گھنٹے میں 3 ری سیٹ کی حد۔",
          "## فون OTP سے ری سیٹ (تیز ترین)",
          "1. آفیشل JeetBuzz لاگ ان صفحہ کھولیں۔",
          "2. ‘Forgot password’ پر ٹیپ کریں۔",
          "3. اپنا رجسٹرڈ نمبر درج کریں (0300/0301/0331 وغیرہ)۔",
          "4. 30-60 سیکنڈ میں 6 ہندسوں کا OTP آئے گا۔ Ufone/Telenor پر 90 سیکنڈ تک معمول۔",
          "5. نیا پاس ورڈ سیٹ کریں — کم از کم 12 حروف، حروف/اعداد/علامت کا مرکب۔",
          "## ای میل ری سیٹ لنک",
          "وہی فلو، OTP کی جگہ 30 منٹ میں ختم ہونے والا single-use لنک۔ Gmail/Outlook میں Spam اور Promotions چیک کریں۔",
          "## ریکوری ناکام ہونے پر",
          "- نمبر/ای میل اب کام نہیں کر رہا → آفیشل لائیو چیٹ پر CNIC کی صاف تصویر اور آخری JazzCash/EasyPaisa ٹرانزیکشن آئی ڈی۔",
          "- OTP بار بار غلط بتا رہا → فون کی Date & Time → Automatic آن کریں۔",
          "- لنک ‘Expired’ → Gmail/Outlook نے پہلے preview کر لیا؛ نیا لنک منگوا کر 30 منٹ کے اندر کلک کریں۔",
          "## ری سیٹ کے بعد",
          "ایک بار لاگ ان کرکے اکاؤنٹ سیٹنگز میں [2FA فعال](/login-security) کریں اور پاس ورڈ کبھی اپنے JazzCash/EasyPaisa PIN جیسا نہ رکھیں۔",
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
          { q: "Grameenphone নম্বরে OTP আসছে না — কী করব?", a: "৬০ সেকেন্ড অপেক্ষা করুন, তারপর Resend। মোবাইল ডেটা থেকে Wi-Fi-তে স্যুইচ করলে কখনো কখনো কাজ করে।" },
          { q: "bKash/Nagad PIN দিয়ে রিসেট হবে?", a: "না, জিতবাজ লগইন রিসেটে কখনো bKash বা Nagad PIN চায় না — সেটি ফেক মিরর।" },
          { q: "ইমেইল লিংক কতক্ষণে এক্সপায়ার হয়?", a: "৩০ মিনিট। একবার ব্যবহার করার পর আবার কাজ করবে না।" },
          { q: "নতুন পাসওয়ার্ড কেমন হওয়া উচিত?", a: "১২+ অক্ষর, বড়/ছোট হাতের, সংখ্যা ও চিহ্ন মিশ্রিত। আপনার ফোন নম্বর বা জন্ম সাল ব্যবহার করবেন না।" },
          { q: "১২ ঘণ্টায় কতবার রিসেট করা যায়?", a: "৩ বার। তারপর সিস্টেম ১২ ঘণ্টা cooldown দেয়।" },
          { q: "রিসেটের পর 2FA চালু আছে?", a: "না — পাসওয়ার্ড রিসেট 2FA-কে প্রভাবিত করে না। আগে চালু থাকলে চালুই থাকবে।" },
          { q: "Teletalk-এ OTP কেন দেরিতে আসে?", a: "Teletalk-এর আন্তর্জাতিক SMS রুট তুলনামূলক ধীর। ৯০ সেকেন্ড পর্যন্ত স্বাভাবিক।" },
          { q: "অ্যাকাউন্ট সম্পূর্ণ লক হলে?", a: "৩ ব্যর্থ রিসেটের পর অ্যাকাউন্ট ১২ ঘণ্টা cooldown-এ যায়। লাইভ চ্যাট থেকে আগে আনলকও করানো যায়।" },
        ],
        ur: [
          { q: "Jazz نمبر پر OTP نہیں آرہا — کیا کروں؟", a: "60 سیکنڈ انتظار کریں، پھر Resend۔ موبائل ڈیٹا سے Wi-Fi پر سوئچ کرنے سے کبھی کام کرتا ہے۔" },
          { q: "کیا JazzCash یا EasyPaisa PIN سے ری سیٹ ہوتا ہے؟", a: "نہیں، JeetBuzz لاگ ان ری سیٹ کبھی JazzCash یا EasyPaisa PIN نہیں مانگتا — وہ جعلی مرر ہے۔" },
          { q: "ای میل لنک کتنی دیر میں ختم ہوتا ہے؟", a: "30 منٹ۔ ایک بار استعمال کے بعد دوبارہ کام نہیں کرے گا۔" },
          { q: "نیا پاس ورڈ کیسا ہونا چاہیے؟", a: "12+ حروف، بڑے/چھوٹے، اعداد اور علامتیں۔ اپنا فون نمبر یا سال پیدائش استعمال نہ کریں۔" },
          { q: "12 گھنٹے میں کتنی بار ری سیٹ کر سکتے ہیں؟", a: "3 بار۔ پھر سسٹم 12 گھنٹے cooldown دیتا ہے۔" },
          { q: "ری سیٹ کے بعد 2FA چالو رہتا ہے؟", a: "ہاں — پاس ورڈ ری سیٹ 2FA کو متاثر نہیں کرتا۔" },
          { q: "Telenor پر OTP میں دیر کیوں؟", a: "Telenor کا بین الاقوامی SMS رُوٹ نسبتاً سست ہے۔ 90 سیکنڈ تک معمول۔" },
          { q: "اکاؤنٹ مکمل لاک ہو جائے تو؟", a: "3 ناکام ری سیٹ کے بعد اکاؤنٹ 12 گھنٹے cooldown میں جاتا ہے۔ لائیو چیٹ سے جلد انلاک ممکن ہے۔" },
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