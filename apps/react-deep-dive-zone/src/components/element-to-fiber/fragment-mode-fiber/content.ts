import type { Locale } from '@it-tech-blog/preferences';

export type FlowStep = {
  id: string;
  text: string;
  subtext?: string;
};

export type WorkTagCard = {
  id: string;
  title: string;
  subtitle?: string;
  value?: string;
  description: string;
  variant: 'fragment' | 'mode' | 'info';
};

export type SpecialTypeCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'loader' | 'list' | 'eye' | 'zap' | 'scan';
  accent: 'sky' | 'cyan' | 'violet' | 'amber' | 'emerald';
};

export type QuizCard = {
  id: string;
  badge: string;
  question: string;
  answer: string;
  reason: string;
  accent: 'purple' | 'green';
};

export type ChecklistItem = {
  id: string;
  text: string;
};

export type FragmentModeFiberContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    typeLabel: string;
    fragmentTitle: string;
    fragmentSubtitle: string;
    fragmentResultTitle: string;
    fragmentResultItems: string[];
    strictTitle: string;
    strictSubtitle: string;
    modeResultTitle: string;
    modeResultItems: string[];
  };
  fragmentFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    jsxLabel: string;
    jsxCode: string;
    steps: FlowStep[];
    infoBody: string;
  };
  strictFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    jsxLabel: string;
    jsxCode: string;
    steps: FlowStep[];
    infoBody: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    spotLabel: string;
    spot: string;
    questionLabel: string;
    question: string;
    hintCta: string;
    hint: string;
    codeTitle: string;
    codeLines: {
      line: string;
      emphasis?: 'fragment' | 'mode';
    }[];
    bottomNote: string;
  };
  workTags: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: WorkTagCard[];
  };
  others: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: SpecialTypeCard[];
    footnote: string;
  };
  understanding: {
    badge: string;
    eyebrow: string;
    title: string;
    answerLabel: string;
    reasonLabel: string;
    cards: QuizCard[];
  };
  checklist: {
    badge: string;
    eyebrow: string;
    title: string;
    items: ChecklistItem[];
  };
  next: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
  };
};

const ko: FragmentModeFiberContent = {
  hero: {
    badge: 'CHAPTER 10',
    title: {
      line1: '모든 Element가',
      line2: '같은 방식으로 Fiber가',
      line3: '되지는 않습니다.',
    },
    description:
      'Fragment와 StrictMode처럼 React가 특별하게 이해하는 타입은 전용 Fiber 경로를 가집니다.',
    typeLabel: 'type',
    fragmentTitle: 'Fragment',
    fragmentSubtitle: '(REACT_FRAGMENT_TYPE)',
    fragmentResultTitle: 'Fragment Fiber',
    fragmentResultItems: ['자식들을 묶어주는 보이지 않는 노드', 'DOM을 직접 만들지 않음'],
    strictTitle: 'StrictMode',
    strictSubtitle: '(REACT_STRICT_MODE_TYPE)',
    modeResultTitle: 'Mode Fiber',
    modeResultItems: ['StrictMode 관련 flags 보유', '개발 모드에서 추가 검사 수행'],
  },
  fragmentFlow: {
    badge: '01',
    eyebrow: '보라 흐름',
    title: 'Fragment 흐름',
    description: 'JSX Fragment는 createFiberFromFragment로 향하는 전용 경로를 가집니다.',
    jsxLabel: 'JSX',
    jsxCode: '<>\n  <Header />\n  <Main />\n</>',
    steps: [
      { id: 's1', text: 'REACT_FRAGMENT_TYPE' },
      { id: 's2', text: 'createFiberFromFragment' },
      { id: 's3', text: 'Fragment Fiber', subtext: '(Work Tag 7)' },
    ],
    infoBody: 'Fragment는 실제 DOM 요소가 아니라 자식들을 그룹화하기 위한 논리적 컨테이너입니다.',
  },
  strictFlow: {
    badge: '02',
    eyebrow: '민트 흐름',
    title: 'StrictMode / Mode 흐름',
    description: 'StrictMode는 Mode Fiber로 처리되어 strict mode 관련 내부 flag를 보유합니다.',
    jsxLabel: 'JSX',
    jsxCode: '<StrictMode>\n  <App />\n</StrictMode>',
    steps: [
      { id: 's1', text: 'REACT_STRICT_MODE_TYPE' },
      { id: 's2', text: 'fiberTag = Mode' },
      {
        id: 's3',
        text: 'strict mode 관련 내부 flag 반영',
        subtext: '(Mode Fiber, Work Tag 8)',
      },
    ],
    infoBody: 'StrictMode는 개발 모드에서 추가적인 검사를 수행하도록 돕는 내부 전용 타입입니다.',
  },
  checkpoint: {
    badge: '03',
    eyebrow: '소스 코드로 들어가기',
    title: '실제 코드 체크포인트',
    description:
      'switch (type) 안에서 Fragment는 즉시 return, StrictMode는 Mode Fiber tag로 분기됩니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    spotLabel: '볼 지점',
    spot: 'REACT_FRAGMENT_TYPE, REACT_STRICT_MODE_TYPE',
    questionLabel: '학습 질문',
    question: '특수 타입은 왜 일반 분기보다 별도 경로를 가지는가?',
    hintCta: '힌트 보기',
    hint: 'Fragment는 자식 그룹화 전용이고, StrictMode는 개발 검사 flag를 보유해야 합니다. 둘 다 일반 DOM/컴포넌트와 다른 처리가 필요하므로 switch (type)에서 별도 case로 분기됩니다.',
    codeTitle: 'ReactFiber.js',
    codeLines: [
      { line: 'switch (type) {' },
      { line: '  case REACT_FRAGMENT_TYPE:', emphasis: 'fragment' },
      { line: '    // Fragment 전용 경로', emphasis: 'fragment' },
      {
        line: '    return createFiberFromFragment(pendingProps, mode, lanes, key);',
        emphasis: 'fragment',
      },
      { line: '' },
      { line: '  case REACT_STRICT_MODE_TYPE:', emphasis: 'mode' },
      { line: '    // StrictMode는 Mode Fiber로 처리', emphasis: 'mode' },
      { line: '    fiberTag = Mode;', emphasis: 'mode' },
      { line: '    mode |= StrictLegacyMode;', emphasis: 'mode' },
      { line: '    break;', emphasis: 'mode' },
      { line: '' },
      { line: '  // ... 다른 특수 타입들' },
      { line: '}' },
    ],
    bottomNote: '특수 타입은 type 자체가 고유 심벌이므로 일반 typeof 분기와 다르게 처리됩니다.',
  },
  workTags: {
    badge: '04',
    eyebrow: '내부 분류 값',
    title: 'Work Tag 카드',
    description:
      'Fragment와 Mode의 Work Tag 숫자를 함께 기억하면 React 내부 코드를 읽기 쉬워집니다.',
    cards: [
      {
        id: 'fragment',
        title: 'Fragment',
        subtitle: '(REACT_FRAGMENT_TYPE)',
        value: 'Work Tag 7',
        description:
          '자식들을 묶는 논리적 컨테이너로, DOM을 직접 생성하지 않는 보이지 않는 Fiber 노드입니다.',
        variant: 'fragment',
      },
      {
        id: 'mode',
        title: 'Mode',
        subtitle: '(REACT_STRICT_MODE_TYPE)',
        value: 'Work Tag 8',
        description:
          'StrictMode 관련 설정과 플래그를 보유하며, 개발 모드에서 추가 검사를 수행합니다.',
        variant: 'mode',
      },
      {
        id: 'info',
        title: 'Work Tag란?',
        description:
          'Fiber가 어떤 종류의 노드인지를 나타내는 내부 분류 값입니다. React는 이 값으로 각 노드의 동작 방식을 결정합니다.',
        variant: 'info',
      },
    ],
  },
  others: {
    badge: '05',
    eyebrow: '확장 주제',
    title: '다른 특수 타입도 있을까?',
    description:
      'React에는 다양한 특수 타입이 존재하며, 각 타입은 전용 Fiber 생성 경로를 가질 수 있습니다.',
    cards: [
      {
        id: 'suspense',
        title: 'Suspense',
        subtitle: '로딩 상태 처리',
        description: '전용 Fiber 경로',
        iconName: 'loader',
        accent: 'sky',
      },
      {
        id: 'suspense-list',
        title: 'SuspenseList',
        subtitle: '여러 Suspense 순서 관리',
        description: '전용 Fiber 경로',
        iconName: 'list',
        accent: 'cyan',
      },
      {
        id: 'offscreen',
        title: 'Offscreen',
        subtitle: '보이기 / 숨기기 상태 관리',
        description: '전용 Fiber 경로',
        iconName: 'eye',
        accent: 'violet',
      },
      {
        id: 'activity',
        title: 'Activity',
        subtitle: '비동기 활동 상태 관리',
        description: '전용 Fiber 경로',
        iconName: 'zap',
        accent: 'amber',
      },
      {
        id: 'view-transition',
        title: 'ViewTransition',
        subtitle: '뷰 전환 애니메이션 연계',
        description: '전용 Fiber 경로',
        iconName: 'scan',
        accent: 'emerald',
      },
    ],
    footnote: '버전과 환경에 따라 지원 여부와 내부 이름이 달라질 수 있습니다.',
  },
  understanding: {
    badge: '06',
    eyebrow: '복습',
    title: '이해 확인',
    answerLabel: '정답',
    reasonLabel: '이유',
    cards: [
      {
        id: 'q1',
        badge: 'Q1',
        question: 'Fragment는 일반 FunctionComponent처럼 처리될까?',
        answer: '아니다. Fragment 전용 Fiber 경로가 있다.',
        reason:
          'Fragment는 자식들을 그룹화하기 위한 특수 타입이며, DOM을 직접 만들지 않기 때문에 별도 Fiber가 필요하다.',
        accent: 'purple',
      },
      {
        id: 'q2',
        badge: 'Q2',
        question: 'StrictMode는 무엇을 나타내는가?',
        answer: 'Mode Fiber로 이어지는 React 내부 특수 타입.',
        reason:
          'StrictMode는 개발 모드에서 추가 검사와 경고를 제공하기 위해 Mode Fiber로 처리되어 내부 flag를 관리한다.',
        accent: 'green',
      },
    ],
  },
  checklist: {
    badge: '07',
    eyebrow: '한 줄 요약',
    title: '빠른 체크리스트',
    items: [
      { id: 'c1', text: 'Fragment는 REACT_FRAGMENT_TYPE으로 처리된다' },
      { id: 'c2', text: 'StrictMode는 REACT_STRICT_MODE_TYPE으로 처리된다' },
      { id: 'c3', text: 'Fragment → Work Tag 7 / Mode → Work Tag 8' },
      { id: 'c4', text: '특수 타입은 전용 Fiber 생성 경로를 가진다' },
      { id: 'c5', text: '일반 타입과 다르게 처리되어야 하는 이유가 있다' },
    ],
  },
  next: {
    badge: '08',
    eyebrow: '다음 페이지',
    title: '다음으로 넘어가기',
    description:
      '어떤 Element가 어떤 Fiber가 되는지 봤다면, 이제 기존 Fiber를 재사용할지 판단하는 key의 역할로 넘어갑니다.',
    primaryCta: '다음: key와 Fiber 재사용',
    primaryHref: '/key-reuse',
  },
};

const en: FragmentModeFiberContent = {
  hero: {
    badge: 'CHAPTER 10',
    title: {
      line1: 'Not every Element',
      line2: 'becomes a Fiber',
      line3: 'the same way.',
    },
    description: 'Special types like Fragment and StrictMode have their own dedicated Fiber paths.',
    typeLabel: 'type',
    fragmentTitle: 'Fragment',
    fragmentSubtitle: '(REACT_FRAGMENT_TYPE)',
    fragmentResultTitle: 'Fragment Fiber',
    fragmentResultItems: ['Invisible node that groups children', 'Does not produce a DOM element'],
    strictTitle: 'StrictMode',
    strictSubtitle: '(REACT_STRICT_MODE_TYPE)',
    modeResultTitle: 'Mode Fiber',
    modeResultItems: ['Holds StrictMode-related flags', 'Runs extra checks in dev mode'],
  },
  fragmentFlow: {
    badge: '01',
    eyebrow: 'Purple flow',
    title: 'Fragment flow',
    description: 'JSX Fragments take a dedicated path through createFiberFromFragment.',
    jsxLabel: 'JSX',
    jsxCode: '<>\n  <Header />\n  <Main />\n</>',
    steps: [
      { id: 's1', text: 'REACT_FRAGMENT_TYPE' },
      { id: 's2', text: 'createFiberFromFragment' },
      { id: 's3', text: 'Fragment Fiber', subtext: '(Work Tag 7)' },
    ],
    infoBody:
      'Fragment is not a real DOM element — it is a logical container that groups children together.',
  },
  strictFlow: {
    badge: '02',
    eyebrow: 'Mint flow',
    title: 'StrictMode / Mode flow',
    description: 'StrictMode becomes a Mode Fiber that holds strict-mode internal flags.',
    jsxLabel: 'JSX',
    jsxCode: '<StrictMode>\n  <App />\n</StrictMode>',
    steps: [
      { id: 's1', text: 'REACT_STRICT_MODE_TYPE' },
      { id: 's2', text: 'fiberTag = Mode' },
      {
        id: 's3',
        text: 'Applies strict-mode internal flags',
        subtext: '(Mode Fiber, Work Tag 8)',
      },
    ],
    infoBody:
      'StrictMode is a React-internal type that helps run additional checks in development mode.',
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'Into the source',
    title: 'Source-code checkpoint',
    description:
      'Inside switch (type), Fragment returns immediately, while StrictMode flips the fiberTag to Mode.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    spotLabel: 'Spot',
    spot: 'REACT_FRAGMENT_TYPE, REACT_STRICT_MODE_TYPE',
    questionLabel: 'Learning question',
    question: 'Why do special types take a separate path?',
    hintCta: 'Show hint',
    hint: 'Fragment groups children; StrictMode must hold dev-check flags. Neither fits the regular DOM / component flow, so switch (type) handles them as dedicated cases.',
    codeTitle: 'ReactFiber.js',
    codeLines: [
      { line: 'switch (type) {' },
      { line: '  case REACT_FRAGMENT_TYPE:', emphasis: 'fragment' },
      { line: '    // Fragment-only path', emphasis: 'fragment' },
      {
        line: '    return createFiberFromFragment(pendingProps, mode, lanes, key);',
        emphasis: 'fragment',
      },
      { line: '' },
      { line: '  case REACT_STRICT_MODE_TYPE:', emphasis: 'mode' },
      { line: '    // StrictMode goes to Mode Fiber', emphasis: 'mode' },
      { line: '    fiberTag = Mode;', emphasis: 'mode' },
      { line: '    mode |= StrictLegacyMode;', emphasis: 'mode' },
      { line: '    break;', emphasis: 'mode' },
      { line: '' },
      { line: '  // ... other special types' },
      { line: '}' },
    ],
    bottomNote:
      'Special types use unique symbols, so they are handled differently from regular typeof branches.',
  },
  workTags: {
    badge: '04',
    eyebrow: 'Internal tag numbers',
    title: 'Work Tag cards',
    description:
      'Remember the Work Tag numbers of Fragment and Mode to read React internals more easily.',
    cards: [
      {
        id: 'fragment',
        title: 'Fragment',
        subtitle: '(REACT_FRAGMENT_TYPE)',
        value: 'Work Tag 7',
        description:
          'An invisible Fiber node that groups children together without producing a DOM element.',
        variant: 'fragment',
      },
      {
        id: 'mode',
        title: 'Mode',
        subtitle: '(REACT_STRICT_MODE_TYPE)',
        value: 'Work Tag 8',
        description:
          'Holds StrictMode settings and flags, and runs extra checks in development mode.',
        variant: 'mode',
      },
      {
        id: 'info',
        title: 'What is a Work Tag?',
        description:
          'An internal classification value showing what kind of node a Fiber is. React uses it to decide how each node behaves.',
        variant: 'info',
      },
    ],
  },
  others: {
    badge: '05',
    eyebrow: 'Advanced',
    title: 'Are there other special types?',
    description:
      'React defines many special types, and each one may have its own dedicated Fiber-creation path.',
    cards: [
      {
        id: 'suspense',
        title: 'Suspense',
        subtitle: 'Loading state',
        description: 'Dedicated Fiber path',
        iconName: 'loader',
        accent: 'sky',
      },
      {
        id: 'suspense-list',
        title: 'SuspenseList',
        subtitle: 'Orders multiple Suspense',
        description: 'Dedicated Fiber path',
        iconName: 'list',
        accent: 'cyan',
      },
      {
        id: 'offscreen',
        title: 'Offscreen',
        subtitle: 'Show / hide state',
        description: 'Dedicated Fiber path',
        iconName: 'eye',
        accent: 'violet',
      },
      {
        id: 'activity',
        title: 'Activity',
        subtitle: 'Async activity state',
        description: 'Dedicated Fiber path',
        iconName: 'zap',
        accent: 'amber',
      },
      {
        id: 'view-transition',
        title: 'ViewTransition',
        subtitle: 'View-transition animation hook',
        description: 'Dedicated Fiber path',
        iconName: 'scan',
        accent: 'emerald',
      },
    ],
    footnote: 'Support and internal names may change between React versions and environments.',
  },
  understanding: {
    badge: '06',
    eyebrow: 'Recap',
    title: 'Check your understanding',
    answerLabel: 'Answer',
    reasonLabel: 'Reason',
    cards: [
      {
        id: 'q1',
        badge: 'Q1',
        question: 'Does Fragment get handled like a regular FunctionComponent?',
        answer: 'No — it has its own Fiber path.',
        reason:
          'Fragment is a special type for grouping children and does not produce DOM, so it needs a dedicated Fiber.',
        accent: 'purple',
      },
      {
        id: 'q2',
        badge: 'Q2',
        question: 'What does StrictMode represent?',
        answer: 'A React-internal special type that becomes a Mode Fiber.',
        reason:
          'StrictMode is handled as a Mode Fiber to manage internal flags that enable extra dev-mode checks and warnings.',
        accent: 'green',
      },
    ],
  },
  checklist: {
    badge: '07',
    eyebrow: 'One-line recap',
    title: 'Quick checklist',
    items: [
      { id: 'c1', text: 'Fragment is handled as REACT_FRAGMENT_TYPE' },
      { id: 'c2', text: 'StrictMode is handled as REACT_STRICT_MODE_TYPE' },
      { id: 'c3', text: 'Fragment → Work Tag 7 / Mode → Work Tag 8' },
      { id: 'c4', text: 'Special types have dedicated Fiber-creation paths' },
      {
        id: 'c5',
        text: 'There is a real reason to handle them differently from regular types',
      },
    ],
  },
  next: {
    badge: '08',
    eyebrow: 'Next page',
    title: 'Move on',
    description:
      'You have seen which Elements become which Fibers. Next, look at how key decides whether to reuse an existing Fiber.',
    primaryCta: 'Next: key & Fiber reuse',
    primaryHref: '/key-reuse',
  },
};

export const fragmentModeFiberContent: Record<Locale, FragmentModeFiberContent> = { ko, en };
