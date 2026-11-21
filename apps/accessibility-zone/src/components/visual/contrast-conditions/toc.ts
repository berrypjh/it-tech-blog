import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    targets: 'contrast-targets',
    calculator: 'contrast-calculation',
    limits: 'contrast-limits',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      targets: '무엇에 어떤 기준이 적용되는가',
      calculator: '불투명한 두 색의 대비 계산하기',
      limits: '두 색만으로 판정할 수 없는 경우와 예외',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      targets: 'Which criterion applies to what',
      calculator: 'Computing contrast for two opaque colors',
      limits: 'Exceptions, and cases two colors cannot settle',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
