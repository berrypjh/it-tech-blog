import { expect, type Page, test } from '@playwright/test';

import { tabKey } from './keys';

const page09 = (id: string) => `/accessibility/${id}`;

const ids = [
  'image-alternatives',
  'complex-images',
  'svg-and-canvas',
  'math-content',
  'data-tables',
  'media-alternatives',
  'media-player',
  'motion-and-updates',
  'clear-content',
  'documents-and-page-references',
];

const titles = [
  '이미지의 목적과 문맥에 맞는 대체 텍스트 결정하기',
  '차트 · 복잡한 그림 · 지도에 설명과 데이터 대안 제공하기',
  'SVG · Canvas의 의미와 동등한 접근 경로 설계하기',
  '수식의 구조를 전달하고 MathML과 텍스트 대안 검증하기',
  '데이터 표의 제목 · 헤더 · 셀 관계와 읽기 순서 구성하기',
  '자막 · 대본 · 오디오 설명 · 수화의 역할과 적용 조건 구분하기',
  '미디어 플레이어 · 자동 재생 · 배경음의 제어 검증하기',
  '모션 · 점멸 · 자동 갱신과 Reduced Motion을 안전하게 다루기',
  '명확한 문장 · 예측 가능한 흐름 · 일관된 도움 정보 제공하기',
  '다운로드 문서 · 뷰어 · 고정된 참조 위치의 접근성 다루기',
];

const englishTitles = [
  'Deciding text alternatives by an image’s purpose and context',
  'Providing descriptions and data alternatives for charts, complex images, and maps',
  'Designing the meaning of SVG and Canvas and an equivalent access path',
  'Conveying the structure of math and verifying MathML and text alternatives',
  'Structuring titles, headers, cell relationships, and reading order in data tables',
  'Distinguishing the roles and conditions of captions, transcripts, audio description, and sign language',
  'Verifying control of media players, autoplay, and background audio',
  'Handling motion, flashing, auto-updates, and reduced motion safely',
  'Providing clear sentences, predictable flow, and consistent help',
  'Handling the accessibility of downloadable documents, viewers, and fixed reference points',
];

const observedValue = (page: Page, label: string) =>
  page.locator(`dt:text-is("${label}") + dd`).first();

test('the sidebar walks all ten chapter 09 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page09(ids[0]));

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^09\./ });
  await expect(links).toHaveCount(10);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 09 page links to the next, and 09.10 continues to 10.1', async ({ page }) => {
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page09(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
  const next = page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link');
  await expect(next).toHaveAccessibleName(/10\.1 갱신 · 포커스 · 알림 고르기/);
  await expect(next).toHaveAttribute('href', '/accessibility/choosing-update-means');
  await next.click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '화면 갱신 · 포커스 이동 · 상태 알림 중 필요한 수단 선택하기',
  );
});

test('English shows all ten chapter 09 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page09(ids[0]));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^09\./ });
  await expect(links).toHaveCount(10);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

test('09.1 chosen alts reach the real img, and the text link is not named twice', async ({
  page,
}) => {
  await page.goto(page09('image-alternatives'));
  const choose = (legend: RegExp, option: string) =>
    page.getByRole('group', { name: legend }).getByRole('radio', { name: option, exact: true });

  await choose(/^1\./, 'alt=""').check();
  await choose(/^2\./, 'alt="입구 변경"').check();
  await choose(/^3\./, 'alt="동쪽 입구 길찾기"').check();
  await choose(/^4\./, 'alt=""').check();
  await page.getByRole('button', { name: '확인', exact: true }).click();

  await expect(page.getByRole('status').filter({ hasText: '4곳 중 4곳' })).toBeVisible();
  const links = page.getByRole('main').getByRole('link', { name: '동쪽 입구 길찾기', exact: true });
  await expect(links).toHaveCount(2);
  await expect(page.getByRole('main').getByRole('img', { name: '입구 변경' })).toHaveCount(1);
});

test('09.1 a missing alt leaves no alt attribute on the img', async ({ page }) => {
  await page.goto(page09('image-alternatives'));
  await expect(observedValue(page, '1. “동쪽 입구로 들어오세요” 문장 앞')).toHaveText(
    'alt 속성 없음',
  );
});

test('09.2 the summary states the peak that the table holds', async ({ page }) => {
  await page.goto(page09('complex-images'));
  const table = page.getByRole('table', { name: '토요일 시간대별 남은 좌석' });
  await expect(table.getByRole('row', { name: /13시 38/ })).toBeVisible();
  await expect(page.locator('#seats-summary')).toContainText('13시에 38석');
  await expect(page.getByRole('img', { name: /남은 좌석 막대 차트/ })).toBeVisible();
});

test('09.3 the keyboard picks a seat through HTML buttons; the canvas alone cannot', async ({
  page,
  browserName,
}) => {
  await page.goto(page09('svg-and-canvas'));
  const defect = page.getByRole('checkbox', { name: /의도한 결함: Canvas만/ });

  await defect.focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(page.getByRole('button', { name: 'A1 좌석' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('status').filter({ hasText: 'A1 좌석을 골랐습니다.' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'A1 좌석' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await expect(page.locator('canvas')).toHaveAttribute('aria-hidden', 'true');

  await defect.check();
  await expect(page.getByRole('button', { name: /좌석/ })).toHaveCount(0);
  await expect(observedValue(page, 'HTML 좌석 버튼 수')).toHaveText('0');
});

test('09.4 only MathML keeps numerator and denominator in the DOM', async ({ page }) => {
  await page.goto(page09('math-content'));
  await expect(observedValue(page, 'mfrac의 자식 수')).toHaveText('2');
  await expect(observedValue(page, '분자 글자')).toHaveText('a+b');
  await expect(observedValue(page, '분모 글자')).toHaveText('n');

  await page.getByRole('radio', { name: /분수 모양만 흉내 낸 글자/ }).check();
  await expect(observedValue(page, 'math 요소')).toHaveText('없음');
  await expect(observedValue(page, 'mfrac의 자식 수')).toHaveText('0');
});

test('09.5 every cell connects to day, hall, and session headers; the defect drops them', async ({
  page,
}) => {
  await page.goto(page09('data-tables'));
  await expect(observedValue(page, '그 칸의 headers가 가리키는 헤더')).toHaveText(
    '일요일 (12월 6일) · B홀 · 3회차 15:30',
  );
  await expect(observedValue(page, 'headers가 모두 실제 th를 가리키는 칸')).toHaveText('12 / 12');

  await page.getByRole('textbox', { name: '일요일 · B홀 · 3회차의 주제' }).fill(' 마무리  토론 ');
  await page.getByRole('button', { name: '확인', exact: true }).click();
  await expect(page.getByRole('status').filter({ hasText: '“마무리 토론”' })).toBeVisible();
  await expect(page.getByRole('grid')).toHaveCount(0);

  await page.getByRole('checkbox', { name: /의도한 결함: 헤더를 굵은 td로만/ }).check();
  await expect(observedValue(page, 'headers가 모두 실제 th를 가리키는 칸')).toHaveText('0 / 12');
});

test('09.6 sorting the clip information matches the solution', async ({ page }) => {
  await page.goto(page09('media-alternatives'));
  const pick = (n: number, option: string) =>
    page
      .getByRole('group', { name: new RegExp(`^${n}\\.`) })
      .getByRole('radio', { name: option, exact: true });
  await pick(1, '자막').check();
  await pick(2, '자막').check();
  await pick(3, '오디오 설명').check();
  await pick(4, '둘 다 필요 없음').check();
  await page.getByRole('button', { name: '확인', exact: true }).click();
  await expect(page.getByRole('status').filter({ hasText: '4개 중 4개' })).toBeVisible();
});

test('09.7 caption files are WebVTT with the transcript’s speech', async ({ request }) => {
  for (const file of ['clip-ko.vtt', 'clip-ko-ad.vtt', 'clip-en.vtt', 'clip-en-ad.vtt']) {
    const response = await request.get(`/accessibility/media-player/captions/${file}`);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('text/vtt');
    expect(await response.text()).toMatch(/^WEBVTT/);
  }
  const ko = await (await request.get('/accessibility/media-player/captions/clip-ko.vtt')).text();
  expect(ko).toContain('00:00:03.600 --> 00:00:07.600\n마지막 3회차는 오후 3시 30분에 시작합니다.');
  expect(ko).not.toContain('(화면 설명)');
  const described = await (
    await request.get('/accessibility/media-player/captions/clip-ko-ad.vtt')
  ).text();
  expect(described).toContain('(화면 설명) 정문에 엑스 표시가 있고');
});

test('09.7 the media files exist in both formats', async ({ request }) => {
  for (const name of ['clip-ko', 'clip-ko-ad', 'clip-en', 'clip-en-ad']) {
    for (const ext of ['webm', 'mp4']) {
      const response = await request.get(`/accessibility/media/${name}.${ext}`);
      expect(response.ok(), `${name}.${ext}`).toBe(true);
    }
  }
});

test('09.7 the caption track loads and shows the cue at the current time', async ({ page }) => {
  await page.goto(page09('media-player'));
  const video = page.locator('video');
  await expect(observedValue(page, '자막 트랙 (readyState · mode)')).toHaveText('불러옴 · showing');

  await video.evaluate('(v) => { v.currentTime = 4 }');
  await expect(observedValue(page, '지금 표시할 자막')).toHaveText(
    '마지막 3회차는 오후 3시 30분에 시작합니다.',
  );
});

test('09.7 the keyboard plays, pauses, mutes, and leaves the video', async ({
  page,
  browserName,
}) => {
  await page.goto(page09('media-player'));
  const play = page.getByRole('button', { name: '재생', exact: true });

  await play.focus();
  await page.keyboard.press('Enter');
  await expect(observedValue(page, 'paused')).toHaveText('아니요');
  await page.getByRole('button', { name: '일시 정지', exact: true }).press('Enter');
  await expect(observedValue(page, 'paused')).toHaveText('예');

  await page.getByRole('button', { name: '음소거', exact: true }).press('Enter');
  await expect(observedValue(page, 'muted')).toHaveText('예');

  // 기본 컨트롤 안의 포커스 순서는 브라우저마다 다르다. 영상 쪽으로 돌아갔다가 다시 나올 수 있으면 갇히지 않은 것이다.
  await play.focus();
  await page.keyboard.press(`Shift+${tabKey(browserName)}`);
  await expect(play).not.toBeFocused();
  await page.keyboard.press(tabKey(browserName));
  await expect(play).toBeFocused();
});

test('09.7 playback can be repeated after it ends', async ({ page }) => {
  await page.goto(page09('media-player'));
  await page.getByRole('button', { name: '음소거', exact: true }).click();
  await page.locator('video').evaluate('(v) => { v.currentTime = 18.5; return v.play() }');
  await expect(page.getByRole('status').filter({ hasText: '재생이 끝났습니다' })).toBeVisible({
    timeout: 10_000,
  });

  await page.getByRole('button', { name: '처음부터', exact: true }).click();
  await expect(observedValue(page, 'paused')).toHaveText('아니요');
});

test('09.7 missing video or captions point to the transcript', async ({ page }) => {
  await page.goto(page09('media-player'));

  await page.getByRole('checkbox', { name: /없는 영상 주소/ }).check();
  const status = page.getByRole('status').filter({ hasText: '영상을 불러오지 못했습니다' });
  await expect(status).toBeVisible();
  await status.getByRole('link', { name: '대본으로 가기' }).click();
  await expect(page).toHaveURL(/#clip-transcript$/);

  await page.getByRole('checkbox', { name: /없는 영상 주소/ }).uncheck();
  await page.getByRole('checkbox', { name: /없는 자막 주소/ }).check();
  await expect(
    page.getByRole('status').filter({ hasText: '자막을 불러오지 못했습니다' }),
  ).toBeVisible();
});

test('09.8 the update starts only on request and stays paused', async ({ page }) => {
  await page.clock.install();
  await page.goto(page09('motion-and-updates'));

  await page.clock.runFor(10_000);
  await expect(observedValue(page, '갱신 횟수')).toHaveText('0');

  await page.getByRole('button', { name: '자동 갱신 시작', exact: true }).click();
  await page.clock.runFor(3_100);
  await expect(observedValue(page, '갱신 횟수')).toHaveText('1');

  await page.getByRole('button', { name: '일시 정지', exact: true }).click();
  await page.clock.runFor(10_000);
  await expect(observedValue(page, '갱신 횟수')).toHaveText('1');
  await expect(observedValue(page, '갱신 상태')).toHaveText('일시 정지');
});

test('09.8 the site setting and the OS preference each stop the bar motion', async ({ page }) => {
  await page.goto(page09('motion-and-updates'));
  await expect(observedValue(page, '진행 막대 움직임')).toHaveText('움직임');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(observedValue(page, '운영체제의 prefers-reduced-motion')).toHaveText('줄이기');
  await expect(observedValue(page, '진행 막대 움직임')).toHaveText('멈춘 막대');

  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: '줄이기', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduce');
  await expect(observedValue(page, '이 사이트의 모션 설정')).toHaveText('줄이기');
  await expect(observedValue(page, '진행 막대 움직임')).toHaveText('멈춘 막대');
});

test('09.9 the comparison records both versions and the phrase language is marked', async ({
  page,
}) => {
  await page.goto(page09('clear-content'));
  await page
    .getByRole('group', { name: '언제까지 해야 하나요?' })
    .getByRole('radio', { name: '글에 없음' })
    .check();
  await page.getByRole('radio', { name: '수정 후', exact: true }).check();
  await page
    .getByRole('group', { name: '언제까지 해야 하나요?' })
    .getByRole('radio', { name: '12월 3일 목요일 18:00' })
    .check();

  const row = page.getByRole('row', { name: /언제까지 해야 하나요\?/ });
  await expect(row.getByRole('cell').nth(0)).toHaveText('글에 없음');
  await expect(row.getByRole('cell').nth(2)).toHaveText('12월 3일 목요일 18:00');

  await expect(observedValue(page, '페이지 (html의 lang)')).toHaveText('ko');
  await expect(observedValue(page, '행사 이름 (가장 가까운 lang)')).toHaveText('en');
});

test('09.10 the download link states the real size and the file matches the HTML version', async ({
  page,
}) => {
  await page.goto(page09('documents-and-page-references'));
  const link = page.getByRole('link', { name: /행사 안내 내려받기 \(TXT · 한국어 · / });
  const label = String(await link.textContent());
  const stated = Number(label.replace(/.*· ([\d,]+)바이트.*/, '$1').replace(/,/g, ''));

  const response = await page.request.get(String(await link.getAttribute('href')));
  expect(response.headers()['content-type']).toContain('text/plain');
  const body = await response.body();
  expect(body.length).toBe(stated);

  const text = body.toString('utf8');
  for (const value of ['일요일 3회차 15:30', '본관 2층', '동쪽 입구']) {
    expect(text).toContain(value);
    await expect(page.locator('article').getByText(value).first()).toBeVisible();
  }
});

test('09.10 page 2 points to the same paragraph in any layout', async ({ page }) => {
  await page.goto(page09('documents-and-page-references'));
  const first = observedValue(page, '2쪽 표시 바로 다음 문단');
  const paragraph = '입구 변경: 정문 (북쪽) → 동쪽 입구';
  await expect(first).toHaveText(paragraph);

  await page.getByRole('radio', { name: '좁게 (320px)' }).check();
  await page.getByRole('radio', { name: '크게', exact: true }).check();
  await expect(first).toHaveText(paragraph);

  await page
    .getByRole('navigation', { name: '쪽 이동' })
    .getByRole('link', { name: '2쪽' })
    .click();
  await expect(page).toHaveURL(/#guide-page-2$/);
});

test('09.10 final task answers are checked against the source data', async ({ page }) => {
  await page.goto(page09('documents-and-page-references'));
  await page.getByRole('textbox', { name: /마지막 회차 — 그림/ }).fill('일요일 3회차 15:30');
  await page.getByRole('textbox', { name: /마지막 회차 — 글/ }).fill('일요일 오후 3시 30분');
  await page.getByRole('textbox', { name: /변경된 입구 — 그림/ }).fill('동쪽 입구');
  await page.getByRole('textbox', { name: /변경된 입구 — 글/ }).fill('정문');
  await page.getByRole('button', { name: '원자료와 대조', exact: true }).click();
  await expect(page.getByRole('status').filter({ hasText: '네 답 중 3개' })).toBeVisible();
});

for (const id of ids) {
  test(`${id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(page09(id));

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
    await page.goto(page09(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}
