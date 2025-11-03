import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  
  // Force HTTPS (if not in development)
  if (
    process.env.NODE_ENV === "production" &&
    !request.headers.get("x-forwarded-proto")?.includes("https")
  ) {
    return NextResponse.redirect(
      `https://${hostname}${request.nextUrl.pathname}`,
      301
    );
  }

  // Canonical www redirect (already handled in next.config.js, but middleware provides additional security)
  if (hostname === "silverlinetradingcompany.com") {
    return NextResponse.redirect(
      `https://www.silverlinetradingcompany.com${url.pathname}`,
      301
    );
  }

  // Security headers
  const response = NextResponse.next();
  
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=()"
  );
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com;"
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};