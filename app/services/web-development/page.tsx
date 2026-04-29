import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development | The LAN Network",
  description: "Custom web development from The LAN Network — modern React, Next.js, and full-stack applications built with human-led AI workflows.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">
        Web Development
      </h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        The LAN Network delivers modern, production-ready web applications — from rapid MVPs to
        enterprise-scale platforms — built with human oversight and AI-accelerated delivery.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "Custom Web Applications", desc: "React, Next.js, and full-stack applications tailored to your business processes. Every project starts with a governed spec review." },
          { title: "Agile Scrum Delivery", desc: "The LAN Network employs a fully extended agile scrum model — the most effective way to develop client applications. Sprints keep teams aligned and accountable." },
          { title: "Full-Stack Development", desc: "From database schema to responsive UI, our engineers handle the entire stack. Python, Node.js, TypeScript, PostgreSQL, and cloud-native architectures." },
          { title: "API & Integration", desc: "REST and GraphQL APIs, third-party integrations, payment gateways, CRM connections, and data pipeline design for modern businesses." },
          { title: "Performance & SEO", desc: "Core Web Vitals optimisation, server-side rendering, edge caching, and technical SEO built into every delivery — not bolted on afterwards." },
          { title: "Ongoing Support", desc: "Post-launch retainer options, monitoring dashboards, and dedicated account management. We stay accountable after go-live." },
        ].map(s => (
          <div key={s.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <h3 className="font-display text-xl mb-2 text-tln-text">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">Our Delivery Model</h2>
        <p className="text-tln-muted mb-4">
          At The LAN Network, we understand it&apos;s important to find efficient, team-oriented individuals.
          We want your business to thrive — so we staff every project with a dedicated Project Manager who
          keeps the team on track and reports directly to your Account Manager.
        </p>
        <p className="text-tln-muted">
          We use AI-assisted development throughout — not to replace engineers, but to accelerate delivery
          while keeping humans accountable at every decision point. Our governed AI workflows mean you get
          speed without sacrificing quality or oversight.
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
