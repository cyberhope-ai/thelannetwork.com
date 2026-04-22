import Link from "next/link";

const members = [
  {
    handle: "Rick B.",
    role: "Founder & CEO",
    bio: "Built TLN from Indianapolis LAN party roots. Founder of the community, lead on client strategy and partnerships.",
  },
  {
    handle: "The TLN AI Fleet",
    role: "Engineering — AI-Augmented",
    bio: "PrecognitionOS multi-agent system. Handles software delivery, documentation, security review, and deployment. Every output cryptographically attributed.",
  },
  {
    handle: "Community Contributors",
    role: "Network — Esports & Tech",
    bio: "TLN has always been community-built. Designers, streamers, developers, and tournament organizers who've been with us since the early LAN days.",
  },
];

export default function EsportsTeam() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/esports" className="hover:text-tln-accent">Esports</Link>
        <span className="mx-2">/</span>
        <span>Team</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Esports Division</p>
      <h1 className="font-display text-4xl mb-4">Esports Team</h1>
      <p className="text-tln-muted text-lg mb-16 max-w-2xl">
        The people behind TLN&apos;s esports technology practice — from the founder who ran
        Indianapolis LAN parties to the AI fleet that ships the code.
      </p>

      <div className="space-y-6 mb-16">
        {members.map((m) => (
          <div
            key={m.handle}
            className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display text-xl">{m.handle}</h3>
              <span className="text-xs text-tln-accent border border-tln-accent/30 rounded px-2 py-1 flex-shrink-0">
                {m.role}
              </span>
            </div>
            <p className="text-tln-muted leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-tln-line pt-10">
        <p className="text-tln-muted mb-6">
          Want to work with TLN on esports infrastructure? We collaborate with community
          organizers, tournament operators, and esports brands.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90"
        >
          Get in Touch →
        </Link>
      </div>
    </div>
  );
}
