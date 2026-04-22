import Link from "next/link";

const milestones = [
  {
    year: "2012",
    title: "Community Founded",
    desc: "The LAN Network started as Indianapolis's esports fan community — local tournaments, LAN parties, people who loved building things together.",
  },
  {
    year: "2016",
    title: "Infrastructure Roots",
    desc: "Community members began building real infrastructure: streaming rigs, tournament management software, league tooling. The tech instinct was always there.",
  },
  {
    year: "2020",
    title: "Commercial Pivot",
    desc: "TLN formalized as a technology delivery company. First client engagements in custom software and automation for small businesses.",
  },
  {
    year: "2023",
    title: "AI-Augmented Delivery",
    desc: "Adopted AI-augmented engineering as a core delivery model. Built an in-house compute fabric with cryptographic audit trails on every deliverable.",
  },
  {
    year: "2025",
    title: "PrecognitionOS Fleet",
    desc: "Deployed the PCOS agent fleet — a governed multi-agent AI system that delivers production software faster than traditional teams, with full audit-chain attribution.",
  },
  {
    year: "Now",
    title: "AI Software Development Partner",
    desc: "TLN is the bridge between esports-community reliability and modern AI-augmented software delivery. Same values. Far more capability.",
  },
];

export default function History() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Our Story</p>
      <h1 className="font-display text-4xl mb-4">History</h1>
      <p className="text-tln-muted text-lg mb-16 max-w-2xl">
        From LAN parties to AI-augmented software delivery. The community came first —
        the technology followed.
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-tln-line ml-8 hidden md:block" />
        <div className="space-y-12">
          {milestones.map((m) => (
            <div key={m.year} className="md:pl-20 relative">
              <div className="hidden md:flex absolute left-0 top-1 items-center justify-center w-16 h-8 bg-tln-ink border border-tln-line rounded text-tln-accent text-xs font-mono font-bold">
                {m.year}
              </div>
              <div className="md:hidden text-tln-accent text-xs font-mono font-bold uppercase tracking-widest mb-1">{m.year}</div>
              <h3 className="font-display text-xl mb-2">{m.title}</h3>
              <p className="text-tln-muted leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-tln-line pt-10">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90"
        >
          Start a Project with TLN →
        </Link>
      </div>
    </div>
  );
}
