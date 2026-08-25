import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/DemoAISupChn' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DemoAISupChn' : '',
};

export default nextConfig;
