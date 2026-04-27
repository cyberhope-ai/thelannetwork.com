import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Deliver | The LAN Network",
  description: "Human-led delivery powered by governed AI workflows. Every project has a human lead. Every deliverable is human-reviewed.",
};

const steps = [
  { n: "01", title: "Human Intake", desc: "A TLN project lead works with the client to understand goals, constraints, budget, timeline, risks, and success criteria." },
  { n: "02", title: "AI-Assisted Specification", desc: "Managed AI workflows may help draft requirements, user stories, workflows, architecture options, documentation, and project plans." },
  { n: "03", title: "Human Review", desc: "Humans review and approve scope, technical direction, assumptions, risks, and priorities before execution." },
  { n: "04", title: "AI-Assisted Build", desc: "AI tools may assist with code support, research, documentation, testing, automation, and QA checklists. Human specialists remain responsible for evaluating outputs." },
  { n: "05", title: "Human QA and Acceptance", desc: "Deliverables are reviewed, tested, refined, and approved by humans before client delivery." },
  { n: "06", title: "Documentation and Handoff", desc: "TLN provides documentation, training, handoff materials, and next-step recommendations where appropriate." },
];

const principles = [
  "Human client communication",
  "Human-led scope and acceptance",
  "AI-assisted, not AI-only, delivery",
  "Cybersecurity-aware workflows",
  "Review checkpoints",
  "Documentation and traceability",
  "Apprentice supervision",
  "Clear role accountability",
];

export default function HowWeDeliver() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Our Process</p>
        <h1 className="text-5xl md:text-6xl mb-6">How We Deliver</h1>
        <p className="text-xl text-tln-text/90 font-medium mb-4 max-w-2xl leading-relaxed">
          Human-led delivery powered by governed AI workflows.
        </p>
        <p className="text-tln-text/80 font-medium mb-8 max-w-2xl leading-relaxed">
          The LAN Network uses a delivery model designed for accountability. Humans lead client
          communication, scope, project decisions, QA, and final acceptance. AI-assisted workflows
          support research, planning, development, documentation, testing, and automation inside
          controlled processes.
        </p>
        <Link
          href="/start-a-project"
          className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90"
        >
          Start a Project →
        </Link>
      </section>

      {/* Delivery Steps */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-10">The Six-Step Delivery Model</h2>
        <div className="space-y-6">
          {steps.map(s => (
            <div key={s.n} className="grid md:grid-cols-[80px_1fr] gap-6 border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors">
              <div className="font-display font-black text-5xl text-tln-red leading-none">{s.n}</div>
              <div>
                <h3 className="text-2xl mb-2">{s.title}</h3>
                <p className="text-tln-text/80 font-medium leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Communication Policy */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-tln-red pl-6">
            <h2 className="text-3xl mb-4">Clients Communicate With Humans</h2>
            <p className="text-tln-text/90 font-medium leading-relaxed">
              TLN does not position AI agents as client representatives. Clients communicate with human
              project leads. AI may support internal workflows, but human accountability remains central
              to the project.
            </p>
          </div>
          <div>
            <h2 className="text-3xl mb-4">Right-Sized Teams for Each Project</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              Depending on project scope, TLN may assemble a project pod that includes senior leads,
              technical specialists, cybersecurity reviewers, designers, QA support, apprentices, or
              academic and workforce collaborators. Project roles are matched to the engagement and
              disclosed appropriately.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-8">Governance Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map(p => (
            <div key={p} className="flex items-start gap-3 border border-tln-line rounded-lg p-4 bg-tln-ink">
              <span className="text-tln-red font-bold text-lg mt-0.5">✓</span>
              <p className="text-tln-text/85 font-medium text-sm">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="max-w-2xl">
          <h2 className="text-4xl mb-4">Ready to Start With a Human-Led Team?</h2>
          <p className="text-tln-text/80 font-medium mb-8 leading-relaxed">
            Tell us what you are trying to build and we will walk you through how TLN would approach it.
          </p>
          <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90">
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
