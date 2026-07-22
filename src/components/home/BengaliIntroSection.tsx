import { Link } from "@tanstack/react-router";

/**
 * Bangla-language intro block for the root English homepage. Adds ~400 words
 * of native Bengali content so BD-geo users landing on `/` get context in
 * their own language, and Google reads real Bengali content on the root URL.
 * Rendered as `localExtras` right after Hero, before the hub link strip.
 */
export function BengaliIntroSection() {
  return (
    <section
      className="container-pro mt-12 md:mt-16"
      lang="bn"
      aria-labelledby="bn-intro-heading"
    >
      <div className="glass p-6 md:p-10">
        <p className="text-[11px] uppercase tracking-[0.16em] text-primary/80">
          বাংলাদেশ থেকে পড়ছেন?
        </p>
        <h2
          id="bn-intro-heading"
          className="mt-3 text-2xl font-bold leading-tight md:text-3xl"
        >
          জেতাবাজ সম্পর্কে বিস্তারিত — বাংলাদেশি প্লেয়ারদের জন্য
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            JeetBuzz একটি অফশোর অনলাইন বেটিং প্ল্যাটফর্ম যা Curaçao লাইসেন্সের
            অধীনে পরিচালিত হয় এবং বাংলাদেশ, পাকিস্তান ও ভারতের প্লেয়ারদের
            জন্য বিশেষভাবে ডিজাইন করা। এখানে লাইভ ক্রিকেট বেটিং (BPL, IPL,
            PSL, Asia Cup), স্পোর্টসবুক, লাইভ ক্যাসিনো, স্লট এবং Aviator-এর
            মতো crash গেম পাওয়া যায়।
          </p>
          <p>
            অনেকে JetBuzz, Jeet Buzz বা JeetBuz লিখে সার্চ করেন — সঠিক
            নামটি হলো JeetBuzz। বাংলায় জিতবাজ, জেতবাজ বা জিত বাজ — সবই
            একই ব্র্যান্ডের ভিন্ন বানান।
          </p>
          <p>
            বাংলাদেশি ব্যবহারকারীদের জন্য JeetBuzz-এর সবচেয়ে বড় সুবিধা হলো
            লোকাল পেমেন্ট মেথড সমর্থন — bKash, Nagad এবং Rocket দিয়ে সরাসরি
            টাকা ডিপোজিট ও উইথড্র করা যায়। ন্যূনতম ডিপোজিট মাত্র ৩০০ টাকা এবং
            verified account-এ উইথড্রয়াল সাধারণত ১৫-৬০ মিনিটের মধ্যে সম্পন্ন
            হয়। KYC (NID যাচাই) সম্পন্ন থাকলে withdrawal দ্রুত হয়, এবং
            মিথ্যা তথ্য দিলে account block হতে পারে।
          </p>
          <p>
            GetJeetBuzz কোনো অফিসিয়াল JeetBuzz সাইট নয় — আমরা একটি স্বাধীন
            গাইড ও অ্যাফিলিয়েট পার্টনার। আমাদের কাজ হলো নিরপেক্ষ তথ্য দেওয়া
            যাতে আপনি সচেতনভাবে সিদ্ধান্ত নিতে পারেন। সাইটে সব লিংক verified
            অফিসিয়াল JeetBuzz destination-এ যায়, কোনো mirror বা fake সাইটে
            নয়। এখানে প্রকাশিত সব commission ও promo তথ্য cashier-এ দেখানো
            terms-এর সাথে ক্রস-চেক করা।
          </p>
          <p>
            শুরু করার আগে অন্তত ৩টি গাইড পড়ে নেওয়া উচিত —{" "}
            <Link to="/registration-guide" className="text-primary underline-offset-4 hover:underline">
              রেজিস্ট্রেশন গাইড
            </Link>
            , <Link to="/deposit-guide" className="text-primary underline-offset-4 hover:underline">
              ডিপোজিট গাইড
            </Link>{" "}
            এবং{" "}
            <Link to="/welcome-bonus" className="text-primary underline-offset-4 hover:underline">
              ওয়েলকাম বোনাস
            </Link>
            । ক্রিকেট বেটিং শুরু করার আগে{" "}
            <Link to="/live-cricket-betting" className="text-primary underline-offset-4 hover:underline">
              লাইভ ক্রিকেট গাইড
            </Link>{" "}
            পড়ে নিন — এতে odds কীভাবে পড়তে হয়, কখন cash-out নেওয়া উচিত
            এবং IPL/BPL-এর শেষ পাঁচ ওভারের volatility কীভাবে কাজে লাগানো যায়
            সব বিস্তারিত পাবেন।
          </p>
          <p>
            দায়িত্বশীল বেটিং সবসময় প্রথম অগ্রাধিকার। যতটুকু হারালে আপনার
            মাসিক বাজেটে প্রভাব পড়বে না, ঠিক ততটুকুই বেট করুন। বেটিং কোনো
            আয়ের উৎস নয়, এটি একটি entertainment। সমস্যা মনে হলে JeetBuzz-এর
            self-exclusion অপশন ব্যবহার করুন অথবা আমাদের{" "}
            <Link to="/responsible-gaming" className="text-primary underline-offset-4 hover:underline">
              রেসপন্সিবল গেমিং
            </Link>{" "}
            পেজ দেখুন।
          </p>
        </div>
      </div>
    </section>
  );
}

export default BengaliIntroSection;