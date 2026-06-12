"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    phase: "Discovery",
    duration: "Day 1–2",
    desc: "A 60-minute deep dive into your business, audience, and goals. We come prepared with competitor research and initial observations.",
    icon: "01",
  },
  {
    phase: "Design",
    duration: "Day 3–7",
    desc: "You receive a full Figma prototype — not wireframes, not mood boards. A real, interactive design you can click through and share with your team.",
    icon: "02",
  },
  {
    phase: "Build",
    duration: "Day 8–21",
    desc: "We code in Next.js with TypeScript. Daily progress updates. You can watch your site take shape in a private staging environment.",
    icon: "03",
  },
  {
    phase: "Launch",
    duration: "Day 22–28",
    desc: "SEO audit, performance testing, cross-browser QA. We deploy to Vercel and hand you the keys — plus 30 days of free support.",
    icon: "04",
  },
];

function StepCard({ s, index }: { s: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
      style={{ position: "relative" }}
    >
      {/* Step number bubble */}
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: index === 0 ? "var(--brass)" : "var(--cream)",
        border: index === 0 ? "none" : "1.5px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 24, position: "relative", zIndex: 2,
      }}>
        <span className="display" style={{
          fontSize: 13, fontWeight: 800,
          color: index === 0 ? "var(--ink)" : "var(--muted)",
          letterSpacing: "0.02em",
        }}>{s.icon}</span>
      </div>

      <div style={{
        fontSize: 11, color: "var(--muted)", fontWeight: 600,
        letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8,
      }}>{s.duration}</div>

      <h3 className="display" style={{
        fontSize: 22, fontWeight: 700, color: "var(--ink)",
        marginBottom: 14, letterSpacing: "-0.02em",
      }}>{s.phase}</h3>

      <p style={{
        fontSize: 14, color: "var(--muted)", lineHeight: 1.8,
        fontWeight: 400, paddingRight: 16,
      }}>{s.desc}</p>
    </motion.div>
  );
}

export default function Process() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="process" style={{ padding: "128px 80px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{ marginBottom: 80 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--brass)", marginBottom: 18,
          }}>How we work</div>
          <h2 className="display" style={{
            fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 900,
            lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--ink)",
          }}>
            Four phases.<br />
            <em style={{ color: "var(--brass)", fontStyle: "italic" }}>Zero surprises.</em>
          </h2>
        </motion.div>

        {/* Connecting line (desktop only) */}
        <div style={{ position: "relative" }}>
          <div aria-hidden style={{
            position: "absolute",
            top: 24, left: 24, right: "calc(25% + 24px)",
            height: 1,
            background: "linear-gradient(to right, var(--brass), var(--border))",
            zIndex: 1,
            display: "none",
          }} className="process-line" />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }} className="process-grid">
            {steps.map((s, i) => (
              <div key={i} style={{
                borderTop: "2px solid",
                borderColor: i === 0 ? "var(--brass)" : "var(--border)",
                paddingTop: 32, paddingRight: i < 3 ? 32 : 0,
              }}>
                <StepCard s={s} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            marginTop: 80, padding: "40px 48px",
            background: "var(--ink)", borderRadius: 12,
            display: "flex", alignItems: "center",
            justifyContent: "space-between", flexWrap: "wrap", gap: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: "var(--brass)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Ready when you are</div>
            <p className="display" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "var(--cream)", letterSpacing: "-0.03em" }}>
              Your site could be live in 4 weeks.
            </p>
          </div>
          <a href="#waitlist" style={{
            textDecoration: "none",
            background: "var(--brass)", color: "var(--ink)",
            padding: "14px 28px", borderRadius: 8, fontSize: 14, fontWeight: 700,
            transition: "all 0.2s", cursor: "pointer", display: "inline-block",
            whiteSpace: "nowrap",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(200,169,110,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >Start the process →</a>
        </motion.div>
      </div>
    </section>
  );
}
