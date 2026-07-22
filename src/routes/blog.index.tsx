import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { POSTS } from "@/lib/blog-posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, SITE_ORIGIN } from "@/lib/schema";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Blog. Guides & Tips for Bangladesh | GetJeetBuzz" },
      { name: "description", content: "Latest JeetBuzz guides for Bangladesh, registration, login, bonuses, payments, live cricket and more." },
      { property: "og:title", content: "JeetBuzz Blog. Guides & Tips for Bangladesh" },
      { property: "og:description", content: "Latest JeetBuzz guides for Bangladesh." },
      { property: "og:type", content: "website" },
      ogUrl("/blog"),
    ],
    links: [canonicalLink("/blog"), ...hreflangLinks("/blog")],
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "JeetBuzz Blog",
        url: `${SITE_ORIGIN}/blog`,
        about: "JeetBuzz guides for Bangladesh, Pakistan and India",
        hasPart: POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          datePublished: p.date,
          url: `${SITE_ORIGIN}/blog/${p.slug}`,
        })),
      }),
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title={<>JeetBuzz <span className="gold-text">Guides & Tips</span></>}
        subtitle="Practical, dated, Bengali-first articles on everything JeetBuzz, written by Bangladeshi bettors."
      />
      <section className="container-pro">
        <div className="grid gap-4 md:grid-cols-2">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="glass group block p-5 transition hover:border-primary/40"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3" /> {p.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3" /> {p.readTime}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Read article <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}