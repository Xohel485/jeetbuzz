import { GuidePage } from "@/components/GuidePage";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  jsonLdScript,
  canonicalLink,
  hreflangLinks,
  ogUrl,
} from "@/lib/schema";
import { imageAbsoluteUrl, type ImageKey } from "@/lib/images";
import {
  buildBody,
  compareEntryBySlug,
  type CompetitorSlug,
} from "@/lib/compare-pages";

/**
 * Shared head + component factory for the JeetBuzz competitor comparison
 * pages. Each /jeetbuzz-*-vs-getjeetbuzz route is a thin wrapper that
 * passes its slug; this keeps editorial data centralised in
 * `compare-pages.ts` and guarantees consistent schema/canonical/hreflang.
 */
export function buildCompareHead(slug: CompetitorSlug) {
  const entry = compareEntryBySlug(slug);
  const image = imageAbsoluteUrl(entry.hero as ImageKey);
  return () => ({
    meta: [
      { title: entry.metaTitle },
      { name: "description", content: entry.metaDescription },
      { property: "og:title", content: entry.title },
      { property: "og:description", content: entry.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:image", content: image },
      ogUrl(entry.routePath),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
    links: [canonicalLink(entry.routePath), ...hreflangLinks(entry.routePath)],
    scripts: [
      jsonLdScript(organizationSchema()),
      jsonLdScript(
        articleSchema({
          headline: entry.title,
          description: entry.metaDescription,
          path: entry.routePath,
          image,
        }),
      ),
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: entry.title, path: entry.routePath },
        ]),
      ),
      jsonLdScript(faqSchema(entry.faqs)),
    ],
  });
}

export function CompareComponent({ slug }: { slug: CompetitorSlug }) {
  const entry = compareEntryBySlug(slug);
  return (
    <GuidePage
      title={
        <>
          {entry.display} <span className="gold-text">vs</span> GetJeetBuzz
        </>
      }
      subtitle={entry.intro}
      ctaIntent="signup"
      ctaLabel="Sign up at JeetBuzz"
      heroImage={entry.hero as ImageKey}
      breadcrumbs={[{ name: entry.title, path: entry.routePath }]}
      articleHeadline={entry.title}
      articleDescription={entry.metaDescription}
      articlePath={entry.routePath}
      body={buildBody(entry)}
      faqs={entry.faqs}
      related={[
        { to: "/jeetbuzz-review", title: "JeetBuzz Review", desc: "Full editorial verdict." },
        { to: "/login", title: "JeetBuzz Login", desc: "Secure sign-in walkthrough." },
        { to: "/signup", title: "JeetBuzz Signup", desc: "Open an account in minutes." },
        { to: "/download", title: "JeetBuzz Download", desc: "Official Android & iOS install." },
        { to: "/bonus-and-promotions", title: "Bonus Guide", desc: "Current welcome offers." },
        { to: "/responsible-gaming", title: "Responsible Gaming", desc: "Limits and self-exclusion." },
      ]}
    />
  );
}