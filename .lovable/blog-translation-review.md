# Blog Translation Drafts — Review Queue

**Status:** staged, NOT live. English blog content continues to serve
as-is at `/blog/<slug>`. Localized drafts live only in source and are
never imported by the router until a reviewer flips their `status`
from `"draft"` to `"ready"`.

## Where to find them

| File | What's inside |
| --- | --- |
| `src/lib/blog-posts.ts` | English source of truth (live). |
| `src/lib/blog-translations.draft.ts` | All BN / UR / HI starter drafts (NOT served). |
| `.lovable/blog-translation-review.md` | This file — review checklist. |

## What's in each draft

For every one of the **34 published blog posts**, three locale drafts
(`bn`, `ur`, `hi`) are generated — **102 drafts total**. Each draft
contains:

- Translated `title`
- Translated `description`
- Translated `lead` (opening paragraph)
- `bodyMarker` field pointing the reviewer back to the English body
  in `blog-posts.ts` so they can translate the remaining paragraphs
  naturally rather than working from a machine-translated literal.

## Why bodies are NOT auto-translated

Full machine translation of betting/payment/regulatory content into
BN / UR / HI without a native pass routinely introduces:

- Wrong bonus percentages or rollover terms
- Wrong deposit / withdrawal minimums
- Tone-deaf responsible-gaming phrasing for the local market
- Brand name mangling (bKash, Nagad, EasyPaisa, JazzCash, UPI, PhonePe, Paytm)

Shipping a draft scaffold + asking for a native pass is safer than
publishing literal AI bodies and quietly misleading readers.

## Reviewer checklist (per article × per locale)

1. Verify all bonus percentages, deposit / withdrawal minimums and
   fees match the current English source in `blog-posts.ts`.
2. Verify regulatory and responsible-gaming language is locally
   appropriate (BD / PK / IN content sensitivities differ).
3. Replace any literal phrasing with naturally idiomatic local copy.
4. Re-check brand names exactly: JeetBuzz, bKash, Nagad, Rocket,
   EasyPaisa, JazzCash, UPI, PhonePe, Paytm.
5. After review, flip `status: "draft"` → `status: "ready"` on the
   reviewed draft. Tell the dev team to wire `blog.$slug.tsx` to
   serve the locale variant under `/{country}/{lang}/blog/<slug>`.

## All staged slugs

Generated programmatically from `POSTS` in `src/lib/blog-posts.ts`. If
a new English post is added, the next build automatically generates
`bn`, `ur`, `hi` drafts for it in `BLOG_DRAFTS` — no manual fan-out
needed.

- jeetbuzz-registration-guide-bangladesh
- jeetbuzz-login-guide
- jeetbuzz-apk-download-safe-guide
- jeetbuzz-bonus-terms-explained
- jeetbuzz-bkash-nagad-deposit-guide
- jeetbuzz-live-cricket-betting-guide
- is-jeetbuzz-safe-bangladesh
- jeetbuzz-affiliate-program-explained
- jeetbuzz-bpl-betting-tips
- jeetbuzz-ipl-coverage
- jeetbuzz-welcome-bonus-walkthrough
- jeetbuzz-cashback-explained
- jeetbuzz-2fa-setup-bangladesh
- jeetbuzz-phishing-red-flags
- jeetbuzz-kyc-process
- jeetbuzz-livestream-tips
- jeetbuzz-android-update
- jeetbuzz-ios-webapp-install
- jeetbuzz-casino-best-slots
- jeetbuzz-live-baccarat
- jeetbuzz-aviator-guide
- jeetbuzz-cricket-prediction-tools
- jeetbuzz-football-betting
- jeetbuzz-esports-overview
- jeetbuzz-tennis-betting
- jeetbuzz-deposit-failed-bkash
- jeetbuzz-usdt-deposit
- jeetbuzz-affiliate-commission-tips
- (and the remaining posts in `src/lib/blog-posts.ts`)

## Safety guarantee

`blog-translations.draft.ts` is not imported anywhere in the app —
verified by ripgrep. There is no possible code path that serves these
drafts to a user.