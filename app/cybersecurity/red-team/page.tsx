import Link from "next/link";

export default function RedTeam() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>Red Team Operations</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">Red Team Operations</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Full-scope adversarial simulation — not just a pentest. Red teaming tests your
        people, processes, and technology together, the way a real attacker would.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Full-Scope Adversarial Simulation", desc: "Multi-vector attack chains: phishing, physical access, web app exploitation, and lateral movement — all in one engagement." },
          { title: "Assumed Breach Scenarios", desc: "Start with insider access and see how far an attacker can get. Tests detection, response, and segmentation." },
          { title: "Purple Team Exercises", desc: "Red and blue team working together — attackers run TTPs, defenders tune detections. Accelerated learning for both sides." },
          { title: "TIBER / CBEST Methodology", desc: "Intelligence-led red teaming aligned to financial sector frameworks and regulatory expectations." },
          { title: "Detection Validation", desc: "Does your SIEM actually catch the attacks your team thinks it does? We run real TTPs and measure what fires." },
          { title: "Physical Security Testing", desc: "Tailgating, lock bypass, badge cloning, and data center access — the attacks that don't show up in network logs." },
        ].map((s) => (
          <div key={s.title} className="border border-tln-line bg-tln-ink rounded-lg p-6">
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="border-l-4 border-tln-accent pl-6 mb-12 max-w-2xl">
        <p className="text-tln-muted leading-relaxed">
          All red team engagements operate under a signed rules of engagement document.
          Every action is logged and timestamped with a cryptographic audit chain — so your
          legal and compliance team has a complete record of authorized activity.
        </p>
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Plan a Red Team Engagement →
      </Link>
    </div>
  );
}
