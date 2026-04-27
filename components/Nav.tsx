"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/ai-technology-development", label: "AI Development" },
  { href: "/ai-automation",             label: "AI Automation" },
  { href: "/cybersecurity",             label: "Cybersecurity" },
  { href: "/apprenticeships",           label: "Apprenticeships" },
  { href: "/how-we-deliver",            label: "How We Deliver" },
  { href: "/team",                      label: "Team + Partners" },
  { href: "/about",                     label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-tln-black/90 border-b border-tln-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <Image src="/brand/tln-cybersecurity-shield.png" alt="TLN" width={40} height={40} priority />
          <span className="font-display text-lg text-tln-text whitespace-nowrap">The LAN Network</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4 text-xs">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide transition-colors no-underline whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className="px-3 py-2 bg-tln-red text-white rounded font-bold uppercase tracking-wide text-xs no-underline hover:opacity-90 whitespace-nowrap"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-tln-muted hover:text-tln-text text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-tln-line bg-tln-black px-6 py-4 flex flex-col gap-3 text-sm">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wider no-underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className="mt-2 px-4 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-xs no-underline text-center"
            onClick={() => setOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
