import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '05장 · 1 / 6',
    title: '네이티브 HTML을 우선하고 ARIA가 필요한 경우 판단하기',
    lead: (
      <>
        ARIA는 보조기술에 전달되는 의미를 더하거나 바꾸지만, 브라우저의 동작은 더하지 않습니다.
        그래서 먼저 HTML 요소가 의미와 동작을 함께 주는지 보고,{' '}
        <strong className="text-text-default">남는 의미가 있을 때만</strong> ARIA를 고릅니다. 이
        장은 HTML의 의미를 지키면서 필요한 ARIA만 더하는 방법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    learnItems: [
      '링크 · 버튼 · 체크박스가 기본으로 주는 의미와 입력 동작',
      'role 선언이 바꾸는 것과 바꾸지 않는 것',
      '네이티브로 충족되는 요구와 ARIA로 보완할 의미가 남는 요구 구분하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 05 · 1 of 6',
    title: 'Preferring native HTML and judging when ARIA is needed',
    lead: (
      <>
        ARIA adds to or changes the meaning passed to assistive technology, but it adds no browser
        behavior. So first check whether an HTML element gives both meaning and behavior, and reach
        for ARIA <strong className="text-text-default">only when some meaning remains</strong>. This
        chapter is about keeping HTML&apos;s meaning while adding only the ARIA you need.
      </>
    ),
    readingTime: 'About 10 min read',
    learnItems: [
      'The meaning and input behavior that links, buttons, and checkboxes give by default',
      'What a role declaration changes and what it does not',
      'Telling needs met natively apart from needs where meaning remains for ARIA to fill',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
