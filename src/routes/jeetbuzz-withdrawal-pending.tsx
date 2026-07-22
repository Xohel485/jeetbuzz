import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-withdrawal-pending";
const TITLE = "JeetBuzz Withdrawal Pending 2026. Why It's Stuck & How to Fix";
const DESC = "JeetBuzz withdrawal pending in 2026, the seven real reasons cash-outs get stuck (KYC, name mismatch, wallet limits, weekend cycles) and the exact live-chat script that unblocks each one.";

export const Route = createFileRoute("/jeetbuzz-withdrawal-pending")({
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
      eyebrow="Withdrawals"
      title={<>JeetBuzz Withdrawal <span className="gold-text">Pending</span></>}
      subtitle="Cash-out stuck on 'Pending' for hours? Here is exactly why, with the fix for each cause, the realistic timing per method, and the live-chat script that gets things moving."
      ctaIntent="login" ctaLabel="Check Withdrawal Status"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Withdrawal Pending", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## First, is it actually late?",
        "Before assuming something is broken, compare against the realistic baseline. A 'Pending' status is not a delay, it means the request is queued for the operator's finance batch. Different rails clear at different speeds:",
        "| Method | Realistic first cash-out | Realistic repeat cash-out |",
        "|---|---|---|",
        "| bKash / Nagad / Rocket | 30 min – 4 hours | 5–30 minutes |",
        "| EasyPaisa / JazzCash | 30 min – 4 hours | 5–30 minutes |",
        "| UPI / IMPS | 1–3 hours | 5–30 minutes |",
        "| Bank transfer | Same day (business hours) | Same day |",
        "| USDT (TRC20) | 30 min – 2 hours | 10–30 minutes |",
        "First-ever withdrawal always takes longer because KYC is being finalised in parallel. Anything within the ranges above is not late, it is normal queue time.",
        "## The seven real reasons a withdrawal is stuck",
        "### 1. KYC still processing",
        "Your first withdrawal triggers full KYC review. The financial team physically checks your ID, address proof and selfie. This adds 6–24 hours on top of the payment-rail time. Symptom: status reads 'Pending, verification'. Fix: upload legible originals (no photocopies, no screenshots) and answer any support message within 12 hours. Full walkthrough: [Account Verification](/jeetbuzz-account-verification).",
        "### 2. Name mismatch",
        "The wallet/bank account name **must** match the name on your KYC ID exactly. 'Md. Rahim' vs 'Muhammad Rahim' fails. Nicknames fail. Family member wallets fail. Symptom: 'Pending' followed by cancellation with a note like 'beneficiary details mismatch'. Fix: switch to a wallet in your own KYC name. If your KYC name has a typo, contact support with a fresh ID scan before re-requesting.",
        "### 3. Cross-currency withdrawal",
        "Your account currency and your wallet currency must match. Depositing in USDT and withdrawing to BDT works, but adds a manual FX step that stretches processing to 12–24 hours. Fix: withdraw to a wallet in the same currency as your account.",
        "### 4. Weekend or public-holiday cycle",
        "Wallet rails run 24/7 but bank transfers (IMPS, wire) only clear on business days. A Friday-evening bank withdrawal often shows 'Pending' until Monday. Fix: use bKash / Nagad / UPI for weekend cash-outs.",
        "### 5. Bonus rollover not cleared",
        "If your last deposit had a bonus attached and rollover is incomplete, the bonus portion is locked. Only the cleared cash balance is withdrawable. Symptom: withdrawal amount silently reduces, or status flips to 'Rejected, insufficient cleared balance'. Fix: check **Account → Bonuses → Wagering progress**. Complete the rollover or forfeit the bonus in the cashier.",
        "### 6. Wallet or bank daily limit hit",
        "bKash and Nagad enforce a daily incoming limit (typically 25,000 BDT for personal, 100,000+ for verified merchant). A withdrawal that exceeds today's remaining limit is queued. Fix: split into smaller requests across days, or use a bank transfer for large amounts.",
        "### 7. Unusual pattern flag",
        "Rapid deposit → immediate withdrawal without any play, or an unusual IP change, triggers a manual review. Not an accusation, a standard AML check every operator runs. Symptom: 'Pending, under review' beyond 24 hours. Fix: message support with your last three transaction TxIDs and wait for the finance team.",
        "## The live-chat script that actually works",
        "Support handles hundreds of tickets a day. A structured message gets escalated faster than an angry paragraph. Send this:",
        "> *Hello. My withdrawal to [METHOD] for [AMOUNT] [CURRENCY] has been Pending for [HOURS] hours. My username is [USERNAME]. The withdrawal reference is [WITHDRAWAL_ID]. My KYC is verified. Please check the status and share the expected release time.*",
        "This gives the agent every detail without a back-and-forth. Expect a reply within 5–15 minutes on live chat.",
        "## What NOT to do",
        "- **Do not open a second withdrawal request for the same amount.** The first one is queued, not lost. A duplicate can trigger fraud flags.",
        "- **Do not change your wallet address mid-request.** Any account-detail change forces a re-verification round.",
        "- **Do not post your username publicly** on Facebook, Telegram or Reddit asking for help. Scammers monitor those threads and impersonate support.",
        "## Escalating a genuine delay",
        "If a withdrawal stays 'Pending' beyond 48 hours with no support update, escalate:",
        "1. Live chat, request escalation to finance team.",
        "2. Official email (from the site's Contact page), attach chat transcript ID.",
        "3. If email is ignored beyond another 48 hours, file a complaint with the Curaçao licence body (address is in the site footer).",
        "Most delays resolve at step 1. Reaching step 3 is genuinely rare.",
        "## Related help",
        "- [Withdrawal Time](/jeetbuzz-withdrawal-time), per-method timing baseline.",
        "- [Withdrawal Guide](/withdrawal-guide), request walkthrough.",
        "- [Deposit Failed](/jeetbuzz-deposit-failed), companion problem-solving guide.",
        "- [Account Verification](/jeetbuzz-account-verification). KYC checklist.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. Withdrawal timing depends on the operator, your bank/wallet, and blockchain confirmations, none of which we control. If gambling is causing financial stress, use [self-exclusion](/how-to-delete-jeetbuzz-account) before your next deposit.",
      ]}
      bodyByLocale={{
        bn: [
          "## আগে দেখুন সত্যিই দেরি কিনা",
          "'Pending' মানে সমস্যা নয়, মানে finance batch-এ কিউতে আছে। প্রতি মেথডে বাস্তব সময় ভিন্ন:",
          "| মেথড | প্রথম ক্যাশ-আউট | পরবর্তী ক্যাশ-আউট |",
          "|---|---|---|",
          "| bKash / Nagad / Rocket | ৩০ মিনিট – ৪ ঘণ্টা | ৫–৩০ মিনিট |",
          "| UPI / IMPS | ১–৩ ঘণ্টা | ৫–৩০ মিনিট |",
          "| ব্যাংক ট্রান্সফার | একই দিনে (অফিস আওয়ার) | একই দিনে |",
          "| USDT (TRC20) | ৩০ মিনিট – ২ ঘণ্টা | ১০–৩০ মিনিট |",
          "প্রথম উইথড্রয়াল সর্বদা বেশি সময় নেয় কারণ KYC finalise হচ্ছে।",
          "## ৭টি আসল কারণ",
          "### ১. KYC প্রসেসিং চলছে",
          "প্রথম উইথড্রয়াল পূর্ণ KYC রিভিউ ট্রিগার করে, ৬–২৪ ঘণ্টা যোগ হয়। মূল ID, ঠিকানা প্রমাণ এবং সেলফি স্পষ্ট আপলোড করুন। [Account Verification](/jeetbuzz-account-verification) দেখুন।",
          "### ২. নাম মিসম্যাচ",
          "ওয়ালেট/ব্যাংকের নাম KYC ID-র নামের সঙ্গে হুবহু মিলতে হবে। 'Md. Rahim' vs 'Muhammad Rahim' মেলে না। ডাকনাম, পরিবারের সদস্যের ওয়ালেট মেলে না। সমাধান: নিজের নামের ওয়ালেট ব্যবহার করুন।",
          "### ৩. ক্রস-কারেন্সি উইথড্রয়াল",
          "অ্যাকাউন্ট মুদ্রা ও ওয়ালেট মুদ্রা মিলতে হবে। ভিন্ন হলে ম্যানুয়াল FX ধাপ যোগ হয়, ১২–২৪ ঘণ্টা লাগে।",
          "### ৪. সপ্তাহান্ত / সরকারি ছুটি",
          "ওয়ালেট ২৪/৭ চলে, কিন্তু ব্যাংক ট্রান্সফার শুধু কার্যদিবসে। শুক্রবার সন্ধ্যার ব্যাংক উইথড্রয়াল প্রায়ই সোমবার পর্যন্ত pending থাকে। সমাধান: সপ্তাহান্তে bKash/Nagad ব্যবহার করুন।",
          "### ৫. বোনাস রোলওভার অসম্পূর্ণ",
          "শেষ ডিপোজিটে বোনাস থাকলে rollover complete না হলে বোনাস অংশ লকড। শুধু cleared cash balance withdrawable। **Account → Bonuses → Wagering progress** চেক করুন।",
          "### ৬. ওয়ালেট/ব্যাংক দৈনিক সীমা",
          "bKash-এর দৈনিক ইনকামিং সীমা (সাধারণত ২৫,০০০ BDT personal) পার হলে queue-এ যায়। ছোট ছোট রিকোয়েস্টে ভাগ করুন বা ব্যাংক ট্রান্সফার ব্যবহার করুন।",
          "### ৭. অস্বাভাবিক প্যাটার্ন ফ্ল্যাগ",
          "খেলা ছাড়া দ্রুত ডিপোজিট→উইথড্রয়াল, বা অস্বাভাবিক IP পরিবর্তন, স্ট্যান্ডার্ড AML রিভিউ ট্রিগার করে। সাপোর্টকে শেষ তিনটি TxID পাঠান।",
          "## লাইভ চ্যাটে যা লিখবেন",
          "> *Hello. My withdrawal to [METHOD] for [AMOUNT] BDT has been Pending for [HOURS] hours. Username: [USERNAME]. Withdrawal reference: [WITHDRAWAL_ID]. KYC verified. Please share expected release time.*",
          "একটি structured মেসেজ raging paragraph-এর চেয়ে দ্রুত escalate হয়। লাইভ চ্যাটে ৫–১৫ মিনিটে রিপ্লাই পাবেন।",
          "## যা করবেন না",
          "- একই অ্যামাউন্টে দ্বিতীয় উইথড্রয়াল request দেবেন না, প্রথমটি হারায়নি, কিউতে আছে।",
          "- মাঝপথে wallet address পরিবর্তন করবেন না, re-verification round শুরু হবে।",
          "- Facebook/Telegram-এ ইউজারনেম প্রকাশ্যে পোস্ট করবেন না, স্ক্যামাররা সাপোর্টের ভান করে।",
          "## ৪৮ ঘণ্টার পর escalation",
          "১. লাইভ চ্যাটে finance team-এ escalate করতে বলুন।",
          "২. অফিসিয়াল ইমেইলে chat transcript ID সহ পাঠান।",
          "৩. আরও ৪৮ ঘণ্টা উত্তর না পেলে Curaçao লাইসেন্স বডিতে অভিযোগ (ফুটারে ঠিকানা)।",
          "বেশিরভাগ ধাপ ১-এই সমাধান হয়।",
          "## সম্পর্কিত সাহায্য",
          "- [Withdrawal Time](/jeetbuzz-withdrawal-time)",
          "- [Withdrawal Guide](/withdrawal-guide)",
          "- [Deposit Failed](/jeetbuzz-deposit-failed)",
          "- [Account Verification](/jeetbuzz-account-verification)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় অ্যাফিলিয়েট। উইথড্রয়াল সময় অপারেটর, ব্যাংক ও ব্লকচেইন কনফার্মেশনের ওপর নির্ভরশীল। জুয়া আর্থিক চাপ সৃষ্টি করলে পরের ডিপোজিটের আগে [self-exclusion](/how-to-delete-jeetbuzz-account) ব্যবহার করুন।",
        ],
      }}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "How long can a JeetBuzz withdrawal stay Pending before it's actually a problem?", a: "For wallets, up to 4 hours (first withdrawal) or 30 minutes (repeat) is normal. For bank transfers, same-day within business hours. Anything past 24 hours with no support update is escalatable." },
        { q: "Why does the amount reduce when the withdrawal finally lands?", a: "Either bonus rollover was incomplete (so bonus portion was locked) or the payment rail charged a network fee (USDT). Compare the request amount against Account → Transactions." },
        { q: "Can I cancel a pending withdrawal?", a: "Yes, from Account → Withdrawals → Pending → Cancel, but only before the finance team picks it up. Once status changes to 'Processing', cancellation is blocked." },
        { q: "Does JeetBuzz charge a withdrawal fee?", a: "Wallet withdrawals are typically fee-free above the minimum. USDT withdrawals carry a small network fee. Bank transfers may have a fixed processing fee for amounts below a threshold, check the cashier before submitting." },
        { q: "Why did my second withdrawal clear in minutes but the first took a day?", a: "First withdrawal runs KYC in parallel. Once KYC is complete, subsequent withdrawals skip that step and clear at the payment-rail speed only." },
        { q: "Support hasn't replied in 24 hours, what next?", a: "Follow the escalation ladder: live chat → official email with transcript ID → licence body complaint. Skipping straight to social-media outrage does not speed things up and often invites scammer DMs." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "কত সময় Pending থাকলে সত্যিই সমস্যা?", a: "ওয়ালেটে ৪ ঘণ্টা (প্রথম) বা ৩০ মিনিট (পরের) স্বাভাবিক। ব্যাংক ট্রান্সফারে একই দিনে অফিস আওয়ারে। ২৪ ঘণ্টা পার হলে escalate করুন।" },
          { q: "উইথড্রয়াল landing-এর সময় অ্যামাউন্ট কম কেন?", a: "হয় বোনাস rollover অসম্পূর্ণ (বোনাস অংশ লকড) নয়তো USDT নেটওয়ার্ক ফি কেটেছে। Account → Transactions দেখুন।" },
          { q: "Pending উইথড্রয়াল cancel করা যায়?", a: "হ্যাঁ, Account → Withdrawals → Pending → Cancel, কিন্তু 'Processing' status হওয়ার আগে।" },
          { q: "JeetBuzz উইথড্রয়াল ফি নেয়?", a: "ওয়ালেট সাধারণত fee-free minimum-এর ওপরে। USDT ছোট নেটওয়ার্ক ফি। ব্যাংক ট্রান্সফারে fixed processing fee থাকতে পারে।" },
          { q: "দ্বিতীয় উইথড্রয়াল কেন মিনিটে হয়?", a: "প্রথম উইথড্রয়ালের সাথে KYC হয়। KYC হয়ে গেলে পরবর্তী উইথড্রয়াল শুধু payment-rail speed-এ চলে।" },
          { q: "সাপোর্ট ২৪ ঘণ্টায় উত্তর দেয়নি?", a: "escalation ladder: লাইভ চ্যাট → অফিসিয়াল ইমেইল (transcript ID সহ) → লাইসেন্স বডিতে অভিযোগ। সোশ্যাল মিডিয়ায় পোস্ট করলে সমাধান হয় না, স্ক্যামারের DM আসে।" },
        ],
      }}
    />
  ),
});