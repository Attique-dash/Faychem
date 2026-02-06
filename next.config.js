/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable compression
  compress: true,

  // Remove console.logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

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

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Content Security Policy - ENHANCED with all required domains
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Script sources - Added Clarity domains
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.youtube.com https://s.ytimg.com https://static.doubleclick.net https://www.clarity.ms https://c.bing.com",
              // Style sources - Added CDN for animate.css
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
              // Image sources
              "img-src 'self' data: https: blob:",
              // Font sources
              "font-src 'self' data: https://fonts.gstatic.com",
              // Connect sources - Added Clarity domains
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.youtube.com https://i.ytimg.com https://static.doubleclick.net https://www.clarity.ms https://c.bing.com",
              // Frame sources
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com",
              // Object sources
              "object-src 'none'",
              // Base URI
              "base-uri 'self'",
              // Form action
              "form-action 'self'",
              // Frame ancestors (prevents clickjacking)
              "frame-ancestors 'none'",
              // Upgrade insecure requests
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // X-Content-Type-Options - Prevents MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // X-Frame-Options - Prevents clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // X-XSS-Protection - Legacy XSS protection
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Referrer-Policy - Controls referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissions-Policy - Controls browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Strict-Transport-Security - Forces HTTPS (only in production)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Cache Control for Images
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache Control for Static Assets
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache Control for CSS
      {
        source: "/:path*.css",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache Control for JavaScript
      {
        source: "/:path*.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // Optimize bundle
  experimental: {
    optimizeCss: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
