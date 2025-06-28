import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "easyorders.fra1.digitaloceanspaces.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable linting on build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Already added above
  },
};

export default nextConfig;
