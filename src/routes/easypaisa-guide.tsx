import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/easypaisa-guide";
const TITLE =
  "JeetBuzz EasyPaisa Deposit & Withdrawal Guide Pakistan 2026 - Step by Step";
const DESC =
  "Step-by-step JeetBuzz EasyPaisa deposit and withdrawal guide for Pakistan 2026. Mobile Account flow (not Retailer), MPIN tips, limits and fixes for failed transfers.";

export const Route = createFileRoute("/easypaisa-guide")({
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
      eyebrow="EasyPaisa"
      title={<>JeetBuzz <span className="gold-text">EasyPaisa</span> Guide</>}
      titleByLocale={{
        ur: <>JeetBuzz <span className="gold-text">EasyPaisa</span> گائیڈ</>,
      }}
      subtitle="Pakistan's most-used mobile money rail on JeetBuzz, what makes EasyPaisa different from a UPI-style rail, how to fund safely, and what stops a deposit from clearing."
      subtitleByLocale={{
        ur: "JeetBuzz پر پاکستان کے سب سے زیادہ استعمال ہونے والے موبائل منی نظام میں سے ایک. EasyPaisa کیسے کام کرتا ہے، محفوظ طریقے سے فنڈ کیسے کریں اور ڈپازٹ کیوں اٹک سکتا ہے۔",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "EasyPaisa", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why EasyPaisa for Pakistan players",
        "EasyPaisa runs on Telenor Microfinance Bank and works as a closed mobile-wallet rail, different from UPI in India, where transfers are an open instant-bank protocol. On EasyPaisa, money moves between wallets (or wallet-to-bank) and a transfer typically uses your Mobile Account, not the agent/retailer flow.",
        "## Step-by-step deposit",
        "1. Log in to JeetBuzz and open Cashier > Deposit > EasyPaisa.",
        "2. Enter your deposit amount in PKR.",
        "3. Note the merchant Mobile Account number and the unique reference shown on screen, write down both before leaving the page.",
        "4. Open the EasyPaisa app, pick Send Money to a Mobile Account (not Retailer / Shop), enter the merchant number, set the amount, and place the unique reference in the message/note field.",
        "5. Authorise with your PIN. Copy the EasyPaisa Transaction ID (TID) from the confirmation SMS.",
        "6. Paste the TID into the JeetBuzz form and submit.",
        "## Withdrawal",
        "Withdraw back to the same EasyPaisa Mobile Account you funded from. The account holder name on EasyPaisa must match your JeetBuzz account name, otherwise the request will be reversed at review.",
        "## Common mistakes",
        "- Using Retailer / Shop instead of Mobile Account send",
        "- Forgetting the unique reference in the note field",
        "- Sending from a family member's EasyPaisa account (name mismatch)",
        "- Re-submitting because the TID didn't post within 30 seconds, wait for the SMS first",
        "## Limits, fees and processing time",
        "Exact deposit minimums, withdrawal caps, JeetBuzz-side fees and processing windows for EasyPaisa on JeetBuzz are being verified directly with the operator. Until that is confirmed, treat the values shown inside the cashier at the time of your transaction as the source of truth.",
        "## Pro tip",
        "Screenshot the JeetBuzz cashier page BEFORE leaving (so the merchant number + reference are saved) and the EasyPaisa SMS AFTER sending (so the TID is saved). Both make a support ticket finish in one round-trip.",
      ]}
      bodyByLocale={{
        ur: [
          "## EasyPaisa کیوں",
          "EasyPaisa Telenor مائیکرو فنانس بینک پر چلتا ہے اور بند موبائل والیٹ کے طور پر کام کرتا ہے, یہ بھارت کے UPI سے مختلف ہے، جہاں ٹرانسفر بینک ٹو بینک فوری پروٹوکول ہے۔ EasyPaisa میں رقم والیٹ سے والیٹ (یا والیٹ سے بینک) منتقل ہوتی ہے اور عام طور پر آپ کا Mobile Account استعمال ہوتا ہے، Retailer/Shop نہیں۔",
          "JeetBuzz پر EasyPaisa کا فائدہ یہ ہے کہ آپ بغیر بینک اکاؤنٹ کے بھی صرف اپنے Telenor یا کسی بھی نمبر پر کھولے گئے Mobile Account سے فنڈ کر سکتے ہیں۔ Mobile Account اور Retailer دو بالکل مختلف چیزیں ہیں. JeetBuzz صرف Mobile Account سے Send Money کو پہچانتا ہے، اس لیے دکان پر نقد دے کر بھیجنے کا طریقہ یہاں کام نہیں کرتا۔",
          "## مرحلہ وار ڈپازٹ",
          "1. JeetBuzz پر لاگ ان کر کے Cashier > Deposit > EasyPaisa کھولیں۔",
          "2. PKR میں رقم درج کریں۔",
          "3. اسکرین پر دکھایا گیا مرچنٹ Mobile Account نمبر اور یونیک ریفرنس نوٹ کریں۔",
          "4. EasyPaisa ایپ کھولیں، Send Money to Mobile Account منتخب کریں (Retailer نہیں)، مرچنٹ نمبر اور رقم درج کریں، اور message/note والے خانے میں یونیک ریفرنس لکھیں۔",
          "5. اپنے PIN سے تصدیق کریں۔ کنفرمیشن SMS سے EasyPaisa Transaction ID (TID) کاپی کریں۔",
          "6. TID کو JeetBuzz فارم میں paste کر کے submit کریں۔",
          "> JeetBuzz cashier میں دکھایا گیا یونیک ریفرنس صرف چند منٹ کے لیے ہوتا ہے۔ پرانا ریفرنس استعمال کرنے سے ڈپازٹ آٹو میچ نہیں ہوتا اور مینوئل ریویو میں چلا جاتا ہے۔",
          "## بھیجنے سے پہلے 30 سیکنڈ کی جانچ",
          "- یقین کر لیں کہ آپ Send Money to Mobile Account پر ہیں, اوپر EasyPaisa ایپ میں واضح طور پر یہ آپشن منتخب نظر آنا چاہیے۔",
          "- EasyPaisa اکاؤنٹ آپ کے اپنے CNIC پر ہو؛ بھائی یا والد کے والیٹ سے بھیجنے پر ودڈرا روک لی جاتی ہے۔",
          "- JeetBuzz پروفائل کا نام اور EasyPaisa اکاؤنٹ ہولڈر کا نام بالکل ایک جیسا ہونا چاہیے۔",
          "- پہلی ٹرانزیکشن ہمیشہ کم رقم سے کریں تاکہ آپ کا اکاؤنٹ مکمل طور پر تصدیق ہو جائے۔",
          "## ودڈرا",
          "اسی EasyPaisa Mobile Account پر ودڈرا کریں جس سے ڈپازٹ کیا تھا۔ EasyPaisa پر اکاؤنٹ ہولڈر کا نام آپ کے JeetBuzz اکاؤنٹ کے نام سے ملنا چاہیے۔",
          "تصدیق کے بعد رقم عموماً چند منٹ سے چند گھنٹوں میں EasyPaisa والیٹ میں نظر آنے لگتی ہے۔ بینک ہالیڈے، اختتامِ ہفتہ یا کرکٹ ایونٹس کے دوران رش زیادہ ہونے کی وجہ سے کچھ تاخیر ممکن ہے, یہ معمول کا رویہ ہے، گھبرانے کی بات نہیں۔",
          "## عام غلطیاں",
          "- Mobile Account کے بجائے Retailer/Shop استعمال کرنا",
          "- نوٹ میں یونیک ریفرنس بھول جانا",
          "- گھر کے کسی فرد کے EasyPaisa سے بھیجنا (نام مماثل نہیں)",
          "- 30 سیکنڈ میں TID پوسٹ نہ ہونے پر دوبارہ submit کرنا, پہلے SMS کا انتظار کریں",
          "- cashier صفحے سے واپس جانے کے بعد پرانا یونیک ریفرنس دوبارہ استعمال کرنا",
          "- ایک ہی TID دو بار submit کرنا, اس سے ڈپازٹ ڈپلیکیٹ بن جاتا ہے اور دونوں روک لیے جاتے ہیں",
          "## EasyPaisa سیکیورٹی چیک لسٹ",
          "- اپنا PIN اور OTP کسی سے شیئر نہ کریں؛ JeetBuzz کبھی آپ کا PIN نہیں مانگتا۔",
          "- EasyPaisa ایپ پر بائیومیٹرک یا App Lock لازمی فعال رکھیں۔",
          "- 'EasyPaisa سے انعام' کہنے والے کالز یا SMS فوراً نظر انداز کریں, یہ phishing ہیں۔",
          "- JeetBuzz پر مضبوط منفرد پاس ورڈ اور 2FA رکھیں؛ تفصیل کے لیے [سیکیورٹی گائیڈ](/security-guide) دیکھیں۔",
          "## ڈپازٹ یا ودڈرا اٹک گئی تو کیا کریں",
          "1. EasyPaisa SMS اور JeetBuzz ٹرانزیکشن ہسٹری دونوں کے اسکرین شاٹ تیار کریں۔",
          "2. JeetBuzz cashier > Transaction History سے متعلقہ ٹرانزیکشن پر سپورٹ کھولیں۔",
          "3. لائیو چیٹ پر TID، رقم اور بھیجنے کا وقت بتائیں۔ معیاری اوقات میں جواب چند منٹ میں آتا ہے۔",
          "4. ایک ہی مسئلے پر متعدد ٹکٹ نہ کھولیں, اس سے ریویو سست ہو جاتا ہے۔",
          "## EasyPaisa بمقابلہ JazzCash. JeetBuzz پر کیا فرق پڑتا ہے؟",
          "نتیجہ ایک جیسا ہے، لیکن دونوں الگ بینکنگ پارٹنرز پر چلتے ہیں۔ اگر آپ کا EasyPaisa Mobile Account پہلے سے فعال ہے، یہی استعمال کریں اور ودڈرا بھی اسی پر کریں۔ JazzCash اور EasyPaisa کے درمیان رقم خود بخود منتقل نہیں ہوتی, جس والیٹ سے ڈپازٹ کیا، اسی پر ودڈرا کریں ورنہ مینوئل ریویو میں تاخیر ممکن ہے۔ تفصیل کے لیے [JazzCash گائیڈ](/jazzcash-guide) دیکھیں۔",
          "## حدود، فیس اور پروسیسنگ ٹائم",
          "JeetBuzz پر EasyPaisa کے لیے درست کم سے کم ڈپازٹ، ودڈرا کیپ، فیس اور پروسیسنگ ونڈو براہ راست آپریٹر سے تصدیق کے مرحلے میں ہیں۔ تب تک ٹرانزیکشن کے وقت Cashier میں دکھائی گئی اقدار کو حتمی سمجھیں۔",
          "## پرو ٹِپ",
          "JeetBuzz کا cashier صفحہ چھوڑنے سے پہلے اسکرین شاٹ لے لیں (مرچنٹ نمبر + ریفرنس محفوظ) اور بھیجنے کے بعد EasyPaisa SMS کا اسکرین شاٹ لے لیں (TID محفوظ)۔",
        ],
      }}
      faqs={[
        { q: "Can I send from EasyPaisa Retailer?", a: "No. JeetBuzz expects a Mobile Account Send Money. Retailer/Shop transactions are routed differently and will not auto-match." },
        { q: "What if my EasyPaisa name doesn't match my JeetBuzz name?", a: "The deposit can be reversed at manual review. Update one or the other before sending. JeetBuzz support can guide the document flow." },
        { q: "Why isn't my TID accepted?", a: "Either the format is wrong (use the long TID from the SMS, not the short one shown in the app screen) or the merchant number was off by a digit. Open live chat with the SMS screenshot." },
        { q: "Is EasyPaisa instant?", a: "Once the SMS arrives and the TID is submitted, posting is usually quick. Network delays during peak hours can add a few minutes." },
      ]}
      faqsByLocale={{
        ur: [
          { q: "کیا میں EasyPaisa Retailer سے بھیج سکتا ہوں؟", a: "نہیں. JeetBuzz Mobile Account Send Money کی توقع کرتا ہے۔ Retailer/Shop ٹرانزیکشن آٹو میچ نہیں ہوتی۔" },
          { q: "اگر EasyPaisa نام JeetBuzz نام سے مطابقت نہ رکھتا ہو؟", a: "ودڈرا یا ڈپازٹ مینوئل ریویو پر ریورس ہو سکتا ہے۔ بھیجنے سے پہلے درست کر لیں, سپورٹ مدد کرے گا۔" },
          { q: "TID قبول کیوں نہیں ہو رہا؟", a: "یا تو فارمیٹ غلط ہے (SMS والا لمبا TID استعمال کریں) یا مرچنٹ نمبر میں ایک ہندسہ غلط ہے۔ SMS اسکرین شاٹ کے ساتھ لائیو چیٹ کریں۔" },
          { q: "EasyPaisa ڈپازٹ کتنی دیر میں آتا ہے؟", a: "SMS موصول ہونے اور TID submit کرنے کے بعد عموماً چند منٹ میں بیلنس میں نظر آ جاتا ہے۔ پیک اوقات یا نیٹ ورک کانجیشن میں چند منٹ سے ایک گھنٹہ تک ممکن ہے, کوئی فکس وقت گارنٹی نہیں۔" },
          { q: "کیا EasyPaisa پر فیس لگتی ہے؟", a: "EasyPaisa اپنی Send Money/Cash Out فیس کا ڈھانچہ وقتاً فوقتاً اپڈیٹ کرتا ہے؛ ٹرانزیکشن کنفرم کرنے سے پہلے ایپ میں دکھائی گئی فیس پڑھ لیں۔ JeetBuzz اپنی طرف سے اضافی فیس عام طور پر نہیں لگاتا، حتمی تفصیل cashier میں موجود ہوتی ہے۔" },
          { q: "کم سے کم ڈپازٹ کتنا ہے؟", a: "JeetBuzz cashier میں اس وقت دکھائی گئی کم از کم رقم حتمی سمجھیں۔ پروموشن یا اکاؤنٹ سطح کے لحاظ سے یہ بدل سکتی ہے، اس لیے یہاں فکس نمبر درج نہیں کیا گیا۔" },
          { q: "PIN بھول گیا ہوں، کیا کروں؟", a: "EasyPaisa ایپ میں 'Forgot PIN' آپشن استعمال کریں. CNIC اور رجسٹرڈ نمبر سے ری سیٹ ممکن ہے۔ JeetBuzz سپورٹ آپ کا EasyPaisa PIN ری سیٹ نہیں کر سکتا۔" },
          { q: "ڈپازٹ بھیج دیا لیکن JeetBuzz پر نہیں دکھا، رقم کہاں گئی؟", a: "اگر EasyPaisa SMS آ گیا ہے تو رقم محفوظ ہے۔ TID اور اسکرین شاٹ کے ساتھ لائیو چیٹ پر رابطہ کریں؛ کریڈٹ یا ریورسل عموماً اسی دن مکمل ہو جاتا ہے۔" },
          { q: "ایک ہی دن میں متعدد ڈپازٹ کر سکتا ہوں؟", a: "ہاں، تب تک جب تک آپ کم سے کم اور زیادہ سے زیادہ روزانہ حد کے اندر رہیں۔ ہر ڈپازٹ کے لیے cashier سے نیا یونیک ریفرنس لازمی لیں۔" },
        ],
      }}
      related={[
        { to: "/jazzcash-guide", title: "JazzCash on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
        { to: "/payment-methods", title: "All Payment Methods" },
      ]}
    />
  ),
});