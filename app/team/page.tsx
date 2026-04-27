import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team + Partners | The LAN Network",
  description: "Senior leadership, technical specialists, academic collaborators, apprenticeship pathways, and project-based delivery pods.",
};

const roleCategories = [
  "AI developers", "Software engineers", "Cybersecurity specialists",
  "Automation builders", "Designers", "QA reviewers",
  "Project managers", "Documentation specialists", "Apprenticeship mentors",
];

const partners = [
  {
    name: "CyberHope AI",
    role: "Technology Partner",
    desc: "CyberHope AI develops PrecognitionOS and governed AI infrastructure for accountable autonomous work. TLN is a licensed development and implementation partner for selected workflows.",
    cta: { label: "Visit CyberHopeAI.com", href: "https://cyberhopeai.com", external: true },
  },
  {
    name: "Hope Training Academy",
    role: "Apprenticeship + Training Partner",
    desc: "Hope Training Academy supports training, credentialing, coursework, and apprenticeship pathways in technology, cybersecurity, IT, coding, and AI.",
    cta: { label: "Visit HopeTrainingAcademy.org", href: "https://hopetrainingacademy.org", external: true },
  },
  {
    name: "Video Game Palooza",
    role: "501(c)(3) Nonprofit Partner",
    desc: "Video Game Palooza represents the nonprofit education and community-impact lineage connected to TLN's roots in games, technology, and youth opportunity. 2,000+ Hoosiers trained since 2018.",
    cta: { label: "Visit VideoGamePalooza.org", href: "https://videogamepalooza.org", external: true },
  },
  {
    name: "Arctic Wolf",
    role: "Authorized MDR Partner",
    desc: "TLN is an authorized Arctic Wolf partner for Managed Detection and Response (MDR), bringing enterprise-grade cybersecurity monitoring to clients.",
    cta: null,
  },
];

export default function Team() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Team + Partners</p>
        <h1 className="text-5xl md:text-6xl mb-6">Team + Partners</h1>
        <p className="text-xl text-tln-text/90 font-medium max-w-2xl leading-relaxed">
          Senior leadership, technical specialists, academic collaborators, apprenticeship pathways,
          and project-based delivery pods.
        </p>
      </section>

      {/* Leadership */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-6">Leadership</p>
        <div className="border-2 border-tln-line bg-tln-ink rounded-lg p-8 max-w-2xl">
          <h2 className="text-3xl mb-1">Rick Barretto</h2>
          <p className="text-tln-red font-bold uppercase tracking-wider text-xs mb-4">
            Founder · AI Systems Architect · Technology Strategy
          </p>
          <p className="text-tln-text/80 font-medium leading-relaxed">
            Rick brings more than three decades of experience building technology ventures, training
            systems, esports environments, workforce programs, and AI infrastructure initiatives.
            His role at TLN focuses on strategy, client vision, AI-era technology development,
            partnerships, and project architecture.
          </p>
        </div>
      </section>

      {/* Delivery Network */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Delivery Network</p>
            <h2 className="text-3xl mb-4">Technical Delivery Network</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-6">
              TLN works through a senior-led delivery network of technical specialists, designers,
              cybersecurity reviewers, AI workflow builders, QA support, project managers, and
              implementation partners. Team members may be engaged based on project scope,
              availability, client needs, and appropriate agreements.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {roleCategories.map(r => (
                <div key={r} className="flex items-center gap-2 text-sm text-tln-text/80 font-medium">
                  <span className="text-tln-red">→</span> {r}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Academic + Workforce</p>
            <h2 className="text-3xl mb-4">Academic and Workforce Collaborators</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
              TLN&apos;s broader network includes academic, workforce, and training collaborators who
              may contribute expertise, mentorship, research insight, or talent development support
              when appropriate.
            </p>
            <div className="border-l-4 border-tln-red pl-4">
              <p className="text-tln-text/70 text-sm font-medium leading-relaxed italic">
                Relationships across Indiana&apos;s university and workforce ecosystem help inform
                TLN&apos;s approach to AI education, cybersecurity training, and
                apprenticeship-supported technology development.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Apprenticeship Pipeline</p>
              <h3 className="text-xl mb-3">Apprenticeship Talent Pipeline</h3>
              <p className="text-tln-text/80 font-medium leading-relaxed text-sm">
                Through related training pathways, including Hope Training Academy, TLN helps
                emerging talent gain supervised exposure to real technology work. Apprentices
                may support projects under mentor supervision, defined responsibilities, and
                human review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-6">Partners</p>
        <h2 className="text-3xl mb-10">Partners and Ecosystem</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {partners.map(p => (
            <div key={p.name} className="border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors flex flex-col">
              <p className="text-tln-red text-xs font-bold uppercase tracking-wider mb-1">{p.role}</p>
              <h3 className="text-2xl mb-3">{p.name}</h3>
              <p className="text-tln-text/80 text-sm font-medium leading-relaxed flex-1 mb-4">{p.desc}</p>
              {p.cta && (
                <a href={p.cta.href} target="_blank" rel="noopener noreferrer"
                  className="text-tln-red font-bold text-xs uppercase tracking-wider no-underline hover:opacity-80">
                  {p.cta.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Disclosure */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-2xl">
          <h2 className="text-2xl mb-3">Clear Roles, Clear Accountability</h2>
          <p className="text-tln-text/80 font-medium leading-relaxed">
            TLN assembles the right project team for each engagement. Contributors, partners,
            advisors, and apprentices are represented according to their actual role, availability,
            and relationship to the project.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="max-w-xl">
          <h2 className="text-4xl mb-4">Ready to Work With TLN?</h2>
          <p className="text-tln-text/80 font-medium mb-6 leading-relaxed">
            Tell us what you are trying to build and we will match the right team to the project.
          </p>
          <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90">
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
