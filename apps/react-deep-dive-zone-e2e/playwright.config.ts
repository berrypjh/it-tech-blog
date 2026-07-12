import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4002';

/**
 * Tests the zone standalone on its own port. The host proxy path
 * is covered by main-web-e2e.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  /* Production build + start: next dev cannot survive compiling 147 routes under load.
     reuseExistingServer still lets a locally running dev server (port 4002) take over. */
  webServer: {
    command:
      'pnpm exec nx run @it-tech-blog/react-deep-dive-zone:build && pnpm exec nx run @it-tech-blog/react-deep-dive-zone:start',
    url: 'http://localhost:4002/react',
    reuseExistingServer: true,
    cwd: workspaceRoot,
    timeout: 600_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /* Broad page smoke runs on chromium only; cross-browser stays for user flows. */
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      testIgnore: /smoke\.spec\.ts/,
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      testIgnore: /smoke\.spec\.ts/,
    },
  ],
});
