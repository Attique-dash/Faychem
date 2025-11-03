/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "silverlinetradingcompany.com" }],
        destination: "https://www.silverlinetradingcompany.com/:path*",
        permanent: true,
      },
    ];
  },

  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "i.ibb.co",
      "i.postimg.cc",
      "firebasestorage.googleapis.com",
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
 
 // Enable compression
 compress: true,
  
 // Optimize bundle
 experimental: {
   optimizeCss: true,
 },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
