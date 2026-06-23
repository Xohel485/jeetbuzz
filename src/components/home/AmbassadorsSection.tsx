import { SectionHeader } from "./SectionHeader";
import { JsonLd } from "@/components/JsonLd";
import andre from "@/assets/ambassadors/andre-russell.webp";
import glenn from "@/assets/ambassadors/glenn-mcgrath.webp";

type Ambassador = {
  name: string;
  role: string;
  country: string;
  blurb: string;
  image: string;
  alt: string;
};

const AMBASSADORS: Ambassador[] = [
  {
    name: "Andre Russell",
    role: "JeetBuzz Global Brand Ambassador",
    country: "West Indies all-rounder",
    blurb:
      "T20 power-hitter Andre Russell fronts JeetBuzz across Bangladesh, signalling the platform's commitment to cricket-first entertainment.",
    image: andre,
    alt: "Andre Russell — JeetBuzz brand ambassador holding a smartphone next to a slot machine",
  },
  {
    name: "Glenn McGrath",
    role: "JeetBuzz Brand Ambassador",
    country: "Australian fast-bowling legend",
    blurb:
      "Glenn McGrath represents JeetBuzz as a trusted face for cricket fans across South Asia, anchoring the brand's IPL and BPL campaigns.",
    image: glenn,
    alt: "Glenn McGrath — JeetBuzz brand ambassador in a JeetBuzz jersey beside a mobile app preview",
  },
];

export default function AmbassadorsSection() {
  return (
    <section
      id="ambassadors"
      aria-labelledby="ambassadors-heading"
      className="container-pro mt-20 md:mt-28"
    >
      <SectionHeader
        eyebrow="Brand ambassadors"
        title="Cricket legends behind JeetBuzz"
        desc="JeetBuzz partners with world-class cricketers to bring credibility, recognition and a cricket-first identity to players across Bangladesh, India and Pakistan."
      />
      <h2 id="ambassadors-heading" className="sr-only">
        JeetBuzz brand ambassadors
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {AMBASSADORS.map((a) => (
          <article
            key={a.name}
            className="glass overflow-hidden rounded-2xl p-5 md:p-6"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/30 ring-1 ring-white/5">
              <img
                src={a.image}
                alt={a.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
                itemProp="image"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight" itemProp="name">
                {a.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-primary/80" itemProp="jobTitle">
                {a.role}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{a.country}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground" itemProp="description">
                {a.blurb}
              </p>
            </div>
          </article>
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "JeetBuzz Brand Ambassadors",
          itemListElement: AMBASSADORS.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Person",
              name: a.name,
              jobTitle: a.role,
              description: a.blurb,
              image: a.image,
            },
          })),
        }}
      />
    </section>
  );
}