import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { SIGNUP_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/welcome-bonus")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Welcome Bonus 2026 — Sign Up Bonus, Promo Code & First Deposit Match (BD/PK/IN)" },
      { name: "description", content: "JeetBuzz welcome bonus 2026 — new-account sign-up bonus, current promo codes, first-deposit match up to the cap, wagering, max-bet rule and safe claim steps for BD, PK, IN." },
      { property: "og:title", content: "JeetBuzz Welcome Bonus — Sign Up Bonus + Promo Code 2026" },
      { property: "og:description", content: "How to claim the JeetBuzz sign-up welcome bonus, apply today's promo code and clear wagering without voiding it." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("bonus") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("bonus") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Welcome Bonus</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">ওয়েলকাম বোনাস</span></>,
        ur: <>JeetBuzz <span className="gold-text">ویلکم بونس</span></>,
        hi: <>JeetBuzz <span className="gold-text">वेलकम बोनस</span></>,
      }}
      subtitle="The welcome bonus looks generous in the banner. This page shows what the small print actually means, and the order of operations that lets you keep your winnings."
      subtitleByLocale={{
        bn: "ব্যানারে ওয়েলকাম বোনাস বড় দেখায়। এখানে শর্তগুলো বাস্তবে কী মানে এবং উইনিংস রাখার সঠিক ক্রম দেখানো হলো।",
        ur: "بینر پر ویلکم بونس بڑا لگتا ہے۔ یہاں شرائط کا اصل مطلب اور جیتی رقم بچانے کا درست طریقہ بتایا گیا ہے۔",
        hi: "बैनर पर वेलकम बोनस बड़ा दिखता है। यहाँ शर्तों का असली मतलब और जीती हुई रकम बचाने का सही तरीक़ा बताया गया है।",
      }}
      ctaLabel="Claim the Welcome Bonus"
      ctaLabelByLocale={{
        bn: "ওয়েলকাম বোনাস ক্লেইম করুন",
        ur: "ویلکم بونس حاصل کریں",
        hi: "वेलकम बोनस क्लेम करें",
      }}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Signup", path: "/registration-guide" },
        { name: "Welcome Bonus", path: "/welcome-bonus" },
      ]}
      heroImage="bonus"
      body={[
        "## Welcome bonus, sign-up bonus, first-deposit bonus — same thing?",
        "Yes, these three phrases all point to the same promotion in the JeetBuzz cashier. **Welcome bonus** is the marketing name, **sign-up bonus** is what players search for, and **first deposit bonus** describes when it credits. There is exactly one of these per KYC, and it applies only to your very first real-money transfer.",
        "## Today's promo code — where and how",
        "The **JeetBuzz promo code** field sits on the registration form directly under Currency. Paste today's code before you tap *Create Account*; codes never back-apply. Codes rotate weekly and often unlock a higher match percentage than the default banner. Copy the current active code from [JeetBuzz Promo Code](/jeetbuzz-promo-code) minutes before signing up — an expired code silently voids the bonus.",
        "## What the offer usually looks like",
        "JeetBuzz typically runs a 100% deposit-match bonus up to a cap, separately for Sports and Casino. You pick one at signup — you can't double-claim.",
        "## The 4 numbers you must check",
        "1. **Wagering multiplier** — most JeetBuzz bonuses sit around 15x. A 1,000 BDT bonus needs ~15,000 BDT of qualifying bets before it (and any winnings) can be withdrawn.",
        "2. **Max bet while bonus is active** — usually capped at a small amount per bet. Going over voids the bonus.",
        "3. **Game contribution** — sports and most slots count 100%. Live casino often counts 10% or less, which silently triples your real wagering on those games.",
        "4. **Expiry window** — usually 7–30 days from activation. Unfinished wagering after expiry forfeits the bonus.",
        "## The right order of operations",
        "1. Read the current T&Cs on the JeetBuzz promotions page (offers change).",
        "2. Deposit at least the minimum qualifying amount via a bonus-eligible method (some e-wallets are excluded — check first).",
        "3. Opt in BEFORE you place your first bet. Bonuses are not retroactive.",
        "4. Play within the max-bet cap until wagering is cleared.",
        "5. Withdraw — the bonus and any winnings are now real cash.",
        "## When to skip the bonus",
        "If you bet large stakes, the max-bet rule will frustrate you. Skip the bonus, deposit as normal, and withdraw freely.",
        "## Sign-up bonus math (worked example)",
        "- Match: 150% up to 15,000 BDT.",
        "- First deposit: 3,000 BDT via bKash.",
        "- Bonus credited: 4,500 BDT.",
        "- Rollover: 15× on the bonus → 4,500 × 15 = **67,500 BDT of qualifying bets** before withdrawal.",
        "- Max-bet cap: 500 BDT per stake while the bonus is active.",
        "- At an average stake of 300 BDT on 1.80 cricket odds, that clears in ~225 bets — plan around a week of daily play, not a single evening.",
        "## Why 'jeetbuzz free bonus' searches are misleading",
        "There is no cash-out-able free bonus without a deposit on JeetBuzz today. What players call a *free bonus* is either (a) the sign-up match bonus described here, (b) a small free-bet coupon during a specific cricket match promotion, or (c) refer-a-friend credit on the friend's first deposit — see [Refer Bonus](/jeetbuzz-refer-bonus). Any site promising no-deposit cash to your JeetBuzz account is a phishing attempt.",
        "## New account sign-up bonus — step-by-step",
        "1. Open the registration form on the official site.",
        "2. Fill in phone, email, currency and today's promo code.",
        "3. Tick the **Welcome Bonus** opt-in.",
        "4. Tap *Create Account*, verify OTP, complete profile.",
        "5. Head to **Cashier**, deposit the minimum qualifying amount (usually 500 BDT / 500 PKR / ₹500).",
        "6. Bonus lands within minutes. Wagering counter appears under **Promotions → Active**.",
        "## Signals that a welcome bonus offer is worth claiming",
        "- Match percentage ≥ 100% with a rollover ≤ 20×.",
        "- Max-bet cap ≥ your usual stake size.",
        "- Game contribution table published in the promo T&C.",
        "- Expiry ≥ 14 days from activation.",
        "- Withdrawable balance clearly separated from bonus balance in the cashier.",
        "> Promotions change frequently — confirm the current offer on the official JeetBuzz site before depositing.",
      ]}
      bodyByLocale={{
        bn: [
          "## অফারটি সাধারণত যেমন",
          "জিতবাজ সাধারণত স্পোর্টস এবং ক্যাসিনো — দুই ক্যাটাগরিতে আলাদা ১০০% ডিপোজিট-ম্যাচ ওয়েলকাম বোনাস দেয়। সাইনআপের সময় একটিই বেছে নিতে হবে; দুটোই দাবি করা যায় না।",
          "## যে ৪টি সংখ্যা অবশ্যই দেখবেন",
          "১. **Wagering multiplier** — সাধারণত ~১৫x। ১,০০০৳ বোনাসে প্রায় ১৫,০০০৳ যোগ্য বেট দিতে হবে আগে — তারপরই বোনাস ও জেতা টাকা উইথড্র করা যাবে।",
          "২. **Max bet limit** — বোনাস অ্যাক্টিভ থাকাকালীন প্রতি বেটে সীমা থাকে (সাধারণত ৫০০৳ বা সমতুল্য)। সীমা পেরোলে বোনাস বাতিল।",
          "৩. **গেম কন্ট্রিবিউশন** — স্পোর্টস ও স্লট সাধারণত ১০০%। লাইভ ক্যাসিনো ১০% বা তার কম — মানে ঐ গেমে wagering তিনগুণ লাগবে।",
          "৪. **মেয়াদ** — সাধারণত ৭–৩০ দিন। শেষ হলে অসম্পূর্ণ wagering বাতিল।",
          "## বাংলাদেশি প্লেয়ারদের জন্য সঠিক ক্রম",
          "১. জিতবাজের অফিসিয়াল প্রোমোশন পেজে বর্তমান T&C পড়ুন — অফার মাঝে মাঝে বদলায়।",
          "২. bKash / Nagad / Rocket-এ ন্যূনতম যোগ্য অ্যামাউন্ট ডিপোজিট করুন (সাধারণত ৫০০৳)। কখনো কখনো নির্দিষ্ট e-wallet বাদ থাকে — চেক করে নিন।",
          "৩. প্রথম বেটের আগেই 'Opt-in' করুন। পরে অপ্ট-ইন করা যায় না।",
          "৪. Max bet সীমার মধ্যে থেকে খেলুন। ক্রিকেট প্রি-ম্যাচ ও স্লট দিয়ে wagering দ্রুত শেষ হয়।",
          "৫. wagering শেষে উইথড্র করুন — bKash-এ সাধারণত ২–৩০ মিনিটে আসে।",
          "## বোনাস কখন এড়াবেন",
          "বড় স্টেকে খেললে max bet রুল বিরক্ত করবে। তখন বোনাস না নিয়ে স্বাভাবিক ডিপোজিট করুন — মুক্তভাবে উইথড্র করতে পারবেন।",
          "## সাধারণ ভুল",
          "- ডিপোজিটের পর opt-in করা — বোনাস অ্যাকটিভ হয় না।",
          "- লাইভ ক্যাসিনোতে wagering শেষ করার চেষ্টা — অনেক বেশি সময় লাগে।",
          "- max bet পেরিয়ে গিয়ে পুরো wagering নষ্ট।",
          "## পরবর্তী ধাপ",
          "প্রথমে [Registration Guide](/registration-guide) সম্পন্ন করুন, তারপর [Deposit Guide](/deposit-guide) দেখে bKash/Nagad-এ ডিপোজিট করুন।",
          "> অফার পরিবর্তনশীল — ডিপোজিটের আগে অফিসিয়াল সাইটে শর্ত যাচাই করুন।",
        ],
        ur: [
          "## آفر عام طور پر کیسی ہوتی ہے",
          "JeetBuzz عموماً اسپورٹس اور کیسینو کے لیے الگ الگ 100% ڈپازٹ-میچ ویلکم بونس دیتا ہے۔ سائن اپ پر صرف ایک منتخب کر سکتے ہیں — دونوں نہیں۔",
          "## وہ 4 نمبر جو ضرور دیکھیں",
          "1. **ویجرنگ ملٹی پلائر** — عموماً ~15x۔ 5,000 PKR بونس کے لیے تقریباً 75,000 PKR کی اہل بیٹس درکار ہیں۔",
          "2. **Max bet limit** — بونس فعال ہونے پر فی بیٹ حد (عموماً 1,000 PKR یا اس کے برابر)۔ حد سے زیادہ بیٹ پر بونس ختم۔",
          "3. **گیم کنٹریبیوشن** — اسپورٹس اور سلاٹس عموماً 100%؛ لائیو کیسینو 10% یا کم۔",
          "4. **میعاد** — عموماً 7–30 دن۔ ختم ہونے پر نامکمل ویجرنگ ضائع۔",
          "## پاکستانی پلیئرز کے لیے درست ترتیب",
          "1. JeetBuzz کے آفیشل پروموشن صفحہ پر موجودہ T&C پڑھیں۔",
          "2. EasyPaisa / JazzCash پر کم از کم اہل رقم (عموماً 500 PKR) ڈپازٹ کریں۔",
          "3. پہلی بیٹ سے پہلے 'Opt-in' دبائیں۔ بعد میں نہیں ہوتا۔",
          "4. max bet کے اندر رہ کر کھیلیں۔ کرکٹ پری-میچ اور سلاٹس سے ویجرنگ تیز ختم ہوتی ہے۔",
          "5. مکمل ہونے پر ودڈرا کریں — EasyPaisa اور JazzCash پر ادائیگی عموماً چند منٹ سے چند گھنٹوں میں نظر آتی ہے، تصدیق اور نیٹ ورک پر منحصر ہے۔",
          "## بونس کب چھوڑ دیں",
          "اگر بڑی اسٹیکس کھیلتے ہیں تو max bet اصول رکاوٹ بنے گا۔ بونس چھوڑ کر عام ڈپازٹ کریں۔",
          "## عام غلطیاں",
          "- ڈپازٹ کے بعد opt-in کرنا — بونس فعال نہیں ہوتا۔",
          "- لائیو کیسینو سے ویجرنگ مکمل کرنا — بہت زیادہ وقت لگتا ہے۔",
          "- max bet عبور کر کے پوری ویجرنگ ضائع کرنا۔",
          "## اگلا قدم",
          "پہلے [رجسٹریشن گائیڈ](/registration-guide) مکمل کریں، پھر [ڈپازٹ گائیڈ](/deposit-guide) دیکھیں۔",
          "> آفر بدلتی رہتی ہے — ڈپازٹ سے پہلے آفیشل سائٹ پر شرائط چیک کریں۔",
        ],
        hi: [
          "## ऑफ़र आम तौर पर कैसा होता है",
          "JeetBuzz आम तौर पर स्पोर्ट्स और कसीनो के लिए अलग-अलग 100% डिपॉज़िट-मैच वेलकम बोनस देता है। साइनअप पर सिर्फ़ एक चुनें — दोनों नहीं।",
          "## ये 4 नंबर ज़रूर देखें",
          "1. **वेजरिंग गुणक** — आम तौर पर ~15x। ₹1,000 बोनस के लिए लगभग ₹15,000 की योग्य बेट चाहिए।",
          "2. **Max bet limit** — बोनस सक्रिय रहते हुए प्रति बेट सीमा (आम तौर पर ₹500 या समतुल्य)। सीमा पार करने पर बोनस रद्द।",
          "3. **गेम कंट्रिब्यूशन** — स्पोर्ट्स और स्लॉट्स आम तौर पर 100%; लाइव कसीनो 10% या कम।",
          "4. **समाप्ति** — आम तौर पर 7–30 दिन। ख़त्म होने पर अधूरा वेजरिंग ज़ब्त।",
          "## भारतीय खिलाड़ियों के लिए सही क्रम",
          "1. JeetBuzz के ऑफ़िशियल प्रोमोशन पेज पर मौजूदा T&C पढ़ें।",
          "2. UPI / PhonePe / Google Pay / Paytm से कम-से-कम योग्य राशि (आम तौर पर ₹500) डिपॉज़िट करें।",
          "3. पहली बेट से पहले 'Opt-in' दबाएँ। बाद में नहीं होता।",
          "4. max bet के अंदर रहकर खेलें। क्रिकेट प्री-मैच और स्लॉट्स से वेजरिंग जल्दी पूरी होती है।",
          "5. पूरा होने पर निकासी करें — UPI/PhonePe पर निकासी आम तौर पर कुछ मिनटों से कुछ घंटों में दिखती है, सत्यापन और नेटवर्क के अधीन।",
          "## बोनस कब छोड़ें",
          "अगर बड़े स्टेक्स खेलते हैं तो max bet नियम परेशान करेगा। बोनस छोड़कर सामान्य डिपॉज़िट करें।",
          "## आम ग़लतियाँ",
          "- डिपॉज़िट के बाद opt-in करना — बोनस सक्रिय नहीं होता।",
          "- लाइव कसीनो से वेजरिंग पूरी करना — बहुत समय लगता है।",
          "- max bet पार करके पूरी वेजरिंग बर्बाद करना।",
          "## अगला क़दम",
          "पहले [रजिस्ट्रेशन गाइड](/registration-guide) पूरी करें, फिर [डिपॉज़िट गाइड](/deposit-guide) देखें।",
          "> ऑफ़र बदलता रहता है — डिपॉज़िट से पहले ऑफ़िशियल साइट पर शर्तें जाँच लें।",
        ],
      }}
      faqs={[
        { q: "Can I claim both the sports and casino welcome bonus?", a: "No. JeetBuzz lets you pick one at signup. Pick the product you'll actually play." },
        { q: "Do bKash, Nagad and UPI all qualify for the bonus?", a: "Usually yes, but the current promotions page lists exact eligible methods — always re-check before depositing, as the list changes." },
        { q: "What happens if I withdraw before wagering is complete?", a: "JeetBuzz forfeits the bonus and any winnings derived from it. Your original deposit (minus any bets placed) is returned." },
        { q: "How big is the JeetBuzz sign-up bonus in 2026?", a: "The active welcome/sign-up bonus rotates between 100% and 200% match on the first deposit, up to a cap in your local currency. Log in to the Promotions tab or check [JeetBuzz Promo Code](/jeetbuzz-promo-code) for today's exact numbers." },
        { q: "Is there a JeetBuzz promo code today?", a: "Yes — a new promo code goes live most weeks and often unlocks a higher match than the default banner. Copy today's code from [JeetBuzz Promo Code](/jeetbuzz-promo-code) and paste it into the registration form before creating your account." },
        { q: "How is the welcome bonus different from the first deposit bonus?", a: "They're the same promotion under different names. Marketing calls it the welcome bonus; the mechanics document calls it the first deposit bonus because it only credits on your very first transfer. See [First Deposit Bonus](/jeetbuzz-first-deposit-bonus) for the math." },
        { q: "Is there a no-deposit free bonus on JeetBuzz?", a: "No. Anyone offering cashable no-deposit credit to your JeetBuzz account is impersonating support. The only zero-deposit rewards are demo-play chips inside slot games." },
        { q: "How long do I have to clear the welcome bonus?", a: "Usually 7–30 days from activation. If wagering is not complete by expiry, the bonus and any winnings derived from it are forfeited; your original deposit stays intact." },
        { q: "Can I opt out of the welcome bonus after depositing?", a: "Yes. Live chat can remove an active bonus and release any wagering restrictions, but any bonus-derived winnings are removed with it. Only opt out if the max-bet cap or expiry is blocking your normal play." },
        { q: "Does the welcome bonus work on the JeetBuzz Android app?", a: "Yes. The APK and the web share one wallet — the bonus is tied to the account, not the device. Install from [APK Download](/jeetbuzz-apk-download) if you prefer to sign up from mobile." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "স্পোর্টস ও ক্যাসিনো — দুটো বোনাসই কি নেওয়া যাবে?", a: "না। সাইনআপে একটাই বেছে নিতে হয়। যেটা বেশি খেলবেন সেটাই নিন।" },
          { q: "bKash দিয়ে ডিপোজিট করলে বোনাস পাবো?", a: "সাধারণত হ্যাঁ। Nagad ও Rocket-ও যোগ্য। তবে কিছু সময় নির্দিষ্ট মাধ্যম বাদ থাকে — অফিসিয়াল প্রোমো পেজ দেখুন।" },
          { q: "Wagering শেষ হওয়ার আগে উইথড্র করলে?", a: "বোনাস ও তা থেকে আসা জেতা টাকা বাতিল। শুধু মূল ডিপোজিট (বেট বাদে) ফেরত আসে।" },
          { q: "প্রোমো কোড কোথায় দিতে হয়?", a: "রেজিস্ট্রেশন ফর্মে 'Promo Code' ঘরে — সাইনআপের পর যোগ করা যায় না।" },
          { q: "ক্রিকেট বেটে wagering কাউন্ট হয় কি?", a: "হ্যাঁ, প্রি-ম্যাচ ও লাইভ ক্রিকেট সাধারণত ১০০% কাউন্ট হয় যদি অড্স ১.৫০-এর বেশি হয়।" },
          { q: "ন্যূনতম ডিপোজিট কত?", a: "সাধারণত ৫০০৳। অফিসিয়াল ক্যাশিয়ার পেজে কনফার্ম করে নিন।" },
          { q: "Max bet কত?", a: "সাধারণত প্রতি বেটে ৫০০৳। পেরোলে বোনাস বাতিল।" },
          { q: "বোনাস কতদিনে শেষ করতে হবে?", a: "সাধারণত ৭–৩০ দিন। T&C-তে নির্দিষ্ট দিন উল্লেখ থাকে।" },
        ],
        ur: [
          { q: "اسپورٹس اور کیسینو — دونوں بونس لیے جا سکتے ہیں؟", a: "نہیں۔ سائن اپ پر صرف ایک منتخب کریں۔" },
          { q: "JazzCash سے ڈپازٹ پر بونس ملے گا؟", a: "عموماً ہاں۔ EasyPaisa بھی اہل ہے۔ کبھی کبھار مخصوص طریقے خارج ہوتے ہیں — آفیشل پروموشن صفحہ دیکھیں۔" },
          { q: "ویجرنگ مکمل ہونے سے پہلے ودڈرا کریں تو؟", a: "بونس اور اس سے حاصل جیت ضبط۔ صرف اصل ڈپازٹ (بیٹس کے بعد) واپس۔" },
          { q: "پروموشن کوڈ کہاں درج کرتے ہیں؟", a: "رجسٹریشن فارم میں 'Promo Code' خانے میں — سائن اپ کے بعد شامل نہیں ہو سکتا۔" },
          { q: "کرکٹ بیٹس ویجرنگ میں شمار ہوتی ہیں؟", a: "ہاں، پری-میچ اور لائیو کرکٹ عموماً 100% شمار اگر اوڈز 1.50 سے زیادہ ہوں۔" },
          { q: "کم سے کم ڈپازٹ کتنا؟", a: "عموماً 500 PKR۔ آفیشل کیشیئر صفحہ پر تصدیق کریں۔" },
          { q: "Max bet کتنی؟", a: "عموماً فی بیٹ 1,000 PKR۔ زیادہ پر بونس ختم۔" },
          { q: "بونس کتنے دن میں ختم کرنا ہے؟", a: "عموماً 7–30 دن۔ T&C میں مخصوص دن درج۔" },
        ],
        hi: [
          { q: "स्पोर्ट्स और कसीनो — दोनों बोनस ले सकते हैं?", a: "नहीं। साइनअप पर सिर्फ़ एक चुनें।" },
          { q: "PhonePe/UPI से डिपॉज़िट पर बोनस मिलेगा?", a: "आम तौर पर हाँ। Google Pay, Paytm भी योग्य। कभी-कभी कुछ तरीक़े बाहर रहते हैं — ऑफ़िशियल प्रोमो पेज देखें।" },
          { q: "वेजरिंग पूरी होने से पहले निकासी की तो?", a: "बोनस और उससे आई जीत ज़ब्त। केवल मूल डिपॉज़िट (बेट के बाद) वापस।" },
          { q: "प्रोमो कोड कहाँ डालें?", a: "रजिस्ट्रेशन फ़ॉर्म में 'Promo Code' बॉक्स में — साइनअप के बाद नहीं जुड़ता।" },
          { q: "क्रिकेट बेट वेजरिंग में गिने जाते हैं?", a: "हाँ, IPL/T20 प्री-मैच और लाइव क्रिकेट आम तौर पर 100% गिने जाते हैं अगर ऑड्स 1.50 से ज़्यादा हों।" },
          { q: "न्यूनतम डिपॉज़िट कितना?", a: "आम तौर पर ₹500। ऑफ़िशियल कैशियर पेज पर पुष्टि करें।" },
          { q: "Max bet कितनी?", a: "आम तौर पर प्रति बेट ₹500। पार करने पर बोनस रद्द।" },
          { q: "बोनस कितने दिन में पूरा करना है?", a: "आम तौर पर 7–30 दिन। T&C में निर्दिष्ट दिन।" },
        ],
      }}
      related={siblings(SIGNUP_CLUSTER, "/welcome-bonus")}
      articleHeadline="JeetBuzz Welcome Bonus — How to Claim Safely"
      articleDescription="Wagering, max-bet, game contribution and the right order to claim the JeetBuzz welcome bonus."
      articlePath="/welcome-bonus"
    />
  ),
});