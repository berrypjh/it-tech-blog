import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    hidden: 'hidden-references',
    empty: 'empty-values',
    practice: 'edge-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      hidden: '직접 참조된 숨김 대상과 탐색 중 만나는 숨김 자손',
      empty: '네 가지 "비어 있음"은 같은 대체 경로가 아니다',
      practice: '경계 사례를 판본 · 엔진과 함께 기록하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      hidden: 'Hidden targets referenced directly, and hidden descendants met on the way',
      empty: 'Four kinds of "empty" are not the same fallback',
      practice: 'Recording edge cases with the edition and engine',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
