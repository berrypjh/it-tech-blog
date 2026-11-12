import { expect, test } from '@playwright/test';

const page06 = (id: string) => `/accessibility/${id}`;

const ids = [
  'name-and-label',
  'html-name-sources',
  'labelledby-and-label',
  'reference-edge-cases',
  'descriptions-and-errors',
  'label-in-name',
];

const titles = [
  '보이는 라벨 · 접근성 이름 · 설명 · 값 구분하기',
  'label · 본문 텍스트 · alt 등 HTML의 이름 제공 방식',
  'aria-labelledby · aria-label · 내용 기반 이름의 조건과 우선순위',
  '숨겨진 참조 · 여러 ID · 중첩 참조 · 빈 값의 경계 사례',
  'aria-describedby · aria-description · 오류 메시지의 관계',
  'Label in Name을 확인하고 계산 근거와 브라우저 결과 대조하기',
];

const englishTitles = [
  'Telling visible labels, accessible names, descriptions, and values apart',
  'How HTML provides names: label, text content, alt, and more',
  'Conditions and precedence of aria-labelledby, aria-label, and name from content',
  'Edge cases: hidden references, several IDs, nested references, and empty values',
  'How aria-describedby, aria-description, and error messages relate',
  'Checking Label in Name against the computation and browser results',
];

test('the sidebar walks all six chapter 06 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page06('name-and-label'));

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^06\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 06 page links to the next, and 06.6 is the end point', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page06(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
  await expect(page.getByRole('navigation', { name: '다음 페이지' })).toHaveCount(0);
});

test('English shows all six chapter 06 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page06('name-and-label'));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^06\./ });
  await expect(links).toHaveCount(6);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page06(id));

    // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다.
    const duplicates = await page.evaluate(
      "[...document.querySelectorAll('[id]')].map((el) => el.id).filter((id, i, all) => all.indexOf(id) !== i)",
    );
    expect(duplicates).toEqual([]);

    // Tab 순서에서 뺀 검사용 예제는 끊긴 관계를 일부러 재현하므로 뺀다.
    const fields = page
      .getByRole('main')
      .getByRole('textbox')
      .and(page.locator(':not([tabindex="-1"])'));
    for (const field of await fields.all()) {
      await expect(field).toHaveAccessibleName(/\S/);
    }
  });

  test(`${id}: no horizontal scroll at 320 CSS pixels`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(page06(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}

test('03.1 points its hidden name example to 06.4', async ({ page }) => {
  await page.goto(page06('accessibility-tree'));
  await expect(
    page.getByRole('main').getByRole('link', { name: '06.4 숨김 · 여러 ID · 빈 값' }),
  ).toHaveAttribute('href', '/accessibility/reference-edge-cases#hidden-references');
});

test('06.2 fixing for and id connects the label in the DOM', async ({ page }) => {
  await page.goto(page06('html-name-sources'));
  const labels = page.locator('dt:has-text("입력 칸에 연결된 label 수") + dd');

  await expect(labels).toHaveText('0');
  const specimen = page.getByRole('main').locator('input[type="tel"]');
  await expect(specimen).not.toHaveAccessibleName('연락처');
  await page.getByRole('checkbox', { name: '관계 고치기 (입력 칸 id를 for와 맞춤)' }).check();
  await expect(labels).toHaveText('1');
  await expect(
    page.getByRole('main').getByRole('textbox', { name: '연락처', exact: true }),
  ).toBeVisible();
});

// 아래 이름 · 설명 단언은 Playwright가 자체 규칙으로 계산한 값이다. 브라우저 DevTools나 실제 보조기술의 결과를 대신하지 않는다.

test('06.1 the sample field gets its name from the label and its description from aria-describedby', async ({
  page,
}) => {
  await page.goto(page06('name-and-label'));
  const field = page.getByRole('main').getByRole('textbox', { name: '연락처', exact: true });

  await expect(field).toHaveAccessibleDescription('배송 기사님이 연락할 번호입니다.');
  const fieldId = await field.getAttribute('id');
  await expect(page.locator(`label[for="${fieldId}"]`)).toHaveCount(1);
});

test('06.3 aria-labelledby joins referenced ids in order, and aria-label overrides the content', async ({
  page,
}) => {
  await page.goto(page06('labelledby-and-label'));

  await page.getByRole('radio', { name: '유효한 aria-labelledby' }).check();
  const joined = page.getByRole('main').locator('button[aria-labelledby]');
  const refs = ((await joined.getAttribute('aria-labelledby')) ?? '').split(' ');
  expect(refs).toHaveLength(2);
  for (const ref of refs) await expect(page.locator(`[id="${ref}"]`)).toHaveCount(1);
  await expect(joined).toHaveAccessibleName('예약 변경 객실 A');

  await page.getByRole('radio', { name: 'aria-label이 있는 버튼' }).check();
  const overridden = page.getByRole('main').locator('button[aria-label]');
  await expect(overridden).toHaveText('예약 변경');
  await expect(overridden).toHaveAccessibleName('예약 수정하기');
});

test('06.3 the observed-value field compares what the learner wrote, ignoring extra spaces', async ({
  page,
}) => {
  await page.goto(page06('labelledby-and-label'));
  await page.getByRole('radio', { name: '유효한 aria-labelledby' }).check();
  const observed = page.getByRole('textbox', { name: '내 브라우저 도구에 나온 이름' });

  await observed.fill('예약 변경  객실 A');
  await expect(page.getByRole('status').filter({ hasText: '예상과 같습니다.' })).toBeVisible();
  await observed.fill('예약 변경');
  await expect(page.getByRole('status').filter({ hasText: '예상과 다릅니다.' })).toBeVisible();
});

test('06.4 a hidden direct reference still names the button, and several ids keep attribute order', async ({
  page,
}) => {
  await page.goto(page06('reference-edge-cases'));

  const icon = page.getByRole('main').locator('button[aria-labelledby]');
  const target = page.locator(`[id="${await icon.getAttribute('aria-labelledby')}"]`);
  await expect(target).toBeHidden();
  await expect(icon).toHaveAccessibleName('배송지 검색');

  await page.getByRole('radio', { name: '여러 ID의 처리 순서' }).check();
  const ordered = page.getByRole('main').locator('button[aria-labelledby]');
  const [first, second] = ((await ordered.getAttribute('aria-labelledby')) ?? '').split(' ');
  await expect(page.locator(`[id="${first}"]`)).toHaveText('객실 A');
  await expect(page.locator(`[id="${second}"]`)).toHaveText('3월 12일');
  await expect(ordered).toHaveAccessibleName('객실 A 3월 12일');
});

test('06.4 the valid-but-empty case really references an existing empty element', async ({
  page,
}) => {
  await page.goto(page06('reference-edge-cases'));
  await page.getByRole('radio', { name: '유효하지만 빈 참조 대상' }).check();

  const button = page.getByRole('main').locator('button[aria-labelledby][aria-label]');
  const target = page.locator(`[id="${await button.getAttribute('aria-labelledby')}"]`);
  await expect(target).toHaveCount(1);
  await expect(target).toHaveText('');
});

test('06.6 the before button hides its visible label from the name; the after button keeps it', async ({
  page,
}) => {
  await page.goto(page06('label-in-name'));
  const buttons = page.getByRole('main').getByRole('button').filter({ hasText: '예약 변경' });

  const before = buttons.and(page.locator('[aria-label]'));
  await expect(before).toHaveAccessibleName('예약 수정하기');

  const after = buttons.and(page.locator('[aria-describedby]'));
  await expect(after).toHaveAccessibleName('예약 변경');
  await expect(after).toHaveAccessibleDescription('3월 12일 객실 A');
});

test('06.6 the observed name check uses only what the learner wrote', async ({ page }) => {
  await page.goto(page06('label-in-name'));
  const before = page.getByRole('textbox', { name: '수정 전 버튼의 관찰한 이름' });
  const after = page.getByRole('textbox', { name: '수정 후 버튼의 관찰한 이름' });

  await before.fill('예약 수정하기');
  await expect(page.getByRole('status').filter({ hasText: '없습니다' })).toBeVisible();
  await after.fill('[예약 변경!]');
  await expect(page.getByRole('status').filter({ hasText: '들어 있습니다' })).toBeVisible();
});

/** 두 AccName 판본의 결과가 같은 06.4 사례. 기대값은 원문 단계에서 따로 계산한 것이다. */
const agreeingCases = [
  { radio: '보이는 참조 대상 안의 숨김 자손', name: '배송지 검색' },
  { radio: '없는 ID와 있는 ID가 섞인 경우', name: '객실 A' },
  { radio: '중첩 참조', name: '예약' },
  { radio: '공백뿐인 aria-label', name: '예약 변경' },
];

test('06.4 cases where both editions agree get the same Playwright-computed name', async ({
  page,
}) => {
  await page.goto(page06('reference-edge-cases'));
  for (const { radio, name } of agreeingCases) {
    await page.getByRole('radio', { name: radio }).check();
    await expect(
      page.getByRole('main').getByRole('button', { name, exact: true }).first(),
    ).toBeVisible();
  }

  await page.getByRole('radio', { name: '서로를 가리키는 순환 참조' }).check();
  const [a, b] = await page.getByRole('main').locator('button[aria-labelledby]').all();
  await expect(a).toHaveAccessibleName('변경');
  await expect(b).toHaveAccessibleName('예약');
});
