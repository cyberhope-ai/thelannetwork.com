import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | The LAN Network",
  description: "Full-service software development, AI integration, cybersecurity, and managed services from The LAN Network — human-led, governed delivery.",
};

const primary = [
  { title: "Web Development",         desc: "Custom React, Next.js, and full-stack applications — MVPs to enterprise scale.", href: "/services/web-development",        tag: "Development" },
  { title: "Mobile Development",       desc: "React Native and native iOS/Android apps, built to production standards.",       href: "/services/mobile-development",      tag: "Mobile" },
  { title: "AI Integration",           desc: "LLMs, RAG pipelines, vector databases, and governed agent workflows.",           href: "/services/ai-integration",          tag: "AI" },
  { title: "Cloud Infrastructure",     desc: "AWS, GCP, Azure architecture, IaC, CI/CD, and cost-optimised deployments.",      href: "/services/cloud-infrastructure",    tag: "Cloud" },
  { title: "Staff Augmentation",       desc: "Senior engineers embedded in your team on demand — vetted and onboarded fast.",  href: "/services/staff-augmentation",      tag: "Staffing" },
  { title: "Managed Services",         desc: "Ongoing platform reliability, monitoring, incident response, and retainer delivery.", href: "/services/managed-services",    tag: "Support" },
  { title: "Digital Transformation",   desc: "Legacy modernisation, process automation, and technology roadmapping.",          href: "/services/digital-transformation",  tag: "Strategy" },
];

const specialist = [
  { title: "AI Technology Development", desc: "PrecognitionOS-powered AI development with governed workflows and QSurface evidence trails.", href: "/ai-technology-development", tag: "Specialist AI" },
  { title: "AI Automation",             desc: "Workflow automation, business process redesign, and AI-assisted operations.",                  href: "/ai-automation",             tag: "Automation" },
  { title: "Cybersecurity",             desc: "Penetration testing, security reviews, risk assessments, and secure implementation.",           href: "/cybersecurity",             tag: "Security" },
  { title: "Apprenticeship Pathways",   desc: "Technology and cybersecurity training connected to real-world project experience.",            href: "/apprenticeships",           tag: "Training" },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-tln-red text-xs uppercase tracking-[0.2em] font-bold mb-4">Services</p>
      <h1 className="font-display text-4xl md:text-5xl mb-4">What The LAN Network Delivers</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Human-led delivery. Transparent pricing. Audit-trail receipts on every project.
        From rapid MVPs to enterprise-scale platforms — governed, accountable, and built to last.
      </p>

      {/* Primary services */}
      <h2 className="font-display text-2xl mb-6 text-tln-text">Software & Technology Services</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {primary.map(s => (
          <Link key={s.title} href={s.href} className="block border border-tln-line rounded-xl p-6 hover:border-tln-red transition group bg-tln-ink no-underline">
            <span className="text-xs font-bold uppercase tracking-widest text-tln-red mb-2 block">{s.tag}</span>
            <h3 className="font-display text-lg mb-2 text-tln-text group-hover:text-tln-red transition">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>

      {/* Specialist services */}
      <h2 className="font-display text-2xl mb-6 text-tln-text">Specialist Practices</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {specialist.map(s => (
          <Link key={s.title} href={s.href} className="block border border-tln-line rounded-xl p-6 hover:border-tln-red transition group bg-tln-ink no-underline">
            <span className="text-xs font-bold uppercase tracking-widest text-tln-red mb-2 block">{s.tag}</span>
            <h3 className="font-display text-lg mb-2 text-tln-text group-hover:text-tln-red transition">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>

      {/* Case studies + CTA */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/case-studies" className="block border border-tln-line rounded-xl p-6 hover:border-tln-red transition bg-tln-ink no-underline group">
          <span className="text-xs font-bold uppercase tracking-widest text-tln-red mb-2 block">Our Work</span>
          <h3 className="font-display text-lg mb-2 text-tln-text group-hover:text-tln-red transition">Case Studies →</h3>
          <p className="text-tln-muted text-sm">8 real projects. See how we deliver.</p>
        </Link>
        <div className="border border-tln-line rounded-xl p-6 bg-tln-ink text-center flex flex-col justify-center">
          <p className="text-tln-muted text-sm mb-4">Not sure which service fits your project?</p>
          <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded-lg font-bold uppercase tracking-wide text-sm no-underline hover:opacity-90">
            Start a Conversation →
          </Link>
        </div>
      </div>
    </div>
  );
}
