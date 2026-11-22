import { getServerLocale } from '@it-tech-blog/preferences/server';

import { MotionAndUpdatesPage } from '@/components/content/motion-and-updates/MotionAndUpdatesPage';

const metadata = {
  ko: {
    title: '모션 · 점멸 · 자동 갱신과 Reduced Motion을 안전하게 다루기 — A11y Lab',
    description:
      '직접 시작하고 멈추는 갱신으로 2.2.2를 확인하고, 재생하지 않는 정지 그림으로 2.3.1 점멸 기준과 사용자 모션 선호를 나누는 09장 여덟 번째 페이지.',
  },
  en: {
    title: 'Handling motion, flashing, auto-updates, and reduced motion safely — A11y Lab',
    description:
      'Chapter 09, page 8: an update you start and stop for 2.2.2, and a still picture separating the 2.3.1 flash threshold from the user’s motion preference.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <MotionAndUpdatesPage locale={await getServerLocale()} />;

export default Page;
