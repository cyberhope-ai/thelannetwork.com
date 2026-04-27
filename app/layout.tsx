import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Link from "next/link";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "The LAN Network | Human-Led AI Technology Development",
  description:
    "The LAN Network builds AI-native software, automations, cybersecurity systems, and apprenticeship-supported technology pathways using human-led teams and governed AI workflows.",
  keywords: [
    "human-led AI technology development",
    "AI automation",
    "cybersecurity",
    "apprenticeships",
    "governed AI workflows",
    "The LAN Network",
    "TLN",
    "Indianapolis",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-tln-black text-tln-text">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-tln-line mt-24">
          {/* Charity partner block */}
          <div className="bg-tln-ink border-b border-tln-line">
            <div className="max-w-6xl mx-auto px-6 py-10">
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
                <div>
                  <p className="text-tln-red text-xs font-bold uppercase tracking-[0.2em] mb-1">501(c)(3) Charity Partner</p>
                  <p className="font-display text-3xl text-tln-text">Video Game Palooza</p>
                </div>
                <div>
                  <p className="text-sm text-tln-text/85 leading-relaxed font-medium">
                    <span className="font-bold text-tln-text">2,000+ Hoosiers trained</span> in IT, Cybersecurity, Coding, and AI since 2018.
                    A non-profit education arm born from the same TLN lineage — turning gaming passion into STEM careers.
                    Hire TLN, support the mission. <span className="text-tln-muted">Tax-deductible donations welcome.</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://videogamepalooza.org/esportseducation/"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block px-5 py-2 border-2 border-tln-red text-tln-red rounded font-bold uppercase tracking-wider text-xs text-center hover:bg-tln-red hover:text-white transition-colors no-underline"
                  >
                    VGP esports Education →
                  </a>
                  <a
                    href="https://videogamepalooza.org/"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block px-5 py-2 text-tln-muted rounded text-xs text-center hover:text-tln-text transition-colors no-underline underline-on-hover"
                  >
                    All charity partners →
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Site footer line */}
          <div className="py-10 text-center text-sm text-tln-muted">
            <div className="max-w-6xl mx-auto px-6">
              <p className="font-bold text-tln-text">The LAN Network · Human-Led AI Technology Development</p>
              <p className="mt-1 text-xs text-tln-muted">Born Chicago 2008 · Reborn Indianapolis 2025</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4 text-xs">
                <Link href="/ai-technology-development" className="text-tln-muted no-underline hover:text-tln-red">AI Technology Development</Link>
                <span className="text-tln-line">·</span>
                <Link href="/ai-automation" className="text-tln-muted no-underline hover:text-tln-red">AI Automation</Link>
                <span className="text-tln-line">·</span>
                <Link href="/cybersecurity" className="text-tln-muted no-underline hover:text-tln-red">Cybersecurity</Link>
                <span className="text-tln-line">·</span>
                <Link href="/apprenticeships" className="text-tln-muted no-underline hover:text-tln-red">Apprenticeships</Link>
                <span className="text-tln-line">·</span>
                <Link href="/how-we-deliver" className="text-tln-muted no-underline hover:text-tln-red">How We Deliver</Link>
                <span className="text-tln-line">·</span>
                <a href="https://cyberhopeai.com" target="_blank" rel="noopener noreferrer" className="text-tln-muted no-underline hover:text-tln-red">CyberHope AI</a>
                <span className="text-tln-line">·</span>
                <a href="https://hopetrainingacademy.org" target="_blank" rel="noopener noreferrer" className="text-tln-muted no-underline hover:text-tln-red">Hope Training Academy</a>
                <span className="text-tln-line">·</span>
                <a href="https://esports.thelannetwork.com" target="_blank" rel="noopener noreferrer" className="text-tln-muted no-underline hover:text-tln-red">TLN Esports Archive</a>
                <span className="text-tln-line">·</span>
                <Link href="/start-a-project" className="text-tln-muted no-underline hover:text-tln-red">Contact</Link>
              </div>
              <p className="mt-4 text-xs">© {new Date().getFullYear()} The LAN Network. Human-Led. AI-Assisted. Cyber-Aware.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
