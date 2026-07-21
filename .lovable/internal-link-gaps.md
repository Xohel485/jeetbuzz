# Internal-Link Gap Report

_Generated 2026-07-21 by `scripts/find-internal-link-gaps.mjs`._

**Scanned:** 87 English top-level routes.
**Hubs:** /help, /payments, /bonuses, /games (+ HubLinksStrip, clusters.ts).
**Pages with 0 inbound hub links:** 26.

## Proposed link placements

### → add to `src/routes/help.tsx` (20)

Suggested markdown lines (append inside the `body` array under a `## Related` or topic section):

```md
- [Affiliate Login](/affiliate-login) — one-line description of what this page solves.
- [Agent Earning Guide](/agent-earning-guide) — one-line description of what this page solves.
- [Android Web App Guide](/android-web-app-guide) — one-line description of what this page solves.
- [Blog](/blog) — one-line description of what this page solves.
- [Index](/blog/index) — one-line description of what this page solves.
- [Download](/download) — one-line description of what this page solves.
- [Ios App Guide](/ios-app-guide) — one-line description of what this page solves.
- [Is Jeetbuzz Safe](/is-jeetbuzz-safe) — one-line description of what this page solves.
- [Alternatives](/jeetbuzz-alternatives) — one-line description of what this page solves.
- [Review](/jeetbuzz-review) — one-line description of what this page solves.
- [Login](/login) — one-line description of what this page solves.
- [Privacy Policy](/privacy-policy) — one-line description of what this page solves.
- [Register](/register) — one-line description of what this page solves.
- [Responsible Gaming](/responsible-gaming) — one-line description of what this page solves.
- [Review Policy](/review-policy) — one-line description of what this page solves.
- [Security Guide](/security-guide) — one-line description of what this page solves.
- [Signup](/signup) — one-line description of what this page solves.
- [Terms](/terms) — one-line description of what this page solves.
- [Update Policy](/update-policy) — one-line description of what this page solves.
- [Vip Program](/vip-program) — one-line description of what this page solves.
```

Or, to strengthen the topical cluster instead, add to the matching array in `src/lib/clusters.ts`:

```ts
  { to: "/affiliate-login", title: "Affiliate Login", desc: "…" },
  { to: "/agent-earning-guide", title: "Agent Earning Guide", desc: "…" },
  { to: "/android-web-app-guide", title: "Android Web App Guide", desc: "…" },
  { to: "/blog", title: "Blog", desc: "…" },
  { to: "/blog/index", title: "Index", desc: "…" },
  { to: "/download", title: "Download", desc: "…" },
  { to: "/ios-app-guide", title: "Ios App Guide", desc: "…" },
  { to: "/is-jeetbuzz-safe", title: "Is Jeetbuzz Safe", desc: "…" },
  { to: "/jeetbuzz-alternatives", title: "Alternatives", desc: "…" },
  { to: "/jeetbuzz-review", title: "Review", desc: "…" },
  { to: "/login", title: "Login", desc: "…" },
  { to: "/privacy-policy", title: "Privacy Policy", desc: "…" },
  { to: "/register", title: "Register", desc: "…" },
  { to: "/responsible-gaming", title: "Responsible Gaming", desc: "…" },
  { to: "/review-policy", title: "Review Policy", desc: "…" },
  { to: "/security-guide", title: "Security Guide", desc: "…" },
  { to: "/signup", title: "Signup", desc: "…" },
  { to: "/terms", title: "Terms", desc: "…" },
  { to: "/update-policy", title: "Update Policy", desc: "…" },
  { to: "/vip-program", title: "Vip Program", desc: "…" },
```

### → add to `src/routes/payments.tsx` (5)

Suggested markdown lines (append inside the `body` array under a `## Related` or topic section):

```md
- [Deposit Withdrawal Guide](/deposit-withdrawal-guide) — one-line description of what this page solves.
- [Bkash Deposit](/jeetbuzz-bkash-deposit) — one-line description of what this page solves.
- [Minimum Deposit](/jeetbuzz-minimum-deposit) — one-line description of what this page solves.
- [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal) — one-line description of what this page solves.
- [Withdrawal Guide](/withdrawal-guide) — one-line description of what this page solves.
```

Or, to strengthen the topical cluster instead, add to the matching array in `src/lib/clusters.ts`:

```ts
  { to: "/deposit-withdrawal-guide", title: "Deposit Withdrawal Guide", desc: "…" },
  { to: "/jeetbuzz-bkash-deposit", title: "Bkash Deposit", desc: "…" },
  { to: "/jeetbuzz-minimum-deposit", title: "Minimum Deposit", desc: "…" },
  { to: "/jeetbuzz-nagad-withdrawal", title: "Nagad Withdrawal", desc: "…" },
  { to: "/withdrawal-guide", title: "Withdrawal Guide", desc: "…" },
```

### → add to `src/routes/games.tsx` (1)

Suggested markdown lines (append inside the `body` array under a `## Related` or topic section):

```md
- [Live Cricket](/jeetbuzz-live-cricket) — one-line description of what this page solves.
```

Or, to strengthen the topical cluster instead, add to the matching array in `src/lib/clusters.ts`:

```ts
  { to: "/jeetbuzz-live-cricket", title: "Live Cricket", desc: "…" },
```

## Coverage summary

| Hub | Distinct pages linked |
|---|---|
| /help | 11 |
| /payments | 12 |
| /bonuses | 5 |
| /games | 5 |
