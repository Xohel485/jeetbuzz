import { Link } from "@tanstack/react-router";
import sport from "@/assets/games/sport.png.asset.json";
import casino from "@/assets/games/casino.png.asset.json";
import slot from "@/assets/games/slot.png.asset.json";
import crash from "@/assets/games/crash.png.asset.json";
import table from "@/assets/games/table.png.asset.json";
import fishing from "@/assets/games/fishing.png.asset.json";
import lottery from "@/assets/games/lottery.png.asset.json";
import arcade from "@/assets/games/arcade.png.asset.json";

type Category = {
  key: string;
  name: string;
  tagline: string;
  to: string;
  img: string;
  alt: string;
};

const CATEGORIES: Category[] = [
  {
    key: "sport",
    name: "Sports",
    tagline: "Cricket, football & more",
    to: "/sports-betting",
    img: sport.url,
    alt: "JeetBuzz sports betting category — cricket and football markets",
  },
  {
    key: "casino",
    name: "Live Casino",
    tagline: "Bengali-speaking dealers",
    to: "/casino-guide",
    img: casino.url,
    alt: "JeetBuzz live casino category — roulette, baccarat and blackjack",
  },
  {
    key: "slot",
    name: "Slots",
    tagline: "Pragmatic, PG, JILI",
    to: "/casino-guide",
    img: slot.url,
    alt: "JeetBuzz slots category — Pragmatic Play, PG Soft and JILI titles",
  },
  {
    key: "crash",
    name: "Crash Games",
    tagline: "Aviator, Spaceman & co.",
    to: "/casino-guide",
    img: crash.url,
    alt: "JeetBuzz crash games category — Aviator and Spaceman style titles",
  },
  {
    key: "table",
    name: "Table Games",
    tagline: "Poker, Andar Bahar, Teen Patti",
    to: "/casino-guide",
    img: table.url,
    alt: "JeetBuzz table games category — poker, Andar Bahar and Teen Patti",
  },
  {
    key: "fishing",
    name: "Fishing",
    tagline: "Skill-based arcade shooters",
    to: "/casino-guide",
    img: fishing.url,
    alt: "JeetBuzz fishing games category — skill-based arcade shooters",
  },
  {
    key: "lottery",
    name: "Lottery",
    tagline: "Daily draws & keno",
    to: "/casino-guide",
    img: lottery.url,
    alt: "JeetBuzz lottery category — daily number draws and keno",
  },
  {
    key: "arcade",
    name: "Arcade",
    tagline: "Mini games & quick wins",
    to: "/casino-guide",
    img: arcade.url,
    alt: "JeetBuzz arcade category — mini games and quick-win titles",
  },
];

export default function GameCategoriesImpl() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {CATEGORIES.map((c) => (
        <Link
          key={c.key}
          to={c.to as never}
          aria-label={`${c.name} on JeetBuzz`}
          className="glass group flex flex-col items-center p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.06]"
        >
          <div className="relative aspect-square w-full max-w-[180px] overflow-hidden">
            <img
              src={c.img}
              alt={c.alt}
              loading="lazy"
              decoding="async"
              width={300}
              height={300}
              draggable={false}
              className="h-full w-full select-none object-contain transition-transform duration-300 group-hover:scale-105"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <h3 className="mt-4 text-base font-semibold leading-tight md:text-lg">
            <span className="gold-text">{c.name}</span>
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
            {c.tagline}
          </p>
        </Link>
      ))}
    </div>
  );
}