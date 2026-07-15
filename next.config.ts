import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce trailing slashes on every URL so /about-practice/ etc. stay canonical.
  trailingSlash: true,
};

export default nextConfig;
