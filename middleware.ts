import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    // Construct the full URL to the maintenance page on the same origin
    const maintenanceUrl = new URL("/maintenance", request.url);
    return NextResponse.redirect(maintenanceUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - maintenance (maintenance page itself)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|maintenance).*)",
  ],
};
