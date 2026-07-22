import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/upi-guide";
const TITLE =
  "JeetBuzz UPI Deposit & Withdrawal Guide India 2026 - VPA, UTR, Step by Step";
const DESC =
  "Step-by-step JeetBuzz UPI deposit and withdrawal guide for India 2026. VPA flow, UTR submission, NPCI limits and why UPI success can still show pending on the cashier.";

export const Route = createFileRoute("/upi-guide")({
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
      eyebrow="UPI"
      title={<>JeetBuzz <span className="gold-text">UPI</span> Guide</>}
      titleByLocale={{
        hi: <>JeetBuzz <span className="gold-text">UPI</span> गाइड</>,
      }}
      subtitle="UPI is an instant bank-to-bank rail run by NPCI, fundamentally different from a closed mobile wallet like bKash or EasyPaisa. Here's what that means for funding a JeetBuzz account safely from India."
      subtitleByLocale={{
        hi: "UPI एक इंस्टैंट बैंक-टू-बैंक रेल है जो NPCI चलाती है, bKash या EasyPaisa जैसे क्लोज़्ड मोबाइल वॉलेट से बिल्कुल अलग। JeetBuzz खाते में फंडिंग के लिए इसका मतलब क्या है, यहाँ समझाया गया है।",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "UPI", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## What UPI actually is",
        "UPI is a real-time bank-to-bank transfer protocol from NPCI. PhonePe, Google Pay, Paytm, BHIM and your own bank app are all just front-ends, the money moves between bank accounts directly, not via a wallet balance the operator holds for you. That's the main contrast with bKash (Bangladesh) and EasyPaisa/JazzCash (Pakistan), which are closed wallets sitting on a partner bank.",
        "## Step-by-step deposit",
        "1. Log in to JeetBuzz and open Cashier > Deposit > UPI.",
        "2. Enter your deposit amount in INR.",
        "3. Capture the merchant VPA (looks like name@bank) and the unique reference shown on screen.",
        "4. Open your UPI app of choice. PhonePe, Google Pay, Paytm, or any UPI-enabled bank app, pick Pay to UPI ID / VPA, paste the VPA, set the amount and place the unique reference in the message/remark field.",
        "5. Authorise with your UPI PIN. Note the 12-digit UTR (Unique Transaction Reference) that shows up on the success screen, also visible in your bank SMS.",
        "6. Paste the UTR into the JeetBuzz form and submit.",
        "## Withdrawal",
        "Withdraw to a UPI ID linked to a bank account in your own name. JeetBuzz validates the receiving account holder name against your registered account, mismatches get reversed at review, even if the UPI ID 'works'.",
        "## Why a UPI 'success' can still show pending",
        "UPI confirms at the bank rail; JeetBuzz still has to match your UTR against the merchant ledger. If you forgot the reference, used a personal VPA by mistake, or there's NPCI ledger lag during peak hours, the cashier will show pending until reconciliation catches up. Open live chat with the UTR rather than re-sending.",
        "## Common mistakes",
        "- Sending to a personal VPA you found elsewhere instead of the merchant VPA shown in the cashier",
        "- Forgetting the unique reference in the UPI note field",
        "- Sending from a UPI ID linked to a family member's bank account (name mismatch on withdrawal)",
        "- Re-attempting because the UTR didn't post in 10 seconds. UPI rails sometimes take 30–90 seconds at peak load",
        "## Limits, fees and processing time",
        "Per-transaction UPI limits set by NPCI and individual banks change periodically; gambling-MCC handling by PhonePe / GPay / Paytm also evolves. Exact JeetBuzz-specific minimums, withdrawal caps and processing windows are being verified directly with the operator. Until that is confirmed, treat the figures inside the JeetBuzz cashier at the moment of your transaction as authoritative.",
      ]}
      bodyByLocale={{
        hi: [
          "## UPI असल में क्या है",
          "UPI NPCI का रियल-टाइम बैंक-टू-बैंक ट्रांसफ़र प्रोटोकॉल है। PhonePe, Google Pay, Paytm, BHIM और आपका अपना बैंक ऐप, ये सब सिर्फ़ फ़्रंट-एंड हैं। पैसा सीधे बैंक खातों के बीच जाता है, ऑपरेटर के पास रखे किसी वॉलेट बैलेंस से नहीं। यही bKash (बांग्लादेश) और EasyPaisa/JazzCash (पाकिस्तान) से मुख्य फ़र्क़ है, वे क्लोज़्ड वॉलेट हैं जो किसी पार्टनर बैंक पर बैठे हैं।",
          "## स्टेप-बाय-स्टेप डिपॉज़िट",
          "1. JeetBuzz पर लॉगिन करें और Cashier > Deposit > UPI खोलें।",
          "2. INR में राशि डालें।",
          "3. स्क्रीन पर दिखाया गया मर्चेंट VPA (name@bank जैसा) और यूनीक रेफ़रेंस नोट करें।",
          "4. अपना UPI ऐप खोलें. PhonePe, Google Pay, Paytm, या UPI-enabled बैंक ऐप. Pay to UPI ID / VPA चुनें, VPA paste करें, राशि डालें और message/remark में यूनीक रेफ़रेंस लिखें।",
          "5. UPI PIN से अधिकृत करें। सक्सेस स्क्रीन पर 12-अंक का UTR (Unique Transaction Reference) दिखेगा, बैंक SMS में भी आएगा।",
          "6. UTR को JeetBuzz फ़ॉर्म में paste कर submit करें।",
          "## विदड्रॉल",
          "अपने ही नाम के बैंक खाते से जुड़े UPI ID पर विदड्रॉल करें। JeetBuzz प्राप्त करने वाले खाताधारी का नाम आपके रजिस्टर्ड खाते से मैच करता है, मिसमैच रिवर्स हो जाते हैं, भले ही UPI ID 'काम कर रही' हो।",
          "## UPI 'success' होने पर भी कैशियर pending क्यों",
          "UPI बैंक रेल पर कन्फ़र्म होता है; JeetBuzz को अभी भी आपके UTR को मर्चेंट लेजर से मिलाना होता है। अगर रेफ़रेंस भूल गए, गलती से पर्सनल VPA पर भेज दिया, या पीक टाइम पर NPCI ledger lag हो, तो रिकंसिलिएशन पकड़ने तक pending दिखेगा। UTR के साथ लाइव चैट करें, दोबारा न भेजें।",
          "## आम ग़लतियाँ",
          "- कैशियर में दिखाए मर्चेंट VPA की जगह कहीं और से मिले पर्सनल VPA पर भेजना",
          "- UPI note में यूनीक रेफ़रेंस भूलना",
          "- परिवार के सदस्य के बैंक खाते से जुड़े UPI ID से भेजना (विदड्रॉल पर नाम मिसमैच)",
          "- 10 सेकंड में UTR न आने पर दोबारा कोशिश, पीक लोड पर UPI 30–90 सेकंड ले सकता है",
          "## लिमिट, फ़ीस और प्रोसेसिंग टाइम",
          "NPCI और बैंकों की प्रति-लेन-देन UPI सीमाएँ समय-समय पर बदलती हैं; PhonePe / GPay / Paytm द्वारा gambling-MCC हैंडलिंग भी विकसित होती रहती है। JeetBuzz-विशिष्ट सटीक मिनिमम, विदड्रॉल कैप और प्रोसेसिंग विंडो ऑपरेटर से सीधे सत्यापित की जा रही हैं। तब तक लेन-देन के समय JeetBuzz कैशियर में दिखाई गई वैल्यू को मान्य समझें।",
        ],
      }}
      faqs={[
        { q: "Which UPI app is best for JeetBuzz?", a: "Any UPI app works because UPI is the rail, not the app. Use whichever you already trust. PhonePe, Google Pay, Paytm or your own bank app." },
        { q: "What's the UTR and where do I find it?", a: "Twelve-digit Unique Transaction Reference shown on the UPI success screen and in your bank SMS. Don't confuse it with the order ID shown in the app." },
        { q: "Why did my UPI deposit succeed at the bank but pending on JeetBuzz?", a: "Reconciliation lag, missing reference, or a name mismatch. Send the UTR to live chat; never re-send the same amount." },
        { q: "Can I withdraw to a different bank than the one I funded from?", a: "Allowed only if both bank accounts are in your own name. Otherwise the withdrawal is reversed at review." },
      ]}
      faqsByLocale={{
        hi: [
          { q: "JeetBuzz के लिए सबसे अच्छा UPI ऐप कौन-सा?", a: "कोई भी UPI ऐप काम करता है क्योंकि UPI रेल है, ऐप नहीं। जिस पर आप पहले से भरोसा करते हैं. PhonePe, Google Pay, Paytm या अपना बैंक ऐप, उसी का इस्तेमाल करें।" },
          { q: "UTR क्या है और कहाँ मिलेगा?", a: "12-अंक का Unique Transaction Reference, जो UPI success स्क्रीन और बैंक SMS पर दिखता है। ऐप के order ID से confuse न हों।" },
          { q: "बैंक पर UPI success हुआ पर JeetBuzz कैशियर pending क्यों?", a: "रिकंसिलिएशन lag, रेफ़रेंस ग़ायब, या नाम मिसमैच। UTR को लाइव चैट पर भेजें; उतनी ही राशि दोबारा न भेजें।" },
          { q: "क्या उस अलग बैंक पर विदड्रॉल कर सकते हैं जिससे डिपॉज़िट नहीं किया?", a: "तभी, जब दोनों बैंक खाते आपके अपने नाम पर हों। वरना रिवर्स हो जाएगा।" },
        ],
      }}
      related={[
        { to: "/phonepe-guide", title: "PhonePe on JeetBuzz" },
        { to: "/paytm-guide", title: "Paytm on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
        { to: "/payment-methods", title: "All Payment Methods" },
      ]}
    />
  ),
});