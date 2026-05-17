export type NavItem = {
  id: string;
  label: string;
  type: 'link' | 'header';
  badge?: string;
  badgeColor?: 'default' | 'warning' | 'purple';
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navData: Record<'ko' | 'en', NavGroup[]> = {
  ko: [
    {
      title: '시작하기',
      items: [
        { id: 'intro', label: '웹접근성이란?', type: 'link' },
        { id: 'why', label: '왜 중요한가?', type: 'link' },
        { id: 'disabilities', label: '장애 유형과 사용자 환경', type: 'link' },
        { id: 'assistive-tech', label: '보조 기술 이해하기', type: 'link' },
        { id: 'roadmap', label: '웹접근성 학습 로드맵', type: 'link' },
      ],
    },
    {
      title: 'HTML / 시맨틱',
      items: [
        { id: 'semantic', label: '시맨틱 HTML이 중요한 이유', type: 'link' },
        { id: 'headings', label: '제목 구조와 heading', type: 'link' },
        { id: 'landmarks', label: 'landmark 구조', type: 'link' },
        { id: 'button-vs-link', label: 'button과 link의 차이', type: 'link' },
        { id: 'alt-text', label: '이미지 alt 작성법', type: 'link' },
        { id: 'tables', label: 'table / list 구조', type: 'link' },
      ],
    },
    {
      title: '키보드 접근성',
      items: [
        {
          id: 'keyboard',
          label: '키보드 탐색 기본',
          type: 'link',
          badge: '실습',
          badgeColor: 'warning',
        },
        { id: 'tab-order', label: 'tab 순서 설계', type: 'link' },
        { id: 'focus', label: 'focus와 focus-visible', type: 'link' },
        { id: 'skip-link', label: 'skip link', type: 'link' },
        { id: 'modal-focus', label: 'modal focus trap', type: 'link' },
        { id: 'keyboard-checklist', label: '키보드 접근성 체크리스트', type: 'link' },
      ],
    },
    {
      title: '스크린 리더 / ARIA',
      items: [
        { id: 'screen-reader', label: '스크린 리더란?', type: 'link' },
        { id: 'accessible-name', label: '접근 가능한 이름', type: 'link' },
        { id: 'aria-labels', label: 'aria-label / labelledby / describedby', type: 'link' },
        { id: 'aria-roles', label: 'role 이해하기', type: 'link' },
        { id: 'aria-hidden', label: 'aria-hidden 사용법', type: 'link' },
        { id: 'live-region', label: 'live region', type: 'link' },
        { id: 'aria-antipatterns', label: 'ARIA 안티패턴', type: 'link' },
      ],
    },
    {
      title: '폼 접근성',
      items: [
        { id: 'form-labels', label: 'label과 input 연결', type: 'link' },
        { id: 'placeholder', label: 'placeholder의 한계', type: 'link' },
        { id: 'required', label: 'required 표현', type: 'link' },
        { id: 'form-errors', label: '에러 메시지 연결', type: 'link' },
        { id: 'form-help', label: '도움말 텍스트 연결', type: 'link' },
        { id: 'checkbox-radio', label: 'checkbox / radio 그룹', type: 'link' },
        { id: 'validation', label: 'validation 접근성', type: 'link' },
      ],
    },
    {
      title: 'UI 컴포넌트 접근성',
      items: [
        { id: 'comp-button', label: 'Button', type: 'link' },
        { id: 'comp-link', label: 'Link', type: 'link' },
        { id: 'comp-icon-button', label: 'Icon Button', type: 'link' },
        { id: 'comp-modal', label: 'Modal / Dialog', type: 'link' },
        { id: 'comp-tabs', label: 'Tabs', type: 'link' },
        { id: 'comp-accordion', label: 'Accordion', type: 'link' },
        { id: 'comp-dropdown', label: 'Dropdown', type: 'link' },
        { id: 'comp-tooltip', label: 'Tooltip', type: 'link' },
        { id: 'comp-toast', label: 'Toast', type: 'link' },
      ],
    },
    {
      title: '색상 / 미디어 접근성',
      items: [
        { id: 'contrast', label: '색상 대비', type: 'link', badge: '도구', badgeColor: 'purple' },
        { id: 'color-only', label: '색상만으로 정보 전달하지 않기', type: 'link' },
        { id: 'focus-ring', label: 'focus ring 디자인', type: 'link' },
        { id: 'dark-mode', label: '다크 모드 접근성', type: 'link' },
        { id: 'reduced-motion', label: 'prefers-reduced-motion', type: 'link' },
        { id: 'image-alt', label: '이미지 대체 텍스트', type: 'link' },
        { id: 'captions', label: '영상 자막', type: 'link' },
        { id: 'svg-icons', label: 'SVG / 아이콘 접근성', type: 'link' },
      ],
    },
    {
      title: '접근성 테스트',
      items: [
        { id: 'manual-testing', label: '수동 테스트 흐름', type: 'link' },
        { id: 'keyboard-testing', label: '키보드 테스트', type: 'link' },
        { id: 'sr-testing', label: '스크린 리더 테스트', type: 'link' },
        { id: 'lighthouse', label: 'Lighthouse', type: 'link' },
        { id: 'axe', label: 'axe DevTools', type: 'link' },
        { id: 'eslint-a11y', label: 'eslint-plugin-jsx-a11y', type: 'link' },
        { id: 'a11y-checklist', label: '접근성 체크리스트', type: 'link' },
      ],
    },
    {
      title: '실무 패턴',
      items: [
        { id: 'div-button', label: 'div 버튼 문제', type: 'link' },
        { id: 'clickable-card', label: '클릭 가능한 카드', type: 'link' },
        { id: 'disabled-state', label: '비활성화 상태 처리', type: 'link' },
        { id: 'hidden-techniques', label: '숨김 처리 방식 비교', type: 'link' },
        { id: 'custom-select', label: 'custom select 문제', type: 'link' },
        { id: 'toast-a11y', label: 'toast 알림 문제', type: 'link' },
        { id: 'refactoring', label: '접근성 리팩토링 사례', type: 'link' },
      ],
    },
  ],
  en: [
    {
      title: 'Getting Started',
      items: [
        { id: 'intro', label: 'What is Web Accessibility?', type: 'link' },
        { id: 'why', label: 'Why Does It Matter?', type: 'link' },
        { id: 'disabilities', label: 'Disability Types & User Contexts', type: 'link' },
        { id: 'assistive-tech', label: 'Understanding Assistive Technologies', type: 'link' },
        { id: 'roadmap', label: 'Accessibility Learning Roadmap', type: 'link' },
      ],
    },
    {
      title: 'HTML / Semantics',
      items: [
        { id: 'semantic', label: 'Why Semantic HTML Matters', type: 'link' },
        { id: 'headings', label: 'Heading Structure', type: 'link' },
        { id: 'landmarks', label: 'Landmark Structure', type: 'link' },
        { id: 'button-vs-link', label: 'Button vs. Link', type: 'link' },
        { id: 'alt-text', label: 'Writing Image Alt Text', type: 'link' },
        { id: 'tables', label: 'Table / List Structure', type: 'link' },
      ],
    },
    {
      title: 'Keyboard Accessibility',
      items: [
        {
          id: 'keyboard',
          label: 'Keyboard Navigation Basics',
          type: 'link',
          badge: 'Lab',
          badgeColor: 'warning',
        },
        { id: 'tab-order', label: 'Designing Tab Order', type: 'link' },
        { id: 'focus', label: 'focus & focus-visible', type: 'link' },
        { id: 'skip-link', label: 'Skip Links', type: 'link' },
        { id: 'modal-focus', label: 'Modal Focus Trap', type: 'link' },
        { id: 'keyboard-checklist', label: 'Keyboard Accessibility Checklist', type: 'link' },
      ],
    },
    {
      title: 'Screen Reader / ARIA',
      items: [
        { id: 'screen-reader', label: 'What is a Screen Reader?', type: 'link' },
        { id: 'accessible-name', label: 'Accessible Name', type: 'link' },
        { id: 'aria-labels', label: 'aria-label / labelledby / describedby', type: 'link' },
        { id: 'aria-roles', label: 'Understanding Roles', type: 'link' },
        { id: 'aria-hidden', label: 'Using aria-hidden', type: 'link' },
        { id: 'live-region', label: 'Live Regions', type: 'link' },
        { id: 'aria-antipatterns', label: 'ARIA Anti-patterns', type: 'link' },
      ],
    },
    {
      title: 'Form Accessibility',
      items: [
        { id: 'form-labels', label: 'Connecting Labels & Inputs', type: 'link' },
        { id: 'placeholder', label: 'Limits of Placeholder', type: 'link' },
        { id: 'required', label: 'Communicating Required Fields', type: 'link' },
        { id: 'form-errors', label: 'Linking Error Messages', type: 'link' },
        { id: 'form-help', label: 'Linking Help Text', type: 'link' },
        { id: 'checkbox-radio', label: 'Checkbox / Radio Groups', type: 'link' },
        { id: 'validation', label: 'Validation Accessibility', type: 'link' },
      ],
    },
    {
      title: 'UI Components',
      items: [
        { id: 'comp-button', label: 'Button', type: 'link' },
        { id: 'comp-link', label: 'Link', type: 'link' },
        { id: 'comp-icon-button', label: 'Icon Button', type: 'link' },
        { id: 'comp-modal', label: 'Modal / Dialog', type: 'link' },
        { id: 'comp-tabs', label: 'Tabs', type: 'link' },
        { id: 'comp-accordion', label: 'Accordion', type: 'link' },
        { id: 'comp-dropdown', label: 'Dropdown', type: 'link' },
        { id: 'comp-tooltip', label: 'Tooltip', type: 'link' },
        { id: 'comp-toast', label: 'Toast', type: 'link' },
      ],
    },
    {
      title: 'Color / Media',
      items: [
        {
          id: 'contrast',
          label: 'Color Contrast',
          type: 'link',
          badge: 'Tool',
          badgeColor: 'purple',
        },
        { id: 'color-only', label: 'Avoid Color-only Information', type: 'link' },
        { id: 'focus-ring', label: 'Focus Ring Design', type: 'link' },
        { id: 'dark-mode', label: 'Dark Mode Accessibility', type: 'link' },
        { id: 'reduced-motion', label: 'prefers-reduced-motion', type: 'link' },
        { id: 'image-alt', label: 'Image Alternative Text', type: 'link' },
        { id: 'captions', label: 'Video Captions', type: 'link' },
        { id: 'svg-icons', label: 'SVG / Icon Accessibility', type: 'link' },
      ],
    },
    {
      title: 'Accessibility Testing',
      items: [
        { id: 'manual-testing', label: 'Manual Testing Flow', type: 'link' },
        { id: 'keyboard-testing', label: 'Keyboard Testing', type: 'link' },
        { id: 'sr-testing', label: 'Screen Reader Testing', type: 'link' },
        { id: 'lighthouse', label: 'Lighthouse', type: 'link' },
        { id: 'axe', label: 'axe DevTools', type: 'link' },
        { id: 'eslint-a11y', label: 'eslint-plugin-jsx-a11y', type: 'link' },
        { id: 'a11y-checklist', label: 'Accessibility Checklist', type: 'link' },
      ],
    },
    {
      title: 'Real-world Patterns',
      items: [
        { id: 'div-button', label: 'The div Button Problem', type: 'link' },
        { id: 'clickable-card', label: 'Clickable Cards', type: 'link' },
        { id: 'disabled-state', label: 'Handling Disabled State', type: 'link' },
        { id: 'hidden-techniques', label: 'Comparing Hidden Techniques', type: 'link' },
        { id: 'custom-select', label: 'Custom Select Problems', type: 'link' },
        { id: 'toast-a11y', label: 'Toast Notification Issues', type: 'link' },
        { id: 'refactoring', label: 'Accessibility Refactoring', type: 'link' },
      ],
    },
  ],
};

export const sidebarStrings = {
  ko: {
    title: 'A11y Lab',
    subtitle: '모두를 위한 웹 접근성 실험실',
    progressTitle: '학습 진행중',
    progressStep: '웹접근성이란? 완료',
    menu: '메뉴',
    backToMain: '홈으로 가기',
    collapseAll: '모두 닫기',
    expandAll: '모두 열기',
  },
  en: {
    title: 'A11y Lab',
    subtitle: 'Web Accessibility Lab for Everyone',
    progressTitle: 'In Progress',
    progressStep: 'What is Accessibility? Done',
    menu: 'Menu',
    backToMain: 'Back to Home',
    collapseAll: 'Collapse all',
    expandAll: 'Expand all',
  },
};
