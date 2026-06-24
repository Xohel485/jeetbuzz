import { useEffect, useState } from "react";

/**
 * Elegant PWA install hub for /download.
 *
 * Behavior:
 *  - Captures `beforeinstallprompt` and shows a polished modal 1500ms later.
 *  - Falls back to "Add to Home Screen" instructions on iOS Safari.
 *  - 30-day cooldown via localStorage (key: gjb-pwa-prompt-dismissed).
 *  - Hidden entirely when already running standalone (installed PWA).
 *  - No blocking JS, no CLS: nothing renders until the timer fires.
 */

const DISMISS_KEY = "gjb-pwa-prompt-dismissed";
const COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000;

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  const mq = window.matchMedia?.("(display-mode: standalone)").matches;
  // @ts-expect-error iOS Safari only
  const iosStandalone = window.navigator.standalone === true;
  return Boolean(mq || iosStandalone);
}

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !/crios|fxios/i.test(navigator.userAgent);
}

function recentlyDismissed(): boolean {
  try {
    const v = localStorage.getItem(DISMISS_KEY);
    if (!v) return false;
    return Date.now() - parseInt(v, 10) < COOLDOWN_MS;
  } catch {
    return false;
  }
}

function dismiss() {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

export function PWAInstallPrompt() {
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  const [mode, setMode] = useState<"hidden" | "native" | "ios">("hidden");

  // Capture beforeinstallprompt as early as possible (still on client mount).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isStandalone()) return;
    if (recentlyDismissed()) return;

    let captured: BIPEvent | null = null;
    const onBIP = (e: Event) => {
      e.preventDefault();
      captured = e as BIPEvent;
      setEvt(captured);
    };
    window.addEventListener("beforeinstallprompt", onBIP);

    const timer = window.setTimeout(() => {
      if (captured) setMode("native");
      else if (isIOS()) setMode("ios");
    }, 1500);

    const onInstalled = () => {
      setMode("hidden");
      setEvt(null);
    };
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBIP);
      window.removeEventListener("appinstalled", onInstalled);
      window.clearTimeout(timer);
    };
  }, []);

  async function handleInstall() {
    if (!evt) return;
    try {
      await evt.prompt();
      await evt.userChoice;
    } catch {
      /* user cancelled */
    }
    dismiss();
    setMode("hidden");
    setEvt(null);
  }

  function handleClose() {
    dismiss();
    setMode("hidden");
  }

  if (mode === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gjb-pwa-title"
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
    >
      <div className="glass relative w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close install prompt"
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-white/5 hover:text-foreground"
        >
          ×
        </button>
        <h2 id="gjb-pwa-title" className="text-lg font-semibold text-foreground">
          Install GetJeetBuzz Web App
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {mode === "native"
            ? "Add GetJeetBuzz to your home screen for one-tap access, faster loading and a clean full-screen experience."
            : "On iPhone, install GetJeetBuzz from Safari for a native-feeling app icon on your home screen."}
        </p>
        {mode === "native" ? (
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={handleInstall}
              className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Install
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-white/5"
            >
              Not now
            </button>
          </div>
        ) : (
          <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
            <li>Tap the Share icon (square with arrow) at the bottom of Safari.</li>
            <li>Scroll down and tap <strong className="text-foreground">Add to Home Screen</strong>.</li>
            <li>Confirm the name and tap <strong className="text-foreground">Add</strong>.</li>
          </ol>
        )}
        <p className="mt-4 text-[11px] uppercase tracking-wide text-muted-foreground/70">
          Works on Chrome, Edge, Samsung Internet and Safari.
        </p>
      </div>
    </div>
  );
}

export default PWAInstallPrompt;