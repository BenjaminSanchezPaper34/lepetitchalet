import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"], deviceSizes: [390, 640, 828, 1080, 1440, 1920, 2400] },
  // Héritage Muse : toutes les anciennes URL renvoient vers leur équivalent (301/308)
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/phone/index.html", destination: "/", permanent: true },
      { source: "/phone", destination: "/", permanent: true },
      { source: "/phone/la-carte.html", destination: "/carte", permanent: true },
      { source: "/la-carte.html", destination: "/carte", permanent: true },
      { source: "/mentions-legales.html", destination: "/mentions-legales", permanent: true },
      { source: "/confidentialite.html", destination: "/confidentialite", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
      { source: "/(video|photos|images)/(.*)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;
