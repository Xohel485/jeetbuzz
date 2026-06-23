// SEO-rich image catalog. Sizes correspond to generated files in /public/img/.
// Each entry has both webp and avif variants at the listed widths.

export type ImageMeta = {
  /** Filename slug — files live at /img/{name}-{w}.{webp|avif} */
  name: string;
  /** Available pre-rendered widths */
  widths: number[];
  /** Intrinsic aspect ratio width / height — used for width/height attrs to avoid CLS */
  w: number;
  h: number;
  alt: string;
  title: string;
  caption: string;
  /** Schema.org ImageObject description */
  description: string;
};

export const IMAGES = {
  hero: {
    name: "hero-jeetbuzz-bangladesh-guide",
    widths: [480, 768, 1125],
    w: 1125,
    h: 1455,
    alt: "JeetBuzz Bangladesh login, signup and live cricket betting guide hero",
    title: "JeetBuzz Bangladesh — Login, Signup & Live Cricket",
    caption: "JeetBuzz — official guide for Bangladesh, Pakistan and India.",
    description:
      "Hero artwork for the JeetBuzz Bangladesh guide covering login, signup, bonuses and live cricket betting.",
  },
  loginInterface: {
    name: "jeetbuzz-login-interface",
    widths: [480, 768, 1200],
    w: 3264,
    h: 1268,
    alt: "JeetBuzz login interface for Bangladesh players",
    title: "JeetBuzz Login Interface",
    caption: "Preview of the official JeetBuzz login screen.",
    description: "Screenshot of the JeetBuzz login interface used by Bangladesh players.",
  },
  security: {
    name: "jeetbuzz-security-settings",
    widths: [480, 542],
    w: 542,
    h: 750,
    alt: "JeetBuzz account security settings panel",
    title: "JeetBuzz Security Settings",
    caption: "JeetBuzz security settings — enable 2FA and change password.",
    description: "JeetBuzz account security settings showing password and 2FA controls.",
  },
  registration: {
    name: "jeetbuzz-registration-page",
    widths: [430],
    w: 430,
    h: 918,
    alt: "JeetBuzz registration page for Bangladesh users",
    title: "JeetBuzz Registration Page",
    caption: "Illustration: JeetBuzz registration process for Bangladesh.",
    description: "JeetBuzz registration form used by new Bangladesh players.",
  },
  androidApp: {
    name: "jeetbuzz-android-app",
    widths: [480, 768, 1200],
    w: 1920,
    h: 1440,
    alt: "JeetBuzz Android app — APK download and install guide",
    title: "JeetBuzz Android App (APK)",
    caption: "Preview of the JeetBuzz Android mobile application.",
    description: "JeetBuzz Android APK app preview for Bangladesh players.",
  },
  iosSlots: {
    name: "jeetbuzz-ios-app-slots",
    widths: [370],
    w: 370,
    h: 690,
    alt: "JeetBuzz iOS app slots lobby on iPhone",
    title: "JeetBuzz iOS App — Slots",
    caption: "JeetBuzz iOS app showing the slots lobby.",
    description: "JeetBuzz iOS app screenshot showing the slots game lobby.",
  },
  iosCasino: {
    name: "jeetbuzz-ios-app-casino",
    widths: [370],
    w: 370,
    h: 690,
    alt: "JeetBuzz iOS app live casino lobby on iPhone",
    title: "JeetBuzz iOS App — Live Casino",
    caption: "JeetBuzz iOS app showing the live casino lobby.",
    description: "JeetBuzz iOS app screenshot showing the live casino lobby.",
  },
  casinoLogin: {
    name: "jeetbuzz-casino-login",
    widths: [480, 768, 960],
    w: 960,
    h: 600,
    alt: "JeetBuzz live casino login screen",
    title: "JeetBuzz Live Casino Login",
    caption: "JeetBuzz live casino login and lobby preview.",
    description: "JeetBuzz live casino login screen with table game preview.",
  },
  liveCricket: {
    name: "jeetbuzz-live-cricket-betting",
    widths: [480, 768, 960],
    w: 960,
    h: 1200,
    alt: "JeetBuzz live cricket betting markets — BPL, IPL and internationals",
    title: "JeetBuzz Live Cricket Betting",
    caption: "JeetBuzz live cricket betting markets across BPL, IPL and internationals.",
    description: "JeetBuzz live cricket betting markets including BPL, IPL and international fixtures.",
  },
  bonus: {
    name: "jeetbuzz-bonus-promotions",
    widths: [480, 768, 867],
    w: 867,
    h: 1047,
    alt: "JeetBuzz bonus and promotions for Bangladesh players",
    title: "JeetBuzz Bonuses & Promotions",
    caption: "JeetBuzz welcome bonus and recurring promotions overview.",
    description: "JeetBuzz welcome bonus, reload offers and free bet promotions for South Asia.",
  },
  affiliate: {
    name: "jeetbuzz-affiliate-program",
    widths: [224],
    w: 224,
    h: 224,
    alt: "JeetBuzz affiliate program logo",
    title: "JeetBuzz Affiliate Program",
    caption: "JeetBuzz affiliate program — revenue share and CPA.",
    description: "JeetBuzz affiliate program emblem promoting revenue share and CPA partnership.",
  },
} as const satisfies Record<string, ImageMeta>;

export type ImageKey = keyof typeof IMAGES;

const BASE = "https://getjeetbuzz.com";

export function imageUrl(key: ImageKey, width?: number, ext: "webp" | "avif" = "webp") {
  const img = IMAGES[key];
  const w = width ?? img.widths[img.widths.length - 1];
  return `/img/${img.name}-${w}.${ext}`;
}

export function imageAbsoluteUrl(key: ImageKey, width?: number, ext: "webp" | "avif" = "webp") {
  return BASE + imageUrl(key, width, ext);
}

/** Build JSON-LD ImageObject for a given image key. */
export function imageObjectSchema(key: ImageKey, pageUrl?: string) {
  const img = IMAGES[key];
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: imageAbsoluteUrl(key),
    url: imageAbsoluteUrl(key),
    thumbnailUrl: imageAbsoluteUrl(key, img.widths[0]),
    name: img.title,
    caption: img.caption,
    description: img.description,
    width: img.w,
    height: img.h,
    license: pageUrl ?? `${BASE}/affiliate-disclosure`,
    creator: { "@type": "Organization", name: "GetJeetBuzz" },
    copyrightHolder: { "@type": "Organization", name: "GetJeetBuzz" },
  };
}

export const IMAGE_KEYS = Object.keys(IMAGES) as ImageKey[];