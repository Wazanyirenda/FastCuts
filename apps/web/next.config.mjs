/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
  transpilePackages: ["@fastcuts/ui", "@fastcuts/db"],
};

export default nextConfig;
