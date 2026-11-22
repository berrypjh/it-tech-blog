import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    parts: 'separator-as-widget',
    scope: 'what-we-verified',
    practice: 'splitter-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      parts: '초점을 받는 separator는 값을 가진 위젯이다',
      scope: 'APG 패턴의 상태와 이 예제의 범위',
      practice: '방향키와 버튼으로 같은 크기 만들기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      parts: 'A focusable separator is a widget with a value',
      scope: 'The status of the APG pattern and the scope of this example',
      practice: 'Making the same size with arrow keys and buttons',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
