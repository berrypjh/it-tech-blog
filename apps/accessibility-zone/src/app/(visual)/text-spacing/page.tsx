import { getServerLocale } from '@it-tech-blog/preferences/server';

import { TextSpacingPage } from '@/components/visual/text-spacing/TextSpacingPage';

const metadata = {
  ko: {
    title: '텍스트 간격 · 긴 번역 · 사용자 스타일에서도 내용 유지하기 — A11y Lab',
    description:
      'WCAG 1.4.12의 네 간격 값을 데모 영역에 적용하고, 긴 한국어 · 영어 문구에서 잘림과 겹침을 줄바꿈과 유연한 높이로 고치는 페이지.',
  },
  en: {
    title: 'Keeping content with text spacing, long translations, and user styles — A11y Lab',
    description:
      'Applying the four WCAG 1.4.12 spacing values to a demo area, and fixing clipping and overlap with long Korean and English strings through wrapping and flexible height.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <TextSpacingPage locale={await getServerLocale()} />;

export default Page;
