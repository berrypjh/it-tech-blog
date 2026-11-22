import { getServerLocale } from '@it-tech-blog/preferences/server';

import { MenusAndToolbarsPage } from '@/components/widgets/menus-and-toolbars/MenusAndToolbarsPage';

const metadata = {
  ko: {
    title: '사이트 내비게이션과 Menu · Menubar · Toolbar의 조작 구분하기 — A11y Lab',
    description:
      '링크 묶음은 nav로 두고, 명령 메뉴 버튼의 열기 · 이동 · 실행 · 취소와 도구 모음의 한 번의 Tab · 화살표 이동을 직접 비교하며, 메뉴바의 두 축을 코드와 키 표로 읽는 12장 다섯째 페이지.',
  },
  en: {
    title: 'Telling site navigation apart from menu, menubar, and toolbar interaction — A11y Lab',
    description:
      'Chapter 12, fifth page: keeping sets of links as nav, comparing the open, move, run, and cancel of a command menu button with the single Tab stop and arrow movement of a toolbar, and reading the two axes of a menubar from code and a key table.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <MenusAndToolbarsPage locale={await getServerLocale()} />;

export default Page;
