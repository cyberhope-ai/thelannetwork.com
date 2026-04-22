import Link from "next/link";

export default function IncidentResponse() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>Incident Response</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">Incident Response</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        When something goes wrong, you need engineers — not a sales process. TLN provides
        rapid incident response and post-incident analysis with a full audit chain.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Active Incident Response", desc: "Containment, eradication, and recovery for active breaches. Triage within hours, not days." },
          { title: "Forensic Analysis", desc: "Log analysis, IOC identification, attacker TTPs, and timeline reconstruction for regulatory and legal requirements." },
          { title: "Breach Notification", desc: "Guidance on notification obligations under GDPR, HIPAA, and state breach laws. Drafted notifications reviewed for accuracy." },
          { title: "IR Planning", desc: "Build your incident response plan before you need it — playbooks, escalation paths, tabletop exercises." },
          { title: "Post-Incident Review", desc: "Root cause analysis, lessons learned documentation, and control improvements to prevent recurrence." },
          { title: "Ransomware Response", desc: "Decision tree for ransomware events — containment, recovery options, negotiation considerations, and law enforcement coordination." },
        ].map((s) => (
          <div key={s.title} className="border border-tln-line bg-tln-ink rounded-lg p-6">
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Get IR Support →
      </Link>
    </div>
  );
}
