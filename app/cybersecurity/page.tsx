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
];

export default function Cybersecurity() {
  return (
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
    </div>
  );
}
