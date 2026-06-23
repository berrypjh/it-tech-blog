import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type HeroCallout = {
  id: string;
  field: string;
  label: string;
  tone: ToneKey;
};

export type SummaryPill = {
  id: string;
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'fileText' | 'monitor' | 'workflow' | 'arrowRight';
};

export type FieldCard = {
  id: '$$typeof' | 'type' | 'key' | 'props' | '_owner';
  field: string;
  title: string;
  short: string;
  body: string;
  iconName: 'fingerprint' | 'box' | 'key' | 'panel' | 'user';
  tone: ToneKey;
};

export type CheckpointInfo = {
  id: string;
  label: string;
  value: string;
  monospaced?: boolean;
};

export type IsValidRow = {
  id: string;
  input: string;
  code: string;
  result: boolean;
  description: string;
};

export type CompareRow = {
  id: string;
  label: string;
  plain: string;
  element: string;
};

export type ReactElementObjectStructureContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    codeCardLabel: string;
    code: string;
    callouts: HeroCallout[];
  };
  overview: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    objectShape: string;
    pills: SummaryPill[];
  };
  fields: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: FieldCard[];
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
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  isValid: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: { input: string; code: string; result: string; description: string };
    trueLabel: string;
    falseLabel: string;
    rows: IsValidRow[];
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: { aspect: string; plain: string; element: string };
    rows: CompareRow[];
    emphasis: string;
  };
  learningCheck: {
    badge: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
    answerNote: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: ReactElementObjectStructureContent = {
  hero: {
    badge: 'Element와 JSX · 5/10단계',
    title: { line1: 'JSX의 실제 결과물은', line2: 'React Element 객체입니다.' },
    description:
      'Element는 화면이 아니라, React에게 무엇을 렌더링할지 설명하는 값입니다. 실제 DOM 노드가 아니라 렌더링 계산을 시작하기 위한 입력 객체입니다.',
    codeCardLabel: 'React Element 예시',
    code: "{\n  $$typeof: Symbol(react.element),\n  type: 'button',\n  key: null,\n  props: {\n    disabled: true,\n    children: '저장'\n  },\n  _owner: null\n}",
    callouts: [
      {
        id: 'typeof',
        field: '$$typeof',
        label: '식별 태그',
        tone: 'cyan',
      },
      {
        id: 'type',
        field: 'type',
        label: '무엇을 렌더링할지',
        tone: 'sky',
      },
      {
        id: 'key',
        field: 'key',
        label: '형제 비교용 키',
        tone: 'indigo',
      },
      {
        id: 'props',
        field: 'props',
        label: '렌더링 입력값',
        tone: 'teal',
      },
      {
        id: 'owner',
        field: '_owner',
        label: '생성한 주체',
        tone: 'violet',
      },
    ],
  },
  overview: {
    badge: '01',
    eyebrow: '전체 구조',
    title: '한눈에 보는 Element 객체 모양',
    description:
      'React Element는 화면이 아니라 설명 객체입니다. 다음 4가지 성격이 이 객체의 위치를 알려줍니다.',
    objectShape: '{\n  $$typeof: REACT_ELEMENT_TYPE,\n  type,\n  key,\n  props,\n  _owner\n}',
    pills: [
      {
        id: 'description',
        title: '설명 객체',
        body: 'React에게 UI 구조와 데이터를 설명하는 값입니다.',
        tone: 'cyan',
        iconName: 'fileText',
      },
      {
        id: 'not-dom',
        title: 'DOM 아님',
        body: '브라우저의 실제 DOM 노드가 아닙니다.',
        tone: 'sky',
        iconName: 'monitor',
      },
      {
        id: 'not-fiber',
        title: 'Fiber 아님',
        body: '렌더링 계산을 담당하는 Fiber 노드가 아닙니다.',
        tone: 'violet',
        iconName: 'workflow',
      },
      {
        id: 'render-input',
        title: '다음 계산의 입력',
        body: 'reconciler가 계산을 시작할 때의 입력입니다.',
        tone: 'teal',
        iconName: 'arrowRight',
      },
    ],
  },
  fields: {
    badge: '02',
    eyebrow: '필드 해설',
    title: '5개 필드, 각자의 역할',
    description: '각 필드가 무엇을 가리키는지 따로 익혀두면 이후 소스코드가 훨씬 잘 읽힙니다.',
    cards: [
      {
        id: '$$typeof',
        field: '$$typeof',
        title: 'React Element 식별 태그',
        short: 'Symbol(react.element)',
        body: '이 값이 있어야 React는 해당 객체를 React Element라고 인식할 수 있습니다.',
        iconName: 'fingerprint',
        tone: 'cyan',
      },
      {
        id: 'type',
        field: 'type',
        title: '무엇을 렌더링할지',
        short: '문자열 태그 또는 컴포넌트',
        body: "'div' 또는 Button 같은 값으로, 렌더링 대상의 종류를 나타냅니다.",
        iconName: 'box',
        tone: 'sky',
      },
      {
        id: 'key',
        field: 'key',
        title: '형제 목록 비교용 식별자',
        short: '리스트 비교의 힌트',
        body: '리스트에서 형제 사이의 안정적인 식별을 위해 사용됩니다. 없으면 null입니다.',
        iconName: 'key',
        tone: 'indigo',
      },
      {
        id: 'props',
        field: 'props',
        title: '렌더링 입력값',
        short: '컴포넌트에 전달되는 데이터',
        body: '컴포넌트에 전달할 모든 데이터와 children이 저장됩니다.',
        iconName: 'panel',
        tone: 'teal',
      },
      {
        id: '_owner',
        field: '_owner',
        title: '개발 모드 생성 주체 추적',
        short: '디버깅용 메타 정보',
        body: '어떤 컴포넌트가 이 Element를 생성했는지 추적하는 정보입니다. 개발 모드에서 의미가 큽니다.',
        iconName: 'user',
        tone: 'violet',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: '코드 체크포인트',
    title: 'ReactElement 함수에서 객체가 만들어지는 순간',
    description:
      '소스코드는 단순합니다. $$typeof, type, key, props, _owner를 모아 그대로 객체를 반환합니다.',
    fileLabel: '파일',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    functionLabel: '볼 함수',
    functionName: 'ReactElement',
    questionLabel: '학습 질문',
    question: 'Element 객체는 어떤 필드들을 중심으로 만들어질까?',
    code: "function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  const element = {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type,\n    key,\n    props,\n    _owner: owner,\n  };\n\n  if (__DEV__) {\n    element._store = {};\n    Object.defineProperty(element._store, 'validated', {\n      value: false,\n    });\n    element._debugStack = debugStack;\n    element._debugTask = debugTask;\n  }\n\n  return element;\n}",
    primaryCta: 'ReactElement 코드 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
  },
  isValid: {
    badge: '04',
    eyebrow: 'isValidElement',
    title: '어떤 값이 정말 React Element인가요?',
    description:
      'isValidElement는 어떤 값이 React Element인지 확인합니다. 모든 JavaScript 객체가 React Element인 것은 아닙니다.',
    headers: { input: '입력값', code: '코드', result: '결과', description: '설명' },
    trueLabel: 'true',
    falseLabel: 'false',
    rows: [
      {
        id: 'jsx',
        input: '<p />',
        code: 'isValidElement(<p />);',
        result: true,
        description: 'React Element 입니다.',
      },
      {
        id: 'createElement',
        input: "createElement('p')",
        code: "isValidElement(createElement('p'));",
        result: true,
        description: 'React Element 입니다.',
      },
      {
        id: 'string',
        input: "'Hello'",
        code: "isValidElement('Hello');",
        result: false,
        description: 'React Element가 아닙니다.',
      },
    ],
  },
  compare: {
    badge: '05',
    eyebrow: '일반 객체와 비교',
    title: '비슷해 보여도 다른 객체',
    description:
      '평범한 객체와 React Element는 표현은 비슷해도 의미와 사용 목적이 완전히 다릅니다.',
    headers: { aspect: '항목', plain: '일반 객체 { a: 1 }', element: 'React Element' },
    rows: [
      {
        id: 'typeof',
        label: '$$typeof',
        plain: '없음',
        element: 'Symbol(react.element)로 식별됨',
      },
      {
        id: 'render-input',
        label: '렌더링 입력 여부',
        plain: 'React가 해석하지 않는 단순 데이터',
        element: 'React가 렌더링 계산의 입력으로 사용',
      },
      {
        id: 'shape',
        label: 'type / key / props 구조',
        plain: '정해진 구조가 없음',
        element: '정해진 의미와 규칙을 가짐',
      },
      {
        id: 'purpose',
        label: '사용 목적',
        plain: '임의 데이터 저장',
        element: 'UI 구조 설명 및 렌더링 계산 설명 객체',
      },
    ],
    emphasis: 'React Element는 단순한 object처럼 보이지만, React가 해석하는 특별한 객체다.',
  },
  learningCheck: {
    badge: '06',
    eyebrow: '학습 점검',
    title: '한 줄로 정리하기',
    question: 'React Element가 DOM 노드가 아니라는 말은 무슨 뜻일까?',
    answer: '실제 화면 객체가 아니라 렌더링 계산의 입력 객체라는 뜻입니다.',
    answerNote:
      '브라우저 DOM은 renderer가 commit 단계에서 만들어내는 결과이고, Element는 그 이전 단계에서 React가 무엇을, 어떻게 렌더링할지 설명하는 데이터입니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'type의 의미',
    description:
      'Element 전체 구조를 봤다면, 이제 그 안의 핵심 값 중 하나인 type이 정확히 무엇을 가리키는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/element-type',
  },
};

const en: ReactElementObjectStructureContent = {
  hero: {
    badge: 'Elements & JSX · 5/10',
    title: { line1: 'The real output of JSX is', line2: 'a React Element object.' },
    description:
      'A React Element is not a screen — it is a value that tells React what to render. It is not a DOM node; it is the input object that starts a render computation.',
    codeCardLabel: 'React Element example',
    code: "{\n  $$typeof: Symbol(react.element),\n  type: 'button',\n  key: null,\n  props: {\n    disabled: true,\n    children: 'Save'\n  },\n  _owner: null\n}",
    callouts: [
      {
        id: 'typeof',
        field: '$$typeof',
        label: 'Identity tag',
        tone: 'cyan',
      },
      {
        id: 'type',
        field: 'type',
        label: 'What to render',
        tone: 'sky',
      },
      {
        id: 'key',
        field: 'key',
        label: 'Sibling identity',
        tone: 'indigo',
      },
      {
        id: 'props',
        field: 'props',
        label: 'Render input',
        tone: 'teal',
      },
      {
        id: 'owner',
        field: '_owner',
        label: 'Created by',
        tone: 'violet',
      },
    ],
  },
  overview: {
    badge: '01',
    eyebrow: 'FULL SHAPE',
    title: 'Element object, at a glance',
    description:
      'A React Element is a description object, not a screen. Four traits locate it precisely.',
    objectShape: '{\n  $$typeof: REACT_ELEMENT_TYPE,\n  type,\n  key,\n  props,\n  _owner\n}',
    pills: [
      {
        id: 'description',
        title: 'Description object',
        body: 'It describes UI structure and data for React.',
        tone: 'cyan',
        iconName: 'fileText',
      },
      {
        id: 'not-dom',
        title: 'Not a DOM node',
        body: 'It is not the actual DOM node in the browser.',
        tone: 'sky',
        iconName: 'monitor',
      },
      {
        id: 'not-fiber',
        title: 'Not a Fiber',
        body: 'It is not the Fiber node that drives render computation.',
        tone: 'violet',
        iconName: 'workflow',
      },
      {
        id: 'render-input',
        title: 'Input for the next step',
        body: 'It is the input the reconciler starts its computation from.',
        tone: 'teal',
        iconName: 'arrowRight',
      },
    ],
  },
  fields: {
    badge: '02',
    eyebrow: 'FIELD BREAKDOWN',
    title: 'Five fields, five roles',
    description: 'Knowing each field separately makes the source code easier to follow.',
    cards: [
      {
        id: '$$typeof',
        field: '$$typeof',
        title: 'React Element identity tag',
        short: 'Symbol(react.element)',
        body: 'Without this marker, React cannot tell that the value is a React Element.',
        iconName: 'fingerprint',
        tone: 'cyan',
      },
      {
        id: 'type',
        field: 'type',
        title: 'What to render',
        short: 'A string tag or a component',
        body: "A value like 'div' or Button — the kind of thing to render.",
        iconName: 'box',
        tone: 'sky',
      },
      {
        id: 'key',
        field: 'key',
        title: 'Sibling list identity',
        short: 'A hint for list diffing',
        body: 'Provides stable identity across siblings in a list. null when not used.',
        iconName: 'key',
        tone: 'indigo',
      },
      {
        id: 'props',
        field: 'props',
        title: 'Render input',
        short: 'Data handed to the component',
        body: 'Holds all data passed to the component plus children.',
        iconName: 'panel',
        tone: 'teal',
      },
      {
        id: '_owner',
        field: '_owner',
        title: 'Dev-mode creator trace',
        short: 'Metadata for debugging',
        body: 'Tracks which component created this Element. Mostly meaningful in dev mode.',
        iconName: 'user',
        tone: 'violet',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'CODE CHECKPOINT',
    title: 'See ReactElement build the object',
    description:
      'The source is simple: collect $$typeof, type, key, props, _owner and return the object as-is.',
    fileLabel: 'File',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    functionLabel: 'Function',
    functionName: 'ReactElement',
    questionLabel: 'Learning question',
    question: 'Around which fields is the Element object built?',
    code: "function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  const element = {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type,\n    key,\n    props,\n    _owner: owner,\n  };\n\n  if (__DEV__) {\n    element._store = {};\n    Object.defineProperty(element._store, 'validated', {\n      value: false,\n    });\n    element._debugStack = debugStack;\n    element._debugTask = debugTask;\n  }\n\n  return element;\n}",
    primaryCta: 'Read ReactElement source',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
  },
  isValid: {
    badge: '04',
    eyebrow: 'ISVALIDELEMENT',
    title: 'Which values are actually React Elements?',
    description:
      'isValidElement checks whether a value is a React Element. Not every JS object is one.',
    headers: { input: 'Input', code: 'Code', result: 'Result', description: 'Note' },
    trueLabel: 'true',
    falseLabel: 'false',
    rows: [
      {
        id: 'jsx',
        input: '<p />',
        code: 'isValidElement(<p />);',
        result: true,
        description: 'A React Element.',
      },
      {
        id: 'createElement',
        input: "createElement('p')",
        code: "isValidElement(createElement('p'));",
        result: true,
        description: 'A React Element.',
      },
      {
        id: 'string',
        input: "'Hello'",
        code: "isValidElement('Hello');",
        result: false,
        description: 'Not a React Element.',
      },
    ],
  },
  compare: {
    badge: '05',
    eyebrow: 'VS PLAIN OBJECT',
    title: 'They look similar — they are not',
    description:
      'A plain object and a React Element may both be objects, but their meaning and purpose differ.',
    headers: { aspect: 'Aspect', plain: 'Plain object { a: 1 }', element: 'React Element' },
    rows: [
      {
        id: 'typeof',
        label: '$$typeof',
        plain: 'None',
        element: 'Identified by Symbol(react.element)',
      },
      {
        id: 'render-input',
        label: 'Used as render input?',
        plain: 'Not interpreted by React',
        element: 'Used as the input of render computation',
      },
      {
        id: 'shape',
        label: 'type / key / props shape',
        plain: 'No fixed shape',
        element: 'Has a defined meaning and rules',
      },
      {
        id: 'purpose',
        label: 'Purpose',
        plain: 'Stores arbitrary data',
        element: 'Describes UI and seeds render computation',
      },
    ],
    emphasis:
      'A React Element looks like a plain object — but it is a special object that React interprets.',
  },
  learningCheck: {
    badge: '06',
    eyebrow: 'SELF CHECK',
    title: 'Put it in one sentence',
    question: 'What does it mean that a React Element is not a DOM node?',
    answer: 'It is not the on-screen object — it is the input object for render computation.',
    answerNote:
      'The browser DOM is what the renderer commits at the end. The Element is the description React reasons over before that.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'what type means',
    description:
      'You have seen the full Element shape; next, see exactly what type inside it points to.',
    cta: 'Go to the next page',
    href: '/element-type',
  },
};

export const reactElementObjectStructureContent: Record<
  Locale,
  ReactElementObjectStructureContent
> = { ko, en };
