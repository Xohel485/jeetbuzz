import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { Hero } from "./Hero";
import { HubLinksStrip } from "./HubLinksStrip";
import { AuthorByline } from "@/components/AuthorByline";
import { LazyOnVisible } from "@/components/LazyOnVisible";
import GuideCards from "./GuideCards";
import BlogSection from "./BlogSection";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";

/**
 * Single shared homepage layout used by ALL locales (en root and
 * /{country}/{lang}). Locale-specific copy is injected via `localExtras`
 * and renders directly after the Hero — never before it. This guarantees
 * an identical component tree (header → Hero → … → footer) for every
 * locale so Hero is always the first content section after the fixed
 * header and LCP is consistent.
 */
export function HomePage({ localExtras }: { localExtras?: ReactNode } = {}) {
  return (
    <PageShell>
      {/* Hero is the only home-page chunk in the initial bundle and must
          always be the first content section after the header. Never wrap
          in Suspense/LazyOnVisible. */}
      <Hero />

      {/* Editorial provenance: author, reviewer, last-updated, policy links.
          Rendered eagerly in initial HTML so Google sees the E-E-A-T signals
          without waiting for lazy chunks. */}
      <section className="container-pro mt-6">
        <AuthorByline />
      </section>

      {/* Batch 7: eager internal-link strip → hubs (Help/Payments/Bonuses/Games). */}
      <HubLinksStrip />

      {/* Locale-specific copy (payments / leagues / FAQ in native script).
          Rendered AFTER Hero so the section order never changes by locale. */}
      {localExtras}

      {/* T2: text + internal-link sections render eagerly so crawlers get the
          full content and link graph (including footer navigation) in the
          initial HTML response. */}
      <GuideCards />

      {/* Heavy visual sections stay split into separate JS chunks and are only
          fetched when their placeholder scrolls into (or near) the viewport. */}
      <LazyOnVisible load={() => import("./PopularGamesSection")} minHeight={520} />
      <LazyOnVisible load={() => import("./AmbassadorsSection")} minHeight={520} />
      <LazyOnVisible load={() => import("./SponsorsSection")} minHeight={620} />
      <LazyOnVisible load={() => import("./PaymentSection")} minHeight={1200} />
      <LazyOnVisible load={() => import("./ProvidersSection")} minHeight={520} />

      <BlogSection />
      <FAQSection />
      <FooterSection />
    </PageShell>
  );
}