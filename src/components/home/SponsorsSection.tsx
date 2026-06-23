import { SectionHeader } from "./SectionHeader";
import { JsonLd } from "@/components/JsonLd";
import tigersAvif from "@/assets/sponsors/montreal-royal-tigers.avif";
import tigersWebp from "@/assets/sponsors/montreal-royal-tigers.webp";
import bullsAvif from "@/assets/sponsors/delhi-bulls.avif";
import bullsWebp from "@/assets/sponsors/delhi-bulls-opt.webp";

type Sponsor = {
  team: string;
  badge: string;
  league: string;
  year: string;
  avif: string;
  webp: string;
  width: number;
  height: number;
  alt: string;
  paragraphs: string[];
};

const SPONSORS: Sponsor[] = [
  {
    team: "Montreal Royal Tigers",
    badge: "Principal Sponsor",
    league: "Canada Super 60 (CS60)",
    year: "2025 Season",
    avif: tigersAvif,
    webp: tigersWebp,
    width: 1280,
    height: 636,
    alt: "Montreal Royal Tigers squad in red and gold jerseys with JeetBuzz branding — 2025 Canada Super 60 principal sponsor",
    paragraphs: [
      "We are honored to serve as the Principal Sponsor of the Montreal Royal Tigers for the 2025 Canada Super 60 (CS60) season — a partnership that celebrates ambition, teamwork and the growing legacy of cricket in North America.",
      "Founded in 2025, the Montreal Royal Tigers are one of the newest and most exciting teams in the Canada Super 60, uniting seasoned international stars with emerging Canadian talent. In their striking red and gold colors and fearless style, the Tigers are already capturing attention and elevating the league's competitive spirit.",
      "Owned by Aashish Parikh, the squad features international stars Shakib Al Hasan, Andrew Tye, Tom Moores and Isuru Udana, alongside local standouts Dilpreet Bajwa, Shreyas Movva and Junaid Siddique. In their debut season, the Tigers are showing promise, determination and a hunger to succeed.",
      "As Principal Sponsors, we look forward to a season brimming with defining moments and inspiring victories. Join us in cheering for the Tigers as they make their mark on Canadian cricket — bold, fearless and ready to roar.",
    ],
  },
  {
    team: "Delhi Bulls",
    badge: "Principal Sponsor",
    league: "Abu Dhabi T10 League",
    year: "2023 Season",
    avif: bullsAvif,
    webp: bullsWebp,
    width: 1280,
    height: 579,
    alt: "Delhi Bulls team crest with fire effect — JeetBuzz principal sponsor of Abu Dhabi T10 2023",
    paragraphs: [
      "We are absolutely delighted to have partnered with the powerhouse team Delhi Bulls as their principal sponsor for the Abu Dhabi T10 2023. Renowned for their dedication and trailblazing spirit, Delhi Bulls perfectly embody the boldness and unwavering determination that defines the JeetBuzz brand.",
      "Established in 2019 and owned by Neelesh Bhatnagar — one of the most successful entrepreneurs and respected businessmen in the region — Delhi Bulls have swiftly become the most valuable cricket franchise in the Abu Dhabi T10 League, with a strong presence in previous seasons and a runners-up finish in 2021-22 under captain Dwayne Bravo and coach Andy Flower.",
      "Together in 2023, we set out to conquer new heights, dominate the league and chase championship glory — inspiring fans, creating memories and making history alongside one of T10 cricket's most iconic franchises.",
    ],
  },
];

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-heading"
      className="container-pro mt-20 md:mt-28"
    >
      <SectionHeader
        eyebrow="Official cricket sponsorships"
        title="JeetBuzz on the world cricket stage"
        desc="From the Abu Dhabi T10 League to the Canada Super 60, JeetBuzz proudly backs elite franchises and the rising stars shaping the future of global cricket."
      />
      <h2 id="sponsors-heading" className="sr-only">
        JeetBuzz official cricket team sponsorships
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SPONSORS.map((s) => (
          <article
            key={s.team}
            className="glass overflow-hidden rounded-2xl p-5 md:p-6"
            itemScope
            itemType="https://schema.org/SportsTeam"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5">
              <picture>
                <source type="image/avif" srcSet={s.avif} />
                <source type="image/webp" srcSet={s.webp} />
                <img
                  src={s.webp}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  width={s.width}
                  height={s.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                  itemProp="image"
                />
              </picture>
              <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-lg">
                {s.badge}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl" itemProp="name">
                {s.team}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-primary/80">
                {s.league}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.year}</p>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground" itemProp="description">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "JeetBuzz Cricket Team Sponsorships",
          itemListElement: SPONSORS.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "SportsTeam",
              name: s.team,
              sport: "Cricket",
              memberOf: s.league,
              image: s.webp,
              description: s.paragraphs[0],
            },
          })),
        }}
      />
    </section>
  );
}