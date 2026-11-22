import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ComplexImagesPage } from '@/components/content/complex-images/ComplexImagesPage';

const metadata = {
  ko: {
    title: '차트 · 복잡한 그림 · 지도에 설명과 데이터 대안 제공하기 — A11y Lab',
    description:
      '시간대별 좌석 수의 단위 · 최댓값 · 변화를 차트 · 요약 · HTML 표에서 찾아 비교하고, 경로가 과업인 지도를 출발 · 회전 · 도착 조건의 글로 바꾸는 09장 두 번째 페이지.',
  },
  en: {
    title:
      'Providing descriptions and data alternatives for charts, complex images, and maps — A11y Lab',
    description:
      'Chapter 09, page 2: finding the unit, maximum, and change of seats by hour in a chart, a summary, and an HTML table, and writing a map as a route with start, turns, and end.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ComplexImagesPage locale={await getServerLocale()} />;

export default Page;
