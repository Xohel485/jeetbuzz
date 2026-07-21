import { Link } from "@tanstack/react-router";
import { HUBS } from "@/lib/clusters";

/**
 * Homepage internal-link strip (Batch 7).
 * Concentrates authority on the four topical hubs so Google can follow
 * Homepage → Help / Payments / Bonuses / Games → money pages in one hop.
 * Rendered eagerly (not lazy) so the links are in the initial HTML for crawl.
 */
export function HubLinksStrip() {
  return (
    <section aria-label="Popular topics" className="container-pro mt-6">
      <nav className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {HUBS.map((hub) => (
          <Link
            key={hub.to}
            to={hub.to}
            className="glass rounded-xl p-4 transition-colors hover:bg-white/5"
          >
            <div className="text-sm font-semibold gold-text">{hub.title}</div>
            <p className="mt-1 text-xs text-muted-foreground">{hub.desc}</p>
          </Link>
        ))}
      </nav>
    </section>
  );
}