import { IMAGES, type ImageKey, imageUrl, imageObjectSchema } from "@/lib/images";
import { cn } from "@/lib/utils";

type Props = {
  imgKey: ImageKey;
  /** When true, renders eagerly with fetchpriority=high. Use for above-the-fold LCP images only. */
  priority?: boolean;
  /** CSS sizes attribute — drives which srcset width browsers pick. */
  sizes?: string;
  className?: string;
  /** Wrap in <figure> with <figcaption>. */
  caption?: boolean;
  /** Override alt text. */
  alt?: string;
  /** Emit ImageObject JSON-LD next to the image. */
  schema?: boolean;
  /** Override styling of the rendered <img>. */
  imgClassName?: string;
  /** Object-fit utility (defaults to object-cover). */
  fit?: "cover" | "contain" | "none";
};

function buildSrcset(key: ImageKey, ext: "webp" | "avif") {
  return IMAGES[key].widths.map((w) => `${imageUrl(key, w, ext)} ${w}w`).join(", ");
}

/**
 * Responsive <picture> with AVIF + WebP, intrinsic width/height to prevent CLS,
 * lazy by default, and optional figure caption + ImageObject JSON-LD.
 */
export function SmartImage({
  imgKey,
  priority = false,
  sizes = "(min-width: 1024px) 800px, 100vw",
  className,
  imgClassName,
  caption = false,
  alt,
  schema = false,
  fit = "cover",
}: Props) {
  const img = IMAGES[imgKey];
  const largest = img.widths[img.widths.length - 1];

  const picture = (
    <picture>
      <source type="image/avif" srcSet={buildSrcset(imgKey, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcset(imgKey, "webp")} sizes={sizes} />
      <img
        src={imageUrl(imgKey, largest, "webp")}
        alt={alt ?? img.alt}
        title={img.title}
        width={img.w}
        height={img.h}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "h-auto w-full",
          fit === "cover" && "object-cover",
          fit === "contain" && "object-contain",
          imgClassName,
        )}
      />
    </picture>
  );

  const body = caption ? (
    <figure className={cn("overflow-hidden", className)}>
      {picture}
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">
        {img.caption}
      </figcaption>
    </figure>
  ) : (
    <div className={cn("overflow-hidden", className)}>{picture}</div>
  );

  if (!schema) return body;
  return (
    <>
      {body}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema(imgKey)) }}
      />
    </>
  );
}