import { SITE_NAME } from "./affiliate";
import { BRAND } from "./entity-map";

export const SITE_ORIGIN = "https://getjeetbuzz.com";

function url(path: string) {
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: [...BRAND.alternateNames],
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/img/jeetbuzz-affiliate-program-224.webp`,
  sameAs: [
    "https://facebook.com/GetJeetBuzz",
    "https://youtube.com/@jeetbuzz",
    "https://youtube.com/@getjeetbuzz",
    "https://instagram.com/getjeetbuzz",
    "https://tiktok.com/@getjeetbuzz",
    "https://x.com/GetJeetBuzz",
    "https://t.me/GetJeetBuzz",
  ] as string[],
  description:
    "GetJeetBuzz is the JeetBuzz partner guide for Bangladesh, Pakistan and India — login, registration, bonuses, app, payments and live cricket.",
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: [...BRAND.alternateNames],
  url: SITE_ORIGIN,
  inLanguage: ["bn-BD", "en", "hi", "ur"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_ORIGIN}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: url(it.path),
  })),
});

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (a: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.headline,
  description: a.description,
  mainEntityOfPage: url(a.path),
  image: a.image,
  datePublished: a.datePublished ?? "2026-06-01",
  dateModified: a.dateModified ?? "2026-06-20",
  author: { "@type": "Organization", name: a.author ?? SITE_NAME },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/img/jeetbuzz-affiliate-program-224.webp` },
  },
});

export const blogPostingSchema = (p: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  author?: string;
  image?: string;
}) =>
  articleSchema({
    headline: p.headline,
    description: p.description,
    path: `/blog/${p.slug}`,
    image: p.image,
    datePublished: p.datePublished,
    dateModified: p.datePublished,
    author: p.author,
  });

export const softwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JeetBuzz Android App",
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BDT" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", ratingCount: "12450" },
});

export const reviewSchema = (rating: number) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "Organization", name: "JeetBuzz" },
  reviewRating: { "@type": "Rating", ratingValue: String(rating), bestRating: "5" },
  author: { "@type": "Organization", name: SITE_NAME },
});

export function jsonLdScript(obj: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(obj) } as const;
}

export function canonicalLink(path: string) {
  return { rel: "canonical", href: url(path) } as const;
}

/**
 * Standard hreflang cluster for a given slug (slug = "" → homepage).
 * Always emits x-default, en, bn-BD, ur-PK, hi-IN pointing to the
 * locale-equivalent URL on getjeetbuzz.com.
 */
export function hreflangLinks(slug = "") {
  const s = slug.replace(/^\//, "");
  const tail = s ? `/${s}` : "";
  const en = `${SITE_ORIGIN}${tail || "/"}`;
  return [
    { rel: "alternate", hrefLang: "x-default", href: en },
    { rel: "alternate", hrefLang: "en", href: en },
    { rel: "alternate", hrefLang: "bn-BD", href: `${SITE_ORIGIN}/bd/bn${tail}` },
    { rel: "alternate", hrefLang: "ur-PK", href: `${SITE_ORIGIN}/pk/ur${tail}` },
    { rel: "alternate", hrefLang: "hi-IN", href: `${SITE_ORIGIN}/in/hi${tail}` },
  ] as const;
}

export function ogUrl(path: string) {
  return { property: "og:url", content: url(path) } as const;
}