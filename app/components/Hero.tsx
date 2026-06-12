"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AetherFlowBackground } from "@/components/ui/aether-flow-hero";

const TYPED_URL = "ourbrio.com/your-brand";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as any },
});

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [cursor, setCursor] = useState(true);
  const idx = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      timerRef.current = setInterval(() => {
        if (idx.current < TYPED_URL.length) {
          setTyped(TYPED_URL.slice(0, idx.current + 1));
          idx.current++;
        } else {
          clearInterval(timerRef.current!);
        }
      }, 75);
    }, 1400);
    return () => { clearTimeout(t); clearInterval(timerRef.current!); };
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section style={{
      minHeight: "100svh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      paddingTop: 76,
      position: "relative",
      overflow: "hidden",
      background: "var(--cream)",
    }} className="hero-grid">

      {/* 21st.dev aether-flow particle field (recolored brass) */}
      <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}>
        <AetherFlowBackground />
      </div>

      {/* Dot grid bg */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        opacity: 0.4,
        pointerEvents: "none",
      }} />

      {/* Left */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "88px 56px 88px 80px", position: "relative", zIndex: 2,
      }} className="hero-left">

        <motion.div {...up(0.1)} style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--brass)", marginBottom: 32,
        }}>
          <span style={{ width: 28, height: 1, background: "var(--brass)", display: "inline-block" }} />
          OurBrio Agency · Web Design
        </motion.div>

        <motion.h1 {...up(0.2)} className="display" style={{
          fontSize: "clamp(29px, 4.2vw, 72px)",
          fontWeight: 900, lineHeight: 1.04,
          letterSpacing: "-0.04em", color: "var(--ink)", marginBottom: 28,
        }}>
          Your website<br />
          should be your<br />
          <em style={{ color: "var(--brass)", fontStyle: "italic" }}>best salesperson.</em>
        </motion.h1>

        <motion.p {...up(0.3)} style={{
          fontSize: 17, color: "var(--muted)", lineHeight: 1.8,
          maxWidth: 420, marginBottom: 44, fontWeight: 400,
        }}>
          We build custom websites from scratch — no templates, no compromises.
          Fast, conversion-focused, and built to represent your brand at its absolute best.
        </motion.p>

        <motion.div {...up(0.35)} style={{
          display: "flex", alignItems: "center", gap: 10,
          fontSize: 13, color: "var(--muted)", marginBottom: 40, fontWeight: 500,
        }}>
          <span style={{ color: "var(--brass)", fontSize: 16 }}>✦</span>
          <span><strong style={{ color: "var(--ink)" }}>94% of first impressions</strong> are design-related, and 75% judge your credibility on it — Stanford</span>
        </motion.div>

        <motion.div {...up(0.4)} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 60 }}>
          <a href="#waitlist" style={{
            textDecoration: "none", background: "var(--ink)", color: "var(--cream)",
            padding: "15px 32px", fontSize: 14, fontWeight: 600, borderRadius: 8,
            transition: "all 0.25s", display: "inline-block", cursor: "pointer",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--brass)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(200,169,110,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >Start a project →</a>

          <a href="#work" style={{
            textDecoration: "none", color: "var(--ink)",
            padding: "15px 32px", fontSize: 14, fontWeight: 500, borderRadius: 8,
            border: "1.5px solid var(--border)", display: "inline-block",
            transition: "all 0.2s", cursor: "pointer",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >See our work</a>
        </motion.div>

        <motion.div {...up(0.5)} style={{
          display: "flex", gap: 48, paddingTop: 40,
          borderTop: "1px solid var(--border)",
        }}>
          {[
            { num: "48h", label: "First prototype" },
            { num: "3×", label: "Avg. lead growth" },
            { num: "100%", label: "Custom code" },
          ].map(s => (
            <div key={s.label}>
              <div className="display" style={{ fontSize: 30, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.04em" }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — browser mockup */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] as any }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "88px 80px 88px 24px", position: "relative",
        }} className="hero-right"
      >
        {/* SaaS product dashboard mockup */}
        <div style={{ position: "relative", width: "100%", maxWidth: 520 }}>
        <div style={{
          width: "100%",
          background: "#fff", borderRadius: 16,
          boxShadow: "0 48px 96px rgba(13,13,13,0.16), 0 8px 24px rgba(13,13,13,0.07)",
          overflow: "hidden", position: "relative", zIndex: 2,
          border: "1px solid var(--border)",
        }}>
          {/* App top bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "13px 16px", borderBottom: "1px solid var(--border)",
            background: "#fff",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: 6, background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: "var(--brass)" }} />
              </div>
              <span className="display" style={{ fontSize: 13, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em" }}>Brio Analytics</span>
            </div>
            <div style={{
              flex: 1, background: "var(--surface)", borderRadius: 7,
              padding: "6px 12px", fontSize: 11, color: "var(--muted)",
              border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 7,
            }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", border: "1.5px solid var(--muted)", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontFamily: "monospace" }}>{typed || "Search…"}<span style={{ opacity: cursor && typed ? 1 : 0, color: "var(--brass)" }}>|</span></span>
            </div>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, var(--brass), #B08D52)", flexShrink: 0 }} />
          </div>

          <div style={{ display: "flex", background: "var(--surface)" }}>
            {/* Sidebar */}
            <div style={{ width: 116, padding: "16px 12px", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 4 }} className="dash-sidebar">
              {[
                { label: "Overview", active: true },
                { label: "Pages", active: false },
                { label: "Audience", active: false },
                { label: "Reports", active: false },
                { label: "Settings", active: false },
              ].map(item => (
                <div key={item.label} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "7px 9px", borderRadius: 7,
                  background: item.active ? "var(--ink)" : "transparent",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: 2, flexShrink: 0,
                    background: item.active ? "var(--brass)" : "var(--border)",
                  }} />
                  <span style={{
                    fontSize: 11, fontWeight: item.active ? 700 : 500,
                    color: item.active ? "var(--cream)" : "var(--muted)",
                  }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main panel */}
            <div style={{ flex: 1, padding: "16px 16px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <span className="display" style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em" }}>Overview</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: "var(--muted)", background: "#fff", border: "1px solid var(--border)", borderRadius: 100, padding: "3px 10px" }}>Last 30 days</span>
              </div>

              {/* Metric cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                {[
                  { label: "Revenue", value: "$48.2k", delta: "+12%" },
                  { label: "Visitors", value: "12.8k", delta: "+8%" },
                  { label: "Conv.", value: "4.7%", delta: "+0.9%" },
                ].map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                    style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 11px" }}
                  >
                    <div style={{ fontSize: 9, color: "var(--muted)", fontWeight: 600, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.06em" }}>{m.label}</div>
                    <div className="display" style={{ fontSize: 17, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>{m.value}</div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: "#3E8E5A", marginTop: 4, display: "flex", alignItems: "center", gap: 3 }}>
                      <span style={{ fontSize: 8 }}>▲</span>{m.delta}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart card */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 9, padding: "12px 13px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--ink)" }}>Traffic</span>
                  <span style={{ fontSize: 9, color: "var(--brass)", fontWeight: 700 }}>● Organic</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
                  {[42, 58, 36, 70, 54, 84, 64, 96].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: 0.8 + i * 0.07, ease: [0.22, 1, 0.36, 1] as any }}
                      style={{
                        flex: 1, borderRadius: "3px 3px 0 0",
                        background: i === 7
                          ? "linear-gradient(180deg, var(--brass), #B08D52)"
                          : "var(--brass-light, #E0D2B6)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating "live visitors" pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            position: "absolute", top: -16, right: -14,
            background: "#fff", color: "var(--ink)",
            borderRadius: 100, padding: "8px 14px",
            boxShadow: "0 16px 40px rgba(13,13,13,0.16)",
            zIndex: 3, border: "1px solid var(--border)",
            display: "flex", alignItems: "center", gap: 8,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3E8E5A", display: "inline-block", boxShadow: "0 0 0 3px rgba(62,142,90,0.18)" }} />
          <span style={{ fontSize: 12, fontWeight: 700 }}>248 live visitors</span>
        </motion.div>

        {/* Floating delivery badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            position: "absolute", bottom: -22, left: -18,
            background: "var(--ink)", color: "var(--cream)",
            borderRadius: 12, padding: "13px 18px",
            boxShadow: "0 20px 48px rgba(0,0,0,0.26)",
            zIndex: 3, border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ fontSize: 10, color: "var(--brass)", fontWeight: 700, marginBottom: 4, letterSpacing: "0.14em", textTransform: "uppercase" }}>DELIVERED IN</div>
          <div className="display" style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.04em" }}>2–4 weeks</div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
