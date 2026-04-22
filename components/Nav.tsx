import Link from "next/link";
import Image from "next/image";

<<<<<<< Updated upstream
const links = [
  { href: "/services", label: "Services" },
  { href: "/ai-development", label: "AI Dev" },
  { href: "/cybersecurity", label: "Security" },
  { href: "/esports", label: "Esports" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
=======
const cyberMenu = [
  { href: "/cybersecurity",            label: "Cybersecurity Overview" },
  { href: "/cybersecurity/external",   label: "External Pen Testing" },
  { href: "/cybersecurity/internal",   label: "Internal Pen Testing" },
  { href: "/cybersecurity/webapp",     label: "Web App Security" },
  { href: "/cybersecurity/mobile",     label: "Mobile App Security" },
  { href: "/cybersecurity/cloud",      label: "Cloud Security Audit" },
  { href: "/cybersecurity/network",    label: "Network & Wireless (the LAN)" },
  { href: "/cybersecurity/social",     label: "Social Engineering" },
  { href: "/cybersecurity/redteam",    label: "Red Team" },
  { href: "/cybersecurity#esports",    label: "esports Cybersecurity" },
  { href: "/cybersecurity/methodology",label: "Our Methodology" },
>>>>>>> Stashed changes
];

const esportsMenu = [
  { href: "/esports#technology", label: "Technology" },
  { href: "/esports#history",    label: "Heritage" },
  { href: "/esports/team",       label: "🆕 New TLN Team" },
  { href: "/esports#new",        label: "Sponsorship" },
  { href: "https://esports.thelannetwork.com", label: "Legacy Site (archive)", external: true },
];

function Dropdown({ label, items }: { label: string; items: { href: string; label: string; external?: boolean }[] }) {
  return (
    <div className="relative group">
      <button className="text-tln-muted hover:text-tln-red text-sm font-bold uppercase tracking-wider transition-colors py-2">
        {label} ▾
      </button>
      <div className="absolute right-0 top-full mt-1 w-72 bg-tln-ink border-2 border-tln-line rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        {items.map(item => (
          item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-tln-text/90 hover:bg-tln-panel hover:text-tln-red font-medium border-b border-tln-line/40 last:border-0 no-underline">
              {item.label} ↗
            </a>
          ) : (
            <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-tln-text/90 hover:bg-tln-panel hover:text-tln-red font-medium border-b border-tln-line/40 last:border-0 no-underline">
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-tln-black/90 border-b border-tln-line">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/brand/tln-cybersecurity-shield.png" alt="TLN" width={48} height={48} priority />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl text-tln-text">The LAN Network</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-tln-muted font-bold">cybersecurity · esports · ai</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Dropdown label="Cybersecurity" items={cyberMenu} />
          <Dropdown label="esports" items={esportsMenu} />
          <Link href="/ai-development" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wider transition-colors no-underline">AI Development</Link>
          <a href="https://hopetrainingacademy.org/hope-training-academy-apprenticeship-ambassador/" target="_blank" rel="noopener noreferrer" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wider transition-colors no-underline">Apprenticeships ↗</a>
          <Link href="/about" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wider transition-colors no-underline">About</Link>
          <Link href="/history" className="text-tln-muted hover:text-tln-red font-bold uppercase tracking-wider transition-colors no-underline">History</Link>
          <Link href="/contact" className="px-4 py-2 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-xs no-underline">Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
