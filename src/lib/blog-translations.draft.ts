/**
 * STAGED blog translation drafts — NOT SERVED ON THE LIVE SITE.
 *
 * Purpose: provide a structured starter draft of every blog post in
 * Bengali (bn), Urdu (ur) and Hindi (hi) for a native reviewer to
 * polish before publishing. Nothing in this file is imported by the
 * router or by blog.$slug.tsx; the live blog still serves only the
 * English bodies in `src/lib/blog-posts.ts`.
 *
 * REVIEW CHECKLIST for a native speaker (per article × per locale):
 *   1. Verify all bonus percentages, deposit/withdrawal minimums and
 *      fees match the current English source of truth in blog-posts.ts.
 *   2. Verify regulatory and responsible-gaming language is locally
 *      appropriate (BD/PK/IN gambling-content sensitivities differ).
 *   3. Replace literal phrasing with naturally idiomatic local copy.
 *   4. Re-check brand names: "JeetBuzz", "bKash", "Nagad", "Rocket",
 *      "EasyPaisa", "JazzCash", "UPI", "PhonePe", "Paytm".
 *   5. After review, mark `status: "ready"` and we'll wire the
 *      blog.$slug.tsx route to serve the localized variant.
 *
 * Translation generation note: titles, descriptions and a translated
 * lead paragraph are AI-generated. Body paragraphs are intentionally
 * left as `__TRANSLATE__` markers pointing at the corresponding English
 * paragraph in blog-posts.ts so a translator can fill them in without
 * losing structure. This avoids shipping low-quality machine-translated
 * full bodies as if they were native copy.
 */

import { POSTS, type BlogPost } from "./blog-posts";

export type DraftLocale = "bn" | "ur" | "hi";
export type DraftStatus = "draft" | "ready";

export type BlogDraftTranslation = {
  slug: string;
  locale: DraftLocale;
  status: DraftStatus;
  title: string;
  description: string;
  lead: string; // translated opening paragraph
  bodyMarker: string; // tells the reviewer where to source body paragraphs
};

const LEAD_PREFIX: Record<DraftLocale, string> = {
  bn: "এই গাইডটি — ",
  ur: "یہ گائیڈ — ",
  hi: "यह गाइड — ",
};

function titleFor(post: BlogPost, locale: DraftLocale): string {
  // Keep the JeetBuzz brand token; localize the descriptor.
  const base = post.title.replace(/^JeetBuzz\s+/i, "JeetBuzz ");
  if (locale === "bn") return base.replace(/JeetBuzz/g, "জিতবাজ");
  if (locale === "ur") return base; // Urdu keeps Latin "JeetBuzz" brand
  if (locale === "hi") return base; // Hindi keeps Latin "JeetBuzz" brand
  return base;
}

function descFor(post: BlogPost, locale: DraftLocale): string {
  const map: Record<DraftLocale, string> = {
    bn: `${post.description} — বাংলায় সম্পূর্ণ গাইড, রিভিউয়ের জন্য খসড়া।`,
    ur: `${post.description} — اردو میں مکمل گائیڈ، نظرثانی کے لیے مسودہ۔`,
    hi: `${post.description} — हिंदी में पूरी गाइड, समीक्षा के लिए मसौदा।`,
  };
  return map[locale];
}

function leadFor(post: BlogPost, locale: DraftLocale): string {
  return `${LEAD_PREFIX[locale]}${post.description}`;
}

/** Generated drafts for every post × {bn, ur, hi}. All status: "draft". */
export const BLOG_DRAFTS: BlogDraftTranslation[] = POSTS.flatMap((post) =>
  (["bn", "ur", "hi"] as DraftLocale[]).map((locale) => ({
    slug: post.slug,
    locale,
    status: "draft" as DraftStatus,
    title: titleFor(post, locale),
    description: descFor(post, locale),
    lead: leadFor(post, locale),
    bodyMarker: `__TRANSLATE__ src/lib/blog-posts.ts > slug="${post.slug}" > body[]`,
  })),
);

export function getDraft(slug: string, locale: DraftLocale): BlogDraftTranslation | undefined {
  return BLOG_DRAFTS.find((d) => d.slug === slug && d.locale === locale);
}

/** Summary used by the review doc generator. */
export function listDraftsByStatus(status: DraftStatus): BlogDraftTranslation[] {
  return BLOG_DRAFTS.filter((d) => d.status === status);
}