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
  ShieldIcon,
  SmartphoneIcon,
} from '@it-tech-blog/ui';

export type Localized = { ko: string; en: string };

export type TopicId =
  | 'accessibility'
  | 'security'
  | 'react'
  | 'llm'
  | 'network'
  | 'design-patterns'
  | 'bundler'
  | 'react-native'
  | 'devtools'
  | 'lighthouse'
  | 'data-structures';

type TopicBase = {
  id: TopicId;
  icon: React.ReactNode;
  label: Localized;
  description: Localized;
};

/** 존으로 연결된 토픽. `zone`은 ENABLED_ZONES 식별자, `href`는 호스트가 rewrite하는 경로다. */
export type ActiveTopic = TopicBase & { status: 'active'; zone: string; href: string };

/** 아직 존이 없는 토픽. 링크가 없다. */
export type PlannedTopic = TopicBase & { status: 'planned' };

export type Topic = ActiveTopic | PlannedTopic;

export const TOPICS: Topic[] = [
  {
    id: 'react',
    status: 'active',
    zone: 'react',
    href: '/react',
    icon: <AtomIcon />,
    label: { ko: 'React 심층 탐구', en: 'React Deep Dive' },
    description: {
      ko: 'Fiber, 렌더 단계, 스케줄러를 소스 코드로 따라갑니다.',
      en: 'Trace Fiber, the render phase and the scheduler through source code.',
    },
  },
  {
    id: 'accessibility',
    status: 'active',
    zone: 'accessibility',
    href: '/accessibility',
    icon: <AccessibilityIcon />,
    label: { ko: '웹접근성', en: 'Accessibility' },
    description: {
      ko: '모두가 쓸 수 있는 인터페이스를 설계하고 검증합니다.',
      en: 'Design and verify interfaces everyone can use.',
    },
  },
  {
    id: 'llm',
    status: 'planned',
    icon: <LlmIcon />,
    label: { ko: 'LLM 시스템', en: 'LLM Systems' },
    description: {
      ko: '모델에서 시스템까지, LLM 소프트웨어의 구조와 검증, 운영을 따라갑니다.',
      en: 'From model to system: structure, verification and operation of LLM software.',
    },
  },
  {
    id: 'network',
    status: 'planned',
    icon: <NetworkIcon />,
    label: { ko: '네트워크', en: 'Network' },
    description: {
      ko: '요청이 브라우저를 떠나 돌아오기까지의 여정.',
      en: 'The journey of a request from the browser and back.',
    },
  },
  {
    id: 'devtools',
    status: 'planned',
    icon: <DevtoolsIcon />,
    label: { ko: '개발자도구', en: 'Devtools' },
    description: {
      ko: '브라우저 개발자도구로 런타임을 관찰합니다.',
      en: 'Observe the runtime with browser developer tools.',
    },
  },
  {
    id: 'bundler',
    status: 'planned',
    icon: <BundlerIcon />,
    label: { ko: '번들러', en: 'Bundler' },
    description: {
      ko: '모듈 그래프가 하나의 번들로 압축되는 과정.',
      en: 'How a module graph is compressed into a bundle.',
    },
  },
  {
    id: 'react-native',
    status: 'planned',
    icon: <SmartphoneIcon />,
    label: { ko: 'React Native 심층 탐구', en: 'React Native Deep Dive' },
    description: {
      ko: '네이티브 브리지와 렌더러 구조를 들여다봅니다.',
      en: 'Look inside the native bridge and renderer.',
    },
  },
  {
    id: 'lighthouse',
    status: 'planned',
    icon: <LighthouseIcon />,
    label: { ko: 'Lighthouse', en: 'Lighthouse' },
    description: {
      ko: '성능 지표가 어떻게 측정되는지 해부합니다.',
      en: 'Dissect how performance metrics are measured.',
    },
  },
  {
    id: 'security',
    status: 'planned',
    icon: <ShieldIcon />,
    label: { ko: '보안', en: 'Security' },
    description: {
      ko: '웹 공격 기법과 방어 원리를 직접 재현합니다.',
      en: 'Reproduce web attacks and the principles that stop them.',
    },
  },
  {
    id: 'design-patterns',
    status: 'planned',
    icon: <DesignPatternIcon />,
    label: { ko: '디자인 패턴', en: 'Design Patterns' },
    description: {
      ko: '프런트엔드에서 반복되는 구조를 조립해 봅니다.',
      en: 'Assemble the structures that recur in frontend code.',
    },
  },
  {
    id: 'data-structures',
    status: 'planned',
    icon: <DataStructureIcon />,
    label: { ko: '자료구조', en: 'Data Structures' },
    description: {
      ko: '자료구조의 동작을 단계별로 시각화합니다.',
      en: 'Visualize how data structures behave, step by step.',
    },
  },
];

/** ENABLED_ZONES 값을 존 식별자 목록으로 파싱한다. */
export const parseEnabledZones = (value: string | undefined): string[] =>
  value
    ?.split(',')
    .map((zone) => zone.trim())
    .filter(Boolean) ?? [];

/**
 * 배포 시 노출할 토픽을 거른다.
 * 활성 존이 없으면(개발) 전체 토픽을, 있으면 해당 존에 연결된 토픽만 반환한다.
 */
export const getVisibleTopics = (
  enabledZones = parseEnabledZones(process.env.ENABLED_ZONES),
): Topic[] => {
  if (!enabledZones.length) return TOPICS;

  return TOPICS.filter((topic) => topic.status === 'active' && enabledZones.includes(topic.zone));
};
