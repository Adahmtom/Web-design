"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const projects = [
  {
    client: "Emmanuel Portfolio",
    type: "Content Creator · Next.js",
    headline: "A creative portfolio that books 3× more brand deals",
    result: "+3× brand deal conversions in 60 days",
    tags: ["Next.js 15", "Supabase", "Admin Dashboard"],
    accent: "#C8A96E",
    bg: "#16162B",
    variant: "portfolio" as const,
  },
  {
    client: "FulcrumPoint Holdings",
    type: "Private Equity · WordPress",
    headline: "Institutional credibility for a high-stakes audience",
    result: "Cut bounce rate by 42% vs. previous site",
    tags: ["WordPress", "Video Hero", "Parallax"],
    accent: "#C4962A",
    bg: "#1C1200",
    variant: "equity" as const,
  },
  {
    client: "CZAR Studio",
    type: "Photography · Next.js",
    headline: "Gallery-first design that lets the work speak",
    result: "3× inquiry rate after launch",
    tags: ["Next.js", "Cloudinary", "Vercel"],
    accent: "#CFCFCF",
    bg: "#0A0A0A",
    variant: "photography" as const,
  },
];

type Project = typeof projects[0];

/* A small browser-framed mockup of each client's website hero. */
function HeroMock({ p }: { p: Project }) {
  return (
    <div style={{
      borderRadius: 10, overflow: "hidden",
      border: `1px solid ${p.accent}26`,
      boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
      background: p.bg,
    }}>
      {/* Browser chrome */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "9px 12px", background: "rgba(255,255,255,0.04)",
        borderBottom: `1px solid ${p.accent}1c`,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.85 }} />
          ))}
        </div>
        <div style={{
          flex: 1, height: 16, borderRadius: 4,
          background: "rgba(255,255,255,0.05)",
          fontSize: 9, color: "rgba(255,255,255,0.35)",
          display: "flex", alignItems: "center", padding: "0 8px",
          fontFamily: "monospace",
        }}>
          {p.client.toLowerCase().split(" ")[0]}.com
        </div>
      </div>

      {/* Hero body — per-variant layout */}
      <div style={{ padding: "26px 24px", minHeight: 188, position: "relative", overflow: "hidden" }}>
        {p.variant === "portfolio" && <PortfolioHero p={p} />}
        {p.variant === "equity" && <EquityHero p={p} />}
        {p.variant === "photography" && <PhotographyHero p={p} />}
      </div>
    </div>
  );
}

function PortfolioHero({ p }: { p: Project }) {
  return (
    <>
      <div aria-hidden style={{
        position: "absolute", top: -30, right: -30, width: 150, height: 150, borderRadius: "50%",
        background: `radial-gradient(circle, ${p.accent}22, transparent 70%)`,
      }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.04em" }}>EMMANUEL</span>
        <div style={{ display: "flex", gap: 12 }}>
          {["Work", "About", "Contact"].map(n => (
            <span key={n} style={{ fontSize: 9, color: "rgba(255,255,255,0.5)" }}>{n}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
        <div>
          <div className="display" style={{ fontSize: 24, fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Creator &amp;<br /><span style={{ color: p.accent, fontStyle: "italic" }}>storyteller.</span>
          </div>
          <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 7, background: p.accent, color: "#16162B", fontSize: 9, fontWeight: 800, padding: "6px 12px", borderRadius: 5 }}>
            Let&apos;s collaborate →
          </div>
        </div>
        <div style={{
          width: 56, height: 56, borderRadius: 14, flexShrink: 0,
          background: `linear-gradient(135deg, ${p.accent}, #6B5B8A)`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Play size={16} color="#16162B" fill="#16162B" />
        </div>
      </div>
    </>
  );
}

function EquityHero({ p }: { p: Project }) {
  return (
    <>
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${p.accent}0a 1px, transparent 1px)`,
        backgroundSize: "100% 22px", opacity: 0.5,
      }} />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: "0.22em" }}>FULCRUMPOINT</span>
          <div style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: 14, height: 2, background: "rgba(255,255,255,0.4)" }} />)}
          </div>
        </div>
        <div className="display" style={{ fontSize: 21, fontWeight: 700, color: "#fff", lineHeight: 1.18, letterSpacing: "-0.01em" }}>
          Disciplined capital.<br />
          <span style={{ color: p.accent }}>Lasting value.</span>
        </div>
        <div style={{ width: 40, height: 2, background: p.accent, margin: "16px 0 16px" }} />
        <div style={{ display: "flex", gap: 28 }}>
          {[["$2.4B", "Assets managed"], ["18 yrs", "Track record"]].map(([v, l]) => (
            <div key={l}>
              <div className="display" style={{ fontSize: 16, fontWeight: 800, color: p.accent, letterSpacing: "-0.02em" }}>{v}</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function PhotographyHero({ p }: { p: Project }) {
  const tiles = [
    "linear-gradient(135deg,#3a3a3a,#0e0e0e)",
    "linear-gradient(135deg,#5a4a3a,#1a1208)",
    "linear-gradient(135deg,#2a3a4a,#0a0f14)",
    "linear-gradient(135deg,#4a2a3a,#140a10)",
    "linear-gradient(135deg,#3a4a3a,#0e140e)",
    "linear-gradient(135deg,#4a4a2a,#14140a)",
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
        <div>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: "0.06em" }}>CZAR</span>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", marginLeft: 6, letterSpacing: "0.2em" }}>STUDIO</span>
        </div>
        <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>SELECTED WORKS ’24</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
        {tiles.map((bg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            style={{ height: 46, borderRadius: 4, background: bg }}
          />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
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
        borderRadius: 14,
        padding: "48px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 28px 70px rgba(0,0,0,0.34)";
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

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 26 }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 11, padding: "4px 11px",
              border: `1px solid ${p.accent}44`,
              borderRadius: 100, color: p.accent, fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        <a style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 13, color: p.accent, fontWeight: 700, cursor: "pointer",
          transition: "gap 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
          onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
        >
          View case study <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Website hero preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] as any }}
        className="work-preview"
      >
        <HeroMock p={p} />
      </motion.div>
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

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.client} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
