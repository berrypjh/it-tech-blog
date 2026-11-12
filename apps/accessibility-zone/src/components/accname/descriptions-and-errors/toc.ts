import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    paths: 'two-paths',
    direct: 'describedby-or-description',
    errors: 'hint-invalid-errormessage',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      paths: '이름과 설명은 서로 다른 경로로 계산된다',
      direct: '보이는 도움말 참조와 직접 적은 설명',
      errors: '안내 · 오류 표시 · aria-invalid · 오류 메시지 나누기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      paths: 'Names and descriptions are computed on separate paths',
      direct: 'Referencing visible help versus writing a description directly',
      errors: 'Separating hints, error display, aria-invalid, and error messages',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
