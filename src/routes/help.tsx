import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, HELP_CLUSTER } from "@/lib/clusters";

const PATH = "/help";
const TITLE = "JeetBuzz Help Center — Login, KYC, Deposit & Withdrawal Fixes 2026";
const DESC = "Central JeetBuzz help center for BD, PK and IN players — recover a locked account, fix deposit and withdrawal issues, reset your password and appeal decisions.";

export const Route = createFileRoute("/help")({
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
      eyebrow="Help Center"
      title={<>JeetBuzz <span className="gold-text">Help Center</span></>}
      subtitle="One place for every JeetBuzz problem — account access, KYC, deposits, withdrawals and appeals. Pick your issue and follow the fix."
      breadcrumbs={[{ name: "Help", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## What this page solves",
        "Most JeetBuzz support tickets fall into six categories: cannot log in, forgot password, account locked or restricted, deposit debited but not credited, withdrawal pending too long, and how to formally close an account. The pages linked below walk each one end to end — no live chat wait needed for the common cases.",
        "## Recent updates",
        "- **2026-07** — Refreshed [Withdrawal Pending](/jeetbuzz-withdrawal-pending) with the seven real stall causes and the evidence support needs.",
        "- **2026-07** — Rewrote [Password Reset](/password-reset) with the escalation path when both phone OTP and email link fail.",
        "- **2026-06** — Added [OTP Not Received](/jeetbuzz-otp-not-received) fallback (carrier, DND, voice OTP).",
        "- **2026-06** — Expanded [Deposit Problem](/jeetbuzz-deposit-problem) with wallet name-mismatch fixes for bKash / Nagad / JazzCash.",
        "- **2026-05** — Published [Account Verification](/jeetbuzz-account-verification) KYC checklist with the six rejection reasons.",
        "## Access problems",
        "- **Cannot open the site** — [Login Problems](/login-problems) covers ISP blocks, DNS, mirror detection.",
        "- **Wrong password / no OTP** — [Password Reset](/password-reset) has phone and email flows plus what to do when both fail.",
        "- **Locked or restricted** — [Account Locked](/jeetbuzz-account-locked) explains the lock reasons and the exact appeal steps.",
        "## Money problems",
        "- **Deposit debited but not showing** — [Deposit Problem](/jeetbuzz-deposit-problem) with name-mismatch, wrong reference number and pending states.",
        "- **Withdrawal taking too long** — [Withdrawal Time](/jeetbuzz-withdrawal-time) with realistic timelines per rail.",
        "- **Payments overview** — [Payments Hub](/payments) compares bKash, Nagad, JazzCash, EasyPaisa and UPI side by side.",
        "## Bonuses and rollover",
        "Wagering rules trip up most first-time bonus claimers. Start with the [Bonuses Hub](/bonuses), then read the specific promo you plan to claim before your first deposit — bonuses are not applied retroactively.",
        "## Closing your account",
        "If you need to step away, use the [Delete Account guide](/how-to-delete-jeetbuzz-account) which covers deletion, self-exclusion and a cool-off period. Never share your login with a third party who claims they can close it for you.",
        "## Talking to live support",
        "When self-service does not resolve the issue, official JeetBuzz live chat is the only support channel — the site never asks for your bKash/Nagad PIN, OTP or full card number. Have your account ID and the reference number of the failed transaction ready before you open the chat.",
        "## Fastest ways to get unblocked",
        "1. Read the specific issue page below and follow every step.",
        "2. Collect proof — screenshots of the cashier receipt, wallet transaction ID and any error banners.",
        "3. Open live chat from the official site (not any mirror) with the proof attached.",
        "> Support cannot guarantee resolution timelines. Providing complete evidence in the first message consistently cuts back-and-forth in half.",
        "## More help topics",
        "- [Login](/login) — reach the real JeetBuzz login and avoid fake mirrors.",
        "- [Register](/register) — open a new JeetBuzz account in under three minutes.",
        "- [Signup](/signup) — signup walkthrough with welcome-bonus opt-in.",
        "- [Affiliate Login](/affiliate-login) — partner dashboard sign-in with 2FA.",
        "- [Download](/download) — install the JeetBuzz app on Android or iPhone.",
        "- [Android Web App Guide](/android-web-app-guide) — Android PWA install and permission checklist.",
        "- [iOS App Guide](/ios-app-guide) — iPhone / iPad install without the App Store.",
        "- [Is JeetBuzz Safe](/is-jeetbuzz-safe) — licensing, security and trust signals.",
        "- [JeetBuzz Review](/jeetbuzz-review) — full editorial review, pros and cons.",
        "- [JeetBuzz Alternatives](/jeetbuzz-alternatives) — how JeetBuzz compares to other BD/PK/IN books.",
        "- [Security Guide](/security-guide) — 2FA, device hygiene and phishing checks.",
        "- [Responsible Gaming](/responsible-gaming) — deposit limits, time-outs and self-exclusion.",
        "- [VIP Program](/vip-program) — loyalty tiers, cashback and dedicated host.",
        "- [Agent Earning Guide](/agent-earning-guide) — how sub-agents earn on JeetBuzz.",
        "- [Blog](/blog) — latest guides, updates and cricket coverage.",
        "- [Blog Index](/blog/index) — full archive of published posts.",
        "- [Terms](/terms) — user agreement and account terms.",
        "- [Privacy Policy](/privacy-policy) — how JeetBuzz handles player data.",
        "- [Review Policy](/review-policy) — how our editorial reviews are produced.",
        "- [Update Policy](/update-policy) — how and when guides are refreshed.",
      ]}
      related={[...PROBLEMS_CLUSTER, ...HELP_CLUSTER]}
      faqs={[
        { q: "Where is JeetBuzz customer support?", a: "24/7 live chat on the official site is the primary channel. There is no publicly listed support phone number, and no support agent will ever ask for your password, wallet PIN or OTP." },
        { q: "How long does JeetBuzz take to reply?", a: "Live chat is usually answered within a few minutes during peak hours. Complex disputes (KYC appeals, name mismatches) can take longer because they are escalated to a payments or risk team." },
        { q: "Can I email JeetBuzz for help?", a: "Live chat is the fastest path. Email support exists for formal complaints but replies are slower. For urgent access issues always start on live chat." },
        { q: "Does JeetBuzz have a helpline number in Bangladesh?", a: "No publicly listed helpline. Any WhatsApp or Telegram number claiming to be JeetBuzz support is unofficial — do not share credentials with them." },
      ]}
    />
  ),
});