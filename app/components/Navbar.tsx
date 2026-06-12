"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 12, left: 16, right: 16,
      zIndex: 100,
      borderRadius: 14,
      padding: "11px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(245,240,232,0.95)" : "rgba(245,240,232,0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid var(--border)",
      boxShadow: scrolled ? "0 4px 32px rgba(13,13,13,0.1)" : "none",
      transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
    }}>
      <a href="#" style={{ textDecoration: "none" }}>
        <span className="display" style={{ fontSize: 20, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.04em" }}>
          Our<span style={{ color: "var(--brass)" }}>Brio</span>
        </span>
      </a>

      {/* Desktop links */}
      <ul style={{ gap: 32, listStyle: "none", alignItems: "center" }} className="hidden-mobile">
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} style={{
              textDecoration: "none", color: "var(--muted)", fontSize: 14,
              fontWeight: 500, transition: "color 0.2s", cursor: "pointer",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#waitlist" style={{
            textDecoration: "none",
            background: "var(--ink)", color: "var(--cream)",
            padding: "9px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600,
            transition: "all 0.2s", cursor: "pointer", display: "inline-block",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--brass)"; e.currentTarget.style.color = "var(--ink)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
          >Start a project</a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        style={{
          background: "none", border: "none", cursor: "pointer", color: "var(--ink)",
          alignItems: "center", justifyContent: "center",
          minWidth: 44, minHeight: 44, borderRadius: 8, transition: "background 0.15s",
        }}
        className="show-mobile"
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(13,13,13,0.06)")}
        onMouseLeave={e => (e.currentTarget.style.background = "none")}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{
              position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0,
              background: "var(--cream)", border: "1px solid var(--border)", borderRadius: 12,
              padding: "16px 20px 20px",
              display: "flex", flexDirection: "column",
              boxShadow: "0 20px 48px rgba(13,13,13,0.14)",
            }}
          >
            {links.map((l, i) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none", color: "var(--ink)", fontSize: 16, fontWeight: 500,
                  padding: "12px 4px",
                  borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
                  cursor: "pointer", transition: "color 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--brass)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink)")}
              >{l.label}</a>
            ))}
            <a href="#waitlist" onClick={() => setOpen(false)} style={{
              marginTop: 12, textDecoration: "none",
              background: "var(--ink)", color: "var(--cream)",
              padding: "13px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600,
              display: "block", textAlign: "center", cursor: "pointer",
            }}>Start a project →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
