import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ScreenReaderStartPage } from '@/components/browser-at/screen-reader-start/ScreenReaderStartPage';

const metadata = {
  ko: {
    title: 'NVDA 또는 VoiceOver로 문서 탐색과 폼 조작 시작하기 — A11y Lab',
    description:
      'Windows NVDA 또는 macOS VoiceOver 가운데 한 경로로 켜기 · 끄기, 제목 · 랜드마크 · 링크 탐색, 입력란 편집, 체크박스 상태 확인을 같은 예제에서 해 보고 기대하는 뜻으로 기록하는 03장 다섯 번째 페이지.',
  },
  en: {
    title: 'Getting started with document navigation and forms in NVDA or VoiceOver — A11y Lab',
    description:
      'Chapter 03, page 5: with NVDA on Windows or VoiceOver on macOS, turning it on and off, navigating by headings, landmarks, and links, editing a field, and checking a checkbox on one sample, recorded by expected meaning.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ScreenReaderStartPage locale={await getServerLocale()} />;

export default Page;
