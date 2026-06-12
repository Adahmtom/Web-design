"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    client: "FulcrumPoint Holdings",
    domain: "fulcrum-point.vercel.app",
    url: "https://fulcrum-point.vercel.app/",
    type: "Private Equity",
    headline: "Institutional credibility for a high-stakes audience",
    result: "Editorial design built to earn investor trust",
    tags: ["Brand Identity", "Custom Design", "Responsive"],
    img: "/work/fulcrumpoint.jpg",
    accent: "#E2641F",
    bg: "#11141C",
  },
  {
    client: "CZAR Studio",
    domain: "czar-studio.vercel.app",
    url: "https://czar-studio.vercel.app/",
    type: "Event Photography",
    headline: "A gallery-first site that lets the work speak",
    result: "Cinematic hero built around the booking CTA",
    tags: ["Custom Design", "Gallery", "Booking Flow"],
    img: "/work/czar.jpg",
    accent: "#C9A24B",
    bg: "#0A0A0A",
  },
  {
    client: "Ecom2Millions Academy",
    domain: "ecom2millions.com",
    url: "https://www.ecom2millions.com/",
    type: "Online Education",
    headline: "A bold brand for a growing e-commerce academy",
    result: "High-energy hero that drives enrollments",
    tags: ["Brand Identity", "Custom Design", "Membership"],
    img: "/work/ecom2millions.jpg",
    accent: "#16A07A",
    bg: "#06231C",
  },
  {
    client: "IDEA eLearning",
    domain: "ideaelearning.learnworlds.com",
    url: "https://ideaelearning.learnworlds.com/home",
    type: "Online Learning Platform",
    headline: "A polished platform for professional courses",
    result: "Editorial learning experience for 12,000+ learners",
    tags: ["Custom Design", "Course Platform", "Responsive"],
    img: "/work/ideaelearning.jpg",
    accent: "#7C5CCB",
    bg: "#16122A",
  },
  {
    client: "Saint Tracy",
    domain: "sainttracy.com",
    url: "https://sainttracy.com/",
    type: "Luxury E-Commerce",
    headline: "A premium storefront for fine jewelry",
    result: "Conversion-focused store for diamond & gold rings",
    tags: ["E-Commerce", "Brand Identity", "Custom Design"],
    img: "/work/sainttracy.jpg",
    accent: "#B57BB0",
    bg: "#190F1E",
  },
];

type Project = typeof projects[0];

/* Real website hero screenshot inside a browser frame. */
function HeroShot({ p }: { p: Project }) {
  return (
    <div style={{
      borderRadius: 10, overflow: "hidden",
      border: `1px solid ${p.accent}33`,
      boxShadow: "0 30px 60px rgba(0,0,0,0.42)",
      background: "#000",
    }}>
      {/* Browser chrome */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "9px 12px", background: "rgba(255,255,255,0.05)",
        borderBottom: `1px solid ${p.accent}1f`,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.85 }} />
          ))}
        </div>
        <div style={{
          flex: 1, height: 16, borderRadius: 4,
          background: "rgba(255,255,255,0.06)",
          fontSize: 9, color: "rgba(255,255,255,0.4)",
          display: "flex", alignItems: "center", padding: "0 8px",
          fontFamily: "monospace",
        }}>{p.domain}</div>
      </div>

      {/* Live hero screenshot */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "1360 / 760", overflow: "hidden" }}>
        <Image
          src={p.img}
          alt={`${p.client} website hero`}
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
    </div>
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
          fontSize: 13, color: `${p.accent}dd`, marginBottom: 24,
          fontWeight: 500, fontStyle: "italic", letterSpacing: "0.01em",
        }}>{p.result}</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 26 }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 11, padding: "4px 11px",
              border: `1px solid ${p.accent}44`,
              borderRadius: 100, color: p.accent, fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 13, color: p.accent, fontWeight: 700, cursor: "pointer",
          textDecoration: "none", transition: "gap 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
          onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
        >
          Visit live site <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Website hero screenshot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] as any }}
        className="work-preview"
      >
        <HeroShot p={p} />
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
