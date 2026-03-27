/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'images.icon-icons.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
      {
        protocol: 'https',
        hostname: 'mailmeteor.com',
      },
      {
        protocol: 'https',
        hostname: 'chococrm.com',
      },
      {
        protocol: 'https',
        hostname: 'leadsbridge.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security + SEO + Cache Headers
  async headers() {
    return [
      // Static assets — cache 1 year immutable
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // JS/CSS chunks
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // All pages — security + SEO headers
      {
        source: '/(.*)',
        headers: [
          // Enable DNS prefetch
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Permissions policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          // Referrer policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Strict Transport Security
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ]
      }
    ]
  },

  // Redirects for SEO (www canonical)
  async redirects() {
    return [
      // Trailing slash redirect (normalize URLs)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },

  // Performance
  compress: true,
  poweredByHeader: false,

  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    swcMinify: true,
    compiler: {
      removeConsole: true,
    },
  }),

  // Experimental performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
