import Link from "next/link";

const frameworks = [
  { name: "SOC 2 Type II", desc: "Trust service criteria gap analysis, control mapping, evidence collection support, and auditor-ready documentation." },
  { name: "HIPAA", desc: "Technical and administrative safeguard review, PHI flow mapping, BAA guidance, and risk assessment." },
  { name: "ISO 27001", desc: "ISMS scope definition, control implementation gap analysis, and road to certification planning." },
  { name: "GDPR / CCPA", desc: "Data inventory, privacy impact assessment, consent mechanism review, and breach response planning." },
  { name: "PCI DSS", desc: "Cardholder data environment scoping, SAQ selection, and control gap analysis." },
  { name: "NIST CSF", desc: "Identify / Protect / Detect / Respond / Recover maturity assessment and roadmap." },
];

export default function Compliance() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>Compliance Readiness</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">Compliance Readiness</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Gap analysis, control mapping, and a prioritized roadmap — so your compliance
        program is real work, not checkbox theater.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {frameworks.map((f) => (
          <div key={f.name} className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors">
            <h3 className="font-display text-lg mb-2">{f.name}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="border border-tln-line bg-tln-ink rounded-lg p-8 mb-12">
        <h2 className="font-display text-xl mb-4">What you get</h2>
        <ul className="space-y-2 text-tln-muted text-sm">
          <li>Current-state assessment against your target framework</li>
          <li>Gap list with severity and effort estimates</li>
          <li>Prioritized remediation roadmap (quick wins first)</li>
          <li>Policy and procedure templates where applicable</li>
          <li>Signed delivery receipt for your compliance record</li>
        </ul>
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Start Compliance Readiness →
      </Link>
    </div>
  );
}
