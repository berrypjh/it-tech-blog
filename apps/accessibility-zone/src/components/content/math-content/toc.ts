import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    structure: 'fraction-structure',
    practice: 'math-paths',
    output: 'screen-and-at-output',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      structure: '분수의 구조는 모양이 아니라 마크업에 있다',
      practice: '같은 분수를 세 가지로 표기해 DOM 읽기',
      output: '화면 표시와 구조 탐색 · 점자 출력은 다르다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      structure: 'A fraction’s structure is in the markup, not the look',
      practice: 'Reading the DOM of one fraction written three ways',
      output: 'Screen display differs from structural navigation and braille',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
