import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityTreePage } from '@/components/browser-at/accessibility-tree/AccessibilityTreePage';

const metadata = {
  ko: {
    title: 'DOM · 스타일 · 렌더링 정보와 접근성 트리의 관계 — A11y Lab',
    description:
      '같은 UI를 DOM과 접근성 트리에서 비교하고, 네이티브 의미 · 숨김 상태 · 스타일 변화가 노출에 주는 영향과 DOM과 트리가 일대일이 아닌 경우를 보는 03장 첫 페이지.',
  },
  en: {
    title: 'How the DOM, styles, and rendering relate to the accessibility tree — A11y Lab',
    description:
      'Chapter 03, page 1: comparing one UI in the DOM and the accessibility tree, how native meaning, hidden states, and style changes affect exposure, and why the DOM and the tree are not one-to-one.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <AccessibilityTreePage locale={await getServerLocale()} />;

export default Page;
