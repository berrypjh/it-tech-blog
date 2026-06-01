import {
  AccessibilityIcon,
  AtomIcon,
  BundlerIcon,
  DataStructureIcon,
  DesignPatternIcon,
  DevtoolsIcon,
  LighthouseIcon,
  LlmIcon,
  NetworkIcon,
  RocketIcon,
  ShieldIcon,
  SmartphoneIcon,
} from '@it-tech-blog/ui';

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
    icon: <AtomIcon />,
    label: { ko: 'React 심층 탐구', en: 'React Deep Dive' },
    size: 'lg',
    delay: 0.2,
    style: { top: '12rem', right: '42%', transform: 'translateX(-50%)' },
    href: '/react',
  },
  {
    icon: <LlmIcon />,
    label: { ko: 'LLM', en: 'LLM' },
    size: 'md',
    delay: 0.25,
    style: { top: '4rem', right: '8rem' },
    href: '/',
  },
  {
    icon: <NetworkIcon />,
    label: { ko: '네트워크', en: 'Network' },
    size: 'sm',
    delay: 0.3,
    style: { top: '16rem', left: '10rem' },
    href: '/',
  },
  {
    icon: <RocketIcon />,
    label: { ko: 'Next 심층 탐구', en: 'Next Deep Dive' },
    size: 'lg',
    delay: 0.35,
    style: { top: '9rem', right: '22%', transform: 'translateX(-50%)' },
    href: '/next',
  },
  {
    icon: <DesignPatternIcon />,
    label: { ko: '디자인 패턴', en: 'Design Patterns' },
    size: 'md',
    delay: 0.4,
    style: { top: '14rem', right: '4rem' },
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
    icon: <SmartphoneIcon />,
    label: { ko: 'React Native 심층 탐구', en: 'React Native Deep Dive' },
    size: 'lg',
    delay: 0.6,
    style: { bottom: '11rem', left: '50%', transform: 'translateX(-50%)' },
    href: '/',
  },
  {
    icon: <DevtoolsIcon />,
    label: { ko: '개발자도구', en: 'Devtools' },
    size: 'md',
    delay: 0.7,
    style: { bottom: '10rem', right: '15rem' },
    href: '/',
  },
  {
    icon: <LighthouseIcon />,
    label: { ko: 'Lighthouse', en: 'Lighthouse' },
    size: 'sm',
    delay: 0.8,
    style: { bottom: '6rem', left: '12rem' },
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
