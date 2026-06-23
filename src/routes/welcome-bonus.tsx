import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { SIGNUP_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/welcome-bonus")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Welcome Bonus — How to Claim Safely (2026) | GetJeetBuzz" },
      { name: "description", content: "JeetBuzz welcome bonus — current offer, wagering requirements, max-bet rule, eligible games and the right way to claim from BD, PK and IN." },
      { property: "og:title", content: "JeetBuzz Welcome Bonus — How to Claim Safely" },
      { property: "og:description", content: "How to claim and clear the JeetBuzz welcome bonus without voiding it." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("bonus") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("bonus") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Welcome Bonus</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">ওয়েলকাম বোনাস</span></>,
        ur: <>JeetBuzz <span className="gold-text">ویلکم بونس</span></>,
        hi: <>JeetBuzz <span className="gold-text">वेलकम बोनस</span></>,
      }}
      subtitle="The welcome bonus looks generous in the banner. This page shows what the small print actually means, and the order of operations that lets you keep your winnings."
      subtitleByLocale={{
        bn: "ব্যানারে ওয়েলকাম বোনাস বড় দেখায়। এখানে শর্তগুলো বাস্তবে কী মানে এবং উইনিংস রাখার সঠিক ক্রম দেখানো হলো।",
        ur: "بینر پر ویلکم بونس بڑا لگتا ہے۔ یہاں شرائط کا اصل مطلب اور جیتی رقم بچانے کا درست طریقہ بتایا گیا ہے۔",
        hi: "बैनर पर वेलकम बोनस बड़ा दिखता है। यहाँ शर्तों का असली मतलब और जीती हुई रकम बचाने का सही तरीक़ा बताया गया है।",
      }}
      ctaLabel="Claim the Welcome Bonus"
      heroImage="bonus"
      body={[
        "## What the offer usually looks like",
        "JeetBuzz typically runs a 100% deposit-match bonus up to a cap, separately for Sports and Casino. You pick one at signup — you can't double-claim.",
        "## The 4 numbers you must check",
        "1. **Wagering multiplier** — most JeetBuzz bonuses sit around 15x. A 1,000 BDT bonus needs ~15,000 BDT of qualifying bets before it (and any winnings) can be withdrawn.",
        "2. **Max bet while bonus is active** — usually capped at a small amount per bet. Going over voids the bonus.",
        "3. **Game contribution** — sports and most slots count 100%. Live casino often counts 10% or less, which silently triples your real wagering on those games.",
        "4. **Expiry window** — usually 7–30 days from activation. Unfinished wagering after expiry forfeits the bonus.",
        "## The right order of operations",
        "1. Read the current T&Cs on the JeetBuzz promotions page (offers change).",
        "2. Deposit at least the minimum qualifying amount via a bonus-eligible method (some e-wallets are excluded — check first).",
        "3. Opt in BEFORE you place your first bet. Bonuses are not retroactive.",
        "4. Play within the max-bet cap until wagering is cleared.",
        "5. Withdraw — the bonus and any winnings are now real cash.",
        "## When to skip the bonus",
        "If you bet large stakes, the max-bet rule will frustrate you. Skip the bonus, deposit as normal, and withdraw freely.",
        "> Promotions change frequently — confirm the current offer on the official JeetBuzz site before depositing.",
      ]}
      faqs={[
        { q: "Can I claim both the sports and casino welcome bonus?", a: "No. JeetBuzz lets you pick one at signup. Pick the product you'll actually play." },
        { q: "Do bKash, Nagad and UPI all qualify for the bonus?", a: "Usually yes, but the current promotions page lists exact eligible methods — always re-check before depositing, as the list changes." },
        { q: "What happens if I withdraw before wagering is complete?", a: "JeetBuzz forfeits the bonus and any winnings derived from it. Your original deposit (minus any bets placed) is returned." },
      ]}
      related={siblings(SIGNUP_CLUSTER, "/welcome-bonus")}
      articleHeadline="JeetBuzz Welcome Bonus — How to Claim Safely"
      articleDescription="Wagering, max-bet, game contribution and the right order to claim the JeetBuzz welcome bonus."
      articlePath="/welcome-bonus"
    />
  ),
});