import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce trailing slashes on every URL so /about-practice/ etc. stay canonical.
  trailingSlash: true,
  images: {
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
