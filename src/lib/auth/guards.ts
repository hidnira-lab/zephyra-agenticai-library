import type { SessionRole, SessionUser } from "@/lib/auth/session";

export function getPostLoginRedirect(role: SessionRole): string {
  return role === "LIBRARIAN" ? "/librarian/dashboard" : "/catalog";
}

export function isProtectedPath(pathname: string): boolean {
  return pathname === "/catalog" || pathname.startsWith("/librarian");
}

export function getRequiredRole(pathname: string): SessionRole | null {
  if (pathname.startsWith("/librarian")) {
    return "LIBRARIAN";
  }

  if (pathname === "/catalog") {
    return "STUDENT";
  }

  return null;
}

export function canAccessPath(user: SessionUser, pathname: string): boolean {
  const requiredRole = getRequiredRole(pathname);

  if (!requiredRole) {
    return true;
  }

  return user.role === requiredRole;
}

export function getUnauthorizedRedirect(pathname: string): string | null {
  if (!isProtectedPath(pathname)) {
    return null;
  }

  return `/login?next=${encodeURIComponent(pathname)}`;
}

export function getRoleDeniedRedirect(
  user: SessionUser,
  pathname: string
): string | null {
  if (canAccessPath(user, pathname)) {
    return null;
  }

  if (user.role === "STUDENT" && pathname.startsWith("/librarian")) {
    return "/catalog?access=denied";
  }

  return getPostLoginRedirect(user.role);
}
