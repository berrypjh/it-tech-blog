import { getServerLocale } from '@it-tech-blog/preferences/server';

import { CompositeFocusPage } from '@/components/keyboard/composite-focus/CompositeFocusPage';

const metadata = {
  ko: {
    title: 'Roving tabindex와 aria-activedescendant 선택하고 구현하기 — A11y Lab',
    description:
      'APG Listbox 하나로 Roving tabindex와 aria-activedescendant를 비교하고, 진입 · 이탈 · 선택 · 항목 삭제의 상태를 확인하는 페이지.',
  },
  en: {
    title: 'Choosing and implementing roving tabindex and aria-activedescendant — A11y Lab',
    description:
      'Comparing roving tabindex and aria-activedescendant with one APG Listbox, and checking the state through entry, exit, selection, and item removal.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <CompositeFocusPage locale={await getServerLocale()} />;

export default Page;
