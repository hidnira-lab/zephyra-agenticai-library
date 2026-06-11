import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  createSessionToken,
  verifySessionToken,
  type SessionUser
} from "../../src/lib/auth/session";

const user: SessionUser = {
  id: "user-1",
  email: "student@example.test",
  name: "Student One",
  role: "STUDENT"
};

describe("session token helpers", () => {
  beforeEach(() => {
    vi.stubEnv("SESSION_SECRET", "test-session-secret-with-more-than-32-chars");
  });

  it("round trips a signed session payload", async () => {
    const token = await createSessionToken(user);

    await expect(verifySessionToken(token)).resolves.toEqual(user);
  });

  it("rejects an invalid token", async () => {
    await expect(verifySessionToken("not-a-token")).resolves.toBeNull();
  });
});
