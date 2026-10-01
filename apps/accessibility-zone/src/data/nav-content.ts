import type { NavGroup } from '@it-tech-blog/ui';
import { commonSidebarStrings } from '@it-tech-blog/ui';

export const navData: Record<'ko' | 'en', NavGroup[]> = {
  ko: [
    {
      title: '시작하기',
      items: [{ id: 'intro', label: '시작하기', type: 'link' }],
    },
  ],
  en: [
    {
      title: 'Getting Started',
      items: [{ id: 'intro', label: 'Getting Started', type: 'link' }],
    },
  ],
};

export const sidebarStrings = {
  ko: {
    ...commonSidebarStrings.ko,
    title: 'A11y Lab',
    subtitle: '모두를 위한 웹 접근성 실험실',
  },
  en: {
    ...commonSidebarStrings.en,
    title: 'A11y Lab',
    subtitle: 'Web Accessibility Lab for Everyone',
  },
};
