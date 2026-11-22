import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    steps: 'steps-back-and-next',
    conditional: 'conditional-fields',
    redundant: 'redundant-entry',
    practice: 'two-step-application',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      steps: '단계를 오가도 값과 위치를 잃지 않는다',
      conditional: '조건부 필드의 노출 · 값 · 검증 · 제출을 맞춘다',
      redundant: '같은 과정에서 받은 정보는 다시 입력시키지 않는다',
      practice: '두 단계 신청에서 직접 확인하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      steps: 'Moving between steps loses neither values nor position',
      conditional: 'Align visibility, value, validation, and submission of conditional fields',
      redundant: 'Do not ask again for information given in the same process',
      practice: 'Checking it yourself in a two-step application',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
