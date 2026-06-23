import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

type Importer<P> = () => Promise<{ default: ComponentType<P> } | ComponentType<P>>;

function normalize<P>(load: Importer<P>) {
  return lazy(async () => {
    const mod = await load();
    return "default" in mod ? mod : { default: mod as ComponentType<P> };
  });
}

/**
 * Mount a chunk only once its placeholder enters (or nears) the viewport.
 * Combines `IntersectionObserver` visibility-gating with `React.lazy` so the
 * JS chunk is never downloaded until needed.
 */
export function LazyOnVisible<P extends object>({
  load,
  props,
  fallback,
  rootMargin = "400px",
  minHeight,
}: {
  load: Importer<P>;
  props?: P;
  fallback?: ReactNode;
  rootMargin?: string;
  /** Optional reserved height (CSS) to prevent CLS while the chunk loads. */
  minHeight?: number | string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Comp = useRef<ReturnType<typeof normalize<P>> | null>(null);
  if (!Comp.current) Comp.current = normalize<P>(load);

  useEffect(() => {
    if (visible || !ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  const C = Comp.current;
  return (
    <div
      ref={ref}
      style={minHeight ? { minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight } : undefined}
    >
      {visible ? (
        <Suspense fallback={fallback ?? <SectionSkeleton />}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <C {...((props ?? {}) as any)} />
        </Suspense>
      ) : (
        fallback ?? <SectionSkeleton />
      )}
    </div>
  );
}

export function SectionSkeleton({ rows = 2 }: { rows?: number }) {
  return (
    <div aria-hidden className="animate-pulse space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-24 rounded-xl bg-white/[0.03]" />
      ))}
    </div>
  );
}