"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Brand & Strategy",
    desc: "Before a single pixel is placed, we align on your positioning, audience, and conversion goals. Strategy isn't a phase — it's the foundation.",
    tags: ["Brand Identity", "Messaging", "Competitive Analysis"],
  },
  {
    num: "02",
    title: "Custom Design",
    desc: "No templates. No borrowed aesthetics. Every layout, color, and typeface decision is made for your business and nobody else's.",
    tags: ["UI/UX Design", "Motion Design", "Responsive Layouts"],
  },
  {
    num: "03",
    title: "CMS & Admin",
    desc: "Update your own content without touching code. We wire up a clean admin dashboard so you're never dependent on a developer for day-to-day changes.",
    tags: ["Content Management", "Admin Dashboard", "Role Access"],
  },
  {
    num: "04",
    title: "SEO & Performance",
    desc: "We don't hand you a slow site and suggest you hire an SEO agency later. Core Web Vitals, structured data, and local SEO are baked in from day one.",
    tags: ["Core Web Vitals", "Local SEO", "Analytics Setup"],
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "30-day post-launch support included. We monitor, fix, and iterate. Your success after go-live is part of the deal, not an upsell.",
    tags: ["30-Day Support", "Monitoring", "Iteration"],
  },
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
      style={{
        padding: "44px 36px",
        borderTop: "1px solid rgba(245,240,232,0.1)",
        transition: "background 0.25s",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(200,169,110,0.05)";
        const accent = (e.currentTarget as HTMLDivElement).querySelector(".service-accent") as HTMLElement;
        if (accent) accent.style.width = "36px";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = "transparent";
        const accent = (e.currentTarget as HTMLDivElement).querySelector(".service-accent") as HTMLElement;
        if (accent) accent.style.width = "0px";
      }}
    >
      <div className="service-accent" style={{
        position: "absolute", top: -1, left: 0,
        height: 2, width: 0, background: "var(--brass)",
        transition: "width 0.3s cubic-bezier(0.22,1,0.36,1)",
      }} />

      <div style={{ fontSize: 11, fontWeight: 700, color: "var(--brass)", letterSpacing: "0.12em", marginBottom: 18 }}>
        {s.num}
      </div>
      <h3 className="display" style={{
        fontSize: 22, fontWeight: 700, color: "var(--cream)",
        marginBottom: 14, lineHeight: 1.25, letterSpacing: "-0.02em",
      }}>{s.title}</h3>
      <p style={{
        fontSize: 14, color: "rgba(245,240,232,0.52)",
        lineHeight: 1.8, marginBottom: 24, fontWeight: 400,
      }}>{s.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {s.tags.map(t => (
          <span key={t} style={{
            fontSize: 11, fontWeight: 600, padding: "4px 11px",
            border: "1px solid rgba(200,169,110,0.28)",
            borderRadius: 4, color: "var(--brass)", letterSpacing: "0.04em",
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="services" style={{
      background: "var(--ink)", color: "var(--cream)", padding: "128px 80px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: 80, flexWrap: "wrap", gap: 24,
          }}
        >
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--brass)", marginBottom: 18,
            }}>What we build</div>
            <h2 className="display" style={{
              fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 900,
              lineHeight: 1.08, letterSpacing: "-0.03em",
            }}>
              Everything your<br />
              <em style={{ fontStyle: "italic" }}>website needs to win.</em>
            </h2>
          </div>
          <p style={{
            maxWidth: 340, fontSize: 15, color: "rgba(245,240,232,0.55)",
            lineHeight: 1.8, fontWeight: 400,
          }}>
            Five disciplines. One team. One invoice. We handle every layer so your
            site is ready to perform from day one.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 0,
          borderLeft: "1px solid rgba(245,240,232,0.08)",
          borderBottom: "1px solid rgba(245,240,232,0.08)",
        }}>
          {services.map((s, i) => (
            <div key={s.num} style={{ borderRight: "1px solid rgba(245,240,232,0.08)" }}>
              <ServiceCard s={s} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
