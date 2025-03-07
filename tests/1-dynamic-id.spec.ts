import { test, expect } from "@playwright/test";

test("Dynamic ID ", async ({ page }) => {
  // Goto target page
  await page.goto("/dynamicid");
  // Click the button with dynamic ID
  await page.getByRole("button", { name: "Button with Dynamic ID" }).click();
});
