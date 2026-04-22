import Link from "next/link";

const services = [
  {
    icon: "🤖",
    title: "AI Agent Systems",
    desc: "Multi-agent pipelines, autonomous workflows, and governed AI fleets. We build systems that do real work — not demo wrappers around a single API call.",
  },
  {
    icon: "⚡",
    title: "LLM Integration",
    desc: "Production Claude, GPT-4, and open-source LLM integration into your existing stack. Prompt engineering, context management, output validation, cost tracking.",
  },
  {
    icon: "🔄",
    title: "AI-Augmented Automation",
    desc: "Replace brittle rule-based automations with AI-driven workflows. Document processing, classification, extraction, and decision routing.",
  },
  {
    icon: "📊",
    title: "RAG & Knowledge Systems",
    desc: "Retrieval-augmented generation pipelines, vector search, and custom knowledge bases. Your AI should know your business — not just the internet.",
  },
  {
    icon: "🛠",
    title: "Custom Model Fine-Tuning",
    desc: "Fine-tune open-source models on your proprietary data. On-prem or cloud. We handle the training infrastructure, evaluation, and deployment.",
  },
  {
    icon: "📡",
    title: "AI API Products",
    desc: "Ship your AI capability as a production API — with auth, rate limiting, cost controls, and audit logging. Ready for your customers to integrate.",
  },
];

const stack = [
  "Claude API (Anthropic)", "OpenAI GPT-4", "LLaMA / Mistral / Mixtral",
  "LangChain / LlamaIndex", "Pinecone / pgvector / Qdrant",
  "FastAPI / Python", "Next.js / React", "Docker / Kubernetes",
  "PostgreSQL / Redis / NATS", "Cloudflare / AWS / GCP",
];

export default function AIDevelopment() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service Vertical</p>
      <h1 className="font-display text-4xl mb-4">AI Software Development</h1>
      <p className="text-tln-muted text-lg mb-4 max-w-2xl">
        We don&apos;t build AI demos. We build AI systems that run in production, handle
        edge cases, and ship with audit trails.
      </p>
      <p className="text-tln-muted text-lg mb-16 max-w-2xl">
        TLN runs its own AI-augmented engineering fleet — PrecognitionOS — a governed
        multi-agent system that builds and deploys software. We eat our own cooking.
        Every AI product we deliver is something we&apos;d run ourselves.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors"
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="border border-tln-line bg-tln-ink rounded-lg p-8 mb-12">
        <h2 className="font-display text-2xl mb-6">Stack we work with</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 border border-tln-line rounded-full text-tln-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="border-l-4 border-tln-accent pl-6 mb-12 max-w-2xl">
        <p className="text-tln-muted leading-relaxed">
          Every AI deliverable ships with a cryptographic audit chain — a signed receipt
          that proves which model was used, what inputs it received, and what it produced.
          Your compliance team can verify the entire chain of reasoning.
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90"
      >
        Build AI Software with TLN →
      </Link>
    </div>
  );
}
