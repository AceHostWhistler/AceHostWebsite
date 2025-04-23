/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // swcMinify is no longer needed in Next.js 15
  i18n: {
    ...i18n,
    localeDetection: false
  },
  // Optimize production build
  compiler: {
    // Enable React Remove Properties, which removes data-testid in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Enable static optimization for faster page loads
  experimental: {
    optimizeCss: true, // Enables CSS optimization
    optimizePackageImports: ['lucide-react', '@/components'],
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
  // Add security headers for forms and content with improved CSP and COOP
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'nonce-INTERNAL_NEXT_SCRIPT' 'strict-dynamic' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https: player.vimeo.com; object-src 'none'; form-action 'self' https:;",
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
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
      },
      {
        protocol: 'https',
        hostname: 'i.vimeocdn.com',
        pathname: '/**',
      }
    ],
  },
  // Enable webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Add PurgeCSS for production builds only
    if (!dev && !isServer) {
      // Minify CSS and optimize bundle size
      config.optimization.minimize = true;
      
      // Add terser options for better optimization
      config.optimization.minimizer = config.optimization.minimizer.map(minimizer => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          return Object.assign(minimizer, {
            options: {
              ...minimizer.options,
              terserOptions: {
                ...minimizer.options.terserOptions,
                compress: {
                  ...minimizer.options.terserOptions.compress,
                  drop_console: true,
                  passes: 2,
                },
                mangle: true,
              },
            },
          });
        }
        return minimizer;
      });
    }
    
    return config;
  },
}

module.exports = nextConfig
