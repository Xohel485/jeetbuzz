import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-account-locked";
const TITLE = "JeetBuzz Account Locked 2026 — Reasons & How to Recover Access";
const DESC = "Why a JeetBuzz account gets locked in 2026 and how to recover it — password lockout, KYC hold, bonus abuse, multi-accounting appeals and the exact live-chat script.";

export const Route = createFileRoute("/jeetbuzz-account-locked")({
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
      eyebrow="Support"
      title={<>JeetBuzz <span className="gold-text">Account Locked</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">অ্যাকাউন্ট লকড</span></> }}
      subtitle="Every reason a JeetBuzz account gets locked and the exact steps to recover — with the script to use on live chat."
      subtitleByLocale={{ bn: "যেসব কারণে জিতবাজ অ্যাকাউন্ট লকড হয় এবং পুনরুদ্ধারের নির্দিষ্ট ধাপ — লাইভ চ্যাটে ব্যবহারের স্ক্রিপ্ট সহ।" }}
      ctaIntent="login" ctaLabel="Try Login Again"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Account Locked", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## First, which kind of lock is it",
        "There are five distinct lock states. Reading the error banner tells you which one applies.",
        "| Message | Meaning | Recovery path |",
        "|---|---|---|",
        "| \"Too many failed attempts\" | Temporary password lockout | Wait 15–30 min, use [Password Reset](/password-reset) |",
        "| \"Account pending verification\" | KYC hold | Upload / resend KYC documents |",
        "| \"Account restricted\" | Bonus abuse or unusual play | Live chat appeal with evidence |",
        "| \"Account suspended\" | Multi-accounting or fraud flag | Formal appeal, longer review |",
        "| \"Self-exclusion active\" | You (or someone with access) set it | Cannot lift until cool-off expires |",
        "## Password lockout — the fastest fix",
        "1. Wait 15 minutes without any login attempts.",
        "2. Open [Password Reset](/password-reset) and reset via phone OTP or email link.",
        "3. Log in with the new password. The lockout clears automatically.",
        "If the reset flow itself fails, see [Login Problems](/login-problems).",
        "## KYC hold — most common lock",
        "Uploaded documents were unreadable, expired, or the name did not match. Steps:",
        "1. Log in to the point where the KYC prompt appears.",
        "2. Upload a clear, colour photo of an unexpired government ID.",
        "3. Include a selfie holding the same ID (if requested).",
        "4. Submit and wait for review — usually completes within 24 hours.",
        "## Bonus-abuse or unusual-play restriction",
        "Triggered by max-bet breaches during bonus rollover, chip dumping between accounts, or heavy zero-risk hedging. Recovery is possible only through appeal:",
        "- Open live chat with your JeetBuzz account ID.",
        "- Share the transaction IDs of the flagged sessions.",
        "- Explain the play pattern briefly and honestly. Overexplaining or hostility slows the review.",
        "- Wait for a decision — this is a compliance queue, not live agents.",
        "## Multi-accounting suspension",
        "One player, one account is the rule everywhere. If two accounts share a device, IP, wallet or KYC document, both get suspended pending investigation. If the second account belongs to a family member on the same connection, be explicit about that in the appeal — the operator can whitelist per-KYC in some cases.",
        "## Self-exclusion cannot be shortened",
        "This is deliberate — self-exclusion is a responsible-gaming tool. The cool-off period must run out before support can lift it. See [Delete Account](/how-to-delete-jeetbuzz-account) for the difference between deletion, self-exclusion and cool-off.",
        "## Live-chat script that works",
        "> \"Hi — my account [USERNAME / ID] is locked with the message: [EXACT MESSAGE]. Reference: [TRANSACTION ID if any]. Can you confirm the exact reason and the required next step? I can provide [KYC / screenshots / wallet statement] if needed.\"",
        "Short, specific, evidence-ready. That is what gets a fast reply.",
      ]}
      bodyByLocale={{
        bn: [
          "## প্রথমে বুঝুন কোন ধরনের লক",
          "পাঁচটি ভিন্ন লক স্ট্যাটাস আছে। এরর ব্যানার পড়লেই বোঝা যায় কোনটি প্রযোজ্য।",
          "| মেসেজ | অর্থ | পুনরুদ্ধার পথ |",
          "|---|---|---|",
          "| \"Too many failed attempts\" | সাময়িক পাসওয়ার্ড লকআউট | ১৫–৩০ মিনিট অপেক্ষা, [Password Reset](/password-reset) |",
          "| \"Account pending verification\" | KYC হোল্ড | KYC ডকুমেন্ট আপলোড/পুনরায় পাঠান |",
          "| \"Account restricted\" | বোনাস অপব্যবহার বা অস্বাভাবিক প্লে | প্রমাণসহ লাইভ চ্যাটে আপিল |",
          "| \"Account suspended\" | মাল্টি-অ্যাকাউন্টিং বা ফ্রড ফ্ল্যাগ | আনুষ্ঠানিক আপিল, দীর্ঘতর রিভিউ |",
          "| \"Self-exclusion active\" | আপনি (বা অ্যাক্সেসধারী) সেট করেছেন | কুল-অফ শেষ না হওয়া পর্যন্ত তোলা যায় না |",
          "## পাসওয়ার্ড লকআউট — দ্রুততম সমাধান",
          "১. কোনো লগইন চেষ্টা ছাড়াই ১৫ মিনিট অপেক্ষা করুন।",
          "২. [Password Reset](/password-reset) খুলুন এবং ফোন OTP বা ইমেইল লিংকে রিসেট করুন।",
          "৩. নতুন পাসওয়ার্ডে লগইন করুন। লকআউট স্বয়ংক্রিয়ভাবে ক্লিয়ার।",
          "রিসেট ফ্লো নিজেই ব্যর্থ হলে [Login Problems](/login-problems) দেখুন।",
          "## KYC হোল্ড — সবচেয়ে সাধারণ লক",
          "আপলোড করা ডকুমেন্ট অস্পষ্ট, মেয়াদোত্তীর্ণ বা নাম মিলছে না। ধাপ:",
          "১. যতক্ষণ KYC প্রম্পট আসে ততক্ষণ লগইন করুন।",
          "২. মেয়াদহীন সরকারি আইডির স্পষ্ট, রঙিন ছবি আপলোড করুন।",
          "৩. একই আইডি ধরে সেলফি (যদি চাওয়া হয়)।",
          "৪. জমা দিন — সাধারণত ২৪ ঘণ্টার মধ্যে রিভিউ সম্পন্ন।",
          "## বোনাস-অপব্যবহার বা অস্বাভাবিক-প্লে রেস্ট্রিকশন",
          "বোনাস রোলওভারের সময় ম্যাক্স-বেট লঙ্ঘন, অ্যাকাউন্টের মাঝে চিপ ডাম্পিং, বা ভারী শূন্য-রিস্ক হেজিং দ্বারা ট্রিগার হয়। শুধু আপিলের মাধ্যমে পুনরুদ্ধার:",
          "- JeetBuzz অ্যাকাউন্ট ID সহ লাইভ চ্যাট খুলুন।",
          "- ফ্ল্যাগড সেশনের ট্রানজেকশন ID শেয়ার করুন।",
          "- সংক্ষেপে ও সৎভাবে প্লে প্যাটার্ন ব্যাখ্যা করুন। বেশি ব্যাখ্যা বা বৈরিতা রিভিউ ধীর করে।",
          "## মাল্টি-অ্যাকাউন্টিং সাসপেনশন",
          "এক প্লেয়ার এক অ্যাকাউন্ট — সব জায়গায় নিয়ম। দুটি অ্যাকাউন্ট একই ডিভাইস, IP, ওয়ালেট বা KYC ডকুমেন্ট শেয়ার করলে দুটোই তদন্তের জন্য সাসপেন্ড। দ্বিতীয় অ্যাকাউন্ট একই সংযোগে পরিবারের সদস্যের হলে আপিলে স্পষ্টভাবে বলুন — অপারেটর কিছু ক্ষেত্রে প্রতি-KYC হোয়াইটলিস্ট করতে পারে।",
          "## সেলফ-এক্সক্লুশন সংক্ষিপ্ত করা যায় না",
          "এটি ইচ্ছাকৃত — সেলফ-এক্সক্লুশন একটি রেসপন্সিবল-গেমিং টুল। সাপোর্ট তোলার আগে কুল-অফ মেয়াদ পুরোপুরি শেষ হতে হবে। ডিলিশন, সেলফ-এক্সক্লুশন ও কুল-অফের পার্থক্যের জন্য [Delete Account](/how-to-delete-jeetbuzz-account) দেখুন।",
          "## যে লাইভ-চ্যাট স্ক্রিপ্ট কাজ করে",
          "> \"হাই — আমার অ্যাকাউন্ট [USERNAME/ID] এই মেসেজ সহ লকড: [EXACT MESSAGE]। রেফারেন্স: [TRANSACTION ID]। সঠিক কারণ ও পরবর্তী প্রয়োজনীয় ধাপ নিশ্চিত করতে পারবেন? দরকার হলে [KYC/স্ক্রিনশট/ওয়ালেট স্টেটমেন্ট] দিতে পারি।\"",
          "সংক্ষিপ্ত, নির্দিষ্ট, প্রমাণ-প্রস্তুত। দ্রুত উত্তর এভাবেই আসে।",
        ],
      }}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "Why is my JeetBuzz account locked?", a: "The exact reason is on the login error banner: too many password attempts, pending KYC, restricted for bonus abuse, suspended for multi-accounting, or a self-exclusion you set earlier." },
        { q: "How long does a temporary lockout last?", a: "Usually 15–30 minutes with no further login attempts. Use [Password Reset](/password-reset) immediately after — it clears the counter." },
        { q: "Can I recover a suspended account?", a: "Sometimes. Suspensions for multi-accounting are the hardest to reverse. Open a formal appeal with your account ID and any evidence. Suspensions for bonus abuse are more often reversible when the play pattern is explained honestly." },
        { q: "Will support share the exact reason?", a: "Yes for most locks. For fraud-flagged accounts the response is intentionally vague to prevent gaming the system — you will get a decision, not a full breakdown." },
        { q: "Can I open a new account instead?", a: "No. A new account under the same KYC, device or wallet is treated as multi-accounting and suspended too. Resolve the original account through appeal." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "আমার JeetBuzz অ্যাকাউন্ট কেন লকড?", a: "সঠিক কারণ লগইন এরর ব্যানারে: অনেকবার পাসওয়ার্ড চেষ্টা, পেন্ডিং KYC, বোনাস অপব্যবহারের জন্য রেস্ট্রিকটেড, মাল্টি-অ্যাকাউন্টিংয়ের জন্য সাসপেন্ডেড, বা আগে সেট করা সেলফ-এক্সক্লুশন।" },
          { q: "সাময়িক লকআউট কতক্ষণ থাকে?", a: "সাধারণত ১৫–৩০ মিনিট, কোনো নতুন লগইন চেষ্টা ছাড়া। এরপরই [Password Reset](/password-reset) ব্যবহার করুন — এটি কাউন্টার ক্লিয়ার করে।" },
          { q: "সাসপেন্ডেড অ্যাকাউন্ট পুনরুদ্ধার হবে?", a: "কখনো কখনো। মাল্টি-অ্যাকাউন্টিংয়ের জন্য সাসপেনশন সবচেয়ে কঠিন। অ্যাকাউন্ট ID ও প্রমাণসহ আনুষ্ঠানিক আপিল খুলুন। বোনাস অপব্যবহারের সাসপেনশন সৎ ব্যাখ্যায় প্রায়ই উল্টানো যায়।" },
          { q: "সাপোর্ট কি সঠিক কারণ জানাবে?", a: "বেশিরভাগ লকের জন্য হ্যাঁ। ফ্রড-ফ্ল্যাগড অ্যাকাউন্টের জন্য সিস্টেম গেমিং ঠেকাতে উত্তর ইচ্ছাকৃত অস্পষ্ট — সিদ্ধান্ত পাবেন, পূর্ণ বিশ্লেষণ নয়।" },
          { q: "নতুন অ্যাকাউন্ট খোলা যাবে?", a: "না। একই KYC, ডিভাইস বা ওয়ালেটে নতুন অ্যাকাউন্ট মাল্টি-অ্যাকাউন্টিং হিসেবে গণ্য এবং সাসপেন্ডেড। মূল অ্যাকাউন্টই আপিলের মাধ্যমে সমাধান করুন।" },
        ],
      }}
    />
  ),
});