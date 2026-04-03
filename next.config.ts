import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Global HTTP Headers and Security Policies are now managed entirely by Edge Middleware
  // located at: /src/middleware.ts
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tlmsotvucwrudumpktgr.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      // Fallback for general supabase projects if moved
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      }
    ],
  },
};

export default nextConfig;
