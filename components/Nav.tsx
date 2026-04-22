import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/ai-development", label: "AI Dev" },
  { href: "/cybersecurity", label: "Security" },
  { href: "/esports", label: "Esports" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-tln-black/80 border-b border-tln-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight text-tln-text hover:text-tln-accent no-underline">
          <span className="text-tln-accent">TLN</span>·The LAN Network
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-tln-muted hover:text-tln-text no-underline">{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
