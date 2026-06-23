import { PageShell } from "@/components/PageShell";
import { Hero } from "./Hero";
import { LazyOnVisible } from "@/components/LazyOnVisible";

export function HomePage() {
  return (
    <PageShell>
      {/* Hero is the only home-page chunk in the initial bundle. */}
      <Hero />

      {/* Everything below is split into separate JS chunks and is only fetched
          when its placeholder scrolls into (or near) the viewport. */}
      <LazyOnVisible load={() => import("./GuideCards")} minHeight={520} />
      <LazyOnVisible load={() => import("./PaymentSection")} minHeight={1200} />
      <LazyOnVisible load={() => import("./BlogSection")} minHeight={700} />
      <LazyOnVisible load={() => import("./FAQSection")} minHeight={900} />
      <LazyOnVisible load={() => import("./FooterSection")} minHeight={800} />
    </PageShell>
  );
}