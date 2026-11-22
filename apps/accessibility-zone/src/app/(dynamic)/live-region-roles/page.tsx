import { getServerLocale } from '@it-tech-blog/preferences/server';

import { LiveRegionRolesPage } from '@/components/dynamic/live-region-roles/LiveRegionRolesPage';

const metadata = {
  ko: {
    title: 'aria-live · status · alert · log의 역할과 알림 시점 이해하기 — A11y Lab',
    description:
      'status · alert · log의 뜻과 암시적 live · atomic 값을 WAI-ARIA 1.2 원문과 대조하고, 미리 마운트된 영역의 갱신과 alert 남용 · 중복 방송을 다루는 10장 두 번째 페이지.',
  },
  en: {
    title: 'Understanding the roles and timing of aria-live, status, alert, and log — A11y Lab',
    description:
      'Chapter 10, page 2: the meaning and implicit live and atomic values of status, alert, and log against WAI-ARIA 1.2, updating mounted regions, and avoiding alert overuse.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <LiveRegionRolesPage locale={await getServerLocale()} />;

export default Page;
