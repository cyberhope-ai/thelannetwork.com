import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // static export for Cloudflare Pages
  trailingSlash: true, // CF Pages serves index.html from directories
  images: {
    unoptimized: true, // next/image requires server; disable for static export
  },
};

export default nextConfig;
