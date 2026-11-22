import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 9 / 10',
    title: '명확한 문장 · 예측 가능한 흐름 · 일관된 도움 정보 제공하기',
    lead: (
      <>
        안내문을 끝까지 읽고도 무엇을 언제까지 해야 하는지 모른다면, 과업은 시작도 못 합니다. 이
        페이지는 같은 참가 신청 안내를{' '}
        <strong className="text-text-default">무엇을 · 언제 · 어디에서</strong>가 드러나게 고치고,
        규범과 권고를 나눕니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '안내문을 고치기 전후로 같은 과업 비교하기',
      '언어 표시(3.1.1 · 3.1.2)와 일관된 도움(3.2.6)의 조건',
      '쉬운 말 · 기억 부담 줄이기라는 COGA 권고와 그 지위',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 9 of 10',
    title: 'Providing clear sentences, predictable flow, and consistent help',
    lead: (
      <>
        If you read a notice to the end and still do not know what to do by when, the task never
        starts. This page rewrites one registration notice so{' '}
        <strong className="text-text-default">what, when, and where</strong> stand out, and keeps
        normative requirements apart from advice.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Comparing the same task before and after rewriting a notice',
      'The conditions of language markup (3.1.1, 3.1.2) and consistent help (3.2.6)',
      'COGA advice on plain words and less memory load, and its status',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
