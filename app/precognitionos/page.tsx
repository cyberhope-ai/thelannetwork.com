import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governed AI Workflows | The LAN Network",
  description: "TLN is a licensed development and implementation partner for selected PrecognitionOS-enabled workflows developed by CyberHope AI.",
};

const accelerators = [
  "Scoping", "Requirements gathering", "Documentation", "Research",
  "Development support", "QA checklists", "Workflow automation", "Reporting", "Training materials",
];

export default function PrecognitionOS() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Governed AI</p>
        <h1 className="text-5xl md:text-6xl mb-6">Governed AI Workflows Powered by PrecognitionOS Principles</h1>
        <p className="text-xl text-tln-text/90 font-medium mb-4 max-w-2xl leading-relaxed">
          TLN is a licensed development and implementation partner for selected PrecognitionOS-enabled workflows.
        </p>
        <p className="text-tln-text/80 font-medium mb-8 max-w-2xl leading-relaxed">
          PrecognitionOS is developed by CyberHope AI as governed AI infrastructure for accountable
          autonomous work. The LAN Network applies selected governed AI workflows in real-world client
          delivery, AI development, cybersecurity, documentation, QA, and apprenticeship-supported
          projects.
        </p>
        <a
          href="https://cyberhopeai.com"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90"
        >
          Learn About CyberHope AI →
        </a>
      </section>

      {/* What This Means for Clients */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-4">Faster Workflows, Stronger Oversight</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-6">
              For TLN clients, governed AI workflows can help accelerate:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {accelerators.map(a => (
                <div key={a} className="flex items-center gap-2 text-tln-text/85 font-medium text-sm">
                  <span className="text-tln-red">→</span> {a}
                </div>
              ))}
            </div>
            <p className="text-tln-text/80 font-medium leading-relaxed mt-6 text-sm">
              Human review remains part of the delivery model.
            </p>
          </div>

          <div>
            <h2 className="text-3xl mb-4">AI Does Not Replace Accountability</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
              TLN does not use governed AI workflows to remove responsibility, obscure who is doing the
              work, or replace human communication.
            </p>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              Instead, AI-assisted workflows are used to support human-led project delivery. Clients
              communicate with humans. Humans lead scope, review, and acceptance. AI is a tool in the
              workflow, not a replacement for accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Link to CyberHope AI */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-8 max-w-2xl">
          <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">For Platform Details</p>
          <h2 className="text-3xl mb-3">CyberHope AI Develops PrecognitionOS</h2>
          <p className="text-tln-text/80 font-medium leading-relaxed mb-6">
            CyberHope AI is the company developing PrecognitionOS. For platform, investor, and governed
            AI infrastructure details, visit CyberHopeAI.com.
          </p>
          <a
            href="https://cyberhopeai.com"
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90"
          >
            Visit CyberHope AI →
          </a>
        </div>
      </section>
    </div>
  );
}
