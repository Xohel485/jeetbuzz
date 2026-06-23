import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/jazzcash-guide";
const TITLE = "JeetBuzz JazzCash Guide — Deposits & Withdrawals from Pakistan";
const DESC =
  "How to deposit and withdraw on JeetBuzz with JazzCash from Pakistan — Mobile Account flow, MPIN tips, and what to do when a transfer goes to processing.";

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
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="JazzCash"
      title={<>JeetBuzz <span className="gold-text">JazzCash</span> Guide</>}
      titleByLocale={{
        ur: <>JeetBuzz <span className="gold-text">JazzCash</span> گائیڈ</>,
      }}
      subtitle="JazzCash runs on Mobilink Microfinance Bank and is the other dominant Pakistani mobile money rail on JeetBuzz — here's the right flow, the MPIN check, and how it differs from EasyPaisa in practice."
      subtitleByLocale={{
        ur: "JazzCash Mobilink مائیکرو فنانس بینک پر چلتا ہے اور JeetBuzz پر پاکستان کی دوسری بڑی موبائل منی رِیل ہے — یہاں صحیح طریقہ، MPIN چیک، اور EasyPaisa سے اس کا فرق۔",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "JazzCash", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why JazzCash for Pakistan players",
        "JazzCash and EasyPaisa look similar from the outside but they sit on different banking partners (Mobilink MFB vs Telenor MFB), so balances and outgoing transfers don't bridge between the two — if you fund a JeetBuzz deposit from JazzCash, withdraw back to JazzCash, not to an EasyPaisa wallet.",
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
        "- Submitting before the SMS confirms — JazzCash sometimes shows 'processing' for a few seconds during peak load",
        "## Limits, fees and processing time",
        "Exact deposit minimums, withdrawal caps, JeetBuzz-side fees and processing windows for JazzCash on JeetBuzz are being verified directly with the operator. Until that is confirmed, treat the figures inside the cashier at the moment of your transaction as authoritative.",
        "## Pro tip",
        "Always send via Mobile Account. JazzCash Pay Bill routes to a different reconciliation pipeline and will not auto-match a JeetBuzz deposit reference.",
      ]}
      bodyByLocale={{
        ur: [
          "## JazzCash کیوں",
          "JazzCash اور EasyPaisa بظاہر مشابہ لگتے ہیں لیکن دونوں مختلف بینکنگ پارٹنرز پر چلتے ہیں (Mobilink MFB اور Telenor MFB)، اس لیے ان کے درمیان رقم خود بخود منتقل نہیں ہوتی — JazzCash سے ڈپازٹ کریں تو ودڈرا بھی JazzCash پر ہی کریں۔",
          "## مرحلہ وار ڈپازٹ",
          "1. JeetBuzz پر لاگ ان کر کے Cashier > Deposit > JazzCash کھولیں۔",
          "2. PKR میں رقم درج کریں۔",
          "3. مرچنٹ Mobile Account نمبر اور یونیک ریفرنس نوٹ کریں۔",
          "4. JazzCash کھولیں، Send Money to Mobile Account منتخب کریں (Pay Bill یا Retailer نہیں)، مرچنٹ نمبر درج کریں اور comments/note میں یونیک ریفرنس لکھیں۔",
          "5. MPIN سے تصدیق کریں۔ آنے والے SMS سے JazzCash Transaction ID کاپی کریں۔",
          "6. Transaction ID کو JeetBuzz فارم میں paste کر کے submit کریں۔",
          "## ودڈرا",
          "اسی JazzCash Mobile Account پر ودڈرا کریں جس سے ڈپازٹ کیا تھا۔ JazzCash والیٹ کا CNIC-رجسٹرڈ نام آپ کے JeetBuzz اکاؤنٹ کے نام سے ملنا چاہیے۔",
          "## عام غلطیاں",
          "- Send Money to Mobile Account کے بجائے Pay Bill یا QR Pay کا استعمال",
          "- کسی اور کے JazzCash سے بھیج کر TID جمع کرانا",
          "- ایپ میں دکھائے گئے مختصر ریفرنس کو SMS کے مکمل Transaction ID کے بجائے submit کرنا",
          "- SMS کی تصدیق سے پہلے submit — مصروف اوقات میں JazzCash چند سیکنڈ 'processing' دکھاتا ہے",
          "## حدود، فیس اور پروسیسنگ ٹائم",
          "JeetBuzz پر JazzCash کے لیے درست کم سے کم ڈپازٹ، ودڈرا کیپ، فیس اور پروسیسنگ ونڈو براہ راست آپریٹر سے تصدیق کے مرحلے میں ہیں۔ تب تک Cashier میں دکھائی گئی اقدار کو حتمی سمجھیں۔",
          "## پرو ٹِپ",
          "ہمیشہ Mobile Account سے بھیجیں۔ JazzCash Pay Bill ایک الگ ری کنسائلیشن پائپ لائن میں جاتا ہے اور JeetBuzz ڈپازٹ ریفرنس سے آٹو میچ نہیں کرے گا۔",
        ],
      }}
      faqs={[
        { q: "Is JazzCash the same as EasyPaisa for JeetBuzz purposes?", a: "Same end-result (PKR moves into your JeetBuzz balance) but different rails. Pick the one your wallet already lives on — don't try to bridge between them." },
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