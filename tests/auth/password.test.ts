import { describe, expect, it } from "vitest";
import { hashPassword, verifyPassword } from "../../src/lib/auth/password";

describe("password helpers", () => {
  it("verifies a correct password", async () => {
    const hash = await hashPassword("LibraryDemo123!");

    await expect(verifyPassword("LibraryDemo123!", hash)).resolves.toBe(true);
  });

  it("rejects an incorrect password", async () => {
    const hash = await hashPassword("LibraryDemo123!");

    await expect(verifyPassword("wrong-password", hash)).resolves.toBe(false);
  });
});
