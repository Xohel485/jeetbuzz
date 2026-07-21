import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/agent-earning-guide";
const TITLE =
  "JeetBuzz Agent & Affiliate Earning Guide 2026 - Commission, Payouts & Tools";
const DESC =
  "How to earn as a JeetBuzz agent or affiliate in 2026, commission models, sub-affiliate tiers, payout rails for BD/PK/IN, marketing rules and what gets a partner account suspended.";

export const Route = createFileRoute("/agent-earning-guide")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH)...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Agent & Affiliate"
      title={<>JeetBuzz <span className="gold-text">Agent</span> & Affiliate Earning Guide</>}
      titleByLocale={{
        bn: <>JeetBuzz <span className="gold-text">এজেন্ট</span> ও Affiliate আয় গাইড</>,
        ur: <>JeetBuzz <span className="gold-text">ایجنٹ</span> اور Affiliate آمدنی گائیڈ</>,
        hi: <>JeetBuzz <span className="gold-text">एजेंट</span> और Affiliate आय गाइड</>,
      }}
      subtitle="Two different programs sit under one umbrella: the affiliate program (you send traffic, you get paid on net player loss) and the agent program (you onboard and manage players directly). This guide explains both honestly."
      subtitleByLocale={{
        bn: "একই ছাতার নিচে দুটি আলাদা প্রোগ্রাম: Affiliate (ট্রাফিক পাঠান, প্লেয়ারের নেট লসের ওপর কমিশন) এবং Agent (নিজে প্লেয়ার অনবোর্ড ও পরিচালনা)। দুটির পার্থক্য সরল বাংলায়।",
        ur: "ایک ہی چھتری کے نیچے دو مختلف پروگرام: Affiliate (آپ ٹریفک بھیجتے ہیں، کھلاڑی کے نیٹ نقصان پر کمیشن) اور Agent (آپ خود کھلاڑیوں کو onboard اور منظم کرتے ہیں)۔ دونوں کا فرق سادہ اردو میں۔",
        hi: "एक ही छतरी के नीचे दो अलग प्रोग्राम: Affiliate (आप ट्रैफ़िक भेजते हैं, खिलाड़ी के नेट नुक़सान पर कमीशन) और Agent (आप ख़ुद खिलाड़ियों को onboard और प्रबंधित करते हैं)। दोनों का फ़र्क़ सरल हिंदी में।",
      }}
      breadcrumbs={[{ name: "Affiliate", path: "/affiliate-program" }, { name: "Earning Guide", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Affiliate vs agent, pick the right model",
        "Affiliate: you publish content (site, channel, group), share a tracked link, and earn a revenue-share % on the net gaming revenue (NGR) of players who sign up via your link.",
        "Agent: you recruit and onboard players directly, often handle deposits/withdrawals via local rails, and earn a higher commission cut in exchange for more operational work and personal liability for your network.",
        "Most publishers should start as an affiliate. The agent path makes sense only if you already have an offline player network and can responsibly manage cashflow.",
        "## Commission models you'll see",
        "- Revenue share (RevShare): % of net player loss, paid monthly. The standard for content affiliates.",
        "- CPA: fixed payout per qualifying first-time depositor.",
        "- Hybrid: smaller CPA + smaller RevShare. Good for predictable cashflow.",
        "- Sub-affiliate: a small % of commissions earned by affiliates you refer.",
        "Exact percentages, tiers and qualification thresholds change by season and country, confirm the current schedule inside the JeetBuzz affiliate dashboard before publishing claims.",
        "## Payout rails",
        "- Bangladesh: bKash, Nagad and bank transfer are the most common payout rails for partners.",
        "- Pakistan: EasyPaisa, JazzCash and bank.",
        "- India: UPI and bank transfer.",
        "- Cross-border: USDT (TRC-20) is widely supported for larger partners.",
        "Payouts are typically monthly with a minimum threshold. The threshold and processing window are shown in the partner dashboard.",
        "## Marketing rules, what will get you suspended",
        "- Bidding on the JeetBuzz brand name in Google Ads.",
        "- Spam (cold WhatsApp/SMS blasts to lists you don't own).",
        "- Targeting minors or jurisdictions where online betting is restricted.",
        "- Promising guaranteed wins or fake bonuses.",
        "- Cookie stuffing, iframe stuffing, or any non-disclosed redirect.",
        "Affiliate disclosure is required, see our Affiliate Disclosure page for the language we use.",
        "## Tools you actually need",
        "- Tracked links (built into the dashboard).",
        "- A simple landing page with a real review, not a redirect.",
        "- Postback / S2S for paid traffic if you scale beyond organic.",
        "- A spreadsheet that reconciles dashboard NGR against your invoiced commission monthly.",
        "## Realistic earnings expectations",
        "Content affiliates with focused South Asia traffic typically see most revenue from a small number of high-LTV players, not from raw signup volume. One genuine cricket-betting reader who plays seasonally is worth dozens of one-deposit-and-gone signups.",
        "## Program details & commission math",
        "Ready to move from theory to numbers? The [JeetBuzz affiliate program](/affiliate-program) page has the tier requirements and terms, and the [JeetBuzz affiliate commission](/jeetbuzz-affiliate-commission) page shows the weekly NGR formula, carryover rules and payout window.",
      ]}
      bodyByLocale={{
        bn: [
          "## Affiliate বনাম Agent, কোনটি আপনার জন্য?",
          "**Affiliate:** নিজের ব্লগ, YouTube চ্যানেল, Telegram বা Facebook পেজে কনটেন্ট প্রকাশ করেন, ট্র্যাকড লিংক শেয়ার করেন এবং সেই লিংক দিয়ে রেজিস্টার করা প্লেয়ারদের **নেট গেমিং রেভিনিউ (NGR)**-এর একটি অংশ পান।",
          "**Agent:** নিজে প্লেয়ার onboarding করেন, প্রায়ই স্থানীয় bKash/Nagad লেনদেন পরিচালনা করেন এবং আপনার নেটওয়ার্কের জন্য ব্যক্তিগত দায়িত্ব নেন, বিনিময়ে কমিশনের অংশও তুলনামূলক বেশি।",
          "বেশিরভাগ পাবলিশারের শুরু করা উচিত Affiliate হিসেবে। Agent মডেল শুধু তখনই উপযোগী, যখন আপনার আগে থেকেই অফলাইন প্লেয়ার নেটওয়ার্ক আছে এবং দায়িত্বশীলভাবে ক্যাশফ্লো সামলাতে পারবেন।",
          "## কমিশন মডেলগুলো চিনুন",
          "- **RevShare (Revenue Share):** প্লেয়ারের নেট লসের শতাংশ, মাসিক পেআউট। কনটেন্ট অ্যাফিলিয়েটদের জন্য মান।",
          "- **CPA:** প্রতিটি যোগ্য FTD (প্রথম ডিপোজিট) এর বিপরীতে নির্দিষ্ট পেআউট।",
          "- **Hybrid:** ছোট CPA + ছোট RevShare, অনুমেয় ক্যাশফ্লোর জন্য ভালো।",
          "- **Sub-affiliate:** আপনি যাকে রেফার করেছেন, তার আয়ের ছোট একটি অংশ।",
          "নির্দিষ্ট শতাংশ, tier এবং যোগ্যতার শর্ত অফার ও দেশের ওপর নির্ভর করে বদলায়, প্রকাশের আগে JeetBuzz Affiliate ড্যাশবোর্ডে চলমান schedule যাচাই করুন। কোনো নির্দিষ্ট আয় আগে থেকে গ্যারান্টি দেওয়া যাবে না।",
          "## পেআউট রেল",
          "- **বাংলাদেশ:** bKash, Nagad ও ব্যাংক ট্রান্সফার সবচেয়ে কমন। ছোট প্রকাশকদের জন্য MFS সাধারণত সবচেয়ে সুবিধাজনক।",
          "- **পাকিস্তান:** JazzCash, EasyPaisa, ব্যাংক।",
          "- **ভারত:** UPI ও ব্যাংক।",
          "- **ক্রস-বর্ডার:** বড় পার্টনারদের জন্য USDT (TRC-20) বহুল ব্যবহৃত।",
          "পেআউট সাধারণত নির্দিষ্ট সিডিউলে এবং মিনিমাম থ্রেশহোল্ড পার করলে হয়। সঠিক সময় ও মিনিমাম অফিসিয়াল ড্যাশবোর্ডে দেখানো হয়।",
          "## বিপণনের শৃঙ্খলা, যা করলে অ্যাকাউন্ট সাসপেন্ড হতে পারে",
          "- Google Ads-এ JeetBuzz ব্র্যান্ড কীওয়ার্ডে বিড।",
          "- অপ্রাসঙ্গিক WhatsApp/SMS spam বা ক্রয়কৃত লিস্টে cold message।",
          "- ১৮-এর কম বয়সী বা যেসব দেশে অনলাইন বেটিং নিষিদ্ধ সেখানে টার্গেটিং।",
          "- নিশ্চিত জিতের প্রতিশ্রুতি বা ভুয়া বোনাস বিজ্ঞাপন।",
          "- Cookie stuffing, iframe stuffing বা undisclosed redirect।",
          "প্রকাশ করা প্রতিটি কনটেন্টে স্পষ্ট affiliate disclosure থাকা জরুরি, আমাদের [Affiliate Disclosure](/affiliate-disclosure) পেজে ব্যবহৃত ভাষা দেখে নিন।",
          "## আসল টুল যেগুলো লাগবেই",
          "- ড্যাশবোর্ডের ট্র্যাকড লিংক ও sub-ID।",
          "- একটি সাধারণ ল্যান্ডিং পেজ, সত্যিকারের রিভিউ, শুধু redirect নয়।",
          "- পেইড ট্রাফিক স্কেল করলে S2S/postback সেটআপ।",
          "- একটি স্প্রেডশিট, যা প্রতি মাসে ড্যাশবোর্ডের NGR-এর সঙ্গে আপনার ইনভয়েস কমিশন মেলায়।",
          "## বাস্তবিক আয়ের প্রত্যাশা",
          "দক্ষিণ এশিয়ার ফোকাসড কনটেন্ট অ্যাফিলিয়েটদের আয়ের বেশিরভাগ আসে অল্প সংখ্যক উচ্চ-LTV প্লেয়ার থেকে, শুধু সাইনআপের সংখ্যা থেকে নয়। একজন প্রকৃত ক্রিকেট-বেটিং পাঠক যিনি BPL/IPL মৌসুমে নিয়মিত খেলেন, তিনি একশো ‘এক ডিপোজিট দিয়েই চলে যাওয়া’ সাইনআপের চেয়ে বেশি মূল্যবান। তাই কনটেন্টের মান, সততা এবং নির্দিষ্ট দর্শকের জন্য প্রাসঙ্গিকতাই দীর্ঘমেয়াদে বেশি কার্যকর, দ্রুত বিজ্ঞাপন স্প্যাম নয়।",
          "## পরবর্তী ধাপ",
          "শুরু করতে চাইলে আমাদের [Affiliate Program](/affiliate-program) পেজে রেজিস্ট্রেশন প্রবাহ ও [Affiliate Login](/affiliate-login)-এ পোর্টাল গাইড দেখে নিন।",
          "> দায়িত্বশীল মার্কেটিং: ১৮+। কোনো ক্ষেত্রেই ‘নিশ্চিত আয়’ বা ‘গ্যারান্টিড জয়’ প্রচার করা যাবে না।",
        ],
        ur: [
          "## Affiliate یا Agent, کون سا آپ کے لیے؟",
          "**Affiliate:** اپنے بلاگ، YouTube چینل، Telegram یا Facebook پیج پر مواد شائع کرتے ہیں، tracked لنک شیئر کرتے ہیں اور اس لنک سے رجسٹر ہونے والے کھلاڑیوں کی **نیٹ گیمنگ ریونیو (NGR)** کا ایک حصہ حاصل کرتے ہیں۔",
          "**Agent:** خود کھلاڑیوں کا onboarding کرتے ہیں، اکثر مقامی JazzCash/EasyPaisa لین دین سنبھالتے ہیں اور اپنے نیٹ ورک کی ذاتی ذمہ داری اٹھاتے ہیں, اس کے بدلے میں کمیشن کا حصہ نسبتاً زیادہ ہوتا ہے۔",
          "زیادہ تر پبلشرز کو Affiliate کے طور پر شروع کرنا چاہیے۔ Agent ماڈل صرف اسی وقت مناسب ہے جب آپ کے پاس پہلے سے آف لائن کھلاڑی نیٹ ورک موجود ہو اور آپ ذمہ داری سے کیش فلو سنبھال سکتے ہوں۔",
          "## کمیشن ماڈلز کو سمجھیں",
          "- **RevShare (Revenue Share):** کھلاڑی کے نیٹ نقصان کا فیصد، ماہانہ پے آؤٹ۔ مواد افیلیٹس کے لیے معیار۔",
          "- **CPA:** ہر اہل FTD (پہلی ڈپازٹ) کے مقابلے میں مقررہ پے آؤٹ۔",
          "- **Hybrid:** چھوٹا CPA + چھوٹا RevShare, قابل پیش گوئی کیش فلو کے لیے بہتر۔",
          "- **Sub-affiliate:** آپ نے جس کو refer کیا، اس کی آمدنی کا ایک چھوٹا حصہ۔",
          "مخصوص فیصد، tier اور اہلیت کی شرائط آفر اور ملک کے مطابق بدلتی ہیں, اشاعت سے پہلے JeetBuzz Affiliate ڈیش بورڈ پر موجودہ شیڈول کی تصدیق کریں۔ کسی مخصوص آمدنی کی پیشگی گارنٹی نہیں دی جا سکتی۔",
          "## پے آؤٹ ریلز",
          "- **بنگلہ دیش:** bKash، Nagad اور بینک ٹرانسفر سب سے زیادہ عام۔",
          "- **پاکستان:** JazzCash، EasyPaisa، بینک, چھوٹے پبلشرز کے لیے MFS عام طور پر سب سے سہل۔",
          "- **بھارت:** UPI اور بینک۔",
          "- **کراس بارڈر:** بڑے پارٹنرز کے لیے USDT (TRC-20) وسیع پیمانے پر استعمال ہوتا ہے۔",
          "پے آؤٹ عام طور پر مقررہ شیڈول پر اور کم از کم حد عبور کرنے پر ہوتا ہے۔ صحیح وقت اور کم از کم حد آفیشل ڈیش بورڈ میں دکھائی جاتی ہے۔",
          "## مارکیٹنگ کا ضابطہ, کیا کرنے سے اکاؤنٹ معطل ہو سکتا ہے",
          "- Google Ads پر JeetBuzz برانڈ کی ورڈز پر بولی۔",
          "- غیر متعلقہ WhatsApp/SMS spam یا خریدی گئی لسٹس پر cold پیغامات۔",
          "- 18 سال سے کم عمر یا ان ممالک کو ٹارگٹ کرنا جہاں آن لائن بیٹنگ ممنوع ہے۔",
          "- یقینی جیت کا وعدہ یا جعلی بونس کا اشتہار۔",
          "- Cookie stuffing، iframe stuffing یا undisclosed redirect۔",
          "ہر شائع شدہ مواد میں واضح affiliate disclosure ضروری ہے, ہماری استعمال کردہ زبان [Affiliate Disclosure](/affiliate-disclosure) پر دیکھ لیں۔",
          "## اصل ٹولز جن کی ضرورت پڑتی ہے",
          "- ڈیش بورڈ کے tracked لنکس اور sub-ID۔",
          "- ایک سادہ لینڈنگ پیج, حقیقی ریویو، صرف redirect نہیں۔",
          "- پیڈ ٹریفک اسکیل کرنے پر S2S/postback سیٹ اپ۔",
          "- ایک سپریڈ شیٹ جو ہر ماہ ڈیش بورڈ کے NGR کا آپ کے انوائسڈ کمیشن سے ملان کرے۔",
          "## حقیقی آمدنی کی توقعات",
          "جنوبی ایشیائی فوکسڈ مواد افیلیٹس کی زیادہ تر آمدنی کم تعداد کے اعلیٰ LTV کھلاڑیوں سے آتی ہے, صرف سائن اپ کی تعداد سے نہیں۔ ایک حقیقی کرکٹ بیٹنگ قاری جو PSL/IPL سیزن میں باقاعدگی سے کھیلتا ہے، سینکڑوں ‘ایک ڈپازٹ کے بعد چلے جانے والے’ سائن اپس سے زیادہ قیمتی ہوتا ہے۔ اس لیے مواد کا معیار، ایمانداری اور مخصوص سامعین کے لیے مناسبت ہی طویل مدت میں موثر ہوتی ہے, تیز اشتہاری spam نہیں۔",
          "## اگلا قدم",
          "شروع کرنے کے لیے ہمارا [Affiliate Program](/affiliate-program) پیج پر رجسٹریشن کا طریقہ اور [Affiliate Login](/affiliate-login) پر پورٹل گائیڈ دیکھ لیں۔",
          "> ذمہ دارانہ مارکیٹنگ: 18+۔ کسی صورت میں ‘یقینی آمدنی’ یا ‘گارنٹی شدہ جیت’ کا پرچار نہیں کیا جا سکتا۔",
        ],
        hi: [
          "## Affiliate या Agent, आपके लिए कौन-सा?",
          "**Affiliate:** अपने ब्लॉग, YouTube चैनल, Telegram या Facebook पेज पर सामग्री प्रकाशित करते हैं, tracked लिंक शेयर करते हैं और उस लिंक से रजिस्टर हुए खिलाड़ियों के **नेट गेमिंग रेवेन्यू (NGR)** का एक हिस्सा प्राप्त करते हैं।",
          "**Agent:** ख़ुद खिलाड़ियों का onboarding करते हैं, अक्सर स्थानीय UPI/बैंक लेन-देन संभालते हैं और अपने नेटवर्क की व्यक्तिगत ज़िम्मेदारी उठाते हैं, बदले में कमीशन का हिस्सा अपेक्षाकृत ज़्यादा होता है।",
          "ज़्यादातर पब्लिशर्स को Affiliate के रूप में शुरुआत करनी चाहिए। Agent मॉडल केवल तभी उपयुक्त है जब आपके पास पहले से ऑफ़लाइन खिलाड़ी नेटवर्क हो और आप ज़िम्मेदारी से कैशफ़्लो संभाल सकते हों।",
          "## कमीशन मॉडल समझें",
          "- **RevShare (Revenue Share):** खिलाड़ी के नेट नुक़सान का प्रतिशत, मासिक पे-आउट। कंटेंट affiliates के लिए मानक।",
          "- **CPA:** हर योग्य FTD (पहली डिपॉज़िट) के बदले निश्चित पे-आउट।",
          "- **Hybrid:** छोटा CPA + छोटा RevShare, पूर्वानुमेय कैशफ़्लो के लिए बेहतर।",
          "- **Sub-affiliate:** आपने जिसे refer किया, उसकी कमाई का एक छोटा हिस्सा।",
          "विशिष्ट प्रतिशत, tier और पात्रता शर्तें ऑफ़र और देश के अनुसार बदलती हैं, प्रकाशन से पहले JeetBuzz Affiliate डैशबोर्ड पर मौजूदा शेड्यूल की पुष्टि करें। किसी विशिष्ट आय की पूर्व-गारंटी नहीं दी जा सकती।",
          "## पे-आउट रेल्स",
          "- **भारत:** UPI (PhonePe / Google Pay / Paytm / BHIM) और IMPS/NEFT बैंक ट्रांसफ़र सबसे आम।",
          "- **बांग्लादेश:** bKash, Nagad, बैंक ट्रांसफ़र।",
          "- **पाकिस्तान:** JazzCash, EasyPaisa, बैंक।",
          "- **क्रॉस-बॉर्डर:** बड़े पार्टनर्स के लिए USDT (TRC-20) व्यापक रूप से प्रयुक्त।",
          "पे-आउट आम तौर पर निर्धारित शेड्यूल पर और न्यूनतम सीमा पार करने पर होते हैं। सटीक समय और न्यूनतम सीमा ऑफ़िशियल डैशबोर्ड में दिखाई जाती है।",
          "## मार्केटिंग का अनुशासन, क्या करने से अकाउंट सस्पेंड हो सकता है",
          "- Google Ads पर JeetBuzz ब्रांड कीवर्ड पर बिड।",
          "- अप्रासंगिक WhatsApp/SMS spam या ख़रीदी गई सूचियों पर cold संदेश।",
          "- 18 वर्ष से कम या उन देशों को लक्षित करना जहाँ ऑनलाइन बेटिंग प्रतिबंधित है।",
          "- ‘निश्चित जीत’ का वादा या नक़ली बोनस का विज्ञापन।",
          "- Cookie stuffing, iframe stuffing या undisclosed redirect।",
          "हर प्रकाशित सामग्री में स्पष्ट affiliate disclosure ज़रूरी है, हमारी प्रयुक्त भाषा [Affiliate Disclosure](/affiliate-disclosure) पर देख लें।",
          "## असली टूल्स जो ज़रूरी हैं",
          "- डैशबोर्ड के tracked लिंक्स और sub-ID।",
          "- एक सादा लैंडिंग पेज, असली रिव्यू, सिर्फ़ redirect नहीं।",
          "- पेड ट्रैफ़िक स्केल करने पर S2S/postback सेटअप।",
          "- एक स्प्रेडशीट जो हर महीने डैशबोर्ड के NGR का आपके इनवॉइस्ड कमीशन से मिलान करे।",
          "## यथार्थवादी आय की अपेक्षाएँ",
          "दक्षिण एशिया-फ़ोकस्ड कंटेंट affiliates की अधिकांश कमाई कम संख्या के उच्च-LTV खिलाड़ियों से आती है, केवल साइनअप की संख्या से नहीं। एक असली क्रिकेट-बेटिंग पाठक जो IPL/घरेलू सीज़न में नियमित खेलता है, सैकड़ों ‘एक डिपॉज़िट के बाद ग़ायब’ साइनअप से अधिक मूल्यवान है। इसलिए सामग्री की गुणवत्ता, ईमानदारी और लक्षित दर्शकों के लिए प्रासंगिकता ही दीर्घावधि में प्रभावी होती है, तेज़ विज्ञापन-spam नहीं।",
          "## अगला क़दम",
          "शुरू करने के लिए हमारा [Affiliate Program](/affiliate-program) पेज पर रजिस्ट्रेशन प्रवाह और [Affiliate Login](/affiliate-login) पर पोर्टल गाइड देख लें।",
          "> ज़िम्मेदार मार्केटिंग: 18+। किसी भी सूरत में ‘निश्चित आय’ या ‘गारंटीड जीत’ का प्रचार नहीं किया जा सकता।",
        ],
      }}
      faqs={[
        { q: "Do I need a company to join?", a: "No, individuals can sign up. For larger monthly payouts you may need to provide tax/KYC documents, which is normal for any affiliate program." },
        { q: "How do I get paid in Bangladesh?", a: "bKash, Nagad or bank transfer are the standard rails. Set your preferred payout method in the partner dashboard and confirm the receiving account name matches your registered partner name." },
        { q: "Can I run paid ads on Google / Meta?", a: "Yes for compliant ad networks, but you may not bid on JeetBuzz brand keywords or run ads in countries where online gambling is restricted. Always check the program's PPC policy first." },
        { q: "What's the difference between agent and affiliate?", a: "Affiliate = traffic and content, commission on NGR, no player handling. Agent = you onboard and manage players directly, often handle local cash-in/cash-out, higher commission but more operational risk." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "যোগ দিতে কি কোম্পানি থাকা লাগবে?", a: "না, ব্যক্তি হিসেবেও সাইনআপ করা যায়। বড় মাসিক পেআউটের জন্য কর/KYC ডকুমেন্ট চাইতে পারে, যা যেকোনো affiliate প্রোগ্রামের জন্য স্বাভাবিক।" },
          { q: "বাংলাদেশে পেআউট কীভাবে আসে?", a: "bKash, Nagad বা ব্যাংক ট্রান্সফার সবচেয়ে কমন রেল। ড্যাশবোর্ডে পেআউট পদ্ধতি সেট করুন এবং নিশ্চিত করুন গ্রহীতার নাম আপনার রেজিস্টার্ড partner নামের সঙ্গে মেলে।" },
          { q: "Google/Meta-তে পেইড অ্যাড চালাতে পারব?", a: "সম্মতিযোগ্য নেটওয়ার্কে চালানো যায়, কিন্তু JeetBuzz ব্র্যান্ড কীওয়ার্ডে বিড বা বেটিং নিষিদ্ধ দেশে অ্যাড চালানো যাবে না। প্রোগ্রামের PPC নীতি আগেই পড়ে নিন।" },
          { q: "Agent আর Affiliate-এর পার্থক্য কী?", a: "Affiliate = ট্রাফিক ও কনটেন্ট, NGR-এর ওপর কমিশন, প্লেয়ার পরিচালনা নয়। Agent = সরাসরি প্লেয়ার onboard ও পরিচালনা, স্থানীয় cash-in/cash-out, বেশি কমিশন, কিন্তু বেশি অপারেশনাল ঝুঁকি।" },
          { q: "কমিশন গ্যারান্টি কতটুকু?", a: "কোনো affiliate প্রোগ্রাম নির্দিষ্ট আয় গ্যারান্টি করে না। কমিশন প্লেয়ারের প্রকৃত কার্যকলাপ ও অফিসিয়াল চুক্তির শর্ত অনুযায়ী হিসাব হয়।" },
          { q: "প্লেয়ারকে ‘নিশ্চিত জয়’ অফার করা যাবে?", a: "একেবারেই না। এমন কনটেন্ট affiliate চুক্তি ভঙ্গ করে এবং অ্যাকাউন্ট সাসপেনশনের কারণ হয়। সর্বদা দায়িত্বশীল গেমিং ভাষা ব্যবহার করুন।" },
        ],
        ur: [
          { q: "کیا شامل ہونے کے لیے کمپنی ہونا ضروری ہے؟", a: "نہیں, ذاتی حیثیت میں بھی سائن اپ ممکن ہے۔ بڑی ماہانہ پے آؤٹ کے لیے ٹیکس/KYC دستاویزات مانگی جا سکتی ہیں، جو کسی بھی affiliate پروگرام کے لیے معمول ہے۔" },
          { q: "پاکستان میں پے آؤٹ کیسے آتا ہے؟", a: "JazzCash، EasyPaisa یا بینک ٹرانسفر سب سے عام ریلز ہیں۔ ڈیش بورڈ میں پے آؤٹ طریقہ سیٹ کریں اور یقینی بنائیں کہ وصول کنندہ کا نام آپ کے رجسٹرڈ پارٹنر نام (CNIC) سے میل کھاتا ہو۔" },
          { q: "کیا میں Google/Meta پر پیڈ ایڈز چلا سکتا ہوں؟", a: "compliant نیٹ ورکس پر چلائے جا سکتے ہیں، لیکن JeetBuzz برانڈ کی ورڈز پر بولی یا بیٹنگ ممنوع ممالک میں ایڈز چلانا منع ہے۔ پروگرام کی PPC پالیسی پہلے پڑھ لیں۔" },
          { q: "Agent اور Affiliate کا فرق کیا ہے؟", a: "Affiliate = ٹریفک اور مواد، NGR پر کمیشن، کھلاڑیوں کا انتظام نہیں۔ Agent = خود کھلاڑیوں کا onboard اور انتظام، مقامی cash-in/cash-out, زیادہ کمیشن، لیکن زیادہ operational خطرہ۔" },
          { q: "کمیشن کی گارنٹی کتنی ہے؟", a: "کوئی بھی affiliate پروگرام مخصوص آمدنی کی گارنٹی نہیں دیتا۔ کمیشن کھلاڑی کی اصل سرگرمی اور آفیشل معاہدے کی شرائط کے مطابق حساب کیا جاتا ہے۔" },
          { q: "کیا کھلاڑی کو ‘یقینی جیت’ کی پیشکش کی جا سکتی ہے؟", a: "بالکل نہیں۔ ایسا مواد affiliate معاہدے کی خلاف ورزی ہے اور اکاؤنٹ کی معطلی کا سبب بن سکتا ہے۔ ہمیشہ ذمہ دارانہ گیمنگ زبان استعمال کریں۔" },
        ],
        hi: [
          { q: "क्या जुड़ने के लिए कंपनी होना ज़रूरी है?", a: "नहीं, व्यक्तिगत रूप से भी साइन अप संभव है। बड़ी मासिक पे-आउट के लिए टैक्स/KYC दस्तावेज़ माँगे जा सकते हैं, जो किसी भी affiliate प्रोग्राम के लिए सामान्य है।" },
          { q: "भारत में पे-आउट कैसे आता है?", a: "UPI (PhonePe / Google Pay / Paytm) और बैंक ट्रांसफ़र (IMPS/NEFT) सबसे आम रेल्स हैं। डैशबोर्ड में पे-आउट तरीक़ा सेट करें और सुनिश्चित करें कि प्राप्तकर्ता का नाम आपके रजिस्टर्ड partner नाम (PAN/Aadhaar) से मेल खाता हो।" },
          { q: "क्या मैं Google/Meta पर पेड विज्ञापन चला सकता हूँ?", a: "compliant नेटवर्क पर चलाए जा सकते हैं, लेकिन JeetBuzz ब्रांड कीवर्ड पर बिड या बेटिंग प्रतिबंधित देशों में विज्ञापन चलाना मना है। प्रोग्राम की PPC नीति पहले पढ़ लें।" },
          { q: "Agent और Affiliate में क्या अंतर है?", a: "Affiliate = ट्रैफ़िक और सामग्री, NGR पर कमीशन, खिलाड़ियों का प्रबंधन नहीं। Agent = ख़ुद खिलाड़ियों का onboard और प्रबंधन, स्थानीय cash-in/cash-out, अधिक कमीशन, लेकिन अधिक operational जोखिम।" },
          { q: "कमीशन की कितनी गारंटी है?", a: "कोई भी affiliate प्रोग्राम विशिष्ट आय की गारंटी नहीं देता। कमीशन खिलाड़ी की वास्तविक गतिविधि और ऑफ़िशियल अनुबंध की शर्तों के अनुसार गणना किया जाता है।" },
          { q: "क्या खिलाड़ी को ‘निश्चित जीत’ की पेशकश की जा सकती है?", a: "बिल्कुल नहीं। ऐसी सामग्री affiliate अनुबंध का उल्लंघन है और अकाउंट निलंबन का कारण बन सकती है। हमेशा ज़िम्मेदार गेमिंग भाषा का प्रयोग करें।" },
        ],
      }}
      related={[
        { to: "/affiliate-program", title: "Affiliate Program" },
        { to: "/affiliate-disclosure", title: "Affiliate Disclosure" },
        { to: "/affiliate-login", title: "Affiliate Login" },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review" },
      ]}
    />
  ),
});