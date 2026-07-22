import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PAYMENTS_CLUSTER } from "@/lib/clusters";

const PATH = "/payments";
const TITLE = "JeetBuzz Payments Hub. Deposit & Withdraw in BD, PK, India 2026";
const DESC = "One JeetBuzz payments hub for Bangladesh, Pakistan and India, pick bKash, Nagad, JazzCash, EasyPaisa, UPI or USDT with clear minimums and timing.";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Payments"
      title={<>JeetBuzz <span className="gold-text">Payments Hub</span></>}
      subtitle="Every deposit and withdrawal rail JeetBuzz supports across Bangladesh, Pakistan and India, with limits, speed and the right guide for each."
      breadcrumbs={[{ name: "Payments", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "bKash, Nagad বা Rocket দিয়ে ডিপোজিট করার সময় যে সমস্যাগুলো সবচেয়ে বেশি হয় তার বেশিরভাগই আসলে কোনো বাগ নয়, ছোট একটা ভুল ধাপ বা নাম-মিসম্যাচ। ওয়ালেটে যে নাম রেজিস্টার করা আছে সেটার সঙ্গে JeetBuzz প্রোফাইলের নাম না মিললে টাকা কেটে নিলেও ব্যালেন্স ঢোকে না, আবার ভুল রেফারেন্স নম্বর দিলে ট্রানজ্যাকশন ম্যানুয়াল রিভিউতে চলে যায়। উইথড্রয়ের ক্ষেত্রেও প্রথম কেওয়াইসি সম্পন্ন না থাকলে সময় বেড়ে যায় স্বাভাবিকের চেয়ে অনেক বেশি। এই হাবে বাংলাদেশ, পাকিস্তান আর ভারতের প্রতিটি লোকাল রেল ধরে ধরে গাইড দিয়েছি, মিনিমাম-ম্যাক্সিমাম লিমিট, সাধারণ কোন সমস্যা কেন হয় এবং সাপোর্টে কী কী প্রমাণ পাঠাতে হবে সব একই জায়গায়। ডিপোজিটের আগে নিজের ওয়ালেট, নাম আর কেওয়াইসি স্ট্যাটাস মিলিয়ে নিলে ৯০ শতাংশ সমস্যা এমনিতেই এড়ানো যায়।",
        "## Choose by country",
        "JeetBuzz supports the dominant local rail in each market. Pick your country below and jump to the guide with screenshots.",
        "### Bangladesh",
        "- [bKash Deposit Guide](/bkash-guide), most popular wallet, 200 BDT minimum.",
        "- [Nagad Deposit Guide](/nagad-guide), near-identical speed, slightly higher daily caps.",
        "- [Rocket Deposit Guide](/rocket-guide). DBBL Mobile Banking, strong village-level agent network.",
        "### Pakistan",
        "- [JazzCash Deposit Guide](/jazzcash-guide). Jazz operator, best uptime.",
        "- [EasyPaisa Deposit Guide](/easypaisa-guide). Telenor operator, wider rural agent network.",
        "### India",
        "- [UPI Deposit Guide](/upi-guide), universal NPCI rail, any UPI app works.",
        "- [PhonePe Deposit Guide](/phonepe-guide), most used UPI app among Indian punters.",
        "- [Paytm Deposit Guide](/paytm-guide). Payments Bank UPI flow.",
        "## Deposit vs withdrawal",
        "Deposits usually clear within minutes on all local wallets. Withdrawals go through an additional review, new accounts, mismatched names and first-time cash-outs take longer. Read the [Withdrawal Time page](/jeetbuzz-withdrawal-time) for realistic timelines per rail.",
        "## Common deposit issues",
        "The most frequent tickets are (1) amount debited but not credited, (2) wallet name does not match account name, and (3) wrong reference number entered in the cashier. The [Deposit Problem guide](/jeetbuzz-deposit-problem) walks through each with the exact evidence support needs.",
        "## Full comparison table",
        "For side-by-side numbers on every method, minimum, speed, fees and best use case, open the full [Payment Methods table](/payment-methods).",
        "## Before your first deposit",
        "1. Verify your account name matches your wallet name, mismatched deposits are reversed.",
        "2. Opt into the [Welcome Bonus](/welcome-bonus) *before* transferring, bonuses are not applied retroactively.",
        "3. Save your transaction ID until the funds land in the JeetBuzz balance.",
        "## More payment guides",
        "- [Deposit & Withdrawal Guide](/deposit-withdrawal-guide), end-to-end cashier walkthrough for both directions.",
        "- [Withdrawal Guide](/withdrawal-guide), cash-out steps, KYC checkpoints and payout timing.",
        "- [bKash Deposit](/jeetbuzz-bkash-deposit), bKash-specific cashier flow and name-match rules.",
        "- [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal). Nagad payout walk-through with realistic timing.",
        "- [Minimum Deposit](/jeetbuzz-minimum-deposit), smallest amount you can fund per rail.",
      ]}
      related={PAYMENTS_CLUSTER}
      faqs={[
        { q: "Which payment method is fastest on JeetBuzz?", a: "For Bangladesh, bKash and Nagad usually clear within minutes. For India, UPI via PhonePe / Google Pay / Paytm is the standard. For Pakistan, JazzCash typically has the best uptime. Exact timing depends on operator status." },
        { q: "Are there fees to deposit on JeetBuzz?", a: "The cashier displays the current fee for each method before you confirm. Wallet-level fees (bKash Send Money, UPI merchant charges) are set by the provider, not JeetBuzz." },
        { q: "Can I use one wallet for deposit and a different one for withdrawal?", a: "JeetBuzz generally credits withdrawals to the same wallet used for deposit for anti-fraud reasons. Changing the payout wallet requires KYC re-verification." },
        { q: "Is crypto (USDT) supported?", a: "USDT TRC20 and BEP20 are supported and popular for larger cash-outs because they bypass local daily wallet caps." },
        { q: "What if my deposit is debited but not credited?", a: "Wait 15 minutes, then open live chat with your wallet transaction ID and a screenshot of the cashier receipt. See the [Deposit Problem guide](/jeetbuzz-deposit-problem)." },
      ]}
    />
  ),
});