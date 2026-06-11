import { NextRequest, NextResponse } from "next/server";
import {
  getRoleDeniedRedirect,
  getUnauthorizedRedirect,
  isProtectedPath
} from "@/lib/auth/guards";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth/session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const user = token ? await verifySessionToken(token) : null;

  if (!user) {
    const redirectPath = getUnauthorizedRedirect(pathname) ?? "/login";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  const deniedRedirect = getRoleDeniedRedirect(user, pathname);

  if (deniedRedirect) {
    return NextResponse.redirect(new URL(deniedRedirect, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/catalog", "/librarian/:path*"]
};
