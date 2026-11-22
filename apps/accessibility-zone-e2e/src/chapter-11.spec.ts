import { expect, type Page, test } from '@playwright/test';

import { tabKey } from './keys';

/** 11장 검사. 기대값은 화면 코드에서 가져오지 않고 이 파일에 따로 적는다. */
type Entry = { id: string; ko: { label: string; h1: string }; en: { label: string; h1: string } };

const pages: Entry[] = [
  {
    id: 'input-purpose',
    ko: {
      label: '11.1 입력 유형과 형식 안내',
      h1: '입력 유형 · autocomplete · inputmode와 필수 · 형식 안내 설계하기',
    },
    en: {
      label: '11.1 Input types and format hints',
      h1: 'Designing input types, autocomplete, inputmode, and required and format instructions',
    },
  },
  {
    id: 'validation-responsibility',
    ko: {
      label: '11.2 네이티브 · 사용자 정의 검증',
      h1: '네이티브 검증과 사용자 정의 검증의 책임 나누기',
    },
    en: {
      label: '11.2 Native and custom validation',
      h1: 'Dividing responsibility between native and custom validation',
    },
  },
  {
    id: 'error-summary',
    ko: {
      label: '11.3 오류 요약과 수정 제안',
      h1: '필드 오류 · 오류 요약 · 수정 제안을 연결하기',
    },
    en: {
      label: '11.3 Error summary and suggestions',
      h1: 'Connecting field errors, an error summary, and correction suggestions',
    },
  },
  {
    id: 'server-errors',
    ko: {
      label: '11.4 서버 오류 뒤 값 보존',
      h1: '서버 오류 이후 입력값 · 포커스 · 알림을 보존하기',
    },
    en: {
      label: '11.4 Values after server errors',
      h1: 'Preserving input, focus, and announcements after server errors',
    },
  },
  {
    id: 'multi-step-forms',
    ko: {
      label: '11.5 다단계 · 조건부 · 반복 입력',
      h1: '다단계 폼 · 조건부 필드 · 반복 입력을 설계하기',
    },
    en: {
      label: '11.5 Steps, conditions, repeated entry',
      h1: 'Designing multi-step forms, conditional fields, and repeated entry',
    },
  },
  {
    id: 'authentication-paths',
    ko: {
      label: '11.6 비밀번호 · OTP · CAPTCHA',
      h1: '비밀번호 · 붙여넣기 · OTP · CAPTCHA와 대체 인증 경로 검토하기',
    },
    en: {
      label: '11.6 Passwords, OTP, and CAPTCHA',
      h1: 'Reviewing passwords, paste, OTP, CAPTCHA, and alternative authentication paths',
    },
  },
  {
    id: 'timeouts-and-confirmation',
    ko: {
      label: '11.7 시간제한 · 재인증 · 오류 예방',
      h1: '시간제한 · 세션 만료 · 재인증과 중요한 작업의 오류 예방하기',
    },
    en: {
      label: '11.7 Time limits, re-auth, prevention',
      h1: 'Handling time limits, session expiry, re-authentication, and error prevention for important actions',
    },
  },
];

/** 11.7의 다음 페이지. 11장의 끝이 12.1로 이어지는지만 확인하고, 12장 자체는 chapter-12.spec.ts가 본다. */
const afterChapter: Entry = {
  id: 'selection-controls',
  ko: {
    label: '12.1 Checkbox · Radio · Switch · Toggle',
    h1: 'Checkbox · Radio · Switch · Toggle Button의 상태 계약 구분하기',
  },
  en: {
    label: '12.1 Checkbox, radio, switch, toggle',
    h1: 'Telling apart the state contracts of checkbox, radio, switch, and toggle button',
  },
};

const url = (id: string) => `/accessibility/${id}`;
const nextNav = { ko: '다음 페이지', en: 'Next page' };
const menu = { ko: '메뉴', en: 'Menu' };
const escaped = (text: string) => new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

/** 설정과 같은 경로(쿠키)로 언어를 정한다. 서버는 이 쿠키로 locale을 읽는다. */
const useLocale = (page: Page, locale: 'ko' | 'en') =>
  page.context().addCookies([{ name: 'locale', value: locale, url: 'http://localhost:4001' }]);

/** live 역할 조회는 본문으로 좁힌다. 프레임워크가 본문 밖에 두는 안내 요소와 섞이지 않게 한다. */
const main = (page: Page) => page.getByRole('main');
const status = (page: Page) => main(page).getByRole('status');
const observedValue = (page: Page, label: string) =>
  page.locator(`dt:text-is("${label}") + dd`).first();
const button = (page: Page, name: string) => main(page).getByRole('button', { name, exact: true });
const heading = (page: Page, name: string) =>
  main(page).getByRole('heading', { name, exact: true });

/** 익명 행사 신청서(교육 예시)의 칸과 조작. */
const application = (page: Page) => page.getByRole('form', { name: '행사 신청 (교육 예시)' });
const field = (page: Page, label: '이름' | '이메일' | '참가 인원') =>
  application(page).getByRole('textbox', { name: `${label} (필수)`, exact: true });
const send = (page: Page) => button(page, '신청 내용 보내기').click();
const fill = async (page: Page, name: string, email: string, seats: string) => {
  await field(page, '이름').fill(name);
  await field(page, '이메일').fill(email);
  await field(page, '참가 인원').fill(seats);
};
const respond = (page: Page, id: number, kind: '접수' | '필드 오류' | '서비스 오류') =>
  button(page, `#${id} ${kind} 응답`).click();
const result = (page: Page) => page.getByRole('region', { name: /접수 결과/ });

const A = { name: '김하늘', email: 'sky@example.com', seats: '2' };
const B = { ...A, email: 'moon@example.com' };
const messages = {
  sending: '신청 내용을 보내는 중입니다.',
  accepted: '신청 내용을 접수했습니다.',
  serviceError: '일시적인 오류로 접수하지 못했습니다. 입력한 값은 그대로 있습니다.',
  duplicate: '같은 내용을 이미 보내는 중입니다. 새 요청을 만들지 않았습니다.',
};

for (const locale of ['ko', 'en'] as const) {
  test(`${locale}: 11.1 to 11.7 next links have the right name, href, and destination, and 11.7 continues to 12.1`, async ({
    page,
  }) => {
    test.slow();
    await useLocale(page, locale);
    for (const [i, entry] of pages.slice(0, -1).entries()) {
      const target = pages[i + 1];
      await page.goto(url(entry.id));
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(entry[locale].h1);
      const next = page.getByRole('navigation', { name: nextNav[locale] }).getByRole('link');
      await expect(next).toHaveAccessibleName(escaped(target[locale].label));
      await expect(next).toHaveAttribute('href', url(target.id));
      await next.click();
      await expect(page).toHaveURL(new RegExp(`${url(target.id)}$`));
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(target[locale].h1);
    }
    const next = page.getByRole('navigation', { name: nextNav[locale] }).getByRole('link');
    await expect(next).toHaveAccessibleName(escaped(afterChapter[locale].label));
    await expect(next).toHaveAttribute('href', url(afterChapter.id));
    await next.click();
    await expect(page).toHaveURL(new RegExp(`${url(afterChapter.id)}$`));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(afterChapter[locale].h1);
  });

  test(`${locale}: the menu lists seven chapter 11 pages, marks the current one, and title and lang match`, async ({
    page,
  }) => {
    test.slow();
    await page.setViewportSize({ width: 1280, height: 900 });
    await useLocale(page, locale);
    for (const entry of pages) {
      await page.goto(url(entry.id));
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page).toHaveTitle(`${entry[locale].h1} — A11y Lab`);
      const nav = page.getByRole('navigation', { name: menu[locale] });
      await expect(nav.getByRole('link', { name: /^11\./ })).toHaveCount(7);
      await expect(
        nav.getByRole('link', { name: entry[locale].label, exact: true }),
      ).toHaveAttribute('aria-current', 'page');
    }
  });
}

for (const entry of pages) {
  test(`${entry.id}: ids are unique and every text field has a name`, async ({ page }) => {
    await page.goto(url(entry.id));

    // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다.
    const duplicates = await page.evaluate(
      "[...document.querySelectorAll('[id]')].map((el) => el.id).filter((id, i, all) => all.indexOf(id) !== i)",
    );
    expect(duplicates).toEqual([]);

    for (const textbox of await main(page).getByRole('textbox').all()) {
      await expect(textbox).toHaveAccessibleName(/\S/);
    }
  });

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

  for (const locale of ['ko', 'en'] as const) {
    test(`${entry.id}: ${locale} at 320 CSS pixels has no page-level horizontal scroll`, async ({
      page,
    }) => {
      await useLocale(page, locale);
      await page.setViewportSize({ width: 320, height: 800 });
      await page.goto(url(entry.id));
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(entry[locale].h1);
      const overflow = await page.evaluate(
        "[document.documentElement, document.querySelector('main')].some((el) => el.scrollWidth > el.clientWidth)",
      );
      expect(overflow).toBe(false);
    });
  }

  test(`${entry.id}: Tab reaches the last control in main without a trap`, async ({
    page,
    browserName,
  }) => {
    await page.goto(url(entry.id));
    // 마지막 컨트롤이 초점을 받으면 표시를 남긴다.
    const total = (await page.evaluate(
      "(() => { const all = [...document.querySelectorAll('main a[href], main button, main input, main select, main textarea, main summary, main [tabindex]:not([tabindex=\\\"-1\\\"])')].filter((el) => !el.closest('[inert]') && el.getClientRects().length); const last = all.at(-1); last.addEventListener('focus', () => { window.__reachedLast = true; }); all[0].focus(); return all.length; })()",
    )) as number;
    for (let i = 0; i < total * 2 + 20; i += 1) await page.keyboard.press(tabKey(browserName));
    expect(await page.evaluate('window.__reachedLast === true')).toBe(true);
  });
}

test('settings chosen on 11.1 stay on 11.7', async ({ page }) => {
  await page.goto(url('input-purpose'));
  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: '라이트', exact: true }).click();
  await page.getByRole('button', { name: '크게', exact: true }).click();
  await page.getByRole('combobox', { name: '폰트' }).selectOption('serif');
  await page.getByRole('button', { name: '줄이기', exact: true }).click();

  await page.goto(url('timeouts-and-confirmation'));
  const html = page.locator('html');
  await expect(html).toHaveClass(/light/);
  await expect(html).toHaveAttribute('data-font-size', 'lg');
  await expect(html).toHaveAttribute('data-font', 'serif');
  await expect(html).toHaveAttribute('data-motion', 'reduce');
});

test('11.1 required and format hints stay after typing, and the DOM holds the three attributes', async ({
  page,
}) => {
  await page.goto(url('input-purpose'));
  const email = main(page).getByRole('textbox', { name: '이메일 (필수)', exact: true });
  const hint = '확인 메일을 받을 주소입니다. 예: name@example.com';

  await expect(email).toHaveAccessibleDescription(hint);
  await email.fill('sky@example.com');
  await expect(application(page).getByText(hint)).toBeVisible();
  await expect(email).not.toHaveAttribute('placeholder');

  await button(page, '칸의 속성 읽기').click();
  const table = page.getByRole('table', {
    name: '입력 칸마다 브라우저 DOM에서 읽은 속성과 설명',
  });
  const row = (name: string) =>
    table.getByRole('row').filter({ has: page.getByRole('rowheader', { name, exact: true }) });
  await expect(row('email').getByRole('cell')).toHaveText(['email', 'email', '없음', '예', hint]);
  await expect(row('tel').getByRole('cell').nth(3)).toHaveText('아니요');
  await expect(row('seats').getByRole('cell')).toHaveText([
    'text',
    '없음',
    'numeric',
    '예',
    '1부터 4 사이의 숫자입니다. 예: 2',
  ]);
  await expect(status(page)).toHaveText('입력 칸 4개의 속성을 읽었습니다.');
  await expect(
    main(page).getByRole('group', { name: '참석 방식 (필수)' }).getByRole('radio'),
  ).toHaveCount(2);
});

test('11.2 the same wrong value stops for different reasons, and a recheck clears the custom error', async ({
  page,
}) => {
  await page.goto(url('validation-responsibility'));
  const native = page.getByRole('form', { name: '기본 제약으로 검사하는 폼' });
  const custom = page.getByRole('form', { name: '페이지가 검사하는 폼' });

  await native.getByRole('button', { name: '보내기', exact: true }).click();
  await expect(observedValue(page, 'invalid 이벤트')).toHaveText('1회');
  await expect(observedValue(page, 'submit 이벤트')).toHaveText('0회');
  await expect(observedValue(page, '참인 validity 항목')).toHaveText('typeMismatch');
  const nativeField = native.getByRole('textbox', { name: '이메일 (필수)', exact: true });
  expect(await nativeField.evaluate('(el) => el.validity.typeMismatch')).toBe(true);
  await expect(nativeField).not.toHaveAttribute('aria-invalid');
  await expect(nativeField).toHaveAccessibleDescription(
    '확인 메일을 받을 주소입니다. 예: name@example.com',
  );

  const field = custom.getByRole('textbox', { name: '이메일 (필수)', exact: true });
  await custom.getByRole('button', { name: '보내기', exact: true }).click();
  await expect(field).toBeFocused();
  await expect(field).toHaveAttribute('aria-invalid', 'true');
  await expect(field).toHaveAccessibleDescription(/오류: 이메일 “kim@”은 주소 형식이 아닙니다\./);
  await expect(observedValue(page, '입력 칸의 aria-invalid')).toHaveText('true');

  await field.fill('kim@example.com');
  await field.press('Enter');
  await expect(field).not.toHaveAttribute('aria-invalid');
  await expect(observedValue(page, '입력 칸에 연결된 오류 글')).toHaveText('없음');
  await expect(status(page).filter({ hasText: '검사를 통과했습니다' })).toHaveCount(1);
});

test('11.3 two errors: summary link → exact field → fix → resubmit', async ({ page }) => {
  await page.goto(url('error-summary'));
  await expect(field(page, '이메일')).not.toHaveAttribute('aria-invalid');

  await fill(page, '', 'kim@', '2');
  await send(page);
  await expect(heading(page, '입력을 확인해 주세요. 오류 2개')).toBeFocused();
  await expect(main(page).getByRole('alert')).toHaveCount(0);
  await expect(field(page, '이름')).toHaveAttribute('aria-invalid', 'true');
  await expect(field(page, '이메일')).toHaveAttribute('aria-invalid', 'true');
  await expect(field(page, '이메일')).toHaveAccessibleDescription(
    /^확인 메일을 받을 주소입니다\. 예: name@example\.com 오류: 이메일 “kim@”은 주소 형식이 아닙니다\. @ 뒤에 도메인까지 입력하세요/,
  );
  await expect(field(page, '참가 인원')).not.toHaveAttribute('aria-invalid');

  await application(page)
    .getByRole('link', { name: /^이메일: / })
    .click();
  await expect(field(page, '이메일')).toBeFocused();
  await field(page, '이메일').fill('sky@example.com');
  await field(page, '이메일').press('Tab');
  await expect(heading(page, '입력을 확인해 주세요. 오류 2개')).toBeVisible();

  await field(page, '이메일').press('Enter');
  await expect(heading(page, '입력을 확인해 주세요. 오류 1개')).toBeFocused();
  await expect(field(page, '이메일')).not.toHaveAttribute('aria-invalid');
  await expect(field(page, '이메일')).toHaveAccessibleDescription(
    '확인 메일을 받을 주소입니다. 예: name@example.com',
  );
  await application(page)
    .getByRole('link', { name: /^이름: / })
    .click();
  await expect(field(page, '이름')).toBeFocused();

  await field(page, '이름').fill('김하늘');
  await field(page, '이름').press('Enter');
  await expect(application(page).getByRole('heading')).toHaveCount(0);
  await expect(status(page)).toHaveText('검사를 통과했습니다. 값은 전송하지 않았습니다.');
});

test('11.3 typing does not move focus or add errors before validation', async ({ page }) => {
  await page.goto(url('error-summary'));
  await field(page, '이메일').pressSequentially('kim@');
  await expect(field(page, '이메일')).toBeFocused();
  await expect(application(page).getByRole('heading')).toHaveCount(0);
  await expect(field(page, '이메일')).not.toHaveAttribute('aria-invalid');
});

test('11.4 A then B, A fails late: B’s values, busy, and result stay with B', async ({ page }) => {
  await page.goto(url('server-errors'));
  await fill(page, A.name, A.email, A.seats);
  await send(page);
  await expect(status(page)).toHaveText(messages.sending);
  await expect(result(page)).toHaveAttribute('aria-busy', 'true');
  await expect(page.getByRole('progressbar', { name: '보내는 중' })).toBeVisible();

  await field(page, '이메일').fill(B.email);
  await send(page);
  await expect(page.getByText(/제출 #1 .* 중단 신호 받음/)).toBeVisible();

  await respond(page, 1, '서비스 오류');
  await expect(status(page)).toHaveText(messages.sending);
  await expect(result(page)).toHaveAttribute('aria-busy', 'true');
  await expect(field(page, '이메일')).toHaveValue(B.email);

  await respond(page, 2, '접수');
  await expect(status(page)).toHaveText(messages.accepted);
  await expect(result(page)).toHaveAttribute('aria-busy', 'false');
  await expect(result(page)).toContainText(B.email);
  await expect(result(page)).toContainText('접수 1회');

  await respond(page, 2, '접수');
  await respond(page, 1, '접수');
  await expect(result(page)).toContainText('접수 1회');
  await expect(result(page)).toContainText(B.email);
});

test('11.4 a field error keeps every value and moves focus to the summary', async ({ page }) => {
  await page.goto(url('server-errors'));
  await fill(page, A.name, A.email, A.seats);
  await send(page);
  await respond(page, 1, '필드 오류');

  await expect(heading(page, '입력을 확인해 주세요. 오류 1개')).toBeFocused();
  await expect(field(page, '이름')).toHaveValue(A.name);
  await expect(field(page, '이메일')).toHaveValue(A.email);
  await expect(field(page, '참가 인원')).toHaveValue(A.seats);
  await expect(field(page, '이메일')).toHaveAccessibleDescription(
    /오류: 이 이메일로 접수된 신청이 이미 있습니다\./,
  );
  await expect(status(page)).toHaveText('');
  await expect(result(page)).toHaveAttribute('aria-busy', 'false');
});

test('11.4 a service error keeps values, retry moves focus to send, and repeats make no new request', async ({
  page,
}) => {
  await page.goto(url('server-errors'));
  await fill(page, A.name, A.email, A.seats);
  await send(page);
  const late = button(page, '#1 서비스 오류 응답');
  await late.focus();
  await page.keyboard.press('Enter');
  await expect(late).toBeFocused();
  await expect(status(page)).toHaveText(messages.serviceError);
  await expect(field(page, '이메일')).toHaveValue(A.email);

  await button(page, '다시 시도').click();
  await expect(button(page, '신청 내용 보내기')).toBeFocused();
  await expect(status(page)).toHaveText(messages.sending);

  await send(page);
  await send(page);
  await expect(status(page)).toHaveText(messages.duplicate);
  await expect(button(page, '#3 접수 응답')).toHaveCount(0);

  await respond(page, 2, '접수');
  await expect(result(page)).toContainText('접수 1회');

  await button(page, '재설정').click();
  await expect(page.getByText('보낸 제출이 없습니다.')).toBeVisible();
  await expect(field(page, '이름')).toHaveValue('');
});

test('11.4 leaving with a pending submission cleans up without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    // 자원 로드 실패(개발 서버의 부수 요청)는 이 검사의 대상이 아니다.
    if (message.type() === 'error' && !message.text().includes('Failed to load resource'))
      errors.push(message.text());
  });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(url('server-errors'));
  await fill(page, A.name, A.email, A.seats);
  await send(page);
  await expect(status(page)).toHaveText(messages.sending);

  // 전체 문서를 다시 불러오지 않는 이동이어야 화면을 떠날 때의 정리가 실행된다.
  await page
    .getByRole('navigation', { name: '메뉴' })
    .getByRole('link', { name: /^11\.3/ })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(pages[2].ko.h1);
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(pages[3].ko.h1);
  await expect(page.getByText('보낸 제출이 없습니다.')).toBeVisible();
  expect(errors).toEqual([]);
});

test('11.5 the conditional field leaves validation and submission, and steps keep values and focus', async ({
  page,
}) => {
  await page.goto(url('multi-step-forms'));
  const form = page.getByRole('form', { name: '두 단계 행사 신청 (교육 예시)' });
  const meal = form.getByRole('combobox', { name: '식사 선택 (필수)' });
  const name = form.getByRole('textbox', { name: '이름 (필수)', exact: true });

  await button(page, '다음').click();
  await expect(name).toBeFocused();
  await expect(name).toHaveAccessibleDescription(/오류: 이름 항목이 비어 있습니다\./);

  await name.fill('김하늘');
  await form.getByRole('radio', { name: '현장 참석' }).check();
  await meal.selectOption('vegetarian');
  await form.getByRole('radio', { name: '온라인 참석' }).check();
  await expect(meal).toHaveCount(0);
  await expect(observedValue(page, '기억하는 식사 선택 (페이지 상태)')).toHaveText('채식');
  await expect(observedValue(page, 'DOM에 있는 입력 칸')).toHaveText('name, mode');

  await button(page, '다음').click();
  await expect(heading(page, '2 / 2단계: 확인 메일')).toBeFocused();
  await expect(form.getByRole('textbox', { name: '받는 사람 이름 (필수)' })).toHaveValue('김하늘');

  await button(page, '이전').click();
  await expect(heading(page, '1 / 2단계: 참석 정보')).toBeFocused();
  await expect(name).toHaveValue('김하늘');
  await expect(form.getByRole('radio', { name: '온라인 참석' })).toBeChecked();

  await button(page, '다음').click();
  const email = form.getByRole('textbox', { name: '이메일 (필수)', exact: true });
  await email.fill('kim@');
  await button(page, '신청 내용 확인').click();
  await expect(email).toBeFocused();
  await email.fill('sky@example.com');
  await button(page, '신청 내용 확인').click();

  await expect(heading(page, '제출될 값 (전송하지 않음)')).toBeFocused();
  await expect(observedValue(page, '참석 방식')).toHaveText('온라인 참석');
  await expect(observedValue(page, '받는 사람 이름')).toHaveText('김하늘');
  await expect(main(page).locator('dt:text-is("식사 선택")')).toHaveCount(0);
});

test('11.5 an empty conditional field that is no longer shown does not block the next step', async ({
  page,
}) => {
  await page.goto(url('multi-step-forms'));
  const form = page.getByRole('form', { name: '두 단계 행사 신청 (교육 예시)' });
  const meal = form.getByRole('combobox', { name: '식사 선택 (필수)' });
  await form.getByRole('textbox', { name: '이름 (필수)', exact: true }).fill('김하늘');

  await form.getByRole('radio', { name: '현장 참석' }).check();
  await button(page, '다음').click();
  await expect(meal).toBeFocused();
  await expect(meal).toHaveAttribute('aria-invalid', 'true');
  await expect(heading(page, '1 / 2단계: 참석 정보')).toBeVisible();

  await form.getByRole('radio', { name: '온라인 참석' }).check();
  await expect(meal).toHaveCount(0);
  await button(page, '다음').click();
  await expect(heading(page, '2 / 2단계: 확인 메일')).toBeFocused();
});

test('11.5 switching back to on site restores the remembered meal and submits it', async ({
  page,
}) => {
  await page.goto(url('multi-step-forms'));
  const form = page.getByRole('form', { name: '두 단계 행사 신청 (교육 예시)' });
  await form.getByRole('textbox', { name: '이름 (필수)', exact: true }).fill('김하늘');
  await form.getByRole('radio', { name: '현장 참석' }).check();
  await button(page, '다음').click();
  await expect(form.getByRole('combobox', { name: '식사 선택 (필수)' })).toBeFocused();

  await form.getByRole('combobox', { name: '식사 선택 (필수)' }).selectOption('regular');
  await form.getByRole('radio', { name: '온라인 참석' }).check();
  await form.getByRole('radio', { name: '현장 참석' }).check();
  await expect(form.getByRole('combobox', { name: '식사 선택 (필수)' })).toHaveValue('regular');

  await button(page, '다음').click();
  await form.getByRole('textbox', { name: '이메일 (필수)', exact: true }).fill('sky@example.com');
  await button(page, '신청 내용 확인').click();
  await expect(observedValue(page, '식사 선택')).toHaveText('일반식');
});

test('11.6 synthetic values pass both steps, paste is not canceled, and nothing reaches the URL', async ({
  page,
}) => {
  await page.goto(url('authentication-paths'));
  const form = page.getByRole('form', { name: '모형 인증 (교육 예시)' });
  const user = form.getByRole('textbox', { name: '아이디', exact: true });
  const password = form.getByLabel('비밀번호', { exact: true });

  await expect(form).toHaveAttribute('method', 'post');
  await expect(user).toHaveAttribute('autocomplete', 'username');
  await expect(password).toHaveAttribute('autocomplete', 'current-password');
  await expect(password).not.toHaveAttribute('readonly');

  const allowed = await user.evaluate(
    "(el) => el.dispatchEvent(new Event('paste', { bubbles: true, cancelable: true }))",
  );
  expect(allowed).toBe(true);
  await expect(observedValue(page, '붙여넣기 이벤트')).toHaveText('1회 · 페이지가 취소한 적 없음');

  const toggle = button(page, '비밀번호 보기');
  await expect(password).toHaveAttribute('type', 'password');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await expect(password).toHaveAttribute('type', 'text');

  await user.fill('learner-11');
  await password.fill('wrong');
  await button(page, '다음').click();
  await expect(user).toBeFocused();
  await expect(user).toHaveAccessibleDescription(/오류: 아이디 또는 비밀번호가/);
  await expect(password).toHaveValue('wrong');

  await password.fill('Sample-Pass-2026');
  await button(page, '다음').click();
  await expect(heading(page, '2 / 2단계: 인증 코드')).toBeFocused();

  const code = form.getByRole('textbox', { name: '인증 코드', exact: true });
  await expect(code).toHaveAttribute('autocomplete', 'one-time-code');
  await expect(code).toHaveAttribute('inputmode', 'numeric');
  await expect(code).not.toHaveAttribute('maxlength');
  await code.fill('246 810');
  await button(page, '코드 확인').click();

  await expect(heading(page, '모형 인증을 통과했습니다')).toBeFocused();
  await expect(main(page).getByText('지난 경로: 비밀번호와 인증 코드')).toBeVisible();
  await expect(page).toHaveURL(/\/accessibility\/authentication-paths$/);
});

test('11.6 the model puts no entered value into a request, storage, or a cookie', async ({
  page,
}) => {
  const secrets = /learner-11|Sample-Pass-2026|246810/;
  const leaked: string[] = [];
  page.on('request', (request) => {
    if (secrets.test(`${request.url()} ${request.postData() ?? ''}`))
      leaked.push(`${request.method()} ${request.url()}`);
  });

  await page.goto(url('authentication-paths'));
  const form = page.getByRole('form', { name: '모형 인증 (교육 예시)' });
  await form.getByRole('textbox', { name: '아이디', exact: true }).fill('learner-11');
  await form.getByLabel('비밀번호', { exact: true }).fill('Sample-Pass-2026');
  await button(page, '다음').click();
  await form.getByRole('textbox', { name: '인증 코드', exact: true }).fill('246810');
  await button(page, '코드 확인').click();
  await expect(heading(page, '모형 인증을 통과했습니다')).toBeFocused();

  // e2e tsconfig에는 DOM 타입이 없어 문자열 식으로 평가한다.
  const stored = (await page.evaluate(
    'JSON.stringify([Object.entries(localStorage), Object.entries(sessionStorage), document.cookie])',
  )) as string;
  expect(stored).not.toMatch(secrets);
  expect(leaked).toEqual([]);
  await expect(page).toHaveURL(/\/accessibility\/authentication-paths$/);
});

test('11.6 the alternative path passes without the password or the code', async ({ page }) => {
  await page.goto(url('authentication-paths'));
  await button(page, '이메일 링크로 계속 (모형)').click();
  await expect(heading(page, '모형 인증을 통과했습니다')).toBeFocused();
  await expect(main(page).getByText(/^지난 경로: 이메일 링크/)).toBeVisible();

  await button(page, '처음부터 다시').click();
  await expect(heading(page, '1 / 2단계: 아이디와 비밀번호')).toBeFocused();
  await expect(
    page.getByRole('form', { name: '모형 인증 (교육 예시)' }).getByRole('textbox', {
      name: '아이디',
      exact: true,
    }),
  ).toHaveValue('');
});

test('11.7 extending returns focus to the start button and keeps the draft', async ({ page }) => {
  await page.goto(url('timeouts-and-confirmation'));
  await fill(page, A.name, A.email, A.seats);

  await button(page, '만료 상황 시작').click();
  await expect(heading(page, '세션이 곧 만료됩니다')).toBeFocused();
  await button(page, '세션 연장').click();
  await expect(button(page, '만료 상황 시작')).toBeFocused();
  await expect(status(page)).toHaveText('세션을 연장했습니다.');
  await expect(field(page, '이메일')).toHaveValue(A.email);
});

test('11.7 final task: errors, server failure, reversal, expiry, re-authentication, correction, one confirmation', async ({
  page,
}) => {
  test.slow();
  await page.goto(url('timeouts-and-confirmation'));
  const counts = observedValue(page, '접수 · 확정 횟수');

  // ① 두 오류 → ② 요약에서 칸으로 가서 고친다
  await fill(page, '', 'kim@', A.seats);
  await send(page);
  await expect(heading(page, '입력을 확인해 주세요. 오류 2개')).toBeFocused();
  await application(page)
    .getByRole('link', { name: /^이름: / })
    .click();
  await expect(field(page, '이름')).toBeFocused();
  await field(page, '이름').fill(A.name);
  await application(page)
    .getByRole('link', { name: /^이메일: / })
    .click();
  await expect(field(page, '이메일')).toBeFocused();
  await field(page, '이메일').fill(A.email);
  await send(page);
  await expect(status(page)).toHaveText(messages.sending);

  // ③ 서버 실패 뒤 입력값이 그대로다
  await respond(page, 1, '서비스 오류');
  await expect(status(page)).toHaveText(messages.serviceError);
  await expect(field(page, '이름')).toHaveValue(A.name);
  await expect(field(page, '이메일')).toHaveValue(A.email);
  await expect(field(page, '참가 인원')).toHaveValue(A.seats);

  // ④ 다시 시도 → 값을 바꿔 보냄 → 같은 내용 거듭 보냄 → 응답 역전
  await button(page, '다시 시도').click();
  await expect(button(page, '신청 내용 보내기')).toBeFocused();
  await field(page, '이메일').fill(B.email);
  await send(page);
  await send(page);
  await expect(status(page)).toHaveText(messages.duplicate);
  await expect(button(page, '#4 접수 응답')).toHaveCount(0);

  await respond(page, 3, '접수');
  await expect(heading(page, '접수된 내용 검토')).toBeFocused();
  await respond(page, 2, '서비스 오류');
  await expect(status(page)).toHaveText(messages.accepted);
  await expect(result(page)).toContainText(B.email);
  await expect(counts).toHaveText('접수 1회 · 확정 0회');

  // ⑤ 만료 → 취소 → 재인증 → 같은 화면과 같은 값
  await button(page, '만료 상황 시작').click();
  await expect(heading(page, '세션이 곧 만료됩니다')).toBeFocused();
  await button(page, '연장하지 않고 만료').click();
  await expect(heading(page, '세션이 만료되었습니다')).toBeFocused();
  await expect(main(page).locator('[inert]')).toHaveCount(1);
  expect(
    await main(page)
      .locator('[inert] button')
      .first()
      .evaluate('(el) => { el.focus(); return document.activeElement === el; }'),
  ).toBe(false);
  await button(page, '취소').click();
  await expect(status(page)).toHaveText(
    '재인증을 취소했습니다. 초안은 남아 있고 확정되지 않았습니다.',
  );
  await expect(counts).toHaveText('접수 1회 · 확정 0회');

  await button(page, '재인증 (모형)').click();
  await expect(heading(page, '접수된 내용 검토')).toBeFocused();
  await expect(main(page).locator('[inert]')).toHaveCount(0);
  await expect(status(page)).toHaveText('재인증했습니다. 하던 화면으로 돌아왔습니다.');
  await expect(observedValue(page, '기억하는 초안 값')).toHaveText(
    `${B.name} · ${B.email} · ${B.seats}`,
  );

  // 검토 화면에서 정정 → 다시 접수 → 한 번 확정
  await button(page, '참가 인원 수정').click();
  await expect(field(page, '참가 인원')).toBeFocused();
  await expect(field(page, '이메일')).toHaveValue(B.email);
  await field(page, '참가 인원').fill('3');
  await send(page);
  await respond(page, 4, '접수');
  await expect(heading(page, '접수된 내용 검토')).toBeFocused();
  await expect(observedValue(page, '참가 인원')).toHaveText('3');

  await button(page, '신청 확정').click();
  await expect(heading(page, '신청 확정 완료')).toBeFocused();
  await expect(status(page)).toHaveText('신청을 확정했습니다.');
  await expect(counts).toHaveText('접수 2회 · 확정 1회');
  await expect(result(page)).toContainText('접수 2회');
  await expect(result(page)).toContainText(B.email);
  await expect(button(page, '신청 확정')).toHaveCount(0);

  await button(page, '과업 재설정').click();
  await expect(heading(page, '신청서 작성')).toBeFocused();
  await expect(field(page, '이름')).toHaveValue('');
  await expect(result(page)).toContainText('접수 0회');
  await expect(page.getByText('보낸 제출이 없습니다.')).toBeVisible();
});

test('11.7 the record form names five fields per point and shows the model record on request', async ({
  page,
}) => {
  await page.goto(url('timeouts-and-confirmation'));
  const group = page.getByRole('group', { name: '만료와 재인증 뒤' });
  await expect(group.getByRole('textbox')).toHaveCount(5);
  await expect(
    group.getByRole('textbox', { name: '만료와 재인증 뒤 — 미확인 보조기술 항목' }),
  ).toBeVisible();

  await group.getByText('모범 기록 보기').click();
  await expect(
    group.getByRole('table', { name: '모범 기록 (교육 예시) — 만료와 재인증 뒤' }),
  ).toContainText('확정 1회');
});
