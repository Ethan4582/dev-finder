import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This ignores TypeScript errors during the build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
