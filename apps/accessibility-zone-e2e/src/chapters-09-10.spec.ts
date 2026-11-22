import { expect, type Page, test } from '@playwright/test';

import { tabKey } from './keys';

/**
 * 09 · 10장 통합 검사. 기대값은 화면 코드에서 가져오지 않고 이 파일에 따로 적는다.
 * 08.7은 09.1로 넘어가는 지점이라 함께 둔다.
 */
type Entry = { id: string; ko: { label: string; h1: string }; en: { label: string; h1: string } };

const chain: Entry[] = [
  {
    id: 'hover-focus-content',
    ko: {
      label: '08.7 호버 · 포커스 추가 내용',
      h1: '호버 · 포커스로 나타나는 내용을 접근 · 유지 · 닫을 수 있게 만들기',
    },
    en: {
      label: '08.7 Content on hover or focus',
      h1: 'Making content on hover or focus reachable, persistent, and dismissible',
    },
  },
  {
    id: 'image-alternatives',
    ko: {
      label: '09.1 이미지 대체 텍스트',
      h1: '이미지의 목적과 문맥에 맞는 대체 텍스트 결정하기',
    },
    en: {
      label: '09.1 Image text alternatives',
      h1: 'Deciding text alternatives by an image’s purpose and context',
    },
  },
  {
    id: 'complex-images',
    ko: {
      label: '09.2 차트 · 그림 · 지도 대안',
      h1: '차트 · 복잡한 그림 · 지도에 설명과 데이터 대안 제공하기',
    },
    en: {
      label: '09.2 Charts, figures, and maps',
      h1: 'Providing descriptions and data alternatives for charts, complex images, and maps',
    },
  },
  {
    id: 'svg-and-canvas',
    ko: { label: '09.3 SVG와 Canvas', h1: 'SVG · Canvas의 의미와 동등한 접근 경로 설계하기' },
    en: {
      label: '09.3 SVG and Canvas',
      h1: 'Designing the meaning of SVG and Canvas and an equivalent access path',
    },
  },
  {
    id: 'math-content',
    ko: { label: '09.4 수식과 MathML', h1: '수식의 구조를 전달하고 MathML과 텍스트 대안 검증하기' },
    en: {
      label: '09.4 Math and MathML',
      h1: 'Conveying the structure of math and verifying MathML and text alternatives',
    },
  },
  {
    id: 'data-tables',
    ko: {
      label: '09.5 데이터 표의 관계',
      h1: '데이터 표의 제목 · 헤더 · 셀 관계와 읽기 순서 구성하기',
    },
    en: {
      label: '09.5 Data table relationships',
      h1: 'Structuring titles, headers, cell relationships, and reading order in data tables',
    },
  },
  {
    id: 'media-alternatives',
    ko: {
      label: '09.6 자막 · 대본 · 오디오 설명 · 수화',
      h1: '자막 · 대본 · 오디오 설명 · 수화의 역할과 적용 조건 구분하기',
    },
    en: {
      label: '09.6 Captions, transcripts, description, sign',
      h1: 'Distinguishing the roles and conditions of captions, transcripts, audio description, and sign language',
    },
  },
  {
    id: 'media-player',
    ko: {
      label: '09.7 미디어 플레이어 제어',
      h1: '미디어 플레이어 · 자동 재생 · 배경음의 제어 검증하기',
    },
    en: {
      label: '09.7 Media player controls',
      h1: 'Verifying control of media players, autoplay, and background audio',
    },
  },
  {
    id: 'motion-and-updates',
    ko: {
      label: '09.8 모션 · 점멸 · 자동 갱신',
      h1: '모션 · 점멸 · 자동 갱신과 Reduced Motion을 안전하게 다루기',
    },
    en: {
      label: '09.8 Motion, flashing, and updates',
      h1: 'Handling motion, flashing, auto-updates, and reduced motion safely',
    },
  },
  {
    id: 'clear-content',
    ko: {
      label: '09.9 명확한 문장과 일관된 도움',
      h1: '명확한 문장 · 예측 가능한 흐름 · 일관된 도움 정보 제공하기',
    },
    en: {
      label: '09.9 Clear text and consistent help',
      h1: 'Providing clear sentences, predictable flow, and consistent help',
    },
  },
  {
    id: 'documents-and-page-references',
    ko: {
      label: '09.10 다운로드 문서와 참조 위치',
      h1: '다운로드 문서 · 뷰어 · 고정된 참조 위치의 접근성 다루기',
    },
    en: {
      label: '09.10 Documents and page references',
      h1: 'Handling the accessibility of downloadable documents, viewers, and fixed reference points',
    },
  },
  {
    id: 'choosing-update-means',
    ko: {
      label: '10.1 갱신 · 포커스 · 알림 고르기',
      h1: '화면 갱신 · 포커스 이동 · 상태 알림 중 필요한 수단 선택하기',
    },
    en: {
      label: '10.1 Update, focus, or message',
      h1: 'Choosing among a screen update, a focus move, and a status message',
    },
  },
  {
    id: 'live-region-roles',
    ko: {
      label: '10.2 live 영역과 역할',
      h1: 'aria-live · status · alert · log의 역할과 알림 시점 이해하기',
    },
    en: {
      label: '10.2 Live regions and roles',
      h1: 'Understanding the roles and timing of aria-live, status, alert, and log',
    },
  },
  {
    id: 'live-region-scope',
    ko: {
      label: '10.3 atomic · relevant · busy',
      h1: 'aria-atomic · aria-relevant · aria-busy로 갱신 범위 표현하기',
    },
    en: {
      label: '10.3 atomic, relevant, and busy',
      h1: 'Expressing the scope of updates with aria-atomic, aria-relevant, and aria-busy',
    },
  },
  {
    id: 'loading-and-results',
    ko: {
      label: '10.4 로딩 · 결과 · 빈 상태 · Toast',
      h1: '로딩 · 진행률 · 검색 결과 · 빈 상태 · Toast를 지속적으로 확인하게 만들기',
    },
    en: {
      label: '10.4 Loading, results, empty, toast',
      h1: 'Making loading, progress, search results, empty states, and toasts checkable over time',
    },
  },
  {
    id: 'stale-responses',
    ko: {
      label: '10.5 중복 · 경쟁 응답 다루기',
      h1: '중복 알림 · 연속 응답 · 취소 · 경쟁 상태에서 정보 일관성 유지하기',
    },
    en: {
      label: '10.5 Duplicate and racing responses',
      h1: 'Keeping information consistent through duplicate messages, consecutive responses, cancellation, and races',
    },
  },
];

const newPages = chain.slice(1);

/** 10.5의 다음 페이지. 09 · 10장 순회의 끝이 11.1로 이어지는지만 확인하고, 11장 자체는 chapter-11.spec.ts가 본다. */
const afterChain: Entry = {
  id: 'input-purpose',
  ko: {
    label: '11.1 입력 유형과 형식 안내',
    h1: '입력 유형 · autocomplete · inputmode와 필수 · 형식 안내 설계하기',
  },
  en: {
    label: '11.1 Input types and format hints',
    h1: 'Designing input types, autocomplete, inputmode, and required and format instructions',
  },
};
const path = [...chain, afterChain];
const url = (id: string) => `/accessibility/${id}`;
const nextNav = { ko: '다음 페이지', en: 'Next page' };
const menu = { ko: '메뉴', en: 'Menu' };

/** 설정과 같은 경로(쿠키)로 언어를 정한다. 서버는 이 쿠키로 locale을 읽는다. */
const useLocale = (page: Page, locale: 'ko' | 'en') =>
  page.context().addCookies([{ name: 'locale', value: locale, url: 'http://localhost:4001' }]);

const observedValue = (page: Page, label: string) =>
  page.locator(`dt:text-is("${label}") + dd`).first();

for (const locale of ['ko', 'en'] as const) {
  test(`${locale}: every next link from 08.7 through 10.5 to 11.1 has the right name, href, and destination`, async ({
    page,
  }) => {
    test.slow();
    await useLocale(page, locale);
    for (const [i, entry] of path.slice(0, -1).entries()) {
      const target = path[i + 1];
      await page.goto(url(entry.id));
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(entry[locale].h1);
      const next = page.getByRole('navigation', { name: nextNav[locale] }).getByRole('link');
      await expect(next).toHaveAccessibleName(
        new RegExp(target[locale].label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
      );
      await expect(next).toHaveAttribute('href', url(target.id));
      await next.click();
      await expect(page).toHaveURL(new RegExp(`${url(target.id)}$`));
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(target[locale].h1);
    }
  });

  test(`${locale}: the menu marks the current page, and title and lang match`, async ({ page }) => {
    test.slow();
    await page.setViewportSize({ width: 1280, height: 900 });
    await useLocale(page, locale);
    for (const entry of newPages) {
      await page.goto(url(entry.id));
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page).toHaveTitle(`${entry[locale].h1} — A11y Lab`);
      await expect(
        page
          .getByRole('navigation', { name: menu[locale] })
          .getByRole('link', { name: entry[locale].label, exact: true }),
      ).toHaveAttribute('aria-current', 'page');
    }
  });
}

for (const entry of newPages) {
  test(`${entry.id}: every TOC link points to one existing section`, async ({ page }) => {
    await page.goto(url(entry.id));
    const hrefs = (await page
      .locator('nav[aria-labelledby="toc-heading"] a')
      .evaluateAll("(links) => links.map((a) => a.getAttribute('href'))")) as string[];
    expect(hrefs.length).toBeGreaterThan(2);
    for (const href of hrefs) {
      await expect(page.locator(href)).toHaveCount(1);
    }
  });

  test(`${entry.id}: English at 320 CSS pixels has no page-level horizontal scroll`, async ({
    page,
  }) => {
    await useLocale(page, 'en');
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(url(entry.id));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(entry.en.h1);
    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });

  test(`${entry.id}: Tab reaches the last control in main without a trap`, async ({
    page,
    browserName,
  }) => {
    await page.goto(url(entry.id));
    // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다. 마지막 컨트롤이 초점을 받으면 표시를 남긴다.
    const total = (await page.evaluate(
      "(() => { const all = [...document.querySelectorAll('main a[href], main button, main input, main select, main textarea, main video[controls], main summary, main [tabindex]:not([tabindex=\\\"-1\\\"])')].filter((el) => !el.closest('[inert]') && el.getClientRects().length); const last = all.at(-1); last.addEventListener('focus', () => { window.__reachedLast = true; }); all[0].focus(); return all.length; })()",
    )) as number;
    for (let i = 0; i < total * 2 + 20; i += 1) await page.keyboard.press(tabKey(browserName));
    expect(await page.evaluate('window.__reachedLast === true')).toBe(true);
  });
}

test('settings chosen on 09.1 stay on 10.5', async ({ page }) => {
  await page.goto(url('image-alternatives'));
  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: '라이트', exact: true }).click();
  await page.getByRole('button', { name: '크게', exact: true }).click();
  await page.getByRole('combobox', { name: '폰트' }).selectOption('serif');
  await page.getByRole('button', { name: '줄이기', exact: true }).click();

  await page.goto(url('stale-responses'));
  const html = page.locator('html');
  await expect(html).toHaveClass(/light/);
  await expect(html).toHaveAttribute('data-font-size', 'lg');
  await expect(html).toHaveAttribute('data-font', 'serif');
  await expect(html).toHaveAttribute('data-motion', 'reduce');
});

/** 행사 원자료와 따로 적은 기대값. 그림 · 표 · 대본 · 내려받기의 답이 모두 이 값과 같아야 한다. */
const schedule = {
  lastSessionCell: { day: '일요일 (12월 6일)', hall: 'B홀', session: '3회차 15:30' },
  lastSession: '일요일 3회차 15:30',
  lastTimeSpoken: '오후 3시 30분',
  place: '본관 2층',
  entrance: '동쪽 입구',
  peak: { hour: '13시', seats: '38' },
};

test('09 the schedule answers agree across table, chart summary, transcript, and download', async ({
  page,
  request,
}) => {
  await page.goto(url('data-tables'));
  const cell = schedule.lastSessionCell;
  await expect(observedValue(page, '그 칸의 headers가 가리키는 헤더')).toHaveText(
    `${cell.day} · ${cell.hall} · ${cell.session}`,
  );

  await page.goto(url('complex-images'));
  await expect(page.locator('#seats-summary')).toContainText(
    `${schedule.peak.hour}에 ${schedule.peak.seats}석`,
  );
  await expect(
    page
      .getByRole('table', { name: '토요일 시간대별 남은 좌석' })
      .getByRole('row', { name: `${schedule.peak.hour} ${schedule.peak.seats}` }),
  ).toBeVisible();

  await page.goto(url('media-player'));
  const transcript = page.getByRole('region', { name: '설명을 담은 대본' });
  await expect(transcript).toContainText(schedule.lastTimeSpoken);
  await expect(transcript).toContainText(schedule.entrance);

  const text = await (
    await request.get('/accessibility/documents-and-page-references/event-guide-ko.txt')
  ).text();
  for (const value of [schedule.lastSession, schedule.place, schedule.entrance])
    expect(text).toContain(value);
});

test('09.7 media loads metadata, the Korean track has six cues, and errors lead to the transcript', async ({
  page,
}) => {
  await page.goto(url('media-player'));
  const video = page.locator('video');
  await expect(video.locator('track')).toHaveAttribute('srclang', 'ko');
  await expect.poll(() => video.evaluate('(v) => v.readyState')).toBeGreaterThanOrEqual(1);
  await expect.poll(() => video.evaluate('(v) => Math.round(v.duration)')).toBe(19);
  await expect
    .poll(() => video.evaluate('(v) => v.textTracks[0].cues ? v.textTracks[0].cues.length : 0'))
    .toBe(4);

  await page.getByRole('radio', { name: '오디오 설명 포함' }).check();
  await expect
    .poll(() =>
      page
        .locator('video')
        .evaluate('(v) => v.textTracks[0].cues ? v.textTracks[0].cues.length : 0'),
    )
    .toBe(5);

  await page.getByRole('checkbox', { name: /없는 영상 주소/ }).check();
  await expect(
    page.getByRole('main').getByRole('status').filter({ hasText: '영상을 불러오지 못했습니다' }),
  ).toBeVisible();
  await expect(page.locator('#clip-transcript')).toHaveCount(1);
});

const box = (page: Page) =>
  page.getByRole('search', { name: '교육용 문서 검색' }).getByRole('textbox', { name: '검색어' });
const status = (page: Page) => page.getByRole('main').getByRole('status');
const results = (page: Page) => page.getByRole('region', { name: '검색 결과' });
const pressRespond = async (page: Page, id: number, kind: '결과' | '오류') => {
  const button = page.getByRole('button', { name: `#${id} ${kind} 응답`, exact: true });
  await button.focus();
  await page.keyboard.press('Enter');
  return button;
};
const startSearch = async (page: Page, query: string) => {
  await box(page).fill(query);
  await box(page).press('Enter');
};

test('10.5 A then B, B completes, A fails late: B stays and focus stays on the pressed button', async ({
  page,
}) => {
  await page.goto(url('stale-responses'));
  await startSearch(page, '자막');
  await startSearch(page, '대본');
  await expect(box(page)).toBeFocused();

  await pressRespond(page, 2, '결과');
  const late = await pressRespond(page, 1, '오류');
  await expect(results(page).getByRole('listitem')).toHaveText(['설명 대본 쓰기']);
  await expect(status(page)).toHaveText('“대본” 1건 찾음');
  await expect(results(page)).toHaveAttribute('aria-busy', 'false');
  await expect(late).toBeFocused();
  await expect(observedValue(page, '활성 요청 (페이지 상태)')).toHaveText('없음');
});

test('10.4 leaving while the toast timer runs leaves no errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.clock.install();
  await page.goto(url('loading-and-results'));
  await startSearch(page, '자막');
  await pressRespond(page, 1, '결과');
  await expect(page.getByText('“자막” 검색을 최근 검색에 저장했습니다.')).toBeVisible();

  await page
    .getByRole('navigation', { name: '메뉴' })
    .getByRole('link', { name: /^10\.5/ })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(chain[chain.length - 1].ko.h1);
  await page.clock.runFor(10_000);
  expect(errors).toEqual([]);
});
