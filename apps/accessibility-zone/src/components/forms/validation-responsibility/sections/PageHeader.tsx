import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '11장 · 2 / 7',
    title: '네이티브 검증과 사용자 정의 검증의 책임 나누기',
    lead: (
      <>
        보내기를 눌렀는데 아무 일도 일어나지 않으면, 사용자는 무엇이 제출을 멈췄는지부터 찾아야
        합니다. 이 페이지는 같은 잘못된 값을{' '}
        <strong className="text-text-default">브라우저 기본 제약</strong>과{' '}
        <strong className="text-text-default">사용자 정의 검증</strong>으로 각각 검사해, 누가 멈추고
        오류가 어디에 남는지 비교합니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '브라우저 기본 제약이 제출을 멈출 때 일어나는 일 읽기',
      '사용자 정의 검증에서 기본 오류와 겹치지 않게 하고 이전 오류 지우기',
      '클라이언트 검증과 서버 검증의 책임 나누기',
    ],
  },
  en: {
    eyebrow: 'Chapter 11 · 2 of 7',
    title: 'Dividing responsibility between native and custom validation',
    lead: (
      <>
        If pressing send does nothing, the user first has to find out what stopped the submission.
        This page checks the same wrong value with the{' '}
        <strong className="text-text-default">browser’s built-in constraints</strong> and with{' '}
        <strong className="text-text-default">custom validation</strong>, and compares who stops it
        and where the error remains.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Reading what happens when built-in constraints stop a submission',
      'Avoiding overlap with the built-in error and clearing the previous error in custom validation',
      'Dividing responsibility between client-side and server-side validation',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
