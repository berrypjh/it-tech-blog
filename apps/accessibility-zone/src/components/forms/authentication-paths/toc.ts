import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    test: 'cognitive-function-test',
    assist: 'do-not-block-assistance',
    captcha: 'captcha-review',
    practice: 'synthetic-sign-in',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      test: '인지 기능 시험과 3.3.8 · 3.3.9의 조건',
      assist: '붙여넣기 · 비밀번호 관리자 · 직접 편집을 막지 않는다',
      captcha: 'CAPTCHA는 두 기준을 따로 검토한다',
      practice: '합성 값으로 인증 경로 확인하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      test: 'Cognitive function tests and the conditions of 3.3.8 and 3.3.9',
      assist: 'Do not block paste, password managers, or direct editing',
      captcha: 'Review CAPTCHA against two criteria separately',
      practice: 'Checking authentication paths with synthetic values',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
