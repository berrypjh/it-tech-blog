import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    roles: 'three-roles',
    instructions: 'visible-instructions',
    practice: 'small-application',
    scope: 'input-purpose-scope',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      roles: '키보드 힌트 · 값 검증 · 입력 목적은 서로 다른 일',
      instructions: '필수 여부와 형식은 입력 전에도 뒤에도 보인다',
      practice: '작은 신청서에서 속성 읽기',
      scope: '1.3.5가 적용되는 칸과 아닌 칸',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      roles: 'Keyboard hint, value check, and input purpose are different jobs',
      instructions: 'Required and format instructions stay visible before and after input',
      practice: 'Reading attributes in a small application form',
      scope: 'Fields where 1.3.5 applies and where it does not',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
