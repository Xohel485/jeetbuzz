/**
 * Analytics helper — pushes events to window.dataLayer for GTM.
 * GTM (GTM-N7ZXWM9M) routes events to GA4 (G-KD7NELS5DS) and Microsoft
 * Clarity (xali2ra4zo). No direct gtag.js or Clarity script is loaded
 * from this app — everything flows through GTM to avoid duplication.
 *
 * Every event automatically carries:
 *   - locale: en | bn | ur | hi (from <html lang> or default 'en')
 *   - country: bd | pk | in | global (derived from current URL)
 *   - page_path, page_location
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsCountry = "bd" | "pk" | "in" | "global";
export type AnalyticsLocale = "en" | "bn" | "ur" | "hi";

export type TrackEvent =
  | "page_view"
  | "login_click"
  | "signup_click"
  | "affiliate_click"
  | "apk_download_click"
  | "payment_method_click"
  | "language_change"
  | "outbound_link_click"
  | "scroll_depth"
  | "blog_read"
  | "faq_expand";

function readCountryFromPath(pathname: string): AnalyticsCountry {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "bd" || seg === "pk" || seg === "in") return seg;
  return "global";
}

function readLocaleFromDom(): AnalyticsLocale {
  if (typeof document === "undefined") return "en";
  const html = document.documentElement.lang || "en";
  const base = html.split("-")[0];
  if (base === "bn" || base === "ur" || base === "hi") return base;
  return "en";
}

export function track(event: TrackEvent, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const pathname = window.location?.pathname ?? "/";
  window.dataLayer.push({
    event,
    locale: readLocaleFromDom(),
    country: readCountryFromPath(pathname),
    page_path: pathname,
    page_location: window.location?.href,
    ...payload,
  });
}

/** Push a page_view (call on route change). */
export function trackPageView(extra?: Record<string, unknown>): void {
  track("page_view", extra);
}

/** Derive analytics country from a TanStack route pathname (SSR-safe). */
export function countryFromPath(pathname: string | undefined | null): AnalyticsCountry {
  if (!pathname) return "global";
  return readCountryFromPath(pathname);
}