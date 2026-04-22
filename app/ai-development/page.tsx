import Link from "next/link";

const offerings = [
  { icon: "🤖", title: "AI-Native Software Builds", desc: "Custom apps with LLM agents, retrieval pipelines, vector stores, and orchestration baked in from day one." },
  { icon: "⚙️", title: "Agentic Automations", desc: "Multi-agent workflows that ingest, deliberate, and ship — from data pipelines to client-facing dashboards." },
  { icon: "🔌", title: "MCP & Tool Integration", desc: "Model Context Protocol servers, custom tool adapters, and bridges between LLMs and your stack." },
  { icon: "📊", title: "Custom Dashboards & Tools", desc: "Internal admin tools, analytics dashboards, ops consoles — modern Next.js + AI-augmented UX." },
  { icon: "🔐", title: "Secure-by-Default", desc: "Every build runs through TLN's cybersecurity discipline. Auth, secrets, audit chain — handled before you ask." },
  { icon: "📜", title: "Cryptographic Provenance", desc: "Every line of generated code, every agent decision, signed via QSurface. Your team sees who/what/when." },
];

export default function AIDevelopment() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">AI-augmented engineering</p>
        <h1 className="text-5xl md:text-6xl mb-6">AI Software Development.</h1>
        <p className="text-lg text-tln-text/90 leading-relaxed font-medium max-w-3xl">
          Custom software with AI built into the architecture — not bolted on afterward.
          Multi-agent systems, retrieval pipelines, MCP integrations, internal tools, dashboards.
          Delivered by a team that runs its own 45-blade compute fabric and signs every commit
          with a cryptographic audit chain.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-4xl mb-10">What we build</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offerings.map(o => (
            <div key={o.title} className="border-2 border-tln-line bg-tln-ink rounded-lg p-5 hover:border-tln-red transition-colors">
              <div className="text-3xl mb-3">{o.icon}</div>
              <h3 className="text-xl mb-2">{o.title}</h3>
              <p className="text-tln-text/85 text-sm leading-relaxed font-medium">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <p className="text-3xl leading-tight mb-3">Same fabric. Same audit chain. Same discipline.</p>
          <p className="text-tln-text/90 leading-relaxed font-medium">
            Whether we're shipping you an AI agent, a custom dashboard, or a cybersecurity engagement —
            it runs on the same infrastructure with the same provenance receipts. One team. One trust model.
          </p>
        </div>
      </section>

      <section className="bg-tln-ink border-y border-tln-line">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl mb-4">Have an idea? Let&apos;s scope it.</h2>
          <Link href="/contact?topic=ai-development" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline mt-4">Start a Project →</Link>
        </div>
      </section>
    </div>
  );
}
