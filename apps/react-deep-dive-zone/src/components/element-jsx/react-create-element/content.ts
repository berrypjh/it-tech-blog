import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type ComparisonSideCard = {
  id: 'jsx' | 'create-element';
  label: string;
  code: string;
  body: string;
  tone: ToneKey;
};

export type InputCard = {
  id: 'type' | 'props' | 'children';
  number: string;
  title: string;
  body: string;
  description: string;
  iconName: 'box' | 'sliders' | 'users';
  tone: ToneKey;
};

export type CheckpointInfo = {
  id: string;
  label: string;
  value: string;
};

export type FlowStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  iconName: 'code' | 'sliders' | 'workflow' | 'atom';
  tone: ToneKey;
};

export type RelationCard = {
  id: 'runtime' | 'create-element' | 'goal';
  title: string;
  subtitle?: string;
  body: string;
  iconName: 'braces' | 'functionSquare' | 'target';
  tone: ToneKey;
};

export type FieldCallout = {
  id: string;
  field: string;
  description: string;
  tone: ToneKey;
};

export type ReactCreateElementContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    leftCardLabel: string;
    leftCode: string;
    rightCardLabel: string;
    rightCode: string;
    resultTitle: string;
    resultBody: string;
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    leftCard: ComparisonSideCard;
    centerQuote: string;
    centerSub: string;
    rightCard: ComparisonSideCard;
  };
  input: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    signature: string;
    cards: InputCard[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    infos: CheckpointInfo[];
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  flow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
    bottomNoteLine1: string;
    bottomNoteLine2: string;
  };
  relation: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: RelationCard[];
    resultLabel: string;
    resultNote: string;
  };
  transform: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    tabs: { id: 'jsx' | 'create-element' | 'result'; label: string }[];
    jsxLabel: string;
    jsxCode: string;
    jsxFooter: string;
    expressionLabel: string;
    expressionCode: string;
    expressionFooter: string;
    resultLabel: string;
    resultCode: string;
    callouts: FieldCallout[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: ReactCreateElementContent = {
  hero: {
    badge: 'Element와 JSX · 4/10단계',
    title: {
      line1: 'JSX를 쓴다고 해서',
      line2: 'createElement가',
      line3: '사라진 것은 아닙니다.',
    },
    description:
      'createElement는 React Element를 직접 만드는 공개 API이며, JSX의 내부 목표를 가장 직관적으로 보여줍니다.',
    leftCardLabel: 'JSX 문법',
    leftCode: '<button disabled>저장</button>',
    rightCardLabel: '명시적 API',
    rightCode: "createElement('button', { disabled: true }, '저장');",
    resultTitle: 'React Element',
    resultBody: 'React가 이해할 수 있는 불변 객체',
  },
  compare: {
    badge: '01',
    eyebrow: 'JSX와 비교',
    title: '같은 결과로 가는 두 표현',
    description:
      '문법은 다르지만, JSX와 createElement는 결국 같은 React Element 생성으로 이어집니다.',
    leftCard: {
      id: 'jsx',
      label: 'JSX',
      code: '<button disabled>저장</button>',
      body: '가독성이 좋은 선언형 문법',
      tone: 'sky',
    },
    centerQuote: '표현은 다르지만,\n둘 다 React Element\n생성으로 이어진다.',
    centerSub: '결국 같은 객체가 만들어집니다',
    rightCard: {
      id: 'create-element',
      label: 'createElement',
      code: "createElement('button', { disabled: true }, '저장');",
      body: '명시적인 함수 호출 표현',
      tone: 'violet',
    },
  },
  input: {
    badge: '02',
    eyebrow: '입력 구조',
    title: '함수 시그니처를 한눈에',
    description:
      'createElement는 세 가지 입력을 받아 React Element 생성에 필요한 정보를 정리합니다.',
    signature: 'createElement(type, props, ...children)',
    cards: [
      {
        id: 'type',
        number: '1',
        title: 'type',
        body: '무엇을 렌더링할지',
        description:
          "문자열('div' 등) 또는 컴포넌트 함수/클래스, React가 어떤 것을 만들지 결정합니다.",
        iconName: 'box',
        tone: 'sky',
      },
      {
        id: 'props',
        number: '2',
        title: 'props',
        body: '어떤 입력을 전달할지',
        description: '속성, 이벤트 핸들러, key, ref 등 컴포넌트에 전달할 설정 값들의 모음입니다.',
        iconName: 'sliders',
        tone: 'teal',
      },
      {
        id: 'children',
        number: '3',
        title: 'children',
        body: '어떤 하위 구조를 가질지',
        description: '문자, 숫자, React Element, 배열 등 자식으로 들어갈 내용을 의미합니다.',
        iconName: 'users',
        tone: 'emerald',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: '코드 체크포인트',
    title: 'React 저장소에서 createElement 본문 보기',
    description:
      'key 추출 → props 정리 → ReactElement 호출. createElement 함수는 단지 입력을 정리하는 얇은 층입니다.',
    infos: [
      {
        id: 'file',
        label: '파일',
        value: 'packages/react/src/jsx/ReactJSXElement.js',
      },
      {
        id: 'function',
        label: '볼 함수',
        value: 'createElement',
      },
      {
        id: 'question',
        label: '학습 질문',
        value: 'createElement는 어떤 값들을 정리한 뒤 ReactElement를 호출할까?',
      },
    ],
    code: "function createElement(type, config, children) {\n  let key = null;\n\n  if (config != null) {\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    }\n  }\n\n  const props = {};\n  // ...attributes 정리 (props에 복사)\n\n  return ReactElement(type, key, props, children);\n}",
    primaryCta: 'createElement 코드 열기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
  },
  flow: {
    badge: '04',
    eyebrow: 'Element 변환 흐름',
    title: '4단계로 정리되는 호출 경로',
    description: 'createElement는 직접 DOM을 만들지 않습니다. 정리한 값을 다음 함수로 넘깁니다.',
    steps: [
      {
        id: 'call',
        number: '01',
        title: 'createElement',
        body: '요청을 시작하는 공개 API 함수',
        iconName: 'code',
        tone: 'sky',
      },
      {
        id: 'prepare',
        number: '02',
        title: 'type / key / props 정리',
        body: 'key 추출 및 props 정제 작업 수행',
        iconName: 'sliders',
        tone: 'violet',
      },
      {
        id: 'react-element',
        number: '03',
        title: 'ReactElement 호출',
        body: 'ReactElement(type, key, props, children) 호출',
        iconName: 'workflow',
        tone: 'teal',
      },
      {
        id: 'object',
        number: '04',
        title: 'Element 객체 생성',
        body: '불변 React Element 객체가 반환됨',
        iconName: 'atom',
        tone: 'emerald',
      },
    ],
    bottomNoteLine1: 'createElement는 직접 DOM을 만들지 않는다.',
    bottomNoteLine2: 'React Element는 설명 객체일 뿐, 실제 UI 적용은 Reconciler가 담당한다.',
  },
  relation: {
    badge: '05',
    eyebrow: 'Runtime과 관계',
    title: '두 경로, 같은 목적지',
    description:
      'jsx 런타임은 컴파일 경로, createElement는 공개 API 경로. 결국 둘 다 동일한 React Element를 만듭니다.',
    cards: [
      {
        id: 'runtime',
        title: 'jsx / jsxs / jsxDEV',
        subtitle: '현대 JSX Transform 경로',
        body: '컴파일러가 삽입하는 전용 함수를 더 작은 코드, 더 나은 최적화 목적으로 사용합니다.',
        iconName: 'braces',
        tone: 'sky',
      },
      {
        id: 'create-element',
        title: 'createElement',
        subtitle: '공개 API 경로',
        body: '명시적으로 호출하는 공개 API이며 언제든 사용할 수 있는 안정적 인터페이스입니다.',
        iconName: 'functionSquare',
        tone: 'violet',
      },
      {
        id: 'goal',
        title: '경로는 다르지만\n목적지는 같다.',
        body: 'React는 두 경로 모두에서 동일한 React Element를 생성합니다.',
        iconName: 'target',
        tone: 'teal',
      },
    ],
    resultLabel: 'React Element 생성',
    resultNote: 'ReactJSXElement.js → Element 객체',
  },
  transform: {
    badge: '06',
    eyebrow: '변환 체험',
    title: 'JSX → createElement → 객체 구조',
    description: '하나의 JSX가 함수 호출 식을 거쳐 어떤 객체로 정착되는지 한 화면에서 따라갑니다.',
    tabs: [
      { id: 'jsx', label: 'JSX' },
      { id: 'create-element', label: 'createElement' },
      { id: 'result', label: '공통 결과' },
    ],
    jsxLabel: 'JSX 입력',
    jsxCode: '<MyCard title="공지" />',
    jsxFooter: '컴파일 이전의 선언형 표현',
    expressionLabel: 'createElement 표현',
    expressionCode: "createElement(MyCard, { title: '공지' });",
    expressionFooter: '명시적 함수 호출 형태',
    resultLabel: 'React Element 객체 구조',
    resultCode:
      "{\n  type: MyCard,\n  key: null,\n  props: {\n    title: '공지',\n    children: undefined\n  }\n}",
    callouts: [
      { id: 'type', field: 'type', description: '컴포넌트 또는 문자열', tone: 'sky' },
      { id: 'key', field: 'key', description: '리스트 키 없으면 null', tone: 'violet' },
      { id: 'props', field: 'props', description: '전달된 props 객체', tone: 'teal' },
      {
        id: 'children',
        field: 'props.children',
        description: '자식이 없으면 undefined',
        tone: 'emerald',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'React Element 객체 구조',
    description:
      'createElement가 실제로 Element 생성 흐름으로 이어진다는 점을 알았다면, 이제 React Element 객체 자체를 해부해봅니다.',
    cta: '다음 페이지로 이동',
    href: '/element-structure',
  },
};

const en: ReactCreateElementContent = {
  hero: {
    badge: 'Elements & JSX · 4/10',
    title: {
      line1: 'Using JSX does not',
      line2: 'make createElement',
      line3: 'go away.',
    },
    description:
      'createElement is the public API that builds React Elements directly — it shows the goal of JSX in its most explicit form.',
    leftCardLabel: 'JSX syntax',
    leftCode: '<button disabled>Save</button>',
    rightCardLabel: 'Explicit API',
    rightCode: "createElement('button', { disabled: true }, 'Save');",
    resultTitle: 'React Element',
    resultBody: 'The immutable object React understands',
  },
  compare: {
    badge: '01',
    eyebrow: 'JSX VS CREATEELEMENT',
    title: 'Two expressions, one destination',
    description:
      'The syntax differs, but JSX and createElement both end in the same React Element creation.',
    leftCard: {
      id: 'jsx',
      label: 'JSX',
      code: '<button disabled>Save</button>',
      body: 'A readable declarative syntax',
      tone: 'sky',
    },
    centerQuote: 'Different expressions,\nsame React Element\ncreation flow.',
    centerSub: 'They land on the same object',
    rightCard: {
      id: 'create-element',
      label: 'createElement',
      code: "createElement('button', { disabled: true }, 'Save');",
      body: 'An explicit function call',
      tone: 'violet',
    },
  },
  input: {
    badge: '02',
    eyebrow: 'INPUT SHAPE',
    title: 'The function signature, at a glance',
    description: 'createElement takes three inputs and arranges them for React Element creation.',
    signature: 'createElement(type, props, ...children)',
    cards: [
      {
        id: 'type',
        number: '1',
        title: 'type',
        body: 'What to render',
        description:
          "A string ('div') or a component function/class — what React should actually create.",
        iconName: 'box',
        tone: 'sky',
      },
      {
        id: 'props',
        number: '2',
        title: 'props',
        body: 'What to pass in',
        description: 'Attributes, handlers, key, ref — all configuration handed to the component.',
        iconName: 'sliders',
        tone: 'teal',
      },
      {
        id: 'children',
        number: '3',
        title: 'children',
        body: 'What goes inside',
        description: 'Strings, numbers, React Elements, arrays — whatever sits as children.',
        iconName: 'users',
        tone: 'emerald',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Open the createElement body in the repo',
    description:
      'Extract the key, collect the props, hand off to ReactElement. createElement is a thin organizing layer.',
    infos: [
      {
        id: 'file',
        label: 'File',
        value: 'packages/react/src/jsx/ReactJSXElement.js',
      },
      {
        id: 'function',
        label: 'Function',
        value: 'createElement',
      },
      {
        id: 'question',
        label: 'Learning question',
        value: 'What values does createElement organize before calling ReactElement?',
      },
    ],
    code: "function createElement(type, config, children) {\n  let key = null;\n\n  if (config != null) {\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    }\n  }\n\n  const props = {};\n  // ...copy attributes into props\n\n  return ReactElement(type, key, props, children);\n}",
    primaryCta: 'Open createElement source',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
  },
  flow: {
    badge: '04',
    eyebrow: 'TO ELEMENT',
    title: 'Four-step call path',
    description:
      'createElement does not touch the DOM. It cleans up the input and hands it down the line.',
    steps: [
      {
        id: 'call',
        number: '01',
        title: 'createElement',
        body: 'The public API that opens the request',
        iconName: 'code',
        tone: 'sky',
      },
      {
        id: 'prepare',
        number: '02',
        title: 'Organize type / key / props',
        body: 'Extract key and clean up props',
        iconName: 'sliders',
        tone: 'violet',
      },
      {
        id: 'react-element',
        number: '03',
        title: 'Call ReactElement',
        body: 'ReactElement(type, key, props, children)',
        iconName: 'workflow',
        tone: 'teal',
      },
      {
        id: 'object',
        number: '04',
        title: 'Element object is born',
        body: 'An immutable React Element is returned',
        iconName: 'atom',
        tone: 'emerald',
      },
    ],
    bottomNoteLine1: 'createElement does not produce DOM.',
    bottomNoteLine2:
      'A React Element is a description; turning it into UI is the Reconciler’s job.',
  },
  relation: {
    badge: '05',
    eyebrow: 'VS RUNTIME',
    title: 'Two paths, one destination',
    description:
      'The jsx runtime is a compile-time path; createElement is the public API path. Both produce the same React Element.',
    cards: [
      {
        id: 'runtime',
        title: 'jsx / jsxs / jsxDEV',
        subtitle: 'Modern JSX transform path',
        body: 'Compiler-inserted runtime helpers — smaller code, better optimization.',
        iconName: 'braces',
        tone: 'sky',
      },
      {
        id: 'create-element',
        title: 'createElement',
        subtitle: 'Public API path',
        body: 'An explicit public API — a stable interface you can call any time.',
        iconName: 'functionSquare',
        tone: 'violet',
      },
      {
        id: 'goal',
        title: 'Different paths,\nsame destination.',
        body: 'React lands on the very same React Element either way.',
        iconName: 'target',
        tone: 'teal',
      },
    ],
    resultLabel: 'React Element creation',
    resultNote: 'ReactJSXElement.js → Element object',
  },
  transform: {
    badge: '06',
    eyebrow: 'INTERACTIVE',
    title: 'JSX → createElement → object shape',
    description: 'Watch a single JSX line travel through the function call into its object form.',
    tabs: [
      { id: 'jsx', label: 'JSX' },
      { id: 'create-element', label: 'createElement' },
      { id: 'result', label: 'Result' },
    ],
    jsxLabel: 'JSX input',
    jsxCode: '<MyCard title="Notice" />',
    jsxFooter: 'The declarative form before compilation',
    expressionLabel: 'createElement expression',
    expressionCode: "createElement(MyCard, { title: 'Notice' });",
    expressionFooter: 'The explicit function-call form',
    resultLabel: 'React Element object',
    resultCode:
      "{\n  type: MyCard,\n  key: null,\n  props: {\n    title: 'Notice',\n    children: undefined\n  }\n}",
    callouts: [
      { id: 'type', field: 'type', description: 'Component or string', tone: 'sky' },
      { id: 'key', field: 'key', description: 'null if no list key', tone: 'violet' },
      { id: 'props', field: 'props', description: 'The passed props', tone: 'teal' },
      {
        id: 'children',
        field: 'props.children',
        description: 'undefined when there are no children',
        tone: 'emerald',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'React Element object structure',
    description:
      'Now that you know createElement leads into Element creation, next, dissect the React Element object itself.',
    cta: 'Go to the next page',
    href: '/element-structure',
  },
};

export const reactCreateElementContent: Record<Locale, ReactCreateElementContent> = { ko, en };
