import { expect, test } from '@playwright/test';

import { tabKey } from './keys';

const page02 = (id: string) => `/accessibility/${id}`;

const titles = [
  'HTML·DOM·CSS·JavaScript가 맡는 책임 구분하기',
  '페이지 제목·언어·제목 단계·랜드마크로 문서 구조 만들기',
  '목록·인용·강조와 링크·버튼을 목적에 맞게 선택하기',
  'label·input·fieldset·legend로 기본 입력 폼 만들기',
  'DOM 순서와 화면 배치가 읽기·조작 순서에 미치는 영향',
  '이벤트·기본 동작·버블링과 상태·속성·프로퍼티 이해하기',
  '개발자 도구로 동작을 추적하고 기본 HTML 기능 보존하기',
];

test('01.5 continues to 02.1 and the sidebar walks all seven chapter 02 pages', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page02('barrier-report'));

  await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[0]);

  const nav = page.getByRole('navigation', { name: '메뉴' });
  const links = nav.getByRole('link', { name: /^02\./ });
  await expect(links).toHaveCount(7);
  await expect(links.first()).toHaveAttribute('aria-current', 'page');
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

const englishTitles = [
  'What HTML, the DOM, CSS, and JavaScript are each responsible for',
  'Building document structure with page titles, language, headings, and landmarks',
  'Choosing lists, quotes, emphasis, links, and buttons for their purpose',
  'Building a basic form with label, input, fieldset, and legend',
  'How DOM order and visual layout affect reading and operating order',
  'Understanding events, default actions, bubbling, state, attributes, and properties',
  'Tracing behavior with developer tools and preserving built-in HTML features',
];

test('English shows all seven chapter 02 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page02('web-layers'));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^02\./ });
  await expect(links).toHaveCount(7);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('theme chosen in chapter 01 stays on chapter 02 pages', async ({ page }) => {
  await page.goto('/accessibility/intro');

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: '라이트', exact: true }).click();
  await expect(page.locator('html')).toHaveClass('light');

  await page.goto(page02('events-and-state'));
  await expect(page.locator('html')).toHaveClass('light');
});

const ids = [
  'web-layers',
  'document-structure',
  'text-and-controls',
  'basic-forms',
  'dom-order',
  'events-and-state',
  'devtools-tracing',
];

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page02(id));

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
    await page.goto(page02(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // 페이지 전체(html)와 본문 스크롤 영역(main) 모두 가로로 넘치지 않아야 한다.
    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}

test('02.1 button fires click without JavaScript handling, but only handling changes the DOM', async ({
  page,
}) => {
  await page.goto(page02('web-layers'));
  const toggle = page.getByRole('button', { name: '배송 정보' });
  const now = page.locator('figure').filter({ hasText: '지금 DOM' });

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(now).toContainText('aria-expanded="true"');

  await page.getByRole('radio', { name: '꺼짐' }).check();
  await toggle.click();
  await expect(page.getByText('button의 click 이벤트: 2회')).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
});

test('02.2 reads this page’s title, lang, and headings from the DOM', async ({ page }) => {
  await page.goto(page02('document-structure'));

  await page.getByRole('button', { name: '이 페이지 구조 읽기' }).click();

  await expect(page.getByText('ko', { exact: true })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: /^h1 / })).toHaveCount(1);
  await expect(page.getByText(/^main <main>/)).toBeVisible();
});

test('02.3 Enter activates the button but not the div with only a role', async ({ page }) => {
  await page.goto(page02('text-and-controls'));
  const status = page.getByRole('status').filter({ hasText: 'click' });

  await page.locator('button', { hasText: '장바구니 담기' }).focus();
  await page.keyboard.press('Enter');
  await expect(status).toHaveText('<button> — Enter → click 발생');

  await page.locator('div[role="button"]').focus();
  await page.keyboard.press('Enter');
  await expect(status).toHaveText('<div role="button" tabindex="0"> — Enter → click 발생하지 않음');
});

test('02.4 empty submit focuses the first required field, and the group has its legend name', async ({
  page,
}) => {
  await page.goto(page02('basic-forms'));

  await page.getByRole('button', { name: '문의 보내기' }).click();
  await expect(page.getByRole('textbox', { name: '이름' })).toBeFocused();

  await page.getByRole('textbox', { name: '이름' }).fill('김민지');
  await page.getByRole('textbox', { name: '이메일' }).fill('minji@example.com');
  await page.getByRole('group', { name: '문의 종류' }).getByRole('radio', { name: '배송' }).check();
  await page.getByRole('textbox', { name: '문의 내용' }).fill('배송 일정이 궁금합니다.');
  await page.getByRole('button', { name: '문의 보내기' }).click();

  await expect(page.getByRole('status').filter({ hasText: '검사를 통과했습니다' })).toBeAttached();
  await expect(page.getByText('minji@example.com', { exact: true })).toBeVisible();
});

test('02.5 CSS order puts pay first on screen while Tab still follows the DOM', async ({
  page,
  browserName,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page02('dom-order'));

  await page.getByRole('radio', { name: 'CSS order로 결제를 화면 앞에' }).check();
  await expect(page.getByText('DOM 순서와 화면 순서가 다릅니다')).toBeVisible();

  await page.getByRole('textbox', { name: '쿠폰 코드' }).focus();
  await page.keyboard.press(tabKey(browserName));
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByTestId('tab-log')).toHaveText('쿠폰 코드 → 쿠폰 적용 → 결제하기');
});

test('02.6 logs the event path and shows a blocked checkbox stays unchecked', async ({ page }) => {
  await page.goto(page02('events-and-state'));

  await page.getByRole('link', { name: '배송 안내 보기' }).click();
  await expect(
    page.getByText('click · 캡처 · currentTarget: div.card · target: a', { exact: true }),
  ).toBeVisible();
  await expect(page.getByText('#1 click 끝 — 기본 동작 실행됨', { exact: true })).toBeVisible();

  await page.getByRole('checkbox', { name: '체크박스의 기본 동작 막기' }).check();
  await page.getByRole('checkbox', { name: '선물 포장' }).click();
  await expect(page.getByRole('checkbox', { name: '선물 포장' })).not.toBeChecked();
  await expect(page.getByText(/기본 동작 막힘 · checked: false$/)).toBeVisible();
});

test('02.6 attribute keeps the initial value and defect mode leaves aria-expanded stale', async ({
  page,
}) => {
  await page.goto(page02('events-and-state'));

  await page.getByRole('textbox', { name: '받는 분' }).fill('박지훈');
  await expect(page.getByRole('row', { name: /input value/ })).toContainText('value="김민지"');
  await expect(page.getByRole('row', { name: /input value/ })).toContainText('value = "박지훈"');

  await page.getByRole('radio', { name: /aria-expanded 갱신을 빠뜨림/ }).check();
  await page.getByRole('button', { name: '주문 상세' }).click();
  await expect(page.getByRole('button', { name: '주문 상세' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  await expect(page.getByText('화면은 펼쳐졌는데 aria-expanded는 "false"입니다')).toBeVisible();
});

test('02.7 defect button submits the form; the fixed form keeps Enter submission', async ({
  page,
  browserName,
}) => {
  await page.goto(page02('devtools-tracing'));
  const status = page.getByRole('status').filter({ hasText: '주문 접수' });

  await page.getByRole('button', { name: '1개 추가' }).click();
  await expect(status).toContainText('수량 2개');
  await expect(page.getByText('submit — 제출한 버튼: <button> 1개 추가')).toBeVisible();

  await page.getByRole('radio', { name: '수정 버전' }).check();
  await page.getByRole('button', { name: '1개 추가' }).click();
  await expect(status).toHaveCount(0);

  const qty = page.getByRole('textbox', { name: '수량' });
  await qty.focus();
  await page.keyboard.press(tabKey(browserName));
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('link', { name: '배송 안내' })).toBeFocused();

  await qty.focus();
  await page.keyboard.press('Enter');
  await expect(
    page.getByText('submit — 제출한 버튼: <button type="submit"> 주문하기'),
  ).toBeVisible();
});

test('02.2 reading again after switching to English reports lang en', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page02('document-structure'));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await page.getByRole('button', { name: 'Read this page’s structure' }).click();

  await expect(page.getByText('en', { exact: true })).toBeVisible();
});

test('02.3 start over clears recorded key results', async ({ page }) => {
  await page.goto(page02('text-and-controls'));

  await page.locator('button', { hasText: '장바구니 담기' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByText('Enter → click 이벤트: 발생', { exact: true })).toHaveCount(1);

  await page.getByRole('button', { name: '다시 하기' }).click();
  await expect(page.getByText('Enter → click 이벤트: 발생', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Enter → click 이벤트: 확인 전', { exact: true })).toHaveCount(3);
});

test('02.4 clear all empties the form and removes the result', async ({ page }) => {
  await page.goto(page02('basic-forms'));
  const name = page.getByRole('textbox', { name: '이름' });

  await name.fill('김민지');
  await page.getByRole('textbox', { name: '이메일' }).fill('minji@example.com');
  await page.getByRole('radio', { name: '기타' }).check();
  await page.getByRole('textbox', { name: '문의 내용' }).fill('문의');
  await page.getByRole('button', { name: '문의 보내기' }).click();
  await expect(page.getByText('보내지 않은 값 (서버가 없는 실습)')).toBeVisible();

  await page.getByRole('button', { name: '모두 지우기' }).click();
  await expect(name).toHaveValue('');
  await expect(page.getByText('보내지 않은 값 (서버가 없는 실습)')).toHaveCount(0);
});

test('02.4 the connection table shows the label and the legend the browser sees', async ({
  page,
}) => {
  await page.goto(page02('basic-forms'));

  await page.getByRole('button', { name: '입력 칸의 연결 보기' }).click();
  const row = page.getByRole('row', { name: /topic = returns/ });
  await expect(row).toContainText('교환 · 반품');
  await expect(row).toContainText('문의 종류');
});

test('02.7 defect version: Tab skips the anchor without href (intentional defect)', async ({
  page,
  browserName,
}) => {
  await page.goto(page02('devtools-tracing'));

  await page.getByRole('button', { name: '1개 추가' }).focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('button', { name: '주문하기' })).toBeFocused();
});

test('02.7 start over returns to the defect version with quantity 1', async ({ page }) => {
  await page.goto(page02('devtools-tracing'));

  await page.getByRole('radio', { name: '수정 버전' }).check();
  await page.getByRole('button', { name: '1개 추가' }).click();
  await page.getByRole('button', { name: '다시 하기' }).click();

  await expect(page.getByRole('radio', { name: '결함 버전' })).toBeChecked();
  await expect(page.getByRole('textbox', { name: '수량' })).toHaveValue('1');
});

test('02.3 without a keyboard, a pointer click is recorded for every element', async ({ page }) => {
  await page.goto(page02('text-and-controls'));

  await page.getByRole('radio', { name: '터치·마우스로 해 보기' }).check();
  await page.locator('div[role="button"]').click();

  await expect(
    page
      .getByRole('status')
      .filter({ hasText: '<div role="button" tabindex="0"> — 포인터 click 발생' }),
  ).toBeAttached();
  await expect(
    page.getByText('Enter → click 이벤트: 발생 (표의 결과)', { exact: true }),
  ).toHaveCount(2);
});

test('02.6 defect mode announces that the screen and aria-expanded disagree', async ({ page }) => {
  await page.goto(page02('events-and-state'));

  await page.getByRole('radio', { name: /aria-expanded 갱신을 빠뜨림/ }).check();
  await page.getByRole('button', { name: '주문 상세' }).click();

  await expect(
    page.getByRole('status').filter({ hasText: '주문 상세 펼침 — 화면은 펼쳐졌는데' }),
  ).toBeAttached();
});
