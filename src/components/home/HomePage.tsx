import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { Hero } from "./Hero";
import { HubLinksStrip } from "./HubLinksStrip";
import { EEATStrip } from "./EEATStrip";
import { LazyOnVisible } from "@/components/LazyOnVisible";

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

      {/* Batch 7: eager internal-link strip → hubs (Help/Payments/Bonuses/Games). */}
      <HubLinksStrip />

      {/* Batch 8: eager E-E-A-T trust strip — Last Updated / Editorially Reviewed / Fact Checked. */}
      <EEATStrip />

      {/* Locale-specific copy (payments / leagues / FAQ in native script).
          Rendered AFTER Hero so the section order never changes by locale. */}
      {localExtras}

      {/* Everything below is split into separate JS chunks and is only fetched
          when its placeholder scrolls into (or near) the viewport. */}
      <LazyOnVisible load={() => import("./GuideCards")} minHeight={520} />
      <LazyOnVisible load={() => import("./PopularGamesSection")} minHeight={520} />
      <LazyOnVisible load={() => import("./AmbassadorsSection")} minHeight={520} />
      <LazyOnVisible load={() => import("./SponsorsSection")} minHeight={620} />
      <LazyOnVisible load={() => import("./PaymentSection")} minHeight={1200} />
      <LazyOnVisible load={() => import("./ProvidersSection")} minHeight={520} />
      <LazyOnVisible load={() => import("./BlogSection")} minHeight={700} />
      <LazyOnVisible load={() => import("./FAQSection")} minHeight={900} />
      <LazyOnVisible load={() => import("./FooterSection")} minHeight={800} />
    </PageShell>
  );
}