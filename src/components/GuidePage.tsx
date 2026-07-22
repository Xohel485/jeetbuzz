import type { ReactNode } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MarkdownLite } from "@/components/MarkdownLite";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { AuthorByline } from "@/components/AuthorByline";
import { SmartImage } from "@/components/SmartImage";
import type { ImageKey } from "@/lib/images";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { RelatedGuides, type RelatedItem } from "@/components/RelatedGuides";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { imageAbsoluteUrl } from "@/lib/images";
import { useI18n, type Locale } from "@/lib/i18n";

export function GuidePage({
  eyebrow,
  title,
  titleByLocale,
  subtitle,
  subtitleByLocale,
  body,
  bodyByLocale,
  ctaIntent = "signup",
  ctaLabel,
  ctaLabelByLocale,
  showDisclosure = true,
  extra,
  heroImage,
  inlineImage,
  breadcrumbs,
  faqs,
  faqsByLocale,
  related,
  articlePath,
  articleDescription,
  articleHeadline,
}: {
  eyebrow?: string;
  title: ReactNode;
  titleByLocale?: Partial<Record<Locale, ReactNode>>;
  subtitle?: ReactNode;
  subtitleByLocale?: Partial<Record<Locale, ReactNode>>;
  body: string[];
  bodyByLocale?: Partial<Record<Locale, string[]>>;
  ctaIntent?: "signup" | "login" | "partners";
  ctaLabel?: string;
  ctaLabelByLocale?: Partial<Record<Locale, string>>;
  showDisclosure?: boolean;
  extra?: ReactNode;
  /** Hero/feature image rendered above the article body. Set priority for LCP. */
  heroImage?: ImageKey;
  /** Secondary image rendered inside the article. */
  inlineImage?: ImageKey;
  breadcrumbs?: Crumb[];
  faqs?: FAQItem[];
  faqsByLocale?: Partial<Record<Locale, FAQItem[]>>;
  related?: RelatedItem[];
  articlePath?: string;
  articleHeadline?: string;
  articleDescription?: string;
}) {
  const { locale } = useI18n();
  const localBody = bodyByLocale?.[locale] ?? body;
  const localTitle = titleByLocale?.[locale] ?? title;
  const localSubtitle = subtitleByLocale?.[locale] ?? subtitle;
  const localCtaLabel = ctaLabelByLocale?.[locale] ?? ctaLabel;
  const localFaqs = faqsByLocale?.[locale] ?? faqs;
  const wordCount = localBody.join(" ").split(/\s+/).length;
  const minutes = Math.max(2, Math.round(wordCount / 200));
  return (
    <PageShell>
      <PageHero
        eyebrow={eyebrow ?? `Guide · Updated ${LAST_VERIFIED}`}
        title={localTitle}
        subtitle={localSubtitle}
      >
        <AffiliateCTA size="lg" variant="hero" intent={ctaIntent} label={localCtaLabel} />
      </PageHero>
      <section className="container-pro">
        <div className="mx-auto max-w-3xl">
          {breadcrumbs && (
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          )}
          {heroImage && (
            <SmartImage
              imgKey={heroImage}
              priority
              caption
              schema
              sizes="(min-width: 1024px) 768px, 100vw"
              className="glass mb-8 rounded-xl"
            />
          )}
          {showDisclosure && <AffiliateDisclosure variant="inline" />}
          <div className="mt-3 space-y-1">
            <AuthorByline lastVerified={LAST_VERIFIED} />
            <p className="text-xs text-muted-foreground">
              Reading time {minutes} min
            </p>
          </div>
          <div className="mt-6">
            <MarkdownLite lines={localBody} />
          </div>
          {inlineImage && (
            <SmartImage
              imgKey={inlineImage}
              caption
              schema
              sizes="(min-width: 1024px) 768px, 100vw"
              className="glass mt-8 rounded-xl"
            />
          )}
          {extra && <div className="mt-8">{extra}</div>}
          <div className="mt-10">
            <AffiliateCTA size="lg" variant="hero" intent={ctaIntent} label={localCtaLabel} />
          </div>
          {localFaqs && <FAQAccordion faqs={localFaqs} />}
          {related && <RelatedGuides items={related} />}
          {localFaqs && localFaqs.length > 0 && (
            <JsonLd data={faqSchema(localFaqs.map((f) => ({ q: f.q, a: f.a })))} />
          )}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <JsonLd
              data={breadcrumbSchema(
                breadcrumbs.map((b) => ({ name: b.name, path: b.path })),
              )}
            />
          )}
          {articlePath && articleHeadline && articleDescription && (
            <JsonLd
              data={articleSchema({
                headline: articleHeadline,
                description: articleDescription,
                path: articlePath,
                image: heroImage ? imageAbsoluteUrl(heroImage) : undefined,
              })}
            />
          )}
        </div>
      </section>
    </PageShell>
  );
}