import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-account-verification";
const TITLE = "JeetBuzz Account Verification 2026. KYC Checklist & Fast Approval";
const DESC = "JeetBuzz account verification for 2026, the exact ID, address and selfie requirements, why documents get rejected and how to clear KYC on the first try.";

export const Route = createFileRoute("/jeetbuzz-account-verification")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH)...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Verification"
      title={<>JeetBuzz <span className="gold-text">Account Verification</span></>}
      subtitle="Clear KYC on the first try, the exact documents, the six rejection reasons that trip everyone, and how to speed up review from days to hours."
      ctaIntent="login" ctaLabel="Open Verification Panel"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Account Verification", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Why KYC exists",
        "Every licensed operator is required by anti-money-laundering (AML) regulation to verify the identity of every player before honouring a withdrawal. JeetBuzz uses a three-part KYC: government ID, proof of address, and a live selfie matched against the ID. This is not a JeetBuzz-specific hoop, the same rules bind every regulated site in the industry.",
        "The reward for clearing it once, cleanly, is that every subsequent withdrawal on the same account skips the verification step and settles at payment-rail speed.",
        "## What to prepare before starting",
        "1. **Government photo ID**. NID (Bangladesh), CNIC (Pakistan), Aadhaar or Passport (India), or Passport (any). Both sides if the ID is two-sided.",
        "2. **Address proof**, utility bill, bank statement or ISP bill, dated within the last three months, showing your full name and full address.",
        "3. **Live selfie**, a real-time photo of your face, taken during the KYC session. Not an uploaded photo from your gallery.",
        "4. **Registered phone number**, the number tied to your account for the OTP challenge.",
        "## The six real rejection reasons",
        "### 1. Photocopy or screenshot of the ID",
        "KYC requires a photograph of the physical original ID, not a scan, not a screenshot of a scan, not a photo of a screen. Photocopies and screens lack the security features (holograms, reflective ink) that verification systems check for. Fix: hold the physical ID in daylight and photograph it directly.",
        "### 2. Address proof older than three months",
        "Bills older than 90 days are automatically rejected. Fix: download a fresh statement from your bank's or utility's website, dated today, addressed to your name.",
        "### 3. Name mismatch",
        "The name on your ID, address proof, and account must all match. 'Md. Karim' on the account, 'Muhammad Karim' on the NID, and 'M. Karim' on the utility bill will trigger a review. Fix: update your account name to match the ID exactly (support can do this before your first withdrawal), and use the utility with the closest matching name.",
        "### 4. Blurry or cropped photo",
        "Every edge of the ID must be visible in the frame. Corners cropped by 'zooming in' fail. Fix: place the ID on a flat surface with good light, use a plain contrasting background, and photograph the whole document.",
        "### 5. Selfie doesn't match the ID",
        "Sunglasses, hats, filters, and heavy make-up fail the face-matching algorithm. Fix: neutral expression, no accessories, natural light, look straight into the camera.",
        "### 6. Someone else's document",
        "Using a family member's ID or wallet is the fastest route to a permanent account suspension. Fix: never, the account must be in your legal name, and the ID and payment wallet must match that name.",
        "## How long verification takes",
        "- **Automated match**, 1–10 minutes for a clean submission (clear photos, matching names).",
        "- **Manual review**, 6–24 hours if any part triggers the human queue.",
        "- **Additional documents requested**, resets the clock; expect another 6–24 hours after the follow-up upload.",
        "Doing KYC at signup rather than at first withdrawal saves the withdrawal-side wait.",
        "## Step-by-step submission",
        "1. Log in and open **Account → Verification**.",
        "2. Tap **Upload ID** and photograph the front (and back if two-sided).",
        "3. Tap **Upload Address Proof** and photograph the bill/statement.",
        "4. Start the **Live Selfie** flow, follow the on-screen prompt (turn head slightly, blink).",
        "5. Submit. Status updates land by email and in-app notification.",
        "## After approval",
        "Once verified, do not change your name, DOB, address, or phone number without opening a fresh support ticket. Any silent change flags the account for re-verification and blocks withdrawals until it clears again.",
        "## Related help",
        "- [Withdrawal Pending](/jeetbuzz-withdrawal-pending). KYC is the top reason.",
        "- [Withdrawal Guide](/withdrawal-guide), cash-out walkthrough.",
        "- [Sign Up](/jeetbuzz-sign-up), get KYC done at signup.",
        "- [Account Locked](/jeetbuzz-account-locked), recovery if KYC fails repeatedly.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. KYC is a legal requirement on the operator, not an inconvenience they invented. If gambling is causing stress, use [self-exclusion](/how-to-delete-jeetbuzz-account) before verifying, the tools are there so you can step back cleanly.",
      ]}
      bodyByLocale={{
        bn: [
          "## KYC কেন প্রয়োজন",
          "প্রতিটি লাইসেন্সপ্রাপ্ত অপারেটরকে AML নিয়ম অনুযায়ী উইথড্রয়ালের আগে প্লেয়ারের পরিচয় যাচাই করতে হয়। JeetBuzz তিন-ধাপের KYC ব্যবহার করে: সরকারি ID, ঠিকানা প্রমাণ, এবং লাইভ সেলফি। এটা শুধু JeetBuzz নয়, সব নিয়ন্ত্রিত সাইটের জন্য একই নিয়ম।",
          "একবার cleanly clear হলে পরবর্তী প্রতিটি উইথড্রয়াল KYC ধাপ skip করে payment-rail speed-এ চলে।",
          "## যা প্রস্তুত রাখবেন",
          "১. **সরকারি ফটো ID**. NID (BD), CNIC (PK), Aadhaar/Passport (IN)। দুই পাশ থাকলে দুটোই।",
          "২. **ঠিকানা প্রমাণ**, বিদ্যুৎ বিল, ব্যাংক স্টেটমেন্ট, ISP বিল, গত ৩ মাসের মধ্যে, নাম ও পূর্ণ ঠিকানা সহ।",
          "৩. **লাইভ সেলফি**. KYC session-এ real-time ছবি, gallery থেকে upload নয়।",
          "৪. **রেজিস্টার্ড ফোন নম্বর**. OTP challenge-এর জন্য।",
          "## ৬টি Rejection কারণ",
          "### ১. ID-র ফটোকপি / স্ক্রিনশট",
          "শারীরিক মূল ID-র ছবি লাগবে, স্ক্যান/স্ক্রিনশট নয়। ফটোকপিতে হলোগ্রাম/reflective ink নেই। দিনের আলোয় মূল ID ধরে ছবি তুলুন।",
          "### ২. ৩ মাসের বেশি পুরনো ঠিকানা প্রমাণ",
          "৯০ দিনের বেশি পুরনো বিল স্বয়ংক্রিয়ভাবে reject। ব্যাংক/utility ওয়েবসাইট থেকে আজকের তারিখের ফ্রেশ statement download করুন।",
          "### ৩. নাম মিসম্যাচ",
          "অ্যাকাউন্টের নাম, ID এবং utility bill, সব মিলতে হবে। 'Md. Karim' vs 'Muhammad Karim' vs 'M. Karim' review ট্রিগার করে। প্রথম উইথড্রয়ালের আগে সাপোর্টকে বলে অ্যাকাউন্ট নাম ID-র সঙ্গে হুবহু করান।",
          "### ৪. Blurry বা crop করা ছবি",
          "ID-র প্রতিটি কোণ frame-এ থাকতে হবে। Zoom করলে corner ক্রপ হয়ে fail হয়। সমতল জায়গায়, ভালো আলোয়, contrasting background-এ সম্পূর্ণ document-এর ছবি তুলুন।",
          "### ৫. সেলফি ID-র সঙ্গে মেলে না",
          "রোদচশমা, টুপি, ফিল্টার, ভারী মেকআপ face-matching-এ fail করে। নিরপেক্ষ অভিব্যক্তি, accessory-হীন, প্রাকৃতিক আলো, সরাসরি ক্যামেরায় তাকান।",
          "### ৬. অন্য কারো document",
          "পরিবারের সদস্যের ID/ওয়ালেট ব্যবহার = স্থায়ী suspension-এর দ্রুততম পথ। অ্যাকাউন্ট নিজের নামে হতে হবে; ID ও পেমেন্ট ওয়ালেটের নামও একই।",
          "## কত সময় লাগে",
          "- **Automated match**, clean submission-এ ১–১০ মিনিট।",
          "- **Manual review**, কোনো ধাপ human queue-এ গেলে ৬–২৪ ঘণ্টা।",
          "- **অতিরিক্ত document চাইলে**, clock reset, নতুন upload-এর পর আরও ৬–২৪ ঘণ্টা।",
          "সাইনআপেই KYC করলে উইথড্রয়ালের সময় বাঁচে।",
          "## ধাপে ধাপে জমা দিন",
          "১. **Account → Verification** খুলুন।",
          "২. **Upload ID** চাপুন, front (ও back) ছবি তুলুন।",
          "৩. **Upload Address Proof** চাপুন।",
          "৪. **Live Selfie** ফ্লো শুরু করুন, on-screen prompt অনুসরণ করুন (মাথা ঘোরান, চোখ পিটপিট করুন)।",
          "৫. Submit। ইমেইল ও in-app notification-এ status আসবে।",
          "## Approval-এর পর",
          "নাম, DOB, ঠিকানা, ফোন, কিছুই silent বদলাবেন না। প্রতিটি পরিবর্তন re-verification ট্রিগার করে ও উইথড্রয়াল ব্লক করে।",
          "## সম্পর্কিত সাহায্য",
          "- [Withdrawal Pending](/jeetbuzz-withdrawal-pending)",
          "- [Withdrawal Guide](/withdrawal-guide)",
          "- [Sign Up](/jeetbuzz-sign-up)",
          "- [Account Locked](/jeetbuzz-account-locked)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় অ্যাফিলিয়েট। KYC অপারেটরের আইনি বাধ্যবাধকতা। জুয়া চাপ সৃষ্টি করলে verification-এর আগে [self-exclusion](/how-to-delete-jeetbuzz-account) ব্যবহার করুন।",
        ],
      }}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "How long does JeetBuzz KYC take?", a: "A clean submission clears in 1–10 minutes via automated matching. Human review takes 6–24 hours. Fresh document requests reset the clock." },
        { q: "What if my ID name doesn't match my account name?", a: "Ask support to update your account name to match your ID before your first withdrawal. Doing this at signup avoids a rejection cycle later." },
        { q: "Is a bank statement enough for address proof?", a: "Yes, provided it's dated within the last three months and shows your full name and full address. Credit-card statements, utility bills and ISP bills also work." },
        { q: "Can I use my brother's Aadhaar / bKash?", a: "No, and doing so risks permanent account closure. The account, KYC ID, and payment wallet must all be in your own legal name." },
        { q: "Why was my selfie rejected?", a: "Common causes are sunglasses, filters, poor lighting or the photo not being taken live inside the KYC flow. Retake in daylight, without accessories, following the on-screen prompt." },
        { q: "Do I need to re-verify if I move house?", a: "You must update your address proof, yes. Support will send you a fresh KYC-address-only request rather than the full three-step flow." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "JeetBuzz KYC-তে কত সময় লাগে?", a: "Clean submission automated match-এ ১–১০ মিনিট। Human review-এ ৬–২৪ ঘণ্টা।" },
          { q: "ID ও অ্যাকাউন্ট নামে অমিল থাকলে?", a: "প্রথম উইথড্রয়ালের আগে সাপোর্টকে বলে অ্যাকাউন্ট নাম ID-র সঙ্গে মিলিয়ে নিন।" },
          { q: "ব্যাংক স্টেটমেন্ট কি ঠিকানা প্রমাণে যথেষ্ট?", a: "হ্যাঁ, গত ৩ মাসের মধ্যে হলে এবং পূর্ণ নাম ও ঠিকানা দেখালে। utility bill, ISP বিলও চলে।" },
          { q: "ভাইয়ের Aadhaar/bKash ব্যবহার করা যাবে?", a: "না। স্থায়ী অ্যাকাউন্ট বন্ধ হতে পারে। অ্যাকাউন্ট, KYC ID, পেমেন্ট ওয়ালেট, সবই নিজের নামে হতে হবে।" },
          { q: "সেলফি reject কেন?", a: "রোদচশমা, ফিল্টার, খারাপ আলো, বা gallery থেকে upload, সাধারণ কারণ। দিনের আলোয়, accessory ছাড়া, on-screen prompt অনুসরণ করে retake করুন।" },
          { q: "বাসা বদলালে re-verify?", a: "শুধু ঠিকানা প্রমাণ আপডেট করতে হবে, সম্পূর্ণ তিন-ধাপ KYC নয়।" },
        ],
      }}
    />
  ),
});