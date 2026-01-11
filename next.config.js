const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://elfsightcdn.com https://universe-static.elfsightcdn.com https://static.elfsight.com https://apps.elfsight.com https://vercel.live",
              "style-src 'self' 'unsafe-inline' https://elfsightcdn.com https://universe-static.elfsightcdn.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://elfsightcdn.com https://universe-static.elfsightcdn.com",
              "connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://api.brevo.com https://elfsightcdn.com https://universe-static.elfsightcdn.com https://core.service.elfsight.com https://api.elfsight.com https://widget-data.service.elfsight.com https://vercel.live https://app.stevenriosfx.com",
              "frame-src 'self' https://apps.elfsight.com https://elfsightcdn.com https://vercel.live",
              "worker-src 'self' blob:",
            ].join('; ')
          },
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
