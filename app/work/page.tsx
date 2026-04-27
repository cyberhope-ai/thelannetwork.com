import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — The LAN Network",
  description: "TLN project work: AI technology development, PrecognitionOS-powered workflows, and technology delivery.",
};

const cases = [
  {
    category: "AI Technology Development",
    title: "PrecognitionOS Financial Signal Platform",
    status: "Live",
    desc: "11-agent AI fleet running 24/7 financial signal generation. EURUSD portfolio Sharpe 3.221, Max Drawdown 0.36%. Every signal cryptographically timestamped before execution via QSurface.",
    tags: ["NautilusTrader", "PyTorch", "FastAPI", "Redis"],
    metrics: [
      { v: "3.221", l: "Portfolio Sharpe" },
      { v: "0.36%", l: "Max Drawdown" },
      { v: "3,447", l: "Backtests run" },
    ],
    link: "/precognitionos",
  },
  {
    category: "Governed AI Workflows",
    title: "Fleet-Coordinated Agent Operations",
    status: "Live",
    desc: "Multi-agent coordination across 11 specialized AI agents with QSurface evidence trails, task verification, and human-led review checkpoints. Agents handle research, signals, infrastructure, and delivery.",
    tags: ["PrecognitionOS", "TRON Verification", "QSurface", "Claude"],
    metrics: [
      { v: "11", l: "Active agents" },
      { v: "24/7", l: "Continuous ops" },
      { v: "29 GPUs", l: "Compute fleet" },
    ],
    link: "/precognitionos",
  },
  {
    category: "Esports + Training",
    title: "Video Game Palooza — 2,000+ Hoosiers Trained",
    status: "Legacy",
    desc: "Since 2018: youth technology training, esports competitions, and coding pathways across Indiana. Not one student has ever paid. The human-led foundation behind TLN's AI work.",
    tags: ["Youth Tech", "Esports", "Apprenticeships", "Indiana"],
    metrics: [
      { v: "2,000+", l: "Hoosiers trained" },
      { v: "2008", l: "Founded" },
      { v: "$0", l: "Student cost" },
    ],
    link: "/apprenticeships",
  },
];

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Our Work</p>
      <h1 className="font-display text-4xl md:text-5xl mb-4">Projects and Delivery</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Human-led technology delivery powered by governed AI workflows. Real projects, verified results.
      </p>

      <div className="space-y-8">
        {cases.map((c) => (
          <div key={c.title} className="border border-tln-line rounded-lg p-6 md:p-8">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
              <div>
                <p className="text-tln-red text-xs font-bold uppercase tracking-[0.15em] mb-1">{c.category}</p>
                <h2 className="font-display text-2xl">{c.title}</h2>
              </div>
              <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${c.status === "Live" ? "bg-tln-red/10 text-tln-red" : "bg-tln-line text-tln-muted"}`}>
                {c.status}
              </span>
            </div>

            <p className="text-tln-muted font-medium leading-relaxed mb-6">{c.desc}</p>

            <div className="flex gap-6 mb-6 flex-wrap">
              {c.metrics.map((m) => (
                <div key={m.l}>
                  <div className="text-xl font-black">{m.v}</div>
                  <div className="text-xs text-tln-muted uppercase tracking-wider mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {c.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 border border-tln-line rounded text-xs text-tln-muted">{t}</span>
              ))}
              <Link href={c.link} className="ml-auto text-tln-red text-sm font-bold hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
