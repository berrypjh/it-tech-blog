import { getServerLocale } from '@it-tech-blog/preferences/server';

import { NativeFirstPage } from '@/components/aria/native-first/NativeFirstPage';

const metadata = {
  ko: {
    title: '네이티브 HTML을 우선하고 ARIA가 필요한 경우 판단하기 — A11y Lab',
    description:
      '링크 · 버튼 · 체크박스가 기본으로 주는 의미와 동작, role 선언이 바꾸지 않는 것, ARIA로 보완할 의미가 남는 요구를 구분하는 05장 첫 페이지.',
  },
  en: {
    title: 'Preferring native HTML and judging when ARIA is needed — A11y Lab',
    description:
      'Chapter 05, page 1: the meaning and behavior links, buttons, and checkboxes give by default, what a role declaration does not change, and which needs leave meaning for ARIA to fill.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <NativeFirstPage locale={await getServerLocale()} />;

export default Page;
