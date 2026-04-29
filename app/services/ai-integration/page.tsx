import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Integration | The LAN Network",
  description: "LLMs, RAG pipelines, vector databases, and governed agent workflows integrated into your existing products by The LAN Network.",
};

export default function AiIntegrationPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">AI Integration</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        The LAN Network integrates AI into your existing products — not as a bolt-on feature, but as
        a governed capability with human oversight at every decision point. LLMs, RAG, agents, and
        vector search, built to production standards.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "LLM Integration", desc: "Claude, GPT-4, Gemini, and open-source models wired into your product via structured APIs. Prompt engineering, system context, and output validation built in." },
          { title: "RAG Pipelines", desc: "Retrieval-Augmented Generation for knowledge-base chatbots, document Q&A, and search. Your data, your documents, your vector store — no data leaving your boundary without permission." },
          { title: "Agent Workflows", desc: "Multi-step AI workflows with tool use, memory, and human escalation. Built on PrecognitionOS governance principles — every agent action is auditable." },
          { title: "Vector Databases", desc: "Pinecone, Chroma, Weaviate, and pgvector setup, schema design, and embedding pipeline optimisation for semantic search at scale." },
          { title: "AI Safety & Guardrails", desc: "Output filtering, hallucination detection, confidence scoring, and human-in-the-loop gates for high-stakes decisions. We don't ship AI that can embarrass your brand." },
          { title: "Model Cost Optimisation", desc: "Right-sizing model selection, caching strategies, and token optimisation. AI features that scale economically, not just technically." },
        ].map(s => (
          <div key={s.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <h3 className="font-display text-xl mb-2 text-tln-text">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">Governed AI — The TLN Difference</h2>
        <p className="text-tln-muted mb-4">
          Most AI integrations ship fast and break slowly — hallucinations in production, costs spiralling,
          no audit trail. The LAN Network builds AI features the same way we build everything else:
          spec first, governed delivery, human sign-off before production.
        </p>
        <p className="text-tln-muted">
          We use PrecognitionOS internally for our own agent workflows — so when we build yours,
          we&apos;re applying the same governance patterns we trust with our own fleet.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white font-bold uppercase tracking-wide rounded-lg no-underline hover:opacity-90 text-center">
          Start a Project
        </Link>
        <Link href="/services" className="inline-block px-6 py-3 border border-tln-line text-tln-muted font-bold uppercase tracking-wide rounded-lg no-underline hover:border-tln-red hover:text-tln-red text-center">
          All Services
        </Link>
      </div>
    </main>
  );
}
