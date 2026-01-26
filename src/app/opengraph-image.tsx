import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kenny Advisor - Practice Guitar. Just Play.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #0C1B2C 0%, #142636 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "20px" }}
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="#9056A3"
            />
          </svg>
          <span style={{ fontSize: 64, fontWeight: "bold" }}>Kenny Advisor</span>
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#9056A3",
            marginTop: "10px",
          }}
        >
          Practice Guitar. Just Play.
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            marginTop: "30px",
          }}
        >
          For Mac and iOS
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
