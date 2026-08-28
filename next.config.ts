import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // ← ДОБАВИТЬ ЭТУ СТРОКУ
  images: {
    unoptimized: true,
  },
};

export default nextConfig;