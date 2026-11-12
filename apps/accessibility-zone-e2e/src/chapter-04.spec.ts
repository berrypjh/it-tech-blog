import { expect, test } from '@playwright/test';

import { tabKey } from './keys';

const page04 = (id: string) => `/accessibility/${id}`;

const ids = [
  'wcag-structure',
  'reading-criteria',
  'conformance',
  'supporting-documents',
  'kwcag-and-wcag',
  'requirements-and-obligations',
];

const titles = [
  'POUR에서 지침 · 성공 기준 · A · AA · AAA로 이어지는 구조',
  'WCAG 2.2 성공 기준의 조건 · 예외 · 정의를 해석하기',
  '전체 페이지 · 완전한 과정 · 접근성 지원 · 비간섭으로 적합성 판단하기',
  '규범 문서와 Understanding · Techniques · APG · ACT의 역할 구분하기',
  'KWCAG 2.2와 WCAG의 항목 · 버전 · 판정 범위를 비교하기',
  '표준 · 초안 · 구현 지원과 법령 · 계약 · 인증 요구를 구분하기',
];

const englishTitles = [
  'The structure from POUR to guidelines, success criteria, and A, AA, AAA',
  'Interpreting conditions, exceptions, and definitions in WCAG 2.2 success criteria',
  'Judging conformance by full pages, complete processes, accessibility support, and non-interference',
  'Telling normative documents apart from Understanding, Techniques, APG, and ACT',
  'Comparing items, versions, and judgment scope in KWCAG 2.2 and WCAG',
  'Telling standards, drafts, and implementation support apart from legal, contract, and certification requirements',
];

test('03.6 continues to 04.1 and the sidebar walks all six chapter 04 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page04('observation-sources'));

  await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[0]);

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^04\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 04 page links to the next', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page04(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
});

test('04.6 continues to 05.1 by its real name and destination', async ({ page }) => {
  await page.goto(page04('requirements-and-obligations'));
  const next = page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link');

  await expect(next).toHaveAccessibleName(/05\.1 네이티브 HTML 우선/);
  await expect(next).toHaveAttribute('href', '/accessibility/native-first');
  await next.click();
  await expect(page).toHaveURL(/\/accessibility\/native-first$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '네이티브 HTML을 우선하고 ARIA가 필요한 경우 판단하기',
  );
});

test('English shows all six chapter 04 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page04('wcag-structure'));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^04\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

for (const id of ids) {
  test(`${id}: ids are unique`, async ({ page }) => {
    await page.goto(page04(id));

    // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다.
    const duplicates = await page.evaluate(
      "[...document.querySelectorAll('[id]')].map((el) => el.id).filter((id, i, all) => all.indexOf(id) !== i)",
    );
    expect(duplicates).toEqual([]);
  });

  test(`${id}: no horizontal scroll at 320 CSS pixels`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(page04(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}

test('04.2 compares the chosen basis with the case solution', async ({ page }) => {
  await page.goto(page04('reading-criteria'));
  const stars = page.getByText('사례 3. 별점 다섯 개').locator('..');
  const reveal = stars.getByRole('button', { name: '풀이 보기' });

  await expect(reveal).toBeDisabled();
  await stars.getByRole('radio', { name: '예외: 간격(Spacing)' }).check();
  await reveal.click();
  await expect(stars.getByRole('status')).toContainText(
    '풀이의 근거는 "어느 것에도 해당하지 않음 → 미충족"입니다.',
  );

  await stars.getByRole('radio', { name: '어느 것에도 해당하지 않음 → 미충족' }).check();
  await expect(stars.getByRole('status')).toBeEmpty();
  await reveal.click();
  await expect(stars.getByRole('status')).toContainText('풀이와 같습니다.');
  await expect(page.getByText('사이트가 실제 페이지를 자동 감사한 결과가 아닙니다.')).toBeVisible();
});

test('04.2 keyboard: choose a basis, reveal, then choose again to start over', async ({
  page,
  browserName,
}) => {
  await page.goto(page04('reading-criteria'));
  const stars = page.getByText('사례 3. 별점 다섯 개').locator('..');
  const none = stars.getByRole('radio', { name: '어느 것에도 해당하지 않음 → 미충족' });
  const reveal = stars.getByRole('button', { name: '풀이 보기' });

  await none.focus();
  await page.keyboard.press('Space');
  await expect(none).toBeChecked();

  await page.keyboard.press(tabKey(browserName));
  await expect(reveal).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(stars.getByRole('status')).toContainText('풀이와 같습니다.');

  await page.keyboard.press(`Shift+${tabKey(browserName)}`);
  await expect(none).toBeFocused();
  await page.keyboard.press('ArrowUp');
  await expect(stars.getByRole('radio', { name: '예외: 필수(Essential)' })).toBeChecked();
  await expect(stars.getByRole('status')).toBeEmpty();
});

test('04 normative quotes link to the dated WCAG 2.2 edition', async ({ page }) => {
  await page.goto(page04('reading-criteria'));
  await expect(
    page.getByRole('link', { name: /WCAG 2\.2 \(W3C Recommendation, 2024-12-12\) — 2\.5\.8/ }),
  ).toHaveAttribute('href', 'https://www.w3.org/TR/2024/REC-WCAG22-20241212/#target-size-minimum');
});
