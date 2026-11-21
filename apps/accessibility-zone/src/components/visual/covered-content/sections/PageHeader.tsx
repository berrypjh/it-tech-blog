import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '08장 · 6 / 7',
    title: '고정 영역 · 스크롤 · 가상 키보드가 내용을 가리는 문제 해결하기',
    lead: (
      <>
        좁은 화면에서는 고정 헤더와 하단 버튼, 키보드가 입력 칸이 쓸 자리를 차지합니다. 이 페이지는{' '}
        <strong className="text-text-default">같은 폼에서 가림을 재고</strong> 수정안을 비교한 뒤,
        실제 기기에서 확인할 항목을 나눕니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '고정 영역과 내부 스크롤이 입력 · 포커스를 가리는 경우',
      'sticky 범위 · scroll-padding · scroll-margin 수정안 비교',
      '가상 키보드의 교육용 모형과 실제 기기 확인 구분',
    ],
  },
  en: {
    eyebrow: 'Chapter 08 · 6 of 7',
    title: 'Fixing content hidden by fixed areas, scrolling, and virtual keyboards',
    lead: (
      <>
        On narrow screens, fixed headers, bottom buttons, and keyboards take the room inputs need.
        This page <strong className="text-text-default">measures covering in one form</strong>,
        compares fixes, and separates what must be checked on real devices.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'When fixed areas and inner scrolling hide inputs and focus',
      'Comparing sticky scope, scroll-padding, and scroll-margin',
      'Separating a teaching model of a virtual keyboard from real device checks',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
