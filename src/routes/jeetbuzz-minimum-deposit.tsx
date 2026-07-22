import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/jeetbuzz-minimum-deposit";
const TITLE = "JeetBuzz Minimum Deposit 2026. BDT 100 First, BDT 200 Recurring";
const DESC = "JeetBuzz minimum deposit in 2026. BDT 100 first deposit, BDT 200 recurring, per-rail thresholds across bKash, Nagad, Rocket, USDT, and how bonuses shift the minimum.";

export const Route = createFileRoute("/jeetbuzz-minimum-deposit")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Payments"
      title={<>JeetBuzz <span className="gold-text">Minimum Deposit</span></>}
      subtitle="The 2026 minimum deposit rules. BDT 100 first, BDT 200 recurring, exact thresholds per rail, and how bonus offers change the floor you actually have to hit."
      ctaIntent="signup" ctaLabel="Open Deposit Page"
      breadcrumbs={[{ name: "Payments", path: "/payments" }, { name: "Minimum Deposit", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## The single-line answer",
        "**BDT 100 for your first deposit, BDT 200 for every deposit after that.** That is the base minimum across the standard JeetBuzz cashier for Bangladesh accounts in 2026. Rails add their own floors on top, and any bonus offer can raise the effective minimum higher than the base.",
        "This page explains the three layers, base minimum, per-rail minimum, and bonus minimum, and shows which one applies to your specific deposit.",
        "## Layer 1, base minimum",
        "The base minimum is the amount JeetBuzz's cashier accepts regardless of payment method. It exists to keep tiny deposits from clogging manual reconciliation and to make sure any bonus attached to a first deposit clears a sensible threshold.",
        "- **First deposit**: BDT 100. This is intentionally low so a new player can try the platform without committing much.",
        "- **Recurring deposit**: BDT 200. Slightly higher because most active players top up rather than trial.",
        "- **After KYC upgrade**: unchanged. KYC lifts caps at the top, not the floor.",
        "## Layer 2, per-rail minimum",
        "Some payment rails have their own floor. When the rail floor is higher than the base minimum, the rail wins.",
        "| Rail | Minimum deposit | Notes |",
        "|---|---|---|",
        "| bKash (Personal / Merchant) | BDT 100 | Matches the base. See [bKash Deposit](/jeetbuzz-bkash-deposit). |",
        "| Nagad | BDT 100 | Matches the base. |",
        "| Rocket | BDT 200 | Slightly higher due to rail settlement cost. |",
        "| Local bank transfer | BDT 500 | IFT-side minimums. |",
        "| USDT (TRC-20) | USD 10 (~BDT 1,200) | Network fee makes anything smaller uneconomic. |",
        "For payout thresholds and timing, see [Withdrawal Time](/jeetbuzz-withdrawal-time), the withdrawal minimum on each rail differs from the deposit minimum.",
        "## Layer 3, bonus minimum",
        "Every bonus offer specifies a minimum qualifying deposit. If you want the bonus to trigger, you have to meet that minimum in a single deposit, splitting into smaller amounts won't stack.",
        "Typical bonus minimums:",
        "- **Welcome / first-deposit bonus**, often BDT 500 to unlock 100% match up to BDT 15,000. See [First Deposit Bonus](/jeetbuzz-first-deposit-bonus) for the exact current rule.",
        "- **Reload / weekend bonus**, usually BDT 500–1,000.",
        "- **Cashback offers**, no minimum to trigger, but a minimum wagered amount typically applies.",
        "- **Promo code offers**, the code page states its own minimum; see [Promo Code](/jeetbuzz-promo-code).",
        "If you skip the bonus and just want to play, the base and rail minimums apply, you can deposit BDT 100 on bKash without opting into any promotion.",
        "## What counts as 'first deposit'",
        "A first deposit is the very first cash you send to a newly created JeetBuzz account. Notes:",
        "- One first deposit per account. A second account created by the same person doesn't unlock a fresh first-deposit minimum, duplicate accounts violate the terms and are subject to closure.",
        "- A failed or reversed first deposit doesn't 'use up' the first-deposit slot. The next successful deposit is still counted as first.",
        "- Bonus opt-in must happen before or at the moment of the first deposit, you can't retro-apply a first-deposit bonus after the money already cleared.",
        "## Common misunderstandings",
        "- **'The minimum is BDT 500'**, that's usually the bonus minimum, not the base. Without a bonus, BDT 100 works.",
        "- **'Small deposits are slower'**, no. A BDT 100 bKash deposit clears at the same speed as a BDT 10,000 one.",
        "- **'Two small deposits stack to hit the bonus minimum'**, no. Bonus minimums must be met in a single deposit.",
        "- **'The minimum went up after KYC'**, no. KYC only lifts caps at the top. The floor is constant.",
        "## When to skip the minimum entirely",
        "If you're trying JeetBuzz for the first time, the BDT 100 minimum is intentionally low so you can play a single sports market or a few slot spins before committing more. Treat that as your test budget, not as your bankroll, the base minimum exists so you can learn the deposit flow, the game feel and the cashier, not so you can chase losses in BDT 100 increments.",
        "Use [self-exclusion](/how-to-delete-jeetbuzz-account) if any deposit is stressful. The minimum is a floor, not a suggestion.",
        "## Related pages",
        "- [bKash Deposit](/jeetbuzz-bkash-deposit), the full bKash walkthrough.",
        "- [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal), cash-out via Nagad.",
        "- [Withdrawal Time](/jeetbuzz-withdrawal-time), timing and minimum on the payout side.",
        "- [First Deposit Bonus](/jeetbuzz-first-deposit-bonus), how the bonus minimum differs from the base.",
        "- [Deposit Failed](/jeetbuzz-deposit-failed), recovery when money left but never credited.",
        "- [Deposit Guide](/deposit-guide), the pillar page for deposits.",
        "- [Payments Hub](/payments), every payment rail across BD, PK, IN.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. Minimum-deposit thresholds reflect the 2026 standard for Bangladesh accounts and may be adjusted for specific promotions or region tiers. Treat the JeetBuzz cashier as the live source of truth for your account, and never chase losses at any deposit amount.",
      ]}
      bodyByLocale={{
        bn: [
          "## এক লাইনের উত্তর",
          "**প্রথম deposit BDT ১০০, এরপর প্রতিটি BDT ২০০।** ২০২৬-এ বাংলাদেশ account-এর standard JeetBuzz cashier-এ base minimum এটাই। রেল এর উপরে নিজস্ব floor যোগ করে; bonus offer effective minimum আরো বাড়াতে পারে।",
          "এই পেজ তিনটি স্তর ব্যাখ্যা করে, base, per-rail, bonus, এবং আপনার নির্দিষ্ট deposit-এ কোনটি প্রযোজ্য দেখায়।",
          "## Layer 1. Base minimum",
          "Payment method যাই হোক, JeetBuzz cashier যে amount গ্রহণ করে। ছোট deposit-এ manual reconciliation চাপ কমানো ও first-deposit bonus-এর জন্য।",
          "- **প্রথম deposit**: BDT ১০০। নতুন player যাতে ছোট amount-এ trial করতে পারে।",
          "- **পরবর্তী deposit**: BDT ২০০। active player সাধারণত top-up করেন।",
          "- **KYC upgrade-এর পর**: অপরিবর্তিত। KYC উপরের cap বাড়ায়, floor নয়।",
          "## Layer 2. Per-rail minimum",
          "কিছু রেলের নিজস্ব floor আছে। রেল floor base-এর চেয়ে বেশি হলে রেল জিতবে।",
          "| রেল | Minimum | নোট |",
          "|---|---|---|",
          "| bKash (Personal/Merchant) | BDT ১০০ | Base-এর সাথে match। [bKash Deposit](/jeetbuzz-bkash-deposit) দেখুন। |",
          "| Nagad | BDT ১০০ | Base match। |",
          "| Rocket | BDT ২০০ | রেল settlement cost একটু বেশি। |",
          "| Local bank transfer | BDT ৫০০ | IFT-side minimum। |",
          "| USDT (TRC-20) | USD ১০ (~BDT ১,২০০) | Network fee-এর কারণে ছোট uneconomic। |",
          "Withdrawal threshold ও timing [Withdrawal Time](/jeetbuzz-withdrawal-time) দেখুন, withdrawal minimum deposit minimum থেকে আলাদা।",
          "## Layer 3. Bonus minimum",
          "প্রতিটি bonus offer-এর qualifying minimum আছে। Bonus trigger করতে single deposit-এ সেটা মিলাতে হবে, ভাগ করে stack হয় না।",
          "সাধারণ bonus minimum:",
          "- **Welcome/first-deposit bonus**, সাধারণত BDT ৫০০ ১০০% match unlock করতে (BDT ১৫,০০০ পর্যন্ত)। বর্তমান নিয়ম [First Deposit Bonus](/jeetbuzz-first-deposit-bonus)।",
          "- **Reload/weekend bonus**, সাধারণত BDT ৫০০–১,০০০।",
          "- **Cashback**, trigger-এ minimum নেই, তবে minimum wagered amount থাকে।",
          "- **Promo code offer**, code page-এর নিজস্ব minimum; [Promo Code](/jeetbuzz-promo-code)।",
          "Bonus না নিয়ে শুধু খেলতে চাইলে base ও রেল minimum প্রযোজ্য, bKash-এ BDT ১০০ deposit করতে পারবেন।",
          "## 'First deposit' কী গণনায়",
          "নতুন JeetBuzz account-এ পাঠানো একদম প্রথম টাকা।",
          "- প্রতি account-এ একটি first deposit। একই ব্যক্তির দ্বিতীয় account নতুন first-deposit unlock করে না, duplicate account terms লঙ্ঘন।",
          "- Failed/reversed first deposit slot 'use up' করে না। পরের successful deposit-ই first।",
          "- Bonus opt-in first deposit-এর আগে বা সেই মুহূর্তে, টাকা clear হওয়ার পর retro-apply হয় না।",
          "## সাধারণ ভুল ধারণা",
          "- **'Minimum BDT ৫০০'**, সেটা সাধারণত bonus minimum, base নয়। Bonus ছাড়া BDT ১০০।",
          "- **'ছোট deposit ধীর'**, না। BDT ১০০ bKash BDT ১০,০০০-এর মতোই দ্রুত।",
          "- **'দুটি ছোট deposit stack হয়'**, না। Bonus minimum single deposit-এ।",
          "- **'KYC-এর পর minimum বাড়ে'**, না। KYC শুধু cap বাড়ায়।",
          "## Minimum সম্পূর্ণ এড়ানো উচিত কখন",
          "প্রথমবার JeetBuzz ট্রাই করলে BDT ১০০ ইচ্ছাকৃতভাবে কম, একটি sports market বা কয়েকটি slot spin খেলে বড় commitment-এর আগে দেখুন। সেটা test budget, bankroll নয়, base minimum আপনাকে deposit flow, game feel, cashier শিখাতে, BDT ১০০ increment-এ loss chase করতে নয়।",
          "কোনো deposit চাপ সৃষ্টি করলে [self-exclusion](/how-to-delete-jeetbuzz-account)। Minimum floor, suggestion নয়।",
          "## সম্পর্কিত পেজ",
          "- [bKash Deposit](/jeetbuzz-bkash-deposit)",
          "- [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal)",
          "- [Withdrawal Time](/jeetbuzz-withdrawal-time)",
          "- [First Deposit Bonus](/jeetbuzz-first-deposit-bonus)",
          "- [Deposit Failed](/jeetbuzz-deposit-failed)",
          "- [Deposit Guide](/deposit-guide)",
          "- [Payments Hub](/payments)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় affiliate। Minimum-deposit threshold ২০২৬-এর বাংলাদেশ account-এর standard; বিশেষ promotion/region tier-এ পরিবর্তন সম্ভব। JeetBuzz cashier live source of truth; কোনো amount-এ loss chase নয়।",
        ],
      }}
      related={[
        { to: "/jeetbuzz-bkash-deposit", title: "bKash Deposit", desc: "Full bKash deposit walkthrough." },
        { to: "/jeetbuzz-nagad-withdrawal", title: "Nagad Withdrawal", desc: "End-to-end Nagad cash-out." },
        { to: "/jeetbuzz-withdrawal-time", title: "Withdrawal Time", desc: "Expected timing tables per rail." },
        { to: "/jeetbuzz-first-deposit-bonus", title: "First Deposit Bonus", desc: "How the bonus minimum differs from base." },
        { to: "/jeetbuzz-deposit-failed", title: "Deposit Failed", desc: "Debited but not credited, recovery." },
        { to: "/deposit-guide", title: "Deposit Guide", desc: "Pillar page for JeetBuzz deposits." },
        { to: "/payments", title: "Payments Hub", desc: "Every payment rail across BD, PK, IN." },
        { to: "/help", title: "Help Center", desc: "Support pillar, deposits, withdrawals, appeals." },
      ]}
      faqs={[
        { q: "What is the JeetBuzz minimum deposit in 2026?", a: "BDT 100 for the first deposit and BDT 200 for every subsequent deposit. Some rails and bonus offers raise the effective minimum higher." },
        { q: "Why is the bonus minimum higher than BDT 100?", a: "Bonus offers set their own qualifying threshold, typically BDT 500 for a welcome or reload bonus, to make sure the bonus math works. Without a bonus, BDT 100 is enough." },
        { q: "Can I combine two small deposits to unlock a bonus?", a: "No. Bonus minimums must be met in a single deposit. Splitting doesn't stack toward the qualifying amount." },
        { q: "Is the BDT 100 minimum the same across bKash, Nagad and Rocket?", a: "bKash and Nagad both accept BDT 100. Rocket sets its own BDT 200 minimum due to rail settlement costs." },
        { q: "Does KYC change the minimum deposit?", a: "No. KYC lifts the upper cap but the floor stays the same. A verified and an unverified account both start at BDT 100 for the first deposit." },
        { q: "What's the minimum USDT deposit?", a: "Approximately USD 10 (~BDT 1,200). Smaller USDT deposits are uneconomic because of the TRC-20 network fee." },
        { q: "If my first deposit fails, is my BDT 100 first-deposit slot used up?", a: "No. A failed or reversed first deposit doesn't count. The next successful deposit is still treated as first." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "২০২৬-এ JeetBuzz minimum deposit কত?", a: "প্রথম BDT ১০০, পরের প্রতিটি BDT ২০০। কিছু রেল ও bonus offer effective minimum বাড়ায়।" },
          { q: "Bonus minimum BDT ১০০-এর বেশি কেন?", a: "Bonus offer-এর নিজস্ব qualifying threshold, সাধারণত welcome/reload-এ BDT ৫০০। Bonus ছাড়া BDT ১০০ যথেষ্ট।" },
          { q: "দুটি ছোট deposit combine করে bonus unlock?", a: "না। Bonus minimum single deposit-এ। Split stack হয় না।" },
          { q: "bKash/Nagad/Rocket-এ BDT ১০০ minimum একই?", a: "bKash ও Nagad-এ BDT ১০০। Rocket-এ BDT ২০০ (রেল settlement cost)।" },
          { q: "KYC কি minimum deposit বদলায়?", a: "না। KYC উপরের cap বাড়ায়, floor অপরিবর্তিত।" },
          { q: "USDT-এর minimum?", a: "প্রায় USD ১০ (~BDT ১,২০০)। TRC-20 network fee-র কারণে ছোট uneconomic।" },
          { q: "প্রথম deposit fail হলে first-deposit slot কি ব্যবহৃত?", a: "না। Failed/reversed first deposit গণনায় নেই। পরের successful deposit-ই first।" },
        ],
      }}
    />
  ),
});