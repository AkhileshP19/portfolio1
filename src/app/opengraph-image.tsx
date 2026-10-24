import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";
export const alt =
  "Akhilesh Patil — Software Engineer. Frontend systems, full-stack products and AI workflows.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "56px 64px",
        width: "100%",
        height: "100%",
        background: "#f4f1e9",
        color: "#111210",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 17,
          letterSpacing: 3,
          color: "#2457ff",
        }}
      >
        <span>ENGINEERING DOSSIER</span>
        <span>INDIA / SOFTWARE ENGINEER</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 116,
          letterSpacing: -7,
          lineHeight: 1,
          marginTop: 62,
        }}
      >
        <span>Akhilesh</span>
        <span style={{ marginLeft: 230 }}>Patil.</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #aaa99f",
          paddingTop: 24,
          marginTop: 48,
          justifyContent: "space-between",
          fontSize: 21,
        }}
      >
        <span>Frontend systems / Full-stack products / AI workflows</span>
        <span style={{ color: "#2457ff" }}>{profile.role}</span>
      </div>
    </div>,
    size,
  );
}
