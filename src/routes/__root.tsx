import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { organizationSchema, websiteSchema } from "../lib/schema";
import { I18nProvider } from "../lib/i18n";
import { AnalyticsRouterBridge } from "../components/AnalyticsRouterBridge";

// GTM container — routes events to GA4 (G-KD7NELS5DS) and Microsoft
// Clarity (xali2ra4zo). DO NOT also add gtag.js or the Clarity tag — both
// are configured inside GTM and adding direct scripts here causes
// duplicate hits in GA4 and double-session inflation in Clarity.
const GTM_ID = "GTM-N7ZXWM9M";
// Defer GTM injection until the browser is idle AND at least ~3s after
// first user interaction window — keeps GTM off the LCP / TBT critical path
// on slow mobile networks. No early load-event fallback.
const GTM_INLINE = `window.dataLayer=window.dataLayer||[];function __loadGTM(){if(window.__gtmLoaded)return;window.__gtmLoaded=true;window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=document.getElementsByTagName('script')[0],j=document.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';f.parentNode.insertBefore(j,f);}function __scheduleGTM(){if('requestIdleCallback' in window){requestIdleCallback(__loadGTM,{timeout:6000});}else{setTimeout(__loadGTM,3000);}}if(document.readyState==='complete'){setTimeout(__scheduleGTM,3000);}else{window.addEventListener('load',function(){setTimeout(__scheduleGTM,3000);},{once:true});}var __earlyUX=function(){__loadGTM();};['pointerdown','keydown','touchstart','scroll'].forEach(function(e){window.addEventListener(e,__earlyUX,{once:true,passive:true});});`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GetJeetBuzz — JeetBuzz Guide for BD, PK & IN" },
      { name: "description", content: "Partner guide to JeetBuzz for Bangladesh, Pakistan & India — login, signup, bonuses, app, bKash/Nagad payments and live cricket." },
      { name: "author", content: "GetJeetBuzz" },
      { property: "og:site_name", content: "GetJeetBuzz" },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index,follow" },
      { name: "theme-color", content: "#0c1a13" },
      { name: "msapplication-TileColor", content: "#1f9d3e" },
      { property: "og:title", content: "GetJeetBuzz — JeetBuzz Guide for BD, PK & IN" },
      { name: "twitter:title", content: "GetJeetBuzz — JeetBuzz Guide for BD, PK & IN" },
      { property: "og:description", content: "Partner guide to JeetBuzz for Bangladesh, Pakistan & India — login, signup, bonuses, app, bKash/Nagad payments and live cricket." },
      { name: "twitter:description", content: "Partner guide to JeetBuzz for Bangladesh, Pakistan & India — login, signup, bonuses, app, bKash/Nagad payments and live cricket." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fcdef741-2981-486b-8aba-2147fee76917" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fcdef741-2981-486b-8aba-2147fee76917" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
        fetchPriority: "high",
      },
      // Preload the stylesheet with high priority so the browser starts the
      // CSS request as early as possible in the HTML head parse (helps LCP
      // on slow networks where critical-path latency is the dominant cost).
      { rel: "preload", as: "style", href: appCss, fetchPriority: "high" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-64.png" },
      { rel: "icon", type: "image/png", sizes: "128x128", href: "/favicon-128.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      // Self-hosted Hind Siliguri (400/700) — declared via @font-face in styles.css.
      // Preload the Latin subsets so above-the-fold text never blocks on a network roundtrip.
      { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/hs-400-latin.woff2", crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/hs-700-latin.woff2", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://www.googletagmanager.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
    ],
    scripts: [
      { children: GTM_INLINE },
      { type: "application/ld+json", children: JSON.stringify(organizationSchema()) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema()) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const onContext = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("img, picture, svg, video, [data-no-save]")) {
        e.preventDefault();
      }
    };
    const onDragStart = (e: DragEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest("img, picture, svg, video, [data-no-save]")) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <AnalyticsRouterBridge />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
