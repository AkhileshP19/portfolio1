import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#f4f1e9",
        color: "#111210",
        fontSize: 80,
        fontWeight: 700,
      }}
    >
      AP<span style={{ color: "#2457ff" }}>.</span>
    </div>,
    size,
  );
}
