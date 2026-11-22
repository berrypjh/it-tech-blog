import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    parts: 'tab-parts',
    activation: 'manual-or-automatic',
    practice: 'tabs-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      parts: '탭 · 선택 · 패널을 하나로 맞춘다',
      activation: '초점과 선택을 나누는 수동 활성화',
      practice: '두 활성화 방식을 키로 비교하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      parts: 'Keep tab, selection, and panel as one',
      activation: 'Manual activation separates focus from selection',
      practice: 'Comparing the two activation modes by keyboard',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
