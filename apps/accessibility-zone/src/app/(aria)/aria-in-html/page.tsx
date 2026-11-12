import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AriaInHtmlPage } from '@/components/aria/aria-in-html/AriaInHtmlPage';

const metadata = {
  ko: {
    title: 'ARIA in HTML로 허용 · 금지 · 불필요한 역할 확인하기 — A11y Lab',
    description:
      'ARIA in HTML의 요소 행을 읽고 중복 선언 · 부적절한 덮어쓰기 · 필요한 보완을 구분하며, 허용이 동작을 증명하지 않는 이유와 presentation 충돌 규칙을 보는 05장 세 번째 페이지.',
  },
  en: {
    title: 'Checking allowed, prohibited, and unnecessary roles with ARIA in HTML — A11y Lab',
    description:
      'Chapter 05, page 3: reading element rows in ARIA in HTML, telling redundant declarations, inappropriate overrides, and needed additions apart, why allowed does not prove behavior, and the presentation conflict rules.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <AriaInHtmlPage locale={await getServerLocale()} />;

export default Page;
