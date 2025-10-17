/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "i.ibb.co",
      "i.postimg.cc",
      "firebasestorage.googleapis.com",
    ],
    unoptimized: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


