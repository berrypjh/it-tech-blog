import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const same = (text: string) => ({ ko: text, en: text });

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/test-evaluate/',
    source: same('W3C WAI'),
    title: same('Evaluating Web Accessibility Overview'),
    note: {
      ko: '도구와 사람의 평가를 함께 쓰는 접근성 평가의 개요',
      en: 'Overview of accessibility evaluation combining tools and human judgment',
    },
  },
  {
    href: 'https://www.w3.org/WAI/test-evaluate/involving-users/',
    source: same('W3C WAI'),
    title: same('Involving Users in Evaluating Web Accessibility'),
    note: {
      ko: '장애가 있는 사용자와 함께 장벽을 확인하는 방법',
      en: 'Checking barriers together with disabled users',
    },
  },
  {
    href: 'https://www.w3.org/TR/WCAG22/',
    source: same('W3C'),
    title: same('Web Content Accessibility Guidelines (WCAG) 2.2'),
    note: {
      ko: '기록에 덧붙이는 성공 기준 번호의 원문 (W3C Recommendation, 2024년 12월 12일 갱신본)',
      en: 'Source for success criterion numbers added to records (W3C Recommendation, updated 12 December 2024)',
    },
  },
  {
    href: 'https://developer.chrome.com/docs/devtools/accessibility/reference',
    source: same('Chrome'),
    title: same('Accessibility features reference (DevTools)'),
    note: {
      ko: '요소의 이름 · 역할을 Accessibility 탭에서 확인',
      en: 'Checking an element’s name and role in the Accessibility pane',
    },
  },
  {
    href: 'https://support.apple.com/guide/safari/keyboard-and-other-shortcuts-cpsh003/mac',
    source: same('Apple'),
    title: same('Keyboard shortcuts and gestures in Safari on Mac'),
    note: {
      ko: 'Safari에서 Tab이 버튼까지 이동하는 조건(키보드 탐색 설정)',
      en: 'When Tab in Safari moves to buttons (the Keyboard navigation setting)',
    },
  },
];

export const ReferencesSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.references.id}>
      <DocH2 {...toc.references} />
      <ReferenceList references={references} locale={locale} />
    </section>
  );
};
