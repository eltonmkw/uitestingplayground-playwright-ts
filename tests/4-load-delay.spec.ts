import { expect, test } from "@playwright/test";

test("Load Delay", async ({ page }) => {
  await page.goto("/loaddelay");

});
