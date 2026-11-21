import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ForcedColorsPage } from '@/components/visual/forced-colors/ForcedColorsPage';

const metadata = {
  ko: {
    title: 'Forced Colors와 고대비 환경에서 경계 · 상태 보존하기 — A11y Lab',
    description:
      'Forced Colors, 앱의 다크 테마, 사용자의 대비 선호를 구분하고, 배경에만 기댄 경계와 선택 상태를 시스템 색과 실제 테두리로 보존하는 페이지.',
  },
  en: {
    title: 'Preserving boundaries and states in forced colors and high contrast — A11y Lab',
    description:
      'Separating forced colors, an app’s dark theme, and contrast preferences, and preserving boundaries and selection with system colors and real borders.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ForcedColorsPage locale={await getServerLocale()} />;

export default Page;
