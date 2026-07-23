/**
 * Validates that the BreadcrumbList JSON-LD emitted on each misspelling
 * landing page matches the visible breadcrumb rendered by <Breadcrumbs />.
 *
 * Usage:
 *   bun run validate:breadcrumbs                # default BASE_URL
 *   BASE_URL=http://localhost:8080 bun run validate:breadcrumbs
 */
import puppeteer, { type Page } from "puppeteer";

const MISSPELLING_PAGES = [
  "/jetbuzz",
  "/jeet-buzz",
  "/jeetbuz",
  "/jest-buzz",
  "/jitbuzz",
  "/জিতবাজ",
];

const BASE_URL = process.env.BASE_URL ?? "https://getjeetbuzz.com";

type BreadcrumbItem = { name: string; url: string };
type PageResult = {
  page: string;
  status: "PASS" | "FAIL";
  mismatches: string[];
  jsonLD: BreadcrumbItem[];
  onPage: BreadcrumbItem[];
};

async function extractBreadcrumbJsonLd(tab: Page): Promise<BreadcrumbItem[]> {
  return tab.evaluate(() => {
    const scripts = document.querySelectorAll<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    );
    // Recursively walk any JSON-LD shape and collect every BreadcrumbList
    // node. Handles: top-level object, top-level array, nested @graph,
    // deeply nested arrays/objects, and mixed shapes across multiple
    // <script type="application/ld+json"> tags.
    const collectBreadcrumbLists = (node: unknown, out: Record<string, unknown>[]) => {
      if (!node) return;
      if (Array.isArray(node)) {
        for (const child of node) collectBreadcrumbLists(child, out);
        return;
      }
      if (typeof node !== "object") return;
      const obj = node as Record<string, unknown>;
      const type = obj["@type"];
      const isBreadcrumb =
        type === "BreadcrumbList" ||
        (Array.isArray(type) && type.includes("BreadcrumbList"));
      if (isBreadcrumb && Array.isArray(obj.itemListElement)) {
        out.push(obj);
      }
      // Recurse into @graph and any other object/array values so we don't
      // miss BreadcrumbList nodes buried under custom wrappers.
      for (const value of Object.values(obj)) {
        if (value && (typeof value === "object" || Array.isArray(value))) {
          collectBreadcrumbLists(value, out);
        }
      }
    };

    const lists: Record<string, unknown>[] = [];
    for (const script of Array.from(scripts)) {
      const raw = (script.textContent ?? "").trim();
      if (!raw) continue;
      let parsed: unknown;
      try {
        parsed = JSON.parse(raw);
      } catch {
        // Malformed or non-JSON text (comments, HTML fragments) — skip.
        continue;
      }
      try {
        collectBreadcrumbLists(parsed, lists);
      } catch {
        /* defensive: ignore any traversal error on hostile shapes */
      }
    }

    // Prefer the first BreadcrumbList that actually has items.
    const chosen = lists.find(
      (l) => Array.isArray(l.itemListElement) && (l.itemListElement as unknown[]).length > 0,
    );
    if (!chosen) return [];

    const items = (chosen.itemListElement as unknown[]) ?? [];
    return items.map((raw) => {
      const el = (raw ?? {}) as Record<string, unknown>;
      const item = (el.item ?? {}) as Record<string, unknown> | string;
      const itemObj = typeof item === "object" && item !== null ? (item as Record<string, unknown>) : {};
      const itemStr = typeof item === "string" ? item : "";
      return {
        name: String(el.name ?? itemObj.name ?? "").trim(),
        url: String(itemObj["@id"] ?? itemObj.url ?? el.url ?? itemStr ?? "").trim(),
      };
    });
  });
}

async function extractOnPageBreadcrumbs(tab: Page): Promise<BreadcrumbItem[]> {
  return tab.evaluate(() => {
    // Match the <Breadcrumbs /> component: <nav aria-label="Breadcrumb"> with
    // an <ol> containing <li> for every crumb (last one is a <span>).
    const nav = document.querySelector(
      'nav[aria-label="Breadcrumb" i], nav[aria-label="breadcrumb" i], [class*="breadcrumb" i]',
    );
    if (!nav) return [];
    const items = nav.querySelectorAll<HTMLElement>("li");
    return Array.from(items).map((li) => {
      const link = li.querySelector<HTMLAnchorElement>("a");
      const span = li.querySelector<HTMLElement>('[aria-current="page"]');
      const el = link ?? span ?? li;
      return {
        name: (el.textContent ?? "").trim(),
        url: link?.href ?? "",
      };
    });
  });
}

async function validateBreadcrumbs(): Promise<void> {
  const browser = await puppeteer.launch({ headless: true });
  const results: PageResult[] = [];

  try {
    for (const path of MISSPELLING_PAGES) {
      const tab = await browser.newPage();
      const url = `${BASE_URL}${path}`;
      try {
        await tab.goto(url, { waitUntil: "networkidle0", timeout: 45_000 });

        const jsonLD = await extractBreadcrumbJsonLd(tab);
        const onPage = await extractOnPageBreadcrumbs(tab);
        const mismatches: string[] = [];

        if (jsonLD.length === 0) {
          mismatches.push("No BreadcrumbList JSON-LD found on page");
        }
        if (onPage.length === 0) {
          mismatches.push("No visible breadcrumb nav found on page");
        }
        if (jsonLD.length && onPage.length && jsonLD.length !== onPage.length) {
          mismatches.push(
            `Item count differs: JSON-LD=${jsonLD.length} vs on-page=${onPage.length}`,
          );
        }

        const max = Math.max(jsonLD.length, onPage.length);
        for (let i = 0; i < max; i++) {
          const j = jsonLD[i];
          const p = onPage[i];
          if (j && !p) {
            mismatches.push(`Position ${i + 1}: JSON-LD "${j.name}" has no on-page match`);
          } else if (p && !j) {
            mismatches.push(`Position ${i + 1}: on-page "${p.name}" has no JSON-LD match`);
          } else if (j && p && j.name !== p.name) {
            mismatches.push(
              `Position ${i + 1}: JSON-LD="${j.name}" vs on-page="${p.name}"`,
            );
          }
        }

        results.push({
          page: path,
          status: mismatches.length === 0 ? "PASS" : "FAIL",
          mismatches,
          jsonLD,
          onPage,
        });
      } catch (err) {
        results.push({
          page: path,
          status: "FAIL",
          mismatches: [`Fetch error: ${(err as Error).message}`],
          jsonLD: [],
          onPage: [],
        });
      } finally {
        await tab.close();
      }
    }
  } finally {
    await browser.close();
  }

  console.log("\n=== BREADCRUMB VALIDATION REPORT ===");
  console.log(`Base URL: ${BASE_URL}\n`);
  for (const r of results) {
    const mark = r.status === "PASS" ? "PASS" : "FAIL";
    console.log(`[${mark}] ${r.page}`);
    if (r.status !== "PASS") {
      console.log(`  JSON-LD (${r.jsonLD.length}): ${r.jsonLD.map((i) => i.name).join(" > ") || "(none)"}`);
      console.log(`  On-page (${r.onPage.length}): ${r.onPage.map((i) => i.name).join(" > ") || "(none)"}`);
      for (const m of r.mismatches) console.log(`  - ${m}`);
    }
  }

  const failed = results.filter((r) => r.status !== "PASS");
  console.log(`\nTotal: ${results.length}  Passed: ${results.length - failed.length}  Failed: ${failed.length}`);
  if (failed.length > 0) process.exit(1);
}

validateBreadcrumbs().catch((err) => {
  console.error(err);
  process.exit(1);
});