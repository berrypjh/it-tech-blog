import {
  CloudIcon,
  BrainIcon,
  ShieldIcon,
  GitBranchIcon,
  CodeIcon,
  AtomIcon,
  WifiIcon,
  SmartphoneIcon,
  AccessibilityIcon,
} from './icons';

export type TopicSize = 'sm' | 'md' | 'lg';

export type Topic = {
  icon: React.ReactNode;
  label: string;
  size: TopicSize;
  delay: number;
  style: React.CSSProperties;
  href: string;
};

export const TOPICS: Topic[] = [
  {
    icon: <CloudIcon />,
    label: 'Cloud',
    size: 'lg',
    delay: 0.1,
    style: { top: '8rem', left: '5rem' },
    href: '/',
  },
  {
    icon: <BrainIcon />,
    label: 'AI & ML',
    size: 'md',
    delay: 0.2,
    style: { top: '8rem', right: '22rem' },
    href: '/',
  },
  {
    icon: <ShieldIcon />,
    label: 'Security',
    size: 'md',
    delay: 0.3,
    style: { top: '16rem', left: '25rem' },
    href: '/',
  },
  {
    icon: <GitBranchIcon />,
    label: 'DevOps',
    size: 'sm',
    delay: 0.4,
    style: { top: '24rem', left: '6rem' },
    href: '/topics/devops',
  },
  {
    icon: <CodeIcon />,
    label: 'Frontend',
    size: 'lg',
    delay: 0.6,
    style: { top: '20rem', right: '5rem' },
    href: '/',
  },
  {
    icon: <WifiIcon />,
    label: 'Wifi',
    size: 'md',
    delay: 0.7,
    style: { bottom: '10rem', left: '10rem' },
    href: '/',
  },
  {
    icon: <AtomIcon />,
    label: 'Science',
    size: 'sm',
    delay: 0.8,
    style: { bottom: '14rem', left: '50%', transform: 'translateX(-10rem)' },
    href: '/',
  },
  {
    icon: <AccessibilityIcon />,
    label: 'Accessibility',
    size: 'sm',
    delay: 1.0,
    style: { bottom: '20rem', right: '24rem' },
    href: '/accessibility',
  },
  {
    icon: <SmartphoneIcon />,
    label: 'Mobile',
    size: 'md',
    delay: 0.9,
    style: { bottom: '12rem', right: '7rem' },
    href: '/',
  },
];
