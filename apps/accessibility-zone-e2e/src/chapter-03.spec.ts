import { expect, test } from '@playwright/test';

import { tabKey } from './keys';

const page03 = (id: string) => `/accessibility/${id}`;

const ids = [
  'accessibility-tree',
  'role-name-state',
  'accessibility-apis',
  'focus-and-cursor',
  'screen-reader-start',
  'observation-sources',
];

const titles = [
  'DOM · 스타일 · 렌더링 정보와 접근성 트리의 관계',
  '접근성 객체의 역할 · 이름 · 상태 · 값 · 관계 읽기',
  'HTML-AAM · Core-AAM과 운영체제 접근성 API의 역할',
  '시스템 포커스와 화면 낭독기 커서 · 탐색 모드 구분하기',
  'NVDA 또는 VoiceOver로 문서 탐색과 폼 조작 시작하기',
  '교육용 모델 · 브라우저 검사값 · 실제 보조기술 결과 구별하기',
];

const englishTitles = [
  'How the DOM, styles, and rendering relate to the accessibility tree',
  'Reading role, name, state, value, and relations of accessible objects',
  'The roles of HTML-AAM, Core-AAM, and operating system accessibility APIs',
  'Telling system focus apart from screen reader cursors and modes',
  'Getting started with document navigation and forms in NVDA or VoiceOver',
  'Telling teaching models, browser inspection values, and real AT results apart',
];

test('02.7 continues to 03.1 and the sidebar walks all six chapter 03 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page03('devtools-tracing'));

  await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[0]);

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^03\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 03 page links to the next', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page03(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
});

test('03.6 continues to 04.1', async ({ page }) => {
  await page.goto(page03('observation-sources'));
  await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
  await expect(page).toHaveURL(/\/accessibility\/wcag-structure$/);
});

test('English shows all six chapter 03 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page03('accessibility-tree'));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^03\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page03(id));

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
    await page.goto(page03(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}

test('03.1 reads the real attribute and computed style for each hiding method', async ({
  page,
}) => {
  await page.goto(page03('accessibility-tree'));
  const paragraph = page.getByText('배송 안내: 주문 후 3일 안에 도착합니다.');
  await expect(paragraph).toBeVisible();

  await page.getByRole('radio', { name: 'hidden 속성' }).check();
  await expect(paragraph).toBeHidden();
  await expect(page.getByText(/display: none;/)).toBeVisible();

  await page.getByRole('radio', { name: 'opacity: 0' }).check();
  await expect(page.getByText(/visibility: visible; opacity: 0/)).toBeVisible();
});

test('03.2 keyboard input and checking match what the DOM panel shows', async ({
  page,
  browserName,
}) => {
  await page.goto(page03('role-name-state'));
  const field = page.getByRole('textbox', { name: '받는 분 이름' });
  const gift = page.getByRole('checkbox', { name: '선물 포장' });

  await field.focus();
  await page.keyboard.type('김하늘');
  await expect(field).toHaveValue('김하늘');
  await expect(page.getByText('value: "김하늘"')).toBeVisible();
  await expect(page.getByText('연결된 label 글자: "받는 분 이름"')).toBeVisible();

  await page.keyboard.press(tabKey(browserName));
  await expect(gift).toBeFocused();
  await page.keyboard.press('Space');
  await expect(gift).toBeChecked();
  await expect(page.getByText('checked 속성값(property): true')).toBeVisible();

  await page.keyboard.press('Space');
  await expect(gift).not.toBeChecked();
  await expect(page.getByText('checked 속성값(property): false')).toBeVisible();
});

test('03.4 Tab moves DOM focus across controls but not headings', async ({ page, browserName }) => {
  await page.goto(page03('focus-and-cursor'));
  const watch = page
    .getByText('지금 DOM 포커스 (document.activeElement)')
    .locator('..')
    .locator('code');
  await expect(watch).toHaveText('예제 밖에 있음');

  await page.getByRole('button', { name: '쿠폰 적용' }).focus();
  await expect(watch).toHaveText('<button> 쿠폰 적용');

  await page.keyboard.press(tabKey(browserName));
  await expect(watch).toHaveText('<input type="text"> 우편번호');

  await page.keyboard.press(tabKey(browserName));
  await expect(watch).toHaveText('<input type="checkbox"> 이 주소 저장');
});

test('03.5 practice sample has a named region, heading, field, checkbox, and link', async ({
  page,
}) => {
  await page.goto(page03('screen-reader-start'));
  const region = page.getByRole('region', { name: '예제: 배송 메모' });

  await expect(region.getByRole('heading', { level: 3, name: '예제: 배송 메모' })).toBeVisible();
  await expect(region.getByRole('textbox', { name: '배송 메모' })).toBeVisible();
  await expect(region.getByRole('checkbox', { name: '부재 시 문 앞에 두기' })).not.toBeChecked();
  await expect(region.getByRole('link', { name: '배송 정책 보기' })).toBeVisible();
});

test('03.6 the DOM panel reads the real checkbox on load and after Space', async ({ page }) => {
  await page.goto(page03('observation-sources'));
  const box = page.getByRole('checkbox', { name: '주문 내역을 이메일로 받기' });

  await expect(page.getByText('checked 속성값(property): false')).toBeVisible();

  await box.focus();
  await page.keyboard.press('Space');
  await expect(box).toBeChecked();
  await expect(page.getByText('checked 속성값(property): true')).toBeVisible();
  await expect(page.getByText('checked HTML 속성(attribute): 없음')).toBeVisible();
});
