import { test, expect } from "@playwright/test";

test("Hidden Layers ", async ({ page }, testInfo) => {
  // Goto target page
  await page.goto("/hiddenlayers");

  const button = await page.getByRole("button", { name: "Button" });

  await button.click();

  if (await button.locator("#greenbutton").isVisible()) {
    await button.locator("#greenbutton").click();
    console.log("Green button clicked");
  }

  if (await button.locator("#bluebutton").isVisible()) {
    await button.locator("#bluebutton").click();
    console.log("Blue button clicked");
  }

});
