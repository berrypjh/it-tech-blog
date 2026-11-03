import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '02장 · 5 / 7',
    title: 'DOM 순서와 화면 배치가 읽기·조작 순서에 미치는 영향',
    lead: (
      <>
        CSS는 요소를 화면 어디에든 놓을 수 있지만, Tab 키와 화면 낭독기는 대개{' '}
        <strong className="text-text-default">DOM에 적힌 순서</strong>를 따릅니다. 이 페이지는 두
        순서가 어긋날 때 무슨 일이 생기는지 실제 Tab 이동으로 확인하고, 어떤 순서로 맞출지 정합니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 2개',
    learnItems: [
      'DOM 순서 · 화면 순서 · 포커스 순서를 정하는 것 구분하기',
      'order · flex-direction · grid 배치가 화면만 바꾼다는 것 확인하기',
      '좁은 화면과 확대에서 과업 순서 확인하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 02 · 5 of 7',
    title: 'How DOM order and visual layout affect reading and operating order',
    lead: (
      <>
        CSS can place elements anywhere on screen, but the Tab key and screen readers usually follow{' '}
        <strong className="text-text-default">the order written in the DOM</strong>. This page
        checks with real Tab movement what happens when the two disagree, and decides which order to
        match.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'What determines DOM order, visual order, and focus order',
      'order, flex-direction, and grid placement change the screen but not the DOM',
      'How to check the task order at narrow widths and under zoom',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
