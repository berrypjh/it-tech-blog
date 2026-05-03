import {
  AccessibilityIcon,
  ShieldIcon,
  GitBranchIcon,
  HtmlIcon,
  CssIcon,
  LlmIcon,
  DesignPatternIcon,
  BundlerIcon,
  DevtoolsIcon,
  LighthouseIcon,
  NetworkIcon,
  DataStructureIcon,
} from '@it-tech-blog/icons';

export type TopicSize = 'sm' | 'md' | 'lg';

export type Topic = {
  icon: React.ReactNode;
  label: { ko: string; en: string };
  size: TopicSize;
  delay: number;
  style: React.CSSProperties;
  href: string;
};

export const TOPICS: Topic[] = [
  {
    icon: <AccessibilityIcon />,
    label: { ko: '웹접근성', en: 'Accessibility' },
    size: 'md',
    delay: 0.1,
    style: { top: '6rem', left: '4rem' },
    href: '/accessibility',
  },
  {
    icon: <ShieldIcon />,
    label: { ko: '보안', en: 'Security' },
    size: 'sm',
    delay: 0.15,
    style: { top: '4rem', left: '22rem' },
    href: '/',
  },
  {
    icon: <GitBranchIcon />,
    label: { ko: 'Git', en: 'Git' },
    size: 'lg',
    delay: 0.2,
    style: { top: '4rem', right: '20rem' },
    href: '/',
  },
  {
    icon: <LlmIcon />,
    label: { ko: 'LLM', en: 'LLM' },
    size: 'md',
    delay: 0.25,
    style: { top: '6rem', right: '4rem' },
    href: '/',
  },
  {
    icon: <CssIcon />,
    label: { ko: 'CSS', en: 'CSS' },
    size: 'sm',
    delay: 0.3,
    style: { top: '18rem', left: '6rem' },
    href: '/',
  },
  {
    icon: <HtmlIcon />,
    label: { ko: 'HTML', en: 'HTML' },
    size: 'lg',
    delay: 0.35,
    style: { top: '14rem', left: '24rem' },
    href: '/',
  },
  {
    icon: <DesignPatternIcon />,
    label: { ko: '디자인 패턴', en: 'Design Patterns' },
    size: 'md',
    delay: 0.4,
    style: { top: '18rem', right: '6rem' },
    href: '/',
  },
  {
    icon: <BundlerIcon />,
    label: { ko: '번들러', en: 'Bundler' },
    size: 'sm',
    delay: 0.5,
    style: { bottom: '16rem', left: '4rem' },
    href: '/',
  },
  {
    icon: <NetworkIcon />,
    label: { ko: '네트워크', en: 'Network' },
    size: 'lg',
    delay: 0.6,
    style: { bottom: '14rem', left: '50%', transform: 'translateX(-50%)' },
    href: '/',
  },
  {
    icon: <DevtoolsIcon />,
    label: { ko: '개발자도구', en: 'Devtools' },
    size: 'md',
    delay: 0.7,
    style: { bottom: '10rem', right: '20rem' },
    href: '/',
  },
  {
    icon: <LighthouseIcon />,
    label: { ko: 'Lighthouse', en: 'Lighthouse' },
    size: 'sm',
    delay: 0.8,
    style: { bottom: '6rem', left: '18rem' },
    href: '/',
  },
  {
    icon: <DataStructureIcon />,
    label: { ko: '자료구조', en: 'Data Structures' },
    size: 'md',
    delay: 0.9,
    style: { bottom: '6rem', right: '4rem' },
    href: '/',
  },
];
