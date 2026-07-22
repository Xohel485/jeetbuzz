import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MarkdownLite } from "@/components/MarkdownLite";
import { getPost, POSTS } from "@/lib/blog-posts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema, canonicalLink, hreflangLinks, ogUrl, SITE_ORIGIN } from "@/lib/schema";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { AuthorByline } from "@/components/AuthorByline";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} | GetJeetBuzz` : "Article | GetJeetBuzz";
    const desc = post?.description ?? "JeetBuzz partner guide article.";
    const path = `/blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: post?.title ?? title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ogUrl(path),
      ],
      links: [canonicalLink(path), ...hreflangLinks(path)],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(
                blogPostingSchema({
                  headline: post.title,
                  description: post.description,
                  slug: post.slug,
                  datePublished: post.date,
                }),
              ),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify(
                breadcrumbSchema([
                  { name: "Home", path: "/" },
                  { name: "Blog", path: "/blog" },
                  { name: post.title, path: `/blog/${post.slug}` },
                ]),
              ),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <PageHero title="Article not found" subtitle="The article you're looking for doesn't exist." />
      <section className="container-pro">
        <Link to="/blog" className="text-primary underline">← Back to blog</Link>
      </section>
    </PageShell>
  ),
  errorComponent: ({ reset }) => (
    <PageShell>
      <PageHero title="Something went wrong" subtitle="Please try again." />
      <section className="container-pro">
        <button onClick={reset} className="text-primary underline">Retry</button>
      </section>
    </PageShell>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  useEffect(() => {
    track("blog_read", { slug: post.slug, title: post.title, category: post.category });
  }, [post.slug, post.title, post.category]);
  const related = POSTS.filter(
    (p) => p.slug !== post.slug && (!post.category || p.category === post.category),
  )
    .slice(0, 3)
    .concat(
      POSTS.filter((p) => p.slug !== post.slug).slice(0, 3),
    )
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .slice(0, 3);
  return (
    <PageShell>
      <PageHero
        eyebrow={`${post.date} · ${post.readTime} read`}
        title={post.title}
        subtitle={post.description}
      >
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="size-4" /> All articles
        </Link>
      </PageHero>

      <section className="container-pro">
        <article className="mx-auto max-w-3xl">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { name: "Blog", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
          </div>
          <AffiliateDisclosure variant="inline" />
          <div className="mt-3">
            <AuthorByline lastVerified={post.date} />
          </div>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3" /> Last updated {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" /> {post.readTime}
            </span>
            {post.category && (
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                {post.category}
              </span>
            )}
          </div>
          <div className="mt-6">
            <MarkdownLite lines={post.body} />
          </div>
          <div className="mt-10">
            <AffiliateCTA size="lg" variant="hero" />
          </div>
          <div className="mt-10 glass p-5">
            <h3 className="text-sm font-semibold text-foreground">About the editor</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Written and verified by the{" "}
              <Link to="/author" className="text-primary hover:underline">
                GetJeetBuzz Editorial Team
              </Link>{" "}
             , a small group of Bangladeshi bettors who test JeetBuzz from
              Dhaka with real accounts and real bKash deposits. Read our{" "}
              <Link to="/editorial-policy" className="text-primary hover:underline">editorial policy</Link>{" "}
              and{" "}
              <Link to="/fact-checking" className="text-primary hover:underline">fact-checking process</Link>.
            </p>
          </div>
        </article>
      </section>

      <section className="container-pro mt-16">
        <h2 className="text-xl font-semibold">Related articles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="glass block p-4 hover:border-primary/40"
            >
              <h3 className="text-sm font-semibold">{p.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{p.description}</p>
            </Link>
          ))}
        </div>
        <p className="sr-only">Canonical URL: {SITE_ORIGIN}/blog/{post.slug}</p>
      </section>
    </PageShell>
  );
}