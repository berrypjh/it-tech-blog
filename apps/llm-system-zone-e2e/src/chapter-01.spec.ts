import { expect, test } from '@playwright/test';

const page01 = (id: string) => `/llm/${id}`;

const ids = [
  'intro',
  'ai-concepts',
  'software-differences',
  'when-to-use-llms',
  'success-criteria',
  'failure-diagnosis',
  'notebook-to-service',
];

const titles = [
  'LLM 시스템 시작하기: 모델의 응답과 업무 완료 구별하기',
  'AI · ML · Deep Learning · Generative AI · LLM과 지도 · 자기지도 학습',
  'LLM 애플리케이션의 특성: 확률적 출력과 결정적인 소프트웨어 계약',
  '규칙 · 검색 · 기존 ML · LLM 비교: 도입 타당성과 비LLM Baseline',
  '성공 조건 정하기: 사용자 과업 · 실패 비용 · 품질 · 지연 · 예산',
  '실패 진단의 첫걸음: 관측한 증상과 원인 가설 구별하기',
  'Notebook과 서비스 코드: 실험 기록 · 재현성 · 책임의 차이',
];

const englishTitles = [
  'Getting started with LLM systems: telling a model response from a finished task',
  'AI, ML, deep learning, generative AI, LLMs, and supervised vs. self-supervised learning',
  'Traits of LLM applications: probabilistic output and a deterministic software contract',
  'Rules, search, classic ML, and LLMs compared: whether an LLM is justified, and the non-LLM baseline',
  'Setting success criteria: user task, failure cost, quality, latency, and budget',
  'First steps in failure diagnosis: telling observed symptoms from cause hypotheses',
  'Notebooks and service code: experiment records, reproducibility, and responsibility',
];

test('/llm lands on 01.1 and the sidebar walks all seven chapter 01 pages', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/llm');
  await expect(page).toHaveURL(page01('intro'));
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[0]);

  const links = page.getByRole('navigation', { name: '메뉴' }).getByRole('link', { name: /^01\./ });
  await expect(links).toHaveCount(7);
  for (const [i, title] of titles.entries()) {
    await links.nth(i).click();
    await expect(page).toHaveURL(page01(ids[i]));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    await expect(links.nth(i)).toHaveAttribute('aria-current', 'page');
  }
});

test('each chapter 01 page links to the next', async ({ page }) => {
  test.slow(); // next dev compiles each route on first visit
  for (const [i, id] of ids.slice(0, -1).entries()) {
    await page.goto(page01(id));
    await page.getByRole('navigation', { name: '다음 페이지' }).getByRole('link').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(titles[i + 1]);
  }
});

test('01.7 has no next page until chapter 02 exists', async ({ page }) => {
  await page.goto(page01('notebook-to-service'));
  await expect(page.getByRole('navigation', { name: '다음 페이지' })).toHaveCount(0);
});

test('English shows all seven chapter 01 pages on the same routes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(page01('intro'));

  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const links = page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: /^01\./ });
  await expect(links).toHaveCount(7);
  for (const [i, title] of englishTitles.entries()) {
    await links.nth(i).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});

for (const id of ids) {
  test(`${id}: ids are unique`, async ({ page }) => {
    await page.goto(page01(id));

    // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다.
    const duplicates = await page.evaluate(
      "[...document.querySelectorAll('[id]')].map((el) => el.id).filter((id, i, all) => all.indexOf(id) !== i)",
    );
    expect(duplicates).toEqual([]);
  });

  test(`${id}: no horizontal scroll at 320 CSS pixels`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(page01(id));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
    );
    expect(overflow).toBe(false);
  });
}

test('section anchors are present', async ({ page }) => {
  const anchors: Record<string, string[]> = {
    intro: ['problem', 'what-is-llm', 'flow', 'counterexample', 'summary'],
    'ai-concepts': ['axes', 'learning-signal', 'compare'],
    'software-differences': ['deterministic', 'contract', 'layers', 'trust-boundary'],
    'when-to-use-llms': ['compare', 'decision-tree', 'baseline'],
    'success-criteria': ['levels', 'metrics', 'budget'],
    'failure-diagnosis': ['trace', 'same-symptom', 'loop'],
    'notebook-to-service': ['threshold', 'handoff', 'transfer'],
  };
  for (const [id, sections] of Object.entries(anchors)) {
    await page.goto(page01(id));
    for (const anchor of sections) await expect(page.locator(`#${anchor}`)).toHaveCount(1);
  }
});

test('01.3 contract check: keyboard selection refuses the write and reset restores the normal case', async ({
  page,
}) => {
  await page.goto('/llm/software-differences');
  await page.waitForLoadState('networkidle'); // 키 입력 전에 hydration을 기다린다
  const status = page.getByRole('status').filter({ hasText: /쓰기/ });
  await expect(status).toContainText('쓰기 허용');

  await page.getByRole('radio', { name: '정상' }).focus();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('radio', { name: '형식 실패: JSON이 아님' })).toBeChecked();
  await expect(status).toContainText('쓰기 거부');
  await expect(page.getByText('앞 단계가 통과하지 않아 검사하지 않았습니다').first()).toBeVisible();

  await page.getByRole('radio', { name: '과제 사례: 권한 거부' }).check();
  await expect(status).toContainText('이 요청자는 티켓을 만들 수 없습니다');

  await page.getByRole('button', { name: '처음 사례로' }).press('Enter');
  await expect(page.getByRole('radio', { name: '정상' })).toBeChecked();
  await expect(status).toContainText('쓰기 허용');
});

test('01.6 trace timeline: evidence picked by keyboard is summarized in trace order and resets', async ({
  page,
}) => {
  await page.goto('/llm/failure-diagnosis');
  await page.waitForLoadState('networkidle'); // 키 입력 전에 hydration을 기다린다
  const status = page.getByRole('status').filter({ hasText: /증거/ });
  await expect(status).toHaveText('증거 0개 확인 · 어긋남 0 · 맞음 0 · 미확인 3');

  for (const name of ['진단 중 조회', '앱 상태', '검증']) {
    const button = page.getByRole('button', { name, exact: true });
    await button.focus();
    await page.keyboard.press('Enter');
    await expect(button).toHaveAttribute('aria-pressed', 'true');
  }
  await expect(status).toHaveText('증거 3개 확인 · 어긋남 2 · 맞음 1 · 미확인 0');
  await expect(page.getByText('검증 · 앱 상태 · 진단 중 조회', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: '처음부터' }).press('Enter');
  await expect(status).toHaveText('증거 0개 확인 · 어긋남 0 · 맞음 0 · 미확인 3');
  await expect(page.getByRole('button', { name: '검증', exact: true })).toHaveAttribute(
    'aria-pressed',
    'false',
  );
});

test('01.5 and 01.7 computed tables show the hand-checked values', async ({ page }) => {
  await page.goto('/llm/success-criteria');
  for (const value of ['14/20 (70%)', '12/14 (85.7%)', '2/20 (10%)', '6/20 (30%)']) {
    await expect(page.getByText(value, { exact: true })).toBeVisible();
  }

  await page.goto('/llm/notebook-to-service');
  await expect(page.getByText('1/5 (20%)', { exact: true })).toBeVisible();
  await expect(page.getByText('1/3 (33.3%)', { exact: true }).first()).toBeVisible();
});
