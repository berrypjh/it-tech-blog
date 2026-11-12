import { expect, test } from '@playwright/test';

import { tabKey } from './keys';

const page05 = (id: string) => `/accessibility/${id}`;

const ids = [
  'native-first',
  'roles-and-relations',
  'aria-in-html',
  'hiding-and-inert',
  'disabled-and-required',
  'fixing-controls',
];

const titles = [
  '네이티브 HTML을 우선하고 ARIA가 필요한 경우 판단하기',
  'role · state · property와 필수 소유 · 참조 관계 읽기',
  'ARIA in HTML로 허용 · 금지 · 불필요한 역할 확인하기',
  'hidden · display · visibility · aria-hidden · inert의 차이',
  'disabled · aria-disabled · readonly · required의 의미와 동작',
  '이름 · 상태 · 키보드 동작이 서로 모순되는 컨트롤 고치기',
];

const englishTitles = [
  'Preferring native HTML and judging when ARIA is needed',
  'Reading roles, states, properties, and required ownership and references',
  'Checking allowed, prohibited, and unnecessary roles with ARIA in HTML',
  'How hidden, display, visibility, aria-hidden, and inert differ',
  'The meaning and behavior of disabled, aria-disabled, readonly, and required',
  'Fixing a control whose name, state, and keyboard behavior contradict each other',
];

test('the sidebar walks all six chapter 05 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page05('native-first'));

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^05\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 05 page links to the next', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page05(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
});

test('05.6 continues to 06.1 by its real name and destination', async ({ page }) => {
  await page.goto(page05('fixing-controls'));
  const next = page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link');

  await expect(next).toHaveAccessibleName(/06\.1 라벨 · 이름 · 설명 · 값/);
  await expect(next).toHaveAttribute('href', '/accessibility/name-and-label');
  await next.click();
  await expect(page).toHaveURL(/\/accessibility\/name-and-label$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '보이는 라벨 · 접근성 이름 · 설명 · 값 구분하기',
  );
});

test('English shows all six chapter 05 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page05('native-first'));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^05\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page05(id));

    // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다.
    const duplicates = await page.evaluate(
      "[...document.querySelectorAll('[id]')].map((el) => el.id).filter((id, i, all) => all.indexOf(id) !== i)",
    );
    expect(duplicates).toEqual([]);

    for (const field of await page.getByRole('main').getByRole('textbox').all()) {
      await expect(field).toHaveAccessibleName(/\S/);
    }
  });

  test(`${id}: no horizontal scroll at 320 CSS pixels`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(page05(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}

test('05.1 links to the 02.3 exercise instead of rebuilding it', async ({ page }) => {
  await page.goto(page05('native-first'));
  await expect(
    page.getByRole('main').getByRole('link', { name: '02.3 링크·버튼 선택' }).first(),
  ).toHaveAttribute('href', '/accessibility/text-and-controls#link-or-button');
});

test('05.4 aria-hidden keeps Tab focus, inert removes it', async ({ page, browserName }) => {
  await page.goto(page05('hiding-and-inert'));
  const coupon = page.locator('button', { hasText: '쿠폰 받기' });

  const ariaHidden = page.getByRole('radio', { name: 'aria-hidden="true"' });
  await ariaHidden.check();
  await expect(coupon).toBeVisible();
  await ariaHidden.focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(coupon).toBeFocused();

  const inert = page.getByRole('radio', { name: 'inert', exact: true });
  await inert.check();
  await expect(coupon).toBeVisible();
  await inert.focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(coupon).not.toBeFocused();
});

test('05.4 changing the method with arrow keys keeps focus on the radio, and Tab skips hidden methods', async ({
  page,
  browserName,
}) => {
  await page.goto(page05('hiding-and-inert'));
  const coupon = page.locator('button', { hasText: '쿠폰 받기' });
  const hiddenMethods = ['hidden 속성', 'display: none', 'visibility: hidden', 'inert'];

  await page.getByRole('radio', { name: '숨기지 않음' }).focus();
  for (let i = 0; i < 5; i += 1) {
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('radio', { checked: true })).toBeFocused();
    await expect(coupon).not.toBeFocused();
  }

  const expectation = page.locator('summary', { hasText: '관찰한 뒤 열어 보기' });
  for (const name of hiddenMethods) {
    const radio = page.getByRole('radio', { name, exact: true });
    await radio.check();
    await radio.focus();
    await page.keyboard.press(tabKey(browserName));
    await expect(expectation).toBeFocused();
  }
});

test('05.5 aria-disabled alone still submits; the guarded button does not run', async ({
  page,
}) => {
  await page.goto(page05('disabled-and-required'));
  const draft = page.getByRole('button', { name: '임시 저장 (aria-disabled만 · 의도한 결함)' });

  await expect(page.getByRole('button', { name: '삭제 (disabled)' })).toBeDisabled();
  await expect(page.getByRole('textbox', { name: '주문 번호 (readonly)' })).toHaveAttribute(
    'readonly',
    '',
  );

  // aria-disabled 버튼은 Playwright가 클릭을 기다리므로, 포커스를 받은 버튼을 Enter로 누른다.
  await draft.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByText(/임시 저장 버튼 → 기본 유효성 검사에서 막힘/)).toBeVisible();

  await page.getByRole('textbox', { name: '받는 분 (필수 · required)' }).fill('김하늘');
  await draft.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByText(/임시 저장 버튼 → 제출 이벤트 발생/)).toBeVisible();
  const status = page.getByRole('status').filter({ hasText: '제출 이벤트 발생' });
  await expect(status.getByText('recipient', { exact: true })).toBeVisible();
  await expect(status.getByText('coupon', { exact: true })).toHaveCount(0);

  const guarded = page.getByRole('button', { name: '삭제 (aria-disabled + 실행 경로 확인)' });
  await expect(guarded).toHaveAttribute('aria-disabled', 'true');
  await guarded.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('dt:has-text("click 이벤트 도달") + dd')).toHaveText('1회');
  await expect(page.locator('dt:has-text("실제 삭제 실행") + dd')).toHaveText('0회');

  await page.getByRole('checkbox', { name: '삭제할 주문을 확인했습니다' }).check();
  await expect(guarded).toHaveAttribute('aria-disabled', 'false');
  await guarded.click();
  await expect(page.locator('dt:has-text("실제 삭제 실행") + dd')).toHaveText('1회');
});

test('05.6 Tab reaches the fixed control, and Enter and Space keep aria-expanded and the panel in sync', async ({
  page,
  browserName,
}) => {
  await page.goto(page05('fixing-controls'));

  // 수정 전 컨트롤: Tab 순서에 없고, aria-controls가 가리키는 id가 문서에 없다.
  const before = page.getByRole('main').locator('div[role="button"]');
  await expect(before).not.toHaveAttribute('tabindex');
  const missing = await before.getAttribute('aria-controls');
  await expect(page.locator(`[id="${missing}"]`)).toHaveCount(0);

  // 수정 후 컨트롤: 이름은 Playwright가 계산한 접근 가능한 이름으로 찾는다.
  const fixed = page.getByRole('button', { name: '상세 보기', exact: true });
  const panel = page.locator(`[id="${await fixed.getAttribute('aria-controls')}"]`);
  await expect(fixed).toHaveAttribute('aria-expanded', 'false');
  await expect(panel).toBeHidden();

  // 실습 안내 문단을 탐색 시작점으로 둔다. 그다음 포커스를 받는 요소는 수정 후 버튼이다(수정 전 컨트롤은 포커스를 받지 않음).
  await page.getByText('두 컨트롤을 각각 마우스로 눌러 본 뒤').click();
  await page.keyboard.press(tabKey(browserName));
  await expect(fixed).toBeFocused();

  await page.keyboard.press('Enter');
  await expect(fixed).toHaveAttribute('aria-expanded', 'true');
  await expect(panel).toBeVisible();

  await page.keyboard.press('Space');
  await expect(fixed).toHaveAttribute('aria-expanded', 'false');
  await expect(panel).toBeHidden();
  await expect(fixed).toBeFocused();
});
