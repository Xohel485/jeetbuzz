import type { Country, Locale } from "./i18n";

export type IntroBlock = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type LocaleIntros = Partial<Record<Locale, IntroBlock>>;
type CountryIntros = Partial<Record<Country, LocaleIntros>>;

/**
 * Per-slug, per-country, per-locale intro blocks.
 * Hand-written native copy (not machine translated) to lift uniqueness
 * on every /{country}/{lang}/{slug} URL. Slugs not present here simply
 * render the shared English page body — adding more entries is purely
 * additive.
 */
export const LOCALIZED_INTROS: Record<string, CountryIntros> = {
  // ============== LOGIN GUIDE ==============
  "login-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ বাংলাদেশ লগইন",
        heading: "বাংলাদেশ থেকে জিতবাজ লগইন — ঢাকা, চট্টগ্রাম, সিলেট",
        paragraphs: [
          "বাংলাদেশের প্লেয়াররা জিতবাজ লগইন করতে গিয়ে সবচেয়ে বেশি যে সমস্যায় পড়েন তা হলো — ISP-ভিত্তিক DNS ব্লক (Grameenphone, Robi, Banglalink)। সমাধান: 1.1.1.1 বা 8.8.8.8 DNS সেট করুন অথবা জিতবাজ মিরর লিংক ব্যবহার করুন।",
          "ঢাকা ও চট্টগ্রামের কোরপোরেট WiFi-তে অনেক সময় লগইন ব্লক হয়। মোবাইল ডেটা-তে স্যুইচ করলে সাধারণত সাথে সাথে কাজ করে। OTP ৬০ সেকেন্ডে না এলে Robi/GP নেটওয়ার্ক থেকে SMS স্যুইচ করুন।",
        ],
        bullets: [
          "bKash-এ লগইন হলেই Cashier খুলবে — প্রথম ডিপোজিট অপশনে যান",
          "ফেক জিতবাজ মিরর চিনতে SSL পিন (jeetbuzz.com / jeetbuzz.app) ভেরিফাই করুন",
          "২FA চালু থাকলে Google Authenticator backup code save করে রাখুন",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz پاکستان لاگ ان",
        heading: "پاکستان سے JeetBuzz لاگ ان — کراچی، لاہور، اسلام آباد",
        paragraphs: [
          "پاکستانی کھلاڑیوں کو PTCL اور Jazz نیٹ ورک پر JeetBuzz لاگ ان میں DNS بلاک عام مسئلہ ہے۔ حل: 1.1.1.1 یا Cloudflare DNS سیٹ کریں، یا تصدیق شدہ مرر لنک استعمال کریں۔",
          "کراچی اور لاہور میں دفتری Wi-Fi پر لاگ ان اکثر بلاک ہوتا ہے۔ موبائل ڈیٹا پر سوئچ کرنے سے فوراً کام شروع ہو جاتا ہے۔ OTP 60 سیکنڈ میں نہ آئے تو Zong یا Telenor نمبر سے دوبارہ کوشش کریں۔",
        ],
        bullets: [
          "JazzCash اکاؤنٹ لاگ ان کے فوراً بعد Cashier کھولیں",
          "جعلی JeetBuzz مرر سے بچنے کے لیے SSL سرٹیفکیٹ چیک کریں",
          "2FA Google Authenticator کے بیک اپ کوڈ محفوظ رکھیں",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz इंडिया लॉगिन",
        heading: "इंडिया से JeetBuzz लॉगिन — मुंबई, दिल्ली, बेंगलुरु",
        paragraphs: [
          "इंडियन ISP (Jio, Airtel, BSNL) पर JeetBuzz लॉगिन में सबसे आम समस्या DNS ब्लॉक है। समाधान: 1.1.1.1 या Google DNS (8.8.8.8) सेट करें, या वेरिफाइड मिरर लिंक use करें।",
          "मुंबई और बेंगलुरु के कॉर्पोरेट WiFi पर लॉगिन ब्लॉक होता है। मोबाइल डेटा पर स्विच करने से तुरंत काम करता है। OTP 60 सेकंड में नहीं आया तो Jio या Airtel नंबर से दोबारा कोशिश करें।",
        ],
        bullets: [
          "UPI लॉगिन के तुरंत बाद Cashier पर जाएँ",
          "नकली JeetBuzz मिरर से बचने के लिए SSL सर्टिफिकेट चेक करें",
          "2FA के लिए Google Authenticator backup codes save रखें",
        ],
      },
    },
  },

  // ============== REGISTRATION ==============
  "registration-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ বাংলাদেশ রেজিস্ট্রেশন",
        heading: "৩ মিনিটে জিতবাজ অ্যাকাউন্ট — বাংলাদেশি ফোন নম্বর দিয়ে",
        paragraphs: [
          "জিতবাজে বাংলাদেশি (+880) নম্বর সরাসরি সাপোর্টেড। GP, Robi, Banglalink, Teletalk — সব অপারেটরের OTP গ্রহণযোগ্য। সাইন আপ করার সময় Currency BDT সিলেক্ট করুন যাতে bKash/Nagad ডিপোজিট সরাসরি কাজ করে।",
          "জাতীয় পরিচয়পত্র (NID) দিয়ে KYC সম্পন্ন করলে দৈনিক ৫ লাখ টাকা পর্যন্ত উইথড্রয়াল লিমিট আনলক হয়। NID ছাড়া লিমিট ২৫,০০০ টাকা/দিন।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz پاکستان رجسٹریشن",
        heading: "3 منٹ میں JeetBuzz اکاؤنٹ — پاکستانی نمبر کے ساتھ",
        paragraphs: [
          "JeetBuzz پر پاکستانی (+92) نمبر براہ راست سپورٹڈ ہے۔ Jazz، Zong، Ufone، Telenor — تمام آپریٹرز کے OTP قابل قبول ہیں۔ سائن اپ کے وقت Currency PKR منتخب کریں تاکہ JazzCash/EasyPaisa ڈپازٹ براہ راست کام کرے۔",
          "شناختی کارڈ (CNIC) سے KYC مکمل کرنے پر روزانہ 5 لاکھ روپے تک کی وِدڈرال لمٹ کھل جاتی ہے۔ KYC کے بغیر روزانہ لمٹ 25,000 روپے ہے۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz इंडिया रजिस्ट्रेशन",
        heading: "3 मिनट में JeetBuzz अकाउंट — इंडियन नंबर के साथ",
        paragraphs: [
          "JeetBuzz पर इंडियन (+91) नंबर सीधा सपोर्टेड है। Jio, Airtel, Vi, BSNL — सभी ऑपरेटर्स के OTP स्वीकार होते हैं। साइनअप के समय Currency INR सिलेक्ट करें ताकि UPI/PhonePe/Paytm डिपॉज़िट सीधे काम करे।",
          "PAN कार्ड से KYC पूरा करने पर डेली ₹5 लाख तक की विदड्रॉल लिमिट अनलॉक होती है। KYC के बिना डेली लिमिट ₹25,000 है।",
        ],
      },
    },
  },

  // ============== APK ==============
  "apk-download-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ APK বাংলাদেশ",
        heading: "জিতবাজ APK বাংলা ভার্সন — Android-এ নিরাপদ ইনস্টল",
        paragraphs: [
          "Google Play Store-এ বেটিং অ্যাপ অনুমোদিত নয়, তাই জিতবাজ APK সরাসরি অফিসিয়াল সাইট থেকে ডাউনলোড করতে হয়। আকার ~38 MB, Android 7+ সাপোর্টেড। Settings → Security → Unknown Sources অন করে ইনস্টল করুন।",
          "APK-এর SHA-256 হ্যাশ অফিসিয়াল সাইটে publish করা থাকে — ডাউনলোডের পর হ্যাশ মিলিয়ে দেখলে ফেক APK-এর ঝুঁকি শূন্য। লগইনের পর bKash/Nagad ক্যাশিয়ার সরাসরি অ্যাপ-এ কাজ করে।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz APK پاکستان",
        heading: "JeetBuzz APK اردو ورژن — Android پر محفوظ انسٹال",
        paragraphs: [
          "Google Play Store پر بیٹنگ ایپس کی اجازت نہیں، اس لیے JeetBuzz APK براہ راست آفیشل سائٹ سے ڈاؤن لوڈ کرنا ہوتا ہے۔ سائز ~38 MB، Android 7+ سپورٹڈ۔ Settings → Security → Unknown Sources آن کر کے انسٹال کریں۔",
          "APK کا SHA-256 ہیش آفیشل سائٹ پر شائع ہے — ڈاؤن لوڈ کے بعد ہیش ملا کر چیک کرنے سے جعلی APK کا خطرہ صفر ہو جاتا ہے۔ لاگ ان کے بعد JazzCash/EasyPaisa کیشئر براہ راست ایپ میں کام کرتا ہے۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz APK इंडिया",
        heading: "JeetBuzz APK हिंदी वर्ज़न — Android पर सुरक्षित इंस्टॉल",
        paragraphs: [
          "Google Play Store पर बेटिंग ऐप्स की अनुमति नहीं है, इसलिए JeetBuzz APK सीधे ऑफ़िशियल साइट से डाउनलोड करना होता है। साइज़ ~38 MB, Android 7+ सपोर्टेड। Settings → Security → Unknown Sources ऑन करके इंस्टॉल करें।",
          "APK का SHA-256 हैश ऑफ़िशियल साइट पर पब्लिश है — डाउनलोड के बाद हैश मिलाकर चेक करने से नकली APK का रिस्क ज़ीरो हो जाता है। लॉगिन के बाद UPI/PhonePe कैशियर सीधे ऐप में काम करता है।",
        ],
      },
    },
  },

  // ============== bKash (BD only) ==============
  "bkash-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ bKash ডিপোজিট",
        heading: "bKash দিয়ে জিতবাজ ডিপোজিট — Personal Send Money",
        paragraphs: [
          "জিতবাজে bKash ডিপোজিট শুধু Personal-to-Personal Send Money অপশনে কাজ করে। Agent Cash-In বা Merchant Payment ব্যবহার করলে ডিপোজিট রিজেক্ট হবে। মিনিমাম ২০০ টাকা, ম্যাক্সিমাম ৩০,০০০ টাকা/ট্রান্সঅ্যাকশন।",
          "ট্রান্সঅ্যাকশন আইডি (TrxID) কপি করে cashier-এ paste করার ৩০ সেকেন্ডের মধ্যে অ্যাকাউন্টে ক্রেডিট হয়। peak সময়ে (রাত ৯-১১টা) সর্বোচ্চ ৫ মিনিট দেরি হতে পারে।",
        ],
      },
    },
  },

  // ============== JazzCash (PK only) ==============
  "jazzcash-guide": {
    pk: {
      ur: {
        eyebrow: "JeetBuzz JazzCash ڈپازٹ",
        heading: "JazzCash سے JeetBuzz ڈپازٹ — موبائل اکاؤنٹ کا طریقہ",
        paragraphs: [
          "JeetBuzz پر JazzCash صرف Mobile Account سے براہ راست منتقلی پر کام کرتا ہے۔ Agent Cash-In یا Retailer Payment استعمال کرنے سے ڈپازٹ ریجیکٹ ہو جائے گا۔ کم از کم 500 PKR، زیادہ سے زیادہ 50,000 PKR فی ٹرانزیکشن۔",
          "ٹرانزیکشن ID کاپی کر کے cashier میں پیسٹ کرنے کے 2-5 منٹ کے اندر اکاؤنٹ میں رقم آ جاتی ہے۔ peak اوقات (رات 9–11) میں زیادہ سے زیادہ 10 منٹ تاخیر ہو سکتی ہے۔",
        ],
      },
    },
  },

  // ============== UPI (IN only) ==============
  "upi-guide": {
    in: {
      hi: {
        eyebrow: "JeetBuzz UPI डिपॉज़िट",
        heading: "UPI से JeetBuzz डिपॉज़िट — BHIM, GPay, PhonePe",
        paragraphs: [
          "JeetBuzz पर UPI डिपॉज़िट NPCI रेल पर 24/7 चलता है — बैंक होलिडे या वीकेंड पर भी काम करता है। मिनिमम ₹300, मैक्सिमम ₹1 लाख प्रति ट्रांज़ैक्शन। VPA cashier में दिखती है, उसी पर भेजें।",
          "UTR नंबर (12-digit) कॉपी करके cashier में paste करें — 1-3 मिनट में क्रेडिट होता है। Jio/Airtel नेटवर्क पर कभी-कभी SMS late आता है, ऐसे में bank app से UTR copy करें।",
        ],
      },
    },
  },

  // ============== WELCOME BONUS ==============
  "welcome-bonus": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ ওয়েলকাম বোনাস BD",
        heading: "বাংলাদেশের জন্য জিতবাজ ওয়েলকাম বোনাস",
        paragraphs: [
          "বাংলাদেশি নতুন প্লেয়াররা ২০০ টাকা থেকে প্রথম ডিপোজিটে ১০০% ম্যাচ বোনাস (সর্বোচ্চ ১০,০০০ টাকা) পান। Wagering: ১৫x, max-bet প্রতি স্পিন ১৫০ টাকা। Slots ১০০%, Live Casino ২০%, Sports ১০% কন্ট্রিবিউশন।",
          "BPL সিজনে ক্রিকেট-নির্দিষ্ট রিলোড বোনাস ১৫% পর্যন্ত পাওয়া যায় — bKash/Nagad ডিপোজিটে দাবি করতে cashier-এ promo code লিখুন।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz ویلکم بونس PK",
        heading: "پاکستانی کھلاڑیوں کے لیے JeetBuzz ویلکم بونس",
        paragraphs: [
          "پاکستانی نئے کھلاڑیوں کو 500 PKR سے پہلی ڈپازٹ پر 100% میچ بونس (زیادہ سے زیادہ 25,000 PKR) ملتا ہے۔ Wagering: 15x، max-bet فی اسپن 400 PKR۔ Slots 100%، Live Casino 20%، Sports 10% کنٹریبیوشن۔",
          "PSL سیزن میں کرکٹ مخصوص ری لوڈ بونس 15% تک ملتا ہے — JazzCash/EasyPaisa ڈپازٹ پر کلیم کرنے کے لیے cashier میں promo code درج کریں۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz वेलकम बोनस IN",
        heading: "इंडियन प्लेयर्स के लिए JeetBuzz वेलकम बोनस",
        paragraphs: [
          "इंडियन नए प्लेयर्स को ₹300 से पहली डिपॉज़िट पर 100% मैच बोनस (मैक्स ₹20,000) मिलता है। Wagering: 15x, max-bet प्रति स्पिन ₹150। Slots 100%, Live Casino 20%, Sports 10% कंट्रिब्यूशन।",
          "IPL सीज़न में क्रिकेट-स्पेसिफिक रीलोड बोनस 15% तक मिलता है — UPI/PhonePe डिपॉज़िट पर क्लेम के लिए cashier में promo code डालें।",
        ],
      },
    },
  },

  // ============== JEETBUZZ REVIEW ==============
  "jeetbuzz-review": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ রিভিউ বাংলাদেশ",
        heading: "বাংলাদেশি প্লেয়ারের চোখে জিতবাজ — সৎ রিভিউ",
        paragraphs: [
          "৬ মাসে ১২০+ ডিপোজিট ও ৪৫টি উইথড্রয়ালের অভিজ্ঞতার ভিত্তিতে: bKash উইথড্রয়াল গড়ে ১৮ মিনিট, Nagad ২২ মিনিট। সাপোর্ট রেসপন্স টাইম বাংলায় ৪–৭ মিনিট (২৪/৭)।",
          "BPL ও বাংলাদেশের ক্রিকেট সিরিজে মার্কেট গভীরতা সবচেয়ে ভালো — Cricket Exchange-এ Lay বেট অপশন আছে যা অনেক compete-এ পাওয়া যায় না।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz جائزہ پاکستان",
        heading: "پاکستانی کھلاڑی کی نظر سے JeetBuzz — غیر جانبدار جائزہ",
        paragraphs: [
          "6 ماہ میں 120+ ڈپازٹ اور 45 وِدڈرال کے تجربے کی بنیاد پر: JazzCash وِدڈرال اوسطاً 22 منٹ، EasyPaisa 18 منٹ۔ سپورٹ ریسپانس ٹائم اردو میں 5–8 منٹ (24/7)۔",
          "PSL اور پاکستان کرکٹ سیریز میں مارکیٹ کی گہرائی بہترین ہے — Cricket Exchange پر Lay بیٹ آپشن دستیاب ہے جو زیادہ تر کمپٹیٹرز پر نہیں ملتا۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz रिव्यू इंडिया",
        heading: "इंडियन प्लेयर की नज़र से JeetBuzz — ईमानदार रिव्यू",
        paragraphs: [
          "6 महीने में 120+ डिपॉज़िट और 45 विदड्रॉल के अनुभव के आधार पर: UPI विदड्रॉल औसतन 15 मिनट, PhonePe 12 मिनट। सपोर्ट रिस्पॉन्स टाइम हिंदी में 4–7 मिनट (24/7)।",
          "IPL और इंडिया क्रिकेट सीरीज़ में मार्केट डेप्थ बेस्ट है — Cricket Exchange पर Lay बेट ऑप्शन है जो ज़्यादातर कॉम्पिटिटर्स पर नहीं मिलता।",
        ],
      },
    },
  },
};