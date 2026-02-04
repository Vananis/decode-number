import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
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
