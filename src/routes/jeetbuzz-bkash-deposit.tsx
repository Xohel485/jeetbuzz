import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/jeetbuzz-bkash-deposit";
const TITLE = "JeetBuzz bKash Deposit 2026. Steps, Minimum, Time & Fixes";
const DESC = "JeetBuzz bKash deposit for 2026, the exact 5-step Personal / Merchant flow, minimum amount, expected credit time, name-mismatch fixes and how to reverse a wrong deposit.";

export const Route = createFileRoute("/jeetbuzz-bkash-deposit")({
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
      eyebrow="Payments"
      title={<>JeetBuzz <span className="gold-text">bKash Deposit</span></>}
      subtitle="The complete 2026 bKash deposit walkthrough. Personal and Merchant flows, minimum amount, credit timing, name-mismatch traps and how to recover a wrong deposit."
      ctaIntent="signup" ctaLabel="Open Deposit Page"
      breadcrumbs={[{ name: "Payments", path: "/payments" }, { name: "bKash Deposit", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Why bKash is the default deposit rail in Bangladesh",
        "bKash processes the majority of retail digital payments in Bangladesh, and JeetBuzz supports it end-to-end. Deposits typically land inside a minute, the minimum amount is small enough for a first-time trial, and the rail rarely goes down. When it does, [Nagad](/nagad-guide) and [Rocket](/rocket-guide) act as clean fallbacks.",
        "## The 5-step bKash deposit flow",
        "1. **Log in to JeetBuzz** and open the Cashier → Deposit page.",
        "2. **Select bKash.** Choose either Personal Send Money or Merchant Payment based on what the cashier surfaces. Merchant is preferred when available because it auto-reconciles.",
        "3. **Enter the deposit amount.** The cashier shows the exact bKash number to send to and a **reference/transaction ID** you must include in the reference field on bKash.",
        "4. **Open your bKash app**, send the amount to the displayed number, and paste the reference exactly. Copy the bKash Transaction ID (TrxID) once the payment confirms.",
        "5. **Return to JeetBuzz**, paste the TrxID into the cashier form and submit. Credit usually arrives within 1–5 minutes.",
        "## Minimum, maximum and fees",
        "- **Minimum deposit**: BDT 100 for the first deposit, BDT 200 for subsequent ones (matches the general [Minimum Deposit](/jeetbuzz-minimum-deposit) rule).",
        "- **Maximum per transaction**: BDT 25,000 on bKash Personal (bKash's own cap). Merchant path lifts this in most tiers.",
        "- **Daily cap**: BDT 50,000 aggregate on Personal, subject to your bKash KYC tier.",
        "- **Fee on the JeetBuzz side**: none. bKash's own send-money charge may apply per its published tariff.",
        "## Credit timing",
        "- **Merchant Payment**: 30 seconds to 2 minutes on average.",
        "- **Personal Send Money with correct reference**: 1–5 minutes.",
        "- **Personal Send Money without reference**: 15 minutes to 24 hours, reconciliation is manual.",
        "- **During a public outage (bKash or JeetBuzz side)**: as soon as the outage clears. Refresh the cashier page rather than resending.",
        "See [Withdrawal Time](/jeetbuzz-withdrawal-time) for the mirror-image expectations on cash-out.",
        "## The five things that cause a bKash deposit to fail",
        "1. **Wrong reference / TrxID**, the single most common cause. The system can't match the payment to your account. Fix: open a live-chat ticket with the TrxID, sender number and screenshot; support reconciles manually.",
        "2. **Name mismatch**, the bKash account holder name doesn't match your JeetBuzz KYC. AML rules require them to match. Fix: only deposit from your own bKash, or update KYC first.",
        "3. **Wrong destination number**, sending to an outdated bKash number cached from an old session. Always refresh the cashier to see the current number; JeetBuzz rotates.",
        "4. **Amount mismatch**, you sent BDT 500 but declared BDT 1,000. Support credits the amount actually received, not the declared amount.",
        "5. **KYC tier too low on your bKash**, bKash's own tier caps a per-day amount below the deposit. Upgrade the bKash KYC or split into smaller deposits.",
        "The general [Deposit Problem](/jeetbuzz-deposit-problem) walkthrough covers each of these with the exact live-chat message to send.",
        "## Recovering a deposit that never credited",
        "1. Confirm the money left your bKash, the TrxID and status must both be Successful.",
        "2. Screenshot the bKash transaction detail page.",
        "3. Open JeetBuzz live chat and share: TrxID, sender number, amount, JeetBuzz username, and the timestamp.",
        "4. Ask for a manual reconciliation. Typical resolution: within 6 hours for Merchant, 24 hours for Personal.",
        "5. If the recipient number was wrong (yours, not theirs), see [Deposit Failed](/jeetbuzz-deposit-failed) for the four evidence items support needs to attempt reversal.",
        "## Playing safe with bKash on shared devices",
        "- Never share your bKash PIN, even with a JeetBuzz agent. Support **never asks for it**.",
        "- Log out of bKash on public/shared devices; the auto-login is dangerous.",
        "- Set a device-level PIN or biometric on the phone that has bKash installed.",
        "- Keep bKash notifications on so any unexpected outgoing transaction is instantly visible.",
        "## Related pages",
        "- [bKash Guide](/bkash-guide), the broader payment method overview.",
        "- [Minimum Deposit](/jeetbuzz-minimum-deposit), first-deposit and recurring-deposit thresholds across rails.",
        "- [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal), pair with Nagad if you want a different cash-out rail.",
        "- [Withdrawal Time](/jeetbuzz-withdrawal-time), expected times for cash-out across payment methods.",
        "- [Deposit Failed](/jeetbuzz-deposit-failed), the four evidence items support needs to recover a lost deposit.",
        "- [First Deposit Bonus](/jeetbuzz-first-deposit-bonus), the bonus your first bKash deposit can trigger.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. bKash caps, tiers and fees follow bKash's own published tariff; treat the bKash app and the JeetBuzz cashier as the live source of truth. Only deposit money you can afford to lose, and use [self-exclusion](/how-to-delete-jeetbuzz-account) if play becomes stressful.",
      ]}
      bodyByLocale={{
        bn: [
          "## bKash কেন বাংলাদেশে ডিফল্ট রেল",
          "বাংলাদেশে বেশিরভাগ retail digital payment bKash-এ হয়, JeetBuzz এটা end-to-end সমর্থন করে। Deposit সাধারণত ১ মিনিটে ঢোকে, minimum ছোট, রেল প্রায় সবসময় সচল। বন্ধ হলে [Nagad](/nagad-guide) ও [Rocket](/rocket-guide) fallback।",
          "## ৫ ধাপ bKash deposit",
          "১. **JeetBuzz-এ লগইন**, Cashier → Deposit খুলুন।",
          "২. **bKash select**। Cashier যা দেখায়: Personal Send Money বা Merchant Payment। Merchant available হলে সেটাই ভালো, auto-reconcile।",
          "৩. **অ্যামাউন্ট দিন।** Cashier bKash number ও **reference/TrxID** দেখাবে, bKash reference-এ হুবহু বসাতে হবে।",
          "৪. **bKash app খুলে** ওই number-এ টাকা পাঠান, reference paste করুন। Confirm হলে TrxID কপি করুন।",
          "৫. **JeetBuzz-এ ফিরে** TrxID paste করে submit। সাধারণত ১–৫ মিনিটে credit।",
          "## Minimum, maximum, ফি",
          "- **Minimum**: প্রথম BDT ১০০, পরের BDT ২০০ ([Minimum Deposit](/jeetbuzz-minimum-deposit) দেখুন)।",
          "- **Per transaction max**: Personal-এ BDT ২৫,০০০ (bKash-এর নিজের cap)। Merchant-এ বেশি।",
          "- **Daily cap**: Personal-এ aggregate BDT ৫০,০০০ (bKash KYC tier অনুযায়ী)।",
          "- **JeetBuzz-এর দিক থেকে ফি**: শূন্য। bKash-এর send-money charge প্রযোজ্য।",
          "## Credit সময়",
          "- **Merchant**: গড়ে ৩০ সেকেন্ড–২ মিনিট।",
          "- **Personal + সঠিক reference**: ১–৫ মিনিট।",
          "- **Personal + reference নেই**: ১৫ মিনিট–২৪ ঘণ্টা, manual reconciliation।",
          "- **Outage-এর সময়**: outage clear হলে। Resend নয়, cashier refresh।",
          "Cash-out এর mirror expectation দেখুন [Withdrawal Time](/jeetbuzz-withdrawal-time)।",
          "## Deposit fail-এর ৫ কারণ",
          "১. **ভুল reference/TrxID**, সবচেয়ে সাধারণ। match হয় না। Live-chat ticket-এ TrxID, sender number, screenshot দিন।",
          "২. **Name mismatch**, bKash account holder name JeetBuzz KYC-এর সাথে মিলছে না। AML rule অনুযায়ী মিলতে হবে। শুধু নিজের bKash-এ deposit করুন।",
          "৩. **ভুল destination number**, পুরনো session-এর cached নম্বরে পাঠানো। JeetBuzz নম্বর rotate করে, cashier refresh।",
          "৪. **Amount mismatch**. BDT ৫০০ পাঠিয়ে ১,০০০ declared। Received amount-ই credit হয়।",
          "৫. **bKash-এর নিজের KYC tier কম**, daily cap deposit-এর নিচে। Split করে পাঠান বা bKash KYC upgrade।",
          "প্রতিটির exact live-chat message [Deposit Problem](/jeetbuzz-deposit-problem)-এ।",
          "## Credit না হলে recovery",
          "১. bKash-এ টাকা গেছে নিশ্চিত হন. TrxID ও status দুটোই Successful।",
          "২. bKash transaction detail screenshot।",
          "৩. JeetBuzz live chat-এ TrxID, sender number, amount, username, timestamp দিন।",
          "৪. Manual reconciliation চান। সাধারণত: Merchant ৬ ঘণ্টায়, Personal ২৪ ঘণ্টায়।",
          "৫. Recipient number ভুল হলে (আপনার দিক থেকে) [Deposit Failed](/jeetbuzz-deposit-failed)-এ reversal-এর জন্য ৪টি evidence।",
          "## Shared device-এ bKash নিরাপদ",
          "- bKash PIN কখনো share নয়, JeetBuzz agent-ও চায় না।",
          "- Public device-এ bKash logout।",
          "- Phone-এ device-level PIN/biometric।",
          "- bKash notification on, outgoing transaction তাৎক্ষণিক দৃশ্যমান।",
          "## সম্পর্কিত পেজ",
          "- [bKash Guide](/bkash-guide)",
          "- [Minimum Deposit](/jeetbuzz-minimum-deposit)",
          "- [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal)",
          "- [Withdrawal Time](/jeetbuzz-withdrawal-time)",
          "- [Deposit Failed](/jeetbuzz-deposit-failed)",
          "- [First Deposit Bonus](/jeetbuzz-first-deposit-bonus)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় affiliate। bKash cap/tier/fee bKash-এর নিজস্ব tariff অনুসরণ করে। যতটুকু হারাতে পারবেন ততটুকুই deposit; চাপ হলে [self-exclusion](/how-to-delete-jeetbuzz-account)।",
        ],
      }}
      related={[
        { to: "/bkash-guide", title: "bKash Guide", desc: "Broader bKash overview for JeetBuzz." },
        { to: "/jeetbuzz-minimum-deposit", title: "Minimum Deposit", desc: "Threshold per rail and per bonus." },
        { to: "/jeetbuzz-nagad-withdrawal", title: "Nagad Withdrawal", desc: "Cash-out via Nagad end-to-end." },
        { to: "/jeetbuzz-withdrawal-time", title: "Withdrawal Time", desc: "Expected timing per payment rail." },
        { to: "/jeetbuzz-deposit-failed", title: "Deposit Failed", desc: "Debited but not credited, recovery." },
        { to: "/jeetbuzz-first-deposit-bonus", title: "First Deposit Bonus", desc: "The bonus your first bKash deposit can unlock." },
        { to: "/payments", title: "Payments Hub", desc: "Every JeetBuzz payment method in one place." },
        { to: "/help", title: "Help Center", desc: "Support pillar, deposits, withdrawals, appeals." },
      ]}
      faqs={[
        { q: "What is the minimum bKash deposit on JeetBuzz?", a: "BDT 100 for the first deposit; BDT 200 for subsequent deposits. Bonus offers may require a higher minimum, check the specific promotion." },
        { q: "How long does a bKash deposit take to credit?", a: "Merchant Payment: 30 seconds to 2 minutes. Personal Send Money with the correct reference: 1–5 minutes. Without a reference: 15 minutes to 24 hours." },
        { q: "Does JeetBuzz charge a fee on bKash deposits?", a: "No. JeetBuzz doesn't add a fee. bKash's own send-money charge may apply per bKash's published tariff." },
        { q: "What if I forgot to enter the reference on bKash?", a: "Open live chat with the TrxID, sender number, amount and timestamp. Support reconciles manually, usually within 24 hours." },
        { q: "Can I deposit from someone else's bKash?", a: "No. AML rules require the bKash holder name to match your JeetBuzz KYC. A deposit from a third-party wallet will be flagged and returned." },
        { q: "The bKash number in the cashier keeps changing, is that normal?", a: "Yes. JeetBuzz rotates deposit numbers for security. Always refresh the cashier before sending, never use a cached number from an old session." },
        { q: "What's the maximum single bKash deposit?", a: "BDT 25,000 on bKash Personal (bKash's own limit). The Merchant path lifts this in most tiers." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "bKash-এ minimum deposit কত?", a: "প্রথম BDT ১০০, পরের BDT ২০০। Bonus offer-এ ভিন্ন threshold থাকতে পারে।" },
          { q: "bKash deposit credit হতে কতক্ষণ?", a: "Merchant: ৩০ সেকেন্ড–২ মিনিট। Personal + সঠিক reference: ১–৫ মিনিট। Reference ছাড়া: ১৫ মিনিট–২৪ ঘণ্টা।" },
          { q: "JeetBuzz কি bKash deposit-এ ফি নেয়?", a: "না। bKash-এর নিজের send-money charge প্রযোজ্য হতে পারে।" },
          { q: "Reference ভুলে গেলে?", a: "Live chat-এ TrxID, sender number, amount, timestamp দিন। সাধারণত ২৪ ঘণ্টায় manual reconciliation।" },
          { q: "অন্যের bKash থেকে deposit করা যায়?", a: "না। AML অনুযায়ী holder name JeetBuzz KYC-এর সাথে মিলতে হবে। Third-party wallet flagged হয়ে ফেরত।" },
          { q: "Cashier-এ bKash নম্বর বারবার বদলায় কেন?", a: "নিরাপত্তার জন্য rotate হয়। পাঠানোর আগে সবসময় cashier refresh।" },
          { q: "Single bKash deposit-এর সর্বোচ্চ কত?", a: "bKash Personal-এ BDT ২৫,০০০ (bKash-এর নিজের limit)। Merchant-এ বেশি।" },
        ],
      }}
    />
  ),
});