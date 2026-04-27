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
