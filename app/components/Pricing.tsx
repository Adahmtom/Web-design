"use client";
import { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    sub: "one-time",
    desc: "Perfect for new businesses that need a professional web presence fast.",
    features: [
      "Up to 5 custom pages",
      "Mobile-first responsive design",
      "Contact form + Google Maps",
      "Basic SEO setup",
      "Vercel deployment",
      "14-day support",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$3,500",
    sub: "one-time",
    desc: "For businesses ready to use their website as a real lead generation tool.",
    features: [
      "Up to 12 custom pages",
      "Custom CMS / admin dashboard",
      "Booking or inquiry system",
      "Full SEO + Core Web Vitals",
      "Analytics dashboard",
      "CRM integration",
      "30-day support",
    ],
    cta: "Most popular — start here",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    sub: "project-based",
    desc: "E-commerce, SaaS platforms, or complex multi-role web applications.",
    features: [
      "Unlimited pages & features",
      "E-commerce or SaaS build",
      "Custom API integrations",
      "Multi-role access control",
      "Priority builds (< 3 weeks)",
      "60-day dedicated support",
    ],
    cta: "Let's talk",
    highlight: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
      style={{
        background: plan.highlight ? "var(--ink)" : "#fff",
        color: plan.highlight ? "var(--cream)" : "var(--ink)",
        border: plan.highlight ? "none" : "1px solid var(--border)",
        borderRadius: 12, padding: "40px 36px",
        position: "relative",
        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s",
        display: "flex", flexDirection: "column",
        ...(plan.highlight ? { boxShadow: "0 24px 64px rgba(13,13,13,0.2)" } : {}),
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = plan.highlight
          ? "0 32px 80px rgba(13,13,13,0.28)"
          : "0 16px 48px rgba(13,13,13,0.1)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = plan.highlight ? "0 24px 64px rgba(13,13,13,0.2)" : "none";
      }}
    >
      {plan.highlight && (
        <div style={{
          position: "absolute", top: -13, left: "50%",
          transform: "translateX(-50%)",
          background: "var(--brass)", color: "var(--ink)",
          fontSize: 10, fontWeight: 800, letterSpacing: "0.12em",
          padding: "5px 16px", borderRadius: 4,
          textTransform: "uppercase", whiteSpace: "nowrap",
        }}>Most popular</div>
      )}

      <div style={{
        fontSize: 11, fontWeight: 800, letterSpacing: "0.14em",
        color: "var(--brass)", textTransform: "uppercase", marginBottom: 20,
      }}>{plan.name}</div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
        <span className="display" style={{
          fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em",
          color: plan.highlight ? "var(--cream)" : "var(--ink)",
        }}>{plan.price}</span>
      </div>
      <div style={{
        fontSize: 12, color: plan.highlight ? "rgba(245,240,232,0.45)" : "var(--muted)",
        marginBottom: 20, fontWeight: 500,
      }}>{plan.sub}</div>

      <p style={{
        fontSize: 14, lineHeight: 1.75, marginBottom: 32,
        color: plan.highlight ? "rgba(245,240,232,0.6)" : "var(--muted)",
        fontWeight: 400,
      }}>{plan.desc}</p>

      <ul style={{
        listStyle: "none", marginBottom: 36,
        display: "flex", flexDirection: "column", gap: 11, flex: 1,
      }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
            <Check size={14} style={{ color: "var(--brass)", flexShrink: 0, marginTop: 3 }} />
            <span style={{ color: plan.highlight ? "rgba(245,240,232,0.82)" : "var(--ink)" }}>{f}</span>
          </li>
        ))}
      </ul>

      <a href="#waitlist" style={{
        display: "block", textAlign: "center", textDecoration: "none",
        padding: "14px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600,
        background: plan.highlight ? "var(--brass)" : "var(--ink)",
        color: plan.highlight ? "var(--ink)" : "var(--cream)",
        transition: "all 0.2s", cursor: "pointer",
      }}
        onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
      >{plan.cta} →</a>
    </motion.div>
  );
}

export default function Pricing() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="pricing" style={{ padding: "128px 80px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--brass)", marginBottom: 18,
          }}>Transparent pricing</div>
          <h2 className="display" style={{
            fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 900,
            lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--ink)",
          }}>
            No retainers. No surprises.<br />
            <em style={{ color: "var(--brass)", fontStyle: "italic" }}>Just results.</em>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}>
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            textAlign: "center", marginTop: 40, fontSize: 13,
            color: "var(--muted)", fontWeight: 400,
          }}
        >
          All projects include a free 30-min strategy call. No commitment required.
        </motion.p>
      </div>
    </section>
  );
}
