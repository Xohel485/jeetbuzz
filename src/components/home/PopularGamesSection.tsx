import { SectionHeader } from "./SectionHeader";
import { JsonLd } from "@/components/JsonLd";
import { AFFILIATE, GO, REL } from "@/lib/affiliate";
import wildBounty from "@/assets/popular-games/wild-bounty-showdown.webp";
import aviator from "@/assets/popular-games/aviator.webp";
import moneyComing from "@/assets/popular-games/money-coming.webp";
import boxingKing from "@/assets/popular-games/boxing-king.webp";
import crazyTime from "@/assets/popular-games/crazy-time.webp";

type Game = {
  name: string;
  studio: string;
  category: string;
  image: string;
  alt: string;
};

const GAMES: Game[] = [
  {
    name: "Aviator",
    studio: "Spribe",
    category: "Crash game",
    image: aviator,
    alt: "Aviator by Spribe — popular crash game on JeetBuzz",
  },
  {
    name: "Crazy Time",
    studio: "Evolution",
    category: "Live game show",
    image: crazyTime,
    alt: "Crazy Time by Evolution — live game show on JeetBuzz",
  },
  {
    name: "Wild Bounty Showdown",
    studio: "PG Soft",
    category: "Video slot",
    image: wildBounty,
    alt: "Wild Bounty Showdown by PG Soft — popular slot on JeetBuzz",
  },
  {
    name: "Money Coming",
    studio: "JILI",
    category: "Video slot",
    image: moneyComing,
    alt: "Money Coming by JILI — popular slot on JeetBuzz",
  },
  {
    name: "Boxing King",
    studio: "JILI",
    category: "Video slot",
    image: boxingKing,
    alt: "Boxing King by JILI — popular slot on JeetBuzz",
  },
];

export default function PopularGamesSection() {
  return (
    <section
      id="popular-games"
      aria-labelledby="popular-games-heading"
      className="container-pro mt-20 md:mt-28"
    >
      <SectionHeader
        eyebrow="Popular games"
        title="Player favourites on JeetBuzz"
        desc="The most-played JeetBuzz titles across Bangladesh, India and Pakistan — covering crash games, live casino game shows and top JILI & PG Soft slots."
      />
      <h2 id="popular-games-heading" className="sr-only">
        Popular games on JeetBuzz
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
        {GAMES.map((g) => (
          <a
            key={g.name}
            href={GO.signup}
            data-affiliate-href={AFFILIATE.signup}
            rel={REL}
            target="_blank"
            className="glass group block overflow-hidden rounded-xl ring-1 ring-white/5 transition hover:ring-primary/40"
            aria-label={`Play ${g.name} by ${g.studio} on JeetBuzz`}
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-black/40">
              <img
                src={g.image}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-3">
              <p className="truncate text-sm font-semibold">{g.name}</p>
              <p className="mt-0.5 truncate text-[11px] uppercase tracking-wider text-muted-foreground">
                {g.studio} · {g.category}
              </p>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Game availability varies by region. 18+ only. Play responsibly.
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Popular Games on JeetBuzz",
          itemListElement: GAMES.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Game",
              name: g.name,
              genre: g.category,
              image: g.image,
              publisher: { "@type": "Organization", name: g.studio },
            },
          })),
        }}
      />
    </section>
  );
}