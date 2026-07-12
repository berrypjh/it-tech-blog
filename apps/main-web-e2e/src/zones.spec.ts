import { expect, test } from '@playwright/test';

/**
 * Multi-zone proxy tests: each zone must be reachable THROUGH the host (port 3000),
 * which rewrites /accessibility, /react and /next to the zone dev servers.
 */
const zones = [
  { path: '/accessibility', redirectsTo: '/accessibility/intro' },
  { path: '/react', redirectsTo: '/react/why-source' },
  { path: '/next', redirectsTo: '/next/why-source' },
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
