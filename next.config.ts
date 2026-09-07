import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce trailing slashes on every URL so /about-practice/ etc. stay canonical.
  trailingSlash: true,
  images: {
    qualities: [75, 90, 92, 95, 100],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "*.blob.vercel-storage.com" },
    ],
  },
  outputFileTracingExcludes: {
    "*": ["./public/images/**", "./public/**/*.mp4", "./public/**/*.webm"],
  },
};

export default nextConfig;
