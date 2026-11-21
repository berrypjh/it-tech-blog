import { expect, type Page, test } from '@playwright/test';

import { tabKey } from './keys';

const page07 = (id: string) => `/accessibility/${id}`;

const ids = [
  'focus-and-tabindex',
  'keys-and-defaults',
  'focus-visibility',
  'focus-after-changes',
  'composite-focus',
  'skip-and-shortcuts',
  'keyboard-path-check',
];

const titles = [
  '순차 포커스 · 프로그램 포커스와 tabindex의 동작',
  'Enter · Space · 방향키와 텍스트 편집의 기본 동작 보존하기',
  '포커스 표시 · 대비 · 가림을 서로 다른 조건으로 검사하기',
  '추가 · 삭제 · 비활성화 이후 논리적인 포커스 위치 유지하기',
  'Roving tabindex와 aria-activedescendant 선택하고 구현하기',
  '건너뛰기 링크 · 반복 영역 우회 · 문자 단축키 충돌 해결하기',
  '포커스 · 선택 · 활성 상태를 분리하고 키보드 경로 검증하기',
];

const englishTitles = [
  'Sequential focus, programmatic focus, and how tabindex behaves',
  'Preserving the default behavior of Enter, Space, arrows, and text editing',
  'Testing focus visibility, contrast, and obscuring as separate conditions',
  'Keeping a logical focus position after adding, deleting, and disabling',
  'Choosing and implementing roving tabindex and aria-activedescendant',
  'Skip links, bypassing repeated blocks, and character key shortcut conflicts',
  'Separating focus, selection, and active state, and verifying a keyboard path',
];

const observedValue = (page: Page, label: string) =>
  page.locator(`dt:text-is("${label}") + dd`).first();

test('the sidebar walks all seven chapter 07 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page07(ids[0]));

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^07\./ });
  await expect(links).toHaveCount(7);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 07 page links to the next, and 07.7 continues to 08.1', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page07(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }

  const next = page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link');
  await expect(next).toHaveAccessibleName(/08\.1 대비 조건과 예외/);
  await expect(next).toHaveAttribute('href', '/accessibility/contrast-conditions');
  await next.click();
  await expect(page).toHaveURL(/\/accessibility\/contrast-conditions$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '텍스트 · 아이콘 · 컨트롤 대비의 조건과 예외 판정하기',
  );
});

test('English shows all seven chapter 07 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page07(ids[0]));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^07\./ });
  await expect(links).toHaveCount(7);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

test('07.1 tabindex -1 leaves Tab order but still takes focus() and clicks', async ({
  page,
  browserName,
}) => {
  await page.goto(page07('focus-and-tabindex'));
  await page.getByRole('radio', { name: '-1', exact: true }).check();

  const main = page.getByRole('main');
  const first = main.getByRole('button', { name: '처음', exact: true });
  const target = main.getByRole('button', { name: '대상', exact: true });
  const last = main.getByRole('button', { name: '끝', exact: true });

  await first.focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(last).toBeFocused();

  await main.getByRole('button', { name: 'focus() 실행' }).click();
  await expect(target).toBeFocused();
  await expect(observedValue(page, '마지막 focus() 결과')).toHaveText('대상이 포커스를 받음');

  await target.click();
  await expect(observedValue(page, '대상 click 횟수')).toHaveText('1');
});

test('07.1 inert keeps the target from receiving focus()', async ({ page }) => {
  await page.goto(page07('focus-and-tabindex'));
  await page.getByRole('radio', { name: 'inert', exact: true }).check();
  await page.getByRole('main').getByRole('button', { name: 'focus() 실행' }).click();
  await expect(observedValue(page, '마지막 focus() 결과')).toHaveText('대상이 포커스를 받지 못함');
});

test('07.2 the widget owns its keys while the text field keeps its own', async ({ page }) => {
  await page.goto(page07('keys-and-defaults'));
  const spin = page.getByRole('spinbutton', { name: '수량' });
  await spin.focus();
  await page.keyboard.press('ArrowUp');
  await expect(spin).toHaveAttribute('aria-valuenow', '3');

  const note = page.getByRole('textbox', { name: '배송 메모' });
  await note.pressSequentially('a b');
  await expect(note).toHaveValue('a b');

  await page.keyboard.press('ArrowLeft');
  const row = page.getByRole('row').filter({ hasText: 'ArrowLeft' }).first();
  await expect(row).toContainText('텍스트 입력');
  await expect(row).toContainText('아니요');

  await page.getByRole('checkbox', { name: /의도한 결함/ }).check();
  await note.fill('');
  await note.pressSequentially('a b');
  await expect(note).toHaveValue('ab');
});

test('07.3 a tall sticky area fully hides the focused item, and scroll-padding clears it', async ({
  page,
  browserName,
}) => {
  await page.goto(page07('focus-visibility'));
  const tabToFifth = async () => {
    await page.getByRole('button', { name: '항목 1', exact: true }).focus();
    for (let i = 0; i < 4; i += 1) await page.keyboard.press(tabKey(browserName));
    await expect(page.getByRole('button', { name: '항목 5', exact: true })).toBeFocused();
  };

  await page.getByRole('radio', { name: '높음: 전부 가림' }).check();
  await tabToFifth();
  await expect(observedValue(page, '가려진 면적')).toHaveText('100%');

  await page.getByRole('radio', { name: 'scroll-padding 적용' }).check();
  await tabToFifth();
  await expect(observedValue(page, '가려진 면적')).toHaveText('0%');
});

test('07.4 deleting follows next, previous, then the add button', async ({ page }) => {
  await page.goto(page07('focus-after-changes'));
  const button = (name: string) => page.getByRole('button', { name, exact: true });

  await button('배 삭제').focus();
  await page.keyboard.press('Enter');
  await expect(button('귤 삭제')).toBeFocused();

  await button('감 삭제').focus();
  await page.keyboard.press('Enter');
  await expect(button('귤 삭제')).toBeFocused();

  await page.keyboard.press('Enter');
  await expect(button('사과 삭제')).toBeFocused();

  await page.keyboard.press('Enter');
  await expect(button('상품 추가')).toBeFocused();
  await expect(page.getByRole('status').filter({ hasText: '사과 삭제됨' })).toBeVisible();
});

test('07.4 without recovery the deleted row does not hand focus to its neighbor', async ({
  page,
}) => {
  await page.goto(page07('focus-after-changes'));
  await page.getByRole('checkbox', { name: /포커스 복구/ }).uncheck();
  await page.getByRole('button', { name: '배 삭제', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: '귤 삭제', exact: true })).not.toBeFocused();
});

test('07.5 roving moves DOM focus and active descendant keeps it on the list', async ({ page }) => {
  await page.goto(page07('composite-focus'));

  const roving = page.getByRole('listbox', { name: /Roving tabindex/ });
  await roving.getByRole('option', { name: 'A동 보관함' }).focus();
  await page.keyboard.press('ArrowDown');
  const second = roving.getByRole('option', { name: 'B동 보관함' });
  await expect(second).toBeFocused();
  await expect(second).toHaveAttribute('tabindex', '0');
  await expect(second).toHaveAttribute('aria-selected', 'false');
  await page.keyboard.press('Space');
  await expect(second).toHaveAttribute('aria-selected', 'true');

  const descendant = page.getByRole('listbox', { name: /aria-activedescendant/ });
  await descendant.focus();
  await page.keyboard.press('ArrowDown');
  await expect(descendant).toBeFocused();
  const option = descendant.getByRole('option', { name: 'B동 보관함' });
  await expect(descendant).toHaveAttribute(
    'aria-activedescendant',
    (await option.getAttribute('id')) ?? '',
  );

  await page.keyboard.press('Space');
  await expect(option).toHaveAttribute('aria-selected', 'true');
  await page.getByRole('button', { name: '선택 항목 삭제' }).nth(1).click();
  await expect(option).toHaveCount(0);
  await expect(descendant).toHaveAttribute(
    'aria-activedescendant',
    (await descendant.getByRole('option', { name: 'C동 보관함' }).getAttribute('id')) ?? '',
  );
});

test('07.5 Tab enters and leaves both lists, and moving does not select', async ({
  page,
  browserName,
}) => {
  await page.goto(page07('composite-focus'));
  const tab = tabKey(browserName);
  const remove = page.getByRole('button', { name: '선택 항목 삭제' });

  const roving = page.getByRole('listbox', { name: /Roving tabindex/ });
  const first = roving.getByRole('option', { name: 'A동 보관함' });
  await remove.first().focus();
  await page.keyboard.press(`Shift+${tab}`);
  await expect(first).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(roving.getByRole('option', { name: 'B동 보관함' })).toBeFocused();
  await page.keyboard.press(tab);
  await expect(remove.first()).toBeFocused();
  await page.keyboard.press(`Shift+${tab}`);
  await expect(first).toBeFocused();
  await expect(roving.locator('[aria-selected="true"]')).toHaveCount(0);

  const descendant = page.getByRole('listbox', { name: /aria-activedescendant/ });
  await page.getByRole('button', { name: '다시 채우기' }).first().focus();
  await page.keyboard.press(tab);
  await expect(descendant).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(descendant).toBeFocused();
  await page.keyboard.press(tab);
  await expect(remove.nth(1)).toBeFocused();
  await page.keyboard.press(`Shift+${tab}`);
  await expect(descendant).toBeFocused();
  await expect(descendant.locator('[aria-selected="true"]')).toHaveCount(0);
});

test('07.6 a skip link continues Tab at its target', async ({ page, browserName }) => {
  await page.goto(page07('skip-and-shortcuts'));
  await page.getByRole('button', { name: '시작', exact: true }).focus();
  await page.keyboard.press(tabKey(browserName));
  const skip = page.getByRole('link', { name: '예제 본문으로 건너뛰기' });
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: '예제 본문' })).toBeFocused();
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('button', { name: '과업 계속하기' })).toBeFocused();
});

test('07.6 the focus-scoped shortcut ignores typing in the note field', async ({ page }) => {
  await page.goto(page07('skip-and-shortcuts'));
  const note = page.getByRole('textbox', { name: '메모 내용' });
  await note.pressSequentially('s');
  await expect(observedValue(page, '입력 칸에서 실행된 횟수')).toHaveText('1');

  await page.getByRole('radio', { name: '메모 카드에 포커스가 있을 때만' }).check();
  await note.pressSequentially('s');
  await expect(observedValue(page, '입력 칸에서 실행된 횟수')).toHaveText('1');

  await page.getByRole('group', { name: '별표할 메모 카드' }).focus();
  await page.keyboard.press('s');
  await expect(observedValue(page, '별표 수')).toHaveText('2');
});

test('the shell skip link continues Tab inside main', async ({ page, browserName }) => {
  await page.goto(page07('focus-and-tabindex'));
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('link', { name: '본문으로 건너뛰기' })).toBeFocused();
  await page.keyboard.press('Enter');
  await page.keyboard.press(tabKey(browserName));
  // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다.
  const insideMain = await page.evaluate(
    "document.getElementById('main-content').contains(document.activeElement)",
  );
  expect(insideMain).toBe(true);
});

test('07.7 the keyboard path fails with the defect and resumes after the fix', async ({
  page,
  browserName,
}) => {
  await page.goto(page07('keyboard-path-check'));
  const tab = tabKey(browserName);
  const start = page.getByRole('button', { name: '시작 지점' });
  const remove = page.getByRole('button', { name: '선택 항목 삭제' });
  const list = page.getByRole('listbox', { name: '수령 보관함' });

  const selectSecondAndRemove = async () => {
    await start.focus();
    await page.keyboard.press(tab);
    await expect(list.getByRole('option', { name: 'A동 보관함' })).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Space');
    await expect(list.getByRole('option', { name: 'B동 보관함' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await page.keyboard.press(tab);
    await expect(remove).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(list.getByRole('option', { name: 'B동 보관함' })).toHaveCount(0);
    await page.keyboard.press(`Shift+${tab}`);
  };

  await selectSecondAndRemove();
  await expect(start).toBeFocused();

  await page.getByRole('checkbox', { name: /활성 항목 복구/ }).check();
  await selectSecondAndRemove();
  await expect(list.getByRole('option', { name: 'C동 보관함' })).toBeFocused();
});

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page07(id));

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
    await page.goto(page07(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}
