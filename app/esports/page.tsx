import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    slug: "technology",
    title: "esports Technology",
    blurb:
      "Cybersecurity, anti-cheat infrastructure, tournament network engineering, broadcast/streaming security — for game studios, esports orgs, and tournament operators.",
    bullets: [
      "Anti-cheat infrastructure audits",
      "Tournament network + DDoS protection",
      "Streamer / player account security",
      "Game backend pen testing",
    ],
    cta: { href: "/cybersecurity#esports", label: "See esports Cybersecurity →" },
  },
  {
    slug: "history",
    title: "esports Heritage",
    blurb:
      "Founded 2008 in Bloomingdale, IL by Joe \"Mr. P\" Pennacchio. The first esports team bootcamp house. Trained Tyler \"Ninja\" Blevins. Hosted Halo legends — Final Boss, Str8 Rippin, Instinct, Carbon, Triggers Down, Dynasty.",
    bullets: [
      "2008-2012 Pennacchio gamer-house era",
      "Acquired by Rick & Cara Barretto, 2012 — preserved + reborn",
      "Inducted into the International Video Game Hall of Fame, 2019",
      "Original site preserved at archive (read-only)",
    ],
    cta: { href: "/history", label: "Read the Full Story →" },
    archive: { href: "https://esports.thelannetwork.com", label: "Visit the legacy site →" },
  },
  {
    slug: "new",
    title: "esports — New Era",
    blurb:
      "Reviving competitive TLN teams. Sponsoring rosters. Building a 24/7 esports + STEM training center in Indianapolis. The community is coming back together.",
    bullets: [
      "TLN team revival (rosters forming)",
      "Sponsorship + brand partnerships",
      "Indianapolis training center (40+ stations, competition stage)",
      "TLN Reunion event — bringing the original alumni back",
    ],
    cta: { href: "/contact?topic=esports", label: "Sponsor or Join →" },
  },
];

export default function esports() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-start gap-6">
          <Image src="/brand/tln-esports-shield.png" alt="TLN esports" width={120} height={120} priority />
          <div>
            <p className="text-tln-orange text-sm uppercase tracking-widest mb-2">Heritage. Technology. Community.</p>
            <h1 className="font-display text-5xl leading-tight">TLN esports</h1>
            <p className="text-tln-muted text-lg mt-3 max-w-2xl">
              The bootcamp model that pioneered competitive esports — rebuilt for the modern era.
              Three pillars: technology services, preserved heritage, and a returning community.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {sections.map(s => (
          <div key={s.slug} id={s.slug} className="border border-tln-line bg-tln-ink rounded-lg p-6 flex flex-col hover:border-tln-red transition-colors">
            <h2 className="font-display text-2xl mb-3">{s.title}</h2>
            <p className="text-tln-muted text-sm mb-4 leading-relaxed">{s.blurb}</p>
            <ul className="text-sm space-y-1.5 mb-6 text-tln-text">
              {s.bullets.map(b => (
                <li key={b} className="flex gap-2">
                  <span className="text-tln-red">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2">
              <Link href={s.cta.href} className="text-tln-red hover:underline no-underline text-sm font-medium">{s.cta.label}</Link>
              {s.archive && <Link href={s.archive.href} className="text-tln-orange hover:underline no-underline text-xs">{s.archive.label}</Link>}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <p className="font-display text-2xl leading-snug mb-3">One day we want a TLN Reunion.</p>
          <p className="text-tln-muted leading-relaxed">
            Bring Ninja and the original TLN crew back together — Pennacchio, the Halo pros, Bravo, the community
            that helped invent the modern esports bootcamp. Until then, we&apos;re building so the next generation has the same shot.
          </p>
        </div>
      </section>
    </div>
  );
}
