import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export type RelatedItem = { to: string; title: string; desc?: string };

export default function RelatedGuidesImpl({
  items,
  heading = "Related JeetBuzz guides",
}: {
  items: RelatedItem[];
  heading?: string;
}) {
  if (!items?.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold md:text-2xl">{heading}</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to as never}
            className="glass group block p-4 transition hover:border-primary/40"
          >
            <h3 className="text-sm font-semibold">{it.title}</h3>
            {it.desc && (
              <p className="mt-1 text-xs text-muted-foreground">{it.desc}</p>
            )}
            <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary">
              Read <ArrowRight className="size-3 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}