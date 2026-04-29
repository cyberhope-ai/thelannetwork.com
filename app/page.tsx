import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Custom React, Next.js, and full-stack applications — from rapid MVPs to enterprise-scale platforms, built with human oversight.",
    cta: { href: "/services/web-development", label: "Explore Web Dev →" },
  },
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "React Native and native iOS/Android apps built to production standards with full App Store deployment support.",
    cta: { href: "/services/mobile-development", label: "Explore Mobile →" },
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "LLMs, RAG pipelines, vector databases, and governed agent workflows integrated into your existing products.",
    cta: { href: "/services/ai-integration", label: "Explore AI Integration →" },
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    desc: "AWS, GCP, Azure architecture, IaC with Terraform, CI/CD pipelines, and cost-optimised deployments.",
    cta: { href: "/services/cloud-infrastructure", label: "Explore Cloud →" },
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Penetration testing, security reviews, risk assessments, and secure implementation practices for every project.",
    cta: { href: "/cybersecurity", label: "Explore Cybersecurity →" },
  },
  {
    icon: "🎓",
    title: "Apprenticeship Pathways",
    desc: "Technology, cybersecurity, and AI training pathways connected to supervised real-world project experience.",
    cta: { href: "/apprenticeships", label: "Explore Apprenticeships →" },
  },
];

const stats = [
  { v: "2008", l: "Founded (Chicago)" },
  { v: "17 yrs", l: "Tech innovation lineage" },
  { v: "Human-Led", l: "Every project, every deliverable" },
  { v: "2,000+", l: "Hoosiers trained · VGP charity partner" },
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
          <span className="text-tln-muted">— Managed Detection &amp; Response (MDR)</span>
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
              Human-Led AI Technology Development
            </h1>
            <p className="text-lg text-tln-text/90 mb-4 leading-relaxed font-medium max-w-2xl">
              The LAN Network builds AI-native software, automations, cybersecurity systems, and workforce
              pathways using senior human leadership, governed AI workflows, and apprenticeship-trained talent.
            </p>
            <p className="text-tln-text/85 mb-8 leading-relaxed max-w-2xl font-medium">
              Born from esports and team-based technology training, TLN now helps organizations scope, build,
              secure, and deploy AI-era technology. Clients communicate with human project leads. AI assists
              inside governed workflows. Human specialists review and approve final deliverables.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/start-a-project"
                className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline hover:opacity-90"
              >
                Start an AI Project →
              </Link>
              <Link
                href="/how-we-deliver"
                className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline"
              >
                Explore How We Deliver
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/brand/tln-cybersecurity-shield.png" alt="TLN Shield" width={280} height={280} priority />
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <h2 className="text-3xl mb-2">AI-Era Technology, Built With Accountability</h2>
        <p className="text-tln-text/80 font-medium mb-10 max-w-2xl">
          We help organizations scope, build, secure, and deploy practical AI-era systems with
          human-led teams and governed delivery processes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="border-2 border-tln-line bg-tln-ink rounded-lg p-6 hover:border-tln-red transition-colors flex flex-col"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-2xl mb-3">{s.title}</h3>
              <p className="text-tln-text/85 text-sm leading-relaxed mb-4 font-medium flex-1">{s.desc}</p>
              <Link href={s.cta.href} className="text-tln-red font-bold text-sm uppercase tracking-wider no-underline">
                {s.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How We Deliver strip */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="border-l-4 border-tln-red pl-6 max-w-3xl">
          <h2 className="text-3xl mb-4">Human-Led. AI-Assisted. Governed.</h2>
          <p className="text-tln-text/90 leading-relaxed font-medium mb-3">
            TLN&apos;s delivery model keeps humans responsible for client communication, project scope,
            quality control, and final acceptance. AI-assisted workflows help accelerate research, planning,
            development, documentation, testing, and QA inside governed processes.
          </p>
          <p className="text-tln-text/90 leading-relaxed font-medium mb-6">
            Every client project has a human lead. Every deliverable is human-reviewed. AI is a tool in
            the workflow, not a replacement for accountability.
          </p>
          <Link
            href="/how-we-deliver"
            className="inline-block px-5 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline"
          >
            See Our Delivery Model →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(p => (
            <div key={p.l}>
              <div className="text-4xl text-tln-red font-display font-black">{p.v}</div>
              <div className="text-xs uppercase tracking-wider text-tln-muted mt-1 font-bold">{p.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PrecognitionOS / Governed AI */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="max-w-3xl">
          <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Governed AI Workflows</p>
          <h2 className="text-3xl mb-4">Powered by Governed AI Workflows</h2>
          <p className="text-tln-text/90 leading-relaxed font-medium mb-3">
            The LAN Network is a licensed development and implementation partner for selected
            PrecognitionOS-enabled workflows. PrecognitionOS is developed by CyberHope AI as governed
            AI infrastructure for accountable autonomous work.
          </p>
          <p className="text-tln-text/90 leading-relaxed font-medium mb-6">
            TLN applies selected governed AI workflows in real-world client delivery, AI development,
            cybersecurity, documentation, QA, and apprenticeship-supported technology projects.
          </p>
          <Link
            href="/precognitionos"
            className="text-tln-red font-bold uppercase tracking-wider text-sm no-underline hover:opacity-80"
          >
            Learn How TLN Uses Governed AI →
          </Link>
        </div>
      </section>

      {/* Apprenticeships + Heritage */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Apprenticeships */}
          <div className="bg-tln-ink border-2 border-tln-line rounded-lg p-8">
            <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Education + Apprenticeships
            </p>
            <h2 className="text-3xl mb-3">Building Technology While Building Talent</h2>
            <p className="text-tln-text/90 leading-relaxed font-medium mb-3">
              Through related training and apprenticeship pathways, including{" "}
              <span className="font-bold text-tln-text">Hope Training Academy</span>, TLN connects
              real-world technology work with supervised learning opportunities in IT, cybersecurity,
              coding, and AI.
            </p>
            <p className="text-tln-text/85 leading-relaxed font-medium mb-6 text-sm">
              Apprentices do not replace senior professionals. They contribute under supervision, with
              mentor review, defined responsibilities, and human oversight.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/apprenticeships"
                className="inline-block px-5 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-xs text-center no-underline hover:opacity-90"
              >
                Explore Apprenticeships →
              </Link>
              <a
                href="https://hopetrainingacademy.org/hope-training-academy-apprenticeship-ambassador/"
                target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2 border-2 border-tln-line text-tln-muted rounded font-bold uppercase tracking-wider text-xs text-center no-underline hover:border-tln-red hover:text-tln-red transition-colors"
              >
                Hope Training Academy →
              </a>
            </div>
          </div>

          {/* Heritage */}
          <div className="flex flex-col justify-center">
            <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-3">Heritage</p>
            <h2 className="text-3xl mb-4">Born From Esports. Rebuilt for the AI Era.</h2>
            <p className="text-tln-text/90 leading-relaxed font-medium mb-4">
              TLN&apos;s roots are in esports, live digital operations, and team-based technology training.
              That experience shaped how we think about talent, pressure, systems, cybersecurity, and
              fast-moving technical environments.
            </p>
            <p className="text-tln-text/85 leading-relaxed font-medium mb-6">
              Today, the same DNA powers our work in AI development, cybersecurity, and
              apprenticeship-enabled delivery.
            </p>
            <Link
              href="/about"
              className="text-tln-red font-bold uppercase tracking-wider text-sm no-underline hover:opacity-80"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-tln-line">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-4">Ready to Build With AI, Safely and Practically?</h2>
          <p className="text-tln-text/90 leading-relaxed font-medium mb-8">
            Tell us what you are trying to build. TLN can help scope the project, define the workflow,
            identify the right human and AI-assisted delivery model, and map a practical path to execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/start-a-project"
              className="inline-block px-8 py-4 bg-tln-red text-white font-bold rounded uppercase tracking-wider text-sm no-underline hover:opacity-90 text-center"
            >
              Start a Project →
            </Link>
            <Link
              href="/case-studies"
              className="inline-block px-8 py-4 border border-tln-line text-tln-muted font-bold rounded uppercase tracking-wider text-sm no-underline hover:border-tln-red hover:text-tln-red text-center"
            >
              See Case Studies →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
