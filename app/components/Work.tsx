"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    client: "FulcrumPoint Holdings",
    domain: "fulcrum-point.vercel.app",
    url: "https://fulcrum-point.vercel.app/",
    type: "Private Equity",
    result: "Editorial design built to earn investor trust",
    tags: ["Brand Identity", "Custom Design"],
    img: "/work/fulcrumpoint.jpg",
    accent: "#D2540F",
  },
  {
    client: "CZAR Studio",
    domain: "czar-studio.vercel.app",
    url: "https://czar-studio.vercel.app/",
    type: "Event Photography",
    result: "Cinematic, gallery-first booking experience",
    tags: ["Custom Design", "Gallery"],
    img: "/work/czar.jpg",
    accent: "#B7902F",
  },
  {
    client: "Ecom2Millions Academy",
    domain: "ecom2millions.com",
    url: "https://www.ecom2millions.com/",
    type: "Online Education",
    result: "High-energy brand that drives enrollments",
    tags: ["Brand Identity", "Membership"],
    img: "/work/ecom2millions.jpg",
    accent: "#0F9070",
  },
  {
    client: "IDEA eLearning",
    domain: "ideaelearning.learnworlds.com",
    url: "https://ideaelearning.learnworlds.com/home",
    type: "Learning Platform",
    result: "Polished course experience for 12,000+ learners",
    tags: ["Custom Design", "Course Platform"],
    img: "/work/ideaelearning.jpg",
    accent: "#6D4FC2",
  },
  {
    client: "Saint Tracy",
    domain: "sainttracy.com",
    url: "https://sainttracy.com/",
    type: "Luxury E-Commerce",
    result: "Premium storefront for fine jewelry",
    tags: ["E-Commerce", "Brand Identity"],
    img: "/work/sainttracy.jpg",
    accent: "#A85FA0",
  },
  {
    client: "One on One Health",
    domain: "oneononehealth.us",
    url: "https://oneononehealth.us/",
    type: "Health & Wellness",
    result: "Trust-building site built to book consultations",
    tags: ["Custom Design", "Booking Flow"],
    img: "/work/oneononehealth.jpg",
    accent: "#6F9A1E",
  },
];

type Project = typeof projects[0];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] as any }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ y: -8 }}
      style={{
        display: "flex", flexDirection: "column",
        background: "#fff", borderRadius: 16, overflow: "hidden",
        border: `1px solid ${hover ? p.accent + "66" : "var(--border)"}`,
        boxShadow: hover ? `0 30px 70px ${p.accent}1f` : "0 1px 2px rgba(13,13,13,0.04)",
        textDecoration: "none", cursor: "pointer",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Screenshot in a browser frame */}
      <div style={{ background: "#0A0A0A" }}>
        {/* chrome */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "9px 12px", background: "#16171A",
        }}>
          <div style={{ display: "flex", gap: 5 }}>
            {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
              <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.9 }} />
            ))}
          </div>
          <div style={{
            flex: 1, height: 16, borderRadius: 4,
            background: "rgba(255,255,255,0.07)",
            fontSize: 9, color: "rgba(255,255,255,0.45)",
            display: "flex", alignItems: "center", padding: "0 8px",
            fontFamily: "monospace", overflow: "hidden", whiteSpace: "nowrap",
          }}>{p.domain}</div>
        </div>

        {/* image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "1360 / 850", overflow: "hidden" }}>
          <Image
            src={p.img}
            alt={`${p.client} website hero`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            style={{
              objectFit: "cover", objectPosition: "top center",
              transform: hover ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          {/* hover overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to top, ${p.accent}cc, transparent 55%)`,
            opacity: hover ? 1 : 0, transition: "opacity 0.35s",
            display: "flex", alignItems: "flex-end", justifyContent: "flex-end",
            padding: 14,
          }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#fff", color: "var(--ink)",
              fontSize: 12, fontWeight: 700, padding: "8px 14px", borderRadius: 100,
              transform: hover ? "translateY(0)" : "translateY(8px)",
              transition: "transform 0.35s",
            }}>
              Visit live site <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "22px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: p.accent, marginBottom: 10,
        }}>{p.type}</div>

        <h3 className="display" style={{
          fontSize: 20, fontWeight: 800, color: "var(--ink)",
          letterSpacing: "-0.02em", marginBottom: 8, lineHeight: 1.2,
        }}>{p.client}</h3>

        <p style={{
          fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6,
          marginBottom: 18, flex: 1,
        }}>{p.result}</p>

        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 10.5, fontWeight: 600, padding: "4px 10px",
              border: `1px solid ${p.accent}33`, background: `${p.accent}0d`,
              borderRadius: 100, color: p.accent,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Work() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ padding: "128px clamp(20px, 5vw, 80px)", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: 56, flexWrap: "wrap", gap: 20,
          }}
        >
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--brass)", marginBottom: 18,
            }}>Selected work</div>
            <h2 className="display" style={{
              fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 900,
              lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--ink)",
            }}>Proof is in the pixels.</h2>
          </div>
          <p style={{ maxWidth: 300, fontSize: 15, color: "var(--muted)", lineHeight: 1.75 }}>
            Real sites, live in production — across finance, e-commerce, education, and wellness.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
          gap: 24,
        }} className="work-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.client} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
