"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { track } from "@vercel/analytics";

export default function Waitlist() {
  const [form, setForm] = useState({ name: "", email: "", company: "", goal: "", website: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.goal) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      track("lead_submitted", { goal: form.goal });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email info@ourbrio.com.");
    } finally {
      setLoading(false);
    }
  }

  const inputBase: React.CSSProperties = {
    width: "100%", padding: "14px 16px",
    background: "rgba(245,240,232,0.06)",
    border: "1px solid rgba(245,240,232,0.14)",
    borderRadius: 8, color: "var(--cream)",
    fontSize: 15, fontFamily: "'Space Grotesk', sans-serif",
    outline: "none", transition: "border-color 0.2s, background 0.2s",
  };

  return (
    <section id="waitlist" style={{
      background: "var(--navy)", padding: "128px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      <div aria-hidden style={{
        position: "absolute", top: "-240px", right: "-240px",
        width: 640, height: 640, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "-200px", left: "-160px",
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
        style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 2 }}
      >
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--brass)", marginBottom: 18,
          }}>Ready to build?</div>
          <h2 className="display" style={{
            fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 900,
            lineHeight: 1.06, letterSpacing: "-0.04em",
            color: "var(--cream)", marginBottom: 20,
          }}>
            Let's build something<br />
            <em style={{ color: "var(--brass)", fontStyle: "italic" }}>worth remembering.</em>
          </h2>
          <p style={{
            fontSize: 16, color: "rgba(245,240,232,0.5)",
            lineHeight: 1.75, fontWeight: 400,
          }}>
            We take on a limited number of projects per month to ensure quality.
            Fill in your details and we'll reach out within 24 hours.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
            style={{
              textAlign: "center", padding: "56px 48px",
              background: "rgba(200,169,110,0.07)",
              border: "1px solid rgba(200,169,110,0.2)",
              borderRadius: 12,
            }}
          >
            <div className="display" style={{
              fontSize: 40, marginBottom: 16, color: "var(--brass)", fontWeight: 900,
            }}>✦</div>
            <h3 className="display" style={{
              fontSize: 26, fontWeight: 700, color: "var(--cream)", marginBottom: 14,
              letterSpacing: "-0.03em",
            }}>
              You're on the list, {form.name.split(" ")[0]}.
            </h3>
            <p style={{ color: "rgba(245,240,232,0.55)", fontSize: 15, lineHeight: 1.75 }}>
              Expect a message from us at{" "}
              <strong style={{ color: "var(--brass)" }}>{form.email}</strong>{" "}
              within 24 hours. Get ready to build something exceptional.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
              <div>
                <label htmlFor="name" style={{
                  display: "block", fontSize: 11, fontWeight: 700, color: "var(--brass)",
                  letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8,
                }}>Your name</label>
                <input
                  id="name" name="name" value={form.name} onChange={handleChange}
                  placeholder="Ahmad Adeboye" required
                  style={inputBase}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--brass)"; e.currentTarget.style.background = "rgba(245,240,232,0.09)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.14)"; e.currentTarget.style.background = "rgba(245,240,232,0.06)"; }}
                />
              </div>
              <div>
                <label htmlFor="email" style={{
                  display: "block", fontSize: 11, fontWeight: 700, color: "var(--brass)",
                  letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8,
                }}>Email</label>
                <input
                  id="email" name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="you@company.com" required
                  style={inputBase}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--brass)"; e.currentTarget.style.background = "rgba(245,240,232,0.09)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.14)"; e.currentTarget.style.background = "rgba(245,240,232,0.06)"; }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" style={{
                display: "block", fontSize: 11, fontWeight: 700, color: "var(--brass)",
                letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8,
              }}>Business / Company</label>
              <input
                id="company" name="company" value={form.company} onChange={handleChange}
                placeholder="Your company name" required
                style={inputBase}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--brass)"; e.currentTarget.style.background = "rgba(245,240,232,0.09)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.14)"; e.currentTarget.style.background = "rgba(245,240,232,0.06)"; }}
              />
            </div>

            <div>
              <label htmlFor="goal" style={{
                display: "block", fontSize: 11, fontWeight: 700, color: "var(--brass)",
                letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8,
              }}>Primary goal</label>
              <select
                id="goal" name="goal" value={form.goal} onChange={handleChange} required
                style={{
                  ...inputBase,
                  color: form.goal ? "var(--cream)" : "rgba(245,240,232,0.35)",
                  cursor: "pointer",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C8A96E' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  paddingRight: 44,
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--brass)"; e.currentTarget.style.background = "rgba(245,240,232,0.09)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.14)"; e.currentTarget.style.background = "rgba(245,240,232,0.06)"; }}
              >
                <option value="" disabled>What's the main goal?</option>
                <option value="leads">Generate more leads</option>
                <option value="credibility">Build credibility online</option>
                <option value="ecommerce">Sell products online</option>
                <option value="redesign">Replace an outdated site</option>
                <option value="launch">Launch a new business</option>
              </select>
            </div>

            {/* Honeypot — hidden from humans, catches bots */}
            <input
              type="text" name="website" tabIndex={-1} autoComplete="off"
              value={form.website} onChange={handleChange}
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            {error && (
              <p role="alert" style={{ fontSize: 13, color: "#E0A0A0", textAlign: "center" }}>{error}</p>
            )}

            <button type="submit" disabled={loading} style={{
              marginTop: 8, padding: "16px 36px",
              background: loading ? "rgba(200,169,110,0.55)" : "var(--brass)",
              color: "var(--ink)", border: "none", borderRadius: 8,
              fontSize: 15, fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,169,110,0.4)"; } }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {loading ? "Sending…" : "Claim my spot →"}
            </button>

            <p style={{ fontSize: 12, color: "rgba(245,240,232,0.3)", textAlign: "center", marginTop: 4 }}>
              We respond within 24 hours. No spam, ever.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}
