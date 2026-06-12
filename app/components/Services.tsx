"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, LayoutDashboard, Gauge, Rocket, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    Icon: Compass,
    title: "Brand & Strategy",
    desc: "Before a single pixel is placed, we align on your positioning, audience, and conversion goals. Strategy isn't a phase — it's the foundation.",
    tags: ["Brand Identity", "Messaging", "Competitive Analysis"],
  },
  {
    num: "02",
    Icon: LayoutDashboard,
    title: "CMS & Admin",
    desc: "Update your own content without touching code. We wire up a clean admin dashboard so you're never dependent on a developer for day-to-day changes.",
    tags: ["Content Management", "Admin Dashboard", "Role Access"],
  },
  {
    num: "03",
    Icon: Gauge,
    title: "SEO & Performance",
    desc: "We don't hand you a slow site and suggest you hire an SEO agency later. Core Web Vitals, structured data, and local SEO are baked in from day one.",
    tags: ["Core Web Vitals", "Local SEO", "Analytics Setup"],
  },
  {
    num: "04",
    Icon: Rocket,
    title: "Launch & Support",
    desc: "30-day post-launch support included. We monitor, fix, and iterate. Your success after go-live is part of the deal, not an upsell.",
    tags: ["30-Day Support", "Monitoring", "Iteration"],
  },
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hover, setHover] = useState(false);
  const Icon = s.Icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ y: -6 }}
      style={{
        position: "relative",
        padding: "32px 30px 30px",
        borderRadius: 16,
        border: `1px solid ${hover ? "rgba(200,169,110,0.45)" : "rgba(245,240,232,0.1)"}`,
        background: hover ? "rgba(200,169,110,0.06)" : "rgba(245,240,232,0.02)",
        boxShadow: hover ? "0 24px 60px rgba(200,169,110,0.12)" : "0 0 0 rgba(0,0,0,0)",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        cursor: "default", overflow: "hidden",
      }}
    >
      {/* Big faint background number */}
      <div className="display" aria-hidden style={{
        position: "absolute", top: -14, right: 6,
        fontSize: 92, fontWeight: 900, lineHeight: 1,
        color: "var(--brass)", opacity: hover ? 0.12 : 0.05,
        letterSpacing: "-0.05em", transition: "opacity 0.3s", pointerEvents: "none",
      }}>{s.num}</div>

      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, height: 3,
        width: hover ? "100%" : "0%", background: "var(--brass)",
        transition: "width 0.45s cubic-bezier(0.22,1,0.36,1)",
        borderRadius: "16px 16px 0 0",
      }} />

      {/* Icon badge */}
      <motion.div
        initial={{ scale: 0, rotate: -12 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 220, damping: 16, delay: index * 0.1 + 0.15 }}
        style={{
          width: 48, height: 48, borderRadius: 13, marginBottom: 22,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: hover ? "var(--brass)" : "rgba(200,169,110,0.1)",
          border: `1px solid ${hover ? "var(--brass)" : "rgba(200,169,110,0.3)"}`,
          transition: "background 0.3s, border-color 0.3s, transform 0.3s",
          transform: hover ? "scale(1.06)" : "scale(1)",
        }}
      >
        <Icon size={22} color={hover ? "var(--ink)" : "var(--brass)"} style={{ transition: "color 0.3s" }} />
      </motion.div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h3 className="display" style={{
          fontSize: 21, fontWeight: 700, color: "var(--cream)",
          lineHeight: 1.25, letterSpacing: "-0.02em",
        }}>{s.title}</h3>
        <ArrowUpRight
          size={18}
          color="var(--brass)"
          style={{
            opacity: hover ? 1 : 0,
            transform: hover ? "translate(0,0)" : "translate(-6px,6px)",
            transition: "opacity 0.3s, transform 0.3s",
          }}
        />
      </div>

      <p style={{
        fontSize: 14, color: "rgba(245,240,232,0.52)",
        lineHeight: 1.8, marginBottom: 24, fontWeight: 400,
      }}>{s.desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {s.tags.map((t, ti) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + ti * 0.06, ease: "easeOut" }}
            style={{
              fontSize: 11, fontWeight: 600, padding: "4px 11px",
              border: "1px solid rgba(200,169,110,0.28)",
              borderRadius: 100, color: "var(--brass)", letterSpacing: "0.04em",
              background: hover ? "rgba(200,169,110,0.08)" : "transparent",
              transition: "background 0.3s",
            }}
          >{t}</motion.span>
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
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle radial glow */}
      <div aria-hidden style={{
        position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(200,169,110,0.06), transparent 65%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: 64, flexWrap: "wrap", gap: 24,
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
            Four disciplines. One team. One invoice. We handle every layer so your
            site is ready to perform from day one.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.num} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
