import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE_NAME = "library_session";

const SESSION_DURATION_SECONDS = 60 * 60 * 8;

export type SessionRole = "STUDENT" | "LIBRARIAN";

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: SessionRole;
};

type SessionJwtPayload = SessionUser & {
  iat?: number;
  exp?: number;
};

function getSessionSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET ?? "local-dev-session-secret-change-me-32";

  return new TextEncoder().encode(secret);
}

export async function createSessionToken(user: SessionUser): Promise<string> {
  return new SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSessionSecret());
}

export async function verifySessionToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, getSessionSecret());
    const session = payload as SessionJwtPayload;

    if (
      typeof session.id !== "string" ||
      typeof session.email !== "string" ||
      typeof session.name !== "string" ||
      (session.role !== "STUDENT" && session.role !== "LIBRARIAN")
    ) {
      return null;
    }

    return {
      id: session.id,
      email: session.email,
      name: session.name,
      role: session.role
    };
  } catch {
    return null;
  }
}

export async function createSession(user: SessionUser): Promise<void> {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const token = await createSessionToken(user);

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS
  });
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  return verifySessionToken(token);
}

export async function clearSession(): Promise<void> {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE_NAME);
}
