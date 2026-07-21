import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/how-to-delete-jeetbuzz-account";
const TITLE = "How to Delete JeetBuzz Account 2026 — Deletion, Self-Exclusion & Cool-Off";
const DESC = "How to delete a JeetBuzz account in 2026 — the difference between account deletion, self-exclusion and cool-off, plus the exact request the operator needs.";

export const Route = createFileRoute("/how-to-delete-jeetbuzz-account")({
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
      title={<>How to <span className="gold-text">Delete JeetBuzz Account</span></>}
      subtitle="Three ways to step away — cool-off, self-exclusion or full deletion. Which is right for you and the exact request the operator will action."
      ctaIntent="login" ctaLabel="Log In to Request"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Delete Account", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Three options, not one",
        "Most people who want to \"delete\" a JeetBuzz account actually need one of three responsible-gaming tools. The right one depends on how permanent the break should be.",
        "| Option | Duration | Reversible? | Right for |",
        "|---|---|---|---|",
        "| Cool-off | 24 h – 6 weeks | Yes, after period ends | Short breaks, chasing losses |",
        "| Self-exclusion | 6 months – 5 years | No, until period ends | Gambling stopped feeling optional |",
        "| Account deletion | Permanent | No | You are done for good |",
        "## Before you request anything",
        "1. **Withdraw your balance** — deleted or self-excluded accounts cannot cash out later without extra steps. Follow the [Withdrawal Guide](/withdrawal-guide).",
        "2. **Cancel any auto-renewing bonuses** so support does not have to reverse them first.",
        "3. **Save your transaction history** (Account → Transactions → Export) if you might need it for tax or personal records.",
        "## Requesting a cool-off",
        "1. Log in and go to **Account → Responsible Gaming → Cool-off**.",
        "2. Choose a duration (24 hours to 6 weeks).",
        "3. Confirm. You cannot log in until the period ends.",
        "Cool-off is designed to break a streak, not to end play forever.",
        "## Requesting self-exclusion",
        "1. **Account → Responsible Gaming → Self-Exclusion**.",
        "2. Choose a period (typically 6 months, 1 year, 2 years, 5 years).",
        "3. Confirm — this cannot be lifted early, even by support. That is the point.",
        "Self-exclusion also stops marketing emails and SMS. If gambling has stopped feeling optional, self-exclusion — not deletion — is what health organisations recommend.",
        "## Requesting permanent deletion",
        "1. Open live chat from the official JeetBuzz site.",
        "2. Send exactly: *\"I request permanent closure and deletion of my account [USERNAME / ID]. I understand this cannot be reversed and my remaining balance is [BALANCE].\"*",
        "3. Complete any identity verification support asks for.",
        "4. Withdraw the remaining balance to your KYC-verified wallet.",
        "5. Confirm the closure email that arrives within 24–48 hours.",
        "Under most operator T&C, deleted accounts cannot be reopened — a new account under the same KYC will be flagged as multi-accounting.",
        "## What deletion does and does not do",
        "- **Removes** login, saved payment methods and marketing consent.",
        "- **Retains** transaction records for the legally required period (typically 5–7 years for AML compliance) — this is the law, not the operator's choice.",
        "- **Does not** transfer or refund any bonus balance.",
        "## Get real help",
        "If gambling is causing harm, self-exclusion is only step one. Independent support:",
        "- **BeGambleAware** — begambleaware.org (English, worldwide).",
        "- **Gamblers Anonymous** — gamblersanonymous.org.",
        "- **Local helplines** vary by country — search for the national problem-gambling helpline.",
      ]}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "Can I delete my JeetBuzz account from the app?", a: "Cool-off and self-exclusion are self-service inside Account → Responsible Gaming. Permanent deletion must be requested through live chat so the operator can confirm the balance and identity first." },
        { q: "What happens to my balance if I delete my account?", a: "Withdraw before requesting deletion. Once the account is closed, cashing out later requires extra verification and is not guaranteed within a specific timeframe." },
        { q: "Can I reopen a deleted JeetBuzz account?", a: "No, deleted accounts are permanent under the operator's T&C. A new account under the same KYC is typically flagged as multi-accounting and suspended." },
        { q: "Is self-exclusion better than deletion?", a: "Health organisations recommend self-exclusion when gambling has become compulsive. It cannot be lifted early — which is the protection you want in that situation. Deletion is for people who have simply moved on." },
        { q: "Why can't the operator delete my transaction history entirely?", a: "AML regulations require operators to retain transaction records for a defined period (typically 5–7 years). This is a legal requirement, not an operator choice." },
        { q: "Does deletion remove me from marketing emails?", a: "Yes. Deletion and self-exclusion both stop marketing communications. You can also unsubscribe separately from Account → Preferences without closing the account." },
      ]}
    />
  ),
});