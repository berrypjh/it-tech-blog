import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4001';

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
  webServer: {
    command: 'pnpm exec nx run @it-tech-blog/accessibility-zone:dev',
    url: 'http://localhost:4001/accessibility',
    reuseExistingServer: true,
    cwd: workspaceRoot,
    timeout: 120_000,
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
