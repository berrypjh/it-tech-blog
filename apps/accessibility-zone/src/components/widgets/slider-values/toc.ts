import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    parts: 'slider-parts',
    alternatives: 'without-dragging',
    practice: 'slider-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      parts: '이름 · 범위 · 현재 값과 단위를 보여 준다',
      alternatives: '끌지 않고 같은 값에 닿는 길을 둔다',
      practice: '세 가지 길로 같은 값에 닿기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      parts: 'Show the name, range, current value, and unit',
      alternatives: 'Provide a way to the same value without dragging',
      practice: 'Reaching the same value three ways',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
