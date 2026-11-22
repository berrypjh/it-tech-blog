import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    flow: 'state-transitions',
    progress: 'progress-without-numbers',
    practice: 'search-practice',
    toast: 'toast-and-persistence',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      flow: '초기 → 대기 → 성공 · 빈 결과 · 오류 → 재시도',
      progress: '잴 수 없으면 숫자 없는 진행 표시',
      practice: '교육용 검색으로 상태 전이 따라가기',
      toast: 'Toast가 사라져도 결과와 조작이 남게',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      flow: 'Initial → waiting → success, empty, or error → retry',
      progress: 'Progress without numbers when nothing can be measured',
      practice: 'Following the state transitions in a teaching search',
      toast: 'Results and actions that outlive the toast',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
