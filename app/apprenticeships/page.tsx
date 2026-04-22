import Link from "next/link";

export default function Apprenticeships() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Apprenticeships</p>
        <h1 className="text-5xl mb-6">Trained before it had a name.</h1>
        <p className="text-lg text-tln-text/90 leading-relaxed font-medium max-w-3xl">
          The LAN Network ran the <b>first esports apprenticeship</b> in the Midwest — a Chicago gamer
          house where young players learned competitive strategy, stream engineering, tournament
          logistics, and network defense before any university had a program for it. Seventeen years
          later, we&apos;re still running the same model: real engagements, real mentors, real outcomes.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-tln-line">
        <h2 className="text-3xl mb-4">What TLN apprentices have done</h2>
        <ul className="space-y-3 text-tln-text/90 font-medium">
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>esports operations</b> — the first wave (2008-2012). Pro-team support, live-stream production, tournament network defense. Several went pro or built careers behind the scenes for Twitch / YouTube Gaming teams.</li>
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>Network engineering</b> — from the T1-line DDoS-defense era forward. Apprentices built the switching, routing, and firewall instincts that now drive our commercial pen-testing practice.</li>
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>Cybersecurity</b> — red team, web app, mobile, cloud security assessments. Our apprentices work on real client engagements under senior lead supervision, QSurface-signed at every deliverable.</li>
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>Technology &amp; software</b> — AI-augmented development, automation, agentic systems. Graduates have shipped code that runs on our 45-blade compute fabric.</li>
          <li><span className="text-tln-red font-bold mr-2">▸</span><b>Esports competitive + streaming</b> — training center in Indianapolis (2025+) now onboards the next generation of competitive rosters.</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-tln-line">
        <h2 className="text-3xl mb-4">University &amp; academy partnerships</h2>
        <p className="text-tln-text/90 leading-relaxed font-medium mb-6 max-w-3xl">
          TLN has placed apprentices from — and partnered on curriculum with — the leading technology
          programs across Indiana and beyond:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
            <p className="text-tln-red font-bold text-xs uppercase tracking-wider mb-2">Primary Partner</p>
            <h3 className="text-xl mb-2">Hope Training Academy</h3>
            <p className="text-tln-text/85 text-sm leading-relaxed font-medium">
              Registered apprenticeship sponsor. Our 501(c)(3) partner (via Video Game Palooza)
              has trained <b>2,000+ Hoosiers</b> in IT, Cybersecurity, Coding, and AI since 2018.
              Hire an apprentice through HTA, mentor them on a real TLN engagement.
            </p>
          </div>
          <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
            <p className="text-tln-muted font-bold text-xs uppercase tracking-wider mb-2">University</p>
            <h3 className="text-xl mb-2">Indiana University</h3>
            <p className="text-tln-text/85 text-sm leading-relaxed font-medium">
              Student placements in cybersecurity + networking roles. IU&apos;s Luddy School alumni have
              cut their teeth on TLN pen-test engagements.
            </p>
          </div>
          <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
            <p className="text-tln-muted font-bold text-xs uppercase tracking-wider mb-2">University</p>
            <h3 className="text-xl mb-2">Butler University</h3>
            <p className="text-tln-text/85 text-sm leading-relaxed font-medium">
              Butler CS + MIS students have rotated through TLN as apprentice analysts on
              compliance and network-audit work.
            </p>
          </div>
          <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
            <p className="text-tln-muted font-bold text-xs uppercase tracking-wider mb-2">University</p>
            <h3 className="text-xl mb-2">IUPUI</h3>
            <p className="text-tln-text/85 text-sm leading-relaxed font-medium">
              IUPUI informatics and engineering apprentices have worked on our esports
              cybersecurity vertical — anti-cheat audits, tournament network defense.
            </p>
          </div>
        </div>
        <p className="text-tln-text/85 text-sm font-medium mt-6 italic">
          Plus additional partnerships with Indiana community colleges, esports academies, and
          workforce-development programs. Interested in adding your institution?{" "}
          <Link href="/contact" className="text-tln-red font-bold">Contact us</Link>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-tln-line">
        <h2 className="text-3xl mb-4">How the TLN apprentice model works</h2>
        <ul className="space-y-3 text-tln-text/90 font-medium">
          <li><b className="text-tln-red">1. Placement</b> — apprentice is matched to a TLN engagement that fits their track (cybersecurity / networking / AI dev / esports ops).</li>
          <li><b className="text-tln-red">2. Mentorship</b> — paired with a senior TLN engineer on a real client project. No busywork, no sandbox-only tasks.</li>
          <li><b className="text-tln-red">3. Attribution</b> — every deliverable the apprentice contributes to is QSurface-signed with their identity on the cryptographic audit chain. Real portfolio artifacts for their career.</li>
          <li><b className="text-tln-red">4. Placement outcomes</b> — graduates go into full TLN roles, partner-company placements, or advance directly into industry hires (we&apos;ve placed into Fortune 100 security teams).</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl mb-8">
          <p className="text-2xl leading-tight mb-4">Ready to become an apprentice — or hire one?</p>
          <p className="text-tln-text/90 leading-relaxed font-medium">
            The formal apprenticeship intake runs through our registered sponsor: Hope Training
            Academy. HTA handles credentialing, coursework, and Department of Labor registration.
            TLN handles the real-world mentor engagements.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://hopetrainingacademy.org/hope-training-academy-apprenticeship-ambassador/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-4 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline"
          >
            Apply / Become an Ambassador ↗
          </a>
          <a
            href="https://hopetrainingacademy.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-4 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline"
          >
            All HTA Programs ↗
          </a>
          <Link
            href="/contact"
            className="inline-block px-6 py-4 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline"
          >
            Contact TLN →
          </Link>
        </div>
      </section>
    </div>
  );
}
