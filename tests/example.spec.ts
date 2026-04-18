import { test, expect } from "@playwright/test";
import { pagesConfig } from "./configs";

test("has title", async ({ page }) => {
  await page.goto(pagesConfig.home.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Todo Application/);
});