import type { Locale } from '@it-tech-blog/preferences';

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

export type CommonSidebarStrings = {
  menu: string;
  backToMain: string;
  collapseAll: string;
  expandAll: string;
};

export const commonSidebarStrings: Record<Locale, CommonSidebarStrings> = {
  ko: {
    menu: '메뉴',
    backToMain: '홈으로 가기',
    collapseAll: '모두 닫기',
    expandAll: '모두 열기',
  },
  en: {
    menu: 'Menu',
    backToMain: 'Back to Home',
    collapseAll: 'Collapse all',
    expandAll: 'Expand all',
  },
};
