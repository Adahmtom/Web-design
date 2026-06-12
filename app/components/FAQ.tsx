"use client";
import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you use templates or themes?",
    a: "No. Every site is custom-designed and hand-built from scratch to fit your brand and your goals. Templates lock you into someone else's layout and load slowly — we'd rather build exactly what your business needs. It also matters: 94% of first impressions are design-related, and 75% of people judge a company's credibility on its website.",
  },
  {
    q: "How long does a project take?",
    a: "Most sites go from kickoff to live in 1–10 days. You'll see a first prototype within about 48 hours of the strategy call, then we iterate from there. Larger sites take a little longer, and we'll give you a clear timeline before we start.",
  },
  {
    q: "How much does a website cost?",
    a: "Starter is $1,500 for a focused, conversion-ready site. Growth is $3,500 for a larger multi-page build with deeper strategy. There's also a Premium tier for more involved projects. Every project includes a free 30-minute strategy call before you commit.",
  },
  {
    q: "Will my site be fast and work on mobile?",
    a: "Yes. We build with custom, modern code (not page-builder bloat), so sites are fast, responsive, and tuned for Core Web Vitals. Every page is designed mobile-first, since most of your visitors will arrive on a phone.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "We do. Beyond the build, we can handle updates, performance monitoring, and new pages as your business grows. We'll talk through what makes sense for you on the strategy call — no lock-in required.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a conversation. We start with a free 30-minute strategy call to understand your business, your customers, and what the site needs to do. From there we handle the design, copy direction, and build.",
  },
];

function Item({ f, i }: { f: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as any }}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 20, padding: "24px 4px", background: "none", border: "none",
          cursor: "pointer", textAlign: "left", color: "var(--ink)",
          fontSize: 18, fontWeight: 700, fontFamily: "inherit",
        }}
      >
        {f.q}
        <span style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: 7,
          background: open ? "rgba(200,169,110,0.16)" : "transparent",
          border: `1.5px solid ${open ? "var(--brass)" : "var(--border)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
        }}>
          {open ? <Minus size={15} color="var(--brass)" /> : <Plus size={15} color="var(--muted)" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontSize: 16, color: "var(--muted)", lineHeight: 1.8,
              padding: "0 4px 26px", maxWidth: 720, fontWeight: 400,
            }}>{f.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" style={{ padding: "120px 80px", background: "var(--cream)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{ marginBottom: 48 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--brass)", marginBottom: 18,
          }}>Common questions</div>
          <h2 className="display" style={{
            fontSize: "clamp(30px, 3.8vw, 52px)", fontWeight: 900,
            lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--ink)",
          }}>
            Good questions.<br /><em style={{ color: "var(--brass)", fontStyle: "italic" }}>Honest answers.</em>
          </h2>
        </motion.div>

        <div>
          {faqs.map((f, i) => <Item key={f.q} f={f} i={i} />)}
        </div>
      </div>
    </section>
  );
}
