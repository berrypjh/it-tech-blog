import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { APG_KEYBOARD } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { OwnersSection } from './sections/OwnersSection';
import { PageHeader } from './sections/PageHeader';
import { PitfallsSection } from './sections/PitfallsSection';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '링크 · 버튼 · 입력 칸은 키 동작을 이미 갖고 있습니다. 네이티브 버튼에 Enter · Space 처리를 또 붙이지 않습니다.',
    '직접 만든 위젯은 자기에게 포커스가 있을 때, 자기가 정의한 키만 처리하고 그 키의 기본 동작만 막습니다.',
    '방향키 · Space를 문서 전체에서 가로채면 입력 커서 이동과 스크롤, 글자 입력이 함께 망가집니다.',
    '조합 입력과 수정 키 조합은 처리에서 빼고, 이벤트 순서는 실행한 환경의 관찰로만 말합니다.',
  ],
  en: [
    'Links, buttons, and text fields already have key behavior. Do not add Enter and Space handling to a native button.',
    'A custom widget handles only the keys it defines, only while it has focus, and blocks only those keys’ defaults.',
    'Intercepting arrows and Space across the document breaks caret movement, scrolling, and typing together.',
    'Leave composition and modifier combinations alone, and describe event order only as observed in the environment you ran.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('keyboard'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.1.1 Keyboard'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('keyboard'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.1.1: Keyboard'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
  {
    href: APG_KEYBOARD,
    source: same('W3C WAI'),
    title: same('ARIA APG — Developing a Keyboard Interface'),
    note: { ko: '위젯 키 관례 (권장 지침)', en: 'Widget key conventions (recommended guidance)' },
  },
  {
    href: 'https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/',
    source: same('W3C WAI'),
    title: same('ARIA APG — Spinbutton Pattern'),
    note: {
      ko: '실습 위젯의 키 (권장 패턴)',
      en: 'Keys of the exercise widget (recommended pattern)',
    },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/isComposing',
    source: same('MDN'),
    title: same('KeyboardEvent: isComposing'),
    note: { ko: '조합 입력 중인지 확인', en: 'Checking for an active composition' },
  },
];

export const KeysAndDefaultsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <OwnersSection locale={locale} />
      <PitfallsSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="focus-visibility" />
    </DocLayout>
  );
};
