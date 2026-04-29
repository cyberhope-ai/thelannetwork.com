import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The LAN Network | From Esports to AI Technology Development",
  description: "The LAN Network evolved from esports and team-based technology training into human-led AI development, cybersecurity, automation, and apprenticeship-supported delivery.",
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Our Story</p>
        <h1 className="text-5xl md:text-6xl mb-6">
          From Esports Training House to AI Technology Development Company
        </h1>
        <p className="text-xl text-tln-text/90 font-medium max-w-2xl leading-relaxed">
          The LAN Network was born in the world of teams, games, live digital environments, and
          technical pressure. Today, that DNA powers our work in AI, cybersecurity, and apprenticeships.
        </p>
      </section>

      {/* Origin Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Origin</p>
            <h2 className="text-3xl mb-4">The Esports Roots</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
              TLN&apos;s origin story began with esports and team-based training. Esports required more
              than gaming skill. It required networks, systems, live operations, coaching,
              communication, performance under pressure, and young talent learning in public.
            </p>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              That experience became the foundation for TLN&apos;s broader work in technology training,
              cybersecurity, workforce development, and AI-era systems.
            </p>
          </div>

          <div className="border-l-4 border-tln-red pl-6">
            <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Evolution</p>
            <h2 className="text-3xl mb-4">The Evolution</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
              Over time, TLN&apos;s mission expanded from esports into practical technology pathways:
              cybersecurity awareness, apprenticeships, digital operations, AI-assisted development,
              and real-world project delivery.
            </p>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              The AI era now needs the same kind of discipline esports demanded: teams, tools, trust,
              pressure-tested workflows, and humans who know how to operate inside complex systems.
            </p>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="max-w-3xl">
          <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Today</p>
          <h2 className="text-3xl mb-4">The LAN Network Today</h2>
          <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
            Today, TLN is focused on human-led AI technology development, AI automation,
            cybersecurity-aware implementation, and apprenticeship-supported talent pathways.
          </p>
          <p className="text-tln-text/80 font-medium leading-relaxed mb-8">
            We help organizations turn AI ideas into practical systems while keeping humans
            responsible for communication, review, security, and delivery.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/ai-technology-development" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90">
              See What We Build →
            </Link>
            <Link href="/how-we-deliver" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">
              How We Deliver
            </Link>
          </div>
        </div>
      </section>

      {/* Software Development Capability */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-tln-red">What We Build</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-tln-text mb-6">Software Development Capability</h2>
        <p className="text-tln-muted text-lg mb-10 max-w-2xl">
          The LAN Network has evolved into a full-service software development partner.
          We deliver custom applications, AI integrations, cloud infrastructure, and ongoing managed services —
          all under a single, accountable team.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Agile Delivery", desc: "Weekly sprint reviews. You see progress constantly — not at the end of a six-month contract." },
            { title: "Human-Led AI", desc: "AI accelerates our engineers — every deliverable is reviewed and signed off by a human with accountability for the outcome." },
            { title: "Full Stack", desc: "React, Next.js, Python, Node.js, PostgreSQL, AWS, GCP. We own the full stack so nothing falls between vendors." },
            { title: "Governed Process", desc: "Every project starts with a governed spec review. Requirements locked, change requests documented, delivery tracked against a measurable definition of done." },
            { title: "Project Management", desc: "Each engagement has a dedicated PM who reports directly to your team. One point of accountability, clear comms, no surprises." },
            { title: "Post-Launch Support", desc: "Retainer options, monitoring dashboards, and a responsive support SLA for every production system we build." },
          ].map(s => (
            <div key={s.title} className="border border-tln-line rounded-xl p-5 bg-tln-ink hover:border-tln-red/40 transition-colors">
              <h3 className="font-display text-lg mb-2 text-tln-text">{s.title}</h3>
              <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" className="inline-block px-6 py-3 bg-tln-red text-white font-bold uppercase tracking-wide rounded-lg no-underline hover:opacity-90 text-center">
            View All Services
          </Link>
          <Link href="/case-studies" className="inline-block px-6 py-3 border border-tln-line text-tln-muted font-bold uppercase tracking-wide rounded-lg no-underline hover:border-tln-red hover:text-tln-red text-center">
            See Case Studies
          </Link>
        </div>
      </section>

      {/* Esports archive link */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="bg-tln-ink border-2 border-tln-line rounded-lg p-8 max-w-2xl">
          <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Heritage Archive</p>
          <h2 className="text-2xl mb-3">The Original TLN (2008–2012)</h2>
          <p className="text-tln-text/80 font-medium leading-relaxed mb-6">
            The original TLN esports site remains available as an archive of the company&apos;s
            esports heritage and early team-training model.
          </p>
          <a href="https://esports.thelannetwork.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-5 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">
            Visit TLN Esports Archive ↗
          </a>
        </div>
      </section>
    </div>
  );
}
