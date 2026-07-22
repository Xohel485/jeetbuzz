import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/android-web-app-guide";
const TITLE =
  "JeetBuzz Android Web App Guide 2026 - Chrome Install Without APK";
const DESC =
  "Run JeetBuzz on Android without installing the APK in 2026. Chrome Add to Home Screen, PWA install, push notifications and when the web app is actually better than the APK.";

export const Route = createFileRoute("/android-web-app-guide")({
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
      eyebrow="Android Web App"
      title={<>JeetBuzz <span className="gold-text">Android</span> Web App Guide</>}
      subtitle="You don't have to install the APK. Chrome on Android can install the JeetBuzz site as a Progressive Web App, a home-screen icon that opens full-screen with no address bar, no Play Store needed, no unknown-sources permission to enable."
      breadcrumbs={[{ name: "Mobile", path: "/mobile-app-guide" }, { name: "Android Web App", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Web app vs APK, which one's right for you",
        "- Web app (PWA): smaller footprint (~megabytes), updates automatically every time you open it, no manual APK reinstalls, no 'Install from unknown sources' permission. Best for casual / lower-end devices and for users who don't want to manage updates.",
        "- APK: full native install, push notifications even when Chrome is fully closed, slightly faster cold start. Best for daily users.",
        "Both load the exact same site and the exact same account.",
        "## Install on Chrome (recommended)",
        "1. Open Chrome on Android.",
        "2. Visit the official JeetBuzz site.",
        "3. Tap the three-dot menu (top right).",
        "4. Tap Install app (or Add to Home Screen if Install isn't shown).",
        "5. Confirm. A JeetBuzz icon appears on your home screen and in the app drawer.",
        "6. Launch from the icon, it opens full-screen, no Chrome chrome.",
        "## Install on Samsung Internet",
        "Samsung Internet supports the same Add to Home Screen flow via Menu > Add page to > Home screen. The installed icon behaves identically to the Chrome PWA.",
        "## What works",
        "- Full site: sports, exchange, live cricket video, casino, Aviator, cashier.",
        "- Web push notifications (cashier confirmations, settled bets, promo alerts) once you accept the permission prompt on first login.",
        "- Deep links into bKash / Nagad / EasyPaisa / JazzCash / UPI apps from the cashier, same behaviour as the APK.",
        "## What doesn't (vs APK)",
        "- Background notifications when the device hasn't opened Chrome in many days. Android may throttle. Open the web app every few days to keep push delivery reliable.",
        "- Biometric login via Android Credential Manager is hit-or-miss on older Android versions; the APK is more consistent.",
        "## Updates",
        "There's nothing to do. Every time you launch the web app, Chrome silently fetches the latest version. There is no manual update button and no obsolete-version warning.",
        "## Country notes",
        "- Bangladesh: PWA install plus bKash app deep-link is the lightest stack and works well on entry-level Androids common across the country.",
        "- Pakistan: EasyPaisa / JazzCash app intents fire correctly from the PWA.",
        "- India: UPI intents work from the PWA exactly as they do from the APK; PhonePe / GPay / Paytm app pickers appear at cashier confirm.",
        "## Troubleshooting",
        "- 'Install app' option missing: you're on an outdated Chrome or in Incognito mode. Update Chrome and use a normal tab.",
        "- Icon launches Chrome with the address bar: you used Add Shortcut instead of Install. Long-press the icon, remove it, then use Install app from the menu.",
        "- Logged out repeatedly: clear site data for the JeetBuzz domain, reinstall the PWA, log in once. Enable 'Remember me' on the login form.",
      ]}
      faqs={[
        { q: "Is the Android web app safer than the APK?", a: "Both are safe when downloaded from official sources. The web app requires no install-from-unknown-sources permission and updates automatically, which removes the most common attack vector (a stale, tampered APK)." },
        { q: "Does the web app drain more battery?", a: "Slightly less, in practice, the PWA only runs when you open it, while a native APK can keep background services alive. Push notifications work for both with similar battery impact." },
        { q: "Can I have both the APK and the web app installed?", a: "Yes, they're separate icons and don't conflict. They share no local data so each will have its own login state." },
        { q: "What if 'Install app' isn't shown in Chrome?", a: "Update Chrome to the latest version, exit Incognito mode, and reload the JeetBuzz site. If still missing, use the three-dot menu's 'Add to Home Screen' option, which behaves the same on modern Android." },
      ]}
      subtitleByLocale={{
        ur: "آپ کو APK انسٹال کرنے کی ضرورت نہیں۔ Chrome برائے اینڈرائیڈ JeetBuzz سائٹ کو پروگریسو ویب ایپ (PWA) کے طور پر انسٹال کر سکتا ہے, ہوم اسکرین آئیکن جو فل اسکرین کھلتا ہے، نہ Play Store، نہ unknown sources کی اجازت۔",
        hi: "आपको APK इंस्टॉल करने की ज़रूरत नहीं। Android पर Chrome JeetBuzz साइट को Progressive Web App (PWA) के रूप में इंस्टॉल कर सकता है, होम-स्क्रीन आइकन जो फ़ुल-स्क्रीन खुलता है, न Play Store चाहिए, न 'Install from unknown sources' अनुमति।",
      }}
      bodyByLocale={{
        ur: [
          "## ویب ایپ بمقابلہ APK, آپ کے لیے کون سی بہتر ہے؟",
          "- **ویب ایپ (PWA):** چھوٹا فُٹ پرنٹ (چند MB)، ہر بار کھلنے پر خود اپ ڈیٹ، APK دوبارہ انسٹال کرنے کی ضرورت نہیں، 'Install from unknown sources' کی اجازت نہیں۔ کم اسٹوریج والے فونز اور کبھی کبھار کھیلنے والوں کے لیے بہترین۔",
          "- **APK:** مکمل نیٹیو انسٹال، Chrome مکمل بند ہونے پر بھی پش نوٹیفکیشن، تھوڑا تیز کولڈ اسٹارٹ۔ روزانہ کے یوزرز کے لیے بہترین۔",
          "دونوں بالکل وہی سائٹ اور وہی اکاؤنٹ لوڈ کرتے ہیں۔",
          "## Chrome پر انسٹال (تجویز کردہ)",
          "1. اینڈرائیڈ پر Chrome کھولیں۔",
          "2. آفیشل JeetBuzz سائٹ پر جائیں۔",
          "3. اوپر دائیں جانب تین نقطے والا مینو دبائیں۔",
          "4. **Install app** دبائیں (اگر Install نہ دکھے تو Add to Home Screen)۔",
          "5. تصدیق کریں۔ JeetBuzz آئیکن ہوم اسکرین اور ایپ ڈرا میں نظر آئے گا۔",
          "6. آئیکن سے لانچ کریں, فل اسکرین کھلتا ہے، کوئی Chrome ایڈریس بار نہیں۔",
          "## Samsung Internet پر انسٹال",
          "Samsung Internet Menu > Add page to > Home screen کے ذریعے یہی Add to Home Screen فلو سپورٹ کرتا ہے۔ انسٹال شدہ آئیکن بالکل Chrome PWA کی طرح برتاؤ کرتا ہے۔",
          "## کیا کام کرتا ہے",
          "- پوری سائٹ: اسپورٹس، ایکسچینج، لائیو کرکٹ ویڈیو، کیسینو، Aviator، کیشیئر۔",
          "- ویب پش نوٹیفکیشنز (کیشیئر کنفرمیشن، سیٹل شدہ بیٹس، پرومو الرٹس), پہلی بار لاگ ان پر اجازت قبول کرنے کے بعد۔",
          "- کیشیئر سے JazzCash / EasyPaisa / بینک ایپس میں ڈیپ لنکس. APK جیسا ہی برتاؤ۔",
          "## کیا کام نہیں کرتا (APK کے مقابلے میں)",
          "- بیک گراؤنڈ نوٹیفکیشنز جب ڈیوائس نے کئی دنوں سے Chrome نہیں کھولا, اینڈرائیڈ تھروٹل کر سکتا ہے۔ پش ڈلیوری کو قابل اعتماد رکھنے کے لیے ہر چند دن میں ویب ایپ کھولیں۔",
          "- پرانے اینڈرائیڈ ورژنز پر Credential Manager کے ذریعے بایومیٹرک لاگ ان کبھی کبھار ناقابل بھروسہ ہوتا ہے؛ APK زیادہ مستحکم ہے۔",
          "## اپ ڈیٹس",
          "کرنے کو کچھ نہیں۔ ہر بار ویب ایپ لانچ کرنے پر Chrome خاموشی سے تازہ ترین ورژن لے لیتا ہے۔ کوئی دستی اپ ڈیٹ بٹن نہیں اور کوئی پرانی ورژن کی وارننگ نہیں۔",
          "## پاکستان کے لیے نوٹس",
          "- PWA انسٹال + JazzCash/EasyPaisa ایپ ڈیپ لنک سب سے ہلکا اسٹیک ہے اور پاکستان میں عام انٹری لیول اینڈرائیڈ فونز پر اچھا چلتا ہے۔",
          "- موبائل والیٹ انٹینٹس PWA سے بالکل اسی طرح فائر ہوتے ہیں جیسے APK سے۔",
          "## ٹربل شوٹنگ",
          "- 'Install app' آپشن غائب: آپ پرانے Chrome پر ہیں یا Incognito موڈ میں۔ Chrome اپ ڈیٹ کریں اور نارمل ٹیب استعمال کریں۔",
          "- آئیکن Chrome ایڈریس بار کے ساتھ کھلتا ہے: آپ نے Install app کے بجائے Add Shortcut استعمال کیا۔ آئیکن لمبا دبا کر ہٹائیں، پھر مینو سے Install app استعمال کریں۔",
          "- بار بار لاگ آؤٹ: JeetBuzz ڈومین کے لیے سائٹ ڈیٹا کلیئر کریں، PWA دوبارہ انسٹال کریں، ایک بار لاگ ان کریں۔ لاگ ان فارم پر 'Remember me' فعال کریں۔",
        ],
        hi: [
          "## वेब ऐप बनाम APK, आपके लिए कौन सा बेहतर है",
          "- **वेब ऐप (PWA):** छोटा फ़ुटप्रिंट (कुछ MB), हर बार खोलने पर ख़ुद अपडेट, APK दोबारा इंस्टॉल करने की ज़रूरत नहीं, 'Install from unknown sources' अनुमति नहीं। कम स्टोरेज वाले फ़ोन और कभी-कभार खेलने वालों के लिए सबसे अच्छा।",
          "- **APK:** पूरा नेटिव इंस्टॉल, Chrome पूरी तरह बंद होने पर भी पुश नोटिफ़िकेशन, थोड़ा तेज़ कोल्ड स्टार्ट। रोज़ाना के यूज़र के लिए बेहतर।",
          "दोनों एक ही साइट और एक ही अकाउंट लोड करते हैं।",
          "## Chrome पर इंस्टॉल (अनुशंसित)",
          "1. Android पर Chrome खोलें।",
          "2. ऑफ़िशियल JeetBuzz साइट पर जाएँ।",
          "3. ऊपर दाईं ओर तीन-डॉट मेन्यू दबाएँ।",
          "4. **Install app** दबाएँ (अगर Install न दिखे तो Add to Home Screen)।",
          "5. पुष्टि करें। JeetBuzz आइकन होम स्क्रीन और ऐप ड्रॉयर में दिखेगा।",
          "6. आइकन से लॉन्च करें, फ़ुल-स्क्रीन खुलेगा, Chrome का कोई एड्रेस बार नहीं।",
          "## Samsung Internet पर इंस्टॉल",
          "Samsung Internet Menu > Add page to > Home screen से वही Add to Home Screen फ़्लो समर्थित है। इंस्टॉल किया गया आइकन Chrome PWA जैसा ही व्यवहार करता है।",
          "## क्या काम करता है",
          "- पूरी साइट: स्पोर्ट्स, एक्सचेंज, लाइव क्रिकेट वीडियो, कसीनो, Aviator, कैशियर।",
          "- वेब पुश नोटिफ़िकेशन (कैशियर कन्फ़र्मेशन, सेटल्ड बेट्स, प्रोमो अलर्ट), पहली लॉगिन पर अनुमति देने के बाद।",
          "- कैशियर से PhonePe / Google Pay / Paytm / BHIM UPI ऐप में डीप लिंक. APK जैसा ही व्यवहार।",
          "## क्या काम नहीं करता (APK की तुलना में)",
          "- बैकग्राउंड नोटिफ़िकेशन जब डिवाइस ने कई दिनों से Chrome न खोला हो. Android थ्रॉटल कर सकता है। पुश डिलीवरी विश्वसनीय रखने के लिए हर कुछ दिन में वेब ऐप खोलें।",
          "- पुराने Android वर्ज़न पर Credential Manager के ज़रिए बायोमेट्रिक लॉगिन कभी-कभी अविश्वसनीय; APK ज़्यादा स्थिर।",
          "## अपडेट",
          "कुछ करने की ज़रूरत नहीं। हर बार वेब ऐप लॉन्च करने पर Chrome चुपचाप नवीनतम वर्ज़न ले लेता है। न कोई मैनुअल अपडेट बटन, न पुरानी वर्ज़न की चेतावनी।",
          "## भारत के लिए नोट्स",
          "- PWA पर UPI इंटेंट बिल्कुल वैसे ही चलते हैं जैसे APK में, कैशियर पर PhonePe / GPay / Paytm पिकर सामने आता है।",
          "- कम-RAM फ़ोन (3–4 GB) पर PWA APK से हल्का है और बैटरी कम खाता है।",
          "## ट्रबलशूटिंग",
          "- 'Install app' विकल्प नहीं दिख रहा: आप पुराने Chrome पर हैं या Incognito मोड में। Chrome अपडेट करें और सामान्य टैब इस्तेमाल करें।",
          "- आइकन Chrome एड्रेस बार के साथ खुलता है: आपने Install app के बजाय Add Shortcut इस्तेमाल किया। आइकन देर तक दबाकर हटाएँ, फिर मेन्यू से Install app दबाएँ।",
          "- बार-बार लॉगआउट: JeetBuzz डोमेन के लिए साइट डेटा क्लियर करें, PWA दोबारा इंस्टॉल करें, एक बार लॉगिन करें। लॉगिन फ़ॉर्म पर 'Remember me' चालू करें।",
        ],
      }}
      faqsByLocale={{
        ur: [
          { q: "کیا اینڈرائیڈ ویب ایپ APK سے زیادہ محفوظ ہے؟", a: "آفیشل ذرائع سے دونوں محفوظ ہیں۔ ویب ایپ کو install-from-unknown-sources کی اجازت درکار نہیں اور یہ خود اپ ڈیٹ ہوتی ہے، جو سب سے عام حملے (پرانی، چھیڑ چھاڑ شدہ APK) کا راستہ ختم کرتا ہے۔" },
          { q: "کیا ویب ایپ زیادہ بیٹری استعمال کرتی ہے؟", a: "عملی طور پر تھوڑا کم. PWA صرف کھلنے پر چلتی ہے، جبکہ نیٹیو APK بیک گراؤنڈ سروسز چلا سکتی ہے۔ پش نوٹیفکیشنز دونوں پر یکساں بیٹری اثر کے ساتھ کام کرتی ہیں۔" },
          { q: "کیا میں APK اور ویب ایپ دونوں انسٹال کر سکتا ہوں؟", a: "ہاں, یہ الگ آئیکنز ہیں اور آپس میں ٹکراؤ نہیں۔ ان میں لوکل ڈیٹا شیئر نہیں ہوتا، اس لیے ہر ایک کی اپنی لاگ ان حالت ہو گی۔" },
          { q: "اگر Chrome میں 'Install app' نہ دکھے؟", a: "Chrome کو تازہ ترین ورژن میں اپ ڈیٹ کریں، Incognito موڈ سے باہر آئیں، اور JeetBuzz سائٹ ری لوڈ کریں۔ اگر پھر بھی غائب ہو تو تین نقطے والے مینو سے 'Add to Home Screen' استعمال کریں, جدید اینڈرائیڈ پر یہ یکساں کام کرتا ہے۔" },
        ],
        hi: [
          { q: "क्या Android वेब ऐप APK से ज़्यादा सुरक्षित है?", a: "ऑफ़िशियल स्रोतों से दोनों सुरक्षित हैं। वेब ऐप को install-from-unknown-sources अनुमति नहीं चाहिए और यह ख़ुद अपडेट होती है, जिससे सबसे आम हमले (पुरानी, छेड़छाड़ की हुई APK) का रास्ता ख़त्म हो जाता है।" },
          { q: "क्या वेब ऐप ज़्यादा बैटरी खाती है?", a: "व्यावहारिक रूप से थोड़ी कम. PWA केवल खोलने पर चलती है, जबकि नेटिव APK बैकग्राउंड सर्विसेज़ चला सकती है। पुश नोटिफ़िकेशन दोनों पर लगभग समान बैटरी असर के साथ काम करते हैं।" },
          { q: "क्या मैं APK और वेब ऐप दोनों इंस्टॉल कर सकता हूँ?", a: "हाँ, ये अलग आइकन हैं और टकराते नहीं। इनमें लोकल डेटा साझा नहीं होता, इसलिए दोनों की अपनी लॉगिन स्थिति होगी।" },
          { q: "अगर Chrome में 'Install app' न दिखे?", a: "Chrome को नवीनतम वर्ज़न पर अपडेट करें, Incognito मोड से बाहर आएँ और JeetBuzz साइट रीलोड करें। अगर फिर भी न दिखे तो तीन-डॉट मेन्यू से 'Add to Home Screen' इस्तेमाल करें, आधुनिक Android पर यह एक जैसा काम करता है।" },
        ],
      }}
      related={[
        { to: "/apk-download-guide", title: "APK Download Guide" },
        { to: "/mobile-app-guide", title: "Mobile App Guide" },
        { to: "/ios-app-guide", title: "iOS App Guide" },
        { to: "/login-security", title: "Login Security" },
      ]}
    />
  ),
});