import type { Locale } from '@it-tech-blog/preferences';

export type BranchKey = 'string' | 'function' | 'fragment' | 'mode';

export type Branch = {
  id: BranchKey;
  condition: string;
  example: string;
  result: string;
  description: string;
  /** 위치 라벨: 데스크톱에서 어느 방향으로 배치할지 알려준다. */
  position: 'top' | 'right' | 'bottom' | 'left';
};

export type JsxCardKey = 'div' | 'function' | 'class' | 'fragment';

export type JsxToFiberCard = {
  id: JsxCardKey;
  code: string;
  typeLabel: string;
  result: string;
  description: string;
};

export type ComparisonRow = {
  id: string;
  shape: '문자열 (string)' | '함수 (function)' | '내부 심벌 (symbol)';
  shapeEn: 'string' | 'function' | 'symbol';
  exampleJsx: string;
  typeValue: string;
  condition: string;
  fiber: string;
  note: string;
  /** 행 강조 색 — string=green, function=blue, symbol=purple */
  accent: 'green' | 'blue' | 'purple';
};

export type SpecialCard = {
  id: string;
  title: string;
  type: string;
  result: string;
  iconName: 'shield' | 'eyeoff' | 'zap' | 'sparkles';
  accent: 'blue' | 'cyan' | 'violet' | 'sky';
};

export type QuizCard = {
  id: string;
  badge: string;
  question: string;
  answer: string;
  description: string;
  accent: 'green' | 'cyan';
};

export type CreateFiberFromTypeAndPropsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    centerLabel: string;
    branches: Branch[];
  };
  branchMap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    centerLabel: string;
    branches: Branch[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    questionLabel: string;
    question: string;
    hintCta: string;
    hint: string;
    codeTitle: string;
    code: string;
    annotations: { id: string; label: string; tone: 'blue' | 'green' | 'purple' }[];
  };
  jsxCards: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: JsxToFiberCard[];
  };
  comparison: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: {
      shape: string;
      jsx: string;
      typeValue: string;
      condition: string;
      fiber: string;
      note: string;
    };
    rows: ComparisonRow[];
  };
  special: {
    badge: string;
    eyebrow: string;
    title: string;
    pill: string;
    description: string;
    cards: SpecialCard[];
    bottomNote: string;
  };
  quiz: {
    badge: string;
    eyebrow: string;
    title: string;
    answerLabel: string;
    cards: QuizCard[];
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

const branches: Branch[] = [
  {
    id: 'string',
    condition: "type === 'div'",
    example: '<div />',
    result: '→ HostComponent',
    description: 'DOM 태그는 Host 계열 Fiber',
    position: 'left',
  },
  {
    id: 'function',
    condition: "typeof type === 'function'",
    example: '<MyButton />',
    result: '→ FunctionComponent 또는 ClassComponent',
    description: '함수 / 클래스 컴포넌트',
    position: 'top',
  },
  {
    id: 'fragment',
    condition: 'type === REACT_FRAGMENT_TYPE',
    example: '<></>',
    result: '→ Fragment Fiber',
    description: 'Fragment 전용 Fiber',
    position: 'right',
  },
  {
    id: 'mode',
    condition: 'type === REACT_STRICT_MODE_TYPE',
    example: '<React.StrictMode>',
    result: '→ Mode Fiber',
    description: 'StrictMode 전용 Fiber',
    position: 'bottom',
  },
];

const branchesEn: Branch[] = [
  {
    id: 'string',
    condition: "type === 'div'",
    example: '<div />',
    result: '→ HostComponent',
    description: 'DOM tags become Host fibers',
    position: 'left',
  },
  {
    id: 'function',
    condition: "typeof type === 'function'",
    example: '<MyButton />',
    result: '→ FunctionComponent or ClassComponent',
    description: 'Function / class components',
    position: 'top',
  },
  {
    id: 'fragment',
    condition: 'type === REACT_FRAGMENT_TYPE',
    example: '<></>',
    result: '→ Fragment Fiber',
    description: 'Dedicated Fragment fiber',
    position: 'right',
  },
  {
    id: 'mode',
    condition: 'type === REACT_STRICT_MODE_TYPE',
    example: '<React.StrictMode>',
    result: '→ Mode Fiber',
    description: 'StrictMode-only fiber',
    position: 'bottom',
  },
];

const ko: CreateFiberFromTypeAndPropsContent = {
  hero: {
    badge: 'CHAPTER 3',
    title: {
      line1: 'React는 type을 보고',
      line2: '어떤 Fiber를 만들지 결정합니다.',
    },
    description:
      'type이 문자열인지, 함수인지, React 내부의 특별한 타입인지에 따라 Fiber의 종류가 달라집니다.',
    centerLabel: 'type',
    branches,
  },
  branchMap: {
    badge: '01',
    eyebrow: '한눈에 보는 분기',
    title: 'type 분기 지도',
    description:
      'createFiberFromTypeAndProps는 가운데 type 값을 보고 네 가지 갈래 중 하나로 갈라집니다.',
    centerLabel: 'type',
    branches,
  },
  checkpoint: {
    badge: '02',
    eyebrow: '소스 코드로 들어가기',
    title: '실제 코드 체크포인트',
    description:
      'React 저장소의 createFiberFromTypeAndProps를 그대로 봅니다. 분기 조건이 한눈에 들어옵니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    functionLabel: '함수',
    functionName: 'createFiberFromTypeAndProps',
    questionLabel: '학습 질문',
    question: 'Fiber 종류는 어떤 조건문을 기준으로 갈라질까?',
    hintCta: '힌트 보기',
    hint: '먼저 typeof로 함수 / 문자열을 가르고, 그 외에는 switch (type)으로 React 내부 심벌을 분기합니다.',
    codeTitle: 'ReactFiber.js',
    code: `export function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes,
) {
  if (typeof type === 'function') {
    // 함수 컴포넌트 또는 클래스 컴포넌트
    // ...
  } else if (typeof type === 'string') {
    // Host 컴포넌트
    // ...
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      // Fragment Fiber
      break;
    case REACT_STRICT_MODE_TYPE:
      // Mode Fiber
      break;
    // 더 많은 특수 타입들
  }

  // 최종적으로 fiber 생성 후 반환
}`,
    annotations: [
      { id: 'fn', label: '함수 분기', tone: 'blue' },
      { id: 'str', label: '문자열 분기', tone: 'green' },
      { id: 'sym', label: '심벌 분기', tone: 'purple' },
    ],
  },
  jsxCards: {
    badge: '03',
    eyebrow: '대표 4가지',
    title: '대표 JSX → Fiber tag 연결',
    description: '실제로 작성하는 JSX 네 가지가 어떤 Fiber tag로 이어지는지 한눈에 정리합니다.',
    cards: [
      {
        id: 'div',
        code: '<div />',
        typeLabel: "type: 'div' (string)",
        result: 'HostComponent',
        description: 'DOM 태그는 Host 계열 Fiber로 생성',
      },
      {
        id: 'function',
        code: '<MyButton />',
        typeLabel: 'type: MyButton (function)',
        result: 'FunctionComponent',
        description: '함수 컴포넌트는 FunctionComponent Fiber',
      },
      {
        id: 'class',
        code: '<MyClassComponent />',
        typeLabel: 'type: MyClassComponent (class)',
        result: 'ClassComponent',
        description: '클래스 컴포넌트는 ClassComponent Fiber',
      },
      {
        id: 'fragment',
        code: '<>...</>',
        typeLabel: 'type: REACT_FRAGMENT_TYPE',
        result: 'Fragment',
        description: 'Fragment는 Fragment Fiber',
      },
    ],
  },
  comparison: {
    badge: '04',
    eyebrow: '비교표 정리',
    title: 'string / function / symbol 분기 비교표',
    description:
      '같은 분기 로직을 표 하나로 정리합니다. type 형태에 따라 판단 조건과 생성되는 Fiber가 달라집니다.',
    headers: {
      shape: 'type 형태',
      jsx: '예시 JSX',
      typeValue: 'type 값 예시',
      condition: '판단 조건',
      fiber: '생성되는 Fiber 대표',
      note: '설명',
    },
    rows: [
      {
        id: 'string',
        shape: '문자열 (string)',
        shapeEn: 'string',
        exampleJsx: '<div />',
        typeValue: "'div'",
        condition: "typeof type === 'string'",
        fiber: 'HostComponent',
        note: 'DOM 노드를 표현하는 Fiber',
        accent: 'green',
      },
      {
        id: 'fn',
        shape: '함수 (function)',
        shapeEn: 'function',
        exampleJsx: '<MyButton />',
        typeValue: 'MyButton',
        condition: "typeof type === 'function'",
        fiber: 'FunctionComponent',
        note: '함수 컴포넌트',
        accent: 'blue',
      },
      {
        id: 'class',
        shape: '함수 (function)',
        shapeEn: 'function',
        exampleJsx: '<MyClassComponent />',
        typeValue: 'MyClassComponent',
        condition: "typeof type === 'function'",
        fiber: 'ClassComponent',
        note: '클래스 컴포넌트',
        accent: 'blue',
      },
      {
        id: 'fragment',
        shape: '내부 심벌 (symbol)',
        shapeEn: 'symbol',
        exampleJsx: '<>...</>',
        typeValue: 'REACT_FRAGMENT_TYPE',
        condition: 'switch (type)',
        fiber: 'Fragment',
        note: 'Fragment 전용 Fiber',
        accent: 'purple',
      },
      {
        id: 'strict',
        shape: '내부 심벌 (symbol)',
        shapeEn: 'symbol',
        exampleJsx: '<React.StrictMode>',
        typeValue: 'REACT_STRICT_MODE_TYPE',
        condition: 'switch (type)',
        fiber: 'Mode',
        note: 'StrictMode 전용 Fiber',
        accent: 'purple',
      },
    ],
  },
  special: {
    badge: '05',
    eyebrow: '확장 주제',
    title: '특수 타입도 전용 Fiber 흐름을 가집니다',
    pill: '고급',
    description:
      'switch (type) 안에는 더 많은 React 내부 심벌이 있으며, 각각 전용 Fiber로 처리됩니다.',
    cards: [
      {
        id: 'suspense',
        title: 'Suspense',
        type: 'REACT_SUSPENSE_TYPE',
        result: '→ SuspenseComponent Fiber',
        iconName: 'shield',
        accent: 'blue',
      },
      {
        id: 'offscreen',
        title: 'Offscreen',
        type: 'REACT_OFFSCREEN_TYPE',
        result: '→ OffscreenComponent Fiber',
        iconName: 'eyeoff',
        accent: 'cyan',
      },
      {
        id: 'activity',
        title: 'Activity',
        type: 'REACT_ACTIVITY_TYPE',
        result: '→ ActivityComponent Fiber',
        iconName: 'zap',
        accent: 'violet',
      },
      {
        id: 'view-transition',
        title: 'ViewTransition',
        type: 'REACT_VIEW_TRANSITION_TYPE',
        result: '→ ViewTransitionComponent Fiber',
        iconName: 'sparkles',
        accent: 'sky',
      },
    ],
    bottomNote:
      'React는 더 많은 내부 심벌 타입을 정의하고 있으며, 각 타입은 전용 Fiber로 처리됩니다.',
  },
  quiz: {
    badge: '06',
    eyebrow: '복습',
    title: '분류 퀴즈',
    answerLabel: '정답',
    cards: [
      {
        id: 'q1',
        badge: 'Q1',
        question: "type이 문자열 'button'이면 어떤 Fiber 계열일까?",
        answer: 'Host 계열 Fiber',
        description: "'button'은 문자열이므로 HostComponent Fiber가 생성됩니다.",
        accent: 'green',
      },
      {
        id: 'q2',
        badge: 'Q2',
        question: 'type이 class component라면?',
        answer: 'ClassComponent Fiber',
        description: '클래스 컴포넌트는 ClassComponent Fiber가 됩니다.',
        accent: 'cyan',
      },
    ],
  },
  next: {
    badge: '07',
    eyebrow: '다음 페이지',
    title: '다음으로 넘어가기',
    description:
      'type이 Fiber 종류를 결정한다는 점을 이해했다면, 이제 문자열 type을 가진 DOM 태그가 어떻게 Host Component Fiber가 되는지 살펴봅니다.',
    primaryCta: '다음: Host Component Fiber',
    primaryHref: '/host-fiber',
  },
};

const en: CreateFiberFromTypeAndPropsContent = {
  hero: {
    badge: 'CHAPTER 3',
    title: {
      line1: 'React looks at type',
      line2: 'to decide which Fiber to build.',
    },
    description:
      'Whether type is a string, a function, or a React-internal symbol — that decides which kind of Fiber is built.',
    centerLabel: 'type',
    branches: branchesEn,
  },
  branchMap: {
    badge: '01',
    eyebrow: 'Branches at a glance',
    title: 'type branch map',
    description:
      'createFiberFromTypeAndProps looks at the center type value and splits into one of four branches.',
    centerLabel: 'type',
    branches: branchesEn,
  },
  checkpoint: {
    badge: '02',
    eyebrow: 'Into the source',
    title: 'Source-code checkpoint',
    description:
      'Read createFiberFromTypeAndProps in the React repo. The branching conditions stand out.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    functionLabel: 'Function',
    functionName: 'createFiberFromTypeAndProps',
    questionLabel: 'Learning question',
    question: 'Which conditions decide the Fiber kind?',
    hintCta: 'Show hint',
    hint: 'typeof first splits function vs string; the rest go through switch (type) for React-internal symbols.',
    codeTitle: 'ReactFiber.js',
    code: `export function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes,
) {
  if (typeof type === 'function') {
    // Function component or class component
    // ...
  } else if (typeof type === 'string') {
    // Host component
    // ...
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      // Fragment Fiber
      break;
    case REACT_STRICT_MODE_TYPE:
      // Mode Fiber
      break;
    // more special types
  }

  // finally build the fiber and return it
}`,
    annotations: [
      { id: 'fn', label: 'function branch', tone: 'blue' },
      { id: 'str', label: 'string branch', tone: 'green' },
      { id: 'sym', label: 'symbol branch', tone: 'purple' },
    ],
  },
  jsxCards: {
    badge: '03',
    eyebrow: 'Four representatives',
    title: 'Representative JSX → Fiber tag',
    description: 'Four common JSX shapes and the Fiber tag each one ends up with.',
    cards: [
      {
        id: 'div',
        code: '<div />',
        typeLabel: "type: 'div' (string)",
        result: 'HostComponent',
        description: 'DOM tags become Host fibers',
      },
      {
        id: 'function',
        code: '<MyButton />',
        typeLabel: 'type: MyButton (function)',
        result: 'FunctionComponent',
        description: 'Function components become FunctionComponent fibers',
      },
      {
        id: 'class',
        code: '<MyClassComponent />',
        typeLabel: 'type: MyClassComponent (class)',
        result: 'ClassComponent',
        description: 'Class components become ClassComponent fibers',
      },
      {
        id: 'fragment',
        code: '<>...</>',
        typeLabel: 'type: REACT_FRAGMENT_TYPE',
        result: 'Fragment',
        description: 'Fragments become Fragment fibers',
      },
    ],
  },
  comparison: {
    badge: '04',
    eyebrow: 'Side by side',
    title: 'string / function / symbol — branch comparison',
    description:
      'The same logic, summarized. The shape of type drives the condition and the resulting Fiber.',
    headers: {
      shape: 'type shape',
      jsx: 'Example JSX',
      typeValue: 'type value',
      condition: 'Condition',
      fiber: 'Resulting Fiber',
      note: 'Note',
    },
    rows: [
      {
        id: 'string',
        shape: '문자열 (string)',
        shapeEn: 'string',
        exampleJsx: '<div />',
        typeValue: "'div'",
        condition: "typeof type === 'string'",
        fiber: 'HostComponent',
        note: 'Fiber that represents a DOM node',
        accent: 'green',
      },
      {
        id: 'fn',
        shape: '함수 (function)',
        shapeEn: 'function',
        exampleJsx: '<MyButton />',
        typeValue: 'MyButton',
        condition: "typeof type === 'function'",
        fiber: 'FunctionComponent',
        note: 'Function component',
        accent: 'blue',
      },
      {
        id: 'class',
        shape: '함수 (function)',
        shapeEn: 'function',
        exampleJsx: '<MyClassComponent />',
        typeValue: 'MyClassComponent',
        condition: "typeof type === 'function'",
        fiber: 'ClassComponent',
        note: 'Class component',
        accent: 'blue',
      },
      {
        id: 'fragment',
        shape: '내부 심벌 (symbol)',
        shapeEn: 'symbol',
        exampleJsx: '<>...</>',
        typeValue: 'REACT_FRAGMENT_TYPE',
        condition: 'switch (type)',
        fiber: 'Fragment',
        note: 'Dedicated Fragment fiber',
        accent: 'purple',
      },
      {
        id: 'strict',
        shape: '내부 심벌 (symbol)',
        shapeEn: 'symbol',
        exampleJsx: '<React.StrictMode>',
        typeValue: 'REACT_STRICT_MODE_TYPE',
        condition: 'switch (type)',
        fiber: 'Mode',
        note: 'StrictMode-only fiber',
        accent: 'purple',
      },
    ],
  },
  special: {
    badge: '05',
    eyebrow: 'Advanced',
    title: 'Special types have their own Fiber flow',
    pill: 'advanced',
    description:
      'switch (type) holds more React-internal symbols — each one becomes a dedicated Fiber.',
    cards: [
      {
        id: 'suspense',
        title: 'Suspense',
        type: 'REACT_SUSPENSE_TYPE',
        result: '→ SuspenseComponent Fiber',
        iconName: 'shield',
        accent: 'blue',
      },
      {
        id: 'offscreen',
        title: 'Offscreen',
        type: 'REACT_OFFSCREEN_TYPE',
        result: '→ OffscreenComponent Fiber',
        iconName: 'eyeoff',
        accent: 'cyan',
      },
      {
        id: 'activity',
        title: 'Activity',
        type: 'REACT_ACTIVITY_TYPE',
        result: '→ ActivityComponent Fiber',
        iconName: 'zap',
        accent: 'violet',
      },
      {
        id: 'view-transition',
        title: 'ViewTransition',
        type: 'REACT_VIEW_TRANSITION_TYPE',
        result: '→ ViewTransitionComponent Fiber',
        iconName: 'sparkles',
        accent: 'sky',
      },
    ],
    bottomNote:
      'React defines more internal symbol types, and each one is handled by its own kind of Fiber.',
  },
  quiz: {
    badge: '06',
    eyebrow: 'Quick check',
    title: 'Classification quiz',
    answerLabel: 'Answer',
    cards: [
      {
        id: 'q1',
        badge: 'Q1',
        question: "If type is the string 'button', which Fiber family is it?",
        answer: 'Host fiber family',
        description: "'button' is a string, so a HostComponent Fiber is built.",
        accent: 'green',
      },
      {
        id: 'q2',
        badge: 'Q2',
        question: 'And if type is a class component?',
        answer: 'ClassComponent Fiber',
        description: 'Class components become ClassComponent fibers.',
        accent: 'cyan',
      },
    ],
  },
  next: {
    badge: '07',
    eyebrow: 'Next page',
    title: 'Move on',
    description:
      'Now that you see how type drives the Fiber kind, look at how a string-typed DOM tag becomes a Host Component Fiber.',
    primaryCta: 'Next: Host Component Fiber',
    primaryHref: '/host-fiber',
  },
};

export const createFiberFromTypeAndPropsContent: Record<
  Locale,
  CreateFiberFromTypeAndPropsContent
> = { ko, en };
