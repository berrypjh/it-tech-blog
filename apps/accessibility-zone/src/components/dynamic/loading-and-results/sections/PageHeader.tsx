import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '10장 · 4 / 5',
    title: '로딩 · 진행률 · 검색 결과 · 빈 상태 · Toast를 지속적으로 확인하게 만들기',
    lead: (
      <>
        알림은 한 번 지나가지만, 사용자는 결과를 다시 보러 옵니다. 이 페이지는 교육용 로컬 검색으로{' '}
        <strong className="text-text-default">대기 · 성공 · 빈 결과 · 오류 · 재시도</strong>를
        만들고, 알림과 별개로 화면에 남는 요약과 복구 조작을 둡니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '검색의 상태 전이와 상태마다 결과 영역 · 알림 · busy 정하기',
      '잴 수 없는 작업의 숫자 없는 진행 표시',
      '사라지는 Toast 대신 남는 요약 · 최근 검색 · 다시 시도',
    ],
  },
  en: {
    eyebrow: 'Chapter 10 · 4 of 5',
    title: 'Making loading, progress, search results, empty states, and toasts checkable over time',
    lead: (
      <>
        An announcement passes once, but users come back to look at results. This page builds{' '}
        <strong className="text-text-default">waiting, success, empty, error, and retry</strong>{' '}
        with a teaching search, and keeps a summary and recovery actions on screen apart from the
        announcement.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Search state transitions, and the results area, announcement, and busy for each state',
      'Progress without numbers for work that cannot be measured',
      'A lasting summary, recent searches, and retry instead of a disappearing toast',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
