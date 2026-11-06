import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    parts: 'five-parts',
    practice: 'three-controls',
    differs: 'controls-differ',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      parts: '역할 · 이름 · 상태 · 값 · 관계',
      practice: '세 컨트롤에서 다섯 가지 읽기',
      differs: '보이는 글자 · 이름 · 값은 서로 다른 정보다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      parts: 'Role, name, state, value, and relations',
      practice: 'Reading the five parts on three controls',
      differs: 'Visible text, name, and value are different information',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
