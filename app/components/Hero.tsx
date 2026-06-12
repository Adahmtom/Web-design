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
          fontSize: "clamp(48px, 5.8vw, 88px)",
          fontWeight: 900, lineHeight: 1.0,
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
        {/* Browser window */}
        <div style={{
          width: "100%", maxWidth: 500,
          background: "#fff", borderRadius: 14,
          boxShadow: "0 48px 96px rgba(13,13,13,0.14), 0 8px 24px rgba(13,13,13,0.07)",
          overflow: "hidden", position: "relative", zIndex: 2,
          border: "1px solid var(--border)",
        }}>
          {/* Chrome bar */}
          <div style={{
            background: "#EDEBE6", padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 10,
            borderBottom: "1px solid var(--border)",
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, background: "#fff", borderRadius: 6,
              padding: "5px 12px", fontSize: 11, color: "var(--muted)",
              fontFamily: "monospace", border: "1px solid var(--border)",
            }}>
              {typed}<span style={{ opacity: cursor ? 1 : 0, color: "var(--brass)" }}>|</span>
            </div>
          </div>

          {/* Mockup content */}
          <div style={{ padding: 20, background: "var(--surface)" }}>
            <div style={{
              background: "var(--ink)", borderRadius: 10,
              padding: "22px 20px", marginBottom: 12,
            }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center" }}>
                <div style={{ background: "var(--brass)", height: 4, width: 90, borderRadius: 3 }} />
                <div style={{ background: "rgba(255,255,255,0.1)", height: 4, flex: 1, borderRadius: 3 }} />
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", height: 12, width: "74%", borderRadius: 3, marginBottom: 7 }} />
              <div style={{ background: "rgba(255,255,255,0.07)", height: 9, width: "52%", borderRadius: 3, marginBottom: 18 }} />
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ background: "var(--brass)", padding: "6px 14px", borderRadius: 5, fontSize: 10, color: "var(--ink)", fontWeight: 700 }}>Get started →</div>
                <div style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.15)", padding: "6px 14px", borderRadius: 5, fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Learn more</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
              {["#E8E3D8", "#D4C9B4", "var(--brass-light)"].map((c, i) => (
                <div key={i} style={{ background: c, borderRadius: 8, padding: 12, height: 64 }}>
                  <div style={{ background: "rgba(0,0,0,0.12)", height: 5, width: "60%", borderRadius: 2, marginBottom: 5 }} />
                  <div style={{ background: "rgba(0,0,0,0.07)", height: 4, width: "80%", borderRadius: 2 }} />
                </div>
              ))}
            </div>

            {[["78%", "52%"], ["62%", "42%"], ["48%", "32%"]].map((w, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <div style={{ background: "var(--border)", height: 7, width: w[0], borderRadius: 3, marginBottom: 4 }} />
                <div style={{ background: "var(--border)", height: 5, width: w[1], borderRadius: 3, opacity: 0.5 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Floating delivery badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            position: "absolute", bottom: "13%", left: "2%",
            background: "var(--ink)", color: "var(--cream)",
            borderRadius: 12, padding: "14px 20px",
            boxShadow: "0 20px 48px rgba(0,0,0,0.24)",
            zIndex: 3, border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ fontSize: 10, color: "var(--brass)", fontWeight: 700, marginBottom: 4, letterSpacing: "0.14em", textTransform: "uppercase" }}>DELIVERED IN</div>
          <div className="display" style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.04em" }}>2–4 weeks</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
