import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '11장 · 5 / 7',
    title: '다단계 폼 · 조건부 필드 · 반복 입력을 설계하기',
    lead: (
      <>
        이전 단계로 돌아갔더니 값이 비어 있거나, 보이지도 않는 칸 때문에 제출이 멈추면 사용자는
        이유를 알 수 없습니다. 이 페이지는 두 단계 신청에서{' '}
        <strong className="text-text-default">단계 이동 · 조건부 필드 · 반복 입력</strong>의 정책을
        하나씩 정합니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '뒤로 · 다음에서 값을 유지하고 초점을 단계 제목으로 옮기기',
      '조건부 필드의 노출 · 값 유지 · 검증 · 제출 정책을 서로 맞추기',
      '다시 입력시키지 않을 정보와 3.3.7의 예외 나누기',
    ],
  },
  en: {
    eyebrow: 'Chapter 11 · 5 of 7',
    title: 'Designing multi-step forms, conditional fields, and repeated entry',
    lead: (
      <>
        If going back shows empty values, or a field that is not even visible stops the submission,
        the user cannot tell why. This page sets the policy for{' '}
        <strong className="text-text-default">
          step movement, conditional fields, and repeated entry
        </strong>{' '}
        one by one in a two-step application.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Keeping values on back and next, and moving focus to the step heading',
      'Aligning the visibility, value retention, validation, and submission policy of conditional fields',
      'Separating information not to ask again from the exceptions of 3.3.7',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
