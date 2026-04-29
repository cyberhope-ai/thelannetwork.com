import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | The LAN Network",
  description: "Real delivery from The LAN Network — see how we've helped companies build secure platforms, streamline operations, and grow through technology.",
};

const cases = [
  {
    title: "Secure Photo Sharing Platform",
    tag: "Web Development",
    summary: "How The LAN Network delivered a platform for photos to be shared safely and securely — with end-to-end encryption, role-based access, and a governed release process.",
    outcomes: ["E2E encryption layer", "RBAC permission model", "Zero data-breach incidents post-launch"],
  },
  {
    title: "Crowdsourced Talent Marketplace",
    tag: "Full-Stack",
    summary: "An innovative platform that allows users to find and hire qualified candidates by leveraging professional networks — delivered in 14-week sprints with full stakeholder visibility.",
    outcomes: ["Network-graph matching engine", "Verified credential system", "Scaled to 10k+ users in 90 days"],
  },
  {
    title: "Retail SaaS Scheduling Platform",
    tag: "SaaS",
    summary: "How a software-as-a-service company partnered with The LAN Network to help retail businesses run better — improving scheduling accuracy and reducing labour cost by 23%.",
    outcomes: ["Multi-location scheduling engine", "Real-time reporting dashboard", "23% labour cost reduction"],
  },
  {
    title: "Investigative Firm Technology Partner",
    tag: "Managed Services",
    summary: "How a private investigative firm found a trustworthy technology partner in The LAN Network — migrating legacy systems, securing client data, and modernising case management.",
    outcomes: ["Legacy system migration", "Encrypted case management", "SOC-2 aligned data handling"],
  },
  {
    title: "Non-Profit Digital Accessibility",
    tag: "Mobile & Web",
    summary: "How a non-profit made their content digitally accessible to millions — cross-platform React Native app with offline support and accessibility-first design.",
    outcomes: ["Cross-platform iOS & Android", "Offline-first architecture", "WCAG 2.1 AA compliance"],
  },
  {
    title: "Expert Q&A Platform",
    tag: "Web Development",
    summary: "How a startup worked to connect people with questions to the experts who could answer them — AI-assisted matching, real-time messaging, and a governed quality scoring system.",
    outcomes: ["AI-assisted expert matching", "Real-time messaging layer", "Quality score governance"],
  },
  {
    title: "Athlete All-In-One App",
    tag: "Mobile",
    summary: "Developing an all-in-one solution for athletes — training logs, nutrition tracking, performance analytics, and coach communication in a single governed mobile platform.",
    outcomes: ["Performance analytics engine", "Coach–athlete messaging", "App Store feature listing"],
  },
  {
    title: "Modern Charitable Giving",
    tag: "FinTech",
    summary: "Designing an app to bring charitable giving into the modern era — recurring donations, impact reporting, and a transparent fund-flow audit trail for donors.",
    outcomes: ["Stripe recurring payments", "Impact reporting dashboard", "Donor audit trail"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Our Work</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-4">Case Studies</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Real problems. Real delivery. See how The LAN Network has helped companies build, scale,
        and secure technology that matters.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {cases.map(c => (
          <div key={c.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest text-tln-red mb-3 block">{c.tag}</span>
            <h2 className="font-display text-xl mb-3 text-tln-text">{c.title}</h2>
            <p className="text-tln-muted text-sm leading-relaxed mb-4">{c.summary}</p>
            <ul className="space-y-1">
              {c.outcomes.map(o => (
                <li key={o} className="flex items-center gap-2 text-xs text-tln-muted/80">
                  <span className="text-tln-red">✓</span> {o}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-tln-line rounded-2xl p-8 bg-tln-ink text-center">
        <h2 className="font-display text-2xl mb-3">Ready to become our next case study?</h2>
        <p className="text-tln-muted mb-6 max-w-xl mx-auto">
          The LAN Network takes on a limited number of new projects each quarter to maintain delivery quality.
          Tell us about your project and we&apos;ll schedule a discovery call.
        </p>
        <Link href="/start-a-project" className="inline-block px-8 py-3 bg-tln-red text-white font-bold uppercase tracking-wide rounded-lg no-underline hover:opacity-90">
          Start a Project
        </Link>
      </div>
    </main>
  );
}
