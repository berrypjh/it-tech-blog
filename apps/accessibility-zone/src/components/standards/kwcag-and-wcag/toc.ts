import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    registry: 'official-registry',
    structure: 'structure-and-basis',
    contrast: 'compare-contrast',
    size: 'compare-control-size',
    howTo: 'checking-the-original',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      registry: '공식 등록 정보와 원문에서 확인한 것',
      structure: '짜임과 기초 판본이 다르다',
      contrast: '비교 1: 명도 대비 — KWCAG 5.4.3과 WCAG 1.4.3',
      size: '비교 2: 컨트롤 크기 — KWCAG 6.1.3과 WCAG 2.5.8',
      howTo: '공식 원문을 확인하는 절차',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      registry: 'What the official registry and original text confirm',
      structure: 'Different structure and base edition',
      contrast: 'Comparison 1: Contrast — KWCAG 5.4.3 and WCAG 1.4.3',
      size: 'Comparison 2: Control size — KWCAG 6.1.3 and WCAG 2.5.8',
      howTo: 'How to check the official original',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
