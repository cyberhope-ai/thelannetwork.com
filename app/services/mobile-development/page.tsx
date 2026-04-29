import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Development | The LAN Network",
  description: "React Native and native iOS/Android apps built to production standards — human-led, AI-accelerated delivery from The LAN Network.",
};

export default function MobileDevelopmentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-tln-text">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-tln-red">Services</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-tln-text mb-6">Mobile Development</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        The LAN Network delivers production-ready mobile applications for iOS and Android —
        built with React Native for cross-platform efficiency or native Swift/Kotlin where performance demands it.
        Every build is governed, tested, and shipped with a clear handoff.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "React Native", desc: "Single codebase, both platforms. React Native gives you 90% of native performance with a fraction of the build cost — and a shared developer pool with your web team." },
          { title: "Native iOS & Android", desc: "When performance, hardware integration, or platform-specific UX demands it, our engineers go native. Swift for iOS, Kotlin for Android, no compromise on quality." },
          { title: "App Store Deployment", desc: "We handle the full submission pipeline — App Store Connect, Google Play Console, certificates, signing, review responses. You get the app, not the headache." },
          { title: "Offline-First Architecture", desc: "Field teams and low-connectivity users need apps that work without signal. We design offline-first with sync logic that doesn't corrupt data when connection returns." },
          { title: "Push Notifications & Analytics", desc: "FCM, APNs, in-app events, crash reporting, and usage analytics wired from day one. You see what users do and react to it." },
          { title: "Ongoing Updates", desc: "Post-launch retainer options for OS compatibility, feature additions, and performance work. Mobile apps need maintenance — we stay accountable after submission." },
        ].map(s => (
          <div key={s.title} className="border border-tln-line rounded-xl p-6 bg-tln-ink hover:border-tln-red/40 transition-colors">
            <h3 className="font-display text-xl mb-2 text-tln-text">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-tln-ink border border-tln-line rounded-2xl p-8 mb-12">
        <h2 className="font-display text-2xl mb-4">Our Mobile Delivery Model</h2>
        <p className="text-tln-muted mb-4">
          We use the same agile scrum model for mobile as for web — weekly sprints, working builds
          at every review, and a Project Manager who owns delivery end-to-end. You get a TestFlight
          or Play Store internal build at the end of every sprint so you can test on real devices.
        </p>
        <p className="text-tln-muted">
          AI accelerates our engineers — code generation, test writing, and accessibility auditing —
          but every line ships after human review. Your app, your brand, our accountability.
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
