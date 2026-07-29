# On-Page + Technical SEO হাইব্রিড প্ল্যান (২৯ জুলাই ২০২৬)

ভিত্তি: GSC (`sc-domain:getjeetbuzz.com`, ৩০ দিন) + চার প্রতিযোগীর **লাইভ HTML** পার্স (jeetbuzz.io, jeetbuzzbd.com, jetbuzz.bet, jeetbuzz.org) + আমাদের প্রোডাকশন HTML পার্স।

## ১. পরিমাপকৃত তুলনা (সার্ভার-রেন্ডার্ড HTML, হোমপেজ)

| সিগন্যাল | jeetbuzz.org | jeetbuzz.io | jeetbuzzbd.com | jetbuzz.bet | **আমরা** |
|---|---|---|---|---|---|
| SSR শব্দসংখ্যা | **5,383** | 437 | 583 | 403 (bot-block) | **816** |
| H2 সংখ্যা | **24** | 2 | 2 | — | **1** |
| ইন্টারনাল/আউটবাউন্ড লিংক | **234** | 69 | 68 | — | **81** |
| Title দৈর্ঘ্য | 59 | 66 | 64 | — | **78** (কাটা যায়) |
| Schema | FAQPage, BreadcrumbList, Article, Person | Article, Org, Person | Article, Org, Person | — | FAQPage, Article, Org, WebSite (BreadcrumbList নেই হোমে) |
| hreflang | bn, bn-BD, en | নেই | en, en-BD | — | bn-BD, ur-PK, hi-IN, en, x-default |
| bot access | 200 | 200 | 200 | **403 curl** | 200 |

যা এই ডেটা বলে: hreflang ও schema-তে আমরা এগিয়ে, কিন্তু **ক্রলার যে HTML পায় তাতে কনটেন্ট ও ইন্টারনাল লিংক অনেক কম**। jeetbuzz.org একই কোয়েরিতে ৬ গুণ বেশি টেক্সট ও ৩ গুণ বেশি লিংক প্রথম রেসপন্সেই দিচ্ছে।

## ২. ব্লকিং টেকনিক্যাল ত্রুটি (P0)

### T1. `bodyByLocale` SSR-এ রেন্ডার হচ্ছে না — মিসস্পেলিং/বাংলা পেজ কার্যত থিন
`/jetbuzz` প্রোডাকশন HTML: **523 শব্দ, ০টি H2/H3**, "সম্পর্কিত গাইড" ব্লক অনুপস্থিত। কারণ SSR-এ locale `en`-এ রিজলভ হয়, তাই `body` (এক লাইনের ইংরেজি স্টাব) রেন্ডার হয় এবং ২,৫০০ শব্দের বাংলা বডি কেবল হাইড্রেশনের পরে ক্লায়েন্টে আসে। লোকাল ডেভ সার্ভারেও একই (523 শব্দ) — অর্থাৎ কোড-লেভেল বাগ, ডিপ্লয় ল্যাগ নয়।
**প্রভাব:** ৬টি মিসস্পেলিং পেজ + `bodyByLocale`/`faqsByLocale` ব্যবহারকারী প্রতিটি রুট Google-এর চোখে থিন। GSC-তে এগুলোর "unknown to Google" ও শূন্য র‍্যাঙ্কিংয়ের সরাসরি কারণ এটি।
**ফিক্স:** রুট পাথ থেকে SSR-এ locale রিজলভ করা (`/জিতবাজ`, `/bd/bn/*` → `bn`), অথবা বাংলা-প্রথম পেজগুলোতে `body`-কেই বাংলা বডি বানিয়ে `bodyByLocale.en` কে ইংরেজি ভ্যারিয়েন্ট করা। যাচাই: SSR HTML-এ H2 > 10 এবং শব্দ > 2000।

### T2. হোমপেজের ৯টি সেকশন (ফুটারসহ) `LazyOnVisible`-এর পেছনে
`HomePage.tsx`-এ GuideCards, PopularGames, Ambassadors, Sponsors, Payments, Providers, Blog, FAQ, **Footer** সবই IntersectionObserver-গেটেড। ফলে ফুটারের হাব লিংক ও পার্টনার dofollow লিংক প্রথম HTML-এ নেই — SSR লিংক সংখ্যা ৮১ বনাম প্রতিযোগীর ২৩৪।
**ফিক্স:** FAQSection ও FooterSection (এবং BlogSection) কে eager রেন্ডারে ফেরানো; ভারী ভিজ্যুয়াল সেকশন (Ambassadors, Sponsors, Providers) lazy রাখা। LCP ইমেজ আগে থেকেই preload করা আছে, তাই টেক্সট সেকশন eager করলে LCP-তে প্রভাব নগণ্য।

### T3. `robots.txt`-এ `Disallow: /api/` + Sitemap হোস্ট
`/api/public/*` ভবিষ্যতে দরকার হলে ব্লক থাকবে; আর sitemap ডিরেক্টিভ `getjeetbuzz.com` — GSC প্রপার্টি domain-level হওয়ায় এটি ঠিক আছে, কিন্তু canonical হোস্টের সঙ্গে একশ শতাংশ মিল রাখতে হবে (কোনো পেজে `jeetbuzz.lovable.app` canonical থাকলে সেটি ঠিক করতে হবে)।

### T4. পেজ-লেভেল hreflang অসম্পূর্ণ
হোমপেজে ৫টি hreflang আছে, কিন্তু `/jetbuzz`-এ **০টি** — যদিও `/bd/bn/jetbuzz` ভ্যারিয়েন্ট বিদ্যমান। প্রতিটি লোকালাইজড জোড়ায় reciprocal `alternate` + `x-default` দিতে হবে।

## ৩. On-Page ত্রুটি (P1)

| # | সমস্যা | প্রমাণ | ফিক্স |
|---|---|---|---|
| O1 | **হোমপেজ H1-এ Latin ব্র্যান্ড টোকেন নেই** — H1: "জিতবাজে অ্যাকাউন্ট খুলুন…"। `jeetbuzz` (2.24M/mo), `jeetbuz` (246k), `jeetbaz` (165k) সব Latin কোয়েরি | আমাদের HTML | H1-এ "JeetBuzz (জিতবাজ)" দুই লিপিই রাখা — প্রতিযোগীদের H1-এ ব্র্যান্ড Latin-এ আছে |
| O2 | **Title ৭৪-৮৮ অক্ষর** — `/login` 78, `/download` 82, `/jeetbuzz-review` 88, `/jetbuzz` 84 | curl পার্স | সব ৫৫-৬০ অক্ষরে নামানো, ফ্রন্ট-লোডেড exact query (`JeetBuzz Login`, `জিতবাজ লগইন`) |
| O3 | **হোমপেজে মাত্র ১টি H2** | vs jeetbuzz.org-এর ২৪ | T2 ফিক্সের পর স্বাভাবিকভাবে ঠিক হবে; পাশাপাশি বাংলা ইন্ট্রোকে ৪-৫টি H2 সাব-সেকশনে ভাগ করা |
| O4 | **হোমপেজে BreadcrumbList নেই** | schema পার্স | হোম বাদে সব পেজে আছে; হোমে WebPage + BreadcrumbList যোগ |
| O5 | **হাব পেজ পাতলা** — `/payments` 910 শব্দ, `/affiliate-program` 1,089, `/jeetbuzz-review` 1,034 | curl পার্স | প্রতিটি ১,৮০০+ শব্দে তোলা; affiliate-এ GSC ক্লাস্টার (commission rate, login password, affiliate app, withdrawal) সেকশন |
| O6 | **"Jeet Boost" কভারেজ শূন্য** | GSC: download 45 imp, apk 11, app download apk 12, bonus 7 | `/download`-এ ব্র্যান্ড-ভ্যারিয়েন্ট H2 + FAQ, নতুন পেজ নয় |
| O7 | **০% CTR** সব কোয়েরিতে | GSC ৩০ দিন | মেটা ডেসক্রিপশনে ধাপ-সংখ্যা, সময় ("২ মিনিটে"), "২০২৬ আপডেট"; FAQ rich result ধরে রাখা |

## ৪. হাইব্রিড রোডম্যাপ

### সপ্তাহ ১ — টেকনিক্যাল আনব্লক (কোনো নতুন কনটেন্ট নয়)
1. T1: SSR locale রিজলিউশন ফিক্স → ৬টি মিসস্পেলিং + সব `bodyByLocale` রুট যাচাই (SSR শব্দ > 2000)।
2. T2: FAQ + Footer + Blog সেকশন eager; Lighthouse-এ LCP/CLS রিগ্রেশন যাচাই।
3. T4: প্রতি রুটে reciprocal hreflang + `x-default`।
4. সব সাইটম্যাপ URL-এ ২০০ স্ট্যাটাস ও self-canonical অটো-চেক স্ক্রিপ্ট।

### সপ্তাহ ২ — On-Page দখল
5. O1 (H1 দ্বিলিপি), O2 (title ট্রিম, ২০+ পেজ), O4 (হোম breadcrumb)।
6. O6: `/download`-এ Jeet Boost সেকশন; O7: টপ ১০ পেজের মেটা রিরাইট।

### সপ্তাহ ৩-৪ — গভীরতা ও ইন্টারনাল লিংক
7. O5: `/payments`, `/affiliate-program`, `/jeetbuzz-review`, `/bonus-and-promotions` ১,৮০০+ শব্দে।
8. হোম ও হাব থেকে `/login`, `/download`, মিসস্পেলিং পেজে ইন-কনটেন্ট (ফুটার নয়) অ্যাঙ্কর লিংক — লক্ষ্য SSR লিংক ৮১ → ১৫০+।
9. `/login` ও `/bd/bn/login` কে প্রধান ট্রানজেকশনাল অ্যাসেট হিসেবে দাঁড় করানো (jeetbuzz.org-এর `/login/`, `/bn/login-bd/` মডেল)।

### চলমান
10. মাসে ৫-১০ বৈধ রেফারিং ডোমেইন; owned network সাইট থেকে ইন-কনটেন্ট dofollow → `/login`, `/download`, `/affiliate-program`।
11. স্প্যাম (Fiverr/PBN) রেফারিং ডোমেইন disavow।

## ৫. যাচাই-গেট
| গেট | এখন | টার্গেট |
|---|---|---|
| `/jetbuzz` SSR শব্দ / H2 | 523 / 0 | 2,000+ / 12+ |
| হোমপেজ SSR শব্দ / লিংক | 816 / 81 | 2,500+ / 150+ |
| ৬০ অক্ষরের বেশি title | 20+ পেজ | 0 |
| hreflang ছাড়া লোকালাইজড রুট | অনেক | 0 |
| GSC ক্লিক / মাস | 0 | ৩০ দিনে 25+, ৯০ দিনে 150+ |