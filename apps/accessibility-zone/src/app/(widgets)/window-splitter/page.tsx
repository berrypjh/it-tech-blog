import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WindowSplitterPage } from '@/components/widgets/window-splitter/WindowSplitterPage';

const metadata = {
  ko: {
    title: '분할 영역 조절에 이름 · 현재 값 · 키보드 조작 제공하기 — A11y Lab',
    description:
      '두 영역의 실제 크기를 초점 가능한 separator의 방향키와 Enter, 그리고 누르기만 하는 버튼으로 조절하고, 값과 측정한 너비를 대조하는 12장 여덟째 페이지.',
  },
  en: {
    title: 'Giving a pane splitter a name, current value, and keyboard operation — A11y Lab',
    description:
      'Chapter 12, eighth page: resizing two real panes with the arrow keys and Enter on a focusable separator and with tap-only buttons, and comparing the value with the measured width.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <WindowSplitterPage locale={await getServerLocale()} />;

export default Page;
