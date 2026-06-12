"use client";
export default function Footer() {
  const nav = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ];

  const contact = [
    { label: "Start a project", href: "#waitlist" },
    { label: "info@ourbrio.com", href: "mailto:info@ourbrio.com" },
    { label: "Edmonton & Toronto", href: "#" },
  ];

  return (
    <footer style={{
      background: "var(--ink)", color: "var(--cream)",
      padding: "72px 80px 40px",
      borderTop: "1px solid rgba(245,240,232,0.08)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          paddingBottom: 64,
          borderBottom: "1px solid rgba(245,240,232,0.08)",
          flexWrap: "wrap",
        }}>
          {/* Brand */}
          <div>
            <a href="#" style={{ textDecoration: "none", display: "inline-block", marginBottom: 20 }}>
              <span className="display" style={{ fontSize: 24, fontWeight: 900, color: "var(--cream)", letterSpacing: "-0.04em" }}>
                Our<span style={{ color: "var(--brass)" }}>Brio</span>
              </span>
            </a>
            <p style={{
              fontSize: 14, color: "rgba(245,240,232,0.45)", lineHeight: 1.8,
              maxWidth: 280, fontWeight: 400,
            }}>
              We build custom websites that convert visitors into customers.
              No templates. No compromises. Just results.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              {/* Social placeholders */}
              {[
                { label: "X / Twitter", icon: "𝕏" },
                { label: "LinkedIn", icon: "in" },
                { label: "Instagram", icon: "ig" },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: "1px solid rgba(245,240,232,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none",
                  fontSize: 11, color: "rgba(245,240,232,0.4)", fontWeight: 700,
                  transition: "all 0.2s", cursor: "pointer",
                  fontFamily: "monospace",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--brass)"; e.currentTarget.style.color = "var(--brass)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.12)"; e.currentTarget.style.color = "rgba(245,240,232,0.4)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--brass)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              Navigate
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {nav.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{
                    textDecoration: "none", fontSize: 14,
                    color: "rgba(245,240,232,0.5)", fontWeight: 400,
                    transition: "color 0.2s", cursor: "pointer",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--brass)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              Get in touch
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {contact.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{
                    textDecoration: "none", fontSize: 14,
                    color: "rgba(245,240,232,0.5)", fontWeight: 400,
                    transition: "color 0.2s", cursor: "pointer",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: 32,
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.3)" }}>
            © 2025 OurBrio Agency · Edmonton & Toronto
          </p>
          <a href="/ai-automation" style={{
            fontSize: 12, color: "var(--brass)", textDecoration: "none",
            fontWeight: 600, cursor: "pointer",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >AI Automation →</a>
        </div>
      </div>
    </footer>
  );
}
