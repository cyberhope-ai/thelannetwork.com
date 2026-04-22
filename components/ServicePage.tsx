import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/content/services";

export default function ServicePage({ service }: { service: Service }) {
  const s = service;
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Cybersecurity service</p>
            <h1 className="text-5xl md:text-6xl mb-4">{s.title}</h1>
            <p className="text-2xl text-tln-text/90 mb-6 font-display tracking-wide">{s.hero}</p>
            <p className="text-lg text-tln-text/85 leading-relaxed font-medium max-w-2xl">{s.intro}</p>
            <div className="flex gap-4 flex-wrap mt-8">
              <Link href={`/contact?topic=${s.slug}`} className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline">Get a Quote →</Link>
              <Link href="/cybersecurity#methodology" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">Our Methodology</Link>
            </div>
          </div>
          <Image src="/brand/tln-cybersecurity-shield.png" alt="TLN" width={180} height={180} className="hidden md:block" priority />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-4xl mb-6">What we test</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-tln-text/90 font-medium">
          {s.whatWeTest.map(b => (
            <li key={b} className="flex gap-3"><span className="text-tln-red font-bold">▸</span>{b}</li>
          ))}
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-4xl mb-2">How we approach this engagement</h2>
        <p className="text-tln-muted mb-8 font-medium">Each phase is signed into the QSurface provenance chain in real time.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {s.approach.map(a => (
            <div key={a.phase} className="border-2 border-tln-line bg-tln-ink rounded-lg p-5">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl text-tln-red font-display">{a.phase}</span>
                <h3 className="text-xl">{a.title}</h3>
              </div>
              <p className="text-tln-text/85 text-sm leading-relaxed font-medium">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl mb-4">What you receive</h2>
            <ul className="space-y-2 text-tln-text/90 font-medium">
              {s.deliverables.map(d => <li key={d} className="flex gap-3"><span className="text-tln-red font-bold">✓</span>{d}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl mb-4">Why TLN</h2>
            <ul className="space-y-2 text-tln-text/90 font-medium">
              {s.whyTLN.map(w => <li key={w} className="flex gap-3"><span className="text-tln-red font-bold">★</span>{w}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-tln-line">
        <h2 className="text-3xl mb-4">Best fit for</h2>
        <div className="flex flex-wrap gap-3">
          {s.bestFor.map(b => (
            <span key={b} className="px-4 py-2 bg-tln-ink border-2 border-tln-line rounded-full text-sm text-tln-text/90 font-medium">{b}</span>
          ))}
        </div>
      </section>

      <section className="bg-tln-ink border-y border-tln-line">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ready for a quote?</h2>
          <p className="text-tln-text/90 font-medium mb-8 max-w-2xl mx-auto">Tell us your scope. We respond within one business day with a custom proposal — including the QSurface audit-chain artifact your auditors will love.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/contact?topic=${s.slug}`} className="inline-block px-6 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm no-underline">Get a Quote →</Link>
            <a href="mailto:rick@thelannetwork.com" className="inline-block px-6 py-3 border-2 border-tln-line text-tln-text rounded font-bold uppercase tracking-wider text-sm hover:border-tln-red transition-colors no-underline">rick@thelannetwork.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
