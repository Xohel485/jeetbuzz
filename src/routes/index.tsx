import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/home/Hero";
import { LazyOnVisible } from "@/components/LazyOnVisible";
import { IMAGES, imageUrl, imageAbsoluteUrl, imageObjectSchema } from "@/lib/images";
import { faqSchema, articleSchema, hreflangLinks, canonicalLink, ogUrl } from "@/lib/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "JeetBuzz Guide — Login, Signup & Review (BD/PK/IN)",
      },
      {
        name: "description",
        content:
          "JeetBuzz guide for Bangladesh, Pakistan & India — signup, login, bonuses, APK, bKash/Nagad/UPI deposits and live cricket betting on JeetBuzz.",
      },
      {
        property: "og:title",
        content: "JeetBuzz Login, Signup & Bonus Guide — Bangladesh · Pakistan · India",
      },
      {
        property: "og:description",
        content:
          "Everything players in Bangladesh, Pakistan and India need to know about JeetBuzz — signup, bonuses, payments, app.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imageAbsoluteUrl("hero") },
      { property: "og:image:width", content: String(IMAGES.hero.w) },
      { property: "og:image:height", content: String(IMAGES.hero.h) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("hero") },
      ogUrl("/"),
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: imageUrl("hero", 768, "avif"),
        type: "image/avif",
        imageSrcSet: `${imageUrl("hero", 480, "avif")} 480w, ${imageUrl("hero", 768, "avif")} 768w, ${imageUrl("hero", 1125, "avif")} 1125w`,
        imageSizes: "100vw",
        fetchPriority: "high",
      },
      canonicalLink("/"),
      ...hreflangLinks("/"),
      { rel: "alternate", hrefLang: "bn-BD", href: "https://getjeetbuzzv1.lovable.app/bd/bn" },
      { rel: "alternate", hrefLang: "ur-PK", href: "https://getjeetbuzzv1.lovable.app/pk/ur" },
      { rel: "alternate", hrefLang: "hi-IN", href: "https://getjeetbuzzv1.lovable.app/in/hi" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(imageObjectSchema("hero")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          articleSchema({
            headline: "JeetBuzz — Login, Registration & Review for Bangladesh, Pakistan, India",
            description:
              "JeetBuzz handbook for Bangladesh, Pakistan and India — signup, login, bonuses, app, payments and live cricket.",
            path: "/",
            image: imageAbsoluteUrl("hero"),
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          faqSchema([
            { q: "Is this the official JeetBuzz website?", a: "No. GetJeetBuzz is a partner guide. The official JeetBuzz site is reached via our outbound links." },
            { q: "Is JeetBuzz legal in Bangladesh?", a: "Online betting is a gray area in Bangladesh. JeetBuzz operates under an offshore license." },
            { q: "How do I register?", a: "Follow our Registration Guide. You will need a phone, email and a wallet like bKash or Nagad." },
            { q: "How do bonuses work?", a: "JeetBuzz offers a welcome bonus and recurring promotions, each with wagering requirements." },
          ]),
        ),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* Hero is the only home-page chunk in the initial bundle. */}
      <Hero />

      {/* Everything below is split into separate JS chunks and is only fetched
          when its placeholder scrolls into (or near) the viewport. */}
      <LazyOnVisible load={() => import("@/components/home/GuideCards")} minHeight={520} />
      <LazyOnVisible load={() => import("@/components/home/PaymentSection")} minHeight={1200} />
      <LazyOnVisible load={() => import("@/components/home/BlogSection")} minHeight={700} />
      <LazyOnVisible load={() => import("@/components/home/FAQSection")} minHeight={900} />
      <LazyOnVisible load={() => import("@/components/home/FooterSection")} minHeight={800} />
    </PageShell>
  );
}