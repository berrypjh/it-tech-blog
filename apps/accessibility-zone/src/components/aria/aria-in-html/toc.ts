import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    rows: 'element-rows',
    cases: 'redundant-override-complement',
    allowed: 'allowed-is-not-proof',
    presentation: 'presentation-conflicts',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      rows: 'ARIA in HTML의 요소 행 읽기',
      cases: '중복 선언 · 부적절한 덮어쓰기 · 필요한 보완',
      allowed: '허용된 선언은 동작이나 지원의 증명이 아니다',
      presentation: 'presentation · none과 충돌 규칙',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      rows: 'Reading an element row in ARIA in HTML',
      cases: 'Redundant declarations, inappropriate overrides, and needed additions',
      allowed: 'An allowed declaration does not prove behavior or support',
      presentation: 'presentation, none, and the conflict rules',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
