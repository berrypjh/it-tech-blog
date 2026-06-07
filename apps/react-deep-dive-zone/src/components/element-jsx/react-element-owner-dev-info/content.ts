import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type FieldChip = {
  id: string;
  label: string;
};

export type ProdDevCard = {
  id: 'production' | 'development';
  title: string;
  body: string;
  items: string[];
  iconName: 'gauge' | 'bug';
  tone: ToneKey;
};

export type OwnerInfoCard = {
  id: string;
  title: string;
  body: string;
  iconName: 'user' | 'message' | 'wrench';
  tone: ToneKey;
};

export type DebugCard = {
  id: '_debugStack' | '_debugTask';
  field: string;
  short: string;
  body: string;
  iconName: 'stack' | 'task';
  tone: ToneKey;
};

export type FreezeCard = {
  id: 'mutable' | 'frozen';
  title: string;
  code: string;
  body: string;
  iconName: 'unlock' | 'lock';
  tone: ToneKey;
};

export type DebugBenefit = {
  id: string;
  title: string;
  body: string;
  iconName: 'message' | 'search' | 'panel';
  tone: ToneKey;
};

export type ReactElementOwnerDevInfoContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    diagramTitle: string;
    baseLabel: string;
    baseFields: FieldChip[];
    devLabel: string;
    devFields: FieldChip[];
    bottomNote: string;
  };
  prodDev: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ProdDevCard[];
    emphasis: string;
  };
  owner: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    diagramTitle: string;
    diagramSteps: {
      id: string;
      label: string;
      tone: ToneKey;
      iconName: 'parent' | 'jsx' | 'tag';
    }[];
    cards: OwnerInfoCard[];
  };
  debug: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: DebugCard[];
    summary: string;
  };
  freeze: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: FreezeCard[];
    emphasis: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    pointsLabel: string;
    points: string[];
    questionLabel: string;
    question: string;
    code: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  benefits: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: DebugBenefit[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: ReactElementOwnerDevInfoContent = {
  hero: {
    badge: 'Element와 JSX · 9/10단계',
    title: { line1: '개발 모드의 React Element는', line2: '디버깅 정보를 더 많이 품고 있습니다.' },
    description:
      'React는 더 나은 경고와 오류 메시지를 위해 Element 생성 시 추가 메타데이터를 함께 관리합니다. 이 정보들은 렌더링 결과를 바꾸기 위한 것이 아니라, 개발자가 문제를 더 빠르게 찾도록 돕기 위한 장치입니다.',
    primaryCta: '개발 모드 정보 보기',
    secondaryCta: '실제 코드 확인하기',
    primaryHref: '#prod-dev',
    secondaryHref: '#checkpoint',
    diagramTitle: 'Development Element 구조',
    baseLabel: 'Base Element',
    baseFields: [
      { id: 'typeof', label: '$$typeof' },
      { id: 'type', label: 'type' },
      { id: 'key', label: 'key' },
      { id: 'props', label: 'props' },
      { id: 'owner', label: '_owner' },
    ],
    devLabel: 'Development Info',
    devFields: [
      { id: 'validated', label: '_store.validated' },
      { id: 'debugInfo', label: '_debugInfo' },
      { id: 'debugStack', label: '_debugStack' },
      { id: 'debugTask', label: '_debugTask' },
      { id: 'freeze', label: 'Object.freeze' },
    ],
    bottomNote: '목적은 렌더링 결과 변경이 아니라, 더 좋은 경고와 디버깅 경험입니다.',
  },
  prodDev: {
    badge: '01',
    eyebrow: 'production vs development 비교',
    title: '두 모드, 다른 의도',
    description:
      'production은 사용자 환경에서 가볍게, development는 더 많은 정보를 함께 들고 다니며 문제 추적을 돕습니다.',
    cards: [
      {
        id: 'production',
        title: 'production',
        body: '실제 사용자 환경에서는 실행 효율을 위해 최소한의 Element 구조를 유지합니다.',
        items: [
          '최소 구조 중심',
          '불필요한 debug 정보 제거',
          '실행 효율 우선',
          '번들 크기와 성능 고려',
        ],
        iconName: 'gauge',
        tone: 'sky',
      },
      {
        id: 'development',
        title: 'development',
        body: '개발 환경에서는 문제를 빠르게 찾을 수 있도록 추가 디버깅 정보를 함께 관리합니다.',
        items: [
          'owner 추적',
          'debug stack / task',
          'validated 상태',
          'Object.freeze',
          '경고와 오류 메시지 품질 향상',
        ],
        iconName: 'bug',
        tone: 'violet',
      },
    ],
    emphasis: 'production은 가볍게, development는 더 설명력 있게 관리됩니다.',
  },
  owner: {
    badge: '02',
    eyebrow: '_owner의 의미',
    title: '누가 이 Element를 만들었나?',
    description:
      '_owner는 어떤 컴포넌트 맥락에서 이 Element가 만들어졌는지 추적하는 데 도움을 줍니다.',
    diagramTitle: '_owner가 가리키는 흐름',
    diagramSteps: [
      { id: 'parent', label: 'ParentComponent', tone: 'sky', iconName: 'parent' },
      { id: 'jsx', label: '<MyButton />', tone: 'violet', iconName: 'jsx' },
      { id: 'owner', label: 'React Element._owner', tone: 'teal', iconName: 'tag' },
    ],
    cards: [
      {
        id: 'creator',
        title: '생성 주체 추적',
        body: '어떤 컴포넌트가 해당 Element를 만들었는지 파악하는 데 도움을 줍니다.',
        iconName: 'user',
        tone: 'cyan',
      },
      {
        id: 'warning',
        title: '경고 메시지 개선',
        body: '잘못된 key, ref, children 사용과 같은 문제를 더 정확히 안내할 수 있습니다.',
        iconName: 'message',
        tone: 'violet',
      },
      {
        id: 'context',
        title: '개발 모드 전용 맥락',
        body: '렌더링 결과보다 개발자 경험 개선을 위한 메타데이터에 가깝습니다.',
        iconName: 'wrench',
        tone: 'teal',
      },
    ],
  },
  debug: {
    badge: '03',
    eyebrow: '_debugStack / _debugTask의 의미',
    title: '디버깅 경험을 받쳐주는 두 메타데이터',
    description:
      '_debugStack과 _debugTask는 화면을 바꾸지 않습니다. 대신 오류와 추적을 더 정확하게 만들어 줍니다.',
    cards: [
      {
        id: '_debugStack',
        field: '_debugStack',
        short: 'Element가 만들어진 호출 맥락을 추적합니다.',
        body: '어떤 파일과 컴포넌트 흐름에서 Element가 생성되었는지 오류 메시지와 디버깅 정보에 연결할 수 있습니다.',
        iconName: 'stack',
        tone: 'violet',
      },
      {
        id: '_debugTask',
        field: '_debugTask',
        short: '개발 도구와 디버깅 정보 연결에 도움을 줍니다.',
        body: '비동기 작업이나 개발 도구의 추적 정보와 연결되어 React 내부 동작을 더 이해하기 쉽게 만듭니다.',
        iconName: 'task',
        tone: 'teal',
      },
    ],
    summary:
      'debug 정보는 사용자 화면을 바꾸기 위한 값이 아니라, 문제를 더 잘 설명하기 위한 개발 모드 메타데이터입니다.',
  },
  freeze: {
    badge: '04',
    eyebrow: 'Object.freeze와 개발 편의성',
    title: '잘못된 변경을 더 빨리 잡기',
    description:
      '개발 모드에서 Element와 props를 freeze하면 실수로 값을 바꾸는 패턴을 더 빨리 잡을 수 있습니다.',
    cards: [
      {
        id: 'mutable',
        title: '변경 가능한 객체',
        code: "element.props.title = 'changed';",
        body: '객체가 변경 가능하면 잘못된 mutation이 조용히 지나갈 수 있습니다.',
        iconName: 'unlock',
        tone: 'amber',
      },
      {
        id: 'frozen',
        title: 'freeze된 Element',
        code: 'Object.freeze(element.props);\nObject.freeze(element);',
        body: '개발 모드에서는 잘못된 변경 시도를 더 빨리 알아차릴 수 있습니다.',
        iconName: 'lock',
        tone: 'teal',
      },
    ],
    emphasis: 'React Element는 불변 값처럼 다루는 것이 안전합니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: '실제 코드 체크포인트',
    title: '__DEV__ 분기 안의 메타데이터 코드',
    description:
      'ReactJSXElement.js의 `if (__DEV__)` 블록을 보면 개발 모드 전용으로 추가되는 필드와 freeze 호출을 한눈에 볼 수 있습니다.',
    fileLabel: '파일',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    pointsLabel: '볼 것',
    points: ['_owner', '_debugInfo', '_debugStack', '_debugTask', 'Object.freeze'],
    questionLabel: '학습 질문',
    question: 'React는 개발 모드에서 왜 Element에 추가 정보를 붙일까?',
    code: "if (__DEV__) {\n  element._store = {};\n\n  Object.defineProperty(element._store, 'validated', {\n    configurable: false,\n    enumerable: false,\n    writable: true,\n    value: 0,\n  });\n\n  element._debugInfo = null;\n  element._debugStack = debugStack;\n  element._debugTask = debugTask;\n\n  if (Object.freeze) {\n    Object.freeze(element.props);\n    Object.freeze(element);\n  }\n}",
    primaryCta: '개발 모드 코드 읽기',
    secondaryCta: '디버깅 정보 더 보기',
    primaryHref: '#benefits',
    secondaryHref: '#prod-dev',
  },
  benefits: {
    badge: '06',
    eyebrow: '디버깅 경험과의 연결',
    title: '이 메타데이터가 만들어내는 세 가지 차이',
    description:
      '결국 이 모든 정보는 “더 잘 설명되는 오류, 더 빠른 추적, 더 풍부한 도구”로 돌아옵니다.',
    cards: [
      {
        id: 'warnings',
        title: '경고 메시지가 더 정확해진다',
        body: '어떤 컴포넌트가 문제 Element를 만들었는지 추적하기 쉬워집니다.',
        iconName: 'message',
        tone: 'cyan',
      },
      {
        id: 'jsx-trace',
        title: '잘못된 JSX 사용을 빠르게 추적할 수 있다',
        body: 'key, ref, children 관련 실수를 더 구체적인 맥락에서 확인할 수 있습니다.',
        iconName: 'search',
        tone: 'violet',
      },
      {
        id: 'devtools',
        title: '개발 도구가 더 풍부한 맥락을 제공할 수 있다',
        body: 'debug stack과 owner 정보가 더 나은 개발자 경험으로 이어집니다.',
        iconName: 'panel',
        tone: 'teal',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Element는 DOM이 아니라 Fiber 이전 단계의 설명 객체다',
    description:
      'Element 객체가 개발 모드에서 어떤 정보를 더 품는지 이해했다면, 이제 전체 챕터를 하나의 흐름으로 정리합니다.',
    cta: '다음 페이지로 이동',
    href: '/element-not-dom',
  },
};

const en: ReactElementOwnerDevInfoContent = {
  hero: {
    badge: 'Elements & JSX · 9/10',
    title: {
      line1: 'A dev-mode React Element carries',
      line2: 'extra debugging information.',
    },
    description:
      'React attaches additional metadata when creating Elements in dev mode to power better warnings and error messages — not to change render output, but to help you find problems faster.',
    primaryCta: 'See the dev-mode info',
    secondaryCta: 'Open the actual source',
    primaryHref: '#prod-dev',
    secondaryHref: '#checkpoint',
    diagramTitle: 'Development Element shape',
    baseLabel: 'Base Element',
    baseFields: [
      { id: 'typeof', label: '$$typeof' },
      { id: 'type', label: 'type' },
      { id: 'key', label: 'key' },
      { id: 'props', label: 'props' },
      { id: 'owner', label: '_owner' },
    ],
    devLabel: 'Development Info',
    devFields: [
      { id: 'validated', label: '_store.validated' },
      { id: 'debugInfo', label: '_debugInfo' },
      { id: 'debugStack', label: '_debugStack' },
      { id: 'debugTask', label: '_debugTask' },
      { id: 'freeze', label: 'Object.freeze' },
    ],
    bottomNote:
      'The goal is not to change render output — it is better warnings and a better debugging experience.',
  },
  prodDev: {
    badge: '01',
    eyebrow: 'production vs development',
    title: 'Two modes, two intents',
    description:
      'production stays lean for the user runtime; development carries more information to help you trace issues.',
    cards: [
      {
        id: 'production',
        title: 'production',
        body: 'In a real user environment, the Element shape is kept minimal for efficiency.',
        items: [
          'Minimal structure',
          'No unnecessary debug info',
          'Execution efficiency first',
          'Bundle size and performance aware',
        ],
        iconName: 'gauge',
        tone: 'sky',
      },
      {
        id: 'development',
        title: 'development',
        body: 'In dev mode, additional debug info travels with the Element so problems are easier to find.',
        items: [
          'Owner tracking',
          'debug stack / task',
          'validated state',
          'Object.freeze',
          'Better warnings and error messages',
        ],
        iconName: 'bug',
        tone: 'violet',
      },
    ],
    emphasis: 'production stays light; development stays more expressive.',
  },
  owner: {
    badge: '02',
    eyebrow: 'What _owner means',
    title: 'Who created this Element?',
    description: '_owner helps track the component context in which an Element was created.',
    diagramTitle: 'Where _owner points',
    diagramSteps: [
      { id: 'parent', label: 'ParentComponent', tone: 'sky', iconName: 'parent' },
      { id: 'jsx', label: '<MyButton />', tone: 'violet', iconName: 'jsx' },
      { id: 'owner', label: 'React Element._owner', tone: 'teal', iconName: 'tag' },
    ],
    cards: [
      {
        id: 'creator',
        title: 'Creator tracking',
        body: 'Helps identify which component produced a given Element.',
        iconName: 'user',
        tone: 'cyan',
      },
      {
        id: 'warning',
        title: 'Better warning messages',
        body: 'Issues with key, ref, children can be reported with more precise context.',
        iconName: 'message',
        tone: 'violet',
      },
      {
        id: 'context',
        title: 'Dev-only context',
        body: 'Closer to metadata that improves developer experience than to render output.',
        iconName: 'wrench',
        tone: 'teal',
      },
    ],
  },
  debug: {
    badge: '03',
    eyebrow: 'What _debugStack and _debugTask do',
    title: 'Two metadata fields that back debugging',
    description:
      '_debugStack and _debugTask never change UI. They make errors and traces more precise.',
    cards: [
      {
        id: '_debugStack',
        field: '_debugStack',
        short: 'Tracks the call context in which the Element was created.',
        body: 'Connects errors and debug info to the file and component flow that produced the Element.',
        iconName: 'stack',
        tone: 'violet',
      },
      {
        id: '_debugTask',
        field: '_debugTask',
        short: 'Bridges dev tools and debug info.',
        body: 'Links to async work and dev-tool traces, making React internals easier to follow.',
        iconName: 'task',
        tone: 'teal',
      },
    ],
    summary:
      'Debug info is not for the user screen — it is dev-mode metadata that makes problems easier to explain.',
  },
  freeze: {
    badge: '04',
    eyebrow: 'Object.freeze and dev ergonomics',
    title: 'Catch accidental mutations sooner',
    description:
      'Freezing the Element and its props in dev mode helps you catch mistaken mutations early.',
    cards: [
      {
        id: 'mutable',
        title: 'Mutable object',
        code: "element.props.title = 'changed';",
        body: 'A mutable object lets bad mutations slip through quietly.',
        iconName: 'unlock',
        tone: 'amber',
      },
      {
        id: 'frozen',
        title: 'Frozen Element',
        code: 'Object.freeze(element.props);\nObject.freeze(element);',
        body: 'Dev mode catches improper mutation attempts much faster.',
        iconName: 'lock',
        tone: 'teal',
      },
    ],
    emphasis: 'Treat a React Element as immutable — it is the safe assumption.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'Source code checkpoint',
    title: 'The metadata code inside the __DEV__ branch',
    description:
      'Inside the `if (__DEV__)` block of ReactJSXElement.js you can see all dev-only fields and freeze calls at once.',
    fileLabel: 'File',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    pointsLabel: 'Watch for',
    points: ['_owner', '_debugInfo', '_debugStack', '_debugTask', 'Object.freeze'],
    questionLabel: 'Learning question',
    question: 'Why does React attach extra info to Elements in dev mode?',
    code: "if (__DEV__) {\n  element._store = {};\n\n  Object.defineProperty(element._store, 'validated', {\n    configurable: false,\n    enumerable: false,\n    writable: true,\n    value: 0,\n  });\n\n  element._debugInfo = null;\n  element._debugStack = debugStack;\n  element._debugTask = debugTask;\n\n  if (Object.freeze) {\n    Object.freeze(element.props);\n    Object.freeze(element);\n  }\n}",
    primaryCta: 'Open dev-mode source',
    secondaryCta: 'See more debug info',
    primaryHref: '#benefits',
    secondaryHref: '#prod-dev',
  },
  benefits: {
    badge: '06',
    eyebrow: 'Connection to debugging experience',
    title: 'Three concrete wins this metadata buys',
    description:
      'Ultimately it all comes back to better-explained errors, faster tracing, richer tools.',
    cards: [
      {
        id: 'warnings',
        title: 'Warnings get more precise',
        body: 'Easier to trace which component produced the problematic Element.',
        iconName: 'message',
        tone: 'cyan',
      },
      {
        id: 'jsx-trace',
        title: 'Bad JSX usage is easier to spot',
        body: 'Mistakes around key, ref, children show up with more concrete context.',
        iconName: 'search',
        tone: 'violet',
      },
      {
        id: 'devtools',
        title: 'Dev tools offer richer context',
        body: 'debug stack and owner info translate into a better developer experience.',
        iconName: 'panel',
        tone: 'teal',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'an Element is not the DOM — it is a description before Fiber',
    description:
      'Now that you have seen what extra info the dev-mode Element carries, next, summarize the whole chapter into a single flow.',
    cta: 'Go to the next page',
    href: '/element-not-dom',
  },
};

export const reactElementOwnerDevInfoContent: Record<Locale, ReactElementOwnerDevInfoContent> = {
  ko,
  en,
};
