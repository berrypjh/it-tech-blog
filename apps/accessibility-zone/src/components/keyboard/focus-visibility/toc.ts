import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    criteria: 'focus-criteria',
    appearance: 'focus-indicator-check',
    obscured: 'focus-obscured-check',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      criteria: '이름이 비슷한 다섯 기준 나누기',
      appearance: '포커스 표시를 값으로 확인하기',
      obscured: 'sticky 영역의 가림 확인하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      criteria: 'Separating five similarly named criteria',
      appearance: 'Checking the focus indicator with values',
      obscured: 'Checking obscuring by sticky areas',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
