import Link from "next/link";

export default function About() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">About</p>
        <h1 className="text-5xl mb-6">17 years. One thread.</h1>
        <p className="text-lg text-tln-text/90 leading-relaxed font-medium max-w-3xl">
          The LAN Network started as a Chicago basement that helped invent competitive esports.
          Today it&apos;s a cybersecurity company with a 45-blade compute fabric and a charitable
          education arm that&apos;s trained 2,000+ Hoosiers in IT, cybersecurity, coding, and AI.
          Same DNA the whole way: <span className="font-bold">passion drives skill drives outcomes</span>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-tln-line">
        <h2 className="text-3xl mb-4">What we do today</h2>
        <ul className="space-y-3 text-tln-text/90 font-medium">
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>Cybersecurity services</b> — pen testing, network audits, red team, esports cybersecurity (anti-cheat audits, tournament network defense, streamer/player account security).</li>
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>Custom technology development</b> — software, automation, AI-augmented engineering. Every deliverable signed with a cryptographic audit chain.</li>
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>esports team revival</b> — competitive rosters, sponsorships, the 24/7 training center in Indianapolis.</li>
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>Community give-back</b> — through our 501(c)(3) charity partner Video Game Palooza.</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-tln-line">
        <h2 className="text-3xl mb-4">Charity partner — Video Game Palooza</h2>
        <p className="text-tln-text/90 leading-relaxed font-medium mb-4">
          When the Barrettos took over TLN in 2012, they didn&apos;t just preserve the brand — they
          turned it into a mission. <b>Video Game Palooza</b> (501c3) was founded to translate
          competitive gaming&apos;s lessons in passion + skill acquisition into education for under-served
          Indianapolis youth.
        </p>
        <p className="text-tln-text/90 leading-relaxed font-medium mb-4">
          <span className="text-tln-red font-bold">Since 2018, VGP has trained 2,000+ Hoosiers</span> in IT,
          Cybersecurity, Coding, and AI through Hope Training Academy programs. Every TLN engagement
          contributes back. Hiring TLN supports the next generation of Indiana technologists.
        </p>
        <div className="flex gap-4 flex-wrap mt-6">
          <a href="https://videogamepalooza.org/esportseducation/" target="_blank" rel="noopener noreferrer"
             className="inline-block px-5 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline">
            VGP esports Education →
          </a>
          <a href="https://videogamepalooza.org/" target="_blank" rel="noopener noreferrer"
             className="inline-block px-5 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">
            Charity Partners →
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-tln-line">
        <h2 className="text-3xl mb-4">The chain of evolution</h2>
        <ul className="space-y-2 text-tln-text/90 font-medium">
          <li><b className="text-tln-red">2008-2012</b> — TLN Gamer House (Chicago). Halo team bootcamp. Trained Ninja.</li>
          <li><b className="text-tln-red">2012</b> — Barrettos acquire TLN. Begin the education evolution.</li>
          <li><b className="text-tln-red">2013-2017</b> — Video Game Palooza events. Game On esports center (one of the largest in the world at the time).</li>
          <li><b className="text-tln-red">2018+</b> — Hope Training Academy formalizes the model. 2,000+ Hoosiers trained.</li>
          <li><b className="text-tln-red">2019</b> — International Video Game Hall of Fame induction.</li>
          <li><b className="text-tln-red">2025</b> — TLN reborn: cybersecurity / esports / custom tech, AI-augmented delivery, Indianapolis training center.</li>
        </ul>
        <Link href="/history" className="inline-block mt-6 text-tln-red font-bold text-sm uppercase tracking-wider no-underline">Read the full visual history →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <p className="text-2xl leading-tight mb-4">Same room. New mission.</p>
          <p className="text-tln-text/90 leading-relaxed font-medium">
            The Indianapolis lab that powers our AI fabric is the same room where Ninja and his Halo
            team practiced. We just have better tools now — and a mission to lift the next generation
            of Hoosier technologists with every engagement we run.
          </p>
        </div>
      </section>
    </div>
  );
}
