import { expect, type Locator, type Page, test } from '@playwright/test';

import { tabKey } from './keys';

/**
 * 12장 아홉 페이지(12.1~12.9) 검사. 12.9가 종점이고 13장으로 가는 링크는 없다.
 * 기대값은 화면 코드에서 가져오지 않고 이 파일에 따로 적는다.
 */
type Entry = { id: string; ko: { label: string; h1: string }; en: { label: string; h1: string } };

const pages: Entry[] = [
  {
    id: 'selection-controls',
    ko: {
      label: '12.1 Checkbox · Radio · Switch · Toggle',
      h1: 'Checkbox · Radio · Switch · Toggle Button의 상태 계약 구분하기',
    },
    en: {
      label: '12.1 Checkbox, radio, switch, toggle',
      h1: 'Telling apart the state contracts of checkbox, radio, switch, and toggle button',
    },
  },
  {
    id: 'disclosure-and-accordion',
    ko: {
      label: '12.2 Disclosure와 Accordion',
      h1: 'Disclosure와 Accordion을 기본 HTML부터 구현하기',
    },
    en: {
      label: '12.2 Disclosure and accordion',
      h1: 'Building disclosure and accordion from basic HTML',
    },
  },
  {
    id: 'tabs-pattern',
    ko: {
      label: '12.3 Tabs의 선택과 활성화',
      h1: 'Tabs의 선택 · 포커스 · 패널과 자동 · 수동 활성화 구현하기',
    },
    en: {
      label: '12.3 Tab selection and activation',
      h1: 'Implementing selection, focus, and panels of tabs with automatic and manual activation',
    },
  },
  {
    id: 'navigation-and-current',
    ko: {
      label: '12.4 내비게이션과 현재 위치',
      h1: '내비게이션 · Breadcrumb · Pagination에 위치와 목적 전달하기',
    },
    en: {
      label: '12.4 Navigation and current location',
      h1: 'Conveying location and purpose in navigation, breadcrumb, and pagination',
    },
  },
  {
    id: 'menus-and-toolbars',
    ko: {
      label: '12.5 Menu · Menubar · Toolbar',
      h1: '사이트 내비게이션과 Menu · Menubar · Toolbar의 조작 구분하기',
    },
    en: {
      label: '12.5 Menu, menubar, and toolbar',
      h1: 'Telling site navigation apart from menu, menubar, and toolbar interaction',
    },
  },
  {
    id: 'slider-values',
    ko: {
      label: '12.6 Slider의 값과 터치 대안',
      h1: 'Slider에 값 · 범위 · 키보드 · 터치 대안 제공하기',
    },
    en: {
      label: '12.6 Slider values and touch alternatives',
      h1: 'Giving a slider its value, range, keyboard, and touch alternatives',
    },
  },
  {
    id: 'spinbutton-input',
    ko: {
      label: '12.7 Spinbutton의 입력과 증감',
      h1: 'Spinbutton의 직접 입력 · 증감 · 잘못된 값 처리하기',
    },
    en: {
      label: '12.7 Spinbutton input and steps',
      h1: 'Handling direct entry, stepping, and invalid values in a spinbutton',
    },
  },
  {
    id: 'window-splitter',
    ko: {
      label: '12.8 분할 영역 조절',
      h1: '분할 영역 조절에 이름 · 현재 값 · 키보드 조작 제공하기',
    },
    en: {
      label: '12.8 Resizing split panes',
      h1: 'Giving a pane splitter a name, current value, and keyboard operation',
    },
  },
  {
    id: 'carousel-pattern',
    ko: {
      label: '12.9 Carousel의 탐색과 정지',
      h1: 'Carousel의 탐색 · 정지 · 현재 항목 · 읽기 순서 설계하기',
    },
    en: {
      label: '12.9 Carousel navigation and pausing',
      h1: 'Designing navigation, pausing, the current item, and reading order of a carousel',
    },
  },
];

const url = (id: string) => `/accessibility/${id}`;
const nextNav = { ko: '다음 페이지', en: 'Next page' };
const menu = { ko: '메뉴', en: 'Menu' };
const escaped = (text: string) => new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

/** 설정과 같은 경로(쿠키)로 언어를 정한다. 서버는 이 쿠키로 locale을 읽는다. */
const useLocale = (page: Page, locale: 'ko' | 'en') =>
  page.context().addCookies([{ name: 'locale', value: locale, url: 'http://localhost:4001' }]);

const main = (page: Page) => page.getByRole('main');
const observedValue = (page: Page, label: string) =>
  page.locator(`dt:text-is("${label}") + dd`).first();

/** 키보드로 누른다. WebKit은 클릭으로 버튼에 초점을 주지 않으므로 초점을 먼저 준다. */
const press = async (page: Page, target: Locator, key: string) => {
  await target.focus();
  await page.keyboard.press(key);
};

for (const locale of ['ko', 'en'] as const) {
  test(`${locale}: 12.1 to 12.9 next links have the right name, href, and destination, and 12.9 is the end point`, async ({
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
    await expect(page.getByRole('navigation', { name: nextNav[locale] })).toHaveCount(0);
  });

  test(`${locale}: the menu lists the nine chapter 12 pages, marks the current one, and title and lang match`, async ({
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
      await expect(nav.getByRole('link', { name: /^12\./ })).toHaveCount(9);
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

test('settings chosen on 12.1 stay on 12.9', async ({ page }) => {
  await page.goto(url('selection-controls'));
  await page.getByRole('button', { name: '설정', exact: true }).click();
  await page.getByRole('button', { name: '라이트', exact: true }).click();
  await page.getByRole('button', { name: '크게', exact: true }).click();
  await page.getByRole('combobox', { name: '폰트' }).selectOption('serif');
  await page.getByRole('button', { name: '줄이기', exact: true }).click();

  await page.goto(url('carousel-pattern'));
  const html = page.locator('html');
  await expect(html).toHaveClass(/light/);
  await expect(html).toHaveAttribute('data-font-size', 'lg');
  await expect(html).toHaveAttribute('data-font', 'serif');
  await expect(html).toHaveAttribute('data-motion', 'reduce');
});

test('12.1 a parent checkbox becomes mixed, and Space on it chooses every item', async ({
  page,
}) => {
  await page.goto(url('selection-controls'));
  const group = main(page).getByRole('group', { name: '받을 알림' });
  const all = group.getByRole('checkbox', { name: '모든 알림' });

  await group.getByRole('checkbox', { name: '댓글' }).check();
  await expect(all).toHaveJSProperty('indeterminate', true);
  await expect(all).not.toBeChecked();
  await expect(observedValue(page, '“모든 알림”의 checked · indeterminate')).toHaveText(
    'checked false · indeterminate true',
  );

  await press(page, all, 'Space');
  await expect(all).toBeChecked();
  await expect(all).toHaveJSProperty('indeterminate', false);
  await expect(observedValue(page, '고른 알림 (checked인 칸)')).toHaveText(
    'comments, mentions, notices',
  );

  await press(page, all, 'Space');
  await expect(group.getByRole('checkbox', { checked: true })).toHaveCount(0);
});

test('12.1 radios move and choose with arrows, skip the disabled one, wrap, do not uncheck, and Tab leaves', async ({
  page,
  browserName,
}) => {
  await page.goto(url('selection-controls'));
  const group = main(page).getByRole('group', { name: '알림 빈도' });
  const now = group.getByRole('radio', { name: '바로' });
  const daily = group.getByRole('radio', { name: '하루 한 번' });

  await expect(group.getByRole('radio', { name: '주 한 번 (준비 중)' })).toBeDisabled();
  await press(page, now, 'ArrowDown');
  await expect(daily).toBeFocused();
  await expect(daily).toBeChecked();
  await expect(now).not.toBeChecked();

  await page.keyboard.press('ArrowDown');
  await expect(now).toBeFocused();
  await expect(now).toBeChecked();

  await page.keyboard.press('Space');
  await expect(now).toBeChecked();
  await expect(observedValue(page, '고른 빈도 (checked인 radio)')).toHaveText('now');

  await page.keyboard.press(tabKey(browserName));
  await expect(main(page).getByRole('switch', { name: '방해 금지', exact: true })).toBeFocused();
});

test('12.1 a switch and a toggle button change state with Space and keep their names', async ({
  page,
}) => {
  await page.goto(url('selection-controls'));
  const quiet = main(page).getByRole('switch', { name: '방해 금지', exact: true });
  const mute = main(page).getByRole('button', { name: '알림음 음소거', exact: true });

  await expect(quiet).toHaveAttribute('aria-checked', 'false');
  await press(page, quiet, 'Space');
  await expect(quiet).toHaveAttribute('aria-checked', 'true');
  await expect(quiet).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(quiet).toHaveAttribute('aria-checked', 'false');

  await press(page, mute, 'Space');
  await expect(mute).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('Space');
  await expect(mute).toHaveAttribute('aria-pressed', 'false');
  await expect(observedValue(page, '“알림음 음소거”의 aria-pressed')).toHaveText('false');
});

test('12.2 details opens natively, and single-open closes the other panel while focus stays on the header', async ({
  page,
}) => {
  await page.goto(url('disclosure-and-accordion'));
  const text = main(page).getByText('행사 3일 전까지 전액 환불됩니다. 이후에는 환불되지 않습니다.');
  await expect(text).toBeHidden();
  await main(page).getByText('환불 기준 보기', { exact: true }).click();
  await expect(text).toBeVisible();

  const entry = main(page).getByRole('button', { name: '입장 시간', exact: true });
  const parking = main(page).getByRole('button', { name: '주차 안내', exact: true });
  await expect(entry).toHaveAttribute('aria-expanded', 'true');

  await press(page, parking, 'Enter');
  await expect(parking).toBeFocused();
  await expect(parking).toHaveAttribute('aria-expanded', 'true');
  await expect(entry).toHaveAttribute('aria-expanded', 'false');
  await expect(main(page).getByText('지하 2층에 3시간 무료 주차가 있습니다.')).toBeVisible();
  await expect(observedValue(page, 'hidden인 패널 안의 버튼')).toHaveText('2개');
  await expect(main(page).getByRole('heading', { name: '주차 안내', exact: true })).toHaveCount(1);
  await expect(main(page).locator('h3 + div[role]')).toHaveCount(0);
  await expect(main(page).locator('h3 + div[hidden]')).toHaveCount(2);
});

test('12.2 Tab skips closed panels, and closing from inside returns focus to the header', async ({
  page,
  browserName,
}) => {
  await page.goto(url('disclosure-and-accordion'));
  const entry = main(page).getByRole('button', { name: '입장 시간', exact: true });
  const parking = main(page).getByRole('button', { name: '주차 안내', exact: true });
  const close = main(page).getByRole('button', { name: '이 안내 닫기', exact: true });

  await expect(close).toHaveCount(1);
  await entry.focus();
  await page.keyboard.press(tabKey(browserName));
  await expect(close).toBeFocused();

  await page.keyboard.press('Enter');
  await expect(entry).toBeFocused();
  await expect(entry).toHaveAttribute('aria-expanded', 'false');
  await expect(close).toHaveCount(0);

  await page.keyboard.press(tabKey(browserName));
  await expect(parking).toBeFocused();

  for (let i = 0; i < 3; i += 1) {
    await page.keyboard.press('Enter');
    await expect(parking).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Space');
    await expect(parking).toHaveAttribute('aria-expanded', 'false');
  }
  await expect(parking).toBeFocused();
});

test('12.2 multi-open keeps several panels, and switching back keeps only one', async ({
  page,
}) => {
  await page.goto(url('disclosure-and-accordion'));
  const mode = main(page).getByRole('group', { name: '열림 규칙' });
  const expanded = main(page).locator('h3 > button[aria-expanded="true"]');

  await mode.getByRole('radio', { name: '여러 개 열림' }).check();
  await main(page).getByRole('button', { name: '주차 안내', exact: true }).click();
  await main(page).getByRole('button', { name: '문의 방법', exact: true }).click();
  await expect(expanded).toHaveCount(3);

  await mode.getByRole('radio', { name: '하나만 열림' }).check();
  await expect(expanded).toHaveCount(1);
  await expect(expanded).toHaveText('입장 시간');
});

test('12.3 manual activation: arrows move focus only, Enter selects, ends wrap, and Tab leaves to the panel', async ({
  page,
  browserName,
}) => {
  await page.goto(url('tabs-pattern'));
  const list = main(page).getByRole('tablist', { name: '행사 안내 (수동 활성화)' });
  const card = list.locator('xpath=..');
  const tab = (name: string) => list.getByRole('tab', { name, exact: true });
  const panel = card.getByRole('tabpanel');

  await expect(list.locator('[role="tab"][tabindex="0"]')).toHaveCount(1);
  await press(page, tab('일정'), 'ArrowRight');
  await expect(tab('장소')).toBeFocused();
  await expect(tab('일정')).toHaveAttribute('aria-selected', 'true');
  await expect(tab('장소')).toHaveAttribute('aria-selected', 'false');
  await expect(panel).toHaveText('토요일과 일요일, 하루 세 회차로 진행합니다.');

  await page.keyboard.press('Enter');
  await expect(tab('장소')).toHaveAttribute('aria-selected', 'true');
  await expect(tab('일정')).toHaveAttribute('aria-selected', 'false');
  await expect(panel).toHaveText('본관 2층 A홀과 B홀입니다. 동쪽 입구로 들어옵니다.');
  await expect(panel).toHaveAccessibleName('장소');
  await expect(list.locator('[role="tab"][tabindex="0"]')).toHaveText('장소');

  await page.keyboard.press('End');
  await expect(tab('준비물')).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(tab('일정')).toBeFocused();
  await page.keyboard.press('ArrowLeft');
  await expect(tab('준비물')).toBeFocused();
  await page.keyboard.press('Home');
  await expect(tab('일정')).toBeFocused();
  await expect(tab('장소')).toHaveAttribute('aria-selected', 'true');

  for (let i = 0; i < 7; i += 1) await page.keyboard.press('ArrowRight');
  await expect(tab('장소')).toBeFocused();
  await expect(panel).toHaveText('본관 2층 A홀과 B홀입니다. 동쪽 입구로 들어옵니다.');

  await page.keyboard.press(tabKey(browserName));
  await expect(panel).toBeFocused();
  await page.keyboard.press(`Shift+${tabKey(browserName)}`);
  await expect(tab('장소')).toBeFocused();
});

test('12.3 automatic activation selects on arrow, and a single tab stays valid', async ({
  page,
}) => {
  await page.goto(url('tabs-pattern'));
  const list = main(page).getByRole('tablist', { name: '행사 안내 (자동 활성화)' });
  const panel = list.locator('xpath=..').getByRole('tabpanel');
  const tab = (name: string) => list.getByRole('tab', { name, exact: true });

  await press(page, tab('일정'), 'ArrowRight');
  await expect(tab('장소')).toBeFocused();
  await expect(tab('장소')).toHaveAttribute('aria-selected', 'true');
  await expect(panel).toHaveText('본관 2층 A홀과 B홀입니다. 동쪽 입구로 들어옵니다.');

  await main(page).getByRole('checkbox', { name: '탭을 하나만 두기' }).check();
  await expect(list.getByRole('tab')).toHaveCount(1);
  await expect(tab('일정')).toHaveAttribute('aria-selected', 'true');
  for (const key of ['ArrowRight', 'ArrowLeft', 'End', 'Home']) {
    await press(page, tab('일정'), key);
    await expect(tab('일정')).toBeFocused();
  }
  await expect(panel).toHaveText('토요일과 일요일, 하루 세 회차로 진행합니다.');
});

test('12.4 three navs have distinct names, real hrefs, and one current link each', async ({
  page,
}) => {
  await page.goto(url('navigation-and-current'));
  const nav = (name: string) => main(page).getByRole('navigation', { name, exact: true });

  for (const name of ['12장 페이지', '현재 경로', '문서 목록 쪽 이동']) {
    await expect(nav(name)).toHaveCount(1);
    await expect(nav(name).locator('a[aria-current="page"]')).toHaveCount(1);
  }
  await expect(nav('12장 페이지').getByRole('link')).toHaveCount(9);
  await expect(nav('12장 페이지').locator('a[aria-current="page"]')).toHaveText(pages[3].ko.label);

  const crumbs = nav('현재 경로').getByRole('link');
  await expect(crumbs).toHaveCount(2);
  await expect(crumbs.first()).toHaveAttribute('href', '/accessibility');
  await expect(crumbs.last()).toHaveAttribute('href', url('navigation-and-current'));
  await expect(crumbs.last()).toHaveAttribute('aria-current', 'page');

  const empty = await main(page)
    .locator('nav a')
    .evaluateAll(
      "(links) => links.filter((a) => !a.getAttribute('href') || a.getAttribute('href') === '#').length",
    );
  expect(empty).toBe(0);
  await expect(main(page).locator('[aria-selected]')).toHaveCount(0);
});

test('12.4 page links change the address and the current marker, the last page has no next link, and back returns', async ({
  page,
}) => {
  await page.goto(url('navigation-and-current'));
  const pager = main(page).getByRole('navigation', { name: '문서 목록 쪽 이동', exact: true });
  const link = (name: string) => pager.getByRole('link', { name, exact: true });
  const title = (n: number) =>
    main(page).getByRole('heading', { name: `교육용 문서 목록 · ${n} / 3쪽`, exact: true });

  await expect(link('1쪽')).toHaveAttribute('aria-current', 'page');
  await expect(link('이전 쪽')).toHaveCount(0);
  await expect(title(1)).not.toBeFocused();

  await link('2쪽').click();
  await expect(page).toHaveURL(/\/navigation-and-current\?page=2$/);
  await expect(link('2쪽')).toHaveAttribute('aria-current', 'page');
  await expect(link('1쪽')).not.toHaveAttribute('aria-current');
  await expect(title(2)).toBeFocused();
  await expect(main(page).getByText('오디오 설명 녹음', { exact: true })).toBeVisible();
  await expect(observedValue(page, '주소의 쿼리 (location.search)')).toHaveText('?page=2');

  await link('다음 쪽').click();
  await expect(page).toHaveURL(/\?page=3$/);
  await expect(link('3쪽')).toHaveAttribute('aria-current', 'page');
  await expect(link('다음 쪽')).toHaveCount(0);
  await expect(title(3)).toBeFocused();

  await page.goBack();
  await expect(page).toHaveURL(/\?page=2$/);
  await expect(link('2쪽')).toHaveAttribute('aria-current', 'page');

  await page.goto(`${url('navigation-and-current')}?page=99`);
  await expect(link('3쪽')).toHaveAttribute('aria-current', 'page');
  await expect(title(3)).not.toBeFocused();
});

test('12.5 menu button: open → item focus → arrows → Escape returns → run returns and announces', async ({
  page,
  browserName,
}) => {
  await page.goto(url('menus-and-toolbars'));
  const trigger = main(page).getByRole('button', { name: '“행사 안내문” 작업', exact: true });
  const menuList = main(page).getByRole('menu', { name: '“행사 안내문” 작업' });
  const item = (name: string) => menuList.getByRole('menuitem', { name, exact: true });
  const status = main(page).getByRole('status');

  await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(menuList).toHaveCount(0);

  await press(page, trigger, 'Enter');
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(item('복사')).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(item('이름 바꾸기')).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await expect(item('복사')).toBeFocused();
  await page.keyboard.press('End');
  await expect(item('삭제')).toBeFocused();

  await page.keyboard.press('Escape');
  await expect(menuList).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(status).toHaveText('');

  await page.keyboard.press('ArrowUp');
  await expect(item('삭제')).toBeFocused();
  await page.keyboard.press('Home');
  await expect(item('복사')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(menuList).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(status).toHaveText('“복사” 명령을 실행했습니다. (모형)');

  for (let i = 0; i < 3; i += 1) {
    await page.keyboard.press('ArrowDown');
    await expect(item('복사')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(trigger).toBeFocused();
  }

  await page.keyboard.press('ArrowDown');
  await page.keyboard.press(tabKey(browserName));
  await expect(menuList).toHaveCount(0);
  await expect(main(page).getByRole('textbox', { name: '다음 메모' })).toBeFocused();
});

test('12.5 a menu with one command still opens, keeps focus on it, and runs', async ({ page }) => {
  await page.goto(url('menus-and-toolbars'));
  await main(page).getByRole('checkbox', { name: '명령을 하나만 두기' }).check();
  const trigger = main(page).getByRole('button', { name: '“행사 안내문” 작업', exact: true });
  const items = main(page).getByRole('menuitem');

  await press(page, trigger, 'ArrowDown');
  await expect(items).toHaveCount(1);
  for (const key of ['ArrowDown', 'ArrowUp', 'End', 'Home']) {
    await page.keyboard.press(key);
    await expect(items.first()).toBeFocused();
  }
  await page.keyboard.press('Space');
  await expect(trigger).toBeFocused();
  await expect(main(page).getByRole('status')).toHaveText('“복사” 명령을 실행했습니다. (모형)');
});

test('12.5 toolbar: one Tab stop, arrows along the axis, Space toggles, Tab leaves, and editing keys stay in the field', async ({
  page,
  browserName,
}) => {
  await page.goto(url('menus-and-toolbars'));
  const toolbar = main(page).getByRole('toolbar', { name: '메모 서식' });
  const control = (name: string) => toolbar.getByRole('button', { name, exact: true });
  const note = main(page).getByRole('textbox', { name: '메모', exact: true });
  const stops = toolbar.locator('button[tabindex="0"]');

  await expect(stops).toHaveCount(1);
  await press(page, control('굵게'), 'ArrowRight');
  await expect(control('기울임')).toBeFocused();
  await expect(stops).toHaveText('기울임');

  await page.keyboard.press('Space');
  await expect(control('기울임')).toHaveAttribute('aria-pressed', 'true');
  await expect(control('기울임')).toBeFocused();
  await expect(control('굵게')).toHaveAttribute('aria-pressed', 'false');

  await page.keyboard.press('End');
  await expect(control('밑줄')).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(control('굵게')).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(control('굵게')).toBeFocused();

  await page.keyboard.press(tabKey(browserName));
  await expect(note).toBeFocused();
  for (const key of ['ArrowLeft', 'ArrowRight', 'Home', 'End']) await page.keyboard.press(key);
  await expect(note).toBeFocused();
  await expect(stops).toHaveText('굵게');
  await expect(note).toHaveValue('토요일 2회차는 13시에 시작합니다.');

  await page.keyboard.press(`Shift+${tabKey(browserName)}`);
  await expect(control('굵게')).toBeFocused();
});

test('12.6 arrows, End, and repeated presses at the maximum keep the value and the screen in sync', async ({
  page,
}) => {
  await page.goto(url('slider-values'));
  const slider = main(page).getByRole('slider', { name: '알림 소리 크기' });
  const output = main(page).locator('output');

  await expect(slider).toHaveValue('25');
  await expect(slider).toHaveAttribute('min', '0');
  await expect(slider).toHaveAttribute('max', '100');
  await expect(slider).toHaveAttribute('step', '5');
  await expect(output).toHaveText('25%');

  await press(page, slider, 'ArrowRight');
  await expect(slider).toHaveValue('30');
  await expect(output).toHaveText('30%');
  await expect(slider).toHaveAttribute('aria-valuetext', '30퍼센트');

  await page.keyboard.press('End');
  for (let i = 0; i < 4; i += 1) await page.keyboard.press('ArrowRight');
  await expect(slider).toHaveValue('100');
  await expect(output).toHaveText('100%');
  await expect(slider).toBeFocused();

  await page.keyboard.press('Home');
  for (let i = 0; i < 3; i += 1) await page.keyboard.press('ArrowLeft');
  await expect(slider).toHaveValue('0');
  await expect(output).toHaveText('0%');
});

test('12.6 tap-only buttons reach the same values without dragging and stop at the limits', async ({
  page,
}) => {
  await page.goto(url('slider-values'));
  const slider = main(page).getByRole('slider', { name: '알림 소리 크기' });
  const button = (name: string) => main(page).getByRole('button', { name, exact: true });

  await button('5 늘리기').click();
  await expect(slider).toHaveValue('30');
  await button('100%로 맞추기').click();
  await expect(slider).toHaveValue('100');
  await expect(button('5 늘리기')).toHaveAttribute('aria-disabled', 'true');
  for (let i = 0; i < 3; i += 1) await press(page, button('5 늘리기'), 'Enter');
  await expect(slider).toHaveValue('100');
  await expect(button('5 늘리기')).toBeFocused();

  await button('5 줄이기').click();
  await expect(slider).toHaveValue('95');
  await button('0%로 맞추기').click();
  await expect(button('5 줄이기')).toHaveAttribute('aria-disabled', 'true');
  await press(page, button('5 줄이기'), 'Enter');
  await expect(slider).toHaveValue('0');
  await expect(observedValue(page, '화면의 output 글자')).toHaveText('0%');
});

test('12.7 typing is not corrected, leaving reports the kind of error, and a valid value recovers', async ({
  page,
  browserName,
}) => {
  await page.goto(url('spinbutton-input'));
  const field = main(page).getByRole('spinbutton', { name: '참가 인원 (필수)' });
  const leave = () => page.keyboard.press(tabKey(browserName));

  await expect(field).toHaveValue('2');
  await field.fill('');
  await expect(field).toBeFocused();
  await expect(field).not.toHaveAttribute('aria-invalid');
  await leave();
  await expect(field).toHaveAttribute('aria-invalid', 'true');
  await expect(field).toHaveAccessibleDescription(/오류: 참가 인원이 비어 있습니다\./);
  await expect(field).toHaveValue('');

  await field.fill('3');
  await leave();
  await expect(field).not.toHaveAttribute('aria-invalid');
  await expect(main(page).getByRole('status')).toHaveText('확정한 참가 인원: 3명');

  await field.focus();
  await field.fill('');
  await field.pressSequentially('1');
  await expect(field).toHaveValue('1');
  await field.pressSequentially('2');
  await expect(field).toHaveValue('12');
  await expect(field).not.toHaveAttribute('aria-invalid');
  await leave();
  await expect(field).toHaveAccessibleDescription(/오류: 참가 인원은 1부터 8 사이여야 합니다\./);
  await expect(field).toHaveValue('12');

  await field.fill('2.5');
  await leave();
  await expect(field).toHaveAccessibleDescription(
    /오류: 참가 인원은 소수 없이 정수로 입력하세요\./,
  );
  await expect(main(page).getByRole('status')).toHaveText('확정한 참가 인원: 3명');
});

test('12.7 stepping buttons recover from empty and out-of-range values and stop at the limits', async ({
  page,
  browserName,
}) => {
  await page.goto(url('spinbutton-input'));
  const field = main(page).getByRole('spinbutton', { name: '참가 인원 (필수)' });
  const increase = main(page).getByRole('button', { name: '참가 인원 1 늘리기', exact: true });
  const decrease = main(page).getByRole('button', { name: '참가 인원 1 줄이기', exact: true });

  await field.fill('');
  await decrease.click();
  await expect(field).toHaveValue('1');
  await expect(field).not.toHaveAttribute('aria-invalid');
  await expect(decrease).toHaveAttribute('aria-disabled', 'true');
  await press(page, decrease, 'Enter');
  await expect(field).toHaveValue('1');

  await field.fill('12');
  await increase.click();
  await expect(field).toHaveValue('8');
  await expect(increase).toHaveAttribute('aria-disabled', 'true');
  for (let i = 0; i < 3; i += 1) await press(page, increase, 'Enter');
  await expect(field).toHaveValue('8');
  await expect(increase).toBeFocused();

  await field.fill('2.5');
  await increase.click();
  await expect(field).toHaveValue('3');

  await field.fill('5');
  await field.press('Home');
  await field.press('End');
  await expect(field).toHaveValue('5');
  await field.press('ArrowUp');
  await expect(field).toHaveValue('6');
  await page.keyboard.press(tabKey(browserName));
  await expect(main(page).getByRole('status')).toHaveText('확정한 참가 인원: 6명');
});

/** 화면 코드와 따로, 주 영역의 실제 너비가 전체에서 차지하는 퍼센트를 잰다. */
const measuredPercent = (separator: Locator) =>
  separator.evaluate(
    "(el) => { const pane = document.getElementById(el.getAttribute('aria-controls')); return (pane.getBoundingClientRect().width / pane.parentElement.getBoundingClientRect().width) * 100; }",
  ) as Promise<number>;

const expectSize = async (separator: Locator, value: number) => {
  await expect(separator).toHaveAttribute('aria-valuenow', String(value));
  await expect
    .poll(async () => Math.abs((await measuredPercent(separator)) - value))
    .toBeLessThan(1.5);
};

test('12.8 arrow keys and buttons give the same size, and the value matches the measured width', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(url('window-splitter'));
  const separator = main(page).getByRole('separator', { name: '안내 목록' });
  const button = (name: string) => main(page).getByRole('button', { name, exact: true });

  await expect(separator).toHaveAttribute('aria-orientation', 'vertical');
  await expect(separator).toHaveAttribute('aria-valuemin', '0');
  await expect(separator).toHaveAttribute('aria-valuemax', '80');
  await expectSize(separator, 40);

  await press(page, separator, 'ArrowRight');
  await page.keyboard.press('ArrowRight');
  await expectSize(separator, 50);
  await expect(separator).toBeFocused();

  await button('안내 목록 5 줄이기').click();
  await button('안내 목록 5 줄이기').click();
  await expectSize(separator, 40);
  await button('안내 목록 5 늘리기').click();
  await button('안내 목록 5 늘리기').click();
  await expectSize(separator, 50);

  await press(page, separator, 'Home');
  await page.keyboard.press('ArrowLeft');
  await expectSize(separator, 20);
  await expect(button('안내 목록 5 줄이기')).toHaveAttribute('aria-disabled', 'true');
  await page.keyboard.press('End');
  await page.keyboard.press('ArrowRight');
  await expectSize(separator, 80);
  await page.keyboard.press('ArrowUp');
  await expectSize(separator, 80);
});

test('12.8 Enter collapses and restores the previous position, repeatedly, and content stays reachable', async ({
  page,
}) => {
  await page.goto(url('window-splitter'));
  const separator = main(page).getByRole('separator', { name: '안내 목록' });
  const list = main(page).getByRole('group', { name: '안내 목록' });
  const collapse = main(page).getByRole('button', { name: '안내 목록 접기', exact: true });

  await press(page, separator, 'ArrowRight');
  for (let i = 0; i < 3; i += 1) {
    await page.keyboard.press('Enter');
    await expectSize(separator, 0);
    await expect(list).toHaveCount(0);
    await expect(collapse).toHaveAttribute('aria-pressed', 'true');
    await expect(main(page).getByRole('group', { name: '안내 내용' })).toBeVisible();
    await page.keyboard.press('Enter');
    await expectSize(separator, 45);
    await expect(list).toBeVisible();
  }
  await expect(separator).toBeFocused();

  await collapse.click();
  await expectSize(separator, 0);
  await press(
    page,
    main(page).getByRole('button', { name: '안내 목록 5 줄이기', exact: true }),
    'Enter',
  );
  await expectSize(separator, 0);
  await main(page).getByRole('button', { name: '안내 목록 5 늘리기', exact: true }).click();
  await expectSize(separator, 45);
  await expect(collapse).toHaveAttribute('aria-pressed', 'false');
});

const carousel = (page: Page, name = '행사 안내') =>
  main(page).getByRole('region', { name, exact: true });

test('12.9 next keeps focus, hidden slides stay out of the Tab order, and the last wraps to the first', async ({
  page,
  browserName,
}) => {
  await page.goto(url('carousel-pattern'));
  const region = carousel(page);
  const next = region.getByRole('button', { name: '다음 안내', exact: true });
  const slide = region.getByRole('group', { name: /번째/ });

  await expect(slide).toHaveCount(1);
  await expect(slide).toHaveAccessibleName('3개 중 1번째: 일정');
  await expect(region.locator('[aria-live]')).toHaveAttribute('aria-live', 'polite');

  await press(page, next, 'Enter');
  await expect(slide).toHaveAccessibleName('3개 중 2번째: 장소');
  await expect(next).toBeFocused();
  await expect(region.locator('[role="group"][hidden] summary')).toHaveCount(2);

  await page.keyboard.press(tabKey(browserName));
  await expect(region.locator('summary:visible')).toBeFocused();
  await page.keyboard.press(tabKey(browserName));
  // 다음 초점은 숨은 안내의 summary가 아니라 캐러셀 밖의 실제 컨트롤이어야 한다.
  expect(
    await page.evaluate(
      "document.activeElement !== document.body && document.activeElement.closest('[aria-roledescription]') === null",
    ),
  ).toBe(true);

  await press(page, next, 'Enter');
  await page.keyboard.press('Space');
  await expect(slide).toHaveAccessibleName('3개 중 1번째: 일정');
  await press(page, region.getByRole('button', { name: '이전 안내', exact: true }), 'Enter');
  await expect(slide).toHaveAccessibleName('3개 중 3번째: 준비물');
});

test('12.9 rotation runs only after it is started, stops when focus moves on, and stays stopped until restarted', async ({
  page,
  browserName,
}) => {
  await page.clock.install();
  await page.goto(url('carousel-pattern'));
  const region = carousel(page);
  const slide = region.getByRole('group', { name: /번째/ });
  const rotation = region.getByRole('button', { name: /^자동 넘김/ });
  const live = region.locator('[aria-live]');

  await page.clock.runFor(9_000);
  await expect(slide).toHaveAccessibleName('3개 중 1번째: 일정');
  await expect(rotation).toHaveText('자동 넘김 시작');
  expect(
    await region.evaluate("(el) => el.querySelector('button').textContent.includes('자동 넘김')"),
  ).toBe(true);

  await press(page, rotation, 'Enter');
  await expect(rotation).toHaveText('자동 넘김 정지');
  await expect(live).toHaveAttribute('aria-live', 'off');
  await page.clock.runFor(4_100);
  await expect(slide).toHaveAccessibleName('3개 중 2번째: 장소');

  await page.keyboard.press(tabKey(browserName));
  await expect(region.getByRole('button', { name: '이전 안내', exact: true })).toBeFocused();
  await expect(rotation).toHaveText('자동 넘김 시작');
  await expect(live).toHaveAttribute('aria-live', 'polite');
  await page.clock.runFor(13_000);
  await expect(slide).toHaveAccessibleName('3개 중 2번째: 장소');

  await press(page, rotation, 'Enter');
  await page.clock.runFor(4_100);
  await expect(slide).toHaveAccessibleName('3개 중 3번째: 준비물');
});

test('12.9 reduced motion offers no rotation, and one or no guide leaves no invalid controls', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url('carousel-pattern'));
  const region = carousel(page);

  await expect(region.getByRole('button', { name: /^자동 넘김/ })).toHaveCount(0);
  await expect(
    region.getByText('모션 줄이기 설정에서는 자동 넘김을 제공하지 않습니다.'),
  ).toBeVisible();
  await expect(region.getByRole('button', { name: '다음 안내', exact: true })).toBeVisible();

  const count = main(page).getByRole('group', { name: '안내의 개수' });
  await count.getByRole('radio', { name: '한 개' }).check();
  await expect(region.getByRole('button')).toHaveCount(0);
  await expect(region.getByRole('group', { name: /번째/ })).toHaveAccessibleName(
    '1개 중 1번째: 일정',
  );

  await count.getByRole('radio', { name: '없음' }).check();
  await expect(region.getByText('표시할 안내가 없습니다.')).toBeVisible();
  await expect(region.getByRole('group', { name: /번째/ })).toHaveCount(0);
  await expect(region.getByRole('button')).toHaveCount(0);
});

test('12.9 final task: choose guides, open the details, move to the next guide, then reduce to one and none', async ({
  page,
}) => {
  await page.goto(url('carousel-pattern'));
  const choices = main(page).getByRole('group', { name: '표시할 안내' });
  const region = carousel(page, '고른 행사 안내');
  const slide = region.getByRole('group', { name: /번째/ });
  const next = region.getByRole('button', { name: '다음 안내', exact: true });

  await expect(choices.getByRole('checkbox', { checked: true })).toHaveCount(2);
  await expect(slide).toHaveAccessibleName('2개 중 1번째: 일정');
  await expect(region.getByRole('button', { name: /^자동 넘김/ })).toHaveCount(0);
  await expect(main(page).getByRole('tablist')).toHaveCount(0);

  await press(page, choices.getByRole('checkbox', { name: '준비물' }), 'Space');
  await expect(slide).toHaveAccessibleName('3개 중 1번째: 일정');

  const detail = region.getByText('1회차 10:00, 2회차 13:00, 3회차 15:30입니다.', { exact: false });
  await expect(detail).toBeHidden();
  await press(page, region.locator('summary:visible'), 'Enter');
  await expect(detail).toBeVisible();

  await press(page, next, 'Enter');
  await expect(slide).toHaveAccessibleName('3개 중 2번째: 장소');
  await expect(next).toBeFocused();
  await expect(detail).toBeHidden();

  await choices.getByRole('checkbox', { name: '장소' }).uncheck();
  await choices.getByRole('checkbox', { name: '준비물' }).uncheck();
  await expect(slide).toHaveAccessibleName('1개 중 1번째: 일정');
  await expect(region.getByRole('button')).toHaveCount(0);
  await expect(detail).toBeVisible();

  await choices.getByRole('checkbox', { name: '일정' }).uncheck();
  await expect(region.getByText('표시할 안내가 없습니다.')).toBeVisible();
});

test('12.9 the record form asks for one rejected pattern and four fields per adopted element', async ({
  page,
}) => {
  await page.goto(url('carousel-pattern'));
  await expect(
    main(page).getByRole('textbox', { name: '채택하지 않은 패턴 하나와 맞지 않는 이유' }),
  ).toBeVisible();

  const group = main(page).getByRole('group', { name: '이전 · 다음 (수동 캐러셀)' });
  await expect(group.getByRole('textbox')).toHaveCount(4);
  await expect(
    group.getByRole('textbox', {
      name: '이전 · 다음 (수동 캐러셀) — 실제 관찰과 남은 보조기술 검증',
    }),
  ).toBeVisible();
  await group.getByText('모범 기록 보기 — 이전 · 다음 (수동 캐러셀)').click();
  await expect(
    group.getByRole('table', { name: '모범 기록 (교육 예시) — 이전 · 다음 (수동 캐러셀)' }),
  ).toContainText('마지막에서 다음은 처음으로');
});
