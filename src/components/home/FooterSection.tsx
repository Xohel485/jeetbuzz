import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";

const TOPICAL = [
  { to: "/jeetbuzz-review", label: "JeetBuzz Review" },
  { to: "/registration-guide", label: "Registration" },
  { to: "/login-guide", label: "Login" },
  { to: "/apk-download-guide", label: "APK Download" },
  { to: "/mobile-app-guide", label: "Mobile App" },
  { to: "/bonus-and-promotions", label: "Bonuses" },
  { to: "/vip-program", label: "VIP Program" },
  { to: "/live-cricket-betting", label: "Live Cricket" },
  { to: "/sports-betting", label: "Sports Betting" },
  { to: "/casino-guide", label: "Casino" },
  { to: "/payment-methods", label: "Payment Methods" },
  { to: "/deposit-guide", label: "Deposit" },
  { to: "/withdrawal-guide", label: "Withdrawal" },
  { to: "/bkash-guide", label: "bKash" },
  { to: "/nagad-guide", label: "Nagad" },
  { to: "/rocket-guide", label: "Rocket" },
  { to: "/security-guide", label: "Security" },
  { to: "/affiliate-program", label: "Affiliate" },
  { to: "/affiliate-login", label: "Affiliate Login" },
  { to: "/responsible-gaming", label: "Responsible Gaming" },
];

export default function FooterSection() {
  return (
    <>
      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader eyebrow="Topical hubs" title="Browse every JeetBuzz topic" />
        <div className="mt-10 grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TOPICAL.map((l) => (
            <Link
              key={l.to}
              to={l.to as never}
              className="glass block px-5 py-3.5 text-center font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground md:text-left"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader eyebrow="What to play" title="Sports vs Casino vs Live — quick comparison" />
        <div className="glass mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Vertical</th>
                <th className="px-4 py-3 font-medium">Best for</th>
                <th className="px-4 py-3 font-medium">House edge</th>
                <th className="px-4 py-3 font-medium">Bonus wagering</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sportsbook (cricket)", "Knowledge-led bettors", "Low (2–5%)", "Counts 100%"],
                ["Casino slots", "Casual / fun", "Medium (3–8%)", "Usually full"],
                ["Live casino", "Skill + atmosphere", "Varies (1–10%)", "Often reduced"],
              ].map(([v, b, h, w], i) => (
                <tr key={v} className={i % 2 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-3 font-semibold text-foreground">{v}</td>
                  <td className="px-4 py-3">{b}</td>
                  <td className="px-4 py-3">{h}</td>
                  <td className="px-4 py-3">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-pro mt-20 md:mt-28">
        <SectionHeader eyebrow="How we work" title="Why trust GetJeetBuzz" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            { t: "Tested in Bangladesh", d: "We sign up, deposit and cash out from Dhaka. Every guide carries a verified date." },
            { t: "Independent scoring", d: "Affiliate commissions never change scores. Read our Review Policy." },
            { t: "18+ and responsible", d: "Every page carries responsible-gaming reminders. Set deposit limits before you start." },
          ].map((c) => (
            <div key={c.t} className="glass p-6">
              <h3 className="text-base font-semibold md:text-lg">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground md:justify-start">
          <Link to="/editorial-policy" className="hover:text-foreground">Editorial Policy</Link>
          <Link to="/review-policy" className="hover:text-foreground">Review Policy</Link>
          <Link to="/fact-checking" className="hover:text-foreground">Fact-Checking</Link>
          <Link to="/update-policy" className="hover:text-foreground">Update Policy</Link>
          <Link to="/content-policy" className="hover:text-foreground">Content Policy</Link>
          <Link to="/affiliate-disclosure" className="hover:text-foreground">Affiliate Disclosure</Link>
        </div>
      </section>
    </>
  );
}