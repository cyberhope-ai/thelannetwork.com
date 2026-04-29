"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const cyberMenu = [
  { href: "/cybersecurity",             label: "Cybersecurity Overview" },
  { href: "/cybersecurity/external",    label: "External Pen Testing" },
  { href: "/cybersecurity/internal",    label: "Internal Pen Testing" },
  { href: "/cybersecurity/webapp",      label: "Web App Security" },
  { href: "/cybersecurity/mobile",      label: "Mobile App Security" },
  { href: "/cybersecurity/cloud",       label: "Cloud Security Audit" },
  { href: "/cybersecurity/network",     label: "Network & Wireless (the LAN)" },
  { href: "/cybersecurity/social",      label: "Social Engineering" },
  { href: "/cybersecurity/redteam",     label: "Red Team" },
  { href: "/cybersecurity#esports",     label: "esports Cybersecurity" },
  { href: "/cybersecurity/methodology", label: "Our Methodology" },
];

const esportsMenu = [
  { href: "/esports#technology", label: "Technology" },
  { href: "/esports#history",    label: "Heritage" },
  { href: "/esports/team",       label: "New TLN Team" },
  { href: "/esports#new",        label: "Sponsorship" },
  { href: "https://esports.thelannetwork.com", label: "Legacy Site (archive)", external: true },
];

const servicesMenu = [
  { href: "/services",                        label: "All Services" },
  { href: "/case-studies",                    label: "Case Studies" },
  { href: "/services/web-development",        label: "Web Development" },
  { href: "/services/mobile-development",     label: "Mobile Development" },
  { href: "/services/ai-integration",         label: "AI Integration" },
  { href: "/services/cloud-infrastructure",   label: "Cloud Infrastructure" },
  { href: "/services/staff-augmentation",     label: "Staff Augmentation" },
  { href: "/services/managed-services",       label: "Managed Services" },
  { href: "/services/digital-transformation", label: "Digital Transformation" },
];

function Dropdown({ label, items }: {
  label: string;
  items: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div className="relative group">
      <button className="text-tln-muted hover:text-tln-red text-xs font-bold uppercase tracking-wide transition-colors py-2 flex items-center gap-1">
        {label} <span className="text-tln-red text-[10px]">▾</span>
      </button>
      <div className="absolute left-0 top-full mt-1 w-64 bg-tln-ink border-2 border-tln-line rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
        {items.map(item => (
          item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer"
              className="block px-4 py-2.5 text-xs text-tln-text/90 hover:bg-tln-black hover:text-tln-red font-medium border-b border-tln-line/40 last:border-0 no-underline">
              {item.label} ↗
            </a>
          ) : (
            <Link key={item.href} href={item.href}
              className="block px-4 py-2.5 text-xs text-tln-text/90 hover:bg-tln-black hover:text-tln-red font-medium border-b border-tln-line/40 last:border-0 no-underline">
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

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
          {/* AI Development */}
          <Link href="/ai-technology-development"
            className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide transition-colors no-underline whitespace-nowrap">
            AI Development
          </Link>
          <Link href="/ai-automation"
            className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide transition-colors no-underline whitespace-nowrap">
            AI Automation
          </Link>

          {/* Cybersecurity dropdown */}
          <Dropdown label="Cybersecurity" items={cyberMenu} />

          {/* Services dropdown */}
          <Dropdown label="Services" items={servicesMenu} />

          <Link href="/apprenticeships"
            className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide transition-colors no-underline whitespace-nowrap">
            Apprenticeships
          </Link>
          <Link href="/how-we-deliver"
            className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide transition-colors no-underline whitespace-nowrap">
            How We Deliver
          </Link>

          {/* esports — right before About per Rick directive */}
          <Dropdown label="esports" items={esportsMenu} />

          <Link href="/about"
            className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide transition-colors no-underline whitespace-nowrap">
            About
          </Link>
          <Link href="/start-a-project"
            className="px-3 py-2 bg-tln-red text-white rounded font-bold uppercase tracking-wide text-xs no-underline hover:opacity-90 whitespace-nowrap">
            Start a Project
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-tln-muted hover:text-tln-text text-2xl"
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-tln-line bg-tln-black px-6 py-4 flex flex-col gap-3 text-xs">
          <Link href="/ai-technology-development" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide no-underline" onClick={() => setOpen(false)}>AI Development</Link>
          <Link href="/ai-automation" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide no-underline" onClick={() => setOpen(false)}>AI Automation</Link>
          <div className="border-t border-tln-line pt-2">
            <p className="text-tln-muted font-bold uppercase tracking-wide mb-1">Cybersecurity</p>
            {cyberMenu.map(i => (
              <Link key={i.href} href={i.href} className="block text-tln-muted/70 hover:text-tln-red pl-3 py-1 no-underline text-xs" onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
          </div>
          <div className="border-t border-tln-line pt-2">
            <p className="text-tln-muted font-bold uppercase tracking-wide mb-1">Services</p>
            {servicesMenu.map(i => (
              <Link key={i.href} href={i.href} className="block text-tln-muted/70 hover:text-tln-red pl-3 py-1 no-underline text-xs" onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
          </div>
          <Link href="/apprenticeships" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide no-underline" onClick={() => setOpen(false)}>Apprenticeships</Link>
          <Link href="/how-we-deliver" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide no-underline" onClick={() => setOpen(false)}>How We Deliver</Link>
          <div className="border-t border-tln-line pt-2">
            <p className="text-tln-muted font-bold uppercase tracking-wide mb-1">esports</p>
            {esportsMenu.map(i => (
              i.external
                ? <a key={i.href} href={i.href} target="_blank" rel="noopener noreferrer" className="block text-tln-muted/70 hover:text-tln-red pl-3 py-1 no-underline text-xs" onClick={() => setOpen(false)}>{i.label} ↗</a>
                : <Link key={i.href} href={i.href} className="block text-tln-muted/70 hover:text-tln-red pl-3 py-1 no-underline text-xs" onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
          </div>
          <Link href="/about" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wide no-underline" onClick={() => setOpen(false)}>About</Link>
          <Link href="/start-a-project" className="mt-2 px-4 py-3 bg-tln-red text-white rounded font-bold uppercase tracking-wide no-underline text-center" onClick={() => setOpen(false)}>Start a Project</Link>
        </div>
      )}
    </header>
  );
}
