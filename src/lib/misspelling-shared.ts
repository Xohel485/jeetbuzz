// Shared building blocks for misspelling landing pages.
import type { FAQItem } from "@/components/FAQAccordion";

export const RELATED_ARTICLES_BLOCK = [
  "## সম্পর্কিত গাইড",
  "নিচের গাইডগুলো এই পেজের বিষয়ের সঙ্গে সরাসরি সম্পর্কিত এবং একই সম্পাদকীয় দল দ্বারা রক্ষণাবেক্ষিত।",
  "- [জেতাবাজ লগইন গাইড](/blog/jeetbuzz-login-guide) — লগইন সমস্যা, পাসওয়ার্ড রিসেট এবং ISP ব্লক এড়ানোর পদ্ধতি।",
  "- [উইথড্রয়াল টাইম গাইড](/blog/jeetbuzz-withdrawal-time-bangladesh) — কোন পেমেন্ট পদ্ধতিতে কত মিনিটে টাকা আসে তার প্রকৃত হিসাব।",
  "- [আজকের প্রমো কোড](/blog/jeetbuzz-promo-code-today) — সক্রিয় বোনাস কোড, শর্ত এবং ব্যবহারের নিয়ম।",
  "- [ডিপোজিট সমস্যার সমাধান](/blog/jeetbuzz-deposit-problem-fix) — টাকা কেটে নেওয়া কিন্তু জমা না হওয়া অবস্থায় করণীয়।",
  "- [অ্যাকাউন্ট লক সমস্যা](/blog/jeetbuzz-account-locked) — কেন লক হয় এবং কীভাবে দ্রুত পুনরুদ্ধার করবেন।",
  "- [রেফার কোড গাইড](/blog/jeetbuzz-refer-code-bangladesh) — বন্ধুদের রেফার করে বাড়তি আয়ের নিয়মাবলী।",
];

export const BYLINE_LINES = [
  "*লেখক: Nahid — GetJeetBuzz Editorial Team।*",
  "*সম্পাদকীয় পর্যালোচক: GetJeetBuzz Compliance Desk।*",
];

export type MisspellFaq = FAQItem;

/**
 * Contextual links back to the canonical long-form JeetBuzz pages.
 * Every misspelling page includes this block so link equity and topical
 * relevance flow from the variant landing pages to the authoritative
 * brand pages (homepage, review, safety, APK, login, signup).
 */
export const CANONICAL_HUB_BLOCK = [
  "## আসল JeetBuzz — মূল পেজগুলো",
  "এই পেজটি একটি ব্র্যান্ড-ভেরিয়েন্ট গাইড। বিস্তারিত রিভিউ, লাইসেন্স যাচাই, অফিসিয়াল অ্যাপ ডাউনলোড এবং সরাসরি লগইন/সাইনআপের জন্য নিচের মূল পেজগুলো দেখুন — সবগুলোই একই getjeetbuzz.com সম্পাদকীয় দলের রক্ষণাবেক্ষণে।",
  "- [JeetBuzz অফিসিয়াল হোমপেজ](/) — ব্র্যান্ডের প্রামাণিক প্রবেশদ্বার, সব ভাষা ও দেশ সাপোর্টেড।",
  "- [JeetBuzz রিভিউ ২০২৬](/jeetbuzz-review) — স্বাধীন ৪.৬/৫ রেটিং, ক্রিকেট অডস, বোনাস শর্ত ও পেমেন্ট বিশ্লেষণ।",
  "- [JeetBuzz কি নিরাপদ?](/is-jeetbuzz-safe) — Curaçao লাইসেন্স, KYC, SSL এবং দায়িত্বশীল গেমিং নীতিমালা।",
  "- [JeetBuzz APK ডাউনলোড](/jeetbuzz-apk-download) — অফিসিয়াল সাইনড APK, ইনস্টল গাইড ও নিরাপত্তা যাচাই।",
  "- [JeetBuzz লগইন](/login) — সরাসরি লগইন পেজ, ২FA ও ISP ব্লক সমাধান।",
  "- [JeetBuzz সাইনআপ](/signup) — নতুন অ্যাকাউন্ট খোলা এবং ওয়েলকাম বোনাস ক্লেইম।",
];

type Variant = { path: string; anchor: string; note: string };

const VARIANTS: readonly Variant[] = [
  { path: "/jetbuzz", anchor: "Jetbuzz", note: "এক ‘e’ কম — সবচেয়ে সাধারণ মোবাইল টাইপিং ভুল।" },
  { path: "/jeet-buzz", anchor: "Jeet Buzz", note: "স্পেস বা হাইফেন দিয়ে লেখা — ভয়েস-টু-টেক্সট ও পুরনো ডকুমেন্টে দেখা যায়।" },
  { path: "/jeetbuz", anchor: "Jeetbuz", note: "শেষে একটি ‘z’ বাদ — ফিশিং সাইট সবচেয়ে বেশি এই বানান নকল করে।" },
  { path: "/jest-buzz", anchor: "Jest Buzz", note: "Google Voice ট্রান্সক্রিপশনে ‘Jeet’ কে ‘Jest’ হিসেবে ভুল শোনা।" },
  { path: "/jitbuzz", anchor: "Jitbuzz", note: "বাংলা ‘জিত’ থেকে সরাসরি ট্রান্সলিটারেশন — ভারতীয় ও IPL সার্চে বেশি।" },
  { path: "/জিতবাজ", anchor: "জিতবাজ", note: "বাংলা লিপিতে সরাসরি ব্র্যান্ড নাম — কীবোর্ড ইউনিকোড সার্চ।" },
];

/**
 * Returns a "brand-name variants" prose block for a given misspelling page,
 * cross-linking to all sibling variant pages (self excluded). Passing the
 * variant slugs into an internal hub of six pages helps Google treat the
 * cluster as coordinated entity coverage rather than duplicate landing pages.
 */
export function siblingVariantsBlock(currentPath: string): string[] {
  const others = VARIANTS.filter((v) => v.path !== currentPath);
  return [
    "## অন্যান্য ব্র্যান্ড-ভেরিয়েন্ট পেজ",
    "JeetBuzz-এর জনপ্রিয় বানান ভুলগুলোর প্রতিটির জন্য আলাদা গাইড আছে। আপনি যদি বন্ধু বা পরিবারকে সঠিক ব্র্যান্ডে পাঠাতে চান, তাদের সার্চ-বানান অনুযায়ী নিচের পেজটি শেয়ার করুন — প্রতিটি একই কম্পাইলড তথ্য, ভিন্ন প্রবেশ-বিন্দু।",
    ...others.map((v) => `- [${v.anchor}](${v.path}) — ${v.note}`),
  ];
}

/** All six variant paths for reciprocal linking from canonical pages. */
export const VARIANT_PATHS: readonly string[] = VARIANTS.map((v) => v.path);

export const VARIANT_LINKS: ReadonlyArray<{ path: string; anchor: string; note: string }> = VARIANTS;
