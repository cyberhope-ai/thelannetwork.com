import Link from "next/link";

export default function APISecurity() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>API Security</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">API Security</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        OWASP API Top 10 assessment for REST and GraphQL APIs — auth, rate limiting,
        data exposure, injection, and business logic flaws.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "OWASP API Top 10", desc: "Broken object-level auth (BOLA), broken function-level auth, unrestricted resource consumption, security misconfiguration, and more." },
          { title: "Rate Limiting & Abuse", desc: "Missing rate limits, quota bypass, credential stuffing attack surface, and scraping prevention assessment." },
          { title: "Input Validation", desc: "Injection via API parameters — SQL, NoSQL, command, SSTI, and deserialization attack vectors." },
          { title: "Data Exposure", desc: "Excessive data in responses, mass assignment, verbose error messages, and PII leakage through API logs." },
          { title: "GraphQL Security", desc: "Introspection exposure, query depth attacks, batching abuse, field-level authorization, and subscription security." },
          { title: "API Key Management", desc: "Hardcoded keys in clients, key rotation process, scope limitation, and revocation capability review." },
        ].map((s) => (
          <div key={s.title} className="border border-tln-line bg-tln-ink rounded-lg p-6">
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Assess Your API Security →
      </Link>
    </div>
  );
}
