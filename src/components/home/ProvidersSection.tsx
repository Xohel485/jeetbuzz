import { SectionHeader } from "./SectionHeader";
import awcmdg from "@/assets/providers/awcmdg.png";
import awcme1sport from "@/assets/providers/awcme1sport.png";
import awcmfastspin from "@/assets/providers/awcmfastspin.png";
import awcmfc from "@/assets/providers/awcmfc.png";
import awcmhorsebook from "@/assets/providers/awcmhorsebook.png";
import awcmhotroad from "@/assets/providers/awcmhotroad.png";
import awcmjili from "@/assets/providers/awcmjili.png";
import awcmkm from "@/assets/providers/awcmkm.png";
import awcmladyluck from "@/assets/providers/awcmladyluck.png";
import awcmpinnacle from "@/assets/providers/awcmpinnacle.png";
import awcmpt from "@/assets/providers/awcmpt.png";
import awcmsexy from "@/assets/providers/awcmsexy.png";
import awcmsg from "@/assets/providers/awcmsg.png";
import awcmvia from "@/assets/providers/awcmvia.png";
import awcmyesbingo from "@/assets/providers/awcmyesbingo.png";
import awcmyl from "@/assets/providers/awcmyl.png";
import awcv2combo from "@/assets/providers/awcv2-combo.png";
import bg from "@/assets/providers/bg.png";
import btg from "@/assets/providers/btg.png";
import cg from "@/assets/providers/cg.png";
import cmd from "@/assets/providers/cmd.png";
import cq9 from "@/assets/providers/cq9.png";
import cricketExchange from "@/assets/providers/cricket-exchange.png";
import dragoonsoft from "@/assets/providers/dragoonsoft.png";
import evo from "@/assets/providers/evo.png";
import exchange from "@/assets/providers/exchange.png";
import fiveg from "@/assets/providers/fiveg.png";
import jdb from "@/assets/providers/jdb.png";
import jdbaspribe from "@/assets/providers/jdbaspribe.png";
import joker from "@/assets/providers/joker.png";
import lucky365 from "@/assets/providers/lucky365.png";
import ludo from "@/assets/providers/ludo.png";
import netent from "@/assets/providers/netent.png";
import nextspin from "@/assets/providers/nextspin.png";
import nst from "@/assets/providers/nst.png";
import pg from "@/assets/providers/pg.png";
import rich88 from "@/assets/providers/rich88.png";
import rwb from "@/assets/providers/rwb.png";
import saba from "@/assets/providers/saba.png";
import sbov2 from "@/assets/providers/sbov2.png";
import sbtech from "@/assets/providers/sbtech.png";
import ugv3 from "@/assets/providers/ugv3.png";
import winfinity from "@/assets/providers/winfinity.png";
import worldmatch from "@/assets/providers/worldmatch.png";

type Provider = { name: string; url: string };

const PROVIDERS: Provider[] = [
  { name: "Cricket Exchange", url: cricketExchange },
  { name: "Exchange", url: exchange },
  { name: "SBOBET", url: sbov2 },
  { name: "SABA Sports", url: saba },
  { name: "SBTech", url: sbtech },
  { name: "Pinnacle", url: awcmpinnacle },
  { name: "E1 Sport", url: awcme1sport },
  { name: "Horsebook", url: awcmhorsebook },
  { name: "CMD368", url: cmd },
  { name: "UG Sport", url: ugv3 },
  { name: "Evolution", url: evo },
  { name: "Pragmatic Play", url: awcmpt },
  { name: "Sexy Gaming", url: awcmsexy },
  { name: "Dream Gaming", url: awcmdg },
  { name: "Lady Luck", url: awcmladyluck },
  { name: "Via Gaming", url: awcmvia },
  { name: "PG Soft", url: pg },
  { name: "JILI", url: awcmjili },
  { name: "JDB", url: jdb },
  { name: "JDB AsprIbe", url: jdbaspribe },
  { name: "CQ9", url: cq9 },
  { name: "Joker", url: joker },
  { name: "Rich88", url: rich88 },
  { name: "KM Gaming", url: awcmkm },
  { name: "YL Gaming", url: awcmyl },
  { name: "Spadegaming", url: awcmsg },
  { name: "FastSpin", url: awcmfastspin },
  { name: "FC Gaming", url: awcmfc },
  { name: "Hotroad", url: awcmhotroad },
  { name: "Yes Bingo", url: awcmyesbingo },
  { name: "Big Gaming", url: bg },
  { name: "BTG", url: btg },
  { name: "CG Gaming", url: cg },
  { name: "NetEnt", url: netent },
  { name: "WorldMatch", url: worldmatch },
  { name: "Lucky365", url: lucky365 },
  { name: "5G Gaming", url: fiveg },
  { name: "Dragoon Soft", url: dragoonsoft },
  { name: "NextSpin", url: nextspin },
  { name: "Winfinity", url: winfinity },
  { name: "RWB", url: rwb },
  { name: "NST", url: nst },
  { name: "Ludo", url: ludo },
  { name: "AWC Combo", url: awcv2combo },
];

export default function ProvidersSection() {
  return (
    <section className="container-pro mt-14 md:mt-20">
      <SectionHeader
        eyebrow="Game providers"
        title="40+ studios powering JeetBuzz"
        desc="From Evolution and Pragmatic Play to JILI, PG Soft and SABA Sports — every studio behind the JeetBuzz library, in one place."
      />
      <div className="glass mt-10 p-4 md:p-6">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {PROVIDERS.map((p) => (
            <div
              key={p.name}
              className="flex aspect-[3/2] items-center justify-center rounded-lg bg-white/[0.03] p-3 ring-1 ring-white/5 transition hover:bg-white/[0.06]"
              title={p.name}
            >
              <img
                src={p.url}
                alt={`${p.name} — JeetBuzz game provider`}
                loading="lazy"
                decoding="async"
                className="max-h-10 w-auto max-w-full object-contain opacity-90 transition group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Studio availability varies by region and may change. Confirm current providers on the JeetBuzz lobby.
      </p>
    </section>
  );
}