import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SvgAndCanvasPage } from '@/components/content/svg-and-canvas/SvgAndCanvasPage';

const metadata = {
  ko: {
    title: 'SVG · Canvas의 의미와 동등한 접근 경로 설계하기 — A11y Lab',
    description:
      '작은 SVG 차트와 Canvas 좌석 배치도의 값 · 기능을 HTML로 한 번씩 제공하고, 도형과 픽셀이 스스로 이름이나 키보드 동작을 주지 않음을 확인하는 09장 세 번째 페이지.',
  },
  en: {
    title: 'Designing the meaning of SVG and Canvas and an equivalent access path — A11y Lab',
    description:
      'Chapter 09, page 3: offering the values and function of a small SVG chart and a Canvas seat map once in HTML, and checking that shapes and pixels give no name or keyboard behavior by themselves.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SvgAndCanvasPage locale={await getServerLocale()} />;

export default Page;
