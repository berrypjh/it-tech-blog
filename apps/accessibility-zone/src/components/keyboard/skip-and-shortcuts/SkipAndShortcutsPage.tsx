import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { APG_KEYBOARD, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { ShortcutsSection } from './sections/ShortcutsSection';
import { SkipSection } from './sections/SkipSection';
import { getToc } from './toc';

const points = {
  ko: [
    '2.4.1은 여러 페이지에 반복되는 블록을 건너뛸 수단을 요구합니다. 건너뛰기 링크는 그 수단 중 하나입니다.',
    '건너뛰기 링크는 보이는 시점, 화면 이동, 다음 Tab의 위치를 따로 확인합니다.',
    '글자 · 숫자 · 기호만 쓰는 단축키는 끄기, 수정 키를 포함한 재지정, 포커스 범위 중 하나를 충족해야 합니다.',
    '단축키 예제는 실습 상자 안에서만 동작합니다. 공통 셸의 문제는 재현과 영향을 적어 별도 변경으로 판단합니다.',
  ],
  en: [
    '2.4.1 requires a way to bypass blocks repeated across pages. A skip link is one such way.',
    'Check separately when a skip link appears, how the view moves, and where the next Tab goes.',
    'A shortcut using only letters, numbers, or symbols must meet one of: turn off, remap to include a non-printable key, or active only on focus.',
    'The shortcut example works only inside its exercise box. Shell issues are recorded with reproduction and impact, and judged as a separate change.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('bypass-blocks'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.1 Bypass Blocks'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('bypass-blocks'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.1: Bypass Blocks'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
  {
    href: wcag22('character-key-shortcuts'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.1.4 Character Key Shortcuts'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('character-key-shortcuts'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.1.4: Character Key Shortcuts'),
    note: { ko: '음성 입력과 오작동 (보충 자료)', en: 'Speech input and accidental activation' },
  },
  {
    href: whatwg('interaction', 'sequential-focus-navigation-starting-point'),
    source: same('WHATWG'),
    title: same('HTML Standard — Sequential focus navigation starting point'),
    note: { ko: '조각 이동과 다음 Tab', en: 'Fragment navigation and the next Tab' },
  },
  {
    href: `${APG_KEYBOARD}#keyboardshortcuts`,
    source: same('W3C WAI'),
    title: same('ARIA APG — Keyboard Shortcuts'),
    note: { ko: '키 충돌 지침 (권장)', en: 'Key conflict guidance (recommended)' },
  },
];

export const SkipAndShortcutsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <SkipSection locale={locale} />
      <ShortcutsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="keyboard-path-check" />
    </DocLayout>
  );
};
