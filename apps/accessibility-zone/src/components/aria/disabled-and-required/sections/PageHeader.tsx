import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '05장 · 5 / 6',
    title: 'disabled · aria-disabled · readonly · required의 의미와 동작',
    lead: (
      <>
        네이티브 속성은 의미와 동작을 함께 바꾸고, ARIA 속성은 의미만 바꿉니다. 이 페이지는 폼
        컨트롤에서{' '}
        <strong className="text-text-default">
          편집 · 포커스 · 활성화 · 제출 데이터 · 기본 유효성 검사
        </strong>
        가 속성마다 어떻게 달라지는지 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'disabled · readonly · required가 적용되는 요소와 바꾸는 동작',
      'aria-disabled가 클릭 · 제출을 막지 않는다는 것과 실행 경로를 확인하는 방법',
      'aria-required의 의미 전달과 네이티브 필수 검증의 차이',
    ],
  },
  en: {
    eyebrow: 'Chapter 05 · 5 of 6',
    title: 'The meaning and behavior of disabled, aria-disabled, readonly, and required',
    lead: (
      <>
        Native attributes change meaning and behavior together; ARIA attributes change only meaning.
        This page checks how{' '}
        <strong className="text-text-default">
          editing, focus, activation, submitted data, and built-in validation
        </strong>{' '}
        differ for each attribute on form controls.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Which elements disabled, readonly, and required apply to, and the behavior they change',
      'That aria-disabled blocks neither clicks nor submission, and how to check the execution path',
      'How aria-required conveying meaning differs from native required validation',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
