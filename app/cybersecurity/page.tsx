<<<<<<< Updated upstream
import Link from "next/link";

const services = [
  {
    icon: "🔍",
    title: "Penetration Testing",
    desc: "Web app, API, and network pen testing with a deliverable your team can act on — not a generic scan report. We test like an attacker, report like an engineer.",
  },
  {
    icon: "📋",
    title: "Security Audits",
    desc: "Code review, dependency audit, infrastructure assessment. Written findings with severity ratings, reproduction steps, and remediation guidance.",
  },
  {
    icon: "✅",
    title: "Compliance Readiness",
    desc: "SOC 2, HIPAA gap analysis, ISO 27001 control mapping. We document your current posture and give you a prioritized roadmap to certification.",
  },
  {
    icon: "🛡",
    title: "Secure Architecture Review",
    desc: "Review your system design before you build it — or before you ship it. Threat modeling, attack surface analysis, hardening recommendations.",
  },
  {
    icon: "🔑",
    title: "Auth & Identity Hardening",
    desc: "OAuth flows, JWT handling, session management, MFA implementation. We find the token leaks and broken access controls before your users do.",
  },
  {
    icon: "📡",
    title: "API Security",
    desc: "OWASP API Top 10 assessment, rate limiting design, input validation review, and authentication flow audit for REST and GraphQL APIs.",
  },
=======
import Image from "next/image";
import Link from "next/link";

const services = [
  { icon: "🌐", title: "External Network Pen Testing", desc: "Black-box assault on your perimeter. We attack you the way attackers do." },
  { icon: "🏢", title: "Internal Pen Testing", desc: "Assume-breach simulation. Test how far an insider — or a foothold — can move." },
  { icon: "🕸️", title: "Web Application Testing", desc: "OWASP-aligned. Authentication, injection, business-logic flaws, IDOR, the whole catalog." },
  { icon: "📱", title: "Mobile Application Security", desc: "iOS + Android. Static + dynamic analysis. API + storage + transport." },
  { icon: "☁️", title: "Cloud Security Audit", desc: "AWS, Azure, GCP. IAM misconfigurations, exposed buckets, drifted policies." },
  { icon: "📡", title: "Network & Wireless (the LAN)", desc: "Wired + wireless audits. Yes, the literal LAN that gives us our name." },
  { icon: "🎭", title: "Social Engineering", desc: "Phishing campaigns, vishing, physical-pretext. Train your humans the same way you train your firewalls." },
  { icon: "⚔️", title: "Red Team Engagement", desc: "Full adversarial simulation. Goal-based. Stealth-focused. We don't tell defense we're coming." },
];

const esportsServices = [
  { title: "Anti-cheat infrastructure audits", desc: "For game studios and tournament operators." },
  { title: "Tournament network defense", desc: "DDoS protection, integrity, broadcast security." },
  { title: "Streamer & player account security", desc: "Account-hijack prevention, 2FA hardening, social-engineering training for talent." },
  { title: "Game backend pen testing", desc: "API security, anti-tampering, server-side authority validation." },
];

const methodology = [
  { phase: "01", title: "Scope & Threat Model", desc: "We map your attack surface to your business risk. Not every asset deserves the same depth." },
  { phase: "02", title: "Reconnaissance", desc: "Passive + active. We learn your tech stack the way an adversary would — without alerting you." },
  { phase: "03", title: "Exploitation", desc: "Manual testing led by humans, augmented by our AI compute fabric for coverage scaling." },
  { phase: "04", title: "Post-Exploitation", desc: "What does a foothold actually buy an attacker in YOUR environment? We measure blast radius." },
  { phase: "05", title: "Reporting & Audit Chain", desc: "Executive + technical report. Plus a cryptographically-signed provenance chain proving exactly what was tested when, on which hardware." },
  { phase: "06", title: "Remediation Support", desc: "We don't drop a PDF and disappear. Retests included. Your team gets human help." },
];

const differentiators = [
  { h: "Born in esports 2008", b: 'Tyler "Ninja" Blevins lived in our house. We hacked together a T1 line and defended live Halo streams from constant DDoS attempts. Cybersecurity wasn\'t a pivot — it\'s how we started.' },
  { h: "AI-augmented delivery", b: "Our compute fabric runs the recon and coverage scaling so our human pen testers spend their time on the high-value exploitation work — not grinding scope." },
  { h: "Cryptographic audit chain", b: "Every engagement ships with a QSurface provenance chain. Auditors can verify exactly which engineer touched what hardware at what second. Industry-first transparency." },
  { h: "esports cybersecurity specialty", b: "The only pen-test firm born inside a competitive esports house. Anti-cheat, tournament networks, streamer security — we speak the language." },
  { h: "Charity-tied engagements", b: "Every TLN contract supports Video Game Palooza (501c3) — 2,000+ Hoosiers trained in IT/Cybersecurity/Coding/AI since 2018. Hire us, lift the next generation." },
  { h: "17 years of tech lineage", b: "From the original LAN parties to a 45-blade modern compute fabric. Same team. Same instincts. Better tools." },
>>>>>>> Stashed changes
];

export default function Cybersecurity() {
  return (
<<<<<<< Updated upstream
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service Vertical</p>
      <h1 className="font-display text-4xl mb-4">Cybersecurity</h1>
      <p className="text-tln-muted text-lg mb-4 max-w-2xl">
        Penetration testing, security audits, and compliance readiness — delivered with
        engineering rigor, not checkbox theater.
      </p>
      <p className="text-tln-muted text-lg mb-16 max-w-2xl">
        Every engagement produces a working deliverable: reproducible findings, severity-ranked
        recommendations, and a signed delivery receipt with cryptographic attribution.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors"
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="border border-tln-line bg-tln-ink rounded-lg p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">What makes TLN different</h2>
        <ul className="space-y-3 text-tln-muted">
          <li className="flex gap-3">
            <span className="text-tln-accent font-bold flex-shrink-0">01.</span>
            <span>Every finding includes a reproduction path — not just a CVE reference.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-tln-accent font-bold flex-shrink-0">02.</span>
            <span>Delivery receipt is cryptographically signed — your compliance team can verify the chain of custody.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-tln-accent font-bold flex-shrink-0">03.</span>
            <span>We&apos;re engineers, not just auditors. Remediation guidance comes with working code where applicable.</span>
          </li>
        </ul>
      </div>

      <Link
        href="/contact"
        className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90"
      >
        Request a Security Assessment →
      </Link>
=======
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Penetration Testing · Red Team · esports Cybersecurity</p>
            <h1 className="text-5xl md:text-6xl mb-6">
              Cybersecurity services. Born in esports. Built for the modern threat landscape.
            </h1>
            <p className="text-lg text-tln-text/90 leading-relaxed font-medium mb-8 max-w-2xl">
              Uncover vulnerabilities before attackers find them. Validate your defenses against
              today&apos;s threats. Receive a cryptographically-signed audit chain that proves every step
              of the engagement to your auditors.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact?topic=cybersecurity" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm">Get a Quote →</Link>
              <Link href="#methodology" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors">See Our Methodology</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/brand/tln-cybersecurity-shield.png" alt="TLN Cybersecurity" width={260} height={260} priority />
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-tln-ink border-y border-tln-line">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "17+", l: "Years of tech innovation lineage" },
              { v: "45+24", l: "Blade fabric · GPU fleet · all auditable" },
              { v: "2,000+", l: "Hoosiers trained via VGP charity partner" },
              { v: "100%", l: "Engagements signed with provenance chain" },
            ].map(s => (
              <div key={s.l}>
                <div className="text-4xl text-tln-red font-display">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-tln-muted mt-1 font-bold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin-story callout */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <p className="text-2xl md:text-3xl leading-tight mb-3">We were doing this in 2010 to defend our Halo streams.</p>
          <p className="text-tln-text/90 leading-relaxed font-medium">
            Streaming live esports from a residential house meant constant DDoS attacks, attempted
            server reboots, and account-hijack attempts on our pro players. Rick & Arek hacked
            together a T1 line and built defenses by hand. <span className="font-bold">That instinct for
            protecting infrastructure became the company you&apos;re looking at now.</span>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-4xl mb-2">Penetration testing services</h2>
        <p className="text-tln-muted mb-10 font-medium">Custom-scoped engagements. Quote on request — no off-the-shelf packages, no surprise fees.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(s => (
            <div key={s.title} className="border-2 border-tln-line bg-tln-ink rounded-lg p-5 hover:border-tln-red transition-colors">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-xl mb-2">{s.title}</h3>
              <p className="text-tln-text/85 text-sm leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* esports cybersecurity vertical */}
      <section id="esports" className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
          <Image src="/brand/tln-esports-shield.png" alt="TLN esports" width={180} height={180} />
          <div>
            <p className="text-tln-orange text-sm uppercase tracking-[0.2em] font-bold mb-3">Specialized vertical</p>
            <h2 className="text-4xl mb-3">esports Cybersecurity</h2>
            <p className="text-tln-text/90 mb-6 font-medium leading-relaxed max-w-2xl">
              Esports orgs and game studios get attacked constantly — but most pen-test firms don&apos;t
              understand the gaming/streaming/anti-cheat tech stack. TLN does. We&apos;re the only firm
              with authentic credibility in both worlds.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {esportsServices.map(s => (
                <div key={s.title} className="border border-tln-line rounded p-4">
                  <h4 className="text-lg mb-1">{s.title}</h4>
                  <p className="text-tln-text/80 text-sm font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-4xl mb-2">Methodology — six phases</h2>
        <p className="text-tln-muted mb-10 font-medium">Every engagement runs the same disciplined arc. AI-augmented in the heavy-lift phases. Human-led in the high-judgment phases.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {methodology.map(m => (
            <div key={m.phase} className="border-2 border-tln-line bg-tln-ink rounded-lg p-5 hover:border-tln-red transition-colors">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl text-tln-red font-display">{m.phase}</span>
                <h3 className="text-xl">{m.title}</h3>
              </div>
              <p className="text-tln-text/85 text-sm leading-relaxed font-medium">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables — what you get */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-4xl mb-2">What you receive</h2>
        <p className="text-tln-muted mb-10 font-medium">Three artifacts — for three audiences.</p>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
            <h3 className="text-2xl mb-3">Executive Report</h3>
            <p className="text-tln-text/85 text-sm font-medium leading-relaxed">For your board + leadership. Risk in business terms. Investment priorities. No CVSS jargon.</p>
          </div>
          <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
            <h3 className="text-2xl mb-3">Technical Findings</h3>
            <p className="text-tln-text/85 text-sm font-medium leading-relaxed">For your engineering + security team. Reproducible steps, severity, exploitability, remediation guidance. Attached PoCs where safe.</p>
          </div>
          <div className="border-2 border-tln-red bg-tln-ink rounded-lg p-5">
            <p className="text-tln-red text-xs font-bold uppercase tracking-wider mb-2">Industry-first</p>
            <h3 className="text-2xl mb-3">QSurface Provenance Chain</h3>
            <p className="text-tln-text/85 text-sm font-medium leading-relaxed">For your auditors + compliance team. Cryptographically-signed log of every step of the engagement: which engineer, what hardware, when, what they touched, what they found. Verifiable end-to-end.</p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-4xl mb-10">Why TLN</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {differentiators.map(d => (
            <div key={d.h} className="border-l-4 border-tln-red pl-5 py-2">
              <h3 className="text-2xl mb-2">{d.h}</h3>
              <p className="text-tln-text/85 text-sm leading-relaxed font-medium">{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer proof — placeholder until first wins land */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-4xl mb-4">Customer engagements</h2>
        <p className="text-tln-muted font-medium mb-6">Case studies will populate as our first customer engagements complete. In the meantime — see <Link href="/history" className="text-tln-red font-bold no-underline">our 17-year track record</Link> in adjacent technology and esports work.</p>
      </section>

      {/* Final CTA */}
      <section className="bg-tln-ink border-y border-tln-line">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ready for a quote?</h2>
          <p className="text-tln-text/90 font-medium mb-8 max-w-2xl mx-auto">
            Tell us your scope. We respond within one business day with a custom proposal —
            including the QSurface audit-chain artifact your auditors will love.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact?topic=cybersecurity" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm">Get a Quote →</Link>
            <a href="mailto:rick@thelannetwork.com" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">rick@thelannetwork.com</a>
          </div>
        </div>
      </section>
>>>>>>> Stashed changes
    </div>
  );
}
