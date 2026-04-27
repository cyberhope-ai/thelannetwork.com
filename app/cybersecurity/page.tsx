import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity-Aware AI Development | The LAN Network",
  description: "Cybersecurity-aware technology development, AI workflow risk review, cyber hygiene, training, and secure implementation support.",
};

const services = [
  {
    title: "Cyber Hygiene Reviews",
    desc: "Practical reviews of accounts, access, workflows, endpoints, and common risk areas.",
  },
  {
    title: "AI Workflow Risk Review",
    desc: "Review how AI tools are being used, where sensitive data may flow, and where human approval is needed.",
  },
  {
    title: "Secure Implementation Support",
    desc: "Security-aware setup for dashboards, tools, automations, and internal systems.",
  },
  {
    title: "Training and Awareness",
    desc: "Cybersecurity awareness for teams, apprentices, students, and organizations adopting AI tools.",
  },
  {
    title: "Esports and Event Security",
    desc: "Security planning for digital events, gaming environments, streaming operations, and online communities.",
  },
];

export default function Cybersecurity() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Cybersecurity</p>
        <h1 className="text-5xl md:text-6xl mb-6">Cybersecurity-Aware Technology Development</h1>
        <p className="text-xl text-tln-text/90 font-medium mb-4 max-w-2xl leading-relaxed">
          Secure thinking for AI systems, software, workflows, and training environments.
        </p>
        <p className="text-tln-text/80 font-medium mb-8 max-w-2xl leading-relaxed">
          TLN&apos;s cybersecurity work supports the safe adoption of AI and technology systems. We
          help organizations think through risks, improve cyber hygiene, review workflows, and build
          with security awareness from the start.
        </p>
        <Link
          href="/start-a-project"
          className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90"
        >
          Talk to Us About Cybersecurity →
        </Link>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-10">Cybersecurity Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors">
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-tln-text/80 text-sm leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI + Cybersecurity */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-tln-red pl-6">
            <h2 className="text-3xl mb-4">AI Adoption Needs Cyber Discipline</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
              AI systems introduce new risks: data leakage, tool misuse, hallucinated outputs,
              unauthorized access, and unclear accountability.
            </p>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              TLN approaches AI development with cybersecurity awareness, human oversight, and
              practical governance — because security is not an afterthought, it is part of the
              delivery model.
            </p>
          </div>
          <div>
            <h2 className="text-3xl mb-4">Esports Roots, Cybersecurity Discipline</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
              TLN&apos;s cybersecurity instincts were built defending live esports environments from
              DDoS attacks, account hijacking, and network intrusions before cybersecurity was a
              mainstream concern.
            </p>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              That same discipline now informs how we approach AI workflow security, data hygiene,
              and secure implementation for every client project.
            </p>
          </div>
        </div>
      </section>

      {/* Authorized partner */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="bg-tln-ink border-2 border-tln-line rounded-lg p-8 max-w-2xl">
          <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Authorized Partner</p>
          <h2 className="text-2xl mb-3">Arctic Wolf — Managed Detection &amp; Response</h2>
          <p className="text-tln-text/80 font-medium leading-relaxed">
            TLN is an authorized Arctic Wolf partner for Managed Detection and Response (MDR),
            bringing enterprise-grade cybersecurity monitoring to clients who need continuous
            threat coverage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="max-w-2xl">
          <h2 className="text-4xl mb-4">Ready to Build More Securely?</h2>
          <p className="text-tln-text/80 font-medium mb-8 leading-relaxed">
            Whether you need a cyber hygiene review, an AI workflow risk assessment, or
            security-aware implementation support, TLN can help.
          </p>
          <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90">
            Talk to Us About Cybersecurity →
          </Link>
        </div>
      </section>
    </div>
  );
}
