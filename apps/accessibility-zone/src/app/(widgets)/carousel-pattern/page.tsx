import { getServerLocale } from '@it-tech-blog/preferences/server';

import { CarouselPatternPage } from '@/components/widgets/carousel-pattern/CarouselPatternPage';

const metadata = {
  ko: {
    title: 'Carousel의 탐색 · 정지 · 현재 항목 · 읽기 순서 설계하기 — A11y Lab',
    description:
      '수동 이전 · 다음을 기본으로 현재 항목을 알리고, 사용자가 시작했을 때만 도는 자동 넘김을 멈추게 하며, 행사 안내를 고르고 펼치고 넘기는 최종 과업으로 12장을 마치는 페이지.',
  },
  en: {
    title:
      'Designing navigation, pausing, the current item, and reading order of a carousel — A11y Lab',
    description:
      'Chapter 12, last page: conveying the current item with manual previous and next as the base, stopping rotation that runs only when the user starts it, and ending with a final task of choosing, opening, and moving through event guides.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <CarouselPatternPage locale={await getServerLocale()} />;

export default Page;
