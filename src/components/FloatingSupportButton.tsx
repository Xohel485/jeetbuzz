import { useState } from "react";
import { HelpCircle, X, MessageSquare, Mail } from "lucide-react";

export function FloatingSupportButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-20 right-4 z-30 lg:bottom-6 lg:right-6">
      {open && (
        <div className="glass mb-3 w-64 p-4 text-sm">
          <div className="flex items-center justify-between">
            <strong className="text-foreground">Need help?</strong>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            We are an editorial guide — not JeetBuzz support. For account
            issues use JeetBuzz live chat. For editorial questions:
          </p>
          <a
            href="mailto:editorial@getjeetbuzz.com"
            className="mt-3 flex items-center gap-2 text-xs text-primary hover:underline"
          >
            <Mail className="size-3" /> editorial@getjeetbuzz.com
          </a>
          <a
            href="/contact"
            className="mt-1 flex items-center gap-2 text-xs text-primary hover:underline"
          >
            <MessageSquare className="size-3" /> Open contact page
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open support"
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105"
      >
        <HelpCircle className="size-6" />
      </button>
    </div>
  );
}