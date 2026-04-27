import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation | The LAN Network",
  description: "Turn repetitive, manual, and fragmented processes into human-reviewed AI-assisted workflows. Practical automation for real businesses.",
};

const automationAreas = [
  { title: "Intake and Triage", desc: "Forms, requests, support tickets, client inquiries, and routing workflows." },
  { title: "Reporting and Documentation", desc: "Summaries, dashboards, status reports, compliance support documents, and internal knowledge capture." },
  { title: "Research and Analysis", desc: "AI-assisted research workflows with human review and source validation." },
  { title: "Operations Support", desc: "Task routing, checklists, reminders, work queues, and process visibility." },
  { title: "Content and Training Support", desc: "Drafting, curriculum support, onboarding material, and internal knowledge workflows." },
  { title: "Developer and QA Support", desc: "Specifications, test plans, documentation, code review support, and release checklists." },
];

export default function AIAutomation() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Services</p>
        <h1 className="text-5xl md:text-6xl mb-6">AI Automation for Real Business Workflows</h1>
        <p className="text-xl text-tln-text/90 font-medium mb-4 max-w-2xl leading-relaxed">
          Turn repetitive, manual, and fragmented processes into human-reviewed AI-assisted workflows.
        </p>
        <p className="text-tln-text/80 font-medium mb-8 max-w-2xl leading-relaxed">
          TLN helps organizations identify practical automation opportunities, design safer AI-assisted
          workflows, and implement tools that reduce friction without removing human oversight.
        </p>
        <Link
          href="/start-a-project"
          className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90"
        >
          Request an Automation Review →
        </Link>
      </section>

      {/* Common Automation Areas */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-10">Common Automation Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationAreas.map(a => (
            <div key={a.title} className="border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors">
              <h3 className="text-xl mb-3">{a.title}</h3>
              <p className="text-tln-text/80 text-sm leading-relaxed font-medium">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <h2 className="text-3xl mb-4">Automation Should Reduce Chaos, Not Create It</h2>
          <p className="text-tln-text/90 font-medium leading-relaxed mb-4">
            AI automation works best when the workflow is clear, responsibilities are defined, and humans
            remain in control of decisions that matter. TLN focuses on practical automation that can be
            reviewed, refined, and trusted.
          </p>
          <p className="text-tln-text/80 font-medium leading-relaxed">
            Clients communicate with humans. AI assists inside governed workflows. Humans review and
            approve final deliverables.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="max-w-2xl">
          <h2 className="text-4xl mb-4">Ready to Automate the Right Way?</h2>
          <p className="text-tln-text/80 font-medium mb-8 leading-relaxed">
            Tell us what processes are costing you time. We will review your workflows and identify where
            practical, human-reviewed automation can help.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90">
              Request an Automation Review →
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
