import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Pen testing, network audits, red team. We were doing this in 2010 to keep hackers from DDoSing our Halo streams. Now we do it for the world.",
    cta: { href: "/cybersecurity", label: "See Cybersecurity →" },
  },
  {
    icon: "🎮",
    title: "esports Cybersecurity",
    desc: "Anti-cheat audits, tournament network defense, streamer account security. The only pen-test firm born inside a competitive esports house.",
    cta: { href: "/cybersecurity#esports", label: "esports Vertical →" },
  },
  {
    icon: "⚡",
    title: "AI Software Development",
    desc: "AI-native software builds, custom automations, agentic systems — every deliverable signed with a cryptographic audit trail.",
    cta: { href: "/ai-development", label: "AI Development →" },
  },
];

export default function Home() {
  return (
    <div>
      {/* Partner ribbon */}
      <div className="bg-tln-ink border-b border-tln-line">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center gap-4 text-sm text-tln-text/85 font-medium flex-wrap">
          <span className="text-tln-red font-bold uppercase tracking-wider text-xs">Authorized Partner</span>
          <span className="text-tln-muted">·</span>
          <span className="font-bold">Arctic Wolf</span>
          <span className="text-tln-muted">— Managed Detection & Response (MDR)</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Born Chicago 2008 · Reborn Indianapolis 2025
            </p>
            <h1 className="text-5xl md:text-6xl mb-6">
              The cybersecurity company that started as the world&apos;s first esports house.
            </h1>
            <p className="text-lg text-tln-text/90 mb-8 leading-relaxed font-medium max-w-2xl">
              Founded by Joe &quot;Mr. P&quot; Pennacchio in a Chicago suburb. Trained the world&apos;s best Halo
              pros and teams. <span className="text-tln-red font-bold">Tyler &quot;Ninja&quot; Blevins lived in our house</span> — the same lab
              we work in today. We hacked together a T1 line and defended our live streams from
              hackers before cybersecurity was a buzzword. <span className="font-bold">That&apos;s where TLN comes from.</span>
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm">
                Start a Project →
              </Link>
              <Link href="/history" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors">
                Read the History
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/brand/tln-cybersecurity-shield.png" alt="TLN Shield" width={280} height={280} priority />
          </div>
        </div>
      </section>

      {/* Service tiles */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-10">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-2xl mb-3">{s.title}</h3>
              <p className="text-tln-text/85 text-sm leading-relaxed mb-4 font-medium">{s.desc}</p>
              <Link href={s.cta.href} className="text-tln-red font-bold text-sm uppercase tracking-wider">{s.cta.label}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Origin-story strip */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <p className="text-2xl md:text-3xl leading-tight mb-4">
            We didn&apos;t pivot to cybersecurity. We started there in 2010.
          </p>
          <p className="text-tln-text/90 leading-relaxed font-medium">
            Streaming live Halo matches to the world from a residential gamer house meant constant
            DDoS attacks, attempted server reboots, and account-hijack attempts on our pro players.
            Rick &amp; Arek hacked together a T1 line and built defenses by hand. <span className="font-bold">That instinct
            for protecting infrastructure became TLN&apos;s second life.</span>
          </p>
          <a
            href="https://esports.thelannetwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-5 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline"
          >
            Visit the original 2008–2012 site (museum) ↗
          </a>
        </div>
      </section>

      {/* Proof stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { v: "2008", l: "Founded (Chicago)" },
            { v: "Ninja", l: "Trained here, lived here" },
            { v: "17 yrs", l: "Tech innovation lineage" },
            { v: "100%", l: "Audit-trail attributable work" },
            { v: "2,000+", l: "Hoosiers trained · VGP charity partner" },
          ].map(p => (
            <div key={p.l}>
              <div className="text-4xl text-tln-red font-display font-black">{p.v}</div>
              <div className="text-xs uppercase tracking-wider text-tln-muted mt-1 font-bold">{p.l}</div>
            </div>
          ))}
        </div>
      </section>


      {/* Apprenticeships + Education partner */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center bg-tln-ink border-2 border-tln-line rounded-lg p-8">
          <div>
            <p className="text-tln-red text-xs uppercase tracking-[0.2em] font-bold mb-3">Education + Apprenticeships</p>
            <h2 className="text-3xl mb-3">Workforce-ready apprentices through Hope Training Academy.</h2>
            <p className="text-tln-text/90 leading-relaxed font-medium max-w-2xl">
              TLN partners with <span className="font-bold text-tln-text">Hope Training Academy</span> — a registered apprenticeship sponsor —
              to build the next generation of cybersecurity, coding, and AI talent. Hire an apprentice
              through HTA, mentor them on a real TLN engagement, and supply your team with talent
              that already knows how we work.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://hopetrainingacademy.org/hope-training-academy-apprenticeship-ambassador/"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-xs text-center no-underline whitespace-nowrap"
            >
              Become an Apprenticeship Ambassador →
            </a>
            <a
              href="https://hopetrainingacademy.org/"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-5 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-xs text-center hover:border-tln-red transition-colors no-underline whitespace-nowrap"
            >
              All HTA Programs ↗
            </a>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <p className="text-3xl mb-3 leading-tight">
            Every deliverable signed with a cryptographic audit chain.
          </p>
          <p className="text-tln-text/90 leading-relaxed font-medium">
            Your compliance team can verify exactly which engineer touched what hardware at what
            second. Industry-first transparency — built on our own AI-augmented compute fabric.
          </p>
        </div>
      </section>
    </div>
  );
}
