import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, faqSchema } from "@/lib/schema";
import type { FAQItem } from "@/components/FAQAccordion";

const FAQS = [
  { q: "Is GetJeetBuzz the official JeetBuzz website?", a: "No — GetJeetBuzz.com is not the JeetBuzz platform itself. We are a verified official affiliate partner of JeetBuzz, meaning we have a real commission agreement with them, but account signup, login, deposits and withdrawals all happen on JeetBuzz's own platform, not here." },
  { q: "Is JeetBuzz legal in Bangladesh?", a: "Online betting sits in a gray area in Bangladesh. JeetBuzz operates under an offshore license. Always check local laws and bet responsibly." },
  { q: "How do I sign up for JeetBuzz?", a: "Follow our Registration Guide. You need a phone number, an email and a payment method like bKash, Nagad or Rocket." },
  { q: "What payment methods are supported?", a: "bKash, Nagad, Rocket, UPI, JazzCash and USDT. Local mobile wallets are the most popular for Bangladesh." },
  { q: "Are bKash deposits instant?", a: "Almost always — usually within seconds once the TrxID is verified." },
  { q: "How long do withdrawals take?", a: "Usually minutes to a few hours after KYC is complete." },
  { q: "What is the minimum deposit?", a: "Typically 200–500 BDT for mobile wallets — confirm in the official cashier." },
  { q: "Is there a JeetBuzz Android app?", a: "Yes — an APK is available from the official site. iOS users use the responsive mobile web." },
  { q: "Is the APK safe?", a: "Only when downloaded from the official JeetBuzz site. Telegram APKs are a leading source of credential theft." },
  { q: "Can I open more than one JeetBuzz account?", a: "No — like most operators, JeetBuzz allows one account per person." },
  { q: "How do bonuses work?", a: "JeetBuzz offers a welcome bonus and recurring promotions, each with wagering requirements. Read the Bonus Guide for terms." },
  { q: "What are wagering requirements?", a: "The bet volume needed before a bonus converts to withdrawable cash. A 15x wager on a 1,000 BDT bonus means 15,000 BDT in qualifying bets." },
  { q: "Does cricket betting count for bonus wagering?", a: "Usually yes, but live casino often contributes less. Check each promo's contribution table." },
  { q: "Does JeetBuzz support 2FA?", a: "Yes — enable it under Account > Security. SMS 2FA is the most common option." },
  { q: "What if my account is locked?", a: "Open live chat with your registered phone or email. We cannot unlock accounts." },
  { q: "Can I bet on BPL and IPL?", a: "Yes — both have deep market coverage on JeetBuzz, including in-play markets." },
  { q: "Can I stream live cricket on JeetBuzz?", a: "In-play scoreboards are always available. Live video depends on rights and your region." },
  { q: "What if I forget my password?", a: "Use 'Forgot password' on the official site. A reset link is sent to your registered phone or email." },
  { q: "How do I contact JeetBuzz support?", a: "Use 24/7 live chat inside the official site or app. Bengali support is available." },
  { q: "How does the affiliate program work?", a: "Revenue share and CPA on qualified deposits. Read our Affiliate Program page." },
  { q: "When are affiliate payouts?", a: "Monthly, typically in the first week of the following month, subject to KYC and minimum balance." },
  { q: "Is JeetBuzz available in Pakistan?", a: "Yes — JazzCash and EasyPaisa are supported for deposits." },
  { q: "Is JeetBuzz available in India?", a: "Yes — UPI is the default payment rail for India." },
  { q: "What languages does JeetBuzz support?", a: "Bengali, English, Hindi and Urdu." },
  { q: "What is the JeetBuzz VIP program?", a: "A tiered loyalty program with cashback and higher limits. See our VIP Program page." },
  { q: "Does JeetBuzz offer responsible-gaming tools?", a: "Yes — deposit limits, loss limits, time-outs and self-exclusion." },
  { q: "Can I withdraw to a different wallet than my deposit?", a: "Generally no — JeetBuzz requires the same wallet, in your own name." },
  { q: "Is USDT supported?", a: "Yes — both TRC20 and BEP20 networks." },
  { q: "How do I claim the welcome bonus?", a: "Opt in BEFORE depositing, then make a qualifying deposit. Read the bonus terms in the cashier." },
  { q: "Why was my bonus voided?", a: "Most common reasons: max bet exceeded, betting on excluded games, or withdrawing before wagering completed." },
];

const FAQS_BN: FAQItem[] = [
  { q: "GetJeetBuzz কি জিতবাজের অফিসিয়াল ওয়েবসাইট?", a: "না — GetJeetBuzz.com জিতবাজ প্ল্যাটফর্ম নয়। আমরা জিতবাজের একটি যাচাইকৃত অফিসিয়াল অ্যাফিলিয়েট পার্টনার, অর্থাৎ আমাদের কমিশন চুক্তি আছে; কিন্তু সাইনআপ, লগইন, ডিপোজিট ও উইথড্রয়াল জিতবাজের নিজস্ব প্ল্যাটফর্মেই হয়, এখানে নয়।" },
  { q: "বাংলাদেশে জিতবাজ কি বৈধ?", a: "বাংলাদেশে অনলাইন বেটিং একটি গ্রে এরিয়া। জিতবাজ অফশোর লাইসেন্সে পরিচালিত। স্থানীয় আইন দেখে দায়িত্বশীলভাবে খেলুন।" },
  { q: "কীভাবে জিতবাজে সাইনআপ করব?", a: "আমাদের রেজিস্ট্রেশন গাইড অনুসরণ করুন। দরকার একটি ফোন নম্বর, ইমেইল এবং bKash/Nagad/Rocket এর মত পেমেন্ট মাধ্যম।" },
  { q: "কোন কোন পেমেন্ট পদ্ধতি সমর্থিত?", a: "bKash, Nagad, Rocket, Upay, UPI, JazzCash ও USDT। বাংলাদেশে স্থানীয় মোবাইল ওয়ালেট সবচেয়ে জনপ্রিয়।" },
  { q: "bKash ডিপোজিট কি ইনস্ট্যান্ট?", a: "প্রায় সবসময় — TrxID যাচাই হওয়ার কয়েক সেকেন্ডের মধ্যে।" },
  { q: "উইথড্রয়াল কত সময় নেয়?", a: "KYC শেষ হলে সাধারণত কয়েক মিনিট থেকে কয়েক ঘণ্টা।" },
  { q: "সর্বনিম্ন ডিপোজিট কত?", a: "মোবাইল ওয়ালেটের জন্য সাধারণত ২০০–৫০০ টাকা — অফিসিয়াল ক্যাশিয়ারে নিশ্চিত হন।" },
  { q: "জিতবাজের কি Android অ্যাপ আছে?", a: "হ্যাঁ — অফিসিয়াল সাইট থেকে APK পাওয়া যায়। iOS ব্যবহারকারীরা রেসপন্সিভ মোবাইল ওয়েব ব্যবহার করেন।" },
  { q: "APK কি নিরাপদ?", a: "শুধুমাত্র অফিসিয়াল জিতবাজ সাইট থেকে ডাউনলোড করলেই নিরাপদ। Telegram APK পাসওয়ার্ড চুরির অন্যতম উৎস।" },
  { q: "একাধিক জিতবাজ অ্যাকাউন্ট খোলা যায়?", a: "না — অধিকাংশ অপারেটরের মতো জিতবাজ প্রতি ব্যক্তি একটি অ্যাকাউন্ট অনুমোদন করে।" },
  { q: "বোনাস কীভাবে কাজ করে?", a: "জিতবাজ ওয়েলকাম বোনাস ও নিয়মিত প্রোমোশন দেয়, প্রতিটির wagering শর্ত থাকে। বিস্তারিত জানতে বোনাস গাইড পড়ুন।" },
  { q: "Wagering requirement কী?", a: "বোনাস উইথড্র-যোগ্য হওয়ার আগে যত বাজি ধরতে হবে তার পরিমাণ। ১,০০০ টাকার বোনাসে 15x মানে ১৫,০০০ টাকার যোগ্য বাজি।" },
  { q: "ক্রিকেট বাজি কি বোনাস wagering এ গণনা হয়?", a: "সাধারণত হ্যাঁ, তবে লাইভ ক্যাসিনো অনেক সময় কম অবদান রাখে। প্রতিটি প্রোমোর contribution table দেখুন।" },
  { q: "জিতবাজ কি 2FA সমর্থন করে?", a: "হ্যাঁ — Account > Security থেকে চালু করুন। SMS 2FA সবচেয়ে সাধারণ অপশন।" },
  { q: "অ্যাকাউন্ট লক হলে কী করব?", a: "রেজিস্টার করা ফোন/ইমেইল নিয়ে লাইভ চ্যাটে যোগাযোগ করুন। আমরা অ্যাকাউন্ট আনলক করতে পারি না।" },
  { q: "BPL ও IPL এ বাজি ধরা যায়?", a: "হ্যাঁ — দুটোতেই জিতবাজে গভীর মার্কেট কভারেজ আছে, ইন-প্লে মার্কেটসহ।" },
  { q: "জিতবাজে লাইভ ক্রিকেট দেখা যায়?", a: "ইন-প্লে স্কোরবোর্ড সবসময় থাকে। লাইভ ভিডিও সম্প্রচার অধিকার এবং আপনার অঞ্চলের উপর নির্ভর করে।" },
  { q: "পাসওয়ার্ড ভুলে গেলে?", a: "অফিসিয়াল সাইটে ‘Forgot password’ ব্যবহার করুন। রিসেট লিংক ফোন বা ইমেইলে আসবে।" },
  { q: "জিতবাজ সাপোর্টের সাথে কীভাবে যোগাযোগ?", a: "অফিসিয়াল সাইট বা অ্যাপের ২৪/৭ লাইভ চ্যাট ব্যবহার করুন। বাংলা সাপোর্ট পাওয়া যায়।" },
  { q: "অ্যাফিলিয়েট প্রোগ্রাম কীভাবে কাজ করে?", a: "যোগ্য ডিপোজিটে রেভিনিউ শেয়ার ও CPA। বিস্তারিত আমাদের অ্যাফিলিয়েট প্রোগ্রাম পেজে।" },
  { q: "অ্যাফিলিয়েট পেআউট কখন?", a: "মাসিক, সাধারণত পরবর্তী মাসের প্রথম সপ্তাহে — KYC ও সর্বনিম্ন ব্যালেন্স সাপেক্ষে।" },
  { q: "পাকিস্তানে জিতবাজ পাওয়া যায়?", a: "হ্যাঁ — ডিপোজিটে JazzCash ও EasyPaisa সমর্থিত।" },
  { q: "ভারতে জিতবাজ পাওয়া যায়?", a: "হ্যাঁ — ভারতের জন্য UPI ডিফল্ট পেমেন্ট রেল।" },
  { q: "জিতবাজ কোন কোন ভাষা সমর্থন করে?", a: "বাংলা, ইংরেজি, হিন্দি ও উর্দু।" },
  { q: "জিতবাজ VIP প্রোগ্রাম কী?", a: "একটি স্তরভিত্তিক লয়ালটি প্রোগ্রাম — ক্যাশব্যাক ও বেশি লিমিট সহ। VIP Program পেজ দেখুন।" },
  { q: "জিতবাজ কি responsible gaming টুল দেয়?", a: "হ্যাঁ — ডিপোজিট লিমিট, লস লিমিট, টাইম-আউট ও সেলফ-এক্সক্লুশন।" },
  { q: "ডিপোজিটের পদ্ধতির বদলে অন্য ওয়ালেটে উইথড্র করা যায়?", a: "সাধারণত না — জিতবাজ একই ওয়ালেট, আপনার নামে চায়।" },
  { q: "USDT কি সমর্থিত?", a: "হ্যাঁ — TRC20 ও BEP20 উভয় নেটওয়ার্কে।" },
  { q: "ওয়েলকাম বোনাস কীভাবে নেব?", a: "ডিপোজিটের আগে অপ্ট-ইন করুন, তারপর যোগ্য ডিপোজিট করুন। ক্যাশিয়ারের বোনাস শর্ত পড়ুন।" },
  { q: "আমার বোনাস কেন বাতিল হলো?", a: "সাধারণ কারণ: max bet সীমা অতিক্রম, exclude করা গেমে বাজি, বা wagering শেষ হওয়ার আগেই উইথড্র।" },
];

const FAQS_UR: FAQItem[] = [
  { q: "کیا GetJeetBuzz آفیشل JeetBuzz ویب سائٹ ہے؟", a: "نہیں — GetJeetBuzz.com خود JeetBuzz پلیٹ فارم نہیں ہے۔ ہم JeetBuzz کے ایک تصدیق شدہ آفیشل اَفِلیٹ پارٹنر ہیں؛ سائن اپ، لاگ ان، ڈپازٹ اور ودڈرا سب JeetBuzz کے اپنے پلیٹ فارم پر ہوتے ہیں۔" },
  { q: "کیا JeetBuzz پاکستان میں قانونی ہے؟", a: "آن لائن بیٹنگ پاکستان میں ایک گرے ایریا ہے۔ JeetBuzz آف شور لائسنس پر چلتا ہے۔ مقامی قوانین چیک کریں اور ذمہ داری سے کھیلیں۔" },
  { q: "JeetBuzz پر سائن اپ کیسے کروں؟", a: "ہماری رجسٹریشن گائیڈ پر عمل کریں۔ آپ کو فون نمبر، ای میل اور EasyPaisa/JazzCash جیسی پیمنٹ کی ضرورت ہوگی۔" },
  { q: "کون سے پیمنٹ طریقے سپورٹڈ ہیں؟", a: "JazzCash، EasyPaisa، SadaPay، بینک ٹرانسفر اور USDT۔ پاکستان کے لیے JazzCash اور EasyPaisa سب سے زیادہ مقبول ہیں۔" },
  { q: "کیا JazzCash ڈپازٹ فوری ہوتا ہے؟", a: "تقریباً ہمیشہ — TrxID کی تصدیق کے چند سیکنڈز میں۔" },
  { q: "ودڈرا میں کتنا وقت لگتا ہے؟", a: "KYC مکمل ہونے کے بعد عام طور پر چند منٹ سے چند گھنٹے۔" },
  { q: "کم از کم ڈپازٹ کیا ہے؟", a: "موبائل والیٹس کے لیے عام طور پر 500–1000 PKR — کیشیئر میں تصدیق کریں۔" },
  { q: "کیا JeetBuzz کی Android ایپ ہے؟", a: "ہاں — آفیشل سائٹ سے APK دستیاب ہے۔ iOS صارفین موبائل ویب استعمال کرتے ہیں۔" },
  { q: "کیا APK محفوظ ہے؟", a: "صرف آفیشل JeetBuzz سائٹ سے ڈاؤن لوڈ کی صورت میں۔ Telegram APKs پاس ورڈ چوری کا بڑا ذریعہ ہیں۔" },
  { q: "کیا میں ایک سے زیادہ اکاؤنٹ کھول سکتا ہوں؟", a: "نہیں — JeetBuzz فی شخص ایک اکاؤنٹ کی اجازت دیتا ہے۔" },
  { q: "بونس کیسے کام کرتا ہے؟", a: "JeetBuzz ویلکم بونس اور باقاعدہ پروموشنز پیش کرتا ہے، ہر ایک پر wagering شرائط ہوتی ہیں۔ تفصیلات بونس گائیڈ میں۔" },
  { q: "Wagering requirement کیا ہے؟", a: "بونس کو نکالنے کے قابل بنانے سے پہلے لگانے والی بیٹس کی مقدار۔ 1,000 PKR بونس پر 15x کا مطلب 15,000 PKR اہل بیٹس۔" },
  { q: "کیا کرکٹ بیٹنگ wagering میں شمار ہوتی ہے؟", a: "عام طور پر ہاں، لیکن لائیو کیسینو اکثر کم شمار ہوتا ہے۔ ہر پروموشن کی contribution table دیکھیں۔" },
  { q: "کیا JeetBuzz 2FA سپورٹ کرتا ہے؟", a: "ہاں — Account > Security سے آن کریں۔ SMS 2FA سب سے عام آپشن۔" },
  { q: "اکاؤنٹ لاک ہو جائے تو کیا کریں؟", a: "اپنے رجسٹرڈ فون/ای میل سے لائیو چیٹ کھولیں۔ ہم اکاؤنٹ ان لاک نہیں کر سکتے۔" },
  { q: "کیا میں PSL اور IPL پر بیٹ لگا سکتا ہوں؟", a: "ہاں — دونوں پر JeetBuzz پر گہری مارکیٹ کوریج ہے، ان پلے مارکیٹس سمیت۔" },
  { q: "کیا JeetBuzz پر لائیو کرکٹ اسٹریم کر سکتے ہیں؟", a: "ان پلے اسکور بورڈ ہمیشہ دستیاب ہے۔ لائیو ویڈیو حقوق اور علاقے پر منحصر ہے۔" },
  { q: "پاس ورڈ بھول جائیں تو؟", a: "آفیشل سائٹ پر 'Forgot password' استعمال کریں۔ ری سیٹ لنک فون یا ای میل پر بھیجا جائے گا۔" },
  { q: "JeetBuzz سپورٹ سے رابطہ کیسے؟", a: "آفیشل سائٹ یا ایپ پر 24/7 لائیو چیٹ استعمال کریں۔ اردو سپورٹ دستیاب ہے۔" },
  { q: "اَفِلیٹ پروگرام کیسے کام کرتا ہے؟", a: "اہل ڈپازٹس پر ریونیو شیئر اور CPA۔ تفصیلات اَفِلیٹ پروگرام صفحے پر۔" },
  { q: "اَفِلیٹ پے آؤٹ کب ہوتا ہے؟", a: "ماہانہ، عام طور پر اگلے ماہ کے پہلے ہفتے میں — KYC اور کم از کم بیلنس کے ساتھ۔" },
  { q: "کیا JeetBuzz بنگلہ دیش میں دستیاب ہے؟", a: "ہاں — bKash، Nagad اور Rocket ڈپازٹ کے لیے سپورٹڈ ہیں۔" },
  { q: "کیا JeetBuzz بھارت میں دستیاب ہے؟", a: "ہاں — بھارت کے لیے UPI ڈیفالٹ پیمنٹ ریل ہے۔" },
  { q: "JeetBuzz کون سی زبانیں سپورٹ کرتا ہے؟", a: "بنگالی، انگریزی، ہندی اور اردو۔" },
  { q: "JeetBuzz VIP پروگرام کیا ہے؟", a: "ایک ٹائرڈ لائلٹی پروگرام جس میں کیش بیک اور زیادہ حدود شامل ہیں۔ VIP صفحہ دیکھیں۔" },
  { q: "کیا JeetBuzz ذمہ دار گیمنگ ٹولز دیتا ہے؟", a: "ہاں — ڈپازٹ حد، نقصان کی حد، ٹائم آؤٹ اور سیلف ایکسکلوژن۔" },
  { q: "کیا ڈپازٹ سے مختلف والیٹ پر ودڈرا کر سکتے ہیں؟", a: "عام طور پر نہیں — JeetBuzz آپ کے نام پر ایک ہی والیٹ مانگتا ہے۔" },
  { q: "کیا USDT سپورٹڈ ہے؟", a: "ہاں — TRC20 اور BEP20 دونوں نیٹ ورکس۔" },
  { q: "ویلکم بونس کیسے لیں؟", a: "ڈپازٹ سے پہلے آپٹ ان کریں، پھر اہل ڈپازٹ کریں۔ کیشیئر میں بونس شرائط پڑھیں۔" },
  { q: "میرا بونس کیوں منسوخ ہوا؟", a: "عام وجوہات: max bet سے زیادہ، خارج کردہ گیمز پر بیٹ، یا wagering مکمل ہونے سے پہلے ودڈرا۔" },
];

const FAQS_HI: FAQItem[] = [
  { q: "क्या GetJeetBuzz ऑफ़िशियल JeetBuzz वेबसाइट है?", a: "नहीं — GetJeetBuzz.com खुद JeetBuzz प्लेटफ़ॉर्म नहीं है। हम JeetBuzz के सत्यापित ऑफ़िशियल अफ़िलिएट पार्टनर हैं; साइनअप, लॉगिन, डिपॉज़िट और विदड्रॉल सब JeetBuzz के अपने प्लेटफ़ॉर्म पर होते हैं।" },
  { q: "क्या JeetBuzz भारत में क़ानूनी है?", a: "ऑनलाइन बेटिंग भारत में ग्रे एरिया है और राज्य-दर-राज्य बदलती है। JeetBuzz ऑफ़शोर लाइसेंस पर चलता है। स्थानीय क़ानून जाँचें और ज़िम्मेदारी से खेलें।" },
  { q: "JeetBuzz पर साइनअप कैसे करूँ?", a: "हमारी रजिस्ट्रेशन गाइड फ़ॉलो करें। आपको फ़ोन नंबर, ईमेल और UPI/PhonePe/Paytm जैसे पेमेंट तरीक़े की ज़रूरत होगी।" },
  { q: "कौन-से पेमेंट तरीक़े सपोर्टेड हैं?", a: "UPI, PhonePe, Paytm, Google Pay, IMPS/NEFT और USDT। भारत में UPI सबसे लोकप्रिय है।" },
  { q: "क्या UPI डिपॉज़िट इंस्टेंट हैं?", a: "लगभग हमेशा — TrxID सत्यापित होते ही कुछ सेकंड में।" },
  { q: "विदड्रॉल में कितना समय लगता है?", a: "KYC पूरा होने पर आम तौर पर कुछ मिनट से कुछ घंटे।" },
  { q: "न्यूनतम डिपॉज़िट क्या है?", a: "UPI के लिए आम तौर पर 200–500 INR — कैशियर में पुष्टि करें।" },
  { q: "क्या JeetBuzz की Android ऐप है?", a: "हाँ — ऑफ़िशियल साइट से APK उपलब्ध है। iOS यूज़र मोबाइल वेब इस्तेमाल करते हैं।" },
  { q: "क्या APK सुरक्षित है?", a: "केवल ऑफ़िशियल JeetBuzz साइट से डाउनलोड करने पर। Telegram APKs पासवर्ड चोरी का बड़ा ज़रिया हैं।" },
  { q: "क्या मैं एक से ज़्यादा खाते खोल सकता हूँ?", a: "नहीं — JeetBuzz प्रति व्यक्ति एक खाते की अनुमति देता है।" },
  { q: "बोनस कैसे काम करता है?", a: "JeetBuzz वेलकम बोनस और नियमित प्रोमोशन देता है, हर एक पर wagering शर्तें होती हैं। विवरण बोनस गाइड में।" },
  { q: "Wagering requirement क्या है?", a: "बोनस को विदड्रॉ-योग्य बनाने से पहले लगाई जाने वाली बेट्स की मात्रा। 1,000 INR बोनस पर 15x यानी 15,000 INR की योग्य बेट्स।" },
  { q: "क्या क्रिकेट बेटिंग wagering में गिनी जाती है?", a: "आम तौर पर हाँ, लेकिन लाइव कसीनो अक्सर कम गिना जाता है। हर प्रोमो की contribution table देखें।" },
  { q: "क्या JeetBuzz 2FA सपोर्ट करता है?", a: "हाँ — Account > Security से ऑन करें। SMS 2FA सबसे आम विकल्प।" },
  { q: "खाता लॉक हो जाए तो?", a: "रजिस्टर्ड फ़ोन/ईमेल से लाइव चैट खोलें। हम खाता अनलॉक नहीं कर सकते।" },
  { q: "क्या मैं IPL और BPL पर बेट लगा सकता हूँ?", a: "हाँ — दोनों पर JeetBuzz पर गहरी मार्केट कवरेज है, इन-प्ले मार्केट्स सहित।" },
  { q: "क्या JeetBuzz पर लाइव क्रिकेट स्ट्रीम कर सकते हैं?", a: "इन-प्ले स्कोरबोर्ड हमेशा उपलब्ध। लाइव वीडियो अधिकारों और आपके क्षेत्र पर निर्भर।" },
  { q: "पासवर्ड भूल जाएँ तो?", a: "ऑफ़िशियल साइट पर ‘Forgot password’ इस्तेमाल करें। रीसेट लिंक फ़ोन या ईमेल पर भेजा जाएगा।" },
  { q: "JeetBuzz सपोर्ट से संपर्क कैसे?", a: "ऑफ़िशियल साइट या ऐप पर 24/7 लाइव चैट इस्तेमाल करें। हिंदी सपोर्ट उपलब्ध।" },
  { q: "अफ़िलिएट प्रोग्राम कैसे काम करता है?", a: "योग्य डिपॉज़िट्स पर रेवेन्यू शेयर और CPA। विवरण अफ़िलिएट प्रोग्राम पेज पर।" },
  { q: "अफ़िलिएट पेआउट कब?", a: "मासिक, आम तौर पर अगले महीने के पहले हफ़्ते में — KYC और न्यूनतम बैलेंस के साथ।" },
  { q: "क्या JeetBuzz बांग्लादेश में उपलब्ध है?", a: "हाँ — bKash, Nagad और Rocket डिपॉज़िट के लिए सपोर्टेड हैं।" },
  { q: "क्या JeetBuzz पाकिस्तान में उपलब्ध है?", a: "हाँ — JazzCash और EasyPaisa डिपॉज़िट के लिए सपोर्टेड हैं।" },
  { q: "JeetBuzz कौन-सी भाषाएँ सपोर्ट करता है?", a: "बंगाली, अंग्रेज़ी, हिंदी और उर्दू।" },
  { q: "JeetBuzz VIP प्रोग्राम क्या है?", a: "टियर्ड लॉयल्टी प्रोग्राम जिसमें कैशबैक और बढ़ी हुई सीमाएँ शामिल हैं। VIP पेज देखें।" },
  { q: "क्या JeetBuzz responsible gaming टूल देता है?", a: "हाँ — डिपॉज़िट लिमिट, लॉस लिमिट, टाइम-आउट और सेल्फ़-एक्सक्लूज़न।" },
  { q: "क्या डिपॉज़िट से अलग वॉलेट पर विदड्रॉ कर सकते हैं?", a: "आम तौर पर नहीं — JeetBuzz आपके नाम पर एक ही वॉलेट चाहता है।" },
  { q: "क्या USDT सपोर्टेड है?", a: "हाँ — TRC20 और BEP20 दोनों नेटवर्क।" },
  { q: "वेलकम बोनस कैसे लें?", a: "डिपॉज़िट से पहले ऑप्ट-इन करें, फिर योग्य डिपॉज़िट करें। कैशियर में बोनस शर्तें पढ़ें।" },
  { q: "मेरा बोनस रद्द क्यों हुआ?", a: "आम कारण: max bet सीमा पार, बाहर रखे गए गेम्स पर बेट, या wagering पूरा होने से पहले विदड्रॉल।" },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "JeetBuzz FAQ — Bangladesh | GetJeetBuzz" },
      { name: "description", content: "Common questions about JeetBuzz in Bangladesh — legality, signup, bonuses, payments, support." },
      { property: "og:title", content: "JeetBuzz FAQ — Bangladesh" },
      { property: "og:description", content: "Common questions about JeetBuzz in Bangladesh." },
      { property: "og:type", content: "article" },
      ogUrl("/faq"),
    ],
    links: [canonicalLink("/faq"), ...hreflangLinks("/faq")],
    scripts: [jsonLdScript(faqSchema(FAQS))],
  }),
  component: () => (
    <GuidePage
      eyebrow="FAQ"
      title={<>JeetBuzz Bangladesh — <span className="gold-text">Frequently Asked Questions</span></>}
      titleByLocale={{
        bn: <>জিতবাজ বাংলাদেশ — <span className="gold-text">প্রায়শই জিজ্ঞাসিত প্রশ্ন</span></>,
        ur: <>JeetBuzz پاکستان — <span className="gold-text">عام پوچھے گئے سوالات</span></>,
        hi: <>JeetBuzz भारत — <span className="gold-text">अक्सर पूछे जाने वाले प्रश्न</span></>,
      }}
      breadcrumbs={[{ name: "FAQ", path: "/faq" }]}
      faqs={FAQS}
      faqsByLocale={{ bn: FAQS_BN, ur: FAQS_UR, hi: FAQS_HI }}
      body={[
        "## About this page",
        "Below are the 30 most common questions Bangladesh players ask us about JeetBuzz, with short, no-nonsense answers. Open any item below the article to read the full answer.",
        "## Still stuck?",
        "If your question is not covered, email editorial@getjeetbuzz.com or open the contact page. For account-specific issues (deposits, KYC, withdrawals) please use JeetBuzz live chat directly — we are an editorial guide, not support.",
      ]}
      bodyByLocale={{
        bn: [
          "## এই পেজ সম্পর্কে",
          "বাংলাদেশের প্লেয়াররা জিতবাজ সম্পর্কে আমাদের যেসব প্রশ্ন বেশি করেন তার ৩০টি সংক্ষিপ্ত, স্পষ্ট উত্তর নিচে দেওয়া হলো। নিচের যেকোনো আইটেমে ক্লিক করে পুরো উত্তর পড়ুন।",
          "## এখনো সমাধান পাননি?",
          "প্রশ্ন না পেলে editorial@getjeetbuzz.com এ মেইল করুন বা কন্টাক্ট পেজে যান। অ্যাকাউন্ট সংক্রান্ত সমস্যা (ডিপোজিট, KYC, উইথড্রয়াল) জিতবাজ লাইভ চ্যাটে সরাসরি যোগাযোগ করুন — আমরা এডিটোরিয়াল গাইড, সাপোর্ট নই।",
        ],
        ur: [
          "## اس صفحے کے بارے میں",
          "نیچے JeetBuzz کے بارے میں پاکستانی کھلاڑیوں کے 30 سب سے عام سوالات کے مختصر، صاف جوابات ہیں۔ نیچے کسی بھی آئٹم پر کلک کر کے مکمل جواب پڑھیں۔",
          "## اب بھی پھنسے ہیں؟",
          "اگر آپ کا سوال شامل نہیں تو editorial@getjeetbuzz.com پر ای میل کریں یا کانٹیکٹ صفحہ کھولیں۔ اکاؤنٹ سے متعلق مسائل (ڈپازٹ، KYC، ودڈرا) کے لیے براہ راست JeetBuzz لائیو چیٹ استعمال کریں۔",
        ],
        hi: [
          "## इस पेज के बारे में",
          "नीचे भारतीय खिलाड़ियों के JeetBuzz के बारे में 30 सबसे आम सवालों के संक्षिप्त, स्पष्ट जवाब हैं। नीचे किसी भी आइटम पर क्लिक करके पूरा जवाब पढ़ें।",
          "## अब भी फँसे हैं?",
          "अगर आपका सवाल कवर नहीं है तो editorial@getjeetbuzz.com पर ईमेल करें या कांटैक्ट पेज खोलें। खाता-संबंधी मुद्दों (डिपॉज़िट, KYC, विदड्रॉल) के लिए सीधे JeetBuzz लाइव चैट इस्तेमाल करें।",
        ],
      }}
      related={[
        { to: "/registration-guide", title: "Registration Guide" },
        { to: "/login-guide", title: "Login Guide" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
        { to: "/security-guide", title: "Security Guide" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
      ]}
    />
  ),
});