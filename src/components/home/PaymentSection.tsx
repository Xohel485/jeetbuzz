import { Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { GameCategories } from "@/components/GameCategories";
import { PaymentMethods } from "@/components/PaymentMethods";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { SectionHeader } from "./SectionHeader";

const QUICK_FACTS: Array<[string, string]> = [
  ["Brand", "JeetBuzz"],
  ["Target markets", "Bangladesh, Pakistan, India"],
  ["Licensing", "Curaçao offshore eGaming licence"],
  ["Support", "24/7 live chat — Bengali, Hindi, Urdu, English"],
  ["Languages", "Bengali, English, Hindi, Urdu"],
  ["Mobile app", "Android APK via official JeetBuzz site"],
  ["Popular payments", "bKash, Nagad, Rocket, UPI, JazzCash"],
  ["Cricket coverage", "BPL, IPL, PSL, T20 WC, internationals"],
];

export default function PaymentSection() {
  return (
    <>
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="Game categories"
          title="Every JeetBuzz game category in one place"
          desc="From cricket and live casino to crash, fishing, lottery and arcade — explore every JeetBuzz vertical Bangladesh, Pakistan and India players actually use."
        />
        <GameCategories />
        <div className="mt-10 flex justify-center">
          <AffiliateCTA size="lg" variant="hero" label="Play on JeetBuzz" />
        </div>
      </section>

      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader
          eyebrow="Payments"
          title="Deposit & withdraw with the methods you already use"
          desc="JeetBuzz supports local Bangladeshi banks, international wallets and crypto — pick what fits your speed, fee and convenience needs."
        />
        <div className="mt-10">
          <PaymentMethods />
        </div>
        <div className="mt-8 flex justify-center md:justify-start">
          <AffiliateCTA size="lg" variant="emerald" label="See deposit guide" />
        </div>
      </section>

      <section className="container-pro mt-14 md:mt-20">
        <SectionHeader
          eyebrow="JeetBuzz at a glance"
          title="The numbers behind JeetBuzz"
          desc={`Operator-reported figures across Bangladesh, Pakistan and India. Last verified ${LAST_VERIFIED} — always confirm current terms on the official JeetBuzz site.`}
        />
        <div className="glass mt-10 overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {QUICK_FACTS.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-white/[0.02]" : ""}>
                  <th className="w-1/3 px-5 py-4 text-left font-medium text-muted-foreground">{k}</th>
                  <td className="px-5 py-4 text-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-center md:justify-start">
          <AffiliateCTA size="lg" variant="emerald" />
        </div>
      </section>

      <section className="container-pro mt-14 md:mt-20">
        <SectionHeader
          eyebrow="Mobile payments"
          title="bKash · Nagad · Rocket — the Bangladesh trio"
          desc="Three local wallets cover 95%+ of JeetBuzz deposits in Bangladesh. Here is how they compare."
        />
        <div className="glass mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Wallet</th>
                <th className="px-4 py-3 font-medium">Deposit speed</th>
                <th className="px-4 py-3 font-medium">Withdrawal speed</th>
                <th className="px-4 py-3 font-medium">Min</th>
                <th className="px-4 py-3 font-medium">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["bKash", "Instant", "Minutes – hours", "200 BDT", "Default Bangladesh pick"],
                ["Nagad", "Instant", "Within an hour", "200 BDT", "Backup to bKash"],
                ["Rocket", "Instant – 5 min", "Within an hour", "200 BDT", "Agent network access"],
              ].map(([w, d, wd, m, b], i) => (
                <tr key={w} className={i % 2 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-3 font-semibold text-foreground">{w}</td>
                  <td className="px-4 py-3">{d}</td>
                  <td className="px-4 py-3">{wd}</td>
                  <td className="px-4 py-3">{m}</td>
                  <td className="px-4 py-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          For full step-by-step screenshots, see the{" "}
          <Link to="/bkash-guide" className="text-primary hover:underline">bKash</Link>,{" "}
          <Link to="/nagad-guide" className="text-primary hover:underline">Nagad</Link> and{" "}
          <Link to="/rocket-guide" className="text-primary hover:underline">Rocket</Link> guides.
        </p>
      </section>
    </>
  );
}