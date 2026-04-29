import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Infrastructure | The LAN Network",
  description: "AWS, GCP, Azure architecture, Infrastructure as Code, CI/CD pipelines, and cost-optimised cloud deployments from The LAN Network.",
};

export default function CloudInfrastructurePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">Cloud Infrastructure</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        The LAN Network architects, builds, and operates cloud infrastructure on AWS, GCP, and Azure —
        designed for reliability, security, and cost efficiency from the ground up.
        No over-provisioning. No surprise bills. No single points of failure.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "Infrastructure as Code", desc: "Terraform, Pulumi, and CloudFormation for reproducible, version-controlled infrastructure. Your environment is code — reviewable, auditable, rollback-able." },
          { title: "CI/CD Pipelines", desc: "GitHub Actions, GitLab CI, and CircleCI pipelines that run tests, build containers, deploy to staging, and promote to production with confidence gates." },
          { title: "Container Orchestration", desc: "Docker, Kubernetes, and ECS for containerised workloads at scale. Service meshes, health checks, and graceful rollouts built in from day one." },
          { title: "Cost Optimisation", desc: "Right-sizing, reserved instance planning, spot instance strategies, and waste identification. Most teams cut cloud spend 20–40% after a TLN infrastructure review." },
          { title: "Security & Compliance", desc: "IAM least-privilege design, VPC segmentation, secrets management with Vault or AWS Secrets Manager, and compliance-ready audit logging." },
          { title: "Disaster Recovery", desc: "Multi-region failover, automated backups, RTO/RPO planning, and annual DR drills. We design for the outage before it happens." },
        ].map(s => (
          <div key={s.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <h3 className="font-display text-xl mb-2 text-tln-text">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">Cloud That Runs Itself (Mostly)</h2>
        <p className="text-tln-muted mb-4">
          The goal of good cloud infrastructure is that it becomes boring — it just works, scales automatically,
          and costs what you expect. The LAN Network engineers infrastructure to that standard: observable,
          self-healing where possible, and documented so your team can own it.
        </p>
        <p className="text-tln-muted">
          We operate our own multi-service fleet on cloud infrastructure — PrecognitionOS runs dozens of
          containerised services across multiple hosts. When we design yours, we bring operational
          experience, not just architectural opinions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/start-a-project" className="inline-block px-6 py-3 bg-tln-red text-white font-bold uppercase tracking-wide rounded-lg no-underline hover:opacity-90 text-center">
          Start a Project
        </Link>
        <Link href="/services" className="inline-block px-6 py-3 border border-tln-line text-tln-muted font-bold uppercase tracking-wide rounded-lg no-underline hover:border-tln-red hover:text-tln-red text-center">
          All Services
        </Link>
      </div>
    </main>
  );
}
