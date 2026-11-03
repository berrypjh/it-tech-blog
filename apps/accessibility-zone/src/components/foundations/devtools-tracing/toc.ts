import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    tools: 'devtools-panels',
    levels: 'three-levels',
    practice: 'trace-practice',
    atCheck: 'screen-reader-check',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      tools: '개발자 도구에서 무엇을 보나',
      levels: '사이트 안 관찰·개발자 도구·보조기술',
      practice: '결함 두 개를 재현부터 재검증까지 고치기',
      atCheck: '화면 낭독기로 따로 확인할 것',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      tools: 'What to look at in developer tools',
      levels: 'In-page observation, developer tools, and assistive technology',
      practice: 'Fixing two defects from reproduction to re-check',
      atCheck: 'What to check separately with a screen reader',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
