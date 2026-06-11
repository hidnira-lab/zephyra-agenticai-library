import { expect, test } from "@playwright/test";
import { defaultLibrarian } from "../../src/lib/seed-data";

test.describe("auth and role access", () => {
  test("student registration, logout, and denied librarian access", async ({ page }) => {
    const email = `student-${Date.now()}@example.test`;

    await page.goto("/register");
    await page.getByLabel("Name").fill("Student One");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill("StudentPass123!");
    await page.getByRole("button", { name: "Create student account" }).click();

    await expect(page).toHaveURL(/\/catalog/);
    await expect(page.getByRole("heading", { level: 1, name: "Catalog" })).toBeVisible();
    await expect(page.getByText(email)).toBeVisible();

    await page.goto("/librarian/dashboard");
    await expect(page).toHaveURL(/\/catalog\?access=denied/);
    await expect(page.getByText("Access denied")).toBeVisible();

    await page.getByRole("button", { name: "Logout" }).click();
    await expect(page).toHaveURL(/\/login/);
  });

  test("seeded librarian login and logout", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email").fill(defaultLibrarian.email);
    await page.getByLabel("Password").fill(defaultLibrarian.password);
    await page.getByRole("button", { name: "Log in" }).click();

    await expect(page).toHaveURL(/\/librarian\/dashboard/);
    await expect(page.getByRole("heading", { level: 1, name: "Dashboard" })).toBeVisible();
    await expect(page.getByText(defaultLibrarian.email)).toBeVisible();

    await page.getByRole("button", { name: "Logout" }).click();
    await expect(page).toHaveURL(/\/login/);
  });
});
