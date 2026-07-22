import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/phonepe-guide";
const TITLE =
  "JeetBuzz PhonePe Deposit Guide India 2026 - UPI VPA, Step by Step";
const DESC =
  "Step-by-step JeetBuzz PhonePe deposit guide for India 2026. UPI VPA flow, what PhonePe actually does, transaction limits and how to avoid success-but-pending cashier states.";

export const Route = createFileRoute("/phonepe-guide")({
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
      eyebrow="PhonePe"
      title={<>JeetBuzz <span className="gold-text">PhonePe</span> Guide</>}
      titleByLocale={{
        hi: <>JeetBuzz <span className="gold-text">PhonePe</span> गाइड</>,
      }}
      subtitle="PhonePe is a UPI front-end, the underlying transfer is the same NPCI rail. Here is the PhonePe-specific path, screen by screen, and the merchant-name-check stage where most pending tickets actually originate."
      subtitleByLocale={{
        hi: "PhonePe एक UPI फ़्रंट-एंड है, अंदर वही NPCI रेल चलती है। यहाँ PhonePe-विशिष्ट रास्ता स्क्रीन-दर-स्क्रीन है, और वो मर्चेंट-नेम-चेक स्टेज जहाँ ज़्यादातर pending टिकट असल में बनते हैं।",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "PhonePe", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## PhonePe is UPI, not a separate wallet for this purpose",
        "When you Pay to UPI ID in PhonePe, you're sending over NPCI's rail. JeetBuzz reconciles the resulting UTR exactly the same way regardless of which app you used. The PhonePe wallet balance (older closed-loop) is not what's being used; you're sending from your linked bank account.",
        "## Step-by-step deposit",
        "1. Log in to JeetBuzz and open Cashier > Deposit > UPI (or PhonePe specifically if listed).",
        "2. Enter the INR deposit amount.",
        "3. Capture the merchant VPA and the unique reference shown on screen.",
        "4. Open PhonePe, tap To Mobile or UPI ID, paste the VPA. PhonePe will show the merchant name resolved by the bank, eyeball it before continuing.",
        "5. Enter the amount, put the unique reference in the message field, confirm with UPI PIN.",
        "6. From the success screen copy the 12-digit UTR (or open the transaction → Transaction ID), paste it into JeetBuzz and submit.",
        "## Withdrawal",
        "Receive UPI withdrawals into a PhonePe-linked bank account that is in your own name. Receiving on a UPI ID tied to a relative's account is the most common cause of a reversed withdrawal.",
        "## Common PhonePe-specific issues",
        "- PhonePe occasionally caps daily UPI count per app, if you've already done several UPI sends today, the next one may be blocked even though the bank limit isn't hit. Switch to another UPI app and retry.",
        "- 'Transaction pending' on PhonePe usually self-clears within minutes. Do not re-send the same amount.",
        "- Some bank issuers add an extra 2FA when sending to a less-frequented VPA. If you see this once, it should not repeat on subsequent sends to the same merchant.",
        "## Limits, fees and processing time",
        "PhonePe-specific daily counts, bank-side gambling MCC handling and JeetBuzz reconciliation windows are being verified directly with the operator. Until that is confirmed, treat the figures inside the JeetBuzz cashier at the moment of your transaction as authoritative.",
      ]}
      bodyByLocale={{
        hi: [
          "## इस संदर्भ में PhonePe अलग वॉलेट नहीं, UPI ही है",
          "PhonePe में Pay to UPI ID करने पर पैसा NPCI रेल पर ही जाता है, आपने कौन-सा ऐप इस्तेमाल किया, इसका JeetBuzz के UTR मिलान पर कोई फ़र्क़ नहीं पड़ता। पुराना PhonePe वॉलेट बैलेंस यहाँ इस्तेमाल नहीं होता; पैसा आपके लिंक्ड बैंक खाते से जाता है।",
          "## स्टेप-बाय-स्टेप डिपॉज़िट",
          "1. JeetBuzz पर लॉगिन करें, Cashier > Deposit > UPI (या PhonePe यदि अलग दिखे) खोलें।",
          "2. INR राशि डालें।",
          "3. मर्चेंट VPA और यूनीक रेफ़रेंस नोट करें।",
          "4. PhonePe खोलें, To Mobile or UPI ID पर tap करें, VPA paste करें। PhonePe बैंक से resolve हुआ मर्चेंट नाम दिखाएगा, आगे बढ़ने से पहले एक नज़र डाल लें।",
          "5. राशि डालें, message में यूनीक रेफ़रेंस रखें, UPI PIN से कन्फ़र्म करें।",
          "6. Success स्क्रीन से 12-अंक का UTR कॉपी करें (या transaction → Transaction ID), JeetBuzz में paste कर submit करें।",
          "## विदड्रॉल",
          "अपने ही नाम के, PhonePe से लिंक्ड बैंक खाते में UPI विदड्रॉल लें। रिश्तेदार के खाते से जुड़े UPI ID पर पैसा लेना, रिवर्स होने का सबसे आम कारण है।",
          "## PhonePe-विशिष्ट दिक़्क़तें",
          "- PhonePe कभी-कभी प्रति-दिन UPI काउंट ऐप-स्तर पर सीमित कर देता है, यदि आज कई UPI भेजे हैं तो अगला block हो सकता है, भले बैंक लिमिट न लगी हो। दूसरे UPI ऐप से कोशिश करें।",
          "- 'Transaction pending' अक्सर खुद कुछ मिनटों में clear हो जाता है। उतनी ही राशि दोबारा न भेजें।",
          "- कुछ बैंक कम इस्तेमाल किए VPA पर भेजते समय अतिरिक्त 2FA लगाते हैं। एक बार के बाद उसी मर्चेंट पर दोबारा नहीं आएगा।",
          "## लिमिट, फ़ीस और प्रोसेसिंग टाइम",
          "PhonePe-विशिष्ट डेली काउंट, बैंक-साइड gambling MCC हैंडलिंग और JeetBuzz रिकंसिलिएशन विंडो ऑपरेटर से सीधे सत्यापित की जा रही हैं। तब तक लेन-देन के समय JeetBuzz कैशियर में दिखाई गई वैल्यू मान्य है।",
        ],
      }}
      faqs={[
        { q: "Does it matter that I'm using PhonePe vs Google Pay vs Paytm?", a: "Not for reconciliation. JeetBuzz only cares about the UTR. Pick whichever app you use comfortably day-to-day." },
        { q: "PhonePe says success but JeetBuzz still pending, what now?", a: "Wait a few minutes, then open live chat with the UTR. Re-sending doubles your deposit, it doesn't unstick the first one." },
        { q: "Can I deposit using my PhonePe wallet balance?", a: "No. JeetBuzz UPI deposits go bank-to-bank. The closed-loop wallet route is not used here." },
        { q: "Why does PhonePe sometimes block a UPI send?", a: "Per-app daily count or bank-side risk check. Switch to another UPI app for the next attempt; that almost always works." },
      ]}
      faqsByLocale={{
        hi: [
          { q: "क्या PhonePe बनाम Google Pay बनाम Paytm से फ़र्क़ पड़ता है?", a: "रिकंसिलिएशन पर नहीं। JeetBuzz सिर्फ़ UTR देखता है। जिस ऐप पर आप सहज हैं, वही चुनें।" },
          { q: "PhonePe success कह रहा है पर JeetBuzz pending, अब क्या?", a: "कुछ मिनट रुकें, फिर UTR के साथ लाइव चैट करें। दोबारा भेजना डिपॉज़िट दोगुना करेगा, पहले वाला तय नहीं होगा।" },
          { q: "क्या PhonePe वॉलेट बैलेंस से डिपॉज़िट कर सकते हैं?", a: "नहीं. JeetBuzz UPI डिपॉज़िट बैंक-टू-बैंक होते हैं। क्लोज़्ड-लूप वॉलेट route यहाँ नहीं चलता।" },
          { q: "PhonePe कभी-कभी UPI send क्यों block करता है?", a: "प्रति-ऐप डेली काउंट या बैंक-साइड रिस्क चेक। अगली कोशिश दूसरे UPI ऐप से करें, लगभग हमेशा काम करता है।" },
        ],
      }}
      related={[
        { to: "/upi-guide", title: "UPI on JeetBuzz" },
        { to: "/paytm-guide", title: "Paytm on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
        { to: "/payment-methods", title: "All Payment Methods" },
      ]}
    />
  ),
});