import { SectionHeader } from "./SectionHeader";
import awcmdg from "@/assets/providers/awcmdg.png.asset.json";
import awcme1sport from "@/assets/providers/awcme1sport.png.asset.json";
import awcmfastspin from "@/assets/providers/awcmfastspin.png.asset.json";
import awcmfc from "@/assets/providers/awcmfc.png.asset.json";
import awcmhorsebook from "@/assets/providers/awcmhorsebook.png.asset.json";
import awcmhotroad from "@/assets/providers/awcmhotroad.png.asset.json";
import awcmjili from "@/assets/providers/awcmjili.png.asset.json";
import awcmkm from "@/assets/providers/awcmkm.png.asset.json";
import awcmladyluck from "@/assets/providers/awcmladyluck.png.asset.json";
import awcmpinnacle from "@/assets/providers/awcmpinnacle.png.asset.json";
import awcmpt from "@/assets/providers/awcmpt.png.asset.json";
import awcmsexy from "@/assets/providers/awcmsexy.png.asset.json";
import awcmsg from "@/assets/providers/awcmsg.png.asset.json";
import awcmvia from "@/assets/providers/awcmvia.png.asset.json";
import awcmyesbingo from "@/assets/providers/awcmyesbingo.png.asset.json";
import awcmyl from "@/assets/providers/awcmyl.png.asset.json";
import awcv2combo from "@/assets/providers/awcv2-combo.png.asset.json";
import bg from "@/assets/providers/bg.png.asset.json";
import btg from "@/assets/providers/btg.png.asset.json";
import cg from "@/assets/providers/cg.png.asset.json";
import cmd from "@/assets/providers/cmd.png.asset.json";
import cq9 from "@/assets/providers/cq9.png.asset.json";
import cricketExchange from "@/assets/providers/cricket-exchange.png.asset.json";
import dragoonsoft from "@/assets/providers/dragoonsoft.png.asset.json";
import evo from "@/assets/providers/evo.png.asset.json";
import exchange from "@/assets/providers/exchange.png.asset.json";
import fiveg from "@/assets/providers/fiveg.png.asset.json";
import jdb from "@/assets/providers/jdb.png.asset.json";
import jdbaspribe from "@/assets/providers/jdbaspribe.png.asset.json";
import joker from "@/assets/providers/joker.png.asset.json";
import lucky365 from "@/assets/providers/lucky365.png.asset.json";
import ludo from "@/assets/providers/ludo.png.asset.json";
import netent from "@/assets/providers/netent.png.asset.json";
import nextspin from "@/assets/providers/nextspin.png.asset.json";
import nst from "@/assets/providers/nst.png.asset.json";
import pg from "@/assets/providers/pg.png.asset.json";
import rich88 from "@/assets/providers/rich88.png.asset.json";
import rwb from "@/assets/providers/rwb.png.asset.json";
import saba from "@/assets/providers/saba.png.asset.json";
import sbov2 from "@/assets/providers/sbov2.png.asset.json";
import sbtech from "@/assets/providers/sbtech.png.asset.json";
import ugv3 from "@/assets/providers/ugv3.png.asset.json";
import winfinity from "@/assets/providers/winfinity.png.asset.json";
import worldmatch from "@/assets/providers/worldmatch.png.asset.json";

type Provider = { name: string; url: string };

const PROVIDERS: Provider[] = [
  { name: "Cricket Exchange", url: cricketExchange.url },
  { name: "Exchange", url: exchange.url },
  { name: "SBOBET", url: sbov2.url },
  { name: "SABA Sports", url: saba.url },
  { name: "SBTech", url: sbtech.url },
  { name: "Pinnacle", url: awcmpinnacle.url },
  { name: "E1 Sport", url: awcme1sport.url },
  { name: "Horsebook", url: awcmhorsebook.url },
  { name: "CMD368", url: cmd.url },
  { name: "UG Sport", url: ugv3.url },
  { name: "Evolution", url: evo.url },
  { name: "Pragmatic Play", url: awcmpt.url },
  { name: "Sexy Gaming", url: awcmsexy.url },
  { name: "Dream Gaming", url: awcmdg.url },
  { name: "Lady Luck", url: awcmladyluck.url },
  { name: "Via Gaming", url: awcmvia.url },
  { name: "PG Soft", url: pg.url },
  { name: "JILI", url: awcmjili.url },
  { name: "JDB", url: jdb.url },
  { name: "JDB AsprIbe", url: jdbaspribe.url },
  { name: "CQ9", url: cq9.url },
  { name: "Joker", url: joker.url },
  { name: "Rich88", url: rich88.url },
  { name: "KM Gaming", url: awcmkm.url },
  { name: "YL Gaming", url: awcmyl.url },
  { name: "Spadegaming", url: awcmsg.url },
  { name: "FastSpin", url: awcmfastspin.url },
  { name: "FC Gaming", url: awcmfc.url },
  { name: "Hotroad", url: awcmhotroad.url },
  { name: "Yes Bingo", url: awcmyesbingo.url },
  { name: "Big Gaming", url: bg.url },
  { name: "BTG", url: btg.url },
  { name: "CG Gaming", url: cg.url },
  { name: "NetEnt", url: netent.url },
  { name: "WorldMatch", url: worldmatch.url },
  { name: "Lucky365", url: lucky365.url },
  { name: "5G Gaming", url: fiveg.url },
  { name: "Dragoon Soft", url: dragoonsoft.url },
  { name: "NextSpin", url: nextspin.url },
  { name: "Winfinity", url: winfinity.url },
  { name: "RWB", url: rwb.url },
  { name: "NST", url: nst.url },
  { name: "Ludo", url: ludo.url },
  { name: "AWC Combo", url: awcv2combo.url },
];

export default function ProvidersSection() {
  return (
    <section className="container-pro mt-20 md:mt-28">
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