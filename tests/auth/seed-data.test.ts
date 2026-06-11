import { describe, expect, it } from "vitest";
import { defaultLibrarian, sampleBooks } from "@/lib/seed-data";

describe("seed data", () => {
  it("defines the default librarian demo account", () => {
    expect(defaultLibrarian.email).toBe("librarian@zephyra.test");
    expect(defaultLibrarian.name).toBe("Demo Librarian");
    expect(defaultLibrarian.password.length).toBeGreaterThanOrEqual(12);
  });

  it("defines sample books for later catalog phases", () => {
    expect(sampleBooks).toHaveLength(3);

    for (const book of sampleBooks) {
      expect(book.id).toMatch(/^seed-book-/);
      expect(book.title).toBeTruthy();
      expect(book.author).toBeTruthy();
      expect(book.category).toBeTruthy();
      expect(book.totalCopies).toBeGreaterThan(0);
      expect(book.availableCopies).toBeGreaterThanOrEqual(0);
      expect(book.availableCopies).toBeLessThanOrEqual(book.totalCopies);
    }
  });
});
