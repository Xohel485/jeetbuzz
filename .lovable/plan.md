# Easy Win SEO Roadmap — Quality First, GSC-Led

## Guiding Principle
GSC 73 queries = ground truth. Semrush = supplement. আমরা head-brand চেজ করব না — যেখানে Google ইতিমধ্যেই impressions দিচ্ছে সেখানে গভীরতা তৈরি করব।

## Priority Signal — GSC Query Buckets (73 total)
**Bucket 1 — Affiliate (high-intent, Google already impressing):**
affiliate, affiliated, affiliate program, affiliate login, affiliate commission, affiliate commission rate, affiliate app, affiliate signup, affiliate withdrawal, affiliate link, affiliate password, partners, refer bonus, promotion
**Bucket 2 — App / APK (product-intent):**
jeet boost download, jeet boost apk, app apk, apk download, apk, download apk, download for android, apps, download
**Bucket 3 — Bonuses / Promo:**
promo code, promo code today, promo code today free, bonus code, welcome bonus, first deposit bonus, deposit bonus, sign up bonus, free bonus, refer bonus
**Bucket 4 — Problem / Support:**
account locked, withdraw, withdrawal, withdraw time, withdrawal time, deposit problem, how to delete jeetbuzz account
**Bucket 5 — Trust / Discovery:**
jeetbuzz review, jeetbuzz official site, jeetbuzz world, live cricket, cricket, jeet login
**Bucket 6 — Brand misspellings (cheap capture):**
jetbuzz, jest buzz, jutt buzz, jeet bagh, jeet bhuj, affilate/affilite variants

---

## Week 1 — Foundation (15 pages + 4 hubs + 10 BN)

### 4 Cluster Hubs (build first — internal-link amplifiers)
- `/help` — Support/problems pillar (links to Bucket 4)
- `/payments` — Deposit + withdrawal pillar (links to bKash/Nagad/UPI/EasyPaisa guides)
- `/bonuses` — Bonuses pillar (Bucket 3)
- `/games` — Games pillar (live cricket, slots, crash)

### 15 English Solution Pages (GSC-driven, 1200–1500 words each)
Affiliate depth (Bucket 1 — top opportunity):
1. `/jeetbuzz-affiliate-commission-rate`
2. `/jeetbuzz-affiliate-signup`
3. `/jeetbuzz-affiliate-withdrawal`
4. `/jeetbuzz-affiliate-app` (partner app / dashboard app)
5. `/jeetbuzz-referral-code`

App/APK depth (Bucket 2):
6. `/jeetbuzz-download-for-android`
7. `/jeetbuzz-download-for-ios`
8. `/jeetbuzz-app-update`

Bonus depth (Bucket 3):
9. `/jeetbuzz-promo-code`
10. `/jeetbuzz-first-deposit-bonus`
11. `/jeetbuzz-refer-bonus`

Problems (Bucket 4):
12. `/jeetbuzz-withdrawal-time`
13. `/jeetbuzz-account-locked`
14. `/jeetbuzz-deposit-problem`
15. `/how-to-delete-jeetbuzz-account`

### 10 Bangla Native Pages (`/bd/bn/*`)
Top demand localized (native, not translated):
- `/bd/bn/jeetbuzz-affiliate-commission-rate`
- `/bd/bn/jeetbuzz-affiliate-signup`
- `/bd/bn/jeetbuzz-download-for-android`
- `/bd/bn/jeetbuzz-app-update`
- `/bd/bn/jeetbuzz-promo-code`
- `/bd/bn/jeetbuzz-first-deposit-bonus`
- `/bd/bn/jeetbuzz-withdrawal-time`
- `/bd/bn/jeetbuzz-account-locked`
- `/bd/bn/jeetbuzz-deposit-problem`
- `/bd/bn/jeetbuzz-refer-bonus`

**Excluded from Batch 1** (per your call — trademark / thin-content risk):
- `/jeetbuzz-77`, `/betbuzz-vs-jeetbuzz`, `/baji-vs-jeetbuzz`

---

## Week 2 — Depth + Internal Linking (20 pages)
- 10 English problem/support long-tail pages: login-not-working, otp-not-received, password-reset (upgrade existing), forgot-username, kyc-verification-failed, deposit-failed, withdrawal-pending, minimum-withdrawal, minimum-deposit, transaction-history
- 10 payments deep-dives: bkash-limit, nagad-limit, rocket-charges, upay-deposit, usdt-withdrawal, crypto-deposit, bank-transfer-bd, bank-transfer-pk, phonepe-transfer, paytm-transfer
- Wire every new page into cluster hub + 3 siblings via `src/lib/clusters.ts` additions.
- FAQ + HowTo schema on every page (using existing `faqSchema` in `src/lib/schema.ts`).

## Week 3 — Games + Affiliate + Sports (15 pages)
- Games (Bucket 5 signal): live-cricket-betting-guide, cricket-odds-explained, ipl-betting, bpl-betting, psl-betting, aviator-strategy, crazy-time-guide, teen-patti-guide, andar-bahar-guide, baccarat-guide
- Affiliate expansion: affiliate-terms, affiliate-vs-agent, affiliate-earning-example, affiliate-payment-methods
- Trust: jeetbuzz-official-site (canonical/anti-fake), jeetbuzz-world (world = "সব দেশ" landing)

## Week 4 — UR + HI Native Overlay (20 pages)
- 10 `/pk/ur/*` on the top-10 Bucket 1–4 topics
- 10 `/in/hi/*` on the top-10 (swap payments to UPI/PhonePe/Paytm; sports to IPL/Cricket)

**Total end-state:** ~70 new URLs (15 + 20 + 15 + 20) + 4 hubs, focused entirely on GSC-validated demand.

---

## Per-Page Editorial Contract
- 1200–1500 words, market-aware, unique H1 matching exact GSC query
- `<title>` 50–58 chars; meta description 145–158 chars
- Breadcrumb + WebPage + FAQPage JSON-LD (HowTo where step-by-step)
- 5–8 unique FAQs per page (no reuse across cluster)
- Internal linking: 1 up (hub) + 3 sideways (siblings) + 2 down (deep detail)
- Neutralized claims (no "instant", no "guaranteed"), Curaçao license disclosure where relevant
- CTA via `/go/*` tracking routes only — never raw affiliate URL
- No `.md` frontmatter drift; hreflang cluster via `hreflangLinks()`

## Technical Infrastructure
- **Shared template**: `src/components/GuidePage.tsx` already exists → reuse (keeps bundle flat, prevents perf regression).
- **Cluster maps**: extend `src/lib/clusters.ts` with `AFFILIATE_CLUSTER`, `PAYMENTS_CLUSTER`, `PROBLEMS_CLUSTER`, `APP_CLUSTER`, `BONUS_CLUSTER`.
- **New sitemap child**: `sitemap-solutions.xml` for the ~50 new solution/problem pages (games go into existing `sitemap-guides.xml`). Add child to `sitemap.xml` index.
- **Hubs**: `src/routes/help.tsx`, `payments.tsx`, `bonuses.tsx`, `games.tsx` — each renders hub layout with cluster grid.
- **Locale routing**: use existing dotted convention `src/routes/bd.bn.<slug>.tsx`.
- **Robots**: no change (all new routes indexable).
- **Performance guardrail**: no per-page hero image; reuse shared cluster hero; Lighthouse must stay ≥ 95.

---

## Success Metrics (90-day GSC targets)
| Metric | Baseline | Target |
|---|---|---|
| Impressions/mo | 653 | 15,000+ |
| Queries impressed | 73 | 400+ |
| Ranking keywords top-100 | ~40 | 300+ |
| Ranking keywords top-10 | ~5 | 40+ |
| Non-brand clicks | ~1 | 100+ |
| BD language coverage | 43 routes | 63 routes native BN |

---

## Confirm to proceed
1. **Start Week 1 now** (15 EN + 4 hubs + 10 BN = 29 new URLs), or split into two ships (hubs+EN first, BN 2 days later)?
2. **Slug convention**: hyphenated English (`/jeetbuzz-affiliate-commission-rate`) as shown — confirm ✅ or prefer `/help/*`, `/affiliate/*` subfolders?
3. **Delete-account page** (`/how-to-delete-jeetbuzz-account`) — write it as a real GDPR-style guide, or noindex/omit (some operators consider this counter-conversion)?