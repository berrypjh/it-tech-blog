import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    editing: 'while-editing',
    parts: 'number-and-buttons',
    practice: 'spinbutton-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      editing: '치는 도중의 값과 확정한 값을 나눈다',
      parts: '네이티브 number와 증감 버튼을 맞춘다',
      practice: '빈 값과 범위 밖 값에서 복구하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      editing: 'Separate the value being typed from the committed value',
      parts: 'Align the native number input with stepping buttons',
      practice: 'Recovering from empty and out-of-range values',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
