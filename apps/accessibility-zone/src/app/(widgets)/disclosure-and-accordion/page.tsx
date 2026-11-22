import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DisclosureAndAccordionPage } from '@/components/widgets/disclosure-and-accordion/DisclosureAndAccordionPage';

const metadata = {
  ko: {
    title: 'Disclosure와 Accordion을 기본 HTML부터 구현하기 — A11y Lab',
    description:
      '짧은 추가 설명은 details와 summary로, 여러 제목과 패널은 제목 속 버튼으로 만들고, 하나만 열림과 여러 개 열림의 규칙과 초점 복귀를 확인하는 12장 둘째 페이지.',
  },
  en: {
    title: 'Building disclosure and accordion from basic HTML — A11y Lab',
    description:
      'Chapter 12, second page: building a short extra explanation with details and summary and several headings and panels with buttons inside headings, then checking single-open and multi-open rules and where focus returns.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DisclosureAndAccordionPage locale={await getServerLocale()} />;

export default Page;
