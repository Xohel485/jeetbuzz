import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";
import { IMAGES, imageUrl, imageAbsoluteUrl, imageObjectSchema } from "@/lib/images";
import { faqSchema, articleSchema, hreflangLinks, canonicalLink, ogUrl } from "@/lib/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "JeetBuzz Bangladesh Pakistan India 2026 - Login, Signup, Bonus & APK Guide",
      },
      {
        name: "description",
        content:
          "JeetBuzz 2026 guide for Bangladesh, Pakistan and India — login links, signup, welcome bonus, APK install, bKash/Nagad/UPI deposits and live cricket markets.",
      },
      {
        property: "og:title",
        content: "JeetBuzz Bangladesh Pakistan India 2026 - Login, Signup, Bonus & APK Guide",
      },
      {
        property: "og:description",
        content:
          "JeetBuzz 2026 guide for Bangladesh, Pakistan and India — login, signup, welcome bonus, APK download, bKash/Nagad/UPI deposits and BPL/IPL cricket markets.",
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
        imageSizes: "(max-width: 768px) 100vw, 1200px",
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
  return <HomePage />;
}