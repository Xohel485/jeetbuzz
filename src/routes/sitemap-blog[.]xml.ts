import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/lib/blog-posts";
import { BLOG_INDEX_LASTMOD, renderUrlset, type SitemapEntry } from "@/lib/sitemap-helpers";

export const Route = createFileRoute("/sitemap-blog.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          {
            path: "/blog",
            lastmod: BLOG_INDEX_LASTMOD,
            changefreq: "weekly",
            priority: "0.8",
          },
          ...POSTS.map<SitemapEntry>((p) => ({
            path: `/blog/${p.slug}`,
            lastmod: p.date,
            changefreq: "monthly",
            priority: "0.7",
          })),
        ];
        return renderUrlset(entries);
      },
    },
  },
});