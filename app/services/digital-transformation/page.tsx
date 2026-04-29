import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Transformation | The LAN Network",
  description: "Legacy modernisation, process automation, and technology roadmapping from The LAN Network — human-led transformation with governed AI delivery.",
};

export default function DigitalTransformationPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">Digital Transformation</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Moving your organisation into the next decade isn&apos;t about buying the right software —
        it&apos;s about changing how your people work. The LAN Network partners with you to modernise
        legacy systems, automate manual processes, and build a technology roadmap that actually gets executed.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "Legacy Modernisation", desc: "Assess, re-platform, or replace legacy systems with modern architectures — without the big-bang risk. Incremental migration with zero-downtime deployments." },
          { title: "Process Automation", desc: "Identify manual bottlenecks, design automated workflows, and implement them with the right tools. AI-assisted where it helps; human-owned where it matters." },
          { title: "Technology Roadmapping", desc: "A clear 12–24 month technology roadmap built from your business goals, not vendor sales pitches. Prioritised, costed, and executable." },
          { title: "Change Management", desc: "Technology changes fail when people don't adopt them. We build training, documentation, and rollout plans that make adoption stick." },
          { title: "Cloud Migration", desc: "Move workloads to AWS, GCP, or Azure with proper architecture — not a lift-and-shift that recreates on-premise problems in the cloud." },
          { title: "AI Readiness", desc: "Assess your data, processes, and team for AI integration opportunities. Governed AI that augments your team rather than replacing accountability." },
        ].map(s => (
          <div key={s.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <h3 className="font-display text-xl mb-2 text-tln-text">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">Our Transformation Approach</h2>
        <p className="text-tln-muted mb-4">
          We start with a discovery engagement — typically 2–4 weeks — to map your current state,
          identify the highest-value opportunities, and produce an actionable roadmap with clear ROI.
          No six-month strategy decks. Outcomes, not PowerPoints.
        </p>
        <p className="text-tln-muted">
          Delivery follows our agile scrum model: sprint-based, visible, and adjustable. Every sprint
          produces working software or a documented decision — never just a report.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white font-bold uppercase tracking-wide rounded-lg no-underline hover:opacity-90 text-center">
          Start with Discovery
        </Link>
        <Link href="/services" className="inline-block px-6 py-3 border border-tln-line text-tln-muted font-bold uppercase tracking-wide rounded-lg no-underline hover:border-tln-red hover:text-tln-red text-center">
          All Services
        </Link>
      </div>
    </main>
  );
}
