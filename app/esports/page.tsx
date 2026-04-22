import Link from "next/link";

const capabilities = [
  {
    title: "Tournament Infrastructure",
    desc: "Custom bracket management, registration systems, and real-time leaderboards. Built for scale — from 50-player local events to regional circuits.",
  },
  {
    title: "Streaming & Broadcast Tooling",
    desc: "OBS integration, automated overlays, Discord bot coordination, and multi-platform stream management. Production-grade without the production budget.",
  },
  {
    title: "League & Team Portals",
    desc: "Player profiles, stat tracking, scheduling automation, and sponsor dashboards. Full-stack portals that run themselves.",
  },
  {
    title: "Community Platforms",
    desc: "Discord bots, web communities, event calendars, and engagement tooling. We built TLN's own community infrastructure — we know what works.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Game data pipelines, performance dashboards, and automated reporting for teams, leagues, and sponsors.",
  },
  {
    title: "Sponsorship & Monetization",
    desc: "Affiliate tracking, sponsor portals, and revenue tooling. Connect your esports audience to the brands that want to reach them.",
  },
];

export default function Esports() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Vertical</p>
      <h1 className="font-display text-4xl mb-4">Esports Technology</h1>
      <p className="text-tln-muted text-lg mb-4 max-w-2xl">
        TLN started in esports. We know the community, the workflows, and the infrastructure gaps
        that off-the-shelf tools don&apos;t solve.
      </p>
      <p className="text-tln-muted text-lg mb-16 max-w-2xl">
        We build custom tournament infrastructure, league management platforms, streaming tooling,
        and community tech — faster and cheaper than traditional agencies, because we&apos;ve been
        running this kind of infrastructure ourselves since 2012.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="border border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-accent transition-colors"
          >
            <h3 className="font-display text-lg mb-2">{c.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="border-l-4 border-tln-accent pl-6 mb-16 max-w-2xl">
        <p className="text-tln-muted leading-relaxed">
          Every esports project ships with a cryptographic audit trail — a signed delivery receipt
          that proves exactly what was built, when, and on which infrastructure. Useful when your
          league commissioner or sponsor wants accountability.
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90"
      >
        Build Esports Infrastructure →
      </Link>
    </div>
  );
}
