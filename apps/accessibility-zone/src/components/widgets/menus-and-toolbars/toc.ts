import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    kinds: 'links-or-commands',
    menu: 'menu-button-contract',
    toolbar: 'toolbar-contract',
    menubar: 'menubar-keys',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      kinds: '링크 묶음은 nav, 명령 묶음은 menu',
      menu: '메뉴 버튼의 열기 · 이동 · 실행 · 취소',
      toolbar: '도구 모음은 한 번의 Tab과 축에 맞는 화살표',
      menubar: '메뉴바의 두 축과 하위 메뉴 읽기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      kinds: 'nav for sets of links, menu for sets of commands',
      menu: 'Open, move, run, and cancel in a menu button',
      toolbar: 'A toolbar is one Tab stop with arrows along its axis',
      menubar: 'Reading the two axes and submenus of a menubar',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
