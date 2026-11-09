import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    three: 'focus-cursor-mode',
    sameDoc: 'headings-vs-tab',
    nvda: 'nvda-modes',
    voiceover: 'voiceover-interaction',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      three: '포커스 · 읽기 위치 · 모드를 나눠 부르기',
      sameDoc: '같은 문서에서 제목 탐색과 Tab 이동 비교하기',
      nvda: 'NVDA의 탐색 모드와 포커스 모드',
      voiceover: 'VoiceOver의 VoiceOver 커서와 상호작용',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      three: 'Naming focus, reading position, and mode separately',
      sameDoc: 'Comparing heading navigation and Tab in one document',
      nvda: 'NVDA’s browse mode and focus mode',
      voiceover: 'VoiceOver’s cursor and interaction',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
