import { test, expect } from '@playwright/test';

test('load page', async ({ page }) => {
  await page.goto('/');
  expect(await page.url()).toBe('http://www.uitestingplayground.com/');
  expect(await page.title()).toBe('UI Test Automation Playground');
});