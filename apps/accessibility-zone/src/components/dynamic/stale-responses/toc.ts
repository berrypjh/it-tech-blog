import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    identity: 'request-identity',
    practice: 'race-practice',
    compare: 'before-after-comparison',
    abort: 'abort-is-not-enough',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      identity: '활성 요청만 결과 · 알림 · busy를 바꾼다',
      practice: '응답 순서를 직접 정해 경쟁 상태 재현하기',
      compare: '수정 전후 비교 (정적)',
      abort: 'AbortController만으로는 끝나지 않는다',
      task: '최종 과업: 두 경쟁 상황의 재현 기록',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      identity: 'Only the active request changes results, announcements, and busy',
      practice: 'Reproducing races by setting the response order yourself',
      compare: 'Before and after (static)',
      abort: 'AbortController alone does not settle it',
      task: 'Final task: reproduction records for two races',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
