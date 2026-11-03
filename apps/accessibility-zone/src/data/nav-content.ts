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
    {
      title: '웹 플랫폼 기본',
      items: [
        { id: 'web-layers', label: '02.1 네 층의 책임', type: 'link' },
        { id: 'document-structure', label: '02.2 문서 구조', type: 'link' },
        { id: 'text-and-controls', label: '02.3 링크·버튼 선택', type: 'link' },
        { id: 'basic-forms', label: '02.4 기본 입력 폼', type: 'link' },
        { id: 'dom-order', label: '02.5 DOM 순서와 배치', type: 'link' },
        { id: 'events-and-state', label: '02.6 이벤트와 상태', type: 'link' },
        { id: 'devtools-tracing', label: '02.7 개발자 도구로 추적', type: 'link' },
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
    {
      title: 'Web Platform Basics',
      items: [
        { id: 'web-layers', label: '02.1 Four layers', type: 'link' },
        { id: 'document-structure', label: '02.2 Document structure', type: 'link' },
        { id: 'text-and-controls', label: '02.3 Links and buttons', type: 'link' },
        { id: 'basic-forms', label: '02.4 Basic forms', type: 'link' },
        { id: 'dom-order', label: '02.5 DOM order and layout', type: 'link' },
        { id: 'events-and-state', label: '02.6 Events and state', type: 'link' },
        { id: 'devtools-tracing', label: '02.7 Tracing with devtools', type: 'link' },
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
