import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    identify: 'identification-and-suggestion',
    wiring: 'field-error-wiring',
    policy: 'first-failure-focus',
    practice: 'summary-to-field',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      identify: '오류 식별과 수정 제안은 다른 요구',
      wiring: '검증한 뒤에 상태 · 오류 글 · 설명을 연결한다',
      policy: '처음 실패했을 때 초점은 한 곳으로',
      practice: '요약에서 필드로 가서 고치고 다시 제출하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      identify: 'Error identification and error suggestion are different requirements',
      wiring: 'Connect state, error text, and description after validating',
      policy: 'On the first failure, focus goes to one place',
      practice: 'Going from the summary to the field, fixing, and resubmitting',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
