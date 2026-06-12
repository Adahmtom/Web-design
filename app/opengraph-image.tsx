import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sitetact — Custom Website Design & Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F0E8",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, fontWeight: 800, color: "#0D0D0D" }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, background: "#C8A96E" }} />
          Sitetact
          <span style={{ color: "#9B8B73", fontWeight: 500, fontSize: 20, letterSpacing: 2 }}>· WEB DESIGN</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 900, color: "#0D0D0D", lineHeight: 1.04, letterSpacing: -3 }}>
            Your website should be
          </div>
          <div style={{ fontSize: 78, fontWeight: 900, color: "#C8A96E", fontStyle: "italic", lineHeight: 1.04, letterSpacing: -3 }}>
            your best salesperson.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, color: "#3A3A3A" }}>
          <div>Custom-built · Conversion-focused · Live in 1–10 days</div>
          <div style={{ color: "#9B8B73" }}>sitetact.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
