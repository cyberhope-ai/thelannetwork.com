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
<<<<<<< Updated upstream
  title: "The LAN Network — AI Software Development",
  description:
    "AI software development, automation, and custom engineering. Esports-rooted credibility, modern technology delivery.",
  keywords: [
    "The LAN Network",
    "TLN",
    "AI software development",
    "software development",
    "AI-augmented engineering",
    "esports",
    "Indianapolis",
  ],
  authors: [{ name: "The LAN Network" }],
=======
  title: "The LAN Network — Cybersecurity. esports. Custom Tech.",
  description:
    "Born 2008 in Chicago as the world's first esports team bootcamp house. Trained Tyler 'Ninja' Blevins. Defended live Halo streams with cybersecurity before cybersecurity was cool. Reborn 2025 in Indianapolis. Charity partner: Video Game Palooza — 2000+ Hoosiers trained since 2018.",
>>>>>>> Stashed changes
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-tln-black text-tln-text">
        <Nav />
        <main>{children}</main>
<<<<<<< Updated upstream
        <footer className="border-t border-tln-line mt-24 py-10 text-center text-sm text-tln-muted">
          <div className="max-w-6xl mx-auto px-6">
            <p>The LAN Network · Indianapolis · est. esports community → AI software development</p>
            <p className="mt-2 text-xs">© {new Date().getFullYear()} The LAN Network. Powered by AI-augmented engineering.</p>
=======
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
              <p className="font-bold text-tln-text">The LAN Network · Born Chicago 2008 · Reborn Indianapolis 2025</p>
              <p className="mt-2 text-xs">© {new Date().getFullYear()} The LAN Network. Powered by AI-augmented engineering with cryptographic audit trails.</p>
              <p className="mt-2 text-xs">
                <Link href="/cybersecurity" className="text-tln-muted no-underline hover:text-tln-text">Cybersecurity</Link>
                {" · "}
                <Link href="/esports" className="text-tln-muted no-underline hover:text-tln-text">esports</Link>
                {" · "}
                <Link href="/history" className="text-tln-muted no-underline hover:text-tln-text">History</Link>
                {" · "}
                <Link href="/about" className="text-tln-muted no-underline hover:text-tln-text">About</Link>
                {" · "}
                <Link href="/contact" className="text-tln-muted no-underline hover:text-tln-text">Contact</Link>
              </p>
            </div>
>>>>>>> Stashed changes
          </div>
        </footer>
      </body>
    </html>
  );
}
