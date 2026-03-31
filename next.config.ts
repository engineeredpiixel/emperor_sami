import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self' https: http: data: blob: 'unsafe-inline' 'unsafe-eval';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http:;
    style-src 'self' 'unsafe-inline' https: http:;
    img-src 'self' blob: data: https: http:;
    font-src 'self' data: https: http:;
    connect-src 'self' https: http: wss:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
`.replace(/\n/g, '').trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
