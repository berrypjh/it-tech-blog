import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    means: 'three-means',
    scope: 'status-message-scope',
    practice: 'choose-means-practice',
    focus: 'focus-or-notice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      means: '화면 갱신 · 상태 메시지 · 맥락 전환',
      scope: '모든 DOM 변경이 4.1.3의 대상은 아니다',
      practice: '세 장면에 맞는 수단 고르기',
      focus: '삭제 후 포커스 복구와 배경 갱신 알림 구별',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      means: 'Screen update, status message, change of context',
      scope: 'Not every DOM change falls under 4.1.3',
      practice: 'Choosing the means for three scenes',
      focus: 'Focus recovery after deletion versus a background update notice',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
