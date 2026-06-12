"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    client: "Emmanuel Portfolio",
    type: "Content Creator · Next.js",
    headline: "A creative portfolio that books 3× more brand deals",
    result: "+3× brand deal conversions in 60 days",
    tags: ["Next.js 15", "Supabase", "Admin Dashboard"],
    accent: "#C8A96E",
    bg: "#1A1A2E",
  },
  {
    client: "FulcrumPoint Holdings",
    type: "Private Equity · WordPress",
    headline: "Institutional credibility for a high-stakes audience",
    result: "Cut bounce rate by 42% vs. previous site",
    tags: ["WordPress", "Video Hero", "Parallax"],
    accent: "#C4962A",
    bg: "#1C1200",
  },
  {
    client: "CZAR Studio",
    type: "Photography · Next.js",
    headline: "Gallery-first design that lets the work speak",
    result: "3× inquiry rate after launch",
    tags: ["Next.js", "Cloudinary", "Vercel"],
    accent: "#C0C0C0",
    bg: "#0A0A0A",
  },
];

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
      style={{
        background: p.bg,
        borderRadius: 12,
        padding: "52px 52px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 64px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
      className="work-card"
    >
      <div>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.15em",
          textTransform: "uppercase", color: p.accent, marginBottom: 18,
        }}>{p.type}</div>

        <h3 className="display" style={{
          fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 700,
          lineHeight: 1.2, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em",
        }}>{p.headline}</h3>

        <div style={{
          fontSize: 13, color: `${p.accent}cc`, marginBottom: 24,
          fontWeight: 500, letterSpacing: "0.02em",
        }}>↑ {p.result}</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 11, padding: "4px 11px",
              border: `1px solid ${p.accent}44`,
              borderRadius: 4, color: p.accent, fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>
      </div>

      <div>
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${p.accent}22`,
          borderRadius: 10, padding: 28,
          minHeight: 180,
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          position: "relative", overflow: "hidden",
        }}>
          {/* Decorative gradient */}
          <div aria-hidden style={{
            position: "absolute", top: 0, right: 0,
            width: 120, height: 120,
            background: `radial-gradient(circle at top right, ${p.accent}18, transparent 70%)`,
          }} />

          <div>
            <div style={{
              background: p.accent, height: 3, width: 48,
              borderRadius: 2, marginBottom: 16,
            }} />
            <div style={{ color: "rgba(255,255,255,0.18)", fontSize: 12, fontWeight: 500, letterSpacing: "0.04em" }}>
              {p.client}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12, color: p.accent, fontWeight: 600,
              cursor: "pointer",
            }}>
              View case study
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ padding: "128px 80px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{ marginBottom: 64 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--brass)", marginBottom: 18,
          }}>Selected work</div>
          <h2 className="display" style={{
            fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 900,
            lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--ink)",
          }}>Proof is in the pixels.</h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.client} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
