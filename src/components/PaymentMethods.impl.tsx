import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import { track } from "@/lib/analytics";
import { countryFromPathname } from "@/lib/i18n";
import pubali from "@/assets/payments/pubali-bank.webp.asset.json";
import dbbl from "@/assets/payments/dutch-bangla-bank.webp.asset.json";
import islami from "@/assets/payments/islami-bank.webp.asset.json";
import city from "@/assets/payments/city-bank.webp.asset.json";
import litecoin from "@/assets/payments/litecoin.webp.asset.json";
import usdt from "@/assets/payments/usdt.webp.asset.json";
import payoneer from "@/assets/payments/payoneer.webp.asset.json";
import gpay from "@/assets/payments/google-pay.webp.asset.json";
import bitcoin from "@/assets/payments/bitcoin.webp.asset.json";
import binance from "@/assets/payments/binance.webp.asset.json";
import bkash from "@/assets/payments/bkash.webp.asset.json";
import rocket from "@/assets/payments/rocket.webp.asset.json";
import upay from "@/assets/payments/upay.webp.asset.json";
import tap from "@/assets/payments/tap.webp.asset.json";
import surecash from "@/assets/payments/surecash.webp.asset.json";
import ipay from "@/assets/payments/ipay.webp.asset.json";
import okwallet from "@/assets/payments/okwallet.webp.asset.json";
import bankDeposit from "@/assets/payments/bank-deposit.webp.asset.json";
import easypaisa from "@/assets/payments/easypaisa.webp.asset.json";
import jazzcash from "@/assets/payments/jazz-cash.webp.asset.json";
import phonepe from "@/assets/payments/phonepe.webp.asset.json";
import upi from "@/assets/payments/upi.webp.asset.json";

type Method = {
  key: string;
  name: string;
  img: string;
  alt: string;
  to: string;
};

type Group = {
  title: string;
  desc: string;
  to: string;
  dark?: boolean;
  methods: Method[];
};

const GROUPS: Group[] = [
  {
    title: "Mobile wallets — Bangladesh",
    desc: "bKash, Rocket, Upay and other BDT wallets — deposit in seconds.",
    to: "/deposit-guide",
    dark: true,
    methods: [
      { key: "bkash", name: "bKash", img: bkash.url, alt: "bKash — JeetBuzz mobile wallet deposit (Bangladesh)", to: "/bkash-guide" },
      { key: "rocket", name: "Rocket", img: rocket.url, alt: "Rocket DBBL — JeetBuzz mobile wallet deposit (Bangladesh)", to: "/rocket-guide" },
      { key: "upay", name: "Upay", img: upay.url, alt: "Upay — JeetBuzz mobile wallet deposit (Bangladesh)", to: "/deposit-guide" },
      { key: "tap", name: "Tap", img: tap.url, alt: "Tap — JeetBuzz mobile wallet deposit (Bangladesh)", to: "/deposit-guide" },
      { key: "surecash", name: "SureCash", img: surecash.url, alt: "SureCash — JeetBuzz mobile wallet deposit (Bangladesh)", to: "/deposit-guide" },
      { key: "ipay", name: "iPay", img: ipay.url, alt: "iPay — JeetBuzz mobile wallet deposit (Bangladesh)", to: "/deposit-guide" },
      { key: "okwallet", name: "OK Wallet", img: okwallet.url, alt: "OK Wallet by ONE Bank — JeetBuzz deposit (Bangladesh)", to: "/deposit-guide" },
    ],
  },
  {
    title: "Bank transfer",
    desc: "Direct deposit & NEFT from major Bangladeshi banks.",
    to: "/deposit-guide",
    methods: [
      { key: "pubali", name: "Pubali Bank", img: pubali.url, alt: "Pubali Bank PLC — JeetBuzz bank deposit option", to: "/deposit-guide" },
      { key: "dbbl", name: "Dutch-Bangla Bank", img: dbbl.url, alt: "Dutch-Bangla Bank — JeetBuzz bank deposit option", to: "/deposit-guide" },
      { key: "islami", name: "Islami Bank", img: islami.url, alt: "Islami Bank Bangladesh PLC — JeetBuzz bank deposit option", to: "/deposit-guide" },
      { key: "city", name: "City Bank", img: city.url, alt: "City Bank — JeetBuzz bank deposit option", to: "/deposit-guide" },
      { key: "bank-deposit", name: "Bank Deposit", img: bankDeposit.url, alt: "Branch bank deposit — JeetBuzz funding option", to: "/deposit-guide" },
    ],
  },
  {
    title: "Mobile wallets — Pakistan",
    desc: "Easypaisa and JazzCash for instant PKR deposits.",
    to: "/deposit-guide",
    dark: true,
    methods: [
      { key: "easypaisa", name: "Easypaisa", img: easypaisa.url, alt: "Easypaisa — JeetBuzz mobile wallet deposit (Pakistan)", to: "/deposit-guide" },
      { key: "jazzcash", name: "JazzCash", img: jazzcash.url, alt: "JazzCash — JeetBuzz mobile wallet deposit (Pakistan)", to: "/deposit-guide" },
    ],
  },
  {
    title: "UPI & wallets — India",
    desc: "UPI and PhonePe for instant INR deposits across India.",
    to: "/payment-methods",
    dark: true,
    methods: [
      { key: "upi", name: "UPI", img: upi.url, alt: "UPI — JeetBuzz instant INR deposit (India)", to: "/payment-methods" },
      { key: "phonepe", name: "PhonePe", img: phonepe.url, alt: "PhonePe — JeetBuzz UPI wallet deposit (India)", to: "/payment-methods" },
    ],
  },
  {
    title: "International wallets",
    desc: "Cross-border wallets and Google Pay for fast settlement.",
    to: "/payment-methods",
    methods: [
      { key: "payoneer", name: "Payoneer", img: payoneer.url, alt: "Payoneer — international wallet for JeetBuzz", to: "/payment-methods" },
      { key: "gpay", name: "Google Pay", img: gpay.url, alt: "Google Pay — wallet payment for JeetBuzz", to: "/payment-methods" },
    ],
  },
  {
    title: "Crypto",
    desc: "Stablecoin and on-chain deposits with low fees.",
    to: "/payment-methods",
    methods: [
      { key: "usdt", name: "USDT", img: usdt.url, alt: "Tether USDT — crypto deposit on JeetBuzz", to: "/payment-methods" },
      { key: "btc", name: "Bitcoin", img: bitcoin.url, alt: "Bitcoin — crypto deposit on JeetBuzz", to: "/payment-methods" },
      { key: "ltc", name: "Litecoin", img: litecoin.url, alt: "Litecoin — crypto deposit on JeetBuzz", to: "/payment-methods" },
      { key: "binance", name: "Binance Pay", img: binance.url, alt: "Binance Pay — crypto deposit on JeetBuzz", to: "/payment-methods" },
    ],
  },
];

// Tag each group with the countries it should appear for.
// "global" pages (default English /) show everything.
const GROUP_COUNTRIES: Record<string, Array<"bd" | "pk" | "in" | "global">> = {
  "Mobile wallets — Bangladesh": ["bd", "global"],
  "Bank transfer": ["bd", "pk", "in", "global"],
  "Mobile wallets — Pakistan": ["pk", "global"],
  "UPI & wallets — India": ["in", "global"],
  "International wallets": ["global"],
  Crypto: ["global"],
};

function Tile({ m, dark }: { m: Method; dark?: boolean }) {
  return (
    <Link
      to={m.to}
      aria-label={`${m.name} — payment method on JeetBuzz`}
      onClick={() =>
        track("payment_method_click", { method: m.key, name: m.name, to: m.to })
      }
      className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.05]"
    >
      <div
        className={
          dark
            ? "flex h-16 w-full items-center justify-center rounded-xl bg-[#0f172a] p-3 ring-1 ring-white/10"
            : "flex h-16 w-full items-center justify-center rounded-xl bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5"
        }
      >
        <img
          src={m.img}
          alt={m.alt}
          loading="lazy"
          decoding="async"
          className="max-h-10 w-auto object-contain"
        />
      </div>
      <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {m.name}
      </span>
    </Link>
  );
}

export default function PaymentMethodsImpl() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const country = countryFromPathname(pathname);
  const groups = GROUPS.filter((g) => {
    const allowed = GROUP_COUNTRIES[g.title] ?? ["global"];
    return allowed.includes(country);
  });
  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g.title} className="glass p-6 md:p-7">
          <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground md:text-xl">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
            </div>
            <Link
              to={g.to}
              className="mt-2 inline-flex shrink-0 text-xs font-medium text-primary hover:underline md:mt-0"
            >
              View guide
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {g.methods.map((m) => (
              <Tile key={m.key} m={m} dark={g.dark} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}