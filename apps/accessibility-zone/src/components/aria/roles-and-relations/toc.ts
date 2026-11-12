import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    kinds: 'role-state-property',
    required: 'required-in-spec',
    relations: 'three-relations',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      kinds: '역할 · 상태 · 속성 · 관계를 나눠 읽기',
      required: '한 역할의 필수 요구를 원문에서 찾기',
      relations: 'DOM 자식 · 접근성 소유 · ID 참조는 서로 다르다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      kinds: 'Reading role, state, property, and relation apart',
      required: 'Finding one role’s requirements in the spec',
      relations: 'DOM children, accessibility ownership, and ID references differ',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
