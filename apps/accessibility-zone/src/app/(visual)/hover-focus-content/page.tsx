import { getServerLocale } from '@it-tech-blog/preferences/server';

import { HoverFocusContentPage } from '@/components/visual/hover-focus-content/HoverFocusContentPage';

const metadata = {
  ko: {
    title: '호버 · 포커스로 나타나는 내용을 접근 · 유지 · 닫을 수 있게 만들기 — A11y Lab',
    description:
      'WCAG 1.4.13의 세 조건과 예외를 확인하고, 추가 내용을 구현한 뒤 대비 · 확대 · 가림 · 추가 내용을 한 화면에서 판정 · 재검증하는 08장 마지막 페이지.',
  },
  en: {
    title: 'Making content on hover or focus reachable, persistent, and dismissible — A11y Lab',
    description:
      'Chapter 08, last page: the three conditions and exception of WCAG 1.4.13, an implementation of additional content, and judging and retesting contrast, zoom, covering, and additional content on one screen.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <HoverFocusContentPage locale={await getServerLocale()} />;

export default Page;
