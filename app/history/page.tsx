<<<<<<< Updated upstream
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
=======
import Image from "next/image";
import Link from "next/link";

const era1 = [
  { src: "/history/01-house-life-collage.png", caption: "Inside the TLN house — pros training, hanging, building the friendships that would define a generation of competitive gaming." },
  { src: "/history/02-viral-design-6yrs-ago.png", caption: "The house exterior. Mr. P feeding the teams. The architecture of a new kind of esports institution." },
];

const era2 = [
  { src: "/history/03-premiere-esports-training-center.png", caption: 'thelannetwork.com — "premiere eSports Training Center and online eSports Professional Gaming portal in the world, 2008-2012." MLG championship winners lived and trained at the Gamer House.' },
  { src: "/history/04-first-esports-media-company.png", caption: "One of the world's first esports professional gaming media companies. Full-stack: news / media / stream / forum / fantasy / store." },
  { src: "/history/05-championship-trophy-pro-circuit.png", caption: "Trophy lifts. MLG Pro Circuit team photos. The receipts." },
  { src: "/history/06-gamer-house-mtv-pilot.png", caption: 'TLN filmed and produced the original "The Gamer House" pilot for MTV. In 2011 this was unprecedented. The industry caught up a decade later.' },
];

const era3 = [
  { src: "/history/08-ninja-then-and-now.png", caption: 'Tyler "Ninja" Blevins — early days at the TLN PC vs. the global icon he became. He didn\'t just train here. He lived here.' },
  { src: "/history/09-ninja-tln-crew-collage.png", caption: "Ninja with the TLN crew. The same room that hosts our lab today." },
  { src: "/history/07-ninja-cnbc-500k-month.png", caption: 'CNBC: "Tyler \'Ninja\' Blevins says he makes $500,000 a month playing video games." 3.7M Twitch followers. 5M YouTube subscribers. From the TLN house to the Time 100.' },
  { src: "/history/10-ninja-samsung-fortnite.png", caption: "Samsung Galaxy Note Fortnite Skin. Marshmello music video. Mainstream cultural icon. We know him from before." },
];

const phases = [
  {
    year: "2008-2012",
    title: "The TLN Gamer House (Chicago)",
    body:
      'Joe "Mr. P" Pennacchio founds The LAN Network in a Chicago suburb. The first esports team bootcamp house in the world. Halo pros — Final Boss, Str8 Rippin, Instinct, Carbon, Triggers Down, Dynasty — live and train under one roof. Mini-tournaments in the basement. Live streams to a global Halo audience. Rick & Arek hack together a T1 line and defend the streams from constant DDoS attacks. Cybersecurity, before that was a word people used.',
  },
  {
    year: "2011",
    title: "MTV Pilot — The Gamer House",
    body:
      'TLN films and produces "The Gamer House" pilot for MTV. The reality-TV-meets-esports format is unprecedented in 2011. Today it\'s a genre. We were a decade early.',
  },
  {
    year: "2012",
    title: "Acquisition by Rick & Cara Barretto",
    body:
      "When the original Pennacchio operation winds down, Rick & Cara Barretto acquire The LAN Network. They've been thinking about how passion → skill acquisition translates from gaming to education. TLN becomes the foundation.",
  },
  {
    year: "2013-2018",
    title: "Video Game Palooza · Game On · Hope Training Academy",
    body:
      "What we learned from competitive gamers became a curriculum. Video Game Palooza turned youth gaming events into STEM gateways. Game On grew into one of the largest esports gaming centers in the world. Hope Training Academy formalized the model — 2,000+ students trained in IT and cybersecurity.",
  },
  {
    year: "2019",
    title: "International Video Game Hall of Fame",
    body:
      "Rick Barretto and Video Game Palooza inducted by industry veterans Walter Day and Billy Mitchell. The same year, TLN alumnus Ninja is named to Time's 100 Most Influential People.",
  },
  {
    year: "2024-2025",
    title: "TLN Reborn: Cybersecurity · esports · Custom Tech",
    body:
      "The Indianapolis training center comes online. The same lab where Ninja once practiced now runs a 45-blade compute fabric and a 24-GPU AI cluster. TLN relaunches with three pillars: cybersecurity (the spear point), esports (the heritage and the niche differentiator), custom technology development (the bench). CyberHope AI provides the infrastructure foundation.",
>>>>>>> Stashed changes
  },
];

export default function History() {
  return (
<<<<<<< Updated upstream
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
=======
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">17 Years · 5 Eras · One Vision</p>
        <h1 className="text-5xl md:text-6xl mb-6">The story of The LAN Network.</h1>
        <p className="text-lg text-tln-text/90 leading-relaxed font-medium max-w-3xl">
          From the Chicago basement that helped invent competitive esports — to the Indianapolis lab
          where we build cryptographically-attributable AI infrastructure today. The thread that
          connects them: <span className="font-bold text-tln-text">passion drives skill drives outcomes</span>.
          We learned it from Halo pros. We applied it to education. We&apos;re applying it now to cybersecurity.
        </p>
      </section>

      {phases.map((p, i) => (
        <section key={p.year} className="max-w-5xl mx-auto px-6 py-12 border-t border-tln-line">
          <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
            <div>
              <div className="text-tln-red font-display text-3xl font-black">{p.year}</div>
              <div className="text-xs uppercase tracking-wider text-tln-muted mt-1 font-bold">Phase {i + 1}</div>
            </div>
            <div>
              <h2 className="text-3xl mb-4">{p.title}</h2>
              <p className="text-tln-text/90 leading-relaxed font-medium">{p.body}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-3xl mb-2">Inside the Gamer House</h2>
        <p className="text-tln-muted text-sm font-bold uppercase tracking-wider mb-8">Era 1 · 2008-2012 · Chicago</p>
        <div className="grid md:grid-cols-2 gap-6">
          {era1.map(p => (
            <figure key={p.src} className="border-2 border-tln-line bg-tln-ink rounded-lg overflow-hidden">
              <Image src={p.src} alt="" width={1000} height={600} className="w-full h-auto block" />
              <figcaption className="p-4 text-sm text-tln-text/85 font-medium">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-3xl mb-2">Premiere esports Training Center · 2008-2012</h2>
        <p className="text-tln-muted text-sm font-bold uppercase tracking-wider mb-8">Era 2 · The original thelannetwork.com + MTV Pilot</p>
        <div className="grid md:grid-cols-2 gap-6">
          {era2.map(p => (
            <figure key={p.src} className="border-2 border-tln-line bg-tln-ink rounded-lg overflow-hidden">
              <Image src={p.src} alt="" width={1000} height={600} className="w-full h-auto block" />
              <figcaption className="p-4 text-sm text-tln-text/85 font-medium">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-3xl mb-2">The Ninja Story</h2>
        <p className="text-tln-muted text-sm font-bold uppercase tracking-wider mb-8">Era 3 · From the TLN house to global icon</p>
        <div className="grid md:grid-cols-2 gap-6">
          {era3.map(p => (
            <figure key={p.src} className="border-2 border-tln-line bg-tln-ink rounded-lg overflow-hidden">
              <Image src={p.src} alt="" width={1000} height={600} className="w-full h-auto block" />
              <figcaption className="p-4 text-sm text-tln-text/85 font-medium">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <p className="text-3xl leading-tight mb-4">The same room. A different mission.</p>
          <p className="text-tln-text/90 leading-relaxed font-medium mb-6">
            The Indianapolis lab that powers our AI fabric today is the same room where Ninja and his
            Halo team once trained. Same walls, same energy, same instinct to defend infrastructure
            from people trying to break it. We just have better tools now.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm">Work with us →</Link>
        </div>
      </section>
>>>>>>> Stashed changes
    </div>
  );
}
