import { expect, type Page, test } from '@playwright/test';

const page10 = (id: string) => `/accessibility/${id}`;

const ids = [
  'choosing-update-means',
  'live-region-roles',
  'live-region-scope',
  'loading-and-results',
  'stale-responses',
];

const titles = [
  '화면 갱신 · 포커스 이동 · 상태 알림 중 필요한 수단 선택하기',
  'aria-live · status · alert · log의 역할과 알림 시점 이해하기',
  'aria-atomic · aria-relevant · aria-busy로 갱신 범위 표현하기',
  '로딩 · 진행률 · 검색 결과 · 빈 상태 · Toast를 지속적으로 확인하게 만들기',
  '중복 알림 · 연속 응답 · 취소 · 경쟁 상태에서 정보 일관성 유지하기',
];

const englishTitles = [
  'Choosing among a screen update, a focus move, and a status message',
  'Understanding the roles and timing of aria-live, status, alert, and log',
  'Expressing the scope of updates with aria-atomic, aria-relevant, and aria-busy',
  'Making loading, progress, search results, empty states, and toasts checkable over time',
  'Keeping information consistent through duplicate messages, consecutive responses, cancellation, and races',
];

/** 교육용 문서 목록에서 기대하는 결과. 화면 코드와 따로 적어 두고 사용자가 읽는 DOM과 대조한다. */
const fixture = {
  A: { query: '자막', results: ['자막 만들기', '실시간 자막 점검', '자막 품질 기준'] },
  B: { query: '대본', results: ['설명 대본 쓰기'] },
};

/** live 역할 조회는 본문으로 좁힌다. 프레임워크가 본문 밖에 두는 안내 요소와 섞이지 않게 한다. */
const main = (page: Page) => page.getByRole('main');

const observedValue = (page: Page, label: string) =>
  page.locator(`dt:text-is("${label}") + dd`).first();

const searchBox = (page: Page) =>
  page.getByRole('search', { name: '교육용 문서 검색' }).getByRole('textbox', { name: '검색어' });
const results = (page: Page) => page.getByRole('region', { name: '검색 결과' });
const respond = (page: Page, id: number, kind: '결과' | '오류') =>
  page.getByRole('button', { name: `#${id} ${kind} 응답`, exact: true }).click();

const search = async (page: Page, query: string) => {
  await searchBox(page).fill(query);
  await searchBox(page).press('Enter');
};

const expectShown = async (page: Page, items: string[], message: string) => {
  await expect(results(page).getByRole('listitem')).toHaveText(items);
  await expect(main(page).getByRole('status')).toHaveText(message);
  await expect(results(page)).toHaveAttribute('aria-busy', 'false');
};

test('the sidebar walks all five chapter 10 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page10(ids[0]));

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^10\./ });
  await expect(links).toHaveCount(5);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 10 page links to the next, and 10.5 continues to 11.1', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page10(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
  const next = page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link');
  await expect(next).toHaveAccessibleName(/11\.1 입력 유형과 형식 안내/);
  await expect(next).toHaveAttribute('href', '/accessibility/input-purpose');
  await next.click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '입력 유형 · autocomplete · inputmode와 필수 · 형식 안내 설계하기',
  );
});

test('English shows all five chapter 10 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page10(ids[0]));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^10\./ });
  await expect(links).toHaveCount(5);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

test('10.1 the result count is a status message, and a new task moves focus', async ({ page }) => {
  await page.goto(page10('choosing-update-means'));
  const field = page.getByRole('main').getByRole('textbox', { name: '검색어' });

  await field.fill(fixture.A.query);
  await field.press('Enter');
  await expect(main(page).getByRole('status').filter({ hasText: '3건 찾음' })).toBeVisible();
  await expect(page.getByRole('list', { name: '검색 결과' }).getByRole('listitem')).toHaveText(
    fixture.A.results,
  );
  await expect(field).toBeFocused();

  await page.getByRole('button', { name: '새 작업 시작', exact: true }).click();
  await expect(page.getByRole('heading', { name: '새 작업: 참가 신청서 작성' })).toBeFocused();

  const pick = (n: number, option: string) =>
    page
      .getByRole('group', { name: new RegExp(`^${n}\\.`) })
      .getByRole('radio', { name: option, exact: true });
  await pick(1, '화면 갱신').check();
  await pick(2, '포커스를 받지 않는 상태 메시지').check();
  await pick(3, '맥락 전환').check();
  await page.getByRole('button', { name: '확인', exact: true }).click();
  await expect(main(page).getByRole('status').filter({ hasText: '3개 중 3개' })).toBeVisible();
});

test('10.2 regions are mounted empty and change only after user actions', async ({ page }) => {
  await page.goto(page10('live-region-roles'));
  const alert = main(page).getByRole('alert');
  const log = page.getByRole('log', { name: 'log 영역 (작업 기록)' });

  await expect(alert).toHaveCount(1);
  await expect(alert).toHaveText('');
  await expect(log.getByRole('listitem')).toHaveCount(0);

  await page.getByRole('button', { name: '결과 저장', exact: true }).click();
  await expect(
    main(page).getByRole('status').filter({ hasText: '저장했습니다 (1번째)' }),
  ).toHaveCount(1);

  for (let i = 0; i < 5; i += 1)
    await page.getByRole('button', { name: '기록 추가', exact: true }).click();
  await expect(log.getByRole('listitem')).toHaveCount(4);
  await expect(log.getByRole('listitem').first()).toHaveText('2번째 작업: 3회차 좌석 확인');

  await page.getByRole('button', { name: '연결 끊김으로 저장 시도', exact: true }).click();
  await expect(alert).toHaveText('저장하지 못했습니다. 연결을 확인한 뒤 다시 저장하세요.');
});

test('10.3 relevant decides removals, atomic widens scope, and busy is always released', async ({
  page,
}) => {
  await page.goto(page10('live-region-scope'));
  const region = page.getByRole('list', { name: '좌석 현황 (합성 데이터)' });

  await page.getByRole('button', { name: '마지막 회차 제거', exact: true }).click();
  await expect(observedValue(page, '마지막 변화의 종류 (MutationObserver)')).toHaveText(
    '노드 제거',
  );
  await expect(observedValue(page, 'aria-relevant상 알릴 변화인가')).toHaveText(/아니요/);

  await page.getByRole('radio', { name: /^all/ }).check();
  await page.getByRole('button', { name: '회차 추가', exact: true }).click();
  await page.getByRole('button', { name: '마지막 회차 제거', exact: true }).click();
  await expect(observedValue(page, 'aria-relevant상 알릴 변화인가')).toHaveText('예');

  await page.getByRole('radio', { name: 'true', exact: true }).check();
  await page.getByRole('button', { name: '1회차 좌석 하나 줄이기', exact: true }).click();
  await expect(observedValue(page, '보조기술에 넘길 범위')).toContainText('2회차 남은 좌석 8석');

  for (const end of ['묶음 실패 처리', '묶음 취소', '묶음 완료']) {
    const start = page.getByRole('button', { name: '묶음 갱신 시작', exact: true });
    await start.focus();
    await page.keyboard.press('Enter');
    await expect(start).toBeFocused();
    await expect(region).toHaveAttribute('aria-busy', 'true');
    await page.getByRole('button', { name: /다음 변경 적용/ }).click();
    await page.getByRole('button', { name: end, exact: true }).click();
    await expect(region).toHaveAttribute('aria-busy', 'false');
  }
  await expect(main(page).getByRole('status')).toHaveText('좌석 현황을 갱신했습니다.');
});

test('10.3 a failed batch restores the previous values', async ({ page }) => {
  await page.goto(page10('live-region-scope'));
  const region = page.getByRole('list', { name: '좌석 현황 (합성 데이터)' });
  await page.getByRole('button', { name: '묶음 갱신 시작', exact: true }).click();
  await page.getByRole('button', { name: /다음 변경 적용/ }).click();
  await expect(region.getByRole('listitem').first()).toHaveText('1회차 남은 좌석 10석');
  await page.getByRole('button', { name: '묶음 실패 처리', exact: true }).click();
  await expect(region.getByRole('listitem').first()).toHaveText('1회차 남은 좌석 12석');
  await expect(main(page).getByRole('status')).toHaveText(
    '좌석 현황을 갱신하지 못해 이전 값으로 되돌렸습니다.',
  );
});

test('10.4 waiting, error, retry, success, and empty keep a lasting summary', async ({ page }) => {
  await page.goto(page10('loading-and-results'));

  await search(page, fixture.A.query);
  await expect(searchBox(page)).toBeFocused();
  await expect(main(page).getByRole('status')).toHaveText('“자막” 검색 중');
  await expect(results(page)).toHaveAttribute('aria-busy', 'true');
  await expect(page.getByRole('progressbar', { name: '검색 중' })).toBeVisible();

  await respond(page, 1, '오류');
  await expect(results(page)).toContainText('“자막” 검색하지 못했습니다. 다시 시도할 수 있습니다.');
  await expect(results(page)).toHaveAttribute('aria-busy', 'false');
  await results(page).getByRole('button', { name: '다시 시도', exact: true }).click();
  await expect(searchBox(page)).toBeFocused();

  await respond(page, 2, '결과');
  await expectShown(page, fixture.A.results, '“자막” 3건 찾음');
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  await search(page, '없는말');
  await respond(page, 3, '결과');
  await expectShown(page, [], '“없는말” 결과 없음');
  await expect(results(page)).toContainText('“없는말” 결과 없음');
});

test('10.4 the toast disappears but recent searches keep the same action', async ({ page }) => {
  await page.clock.install();
  await page.goto(page10('loading-and-results'));
  await search(page, fixture.A.query);
  await respond(page, 1, '결과');

  const toast = page.getByText('“자막” 검색을 최근 검색에 저장했습니다.');
  await expect(toast).toBeVisible();
  await page.clock.runFor(6_100);
  await expect(toast).toHaveCount(0);

  await page.getByRole('button', { name: '“자막” 다시 검색', exact: true }).click();
  await expect(main(page).getByRole('status')).toHaveText('“자막” 검색 중');
  await respond(page, 2, '결과');
  await expectShown(page, fixture.A.results, '“자막” 3건 찾음');
});

test('10.4 closing the toast returns focus to recent searches', async ({ page }) => {
  await page.goto(page10('loading-and-results'));
  await search(page, fixture.B.query);
  await respond(page, 1, '결과');
  await page.getByRole('button', { name: 'Toast 닫기', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: '최근 검색' })).toBeFocused();
});

test('10.5 A then B, B answers first, A late: the screen and message stay with B', async ({
  page,
}) => {
  await page.goto(page10('stale-responses'));
  await search(page, fixture.A.query);
  await search(page, fixture.B.query);

  await respond(page, 2, '결과');
  await expectShown(page, fixture.B.results, '“대본” 1건 찾음');

  const button = page.getByRole('button', { name: '#1 결과 응답', exact: true });
  await button.focus();
  await page.keyboard.press('Enter');
  await expectShown(page, fixture.B.results, '“대본” 1건 찾음');
  await expect(button).toBeFocused();
});

test('10.5 a late success after canceling B changes nothing', async ({ page }) => {
  await page.goto(page10('stale-responses'));
  await search(page, fixture.A.query);
  await search(page, fixture.B.query);
  await page.getByRole('button', { name: '취소', exact: true }).click();
  await expectShown(page, [], '“대본” 검색을 취소했습니다.');
  await expect(page.getByText('요청 #2 “대본” · 중단 신호 받음')).toBeVisible();

  await respond(page, 2, '결과');
  await respond(page, 1, '결과');
  await expectShown(page, [], '“대본” 검색을 취소했습니다.');
});

test('10.5 an error from old A does not end B’s busy state', async ({ page }) => {
  await page.goto(page10('stale-responses'));
  await search(page, fixture.A.query);
  await search(page, fixture.B.query);

  await respond(page, 1, '오류');
  await expect(main(page).getByRole('status')).toHaveText('“대본” 검색 중');
  await expect(results(page)).toHaveAttribute('aria-busy', 'true');

  await respond(page, 2, '결과');
  await expectShown(page, fixture.B.results, '“대본” 1건 찾음');
});

test('10.5 repeated clicks leave only the last request active', async ({ page }) => {
  await page.goto(page10('stale-responses'));
  await searchBox(page).fill(fixture.B.query);
  const submit = page.getByRole('search').getByRole('button', { name: '검색', exact: true });
  await submit.click();
  await submit.click();
  await submit.click();

  await respond(page, 1, '결과');
  await respond(page, 2, '결과');
  await expect(main(page).getByRole('status')).toHaveText('“대본” 검색 중');
  await respond(page, 3, '결과');
  await expectShown(page, fixture.B.results, '“대본” 1건 찾음');
});

test('10.5 a duplicate completion is ignored, but a new identical search is applied', async ({
  page,
}) => {
  await page.goto(page10('stale-responses'));
  await search(page, fixture.B.query);
  await respond(page, 1, '결과');
  await page.evaluate("document.querySelector('[role=status] span').dataset.seen = 'first'");

  await respond(page, 1, '결과');
  await expect(page.getByText('요청 #1 “대본” · 중단 신호 없음 · 응답 2회')).toBeVisible();
  await expect(main(page).locator('[role=status] span[data-seen="first"]')).toHaveCount(1);

  await search(page, fixture.B.query);
  await respond(page, 2, '결과');
  await expectShown(page, fixture.B.results, '“대본” 1건 찾음');
  await expect(main(page).locator('[role=status] span[data-seen="first"]')).toHaveCount(0);
});

test('10.5 reset clears requests, results, and the message', async ({ page }) => {
  await page.goto(page10('stale-responses'));
  await search(page, fixture.A.query);
  await search(page, fixture.B.query);
  await page.getByRole('button', { name: '재설정', exact: true }).click();

  await expect(page.getByText('보낸 요청이 없습니다.')).toBeVisible();
  await expect(main(page).getByRole('status')).toHaveText('');
  await expect(results(page)).toHaveAttribute('aria-busy', 'false');
});

test('10.5 searching again after reset still keeps B when B answers first', async ({ page }) => {
  await page.goto(page10('stale-responses'));
  await expect(
    main(page).getByText(/현재 B\(대본\) 요청에 먼저, A\(자막\) 요청에 나중에/),
  ).toBeVisible();
  await expect(main(page).getByText(/#2를 먼저/)).toHaveCount(0);

  await search(page, fixture.A.query);
  await search(page, fixture.B.query);
  await page.getByRole('button', { name: '재설정', exact: true }).click();

  await search(page, fixture.A.query);
  await search(page, fixture.B.query);
  await expect(page.getByText('요청 #3 “자막”')).toBeVisible();
  await expect(page.getByText('요청 #4 “대본”')).toBeVisible();
  await expect(page.getByRole('button', { name: '#1 결과 응답', exact: true })).toHaveCount(0);

  await respond(page, 4, '결과');
  await expectShown(page, fixture.B.results, '“대본” 1건 찾음');
  await respond(page, 3, '결과');
  await expectShown(page, fixture.B.results, '“대본” 1건 찾음');
});

test('10.5 leaving with a pending request cleans up without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(page10('stale-responses'));
  await search(page, fixture.A.query);

  await page
    .getByRole('navigation', { name: '메뉴' })
    .getByRole('link', { name: /^10\.4/ })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[3]);
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[4]);

  await expect(page.getByText('보낸 요청이 없습니다.')).toBeVisible();
  expect(errors).toEqual([]);
});

test('10.5 the static comparison shows the defect without a live region', async ({ page }) => {
  await page.goto(page10('stale-responses'));
  const table = page.getByRole('table', { name: '같은 입력에 대한 수정 전 · 후의 마지막 상태' });
  const reversal = table.getByRole('row', { name: /A\/B 역전/ });
  await expect(reversal.getByRole('cell').nth(2)).toContainText('“대본” 3건 찾음');
  await expect(reversal.getByRole('cell').nth(3)).toContainText('“대본” 1건 찾음');
  await expect(main(page).getByRole('status')).toHaveCount(1);
});

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page10(id));

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
    await page.goto(page10(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}
