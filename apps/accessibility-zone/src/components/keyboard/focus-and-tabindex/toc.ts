import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    tasks: 'two-focus-tasks',
    values: 'tabindex-values',
    practice: 'tabindex-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      tasks: 'Tab 이동과 focus()가 맡는 일',
      values: 'tabindex 값이 바꾸는 것',
      practice: '값과 상태를 바꿔 포커스 관찰하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      tasks: 'What Tab and focus() are each for',
      values: 'What tabindex values change',
      practice: 'Changing values and states while watching focus',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
