import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Single static page: `next build` emits plain HTML/CSS/JS in out/, ready for any static host.
    output: "export",
    poweredByHeader: false,
    images: { unoptimized: true },
};

export default nextConfig;
