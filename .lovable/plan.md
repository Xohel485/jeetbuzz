# Full Multilingual Content Translation Plan

## Goal
সব রুটের body content বাংলা (BD), উর্দু (PK), হিন্দি (IN) তে অনুবাদ করা — শুধু header/hero নয়। প্রতিটি locale-এ দেশভিত্তিক local keywords ব্যবহার যাতে SEO ranking ঠিক থাকে।

## Country-specific keyword strategy

| Locale | Country | Payment keywords | Sports keywords | Local terms |
|---|---|---|---|---|
| bn | Bangladesh | bKash, Nagad, Rocket, Upay | BPL, Bangladesh vs ..., ক্রিকেট বাজি | জিতবাজ, অনলাইন বেটিং সাইট বাংলাদেশ |
| ur | Pakistan | EasyPaisa, JazzCash, SadaPay | PSL, پاکستان کرکٹ, کرکٹ بیٹنگ | جیت بز, آن لائن بیٹنگ پاکستان |
| hi | India | UPI, PhonePe, Paytm, Google Pay | IPL, इंडिया vs ..., क्रिकेट सट्टा | जीतबज, ऑनलाइन बेटिंग इंडिया |
| en | Global | All | All cricket leagues | Generic |

## Architecture

কন্টেন্ট অনুবাদ rendering-এর জন্য proper system দরকার। বর্তমান `i18n.tsx` ছোট key-value পদ্ধতি — long-form pages-এর জন্য scalable না।

**নতুন structure:**
```
src/content/
  ├── routes/
  │   ├── jeetbuzz-review.{en,bn,ur,hi}.ts
  │   ├── registration-guide.{en,bn,ur,hi}.ts
  │   ├── login-guide.{en,bn,ur,hi}.ts
  │   ├── bonus-and-promotions.{en,bn,ur,hi}.ts
  │   ├── apk-download-guide.{en,bn,ur,hi}.ts
  │   ├── deposit-withdrawal-guide.{en,bn,ur,hi}.ts
  │   ├── faq.{en,bn,ur,hi}.ts
  │   ├── payment-methods.{en,bn,ur,hi}.ts
  │   ├── about, contact, terms, privacy, etc.
  │   └── ...20+ routes
  ├── homepage.{en,bn,ur,hi}.ts (existing extends)
  └── shared.{en,bn,ur,hi}.ts (FAQ items, payment names, badges)
```

Each content file exports a typed object: `{ meta: {title, description, keywords}, hero: {...}, sections: [...], faq: [...] }`.

Routes refactor: pull content from the locale-matched file based on `useLocale()`. Pages become thin shells that render structured data.

## Execution batches

**Batch 1 — Foundation (1 response)**
- Create `src/content/` structure with TypeScript types
- Build `useRouteContent(routeKey)` hook that returns locale-matched content
- Update `GuidePage` to accept structured content prop

**Batch 2 — Homepage + Top conversion pages (1 response)**
- Homepage full body (stats, trust signals, game categories, payment strip, FAQ teaser)
- `jeetbuzz-review`, `registration-guide`, `login-guide` — all body content in 4 langs

**Batch 3 — Bonuses + App + Payments (1 response)**
- `bonus-and-promotions`, `apk-download-guide`, `deposit-withdrawal-guide`
- `payment-methods` with country-filtered methods
- Individual payment guides: `bkash-guide`, `nagad-guide`, `rocket-guide` (BN priority)

**Batch 4 — Guides + FAQ (1 response)**
- `casino-guide`, `sports-betting`, `live-cricket-betting`, `vip-program`
- `security-guide`, `mobile-app-guide`, `deposit-guide`, `withdrawal-guide`
- `faq` — full Q&A in all 4 langs

**Batch 5 — Policies + About + Contact (1 response)**
- `about`, `contact`, `author`
- `terms`, `privacy-policy`, `affiliate-disclosure`, `responsible-gaming`
- `content-policy`, `editorial-policy`, `fact-checking`, `review-policy`, `update-policy`

**Batch 6 — Per-route head meta with localized keywords (1 response)**
- Each route's `head()` reads from content file's `meta` object
- Title, description, keywords localized per (locale, country) combo
- BD pages emphasize bKash/BPL; PK pages EasyPaisa/PSL; IN pages UPI/IPL

**Batch 7 — Blog (English live; bn/ur/hi remain drafts as already agreed)**
- Skip live publish; existing draft system stays

## Out of scope
- Blog auto-publish in bn/ur/hi (user has already gated this for review)
- Visual/layout changes
- Routing changes (existing `/bd/bn`, `/pk/ur`, `/in/hi` system works)

## Estimated scope
- ~25 route files × 4 locales = ~100 content files
- ~50,000-70,000 words of localized copy
- 6 consecutive build responses, no further check-ins between batches
- Each batch will compile cleanly before moving to next

## Quality guarantees
- No machine-mangled output — proper Bengali/Urdu/Hindi grammar
- Country-specific payment + cricket league references in each locale
- "Official Site Access" / "verified official affiliate partner" wording preserved across all locales
- Hreflang clusters unchanged
- Analytics events unchanged
- RTL preserved for Urdu

## After approval
আমি একটানা ৬টা batch run করব, মাঝে আর প্রশ্ন করব না। শেষে summary দিব: কোন রুট কোন ভাষায় সম্পূর্ণ, এবং SEO meta-তে কোন country keywords যোগ হয়েছে।
