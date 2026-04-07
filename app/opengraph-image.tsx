import { ImageResponse } from "next/og";

export const alt = "eddie zhuang";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const geist = await fetch(
    new URL(
      "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-500-normal.woff"
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
          fontSize: 80,
          fontFamily: "Geist",
          fontWeight: 500,
          letterSpacing: "-0.025em",
        }}
      >
        eddie zhuang
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geist,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
