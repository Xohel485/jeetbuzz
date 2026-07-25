## Final Audit Findings

Audited the six misspelling landing pages, homepage, sitemap index, robots.txt, and the breadcrumb validation script against the running preview.

### What is working
- All six misspelling routes (`/jetbuzz`, `/jeet-buzz`, `/jeetbuz`, `/jest-buzz`, `/jitbuzz`, `/জিতবাজ`) return HTTP 200 with exactly one `Article`, one `BreadcrumbList`, and one `FAQPage` JSON-LD each — no duplicate structured data.
- Self-referencing canonical is present on each variant.
- `robots.txt` disallows `/go/`, `/admin/`, `/api/`, `/app/launch`, etc., and points to the sitemap index.
- Sitemap index links to all eight child sitemaps with git-based `lastmod`; `sitemap-solutions.xml` includes the misspelling URLs.
- Home meta title/description are unique and keyword-aligned.

### What is broken

**1. Breadcrumb validator cannot launch in CI/sandbox**

`bun run validate:breadcrumbs` fails immediately:

```
Running as root without --no-sandbox is not supported.
```

Puppeteer is launched with `{ headless: true }` only. The script cannot run in the Lovable sandbox or in most Linux CI containers.

**2. Broken hreflang cluster on misspelling pages**

Every misspelling page emits four alternates plus `x-default`, but the non-Bengali targets don't exist:

```text
/pk/ur/jetbuzz         -> 404
/in/hi/jetbuzz         -> 404
/bd/bn/জিতবাজ         -> 404   (only Bengali-script variant)
/bd/bn/jetbuzz         -> 200   (OK)
```

The misspelling pages were designed as Bengali-only (`bn-BD`), so the `ur-PK` and `hi-IN` alternates are invalid. Google will drop the whole cluster when reciprocals 404, which weakens the intended `bn-BD` signal too. The Bengali-script route (`/জিতবাজ`) additionally points at a `/bd/bn/জিতবাজ` target that was never generated.

## Plan

### Fix 1 — Puppeteer sandbox flag

Edit `scripts/validate-breadcrumbs.ts`: launch Chromium with `args: ["--no-sandbox", "--disable-setuid-sandbox"]` so the script runs under root in the Lovable sandbox and standard CI images. No behavior change for local dev.

### Fix 2 — Scope hreflang cluster to what actually exists

In each of the six misspelling route files (`src/routes/jetbuzz.tsx`, `jeet-buzz.tsx`, `jeetbuz.tsx`, `jest-buzz.tsx`, `jitbuzz.tsx`, `জিতবাজ.tsx`), replace the current multi-locale hreflang call with a Bengali-only cluster:

- `x-default` → self
- `bn-BD` → `/bd/bn/<slug>` (verify 200 first; for `/জিতবাজ` either create the `/bd/bn/জিতবাজ` target or drop the `bn-BD` alternate and keep only `x-default` + self)
- Remove `en`, `ur-PK`, and `hi-IN` alternates entirely — these pages have no Urdu/Hindi/English equivalents.

If `hreflangLinks` in `src/lib/schema.ts` currently hard-codes the four-locale set, add an option (or a new helper like `hreflangBengaliOnly`) so the misspelling routes can opt out cleanly without regressing the global multi-locale pages.

### Fix 3 — Re-run validators

After the two edits:

1. `bun run validate:breadcrumbs` against `http://localhost:8080` — expect 6/6 PASS.
2. Re-curl each misspelling page and confirm every emitted `<link rel="alternate">` target returns 200.

### Out of scope
No content, schema, canonical, or sitemap changes — those all passed the audit.

## Technical details

- `scripts/validate-breadcrumbs.ts` line ~124: `puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] })`.
- Misspelling route hreflang lives in each route's `head()` via `hreflangLinks({...})` from `src/lib/schema.ts`. The current cluster of `{ default, en, "bn-BD", "ur-PK", "hi-IN" }` is inherited from the multi-locale pages and must be narrowed for this Bengali-only cluster.
