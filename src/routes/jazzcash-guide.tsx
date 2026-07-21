import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/jazzcash-guide";
const TITLE =
  "JeetBuzz JazzCash Deposit & Withdrawal Guide Pakistan 2026 - Step by Step";
const DESC =
  "Step-by-step JeetBuzz JazzCash deposit and withdrawal guide for Pakistan 2026. Mobile Account flow, MPIN tips, daily limits and fixes when a transfer stays processing.";

export const Route = createFileRoute("/jazzcash-guide")({
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
      eyebrow="JazzCash"
      title={<>JeetBuzz <span className="gold-text">JazzCash</span> Guide</>}
      titleByLocale={{
        ur: <>JeetBuzz <span className="gold-text">JazzCash</span> گائیڈ</>,
      }}
      subtitle="JazzCash runs on Mobilink Microfinance Bank and is the other dominant Pakistani mobile money rail on JeetBuzz, here's the right flow, the MPIN check, and how it differs from EasyPaisa in practice."
      subtitleByLocale={{
        ur: "JazzCash Mobilink مائیکرو فنانس بینک پر چلتا ہے اور JeetBuzz پر پاکستان کی دوسری بڑی موبائل منی رِیل ہے, یہاں صحیح طریقہ، MPIN چیک، اور EasyPaisa سے اس کا فرق۔",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "JazzCash", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why JazzCash for Pakistan players",
        "JazzCash and EasyPaisa look similar from the outside but they sit on different banking partners (Mobilink MFB vs Telenor MFB), so balances and outgoing transfers don't bridge between the two, if you fund a JeetBuzz deposit from JazzCash, withdraw back to JazzCash, not to an EasyPaisa wallet.",
        "## Step-by-step deposit",
        "1. Log in to JeetBuzz and open Cashier > Deposit > JazzCash.",
        "2. Enter the deposit amount in PKR.",
        "3. Capture the merchant Mobile Account number and the unique reference shown on screen.",
        "4. Open JazzCash, choose Send Money to Mobile Account (not Pay Bill, not Retailer), enter the merchant number, place the unique reference in the comments/note field.",
        "5. Confirm with MPIN. Copy the JazzCash Transaction ID from the SMS that arrives within seconds.",
        "6. Paste the Transaction ID into the JeetBuzz form and submit.",
        "## Withdrawal",
        "Withdraw back to the same JazzCash Mobile Account that you used to fund. The CNIC-registered holder of the JazzCash wallet must match your JeetBuzz account name; mismatches are reversed at review.",
        "## Common mistakes",
        "- Using Pay Bill or QR Pay instead of Send Money to Mobile Account",
        "- Sending from someone else's JazzCash and assuming JeetBuzz will accept the TID",
        "- Submitting the short reference shown in the app instead of the full Transaction ID from the SMS",
        "- Submitting before the SMS confirms. JazzCash sometimes shows 'processing' for a few seconds during peak load",
        "## Limits, fees and processing time",
        "Exact deposit minimums, withdrawal caps, JeetBuzz-side fees and processing windows for JazzCash on JeetBuzz are being verified directly with the operator. Until that is confirmed, treat the figures inside the cashier at the moment of your transaction as authoritative.",
        "## Pro tip",
        "Always send via Mobile Account. JazzCash Pay Bill routes to a different reconciliation pipeline and will not auto-match a JeetBuzz deposit reference.",
      ]}
      bodyByLocale={{
        ur: [
          "## JazzCash کیوں",
          "JazzCash اور EasyPaisa بظاہر مشابہ لگتے ہیں لیکن دونوں مختلف بینکنگ پارٹنرز پر چلتے ہیں (Mobilink MFB اور Telenor MFB)، اس لیے ان کے درمیان رقم خود بخود منتقل نہیں ہوتی. JazzCash سے ڈپازٹ کریں تو ودڈرا بھی JazzCash پر ہی کریں۔",
          "JeetBuzz پر JazzCash کا فائدہ یہ ہے کہ تقریباً ہر پاکستانی صارف کے فون میں پہلے سے یہ والیٹ موجود ہے، اور Mobile Account ٹرانسفر کو آپریٹر کا cashier تیزی سے پہچان لیتا ہے۔ JazzCash پر MPIN (4 ہندسی) Send Money، Cash Out اور Bill Pay سب کے لیے ایک ہی استعمال ہوتا ہے، اس لیے MPIN کسی سے شیئر کرنا پورے والیٹ کو خطرے میں ڈالتا ہے۔",
          "## مرحلہ وار ڈپازٹ",
          "1. JeetBuzz پر لاگ ان کر کے Cashier > Deposit > JazzCash کھولیں۔",
          "2. PKR میں رقم درج کریں۔",
          "3. مرچنٹ Mobile Account نمبر اور یونیک ریفرنس نوٹ کریں۔",
          "4. JazzCash کھولیں، Send Money to Mobile Account منتخب کریں (Pay Bill یا Retailer نہیں)، مرچنٹ نمبر درج کریں اور comments/note میں یونیک ریفرنس لکھیں۔",
          "5. MPIN سے تصدیق کریں۔ آنے والے SMS سے JazzCash Transaction ID کاپی کریں۔",
          "6. Transaction ID کو JeetBuzz فارم میں paste کر کے submit کریں۔",
          "> ایک اہم بات: cashier میں دکھایا گیا ریفرنس صرف آپ کی ٹرانزیکشن کے لیے ہے اور چند منٹ بعد ختم ہو جاتا ہے۔ پرانے ریفرنس کے ساتھ بھیجی گئی رقم مینوئل ریویو میں جا کر تاخیر کا شکار ہوتی ہے۔",
          "## ڈپازٹ سے پہلے 30 سیکنڈ کا چیک",
          "- یقینی بنائیں کہ آپ کے JazzCash والیٹ میں مطلوبہ رقم + ممکنہ سروس فیس موجود ہے۔",
          "- چیک کریں کہ JazzCash اکاؤنٹ آپ کے اپنے CNIC پر رجسٹرڈ ہے, رشتہ دار کا والیٹ استعمال کرنے سے ودڈرا اٹک سکتا ہے۔",
          "- JeetBuzz cashier میں آپ کا نام اور JazzCash اکاؤنٹ ہولڈر کا نام بالکل ایک جیسا ہونا چاہیے (املا، middle name اور ترتیب سب)۔",
          "- پہلی بار کم رقم سے ٹیسٹ کریں؛ مکمل عمل سمجھ آنے کے بعد بڑی ڈپازٹ کریں۔",
          "## ودڈرا",
          "اسی JazzCash Mobile Account پر ودڈرا کریں جس سے ڈپازٹ کیا تھا۔ JazzCash والیٹ کا CNIC-رجسٹرڈ نام آپ کے JeetBuzz اکاؤنٹ کے نام سے ملنا چاہیے۔",
          "ودڈرا کی درخواست JeetBuzz cashier میں ڈالنے کے بعد آپریٹر کی تصدیق درکار ہوتی ہے۔ تصدیق مکمل ہونے کے بعد رقم عموماً چند منٹ سے چند گھنٹوں میں JazzCash والیٹ میں نظر آنے لگتی ہے، تاہم بینک ہالیڈے یا نیٹ ورک رش میں زیادہ وقت لگ سکتا ہے۔",
          "## عام غلطیاں",
          "- Send Money to Mobile Account کے بجائے Pay Bill یا QR Pay کا استعمال",
          "- کسی اور کے JazzCash سے بھیج کر TID جمع کرانا",
          "- ایپ میں دکھائے گئے مختصر ریفرنس کو SMS کے مکمل Transaction ID کے بجائے submit کرنا",
          "- SMS کی تصدیق سے پہلے submit, مصروف اوقات میں JazzCash چند سیکنڈ 'processing' دکھاتا ہے",
          "- اسکرین شاٹ لیے بغیر JeetBuzz cashier صفحے سے واپس چلے جانا (پھر اصل ریفرنس یاد نہیں رہتا)",
          "- ایک ہی ریفرنس کے خلاف دو بار رقم بھیجنا, دونوں ڈپازٹ کھل سکتے ہیں لیکن دوسرا مینوئل ریویو میں جاتا ہے",
          "## سیکیورٹی چیک لسٹ",
          "- MPIN کسی سے شیئر نہ کریں؛ JeetBuzz کا کوئی نمائندہ کبھی آپ کا MPIN یا OTP نہیں مانگتا۔",
          "- JazzCash ایپ کا بائیومیٹرک لاگ ان اور App Lock فعال رکھیں۔",
          "- مشکوک SMS یا WhatsApp لنک پر MPIN ہرگز نہ ڈالیں, یہ phishing ہے۔",
          "- JeetBuzz پر مضبوط منفرد پاس ورڈ اور 2FA لازمی فعال کریں, تفصیل کے لیے [سیکیورٹی گائیڈ](/security-guide) دیکھیں۔",
          "## ڈپازٹ اٹک گیا تو کیا کریں",
          "1. SMS اور JeetBuzz ٹرانزیکشن صفحے کا اسکرین شاٹ تیار رکھیں۔",
          "2. cashier > Transaction History میں اسی ٹرانزیکشن پر 'Help' یا 'Contact Support' دبائیں۔",
          "3. لائیو چیٹ میں TID، رقم، اور بھیجنے کا وقت بتائیں۔ اوسطاً جواب چند منٹ میں آتا ہے، اور حل عموماً اسی دن مکمل ہو جاتا ہے۔",
          "4. اپنی طرف سے ایک ہی ٹرانزیکشن کے لیے بار بار ٹکٹ نہ کھولیں, اس سے ریویو سست ہو جاتا ہے۔",
          "## حدود، فیس اور پروسیسنگ ٹائم",
          "JeetBuzz پر JazzCash کے لیے درست کم سے کم ڈپازٹ، ودڈرا کیپ، فیس اور پروسیسنگ ونڈو براہ راست آپریٹر سے تصدیق کے مرحلے میں ہیں۔ تب تک Cashier میں دکھائی گئی اقدار کو حتمی سمجھیں۔",
          "## PSL، عالمی ٹورنامنٹس اور پیک ٹائم",
          "PSL، ICC ایونٹس یا پاک-بھارت میچ کے دوران JazzCash اور JeetBuzz دونوں پر ٹریفک بڑھ جاتا ہے۔ ایسے اوقات میں ڈپازٹ پہلے سے کر لینا اور بڑی شرطوں کو ٹاس سے کچھ منٹ قبل لگانا بہتر ہے، تاکہ پروسیسنگ تاخیر آپ کی شرط کے وقت متاثر نہ کرے۔",
          "## پرو ٹِپ",
          "ہمیشہ Mobile Account سے بھیجیں۔ JazzCash Pay Bill ایک الگ ری کنسائلیشن پائپ لائن میں جاتا ہے اور JeetBuzz ڈپازٹ ریفرنس سے آٹو میچ نہیں کرے گا۔",
        ],
      }}
      faqs={[
        { q: "Is JazzCash the same as EasyPaisa for JeetBuzz purposes?", a: "Same end-result (PKR moves into your JeetBuzz balance) but different rails. Pick the one your wallet already lives on, don't try to bridge between them." },
        { q: "Which option in the JazzCash app should I use?", a: "Send Money to Mobile Account. Not Pay Bill, not QR Pay, not Retailer." },
        { q: "Why is my JazzCash deposit still pending?", a: "Either the SMS hadn't posted yet (wait, don't re-submit), the wrong ID was pasted, or the sender name doesn't match. Send the SMS screenshot to live chat." },
        { q: "Can I withdraw to a JazzCash number I didn't deposit from?", a: "Generally no. Withdraw to the funding wallet to avoid manual review." },
      ]}
      faqsByLocale={{
        ur: [
          { q: "کیا JazzCash اور EasyPaisa JeetBuzz کے لیے ایک جیسے ہیں؟", a: "نتیجہ ایک ہی (PKR JeetBuzz بیلنس میں آ جاتا ہے) لیکن رِیل مختلف ہیں۔ وہی منتخب کریں جس پر آپ کا والیٹ پہلے سے ہے۔" },
          { q: "JazzCash ایپ میں کون سا آپشن استعمال کروں؟", a: "Send Money to Mobile Account۔ Pay Bill، QR Pay یا Retailer نہیں۔" },
          { q: "میرا JazzCash ڈپازٹ ابھی تک پینڈنگ کیوں ہے؟", a: "یا تو SMS ابھی پوسٹ نہیں ہوا (انتظار کریں، دوبارہ submit نہ کریں)، یا غلط ID paste ہوا، یا بھیجنے والے کا نام مماثل نہیں۔ SMS اسکرین شاٹ لائیو چیٹ پر بھیجیں۔" },
          { q: "کیا میں ایسے JazzCash نمبر پر ودڈرا کر سکتا ہوں جس سے ڈپازٹ نہیں کیا؟", a: "عام طور پر نہیں۔ ودڈرا فنڈنگ والیٹ پر ہی کریں۔" },
          { q: "کم سے کم ڈپازٹ کتنا ہے؟", a: "JeetBuzz cashier میں اس وقت دکھائی گئی کم از کم رقم حتمی سمجھیں۔ یہ حد وقتاً فوقتاً تبدیل ہوتی رہتی ہے، اس لیے کوئی فکس نمبر یہاں درج نہیں کیا گیا۔" },
          { q: "MPIN بھول گیا ہوں، کیا کروں؟", a: "JazzCash ایپ میں 'Forgot MPIN' آپشن استعمال کریں. CNIC اور رجسٹرڈ نمبر سے ری سیٹ ممکن ہے۔ JeetBuzz سپورٹ آپ کا MPIN ری سیٹ نہیں کر سکتا۔" },
          { q: "کیا JazzCash پر فیس لگتی ہے؟", a: "JazzCash اپنی Send Money/Cash Out فیس وقتاً فوقتاً تبدیل کرتا ہے۔ ٹرانزیکشن مکمل کرنے سے پہلے ایپ میں دکھائی گئی فیس دیکھ لیں۔ JeetBuzz اپنی طرف سے کوئی اضافی فیس کم ہی لگاتا ہے، حتمی تفصیل cashier میں موجود ہوتی ہے۔" },
          { q: "JeetBuzz نام اور JazzCash CNIC نام ایک جیسے نہیں ہیں، اب کیا؟", a: "بھیجنے سے پہلے JeetBuzz پروفائل میں نام درست کریں یا CNIC کے مطابق JazzCash اپڈیٹ کریں۔ نام مماثل نہ ہونے پر ودڈرا تقریباً ہمیشہ ریویو میں اٹکتا ہے۔" },
          { q: "ڈپازٹ بھیج دیا لیکن JeetBuzz پر نہیں دکھا, رقم گئی کہاں؟", a: "اگر JazzCash SMS موصول ہوا ہے تو رقم مرچنٹ والیٹ میں محفوظ ہے۔ TID اور اسکرین شاٹ کے ساتھ لائیو چیٹ پر رابطہ کریں, رقم کریڈٹ یا واپس عموماً اسی دن ہو جاتی ہے۔" },
        ],
      }}
      related={[
        { to: "/easypaisa-guide", title: "EasyPaisa on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
        { to: "/payment-methods", title: "All Payment Methods" },
      ]}
    />
  ),
});