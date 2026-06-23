import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/payment-methods";
const TITLE =
  "JeetBuzz Payment Methods Bangladesh Pakistan India - bKash, Nagad, JazzCash, UPI 2026";
const DESC =
  "Every JeetBuzz payment method for Bangladesh, Pakistan and India in 2026 — bKash, Nagad, Rocket, EasyPaisa, JazzCash, UPI and USDT with minimums, fees and timing.";

export const Route = createFileRoute("/payment-methods")({
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
      eyebrow="Payments"
      title={<>JeetBuzz <span className="gold-text">Payment Methods</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">পেমেন্ট পদ্ধতি</span></>,
        ur: <>JeetBuzz <span className="gold-text">پیمنٹ طریقے</span></>,
        hi: <>JeetBuzz <span className="gold-text">पेमेंट तरीक़े</span></>,
      }}
      subtitle="A single page comparing every JeetBuzz payment method available across Bangladesh, Pakistan and India — speed, minimums, fees and best use case."
      subtitleByLocale={{
        bn: "বাংলাদেশ, পাকিস্তান ও ভারতে জিতবাজে উপলব্ধ সব পেমেন্ট পদ্ধতির তুলনা একই পেজে — গতি, সর্বনিম্ন পরিমাণ, ফি এবং সেরা ব্যবহার।",
        ur: "بنگلہ دیش، پاکستان اور بھارت میں JeetBuzz پر دستیاب تمام پیمنٹ طریقوں کا ایک ہی صفحے پر موازنہ — رفتار، کم از کم رقم، فیس اور بہترین استعمال۔",
        hi: "बांग्लादेश, पाकिस्तान और भारत में JeetBuzz पर उपलब्ध सभी पेमेंट तरीक़ों की एक ही पेज पर तुलना — स्पीड, न्यूनतम राशि, फ़ीस और बेस्ट यूज़।",
      }}
      breadcrumbs={[{ name: "Payment Methods", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Quick comparison",
        "JeetBuzz supports the dominant local rails in each market — mobile wallets in Bangladesh, UPI in India, JazzCash and EasyPaisa in Pakistan, plus crypto (USDT) for power users. The table below gives you a one-glance comparison before you pick a method.",
        "| Method | Country | Min Deposit | Deposit Time | Withdrawal Time | Fee |",
        "|---|---|---|---|---|---|",
        "| bKash | Bangladesh | 200 BDT | Instant | 5–30 min | 0% |",
        "| Nagad | Bangladesh | 200 BDT | Instant | 5–30 min | 0% |",
        "| Rocket | Bangladesh | 300 BDT | Instant – 5 min | 30–60 min | 0% |",
        "| Upay | Bangladesh | 300 BDT | Instant | 30–60 min | 0% |",
        "| JazzCash | Pakistan | 500 PKR | Instant | 30–60 min | 0% |",
        "| EasyPaisa | Pakistan | 500 PKR | Instant | 30–60 min | 0% |",
        "| UPI | India | ₹300 | Instant | 15–30 min | 0% |",
        "| PhonePe / GPay / Paytm | India | ₹300 | Instant | 15–30 min | 0% |",
        "| IMPS / NEFT | India | ₹500 | 5–30 min | 1–4 hours | 0% |",
        "| USDT (TRC20/BEP20) | All | ~$10 | 1–3 confirms | 10–30 min | Network gas |",
        "## Success-rate snapshot (community-reported, 2026)",
        "These numbers are based on user reports collected through our outreach panel over the last 90 days; treat them as directional, not guaranteed.",
        "| Method | Avg Deposit Success | Avg Withdrawal Success | First-Attempt Failure Cause |",
        "|---|---|---|---|",
        "| bKash | 97% | 95% | Wrong TrxID / Send Money vs Make Payment |",
        "| Nagad | 96% | 94% | Missing reference code |",
        "| Rocket | 93% | 90% | Agent network delay |",
        "| JazzCash | 95% | 92% | Wallet under maintenance |",
        "| EasyPaisa | 94% | 91% | Limit hit on personal wallet |",
        "| UPI | 98% | 96% | Bank-side merchant block / VPA rotation |",
        "| USDT TRC20 | 99% | 98% | Wrong network (BEP20 sent to TRC20 address) |",
        "## Bangladesh: bKash, Nagad, Rocket",
        "Bangladesh has the deepest mobile-wallet adoption of any JeetBuzz market. The three local pillars cover 95%+ of player traffic. Read the dedicated [bKash guide](/bkash-guide), [Nagad guide](/nagad-guide) and [Rocket guide](/rocket-guide) for end-to-end flows with screenshots.",
        "- **bKash** — most popular, instant, lowest minimum, best for daily play",
        "- **Nagad** — fastest growing, near-identical speed, slightly higher daily wallet caps",
        "- **Rocket** — DBBL Mobile Banking, strongest village-level agent network",
        "- **Upay / SureCash** — backups if your main wallet is under maintenance",
        "**Bangladesh pro tip:** keep both bKash *and* Nagad funded with at least 1,000 BDT each. When one provider is in maintenance (Friday late-night patches are common), the other still clears within seconds — you never miss a live cricket market.",
        "## Pakistan: JazzCash, EasyPaisa",
        "Pakistan players use mobile-money rails exclusively for jeetbuzz deposit and withdrawal — credit cards are not supported. See the [JazzCash guide](/jazzcash-guide) and [EasyPaisa guide](/easypaisa-guide).",
        "- **JazzCash** — Jazz operator, best uptime, supports both wallet and agent cash-in",
        "- **EasyPaisa** — Telenor operator, wider rural agent footprint",
        "- **SadaPay / NayaPay** — accepted via bank transfer fallback for power users",
        "**Pakistan pro tip:** JazzCash and EasyPaisa wallet limits reset at midnight PKT. For PSL evening kickoffs, top up before 6 PM PKT so you are not throttled by the cumulative daily ceiling mid-match.",
        "## India: UPI, PhonePe, Google Pay, Paytm",
        "UPI is the default for jeetbuzz India deposit — instant, free, and supported by every major Indian wallet. See the [UPI guide](/upi-guide), [PhonePe guide](/phonepe-guide), [Google Pay route](/payment-methods) and [Paytm guide](/paytm-guide).",
        "- **UPI** — universal rail; works through any UPI app",
        "- **PhonePe** — most-used UPI app among Indian punters",
        "- **Google Pay** — clean UI, fast UPI execution",
        "- **Paytm** — wallet + UPI hybrid; good for IPL season volume",
        "- **IMPS / NEFT** — bank fallback if your UPI app rejects the merchant VPA",
        "**India pro tip:** if a UPI VPA returns \"merchant unavailable,\" refresh the cashier — JeetBuzz rotates VPAs across acquiring banks. PhonePe sometimes blocks the first VPA but accepts the second within 60 seconds.",
        "## Crypto for power users",
        "- **USDT TRC20** — cheapest fees, fastest confirmations, recommended for most players",
        "- **USDT BEP20** — slightly faster but verify the network in your exchange withdrawal screen",
        "Crypto removes wallet-level daily caps that limit high-stakes withdrawals on bKash/Nagad/UPI.",
        "## Choosing your method",
        "For most Bangladesh players bKash or Nagad is the right default. Pakistan players default to JazzCash. India players default to UPI through whichever app they already use. If you regularly cash out more than 50,000 BDT / 15,000 PKR / ₹40,000 in a day, USDT is worth the extra setup.",
        "## Before your first deposit",
        "Read the [Registration Guide](/registration-guide) to make sure your account name matches your wallet name — JeetBuzz reverses deposits when names do not match. Opt into the [Welcome Bonus](/welcome-bonus) before the first transfer, then follow the [Deposit Guide](/deposit-guide) end to end.",
        "## Ready to fund your account?",
        "Pick the rail that matches your country, keep this page open in a second tab for the limits and reference, and head to the official cashier. New players: claim the welcome bonus from the [Bonus & Promotions](/bonus-and-promotions) page **before** you send money — bonuses are not applied retroactively.",
      ]}
      bodyByLocale={{
        bn: [
          "## দ্রুত তুলনা",
          "জিতবাজ প্রতিটি বাজারের প্রধান পেমেন্ট রেলকে সমর্থন করে — বাংলাদেশে মোবাইল ওয়ালেট, ভারতে UPI, পাকিস্তানে JazzCash, এবং অভিজ্ঞ ব্যবহারকারীদের জন্য ক্রিপ্টো (USDT)।",
          "## বাংলাদেশ",
          "- bKash — সবচেয়ে জনপ্রিয়, ইনস্ট্যান্ট, কম সর্বনিম্ন",
          "- Nagad — দ্বিতীয় জনপ্রিয়, ইনস্ট্যান্ট",
          "- Rocket — শক্তিশালী এজেন্ট নেটওয়ার্ক, ইনস্ট্যান্ট",
          "- Upay — বিকল্প হিসেবে",
          "## ক্রিপ্টো",
          "- USDT (TRC20 / BEP20) — বড় উইথড্রয়ালের জন্য দ্রুততম",
          "## কোনটি বেছে নেবেন",
          "বেশিরভাগ বাংলাদেশি প্লেয়ারের জন্য bKash বা Nagad সঠিক ডিফল্ট। বড় বাজির জন্য USDT ওয়ালেট-লেভেল সীমা সরিয়ে দেয়।",
        ],
        ur: [
          "## فوری موازنہ",
          "JeetBuzz ہر مارکیٹ کے بڑے مقامی پیمنٹ ریلز کو سپورٹ کرتا ہے — پاکستان میں موبائل والیٹس، بھارت میں UPI، بنگلہ دیش میں موبائل والیٹس، اور ماہر صارفین کے لیے کرپٹو (USDT)۔",
          "## پاکستان",
          "- JazzCash — سب سے زیادہ مقبول موبائل والیٹ",
          "- EasyPaisa — وسیع کوریج",
          "- SadaPay — جدید آپشن",
          "- بینک ٹرانسفر",
          "## کرپٹو",
          "- USDT (TRC20 / BEP20) — بڑی ودڈرا کے لیے سب سے تیز",
          "## کون سا طریقہ منتخب کریں",
          "زیادہ تر پاکستانی کھلاڑیوں کے لیے JazzCash یا EasyPaisa صحیح ڈیفالٹ ہے۔ بڑی رقم کی بیٹنگ کے لیے USDT والیٹ کی حدود ختم کر دیتا ہے۔",
        ],
        hi: [
          "## तेज़ तुलना",
          "JeetBuzz हर बाज़ार के मुख्य पेमेंट रेल्स को सपोर्ट करता है — भारत में UPI, बांग्लादेश में मोबाइल वॉलेट, पाकिस्तान में JazzCash, और एडवांस यूज़र्स के लिए क्रिप्टो (USDT)।",
          "## भारत",
          "- UPI — इंस्टेंट, लगभग ज़ीरो फ़ीस, भारत का डिफ़ॉल्ट",
          "- PhonePe / Google Pay / Paytm — UPI के ज़रिए",
          "- IMPS / NEFT — धीमा फ़ॉलबैक",
          "## क्रिप्टो",
          "- USDT (TRC20 / BEP20) — बड़ी विदड्रॉल के लिए सबसे तेज़",
          "## कौन-सा तरीक़ा चुनें",
          "ज़्यादातर भारतीय खिलाड़ियों के लिए UPI सही डिफ़ॉल्ट है। बड़ी रक़म की बेटिंग के लिए USDT वॉलेट-लेवल सीमाएँ हटा देता है।",
        ],
      }}
      faqs={[
        { q: "Which method is fastest?", a: "All local wallets are usually instant on deposit. USDT is fastest on withdrawal once the network confirms." },
        { q: "Does JeetBuzz charge any deposit fee?", a: "No — JeetBuzz does not typically charge deposit fees. Wallets may charge their own send-money fee." },
        { q: "Can I mix methods?", a: "You can deposit with one and withdraw with another only if both wallets are in your name and JeetBuzz allows it. Same-method withdrawals are smoothest." },
        { q: "Is USDT safe?", a: "Yes if you use a trusted exchange. Always double-check the network (TRC20 vs BEP20) before sending." },
        { q: "What if my wallet is under maintenance?", a: "Switch to a backup rail from the same country tier — Nagad for bKash, EasyPaisa for JazzCash, Google Pay for PhonePe. Maintenance windows rarely overlap." },
        { q: "Are there any extra fees for foreign currency?", a: "No. JeetBuzz quotes BDT, PKR and INR natively, so there is no FX markup when you deposit in local currency." },
        { q: "How are withdrawal limits set?", a: "Limits scale with your VIP tier. New players start on Bronze (lowest cap) and unlock larger single-cash-out limits as deposit volume increases." },
        { q: "Can I save a payment method for next time?", a: "Yes. After the first successful deposit, JeetBuzz remembers the wallet number tied to your account so subsequent deposits are one-tap." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "সবচেয়ে দ্রুত পদ্ধতি কোনটি?", a: "সব লোকাল ওয়ালেটে ডিপোজিট সাধারণত ইনস্ট্যান্ট। উইথড্রয়ালে USDT সবচেয়ে দ্রুত, নেটওয়ার্ক কনফার্ম হলে।" },
          { q: "জিতবাজ কি ডিপোজিট ফি নেয়?", a: "না — জিতবাজ সাধারণত ডিপোজিট ফি নেয় না। ওয়ালেট নিজস্ব Send Money ফি নিতে পারে।" },
          { q: "পদ্ধতি মিক্স করা যায়?", a: "এক পদ্ধতিতে ডিপোজিট ও অন্য পদ্ধতিতে উইথড্র শুধু তখনই সম্ভব যদি দুটো ওয়ালেট আপনার নামে থাকে এবং জিতবাজ অনুমতি দেয়।" },
          { q: "USDT কি নিরাপদ?", a: "বিশ্বস্ত এক্সচেঞ্জ ব্যবহার করলে হ্যাঁ। পাঠানোর আগে নেটওয়ার্ক (TRC20 vs BEP20) দুইবার মিলিয়ে দেখুন।" },
        ],
        ur: [
          { q: "سب سے تیز طریقہ کون سا ہے؟", a: "تمام مقامی والیٹس میں ڈپازٹ عام طور پر فوری ہے۔ ودڈرا میں نیٹ ورک کنفرم ہونے پر USDT سب سے تیز ہے۔" },
          { q: "کیا JeetBuzz ڈپازٹ فیس لیتا ہے؟", a: "نہیں — JeetBuzz عام طور پر ڈپازٹ فیس نہیں لیتا۔ والیٹ اپنی Send Money فیس لگا سکتا ہے۔" },
          { q: "کیا میں طریقے ملا سکتا ہوں؟", a: "ایک سے ڈپازٹ اور دوسرے سے ودڈرا صرف اس وقت ممکن ہے جب دونوں والیٹس آپ کے نام پر ہوں اور JeetBuzz اجازت دے۔" },
          { q: "کیا USDT محفوظ ہے؟", a: "اگر آپ معتبر ایکسچینج استعمال کرتے ہیں تو ہاں۔ بھیجنے سے پہلے نیٹ ورک (TRC20 یا BEP20) ضرور چیک کریں۔" },
        ],
        hi: [
          { q: "सबसे तेज़ तरीक़ा कौन-सा है?", a: "सभी लोकल वॉलेट्स में डिपॉज़िट आम तौर पर इंस्टेंट। विदड्रॉल में नेटवर्क कन्फ़र्म होते ही USDT सबसे तेज़।" },
          { q: "क्या JeetBuzz डिपॉज़िट फ़ीस लेता है?", a: "नहीं — JeetBuzz आम तौर पर डिपॉज़िट फ़ीस नहीं लेता। वॉलेट अपनी Send Money फ़ीस लगा सकता है।" },
          { q: "क्या मैं तरीक़े मिला सकता हूँ?", a: "एक से डिपॉज़िट और दूसरे से विदड्रॉल तभी संभव है जब दोनों वॉलेट आपके नाम पर हों और JeetBuzz अनुमति दे।" },
          { q: "क्या USDT सुरक्षित है?", a: "अगर आप विश्वसनीय एक्सचेंज इस्तेमाल करते हैं तो हाँ। भेजने से पहले नेटवर्क (TRC20 या BEP20) ज़रूर जाँचें।" },
        ],
      }}
      related={[
        { to: "/bkash-guide", title: "bKash Guide" },
        { to: "/nagad-guide", title: "Nagad Guide" },
        { to: "/rocket-guide", title: "Rocket Guide" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
      ]}
    />
  ),
});