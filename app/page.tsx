import Link from "next/link";

const services = [
  {
    icon: "⚡",
    title: "Custom Software Development",
    desc: "Web apps, backend services, automations. AI-augmented team velocity, traditional software craftsmanship.",
  },
  {
    icon: "🛠",
    title: "Integrations & Pipelines",
    desc: "Wire your tools together. APIs, ETL, scrapers, data flows — built right, documented, maintained.",
  },
  {
    icon: "🤖",
    title: "AI-Augmented Engineering",
    desc: "Powered by an in-house compute fabric with cryptographically-attributable execution. Provable receipts on every deliverable.",
  },
];

const proof = [
  { value: "10+", label: "Years in tech community" },
  { value: "TLN", label: "Esports-rooted credibility" },
  { value: "AI×Human", label: "Hybrid delivery model" },
  { value: "100%", label: "Audit-trail attributable work" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">
            Custom Technology Development
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            From an esports community
            <br />
            to a <span className="text-tln-accent">custom technology</span> partner.
          </h1>
          <p className="text-lg text-tln-muted mb-8 leading-relaxed">
            The LAN Network started as Indianapolis&apos;s esports fan community.
            Today we build custom software, integrations, and automations for clients
            who value modern delivery — backed by an AI-augmented team and cryptographic
            audit trails on every project.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90"
            >
              Start a Project →
            </Link>
            <Link
              href="/services"
              className="inline-block px-6 py-3 border border-tln-line text-tln-text rounded no-underline hover:border-tln-accent"
            >
              See What We Do
            </Link>
          </div>
        </div>
      </section>

      {/* Services tiles */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl mb-10">What we deliver</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof / stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {proof.map(p => (
            <div key={p.label}>
              <div className="font-display text-3xl text-tln-accent">{p.value}</div>
              <div className="text-xs uppercase tracking-wider text-tln-muted mt-1">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiator strip */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="border-l-4 border-tln-accent pl-6 max-w-3xl">
          <p className="text-2xl font-display leading-snug mb-3">
            Every deliverable comes with a cryptographic audit chain.
          </p>
          <p className="text-tln-muted leading-relaxed">
            Your compliance team can verify every step of how your project was built —
            who did what, when, on which infrastructure. Industry-first transparency.
            Compute that you can audit.
          </p>
        </div>
      </section>
    </div>
  );
}
