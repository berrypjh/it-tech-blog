import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../getting-started/_shared/tones';

export type { ToneKey };

export type PackageId = 'react' | 'react-reconciler' | 'renderer' | 'scheduler' | 'shared';

export type PackageAccent = 'sky' | 'cyan' | 'violet' | 'teal' | 'emerald' | 'amber';

export type FlowBoxKind = 'user-code' | 'react' | 'reconciler' | 'renderer' | 'dom' | 'native';

export type ArchitectureNode = {
  id: FlowBoxKind;
  label: string;
  caption: string;
  iconName: ArchitectureIconName;
  tone: ToneKey;
};

export type SideNode = {
  id: 'scheduler' | 'shared';
  label: string;
  caption: string;
  iconName: ArchitectureIconName;
  tone: ToneKey;
};

export type ArchitectureIconName =
  | 'code'
  | 'atom'
  | 'boxes'
  | 'monitor'
  | 'smartphone'
  | 'clock'
  | 'layers'
  | 'shield'
  | 'globe'
  | 'network'
  | 'book';

export type MisconceptionCard = {
  id: string;
  badgeWrong: string;
  badgeRight: string;
  wrong: string;
  right: string;
};

export type ExplanationCard = {
  id: PackageId;
  name: string;
  description: string;
  tone: ToneKey;
};

export type ReasonCard = {
  id: 'env' | 'responsibility' | 'extensibility' | 'learnability';
  title: string;
  description: string;
  tone: ToneKey;
  iconName: ArchitectureIconName;
};

export type FlowStep = {
  id: string;
  title: string;
  pkg: string;
  description: string;
  tone: ToneKey;
  iconName: ArchitectureIconName;
};

export type QuestionCard = {
  id: PackageId | 'react-dom';
  name: string;
  question: string;
  tone: ToneKey;
  iconName: ArchitectureIconName;
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  tone: ToneKey;
};

export type WhySplitContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    diagramFlowLabel: string;
    diagramSideLabel: string;
    architectureSectionId: string;
    relationsSectionId: string;
  };
  architecture: {
    mainFlow: ArchitectureNode[];
    side: SideNode[];
    leftCards: { id: string; title: string; description: string; tone: ToneKey }[];
    rightCards: ExplanationCard[];
  };
  misconception: {
    eyebrow: string;
    title: string;
    cards: MisconceptionCard[];
  };
  fullMap: {
    eyebrow: string;
    title: string;
    description: string;
    flowLabel: string;
    a11yFlow: string;
    sideLabel: string;
  };
  reasons: {
    eyebrow: string;
    title: string;
    cards: ReasonCard[];
    banner: string;
  };
  codeFlow: {
    eyebrow: string;
    title: string;
    description: string;
    code: string;
    codeCaption: string;
    steps: FlowStep[];
  };
  questions: {
    eyebrow: string;
    title: string;
    cards: QuestionCard[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    description: string;
    cards: QuizCard[];
  };
  nextStep: {
    eyebrow: string;
    line1: string;
    line2Before: string;
    line2Accent: string;
    line2After: string;
    line3: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

const koArchitecture: WhySplitContent['architecture'] = {
  mainFlow: [
    {
      id: 'user-code',
      label: '사용자 코드',
      caption: '컴포넌트 / Hooks / 이벤트',
      iconName: 'code',
      tone: 'indigo',
    },
    { id: 'react', label: 'react', caption: '사용자 API', iconName: 'atom', tone: 'sky' },
    {
      id: 'reconciler',
      label: 'react-reconciler',
      caption: '렌더링 계산',
      iconName: 'boxes',
      tone: 'cyan',
    },
    {
      id: 'renderer',
      label: 'renderer',
      caption: '환경별 출력',
      iconName: 'monitor',
      tone: 'violet',
    },
    { id: 'dom', label: 'DOM', caption: '브라우저', iconName: 'monitor', tone: 'blue' },
    { id: 'native', label: 'Native', caption: '네이티브', iconName: 'smartphone', tone: 'indigo' },
  ],
  side: [
    {
      id: 'scheduler',
      label: 'scheduler',
      caption: '실행 시점 조율',
      iconName: 'clock',
      tone: 'teal',
    },
    { id: 'shared', label: 'shared', caption: '공통 기반', iconName: 'layers', tone: 'amber' },
  ],
  leftCards: [
    {
      id: 'user-input',
      title: '사용자 입력 / 업데이트',
      description: '이벤트, 상태 변경 등 모든 변경의 출발점',
      tone: 'indigo',
    },
    {
      id: 'ui-change',
      title: '요청한 UI 변경',
      description: '렌더링 작업을 만드는 진입점',
      tone: 'sky',
    },
  ],
  rightCards: [
    {
      id: 'react',
      name: 'react',
      description: 'useState, useEffect 등 개발자에게 공개되는 API',
      tone: 'sky',
    },
    {
      id: 'react-reconciler',
      name: 'react-reconciler',
      description: 'Element → Fiber 변환, 비교, 변경 계산, commit 준비',
      tone: 'cyan',
    },
    {
      id: 'renderer',
      name: 'renderer',
      description: 'DOM 생성/수정, 텍스트 삽입 등 실제 환경에 반영',
      tone: 'violet',
    },
    {
      id: 'shared',
      name: 'shared',
      description: '타입, 상수, 심벌, 버전, 유틸 등 모든 패키지에서 공통 사용',
      tone: 'amber',
    },
  ],
};

const enArchitecture: WhySplitContent['architecture'] = {
  mainFlow: [
    {
      id: 'user-code',
      label: 'User Code',
      caption: 'Components / Hooks / Events',
      iconName: 'code',
      tone: 'indigo',
    },
    { id: 'react', label: 'react', caption: 'User-facing API', iconName: 'atom', tone: 'sky' },
    {
      id: 'reconciler',
      label: 'react-reconciler',
      caption: 'Rendering computation',
      iconName: 'boxes',
      tone: 'cyan',
    },
    {
      id: 'renderer',
      label: 'renderer',
      caption: 'Per-environment output',
      iconName: 'monitor',
      tone: 'violet',
    },
    { id: 'dom', label: 'DOM', caption: 'Browser', iconName: 'monitor', tone: 'blue' },
    {
      id: 'native',
      label: 'Native',
      caption: 'Native platforms',
      iconName: 'smartphone',
      tone: 'indigo',
    },
  ],
  side: [
    {
      id: 'scheduler',
      label: 'scheduler',
      caption: 'Execution timing',
      iconName: 'clock',
      tone: 'teal',
    },
    {
      id: 'shared',
      label: 'shared',
      caption: 'Common foundation',
      iconName: 'layers',
      tone: 'amber',
    },
  ],
  leftCards: [
    {
      id: 'user-input',
      title: 'User input / updates',
      description: 'Events, state changes — where everything begins',
      tone: 'indigo',
    },
    {
      id: 'ui-change',
      title: 'Requested UI change',
      description: 'The entry point that produces render work',
      tone: 'sky',
    },
  ],
  rightCards: [
    {
      id: 'react',
      name: 'react',
      description: 'Public API such as useState and useEffect',
      tone: 'sky',
    },
    {
      id: 'react-reconciler',
      name: 'react-reconciler',
      description: 'Element → Fiber conversion, diffing, commit prep',
      tone: 'cyan',
    },
    {
      id: 'renderer',
      name: 'renderer',
      description: 'Creates and updates real DOM / native output',
      tone: 'violet',
    },
    {
      id: 'shared',
      name: 'shared',
      description: 'Types, constants, symbols, utils used by every package',
      tone: 'amber',
    },
  ],
};

export const whySplitContent: Record<Locale, WhySplitContent> = {
  ko: {
    hero: {
      badge: '01 · React 아키텍처 이해하기',
      title: {
        line1: 'React는 하나의 패키지가',
        line2: '아니라, 역할이 분리된',
        line3: '시스템입니다.',
      },
      description:
        '사용자 API, 렌더링 계산, 실제 출력 환경, 스케줄링, 공통 기반층이 서로 다른 패키지로 협력합니다.',
      primaryCta: '전체 구조 먼저 보기',
      secondaryCta: '패키지 관계 살펴보기',
      diagramFlowLabel: 'main flow',
      diagramSideLabel: 'shared axis',
      architectureSectionId: 'section-architecture',
      relationsSectionId: 'section-reasons',
    },
    architecture: koArchitecture,
    misconception: {
      eyebrow: '02 · misconceptions',
      title: '흔한 오해 바로잡기',
      cards: [
        {
          id: 'all-in-react',
          badgeWrong: '오해 1',
          badgeRight: '정확히',
          wrong: 'React가 모든 걸 직접 처리한다.',
          right: '여러 패키지가 역할을 나누어 협력한다.',
        },
        {
          id: 'react-dom-is-react',
          badgeWrong: '오해 2',
          badgeRight: '정확히',
          wrong: 'react-dom이 곧 React의 본체다.',
          right: 'react-dom은 DOM 환경에 연결하는 renderer다.',
        },
        {
          id: 'scheduler-renders',
          badgeWrong: '오해 3',
          badgeRight: '정확히',
          wrong: 'scheduler가 렌더링을 수행한다.',
          right: 'scheduler는 실행 시점을 조율하는 기반 계층이다.',
        },
      ],
    },
    fullMap: {
      eyebrow: '03 · architecture map',
      title: 'React 패키지 아키텍처 전체 지도',
      description:
        '사용자 코드가 react를 거쳐 reconciler에서 계산되고, renderer가 환경별로 반영합니다. scheduler와 shared가 모든 단계를 떠받칩니다.',
      flowLabel: 'main flow',
      a11yFlow:
        '사용자 코드 → react → react-reconciler → renderer → DOM 또는 Native. scheduler와 shared는 모든 단계를 떠받치는 보조 축입니다.',
      sideLabel: 'side axis',
    },
    reasons: {
      eyebrow: '04 · why split',
      title: '왜 역할을 나누었는가?',
      cards: [
        {
          id: 'env',
          title: '환경 독립성',
          description: 'DOM뿐 아니라 Native, Web, 기타 환경으로 확장할 수 있다.',
          tone: 'sky',
          iconName: 'globe',
        },
        {
          id: 'responsibility',
          title: '책임 분리',
          description: '각 패키지가 한 가지 역할에 집중하여 복잡성이 섞여들지 않는다.',
          tone: 'cyan',
          iconName: 'shield',
        },
        {
          id: 'extensibility',
          title: '확장성',
          description: '새로운 renderer나 도구를 추가하기 쉬운 구조를 만들어준다.',
          tone: 'violet',
          iconName: 'network',
        },
        {
          id: 'learnability',
          title: '학습 가능성',
          description: '관심사를 나누어 학습하면 내부 구조를 단계적으로 이해할 수 있다.',
          tone: 'amber',
          iconName: 'book',
        },
      ],
      banner: 'React의 패키지 구조는 폴더 정리가 아니라 설계 전략이다.',
    },
    codeFlow: {
      eyebrow: '05 · code flow',
      title: '하나의 사용자 코드가 여러 패키지를 거치는 흐름',
      description: '단순한 컴포넌트 한 줄도 여섯 단계에 걸쳐 여러 패키지를 통과합니다.',
      code: `import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return <button>{count}</button>;
}`,
      codeCaption: 'App.jsx',
      steps: [
        {
          id: 'useState',
          title: 'useState 호출',
          pkg: 'react',
          description: '상태 훅은 react가 제공하는 API',
          tone: 'sky',
          iconName: 'atom',
        },
        {
          id: 'element',
          title: 'Element 생성',
          pkg: 'react',
          description: 'JSX가 Element 객체로 생성',
          tone: 'sky',
          iconName: 'code',
        },
        {
          id: 'render',
          title: '렌더링 계산',
          pkg: 'react-reconciler',
          description: 'Element를 Fiber로 변환하고 변경 계산',
          tone: 'cyan',
          iconName: 'boxes',
        },
        {
          id: 'dom-connect',
          title: 'DOM 연결',
          pkg: 'react-dom',
          description: 'Fiber 결과를 DOM에 적용',
          tone: 'violet',
          iconName: 'monitor',
        },
        {
          id: 'scheduler',
          title: '작업 실행 시점',
          pkg: 'scheduler',
          description: '언제, 얼마나, 어떤 작업을 실행할지 조율',
          tone: 'teal',
          iconName: 'clock',
        },
        {
          id: 'shared',
          title: '공통 타입 / 상수',
          pkg: 'shared',
          description: '모든 패키지가 공유하는 기반 제공',
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    questions: {
      eyebrow: '06 · package questions',
      title: '패키지별 핵심 질문',
      cards: [
        {
          id: 'react',
          name: 'react',
          question: '개발자가 직접 쓰는 API는 어디서 시작될까?',
          tone: 'sky',
          iconName: 'atom',
        },
        {
          id: 'react-dom',
          name: 'react-dom',
          question: '실제 브라우저 DOM 연결은 어디서 일어날까?',
          tone: 'violet',
          iconName: 'monitor',
        },
        {
          id: 'react-reconciler',
          name: 'react-reconciler',
          question: '무엇을 렌더링할지 계산하는 핵심은 어디일까?',
          tone: 'cyan',
          iconName: 'boxes',
        },
        {
          id: 'scheduler',
          name: 'scheduler',
          question: '작업 실행 시점은 어떻게 조율될까?',
          tone: 'teal',
          iconName: 'clock',
        },
        {
          id: 'shared',
          name: 'shared',
          question: '왜 여러 패키지에서 같은 내부 상수를 공유할까?',
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · quick quiz',
      title: '빠른 분류 퀴즈',
      description: '핵심 함수와 상수가 어느 패키지에 속하는지 떠올려 보세요.',
      cards: [
        {
          id: 'create-root',
          question: 'createRoot는 어느 패키지와 가까울까?',
          answer: 'react-dom',
          explanation: 'DOM과 연결하는 renderer의 진입점입니다.',
          tone: 'violet',
        },
        {
          id: 'create-fiber',
          question: 'createFiberFromElement는?',
          answer: 'react-reconciler',
          explanation: 'Element를 Fiber로 만드는 함수입니다.',
          tone: 'cyan',
        },
        {
          id: 'fragment',
          question: 'REACT_FRAGMENT_TYPE은?',
          answer: 'shared',
          explanation: '모든 패키지가 사용하는 공통 심벌입니다.',
          tone: 'amber',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      line1: '전체 구조를 잡았다면,',
      line2Before: '이제 사용자가 직접 만나는 첫 패키지, ',
      line2Accent: 'react',
      line2After: '의 역할부터 자세히 살펴봅니다.',
      line3: '',
      primaryCta: '다음: react 패키지 →',
      secondaryCta: '이전 페이지 다시 보기',
      primaryHref: '/react-package',
      secondaryHref: '/exploration-order',
    },
  },
  en: {
    hero: {
      badge: '01 · Understand React architecture',
      title: {
        line1: 'React is not one package —',
        line2: 'it is a system of',
        line3: 'separated roles.',
      },
      description:
        'The user API, render computation, output environments, scheduling, and a shared foundation each live in their own package and cooperate.',
      primaryCta: 'Start with the full map',
      secondaryCta: 'Inspect package relations',
      diagramFlowLabel: 'main flow',
      diagramSideLabel: 'shared axis',
      architectureSectionId: 'section-architecture',
      relationsSectionId: 'section-reasons',
    },
    architecture: enArchitecture,
    misconception: {
      eyebrow: '02 · misconceptions',
      title: 'Clear up common misconceptions',
      cards: [
        {
          id: 'all-in-react',
          badgeWrong: 'Myth 1',
          badgeRight: 'Truth',
          wrong: 'React handles everything itself.',
          right: 'Multiple packages divide roles and cooperate.',
        },
        {
          id: 'react-dom-is-react',
          badgeWrong: 'Myth 2',
          badgeRight: 'Truth',
          wrong: 'react-dom is the real body of React.',
          right: 'react-dom is the renderer that wires React to the DOM.',
        },
        {
          id: 'scheduler-renders',
          badgeWrong: 'Myth 3',
          badgeRight: 'Truth',
          wrong: 'The scheduler performs rendering.',
          right: 'The scheduler coordinates *when* work runs — nothing more.',
        },
      ],
    },
    fullMap: {
      eyebrow: '03 · architecture map',
      title: 'React package architecture — full map',
      description:
        'User code passes through react, is computed by the reconciler, and a renderer applies the result to each environment. scheduler and shared support every step.',
      flowLabel: 'main flow',
      a11yFlow:
        'User code → react → react-reconciler → renderer → DOM or Native. scheduler and shared are auxiliary axes that support every stage.',
      sideLabel: 'side axis',
    },
    reasons: {
      eyebrow: '04 · why split',
      title: 'Why split the roles?',
      cards: [
        {
          id: 'env',
          title: 'Environment independence',
          description: 'React can target DOM, Native, Web, and future environments.',
          tone: 'sky',
          iconName: 'globe',
        },
        {
          id: 'responsibility',
          title: 'Separation of responsibility',
          description: 'Each package owns one job, keeping complexity from leaking across layers.',
          tone: 'cyan',
          iconName: 'shield',
        },
        {
          id: 'extensibility',
          title: 'Extensibility',
          description: 'New renderers and tools can be added without rewiring the core.',
          tone: 'violet',
          iconName: 'network',
        },
        {
          id: 'learnability',
          title: 'Learnability',
          description: 'Splitting concerns lets you learn the internals one layer at a time.',
          tone: 'amber',
          iconName: 'book',
        },
      ],
      banner: 'React’s package structure is a design strategy, not folder housekeeping.',
    },
    codeFlow: {
      eyebrow: '05 · code flow',
      title: 'One snippet, many packages',
      description: 'Even a single component travels through six steps and several packages.',
      code: `import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return <button>{count}</button>;
}`,
      codeCaption: 'App.jsx',
      steps: [
        {
          id: 'useState',
          title: 'useState call',
          pkg: 'react',
          description: 'State hooks are part of the react package',
          tone: 'sky',
          iconName: 'atom',
        },
        {
          id: 'element',
          title: 'Element creation',
          pkg: 'react',
          description: 'JSX becomes a React Element object',
          tone: 'sky',
          iconName: 'code',
        },
        {
          id: 'render',
          title: 'Render computation',
          pkg: 'react-reconciler',
          description: 'Elements turn into Fibers, diffs are computed',
          tone: 'cyan',
          iconName: 'boxes',
        },
        {
          id: 'dom-connect',
          title: 'DOM commit',
          pkg: 'react-dom',
          description: 'Fiber results are applied to the DOM',
          tone: 'violet',
          iconName: 'monitor',
        },
        {
          id: 'scheduler',
          title: 'Execution timing',
          pkg: 'scheduler',
          description: 'Decides when, how long, and which work to run',
          tone: 'teal',
          iconName: 'clock',
        },
        {
          id: 'shared',
          title: 'Common types',
          pkg: 'shared',
          description: 'Provides the foundation every package depends on',
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    questions: {
      eyebrow: '06 · package questions',
      title: 'A core question per package',
      cards: [
        {
          id: 'react',
          name: 'react',
          question: 'Where does the developer-facing API begin?',
          tone: 'sky',
          iconName: 'atom',
        },
        {
          id: 'react-dom',
          name: 'react-dom',
          question: 'Where does the actual browser DOM connection happen?',
          tone: 'violet',
          iconName: 'monitor',
        },
        {
          id: 'react-reconciler',
          name: 'react-reconciler',
          question: 'Where is *what to render* actually computed?',
          tone: 'cyan',
          iconName: 'boxes',
        },
        {
          id: 'scheduler',
          name: 'scheduler',
          question: 'How is execution timing coordinated?',
          tone: 'teal',
          iconName: 'clock',
        },
        {
          id: 'shared',
          name: 'shared',
          question: 'Why do packages share the same internal constants?',
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · quick quiz',
      title: 'Quick classification quiz',
      description: 'Place each function or constant in the correct package.',
      cards: [
        {
          id: 'create-root',
          question: 'createRoot belongs to which package?',
          answer: 'react-dom',
          explanation: 'It is the entry point of the DOM renderer.',
          tone: 'violet',
        },
        {
          id: 'create-fiber',
          question: 'createFiberFromElement?',
          answer: 'react-reconciler',
          explanation: 'It turns an Element into a Fiber.',
          tone: 'cyan',
        },
        {
          id: 'fragment',
          question: 'REACT_FRAGMENT_TYPE?',
          answer: 'shared',
          explanation: 'A shared symbol every package uses.',
          tone: 'amber',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      line1: 'You now have the whole map.',
      line2Before: 'Next, the first package developers touch — ',
      line2Accent: 'react',
      line2After: ' — and what it really does.',
      line3: '',
      primaryCta: 'Next: the react package →',
      secondaryCta: 'Revisit the previous page',
      primaryHref: '/react-package',
      secondaryHref: '/exploration-order',
    },
  },
};
