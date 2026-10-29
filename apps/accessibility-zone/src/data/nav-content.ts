import type { NavGroup } from '@it-tech-blog/ui';
import { commonSidebarStrings } from '@it-tech-blog/ui';

export const navData: Record<'ko' | 'en', NavGroup[]> = {
  ko: [
    {
      title: '시작하기',
      items: [
        { id: 'intro', label: '01.1 누구의 어떤 활동인가', type: 'link' },
        { id: 'people-and-contexts', label: '01.2 특성과 사용 환경', type: 'link' },
        { id: 'access-methods', label: '01.3 사용 방식 비교', type: 'link' },
        { id: 'concept-boundaries', label: '01.4 네 개념 구분하기', type: 'link' },
        { id: 'barrier-report', label: '01.5 장벽 재현 기록', type: 'link' },
      ],
    },
  ],
  en: [
    {
      title: 'Getting Started',
      items: [
        { id: 'intro', label: '01.1 Whose activities', type: 'link' },
        { id: 'people-and-contexts', label: '01.2 People and contexts', type: 'link' },
        { id: 'access-methods', label: '01.3 Ways of using the web', type: 'link' },
        { id: 'concept-boundaries', label: '01.4 Four concepts apart', type: 'link' },
        { id: 'barrier-report', label: '01.5 Barrier records', type: 'link' },
      ],
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
