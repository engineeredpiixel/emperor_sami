import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Generate a cryptographically secure nonce using edge runtime primitives
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // Build a hyper-strict Content Security Policy
  // 'strict-dynamic' tells modern browsers to trust scripts that are loaded by scripts with the provided nonce
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline' https: http:;
    img-src 'self' blob: data: https: http:;
    font-src 'self' data: https: http:;
    connect-src 'self' https: http: wss:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    require-trusted-types-for 'script';
  `.replace(/\s{2,}/g, ' ').trim();

  // Attach the nonce to downstream request headers (so React/Next.js Layouts can read it)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  // Initialize the NextResponse with the modified request headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  // Attach the final security policies to the outbound HTTP response
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

  return response;
}

// NextJS Middleware Matcher to avoid intercepting native internal assets
export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
