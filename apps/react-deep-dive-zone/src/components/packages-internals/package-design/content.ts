import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/FinalLaunchBanner';
import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type PdIconName =
  | 'arrowRight'
  | 'atom'
  | 'box'
  | 'check'
  | 'checkList'
  | 'clock'
  | 'code'
  | 'compass'
  | 'cube'
  | 'database'
  | 'fileCode'
  | 'gitBranch'
  | 'help'
  | 'layers'
  | 'map'
  | 'monitor'
  | 'network'
  | 'share'
  | 'shield'
  | 'sparkles'
  | 'star'
  | 'workflow';

export type FlowNode = {
  id: string;
  label: string;
  subtitle?: string;
  tone: ToneKey;
  iconName: PdIconName;
};

export type RecapCard = {
  id: string;
  name: string;
  role: string;
  description: string;
  tone: ToneKey;
  iconName: PdIconName;
  emphasized?: boolean;
};

export type ValueCard = {
  id: string;
  title: string;
  description: string;
  tone: ToneKey;
  iconName: PdIconName;
};

export type FlowStep = {
  id: string;
  step: string;
  pkg: string;
  title: string;
  description: string;
  iconName: PdIconName;
  tone: ToneKey;
};

export type BridgeCard = {
  id: string;
  title: string;
  description: string;
  iconName: PdIconName;
  tone: ToneKey;
  emphasized?: boolean;
};

export type PackageDesignContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    a11y: string;
    main: FlowNode[];
    sideScheduler: { title: string; subtitle: string; description: string };
    sideShared: { title: string; subtitle: string; description: string };
  };
  recap: {
    eyebrow: string;
    title: string;
    description: string;
    cards: RecapCard[];
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ValueCard[];
    banner: string;
  };
  finalDiagram: {
    eyebrow: string;
    title: string;
    description: string;
    main: FlowNode[];
    scheduler: { title: string; subtitle: string; description: string };
    shared: { title: string; subtitle: string; description: string };
    banner: string;
  };
  userFlow: {
    eyebrow: string;
    title: string;
    description: string;
    code: string;
    codeCaption: string;
    steps: FlowStep[];
    sideScheduler: { title: string; description: string };
    sideShared: { title: string; description: string };
  };
  checklist: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { id: string; text: string; done: boolean }[];
  };
  bridge: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: BridgeCard[];
  };
  finale: FinaleBannerContent;
};

const APP_CODE = `function App() {
  return <button>Save</button>;
}`;

const MAIN_FLOW_KO: FlowNode[] = [
  {
    id: 'user-code',
    label: '사용자 코드',
    subtitle: '컴포넌트 / Hooks',
    tone: 'indigo',
    iconName: 'code',
  },
  { id: 'react', label: 'react', subtitle: '사용자 API', tone: 'sky', iconName: 'atom' },
  {
    id: 'reconciler',
    label: 'react-reconciler',
    subtitle: '렌더링 계산',
    tone: 'teal',
    iconName: 'cube',
  },
  {
    id: 'renderer',
    label: 'renderer',
    subtitle: '환경별 출력',
    tone: 'violet',
    iconName: 'monitor',
  },
  { id: 'dom-native', label: 'DOM / Native', subtitle: '실제 환경', tone: 'blue', iconName: 'box' },
];

const MAIN_FLOW_EN: FlowNode[] = [
  {
    id: 'user-code',
    label: 'User code',
    subtitle: 'Components / Hooks',
    tone: 'indigo',
    iconName: 'code',
  },
  { id: 'react', label: 'react', subtitle: 'User-facing API', tone: 'sky', iconName: 'atom' },
  {
    id: 'reconciler',
    label: 'react-reconciler',
    subtitle: 'Rendering compute',
    tone: 'teal',
    iconName: 'cube',
  },
  {
    id: 'renderer',
    label: 'renderer',
    subtitle: 'Per-env output',
    tone: 'violet',
    iconName: 'monitor',
  },
  {
    id: 'dom-native',
    label: 'DOM / Native',
    subtitle: 'Real environment',
    tone: 'blue',
    iconName: 'box',
  },
];

export const packageDesignContent: Record<Locale, PackageDesignContent> = {
  ko: {
    hero: {
      badge: '패키지 구조 · 10/10단계',
      title: {
        line1: '패키지 분리는',
        line2: 'React의 확장성을 만든',
        line3: '설계 선택입니다.',
      },
      description:
        'API, 렌더링 계산, 환경별 반영, 작업 조율, 공통 기반을 나누었기 때문에 React는 더 넓은 환경과 더 복잡한 기능을 수용할 수 있었습니다.',
      primaryCta: '최종 구조 보기',
      secondaryCta: '체크리스트 확인하기',
      primaryHref: '#section-final-diagram',
      secondaryHref: '#section-checklist',
      a11y: '사용자 코드 → react → react-reconciler → renderer → DOM / Native 다섯 단계의 중앙 흐름이 위에서 아래로 이어지고, 우측에 scheduler(실행 타이밍 조율)와 shared(공통 타입 / 상수 / 심벌) 두 보조 축이 점선으로 연결된다.',
      main: MAIN_FLOW_KO,
      sideScheduler: {
        title: 'scheduler',
        subtitle: '실행 타이밍 조율',
        description: '작업의 우선순위와 실행 시점을 결정',
      },
      sideShared: {
        title: 'shared',
        subtitle: '공통 기반',
        description: '공통 타입 / 상수 / 심벌',
      },
    },
    recap: {
      eyebrow: '02 · recap',
      title: '앞선 페이지 핵심 회고',
      description: '챕터에서 본 다섯 패키지의 역할을 한 문장씩 정리합니다.',
      cards: [
        {
          id: 'react',
          name: 'react',
          role: '사용자 API',
          description: '개발자가 직접 호출하는 public API의 입구입니다.',
          tone: 'sky',
          iconName: 'atom',
        },
        {
          id: 'react-dom',
          name: 'react-dom',
          role: 'DOM / 서버 renderer',
          description: 'React 트리를 브라우저와 서버 출력으로 연결합니다.',
          tone: 'emerald',
          iconName: 'monitor',
        },
        {
          id: 'react-reconciler',
          name: 'react-reconciler',
          role: '렌더링 계산',
          description: 'Element를 Fiber로 바꾸고 변경을 계산합니다.',
          tone: 'teal',
          iconName: 'cube',
          emphasized: true,
        },
        {
          id: 'scheduler',
          name: 'scheduler',
          role: '실행 시점 조율',
          description: '작업 우선순위와 실행 타이밍을 관리합니다.',
          tone: 'cyan',
          iconName: 'clock',
        },
        {
          id: 'shared',
          name: 'shared',
          role: '공통 기반',
          description: '심벌, 타입, 버전, 기능 플래그를 공유합니다.',
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    values: {
      eyebrow: '03 · design values',
      title: '패키지 분리가 만든 설계 가치',
      description: '폴더가 아니라, React의 미래를 만든 네 가지 설계 결정입니다.',
      cards: [
        {
          id: 'responsibility',
          title: '책임 분리',
          description: 'API와 환경 반영이 섞이지 않는다.',
          tone: 'sky',
          iconName: 'shield',
        },
        {
          id: 'env',
          title: '환경 독립성',
          description: '웹과 Native를 모두 수용할 수 있다.',
          tone: 'teal',
          iconName: 'compass',
        },
        {
          id: 'extensibility',
          title: '확장성',
          description: '새 기능과 renderer를 받아들이기 쉽다.',
          tone: 'violet',
          iconName: 'network',
        },
        {
          id: 'learnability',
          title: '학습 가능성',
          description: '패키지 경계가 보이면 코드 탐색이 빨라진다.',
          tone: 'amber',
          iconName: 'map',
        },
      ],
      banner: 'React의 패키지 구조는 폴더 정리가 아니라 설계 전략이다.',
    },
    finalDiagram: {
      eyebrow: '04 · final architecture',
      title: '전체 구조 최종 다이어그램',
      description: '챕터를 한 장으로 요약하는 종합 지도입니다.',
      main: MAIN_FLOW_KO,
      scheduler: {
        title: 'scheduler',
        subtitle: '실행 타이밍 조율',
        description: 'reconciler 작업의 우선순위와 실행 시점을 결정합니다.',
      },
      shared: {
        title: 'shared',
        subtitle: '공통 기반',
        description: '모든 패키지가 의존하는 공통 타입 / 상수 / 심벌을 제공합니다.',
      },
      banner: 'API는 분리되고, 계산은 공유되며, 반영은 환경별로 달라진다.',
    },
    userFlow: {
      eyebrow: '05 · code flow',
      title: '하나의 사용자 코드가 패키지를 거치는 전체 흐름',
      description: '간단한 컴포넌트도 네 패키지를 거쳐 화면이 됩니다.',
      code: APP_CODE,
      codeCaption: 'App.jsx',
      steps: [
        {
          id: 'jsx',
          step: 'Step 1',
          pkg: 'JSX',
          title: 'JSX 작성',
          description: '개발자가 작성한 컴포넌트 정의',
          iconName: 'code',
          tone: 'indigo',
        },
        {
          id: 'react',
          step: 'Step 2',
          pkg: 'react',
          title: 'React Element 생성',
          description: 'JSX가 Element 객체로 변환',
          iconName: 'atom',
          tone: 'sky',
        },
        {
          id: 'reconciler',
          step: 'Step 3',
          pkg: 'react-reconciler',
          title: 'Fiber 생성 및 렌더링 계산',
          description: 'Element를 Fiber로 변환하고 변경 계산',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'react-dom',
          step: 'Step 4',
          pkg: 'react-dom',
          title: 'DOM 반영',
          description: 'Host Config로 실제 DOM을 업데이트',
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
      sideScheduler: {
        title: 'scheduler',
        description: '작업 타이밍 조율 — 언제 실행할지 결정',
      },
      sideShared: {
        title: 'shared',
        description: '공통 심벌 / 타입 제공 — 모든 단계 기반',
      },
    },
    checklist: {
      eyebrow: '06 · final checklist',
      title: '최종 체크리스트',
      intro: '나는 설명할 수 있는가?',
      items: [
        { id: 'q1', text: 'React는 왜 여러 패키지로 나뉘는가?', done: true },
        { id: 'q2', text: 'react와 react-dom은 무엇이 다른가?', done: true },
        { id: 'q3', text: 'react-reconciler가 왜 핵심인가?', done: true },
        { id: 'q4', text: 'renderer와 reconciler의 역할 차이는 무엇인가?', done: true },
        { id: 'q5', text: 'scheduler는 무엇을 조율하는가?', done: false },
        { id: 'q6', text: 'shared는 왜 필요한가?', done: false },
        { id: 'q7', text: 'React Native와 무엇을 공유하는가?', done: false },
        { id: 'q8', text: 'DOM 전용 코드와 공통 코드의 경계는 어디인가?', done: false },
      ],
    },
    bridge: {
      eyebrow: '07 · next chapter',
      title: '다음 대주제 연결',
      intro:
        '이제 React의 패키지 경계를 이해했습니다. 다음은 그 패키지들이 실제로 무엇을 주고받는지, 즉 React Element와 JSX가 어떤 내부 표현으로 바뀌는지 살펴볼 차례입니다.',
      cards: [
        {
          id: 'boundary',
          title: '패키지 경계 이해',
          description: 'react, reconciler, renderer의 책임을 구분했다.',
          iconName: 'map',
          tone: 'teal',
        },
        {
          id: 'exchange',
          title: '오가는 데이터 보기',
          description: '패키지들이 주고받는 핵심 객체를 살펴본다.',
          iconName: 'share',
          tone: 'cyan',
        },
        {
          id: 'element',
          title: 'React Element와 JSX',
          description: 'JSX가 어떤 내부 표현으로 바뀌는지 읽는다.',
          iconName: 'fileCode',
          tone: 'violet',
          emphasized: true,
        },
      ],
    },
    finale: {
      progressLabel: '3/15 챕터 완료',
      copyLine1: '패키지 구조와 역할을',
      copyLine2: '모두 살펴봤습니다.',
      copyLine3: '이제 React Element와 JSX로.',
      primaryCta: 'React Element와 JSX의 정체 읽기',
      primaryHref: '/jsx-is-not-html',
      secondaryCta: '패키지 구조 처음부터 다시 보기',
      secondaryHref: '/why-split',
    },
  },
  en: {
    hero: {
      badge: 'Packages · 10/10',
      title: {
        line1: 'Package separation is',
        line2: 'the design choice that gave React',
        line3: 'its extensibility.',
      },
      description:
        'By splitting the user API, render computation, per-environment application, work coordination, and shared foundation, React can absorb broader environments and more complex features.',
      primaryCta: 'See the final structure',
      secondaryCta: 'Check the checklist',
      primaryHref: '#section-final-diagram',
      secondaryHref: '#section-checklist',
      a11y: 'A five-step vertical main flow connects user code → react → react-reconciler → renderer → DOM / Native, with two side axes (scheduler for timing, shared for common types/constants/symbols) dashed-connected on the right.',
      main: MAIN_FLOW_EN,
      sideScheduler: {
        title: 'scheduler',
        subtitle: 'Timing coordination',
        description: 'Decides work priority and when to run it',
      },
      sideShared: {
        title: 'shared',
        subtitle: 'Common foundation',
        description: 'Shared types / constants / symbols',
      },
    },
    recap: {
      eyebrow: '02 · recap',
      title: 'Recap of the previous pages',
      description: 'One-sentence roles for the five packages covered in this chapter.',
      cards: [
        {
          id: 'react',
          name: 'react',
          role: 'User-facing API',
          description: 'Entry point for the public API developers call directly.',
          tone: 'sky',
          iconName: 'atom',
        },
        {
          id: 'react-dom',
          name: 'react-dom',
          role: 'DOM / Server renderer',
          description: 'Wires the React tree to browser and server output.',
          tone: 'emerald',
          iconName: 'monitor',
        },
        {
          id: 'react-reconciler',
          name: 'react-reconciler',
          role: 'Rendering compute',
          description: 'Turns Elements into Fibers and computes diffs.',
          tone: 'teal',
          iconName: 'cube',
          emphasized: true,
        },
        {
          id: 'scheduler',
          name: 'scheduler',
          role: 'Timing coordination',
          description: 'Manages work priority and execution timing.',
          tone: 'cyan',
          iconName: 'clock',
        },
        {
          id: 'shared',
          name: 'shared',
          role: 'Common foundation',
          description: 'Shares symbols, types, version and feature flags.',
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    values: {
      eyebrow: '03 · design values',
      title: 'Design values produced by package separation',
      description: 'Not folder housekeeping — four decisions that shaped React’s future.',
      cards: [
        {
          id: 'responsibility',
          title: 'Separation of responsibility',
          description: 'API and environment application do not mix.',
          tone: 'sky',
          iconName: 'shield',
        },
        {
          id: 'env',
          title: 'Environment independence',
          description: 'Both web and Native can be absorbed.',
          tone: 'teal',
          iconName: 'compass',
        },
        {
          id: 'extensibility',
          title: 'Extensibility',
          description: 'New features and renderers slot in easily.',
          tone: 'violet',
          iconName: 'network',
        },
        {
          id: 'learnability',
          title: 'Learnability',
          description: 'Clear package boundaries make code navigation faster.',
          tone: 'amber',
          iconName: 'map',
        },
      ],
      banner: 'React’s package structure is a design strategy, not folder housekeeping.',
    },
    finalDiagram: {
      eyebrow: '04 · final architecture',
      title: 'Final architecture diagram',
      description: 'The whole chapter on one map.',
      main: MAIN_FLOW_EN,
      scheduler: {
        title: 'scheduler',
        subtitle: 'Timing coordination',
        description: 'Decides priority and timing for reconciler work.',
      },
      shared: {
        title: 'shared',
        subtitle: 'Common foundation',
        description: 'Provides shared types / constants / symbols for every package.',
      },
      banner: 'APIs are split, compute is shared, application differs per environment.',
    },
    userFlow: {
      eyebrow: '05 · code flow',
      title: 'A single piece of user code, across the packages',
      description: 'Even a tiny component travels through four packages on its way to the screen.',
      code: APP_CODE,
      codeCaption: 'App.jsx',
      steps: [
        {
          id: 'jsx',
          step: 'Step 1',
          pkg: 'JSX',
          title: 'Write JSX',
          description: 'A component definition written by the developer',
          iconName: 'code',
          tone: 'indigo',
        },
        {
          id: 'react',
          step: 'Step 2',
          pkg: 'react',
          title: 'React Element creation',
          description: 'JSX becomes a React Element object',
          iconName: 'atom',
          tone: 'sky',
        },
        {
          id: 'reconciler',
          step: 'Step 3',
          pkg: 'react-reconciler',
          title: 'Fiber creation & render computation',
          description: 'Element → Fiber and diff calculation',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'react-dom',
          step: 'Step 4',
          pkg: 'react-dom',
          title: 'DOM application',
          description: 'Host Config updates the real DOM',
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
      sideScheduler: {
        title: 'scheduler',
        description: 'Coordinates work timing — when to run it',
      },
      sideShared: {
        title: 'shared',
        description: 'Common symbols / types — the base for every step',
      },
    },
    checklist: {
      eyebrow: '06 · final checklist',
      title: 'Final checklist',
      intro: 'Can I explain…',
      items: [
        { id: 'q1', text: 'Why React is split into multiple packages?', done: true },
        { id: 'q2', text: 'How react and react-dom differ?', done: true },
        { id: 'q3', text: 'Why react-reconciler is the core?', done: true },
        { id: 'q4', text: 'The role difference between renderer and reconciler?', done: true },
        { id: 'q5', text: 'What scheduler coordinates?', done: false },
        { id: 'q6', text: 'Why shared is necessary?', done: false },
        { id: 'q7', text: 'What React shares with React Native?', done: false },
        { id: 'q8', text: 'Where the boundary between DOM-only and shared code is?', done: false },
      ],
    },
    bridge: {
      eyebrow: '07 · next chapter',
      title: 'Bridge to the next topic',
      intro:
        'Now that the package boundaries are clear, the next topic is what those packages actually exchange — how JSX and React Element turn into internal representations.',
      cards: [
        {
          id: 'boundary',
          title: 'Understand boundaries',
          description: 'You drew the line between react, reconciler, renderer.',
          iconName: 'map',
          tone: 'teal',
        },
        {
          id: 'exchange',
          title: 'See what crosses them',
          description: 'Look at the core objects packages exchange.',
          iconName: 'share',
          tone: 'cyan',
        },
        {
          id: 'element',
          title: 'React Element & JSX',
          description: 'Read how JSX turns into internal representations.',
          iconName: 'fileCode',
          tone: 'violet',
          emphasized: true,
        },
      ],
    },
    finale: {
      progressLabel: 'Chapter 3 of 15 complete',
      copyLine1: 'You explored the package',
      copyLine2: 'structure and roles.',
      copyLine3: 'Now on to Elements and JSX.',
      primaryCta: 'Read what Elements & JSX really are',
      primaryHref: '/jsx-is-not-html',
      secondaryCta: 'Review packages from the start',
      secondaryHref: '/why-split',
    },
  },
};
