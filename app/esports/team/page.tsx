import Link from "next/link";
import Image from "next/image";

export default function EsportsTeam() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-[160px_1fr] gap-8 items-start">
          <Image src="/brand/tln-esports-shield.png" alt="TLN esports" width={140} height={140} priority />
          <div>
            <p className="text-tln-orange text-sm uppercase tracking-[0.2em] font-bold mb-3">Coming soon</p>
            <h1 className="text-5xl md:text-6xl mb-6">The new TLN sponsored esports team.</h1>
            <p className="text-lg text-tln-text/90 leading-relaxed font-medium max-w-3xl">
              The original TLN trained Halo legends. We&apos;re reviving the brand on the competitive
              stage — sponsoring a new TLN-branded roster, building from the same instincts that
              shaped Ninja, StrongSide, Tsquared, and the Pennacchio gamer-house generation.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-4xl mb-6">What we&apos;re building</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { h: "Roster", b: "We&apos;re evaluating titles + scouting players. Roster announcement coming. The shield will mean something on a jersey again." },
            { h: "Training Center", b: "Indianapolis 24/7 facility — 40+ stations, competition stage, broadcast studio. Same spirit as the original Chicago house, modern infrastructure." },
            { h: "Sponsorship & Brand", b: "Brand partnerships, jersey sponsors, tournament prize-pool support, streamer deals. If you want in early — let&apos;s talk." },
          ].map(c => (
            <div key={c.h} className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
              <h3 className="text-2xl mb-3">{c.h}</h3>
              <p className="text-tln-text/85 text-sm leading-relaxed font-medium" dangerouslySetInnerHTML={{__html: c.b}} />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-4xl mb-4">The road to a TLN Reunion</h2>
        <p className="text-tln-text/90 leading-relaxed font-medium max-w-3xl">
          Long-term aspiration: bring the original TLN crew back together — Ninja, the Pennacchio
          family, Bravo, the Halo pros who helped invent competitive esports — for a reunion event.
          Honor the legacy. Pass the torch. Until then, we&apos;re building the next chapter so the
          next generation has the same shot.
        </p>
      </section>

      <section className="bg-tln-ink border-y border-tln-line">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl mb-4">Sponsor · Scout · Join the Team</h2>
          <p className="text-tln-text/90 font-medium mb-8 max-w-2xl mx-auto">
            Brand partner? Sponsor? Player? Coach? Reunion idea? Email us — we&apos;re at the start of a real revival.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact?topic=esports-team" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline">Get In Touch →</Link>
            <a href="mailto:rick@thelannetwork.com" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">rick@thelannetwork.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
