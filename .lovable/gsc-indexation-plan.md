# GSC Indexation, CTR ও Not-Indexed অ্যাকশন প্ল্যান
Property: sc-domain:getjeetbuzz.com | Window: 2026-04-30 → 2026-07-29

## ১. বর্তমান অবস্থা (ডেটা)
- মোট ক্লিক ৯০ দিনে: **7** (হোম ৩, bkash-guide ১, registration-guide ১, affiliate blog ১, /login ১)
- মোট ইমপ্রেশন: ~১,১০০; গড় পজিশন বেশিরভাগ পেজে ২০-৩৫ (পেজ ২-৪)
- সাইটম্যাপ: index-এ 289 URL; child sitemap-এর মধ্যে GSC-তে মাত্র ৪টি সাবমিট করা ছিল
- URL Inspection:
  - `/download` → Submitted and indexed (PASS), শেষ ক্রল 2026-07-04
  - `/jetbuzz` (নতুন misspelling পেজ) → **URL is unknown to Google** = ক্রলই হয়নি

## ২. মূল সমস্যা
1. **ডিসকভারি গ্যাপ** — নতুন পেজগুলো (misspelling ৬টা, /network ৬টা) Google-এর কাছে অজানা। sitemap-solutions, -bd, -pk, -in, -blog, -payments GSC-তে সাবমিট করা ছিল না।
2. **CTR শূন্য** — /download (124 imp, pos 23), /login (79 imp, CTR 1.2%), affiliate ক্লাস্টার (~২০০ imp, ০ ক্লিক)। টাইটেল/মেটা ক্লিক আনছে না, আর পজিশন ২০+ হলে CTR প্রায় ০ হবেই।
3. **পজিশন গ্যাপ, র‍্যাঙ্কিং নয়** — বেশিরভাগ ইমপ্রেশন pos 20-35; এটা ইনডেক্সিং সমস্যা নয়, অথরিটি + ইন্টারনাল লিংক সমস্যা।
4. **ডিমান্ড মিসম্যাচ** — সবচেয়ে বড় কোয়েরি ক্লাস্টার: `jeetbuzz affiliate*` (~১৫০ imp), `jeet boost download/apk` (~৭০ imp), `jeet bhuj` (34 imp, pos 6.3)। "jeet boost" ভ্যারিয়েন্টের জন্য আমাদের কোনো ডেডিকেটেড কভারেজ নেই।

## ৩. এখনই করা হয়েছে
- sitemap-solutions / -bd / -pk / -in / -blog / -payments — ছয়টি child sitemap GSC API দিয়ে সাবমিট করা হলো (HTTP 204)।

## ৪. প্ল্যান
### P0 — ডিসকভারি (সপ্তাহ ১)
- ইনডেক্সড পেজ (হোম, /download, /login, /jeetbuzz-review) থেকে ৬টা misspelling ও ৬টা /network পেজে ইন-কনটেন্ট লিংক (শুধু ফুটার নয়)।
- lastmod রিফ্রেশ + GSC-তে ম্যানুয়াল "Request Indexing" প্রায়োরিটি লিস্ট: /jetbuzz, /jeet-buzz, /জিতবাজ, /network, /network/bajilive, /network/mcwcasino।
- ২ সপ্তাহ পরে URL Inspection দিয়ে ভেরিফাই।

### P1 — CTR (সপ্তাহ ১-২)
- /login, /download, /affiliate-login, /bonus-and-promotions — টাইটেলে exact query + বাংলা বেনিফিট ওয়ার্ড, ডেসক্রিপশনে ধাপ-সংখ্যা ও "২০২৬ আপডেট"।
- FAQ/HowTo রিচ রেজাল্ট ধরে রাখা; /download-এর ImageObject-এ creditText/copyrightNotice যোগ করলে ওয়ার্নিং যাবে।

### P2 — ডিমান্ড কভারেজ (সপ্তাহ ২-৪)
- Affiliate ক্লাস্টার কনসলিডেশন: `affiliate login password`, `affiliate commission rate`, `affiliate sign up`, `affiliate withdrawal` — /affiliate-program-এ সেকশন + ইন্টারনাল লিংক, কোনো নতুন থিন পেজ নয়।
- "jeet boost" ভ্যারিয়েন্ট (download/apk/bonus, ~৭০ imp): /download-এ একটি ব্র্যান্ড-ভ্যারিয়েন্ট সেকশন, আলাদা পেজ নয়।

### P3 — অথরিটি (চলমান)
- ৫টি owned network সাইট থেকে ইন-কনটেন্ট dofollow লিংক টার্গেট পেজে (হোম নয়)।
- সাপ্তাহিক বাংলা প্রবলেম-সলভিং পোস্ট, প্রতিটি হাব থেকে লিংকড।

## ৫. পরিমাপ
- ২ সপ্তাহ: unknown-to-Google পেজ ০ হওয়া।
- ৪ সপ্তাহ: /login + /download CTR > ২%।
- ৮ সপ্তাহ: গড় পজিশন ২৫ → ১৫, ক্লিক ৭ → ৫০+।
