import Link from "next/link";
<<<<<<< Updated upstream

const members = [
  {
    handle: "Rick B.",
    role: "Founder & CEO",
    bio: "Built TLN from Indianapolis LAN party roots. Founder of the community, lead on client strategy and partnerships.",
  },
  {
    handle: "The TLN AI Fleet",
    role: "Engineering — AI-Augmented",
    bio: "PrecognitionOS multi-agent system. Handles software delivery, documentation, security review, and deployment. Every output cryptographically attributed.",
  },
  {
    handle: "Community Contributors",
    role: "Network — Esports & Tech",
    bio: "TLN has always been community-built. Designers, streamers, developers, and tournament organizers who've been with us since the early LAN days.",
  },
];

export default function EsportsTeam() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/esports" className="hover:text-tln-accent">Esports</Link>
        <span className="mx-2">/</span>
        <span>Team</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Esports Division</p>
      <h1 className="font-display text-4xl mb-4">Esports Team</h1>
      <p className="text-tln-muted text-lg mb-16 max-w-2xl">
        The people behind TLN&apos;s esports technology practice — from the founder who ran
        Indianapolis LAN parties to the AI fleet that ships the code.
      </p>

      <div className="space-y-6 mb-16">
        {members.map((m) => (
          <div
            key={m.handle}
            className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display text-xl">{m.handle}</h3>
              <span className="text-xs text-tln-accent border border-tln-accent/30 rounded px-2 py-1 flex-shrink-0">
                {m.role}
              </span>
            </div>
            <p className="text-tln-muted leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-tln-line pt-10">
        <p className="text-tln-muted mb-6">
          Want to work with TLN on esports infrastructure? We collaborate with community
          organizers, tournament operators, and esports brands.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90"
        >
          Get in Touch →
        </Link>
      </div>
=======
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
>>>>>>> Stashed changes
    </div>
  );
}
