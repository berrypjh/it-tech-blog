import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12, htmlAria, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { AxesSection } from './sections/AxesSection';
import { FocusableSection } from './sections/FocusableSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    'hidden · display: none · visibility: hidden은 화면 · 포커스와 조작 · 접근성 노출에서 모두 숨기고, visibility: hidden만 자리를 남깁니다.',
    'aria-hidden="true"는 접근성 노출만 뺍니다. 화면 표시와 포커스는 그대로이므로, 그 아래에 포커스 가능한 요소를 두지 않습니다.',
    'inert는 포커스 · 클릭 · 노출을 함께 막지만 화면은 그대로 둡니다. 화면에서도 가려진 콘텐츠에만 씁니다.',
    'DOM · 계산된 스타일 · 키보드로 관찰한 값, 브라우저 도구의 트리, 명세상 예상은 서로 다른 칸에 적습니다.',
  ],
  en: [
    'hidden, display: none, and visibility: hidden hide from display, focus and interaction, and exposure; only visibility: hidden keeps the space.',
    'aria-hidden="true" removes exposure only. Display and focus stay, so do not put focusable content under it.',
    'inert blocks focus, clicks, and exposure together but leaves the screen as is. Use it only on content that is also visually obscured.',
    'Record values observed in the DOM, computed style, and keyboard, the tree in browser tools, and the exposure the specs expect in separate columns.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('interaction', 'the-hidden-attribute'),
    source: same('WHATWG'),
    title: same('HTML Standard — 6.1 The hidden attribute'),
    note: { ko: 'hidden 속성의 상태와 뜻 (규범)', en: 'States and meaning of hidden (normative)' },
  },
  {
    href: whatwg('interaction', 'inert-subtrees'),
    source: same('WHATWG'),
    title: same('HTML Standard — 6.3 Inert subtrees'),
    note: {
      ko: 'inert가 막는 것과 작성자 안내 (2026-11-06 갱신본)',
      en: 'What inert blocks, with author guidance (updated 2026-11-06)',
    },
  },
  {
    href: aria12('aria-hidden'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-hidden'),
    note: {
      ko: '숨겨진 것으로 보는 조건 (W3C Recommendation, 2023-06-06)',
      en: 'When an element is considered hidden (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: htmlAria('att-hidden'),
    source: same('W3C'),
    title: same('ARIA in HTML — aria-hidden and the hidden attribute'),
    note: {
      ko: '포커스 가능한 요소 · body에 aria-hidden을 쓰지 않는 규칙 (2026-08-11)',
      en: 'The rule against aria-hidden on focusable elements and body (2026-08-11)',
    },
  },
];

export const HidingAndInertPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <AxesSection locale={locale} />
      <FocusableSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="disabled-and-required" />
    </DocLayout>
  );
};
