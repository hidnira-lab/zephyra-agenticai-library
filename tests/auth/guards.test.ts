import { describe, expect, it } from "vitest";
import {
  canAccessPath,
  getPostLoginRedirect,
  getRequiredRole,
  getRoleDeniedRedirect,
  getUnauthorizedRedirect
} from "../../src/lib/auth/guards";
import type { SessionUser } from "../../src/lib/auth/session";

const student: SessionUser = {
  id: "student-1",
  email: "student@example.test",
  name: "Student One",
  role: "STUDENT"
};

const librarian: SessionUser = {
  id: "librarian-1",
  email: "librarian@example.test",
  name: "Librarian One",
  role: "LIBRARIAN"
};

describe("role guards", () => {
  it("maps post-login redirects by role", () => {
    expect(getPostLoginRedirect("STUDENT")).toBe("/catalog");
    expect(getPostLoginRedirect("LIBRARIAN")).toBe("/librarian/dashboard");
  });

  it("identifies required roles for protected paths", () => {
    expect(getRequiredRole("/catalog")).toBe("STUDENT");
    expect(getRequiredRole("/librarian/dashboard")).toBe("LIBRARIAN");
    expect(getRequiredRole("/login")).toBeNull();
  });

  it("redirects anonymous users from protected routes", () => {
    expect(getUnauthorizedRedirect("/catalog")).toBe("/login?next=%2Fcatalog");
    expect(getUnauthorizedRedirect("/librarian/dashboard")).toBe(
      "/login?next=%2Flibrarian%2Fdashboard"
    );
  });

  it("denies student access to librarian paths", () => {
    expect(canAccessPath(student, "/librarian/dashboard")).toBe(false);
    expect(getRoleDeniedRedirect(student, "/librarian/dashboard")).toBe(
      "/catalog?access=denied"
    );
  });

  it("permits librarian dashboard access", () => {
    expect(canAccessPath(librarian, "/librarian/dashboard")).toBe(true);
    expect(getRoleDeniedRedirect(librarian, "/librarian/dashboard")).toBeNull();
  });
});
