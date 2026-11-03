import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '02장 · 7 / 7',
    title: '개발자 도구로 동작을 추적하고 기본 HTML 기능 보존하기',
    lead: (
      <>
        &quot;버튼을 눌렀더니 주문이 됐다&quot;는 증상에서 원인을 찾으려면 추측이 아니라 관찰이
        필요합니다. 이 페이지는 앞의 여섯 페이지에서 배운 것을 묶어, 준비된 결함을{' '}
        <strong className="text-text-default">재현 → 가설 → 확인 → 수정 → 재검증</strong> 순서로
        고치고, 고칠 때 HTML이 기본으로 주던 기능을 지킵니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '개발자 도구로 요소 · 속성 · 접근성 정보 · 이벤트 리스너 · 현재 포커스 보기',
      '사이트 안 관찰 · 개발자 도구 · 실제 보조기술이 증명하는 범위 구분하기',
      '최소 재현에서 키보드 재검증까지 순서대로 결함 고치기',
      '화면 낭독기로 따로 확인할 지점 정리하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 02 · 7 of 7',
    title: 'Tracing behavior with developer tools and preserving built-in HTML features',
    lead: (
      <>
        Finding the cause of a symptom like &quot;I pressed a button and it placed an order&quot;
        takes observation, not guessing. This page ties together the previous six pages: it fixes
        prepared defects in the order{' '}
        <strong className="text-text-default">
          reproduce → hypothesize → check → fix → re-check
        </strong>
        , keeping the features HTML gave for free.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Viewing elements, attributes, accessibility information, event listeners, and current focus in developer tools',
      'What in-page observation, developer tools, and real assistive technology each prove',
      'The order for fixing a defect, from minimal reproduction to keyboard re-check',
      'Points that need a separate check with a screen reader',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
