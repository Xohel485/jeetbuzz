import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-deposit-problem";
const TITLE = "JeetBuzz Deposit Problem. Fix in 5 Steps (bKash, Nagad, UPI Debited but Not Credited)";
const DESC = "JeetBuzz deposit problem fixed in five steps, bKash / Nagad / JazzCash / UPI debited but not credited, wrong reference, name mismatch and the exact evidence support needs.";

export const Route = createFileRoute("/jeetbuzz-deposit-problem")({
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
      eyebrow="Support"
      title={<>JeetBuzz <span className="gold-text">Deposit Problem</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">ডিপোজিট সমস্যা</span></> }}
      subtitle="Debited but not credited, wrong reference number, name mismatch, every JeetBuzz deposit problem with the exact evidence to attach on live chat."
      subtitleByLocale={{ bn: "টাকা কেটেছে কিন্তু ক্রেডিট হয়নি, ভুল রেফারেন্স নম্বর, নাম মিসম্যাচ, প্রতিটি ডিপোজিট সমস্যা এবং লাইভ চ্যাটে দেওয়ার সঠিক প্রমাণ।" }}
      ctaIntent="login" ctaLabel="Check Deposit Status"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Deposit Problem", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Wait 15 minutes first",
        "Most \"deposit not credited\" issues resolve themselves within 15 minutes as bKash / Nagad / JazzCash / UPI batches settle. Refresh the cashier once, don't refresh in a loop, that can trigger duplicate charge protection and delay things further.",
        "## Fix in 5 steps",
        "1. **Confirm the wallet actually debited**, open the wallet SMS or in-app history and copy the exact transaction ID.",
        "2. **Screenshot the cashier receipt** on JeetBuzz, the one showing the amount, timestamp and reference number you entered.",
        "3. **Wait 15 minutes** for the wallet operator's batch to settle. Do not retry the deposit.",
        "4. **Open live chat** with your JeetBuzz account ID + wallet TID + cashier screenshot in the first message.",
        "5. **Track resolution** under Account → Transactions. Simple missing-reference cases clear in 30 minutes to a few hours; name-mismatch reversals take 1–3 business days.",
        "## The five deposit problems (and their fix)",
        "### 1. Money debited from wallet, not credited to JeetBuzz",
        "**Cause:** wrong reference number, wallet operator batch lag, or wrong receiver number entered.",
        "**Fix:** open live chat with (a) your JeetBuzz account ID, (b) the wallet transaction ID from your wallet SMS, (c) a screenshot of the cashier receipt. Support locates the transaction and credits manually, typical time is 30 minutes to a few hours.",
        "### 2. Wrong reference number",
        "The reference number links your wallet transfer to your JeetBuzz account. Missing or wrong reference means the payment sits in a suspense account until claimed. Provide the wallet TID and JeetBuzz account ID on live chat; support reconciles.",
        "### 3. Name mismatch",
        "If your wallet name is \"Rahim Ahmed\" but your JeetBuzz account is registered as \"Rahim A.\", the AML system flags the deposit. **The safe fix is to always deposit from the wallet that matches your KYC name exactly.** Never deposit from a friend's or family's wallet, mismatch deposits are reversed to source, minus wallet fees.",
        "### 4. \"Deposit failed\" but wallet was debited",
        "The cashier's Failed status refers to *its* attempt to auto-reconcile, the money did leave your wallet. Same fix as (1): wallet TID + cashier screenshot on live chat.",
        "### 5. Deposit stuck at \"Pending\" for hours",
        "Peak load (evenings before big cricket matches) or wallet operator downtime. Wait 2 hours, then escalate on live chat with the TID. Support cannot cancel a pending deposit, it must complete or fail before any action.",
        "## Evidence checklist for support",
        "Have all of these ready *before* opening the chat:",
        "- JeetBuzz account ID / username.",
        "- Wallet transaction ID (from the wallet SMS or in-app history).",
        "- Wallet transfer amount and time (exact).",
        "- Screenshot of the JeetBuzz cashier receipt.",
        "- Screenshot of the wallet transaction detail.",
        "Providing all five in the first message consistently cuts back-and-forth in half.",
        "## What never fixes the issue",
        "- Making a second deposit \"to retry\", you may end up with a double charge.",
        "- Uninstalling and reinstalling the app, the transaction lives server-side, not on the phone.",
        "- Contacting anyone claiming to be JeetBuzz support on WhatsApp, they are scammers.",
        "## Rail-specific gotchas",
        "- **bKash:** the Send Money reference field is limited to 12 characters, a truncated reference is the #1 cause of \"not credited\".",
        "- **Nagad:** Personal → Personal transfers reject reference numbers under 6 characters. Always paste the full JeetBuzz reference.",
        "- **JazzCash / EasyPaisa:** merchant-mode deposits credit instantly; peer-to-peer deposits go into manual queue and can lag 30–60 minutes.",
        "- **UPI:** many banks batch UPI outside 6 AM–11 PM IST. Deposits at 2 AM often show up at 6 AM.",
        "- **USDT TRC20:** wait for 1 block confirmation (~2 min). BEP20: 3 confirmations. Sending on the wrong network is unrecoverable.",
        "## What to tell live chat, exact template",
        "> Account ID: [your ID]\\n> Wallet: bKash / Nagad / UPI / USDT\\n> Wallet TID: [transaction ID]\\n> Amount: [BDT/PKR/INR]\\n> Time of transfer: [HH:MM local]\\n> Cashier reference: [what you typed]\\n> Screenshots: [attach both wallet + cashier]",
        "Using this template consistently cuts resolution time in half.",
        "## Deposit stuck across two accounts (rare)",
        "If you accidentally sent from a wallet linked to a *family member's* JeetBuzz account, the deposit will credit their account, not yours. This is unrecoverable through chat, the funds have to be withdrawn from the receiving account and re-deposited from your own wallet. Prevention: always keep one wallet per JeetBuzz account.",
      ]}
      bodyByLocale={{
        bn: [
          "## প্রথমে ১৫ মিনিট অপেক্ষা করুন",
          "বেশিরভাগ \"ডিপোজিট ক্রেডিট হয়নি\" সমস্যা bKash/Nagad ব্যাচ সেটেল হওয়ার সাথে সাথে ১৫ মিনিটের মধ্যে নিজেই ঠিক হয়ে যায়। ক্যাশিয়ার একবার রিফ্রেশ করুন, বারবার নয়, তাতে ডুপ্লিকেট চার্জ প্রোটেকশন ট্রিগার হয়ে আরো দেরি হতে পারে।",
          "## পাঁচটি ডিপোজিট সমস্যা (এবং সমাধান)",
          "### ১. ওয়ালেট থেকে টাকা কেটেছে, JeetBuzz-এ ক্রেডিট হয়নি",
          "**কারণ:** ভুল রেফারেন্স নম্বর, ওয়ালেট অপারেটর ব্যাচ ল্যাগ, বা ভুল রিসিভার নম্বর।",
          "**সমাধান:** লাইভ চ্যাট খুলুন (ক) JeetBuzz অ্যাকাউন্ট ID, (খ) ওয়ালেট SMS থেকে ওয়ালেট ট্রানজেকশন ID, (গ) ক্যাশিয়ার রিসিটের স্ক্রিনশট সহ। সাপোর্ট ট্রানজেকশন খুঁজে ম্যানুয়ালি ক্রেডিট করে, সাধারণ সময় ৩০ মিনিট থেকে কয়েক ঘণ্টা।",
          "### ২. ভুল রেফারেন্স নম্বর",
          "রেফারেন্স নম্বর আপনার ওয়ালেট ট্রান্সফারকে JeetBuzz অ্যাকাউন্টের সাথে যুক্ত করে। রেফারেন্স নেই বা ভুল হলে পেমেন্ট দাবি না করা পর্যন্ত সাসপেন্স অ্যাকাউন্টে বসে থাকে। লাইভ চ্যাটে ওয়ালেট TID + JeetBuzz অ্যাকাউন্ট ID দিন; সাপোর্ট মিলিয়ে দেয়।",
          "### ৩. নাম মিসম্যাচ",
          "আপনার ওয়ালেট নাম \"রহিম আহমেদ\" কিন্তু JeetBuzz অ্যাকাউন্ট \"রহিম এ.\" নামে নিবন্ধিত হলে AML সিস্টেম ডিপোজিট ফ্ল্যাগ করে। **নিরাপদ সমাধান হলো সবসময় সেই ওয়ালেট থেকে ডিপোজিট যা আপনার KYC নামের সাথে হুবহু মিলে।** কখনো বন্ধু বা পরিবারের ওয়ালেট থেকে ডিপোজিট নয়, মিসম্যাচ ডিপোজিট সোর্সে রিভার্স হয়, ওয়ালেট ফি বাদে।",
          "### ৪. \"Deposit failed\" কিন্তু ওয়ালেট থেকে কেটেছে",
          "ক্যাশিয়ারের Failed স্ট্যাটাস *তার* অটো-রিকনসাইল চেষ্টা বোঝায়, টাকা আপনার ওয়ালেট থেকে বেরিয়েছে। সমাধান (১)-এর মতোই: লাইভ চ্যাটে ওয়ালেট TID + ক্যাশিয়ার স্ক্রিনশট।",
          "### ৫. ডিপোজিট ঘণ্টার পর ঘণ্টা \"Pending\"",
          "পিক লোড (বড় ক্রিকেট ম্যাচের আগে সন্ধ্যা) বা ওয়ালেট অপারেটর ডাউনটাইম। ২ ঘণ্টা অপেক্ষা করে TID সহ লাইভ চ্যাটে এসকেলেট করুন। সাপোর্ট পেন্ডিং ডিপোজিট বাতিল করতে পারে না, সেটি সম্পন্ন বা ব্যর্থ হতে হবে।",
          "## সাপোর্টের জন্য প্রমাণ চেকলিস্ট",
          "চ্যাট খোলার *আগে* এসব প্রস্তুত রাখুন:",
          "- JeetBuzz অ্যাকাউন্ট ID / ইউজারনেম।",
          "- ওয়ালেট ট্রানজেকশন ID (ওয়ালেট SMS বা ইন-অ্যাপ ইতিহাস থেকে)।",
          "- ওয়ালেট ট্রান্সফারের পরিমাণ ও সময় (সঠিক)।",
          "- JeetBuzz ক্যাশিয়ার রিসিটের স্ক্রিনশট।",
          "- ওয়ালেট ট্রানজেকশন বিস্তারিতের স্ক্রিনশট।",
          "প্রথম মেসেজেই পাঁচটি দিলে ব্যাক-অ্যান্ড-ফোর্থ অর্ধেক হয়ে যায়।",
          "## যা কখনো সমস্যা ঠিক করে না",
          "- \"রিট্রাই\" হিসেবে দ্বিতীয় ডিপোজিট, ডবল চার্জ হতে পারে।",
          "- অ্যাপ আনইনস্টল/রিইনস্টল, ট্রানজেকশন সার্ভারে, ফোনে নয়।",
          "- WhatsApp-এ JeetBuzz সাপোর্ট বলে দাবিকারী কাউকে ম্যাসেজ, তারা প্রতারক।",
        ],
      }}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "My bKash deposit was debited but JeetBuzz balance did not update, what do I do?", a: "Wait 15 minutes, then open live chat with your JeetBuzz account ID, the wallet transaction ID from bKash SMS, and a screenshot of the cashier receipt. Do not retry the deposit, it can double-charge." },
        { q: "Can I get a refund for a failed deposit?", a: "Yes. Failed deposits where the money was debited from your wallet are refunded to source once support locates the transaction. Timing depends on the payment operator." },
        { q: "What's a name mismatch and how do I avoid it?", a: "Your wallet's registered name must match your JeetBuzz account name exactly. Always deposit from your own wallet, never a friend or family member, to avoid AML flags and reversed transactions." },
        { q: "Do I have to send my wallet PIN or OTP to support?", a: "Never. Real JeetBuzz support never asks for a wallet PIN, OTP or full card number. Anyone who does is a scammer impersonating support." },
        { q: "How long does the deposit dispute take?", a: "Simple missing-reference cases: 30 minutes to a few hours. Name-mismatch reversals: 1–3 business days because they wait for the wallet operator batch. USDT credits are typically fastest to resolve." },
        { q: "Why does bKash say 'Sent' but JeetBuzz shows nothing?", a: "The wallet operator confirmed the transfer to their intermediary, but the reference field is missing or truncated. JeetBuzz's reconciliation engine couldn't match it to your account. Live chat + wallet TID resolves this in under an hour." },
        { q: "Is there a JeetBuzz deposit problem hotline?", a: "No. JeetBuzz uses live chat only for financial disputes. Anyone offering a WhatsApp / Telegram / phone number as JeetBuzz support is a scammer. Escalate only through the in-app chat icon." },
        { q: "How many times can I retry a JeetBuzz deposit?", a: "Zero. The first attempt debited your wallet; retrying just double-charges you and doubles the reconciliation work. Wait, open chat, resolve, never retry." },
        { q: "Does a JeetBuzz deposit problem affect my bonus?", a: "No. As long as you opted in before the deposit and support credits it manually, the bonus applies from the moment the deposit lands, even if it took hours. Delayed credits do not reduce the match percentage." },
        { q: "Why is my UPI deposit still pending after 2 hours?", a: "Overnight UPI transfers batch through NPCI outside business hours; deposits between 11 PM and 6 AM IST often show at 6 AM. If it's still missing after that window, live chat with your UPI RRN (reference number) and the cashier screenshot." },
        { q: "Can support see my deposit if I didn't take a screenshot?", a: "Usually yes, the wallet transaction ID alone lets JeetBuzz reconcile. But without the cashier screenshot, resolution takes longer. Always take both screenshots at the moment of deposit; it costs nothing and saves hours if anything goes wrong." },
        { q: "What if my JeetBuzz deposit was reversed to my wallet?", a: "That means AML flagged the transfer, usually a name mismatch, a shared IP with another account, or a wallet that wasn't in your legal name. Deposit again from a wallet in your own KYC name; contact chat if the wallet name is correct and it still reverses." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "bKash থেকে টাকা কাটল কিন্তু JeetBuzz ব্যালেন্স আপডেট হয়নি, কী করব?", a: "১৫ মিনিট অপেক্ষা করুন, তারপর JeetBuzz অ্যাকাউন্ট ID, bKash SMS থেকে ওয়ালেট ট্রানজেকশন ID এবং ক্যাশিয়ার রিসিটের স্ক্রিনশট সহ লাইভ চ্যাট খুলুন। ডিপোজিট আবার চেষ্টা করবেন না, ডবল চার্জ হতে পারে।" },
          { q: "ব্যর্থ ডিপোজিটের রিফান্ড পাব?", a: "হ্যাঁ। ওয়ালেট থেকে টাকা কেটেছে এমন ব্যর্থ ডিপোজিট সাপোর্ট ট্রানজেকশন খুঁজে পাওয়ার পর সোর্সে রিফান্ড হয়। সময় পেমেন্ট অপারেটরের উপর নির্ভর।" },
          { q: "নাম মিসম্যাচ কী এবং কীভাবে এড়াব?", a: "আপনার ওয়ালেটের নিবন্ধিত নাম JeetBuzz অ্যাকাউন্টের নামের সাথে হুবহু মিলতে হবে। সবসময় নিজের ওয়ালেট থেকে ডিপোজিট করুন, কখনো বন্ধু বা পরিবারের নয়. AML ফ্ল্যাগ ও রিভার্স ট্রানজেকশন এড়াতে।" },
          { q: "সাপোর্টকে ওয়ালেট PIN বা OTP দিতে হবে?", a: "কখনো না। প্রকৃত JeetBuzz সাপোর্ট কখনো ওয়ালেট PIN, OTP বা কার্ড নম্বর চায় না। যে চায় সে সাপোর্টের ছদ্মবেশে প্রতারক।" },
          { q: "ডিপোজিট ডিসপিউট কতক্ষণ নেয়?", a: "সহজ কেস (মিসিং রেফারেন্স): ৩০ মিনিট থেকে কয়েক ঘণ্টা। নাম মিসম্যাচ রিভার্সাল: ১–৩ কর্মদিবস কারণ ওয়ালেট অপারেটর ব্যাচের অপেক্ষা। USDT ক্রেডিট সাধারণত দ্রুততম।" },
        ],
      }}
    />
  ),
});