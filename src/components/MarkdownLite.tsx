import type { ReactNode } from "react";

// Tiny renderer for the BlogPost.body line array.
// Supports: "## heading", "- list item", "> quote", "1. ordered", paragraph.
export function MarkdownLite({ lines }: { lines: string[] }) {
  const out: ReactNode[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  const flush = () => {
    if (!list) return;
    if (list.type === "ul") {
      out.push(
        <ul key={out.length} className="list-disc space-y-1 pl-6 text-muted-foreground">
          {list.items.map((t, i) => <li key={i}>{t}</li>)}
        </ul>,
      );
    } else {
      out.push(
        <ol key={out.length} className="list-decimal space-y-1 pl-6 text-muted-foreground">
          {list.items.map((t, i) => <li key={i}>{t}</li>)}
        </ol>,
      );
    }
    list = null;
  };

  lines.forEach((raw, idx) => {
    const line = raw.trim();
    if (line.startsWith("## ")) {
      flush();
      out.push(
        <h2 key={idx} className="mt-8 text-xl font-semibold text-foreground md:text-2xl">
          {line.slice(3)}
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
        <blockquote key={idx} className="border-l-2 border-primary/60 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground">
          {line.slice(2)}
        </blockquote>,
      );
    } else if (line.length) {
      flush();
      out.push(<p key={idx} className="text-muted-foreground">{line}</p>);
    }
  });
  flush();
  return <div className="space-y-4">{out}</div>;
}