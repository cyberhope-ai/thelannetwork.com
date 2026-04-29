import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Services | The LAN Network",
  description: "Ongoing platform reliability, monitoring, incident response, and feature delivery under a predictable monthly retainer from The LAN Network.",
};

export default function ManagedServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">Managed Services</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        We don&apos;t disappear after go-live. The LAN Network provides ongoing platform ownership,
        reliability engineering, and continuous delivery under a predictable monthly retainer.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "Platform Reliability", desc: "Uptime monitoring, alerting, on-call rotation, and incident response with documented post-mortems. We own it so you can sleep." },
          { title: "Continuous Delivery", desc: "Regular feature sprints under a retainer. New functionality, bug fixes, dependency upgrades, and performance improvements — on a steady cadence." },
          { title: "Monitoring & Observability", desc: "Dashboards, log aggregation, anomaly detection, and performance tracking across your full stack. Visibility into what matters." },
          { title: "Security Patching", desc: "CVE monitoring, dependency audits, and proactive patching. We keep your platform compliant and your exposure window small." },
          { title: "Predictable Cost", desc: "Monthly retainer pricing with a clear scope of work. No surprise invoices. No 'emergency' hourly rates. Budget certainty for your finance team." },
          { title: "Dedicated Account Manager", desc: "One human owns the relationship. Monthly review calls, sprint demos, and a direct line when something needs attention." },
        ].map(s => (
          <div key={s.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <h3 className="font-display text-xl mb-2 text-tln-text">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">What a Retainer Looks Like</h2>
        <p className="text-tln-muted mb-4">
          A typical managed services engagement starts with a 30-day transition period where we document
          your architecture, set up monitoring, and get familiar with your codebase. Then we move to a
          steady monthly rhythm: sprint planning, delivery, review, report.
        </p>
        <p className="text-tln-muted">
          You get a dedicated team that knows your system, cares about its health, and is accountable
          to a clear SLA. No junior engineers learning on your production system at 2am.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white font-bold uppercase tracking-wide rounded-lg no-underline hover:opacity-90 text-center">
          Discuss a Retainer
        </Link>
        <Link href="/services" className="inline-block px-6 py-3 border border-tln-line text-tln-muted font-bold uppercase tracking-wide rounded-lg no-underline hover:border-tln-red hover:text-tln-red text-center">
          All Services
        </Link>
      </div>
    </main>
  );
}
