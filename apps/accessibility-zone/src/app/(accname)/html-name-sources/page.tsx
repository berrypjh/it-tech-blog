import { getServerLocale } from '@it-tech-blog/preferences/server';

import { HtmlNameSourcesPage } from '@/components/accname/html-name-sources/HtmlNameSourcesPage';

const metadata = {
  ko: {
    title: 'label · 본문 텍스트 · alt 등 HTML의 이름 제공 방식 — A11y Lab',
    description:
      '연결된 label이 있는 input, 내용이 있는 button, alt가 있는 img의 이름 출처를 HTML-AAM으로 비교하고, 끊긴 for · id를 추적해 고치는 06장 두 번째 페이지.',
  },
  en: {
    title: 'How HTML provides names: label, text content, alt, and more — A11y Lab',
    description:
      'Chapter 06, page 2: comparing name sources of an input with a label, a button with content, and an img with alt in HTML-AAM, and tracing and fixing a broken for and id.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <HtmlNameSourcesPage locale={await getServerLocale()} />;

export default Page;
