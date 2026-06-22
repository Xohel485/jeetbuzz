import { AffiliateCTA } from "@/components/AffiliateCTA";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-background/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
      <AffiliateCTA size="lg" variant="hero" className="w-full" position="sticky_cta" />
    </div>
  );
}