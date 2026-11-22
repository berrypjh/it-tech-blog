import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    kinds: 'two-kinds-of-server-error',
    current: 'only-the-current-submission',
    practice: 'server-response-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      kinds: '필드 오류와 서비스 오류는 복구 경로가 다르다',
      current: '현재 제출만 오류 · busy · 알림을 바꾼다',
      practice: '응답의 종류와 순서를 정해 복구하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      kinds: 'Field errors and service errors recover differently',
      current: 'Only the current submission changes errors, busy, and announcements',
      practice: 'Recovering by choosing the kind and order of responses',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
