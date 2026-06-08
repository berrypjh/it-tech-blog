import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type RuntimeId = 'jsx' | 'jsxs' | 'jsxDEV';

export type RuntimeFunctionCard = {
  id: RuntimeId;
  name: string;
  body1: string;
  body2: string;
  iconName: 'box' | 'layers' | 'braces';
  tone: ToneKey;
};

export type ComparisonColumn = {
  id: RuntimeId;
  label: string;
  tone: ToneKey;
};

export type ComparisonRow = {
  id: string;
  label: string;
  values: Record<RuntimeId, string>;
};

export type ExampleCard = {
  id: string;
  label: string;
  badge?: string;
  code: string;
  resultRuntime: RuntimeId;
  tone: ToneKey;
};

export type CheckpointCard = {
  id: string;
  number: string;
  filePath: string;
  code: string;
  flowPills: string[];
  tone: ToneKey;
};

export type ChecklistItem = { id: string; text: string };

export type ModeCard = {
  id: 'production' | 'development';
  title: string;
  iconName: 'gauge' | 'bug';
  tone: ToneKey;
  checks: ChecklistItem[];
  miniCode: string;
};

export type JsxRuntimeFunctionsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    runtimeCards: RuntimeFunctionCard[];
    resultTitle: string;
    resultBody: string;
  };
  entryMap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    topLabel: string;
    productionLabel: string;
    devLabel: string;
    productionFunctions: { id: RuntimeId; label: string; note: string; tone: ToneKey }[];
    devFunctions: { id: RuntimeId; label: string; note: string; tone: ToneKey }[];
    bottomLabel: string;
    bottomNote: string;
    a11ySummary: string;
  };
  comparison: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    aspectLabel: string;
    columns: ComparisonColumn[];
    rows: ComparisonRow[];
  };
  examples: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    resultLabel: string;
    cards: ExampleCard[];
  };
  checkpoints: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: CheckpointCard[];
  };
  modes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ModeCard[];
  };
  question: {
    badge: string;
    eyebrow: string;
    title: string;
    question: string;
    hintLabel: string;
    hint: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: JsxRuntimeFunctionsContent = {
  hero: {
    badge: 'Element와 JSX · 3/10단계',
    title: { line1: '컴파일된 JSX는', line2: '어떤 함수로 들어갈까?' },
    description: '현대 React에서는 jsx, jsxs, jsxDEV가 React Element 생성 흐름의 첫 관문입니다.',
    runtimeCards: [
      {
        id: 'jsx',
        name: 'jsx',
        body1: '단일 child 경로',
        body2: '일반 요소 생성',
        iconName: 'box',
        tone: 'sky',
      },
      {
        id: 'jsxs',
        name: 'jsxs',
        body1: '다중 children 경로',
        body2: '최적화된 배열 처리',
        iconName: 'layers',
        tone: 'teal',
      },
      {
        id: 'jsxDEV',
        name: 'jsxDEV',
        body1: '개발 모드 전용',
        body2: '디버깅 & 검증',
        iconName: 'braces',
        tone: 'violet',
      },
    ],
    resultTitle: 'React Element',
    resultBody: 'React 내부에서 사용하는 불변 요소 객체',
  },
  entryMap: {
    badge: '02',
    eyebrow: 'Runtime entry 전체 지도',
    title: 'production runtime과 dev runtime의 입구',
    description:
      '컴파일된 JSX는 react/jsx-runtime 또는 react/jsx-dev-runtime을 거쳐, jsx · jsxs · jsxDEV 중 하나로 들어갑니다.',
    topLabel: 'JSX',
    productionLabel: 'react/jsx-runtime',
    devLabel: 'react/jsx-dev-runtime',
    productionFunctions: [
      { id: 'jsx', label: 'jsx', note: '단일 child 경로', tone: 'sky' },
      { id: 'jsxs', label: 'jsxs', note: '다중 children 경로', tone: 'teal' },
    ],
    devFunctions: [{ id: 'jsxDEV', label: 'jsxDEV', note: '개발 모드 전용', tone: 'violet' }],
    bottomLabel: 'React Element 생성 흐름',
    bottomNote: 'ReactJSXElement.js → Element 객체',
    a11ySummary:
      'JSX → react/jsx-runtime (jsx, jsxs) 또는 react/jsx-dev-runtime (jsxDEV) → React Element 생성 흐름',
  },
  comparison: {
    badge: '03',
    eyebrow: 'jsx / jsxs / jsxDEV 역할 비교',
    title: '세 함수가 맡는 자리, 한 표로 정리',
    description: '같은 React Element를 만들지만, 호출되는 상황과 가진 정보가 다릅니다.',
    aspectLabel: '구분',
    columns: [
      { id: 'jsx', label: 'jsx', tone: 'sky' },
      { id: 'jsxs', label: 'jsxs', tone: 'teal' },
      { id: 'jsxDEV', label: 'jsxDEV', tone: 'violet' },
    ],
    rows: [
      {
        id: 'situation',
        label: '대표 상황',
        values: {
          jsx: '일반 생성 경로',
          jsxs: '여러 정적 children',
          jsxDEV: '개발 모드 + 디버깅 정보',
        },
      },
      {
        id: 'sense',
        label: '핵심 감각',
        values: {
          jsx: '단일 child 또는 일반적인 요소 생성',
          jsxs: 'children 배열이 있는 구조, 다중 children 최적화 감각',
          jsxDEV: '소스 정보와 검증, 파일명, 라인, 컬럼, owner 등',
        },
      },
      {
        id: 'context',
        label: '사용 맥락',
        values: {
          jsx: '프로덕션 기본 경로',
          jsxs: '프로덕션 기본 경로, 여러 children 구조에서 사용',
          jsxDEV: 'development runtime, 개발 모드 전용',
        },
      },
    ],
  },
  examples: {
    badge: '04',
    eyebrow: '예제별 어떤 함수가 쓰이는지 보기',
    title: '같은 JSX, 다른 runtime 함수',
    description: '코드 한 줄이 어떤 함수로 들어가는지 직접 매핑합니다.',
    resultLabel: '결과',
    cards: [
      {
        id: 'single-child',
        label: 'a) 단일 child 예제',
        code: '<h1>Hello</h1>',
        resultRuntime: 'jsx',
        tone: 'sky',
      },
      {
        id: 'multi-children',
        label: 'b) 다중 children 예제',
        code: '<div>\n  <span>A</span>\n  <span>B</span>\n</div>',
        resultRuntime: 'jsxs',
        tone: 'teal',
      },
      {
        id: 'dev-mode',
        label: 'c) 사용자 컴포넌트 예제',
        badge: '개발 모드',
        code: '<MyButton label="저장" />',
        resultRuntime: 'jsxDEV',
        tone: 'violet',
      },
    ],
  },
  checkpoints: {
    badge: '05',
    eyebrow: '실제 코드 체크포인트',
    title: 'React 저장소에서 진입 파일을 직접 봅니다',
    description:
      'jsx-runtime.js와 jsx-dev-runtime.js는 모두 ReactJSX를 거쳐 ReactJSXElement.js로 이어집니다.',
    cards: [
      {
        id: 'prod',
        number: '1',
        filePath: 'packages/react/jsx-runtime.js',
        code: "export { Fragment, jsx, jsxs } from './src/jsx/ReactJSX';",
        flowPills: ['jsx-runtime.js', 'ReactJSX', 'ReactJSXElement.js'],
        tone: 'sky',
      },
      {
        id: 'dev',
        number: '2',
        filePath: 'packages/react/jsx-dev-runtime.js',
        code: "export { Fragment, jsxDEV } from './src/jsx/ReactJSX';",
        flowPills: ['jsx-dev-runtime.js', 'ReactJSX', 'ReactJSXElement.js'],
        tone: 'violet',
      },
    ],
  },
  modes: {
    badge: '06',
    eyebrow: 'dev runtime과 production runtime 비교',
    title: 'jsxDEV가 따로 존재하는 이유',
    description:
      'production runtime은 실행 효율을, development runtime은 디버깅 품질을 우선합니다.',
    cards: [
      {
        id: 'production',
        title: 'production runtime',
        iconName: 'gauge',
        tone: 'sky',
        checks: [
          { id: 'simple', text: '더 간결한 생성 흐름' },
          { id: 'perf', text: '실행 효율 중심' },
        ],
        miniCode: 'jsx(), jsxs()\n→ React Element\n(최소한의 정보)',
      },
      {
        id: 'development',
        title: 'development runtime',
        iconName: 'bug',
        tone: 'teal',
        checks: [
          { id: 'debug-stack', text: 'debug stack' },
          { id: 'source-info', text: 'source 정보' },
          { id: 'warnings', text: '경고와 검증 강화' },
        ],
        miniCode: 'jsxDEV()\n→ React Element\n(+ 소스/디버그 정보)',
      },
    ],
  },
  question: {
    badge: '07',
    eyebrow: '학습 질문',
    title: '한 문장으로 생각해 봅니다',
    question: 'Q. 왜 React는 개발 모드용 runtime을 따로 둘까?',
    hintLabel: '힌트',
    hint: '실행 성능과 디버깅 품질을 동시에 잡기 위해서.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'React.createElement',
    description:
      '현대 JSX Runtime의 입구를 봤다면, 이번에는 직접 React Element를 만드는 공개 API, createElement를 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/create-element',
  },
};

const en: JsxRuntimeFunctionsContent = {
  hero: {
    badge: 'Elements & JSX · 3/10',
    title: { line1: 'Compiled JSX —', line2: 'which function does it enter?' },
    description:
      'In modern React, jsx, jsxs, and jsxDEV are the front door of the React Element creation flow.',
    runtimeCards: [
      {
        id: 'jsx',
        name: 'jsx',
        body1: 'Single-child path',
        body2: 'General element creation',
        iconName: 'box',
        tone: 'sky',
      },
      {
        id: 'jsxs',
        name: 'jsxs',
        body1: 'Multi-children path',
        body2: 'Optimized children arrays',
        iconName: 'layers',
        tone: 'teal',
      },
      {
        id: 'jsxDEV',
        name: 'jsxDEV',
        body1: 'Dev-mode only',
        body2: 'Debugging & validation',
        iconName: 'braces',
        tone: 'violet',
      },
    ],
    resultTitle: 'React Element',
    resultBody: 'The immutable description object React uses internally',
  },
  entryMap: {
    badge: '02',
    eyebrow: 'Runtime entry overview map',
    title: 'Where production and dev runtimes branch',
    description:
      'Compiled JSX goes through react/jsx-runtime or react/jsx-dev-runtime and lands in jsx · jsxs · jsxDEV.',
    topLabel: 'JSX',
    productionLabel: 'react/jsx-runtime',
    devLabel: 'react/jsx-dev-runtime',
    productionFunctions: [
      { id: 'jsx', label: 'jsx', note: 'Single-child path', tone: 'sky' },
      { id: 'jsxs', label: 'jsxs', note: 'Multi-children path', tone: 'teal' },
    ],
    devFunctions: [{ id: 'jsxDEV', label: 'jsxDEV', note: 'Dev-mode only', tone: 'violet' }],
    bottomLabel: 'React Element creation flow',
    bottomNote: 'ReactJSXElement.js → Element object',
    a11ySummary:
      'JSX → react/jsx-runtime (jsx, jsxs) or react/jsx-dev-runtime (jsxDEV) → React Element creation flow',
  },
  comparison: {
    badge: '03',
    eyebrow: 'jsx / jsxs / jsxDEV side by side',
    title: 'Three functions, three roles — at a glance',
    description:
      'They all produce a React Element, but the calling context and embedded info differ.',
    aspectLabel: 'Aspect',
    columns: [
      { id: 'jsx', label: 'jsx', tone: 'sky' },
      { id: 'jsxs', label: 'jsxs', tone: 'teal' },
      { id: 'jsxDEV', label: 'jsxDEV', tone: 'violet' },
    ],
    rows: [
      {
        id: 'situation',
        label: 'Representative case',
        values: {
          jsx: 'General creation path',
          jsxs: 'Multiple static children',
          jsxDEV: 'Dev mode + debugging info',
        },
      },
      {
        id: 'sense',
        label: 'Core feel',
        values: {
          jsx: 'Single child or ordinary element creation',
          jsxs: 'Children array shape; optimized multi-child sense',
          jsxDEV: 'Source info, validation, file/line/column/owner',
        },
      },
      {
        id: 'context',
        label: 'Used in',
        values: {
          jsx: 'Default production path',
          jsxs: 'Default production path with multi-children',
          jsxDEV: 'Development runtime, dev mode only',
        },
      },
    ],
  },
  examples: {
    badge: '04',
    eyebrow: 'Which function lights up for each example',
    title: 'Map JSX snippets to runtime functions',
    description: 'See exactly which function each piece of JSX flows into.',
    resultLabel: 'Result',
    cards: [
      {
        id: 'single-child',
        label: 'a) Single-child example',
        code: '<h1>Hello</h1>',
        resultRuntime: 'jsx',
        tone: 'sky',
      },
      {
        id: 'multi-children',
        label: 'b) Multi-children example',
        code: '<div>\n  <span>A</span>\n  <span>B</span>\n</div>',
        resultRuntime: 'jsxs',
        tone: 'teal',
      },
      {
        id: 'dev-mode',
        label: 'c) User component example',
        badge: 'Dev mode',
        code: '<MyButton label="Save" />',
        resultRuntime: 'jsxDEV',
        tone: 'violet',
      },
    ],
  },
  checkpoints: {
    badge: '05',
    eyebrow: 'Source code checkpoints',
    title: 'Open the actual entry files',
    description:
      'Both jsx-runtime.js and jsx-dev-runtime.js delegate through ReactJSX into ReactJSXElement.js.',
    cards: [
      {
        id: 'prod',
        number: '1',
        filePath: 'packages/react/jsx-runtime.js',
        code: "export { Fragment, jsx, jsxs } from './src/jsx/ReactJSX';",
        flowPills: ['jsx-runtime.js', 'ReactJSX', 'ReactJSXElement.js'],
        tone: 'sky',
      },
      {
        id: 'dev',
        number: '2',
        filePath: 'packages/react/jsx-dev-runtime.js',
        code: "export { Fragment, jsxDEV } from './src/jsx/ReactJSX';",
        flowPills: ['jsx-dev-runtime.js', 'ReactJSX', 'ReactJSXElement.js'],
        tone: 'violet',
      },
    ],
  },
  modes: {
    badge: '06',
    eyebrow: 'Dev runtime vs production runtime',
    title: 'Why jsxDEV exists as a separate module',
    description:
      'Production focuses on execution efficiency; development focuses on debugging quality.',
    cards: [
      {
        id: 'production',
        title: 'production runtime',
        iconName: 'gauge',
        tone: 'sky',
        checks: [
          { id: 'simple', text: 'Leaner creation flow' },
          { id: 'perf', text: 'Execution-efficiency first' },
        ],
        miniCode: 'jsx(), jsxs()\n→ React Element\n(minimal info)',
      },
      {
        id: 'development',
        title: 'development runtime',
        iconName: 'bug',
        tone: 'teal',
        checks: [
          { id: 'debug-stack', text: 'debug stack' },
          { id: 'source-info', text: 'source info' },
          { id: 'warnings', text: 'stronger warnings and validation' },
        ],
        miniCode: 'jsxDEV()\n→ React Element\n(+ source / debug info)',
      },
    ],
  },
  question: {
    badge: '07',
    eyebrow: 'Learning question',
    title: 'One question to chew on',
    question: 'Q. Why does React keep a separate dev-mode runtime?',
    hintLabel: 'Hint',
    hint: 'To balance execution performance and debugging quality at the same time.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'React.createElement',
    description:
      'Now that you have seen the modern JSX runtime entry, next is the public API that builds React Elements directly — createElement.',
    cta: 'Go to the next page',
    href: '/create-element',
  },
};

export const jsxRuntimeFunctionsContent: Record<Locale, JsxRuntimeFunctionsContent> = { ko, en };
