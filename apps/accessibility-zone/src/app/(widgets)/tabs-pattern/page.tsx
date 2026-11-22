import { getServerLocale } from '@it-tech-blog/preferences/server';

import { TabsPatternPage } from '@/components/widgets/tabs-pattern/TabsPatternPage';

const metadata = {
  ko: {
    title: 'Tabs의 선택 · 포커스 · 패널과 자동 · 수동 활성화 구현하기 — A11y Lab',
    description:
      '탭과 패널의 연결, 선택된 탭, roving tabindex, 보이는 패널을 하나로 맞추고, 방향키로 초점만 옮기는 수동 활성화와 자동 활성화를 비교하는 12장 셋째 페이지.',
  },
  en: {
    title:
      'Implementing selection, focus, and panels of tabs with automatic and manual activation — A11y Lab',
    description:
      'Chapter 12, third page: aligning the tab-panel connection, the selected tab, roving tabindex, and the visible panel, and comparing manual activation, where arrow keys only move focus, with automatic activation.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <TabsPatternPage locale={await getServerLocale()} />;

export default Page;
