declare module "virtual:sitemap-lastmod" {
  export const LASTMOD_MAP: Record<string, string>;
  export const LOCALIZED_LASTMOD: string;
  export const BLOG_INDEX_LASTMOD: string;
  export const BUILD_FALLBACK: string;
  export function lastmodFor(p: string): string;
}