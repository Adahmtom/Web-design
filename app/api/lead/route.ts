import { NextResponse } from "next/server";

// Where leads are delivered. Set these in your environment (e.g. Vercel project env):
//   RESEND_API_KEY   – from https://resend.com/api-keys
//   LEAD_TO_EMAIL    – inbox that should receive leads (defaults to info@ourbrio.com)
//   LEAD_FROM_EMAIL  – verified Resend sender (defaults to Resend's test sender)
const TO = process.env.LEAD_TO_EMAIL ?? "info@ourbrio.com";
const FROM = process.env.LEAD_FROM_EMAIL ?? "OurBrio <onboarding@resend.dev>";
const SOURCE = "ourbrio-web";

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = body.email;
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const goal = typeof body.goal === "string" ? body.goal.trim() : "";

  // Honeypot: bots fill hidden fields. Pretend success, drop silently.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !isEmail(email) || !company) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  const subject = `New project lead — ${name} (${company})`;
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Primary goal: ${goal || "—"}`,
    `Source: ${SOURCE}`,
    `Received: ${new Date().toISOString()}`,
  ];

  // No key configured yet → log so the form still "works" in dev, and the
  // user knows exactly what to wire up. Never blocks the visitor.
  if (!process.env.RESEND_API_KEY) {
    console.log(`[lead:${SOURCE}] (no RESEND_API_KEY set)\n${lines.join("\n")}`);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`[lead:${SOURCE}] Resend error ${res.status}: ${detail}`);
      return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error(`[lead:${SOURCE}] Delivery exception`, err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }
}
