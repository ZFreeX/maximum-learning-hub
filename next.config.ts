
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // Ensure proper exports
  distDir: 'dist',
  // Disabling unnecessary redirects
  async redirects() {
    return [];
  }
};

export default nextConfig;
