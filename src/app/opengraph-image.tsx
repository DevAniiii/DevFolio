import { ImageResponse } from "next/og";

export const alt =
  "Anirban Banerjee — Independent Security Researcher. Application security, APIs, and responsible disclosure.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080A09",
          color: "#EDEFEA",
          padding: 64,
          border: "1px solid #29312B",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(to right, rgba(41,49,43,0.32) 1px, transparent 1px), linear-gradient(to bottom, rgba(41,49,43,0.32) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            color: "#929B91",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: "#B7F36B",
                transform: "rotate(45deg)",
              }}
            />
            <span>OBSIDIAN / SECURITY RESEARCH</span>
          </div>
          <span>PORTFOLIO — 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              lineHeight: 1,
              letterSpacing: -3,
              fontWeight: 600,
            }}
          >
            Anirban Banerjee
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.3,
              color: "#B7F36B",
              letterSpacing: 1,
            }}
          >
            Independent Security Researcher
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 880,
              fontSize: 25,
              lineHeight: 1.5,
              color: "#929B91",
            }}
          >
            Application security, APIs, authorization, and business logic.
            Curiosity finds the flaw. Research proves it.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #29312B",
            paddingTop: 24,
            fontSize: 17,
            letterSpacing: 3,
            color: "#929B91",
          }}
        >
          <span>WEB APPLICATION SECURITY</span>
          <span>COORDINATED DISCLOSURE</span>
          <span>ANIRBANBANERJEE.DEV</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
