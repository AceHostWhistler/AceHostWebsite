/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // swcMinify is no longer needed in Next.js 15
  i18n: {
    ...i18n,
    localeDetection: false
  },
  // Configure sitemap generation
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  // Add redirects for broken links or SEO improvements
  async redirects() {
    return [
      {
        source: '/luxury-rentals',
        destination: '/properties',
        permanent: true,
      },
    ];
  },
  // Add security headers for forms and content
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:; object-src 'none'; form-action 'self' https:;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  images: {
    // Enable image optimization for better performance
    unoptimized: false,
    // Remove deprecated domains config
    // domains: ['acehost.ca', 'acehost.vercel.app', 'img.youtube.com'],
    // Set reasonable device sizes for responsive images
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048],
    // Set image sizes for the Image component
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configure image formats
    formats: ['image/webp', 'image/avif'],
    // Enable content-aware image resizing
    minimumCacheTTL: 60,
    // Configure remote patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acehost.ca',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'acehost.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vumbnail.com',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
