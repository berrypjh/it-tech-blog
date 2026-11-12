import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '05장 · 4 / 6',
    title: 'hidden · display · visibility · aria-hidden · inert의 차이',
    lead: (
      <>
        다섯 방법은 모두 &quot;숨긴다&quot;고 불리지만 숨기는 대상이 다릅니다. 어떤 것은 화면에서,
        어떤 것은 보조기술에게서, 어떤 것은 조작에서 숨깁니다. 이 페이지는{' '}
        <strong className="text-text-default">화면 표시 · 포커스와 조작 · 접근성 노출</strong>의 세
        축으로 다섯 방법을 나눠 봅니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '다섯 방법을 화면 표시 · 포커스와 조작 · 접근성 노출의 세 축으로 비교하기',
      'aria-hidden이 화면과 포커스를 막지 않는다는 것',
      'aria-hidden 아래에 포커스 가능한 요소를 두는 오류와 고치는 방법',
      'DOM · 계산된 스타일 · 키보드로 관찰한 것과 명세상 예상 노출을 나눠 적기',
    ],
  },
  en: {
    eyebrow: 'Chapter 05 · 4 of 6',
    title: 'How hidden, display, visibility, aria-hidden, and inert differ',
    lead: (
      <>
        All five are called &quot;hiding,&quot; but they hide from different things. Some hide from
        the screen, some from assistive technology, some from interaction. This page separates the
        five on three axes:{' '}
        <strong className="text-text-default">display, focus and interaction, and exposure</strong>.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Comparing the five methods on display, focus and interaction, and exposure',
      'That aria-hidden blocks neither the screen nor focus',
      'The error of focusable content under aria-hidden, and how to fix it',
      'Recording what you observed in the DOM, computed style, and keyboard separately from the exposure the specs expect',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
