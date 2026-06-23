import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/paytm-guide";
const TITLE = "JeetBuzz Paytm Guide — Deposits via UPI from India";
const DESC =
  "Funding JeetBuzz from India using Paytm — the UPI path (recommended), what changed after Paytm Payments Bank restrictions, and how Paytm differs from PhonePe in practice.";

export const Route = createFileRoute("/paytm-guide")({
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
      eyebrow="Paytm"
      title={<>JeetBuzz <span className="gold-text">Paytm</span> Guide</>}
      titleByLocale={{
        hi: <>JeetBuzz <span className="gold-text">Paytm</span> गाइड</>,
      }}
      subtitle="Paytm became the original wallet brand for many Indian users, then shifted to a UPI-first model after the Paytm Payments Bank restrictions. For JeetBuzz the practical answer is unchanged — use the UPI path."
      subtitleByLocale={{
        hi: "बहुत-से भारतीय यूज़र्स के लिए Paytm पहला वॉलेट ब्रांड था, फिर Paytm Payments Bank पर लगी पाबंदियों के बाद यह UPI-फ़र्स्ट हो गया। JeetBuzz के लिए व्यावहारिक जवाब वही है — UPI path इस्तेमाल करें।",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "Paytm", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## What changed with Paytm, and what didn't",
        "Paytm Payments Bank faced RBI restrictions in 2024 that limited some wallet top-up flows, but the UPI rail through Paytm continued operating — your Paytm app still sends UPI from any bank account you've linked, exactly like PhonePe or Google Pay. For JeetBuzz, this is the route to use.",
        "## Step-by-step deposit",
        "1. Log in to JeetBuzz and open Cashier > Deposit > UPI (or Paytm if listed).",
        "2. Enter the INR deposit amount.",
        "3. Capture the merchant VPA and the unique reference shown in the cashier.",
        "4. Open Paytm, tap UPI Money Transfer → Pay to UPI ID, paste the merchant VPA. Verify the merchant name Paytm shows before continuing.",
        "5. Enter the amount, put the unique reference in the remarks/message field, authorise with UPI PIN.",
        "6. Note the 12-digit UTR from the success page (also visible under Passbook → that transaction), paste it into JeetBuzz and submit.",
        "## Withdrawal",
        "Receive into a bank account in your own name, linked via Paytm to a UPI ID you control. Avoid using a UPI ID tied to a Paytm Payments Bank handle for receiving — pick a UPI ID linked to a regular scheduled-commercial bank account to reduce withdrawal friction.",
        "## Common Paytm-specific issues",
        "- If your UPI ID is @paytm and the receiving rail behaves oddly post-restrictions, switch the linked UPI ID to your regular bank's handle (e.g. @okhdfcbank, @ybl) inside the Paytm app.",
        "- Wallet balance is not what JeetBuzz draws from on UPI deposits — that's still bank-to-bank.",
        "- Some bank issuers are stricter with first-time sends to a new merchant VPA via Paytm. The retry from PhonePe or Google Pay sometimes goes through immediately.",
        "## Limits, fees and processing time",
        "Paytm-side caps, bank-issuer behaviour on UPI sends to JeetBuzz's merchant, and exact JeetBuzz reconciliation windows are being verified directly with the operator. Until that is confirmed, treat the figures inside the JeetBuzz cashier at the moment of your transaction as authoritative.",
      ]}
      bodyByLocale={{
        hi: [
          "## Paytm में क्या बदला, क्या नहीं",
          "2024 में RBI ने Paytm Payments Bank पर पाबंदियाँ लगाईं जिनसे कुछ wallet top-up flows सीमित हुए, लेकिन Paytm के ज़रिए UPI रेल चलती रही — Paytm ऐप अभी भी आपके किसी भी लिंक्ड बैंक खाते से UPI भेजता है, बिल्कुल PhonePe या Google Pay की तरह। JeetBuzz के लिए यही route इस्तेमाल करें।",
          "## स्टेप-बाय-स्टेप डिपॉज़िट",
          "1. JeetBuzz पर लॉगिन करें, Cashier > Deposit > UPI (या Paytm यदि अलग दिखे) खोलें।",
          "2. INR राशि डालें।",
          "3. कैशियर में दिखाया मर्चेंट VPA और यूनीक रेफ़रेंस नोट करें।",
          "4. Paytm खोलें, UPI Money Transfer → Pay to UPI ID पर tap करें, मर्चेंट VPA paste करें। आगे बढ़ने से पहले Paytm जो मर्चेंट नाम दिखाए, उसे verify करें।",
          "5. राशि डालें, remarks/message में यूनीक रेफ़रेंस लिखें, UPI PIN से authorise करें।",
          "6. Success पेज से 12-अंक का UTR नोट करें (Passbook में उसी transaction में भी मिलेगा), JeetBuzz में paste कर submit करें।",
          "## विदड्रॉल",
          "अपने ही नाम के बैंक खाते में, Paytm से लिंक्ड किसी UPI ID पर लें। प्राप्ति के लिए @paytm वाले UPI ID का इस्तेमाल पाबंदियों के बाद से कम भरोसेमंद हो सकता है — अपने नियमित commercial बैंक का handle (जैसे @okhdfcbank, @ybl) Paytm में चुनें।",
          "## Paytm-विशिष्ट दिक़्क़तें",
          "- यदि आपका UPI ID @paytm है और पाबंदियों के बाद विदड्रॉल receiving में अजीब व्यवहार दिखे, तो Paytm ऐप में लिंक्ड UPI ID अपने आम बैंक के handle पर switch करें।",
          "- वॉलेट बैलेंस से JeetBuzz UPI डिपॉज़िट नहीं होता — वह बैंक-टू-बैंक है।",
          "- कुछ बैंक नए मर्चेंट VPA पर पहली बार Paytm से भेजते समय सख़्त होते हैं। PhonePe या Google Pay से retry कई बार तुरंत निकल जाती है।",
          "## लिमिट, फ़ीस और प्रोसेसिंग टाइम",
          "Paytm-साइड कैप्स, JeetBuzz के मर्चेंट पर UPI sends का बैंक-issuer व्यवहार और JeetBuzz की सटीक रिकंसिलिएशन विंडो ऑपरेटर से सीधे सत्यापित की जा रही हैं। तब तक लेन-देन के समय JeetBuzz कैशियर में दिखाई गई वैल्यू मान्य है।",
        ],
      }}
      faqs={[
        { q: "Can I pay JeetBuzz from my Paytm wallet balance?", a: "No — JeetBuzz UPI deposits run on the UPI rail, which is bank-to-bank. Your Paytm wallet balance is separate and not used here." },
        { q: "I have a @paytm UPI ID — should I keep using it?", a: "For sending it usually still works. For receiving withdrawals, a UPI ID linked to a regular commercial bank account tends to have fewer hiccups since the Payments Bank restrictions." },
        { q: "Paytm shows 'failed' but the bank debited me — what now?", a: "It is being reversed by NPCI's auto-reversal system within a banking day. If not reversed in 24 hours, raise it with your bank citing the UTR and the merchant name." },
        { q: "Which is faster: Paytm, PhonePe or Google Pay?", a: "All identical for JeetBuzz — same NPCI rail, same UTR, same reconciliation." },
      ]}
      faqsByLocale={{
        hi: [
          { q: "क्या Paytm वॉलेट बैलेंस से JeetBuzz को भुगतान कर सकते हैं?", a: "नहीं — JeetBuzz UPI डिपॉज़िट UPI रेल पर हैं, जो बैंक-टू-बैंक है। Paytm वॉलेट बैलेंस अलग है, यहाँ इस्तेमाल नहीं होता।" },
          { q: "मेरा @paytm UPI ID है — क्या इसी पर बना रहूँ?", a: "Send करने के लिए आम तौर पर अब भी चलता है। पर विदड्रॉल receive करने के लिए नियमित commercial बैंक से लिंक्ड UPI ID में कम दिक़्क़तें आती हैं।" },
          { q: "Paytm 'failed' दिखा रहा है पर बैंक से पैसा कटा — अब क्या?", a: "NPCI का auto-reversal सिस्टम बैंकिंग दिन के अंदर वापसी करता है। 24 घंटे में न हो तो UTR और मर्चेंट नाम के साथ अपने बैंक से raise करें।" },
          { q: "Paytm, PhonePe या Google Pay — कौन तेज़?", a: "JeetBuzz के लिए सब बराबर — वही NPCI रेल, वही UTR, वही रिकंसिलिएशन।" },
        ],
      }}
      related={[
        { to: "/upi-guide", title: "UPI on JeetBuzz" },
        { to: "/phonepe-guide", title: "PhonePe on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
        { to: "/payment-methods", title: "All Payment Methods" },
      ]}
    />
  ),
});