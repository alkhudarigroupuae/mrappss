import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mr-appss.com',
      },
      {
        protocol: 'https',
        hostname: 'it.mr-appss.com',
      },
    ],
  },
};

export default nextConfig;
