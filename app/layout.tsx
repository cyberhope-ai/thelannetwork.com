import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The LAN Network — Custom Technology Development",
  description:
    "Custom software, automation, and AI-augmented engineering. Esports-rooted credibility, modern technology delivery.",
  keywords: [
    "The LAN Network",
    "TLN",
    "custom technology development",
    "software development",
    "AI-augmented engineering",
    "esports",
    "Indianapolis",
  ],
  authors: [{ name: "The LAN Network" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-tln-black text-tln-text">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-tln-line mt-24 py-10 text-center text-sm text-tln-muted">
          <div className="max-w-6xl mx-auto px-6">
            <p>The LAN Network · Indianapolis · est. esports community → custom technology development</p>
            <p className="mt-2 text-xs">© {new Date().getFullYear()} The LAN Network. Powered by AI-augmented engineering.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
