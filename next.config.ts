import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.decode-number.com" }],
        destination: "https://decode-number.com/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ads.txt",
        destination: "/ads.txt",
      },
    ];
  },
};

export default nextConfig;
