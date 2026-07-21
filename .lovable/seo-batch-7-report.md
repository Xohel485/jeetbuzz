# SEO Opportunity Report — Batch 7

_Source: Google Search Console (last 90 days) + on-site audit. Generated 2026-07-21._

## Batch 7 execution summary

**Rule enforced:** freeze new URL creation, strengthen existing pages, raise topical authority + CTR. No new routes shipped.

### Optimized
- `src/routes/bonuses.tsx` — canonical now points to `/bonus-and-promotions` to consolidate duplicate bonus intent; added a Recent Updates freshness block.
- `src/routes/help.tsx` — added Recent Updates block linking Withdrawal Pending, Password Reset, OTP, Deposit Problem, KYC.
- `src/components/home/HubLinksStrip.tsx` (new component, no new URL) — eager 4-hub link grid on `/` so Homepage → Help / Payments / Bonuses / Games is one crawl hop.
- `src/components/home/HomePage.tsx` — mounts HubLinksStrip immediately after Hero.

### Created
- None (freeze respected).

### GSC queries addressed
- `jeetbuzz bonus` cluster consolidation → `/bonus-and-promotions` as canonical target for bonus keywords.
- Long-tail help queries (withdrawal pending / password reset / OTP not received / KYC) surfaced from `/help` via freshness block.
- Hub-first crawl paths for `jeetbuzz login`, `jeetbuzz bkash`, `jeetbuzz bonus`, `jeetbuzz live cricket` via HubLinksStrip.

### Skipped (intentionally)
- `jeet bhuj` (34 imp) — misspelling, low commercial intent, existing brand-variant page already covers.
- `jeetbuzz world` (9 imp) — below 20-impression threshold.
- Bulk `/bd/bn/*` retitle sweep — deferred to Batch 8; requires per-page GSC signal to avoid blind edits.
- Blog CTR pass — deferred to Batch 8 pending per-post GSC data.

## SEO Opportunity Report (rolling)

### Top 20 queries by impressions (last 90 days)
1. jeetbuzz login — 74
2. jeetbuzz — 61
3. jeet buzz — 47
4. jeetbuzz bd — 38
5. jeet bhuj — 34 (skip: misspelling)
6. jeetbuzz app — 29
7. jeetbuzz bkash — 27
8. jeetbuzz affiliate — 24
9. jeetbuzz bonus — 22
10. jeetbuzz sign up — 21
11. jeetbuzz live cricket — 19
12. jeetbuzz promo code — 17
13. jeetbuzz apk — 15
14. jeetbuzz withdrawal — 13
15. jeetbuzz partner login — 12
16. jeetbuzz affiliate login password — 10
17. jeetbuzz world — 9 (skip: below threshold)
18. jeetbuzz first deposit bonus — 9
19. jeetbuzz review — 8
20. is jeetbuzz safe — 7

### Top 20 pages by impressions
`/`, `/login`, `/jeetbuzz-sign-up`, `/affiliate-program`, `/bonus-and-promotions`, `/jeetbuzz-review`, `/welcome-bonus`, `/jeetbuzz-promo-code`, `/jeetbuzz-partner-login`, `/affiliate-login`, `/jeetbuzz-first-deposit-bonus`, `/jeetbuzz-withdrawal-time`, `/jeetbuzz-deposit-problem`, `/is-jeetbuzz-safe`, `/jeetbuzz-bkash-deposit`, `/jeetbuzz-live-cricket`, `/download`, `/bd/bn/`, `/help`, `/payments`.

### Pages ranking position 8–20 (quick-win)
- `/affiliate-login` — pos ~10 for "affiliate login password".
- `/jeetbuzz-live-cricket` — pos ~9 for "jeetbuzz live cricket" (new; monitor).
- `/jeetbuzz-promo-code` — pos ~11.
- `/is-jeetbuzz-safe` — pos ~14.
- `/bonus-and-promotions` — pos ~12; consolidation should lift.

### Pages with CTR < 1%
- `/bd/bn/` locale root — content-heavy but title/H1 not query-shaped.
- `/help` — informational, but description was too generic (fixed in Batch 6).
- `/blog` index — deferred to Batch 8.

### Pages with zero inbound links from hubs
- After Batch 7, none of the money pages are zero-hop from `/`: all reachable via HubLinksStrip → hub → page.
- Remaining: several blog posts still lack sidebar/related links from a hub — Batch 8 target.

### Queries without a dedicated page
- None above threshold; all top-30 GSC queries now have a dedicated or hub page.

### Duplicate intent warnings
- **Resolved:** `/bonuses` ↔ `/bonus-and-promotions` — `/bonuses` now canonicalises to `/bonus-and-promotions`.
- **Watch:** `/jeetbuzz-review` vs `/is-jeetbuzz-safe` — repositioned in Batch 5 (safety/licensing vs full review); re-check after next recrawl.
- **Watch:** `/download` vs `/jeetbuzz-apk-download` vs `/jeetbuzz-download-for-android` — three URLs, overlapping intent; candidate for Batch 8 canonical audit.

### Highest-priority opportunities for Batch 8
1. `/download` cluster canonical audit (3-way overlap).
2. `/bd/bn/*` title + H1 + meta pass driven by per-page GSC data.
3. Blog CTR sweep (title + description on top-10 posts by impressions).
4. Affiliate cluster: verify every `/jeetbuzz-affiliate-*` page links back to `/affiliate-program` and shows AFFILIATE_CLUSTER.
5. Add breadcrumbs + Related Articles audit across content pages (spot-check pass).