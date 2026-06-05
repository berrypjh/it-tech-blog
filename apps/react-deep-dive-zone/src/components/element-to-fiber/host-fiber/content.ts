import type { Locale } from '@it-tech-blog/preferences';

export type DomTagCard = {
  id: string;
  code: string;
  type: string;
};

export type TreeNode = {
  id: string;
  label: string;
  depth: number;
  isLast?: boolean;
  hasChild?: boolean;
};

export type ComparisonRow = {
  id: string;
  label: string;
  fiber: string;
  dom: string;
};

export type ModernHostCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'box' | 'package' | 'target';
  accent: 'green' | 'blue' | 'purple';
};

export type QuizCard = {
  id: string;
  badge: string;
  question: string;
  answer: string;
  description: string;
};

export type ChecklistItem = {
  id: string;
  text: string;
};

export type HostComponentFiberContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description1: string;
    description2: string;
    domTags: DomTagCard[];
    resultTitle: string;
    resultItems: string[];
  };
  example: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    jsxLabel: string;
    jsxCode: string;
    elementLabel: string;
    elementCode: string;
    keyPointTitle: string;
    keyPointDescription: string;
  };
  concept: {
    badge: string;
    eyebrow: string;
    title: string;
    description1: string;
    description2: string;
    treeNodes: TreeNode[];
    domLabel: string;
    bridgeLabel: string;
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
    codeLines: { line: string; emphasis?: boolean }[];
    bottomNote: string;
  };
  vsDom: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: { label: string; fiber: string; dom: string };
    rows: ComparisonRow[];
    emphasisTitle: string;
    emphasisBody: string;
  };
  modern: {
    badge: string;
    eyebrow: string;
    title: string;
    pill: string;
    description: string;
    cards: ModernHostCard[];
    footnote: string;
  };
  quiz: {
    badge: string;
    eyebrow: string;
    title: string;
    answerLabel: string;
    cards: QuizCard[];
  };
  checklist: {
    badge: string;
    eyebrow: string;
    title: string;
    items: ChecklistItem[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const treeNodes: TreeNode[] = [
  { id: 'root', label: 'div', depth: 0, hasChild: true },
  { id: 'header', label: 'header', depth: 1, hasChild: true },
  { id: 'button', label: 'button', depth: 2, isLast: true },
  { id: 'main', label: 'main', depth: 1, hasChild: true, isLast: true },
  { id: 'input', label: 'input', depth: 2, isLast: true },
];

const ko: HostComponentFiberContent = {
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '다음: Function / Class Component Fiber',
    description: '함수형·클래스 컴포넌트가 Fiber로 어떻게 표현되는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/function-fiber',
  },
  hero: {
    badge: 'Fiber 생성 · 4/10단계',
    title: {
      line1: '<div />는',
      line2: '어떤 Fiber가 될까?',
    },
    description1: '문자열 type을 가진 Element는 Host 계열 Fiber로 분류됩니다.',
    description2: 'DOM renderer에서는 이 Fiber가 이후 실제 DOM 요소 반영과 연결됩니다.',
    domTags: [
      { id: 'div', code: '<div />', type: "type: 'div'" },
      { id: 'button', code: '<button />', type: "type: 'button'" },
      { id: 'input', code: '<input />', type: "type: 'input'" },
    ],
    resultTitle: 'HostComponent Fiber',
    resultItems: ['Host 계열 Fiber', '실제 DOM 반영과 연결', 'DOM renderer와 이어짐'],
  },
  example: {
    badge: '01',
    eyebrow: '예제로 보기',
    title: '예제 JSX와 type 확인',
    description:
      '한 줄의 JSX가 Element 객체가 되었을 때, type 필드는 어떤 모양일까요. 가운데 카드에서 확인해 보세요.',
    jsxLabel: 'JSX',
    jsxCode: '<button className="save">저장</button>',
    elementLabel: 'Element',
    elementCode:
      "{\n  type: 'button',\n  key: null,\n  props: {\n    className: 'save',\n    children: '저장'\n  }\n}",
    keyPointTitle: "Element.type = 'button'",
    keyPointDescription: '문자열 type이 Host 계열 분기의 출발점이다.',
  },
  concept: {
    badge: '02',
    eyebrow: '개념 정리',
    title: 'Host Component란?',
    description1: 'React 외부의 실제 렌더링 환경과 연결되는 기본 요소를 표현하는 Fiber입니다.',
    description2: '브라우저에서는 div, button, input 같은 DOM 요소와 이어집니다.',
    treeNodes,
    domLabel: '브라우저 DOM',
    bridgeLabel: 'HostComponent → 브라우저 DOM',
  },
  checkpoint: {
    badge: '03',
    eyebrow: '소스 코드로 들어가기',
    title: '실제 코드 체크포인트',
    description:
      'ReactFiber.js의 type 분기 코드를 직접 봅니다. 문자열 분기가 어떻게 HostComponent로 이어지는지 한눈에 확인할 수 있습니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    spotLabel: '볼 지점',
    spot: "typeof type === 'string'",
    questionLabel: '학습 질문',
    question: '문자열 type은 어떤 Fiber 계열로 이어질까?',
    hintCta: '힌트 보기',
    hint: 'typeof로 함수와 문자열을 가른 뒤, 문자열이면 fiberTag = HostComponent로 고정됩니다. 그 외 심벌 타입은 switch로 분기됩니다.',
    codeTitle: 'ReactFiber.js',
    codeLines: [
      { line: "if (typeof type === 'function') {" },
      { line: '  // FunctionComponent 또는 ClassComponent 분기' },
      { line: '  // ...' },
      { line: "} else if (typeof type === 'string') {", emphasis: true },
      { line: '  // 문자열 type → Host 계열 분기' },
      { line: '  fiberTag = HostComponent;', emphasis: true },
      { line: '} else {' },
      { line: '  // 심벌 타입 분기 (Fragment, StrictMode 등)' },
      { line: '  switch (type) {' },
      { line: '    ...' },
      { line: '  }' },
      { line: '}' },
    ],
    bottomNote:
      '참고: 최신 코드에서는 HostHoistable, HostSingleton 같은 세부 Host 분기도 보일 수 있습니다.',
  },
  vsDom: {
    badge: '04',
    eyebrow: '오해 방지',
    title: 'HostComponent Fiber와 실제 DOM의 차이',
    description:
      'HostComponent Fiber는 자주 DOM과 혼동됩니다. 위치 / 역할 / 생성 시점을 짚어 두면 헷갈리지 않습니다.',
    headers: {
      label: '항목',
      fiber: 'HostComponent Fiber',
      dom: '실제 DOM',
    },
    rows: [
      {
        id: 'where',
        label: '위치',
        fiber: 'React 내부 메모리/가상 트리 안',
        dom: '브라우저의 DOM 트리 안',
      },
      {
        id: 'role',
        label: '역할',
        fiber: 'DOM을 만들기 위한 작업 단위',
        dom: '실제로 화면에 그려지는 노드',
      },
      {
        id: 'when',
        label: '생성 시점',
        fiber: '렌더 단계에서 Fiber 생성 시 만들어짐',
        dom: '커밋 단계에서 DOM 생성 후 삽입됨',
      },
    ],
    emphasisTitle: '핵심',
    emphasisBody: 'HostComponent Fiber는 DOM 그 자체가 아니다. DOM을 만들기 위한 내부 작업 단위다.',
  },
  modern: {
    badge: '05',
    eyebrow: '확장 주제',
    title: 'Host 계열의 최신 세분화 맛보기',
    pill: 'NEW',
    description:
      '최신 React에서는 Host 계열이 더 잘게 나뉘었습니다. 입문에서는 HostComponent만 알면 충분하지만, 코드를 더 깊이 읽으려면 이름 정도는 익혀 두면 좋습니다.',
    cards: [
      {
        id: 'host-component',
        title: 'HostComponent',
        subtitle: '일반 DOM 요소',
        description: 'div, span, button, input 등 일반적인 DOM 태그를 위한 기본 Host Fiber.',
        iconName: 'box',
        accent: 'green',
      },
      {
        id: 'host-hoistable',
        title: 'HostHoistable',
        subtitle: '리소스/hoist 관련 Host 흐름',
        description:
          '스타일, 스크립트, 메타 데이터처럼 head 등으로 끌어올릴 수 있는 요소 처리 흐름.',
        iconName: 'package',
        accent: 'blue',
      },
      {
        id: 'host-singleton',
        title: 'HostSingleton',
        subtitle: '싱글턴 성격의 Host 처리',
        description:
          '앱에서 하나만 존재해야 하는 특수 리소스나 전역 스타일 등에 사용되는 Host 흐름.',
        iconName: 'target',
        accent: 'purple',
      },
    ],
    footnote: '버전과 환경에 따라 세부 구현과 이름이 달라질 수 있습니다.',
  },
  quiz: {
    badge: '06',
    eyebrow: '복습',
    title: '미니 퀴즈',
    answerLabel: '정답',
    cards: [
      {
        id: 'q1',
        badge: 'Q1',
        question: '<section />의 type은?',
        answer: "문자열 'section'",
        description: 'JSX 태그 이름이 따옴표 없이 보이면 문자열 type입니다.',
      },
      {
        id: 'q2',
        badge: 'Q2',
        question: '그래서 어떤 Fiber 계열로 갈까?',
        answer: 'Host 계열 Fiber',
        description: '문자열 type은 React에서 Host 계열 분기로 이어집니다.',
      },
    ],
  },
  checklist: {
    badge: '07',
    eyebrow: '한 줄 요약',
    title: '빠른 체크리스트',
    items: [
      { id: 'c1', text: 'JSX 태그 이름이 따옴표 없이 보이면 문자열 type이다' },
      { id: 'c2', text: '문자열 type은 Host 계열 분기의 조건이 된다' },
      {
        id: 'c3',
        text: 'HostComponent Fiber는 DOM을 만들기 위한 내부 작업 단위다',
      },
      {
        id: 'c4',
        text: '실제 DOM은 커밋 단계에서 생성되어 브라우저 트리에 삽입된다',
      },
    ],
  },
};

const en: HostComponentFiberContent = {
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Next: Function / Class Component Fiber',
    description: 'See how function and class components are represented as fibers.',
    cta: 'Go to the next page',
    href: '/function-fiber',
  },
  hero: {
    badge: 'Element → Fiber · 4/10',
    title: {
      line1: 'What kind of Fiber',
      line2: 'does <div /> become?',
    },
    description1: 'Elements with a string type fall into the Host family of Fibers.',
    description2:
      'In the DOM renderer, that Fiber is wired up to actual DOM-element work later on.',
    domTags: [
      { id: 'div', code: '<div />', type: "type: 'div'" },
      { id: 'button', code: '<button />', type: "type: 'button'" },
      { id: 'input', code: '<input />', type: "type: 'input'" },
    ],
    resultTitle: 'HostComponent Fiber',
    resultItems: [
      'Host-family Fiber',
      'Wired up to real DOM updates',
      'Connected to the DOM renderer',
    ],
  },
  example: {
    badge: '01',
    eyebrow: 'By example',
    title: 'Example JSX & type check',
    description:
      'One line of JSX becomes an Element. What does its type field look like? See the middle card.',
    jsxLabel: 'JSX',
    jsxCode: '<button className="save">Save</button>',
    elementLabel: 'Element',
    elementCode:
      "{\n  type: 'button',\n  key: null,\n  props: {\n    className: 'save',\n    children: 'Save'\n  }\n}",
    keyPointTitle: "Element.type = 'button'",
    keyPointDescription: 'A string type is the entry into the Host-family branch.',
  },
  concept: {
    badge: '02',
    eyebrow: 'Concept',
    title: 'What is a Host Component?',
    description1:
      'A Fiber that represents a base element wired to the actual rendering environment outside React.',
    description2: 'In the browser, that means real DOM elements like div, button, and input.',
    treeNodes,
    domLabel: 'Browser DOM',
    bridgeLabel: 'HostComponent → Browser DOM',
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'Into the source',
    title: 'Source-code checkpoint',
    description: 'Look at ReactFiber.js. The string branch leads directly to HostComponent.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    spotLabel: 'Spot',
    spot: "typeof type === 'string'",
    questionLabel: 'Learning question',
    question: 'Which Fiber family does a string type lead to?',
    hintCta: 'Show hint',
    hint: 'typeof splits function vs string. The string branch pins fiberTag to HostComponent. Other symbol types are handled in switch.',
    codeTitle: 'ReactFiber.js',
    codeLines: [
      { line: "if (typeof type === 'function') {" },
      { line: '  // FunctionComponent or ClassComponent branch' },
      { line: '  // ...' },
      { line: "} else if (typeof type === 'string') {", emphasis: true },
      { line: '  // string type → Host-family branch' },
      { line: '  fiberTag = HostComponent;', emphasis: true },
      { line: '} else {' },
      { line: '  // symbol branch (Fragment, StrictMode, …)' },
      { line: '  switch (type) {' },
      { line: '    ...' },
      { line: '  }' },
      { line: '}' },
    ],
    bottomNote:
      'Note: in newer code you may also see HostHoistable and HostSingleton sub-branches.',
  },
  vsDom: {
    badge: '04',
    eyebrow: 'Clear the confusion',
    title: 'HostComponent Fiber vs Real DOM',
    description:
      'HostComponent Fiber is often confused with the DOM. Compare location, role, and timing to keep them apart.',
    headers: {
      label: 'Aspect',
      fiber: 'HostComponent Fiber',
      dom: 'Real DOM',
    },
    rows: [
      {
        id: 'where',
        label: 'Location',
        fiber: "Inside React's in-memory / virtual tree",
        dom: "Inside the browser's DOM tree",
      },
      {
        id: 'role',
        label: 'Role',
        fiber: 'A unit of work for building DOM',
        dom: 'The actual node painted to the screen',
      },
      {
        id: 'when',
        label: 'When created',
        fiber: 'When the Fiber is built in render phase',
        dom: 'Inserted during commit phase',
      },
    ],
    emphasisTitle: 'Key idea',
    emphasisBody:
      'HostComponent Fiber is not the DOM itself. It is an internal unit of work for building DOM.',
  },
  modern: {
    badge: '05',
    eyebrow: 'Advanced',
    title: 'Modern Host-family split',
    pill: 'NEW',
    description:
      'Modern React breaks the Host family into more variants. As an intro you only need HostComponent, but spotting the names helps when reading source.',
    cards: [
      {
        id: 'host-component',
        title: 'HostComponent',
        subtitle: 'General DOM element',
        description:
          'The default Host fiber for ordinary DOM tags like div, span, button, input, …',
        iconName: 'box',
        accent: 'green',
      },
      {
        id: 'host-hoistable',
        title: 'HostHoistable',
        subtitle: 'Resource / hoistable Host flow',
        description:
          'Handles styles, scripts, and meta — elements that can be hoisted into <head>.',
        iconName: 'package',
        accent: 'blue',
      },
      {
        id: 'host-singleton',
        title: 'HostSingleton',
        subtitle: 'Singleton-style Host handling',
        description:
          'For elements that must exist only once in the app — special resources or global style.',
        iconName: 'target',
        accent: 'purple',
      },
    ],
    footnote: 'Implementation details and names may shift between React versions.',
  },
  quiz: {
    badge: '06',
    eyebrow: 'Quick check',
    title: 'Mini quiz',
    answerLabel: 'Answer',
    cards: [
      {
        id: 'q1',
        badge: 'Q1',
        question: 'What is the type of <section />?',
        answer: "The string 'section'",
        description: 'When a JSX tag name is shown without quotes, the type is a string.',
      },
      {
        id: 'q2',
        badge: 'Q2',
        question: 'And which Fiber family does it land in?',
        answer: 'The Host family',
        description: 'String types lead to the Host-family branch in React.',
      },
    ],
  },
  checklist: {
    badge: '07',
    eyebrow: 'One-line recap',
    title: 'Quick checklist',
    items: [
      {
        id: 'c1',
        text: 'A bare JSX tag name (no quotes) means a string type.',
      },
      {
        id: 'c2',
        text: 'A string type is the condition for the Host-family branch.',
      },
      {
        id: 'c3',
        text: 'HostComponent Fiber is the unit of work for building DOM.',
      },
      {
        id: 'c4',
        text: 'Real DOM is created and inserted during the commit phase.',
      },
    ],
  },
};

export const hostComponentFiberContent: Record<Locale, HostComponentFiberContent> = { ko, en };
