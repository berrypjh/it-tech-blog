import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    methods: 'two-focus-methods',
    behavior: 'listbox-behavior',
    practice: 'composite-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      methods: '복합 위젯의 Tab 정지점과 두 방법',
      behavior: '이 Listbox의 키와 상태 규칙',
      practice: '같은 목록을 두 방법으로 조작하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      methods: 'A composite’s Tab stop and the two methods',
      behavior: 'Keys and state rules of this listbox',
      practice: 'Operating the same list with both methods',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
