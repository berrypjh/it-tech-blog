import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SensoryInformationPage } from '@/components/visual/sensory-information/SensoryInformationPage';

const metadata = {
  ko: {
    title: '색상 · 모양 · 위치 · 소리만으로 정보를 전달하지 않기 — A11y Lab',
    description:
      'WCAG 1.4.1과 1.3.3의 범위를 나누고, 색과 위치에 기댄 안내를 이름 · 텍스트 · 형태로 보완해 같은 과업을 비교하는 페이지.',
  },
  en: {
    title: 'Not conveying information by color, shape, position, or sound alone — A11y Lab',
    description:
      'Separating the scope of WCAG 1.4.1 and 1.3.3, and comparing one task after adding names, text, and form to instructions that rely on color and position.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SensoryInformationPage locale={await getServerLocale()} />;

export default Page;
