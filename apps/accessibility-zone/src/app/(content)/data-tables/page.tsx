import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DataTablesPage } from '@/components/content/data-tables/DataTablesPage';

const metadata = {
  ko: {
    title: '데이터 표의 제목 · 헤더 · 셀 관계와 읽기 순서 구성하기 — A11y Lab',
    description:
      'caption · th · scope를 기본으로, 요일 · 장소 · 회차가 교차하는 두 층 헤더 표를 단순화하거나 검증한 id · headers로 잇는 09장 다섯 번째 페이지.',
  },
  en: {
    title:
      'Structuring titles, headers, cell relationships, and reading order in data tables — A11y Lab',
    description:
      'Chapter 09, page 5: caption, th, and scope first, and a two-layer schedule of day, hall, and session simplified or connected with verified id and headers.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DataTablesPage locale={await getServerLocale()} />;

export default Page;
