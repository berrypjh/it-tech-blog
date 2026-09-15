import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type TypeKindId = 'host' | 'custom' | 'special';

export type HeroDiagramItem = {
  id: TypeKindId;
  value: string;
  title: string;
  category: string;
  body: string;
  tone: ToneKey;
};

export type TypeKindCard = {
  id: TypeKindId;
  value: string;
  category: string;
  title: string;
  body: string;
  checks: string[];
  tone: ToneKey;
};

export type JsxRow = {
  id: TypeKindId;
  jsx: string;
  typeResult: string;
  typeBadge: string;
  meaningBadge: string;
  meaning: string;
  tone: ToneKey;
};

export type FiberFlowStep = {
  id: 'element-type' | 'create-fiber' | 'fibers';
  number: string;
  title: string;
  body: string;
  tone: ToneKey;
  chips?: string[];
};

export type ReactElementTypeMeaningContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramTitle: string;
    shapeCode: string;
    diagramItems: HeroDiagramItem[];
    bottomNoteTitle: string;
    bottomNoteBody: string;
  };
  kinds: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: TypeKindCard[];
  };
  rows: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: JsxRow[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    pointLabel: string;
    pointValue: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  fiber: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FiberFlowStep[];
    summary: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: ReactElementTypeMeaningContent = {
  hero: {
    badge: 'Element와 JSX · 6/10단계',
    title: {
      line1: 'type은 이 Element가',
      line2: '무엇을 의미하는지 알려줍니다.',
    },
    description:
      '문자열 태그인지, 사용자 정의 컴포넌트인지, React 내부의 특별한 타입인지 — type이 이후 렌더링 방향을 결정합니다.',
    diagramTitle: 'Element.type 분류도',
    shapeCode: `const element = {
  $$typeof: REACT_ELEMENT_TYPE,
  type, // ← 무엇을 렌더할지
  key,
  props,
};`,
    diagramItems: [
      {
        id: 'host',
        value: "'div'",
        title: '문자열 태그',
        category: 'Host Component',
        body: '브라우저가 이해하는 기본 태그입니다.',
        tone: 'cyan',
      },
      {
        id: 'custom',
        value: 'MyButton',
        title: '사용자 정의 컴포넌트',
        category: 'Function / Class',
        body: '사용자가 만든 컴포넌트입니다.',
        tone: 'violet',
      },
      {
        id: 'special',
        value: 'REACT_SUSPENSE_TYPE',
        title: 'React 내부 특별 타입',
        category: 'Special Type',
        body: 'React가 전용 로직으로 처리하는 타입입니다.',
        tone: 'amber',
      },
    ],
    bottomNoteTitle: 'Render 방향 결정의 핵심 입력',
    bottomNoteBody: 'type이 이후 과정의 길을 정합니다.',
  },
  kinds: {
    badge: '01',
    eyebrow: 'type의 형태',
    title: 'Host · Custom · Special — 세 갈래',
    description: 'JSX의 결과로 만들어지는 Element의 type은 거의 모든 경우 이 세 갈래로 정리됩니다.',
    cards: [
      {
        id: 'host',
        value: "'div'",
        category: 'Host Component',
        title: '문자열 태그',
        body: '브라우저가 이해하는 기본 태그입니다.',
        checks: ['문자열 형태', 'DOM node로 매핑', "예: 'div', 'span', 'button'"],
        tone: 'cyan',
      },
      {
        id: 'custom',
        value: 'MyButton',
        category: 'Function / Class Component',
        title: '사용자 정의 컴포넌트',
        body: '사용자가 정의한 컴포넌트입니다.',
        checks: ['함수나 클래스', 'React가 컴포넌트 로직을 실행', '예: function MyButton() {}'],
        tone: 'violet',
      },
      {
        id: 'special',
        value: 'REACT_SUSPENSE_TYPE',
        category: 'Special Type',
        title: 'React 내부 특별 타입',
        body: 'React 내부에서 특별히 다루는 타입입니다.',
        checks: [
          '심벌(Symbol) 기반 식별값',
          '특별한 렌더링 동작을 가짐',
          '예: Suspense, Fragment, Context 등',
        ],
        tone: 'amber',
      },
    ],
  },
  rows: {
    badge: '02',
    eyebrow: 'JSX → type',
    title: '같은 모양의 JSX, 다른 type 값',
    description: 'JSX 한 줄이 어떤 type 값을 만들고, 어떤 후속 의미로 이어지는지 직접 매핑합니다.',
    items: [
      {
        id: 'host',
        jsx: '<div />',
        typeResult: "type = 'div'",
        typeBadge: '문자열',
        meaningBadge: 'Host',
        meaning: 'Host Component로 분류되어 DOM Element로 이어집니다.',
        tone: 'cyan',
      },
      {
        id: 'custom',
        jsx: '<MyButton />',
        typeResult: 'type = MyButton',
        typeBadge: '함수/클래스',
        meaningBadge: 'Custom',
        meaning: '사용자 정의 컴포넌트로 분류되어 컴포넌트 실행 흐름으로 이어집니다.',
        tone: 'violet',
      },
      {
        id: 'special',
        jsx: '<Suspense fallback={<p>Loading...</p>} />',
        typeResult: 'type = REACT_SUSPENSE_TYPE',
        typeBadge: '특별 타입',
        meaningBadge: 'Special',
        meaning: 'React 내부 특별 타입으로 분류되어 특수한 렌더링 로직이 적용됩니다.',
        tone: 'amber',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: '코드 체크포인트',
    title: 'ReactElement가 type을 그대로 담는 순간',
    description:
      'ReactElement는 전달받은 type을 바꾸지 않고 객체에 그대로 넣습니다. 이 값은 이후 Fiber를 만들 때 무엇을 만들지 판단하는 기준이 됩니다.',
    fileLabel: '파일',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    pointLabel: '볼 포인트',
    pointValue: 'type 필드 저장',
    code: 'function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  const element = {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type,\n    key,\n    props,\n    _owner: owner,\n  };\n\n  // 개발 모드 필드 생략...\n\n  return element;\n}',
    primaryCta: 'ReactElement 코드 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
  },
  fiber: {
    badge: '04',
    eyebrow: '다음 챕터 예고',
    title: 'type에서 Fiber 갈래까지',
    description:
      'Element 안의 type 값이 Fiber 생성 함수에 그대로 전달되어, Fiber의 갈래를 결정합니다.',
    steps: [
      {
        id: 'element-type',
        number: '01',
        title: 'Element.type',
        body: 'React Element 안의 type 값',
        tone: 'sky',
      },
      {
        id: 'create-fiber',
        number: '02',
        title: 'createFiberFromTypeAndProps',
        body: 'type을 보고 Fiber의 종류를 결정',
        tone: 'violet',
      },
      {
        id: 'fibers',
        number: '03',
        title: 'Host / Function / Class / Fragment Fiber',
        body: '각 타입에 맞는 Fiber가 생성되어 이후 렌더링 계산으로 이어집니다.',
        tone: 'teal',
        chips: ['Host', 'Function', 'Class', 'Fragment'],
      },
    ],
    summary: 'type을 이해하면 다음 챕터의 Fiber 분류가 훨씬 쉬워진다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '이제 key로 넘어갑니다',
    description:
      'type이 렌더링 대상의 종류를 가리킨다는 점을 알았다면, 이제 형제 요소 비교를 위해 별도로 관리되는 key를 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/element-key',
  },
};

const en: ReactElementTypeMeaningContent = {
  hero: {
    badge: 'Elements & JSX · 6/10',
    title: {
      line1: 'type tells you',
      line2: 'what this Element means.',
    },
    description:
      'A string tag, a user-defined component, or a React-internal special type — type decides the path the rest of rendering takes.',
    diagramTitle: 'Element.type categories',
    shapeCode: `const element = {
  $$typeof: REACT_ELEMENT_TYPE,
  type, // ← what to render
  key,
  props,
};`,
    diagramItems: [
      {
        id: 'host',
        value: "'div'",
        title: 'String tag',
        category: 'Host Component',
        body: 'A built-in tag the browser understands.',
        tone: 'cyan',
      },
      {
        id: 'custom',
        value: 'MyButton',
        title: 'User-defined component',
        category: 'Function / Class',
        body: 'A component the user wrote.',
        tone: 'violet',
      },
      {
        id: 'special',
        value: 'REACT_SUSPENSE_TYPE',
        title: 'React-internal special type',
        category: 'Special Type',
        body: 'A type React handles with dedicated logic.',
        tone: 'amber',
      },
    ],
    bottomNoteTitle: 'The key render-routing input',
    bottomNoteBody: 'type sets the path for what comes next.',
  },
  kinds: {
    badge: '01',
    eyebrow: 'TYPE SHAPES',
    title: 'Host · Custom · Special — the three branches',
    description: 'Almost every Element type produced by JSX lands in one of these three branches.',
    cards: [
      {
        id: 'host',
        value: "'div'",
        category: 'Host Component',
        title: 'String tag',
        body: 'A built-in tag the browser understands.',
        checks: ['Stored as a string', 'Maps to a DOM node', "Examples: 'div', 'span', 'button'"],
        tone: 'cyan',
      },
      {
        id: 'custom',
        value: 'MyButton',
        category: 'Function / Class Component',
        title: 'User-defined component',
        body: 'A component the user defined.',
        checks: [
          'A function or class',
          "React runs the component's logic",
          'Example: function MyButton() {}',
        ],
        tone: 'violet',
      },
      {
        id: 'special',
        value: 'REACT_SUSPENSE_TYPE',
        category: 'Special Type',
        title: 'React-internal special type',
        body: 'A type React treats specially inside the runtime.',
        checks: [
          'A Symbol-based identifier',
          'Has dedicated rendering behavior',
          'Examples: Suspense, Fragment, Context, ...',
        ],
        tone: 'amber',
      },
    ],
  },
  rows: {
    badge: '02',
    eyebrow: 'JSX TO TYPE',
    title: 'Same shape, different type value',
    description: 'See what type value each JSX line produces and the meaning that follows.',
    items: [
      {
        id: 'host',
        jsx: '<div />',
        typeResult: "type = 'div'",
        typeBadge: 'string',
        meaningBadge: 'Host',
        meaning: 'Classified as a Host Component, leading to a DOM Element.',
        tone: 'cyan',
      },
      {
        id: 'custom',
        jsx: '<MyButton />',
        typeResult: 'type = MyButton',
        typeBadge: 'function / class',
        meaningBadge: 'Custom',
        meaning: 'Classified as a user-defined component; component logic executes.',
        tone: 'violet',
      },
      {
        id: 'special',
        jsx: '<Suspense fallback={<p>Loading...</p>} />',
        typeResult: 'type = REACT_SUSPENSE_TYPE',
        typeBadge: 'special',
        meaningBadge: 'Special',
        meaning: 'Classified as a React-internal special type with dedicated rendering.',
        tone: 'amber',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'CODE CHECKPOINT',
    title: 'See ReactElement store type as-is',
    description:
      'ReactElement puts the received type on the object unchanged. Later, when Fibers are created, that value decides what kind of Fiber to build.',
    fileLabel: 'File',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    pointLabel: 'Watch for',
    pointValue: 'where type is stored',
    code: 'function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  const element = {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type,\n    key,\n    props,\n    _owner: owner,\n  };\n\n  // dev-mode fields omitted...\n\n  return element;\n}',
    primaryCta: 'Open ReactElement source',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
  },
  fiber: {
    badge: '04',
    eyebrow: 'NEXT CHAPTER',
    title: 'From type to Fiber branches',
    description:
      'The type inside an Element is passed straight to the Fiber creation function, which decides the Fiber branch.',
    steps: [
      {
        id: 'element-type',
        number: '01',
        title: 'Element.type',
        body: 'The type value inside a React Element',
        tone: 'sky',
      },
      {
        id: 'create-fiber',
        number: '02',
        title: 'createFiberFromTypeAndProps',
        body: 'Reads type and picks the Fiber kind',
        tone: 'violet',
      },
      {
        id: 'fibers',
        number: '03',
        title: 'Host / Function / Class / Fragment Fiber',
        body: 'Each type yields its own Fiber, feeding into rendering computation.',
        tone: 'teal',
        chips: ['Host', 'Function', 'Class', 'Fragment'],
      },
    ],
    summary: 'Understanding type makes the next chapter — Fiber classification — much easier.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Next up: the key',
    description:
      'Now that you know type names the kind of render target, look at key, the separate field used for sibling comparison.',
    cta: 'Go to the next page',
    href: '/element-key',
  },
};

export const reactElementTypeMeaningContent: Record<Locale, ReactElementTypeMeaningContent> = {
  ko,
  en,
};
