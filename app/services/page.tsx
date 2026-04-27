import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | The LAN Network",
  description: "Human-led technology delivery: AI development, automation, cybersecurity, and apprenticeship pathways. Governed AI workflows.",
};

const services = [
  {
    title: "AI Technology Development",
    desc: "Custom AI-assisted software, prototypes, MVPs, dashboards, and internal tools — built with human oversight.",
    href: "/ai-technology-development",
    tag: "Development",
  },
  {
    title: "AI Automation",
    desc: "Workflow automation, AI-assisted operations, business process redesign, documentation systems.",
    href: "/ai-automation",
    tag: "Automation",
  },
  {
    title: "Governed AI Workflows",
    desc: "PrecognitionOS-powered workflows with QSurface evidence trails. Human review at every checkpoint.",
    href: "/precognitionos",
    tag: "Governance",
  },
  {
    title: "Cybersecurity",
    desc: "Cyber-aware development, security reviews, risk assessments, and secure implementation practices.",
    href: "/cybersecurity",
    tag: "Security",
  },
  {
    title: "Apprenticeship Pathways",
    desc: "Technology, cybersecurity, and AI training pathways connected to real-world project experience.",
    href: "/apprenticeships",
    tag: "Training",
  },
];

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Services</p>
      <h1 className="font-display text-4xl md:text-5xl mb-4">What TLN Delivers</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Human-led delivery. Transparent pricing. Audit-trail receipts on every project.
      </p>
      <div className="space-y-4">
        {services.map((s) => (
          <Link key={s.title} href={s.href} className="block border border-tln-line rounded-lg p-6 hover:border-tln-red transition group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tln-red mb-2 block">{s.tag}</span>
                <h2 className="font-display text-xl mb-2 group-hover:text-tln-red transition">{s.title}</h2>
                <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
              <span className="text-tln-red text-lg ml-4 shrink-0 group-hover:translate-x-1 transition">→</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 border border-tln-line rounded-lg p-6 text-center">
        <p className="text-tln-muted mb-4">Not sure which service fits?</p>
        <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm hover:opacity-90">
          Start a Conversation →
        </Link>
      </div>
    </div>
  );
}
