import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type TypeKindAccent = 'host' | 'custom' | 'special';

export type HeroDiagramItem = {
  id: TypeKindAccent;
  value: string;
  title: string;
  category: string;
  body: string;
  tone: ToneKey;
  iconName: 'tag' | 'user' | 'sparkles';
};

export type TypeKindCard = {
  id: TypeKindAccent;
  value: string;
  category: string;
  title: string;
  body: string;
  checks: string[];
  tone: ToneKey;
  iconName: 'tag' | 'user' | 'sparkles';
};

export type JsxRow = {
  id: TypeKindAccent;
  jsx: string;
  typeResult: string;
  typeBadge: string;
  meaningBadge: string;
  meaning: string;
  tone: ToneKey;
};

export type CompareRow = {
  id: TypeKindAccent;
  category: string;
  jsx: string;
  typeValue: string;
  next: string;
  tone: ToneKey;
};

export type FiberFlowStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'box' | 'workflow' | 'atom';
  chips?: string[];
};

export type QuizCard = {
  id: string;
  question: string;
  questionCode?: string;
  answer: string;
  explanation: string;
  tone: ToneKey;
};

export type ReactElementTypeMeaningContent = {
  hero: {
    badge: string;
    title: { line1: string; line2Accent: string; line2After: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    diagramTitle: string;
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
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: { category: string; jsx: string; type: string; next: string };
    rows: CompareRow[];
    emphasis: string;
  };
  source: {
    badge: string;
    eyebrow: string;
    title: string;
    descriptionTitle: string;
    descriptionBody: string;
    bullets: string[];
    fileLabel: string;
    fileName: string;
    code: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  fiber: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FiberFlowStep[];
    summary: string;
  };
  quiz: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    answerLabel: string;
    cards: QuizCard[];
  };
  next: {
    badge: string;
    eyebrow: string;
    title: string;
    line1: string;
    line2Before: string;
    line2Accent: string;
    line2After: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

const ko: ReactElementTypeMeaningContent = {
  hero: {
    badge: 'Element와 JSX · 6/10단계',
    title: {
      line1: 'type은 이 Element가',
      line2Accent: '무엇을 의미하는지',
      line2After: ' 알려줍니다.',
    },
    description:
      '문자열 태그인지, 사용자 정의 컴포넌트인지, React 내부의 특별한 타입인지 — type이 이후 렌더링 방향을 결정합니다.',
    primaryCta: 'type 분류 한눈에 보기',
    secondaryCta: 'Fiber 연결 미리보기',
    primaryHref: '#kinds',
    secondaryHref: '#fiber',
    diagramTitle: 'Element.type 분류도',
    diagramItems: [
      {
        id: 'host',
        value: "'div'",
        title: '문자열 태그',
        category: 'Host Component',
        body: '브라우저가 이해하는 기본 태그입니다.',
        tone: 'cyan',
        iconName: 'tag',
      },
      {
        id: 'custom',
        value: 'MyButton',
        title: '사용자 정의 컴포넌트',
        category: 'Function / Class',
        body: '사용자가 만든 컴포넌트입니다.',
        tone: 'violet',
        iconName: 'user',
      },
      {
        id: 'special',
        value: 'REACT_SUSPENSE_TYPE',
        title: 'React 내부 특별 타입',
        category: 'Special Type',
        body: 'React가 전용 로직으로 처리하는 타입입니다.',
        tone: 'amber',
        iconName: 'sparkles',
      },
    ],
    bottomNoteTitle: 'Render 방향 결정의 핵심 입력',
    bottomNoteBody: 'type이 이후 과정의 길을 정합니다.',
  },
  kinds: {
    badge: '02',
    eyebrow: 'type의 대표적인 형태 3가지',
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
        iconName: 'tag',
      },
      {
        id: 'custom',
        value: 'MyButton',
        category: 'Function / Class Component',
        title: '사용자 정의 컴포넌트',
        body: '사용자가 정의한 컴포넌트입니다.',
        checks: ['함수나 클래스', 'React가 컴포넌트 로직을 실행', '예: function MyButton() {}'],
        tone: 'violet',
        iconName: 'user',
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
        iconName: 'sparkles',
      },
    ],
  },
  rows: {
    badge: '03',
    eyebrow: 'JSX 예제와 type 결과 연결',
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
  compare: {
    badge: '04',
    eyebrow: 'Host / Custom / Special type 비교',
    title: '세 분류, 한 표에서 정리',
    description:
      'JSX 모양과 type 값, 이후 의미까지 같은 자리에서 비교합니다. 이 분류가 곧 Fiber 갈래의 출발점입니다.',
    headers: {
      category: '구분',
      jsx: 'JSX',
      type: 'type',
      next: '이후 의미',
    },
    rows: [
      {
        id: 'host',
        category: 'Host Component',
        jsx: '<div />',
        typeValue: "'div' 문자열",
        next: 'createFiberFromTypeAndProps에서 Host로 분류되어 DOM Element Fiber가 생성됩니다.',
        tone: 'cyan',
      },
      {
        id: 'custom',
        category: 'Custom Component',
        jsx: '<MyButton />',
        typeValue: 'MyButton 함수/클래스',
        next: '함수/클래스 Fiber로 분류되어 컴포넌트 로직이 실행됩니다.',
        tone: 'violet',
      },
      {
        id: 'special',
        category: 'Special Type',
        jsx: '<Suspense />',
        typeValue: 'REACT_SUSPENSE_TYPE 심벌',
        next: '특별 타입으로 분류되어 Suspense 전용 로직이 적용됩니다.',
        tone: 'amber',
      },
    ],
    emphasis: 'type은 다음 Fiber 생성 단계에서 분류의 기준이 된다.',
  },
  source: {
    badge: '05',
    eyebrow: '실제 코드 연결',
    title: 'ReactElement가 type을 어떻게 다루는지',
    descriptionTitle: 'ReactElement는 전달받은 type을 객체에 그대로 넣습니다.',
    descriptionBody:
      '이 값은 이후 Fiber 생성 단계에서 무엇을 만들지 판단하는 입력이 됩니다. ReactElement 단계에서는 type을 바꾸지 않고 저장합니다.',
    bullets: ['type은 변경되지 않은 채 저장됩니다.', '렌더링 방식의 분기 기준이 됩니다.'],
    fileLabel: '파일',
    fileName: 'ReactJSXElement.js',
    code: 'function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  const element = {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type,\n    key,\n    props,\n    _owner: owner,\n  };\n\n  // 개발 모드 필드 생략...\n\n  return element;\n}',
    primaryCta: 'ReactElement 코드 읽기',
    secondaryCta: 'Fiber 연결 미리보기',
    primaryHref: '#fiber',
    secondaryHref: '#kinds',
  },
  fiber: {
    badge: '06',
    eyebrow: '다음 챕터와의 연결: Fiber 분류의 출발점',
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
        iconName: 'box',
      },
      {
        id: 'create-fiber',
        number: '02',
        title: 'createFiberFromTypeAndProps',
        body: 'type을 보고 Fiber의 종류를 결정',
        tone: 'violet',
        iconName: 'workflow',
      },
      {
        id: 'fibers',
        number: '03',
        title: 'Host / Function / Class / Fragment Fiber',
        body: '각 타입에 맞는 Fiber가 생성되어 이후 렌더링 계산으로 이어집니다.',
        tone: 'teal',
        iconName: 'atom',
        chips: ['Host', 'Function', 'Class', 'Fragment'],
      },
    ],
    summary: 'type을 이해하면 다음 챕터의 Fiber 분류가 훨씬 쉬워진다.',
  },
  quiz: {
    badge: '07',
    eyebrow: '빠른 판단 퀴즈',
    title: '한 줄로 답해 봅니다',
    description: '두 문제를 풀면 type의 위치가 더 분명해집니다.',
    answerLabel: '정답',
    cards: [
      {
        id: 'q1',
        question: "<MyButton />의 type은 문자열 'MyButton'일까?",
        questionCode: '<MyButton />',
        answer: '아니다. 실제 컴포넌트 함수 자체다.',
        explanation:
          'type에는 함수나 클래스 자체가 들어갑니다. 문자열이 아니라 컴포넌트의 실제 참조값입니다.',
        tone: 'violet',
      },
      {
        id: 'q2',
        question: '<div />의 type은?',
        questionCode: '<div />',
        answer: "문자열 'div'",
        explanation: "Host 컴포넌트이므로 브라우저 태그 이름인 문자열 'div'가 저장됩니다.",
        tone: 'cyan',
      },
    ],
  },
  next: {
    badge: '08',
    eyebrow: '다음 단계로 이동하기',
    title: '이제 key로 넘어갑니다',
    line1: 'type이 렌더링 대상의 종류를 가리킨다는 점을 알았다면,',
    line2Before: '이제 형제 요소 비교를 위해 별도로 관리되는 ',
    line2Accent: 'key',
    line2After: '를 살펴봅니다.',
    primaryCta: '다음: key는 왜 특별한가?',
    secondaryCta: '이전 페이지 다시 보기',
    primaryHref: '/element-key',
    secondaryHref: '/element-structure',
  },
};

const en: ReactElementTypeMeaningContent = {
  hero: {
    badge: 'Elements & JSX · 6/10',
    title: {
      line1: 'type tells you',
      line2Accent: 'what this Element means',
      line2After: '.',
    },
    description:
      'A string tag, a user-defined component, or a React-internal special type — type decides the path the rest of rendering takes.',
    primaryCta: 'See the type categories',
    secondaryCta: 'Preview the Fiber link',
    primaryHref: '#kinds',
    secondaryHref: '#fiber',
    diagramTitle: 'Element.type categories',
    diagramItems: [
      {
        id: 'host',
        value: "'div'",
        title: 'String tag',
        category: 'Host Component',
        body: 'A built-in tag the browser understands.',
        tone: 'cyan',
        iconName: 'tag',
      },
      {
        id: 'custom',
        value: 'MyButton',
        title: 'User-defined component',
        category: 'Function / Class',
        body: 'A component the user wrote.',
        tone: 'violet',
        iconName: 'user',
      },
      {
        id: 'special',
        value: 'REACT_SUSPENSE_TYPE',
        title: 'React-internal special type',
        category: 'Special Type',
        body: 'A type React handles with dedicated logic.',
        tone: 'amber',
        iconName: 'sparkles',
      },
    ],
    bottomNoteTitle: 'The key render-routing input',
    bottomNoteBody: 'type sets the path for what comes next.',
  },
  kinds: {
    badge: '02',
    eyebrow: 'Three representative shapes of type',
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
        iconName: 'tag',
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
        iconName: 'user',
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
        iconName: 'sparkles',
      },
    ],
  },
  rows: {
    badge: '03',
    eyebrow: 'JSX example → type result',
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
  compare: {
    badge: '04',
    eyebrow: 'Host / Custom / Special type compared',
    title: 'Three categories, one table',
    description:
      'JSX shape, type value, and downstream meaning side by side. This split is the origin of the Fiber split.',
    headers: { category: 'Aspect', jsx: 'JSX', type: 'type', next: 'What follows' },
    rows: [
      {
        id: 'host',
        category: 'Host Component',
        jsx: '<div />',
        typeValue: "'div' (string)",
        next: 'createFiberFromTypeAndProps classifies it as Host and creates a DOM Element Fiber.',
        tone: 'cyan',
      },
      {
        id: 'custom',
        category: 'Custom Component',
        jsx: '<MyButton />',
        typeValue: 'MyButton (function/class)',
        next: 'Classified as a function/class Fiber; component logic runs.',
        tone: 'violet',
      },
      {
        id: 'special',
        category: 'Special Type',
        jsx: '<Suspense />',
        typeValue: 'REACT_SUSPENSE_TYPE (Symbol)',
        next: 'Classified as a special type; Suspense-specific logic applies.',
        tone: 'amber',
      },
    ],
    emphasis: 'type is the criterion used to split Fibers in the next stage.',
  },
  source: {
    badge: '05',
    eyebrow: 'Real source code link',
    title: 'How ReactElement stores type',
    descriptionTitle: 'ReactElement stores the received type as-is on the object.',
    descriptionBody:
      'That value is later used as input when deciding what kind of Fiber to create. ReactElement itself does not transform type.',
    bullets: ['type is stored unchanged.', 'It is the branching point for rendering.'],
    fileLabel: 'File',
    fileName: 'ReactJSXElement.js',
    code: 'function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  const element = {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type,\n    key,\n    props,\n    _owner: owner,\n  };\n\n  // dev-mode fields omitted...\n\n  return element;\n}',
    primaryCta: 'Open ReactElement source',
    secondaryCta: 'Preview the Fiber link',
    primaryHref: '#fiber',
    secondaryHref: '#kinds',
  },
  fiber: {
    badge: '06',
    eyebrow: 'Next chapter link — origin of the Fiber split',
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
        iconName: 'box',
      },
      {
        id: 'create-fiber',
        number: '02',
        title: 'createFiberFromTypeAndProps',
        body: 'Reads type and picks the Fiber kind',
        tone: 'violet',
        iconName: 'workflow',
      },
      {
        id: 'fibers',
        number: '03',
        title: 'Host / Function / Class / Fragment Fiber',
        body: 'Each type yields its own Fiber, feeding into rendering computation.',
        tone: 'teal',
        iconName: 'atom',
        chips: ['Host', 'Function', 'Class', 'Fragment'],
      },
    ],
    summary: 'Understanding type makes the next chapter — Fiber classification — much easier.',
  },
  quiz: {
    badge: '07',
    eyebrow: 'Quick decision quiz',
    title: 'Answer in one line',
    description: 'Two quick questions anchor where type lives.',
    answerLabel: 'Answer',
    cards: [
      {
        id: 'q1',
        question: "Is the type of <MyButton /> the string 'MyButton'?",
        questionCode: '<MyButton />',
        answer: 'No — it is the actual component function itself.',
        explanation:
          'type holds the function or class itself, not its name string — a real reference to the component.',
        tone: 'violet',
      },
      {
        id: 'q2',
        question: 'What is the type of <div />?',
        questionCode: '<div />',
        answer: "The string 'div'",
        explanation:
          'Because it is a Host component, the browser tag name string is stored as type.',
        tone: 'cyan',
      },
    ],
  },
  next: {
    badge: '08',
    eyebrow: 'Continue to the next step',
    title: 'Next up: the key',
    line1: 'Now that you know type names the kind of render target,',
    line2Before: 'look at ',
    line2Accent: 'key',
    line2After: ', the separate field used for sibling comparison.',
    primaryCta: 'Next: why is key special?',
    secondaryCta: 'Revisit the previous page',
    primaryHref: '/element-key',
    secondaryHref: '/element-structure',
  },
};

export const reactElementTypeMeaningContent: Record<Locale, ReactElementTypeMeaningContent> = {
  ko,
  en,
};
