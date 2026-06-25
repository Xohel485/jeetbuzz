import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/ios-app-guide";
const TITLE =
  "JeetBuzz iOS App Guide 2026 - Safari Web App Install for iPhone & iPad";
const DESC =
  "Use JeetBuzz on iPhone and iPad in 2026 — Safari Add to Home Screen web-app install, push notifications, login persistence and what to do when the App Store route isn't available.";

export const Route = createFileRoute("/ios-app-guide")({
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
      eyebrow="iOS"
      title={<>JeetBuzz <span className="gold-text">iOS</span> App Guide</>}
      subtitle="There is no public JeetBuzz app in the regional App Store. The official, safe way to use JeetBuzz on iPhone and iPad is the Safari web-app install — this guide walks through it and warns about the fake IPA / sideload offers floating around."
      breadcrumbs={[{ name: "Mobile", path: "/mobile-app-guide" }, { name: "iOS", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why there's no App Store listing",
        "Apple's App Store policy restricts real-money gambling apps to a narrow list of licensed jurisdictions. JeetBuzz isn't listed for Bangladesh, Pakistan or India retail App Stores, so any IPA file or TestFlight link claiming to be the JeetBuzz iOS app is unofficial and unsafe — treat it the same way you'd treat an unsigned APK.",
        "## The safe path: Safari web app",
        "1. Open Safari (not Chrome, not Firefox — only Safari supports Add to Home Screen as a real installable web app on iOS).",
        "2. Visit the official JeetBuzz site.",
        "3. Log in once so your session is stored.",
        "4. Tap the Share button at the bottom of Safari.",
        "5. Tap Add to Home Screen, name it JeetBuzz, tap Add.",
        "6. Launch from the new home-screen icon — it opens in full-screen web-app mode with no Safari address bar, behaves like a native app.",
        "## What works and what doesn't",
        "- Works: full sports book, exchange, casino, cashier, live cricket video where available, deposits/withdrawals.",
        "- Limited: Apple silently logs you out after extended periods of background time more aggressively than on Android — keep the login guide handy.",
        "- Push notifications: iOS 16.4+ supports web push for installed web apps; enable when prompted on first login.",
        "## Troubleshooting",
        "- Add to Home Screen missing: you're not in Safari, or you're in Private Browsing mode. Switch to a normal Safari tab.",
        "- Web app keeps logging out: clear Safari website data for the JeetBuzz domain, re-install the web app, log in fresh.",
        "- Video stutter on live cricket: switch to a 5GHz Wi-Fi network or temporarily disable Low Power Mode.",
        "## What to avoid",
        "- IPA files from Telegram or third-party sites.",
        "- TestFlight invites that aren't from a verified JeetBuzz email.",
        "- AltStore / Sideloadly downloads — they require trusting an unknown enterprise certificate which is a meaningful security risk.",
        "## Country notes",
        "- Bangladesh: pair the web app with bKash for fastest in-app top-up; the cashier handles the deep link to the bKash app cleanly on iOS.",
        "- Pakistan: EasyPaisa app deep-links back to JeetBuzz Safari, not to the home-screen web app. After paying, manually re-open the home-screen icon to see the deposit posted.",
        "- India: UPI intents on iOS sometimes require selecting the UPI app manually; copy the VPA from the cashier if the picker doesn't appear.",
      ]}
      faqs={[
        { q: "Is there a JeetBuzz iOS app on the App Store?", a: "Not in BD/PK/IN App Stores as of 2026. The official iOS experience is the Safari web app via Add to Home Screen — anything else is unofficial." },
        { q: "Is the Safari web app safe?", a: "Yes — it loads the same HTTPS site as a desktop browser would, runs in Apple's WebKit sandbox, and doesn't require trusting any third-party certificate." },
        { q: "Does the web app support push notifications?", a: "Yes on iOS 16.4 and later, once you've installed it to the home screen and granted permission on first login." },
        { q: "Why was I logged out overnight?", a: "iOS aggressively suspends background web-app sessions to save battery. Tap the home-screen icon again and log in — enabling 'Remember me' helps." },
      ]}
      subtitleByLocale={{
        ur: "علاقائی App Store میں JeetBuzz کی کوئی پبلک ایپ نہیں ہے۔ iPhone اور iPad پر JeetBuzz استعمال کرنے کا آفیشل اور محفوظ طریقہ Safari ویب ایپ انسٹال ہے — یہ گائیڈ اس میں رہنمائی کرتی ہے اور گردش کرنے والی جعلی IPA / سائڈ لوڈ پیشکشوں سے خبردار کرتی ہے۔",
        hi: "क्षेत्रीय App Store में JeetBuzz की कोई पब्लिक ऐप नहीं है। iPhone और iPad पर JeetBuzz इस्तेमाल करने का आधिकारिक और सुरक्षित तरीक़ा Safari वेब-ऐप इंस्टॉल है — यह गाइड उसे समझाती है और घूम रहे फ़र्ज़ी IPA / साइडलोड ऑफ़र से सावधान करती है।",
      }}
      bodyByLocale={{
        ur: [
          "## App Store لسٹنگ کیوں نہیں ہے",
          "Apple کی App Store پالیسی حقیقی رقم کی جوئے بازی کی ایپس کو محدود لائسنس یافتہ دائرہ اختیار تک محدود رکھتی ہے۔ JeetBuzz بنگلہ دیش، پاکستان یا بھارت کے ریٹیل App Stores میں درج نہیں، لہٰذا کوئی بھی IPA فائل یا TestFlight لنک جو JeetBuzz iOS ایپ ہونے کا دعویٰ کرے، غیر آفیشل اور غیر محفوظ ہے — اسے غیر دستخط شدہ APK کی طرح سمجھیں۔",
          "## محفوظ راستہ: Safari ویب ایپ",
          "1. Safari کھولیں (Chrome یا Firefox نہیں — صرف Safari iOS پر Add to Home Screen کو حقیقی انسٹال ایبل ویب ایپ کے طور پر سپورٹ کرتا ہے)۔",
          "2. آفیشل JeetBuzz سائٹ پر جائیں۔",
          "3. ایک بار لاگ ان کر لیں تاکہ آپ کا سیشن محفوظ ہو۔",
          "4. Safari کے نیچے Share بٹن دبائیں۔",
          "5. **Add to Home Screen** دبائیں، نام JeetBuzz رکھیں، Add دبائیں۔",
          "6. نئے ہوم اسکرین آئیکن سے لانچ کریں — یہ بغیر Safari ایڈریس بار کے فل اسکرین ویب ایپ موڈ میں کھلتا ہے، نیٹیو ایپ کی طرح برتاؤ کرتا ہے۔",
          "## کیا کام کرتا ہے اور کیا نہیں",
          "- **کام کرتا ہے:** پورا اسپورٹس بُک، ایکسچینج، کیسینو، کیشیئر، جہاں دستیاب ہو لائیو کرکٹ ویڈیو، ڈپازٹ/ودڈرا۔",
          "- **محدود:** Apple اینڈرائیڈ کے مقابلے میں زیادہ جارحانہ انداز میں طویل بیک گراؤنڈ وقت کے بعد آپ کو لاگ آؤٹ کر دیتا ہے — لاگ ان گائیڈ ہاتھ میں رکھیں۔",
          "- **پش نوٹیفکیشنز:** iOS 16.4+ انسٹال شدہ ویب ایپس کے لیے ویب پش سپورٹ کرتا ہے؛ پہلی لاگ ان پر پرامپٹ ملنے پر فعال کریں۔",
          "## ٹربل شوٹنگ",
          "- Add to Home Screen غائب: آپ Safari میں نہیں، یا Private Browsing موڈ میں ہیں۔ نارمل Safari ٹیب پر جائیں۔",
          "- ویب ایپ بار بار لاگ آؤٹ ہو رہی ہے: JeetBuzz ڈومین کے لیے Safari ویب سائٹ ڈیٹا کلیئر کریں، ویب ایپ دوبارہ انسٹال کریں، تازہ لاگ ان کریں۔",
          "- لائیو کرکٹ پر ویڈیو رک رک کر چلے: 5GHz Wi-Fi پر جائیں یا عارضی طور پر Low Power Mode بند کریں۔",
          "## کن چیزوں سے بچیں",
          "- ٹیلیگرام یا تھرڈ پارٹی سائٹس کی IPA فائلز۔",
          "- TestFlight انوائٹس جو کسی تصدیق شدہ JeetBuzz ای میل سے نہ ہوں۔",
          "- AltStore / Sideloadly ڈاؤن لوڈز — انہیں ایک نامعلوم انٹرپرائز سرٹیفکیٹ پر اعتماد کرنا پڑتا ہے، جو ایک سنگین سیکیورٹی خطرہ ہے۔",
          "## پاکستان کے لیے نوٹس",
          "- ویب ایپ کو JazzCash یا EasyPaisa کے ساتھ جوڑیں — کیشیئر iOS پر JazzCash/EasyPaisa ایپ کا ڈیپ لنک صاف ہینڈل کرتا ہے۔",
          "- پاکستانی موبائل والیٹ ایپس ادائیگی کے بعد JeetBuzz Safari پر واپس لنک کرتی ہیں، نہ کہ ہوم اسکرین ویب ایپ پر۔ ادائیگی کے بعد ڈپازٹ دیکھنے کے لیے ہوم اسکرین آئیکن دستی طور پر دوبارہ کھولیں۔",
        ],
        hi: [
          "## App Store लिस्टिंग क्यों नहीं है",
          "Apple की App Store नीति रियल-मनी गैम्बलिंग ऐप्स को सीमित लाइसेंस वाले अधिकार-क्षेत्रों तक रखती है। JeetBuzz भारत, बांग्लादेश या पाकिस्तान के रिटेल App Stores में सूचीबद्ध नहीं है — इसलिए कोई भी IPA फ़ाइल या TestFlight लिंक जो JeetBuzz iOS ऐप होने का दावा करे, अनधिकृत और असुरक्षित है। इसे बिना-हस्ताक्षरित APK की तरह ही देखें।",
          "## सुरक्षित रास्ता: Safari वेब ऐप",
          "1. Safari खोलें (Chrome या Firefox नहीं — iOS पर केवल Safari ही Add to Home Screen को असली इंस्टॉल-योग्य वेब ऐप के रूप में समर्थन करता है)।",
          "2. ऑफ़िशियल JeetBuzz साइट पर जाएँ।",
          "3. एक बार लॉगिन कर लें ताकि सेशन सेव हो जाए।",
          "4. Safari के नीचे Share बटन दबाएँ।",
          "5. **Add to Home Screen** दबाएँ, नाम JeetBuzz रखें, Add दबाएँ।",
          "6. नए होम-स्क्रीन आइकन से लॉन्च करें — यह बिना Safari एड्रेस बार के फ़ुल-स्क्रीन वेब-ऐप मोड में खुलेगा, नेटिव ऐप की तरह व्यवहार करेगा।",
          "## क्या काम करता है, क्या नहीं",
          "- **काम करता है:** पूरा स्पोर्ट्स बुक, एक्सचेंज, कसीनो, कैशियर, उपलब्ध होने पर लाइव क्रिकेट वीडियो, डिपॉज़िट/विदड्रॉल।",
          "- **सीमित:** Apple, Android की तुलना में ज़्यादा सख़्ती से लंबे बैकग्राउंड समय के बाद लॉगआउट कर देता है — लॉगिन गाइड पास रखें।",
          "- **पुश नोटिफ़िकेशन:** iOS 16.4+ इंस्टॉल किए गए वेब-ऐप्स के लिए वेब पुश समर्थन करता है; पहली लॉगिन पर प्रॉम्प्ट आने पर अनुमति दें।",
          "## ट्रबलशूटिंग",
          "- Add to Home Screen नहीं दिख रहा: आप Safari में नहीं, या Private Browsing मोड में हैं। सामान्य Safari टैब पर जाएँ।",
          "- वेब ऐप बार-बार लॉगआउट हो रही है: JeetBuzz डोमेन के लिए Safari वेबसाइट डेटा क्लियर करें, वेब ऐप दोबारा इंस्टॉल करें, ताज़ा लॉगिन करें।",
          "- लाइव क्रिकेट वीडियो रुक-रुक कर चले: 5GHz Wi-Fi पर जाएँ या Low Power Mode अस्थायी रूप से बंद करें।",
          "## इनसे बचें",
          "- Telegram या थर्ड-पार्टी साइट्स की IPA फ़ाइलें।",
          "- ऐसे TestFlight इनवाइट जो किसी सत्यापित JeetBuzz ईमेल से न हों।",
          "- AltStore / Sideloadly डाउनलोड — इनमें किसी अज्ञात एंटरप्राइज़ सर्टिफ़िकेट पर भरोसा करना पड़ता है, जो एक गंभीर सुरक्षा जोखिम है।",
          "## भारत के लिए नोट्स",
          "- कैशियर पर UPI चुनने पर iOS कभी-कभी UPI ऐप पिकर अपने-आप नहीं खोलता — VPA कॉपी करके अपनी पसंदीदा UPI ऐप (PhonePe / GPay / Paytm / BHIM) में पेस्ट कर दें।",
          "- भुगतान के बाद UPI ऐप JeetBuzz Safari पर लौटाती है, होम-स्क्रीन वेब ऐप पर नहीं। डिपॉज़िट पोस्ट हुआ देखने के लिए होम-स्क्रीन आइकन फिर से खोलें।",
        ],
      }}
      faqsByLocale={{
        ur: [
          { q: "کیا App Store پر JeetBuzz iOS ایپ ہے؟", a: "2026 تک BD/PK/IN App Stores میں نہیں۔ آفیشل iOS تجربہ Safari ویب ایپ ہے — Add to Home Screen کے ذریعے۔ کوئی بھی دوسری چیز غیر آفیشل ہے۔" },
          { q: "کیا Safari ویب ایپ محفوظ ہے؟", a: "ہاں — یہ وہی HTTPS سائٹ لوڈ کرتی ہے جو ڈیسک ٹاپ براؤزر کرتا ہے، Apple کے WebKit سینڈ باکس میں چلتی ہے، اور کسی تھرڈ پارٹی سرٹیفکیٹ پر اعتماد کی ضرورت نہیں۔" },
          { q: "کیا ویب ایپ پش نوٹیفکیشنز سپورٹ کرتی ہے؟", a: "ہاں iOS 16.4 اور بعد میں، ایک بار جب آپ نے اسے ہوم اسکرین پر انسٹال کر لیا اور پہلی لاگ ان پر اجازت دے دی۔" },
          { q: "میں رات کو لاگ آؤٹ کیوں ہو گیا؟", a: "iOS بیٹری بچانے کے لیے بیک گراؤنڈ ویب ایپ سیشنز کو جارحانہ انداز میں معطل کرتا ہے۔ ہوم اسکرین آئیکن دوبارہ دبائیں اور لاگ ان کریں — 'Remember me' فعال کرنے سے مدد ملتی ہے۔" },
        ],
        hi: [
          { q: "क्या App Store पर JeetBuzz iOS ऐप है?", a: "2026 तक BD/PK/IN App Stores में नहीं। आधिकारिक iOS अनुभव Safari वेब ऐप है — Add to Home Screen के ज़रिए। कोई भी अन्य विकल्प अनधिकृत है।" },
          { q: "क्या Safari वेब ऐप सुरक्षित है?", a: "हाँ — यह वही HTTPS साइट लोड करती है जो डेस्कटॉप ब्राउज़र करता है, Apple के WebKit सैंडबॉक्स में चलती है, और किसी थर्ड-पार्टी सर्टिफ़िकेट पर भरोसा करने की ज़रूरत नहीं।" },
          { q: "क्या वेब ऐप पुश नोटिफ़िकेशन समर्थन करती है?", a: "हाँ iOS 16.4 और बाद में, जब आप इसे होम स्क्रीन पर इंस्टॉल कर लें और पहली लॉगिन पर अनुमति दे दें।" },
          { q: "मैं रात को लॉगआउट क्यों हो गया?", a: "iOS बैटरी बचाने के लिए बैकग्राउंड वेब-ऐप सेशन को सख़्ती से सस्पेंड कर देता है। होम-स्क्रीन आइकन फिर दबाएँ और लॉगिन करें — 'Remember me' चालू करने से मदद मिलती है।" },
        ],
      }}
      related={[
        { to: "/mobile-app-guide", title: "Mobile App Guide" },
        { to: "/android-web-app-guide", title: "Android Web App Guide" },
        { to: "/apk-download-guide", title: "Android APK Guide" },
        { to: "/login-security", title: "Login Security" },
      ]}
    />
  ),
});