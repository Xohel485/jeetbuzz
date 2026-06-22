import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { trackPageView, track } from "@/lib/analytics";

/**
 * Subscribes to TanStack Router navigation and fires GTM events:
 *  - page_view on every committed navigation
 *  - scroll_depth at 25/50/75/100% (per page, throttled)
 */
export function AnalyticsRouterBridge() {
  const router = useRouter();

  // page_view on initial mount + every subsequent navigation
  useEffect(() => {
    trackPageView();
    const unsub = router.subscribe("onResolved", () => {
      trackPageView();
      // reset scroll-depth markers for new page
      seenDepth.clear();
    });
    return () => unsub();
  }, [router]);

  // global scroll depth
  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight;
        const pct = Math.min(100, Math.round(scrolled * 100));
        for (const m of [25, 50, 75, 100]) {
          if (pct >= m && !seenDepth.has(m)) {
            seenDepth.add(m);
            track("scroll_depth", { percent: m });
          }
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

const seenDepth = new Set<number>();