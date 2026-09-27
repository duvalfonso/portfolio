import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    ...(isDevelopment && {
      dangerouslyAllowLocalIP: true,
    }),
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "duvan-portfolio-media.s3.amazonaws.com",
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;
