import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology and AI Apprenticeships | The LAN Network",
  description: "The LAN Network supports technology, cybersecurity, IT, coding, and AI apprenticeship pathways through supervised project environments and training partners.",
};

const areas = [
  { title: "Cybersecurity", desc: "Cyber hygiene, risk awareness, security operations basics, and secure workflow thinking." },
  { title: "AI Education", desc: "Practical AI literacy, responsible AI use, human-in-the-loop workflows, AI-assisted documentation, and productivity tools." },
  { title: "Software and Automation", desc: "Coding fundamentals, workflow automation, documentation, QA, and internal tool support." },
  { title: "IT Support", desc: "Desktop support, troubleshooting, systems basics, device management, and user support." },
  { title: "Digital Operations", desc: "Esports, events, streaming, content operations, dashboards, and live digital environments." },
];

export default function Apprenticeships() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Apprenticeships</p>
        <h1 className="text-5xl md:text-6xl mb-6">Technology Apprenticeships for the AI Era</h1>
        <p className="text-xl text-tln-text/90 font-medium mb-4 max-w-2xl leading-relaxed">
          Connecting training, mentorship, real-world projects, cybersecurity, and AI education.
        </p>
        <p className="text-tln-text/80 font-medium mb-8 max-w-2xl leading-relaxed">
          The LAN Network supports apprenticeship-enabled technology pathways by connecting supervised
          real-world project environments with training partners such as Hope Training Academy.
          Apprenticeships help emerging talent gain practical experience in IT, cybersecurity, coding,
          AI workflows, documentation, QA, and technology operations.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90">
            Explore Apprenticeship Partnerships →
          </Link>
          <a href="https://hopetrainingacademy.org" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">
            Hope Training Academy →
          </a>
        </div>
      </section>

      {/* Role Clarity */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-tln-red pl-6">
            <h2 className="text-3xl mb-4">How TLN and Hope Training Academy Work Together</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
              <span className="font-bold text-tln-text">Hope Training Academy</span> supports training,
              credentialing, coursework, and apprenticeship pathways. <span className="font-bold text-tln-text">The LAN Network</span> supports
              selected mentor-led project environments, technology implementation opportunities, and real-world exposure.
            </p>
            <p className="text-tln-text/80 font-medium">The two roles are connected, but distinct.</p>
          </div>
          <div>
            <h2 className="text-3xl mb-4">Apprentices Learn Under Supervision</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              Apprentices do not replace senior professionals. They contribute under supervision, with mentor
              review, defined tasks, and human oversight. When apprentice-supported work is part of a client
              project, responsibilities and review processes are clearly defined.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-10">Apprenticeship Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(a => (
            <div key={a.title} className="border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors">
              <h3 className="text-xl mb-3">{a.title}</h3>
              <p className="text-tln-text/80 text-sm leading-relaxed font-medium">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Apprenticeships */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="max-w-3xl border-l-4 border-tln-red pl-6">
          <h2 className="text-3xl mb-4">AI Apprenticeships: Learning the Tools of the Next Workforce</h2>
          <p className="text-tln-text/80 font-medium leading-relaxed mb-4">
            AI apprenticeships should not teach people to blindly trust AI. They should teach people how to
            use AI responsibly: how to scope tasks, review outputs, protect data, document work, validate
            claims, and escalate decisions to humans.
          </p>
          <p className="text-tln-text/80 font-medium leading-relaxed">
            TLN&apos;s AI-era apprenticeship model focuses on practical, supervised use of AI in real technology workflows.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-tln-ink border-2 border-tln-line rounded-lg p-8">
          <div>
            <h2 className="text-3xl mb-3">Become an Apprenticeship Partner</h2>
            <p className="text-tln-text/80 font-medium leading-relaxed">
              Organizations, schools, and workforce programs interested in connecting apprenticeship pathways
              with real technology work are welcome to reach out.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/start-a-project" className="px-5 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-xs text-center no-underline hover:opacity-90">
              Start a Conversation →
            </Link>
            <a href="https://hopetrainingacademy.org/hope-training-academy-apprenticeship-ambassador/"
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 border-2 border-tln-line text-tln-muted rounded font-bold uppercase tracking-wider text-xs text-center no-underline hover:border-tln-red hover:text-tln-red transition-colors">
              HTA Apprenticeship Ambassador →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
