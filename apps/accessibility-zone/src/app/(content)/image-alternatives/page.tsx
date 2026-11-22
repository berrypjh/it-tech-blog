import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ImageAlternativesPage } from '@/components/content/image-alternatives/ImageAlternativesPage';

const metadata = {
  ko: {
    title: '이미지의 목적과 문맥에 맞는 대체 텍스트 결정하기 — A11y Lab',
    description:
      '같은 아이콘을 장식 · 정보 · 기능 이미지로 배치해 대체 텍스트를 정하고, alt=""와 alt 생략, 링크 글자와의 중복을 구분하는 09장 첫 페이지.',
  },
  en: {
    title: 'Deciding text alternatives by an image’s purpose and context — A11y Lab',
    description:
      'Chapter 09, first page: one icon placed as decorative, informative, and functional, alt="" versus a missing alt, and avoiding repeats with link text.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ImageAlternativesPage locale={await getServerLocale()} />;

export default Page;
