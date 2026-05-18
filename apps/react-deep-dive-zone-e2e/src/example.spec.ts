import { expect, test } from '@playwright/test';

test('react zone intro renders', async ({ page }) => {
  await page.goto('/react');

  expect(await page.locator('h1').first().innerText()).toContain('React');
});
