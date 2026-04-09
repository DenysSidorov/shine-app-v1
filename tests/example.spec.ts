import { test, expect } from "@playwright/test";
import { pagesConfig } from "./configs";

test("has title", async ({ page }) => {
  await page.goto(pagesConfig.home.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Todo Application/);
});

test("get started link", async ({ page }) => {
  await page.goto(pagesConfig.home.url);

  // Click the get started link.
  // await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
});
