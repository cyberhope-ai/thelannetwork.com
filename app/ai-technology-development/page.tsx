import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Technology Development | The LAN Network",
  description: "Human-led AI development for software, automations, dashboards, prototypes, internal tools, and governed AI workflows.",
};

const services = [
  { title: "AI Product Development", desc: "MVPs, prototypes, product concepts, internal applications, dashboards, and custom AI-assisted software." },
  { title: "AI Workflow Systems", desc: "AI-supported research, documentation, intake, QA, reporting, and internal operations workflows." },
  { title: "Agent-Assisted Operations", desc: "Managed AI-agent workflows for structured tasks, internal productivity, documentation, and development support." },
  { title: "Knowledge and Retrieval Systems", desc: "Document intelligence, internal knowledge bases, searchable content systems, and AI-assisted knowledge workflows." },
  { title: "AI-Enhanced Dashboards", desc: "Operational dashboards, reporting tools, analytics views, and decision-support interfaces." },
  { title: "AI Development Support", desc: "Specification writing, architecture planning, documentation, testing workflows, and human-reviewed code support." },
];

const clients = [
  "Small and mid-sized businesses",
  "Startups and founders",
  "Schools and workforce programs",
  "Nonprofits",
  "Cybersecurity-conscious organizations",
  "Esports and digital media organizations",
  "Local governments and community partners where appropriate",
  "Companies exploring AI adoption but needing human guidance",
];

const deliverySteps = [
  { n: "01", title: "Human project intake and scope" },
  { n: "02", title: "AI-assisted specification and planning" },
  { n: "03", title: "Human architecture and feasibility review" },
  { n: "04", title: "AI-assisted development and documentation workflows" },
  { n: "05", title: "Human QA, testing, and acceptance review" },
  { n: "06", title: "Cybersecurity-aware deployment practices" },
  { n: "07", title: "Optional apprenticeship-supported work under supervision" },
];

const examples = [
  "Build an AI-assisted internal dashboard",
  "Automate manual reporting workflows",
  "Create an MVP for a founder or small business",
  "Build a document intelligence workflow",
  "Develop an AI-assisted customer intake system",
  "Create internal training or support tools",
  "Modernize a manual process using governed AI workflows",
  "Build a secure prototype for a new AI product",
];

export default function AITechnologyDevelopment() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Services</p>
        <h1 className="text-5xl md:text-6xl mb-6">AI Technology Development</h1>
        <p className="text-xl text-tln-text/90 font-medium mb-4 max-w-2xl leading-relaxed">
          Human-led software, automation, and AI systems built with governed workflows and cybersecurity awareness.
        </p>
        <p className="text-tln-text/80 font-medium mb-8 max-w-2xl leading-relaxed">
          The LAN Network helps organizations turn ideas into practical AI-era systems: prototypes,
          internal tools, automations, dashboards, AI-assisted workflows, and custom software. Our work
          is led by humans, supported by managed AI assistance, and reviewed through accountable
          delivery processes.
        </p>
        <Link
          href="/start-a-project"
          className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90"
        >
          Start an AI Development Project →
        </Link>
      </section>

      {/* What We Build */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-10">From Idea to Working System</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors">
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-tln-text/80 text-sm leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-4">Built for Practical Organizations, Not AI Theater</h2>
            <p className="text-tln-text/80 font-medium mb-6 leading-relaxed">
              TLN works with organizations that need useful AI systems, not buzzword demos.
            </p>
            <ul className="space-y-2">
              {clients.map(c => (
                <li key={c} className="flex items-start gap-2 text-tln-text/85 font-medium text-sm">
                  <span className="text-tln-red mt-1">→</span> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Model */}
          <div>
            <h2 className="text-3xl mb-4">Humans Lead. AI Accelerates. Governance Keeps It Accountable.</h2>
            <div className="space-y-3">
              {deliverySteps.map(s => (
                <div key={s.n} className="flex items-start gap-4">
                  <span className="text-tln-red font-display font-black text-2xl leading-none">{s.n}</span>
                  <p className="text-tln-text/85 font-medium text-sm leading-relaxed pt-1">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-8">Example Projects</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {examples.map(e => (
            <div key={e} className="flex items-start gap-3 border border-tln-line rounded-lg p-4 bg-tln-ink">
              <span className="text-tln-red font-bold mt-0.5">✓</span>
              <p className="text-tln-text/85 font-medium text-sm">{e}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accountability statement */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <h2 className="text-2xl mb-3">Human Accountability Is Built In</h2>
          <p className="text-tln-text/90 font-medium leading-relaxed">
            Clients work with human project leads. AI systems may assist with research, drafting, code
            support, documentation, QA, and workflow acceleration, but humans remain responsible for
            client communication, scope, review, and final deliverables.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="max-w-2xl">
          <h2 className="text-4xl mb-4">Ready to Start an AI Development Project?</h2>
          <p className="text-tln-text/80 font-medium mb-8 leading-relaxed">
            Tell us what you are trying to build. We will help scope the project, identify the right
            approach, and map a practical path to execution.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90">
              Start a Project →
            </Link>
            <Link href="/how-we-deliver" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">
              How We Deliver
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
