import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FlowStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  iconName: 'code' | 'gear' | 'box' | 'atom';
  tone: ToneKey;
};

export type CheckPoint = {
  id: string;
  text: string;
};

export type ReasonCard = {
  id: string;
  title: string;
  body: string;
  iconName: 'link' | 'gauge' | 'fileText';
  tone: ToneKey;
};

export type ExampleLegend = {
  id: 'jsx' | 'jsxs' | 'jsxDEV';
  label: string;
  description: string;
  tone: ToneKey;
};

export type TransformExample = {
  id: string;
  title: string;
  jsx: string;
  compiled: string;
  description: string;
  legendId: ExampleLegend['id'];
};

export type BenefitCard = {
  id: string;
  title: string;
  body: string;
  iconName: 'tree' | 'calculator' | 'shieldCheck';
  tone: ToneKey;
};

export type JsxTransformFlowContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    inputCode: string;
    inputCaption: string;
    inputNote: string;
    compileLabel: string;
    compileNote: string;
    outputCode: string;
    outputCaption: string;
    outputNote: string;
  };
  compileFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
  };
  comparison: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sampleTitle: string;
    sampleCode: string;
    sampleLabel: string;
    oldTitle: string;
    oldVersion: string;
    oldCode: string;
    oldChecks: CheckPoint[];
    modernTitle: string;
    modernVersion: string;
    modernCode: string;
    modernChecks: CheckPoint[];
    sameResultTitle: string;
    sameResultBody: string;
    banner: string;
  };
  react19: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    smallBadge: string;
    cards: ReasonCard[];
  };
  examples: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    tabJsxLabel: string;
    tabCompiledLabel: string;
    descriptionLabel: string;
    compiledLabel: string;
    previewLabel: string;
    legend: ExampleLegend[];
    examples: TransformExample[];
    bottomNote: string;
  };
  benefits: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: BenefitCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: JsxTransformFlowContent = {
  hero: {
    badge: 'Element와 JSX · 2/10단계',
    title: { line1: 'JSX는', line2: '그대로 실행되지 않습니다.' },
    description:
      '컴파일러는 JSX를 React가 실행할 수 있는 함수 호출 코드로 바꿉니다. 이 페이지에서 그 흐름을 단계별로 따라갑니다.',
    inputCode: '<MyButton />',
    inputCaption: 'src/App.jsx',
    inputNote: '우리가 작성한 JSX (JavaScript 안의 문법)',
    compileLabel: 'compile',
    compileNote: '컴파일러가 분석하고 함수 호출 코드로 변환',
    outputCode: 'jsx(MyButton, {});',
    outputCaption: 'compiled.js',
    outputNote: 'React가 이해할 수 있는 함수 호출 형태의 코드',
  },
  compileFlow: {
    badge: '01',
    eyebrow: '컴파일 흐름',
    title: 'JSX는 실행 전에 4단계를 거칩니다',
    description:
      '우리가 쓴 JSX는 그대로 실행되지 않습니다. 컴파일 → 함수 호출 코드 → React Element 객체의 순서로 이어집니다.',
    steps: [
      {
        id: 'write',
        number: '01',
        title: 'JSX 작성',
        body: '우리가 JSX 문법으로 UI 구조를 작성합니다.',
        iconName: 'code',
        tone: 'teal',
      },
      {
        id: 'compile',
        number: '02',
        title: '컴파일러 처리',
        body: 'Babel 등 컴파일러가 JSX를 변환합니다.',
        iconName: 'gear',
        tone: 'sky',
      },
      {
        id: 'function-call',
        number: '03',
        title: '함수 호출 코드 생성',
        body: 'jsx / jsxs / jsxDEV 또는 createElement 호출 코드로 변환됩니다.',
        iconName: 'box',
        tone: 'violet',
      },
      {
        id: 'element',
        number: '04',
        title: 'React Element 생성',
        body: '함수 호출이 실행되어 React Element 객체가 생성됩니다.',
        iconName: 'atom',
        tone: 'emerald',
      },
    ],
  },
  comparison: {
    badge: '02',
    eyebrow: '과거 vs 현대',
    title: '같은 JSX, 두 가지 변환 결과',
    description:
      'React 17 전후로 JSX가 컴파일되는 결과 형태가 달라졌습니다. 표현은 다르지만 결과는 모두 React Element입니다.',
    sampleTitle: '같은 JSX 예시',
    sampleCode: '<h1>Hello</h1>',
    sampleLabel: 'JSX',
    oldTitle: '과거 방식',
    oldVersion: 'React < 17',
    oldCode: "React.createElement('h1', null, 'Hello');",
    oldChecks: [
      { id: 'all-create', text: '모든 JSX가 createElement 호출로 변환됨' },
      { id: 'bundle-size', text: '변환 크기 증가 가능' },
      { id: 'verbose', text: '코드가 장황해질 수 있음' },
    ],
    modernTitle: '현대 방식',
    modernVersion: 'React 17+',
    modernCode: "jsx('h1', { children: 'Hello' });",
    modernChecks: [
      { id: 'jsx-runtime', text: 'jsx / jsxs / jsxDEV 런타임 함수 사용' },
      { id: 'import-only', text: '필요한 import만 사용 → 번들 최적화' },
      { id: 'concise', text: '더 간결하고 효율적인 코드 생성' },
    ],
    sameResultTitle: '같은 결과',
    sameResultBody: 'React Element 생성 흐름으로 이어짐',
    banner: '표현은 달라졌지만, 둘 다 React Element 생성 흐름으로 이어진다.',
  },
  react19: {
    badge: '03',
    eyebrow: '새 Transform 기준',
    title: '저장소를 읽는 기준점을 맞춥니다',
    description:
      'React 19 코드를 읽을 때는 현대 JSX Transform이 기본입니다. 그 이유는 단순히 “더 새것이라서”가 아닙니다.',
    smallBadge: 'React 19 최신 기준',
    cards: [
      {
        id: 'ref-as-prop',
        title: 'ref as prop과 연결된다',
        body: 'React 19의 ref as prop 모델은 새 JSX Transform 기준의 런타임과 함께 설계되었습니다.',
        iconName: 'link',
        tone: 'teal',
      },
      {
        id: 'perf',
        title: 'JSX 처리 성능 개선과 맞물린다',
        body: '불필요한 createElement 호출을 줄이고 필요한 함수만 가져와 사용하여 더 나은 성능을 제공합니다.',
        iconName: 'gauge',
        tone: 'sky',
      },
      {
        id: 'repo-flow',
        title: '현대 React 저장소 흐름을 읽기에 더 적합하다',
        body: 'react-reconciler와 renderer가 기대하는 입력 형태를 최신 JSX Transform을 기준으로 설명합니다.',
        iconName: 'fileText',
        tone: 'violet',
      },
    ],
  },
  examples: {
    badge: '04',
    eyebrow: '변환 비교',
    title: 'JSX와 컴파일 결과를 나란히 봅니다',
    description:
      '두 예제를 통해 jsx와 jsxs가 어떻게 다르게 호출되는지 직접 비교합니다. 탭으로 JSX와 결과를 전환할 수 있습니다.',
    tabJsxLabel: 'JSX 보기',
    tabCompiledLabel: '컴파일 결과 보기',
    descriptionLabel: '설명',
    compiledLabel: '컴파일 결과',
    previewLabel: '미리보기',
    legend: [
      { id: 'jsx', label: 'jsx', description: '단일 child', tone: 'teal' },
      { id: 'jsxs', label: 'jsxs', description: '여러 children', tone: 'violet' },
      { id: 'jsxDEV', label: 'jsxDEV', description: '개발 모드 전용', tone: 'amber' },
    ],
    examples: [
      {
        id: 'single',
        title: '예제 1 · 단일 컴포넌트',
        jsx: '<MyButton label="저장" />',
        compiled:
          "import { jsx as _jsx } from 'react/jsx-runtime';\n\n_jsx(MyButton, { label: '저장' });",
        description: 'jsx — 단일 child 또는 child가 없을 때 사용',
        legendId: 'jsx',
      },
      {
        id: 'multi',
        title: '예제 2 · 여러 children',
        jsx: '<div>\n  <span>A</span>\n  <span>B</span>\n</div>',
        compiled:
          "import { jsxs as _jsxs, jsx as _jsx } from 'react/jsx-runtime';\n\n_jsxs('div', {\n  children: [\n    _jsx('span', { children: 'A' }),\n    _jsx('span', { children: 'B' }),\n  ],\n});",
        description: 'jsxs — 여러 children을 가진 요소에 사용',
        legendId: 'jsxs',
      },
    ],
    bottomNote:
      '개발 모드에서는 동일한 구조라도 jsxDEV가 사용되어 소스 정보, 검증, 경고 메시지에 활용됩니다.',
  },
  benefits: {
    badge: '05',
    eyebrow: '함수 호출의 이점',
    title: '함수 호출이 되는 순간, 가능해지는 것들',
    description:
      '단순한 문법 차원의 변화가 아닙니다. 함수 호출로 바뀌면 React가 트리 구조를 다룰 수 있는 입구가 열립니다.',
    cards: [
      {
        id: 'data',
        title: '트리 구조를 데이터처럼 다룰 수 있다',
        body: 'UI 구조가 객체 형태의 데이터로 표현되어 저장, 비교, 순회, 분석이 쉬워집니다.',
        iconName: 'tree',
        tone: 'teal',
      },
      {
        id: 'render-input',
        title: 'React가 렌더링 계산에 사용할 입력이 생긴다',
        body: 'Element → Fiber → Render 계산으로 이어지는 파이프라인의 첫 입력이 됩니다.',
        iconName: 'calculator',
        tone: 'sky',
      },
      {
        id: 'devmode',
        title: '개발 모드에서 검증과 경고를 추가하기 쉽다',
        body: 'jsxDEV가 포함하는 정보로 더 정확한 에러 메시지와 경고를 제공합니다.',
        iconName: 'shieldCheck',
        tone: 'emerald',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'jsx / jsxs / jsxDEV',
    description:
      'JSX가 함수 호출로 바뀐다는 점을 알았다면, 이제 그 중심에 있는 jsx / jsxs / jsxDEV가 각각 어떤 역할을 하는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/jsx-runtime',
  },
};

const en: JsxTransformFlowContent = {
  hero: {
    badge: 'Elements & JSX · 2/10',
    title: { line1: 'JSX does not', line2: 'run as-is.' },
    description:
      'A compiler turns JSX into function-call code that React can run. This page walks through that flow step by step.',
    inputCode: '<MyButton />',
    inputCaption: 'src/App.jsx',
    inputNote: 'JSX we wrote — syntax inside JavaScript',
    compileLabel: 'compile',
    compileNote: 'The compiler analyzes JSX and rewrites it as a function call',
    outputCode: 'jsx(MyButton, {});',
    outputCaption: 'compiled.js',
    outputNote: 'Function-call code that React can understand',
  },
  compileFlow: {
    badge: '01',
    eyebrow: 'COMPILE FLOW',
    title: 'JSX goes through four steps before it runs',
    description:
      'JSX does not execute as-is. The path is compile → function-call code → React Element object.',
    steps: [
      {
        id: 'write',
        number: '01',
        title: 'Write JSX',
        body: 'We describe UI structure with JSX syntax.',
        iconName: 'code',
        tone: 'teal',
      },
      {
        id: 'compile',
        number: '02',
        title: 'Compiler processes it',
        body: 'A compiler such as Babel transforms the JSX.',
        iconName: 'gear',
        tone: 'sky',
      },
      {
        id: 'function-call',
        number: '03',
        title: 'Function-call code emitted',
        body: 'Converted to jsx / jsxs / jsxDEV — or createElement — calls.',
        iconName: 'box',
        tone: 'violet',
      },
      {
        id: 'element',
        number: '04',
        title: 'React Element created',
        body: 'The function call runs and produces a React Element object.',
        iconName: 'atom',
        tone: 'emerald',
      },
    ],
  },
  comparison: {
    badge: '02',
    eyebrow: 'OLD VS MODERN',
    title: 'Same JSX, two compile outputs',
    description:
      'Around React 17 the compile output shape changed. The expression differs, but both still land on a React Element.',
    sampleTitle: 'Same JSX example',
    sampleCode: '<h1>Hello</h1>',
    sampleLabel: 'JSX',
    oldTitle: 'Old transform',
    oldVersion: 'React < 17',
    oldCode: "React.createElement('h1', null, 'Hello');",
    oldChecks: [
      { id: 'all-create', text: 'Every JSX node becomes a createElement call' },
      { id: 'bundle-size', text: 'Larger compiled output' },
      { id: 'verbose', text: 'Code can read verbosely' },
    ],
    modernTitle: 'Modern transform',
    modernVersion: 'React 17+',
    modernCode: "jsx('h1', { children: 'Hello' });",
    modernChecks: [
      { id: 'jsx-runtime', text: 'Uses jsx / jsxs / jsxDEV runtime helpers' },
      { id: 'import-only', text: 'Imports only what is needed — better bundles' },
      { id: 'concise', text: 'More concise, efficient output' },
    ],
    sameResultTitle: 'Same result',
    sameResultBody: 'Both lead into React Element creation',
    banner: 'The expression differs — both still lead to React Element creation.',
  },
  react19: {
    badge: '03',
    eyebrow: 'WHY MODERN',
    title: 'Pin the baseline before reading the repo',
    description:
      'When reading React 19 code, the modern JSX transform is the assumption. The reason is not just “newer.”',
    smallBadge: 'React 19 baseline',
    cards: [
      {
        id: 'ref-as-prop',
        title: 'It is tied to ref as prop',
        body: "React 19's ref-as-prop model was designed alongside the modern JSX transform runtime.",
        iconName: 'link',
        tone: 'teal',
      },
      {
        id: 'perf',
        title: 'It pairs with JSX performance improvements',
        body: 'Fewer createElement calls and on-demand imports yield a better runtime story.',
        iconName: 'gauge',
        tone: 'sky',
      },
      {
        id: 'repo-flow',
        title: 'It matches the repo flow you read today',
        body: 'react-reconciler and renderers describe their expected input in terms of the modern transform.',
        iconName: 'fileText',
        tone: 'violet',
      },
    ],
  },
  examples: {
    badge: '04',
    eyebrow: 'COMPARE OUTPUT',
    title: 'JSX side-by-side with what it becomes',
    description:
      'Two examples — see how jsx and jsxs differ. Use the tabs to flip between JSX and the compiled output.',
    tabJsxLabel: 'JSX',
    tabCompiledLabel: 'Compiled',
    descriptionLabel: 'Notes',
    compiledLabel: 'Compiled output',
    previewLabel: 'Preview',
    legend: [
      { id: 'jsx', label: 'jsx', description: 'Single child', tone: 'teal' },
      { id: 'jsxs', label: 'jsxs', description: 'Multiple children', tone: 'violet' },
      { id: 'jsxDEV', label: 'jsxDEV', description: 'Dev-mode only', tone: 'amber' },
    ],
    examples: [
      {
        id: 'single',
        title: 'Example 1 · Single component',
        jsx: '<MyButton label="Save" />',
        compiled:
          "import { jsx as _jsx } from 'react/jsx-runtime';\n\n_jsx(MyButton, { label: 'Save' });",
        description: 'jsx — used when there is one child or no children.',
        legendId: 'jsx',
      },
      {
        id: 'multi',
        title: 'Example 2 · Multiple children',
        jsx: '<div>\n  <span>A</span>\n  <span>B</span>\n</div>',
        compiled:
          "import { jsxs as _jsxs, jsx as _jsx } from 'react/jsx-runtime';\n\n_jsxs('div', {\n  children: [\n    _jsx('span', { children: 'A' }),\n    _jsx('span', { children: 'B' }),\n  ],\n});",
        description: 'jsxs — used when an element has multiple children.',
        legendId: 'jsxs',
      },
    ],
    bottomNote:
      'In development the same shape compiles to jsxDEV, which carries source info for validation and warnings.',
  },
  benefits: {
    badge: '05',
    eyebrow: 'BENEFITS',
    title: 'Function calls open the door for the rest of React',
    description:
      'This is not only a syntax change. Function calls make the UI tree something React can manipulate.',
    cards: [
      {
        id: 'data',
        title: 'You can treat the tree as data',
        body: 'UI is now an object you can store, compare, traverse, and analyze.',
        iconName: 'tree',
        tone: 'teal',
      },
      {
        id: 'render-input',
        title: "It becomes React's render input",
        body: 'It is the first input to the Element → Fiber → Render pipeline.',
        iconName: 'calculator',
        tone: 'sky',
      },
      {
        id: 'devmode',
        title: 'Easier dev-mode validation and warnings',
        body: 'jsxDEV carries source info that powers more accurate error messages.',
        iconName: 'shieldCheck',
        tone: 'emerald',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'jsx / jsxs / jsxDEV',
    description:
      'Now that you know JSX becomes function calls, next, see what jsx / jsxs / jsxDEV each actually do.',
    cta: 'Go to the next page',
    href: '/jsx-runtime',
  },
};

export const jsxTransformFlowContent: Record<Locale, JsxTransformFlowContent> = { ko, en };
