import { expect, test } from '@playwright/test';

test('next zone intro renders', async ({ page }) => {
  await page.goto('/next');

  expect(await page.locator('h1').first().innerText()).toContain('Hello');
});
