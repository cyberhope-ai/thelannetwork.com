import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staff Augmentation | The LAN Network",
  description: "Senior engineers embedded in your team on demand — vetted, onboarded fast, operating within your existing SDLC. The LAN Network staff augmentation.",
};

export default function StaffAugmentationPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">Staff Augmentation</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Need to scale your engineering team fast without the overhead of full hiring?
        The LAN Network embeds senior engineers directly into your team — vetted, onboarded quickly,
        and operating within your existing tools and processes.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "On-Demand Senior Engineers", desc: "Access a pool of experienced developers across React, Python, Node.js, mobile, cloud, and AI. Scale up or down as project demands shift." },
          { title: "Fast Onboarding", desc: "Our engineers are trained to ramp quickly. We expect full productivity within a week — not a month. Your sprint cadence doesn't wait." },
          { title: "Your Tools, Your Process", desc: "We work inside your existing SDLC — Jira, Linear, GitHub, Slack, whatever you use. No new tooling forced on your team." },
          { title: "Vetted for Culture Fit", desc: "Technical skill is table stakes. We screen for communication, ownership mindset, and team compatibility — the things that make augmentation actually work." },
          { title: "Flexible Engagement", desc: "Weekly, monthly, or project-based. Scale from one embedded engineer to a full delivery pod with a TLN Project Manager included." },
          { title: "Human Accountability", desc: "Your augmented engineer reports to you directly. No account manager buffer. No offshore handoff. One person, one accountability chain." },
        ].map(s => (
          <div key={s.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <h3 className="font-display text-xl mb-2 text-tln-text">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">How We Build Your Extended Team</h2>
        <p className="text-tln-muted mb-4">
          The LAN Network understands that finding efficient, team-oriented engineers is critical.
          We want your business to thrive — so we go beyond résumés to place people who ship.
        </p>
        <p className="text-tln-muted">
          Our placement process: discovery call to understand your stack and culture → candidate shortlist
          within 48 hours → structured technical screen → trial week with a clear success metric.
          If the fit isn&apos;t right in the first week, we replace at no extra cost.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white font-bold uppercase tracking-wide rounded-lg no-underline hover:opacity-90 text-center">
          Start a Conversation
        </Link>
        <Link href="/services" className="inline-block px-6 py-3 border border-tln-line text-tln-muted font-bold uppercase tracking-wide rounded-lg no-underline hover:border-tln-red hover:text-tln-red text-center">
          All Services
        </Link>
      </div>
    </main>
  );
}
