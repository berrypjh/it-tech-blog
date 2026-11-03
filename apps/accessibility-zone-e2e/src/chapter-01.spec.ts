import { expect, test } from '@playwright/test';

import { tabKey } from './keys';

const intro = '/accessibility/intro';
const report = '/accessibility/barrier-report';

const introAnchors = [
  'what-is',
  'who-for',
  'why-frontend',
  'usability',
  'semantic-html',
  'design-system',
  'standards',
  'misconceptions',
  'summary',
  'references',
];

test('intro keeps every existing section anchor', async ({ page }) => {
  await page.goto(intro);

  for (const id of introAnchors) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
});

test('sidebar lists the five chapter 01 pages and marks the current one', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(report);

  const nav = page.getByRole('navigation', { name: '메뉴' });
  await expect(nav.getByRole('link', { name: /^01\./ })).toHaveCount(5);
  await expect(nav.getByRole('link', { name: '01.5 장벽 재현 기록' })).toHaveAttribute(
    'aria-current',
    'page',
  );
});

test('an old intro anchor still lands on its section', async ({ page }) => {
  await page.goto(`${intro}#standards`);

  await expect(page.getByRole('heading', { level: 2, name: /법적·품질 기준/ })).toBeInViewport();
});

test('a collapsed menu group keeps its links out of the Tab order', async ({
  page,
  browserName,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(intro);

  const group = page.getByRole('navigation', { name: '메뉴' }).getByRole('button', {
    name: '시작하기',
  });
  await group.click();
  await expect(group).toHaveAttribute('aria-expanded', 'false');

  await group.focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('link', { name: '홈으로 가기' })).toBeFocused();
});

test('sidebar walks through all five pages in order', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(intro);

  const nav = page.getByRole('navigation', { name: '메뉴' });
  const titles = [
    '시각·청각·운동·인지 특성과 복합적인 사용 환경 이해하기',
    '키보드·화면 낭독기·확대·음성 입력·스위치의 사용 방식 비교하기',
    '접근성·사용성·포용적 설계·표준 적합성 구분하기',
    '준비된 화면에서 장벽을 찾고 재현 절차로 기록하기',
  ];
  for (const [i, title] of titles.entries()) {
    await nav
      .getByRole('link')
      .nth(i + 1)
      .click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

test('English keeps the same routes with English labels and headings', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(report);

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();

  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Finding barriers on a prepared screen and recording reproduction steps',
  );
  const nav = page.getByRole('navigation', { name: 'Menu' });
  await expect(nav.getByRole('link', { name: '01.2 People and contexts' })).toHaveAttribute(
    'href',
    '/accessibility/people-and-contexts',
  );
  await expect(page.getByRole('button', { name: 'Check and copy' })).toBeVisible();
});

test('theme choice persists when moving to another chapter 01 page', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(intro);

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: '라이트', exact: true }).click();
  await expect(page.locator('html')).toHaveClass('light');
  await page.goto('/accessibility/concept-boundaries');

  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '접근성·사용성·포용적 설계·표준 적합성 구분하기',
  );
  await expect(page.locator('html')).toHaveClass('light');
});

test('keyboard demo checks only what actually happened', async ({ page, browserName }) => {
  await page.goto(intro);

  await page.getByLabel('실습 시작 지점', { exact: true }).focus();
  await page.keyboard.press(tabKey(browserName));
  await page.keyboard.press('Enter');
  await expect(
    page.getByRole('status').filter({ hasText: '<button> — Enter·Space로 실행 확인됨' }),
  ).toBeAttached();

  await page.getByText('저장', { exact: true }).first().click();
  await expect(
    page.getByRole('status').filter({ hasText: '<div> — 마우스·터치로 실행 확인됨' }),
  ).toBeAttached();
});

test('keyboard demo without a keyboard shows the measured Tab reachability', async ({ page }) => {
  await page.goto(intro);

  await page.getByRole('radio', { name: '키보드 없이 보기' }).check();
  await expect(page.getByText('Tab으로 도착: 불가 (tabIndex -1)')).toBeVisible();
  await expect(page.getByText('Tab으로 도착: 가능 (tabIndex 0)')).toBeVisible();
});

test('label demo focuses the field when its label text is clicked', async ({ page }) => {
  await page.goto(intro);

  await page.getByText('label + input').locator('..').getByText('이메일', { exact: true }).click();
  await expect(page.getByLabel('이메일', { exact: true })).toBeFocused();
  await expect(
    page.getByRole('status').filter({ hasText: '라벨을 눌러 입력 칸으로 이동: 확인됨' }),
  ).toBeAttached();
});

test('defect screen confirm is skipped by Tab, fixed screen confirm is reachable', async ({
  page,
  browserName,
}) => {
  await page.goto(report);

  await page.getByPlaceholder('새 날짜 (예: 5월 20일)').focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('button', { name: '처음 상태로' })).toBeFocused();

  await page.getByRole('radio', { name: '비교용 수정 화면' }).check();
  await page.getByLabel('새 날짜', { exact: true }).focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('button', { name: '변경 확정' })).toBeFocused();
});

test('fixed screen announces an empty date error and moves focus to the field', async ({
  page,
}) => {
  await page.goto(report);
  await page.getByRole('radio', { name: '비교용 수정 화면' }).check();

  await page.getByRole('button', { name: '변경 확정' }).click();

  const field = page.getByLabel('새 날짜', { exact: true });
  await expect(field).toBeFocused();
  await expect(field).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByText('오류: 새 날짜를 입력하세요.')).toBeVisible();
});

test('record form lists missing fields, then reports the copy result', async ({ page }) => {
  await page.goto(report);

  await page.getByRole('button', { name: '빠진 항목 확인 후 복사' }).click();
  await expect(
    page.locator('div[tabindex="-1"]').filter({ hasText: '기록에 빠진 필수 항목이 5개 있습니다' }),
  ).toBeFocused();

  await page
    .getByRole('textbox', { name: '과업', exact: true })
    .fill('예약 날짜를 5월 20일로 바꾸고 확정하기');
  await page
    .getByRole('textbox', { name: '단계 1', exact: true })
    .fill('Tab으로 확정 버튼까지 이동한다');
  await page
    .getByRole('textbox', { name: '기대 결과', exact: true })
    .fill('확정 버튼에 포커스가 간다');
  await page
    .getByRole('textbox', { name: '실제 결과', exact: true })
    .fill('포커스가 확정 버튼을 건너뛴다');
  await page.getByRole('radio', { name: /^조작/ }).check();

  await page.getByRole('button', { name: '빠진 항목 확인 후 복사' }).click();
  await expect(page.getByRole('status').filter({ hasText: /복사/ })).toBeVisible();
});

test('adding and removing steps keeps focus on a step field', async ({ page }) => {
  await page.goto(report);

  await page.getByRole('button', { name: '단계 추가' }).click();
  await expect(page.getByLabel('단계 2', { exact: true })).toBeFocused();

  await page.getByRole('button', { name: '단계 2 삭제' }).click();
  await expect(page.getByRole('textbox', { name: '단계 1', exact: true })).toBeFocused();
});

test('clear asks for confirmation and cancel returns focus', async ({ page }) => {
  await page.goto(report);

  await page.getByRole('button', { name: '모두 지우기' }).click();
  await expect(page.getByRole('button', { name: '취소' })).toBeFocused();

  await page.getByRole('button', { name: '취소' }).click();
  await expect(page.getByRole('button', { name: '모두 지우기' })).toBeFocused();
});
