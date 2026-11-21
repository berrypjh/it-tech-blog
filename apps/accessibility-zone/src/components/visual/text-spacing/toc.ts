import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    criterion: 'text-spacing-criterion',
    practice: 'text-spacing-practice',
    fixes: 'flexible-layout-fixes',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      criterion: '1.4.12의 네 가지 값',
      practice: '간격과 긴 문구를 데모 영역에 적용하기',
      fixes: '줄바꿈과 유연한 높이로 고치기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      criterion: 'The four values of 1.4.12',
      practice: 'Applying spacing and long strings to a demo area',
      fixes: 'Fixing with wrapping and flexible height',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
