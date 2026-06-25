import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/cricket-exchange-guide";
const TITLE =
  "JeetBuzz Cricket Exchange Guide 2026 - Back, Lay & IPL/BPL/PSL Markets";
const DESC =
  "JeetBuzz cricket exchange explained for 2026 — back vs lay bets, commission, in-play liability and how IPL, BPL and PSL markets work for players in Bangladesh, India and Pakistan.";

export const Route = createFileRoute("/cricket-exchange-guide")({
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
      eyebrow="Cricket Exchange"
      title={<>JeetBuzz <span className="gold-text">Cricket Exchange</span> Guide</>}
      subtitle="The exchange is not a sportsbook. You're betting against other users, not against JeetBuzz — and that changes how odds, liability and commission work. This is the practical version for BPL, IPL and PSL bettors."
      breadcrumbs={[{ name: "Sports", path: "/sports-betting" }, { name: "Cricket Exchange", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Exchange vs sportsbook — the actual difference",
        "On the sportsbook, JeetBuzz sets the price and takes the other side of your bet. On the exchange, other users set the prices: when you Back a team, somebody else is Laying it. JeetBuzz takes a small commission on net winnings instead of building margin into the odds, which is why exchange prices are usually sharper than book prices on the same match.",
        "## Back and Lay in plain words",
        "- Back = bet that an outcome WILL happen (e.g. back India to win at 1.85). Wins the stake × (odds-1) if correct.",
        "- Lay = bet that an outcome will NOT happen (e.g. lay India at 1.85). You collect the backer's stake if India loses or draws, but if India wins you owe stake × (odds-1) — that exposure is called liability and is shown before you confirm.",
        "## Commission",
        "Exchanges charge commission on net winnings per market, not on losses. Treat it as a small drag on every winning bet rather than a fee per click. Confirm the current commission rate on the JeetBuzz exchange info page before you start — it is shown in the exchange UI.",
        "## In-play and matched odds",
        "Prices on the exchange only fill if a counterparty matches them. In a quiet market your back/lay may sit unmatched. In a fast in-play moment (wicket, six, last over) the price you tap may move before it locks — JeetBuzz will offer the new price; you can accept or cancel.",
        "## League-specific framing",
        "- BPL (Bangladesh Premier League): late January / early February window. Pitches at Mirpur tend to favour spin, making mid-innings totals markets the most liquid on the exchange.",
        "- IPL (India): March-May. Highest exchange liquidity of any cricket event of the year — depth is deep enough that even mid-stake players move very little.",
        "- PSL (Pakistan Super League): February-March window. Lahore and Multan tracks reward batting; total runs and top-batter markets get more action than match odds late in the tournament.",
        "## Bankroll & responsible play",
        "Lay liability is what blows accounts up. A lay at 5.0 with 1,000 stake exposes you to 4,000 if the outcome wins. Set max liability per market, not just stake per bet.",
        "## Payments for exchange play",
        "Same rails as the rest of JeetBuzz: bKash/Nagad/Rocket (BD), EasyPaisa/JazzCash (PK), UPI/PhonePe/GPay/Paytm (IN). Withdrawals only return to the rail you funded from.",
      ]}
      subtitleByLocale={{
        bn: "এক্সচেঞ্জ সাধারণ স্পোর্টসবুক নয় — এখানে আপনি অন্য ব্যবহারকারীর বিরুদ্ধে বাজি ধরছেন, JeetBuzz-এর বিরুদ্ধে নয়। ফলে অডস, লায়াবিলিটি ও কমিশনের নিয়ম আলাদা। BPL, IPL ও PSL বেটরদের জন্য ব্যবহারিক বাংলা সংস্করণ।",
        ur: "Exchange عام Sportsbook نہیں — یہاں آپ JeetBuzz کے بجائے دوسرے صارفین کے خلاف بیٹ لگاتے ہیں۔ اسی لیے آڈز، Liability اور Commission کے اصول مختلف ہیں۔ PSL، IPL اور BPL کے پاکستانی بیٹرز کے لیے عملی اردو رہنمائی۔",
        hi: "एक्सचेंज एक सामान्य sportsbook नहीं है — यहाँ आप JeetBuzz के ख़िलाफ़ नहीं, बल्कि दूसरे यूज़र्स के ख़िलाफ़ बेट लगाते हैं। इसी वजह से ऑड्स, Liability और Commission के नियम अलग हैं। IPL, Ranji Trophy और अंतरराष्ट्रीय क्रिकेट खेलने वाले भारतीय बेटर्स के लिए व्यावहारिक हिंदी गाइड।",
      }}
      bodyByLocale={{
        bn: [
          "## এক্সচেঞ্জ বনাম স্পোর্টসবুক — মূল পার্থক্য",
          "স্পোর্টসবুকে JeetBuzz নিজেই অডস ঠিক করে এবং আপনার বেটের বিপরীত পক্ষ নেয়। এক্সচেঞ্জে অডস ঠিক করে অন্য ব্যবহারকারীরা — আপনি যখন কোনো দলকে **Back** করেন, অন্য কেউ তাকে **Lay** করছে। JeetBuzz মার্জিন না নিয়ে নেট উইনিংয়ের উপর সামান্য কমিশন নেয়, তাই একই ম্যাচে এক্সচেঞ্জের দাম সাধারণত বুকের চেয়ে শার্প হয়।",
          "## Back ও Lay — সহজ ভাষায়",
          "- **Back** = একটি ঘটনা ঘটবে এই বাজি (যেমন ভারতকে ১.৮৫ অডসে Back)। ঠিক হলে = স্টেক × (odds-১) লাভ।",
          "- **Lay** = একটি ঘটনা ঘটবে না এই বাজি (যেমন ভারতকে ১.৮৫-এ Lay)। ভারত হারলে বা ড্র হলে আপনি ব্যাকারের স্টেক পাবেন; কিন্তু ভারত জিতলে স্টেক × (odds-১) দিতে হবে — এই এক্সপোজারকে **লায়াবিলিটি** বলে, কনফার্ম করার আগেই দেখানো হয়।",
          "## কমিশন",
          "এক্সচেঞ্জ কমিশন নেয় প্রতিটি মার্কেটের নেট উইনিং-এর উপর — ক্ষতিতে নয়। এটি প্রতিটি জিতন্ত বেটের উপর সামান্য টানা হিসেবে দেখুন, ক্লিক-প্রতি ফি নয়। JeetBuzz এক্সচেঞ্জ ইনফো পেজে বর্তমান কমিশন রেট দেখানো থাকে।",
          "## ইন-প্লে ও Matched Odds",
          "এক্সচেঞ্জে অডস তখনই পূরণ হয় যখন বিপরীত পক্ষ ম্যাচ করে। শান্ত মার্কেটে আপনার Back/Lay unmatched হয়ে বসে থাকতে পারে। উইকেট, ছক্কা বা শেষ ওভারের মতো দ্রুত মুহূর্তে ট্যাপ করার আগেই দাম সরে যেতে পারে — JeetBuzz নতুন দামটি অফার করে, আপনি গ্রহণ বা বাতিল করতে পারেন।",
          "## লিগ-ভিত্তিক প্রেক্ষাপট",
          "- **BPL (বাংলাদেশ):** জানুয়ারির শেষ / ফেব্রুয়ারির শুরু। মিরপুরের পিচ স্পিন-বান্ধব, তাই মিড-ইনিংস টোটাল মার্কেটে এক্সচেঞ্জে সবচেয়ে বেশি লিকুইডিটি।",
          "- **IPL (ভারত):** মার্চ–মে। বছরের সবচেয়ে গভীর ক্রিকেট এক্সচেঞ্জ — মধ্য-স্টেক প্লেয়ারও দাম প্রায় নাড়াতে পারে না।",
          "- **PSL (পাকিস্তান):** ফেব্রুয়ারি–মার্চ। লাহোর ও মুলতানের পিচ ব্যাটিং-বান্ধব; টুর্নামেন্ট শেষের দিকে টপ-ব্যাটার ও টোটাল রান মার্কেট বেশি অ্যাকশন পায়।",
          "## ব্যাংকরোল ও দায়িত্বশীল প্লে",
          "Lay লায়াবিলিটিই অ্যাকাউন্ট ফাটানোর প্রধান কারণ। ৫.০ অডসে ১,০০০ স্টেকের Lay-তে ৪,০০০-এর এক্সপোজার তৈরি হয়। শুধু স্টেক নয়, প্রতিটি মার্কেটে সর্বোচ্চ লায়াবিলিটির সীমা নির্ধারণ করুন।",
          "## পেমেন্ট",
          "একই রেইল — [bKash](/bkash-guide), [Nagad](/nagad-guide), [Rocket](/rocket-guide), USDT TRC20। উইথড্রয়াল সাধারণত যেই রেইল দিয়ে ডিপোজিট করেছেন সেটিতেই ফেরত আসে।",
        ],
        ur: [
          "## Exchange بمقابلہ Sportsbook — اصل فرق",
          "Sportsbook میں JeetBuzz خود قیمت طے کرتا ہے اور آپ کی بیٹ کا مخالف فریق بن جاتا ہے۔ Exchange میں قیمت دوسرے صارفین طے کرتے ہیں — جب آپ کسی ٹیم کو **Back** کرتے ہیں تو کوئی اور اُسے **Lay** کر رہا ہوتا ہے۔ JeetBuzz آڈز میں مارجن ڈالنے کے بجائے نیٹ جیت پر معمولی Commission لیتا ہے، اسی لیے ایک ہی میچ پر Exchange کی قیمت عام طور پر Book سے زیادہ شارپ ہوتی ہے۔",
          "## Back اور Lay — سادہ الفاظ میں",
          "- **Back** = ایک واقعہ ہو گا (مثلاً پاکستان کو 1.85 پر Back)۔ درست ہونے پر = اسٹیک × (آڈز−1) منافع۔",
          "- **Lay** = ایک واقعہ نہیں ہو گا (مثلاً پاکستان کو 1.85 پر Lay)۔ پاکستان ہار جائے یا ڈرا ہو تو آپ Backer کا اسٹیک حاصل کرتے ہیں؛ لیکن پاکستان جیت جائے تو اسٹیک × (آڈز−1) ادا کرنا ہو گا — اس exposure کو **Liability** کہتے ہیں اور یہ کنفرم سے پہلے دکھائی جاتی ہے۔",
          "## Commission",
          "Exchange ہر مارکیٹ کی نیٹ جیت پر Commission لیتا ہے — نقصان پر نہیں۔ اسے ہر جیتنے والی بیٹ پر ایک معمولی drag سمجھیں، نہ کہ فی کلک فیس۔ JeetBuzz Exchange کے انفو سیکشن میں موجودہ Commission ریٹ ظاہر ہوتا ہے۔",
          "## In-Play اور Matched Odds",
          "Exchange پر آڈز اُسی وقت بھر تے ہیں جب کوئی مخالف فریق میچ کرے۔ سُست مارکیٹ میں آپ کی Back/Lay unmatched رہ سکتی ہے۔ وکٹ، چھکا یا آخری اوور جیسے تیز لمحات میں ٹیپ کرنے سے پہلے قیمت بدل سکتی ہے — JeetBuzz نئی قیمت آفر کرتا ہے، آپ قبول یا منسوخ کر سکتے ہیں۔",
          "## لیگ کے لحاظ سے سیاق و سباق",
          "- **PSL (پاکستان):** فروری–مارچ۔ لاہور اور ملتان کی پچز بیٹنگ کے حق میں؛ ٹورنامنٹ کے اختتام پر Total Runs اور Top Batter مارکیٹس کو میچ آڈز سے زیادہ ایکشن ملتا ہے۔",
          "- **IPL (انڈیا):** مارچ–مئی۔ سال کا گہرا ترین کرکٹ Exchange — درمیانے اسٹیک والے کھلاڑی بھی قیمت تقریباً ہلا نہیں سکتے۔",
          "- **BPL (بنگلہ دیش):** جنوری/فروری۔ میرپور کی پچ اسپن کے حق میں ہوتی ہے، اس لیے Mid-innings Total مارکیٹ سب سے لیکویڈ رہتی ہے۔",
          "## بینک رول اور ذمہ دار پلے",
          "Lay Liability اکاؤنٹ تباہ کرنے کی بڑی وجہ ہے۔ 5.0 آڈز پر 1,000 PKR اسٹیک کی Lay پر 4,000 PKR exposure بنتا ہے۔ صرف اسٹیک نہیں، ہر مارکیٹ پر Maximum Liability کی حد بھی مقرر کریں۔",
          "## Exchange کے لیے ادائیگیاں",
          "وہی ریلز — [JazzCash](/jazzcash-guide)، [EasyPaisa](/easypaisa-guide) اور USDT TRC20۔ Withdrawal عام طور پر اُسی ریل پر واپس ہوتی ہے جس سے ڈپازٹ کیا ہو۔",
        ],
        hi: [
          "## Exchange बनाम Sportsbook — असली अंतर",
          "Sportsbook में JeetBuzz स्वयं क़ीमत तय करता है और आपकी बेट के विपरीत पक्ष में खड़ा होता है। Exchange में क़ीमत दूसरे यूज़र्स तय करते हैं — जब आप किसी टीम को **Back** करते हैं तो कोई और उसे **Lay** कर रहा होता है। JeetBuzz ऑड्स में margin जोड़ने के बजाय net winnings पर मामूली Commission लेता है, इसी वजह से एक ही मैच पर Exchange की क़ीमत आमतौर पर Book से अधिक शार्प होती है।",
          "## Back और Lay — आसान शब्दों में",
          "- **Back** = कोई घटना होगी, इस पर बेट (जैसे India को 1.85 पर Back)। सही होने पर लाभ = स्टेक × (ऑड्स − 1)।",
          "- **Lay** = घटना नहीं होगी, इस पर बेट (जैसे India को 1.85 पर Lay)। India हारे या मैच टाई हो तो आप backer का स्टेक प्राप्त करते हैं; लेकिन India जीत जाए तो स्टेक × (ऑड्स − 1) देना होगा — इस exposure को **Liability** कहते हैं और यह confirm करने से पहले स्क्रीन पर दिखाया जाता है।",
          "## Commission",
          "Exchange हर मार्केट की net winnings पर Commission लेता है — नुक़सान पर नहीं। इसे हर जीतने वाली बेट पर एक हल्का drag समझें, न कि per-click फ़ीस। JeetBuzz Exchange के info section में वर्तमान Commission rate दिखाया जाता है — सेशन शुरू करने से पहले एक बार ज़रूर देख लें।",
          "## In-Play और Matched Odds",
          "Exchange पर ऑड्स तभी भरते हैं जब कोई counterparty उन्हें match करे। शांत मार्केट में आपकी Back/Lay unmatched पड़ी रह सकती है। विकेट, छक्का या आख़िरी ओवर जैसे तेज़ in-play पलों में आपके tap करने से पहले क़ीमत बदल सकती है — JeetBuzz नया भाव ऑफ़र करता है, आप स्वीकार या रद्द कर सकते हैं।",
          "## लीग के अनुसार संदर्भ",
          "- **IPL (इंडिया):** मार्च–मई। साल की सबसे गहरी क्रिकेट Exchange — मध्यम-स्टेक खिलाड़ी भी क़ीमत लगभग नहीं हिला पाते, इसलिए नए बेटर्स को यहाँ liquidity का अनुभव सबसे अच्छा मिलता है।",
          "- **अंतरराष्ट्रीय क्रिकेट / T20 World Cup:** India की पारी के बीच के Total Runs और Top Batsman मार्केट्स पर अच्छी depth रहती है।",
          "- **Ranji Trophy / घरेलू क्रिकेट:** liquidity सीमित होती है — बड़े स्टेक्स लगाने पर slippage बढ़ता है, छोटे साइज़ ही समझदारी है।",
          "## बैंकरोल और ज़िम्मेदार खेल",
          "Lay Liability ही ज़्यादातर खातों के टूटने की वजह है। 5.0 ऑड्स पर ₹1,000 स्टेक की Lay पर ₹4,000 का exposure बनता है। सिर्फ़ स्टेक नहीं, हर मार्केट पर Maximum Liability की सीमा भी तय करें — [Responsible Gaming](/responsible-gaming) के सुझाव पढ़ें।",
          "## Exchange के लिए भुगतान",
          "वही rails — [UPI](/upi-guide), [PhonePe](/phonepe-guide), Google Pay और [Paytm](/paytm-guide)। Withdrawal आमतौर पर उसी rail पर लौटती है जिससे डिपॉज़िट किया गया हो; ज़रूरत पड़ने पर [Withdrawal Guide](/withdrawal-guide) देखें।",
        ],
      }}
      faqs={[
        { q: "Is the exchange better odds than the sportsbook?", a: "Usually yes on liquid cricket markets like IPL — exchange prices have no built-in margin, only a commission on net winnings. On thin markets the exchange can be worse because depth is shallow." },
        { q: "What's the difference between back and lay?", a: "Back = the outcome happens; lay = the outcome does not happen. Lay bets carry liability greater than the stake at any odds above 2.0, so confirm liability before clicking." },
        { q: "Can I trade in-play (cash out before the match ends)?", a: "Yes — open a back, then place a lay at lower odds on the same selection (or vice versa) to lock a green book. JeetBuzz also offers Cash Out on supported markets when a counter-price exists." },
        { q: "Does the welcome bonus apply to exchange bets?", a: "Most operators exclude exchange turnover from sports welcome wagering because the house edge is commission, not margin. Read the bonus T&Cs in the cashier before opting in." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "এক্সচেঞ্জের অডস কি স্পোর্টসবুকের চেয়ে ভালো?", a: "IPL-এর মতো লিকুইড মার্কেটে সাধারণত হ্যাঁ — এক্সচেঞ্জে অডসে মার্জিন নেই, শুধু নেট উইনিং-এ কমিশন। ছোট মার্কেটে depth কম থাকায় কখনো বুক বেশি প্রতিযোগিতামূলক হতে পারে।" },
          { q: "Back ও Lay-এর পার্থক্য কী?", a: "Back = ঘটনা ঘটবে; Lay = ঘটনা ঘটবে না। ২.০-এর বেশি যেকোনো অডসে Lay বেটের লায়াবিলিটি স্টেকের চেয়ে বেশি — কনফার্ম করার আগে দেখানো লায়াবিলিটি অবশ্যই পড়ুন।" },
          { q: "ম্যাচ শেষ হওয়ার আগে কি ‘ট্রেড’ করে লক করা যায়?", a: "হ্যাঁ — একটি Back খোলার পর একই সিলেকশনে কম অডসে Lay (বা বিপরীত) দিলে green book লক হয়। JeetBuzz সমর্থিত মার্কেটে Cash Out অপশনও দেয়।" },
          { q: "ওয়েলকাম বোনাস কি এক্সচেঞ্জ বেটে কাজ করে?", a: "বেশিরভাগ অপারেটর এক্সচেঞ্জ টার্নওভার ওয়েলকাম ওয়েজারিং থেকে বাদ দেয়, কারণ এখানে হাউস এজ মার্জিন নয় — কমিশন। অপ্ট-ইন করার আগে শর্ত পড়ুন।" },
          { q: "Unmatched বেট কতক্ষণ পর্যন্ত থাকে?", a: "মার্কেট খোলা থাকা পর্যন্ত — মিলে গেলে এক্টিভ হয়, ম্যাচ শুরু হলে বা মার্কেট suspend হলে বাতিল হয়।" },
        ],
        ur: [
          { q: "کیا Exchange کے آڈز Sportsbook سے بہتر ہیں؟", a: "IPL جیسی لیکویڈ مارکیٹس میں عموماً ہاں — Exchange کے آڈز میں مارجن نہیں ہوتا، صرف نیٹ جیت پر Commission۔ پتلی مارکیٹس میں depth کم ہونے سے Book زیادہ مسابقتی ہو سکتا ہے۔" },
          { q: "Back اور Lay میں کیا فرق ہے؟", a: "Back = واقعہ ہو گا؛ Lay = واقعہ نہیں ہو گا۔ 2.0 سے زائد کسی بھی آڈز پر Lay کی Liability اسٹیک سے زیادہ ہوتی ہے — کنفرم کرنے سے پہلے ظاہر شدہ Liability ضرور پڑھیں۔" },
          { q: "کیا میچ ختم ہونے سے پہلے ‘ٹریڈ’ کر کے Lock کیا جا سکتا ہے؟", a: "ہاں — Back کھولنے کے بعد اسی Selection پر کم آڈز پر Lay (یا اس کے برعکس) لگانے سے Green Book Lock ہو جاتا ہے۔ JeetBuzz سپورٹڈ مارکیٹس میں Cash Out بھی فراہم کرتا ہے۔" },
          { q: "کیا Welcome Bonus Exchange بیٹس پر لاگو ہوتا ہے؟", a: "زیادہ تر آپریٹرز Exchange ٹرن اوور کو Welcome Wagering سے خارج کرتے ہیں، کیونکہ House Edge مارجن نہیں — Commission ہے۔ Opt-in سے پہلے شرائط پڑھیں۔" },
          { q: "Unmatched بیٹ کب تک رہتی ہے؟", a: "جب تک مارکیٹ کھلی رہے — میچ ہوتے ہی فعال، اور میچ شروع ہونے یا مارکیٹ suspend ہونے پر منسوخ۔" },
        ],
        hi: [
          { q: "क्या Exchange के ऑड्स Sportsbook से बेहतर होते हैं?", a: "IPL जैसी liquid मार्केट्स में आमतौर पर हाँ — Exchange के ऑड्स में margin नहीं होता, केवल net winnings पर Commission लगता है। पतली मार्केट्स में depth कम होने से Book कभी-कभी अधिक प्रतिस्पर्धी हो सकता है।" },
          { q: "Back और Lay में क्या फ़र्क है?", a: "Back = घटना होगी; Lay = घटना नहीं होगी। 2.0 से अधिक किसी भी ऑड्स पर Lay की Liability स्टेक से अधिक होती है — confirm करने से पहले स्क्रीन पर दिखाई गई Liability अवश्य पढ़ें।" },
          { q: "क्या मैच ख़त्म होने से पहले ‘ट्रेड’ करके लॉक किया जा सकता है?", a: "हाँ — Back खोलने के बाद उसी selection पर कम ऑड्स पर Lay (या इसके विपरीत) लगाने से Green Book lock हो जाता है। JeetBuzz supported markets में Cash Out विकल्प भी देता है, यदि counter-price मौजूद हो।" },
          { q: "क्या Welcome Bonus Exchange बेट्स पर लागू होता है?", a: "ज़्यादातर ऑपरेटर Exchange turnover को Welcome wagering से बाहर रखते हैं, क्योंकि यहाँ House Edge margin नहीं — Commission है। Opt-in से पहले शर्तें अवश्य पढ़ें।" },
          { q: "Unmatched बेट कितनी देर तक रहती है?", a: "जब तक मार्केट खुली है — match होते ही active, और मैच शुरू होने या मार्केट suspend होने पर रद्द हो जाती है।" },
        ],
      }}
      related={[
        { to: "/sports-betting", title: "Sports Betting" },
        { to: "/live-cricket-betting", title: "Live Cricket Betting" },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
      ]}
    />
  ),
});