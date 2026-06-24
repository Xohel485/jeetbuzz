// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Inlines per-route git commit timestamps into a virtual module so sitemap
 * `lastmod` values reflect actual page changes (not build time) and remain
 * stable on Cloudflare Workers / Vercel edge where git is unavailable at runtime.
 */
function sitemapLastmodPlugin() {
  const VIRTUAL = "virtual:sitemap-lastmod";
  const RESOLVED = "\0" + VIRTUAL;
  return {
    name: "sitemap-lastmod",
    resolveId(id: string) {
      if (id === VIRTUAL) return RESOLVED;
      return null;
    },
    load(id: string) {
      if (id !== RESOLVED) return null;
      const root = process.cwd();
      const fallback = new Date().toISOString();
      const gitDate = (rel: string): string => {
        const abs = resolve(root, rel);
        if (!existsSync(abs)) return fallback;
        try {
          const out = execSync(`git log -1 --format=%cI -- ${JSON.stringify(rel)}`, {
            cwd: root,
            encoding: "utf8",
            stdio: ["ignore", "pipe", "ignore"],
          }).trim();
          return out || fallback;
        } catch {
          return fallback;
        }
      };
      const maxDate = (...dates: string[]): string =>
        dates.reduce((a, b) => (a > b ? a : b), "");

      const routesDir = "src/routes";
      const map: Record<string, string> = {};
      let files: string[] = [];
      try {
        files = readdirSync(resolve(root, routesDir));
      } catch {
        files = [];
      }
      for (const f of files) {
        if (!/\.(tsx?|jsx?)$/.test(f)) continue;
        if (f === "__root.tsx") continue;
        if (f.startsWith("sitemap")) continue;
        if (f.startsWith("go.")) continue;
        if (f.includes("$")) continue; // dynamic, handled separately
        const base = f.replace(/\.(tsx?|jsx?)$/, "");
        let route: string;
        if (base === "index") route = "/";
        else if (base.endsWith(".index"))
          route = "/" + base.slice(0, -".index".length).split(".").join("/");
        else route = "/" + base.split(".").join("/");
        map[route] = gitDate(`${routesDir}/${f}`);
      }

      // Localized routes share the same source files.
      const localized = maxDate(
        gitDate(`${routesDir}/$country.$lang.index.tsx`),
        gitDate(`${routesDir}/$country.$lang.$.tsx`),
        gitDate("src/lib/localized-routes.ts"),
        gitDate("src/lib/localized-intros.ts"),
      );

      // Blog landing pulls from layout + index files.
      const blogIndex = maxDate(
        gitDate(`${routesDir}/blog.tsx`),
        gitDate(`${routesDir}/blog.index.tsx`),
        gitDate("src/lib/blog-posts.ts"),
      );
      if (blogIndex) map["/blog"] = blogIndex;

      return `export const LASTMOD_MAP = ${JSON.stringify(map)};
export const LOCALIZED_LASTMOD = ${JSON.stringify(localized)};
export const BLOG_INDEX_LASTMOD = ${JSON.stringify(blogIndex)};
export const BUILD_FALLBACK = ${JSON.stringify(fallback)};
export function lastmodFor(p) { return LASTMOD_MAP[p] || BUILD_FALLBACK; }
`;
    },
  };
}

export default defineConfig({
  // On Lovable sandbox builds the preset is force-pinned to cloudflare and
  // this override is ignored. On Vercel/self-hosted CI it pins the Nitro
  // preset to `vercel`, producing a `.vercel/output` Build Output API folder.
  nitro: { preset: "vercel" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [sitemapLastmodPlugin()],
  },
});
