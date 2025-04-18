import { NextResponse } from "next/server";

export function middleware() {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return NextResponse.redirect(
      new URL(
        "/maintenance",
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      )
    );
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
