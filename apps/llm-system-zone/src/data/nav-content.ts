import type { DocSidebarStrings, NavGroup } from '@it-tech-blog/ui';
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

export const sidebarStrings: Record<'ko' | 'en', DocSidebarStrings> = {
  ko: {
    ...commonSidebarStrings.ko,
    title: 'LLM Lab',
    subtitle: '모델에서 시스템까지, LLM 소프트웨어 실험실',
  },
  en: {
    ...commonSidebarStrings.en,
    title: 'LLM Lab',
    subtitle: 'From model to system, an LLM software lab',
  },
};
