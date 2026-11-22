import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '11장 · 7 / 7',
    title: '시간제한 · 세션 만료 · 재인증과 중요한 작업의 오류 예방하기',
    lead: (
      <>
        천천히 입력하던 사용자가 보내기를 눌렀는데 세션이 끝났다며 빈 폼으로 돌아가면, 쓴 내용이
        모두 사라집니다. 이 장의 마지막 페이지는{' '}
        <strong className="text-text-default">연장 · 재인증 · 취소</strong>에서 초안을 지키고, 검토
        화면에서 값을 고친 뒤 한 번만 확정하는 흐름을 완성합니다.
      </>
    ),
    readingTime: '읽는 시간 약 16분',
    practices: '브라우저 실습 2개',
    learnItems: [
      '시간제한의 조절 수단과 예외, 재인증 뒤의 데이터 보존 나누기',
      '오류 예방이 요구되는 범위와 예제의 제품 결정 구분하기',
      '오류 · 서버 실패 · 응답 역전 · 만료를 지나 한 번 확정하고 전후 기록 남기기',
    ],
  },
  en: {
    eyebrow: 'Chapter 11 · 7 of 7',
    title:
      'Handling time limits, session expiry, re-authentication, and error prevention for important actions',
    lead: (
      <>
        If a user who types slowly presses send and is returned to an empty form because the session
        ended, everything written is gone. This last page of the chapter keeps the draft through{' '}
        <strong className="text-text-default">extend, re-authenticate, and cancel</strong>, and
        completes a flow that corrects values on a review screen and confirms only once.
      </>
    ),
    readingTime: 'About 16 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'Separating the ways to adjust a time limit and their exceptions from data preservation after re-authentication',
      'Telling where error prevention is required from this example’s product decision',
      'Passing errors, a server failure, a response reversal, and expiry to confirm once and leave before-and-after records',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
