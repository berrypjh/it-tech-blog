import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    native: 'native-behaviors',
    roleOnly: 'role-only',
    remaining: 'remaining-meaning',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      native: '링크 · 버튼 · 체크박스가 기본으로 주는 것',
      roleOnly: 'role을 선언해도 생기지 않는 것',
      remaining: '네이티브로 충족되는 요구와 남는 의미',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      native: 'What links, buttons, and checkboxes give by default',
      roleOnly: 'What declaring a role does not create',
      remaining: 'Needs met natively and meaning that remains',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
