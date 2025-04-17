import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dcj7m1ukng7jk.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
