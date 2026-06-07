import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type MappingPair = { native: string; prop: string };

export type FlowStep = {
  title: string;
  description: string;
  code: string;
  tone: Tone;
  isCore?: boolean;
};

export type ConverterOption = MappingPair;

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type OnClickClickContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    codeCard: { fileLabel: string; code: string };
    diagram: {
      title: string;
      columnLabels: { native: string; prop: string };
      rows: MappingPair[];
      helper: { title: string; body: string };
    };
  };
  question: {
    eyebrow: string;
    title: string;
    badges: { title: string; description: string; tone: Tone }[];
  };
  compare: {
    step: number;
    eyebrow: string;
    title: string;
    columnLabels: { native: string; prop: string };
    rows: MappingPair[];
  };
  mapping: {
    step: number;
    eyebrow: string;
    title: string;
    simple: {
      title: string;
      pair: MappingPair;
    };
    special: {
      title: string;
      pairs: MappingPair[];
    };
    insight: string;
  };
  flow: {
    step: number;
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  converter: {
    step: number;
    eyebrow: string;
    title: string;
    hint: string;
    options: ConverterOption[];
    defaultNative: string;
    resultLabels: {
      native: string;
      prop: string;
      result: string;
      note: string;
      simpleNote: string;
    };
  };
  realCode: {
    step: number;
    eyebrow: string;
    title: string;
    smallDescription: string;
    fileLabel: string;
    code: string;
    explanation: { label: string; body: string };
    fileLocation: { label: string; path: string };
    button: { label: string; href: string };
  };
  twoPhase: {
    step: number;
    eyebrow: string;
    title: string;
    bubbleCard: { label: string; description: string };
    centerCode: string;
    branches: { label: string; sub: string; tone: Tone }[];
    nextPreview: { label: string; body: string; cta: string; href: string };
  };
  mission: {
    step: number;
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  takeaways: {
    step: number;
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const HERO_CODE = `function SaveButton() {
  function handleClick() {
    console.log("저장 완료!");
  }

  return <button onClick={handleClick}>저장</button>;
}`;

const HERO_CODE_EN = `function SaveButton() {
  function handleClick() {
    console.log("Saved!");
  }

  return <button onClick={handleClick}>Save</button>;
}`;

const REAL_CODE = `// DOMEventProperties.js
registerSimpleEvent("click", "onClick");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent("keydown", "onKeyDown");
registerSimpleEvent("pointerdown", "onPointerDown");

// ... 더 많은 이벤트
//
// registerSimpleEvent(domEventName, reactPropName)
// 내부적으로 registerTwoPhaseEvent를 호출합니다.`;

const REAL_CODE_EN = `// DOMEventProperties.js
registerSimpleEvent("click", "onClick");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent("keydown", "onKeyDown");
registerSimpleEvent("pointerdown", "onPointerDown");

// ... more events
//
// registerSimpleEvent(domEventName, reactPropName)
// internally invokes registerTwoPhaseEvent.`;

const FULL_TABLE: MappingPair[] = [
  { native: 'click', prop: 'onClick' },
  { native: 'dblclick', prop: 'onDoubleClick' },
  { native: 'focusin', prop: 'onFocus' },
  { native: 'focusout', prop: 'onBlur' },
  { native: 'keydown', prop: 'onKeyDown' },
  { native: 'pointerdown', prop: 'onPointerDown' },
  { native: '...', prop: '...' },
];

const CONVERTER_OPTIONS: ConverterOption[] = [
  { native: 'click', prop: 'onClick' },
  { native: 'dblclick', prop: 'onDoubleClick' },
  { native: 'focusin', prop: 'onFocus' },
  { native: 'focusout', prop: 'onBlur' },
  { native: 'keydown', prop: 'onKeyDown' },
  { native: 'pointerdown', prop: 'onPointerDown' },
];

const ko: OnClickClickContent = {
  hero: {
    badge: '이벤트 시스템 · 3/10단계',
    titleLines: ['onClick과 click은', '같은 이름이 아니다'],
    description:
      'React는 사용자가 쓰는 prop 이름과 브라우저 native event 이름을 내부에서 연결합니다.',
    codeCard: { fileLabel: 'JSX', code: HERO_CODE },
    diagram: {
      title: 'React 내부 매핑 일부 예시',
      columnLabels: { native: '브라우저 Native Event', prop: 'React Prop (Handler)' },
      rows: [
        { native: 'click', prop: 'onClick' },
        { native: 'focusin', prop: 'onFocus' },
        { native: 'dblclick', prop: 'onDoubleClick' },
        { native: '...', prop: '...' },
      ],
      helper: {
        title: '내부 매핑 테이블',
        body: '연결 후 실행됩니다.',
      },
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    title: '브라우저는 click을 발생시키는데, React는 어떻게 onClick handler를 찾을까?',
    badges: [
      { title: '이벤트 이름 매핑', description: '내부 테이블', tone: 'sky' },
      { title: '이름 변환 및 특수 매핑', description: '로직 존재', tone: 'violet' },
      { title: '이후 Listener 수집의 기준', description: '등록 정보', tone: 'teal' },
    ],
  },
  compare: {
    step: 1,
    eyebrow: 'prop-vs-native',
    title: 'React prop vs Native Event 비교',
    columnLabels: { native: 'Native Event (브라우저)', prop: 'React Prop (사용자 코드)' },
    rows: FULL_TABLE,
  },
  mapping: {
    step: 2,
    eyebrow: 'simple-vs-special',
    title: '단순 매핑 vs 특수 매핑',
    simple: {
      title: '단순 매핑 대부분',
      pair: { native: 'click', prop: 'onClick' },
    },
    special: {
      title: '특수 매핑 일부 이벤트',
      pairs: [
        { native: 'dblclick', prop: 'onDoubleClick' },
        { native: 'focusin', prop: 'onFocus' },
        { native: 'focusout', prop: 'onBlur' },
      ],
    },
    insight: 'React 이벤트 이름은 브라우저 이벤트 이름의 단순 대문자 변환만으로 결정되지 않습니다.',
  },
  flow: {
    step: 3,
    eyebrow: 'register-simple-events',
    title: 'registerSimpleEvents 흐름',
    steps: [
      {
        title: 'simpleEventPluginEvents',
        description: '내장된 DOM 이벤트 목록',
        code: `'click',\n'dblclick',\n'focusin',\n'focusout',\n'keydown',\n'pointerdown',\n...`,
        tone: 'sky',
      },
      {
        title: '각 DOM event 반복',
        description: 'for loop',
        code: `for (const domEventName\n  of simpleEventPluginEvents) {\n  ...\n}`,
        tone: 'cyan',
      },
      {
        title: 'React prop name 계산',
        description: '특수 매핑 포함',
        code: `const reactPropName =\n  getReactName(domEventName);`,
        tone: 'violet',
        isCore: true,
      },
      {
        title: 'registerTwoPhaseEvent(...)',
        description: '버블 + 캡처 양쪽 등록',
        code: `registerTwoPhaseEvent(\n  reactPropName,\n  [domEventName],\n);`,
        tone: 'emerald',
      },
    ],
  },
  converter: {
    step: 4,
    eyebrow: 'name-converter',
    title: '이벤트 이름 변환기',
    hint: '직접 선택해 보세요',
    options: CONVERTER_OPTIONS,
    defaultNative: 'focusin',
    resultLabels: {
      native: '선택한 Native Event',
      prop: 'React Handler Prop',
      result: '결과',
      note: '특수 매핑이 적용된 결과입니다.',
      simpleNote: '단순 매핑입니다.',
    },
  },
  realCode: {
    step: 5,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    smallDescription: '특수 이벤트 매핑 일부',
    fileLabel: 'DOMEventProperties.js',
    code: REAL_CODE,
    explanation: {
      label: '설명',
      body: 'focus 대신 focusin을 사용하여 위임(delegation)이 가능합니다. focusout과 blur의 차이도 React 추상화 안에서 사용됩니다. 이렇게 등록된 정보는 이후 listener 수집의 기준이 됩니다.',
    },
    fileLocation: {
      label: '파일 위치',
      path: 'packages/react-dom-bindings/src/events/DOMEventProperties.js',
    },
    button: {
      label: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMEventProperties.js',
    },
  },
  twoPhase: {
    step: 6,
    eyebrow: 'two-phase-preview',
    title: 'two-phase registration 미리보기',
    bubbleCard: {
      label: 'onClick (bubble)',
      description: '버블 단계에서 실행',
    },
    centerCode: `registerTwoPhaseEvent('onClick', 'click')`,
    branches: [
      { label: 'onClick', sub: '버블 단계', tone: 'teal' },
      { label: 'onClickCapture', sub: '캡처 단계', tone: 'violet' },
    ],
    nextPreview: {
      label: '다음 단계 예고',
      body: '이렇게 등록된 두 prop을 기준으로 이후 Capture/Bubble 순서에 맞는 listener가 수집됩니다.',
      cta: '다음: Capture / Bubble 유지',
      href: '/accumulate-listeners',
    },
  },
  mission: {
    step: 7,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    description: 'React 저장소를 직접 열어 매핑 등록 흐름을 손으로 확인해 보세요.',
    items: [
      {
        title: 'DOMEventProperties.js를 연다',
        description: '특수 매핑 규칙이 모인 핵심 파일을 펼친다.',
      },
      {
        title: 'simpleEventPluginEvents 배열을 확인한다',
        description: 'React가 미리 알고 있는 native event 목록이다.',
      },
      {
        title: 'special case 매핑을 찾는다',
        description: 'dblclick → onDoubleClick 같은 케이스를 직접 본다.',
      },
      {
        title: 'onClick과 onClickCapture가 함께 등록될 수 있음을 기억한다',
        description: 'two-phase registration의 의미를 짧게 기록한다.',
      },
    ],
  },
  takeaways: {
    step: 8,
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    cards: [
      {
        title: 'React prop 이름과 native event 이름은 내부에서 매핑된다.',
        body: '사용자는 onClick을 쓰지만, 브라우저는 click을 발생시킨다.',
        tone: 'blue',
      },
      {
        title: '일부 이벤트는 특수 매핑이 필요하다.',
        body: 'dblclick, focusin, focusout 등은 단순 변환으로 해결되지 않는다.',
        tone: 'teal',
      },
      {
        title: '이 등록 정보가 이후 listener 수집의 기준이 된다.',
        body: '매핑된 prop 이름이 있어야 정확한 handler를 찾을 수 있다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '이벤트 우선순위와 dispatch wrapper 보기',
    description:
      'onClick과 click 매핑을 이해했으니, 이벤트 우선순위와 dispatch wrapper의 동작을 이어서 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/dispatch-selection',
  },
};

const en: OnClickClickContent = {
  hero: {
    badge: 'Event System · 3/10',
    titleLines: ['onClick and click', 'are not the same name'],
    description:
      'React internally connects the prop name you write to the native event name fired by the browser.',
    codeCard: { fileLabel: 'JSX', code: HERO_CODE_EN },
    diagram: {
      title: 'A peek at the internal mapping table',
      columnLabels: { native: 'Browser Native Event', prop: 'React Prop (Handler)' },
      rows: [
        { native: 'click', prop: 'onClick' },
        { native: 'focusin', prop: 'onFocus' },
        { native: 'dblclick', prop: 'onDoubleClick' },
        { native: '...', prop: '...' },
      ],
      helper: {
        title: 'Internal mapping table',
        body: 'connected here before invocation.',
      },
    },
  },
  question: {
    eyebrow: "Today's question",
    title: 'The browser fires click — so how does React find your onClick handler?',
    badges: [
      { title: 'Event name mapping', description: 'internal table', tone: 'sky' },
      { title: 'Name conversion & special cases', description: 'logic involved', tone: 'violet' },
      {
        title: 'Foundation for listener collection',
        description: 'registration info',
        tone: 'teal',
      },
    ],
  },
  compare: {
    step: 1,
    eyebrow: 'prop-vs-native',
    title: 'React prop vs Native Event compared',
    columnLabels: { native: 'Native Event (browser)', prop: 'React Prop (your code)' },
    rows: FULL_TABLE,
  },
  mapping: {
    step: 2,
    eyebrow: 'simple-vs-special',
    title: 'Simple mapping vs Special mapping',
    simple: {
      title: 'Simple mapping (most cases)',
      pair: { native: 'click', prop: 'onClick' },
    },
    special: {
      title: 'Special mapping (some events)',
      pairs: [
        { native: 'dblclick', prop: 'onDoubleClick' },
        { native: 'focusin', prop: 'onFocus' },
        { native: 'focusout', prop: 'onBlur' },
      ],
    },
    insight: "React event names are not just upper-cased versions of the browser's event names.",
  },
  flow: {
    step: 3,
    eyebrow: 'register-simple-events',
    title: 'How registerSimpleEvents runs',
    steps: [
      {
        title: 'simpleEventPluginEvents',
        description: 'built-in DOM event list',
        code: `'click',\n'dblclick',\n'focusin',\n'focusout',\n'keydown',\n'pointerdown',\n...`,
        tone: 'sky',
      },
      {
        title: 'iterate each DOM event',
        description: 'for loop',
        code: `for (const domEventName\n  of simpleEventPluginEvents) {\n  ...\n}`,
        tone: 'cyan',
      },
      {
        title: 'compute the React prop name',
        description: 'includes special cases',
        code: `const reactPropName =\n  getReactName(domEventName);`,
        tone: 'violet',
        isCore: true,
      },
      {
        title: 'registerTwoPhaseEvent(...)',
        description: 'register bubble + capture',
        code: `registerTwoPhaseEvent(\n  reactPropName,\n  [domEventName],\n);`,
        tone: 'emerald',
      },
    ],
  },
  converter: {
    step: 4,
    eyebrow: 'name-converter',
    title: 'Event name converter',
    hint: 'pick one to see the mapping',
    options: CONVERTER_OPTIONS,
    defaultNative: 'focusin',
    resultLabels: {
      native: 'Selected Native Event',
      prop: 'React Handler Prop',
      result: 'Result',
      note: 'Special mapping was applied to this result.',
      simpleNote: 'This is a simple mapping.',
    },
  },
  realCode: {
    step: 5,
    eyebrow: 'real-code',
    title: 'Real source preview',
    smallDescription: 'A slice of special-mapping registration',
    fileLabel: 'DOMEventProperties.js',
    code: REAL_CODE_EN,
    explanation: {
      label: 'Explanation',
      body: 'Using focusin instead of focus enables delegation. The focusout/blur distinction lives inside React abstractions too. This registration info is what later listener collection relies on.',
    },
    fileLocation: {
      label: 'File location',
      path: 'packages/react-dom-bindings/src/events/DOMEventProperties.js',
    },
    button: {
      label: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMEventProperties.js',
    },
  },
  twoPhase: {
    step: 6,
    eyebrow: 'two-phase-preview',
    title: 'Two-phase registration preview',
    bubbleCard: {
      label: 'onClick (bubble)',
      description: 'runs during the bubble phase',
    },
    centerCode: `registerTwoPhaseEvent('onClick', 'click')`,
    branches: [
      { label: 'onClick', sub: 'bubble phase', tone: 'teal' },
      { label: 'onClickCapture', sub: 'capture phase', tone: 'violet' },
    ],
    nextPreview: {
      label: 'Next step preview',
      body: 'These two registered props become the basis for collecting listeners in capture/bubble order.',
      cta: 'Next: Capture / Bubble flow',
      href: '/accumulate-listeners',
    },
  },
  mission: {
    step: 7,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    description: 'Open the React repository and verify the mapping registration by hand.',
    items: [
      {
        title: 'Open DOMEventProperties.js',
        description: 'The hub for special-mapping rules.',
      },
      {
        title: 'Inspect the simpleEventPluginEvents array',
        description: 'The native events React already knows about.',
      },
      {
        title: 'Find the special-case mappings',
        description: 'See dblclick → onDoubleClick and friends directly.',
      },
      {
        title: 'Remember onClick & onClickCapture can register together',
        description: 'Jot down what two-phase registration means.',
      },
    ],
  },
  takeaways: {
    step: 8,
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    cards: [
      {
        title: 'React prop names and native event names are mapped internally.',
        body: 'You write onClick but the browser fires click.',
        tone: 'blue',
      },
      {
        title: 'Some events need a special mapping.',
        body: 'dblclick, focusin, focusout do not resolve via simple casing.',
        tone: 'teal',
      },
      {
        title: 'This registration becomes the basis for listener collection.',
        body: 'You need the right mapped prop name to find the correct handler.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'event priority and the dispatch wrapper',
    description:
      'Now that onClick maps to click, follow event priority and how the dispatch wrapper works.',
    cta: 'Go to the next page',
    href: '/dispatch-selection',
  },
};

export const onClickClickContent: Record<Locale, OnClickClickContent> = { ko, en };
