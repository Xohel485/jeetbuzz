import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { AFFILIATE_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-affiliate-dashboard";
const TITLE = "JeetBuzz Affiliate Dashboard 2026. Reports, Metrics & Payouts";
const DESC = "Complete walkthrough of the JeetBuzz affiliate dashboard for 2026, clicks, registrations, FTDs, active players, weekly NGR, commission tier and payout history.";

export const Route = createFileRoute("/jeetbuzz-affiliate-dashboard")({
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
      eyebrow="Affiliate"
      title={<>JeetBuzz <span className="gold-text">Affiliate Dashboard</span></>}
      subtitle="Every metric the JeetBuzz affiliate dashboard exposes in 2026, how to read it, which numbers actually predict commission, and how to catch tracking issues before payout."
      ctaIntent="partners" ctaLabel="Open Affiliate Dashboard"
      breadcrumbs={[{ name: "Affiliate", path: "/affiliate-program" }, { name: "Dashboard", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## What the dashboard actually shows",
        "The JeetBuzz affiliate dashboard is a real-time reporting surface for a single partner account. It aggregates the traffic you send through your tracking link, matches registrations back to that link, watches which of those registrations turn into paying players, and calculates the weekly net gaming revenue (NGR) you're paid on. Every number on the dashboard traces back to a click event that touched your unique `?ref=<code>` parameter.",
        "Rather than dumping every metric on one screen, the dashboard is organized into four blocks: **Traffic**, **Conversion**, **Revenue**, and **Payout**. Each block corresponds to a different stage of the funnel, and each stage has its own diagnostic pattern.",
        "## Traffic metrics",
        "- **Clicks**, every unique visit to your tracking link. Fingerprinted per device, so a player refreshing the page ten times is one click, not ten.",
        "- **Unique clicks**, clicks minus deduplication over 24 hours. This is the number the platform uses when calculating click-through-to-signup ratios.",
        "- **Impressions** (banner partners only), how many times a JeetBuzz banner rendered on your site. Doesn't apply to link/APK partners.",
        "- **Bounce rate**, the percentage of clicks that never opened a second page. Anything above 75% usually points to a mistargeted campaign, the audience clicked but didn't recognise the brand.",
        "A healthy dashboard shows clicks concentrated in one or two source campaigns rather than spread thin across dozens. Use the **UTM breakdown** to see which of your posts, videos or ad placements drove the visit, the ones with the highest FTD conversion are the ones to double down on.",
        "## Conversion metrics",
        "- **Registrations**, accounts that completed signup after clicking your link. Attribution window is 30 days by default.",
        "- **First-Time Depositors (FTDs)**, of those registrations, how many actually funded the wallet and placed at least one bet. This is the single most predictive number on the dashboard.",
        "- **FTD rate** = FTDs ÷ Registrations. Solid partners see 25–45%.",
        "- **Registration rate** = Registrations ÷ Clicks. 3–8% is normal for warm traffic; below 1% usually means the landing page or offer didn't match what your audience expected.",
        "The dashboard flags any drop of more than 30% week-over-week. If FTDs suddenly halve while clicks stay flat, check whether a payment rail (bKash, Nagad) had an outage, half of new depositors abandon signup when the first deposit attempt fails.",
        "## Revenue metrics. NGR and how it's calculated",
        "Commission at JeetBuzz is paid on **Net Gaming Revenue (NGR)**, not gross bets. The formula the dashboard uses is:",
        "`NGR = Gross Gaming Revenue − Bonuses − Payment processing fees − Chargebacks − Platform fees`.",
        "The dashboard shows each component so you can see why a big week of bets translated to a smaller commission. Bonus-heavy players usually produce lower NGR because the bonus cost sits on the affiliate side of the ledger.",
        "The **Active Player** count is the number of your referred players who placed a real-money bet in the current week. Weekly commission depends on both active player count and total NGR, see [Commission Rate](/jeetbuzz-affiliate-commission).",
        "## Payout metrics",
        "- **Current period NGR**, your live running total for the current week.",
        "- **Tier progress bar**, how close you are to the next commission tier (25% → 35% → 45% → 60%).",
        "- **Pending balance**, commission that has been accrued but not yet paid out.",
        "- **Available balance**, commission cleared and ready to withdraw. See [Payment Methods](/jeetbuzz-affiliate-payment-methods) for withdrawal rails.",
        "- **Payout history**, every past withdrawal with transaction reference, method and status.",
        "Payouts run weekly. See [Withdrawal Time](/jeetbuzz-withdrawal-time) for expected processing windows across BD payment methods.",
        "## The five dashboard sanity checks every partner should run weekly",
        "1. **Clicks stable but FTD zero for 48 hours**, tracking may be broken. Test your link in an incognito window and confirm the `?ref=` parameter is still attached at signup.",
        "2. **Sudden click spike from one source**, check for bot traffic. Bots inflate clicks without ever converting and can trigger a manual review.",
        "3. **Registration rate below 1%**, the landing page or offer is misaligned. Try a different creative or a different destination.",
        "4. **FTD rate below 15%**, the audience isn't ready to deposit. Warm them up with product education or send them to a specific bonus page like [First Deposit Bonus](/jeetbuzz-first-deposit-bonus).",
        "5. **NGR much lower than expected**, chargebacks or bonus abuse are eating margin. The dashboard surfaces both, investigate the top three players by bonus consumption.",
        "## How data is refreshed",
        "Click and registration data are near real-time (5–10 minute delay). FTDs update within 30 minutes of the first deposit clearing. NGR figures update hourly during play and settle overnight after the daily reconciliation. The weekly period closes Sunday 23:59 UTC and commission for that week appears in the payout balance the following Wednesday.",
        "## Troubleshooting a broken dashboard",
        "If the dashboard shows zero clicks despite active promotion:",
        "- Confirm you are using the tracking link from **Dashboard → Tools → Get Link**, not an old link from a previous campaign.",
        "- Ensure the link isn't being shortened by a service that strips URL parameters (some shorteners drop `?ref=`).",
        "- Test the link in an incognito browser, it should land on JeetBuzz with the ref cookie set.",
        "- Check the dashboard timezone matches yours; a UTC dashboard viewed at 2am local can look empty for the current day.",
        "If clicks show but registrations don't attribute, contact your affiliate manager with the tested link and a click timestamp, attribution can be corrected retroactively within the same weekly period.",
        "## Related affiliate pages",
        "- [Commission Rate](/jeetbuzz-affiliate-commission), how NGR translates into a 25%–60% share.",
        "- [Payment Methods](/jeetbuzz-affiliate-payment-methods), where your payout actually lands.",
        "- [Partner Login](/jeetbuzz-partner-login), how to sign in to the dashboard.",
        "- [Affiliate Withdrawal](/jeetbuzz-affiliate-withdrawal), weekly payout schedule and minimums.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. Dashboard metrics described here reflect standard industry patterns for revenue-share programs. Actual field names, refresh cadence and thresholds may change; treat the live dashboard as the source of truth for your account.",
      ]}
      bodyByLocale={{
        bn: [
          "## ড্যাশবোর্ডে আসলে কী দেখানো হয়",
          "JeetBuzz affiliate dashboard একটি একক পার্টনার অ্যাকাউন্টের real-time রিপোর্টিং সারফেস। এটা আপনার tracking link দিয়ে আসা ট্রাফিক aggregate করে, registration match করে, paying player-এ রূপান্তর দেখে এবং সাপ্তাহিক NGR হিসাব করে যেটার উপর আপনার commission দেয়া হয়। প্রতিটি সংখ্যা আপনার unique `?ref=<code>` parameter-এ ফিরে যায়।",
          "ড্যাশবোর্ড চার ব্লকে সাজানো: **Traffic**, **Conversion**, **Revenue**, **Payout**, প্রতিটি funnel-এর আলাদা স্তর।",
          "## Traffic metric",
          "- **Clicks**, tracking link-এ প্রতিটি unique visit। Device অনুযায়ী fingerprinted।",
          "- **Unique clicks**, ২৪ ঘণ্টায় deduplicated। click-to-signup ratio এই সংখ্যায় হিসাব হয়।",
          "- **Impressions**, শুধু banner partner-দের জন্য।",
          "- **Bounce rate**, ৭৫%-এর বেশি হলে audience mistargeted।",
          "সুস্থ ড্যাশবোর্ডে ক্লিক ১–২টা campaign-এ concentrated থাকে। **UTM breakdown** থেকে সবচেয়ে বেশি FTD আনা post/video চিহ্নিত করুন।",
          "## Conversion metric",
          "- **Registrations**, signup সম্পন্ন করা অ্যাকাউন্ট। default ৩০ দিনের attribution window।",
          "- **FTDs (First-Time Depositors)**, যারা wallet fund করে অন্তত একটি bet রেখেছে। সবচেয়ে গুরুত্বপূর্ণ সংখ্যা।",
          "- **FTD rate** = FTDs ÷ Registrations। ভালো পার্টনার ২৫–৪৫% দেখে।",
          "- **Registration rate** = Registrations ÷ Clicks। warm traffic-এ ৩–৮% স্বাভাবিক; ১%-এর নিচে হলে landing page/offer mismatch।",
          "সপ্তাহে ৩০%-এর বেশি drop হলে dashboard flag করে। ক্লিক অপরিবর্তিত থাকলেও FTD অর্ধেক হলে bKash/Nagad outage যাচাই করুন।",
          "## Revenue metric. NGR হিসাব",
          "Commission gross bet-এ নয়, **Net Gaming Revenue (NGR)**-এ দেওয়া হয়:",
          "`NGR = Gross Gaming Revenue − Bonus − Payment fee − Chargeback − Platform fee`।",
          "Bonus-heavy player-রা কম NGR তৈরি করে কারণ bonus খরচ affiliate side-এ বসে।",
          "**Active Player** সংখ্যা = চলতি সপ্তাহে real-money bet রাখা referred player-এর সংখ্যা। commission নির্ভর করে active player count এবং total NGR-এর উপর, দেখুন [Commission Rate](/jeetbuzz-affiliate-commission)।",
          "## Payout metric",
          "- **Current period NGR**, চলতি সপ্তাহের live রানিং টোটাল।",
          "- **Tier progress bar**, পরবর্তী tier-এর দূরত্ব (25% → 35% → 45% → 60%)।",
          "- **Pending balance**, accrued কিন্তু not yet paid।",
          "- **Available balance**, cleared, withdraw-ready। রেল দেখুন [Payment Methods](/jeetbuzz-affiliate-payment-methods)।",
          "- **Payout history**, প্রতিটি অতীত withdrawal, reference, method, status।",
          "সাপ্তাহিক payout; সময় দেখুন [Withdrawal Time](/jeetbuzz-withdrawal-time)।",
          "## প্রতি সপ্তাহে ৫টি sanity check",
          "১. **ক্লিক আছে, ৪৮ ঘণ্টা FTD শূন্য**, tracking broken হতে পারে। incognito-তে link test করুন।",
          "২. **হঠাৎ ক্লিক spike**, bot traffic হতে পারে। bot ক্লিক inflate করে, convert করে না।",
          "৩. **Registration rate ১%-এর নিচে**, landing page/offer misalign।",
          "৪. **FTD rate ১৫%-এর নিচে**, audience ready নয়। warm up করে [First Deposit Bonus](/jeetbuzz-first-deposit-bonus)-এ পাঠান।",
          "৫. **NGR প্রত্যাশার তুলনায় অনেক কম**, chargeback বা bonus abuse margin খাচ্ছে। ড্যাশবোর্ডে উভয়ই দৃশ্যমান।",
          "## Data refresh",
          "ক্লিক ও registration ~৫–১০ মিনিটে আপডেট। FTD ৩০ মিনিটে। NGR ঘণ্টায় আপডেট, রাতে reconcile। সাপ্তাহিক period রবিবার ২৩:৫৯ UTC-তে বন্ধ; সেই সপ্তাহের commission পরের বুধবার payout balance-এ আসে।",
          "## ভাঙা ড্যাশবোর্ড ঠিক করা",
          "সক্রিয় প্রচারে ক্লিক শূন্য দেখালে:",
          "- **Dashboard → Tools → Get Link** থেকে ফ্রেশ tracking link নিন।",
          "- এমন shortener এড়ান যা URL parameter কেটে দেয়।",
          "- incognito-তে link test, ref cookie set হচ্ছে কিনা দেখুন।",
          "- Dashboard timezone আপনার সাথে মেলান।",
          "ক্লিক এলেও registration attribute না হলে tested link ও click timestamp সহ affiliate manager-কে জানান, সপ্তাহের ভেতরে retroactively ঠিক করা যায়।",
          "## সম্পর্কিত পেজ",
          "- [Commission Rate](/jeetbuzz-affiliate-commission)",
          "- [Payment Methods](/jeetbuzz-affiliate-payment-methods)",
          "- [Partner Login](/jeetbuzz-partner-login)",
          "- [Affiliate Withdrawal](/jeetbuzz-affiliate-withdrawal)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় affiliate। বর্ণিত metric revenue-share program-এর সাধারণ industry pattern। Field name, refresh cadence, threshold পরিবর্তন হতে পারে; লাইভ ড্যাশবোর্ডই আপনার অ্যাকাউন্টের truth।",
        ],
      }}
      related={siblings(AFFILIATE_CLUSTER, PATH)}
      faqs={[
        { q: "How often does the JeetBuzz affiliate dashboard update?", a: "Clicks and registrations refresh every 5–10 minutes. FTDs update within 30 minutes. NGR settles overnight after daily reconciliation. Weekly period closes Sunday 23:59 UTC." },
        { q: "Why do my clicks show but no registrations?", a: "Usually a broken tracking link, a URL shortener stripped the ?ref= parameter, or an old link is still in circulation. Test the link in incognito and confirm the ref cookie is set on the landing page." },
        { q: "What is NGR and why is it lower than the bets I see?", a: "NGR = Gross Gaming Revenue − bonuses − payment fees − chargebacks − platform fees. Big bet volume can produce small NGR if bonus consumption is heavy." },
        { q: "Can I export dashboard data to CSV?", a: "Yes, every report block has an Export button that produces a CSV of the current time range. Use it for tax reporting or your own analytics dashboard." },
        { q: "How is an 'Active Player' counted?", a: "A referred player who placed at least one real-money bet during the current weekly period. Deposits without a bet don't count as active." },
        { q: "Why did my dashboard suddenly show zero FTDs for two days?", a: "Most often a payment rail outage, half of new depositors abandon signup when their first deposit attempt fails. Check whether bKash or Nagad had a reported outage." },
        { q: "How long is the attribution window?", a: "30 days by default. A user who clicks your link today and signs up within 30 days is still attributed to your account." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Dashboard কতক্ষণ পর পর আপডেট হয়?", a: "Click ও registration ৫–১০ মিনিটে। FTD ৩০ মিনিটে। NGR রাতে settle। সাপ্তাহিক period রবিবার ২৩:৫৯ UTC-তে বন্ধ।" },
          { q: "Click দেখা যাচ্ছে কিন্তু registration নেই কেন?", a: "সাধারণত tracking link broken, shortener ?ref= কেটে দিয়েছে বা পুরনো link চলছে। incognito-তে test করুন।" },
          { q: "NGR কী এবং bet-এর চেয়ে কম কেন?", a: "NGR = Gross Gaming Revenue − bonus − payment fee − chargeback − platform fee। Bonus বেশি খেলে NGR কমে।" },
          { q: "Dashboard data CSV-তে export করা যায়?", a: "হ্যাঁ, প্রতিটি report block-এ Export button আছে। কর ও নিজস্ব analytics-এ ব্যবহারযোগ্য।" },
          { q: "'Active Player' কীভাবে গণনা হয়?", a: "চলতি সপ্তাহে অন্তত একটি real-money bet রাখা referred player। শুধু deposit যথেষ্ট নয়।" },
          { q: "হঠাৎ দুই দিন FTD শূন্য কেন?", a: "প্রায়ই payment rail outage, bKash/Nagad-এ সমস্যা হলে নতুন depositor-এর অর্ধেক signup ছেড়ে যায়।" },
          { q: "Attribution window কতদিন?", a: "default ৩০ দিন। আজ ক্লিক করে ৩০ দিনে signup করলে আপনার account-এ attribute হবে।" },
        ],
      }}
    />
  ),
});