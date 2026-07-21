#!/usr/bin/env node
/**
 * Internal-link gap finder.
 *
 * Enumerates every English top-level route under `src/routes/` and checks
 * whether each URL is linked from any of the four topical hubs
 * (/help, /payments, /bonuses, /games) or the eager HubLinksStrip cluster
 * definitions. Reports pages with 0 inbound hub links and proposes the
 * best-fit hub + exact insertion point.
 *
 * Usage:  node scripts/find-internal-link-gaps.mjs
 * Writes: .lovable/internal-link-gaps.md
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROUTES_DIR = "src/routes";
const HUB_FILES = {
  "/help": "src/routes/help.tsx",
  "/payments": "src/routes/payments.tsx",
  "/bonuses": "src/routes/bonuses.tsx",
  "/games": "src/routes/games.tsx",
};
const CLUSTER_FILE = "src/lib/clusters.ts";
const STRIP_FILE = "src/components/home/HubLinksStrip.tsx";

// Routes we intentionally exclude from the gap audit.
const EXCLUDE = new Set([
  "index", "__root", "app.launch", "go.affiliate", "go.login", "go.signup",
  "author", "contact", "about", "affiliate-disclosure", "editorial-policy",
  "content-policy", "fact-checking", "sitemap-index[.]xml", "README",
]);

/** Convert `src/routes/foo.bar.tsx` filename to URL `/foo/bar`. */
function filenameToPath(name) {
  const base = name.replace(/\.tsx$/, "");
  if (base === "index") return "/";
  // ignore dynamic and sitemap/api technical routes
  if (base.includes("$") || base.startsWith("api.") || base.includes("[.]xml")) return null;
  return "/" + base.replaceAll(".", "/");
}

/** Extract every `/some-path` link target found in a file. */
function extractLinks(file) {
  const src = readFileSync(file, "utf8");
  const out = new Set();
  // Matches markdown ](/path), to: "/path", to="/path", href="/path"
  const re = /(?:\]\(|to:\s*"|to="|href=")(\/[a-z0-9][a-z0-9/-]*)/gi;
  let m;
  while ((m = re.exec(src))) out.add(m[1].replace(/\/$/, "") || "/");
  return out;
}

/** Best-fit hub for a page based on filename keywords. */
function proposeHub(path) {
  const p = path.toLowerCase();
  if (/(bonus|promo|welcome|refer|cashback|reward)/.test(p)) return "/bonuses";
  if (/(bkash|nagad|rocket|jazzcash|easypaisa|upi|paytm|phonepe|deposit|withdraw|payment)/.test(p)) return "/payments";
  if (/(cricket|casino|aviator|slot|game|sport|exchange|live-)/.test(p)) return "/games";
  if (/(login|password|otp|kyc|verification|locked|help|delete|account|app-not|failed|pending|reset|security|problem|register|signup|sign-up)/.test(p)) return "/help";
  return "/help"; // safe default
}

/** Suggest a concise anchor + section heading for the proposed insertion. */
function proposeAnchor(path) {
  const slug = path.split("/").pop() || "";
  const label = slug.replace(/^jeetbuzz-/, "").replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return label;
}

// 1. Enumerate all candidate English top-level pages.
const files = readdirSync(ROUTES_DIR)
  .filter((f) => f.endsWith(".tsx") && !f.includes("$"));
const allPaths = new Set();
for (const f of files) {
  const base = f.replace(/\.tsx$/, "");
  if (EXCLUDE.has(base)) continue;
  const p = filenameToPath(f);
  if (p && p !== "/") allPaths.add(p);
}

// 2. Collect every link target reachable from a hub or the eager strip.
const linkedFromHub = new Map(); // path -> Set<hub>
function record(target, hub) {
  if (!linkedFromHub.has(target)) linkedFromHub.set(target, new Set());
  linkedFromHub.get(target).add(hub);
}
for (const [hub, file] of Object.entries(HUB_FILES)) {
  for (const t of extractLinks(file)) record(t, hub);
}
// HubLinksStrip → all four hubs (already covers hubs themselves)
for (const t of extractLinks(STRIP_FILE)) record(t, "HubLinksStrip");
// Cluster arrays: any page listed in a cluster gets linked from every
// cluster sibling — we count that as covered because the hubs render
// the same clusters via `related=`.
for (const t of extractLinks(CLUSTER_FILE)) record(t, "cluster");

// 3. Compute gaps.
const gaps = [];
for (const p of [...allPaths].sort()) {
  if (!linkedFromHub.has(p)) gaps.push(p);
}

// 4. Group proposals per hub with insertion snippet.
const byHub = { "/help": [], "/payments": [], "/bonuses": [], "/games": [] };
for (const p of gaps) {
  const hub = proposeHub(p);
  byHub[hub].push({ path: p, anchor: proposeAnchor(p) });
}

// 5. Render report.
const lines = [];
lines.push("# Internal-Link Gap Report");
lines.push("");
lines.push(`_Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/find-internal-link-gaps.mjs\`._`);
lines.push("");
lines.push(`**Scanned:** ${allPaths.size} English top-level routes.`);
lines.push(`**Hubs:** /help, /payments, /bonuses, /games (+ HubLinksStrip, clusters.ts).`);
lines.push(`**Pages with 0 inbound hub links:** ${gaps.length}.`);
lines.push("");
if (gaps.length === 0) {
  lines.push("No gaps. Every page is reachable from at least one hub.");
} else {
  lines.push("## Proposed link placements");
  lines.push("");
  for (const hub of Object.keys(byHub)) {
    const items = byHub[hub];
    if (!items.length) continue;
    lines.push(`### → add to \`${HUB_FILES[hub]}\` (${items.length})`);
    lines.push("");
    lines.push("Suggested markdown lines (append inside the `body` array under a `## Related` or topic section):");
    lines.push("");
    lines.push("```md");
    for (const it of items) {
      lines.push(`- [${it.anchor}](${it.path}) — one-line description of what this page solves.`);
    }
    lines.push("```");
    lines.push("");
    lines.push("Or, to strengthen the topical cluster instead, add to the matching array in `src/lib/clusters.ts`:");
    lines.push("");
    lines.push("```ts");
    for (const it of items) {
      lines.push(`  { to: "${it.path}", title: "${it.anchor}", desc: "…" },`);
    }
    lines.push("```");
    lines.push("");
  }
}

// 6. Coverage summary.
lines.push("## Coverage summary");
lines.push("");
lines.push("| Hub | Distinct pages linked |");
lines.push("|---|---|");
const perHubCount = { "/help": 0, "/payments": 0, "/bonuses": 0, "/games": 0 };
for (const [, hubs] of linkedFromHub) {
  for (const h of hubs) if (h in perHubCount) perHubCount[h]++;
}
for (const [h, n] of Object.entries(perHubCount)) lines.push(`| ${h} | ${n} |`);

mkdirSync(".lovable", { recursive: true });
const outPath = ".lovable/internal-link-gaps.md";
writeFileSync(outPath, lines.join("\n") + "\n");
console.log(`Wrote ${outPath} — ${gaps.length} gaps across ${allPaths.size} routes.`);
for (const [hub, items] of Object.entries(byHub)) {
  if (items.length) console.log(`  ${hub}: ${items.length}`);
}