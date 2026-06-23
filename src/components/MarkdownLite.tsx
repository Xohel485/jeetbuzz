import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

// Tiny renderer for the BlogPost.body line array.
// Supports: "## heading", "- list item", "> quote", "1. ordered", paragraph.
// Inline: [text](href), **bold**.
function renderInline(text: string): ReactNode[] {
  // Tokenize on [text](href) and **bold**.
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      const href = m[2];
      const label = m[1];
      if (/^https?:\/\//i.test(href)) {
        nodes.push(
          <a key={`l${key++}`} href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
            {label}
          </a>,
        );
      } else {
        nodes.push(
          <Link key={`l${key++}`} to={href as never} className="text-primary underline-offset-4 hover:underline">
            {label}
          </Link>,
        );
      }
    } else if (m[3]) {
      nodes.push(
        <strong key={`b${key++}`} className="font-semibold text-foreground">
          {m[3]}
        </strong>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function MarkdownLite({ lines }: { lines: string[] }) {
  const out: ReactNode[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;
  let table: { headers: string[]; rows: string[][] } | null = null;
  let k = 0;
  const nextKey = (prefix: string) => `${prefix}-${k++}`;

  const flush = () => {
    if (table) {
      out.push(
        <div key={nextKey("tw")} className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-foreground">
                {table.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2 font-semibold">{renderInline(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((r, i) => (
                <tr key={i} className="border-b border-white/5 text-muted-foreground">
                  {r.map((c, j) => (
                    <td key={j} className="px-3 py-2 align-top">{renderInline(c)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      table = null;
    }
    if (!list) return;
    const items = list.items;
    if (list.type === "ul") {
      out.push(
        <ul key={nextKey("ul")} className="list-disc space-y-1 pl-6 text-muted-foreground">
          {items.map((t, i) => <li key={i}>{renderInline(t)}</li>)}
        </ul>,
      );
    } else {
      out.push(
        <ol key={nextKey("ol")} className="list-decimal space-y-1 pl-6 text-muted-foreground">
          {items.map((t, i) => <li key={i}>{renderInline(t)}</li>)}
        </ol>,
      );
    }
    list = null;
  };

  lines.forEach((raw) => {
    const line = raw.trim();
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line.slice(1, -1).split("|").map((s) => s.trim());
      // Separator row like |---|---|
      if (cells.every((c) => /^:?-{3,}:?$/.test(c))) return;
      if (!table) {
        flush();
        table = { headers: cells, rows: [] };
      } else {
        table.rows.push(cells);
      }
      return;
    }
    if (line.startsWith("## ")) {
      flush();
      out.push(
        <h2 key={nextKey("h")} className="mt-8 text-xl font-semibold text-foreground md:text-2xl">
          {renderInline(line.slice(3))}
        </h2>,
      );
    } else if (line.startsWith("- ")) {
      if (!list || list.type !== "ul") { flush(); list = { type: "ul", items: [] }; }
      list.items.push(line.slice(2));
    } else if (/^\d+\.\s/.test(line)) {
      if (!list || list.type !== "ol") { flush(); list = { type: "ol", items: [] }; }
      list.items.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.startsWith("> ")) {
      flush();
      out.push(
        <blockquote key={nextKey("q")} className="border-l-2 border-primary/60 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground">
          {renderInline(line.slice(2))}
        </blockquote>,
      );
    } else if (line.length) {
      flush();
      out.push(<p key={nextKey("p")} className="text-muted-foreground">{renderInline(line)}</p>);
    }
  });
  flush();
  return <div className="space-y-4">{out}</div>;
}