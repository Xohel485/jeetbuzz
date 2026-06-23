import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/easypaisa-guide";
const TITLE = "JeetBuzz EasyPaisa Guide — Deposits & Withdrawals from Pakistan";
const DESC =
  "How to deposit and withdraw on JeetBuzz with EasyPaisa from Pakistan — step-by-step flow, what to send (Mobile Account, not Retailer), and fixes for failed transactions.";

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
      subtitle="Pakistan's most-used mobile money rail on JeetBuzz — what makes EasyPaisa different from a UPI-style rail, how to fund safely, and what stops a deposit from clearing."
      subtitleByLocale={{
        ur: "JeetBuzz پر پاکستان کے سب سے زیادہ استعمال ہونے والے موبائل منی نظام میں سے ایک — EasyPaisa کیسے کام کرتا ہے، محفوظ طریقے سے فنڈ کیسے کریں اور ڈپازٹ کیوں اٹک سکتا ہے۔",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "EasyPaisa", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why EasyPaisa for Pakistan players",
        "EasyPaisa runs on Telenor Microfinance Bank and works as a closed mobile-wallet rail — different from UPI in India, where transfers are an open instant-bank protocol. On EasyPaisa, money moves between wallets (or wallet-to-bank) and a transfer typically uses your Mobile Account, not the agent/retailer flow.",
        "## Step-by-step deposit",
        "1. Log in to JeetBuzz and open Cashier > Deposit > EasyPaisa.",
        "2. Enter your deposit amount in PKR.",
        "3. Note the merchant Mobile Account number and the unique reference shown on screen — write down both before leaving the page.",
        "4. Open the EasyPaisa app, pick Send Money to a Mobile Account (not Retailer / Shop), enter the merchant number, set the amount, and place the unique reference in the message/note field.",
        "5. Authorise with your PIN. Copy the EasyPaisa Transaction ID (TID) from the confirmation SMS.",
        "6. Paste the TID into the JeetBuzz form and submit.",
        "## Withdrawal",
        "Withdraw back to the same EasyPaisa Mobile Account you funded from. The account holder name on EasyPaisa must match your JeetBuzz account name, otherwise the request will be reversed at review.",
        "## Common mistakes",
        "- Using Retailer / Shop instead of Mobile Account send",
        "- Forgetting the unique reference in the note field",
        "- Sending from a family member's EasyPaisa account (name mismatch)",
        "- Re-submitting because the TID didn't post within 30 seconds — wait for the SMS first",
        "## Limits, fees and processing time",
        "Exact deposit minimums, withdrawal caps, JeetBuzz-side fees and processing windows for EasyPaisa on JeetBuzz are being verified directly with the operator. Until that is confirmed, treat the values shown inside the cashier at the time of your transaction as the source of truth.",
        "## Pro tip",
        "Screenshot the JeetBuzz cashier page BEFORE leaving (so the merchant number + reference are saved) and the EasyPaisa SMS AFTER sending (so the TID is saved). Both make a support ticket finish in one round-trip.",
      ]}
      bodyByLocale={{
        ur: [
          "## EasyPaisa کیوں",
          "EasyPaisa Telenor مائیکرو فنانس بینک پر چلتا ہے اور بند موبائل والیٹ کے طور پر کام کرتا ہے — یہ بھارت کے UPI سے مختلف ہے، جہاں ٹرانسفر بینک ٹو بینک فوری پروٹوکول ہے۔ EasyPaisa میں رقم والیٹ سے والیٹ (یا والیٹ سے بینک) منتقل ہوتی ہے اور عام طور پر آپ کا Mobile Account استعمال ہوتا ہے، Retailer/Shop نہیں۔",
          "## مرحلہ وار ڈپازٹ",
          "1. JeetBuzz پر لاگ ان کر کے Cashier > Deposit > EasyPaisa کھولیں۔",
          "2. PKR میں رقم درج کریں۔",
          "3. اسکرین پر دکھایا گیا مرچنٹ Mobile Account نمبر اور یونیک ریفرنس نوٹ کریں۔",
          "4. EasyPaisa ایپ کھولیں، Send Money to Mobile Account منتخب کریں (Retailer نہیں)، مرچنٹ نمبر اور رقم درج کریں، اور message/note والے خانے میں یونیک ریفرنس لکھیں۔",
          "5. اپنے PIN سے تصدیق کریں۔ کنفرمیشن SMS سے EasyPaisa Transaction ID (TID) کاپی کریں۔",
          "6. TID کو JeetBuzz فارم میں paste کر کے submit کریں۔",
          "## ودڈرا",
          "اسی EasyPaisa Mobile Account پر ودڈرا کریں جس سے ڈپازٹ کیا تھا۔ EasyPaisa پر اکاؤنٹ ہولڈر کا نام آپ کے JeetBuzz اکاؤنٹ کے نام سے ملنا چاہیے۔",
          "## عام غلطیاں",
          "- Mobile Account کے بجائے Retailer/Shop استعمال کرنا",
          "- نوٹ میں یونیک ریفرنس بھول جانا",
          "- گھر کے کسی فرد کے EasyPaisa سے بھیجنا (نام مماثل نہیں)",
          "- 30 سیکنڈ میں TID پوسٹ نہ ہونے پر دوبارہ submit کرنا — پہلے SMS کا انتظار کریں",
          "## حدود، فیس اور پروسیسنگ ٹائم",
          "JeetBuzz پر EasyPaisa کے لیے درست کم سے کم ڈپازٹ، ودڈرا کیپ، فیس اور پروسیسنگ ونڈو براہ راست آپریٹر سے تصدیق کے مرحلے میں ہیں۔ تب تک ٹرانزیکشن کے وقت Cashier میں دکھائی گئی اقدار کو حتمی سمجھیں۔",
          "## پرو ٹِپ",
          "JeetBuzz کا cashier صفحہ چھوڑنے سے پہلے اسکرین شاٹ لے لیں (مرچنٹ نمبر + ریفرنس محفوظ) اور بھیجنے کے بعد EasyPaisa SMS کا اسکرین شاٹ لے لیں (TID محفوظ)۔",
        ],
      }}
      faqs={[
        { q: "Can I send from EasyPaisa Retailer?", a: "No — JeetBuzz expects a Mobile Account Send Money. Retailer/Shop transactions are routed differently and will not auto-match." },
        { q: "What if my EasyPaisa name doesn't match my JeetBuzz name?", a: "The deposit can be reversed at manual review. Update one or the other before sending — JeetBuzz support can guide the document flow." },
        { q: "Why isn't my TID accepted?", a: "Either the format is wrong (use the long TID from the SMS, not the short one shown in the app screen) or the merchant number was off by a digit. Open live chat with the SMS screenshot." },
        { q: "Is EasyPaisa instant?", a: "Once the SMS arrives and the TID is submitted, posting is usually quick. Network delays during peak hours can add a few minutes." },
      ]}
      faqsByLocale={{
        ur: [
          { q: "کیا میں EasyPaisa Retailer سے بھیج سکتا ہوں؟", a: "نہیں — JeetBuzz Mobile Account Send Money کی توقع کرتا ہے۔ Retailer/Shop ٹرانزیکشن آٹو میچ نہیں ہوتی۔" },
          { q: "اگر EasyPaisa نام JeetBuzz نام سے مطابقت نہ رکھتا ہو؟", a: "ودڈرا یا ڈپازٹ مینوئل ریویو پر ریورس ہو سکتا ہے۔ بھیجنے سے پہلے درست کر لیں — سپورٹ مدد کرے گا۔" },
          { q: "TID قبول کیوں نہیں ہو رہا؟", a: "یا تو فارمیٹ غلط ہے (SMS والا لمبا TID استعمال کریں) یا مرچنٹ نمبر میں ایک ہندسہ غلط ہے۔ SMS اسکرین شاٹ کے ساتھ لائیو چیٹ کریں۔" },
          { q: "کیا EasyPaisa فوری ہے؟", a: "SMS آنے اور TID جمع کرانے کے بعد عموماً جلدی پوسٹ ہو جاتا ہے۔ مصروف اوقات میں چند منٹ لگ سکتے ہیں۔" },
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