import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

import { expect, test } from '@playwright/test';

const appDir = join(__dirname, '../../accessibility-zone/src/app');
const basePath = '/accessibility';

/** Collects every route with a page.tsx, stripping (route-group) segments. */
const pageRoutes = (root: string): string[] => {
  const routes: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(join(dir, entry.name));
      else if (entry.name === 'page.tsx') {
        const segments = relative(root, dir)
          .split(sep)
          .filter((segment) => segment && !segment.startsWith('('));
        routes.push(`/${segments.join('/')}`);
      }
    }
  };
  walk(root);
  return routes.sort();
};

for (const route of pageRoutes(appDir)) {
  test(`renders ${route}`, async ({ page }) => {
    test.slow(); // next dev compiles each route on first visit

    const response = await page.goto(`${basePath}${route}`, { waitUntil: 'domcontentloaded' });

    expect(response?.ok()).toBe(true);
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
  });
}
