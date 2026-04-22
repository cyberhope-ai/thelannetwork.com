import Link from "next/link";

export default function SecurityArchitecture() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>Secure Architecture Review</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">Secure Architecture Review</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Review your system design before you build it — or before you ship it. Threat modeling,
        attack surface analysis, and hardening recommendations from engineers who build production systems.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Threat Modeling", desc: "STRIDE / PASTA methodology. Identify threats, attack vectors, and trust boundaries before they become incidents." },
          { title: "Attack Surface Analysis", desc: "Map every entry point — APIs, auth flows, third-party integrations, admin interfaces, and service-to-service calls." },
          { title: "Zero Trust Review", desc: "Identity-first access control, least-privilege principle, micro-segmentation, and lateral movement prevention." },
          { title: "Cloud Security Design", desc: "AWS / GCP / Azure architecture review — IAM, network policy, encryption at rest/transit, and logging coverage." },
          { title: "Data Flow Mapping", desc: "Where does sensitive data go, who touches it, and how is it protected at each hop? Built for compliance evidence." },
          { title: "Hardening Recommendations", desc: "Concrete configuration changes — not generic checklists. Specific to your stack, your threat model, your risk tolerance." },
        ].map((s) => (
          <div key={s.title} className="border border-tln-line bg-tln-ink rounded-lg p-6">
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Book an Architecture Review →
      </Link>
    </div>
  );
}
