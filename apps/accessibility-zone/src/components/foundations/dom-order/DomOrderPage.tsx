import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { CssReorderSection } from './sections/CssReorderSection';
import { NarrowSection } from './sections/NarrowSection';
import { PageHeader } from './sections/PageHeader';
import { ThreeOrdersSection } from './sections/ThreeOrdersSection';
import { getToc } from './toc';

const points = {
  ko: [
    'DOM 순서는 HTML이, 화면 순서는 CSS가 정하고, 포커스 순서는 DOM 순서를 따릅니다. 화면 낭독기의 읽기 순서도 대개 DOM을 따르지만 제품마다 확인이 필요합니다.',
    'order · row-reverse · grid 배치 · position은 화면만 바꿉니다. 순서는 DOM으로 정하고 양수 tabindex로 고치지 않습니다.',
    '순서를 일치시키는 것과 과업에 맞는 순서를 고르는 것은 따로 판단합니다.',
    '좁은 화면과 400% 확대에서도 과업을 Tab으로 끝까지 진행해 순서를 확인합니다.',
  ],
  en: [
    'HTML sets the DOM order, CSS sets the visual order, and focus follows the DOM order. Screen reader reading order usually follows the DOM too, but check each product.',
    'order, row-reverse, grid placement, and position change only the screen. Set order in the DOM, not with a positive tabindex.',
    'Making orders match and choosing the order the task needs are separate decisions.',
    'Also complete the task with Tab at narrow widths and 400% zoom to check the order.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html',
    source: same('W3C WAI'),
    title: same('Understanding SC 1.3.2: Meaningful Sequence'),
    note: {
      ko: '뜻이 있는 순서를 기계가 읽을 수 있게',
      en: 'Making meaningful sequence programmatic',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html',
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.3: Focus Order'),
    note: {
      ko: '뜻과 조작이 유지되는 포커스 순서',
      en: 'Focus order that preserves meaning and operability',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html',
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.10: Reflow'),
    note: { ko: '320 CSS 픽셀 폭과 400% 확대', en: '320 CSS pixel width and 400% zoom' },
  },
  {
    href: 'https://drafts.csswg.org/css-display-4/#reading-flow',
    source: same('CSS WG'),
    title: same('CSS Display Level 4 — reading-flow'),
    note: {
      ko: '화면 순서를 따르는 포커스 이동 — 작성 중인 명세',
      en: 'Focus that follows visual order — editor’s draft',
    },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex',
    source: same('MDN'),
    title: same('tabindex'),
    note: { ko: '0 · -1 · 양수의 차이', en: 'The difference between 0, -1, and positive values' },
  },
];

export const DomOrderPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ThreeOrdersSection locale={locale} />
      <CssReorderSection locale={locale} />
      <NarrowSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="events-and-state" />
    </DocLayout>
  );
};
