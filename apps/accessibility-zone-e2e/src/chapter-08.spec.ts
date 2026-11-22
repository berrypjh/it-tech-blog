import { expect, type Page, test } from '@playwright/test';

import { tabKey } from './keys';

const page08 = (id: string) => `/accessibility/${id}`;

const ids = [
  'contrast-conditions',
  'sensory-information',
  'zoom-and-reflow',
  'text-spacing',
  'forced-colors',
  'covered-content',
  'hover-focus-content',
];

const titles = [
  '텍스트 · 아이콘 · 컨트롤 대비의 조건과 예외 판정하기',
  '색상 · 모양 · 위치 · 소리만으로 정보를 전달하지 않기',
  '텍스트 확대 · 브라우저 확대 · Reflow를 구분해 검사하기',
  '텍스트 간격 · 긴 번역 · 사용자 스타일에서도 내용 유지하기',
  'Forced Colors와 고대비 환경에서 경계 · 상태 보존하기',
  '고정 영역 · 스크롤 · 가상 키보드가 내용을 가리는 문제 해결하기',
  '호버 · 포커스로 나타나는 내용을 접근 · 유지 · 닫을 수 있게 만들기',
];

const englishTitles = [
  'Judging contrast conditions and exceptions for text, icons, and controls',
  'Not conveying information by color, shape, position, or sound alone',
  'Testing text resize, browser zoom, and reflow separately',
  'Keeping content with text spacing, long translations, and user styles',
  'Preserving boundaries and states in forced colors and high contrast',
  'Fixing content hidden by fixed areas, scrolling, and virtual keyboards',
  'Making content on hover or focus reachable, persistent, and dismissible',
];

const observedValue = (page: Page, label: string) =>
  page.locator(`dt:text-is("${label}") + dd`).first();

test('the sidebar walks all seven chapter 08 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page08(ids[0]));

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^08\./ });
  await expect(links).toHaveCount(7);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 08 page links to the next, and 08.7 continues to 09.1', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page08(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
  const next = page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link');
  await expect(next).toHaveAccessibleName(/09\.1 이미지 대체 텍스트/);
  await expect(next).toHaveAttribute('href', '/accessibility/image-alternatives');
  await next.click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '이미지의 목적과 문맥에 맞는 대체 텍스트 결정하기',
  );
});

test('English shows all seven chapter 08 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page08(ids[0]));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^08\./ });
  await expect(links).toHaveCount(7);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

test('08.1 judges with the unrounded ratio and rejects invalid colors', async ({ page }) => {
  await page.goto(page08('contrast-conditions'));
  await page.getByRole('button', { name: '기준 경계' }).click();
  await expect(observedValue(page, '표시값 (소수 셋째 자리에서 버림)')).toHaveText('4.49:1');
  await expect(observedValue(page, '이 두 색의 비교')).toHaveText('기준 미달');

  const field = page.getByRole('textbox', { name: '앞쪽 색 (글자 · 표시)' });
  await field.fill('#12');
  await expect(field).toHaveAttribute('aria-invalid', 'true');
  await expect(field).toHaveAccessibleDescription(/16진수 여섯 자리/);
});

test('08.2 the fixed instruction names the status and the action', async ({ page }) => {
  await page.goto(page08('sensory-information'));
  await page.getByRole('radio', { name: /주문 A-102/ }).check();
  await page.getByRole('button', { name: '다시 결제' }).click();
  await expect(observedValue(page, '과업')).toHaveText('완료');
});

test('08.3 the defect overflows the 320px panel while the flexible panel fits', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page08('zoom-and-reflow'));
  await page.getByRole('slider', { name: /패널 폭/ }).fill('320');
  await expect(observedValue(page, '패널 가로 넘침')).toHaveText('없음');
  await page.getByRole('checkbox', { name: /의도한 결함/ }).check();
  await expect(observedValue(page, '패널 가로 넘침')).toHaveText('있음');
});

test('08.4 spacing applies only to the demo area and can be restored', async ({ page }) => {
  await page.goto(page08('text-spacing'));
  const area = page.getByRole('group', { name: '간격을 적용하는 예제 영역' });
  await page.getByRole('checkbox', { name: /1.4.12 간격 적용/ }).check();
  await expect(area).toHaveCSS('word-spacing', /px/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveCSS('word-spacing', '0px');

  await page.getByRole('radio', { name: '긴 영어' }).check();
  await page.getByRole('radio', { name: /고정 배치/ }).check();
  await expect(observedValue(page, '내용이 잘린 요소')).not.toHaveText('0개');

  await page.getByRole('button', { name: '원래대로' }).click();
  await expect(observedValue(page, '내용이 잘린 요소')).toHaveText('0개');
});

test('08.5 emulated forced colors are reported by the media query', async ({ page }) => {
  await page.emulateMedia({ forcedColors: 'active' });
  await page.goto(page08('forced-colors'));
  await expect(observedValue(page, 'forced-colors: active')).toHaveText('일치');
});

test('08.6 scroll-padding keeps the focused input clear', async ({ page, browserName }) => {
  await page.goto(page08('covered-content'));
  await page.getByRole('textbox', { name: '받는 분' }).focus();
  for (let i = 0; i < 3; i += 1) await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('textbox', { name: '주소', exact: true })).toBeFocused();
  await expect(observedValue(page, '가려진 면적')).toHaveText('0%');
});

test('08.7 help stays on hover and Escape closes it without moving focus', async ({
  page,
  browserName,
}) => {
  await page.goto(page08('hover-focus-content'));
  const trigger = page.getByRole('button', { name: '배송비 도움말' });
  const note = page.getByRole('note');

  await trigger.hover();
  await expect(note).toBeVisible();
  await note.hover();
  await expect(note).toBeVisible();
  await page.mouse.move(0, 0);
  await expect(note).toBeHidden();

  await page.getByRole('checkbox', { name: /의도한 결함: 호버 전용/ }).focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(trigger).toBeFocused();
  await expect(note).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(note).toBeHidden();
  await expect(trigger).toBeFocused();
});

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page08(id));

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
    await page.goto(page08(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}
