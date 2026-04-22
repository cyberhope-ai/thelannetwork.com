import Link from "next/link";

const tiers = [
  {
    name: "Essentials",
    cadence: "Quarterly",
    items: ["Quarterly vulnerability scan", "Dependency audit on new releases", "Security advisory review", "1 hour monthly consultation"],
  },
  {
    name: "Professional",
    cadence: "Monthly",
    items: ["Monthly pentest of new features", "Continuous dependency monitoring", "Incident response retainer (4h SLA)", "Security review of all PRs on request", "Monthly security report"],
  },
  {
    name: "Enterprise",
    cadence: "Continuous",
    items: ["Continuous attack surface monitoring", "Weekly security syncs", "2h incident response SLA", "Dedicated security engineer", "Compliance program support", "Annual red team exercise"],
  },
];

export default function ManagedSecurity() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>Managed Security</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">Managed Security</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Ongoing security coverage without the overhead of a full-time security team.
        Retainer-based, engineering-led, with a cryptographic audit trail on every engagement.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {tiers.map((t) => (
          <div key={t.name} className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors">
            <div className="text-tln-accent text-xs uppercase tracking-widest mb-1">{t.cadence}</div>
            <h3 className="font-display text-xl mb-4">{t.name}</h3>
            <ul className="space-y-2">
              {t.items.map((item) => (
                <li key={item} className="text-tln-muted text-sm flex gap-2">
                  <span className="text-tln-accent flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-tln-line bg-tln-ink rounded-lg p-8 mb-12">
        <p className="text-tln-muted leading-relaxed">
          All managed security tiers include a signed delivery receipt for every activity —
          scan results, audit reports, and incident logs are cryptographically attributed and
          can be produced for compliance review or legal proceedings.
        </p>
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Get Managed Security Coverage →
      </Link>
    </div>
  );
}
