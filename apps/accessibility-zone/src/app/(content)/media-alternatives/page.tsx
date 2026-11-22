import { getServerLocale } from '@it-tech-blog/preferences/server';

import { MediaAlternativesPage } from '@/components/content/media-alternatives/MediaAlternativesPage';

const metadata = {
  ko: {
    title: '자막 · 대본 · 오디오 설명 · 수화의 역할과 적용 조건 구분하기 — A11y Lab',
    description:
      '녹화 · 실시간과 미디어 종류별 WCAG 1.2 기준 · 예외 · 수준을 비교하고, 한 클립에서 자막에 담을 소리와 설명할 화면을 나누는 09장 여섯 번째 페이지.',
  },
  en: {
    title:
      'Distinguishing the roles and conditions of captions, transcripts, audio description, and sign language — A11y Lab',
    description:
      'Chapter 09, page 6: WCAG 1.2 criteria, exceptions, and levels by media type, and sorting one clip into sounds for captions and visuals to describe.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <MediaAlternativesPage locale={await getServerLocale()} />;

export default Page;
