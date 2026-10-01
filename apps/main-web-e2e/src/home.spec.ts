import { expect, test } from '@playwright/test';

const viewports = [
  { width: 1440, height: 1000 },
  { width: 1280, height: 720 },
  { width: 1024, height: 768 },
  { width: 1024, height: 600 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 320, height: 568 },
];

/** 링크 앞의 포커스 대상(테마 토글, dev 전용 Next.js 오버레이 버튼)을 넉넉히 지나칠 Tab 횟수. */
const MAX_TABS = 20;

/** macOS WebKit은 기본 설정에서 Tab으로 링크에 포커스하지 않는다. */
const tabKey = (browserName: string) => (browserName === 'webkit' ? 'Alt+Tab' : 'Tab');

test('renders the landing page', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Interactive Tech Lab');
});

test('hydrates without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });

  await page.goto('/');
  // 공유 상태가 DOM에 반영되면 하이드레이션이 끝난 것이다.
  await page.getByRole('link', { name: /React/ }).hover();
  await expect(page.locator('.lab')).toHaveAttribute('data-has-active', 'true');

  expect(errors).toEqual([]);
});

test('links active topics to their zones', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation');

  await expect(nav.getByRole('link', { name: /React/ })).toHaveAttribute('href', '/react');
  await expect(nav.getByRole('link', { name: /Accessibility|웹접근성/ })).toHaveAttribute(
    'href',
    '/accessibility',
  );
});

test('reaches topic links with the keyboard', async ({ page, browserName }) => {
  await page.goto('/');
  const focused: (string | null)[] = [];

  for (let i = 0; i < MAX_TABS; i++) {
    await page.keyboard.press(tabKey(browserName));
    focused.push(await page.evaluate<string | null>('document.activeElement.getAttribute("href")'));
  }

  expect(focused).toEqual(expect.arrayContaining(['/react', '/accessibility']));
});

for (const viewport of viewports) {
  test(`keeps the layout intact at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeInViewport();

    const hasHorizontalOverflow = await page.evaluate(
      'document.documentElement.scrollWidth > document.documentElement.clientWidth',
    );
    expect(hasHorizontalOverflow).toBe(false);

    for (const link of await page.getByRole('navigation').getByRole('link').all()) {
      await link.scrollIntoViewIfNeeded();
      await expect(link).toBeVisible();
    }
  });
}
