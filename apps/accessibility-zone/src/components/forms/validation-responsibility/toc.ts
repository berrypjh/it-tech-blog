import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    native: 'native-constraints',
    custom: 'custom-validation',
    practice: 'same-wrong-value',
    boundary: 'client-is-not-the-boundary',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      native: '브라우저가 제출을 멈추는 방식',
      custom: '사용자 정의 검증이 맡는 것',
      practice: '같은 잘못된 값을 두 방식으로 검증하기',
      boundary: '클라이언트 검증은 서버 검증을 대신하지 않는다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      native: 'How the browser stops a submission',
      custom: 'What custom validation takes on',
      practice: 'Validating the same wrong value both ways',
      boundary: 'Client-side validation does not replace server-side validation',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
