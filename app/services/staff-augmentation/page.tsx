import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staff Augmentation | The LAN Network",
  description: "Senior engineers embedded in your team on demand — vetted, onboarded fast, and operating within your existing SDLC.",
};

export default function ServicePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">Staff Augmentation</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">Senior engineers embedded in your team on demand — vetted, onboarded fast, and operating within your existing SDLC.</p>
      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">How The LAN Network Delivers</h2>
        <p className="text-tln-muted mb-4">
          The LAN Network pairs experienced engineers with governed AI workflows to deliver faster,
          with full human accountability at every stage. Every engagement starts with a discovery
          session and a clear spec — no surprises, no scope creep.
        </p>
        <p className="text-tln-muted">
          Our Project Managers own delivery end-to-end and report directly to your team.
          We use agile sprints so you see progress weekly, not at the end of a six-month contract.
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
