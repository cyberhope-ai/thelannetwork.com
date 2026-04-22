import Link from "next/link";

export default function SecurityAudit() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>Security Audit</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">Security Audit</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Code review, dependency audit, and infrastructure assessment — delivered as an
        actionable report your team can execute against.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Code Review", desc: "Static analysis of your codebase — injection points, insecure patterns, hardcoded secrets, broken auth, and logic errors." },
          { title: "Dependency Audit", desc: "Known CVEs in your dependency tree. Prioritized by exploitability and blast radius, not just severity score." },
          { title: "Infrastructure Review", desc: "Cloud config, IAM policies, exposed services, and network segmentation — what an attacker would see." },
          { title: "Configuration Audit", desc: "TLS settings, CORS policies, security headers, cookie flags, and CSP — the low-hanging fruit attackers find first." },
        ].map((s) => (
          <div key={s.title} className="border border-tln-line bg-tln-ink rounded-lg p-6">
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="border-l-4 border-tln-accent pl-6 mb-12 max-w-2xl">
        <p className="text-tln-muted leading-relaxed">
          Findings are signed with a cryptographic delivery receipt — your compliance team can
          verify the audit chain and confirm scope coverage.
        </p>
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Request a Security Audit →
      </Link>
    </div>
  );
}
