/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    // Security: Prevent image optimization from external sources
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Security Headers (additional to middleware)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Cross-origin policies
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          // Permissions policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      }
    ]
  },

  // Performance and Security
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Environment-specific settings
  ...(process.env.NODE_ENV === 'production' && {
    // Production-only optimizations
    swcMinify: true,
    compiler: {
      removeConsole: true, // Remove console.log in production
    }
  })
};

export default nextConfig;
