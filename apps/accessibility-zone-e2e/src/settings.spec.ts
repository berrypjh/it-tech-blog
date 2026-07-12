import { expect, test } from '@playwright/test';

/**
 * Preferences are stored in cookies and applied to <html> before paint.
 * Default theme is dark, so switching to light proves the change sticks.
 */
test('theme choice persists across reload', async ({ page }) => {
  await page.goto('/accessibility/intro');

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: '라이트', exact: true }).click();

  await expect(page.locator('html')).toHaveClass('light');

  await page.reload();

  await expect(page.locator('html')).toHaveClass('light');
});

test('locale switch changes sidebar language and persists', async ({ page }) => {
  await page.goto('/accessibility/intro');

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();

  await expect(page.getByRole('button', { name: 'Settings', exact: true })).toBeVisible();

  await page.reload();

  await expect(page.getByRole('button', { name: 'Settings', exact: true })).toBeVisible();
});
