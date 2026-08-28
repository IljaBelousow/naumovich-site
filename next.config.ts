import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // <-- ЭТА СТРОКА ЗАСТАВЛЯЕТ NEXT.JS СОЗДАВАТЬ ПАПКИ С index.html
  images: {
    unoptimized: true,
  },
};

export default nextConfig;