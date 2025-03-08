import { test, expect } from "@playwright/test";

test("Class Attribute ", async ({ page }, testInfo) => {
  // Goto target page
  await page.goto("/classattr");

  const button = await page.locator("button.btn-primary");

  let dialogMessage;

  // Listen for dialog events and click the primary (blue) button
  const [dialog] = await Promise.all([
    page.on("dialog", async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    }),
    button.click(),
  ]);

  // Verify the dialog message
  expect(dialogMessage).toBe("Primary button pressed");
});
