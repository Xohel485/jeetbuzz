import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SectionHeader } from "./SectionHeader";

const FAQ = [
  {
    q: "Is this the official JeetBuzz website?",
    a: "No — GetJeetBuzz.com is not the JeetBuzz platform itself. We are a verified affiliate partner of JeetBuzz, meaning we have a real commission agreement with them, but account signup, login, deposits and withdrawals all happen on JeetBuzz's own platform, not here.",
  },
  {
    q: "Is JeetBuzz legal in Bangladesh?",
    a: "Online betting sits in a gray area in Bangladesh. JeetBuzz operates under an offshore license. Always check local laws and bet responsibly.",
  },
  {
    q: "How do I register?",
    a: "Follow our step-by-step Registration Guide. You'll need a phone number, an email and a payment method like bKash or Nagad.",
  },
  {
    q: "How do bonuses work?",
    a: "JeetBuzz offers a welcome bonus and recurring promotions, each with wagering requirements. See our Bonus Guide for terms.",
  },
];

export default function FAQSection() {
  return (
    <>
      <section className="container-pro mt-24 md:mt-32">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {FAQ.map((f) => (
            <div key={f.q} className="glass p-6">
              <h3 className="flex items-start gap-2.5 text-base font-semibold leading-snug">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                {f.q}
              </h3>
              <p className="mt-3 pl-[30px] text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pro mt-20 md:mt-28">
        <AffiliateDisclosure />
      </section>

      <section className="container-pro mt-16">
        <SectionHeader
          eyebrow="JeetBuzz Bangladesh"
          title="The complete JeetBuzz guide for Bangladesh"
          desc="Bengali-first, no-fluff explanations of how JeetBuzz works for players in Dhaka, Chattogram, Sylhet, Rajshahi and beyond."
        />
        <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
          <div className="space-y-3">
            <p>
              JeetBuzz বাংলাদেশের সবচেয়ে পরিচিত অনলাইন স্পোর্টসবুক ও ক্যাসিনো
              ব্র্যান্ডগুলোর একটি — Curaçao অফশোর লাইসেন্সে পরিচালিত, ২৪/৭ বাংলা
              লাইভ চ্যাট সাপোর্ট, এবং BPL, IPL ও আন্তর্জাতিক ক্রিকেটে গভীর মার্কেট
              কভারেজ। এটাই দক্ষিণ এশিয়ার ক্রিকেট-ফোকাসড প্লেয়ারদের কাছে JeetBuzz এর
              মূল আকর্ষণ।
            </p>
            <p>
              GetJeetBuzz হল JeetBuzz এর একটি verified affiliate partner —
              অর্থাৎ JeetBuzz এর সাথে আমাদের সরাসরি কমিশন এগ্রিমেন্ট আছে, কিন্তু
              আমরা JeetBuzz প্ল্যাটফর্ম নই। আমরা সরাসরি বাংলাদেশ থেকে অ্যাকাউন্ট
              খুলি, bKash দিয়ে ডিপোজিট করি, BPL ও IPL ম্যাচে লাইভ বেট করি, নিজেই
              উইথড্রয়াল টেস্ট করি — তারপর সেগুলো বাংলায় ও ইংরেজিতে লিখি।
            </p>
            <p>
              আপনি যদি একদম নতুন হন, প্রথমে আমাদের{" "}
              <Link to="/registration-guide" className="text-primary hover:underline">JeetBuzz Registration Guide</Link>{" "}
              পড়ুন। ইতিমধ্যে অ্যাকাউন্ট থাকলে{" "}
              <Link to="/login-guide" className="text-primary hover:underline">Login Guide</Link>{" "}
              দেখুন। ডিপোজিটের জন্য{" "}
              <Link to="/bkash-guide" className="text-primary hover:underline">bKash</Link>,{" "}
              <Link to="/nagad-guide" className="text-primary hover:underline">Nagad</Link>{" "}
              অথবা{" "}
              <Link to="/rocket-guide" className="text-primary hover:underline">Rocket</Link>{" "}
              গাইড আছে।
            </p>
          </div>
          <div className="space-y-3">
            <p>
              For English readers: JeetBuzz operates under an offshore license and
              serves Bangladesh, Pakistan and India with full Bengali, Hindi and
              Urdu support. The strongest verticals are cricket (BPL, IPL,
              internationals), live casino with Bengali-speaking dealers, and a
              competitive slots library. Mobile-first design means most players
              spend their time inside the Android APK or the iOS web app.
            </p>
            <p>
              GetJeetBuzz is a verified affiliate partner of JeetBuzz —
              we earn commission on a revenue-share basis when readers sign up
              through our outbound links. That said, GetJeetBuzz.com is not the
              JeetBuzz platform itself: account signup, deposits and withdrawals
              all happen on JeetBuzz's own site. Our role is to document the
              process honestly from a real Bangladesh player's perspective. See
              our <Link to="/review-policy" className="text-primary hover:underline">Review Policy</Link>{" "}
              for how the affiliate relationship is kept separate from our
              editorial scoring.
            </p>
            <p>
              Read our{" "}
              <Link to="/jeetbuzz-review" className="text-primary hover:underline">JeetBuzz Review</Link>{" "}
              for the full editor verdict, the{" "}
              <Link to="/bonus-and-promotions" className="text-primary hover:underline">Bonus Guide</Link>{" "}
              for current welcome offers, and the{" "}
              <Link to="/live-cricket-betting" className="text-primary hover:underline">Live Cricket Betting</Link>{" "}
              guide before you place your first BPL bet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}