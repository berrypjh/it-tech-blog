import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    flow: 'four-steps',
    specs: 'html-aam-and-core-aam',
    trace: 'trace-one-checkbox',
    limits: 'what-specs-do-not-promise',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      flow: 'HTML 의미에서 보조기술 해석까지 네 단계',
      specs: 'HTML-AAM과 Core-AAM은 누구를 위한 문서인가',
      trace: '체크박스 하나를 네 단계로 추적하기',
      limits: '명세가 약속하지 않는 것',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      flow: 'Four steps from HTML meaning to assistive technology',
      specs: 'Who HTML-AAM and Core-AAM are written for',
      trace: 'Tracing one checkbox through the four steps',
      limits: 'What the specs do not promise',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
