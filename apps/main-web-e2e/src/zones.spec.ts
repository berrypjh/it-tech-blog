import { expect, test } from '@playwright/test';

/**
 * Multi-zone proxy tests: each zone must be reachable THROUGH the host (port 3000),
 * which rewrites /accessibility, /react and /llm to the zone dev servers.
 */
const zones = [
  { path: '/accessibility', redirectsTo: '/accessibility/intro' },
  { path: '/react', redirectsTo: '/react/why-source' },
  { path: '/llm', redirectsTo: '/llm/intro' },
];

for (const zone of zones) {
  test(`proxies ${zone.path} through the host and lands on ${zone.redirectsTo}`, async ({
    page,
  }) => {
    await page.goto(zone.path);

    await expect(page).toHaveURL(zone.redirectsTo);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
}

test('serves an LLM deep link through the host with its /llm-static assets', async ({ page }) => {
  const assets: number[] = [];
  page.on('response', (response) => {
    if (new URL(response.url()).pathname.startsWith('/llm-static/')) assets.push(response.status());
  });

  await page.goto('/llm/notebook-to-service#transfer');

  await expect(page).toHaveURL('/llm/notebook-to-service#transfer');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  expect(assets.length).toBeGreaterThan(0);
  expect(assets.every((status) => status < 400)).toBe(true);
});
