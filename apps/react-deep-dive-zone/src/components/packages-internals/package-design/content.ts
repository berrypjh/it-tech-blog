import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type FlowNode = {
  id: 'user-code' | 'react' | 'reconciler' | 'renderer' | 'dom-native';
  label: string;
  subtitle?: string;
  /** 종합 다이어그램에서만 노출되는 한 문장 역할 설명. */
  description?: string;
  tone: ToneKey;
};

export type ValueCard = {
  id: 'responsibility' | 'env' | 'extensibility' | 'learnability';
  title: string;
  description: string;
  tone: ToneKey;
};

export type FlowStep = {
  id: 'jsx' | 'react' | 'reconciler' | 'react-dom';
  step: string;
  pkg: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type PackageDesignContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    a11y: string;
    main: FlowNode[];
  };
  recap: {
    eyebrow: string;
    title: string;
    description: string;
    main: FlowNode[];
    scheduler: { title: string; subtitle: string; description: string };
    shared: { title: string; subtitle: string; description: string };
    a11y: string;
    banner: string;
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ValueCard[];
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
  },
  {
    id: 'react',
    label: 'react',
    subtitle: '사용자 API',
    description: '개발자가 직접 호출하는 public API의 입구입니다.',
    tone: 'sky',
  },
  {
    id: 'reconciler',
    label: 'react-reconciler',
    subtitle: '렌더링 계산',
    description: 'Element를 Fiber로 바꾸고 변경을 계산합니다.',
    tone: 'teal',
  },
  {
    id: 'renderer',
    label: 'renderer',
    subtitle: '환경별 출력',
    description: 'react-dom이 React 트리를 브라우저와 서버 출력으로 연결합니다.',
    tone: 'violet',
  },
  { id: 'dom-native', label: 'DOM / Native', subtitle: '실제 환경', tone: 'blue' },
];

const MAIN_FLOW_EN: FlowNode[] = [
  {
    id: 'user-code',
    label: 'User code',
    subtitle: 'Components / Hooks',
    tone: 'indigo',
  },
  {
    id: 'react',
    label: 'react',
    subtitle: 'User-facing API',
    description: 'Entry point for the public API developers call directly.',
    tone: 'sky',
  },
  {
    id: 'reconciler',
    label: 'react-reconciler',
    subtitle: 'Rendering compute',
    description: 'Turns Elements into Fibers and computes diffs.',
    tone: 'teal',
  },
  {
    id: 'renderer',
    label: 'renderer',
    subtitle: 'Per-env output',
    description: 'react-dom wires the React tree to browser and server output.',
    tone: 'violet',
  },
  {
    id: 'dom-native',
    label: 'DOM / Native',
    subtitle: 'Real environment',
    tone: 'blue',
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
      a11y: '사용자 코드 → react → react-reconciler → renderer → DOM / Native 다섯 단계가 위에서 아래로 이어지는 핵심 파이프라인 다이어그램.',
      main: MAIN_FLOW_KO,
    },
    recap: {
      eyebrow: '01 · 회고와 최종 구조',
      title: '다섯 패키지 회고와 전체 구조',
      description: '챕터에서 본 다섯 패키지를 한 장의 구조도와 한 문장 요약으로 정리합니다.',
      main: MAIN_FLOW_KO,
      scheduler: {
        title: 'scheduler',
        subtitle: '실행 시점 조율',
        description: '작업 우선순위와 실행 타이밍을 관리합니다.',
      },
      shared: {
        title: 'shared',
        subtitle: '공통 기반',
        description: '심벌, 타입, 버전, 기능 플래그를 공유합니다.',
      },
      a11y: '사용자 코드 → react → react-reconciler → renderer → DOM / Native 중앙 흐름과, 우측에 scheduler / shared 두 보조 축이 있는 종합 다이어그램. 각 단계에는 패키지 역할을 한 문장으로 설명하는 문구가 붙어 있다.',
      banner: 'API는 분리되고, 계산은 공유되며, 반영은 환경별로 달라진다.',
    },
    values: {
      eyebrow: '02 · 설계 가치',
      title: '패키지 분리가 만든 설계 가치',
      description: '폴더가 아니라, React의 미래를 만든 네 가지 설계 결정입니다.',
      cards: [
        {
          id: 'responsibility',
          title: '책임 분리',
          description: 'API와 환경 반영이 섞이지 않는다.',
          tone: 'sky',
        },
        {
          id: 'env',
          title: '환경 독립성',
          description: '웹과 Native를 모두 수용할 수 있다.',
          tone: 'teal',
        },
        {
          id: 'extensibility',
          title: '확장성',
          description: '새 기능과 renderer를 받아들이기 쉽다.',
          tone: 'violet',
        },
        {
          id: 'learnability',
          title: '학습 가능성',
          description: '패키지 경계가 보이면 코드 탐색이 빨라진다.',
          tone: 'amber',
        },
      ],
      banner: 'React의 패키지 구조는 폴더 정리가 아니라 설계 전략이다.',
    },
    userFlow: {
      eyebrow: '03 · 코드 흐름',
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
          tone: 'indigo',
        },
        {
          id: 'react',
          step: 'Step 2',
          pkg: 'react',
          title: 'React Element 생성',
          description: 'JSX가 Element 객체로 변환',
          tone: 'sky',
        },
        {
          id: 'reconciler',
          step: 'Step 3',
          pkg: 'react-reconciler',
          title: 'Fiber 생성 및 렌더링 계산',
          description: 'Element를 Fiber로 변환하고 변경 계산',
          tone: 'teal',
        },
        {
          id: 'react-dom',
          step: 'Step 4',
          pkg: 'react-dom',
          title: 'DOM 반영',
          description: 'Host Config로 실제 DOM을 업데이트',
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
      a11y: 'A core pipeline diagram flowing top to bottom: user code → react → react-reconciler → renderer → DOM / Native.',
      main: MAIN_FLOW_EN,
    },
    recap: {
      eyebrow: '01 · RECAP & ARCHITECTURE',
      title: 'The five packages and the whole architecture',
      description: 'One map and one sentence per package for everything this chapter covered.',
      main: MAIN_FLOW_EN,
      scheduler: {
        title: 'scheduler',
        subtitle: 'Timing coordination',
        description: 'Manages work priority and execution timing.',
      },
      shared: {
        title: 'shared',
        subtitle: 'Common foundation',
        description: 'Shares symbols, types, version and feature flags.',
      },
      a11y: 'A combined diagram: the central flow user code → react → react-reconciler → renderer → DOM / Native, with scheduler and shared as two supporting axes on the right. Each step carries a one-sentence description of its package role.',
      banner: 'APIs are split, compute is shared, application differs per environment.',
    },
    values: {
      eyebrow: '02 · DESIGN VALUES',
      title: 'Design values produced by package separation',
      description: 'Not folder housekeeping — four decisions that shaped React’s future.',
      cards: [
        {
          id: 'responsibility',
          title: 'Separation of responsibility',
          description: 'API and environment application do not mix.',
          tone: 'sky',
        },
        {
          id: 'env',
          title: 'Environment independence',
          description: 'Both web and Native can be absorbed.',
          tone: 'teal',
        },
        {
          id: 'extensibility',
          title: 'Extensibility',
          description: 'New features and renderers slot in easily.',
          tone: 'violet',
        },
        {
          id: 'learnability',
          title: 'Learnability',
          description: 'Clear package boundaries make code navigation faster.',
          tone: 'amber',
        },
      ],
      banner: 'React’s package structure is a design strategy, not folder housekeeping.',
    },
    userFlow: {
      eyebrow: '03 · CODE FLOW',
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
          tone: 'indigo',
        },
        {
          id: 'react',
          step: 'Step 2',
          pkg: 'react',
          title: 'React Element creation',
          description: 'JSX becomes a React Element object',
          tone: 'sky',
        },
        {
          id: 'reconciler',
          step: 'Step 3',
          pkg: 'react-reconciler',
          title: 'Fiber creation & render computation',
          description: 'Element → Fiber and diff calculation',
          tone: 'teal',
        },
        {
          id: 'react-dom',
          step: 'Step 4',
          pkg: 'react-dom',
          title: 'DOM application',
          description: 'Host Config updates the real DOM',
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
