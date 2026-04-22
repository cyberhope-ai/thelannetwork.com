import Link from "next/link";

export default function AuthHardening() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-tln-muted">
        <Link href="/cybersecurity" className="hover:text-tln-accent">Cybersecurity</Link>
        <span className="mx-2">/</span>
        <span>Auth & Identity Hardening</span>
      </div>
      <p className="text-tln-accent text-sm uppercase tracking-widest mb-4">Service</p>
      <h1 className="font-display text-4xl mb-4">Auth & Identity Hardening</h1>
      <p className="text-tln-muted text-lg mb-12 max-w-2xl">
        Broken authentication is consistently in the OWASP Top 10 for a reason. We find
        the token leaks, session fixation, and access control gaps before your users do.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "OAuth & OIDC Review", desc: "Authorization code flow, PKCE, token storage, refresh token rotation, and scope creep analysis." },
          { title: "JWT Security", desc: "Algorithm confusion attacks, signature validation, claim handling, expiry enforcement, and token leakage paths." },
          { title: "Session Management", desc: "Session fixation, session hijacking, cookie flags (Secure/HttpOnly/SameSite), and timeout policy." },
          { title: "MFA Implementation", desc: "TOTP / WebAuthn / SMS fallback risk — and how to implement MFA that users will actually use." },
          { title: "RBAC / ABAC Review", desc: "Role definition, privilege escalation paths, IDOR / BOLA, and horizontal access control bypass." },
          { title: "SSO Integration", desc: "SAML assertion handling, IdP trust, attribute mapping, and just-in-time provisioning security." },
        ].map((s) => (
          <div key={s.title} className="border border-tln-line bg-tln-ink rounded-lg p-6">
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-tln-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/contact" className="inline-block px-6 py-3 bg-tln-accent text-tln-black font-medium rounded no-underline hover:opacity-90">
        Harden Your Auth Layer →
      </Link>
    </div>
  );
}
