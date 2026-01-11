const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://elfsightcdn.com https://static.elfsight.com https://apps.elfsight.com",
              "style-src 'self' 'unsafe-inline' https://elfsightcdn.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://elfsightcdn.com",
              "connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://api.brevo.com https://elfsightcdn.com https://core.service.elfsight.com https://api.elfsight.com",
              "frame-src 'self' https://apps.elfsight.com https://elfsightcdn.com",
              "worker-src 'self' blob:",
            ].join('; ')
          },
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
